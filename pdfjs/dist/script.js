var doc = new jsPDF('l', 'pt', 'a4', false);
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

    doc.setFontSize(20);
    // doc.autoTable({
    //     theme: 'grid',
    //     html: '#table',
    //     // ここでフォントの指定をしないとテーブル内部の文字が化ける
    //     // styles: { font: 'Koruri-Regular', fontStyle: 'normal', fontSize: 12 }
    // });
    doc.save('sample-file.pdf');

    // doc.output('dataurlnewwindow');
    // print2newTab(doc)
});

// function print2newTab(doc){
//   var string = doc.output('datauristring');
//   var x = window.open();
//   x.document.open();
//   x.document.location=string;
// }

function utf16_to_hexcode(str) {
    var strText = str.replace(/[A-Za-z0-9]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
    });
    var tmpCode = "";
    var strCode = "";
    var strTmpCode = "";
    var arr = strText.split('');
    var intArr = Number(arr.length);
    for (var i = 0; i < intArr; i++) {
        strCode = strCode + escape(arr[i]).replace(/%u/g, "");
    }
    return strCode;
};

// 半角を全角に変換する。
function han2zen(str) {
    str = str.toString();
    var zenkaku = '';
    str.split('').forEach(function (s) {
        zenkaku += String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
    });
    return zenkaku;
}