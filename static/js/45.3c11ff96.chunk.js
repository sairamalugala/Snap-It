(this["webpackJsonpredux-with-multiple-reducers"]=this["webpackJsonpredux-with-multiple-reducers"]||[]).push([[45],{114:function(t,e,n){!function(t){"use strict";t.defineMode("dtd",(function(t){var e,n=t.indentUnit;function r(t,n){return e=n,t}function u(t,e){var n=t.next();if("<"!=n||!t.eat("!")){if("<"==n&&t.eat("?"))return e.tokenize=c("meta","?>"),r("meta",n);if("#"==n&&t.eatWhile(/[\w]/))return r("atom","tag");if("|"==n)return r("keyword","separator");if(n.match(/[\(\)\[\]\-\.,\+\?>]/))return r(null,n);if(n.match(/[\[\]]/))return r("rule",n);if('"'==n||"'"==n)return e.tokenize=i(n),e.tokenize(t,e);if(t.eatWhile(/[a-zA-Z\?\+\d]/)){var u=t.current();return null!==u.substr(u.length-1,u.length).match(/\?|\+/)&&t.backUp(1),r("tag","tag")}return"%"==n||"*"==n?r("number","number"):(t.eatWhile(/[\w\\\-_%.{,]/),r(null,null))}return t.eatWhile(/[\-]/)?(e.tokenize=a,a(t,e)):t.eatWhile(/[\w]/)?r("keyword","doindent"):void 0}function a(t,e){for(var n,a=0;null!=(n=t.next());){if(a>=2&&">"==n){e.tokenize=u;break}a="-"==n?a+1:0}return r("comment","comment")}function i(t){return function(e,n){for(var a,i=!1;null!=(a=e.next());){if(a==t&&!i){n.tokenize=u;break}i=!i&&"\\"==a}return r("string","tag")}}function c(t,e){return function(n,r){for(;!n.eol();){if(n.match(e)){r.tokenize=u;break}n.next()}return t}}return{startState:function(t){return{tokenize:u,baseIndent:t||0,stack:[]}},token:function(t,n){if(t.eatSpace())return null;var r=n.tokenize(t,n),u=n.stack[n.stack.length-1];return"["==t.current()||"doindent"===e||"["==e?n.stack.push("rule"):"endtag"===e?n.stack[n.stack.length-1]="endtag":"]"==t.current()||"]"==e||">"==e&&"rule"==u?n.stack.pop():"["==e&&n.stack.push("["),r},indent:function(t,r){var u=t.stack.length;return"]"===r.charAt(0)?u--:">"===r.substr(r.length-1,r.length)&&("<"===r.substr(0,1)||"doindent"==e&&r.length>1||("doindent"==e?u--:">"==e&&r.length>1||"tag"==e&&">"!==r||("tag"==e&&"rule"==t.stack[t.stack.length-1]?u--:"tag"==e?u++:">"===r&&"rule"==t.stack[t.stack.length-1]&&">"===e?u--:">"===r&&"rule"==t.stack[t.stack.length-1]||("<"!==r.substr(0,1)&&">"===r.substr(0,1)?u-=1:">"===r||(u-=1)))),null!=e&&"]"!=e||u--),t.baseIndent+u*n},electricChars:"]>"}})),t.defineMIME("application/xml-dtd","dtd")}(n(3))}}]);
//# sourceMappingURL=45.3c11ff96.chunk.js.map