
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {   
    doc.fromHTML($('#content').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    // doc.save('sample-file.pdf');
  doc.output('dataurlnewwindow');
    // print2newTab(doc)
});

// function print2newTab(doc){
//   var string = doc.output('datauristring');
//   var x = window.open();
//   x.document.open();
//   x.document.location=string;
// }

