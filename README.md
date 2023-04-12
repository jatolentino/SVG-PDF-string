![Github All Releases](https://img.shields.io/github/downloads/jatolentino/SVG-PDF-string/total?logo=GitHub&style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/jatolentino/SVG-PDF-string)
![GitHub language count](https://img.shields.io/github/languages/count/jatolentino/SVG-PDF-string?color=success&logo=CodersRank&logoColor=%23FFFFFF)
[![version](https://img.shields.io/badge/version-1.8-red.svg)](//npmjs.com/package/SVG-PDF-string)

# SVG-PDF-string

<p align="center">
    	<img src="https://github.com/jatolentino/SVG-PDF-string/blob/0a184df97393508e2abc89f18001d4ee6bc347ae/sample.jpg">
</p>

## Specifications:
The pdf file is a predefined template whose letters are not images

## Consideration to add the SVG file as a string
### 1. Font type and size
- First check the font type of the pdf file with LibreOffice (also size, why not :))
- 1.1 If you don't have the font on your PC (verify on a blank inkscape file), install the ttf font (download it from the internet)

### 2 Export SVG
Export the pdf with LibreOffice Drawing to svg (use LibreOffice because the svg output is of version 1.2)

### 3. SVG version
Check svg version, open the exported svg file with Notepad++ and verify => version="1.2"

### 4. SVG properties
Next, open the svg file with Inkscape and change the units of the document (a4 or letter, depending of your jsPDF configs), pt is preferebly because it's easy to calculate distances.
See the file distances-svg-jspdf.jpg

### 5. Correct SVG width and height
Open the SVG file again with Notepad++ and edit:
width="612pt" ==> width="612" (implied to be pt cause of jsPDF configs)
height="792pt" ==> height="792"
    
### 6. Import SVG as string
Import the svg file as a string (Convert to single line svg file):
Copy the svg file text from notepad <svg> ... </svg> and go to https://w3percentagecalculator.com/multiline-to-single-line-converter/, afterwards paste the string
in a constant in JS like:
var svgElement1 = '<svg version="1.2" width="612" height="792" viewBox="0 0 21590 27940" preserveAspectRatio="xMidYMid" fill-rule="evenodd" stroke-width="28.222" stroke- linejoin="round" xml:space="preserve" .... </svg>'


### 7. Verify implementation of jsPDF (javascript)
In your JS file
var doc = new jsPDF('p','pt','letter'); //portrait: p, units: pt, size: letter
doc.setFont("Helvetica","regular");
