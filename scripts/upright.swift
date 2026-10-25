// Helper for prep-photos.sh. Usage: swift upright.swift <max-px> <out-dir> <image>...
//
// For each image (HEIC, JPEG, PNG, ...), writes <out-dir>/<name>.png that is:
//   - rotated upright (phones often store a rotation flag instead of rotated
//     pixels, and cwebp ignores that flag),
//   - scaled so its long edge is at most <max-px> (never enlarged),
//   - converted to sRGB (iPhones shoot Display P3),
//   - stripped of all metadata, including GPS location.
// <name> is the original filename, lowercased, with spaces as hyphens.

import CoreGraphics
import Foundation
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
guard args.count >= 4, let maxPx = Int(args[1]) else {
    FileHandle.standardError.write("usage: upright.swift <max-px> <out-dir> <image>...\n".data(using: .utf8)!)
    exit(2)
}
let outDir = URL(fileURLWithPath: args[2])
let srgb = CGColorSpace(name: CGColorSpace.sRGB)!
var failed = false

for path in args[3...] {
    let url = URL(fileURLWithPath: path)
    guard let src = CGImageSourceCreateWithURL(url as CFURL, nil),
          let props = CGImageSourceCopyPropertiesAtIndex(src, 0, nil) as? [CFString: Any],
          let w = props[kCGImagePropertyPixelWidth] as? Int,
          let h = props[kCGImagePropertyPixelHeight] as? Int
    else {
        print("  skip  \(url.lastPathComponent): not a readable image")
        failed = true
        continue
    }

    let options: [CFString: Any] = [
        kCGImageSourceCreateThumbnailFromImageAlways: true,
        kCGImageSourceCreateThumbnailWithTransform: true,
        kCGImageSourceThumbnailMaxPixelSize: min(maxPx, max(w, h)),
    ]
    guard let scaled = CGImageSourceCreateThumbnailAtIndex(src, 0, options as CFDictionary) else {
        print("  skip  \(url.lastPathComponent): could not resize")
        failed = true
        continue
    }

    // Redraw into an sRGB canvas; cwebp doesn't carry color profiles over.
    let ctx = CGContext(
        data: nil, width: scaled.width, height: scaled.height, bitsPerComponent: 8,
        bytesPerRow: 0, space: srgb, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
    ctx.draw(scaled, in: CGRect(x: 0, y: 0, width: scaled.width, height: scaled.height))

    let name = url.deletingPathExtension().lastPathComponent
        .lowercased().replacingOccurrences(of: " ", with: "-")
    let outURL = outDir.appendingPathComponent(name + ".png")
    let dest = CGImageDestinationCreateWithURL(outURL as CFURL, UTType.png.identifier as CFString, 1, nil)!
    CGImageDestinationAddImage(dest, ctx.makeImage()!, nil)
    if !CGImageDestinationFinalize(dest) {
        print("  skip  \(url.lastPathComponent): could not write")
        failed = true
    }
}

exit(failed ? 1 : 0)
