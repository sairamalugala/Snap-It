(this["webpackJsonpSnap-It"]=this["webpackJsonpSnap-It"]||[]).push([[98],{174:function(t,n,e){!function(t){"use strict";t.defineMode("solr",(function(){var t=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,n=/[\|\!\+\-\*\?\~\^\&]/,e=/^(OR|AND|NOT|TO)$/i;function r(t){return parseFloat(t).toString()===t}function o(t){return function(n,e){for(var r,o=!1;null!=(r=n.next())&&(r!=t||o);)o=!o&&"\\"==r;return o||(e.tokenize=a),"string"}}function i(t){return function(n,e){var r="operator";return"+"==t?r+=" positive":"-"==t?r+=" negative":"|"==t?n.eat(/\|/):"&"==t?n.eat(/\&/):"^"==t&&(r+=" boost"),e.tokenize=a,r}}function u(n){return function(o,i){for(var u=n;(n=o.peek())&&null!=n.match(t);)u+=o.next();return i.tokenize=a,e.test(u)?"operator":r(u)?"number":":"==o.peek()?"field":"string"}}function a(e,r){var s=e.next();return'"'==s?r.tokenize=o(s):n.test(s)?r.tokenize=i(s):t.test(s)&&(r.tokenize=u(s)),r.tokenize!=a?r.tokenize(e,r):null}return{startState:function(){return{tokenize:a}},token:function(t,n){return t.eatSpace()?null:n.tokenize(t,n)}}})),t.defineMIME("text/x-solr","solr")}(e(3))}}]);
//# sourceMappingURL=98.c0457582.chunk.js.map