(this["webpackJsonpredux-with-multiple-reducers"]=this["webpackJsonpredux-with-multiple-reducers"]||[]).push([[49],{118:function(e,t,n){!function(e){"use strict";e.defineMode("eiffel",(function(){function e(e){for(var t={},n=0,r=e.length;n<r;++n)t[e[n]]=!0;return t}var t=e(["note","across","when","variant","until","unique","undefine","then","strip","select","retry","rescue","require","rename","reference","redefine","prefix","once","old","obsolete","loop","local","like","is","inspect","infix","include","if","frozen","from","external","export","ensure","end","elseif","else","do","creation","create","check","alias","agent","separate","invariant","inherit","indexing","feature","expanded","deferred","class","Void","True","Result","Precursor","False","Current","create","attached","detachable","as","and","implies","not","or"]),n=e([":=","and then","and","or","<<",">>"]);function r(e,t,n){return n.tokenize.push(e),e(t,n)}function i(e,t){if(e.eatSpace())return null;var n=e.next();return'"'==n||"'"==n?r(a(n,"string"),e,t):"-"==n&&e.eat("-")?(e.skipToEnd(),"comment"):":"==n&&e.eat("=")?"operator":/[0-9]/.test(n)?(e.eatWhile(/[xXbBCc0-9\.]/),e.eat(/[\?\!]/),"ident"):/[a-zA-Z_0-9]/.test(n)?(e.eatWhile(/[a-zA-Z_0-9]/),e.eat(/[\?\!]/),"ident"):/[=+\-\/*^%<>~]/.test(n)?(e.eatWhile(/[=+\-\/*^%<>~]/),"operator"):null}function a(e,t,n){return function(r,i){for(var a,o=!1;null!=(a=r.next());){if(a==e&&(n||!o)){i.tokenize.pop();break}o=!o&&"%"==a}return t}}return{startState:function(){return{tokenize:[i]}},token:function(e,r){var i=r.tokenize[r.tokenize.length-1](e,r);if("ident"==i){var a=e.current();i=t.propertyIsEnumerable(e.current())?"keyword":n.propertyIsEnumerable(e.current())?"operator":/^[A-Z][A-Z_0-9]*$/g.test(a)?"tag":/^0[bB][0-1]+$/g.test(a)||/^0[cC][0-7]+$/g.test(a)||/^0[xX][a-fA-F0-9]+$/g.test(a)||/^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(a)||/^[0-9]+$/g.test(a)?"number":"variable"}return i},lineComment:"--"}})),e.defineMIME("text/x-eiffel","eiffel")}(n(3))}}]);
//# sourceMappingURL=49.4ae6e155.chunk.js.map