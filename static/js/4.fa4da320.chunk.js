(this["webpackJsonpredux-with-multiple-reducers"]=this["webpackJsonpredux-with-multiple-reducers"]||[]).push([[4,119],{82:function(t,e,n){!function(t){"use strict";var e={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};t.defineMode("xml",(function(i,r){var a,o,u=i.indentUnit,l={},s=r.htmlMode?e:n;for(var h in s)l[h]=s[h];for(var h in r)l[h]=r[h];function g(t,e){function n(n){return e.tokenize=n,n(t,e)}var i=t.next();return"<"==i?t.eat("!")?t.eat("[")?t.match("CDATA[")?n(d("atom","]]>")):null:t.match("--")?n(d("comment","--\x3e")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),n(f(1))):null:t.eat("?")?(t.eatWhile(/[\w\._\-]/),e.tokenize=d("meta","?>"),"meta"):(a=t.eat("/")?"closeTag":"openTag",e.tokenize=m,"tag bracket"):"&"==i?(t.eat("#")?t.eat("x")?t.eatWhile(/[a-fA-F\d]/)&&t.eat(";"):t.eatWhile(/[\d]/)&&t.eat(";"):t.eatWhile(/[\w\.\-:]/)&&t.eat(";"))?"atom":"error":(t.eatWhile(/[^&<]/),null)}function m(t,e){var n=t.next();if(">"==n||"/"==n&&t.eat(">"))return e.tokenize=g,a=">"==n?"endTag":"selfcloseTag","tag bracket";if("="==n)return a="equals",null;if("<"==n){e.tokenize=g,e.state=D,e.tagName=e.tagStart=null;var i=e.tokenize(t,e);return i?i+" tag error":"tag error"}return/[\'\"]/.test(n)?(e.tokenize=c(n),e.stringStartCol=t.column(),e.tokenize(t,e)):(t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function c(t){var e=function(e,n){for(;!e.eol();)if(e.next()==t){n.tokenize=m;break}return"string"};return e.isInAttribute=!0,e}function d(t,e){return function(n,i){for(;!n.eol();){if(n.match(e)){i.tokenize=g;break}n.next()}return t}}function f(t){return function(e,n){for(var i;null!=(i=e.next());){if("<"==i)return n.tokenize=f(t+1),n.tokenize(e,n);if(">"==i){if(1==t){n.tokenize=g;break}return n.tokenize=f(t-1),n.tokenize(e,n)}}return"meta"}}function k(t,e,n){this.prev=t.context,this.tagName=e||"",this.indent=t.indented,this.startOfLine=n,(l.doNotIndent.hasOwnProperty(e)||t.context&&t.context.noIndent)&&(this.noIndent=!0)}function p(t){t.context&&(t.context=t.context.prev)}function F(t,e){for(var n;;){if(!t.context)return;if(n=t.context.tagName,!l.contextGrabbers.hasOwnProperty(n)||!l.contextGrabbers[n].hasOwnProperty(e))return;p(t)}}function D(t,e,n){return"openTag"==t?(n.tagStart=e.column(),x):"closeTag"==t?v:D}function x(t,e,n){return"word"==t?(n.tagName=e.current(),o="tag",C):l.allowMissingTagName&&"endTag"==t?(o="tag bracket",C(t,e,n)):(o="error",x)}function v(t,e,n){if("word"==t){var i=e.current();return n.context&&n.context.tagName!=i&&l.implicitlyClosed.hasOwnProperty(n.context.tagName)&&p(n),n.context&&n.context.tagName==i||!1===l.matchClosing?(o="tag",E):(o="tag error",A)}return l.allowMissingTagName&&"endTag"==t?(o="tag bracket",E(t,e,n)):(o="error",A)}function E(t,e,n){return"endTag"!=t?(o="error",E):(p(n),D)}function A(t,e,n){return o="error",E(t,e,n)}function C(t,e,n){if("word"==t)return o="attribute",S;if("endTag"==t||"selfcloseTag"==t){var i=n.tagName,r=n.tagStart;return n.tagName=n.tagStart=null,"selfcloseTag"==t||l.autoSelfClosers.hasOwnProperty(i)?F(n,i):(F(n,i),n.context=new k(n,i,r==n.indented)),D}return o="error",C}function S(t,e,n){return"equals"==t?b:(l.allowMissing||(o="error"),C(t,e,n))}function b(t,e,n){return"string"==t?T:"word"==t&&l.allowUnquoted?(o="string",C):(o="error",C(t,e,n))}function T(t,e,n){return"string"==t?T:C(t,e,n)}return g.isInText=!0,{startState:function(t){var e={tokenize:g,state:D,indented:t||0,tagName:null,tagStart:null,context:null};return null!=t&&(e.baseIndent=t),e},token:function(t,e){if(!e.tagName&&t.sol()&&(e.indented=t.indentation()),t.eatSpace())return null;a=null;var n=e.tokenize(t,e);return(n||a)&&"comment"!=n&&(o=null,e.state=e.state(a||n,t,e),o&&(n="error"==o?n+" error":o)),n},indent:function(e,n,i){var r=e.context;if(e.tokenize.isInAttribute)return e.tagStart==e.indented?e.stringStartCol+1:e.indented+u;if(r&&r.noIndent)return t.Pass;if(e.tokenize!=m&&e.tokenize!=g)return i?i.match(/^(\s*)/)[0].length:0;if(e.tagName)return!1!==l.multilineTagIndentPastTag?e.tagStart+e.tagName.length+2:e.tagStart+u*(l.multilineTagIndentFactor||1);if(l.alignCDATA&&/<!\[CDATA\[/.test(n))return 0;var a=n&&/^<(\/)?([\w_:\.-]*)/.exec(n);if(a&&a[1])for(;r;){if(r.tagName==a[2]){r=r.prev;break}if(!l.implicitlyClosed.hasOwnProperty(r.tagName))break;r=r.prev}else if(a)for(;r;){var o=l.contextGrabbers[r.tagName];if(!o||!o.hasOwnProperty(a[2]))break;r=r.prev}for(;r&&r.prev&&!r.startOfLine;)r=r.prev;return r?r.indent+u:e.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:l.htmlMode?"html":"xml",helperType:l.htmlMode?"html":"xml",skipAttribute:function(t){t.state==b&&(t.state=C)},xmlCurrentTag:function(t){return t.tagName?{name:t.tagName,close:"closeTag"==t.type}:null},xmlCurrentContext:function(t){for(var e=[],n=t.context;n;n=n.prev)e.push(n.tagName);return e.reverse()}}})),t.defineMIME("text/xml","xml"),t.defineMIME("application/xml","xml"),t.mimeModes.hasOwnProperty("text/html")||t.defineMIME("text/html",{name:"xml",htmlMode:!0})}(n(3))},95:function(t,e,n){!function(t){"use strict";t.defineMode("markdown",(function(e,n){var i=t.getMode(e,"text/html"),r="null"==i.name;function a(n){if(t.findModeByName){var i=t.findModeByName(n);i&&(n=i.mime||i.mimes[0])}var r=t.getMode(e,n);return"null"==r.name?null:r}void 0===n.highlightFormatting&&(n.highlightFormatting=!1),void 0===n.maxBlockquoteDepth&&(n.maxBlockquoteDepth=0),void 0===n.taskLists&&(n.taskLists=!1),void 0===n.strikethrough&&(n.strikethrough=!1),void 0===n.emoji&&(n.emoji=!1),void 0===n.fencedCodeBlockHighlighting&&(n.fencedCodeBlockHighlighting=!0),void 0===n.fencedCodeBlockDefaultMode&&(n.fencedCodeBlockDefaultMode="text/plain"),void 0===n.xml&&(n.xml=!0),void 0===n.tokenTypeOverrides&&(n.tokenTypeOverrides={});var o={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"};for(var u in o)o.hasOwnProperty(u)&&n.tokenTypeOverrides[u]&&(o[u]=n.tokenTypeOverrides[u]);var l=/^([*\-_])(?:\s*\1){2,}\s*$/,s=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,h=/^\[(x| )\](?=\s)/i,g=n.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,m=/^ {0,3}(?:\={1,}|-{2,})\s*$/,c=/^[^#!\[\]*_\\<>` "'(~:]+/,d=/^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,f=/^\s*\[[^\]]+?\]:.*$/,k=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,p="    ";function F(t,e,n){return e.f=e.inline=n,n(t,e)}function D(t,e,n){return e.f=e.block=n,n(t,e)}function x(t){return!t||!/\S/.test(t.string)}function v(e){if(e.linkTitle=!1,e.linkHref=!1,e.linkText=!1,e.em=!1,e.strong=!1,e.strikethrough=!1,e.quote=0,e.indentedCode=!1,e.f==A){var n=r;if(!n){var a=t.innerMode(i,e.htmlState);n="xml"==a.mode.name&&null===a.state.tagStart&&!a.state.context&&a.state.tokenize.isInText}n&&(e.f=T,e.block=E,e.htmlState=null)}return e.trailingSpace=0,e.trailingSpaceNewLine=!1,e.prevLine=e.thisLine,e.thisLine={stream:null},null}function E(e,i){var r=e.column()===i.indentation,u=x(i.prevLine.stream),c=i.indentedCode,k=i.prevLine.hr,p=!1!==i.list,D=(i.listStack[i.listStack.length-1]||0)+3;i.indentedCode=!1;var v=i.indentation;if(null===i.indentationDiff&&(i.indentationDiff=i.indentation,p)){for(i.list=null;v<i.listStack[i.listStack.length-1];)i.listStack.pop(),i.listStack.length?i.indentation=i.listStack[i.listStack.length-1]:i.list=!1;!1!==i.list&&(i.indentationDiff=v-i.listStack[i.listStack.length-1])}var E=!u&&!k&&!i.prevLine.header&&(!p||!c)&&!i.prevLine.fencedCodeEnd,A=(!1===i.list||k||u)&&i.indentation<=D&&e.match(l),b=null;if(i.indentationDiff>=4&&(c||i.prevLine.fencedCodeEnd||i.prevLine.header||u))return e.skipToEnd(),i.indentedCode=!0,o.code;if(e.eatSpace())return null;if(r&&i.indentation<=D&&(b=e.match(g))&&b[1].length<=6)return i.quote=0,i.header=b[1].length,i.thisLine.header=!0,n.highlightFormatting&&(i.formatting="header"),i.f=i.inline,S(i);if(i.indentation<=D&&e.eat(">"))return i.quote=r?1:i.quote+1,n.highlightFormatting&&(i.formatting="quote"),e.eatSpace(),S(i);if(!A&&!i.setext&&r&&i.indentation<=D&&(b=e.match(s))){var T=b[1]?"ol":"ul";return i.indentation=v+e.current().length,i.list=!0,i.quote=0,i.listStack.push(i.indentation),i.em=!1,i.strong=!1,i.code=!1,i.strikethrough=!1,n.taskLists&&e.match(h,!1)&&(i.taskList=!0),i.f=i.inline,n.highlightFormatting&&(i.formatting=["list","list-"+T]),S(i)}return r&&i.indentation<=D&&(b=e.match(d,!0))?(i.quote=0,i.fencedEndRE=new RegExp(b[1]+"+ *$"),i.localMode=n.fencedCodeBlockHighlighting&&a(b[2]||n.fencedCodeBlockDefaultMode),i.localMode&&(i.localState=t.startState(i.localMode)),i.f=i.block=C,n.highlightFormatting&&(i.formatting="code-block"),i.code=-1,S(i)):i.setext||!(E&&p||i.quote||!1!==i.list||i.code||A||f.test(e.string))&&(b=e.lookAhead(1))&&(b=b.match(m))?(i.setext?(i.header=i.setext,i.setext=0,e.skipToEnd(),n.highlightFormatting&&(i.formatting="header")):(i.header="="==b[0].charAt(0)?1:2,i.setext=i.header),i.thisLine.header=!0,i.f=i.inline,S(i)):A?(e.skipToEnd(),i.hr=!0,i.thisLine.hr=!0,o.hr):"["===e.peek()?F(e,i,q):F(e,i,i.inline)}function A(e,n){var a=i.token(e,n.htmlState);if(!r){var o=t.innerMode(i,n.htmlState);("xml"==o.mode.name&&null===o.state.tagStart&&!o.state.context&&o.state.tokenize.isInText||n.md_inside&&e.current().indexOf(">")>-1)&&(n.f=T,n.block=E,n.htmlState=null)}return a}function C(t,e){var i,r=e.listStack[e.listStack.length-1]||0,a=e.indentation<r,u=r+3;return e.fencedEndRE&&e.indentation<=u&&(a||t.match(e.fencedEndRE))?(n.highlightFormatting&&(e.formatting="code-block"),a||(i=S(e)),e.localMode=e.localState=null,e.block=E,e.f=T,e.fencedEndRE=null,e.code=0,e.thisLine.fencedCodeEnd=!0,a?D(t,e,e.block):i):e.localMode?e.localMode.token(t,e.localState):(t.skipToEnd(),o.code)}function S(t){var e=[];if(t.formatting){e.push(o.formatting),"string"===typeof t.formatting&&(t.formatting=[t.formatting]);for(var i=0;i<t.formatting.length;i++)e.push(o.formatting+"-"+t.formatting[i]),"header"===t.formatting[i]&&e.push(o.formatting+"-"+t.formatting[i]+"-"+t.header),"quote"===t.formatting[i]&&(!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=t.quote?e.push(o.formatting+"-"+t.formatting[i]+"-"+t.quote):e.push("error"))}if(t.taskOpen)return e.push("meta"),e.length?e.join(" "):null;if(t.taskClosed)return e.push("property"),e.length?e.join(" "):null;if(t.linkHref?e.push(o.linkHref,"url"):(t.strong&&e.push(o.strong),t.em&&e.push(o.em),t.strikethrough&&e.push(o.strikethrough),t.emoji&&e.push(o.emoji),t.linkText&&e.push(o.linkText),t.code&&e.push(o.code),t.image&&e.push(o.image),t.imageAltText&&e.push(o.imageAltText,"link"),t.imageMarker&&e.push(o.imageMarker)),t.header&&e.push(o.header,o.header+"-"+t.header),t.quote&&(e.push(o.quote),!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=t.quote?e.push(o.quote+"-"+t.quote):e.push(o.quote+"-"+n.maxBlockquoteDepth)),!1!==t.list){var r=(t.listStack.length-1)%3;r?1===r?e.push(o.list2):e.push(o.list3):e.push(o.list1)}return t.trailingSpaceNewLine?e.push("trailing-space-new-line"):t.trailingSpace&&e.push("trailing-space-"+(t.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function b(t,e){if(t.match(c,!0))return S(e)}function T(e,r){var a=r.text(e,r);if("undefined"!==typeof a)return a;if(r.list)return r.list=null,S(r);if(r.taskList)return" "===e.match(h,!0)[1]?r.taskOpen=!0:r.taskClosed=!0,n.highlightFormatting&&(r.formatting="task"),r.taskList=!1,S(r);if(r.taskOpen=!1,r.taskClosed=!1,r.header&&e.match(/^#+$/,!0))return n.highlightFormatting&&(r.formatting="header"),S(r);var u=e.next();if(r.linkTitle){r.linkTitle=!1;var l=u;"("===u&&(l=")");var s="^\\s*(?:[^"+(l=(l+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1"))+"\\\\]+|\\\\\\\\|\\\\.)"+l;if(e.match(new RegExp(s),!0))return o.linkHref}if("`"===u){var g=r.formatting;n.highlightFormatting&&(r.formatting="code"),e.eatWhile("`");var m=e.current().length;if(0!=r.code||r.quote&&1!=m){if(m==r.code){var c=S(r);return r.code=0,c}return r.formatting=g,S(r)}return r.code=m,S(r)}if(r.code)return S(r);if("\\"===u&&(e.next(),n.highlightFormatting)){var d=S(r),f=o.formatting+"-escape";return d?d+" "+f:f}if("!"===u&&e.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return r.imageMarker=!0,r.image=!0,n.highlightFormatting&&(r.formatting="image"),S(r);if("["===u&&r.imageMarker&&e.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return r.imageMarker=!1,r.imageAltText=!0,n.highlightFormatting&&(r.formatting="image"),S(r);if("]"===u&&r.imageAltText){n.highlightFormatting&&(r.formatting="image");var d=S(r);return r.imageAltText=!1,r.image=!1,r.inline=r.f=M,d}if("["===u&&!r.image)return r.linkText&&e.match(/^.*?\]/)||(r.linkText=!0,n.highlightFormatting&&(r.formatting="link")),S(r);if("]"===u&&r.linkText){n.highlightFormatting&&(r.formatting="link");var d=S(r);return r.linkText=!1,r.inline=r.f=e.match(/\(.*?\)| ?\[.*?\]/,!1)?M:T,d}if("<"===u&&e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1))return r.f=r.inline=w,n.highlightFormatting&&(r.formatting="link"),(d=S(r))?d+=" ":d="",d+o.linkInline;if("<"===u&&e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1))return r.f=r.inline=w,n.highlightFormatting&&(r.formatting="link"),(d=S(r))?d+=" ":d="",d+o.linkEmail;if(n.xml&&"<"===u&&e.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,!1)){var p=e.string.indexOf(">",e.pos);if(-1!=p){var F=e.string.substring(e.start,p);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(F)&&(r.md_inside=!0)}return e.backUp(1),r.htmlState=t.startState(i),D(e,r,A)}if(n.xml&&"<"===u&&e.match(/^\/\w*?>/))return r.md_inside=!1,"tag";if("*"===u||"_"===u){for(var x=1,v=1==e.pos?" ":e.string.charAt(e.pos-2);x<3&&e.eat(u);)x++;var E=e.peek()||" ",C=!/\s/.test(E)&&(!k.test(E)||/\s/.test(v)||k.test(v)),b=!/\s/.test(v)&&(!k.test(v)||/\s/.test(E)||k.test(E)),B=null,L=null;if(x%2&&(r.em||!C||"*"!==u&&b&&!k.test(v)?r.em!=u||!b||"*"!==u&&C&&!k.test(E)||(B=!1):B=!0),x>1&&(r.strong||!C||"*"!==u&&b&&!k.test(v)?r.strong!=u||!b||"*"!==u&&C&&!k.test(E)||(L=!1):L=!0),null!=L||null!=B)return n.highlightFormatting&&(r.formatting=null==B?"strong":null==L?"em":"strong em"),!0===B&&(r.em=u),!0===L&&(r.strong=u),c=S(r),!1===B&&(r.em=!1),!1===L&&(r.strong=!1),c}else if(" "===u&&(e.eat("*")||e.eat("_"))){if(" "===e.peek())return S(r);e.backUp(1)}if(n.strikethrough)if("~"===u&&e.eatWhile(u)){if(r.strikethrough)return n.highlightFormatting&&(r.formatting="strikethrough"),c=S(r),r.strikethrough=!1,c;if(e.match(/^[^\s]/,!1))return r.strikethrough=!0,n.highlightFormatting&&(r.formatting="strikethrough"),S(r)}else if(" "===u&&e.match("~~",!0)){if(" "===e.peek())return S(r);e.backUp(2)}if(n.emoji&&":"===u&&e.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)){r.emoji=!0,n.highlightFormatting&&(r.formatting="emoji");var q=S(r);return r.emoji=!1,q}return" "===u&&(e.match(/^ +$/,!1)?r.trailingSpace++:r.trailingSpace&&(r.trailingSpaceNewLine=!0)),S(r)}function w(t,e){if(">"===t.next()){e.f=e.inline=T,n.highlightFormatting&&(e.formatting="link");var i=S(e);return i?i+=" ":i="",i+o.linkInline}return t.match(/^[^>]+/,!0),o.linkInline}function M(t,e){if(t.eatSpace())return null;var i=t.next();return"("===i||"["===i?(e.f=e.inline=L("("===i?")":"]"),n.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,S(e)):"error"}var B={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/};function L(t){return function(e,i){if(e.next()===t){i.f=i.inline=T,n.highlightFormatting&&(i.formatting="link-string");var r=S(i);return i.linkHref=!1,r}return e.match(B[t]),i.linkHref=!0,S(i)}}function q(t,e){return t.match(/^([^\]\\]|\\.)*\]:/,!1)?(e.f=y,t.next(),n.highlightFormatting&&(e.formatting="link"),e.linkText=!0,S(e)):F(t,e,T)}function y(t,e){if(t.match("]:",!0)){e.f=e.inline=N,n.highlightFormatting&&(e.formatting="link");var i=S(e);return e.linkText=!1,i}return t.match(/^([^\]\\]|\\.)+/,!0),o.linkText}function N(t,e){return t.eatSpace()?null:(t.match(/^[^\s]+/,!0),void 0===t.peek()?e.linkTitle=!0:t.match(/^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,!0),e.f=e.inline=T,o.linkHref+" url")}var z={startState:function(){return{f:E,prevLine:{stream:null},thisLine:{stream:null},block:E,htmlState:null,indentation:0,inline:T,text:b,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(e){return{f:e.f,prevLine:e.prevLine,thisLine:e.thisLine,block:e.block,htmlState:e.htmlState&&t.copyState(i,e.htmlState),indentation:e.indentation,localMode:e.localMode,localState:e.localMode?t.copyState(e.localMode,e.localState):null,inline:e.inline,text:e.text,formatting:!1,linkText:e.linkText,linkTitle:e.linkTitle,linkHref:e.linkHref,code:e.code,em:e.em,strong:e.strong,strikethrough:e.strikethrough,emoji:e.emoji,header:e.header,setext:e.setext,hr:e.hr,taskList:e.taskList,list:e.list,listStack:e.listStack.slice(0),quote:e.quote,indentedCode:e.indentedCode,trailingSpace:e.trailingSpace,trailingSpaceNewLine:e.trailingSpaceNewLine,md_inside:e.md_inside,fencedEndRE:e.fencedEndRE}},token:function(t,e){if(e.formatting=!1,t!=e.thisLine.stream){if(e.header=0,e.hr=!1,t.match(/^\s*$/,!0))return v(e),null;if(e.prevLine=e.thisLine,e.thisLine={stream:t},e.taskList=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,!e.localState&&(e.f=e.block,e.f!=A)){var n=t.match(/^\s*/,!0)[0].replace(/\t/g,p).length;if(e.indentation=n,e.indentationDiff=null,n>0)return null}}return e.f(t,e)},innerMode:function(t){return t.block==A?{state:t.htmlState,mode:i}:t.localState?{state:t.localState,mode:t.localMode}:{state:t,mode:z}},indent:function(e,n,r){return e.block==A&&i.indent?i.indent(e.htmlState,n,r):e.localState&&e.localMode.indent?e.localMode.indent(e.localState,n,r):t.Pass},blankLine:v,getType:S,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",closeBrackets:"()[]{}''\"\"``",fold:"markdown"};return z}),"xml"),t.defineMIME("text/markdown","markdown"),t.defineMIME("text/x-markdown","markdown")}(n(3),n(82),n(9))}}]);
//# sourceMappingURL=4.fa4da320.chunk.js.map