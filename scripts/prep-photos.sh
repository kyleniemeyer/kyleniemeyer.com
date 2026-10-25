#!/usr/bin/env bash
#
# Shrink photos and convert them to WebP.
#
#   scripts/prep-photos.sh <folder> <image>...
#   scripts/prep-photos.sh making/shower-rebuild ~/Downloads/house-projects/*.png
#   scripts/prep-photos.sh books ~/Desktop/shelf.heic
#
# <folder> is relative to static/images/ (a leading "static/images/" is also
# accepted; use . for static/images/ itself). Writes
# static/images/<folder>/<name>.webp for each image: upright, at most SIZE px
# on the long edge, sRGB, with all metadata (including GPS) removed. Existing
# files are left alone unless FORCE=1.
#
# Settings, via environment variables:
#   SIZE=1600     long edge in pixels
#   QUALITY=80    WebP quality, 0-100
#   FORCE=1       overwrite existing .webp files
#
# Needs macOS (for swift and ImageIO) and cwebp (`brew install webp`).

set -euo pipefail

SIZE="${SIZE:-1600}"
QUALITY="${QUALITY:-80}"
FORCE="${FORCE:-0}"

if [[ $# -lt 2 ]]; then
    sed -n '3,7p' "$0" | sed 's/^# \{0,1\}//'
    exit 2
fi
for tool in swift cwebp; do
    command -v "$tool" >/dev/null || { echo "Missing $tool." >&2; exit 1; }
done

folder="${1#static/images/}"
folder="${folder%/}"
shift
if [[ -z "$folder" || "$folder" == /* || "$folder" == *..* ]]; then
    echo "Folder must be inside static/images/, e.g. making/shower-rebuild" \
        "(or . for static/images/ itself)." >&2
    exit 2
fi
[[ "$folder" == . ]] && folder="" || folder="$folder/"
repo="$(cd "$(dirname "$0")/.." && pwd)"
out="$repo/static/images/$folder"
mkdir -p "$out"

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

status=0
swift "$repo/scripts/upright.swift" "$SIZE" "$tmp" "$@" || status=1

for png in "$tmp"/*.png; do
    [[ -e "$png" ]] || break
    name="$(basename "$png" .png)"
    dest="$out$name.webp"
    if [[ -e "$dest" && "$FORCE" != 1 ]]; then
        echo "  exists $name.webp (FORCE=1 to overwrite)"
        continue
    fi
    cwebp -quiet -q "$QUALITY" -metadata none "$png" -o "$dest"
    echo "  wrote  $name.webp ($(( $(stat -f %z "$dest") / 1024 )) KB)"
done

echo "Photos are in static/images/$folder (use /images/$folder<name>.webp)"
exit "$status"
