import{j as d,s as b,B as x,T as S,D as X,H as A}from"./index-BVtsqaoS.js";import{c as B,u as G,e as V,A as z}from"./api.url-D1CGx735.js";const J=B(d.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack"),$=B(d.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");function g(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function P(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const I=6048e5,U=864e5;let K={};function Y(){return K}function W(t,e){var c,u,h,l;const n=Y(),r=(e==null?void 0:e.weekStartsOn)??((u=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((l=(h=n.locale)==null?void 0:h.options)==null?void 0:l.weekStartsOn)??0,a=g(t),o=a.getDay(),s=(o<r?7:0)+o-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function T(t){return W(t,{weekStartsOn:1})}function Q(t){const e=g(t),n=e.getFullYear(),r=P(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=T(r),o=P(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=T(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function j(t){const e=g(t);return e.setHours(0,0,0,0),e}function F(t){const e=g(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Z(t,e){const n=j(t),r=j(e),a=+n-F(n),o=+r-F(r);return Math.round((a-o)/U)}function tt(t){const e=Q(t),n=P(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),T(n)}function et(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function nt(t){if(!et(t)&&typeof t!="number")return!1;const e=g(t);return!isNaN(Number(e))}function rt(t){const e=g(t),n=P(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const at={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ot=(t,e,n)=>{let r;const a=at[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function C(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const it={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},st={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ct={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ut={date:C({formats:it,defaultWidth:"full"}),time:C({formats:st,defaultWidth:"full"}),dateTime:C({formats:ct,defaultWidth:"full"})},dt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ht=(t,e,n,r)=>dt[t];function v(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,c=n!=null&&n.width?String(n.width):s;a=t.formattingValues[c]||t.formattingValues[s]}else{const s=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[c]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(e):e;return a[o]}}const ft={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},lt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},mt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},gt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},wt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},yt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},bt=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},pt={ordinalNumber:bt,era:v({values:ft,defaultWidth:"wide"}),quarter:v({values:lt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:v({values:mt,defaultWidth:"wide"}),day:v({values:gt,defaultWidth:"wide"}),dayPeriod:v({values:wt,defaultWidth:"wide",formattingValues:yt,defaultFormattingWidth:"wide"})};function D(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const s=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(c)?Pt(c,w=>w.test(s)):xt(c,w=>w.test(s));let h;h=t.valueCallback?t.valueCallback(u):u,h=n.valueCallback?n.valueCallback(h):h;const l=e.slice(s.length);return{value:h,rest:l}}}function xt(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Pt(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Mt(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],o=e.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const c=e.slice(a.length);return{value:s,rest:c}}}const Ot=/^(\d+)(th|st|nd|rd)?/i,kt=/\d+/i,vt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Dt={any:[/^b/i,/^(a|c)/i]},Wt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},St={any:[/1/i,/2/i,/3/i,/4/i]},Tt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Yt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Et={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ct={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},jt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ft={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Nt={ordinalNumber:Mt({matchPattern:Ot,parsePattern:kt,valueCallback:t=>parseInt(t,10)}),era:D({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:Dt,defaultParseWidth:"any"}),quarter:D({matchPatterns:Wt,defaultMatchWidth:"wide",parsePatterns:St,defaultParseWidth:"any",valueCallback:t=>t+1}),month:D({matchPatterns:Tt,defaultMatchWidth:"wide",parsePatterns:Yt,defaultParseWidth:"any"}),day:D({matchPatterns:Et,defaultMatchWidth:"wide",parsePatterns:Ct,defaultParseWidth:"any"}),dayPeriod:D({matchPatterns:jt,defaultMatchWidth:"any",parsePatterns:Ft,defaultParseWidth:"any"})},qt={code:"en-US",formatDistance:ot,formatLong:ut,formatRelative:ht,localize:pt,match:Nt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ht(t){const e=g(t);return Z(e,rt(e))+1}function Lt(t){const e=g(t),n=+T(e)-+tt(e);return Math.round(n/I)+1}function _(t,e){var l,w,O,k;const n=g(t),r=n.getFullYear(),a=Y(),o=(e==null?void 0:e.firstWeekContainsDate)??((w=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:w.firstWeekContainsDate)??a.firstWeekContainsDate??((k=(O=a.locale)==null?void 0:O.options)==null?void 0:k.firstWeekContainsDate)??1,s=P(t,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const c=W(s,e),u=P(t,0);u.setFullYear(r,0,o),u.setHours(0,0,0,0);const h=W(u,e);return n.getTime()>=c.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function Bt(t,e){var c,u,h,l;const n=Y(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((l=(h=n.locale)==null?void 0:h.options)==null?void 0:l.firstWeekContainsDate)??1,a=_(t,e),o=P(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),W(o,e)}function It(t,e){const n=g(t),r=+W(n,e)-+Bt(n,e);return Math.round(r/I)+1}function i(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const y={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return i(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):i(n+1,2)},d(t,e){return i(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return i(t.getHours()%12||12,e.length)},H(t,e){return i(t.getHours(),e.length)},m(t,e){return i(t.getMinutes(),e.length)},s(t,e){return i(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return i(a,e.length)}},M={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},N={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y.y(t,e)},Y:function(t,e,n,r){const a=_(t,r),o=a>0?a:1-a;if(e==="YY"){const s=o%100;return i(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):i(o,e.length)},R:function(t,e){const n=Q(t);return i(n,e.length)},u:function(t,e){const n=t.getFullYear();return i(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return i(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return i(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return y.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return i(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=It(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):i(a,e.length)},I:function(t,e,n){const r=Lt(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):i(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):y.d(t,e)},D:function(t,e,n){const r=Ht(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):i(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return i(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return i(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return i(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=M.noon:r===0?a=M.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=M.evening:r>=12?a=M.afternoon:r>=4?a=M.morning:a=M.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):y.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):i(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):i(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):y.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):y.s(t,e)},S:function(t,e){return y.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return H(r);case"XXXX":case"XX":return p(r);case"XXXXX":case"XXX":default:return p(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return H(r);case"xxxx":case"xx":return p(r);case"xxxxx":case"xxx":default:return p(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+q(r,":");case"OOOO":default:return"GMT"+p(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+q(r,":");case"zzzz":default:return"GMT"+p(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return i(r,e.length)},T:function(t,e,n){const r=t.getTime();return i(r,e.length)}};function q(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+e+i(o,2)}function H(t,e){return t%60===0?(t>0?"-":"+")+i(Math.abs(t)/60,2):p(t,e)}function p(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=i(Math.trunc(r/60),2),o=i(r%60,2);return n+a+e+o}const L=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},R=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Qt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return L(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",L(r,e)).replace("{{time}}",R(a,e))},_t={p:R,P:Qt},Rt=/^D+$/,Xt=/^Y+$/,At=["D","DD","YY","YYYY"];function Gt(t){return Rt.test(t)}function Vt(t){return Xt.test(t)}function zt(t,e,n){const r=Jt(t,e,n);if(console.warn(r),At.includes(t))throw new RangeError(r)}function Jt(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $t=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Kt=/^'([^]*?)'?$/,Zt=/''/g,te=/[a-zA-Z]/;function ee(t,e,n){var l,w,O,k;const r=Y(),a=r.locale??qt,o=r.firstWeekContainsDate??((w=(l=r.locale)==null?void 0:l.options)==null?void 0:w.firstWeekContainsDate)??1,s=r.weekStartsOn??((k=(O=r.locale)==null?void 0:O.options)==null?void 0:k.weekStartsOn)??0,c=g(t);if(!nt(c))throw new RangeError("Invalid time value");let u=e.match(Ut).map(m=>{const f=m[0];if(f==="p"||f==="P"){const E=_t[f];return E(m,a.formatLong)}return m}).join("").match($t).map(m=>{if(m==="''")return{isToken:!1,value:"'"};const f=m[0];if(f==="'")return{isToken:!1,value:ne(m)};if(N[f])return{isToken:!0,value:m};if(f.match(te))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");return{isToken:!1,value:m}});a.localize.preprocessor&&(u=a.localize.preprocessor(c,u));const h={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return u.map(m=>{if(!m.isToken)return m.value;const f=m.value;(Vt(f)||Gt(f))&&zt(f,e,String(t));const E=N[f[0]];return E(c,f,a.localize,h)}).join("")}function ne(t){const e=t.match(Kt);return e?e[1].replace(Zt,"'"):t}const re=b(x)({padding:15,display:"flex",alignItems:"center"}),ae=b(x)({display:"flex",justifyContent:"space-between",alignItems:"center",paddingRight:"2vw"}),oe=b(S)({fontSize:22,margin:"10px 0 20px 75px",display:"flex",alignItems:"center"}),ie=b(x)`
  font-size: 12px !important;
  background: #ddd;
  color: #222;
  border-radius: 4px;
  margin-left: 6px;
  padding: 2px 4px;
  align-self: center;
`,se=b("img")({borderRadius:"50%",width:40,height:40,margin:"5px 10px 0 10px",backgroundColor:"#cccccc"}),ce=b(x)({marginLeft:15,width:"100%","& > div":{display:"flex",alignItems:"center","& > p > span":{fontSize:12,color:"#5E5E5E"}}}),ue=b(x)({display:"flex",alignItems:"center",padding:"10px 0",borderBottom:"1px solid #ddd",marginBottom:20}),de=b(S)({whiteSpace:"pre-wrap"}),le=()=>{const{openDrawer:t}=X(),{state:e}=A(),{email:n}=e,r=ee(new Date(n.date),"PPpp"),a=G(z.deleteEmails),o=()=>{a.call([n._id]),window.history.back()};return d.jsxs(x,{style:t?{marginLeft:250,width:"calc(100% - 250px)"}:{width:"100%"},children:[d.jsxs(re,{children:[d.jsx(J,{fontSize:"small",color:"action",onClick:()=>window.history.back()}),d.jsx($,{fontSize:"small",color:"action",style:{marginLeft:40},onClick:o})]}),d.jsxs(oe,{children:[n.subject," ",d.jsx(ie,{component:"span",children:"Inbox"})]}),d.jsxs(ue,{children:[d.jsx(se,{src:V,alt:"profile"}),d.jsx(ce,{children:d.jsxs(ae,{children:[d.jsxs(S,{children:[n.to.split("@")[0],d.jsxs(x,{component:"span",children:[" <",n.to,">"]})]}),d.jsx(S,{variant:"body2",color:"textSecondary",children:r})]})})]}),d.jsx(de,{className:"pl-4",children:n.body})]})};export{le as default};