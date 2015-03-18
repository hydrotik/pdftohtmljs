/*
	@author Donovan Adams (github:hydrotik)
	@description Custom preset that strips out extraneous formatting Also see https://github.com/coolwanglu/pdf2htmlEX/wiki/Command-Line-Options

*/
exports.load = function(pdf2htmlex) {
    pdf2htmlex.add_options([
        '--zoom 1.3',
        '--font-format woff',
        '--embed-external-font 0',
        '--embed-css 0',
        '--process-nontext 0',
        '--embed-image 0',
        '--embed-javascript 0',
        '--css-filename tmp.css'

    ]);
    return pdf2htmlex
}
