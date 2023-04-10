const { jsPDF } = window.jspdf

var stringToHTML = function (str) {
			var parser = new DOMParser();
			var doc = parser.parseFromString(str, 'text/html');
			return doc.body;
};
//stringToHTML(svgElement).childNodes[0]

async function updatePdf() {
	
	const svgElement = '<svg width="210" height="297" viewBox="0 0 210 297"> <text style="font: 15px Helvetica, sans-serif;" y="40" x="40">Hello world!</text> </svg>'
	
  //const pdf = new jsPDF('p', 'pt', [width, height])
	const theSVGElement = stringToHTML(svgElement).childNodes[0]
	theSVGElement.getBoundingClientRect()
	const width = theSVGElement.width.baseVal.value
	const height = theSVGElement.height.baseVal.value
	const pdf = new jsPDF('p', 'mm', 'a4')
	
	await pdf.svg(theSVGElement, { width, height }) //defines size of svg, same as a4 size

  document.getElementById('pdf-iframe').setAttribute('src', pdf.output('datauristring'))
}
