﻿
var PageName = '逻辑';
var PageId = '1156d179220b4d4dbd504a4ee74450e6'
var PageUrl = '逻辑.html'
document.title = '逻辑';
var PageNotes = 
{
"pageName":"逻辑",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '28');
  value = value.replace(/\[\[GenMonth\]\]/g, '3');
  value = value.replace(/\[\[GenMonthName\]\]/g, '三月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期四');
  value = value.replace(/\[\[GenYear\]\]/g, '2013');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u86 = document.getElementById('u86');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u16 = document.getElementById('u16');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u31 = document.getElementById('u31');

var u77 = document.getElementById('u77');

var u93 = document.getElementById('u93');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u38 = document.getElementById('u38');

var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u62 = document.getElementById('u62');

var u53 = document.getElementById('u53');

var u87 = document.getElementById('u87');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u66 = document.getElementById('u66');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u30 = document.getElementById('u30');

var u8 = document.getElementById('u8');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u89 = document.getElementById('u89');

var u122 = document.getElementById('u122');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u17 = document.getElementById('u17');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u103 = document.getElementById('u103');

var u79 = document.getElementById('u79');

var u81 = document.getElementById('u81');

var u97 = document.getElementById('u97');

var u118 = document.getElementById('u118');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u85 = document.getElementById('u85');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u45 = document.getElementById('u45');

var u36 = document.getElementById('u36');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u37 = document.getElementById('u37');

var u2 = document.getElementById('u2');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u83 = document.getElementById('u83');

var u95 = document.getElementById('u95');

var u22 = document.getElementById('u22');

var u13 = document.getElementById('u13');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u47 = document.getElementById('u47');

var u68 = document.getElementById('u68');

var u90 = document.getElementById('u90');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u20 = document.getElementById('u20');

var u50 = document.getElementById('u50');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u24 = document.getElementById('u24');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u99 = document.getElementById('u99');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u39 = document.getElementById('u39');

var u111 = document.getElementById('u111');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u78 = document.getElementById('u78');

var u120 = document.getElementById('u120');

var u114 = document.getElementById('u114');

var u4 = document.getElementById('u4');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u6 = document.getElementById('u6');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u26 = document.getElementById('u26');

var u65 = document.getElementById('u65');

var u56 = document.getElementById('u56');

var u116 = document.getElementById('u116');

var u105 = document.getElementById('u105');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u123 = document.getElementById('u123');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');

var u33 = document.getElementById('u33');

var u72 = document.getElementById('u72');

var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u88 = document.getElementById('u88');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u101 = document.getElementById('u101');

var u10 = document.getElementById('u10');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u70 = document.getElementById('u70');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u44 = document.getElementById('u44');

var u117 = document.getElementById('u117');

var u74 = document.getElementById('u74');

var u29 = document.getElementById('u29');

var u59 = document.getElementById('u59');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
if (window.OnLoad) OnLoad();
