(function(){function i(d,a,b){return f(d,a,b,!1)}function f(d,a,b,j){a&&!m(a)&&(b=a,a=void 0);a=a||new Date;b=b||n;b.formats=b.formats||{};var g=0;j&&(g=(a.getTimezoneOffset()||0)*6E4,a=new Date(a.getTime()+g));return d.replace(/%([-_0]?.)/g,function(d,h){var c;if(h.length==2){c=h[0];if(c=="-")c="";else if(c=="_")c=" ";else if(c=="0")c="0";else return d;h=h[1]}switch(h){case "A":return b.days[a.getDay()];case "a":return b.shortDays[a.getDay()];case "B":return b.months[a.getMonth()];case "b":return b.shortMonths[a.getMonth()];
case "C":return e(Math.floor(a.getFullYear()/100),c);case "D":return f(b.formats.D||"%m/%d/%y",a,b);case "d":return e(a.getDate(),c);case "e":return a.getDate();case "F":return f(b.formats.F||"%Y-%m-%d",a,b);case "H":return e(a.getHours(),c);case "h":return b.shortMonths[a.getMonth()];case "I":return e(k(a),c);case "j":return c=new Date(a.getFullYear(),0,1),c=Math.ceil((a.getTime()-c.getTime())/864E5);case "k":return e(a.getHours(),c==null?" ":c);case "L":return e(Math.floor(a.getTime()%1E3),3);case "l":return e(k(a),
c==null?" ":c);case "M":return e(a.getMinutes(),c);case "m":return e(a.getMonth()+1,c);case "n":return"\n";case "P":return a.getHours()<12?b.am:b.pm;case "p":return a.getHours()<12?b.AM:b.PM;case "R":return f(b.formats.R||"%H:%M",a,b);case "r":return f(b.formats.r||"%I:%M:%S %p",a,b);case "S":return e(a.getSeconds(),c);case "s":return Math.floor((a.getTime()-g)/1E3);case "T":return f(b.formats.T||"%H:%M:%S",a,b);case "t":return"\t";case "U":return e(l(a,"sunday"),c);case "u":return c=a.getDay(),c==
0?7:c;case "v":return f(b.formats.v||"%e-%b-%Y",a,b);case "W":return e(l(a,"monday"),c);case "w":return a.getDay();case "Y":return a.getFullYear();case "y":return c=String(a.getFullYear()),c.slice(c.length-2);case "Z":return j?"GMT":(c=a.toString().match(/\((\w+)\)/))&&c[1]||"";case "z":return j?"+0000":(c=a.getTimezoneOffset(),(c<0?"+":"-")+e(Math.abs(c/60))+e(c%60));default:return h}})}function m(d){for(var a=0,b=RequiredDateMethods.length,a=0;a<b;++a)if(typeof d[RequiredDateMethods[a]]!="function")return!1;
return!0}function e(d,a,b){typeof a==="number"&&(b=a,a="0");a==null&&(a="0");b=b||2;d=String(d);if(a)for(;d.length<b;)d=a+d;return d}function k(d){d=d.getHours();d==0?d=12:d>12&&(d-=12);return d}function l(d,a){var a=a||"sunday",b=d.getDay();a=="monday"&&(b==0?b=6:b--);var e=new Date(d.getFullYear(),0,1);return Math.floor(((d-e)/864E5+7-b)/7)}var g;g=typeof module!=="undefined"?module.exports=i:function(){return this||(0,eval)("this")}();g.strftime=i;g.strftimeUTC=function(d,a,b){return f(d,a,b,!0)};
g.localizedStrftime=function(d){return function(a,b){return i(a,b,d)}};var n={days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm"};RequiredDateMethods=["getTime","getTimezoneOffset","getDay","getDate","getMonth","getFullYear",
"getYear","getHours","getMinutes","getSeconds"]})();
