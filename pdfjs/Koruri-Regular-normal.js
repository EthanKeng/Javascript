﻿// import { jsPDF } from "jspdf"
doc = new jsPDF()
var callAddFont = function () {
this.addFileToVFS('Koruri-Regular-normal.ttf', font);
this.addFont('Koruri-Regular-normal.ttf', 'Koruri-Regular', 'normal');
};
doc.API.events.push(['addFonts', callAddFont])