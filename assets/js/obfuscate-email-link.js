// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ coded = "hjta.S7a2ajaG@gGavgSEQkQa.aq4"
  key = "tZdzD4ib5SC6kOVsemJKHUrRpgjfAQTq8lx7c0uwLhnWEa2Y91NG3FvMIBoyXP"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
  document.write("<a alt='email' href='mailto:"+link+"'><span class='showtooltip' title='email me'><i class='fa fa-envelope'></i></span></a>")
}
