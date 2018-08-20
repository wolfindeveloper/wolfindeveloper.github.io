/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
    if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*
 * smSlider 0.1
 * http://sashamochalin.github.io/smSlider/
 *
 * Copyright © 2013 Sasha Mochalin
 */
 (function(a){a.fn.smSlider=function(b){var c={start:0,transition:"animate",activeClass:"active",autoArr:true,innerBlock:"sm_slider-inner",prev:"sm_prev",next:"sm_next",children:"sm_slide",pagination:true,typeCtrl:"dots",subMenu:false,subMenuClass:"sm_submenu-item",autoPlay:false,delay:5000,hoverPause:true,easing:"swing",duration:600,flexible:false,animationStart:function(){},animationComplete:function(){}};var b=a.extend(c,b);return this.each(function(){var m=true;var q=function(y,x){if(m){m=false;var v=h;var w=-1*v;if(x=="next"){currPos=w;nextPos=v}else{currPos=v;nextPos=w}if(b.transition!="fader"){d.children("."+b.children+"."+b.activeClass).stop().animate({left:currPos},{duration:b.duration,easing:b.easing,complete:function(){a(this).removeClass(b.activeClass);if(b.animationComplete){b.animationComplete(y)}}});n.eq(y).css("left",nextPos).addClass(b.activeClass).stop().animate({left:0},{duration:b.duration,easing:b.easing,complete:function(){m=true}})}else{d.children("."+b.children+"."+b.activeClass).stop().fadeOut({duration:b.duration,easing:b.easing,complete:function(){a(this).removeClass(b.activeClass);if(b.animationComplete){b.animationComplete(y)}}});n.eq(y).stop().fadeIn({duration:b.duration,easing:b.easing,complete:function(){m=true}}).addClass(b.activeClass)}if(b.animationStart){b.animationStart(y)}if(b.pagination){t.removeClass(b.activeClass);t.eq(y).addClass(b.activeClass)}if(b.subMenu){r.removeClass(b.activeClass);r.eq(y).addClass(b.activeClass)}}else{return false}};var g=a(this);var h=g.width();var j=g.height();if(b.flexible){a(window).resize(function(){h=g.width()})}var d=g.children("ul").addClass(b.innerBlock);d.css({height:j,overflow:"hidden",position:"relative",width:"100%"});var n=d.children("li").addClass(b.children);var f=n.length;if(b.start>f-1){var o=f-1}else{var o=b.start}n.appendTo(d);n.eq(o).addClass(b.activeClass);if(f>1){var s=a("<i/>");if(b.autoArr){var u=s.clone().addClass(b.prev);var e=s.clone().addClass(b.next);u.appendTo(g);e.appendTo(g)}else{var u=a("."+b.prev);var e=a("."+b.next)}if(b.pagination){var l=a("<ul/>").addClass("sm_nav");var t=a("<li/>");l.appendTo(g);if(b.typeCtrl!="numeric"){for(i=0;i<f;i++){t.clone().data({index:i}).addClass("sm_nav-item").html(s.clone()).appendTo(l)}}else{for(i=0;i<f;i++){t.clone().data({index:i}).addClass("sm_nav-item").text(i+1).appendTo(l)}}var t=g.find(".sm_nav-item");t.eq(o).addClass(b.activeClass)}if(b.subMenu){var r=a("."+b.subMenuClass);r.eq(o).addClass(b.activeClass)}}if(b.autoPlay&&(f>1)){var p=null;var k=function(){o++;if(o>=f){o=0}q(o,"next")};p=setInterval(k,b.delay);if(b.hoverPause){a(this).hover(function(){p=clearInterval(p)},function(){p=setInterval(k,b.delay)})}}if(f>1){u.bind("click",function(){if(m){o--;if(o<0){o=f-1}q(o,"prev")}});e.bind("click",function(){if(m){o++;if(o>=f){o=0}q(o,"next")}});if(b.pagination){t.on("click",function(){if(m){navIndex=a(this).data("index");if(navIndex>o){direction="next"}else{direction="prev"}if(a(this).data("index")!=o){o=navIndex;q(o,direction)}}})}if(b.subMenu){r.bind("click",function(){if(m){subIndex=a(this).data("index");if(subIndex>o){direction="next"}else{direction="prev"}if((subIndex!=o)&&(subIndex<=(f-1))){o=subIndex;q(o,direction)}}})}}})}})(jQuery);/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.4 (Thu, 10 Jan 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/),
		didUpdate = null,
		isTouch	  = document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.4',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}

			F.trigger('afterClose');
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					$('body').unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						$('body').bind({
							'afterShow.player onUpdate.player'   : set,
							'onCancel.player beforeClose.player' : stop,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						opts = $.extend(true, {}, F.helpers[helper].defaults, opts);

						F.helpers[helper][event](opts, obj);
					}
				});
			}

			$.event.trigger(event + '.fb');
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width;
				F.coming.height = this.height;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.height();
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,  // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,   // duration of fadeOut animation
			showEarly  : true,  // indicates if should be opened immediately or wait until the content is ready
			css        : {},    // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true   // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,   // current handle
		fixed   : false,  // indicates if the overlay has position "fixed"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( 'body' );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			$('.fancybox-overlay').remove();

			W.unbind('resize.overlay');

			this.overlay = null;

			if (this.margin !== false) {
				$('body').css('margin-right', this.margin);

				this.margin = false;
			}

			if (this.el) {
				this.el.removeClass('fancybox-lock');
			}
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			$('.fancybox-overlay').stop(true, true);

			if (!this.overlay) {
				this.margin = D.height() > W.height() || $('body').css('overflow-y') === 'scroll' ? $('body').css('margin-right') : false;
				this.el     = document.all && !document.querySelector ? $('html') : $('body');

				this.create(opts);
			}

			if (opts.locked && this.fixed) {
				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			if (obj.locked) {
				this.el.addClass('fancybox-lock');

				if (this.margin !== false) {
					$('body').css('margin-right', getScalar( this.margin ) + obj.scrollbarWidth);
				}
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			if (this.overlay && !F.isActive) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});
	});

}(window, document, jQuery));/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
/*------------------------ Tooltips  -----------------------------*/


// EZPZ Tooltip v1.0; Copyright (c) 2009 Mike Enriquez, http://theezpzway.com; Released under the MIT License
(function ($) {
    $.fn.ezpz_tooltip = function (options) {
        var settings = $.extend({}, $.fn.ezpz_tooltip.defaults, options);

        return this.each(function () {

            var content = $("#" + getContentId(this.id));

            var targetMousedOver = $(this).click(function () {
                settings.beforeShow(content, $(this));
            }).click(function (e) {
                //debugger;
                contentInfo = getElementDimensionsAndPosition(content);
                if (settings.parentPosition) {
                    targetInfo = getElementDimensionsAndPosition($(this).parent());
                } else {
                    targetInfo = getElementDimensionsAndPosition($(this));
                }

                contentInfo = $.fn.ezpz_tooltip.positions[settings.contentPosition](contentInfo, e.pageX, e.pageY, settings.offset, targetInfo);

                contentInfo = keepInWindow(contentInfo);
                content.css('top', contentInfo['top']);
                content.css('left', contentInfo['left']);

                if (content.css('display') == 'none') {

                    $('.active_link').each(function () {
                        content1 = $("#" + getContentId(this.id));
                        settings.hideContent(content1);
                        $(this).removeClass("active_link");
                    })

                    settings.showContent(content);
                    $(this).addClass("active_link");

                } else {
                    settings.hideContent(content);
                    $(this).removeClass("active_link");
                }
                e.stopPropagation();
            });

            if (settings.stayOnContent && this.id != "") {
                $("#" + getContentId(this.id)).click(function (event) {
                    event.stopPropagation();
                });
            }

            $(document).click(function () {

                $('.active_link').each(function () {
                    content1 = $("#" + getContentId(this.id));
                    settings.hideContent(content1);
                    $(this).removeClass("active_link");
                })
            });

        });

        function getContentId(targetId) {
            if (settings.contentId == "") {
                var name = targetId.split('-')[0];
                var id = targetId.split('-')[2];
                return name + '-content-' + id;
            }
            else {
                return settings.contentId;
            }
        };

        function getElementDimensionsAndPosition(element) {
            var height = element.outerHeight(true);
            var width = element.outerWidth(true);
            var top = $(element).position().top;
            var left = $(element).position().left;
            var info = new Array();

            // Set dimensions
            info['height'] = height;
            info['width'] = width;

            // Set position
            info['top'] = top;
            info['left'] = left;

            return info;
        };

        function keepInWindow(contentInfo) {
            var windowWidth = $(window).width();
            var windowTop = $(window).scrollTop();
            var output = new Array();

            output = contentInfo;

            /*if (contentInfo['top'] < windowTop) { // Top edge is too high
             output['top'] = windowTop;
             }*/
            if ((contentInfo['left'] + contentInfo['width']) > windowWidth) { // Right edge is past the window
                output['left'] = windowWidth - contentInfo['width'];
            }
            if (contentInfo['left'] < 0) { // Left edge is too far left
                output['left'] = 0;
            }

            return output;
        };
    };

    $.fn.ezpz_tooltip.positionContent = function (contentInfo, mouseX, mouseY, offset, targetInfo) {
        contentInfo['top'] = mouseY - offset - contentInfo['height'];
        contentInfo['left'] = mouseX + offset;

        return contentInfo;
    };

    $.fn.ezpz_tooltip.positions = {
        aboveRightFollow: function (contentInfo, mouseX, mouseY, offset, targetInfo) {
            contentInfo['top'] = mouseY - offset - contentInfo['height'];
            contentInfo['left'] = mouseX + offset;

            return contentInfo;
        }
    };

    $.fn.ezpz_tooltip.defaults = {
        contentPosition: 'aboveRightFollow',
        stayOnContent: false,
        offset: 10,
        contentId: "",
        beforeShow: function (content) {
        },
        showContent: function (content) {
            content.show();
        },
        hideContent: function (content) {
            content.hide();
        },
        afterHide: function () {
        }
    };

})(jQuery);

// Plugin for different content positions. Keep what you need, remove what you don't need to reduce file size.

(function ($) {
    $.fn.ezpz_tooltip.positions.aboveFollow = function (contentInfo, mouseX, mouseY, offset, targetInfo) {
        contentInfo['top'] = mouseY - offset - contentInfo['height'];
        contentInfo['left'] = mouseX - (contentInfo['width'] / 2);

        return contentInfo;
    };

    $.fn.ezpz_tooltip.positions.rightFollow = function (contentInfo, mouseX, mouseY, offset, targetInfo) {
        contentInfo['top'] = mouseY - (contentInfo['height'] / 2);
        contentInfo['left'] = mouseX + offset;

        return contentInfo;
    };

    $.fn.ezpz_tooltip.positions.belowRightFollow = function (contentInfo, mouseX, mouseY, offset, targetInfo) {
        contentInfo['top'] = mouseY + offset;
        contentInfo['left'] = mouseX + offset;

        return contentInfo;
    };

    $.fn.ezpz_tooltip.positions.belowFollow = function (contentInfo, mouseX, mouseY, offset, targetInfo) {
        contentInfo['top'] = mouseY + offset;
        contentInfo['left'] = mouseX - (contentInfo['width'] / 2);

        return contentInfo;
    };

    $.fn.ezpz_tooltip.positions.aboveStatic = function (contentInfo, mouseX, mouseY, offset, targetInfo) {
        contentInfo['top'] = targetInfo['top'] - offset - contentInfo['height'];
        contentInfo['left'] = (targetInfo['left'] + (targetInfo['width'] / 2)) - (contentInfo['width'] / 2);

        return contentInfo;
    };

    $.fn.ezpz_tooltip.positions.rightStatic = function (contentInfo, mouseX, mouseY, offset, targetInfo) {
        contentInfo['top'] = (targetInfo['top'] + (targetInfo['height'] / 2)) - (contentInfo['height'] / 2);
        contentInfo['left'] = targetInfo['left'] + targetInfo['width'] + offset;

        return contentInfo;
    };

    $.fn.ezpz_tooltip.positions.belowStatic = function (contentInfo, mouseX, mouseY, offset, targetInfo) {
        contentInfo['top'] = targetInfo['top'] + targetInfo['height'] + offset;
        contentInfo['left'] = (targetInfo['left'] + (targetInfo['width'] / 2)) - (contentInfo['width'] / 2);

        return contentInfo;
    };

    $.fn.ezpz_tooltip.positions.belowStaticLeft = function (contentInfo, mouseX, mouseY, offset, targetInfo) {
        contentInfo['top'] = targetInfo['top'] + targetInfo['height'] + offset;
        contentInfo['left'] = targetInfo['left'];

        return contentInfo;
    };

})(jQuery);

///////////////////////////////////// jQuery.NiceFileInput.js //////////////////////////////
(function ($) {
    $.fn.nicefileinput = function (options) {
        var settings = {
            browse: 'Обзор...', // Default button text
            remove: 'Удалить',
            fullPath: false
        };
        if (options) { $.extend(settings, options); }
        ;

        return this.each(function () {
            var self = this;

            if ($(self).attr('data-styled') === undefined) {

                var r = Math.round(Math.random() * 10000);
                var d = new Date();
                var guid = d.getTime() + r.toString();

                var filename = $('<input type="text" readonly="readonly" name="filename">')
                    .css({
                        'display': 'block',
                        'float': 'left',
                        'margin': 0,
                        'padding': '0 5px'
                    })
                    .addClass('NFI-filename NFI' + guid);
                var browse = $("<div>")
                    .css({
                        'overflow': 'hidden',
                        'position': 'relative',
                        'display': 'block',
                        'float': 'right',
                        'white-space': 'nowrap',
                        'text-align': 'center'
                    })
                    .addClass('NFI-button NFI' + guid)
                    .html(settings.browse);

                var remove = $("<div>")
                    .css({
                        'overflow': 'hidden',
                        'position': 'relative',
                        'display': 'none',
                        'float': 'right',
                        'white-space': 'nowrap',
                        'text-align': 'center'
                    })
                    .addClass('NFI-button remove-button NFI' + guid)
                    .html(settings.remove);

                $(self).after(remove);
                $(self).after(filename);

                $(self).wrap(browse);

                $('.NFI' + guid).wrapAll('<div class="NFI-wrapper" id="NFI-wrapper-' + guid + '" />');
                $('.NFI-wrapper').css({
                    'overflow': 'auto',
                    'display': 'inline-block'
                });
                $("#NFI-wrapper-" + guid).addClass($(self).attr("class"));

                $(self)
                    .css({
                        'opacity': 0,
                        'position': 'absolute',
                        'border': 'none',
                        'margin': 0,
                        'padding': 0,
                        'top': 0,
                        'right': 0,
                        'cursor': 'pointer',
                        'height': '60px'
                    })
                    .addClass('NFI-current');
                $(self).on("change", function () {
                    var fullPath = $(self).val();
                    if (settings.fullPath) {
                        filename.val(fullPath);
                    } else {
                        var pathArray = fullPath.split(/[/\\]/);
                        filename.val(pathArray[pathArray.length - 1]);
                    }
                });
                $(self).attr('data-styled', true);
            }
        });

    };
})(jQuery);

(function ($) {
    $.fn.MiniSpoiler = function (_max, _min) {
        $(this).each(function (index, element) {
            var o = $(element),
                min = o.find("." + _min).first(),
                max = o.find("." + _max).first(),
                content = o.find(".ms-content").first();

            min.click(function () {
                content.hide();
                return false;
            });

            max.on("click", function () {
                if (content.is(":visible")) {
                    o.find(".minimizator").first().removeClass("minimizator").addClass("maximizator");
                    content.hide();
                } else {
                    o.find(".maximizator").first().removeClass("maximizator").addClass("minimizator");
                    content.show();
                }
                return false;
            });

        });
        return this;
    };
})(jQuery);

(function (window) {
    {
        var unknown = '-';

        // screen
        var screenSize = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        //browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Sputnik
        else if ((verOffset = nAgt.indexOf('SputnikBrowser')) != -1) {
            browser = 'Sputnik';
            version = nAgt.substring(verOffset + 15);
        }
        // YaBrowser
        else if ((verOffset = nAgt.indexOf('YaBrowser')) != -1) {
            browser = 'Yandex';
            version = nAgt.substring(verOffset + 10);
            version = version.slice(0, version.indexOf(' '));
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // cookie
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
        }

        // system
        var os = unknown;
        var clientStrings = [
            {s:'Windows 3.11', r:/Win16/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 10.0', r:/(Windows NT 10.0)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows ME', r:/Windows ME/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
        }

        // flash (you'll need to include swfobject)
        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
        var flashVersion = 'no check';
        if (typeof swfobject != 'undefined') {
            var fv = swfobject.getFlashPlayerVersion();
            if (fv.major > 0) {
                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
            }
            else  {
                flashVersion = unknown;
            }
        }
    }

    window.client = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
        flashVersion: flashVersion
    };
}(this));
/**
 * DaData.ru Suggestions jQuery plugin, version 16.10.4
 *
 * DaData.ru Suggestions jQuery plugin is freely distributable under the terms of MIT-style license
 * Built on DevBridge Autocomplete for jQuery (https://github.com/devbridge/jQuery-Autocomplete)
 * For details, see https://github.com/hflabs/suggestions-jquery
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"string"!=typeof exports.nodeName?require("jquery"):jQuery)}(function(a){"use strict";function b(b,c){var d=this;d.element=b,d.el=a(b),d.suggestions=[],d.badQueries=[],d.selectedIndex=-1,d.currentValue=d.element.value,d.intervalId=0,d.cachedResponse={},d.enrichmentCache={},d.currentRequest=null,d.inputPhase=a.Deferred(),d.fetchPhase=a.Deferred(),d.enrichPhase=a.Deferred(),d.onChangeTimeout=null,d.triggering={},d.$wrapper=null,d.options=a.extend({},k,c),d.classes={hint:"suggestions-hint",mobile:"suggestions-mobile",nowrap:"suggestions-nowrap",selected:"suggestions-selected",suggestion:"suggestions-suggestion",subtext:"suggestions-subtext",subtext_inline:"suggestions-subtext suggestions-subtext_inline",subtext_delimiter:"suggestions-subtext-delimiter",subtext_label:"suggestions-subtext suggestions-subtext_label",removeConstraint:"suggestions-remove",value:"suggestions-value"},d.disabled=!1,d.selection=null,d.$viewport=a(window),d.$body=a(document.body),d.type=null,d.status={},d.setupElement(),d.initializer=a.Deferred(),d.el.is(":visible")?d.initializer.resolve():d.deferInitialization(),d.initializer.done(a.proxy(d.initialize,d))}var c={ENTER:13,ESC:27,TAB:9,SPACE:32,UP:38,DOWN:40},d={},e=".suggestions",f="suggestions",g="\\s\"'~\\*\\.,:\\|\\[\\]\\(\\)\\{\\}<>№",h=new RegExp("["+g+"]+","g"),i="\\-\\+\\/\\\\\\?!@#$%^&",j=new RegExp("["+i+"]+","g"),k={autoSelectFirst:!1,serviceUrl:"https://suggestions.dadata.ru/suggestions/api/4_1/rs",onSearchStart:a.noop,onSearchComplete:a.noop,onSearchError:a.noop,onSuggestionsFetch:null,onSelect:null,onSelectNothing:null,onInvalidateSelection:null,minChars:1,deferRequestBy:100,params:{},paramName:"query",timeout:3e3,formatResult:null,formatSelected:null,noCache:!1,containerClass:"suggestions-suggestions",tabDisabled:!1,triggerSelectOnSpace:!1,triggerSelectOnEnter:!0,triggerSelectOnBlur:!0,preventBadQueries:!1,hint:"Выберите вариант или продолжите ввод",type:null,requestMode:"suggest",count:5,$helpers:null,headers:null,scrollOnFocus:!0,mobileWidth:980,initializeInterval:100},l={chains:{},on:function(a,b){return this.get(a).push(b),this},get:function(a){var b=this.chains;return b[a]||(b[a]=[])}},m=function(){var b=0;return{escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},escapeHtml:function(b){var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};return b&&a.each(c,function(a,c){b=b.replace(new RegExp(a,"g"),c)}),b},getDefaultType:function(){return a.support.cors?"POST":"GET"},getDefaultContentType:function(){return a.support.cors?"application/json":"application/x-www-form-urlencoded"},fixURLProtocol:function(b){return a.support.cors?b:b.replace(/^https?:/,location.protocol)},addUrlParams:function(b,c){return b+(/\?/.test(b)?"&":"?")+a.param(c)},serialize:function(b){return a.support.cors?JSON.stringify(b,function(a,b){return null===b?void 0:b}):a.param(b,!0)},compact:function(b){return a.grep(b,function(a){return!!a})},delay:function(a,b){return setTimeout(a,b||0)},uniqueId:function(a){return(a||"")+ ++b},slice:function(a,b){return Array.prototype.slice.call(a,b)},indexBy:function(b,c,d){var e={};return a.each(b,function(b,f){var g=f[c],h={};d&&(h[d]=b),e[g]=a.extend(!0,h,f)}),e},areSame:function c(b,d){var e=!0;return typeof b!=typeof d?!1:"object"==typeof b&&null!=b&&null!=d?(a.each(b,function(a,b){return e=c(b,d[a])}),e):b===d},arrayMinus:function(b,c){return c?a.grep(b,function(b,d){return-1===a.inArray(b,c)}):b},arrayMinusWithPartialMatching:function(b,c){return c?a.grep(b,function(a,b){return!c.some(function(b){return 0===b.indexOf(a)})}):b},arraysIntersection:function(b,c){var d=[];return a.isArray(b)&&a.isArray(c)?(a.each(b,function(b,e){a.inArray(e,c)>=0&&d.push(e)}),d):d},getWords:function(a,b){a=a.replace(/(\d+)([а-яА-ЯёЁ]{2,})/g,"$1 $2").replace(/([а-яА-ЯёЁ]+)(\d+)/g,"$1 $2");var c=this.compact(a.split(h)),d=c.pop(),e=this.arrayMinus(c,b);return e.push(d),e},normalize:function(a,b){var c=this;return c.getWords(a,b).join(" ")},stringEncloses:function(a,b){return a.length>b.length&&-1!==a.indexOf(b)},fieldsNotEmpty:function(b,c){if(!a.isPlainObject(b))return!1;var d=!0;return a.each(c,function(a,c){return d=!!b[c]}),d},getDeepValue:function d(a,b){var c=b.split("."),e=c.shift();return a&&(c.length?d(a[e],c.join(".")):a[e])},reWordExtractor:function(){return new RegExp("([^"+g+"]*)(["+g+"]*)","g")},formatToken:function(a){return a&&a.toLowerCase().replace(/[ёЁ]/g,"е")},withSubTokens:function(b){var c=[];return a.each(b,function(a,b){var d=b.split(j);c.push(b),d.length>1&&(c=c.concat(m.compact(d)))}),c},objectKeys:function(b){if(Object.keys)return Object.keys(b);var c=[];return a.each(b,function(a){c.push(a)}),c}}}(),n=function(){function b(b){return function(c){if(0===c.length)return!1;if(1===c.length)return!0;var d=b(c[0].value),e=a.grep(c,function(a){return 0===b(a.value).indexOf(d)},!0);return 0===e.length}}var c=b(function(a){return a}),d=b(function(a){return a.replace(/, (?:д|вл|двлд|к) .+$/,"")});return{matchByNormalizedQuery:function(b,c){var d=b.toLowerCase(),e=this&&this.stopwords,f=m.normalize(d,e),g=[];return a.each(c,function(a,b){var c=b.value.toLowerCase();return m.stringEncloses(d,c)?!1:c.indexOf(f)>0?!1:void(f===m.normalize(c,e)&&g.push(a))}),1===g.length?g[0]:-1},matchByWords:function(b,d){var e,f=this&&this.stopwords,g=b.toLowerCase(),h=[];return c(d)&&(e=m.withSubTokens(m.getWords(g,f)),a.each(d,function(a,b){var c=b.value.toLowerCase();if(m.stringEncloses(g,c))return!1;var d=m.withSubTokens(m.getWords(c,f));0===m.arrayMinus(e,d).length&&h.push(a)})),1===h.length?h[0]:-1},matchByWordsAddress:function(b,c){var e,f=this&&this.stopwords,g=b.toLowerCase(),h=-1;return d(c)&&(e=m.withSubTokens(m.getWords(g,f)),a.each(c,function(a,b){var c=b.value.toLowerCase();if(m.stringEncloses(g,c))return!1;var d=m.withSubTokens(m.getWords(c,f));return 0===m.arrayMinus(e,d).length?(h=a,!1):void 0})),h},matchByFields:function(b,c){var d=this&&this.stopwords,e=this&&this.fieldsStopwords,f=m.withSubTokens(m.getWords(b.toLowerCase(),d)),g=[];return 1===c.length&&(e&&a.each(e,function(a,b){var d=m.getDeepValue(c[0],a),e=d&&m.withSubTokens(m.getWords(d.toLowerCase(),b));e&&e.length&&(g=g.concat(e))}),0===m.arrayMinusWithPartialMatching(f,g).length)?0:-1}}}();!function(){function b(a,b){var c=a.data&&a.data[b];return c&&new RegExp("^"+m.escapeRegExChars(c)+"(["+g+"]|$)","i").test(a.value)}function c(a,b){return i.test(b)&&!i.test(a)?b:a}function e(a,b,d,e,f){var g=this,h=g.highlightMatches(a,d,e,f),i=g.highlightMatches(b,d,e,f);return c(h,i)}var f=["ао","аобл","дом","респ","а/я","аал","автодорога","аллея","арбан","аул","б-р","берег","бугор","вал","вл","волость","въезд","высел","г","городок","гск","д","двлд","днп","дор","дп","ж/д_будка","ж/д_казарм","ж/д_оп","ж/д_платф","ж/д_пост","ж/д_рзд","ж/д_ст","жилзона","жилрайон","жт","заезд","заимка","зона","к","казарма","канал","кв","кв-л","км","кольцо","комн","кордон","коса","кп","край","линия","лпх","м","массив","местность","мкр","мост","н/п","наб","нп","обл","округ","остров","оф","п","п/о","п/р","п/ст","парк","пгт","пер","переезд","пл","пл-ка","платф","погост","полустанок","починок","пр-кт","проезд","промзона","просек","просека","проселок","проток","протока","проулок","р-н","рзд","россия","рп","ряды","с","с/а","с/мо","с/о","с/п","с/с","сад","сквер","сл","снт","спуск","ст","ст-ца","стр","тер","тракт","туп","у","ул","уч-к","ф/х","ферма","х","ш","бульвар","владение","выселки","гаражно-строительный","город","деревня","домовладение","дорога","квартал","километр","комната","корпус","литер","леспромхоз","местечко","микрорайон","набережная","область","переулок","платформа","площадка","площадь","поселение","поселок","проспект","разъезд","район","республика","село","сельсовет","слобода","сооружение","станица","станция","строение","территория","тупик","улица","улус","участок","хутор","шоссе"],h=[{id:"kladr_id",fields:["kladr_id"],forBounds:!1,forLocations:!0},{id:"postal_code",fields:["postal_code"],forBounds:!1,forLocations:!0},{id:"country",fields:["country"],forBounds:!1,forLocations:!0},{id:"region_fias_id",fields:["region_fias_id"],forBounds:!1,forLocations:!0},{id:"region",fields:["region","region_type","region_type_full","region_with_type"],forBounds:!0,forLocations:!0,kladrFormat:{digits:2,zeros:11},fiasType:"region_fias_id"},{id:"area_fias_id",fields:["area_fias_id"],forBounds:!1,forLocations:!0},{id:"area",fields:["area","area_type","area_type_full","area_with_type"],forBounds:!0,forLocations:!0,kladrFormat:{digits:5,zeros:8},fiasType:"area_fias_id"},{id:"city_fias_id",fields:["city_fias_id"],forBounds:!1,forLocations:!0},{id:"city",fields:["city","city_type","city_type_full","city_with_type"],forBounds:!0,forLocations:!0,kladrFormat:{digits:8,zeros:5},fiasType:"city_fias_id"},{id:"city_district_fias_id",fields:["city_district_fias_id"],forBounds:!1,forLocations:!0},{id:"city_district",fields:["city_district","city_district_type","city_district_type_full","city_district_with_type"],forBounds:!0,forLocations:!0,fiasType:"city_district_fias_id"},{id:"settlement_fias_id",fields:["settlement_fias_id"],forBounds:!1,forLocations:!0},{id:"settlement",fields:["settlement","settlement_type","settlement_type_full","settlement_with_type"],forBounds:!0,forLocations:!0,kladrFormat:{digits:11,zeros:2},fiasType:"settlement_fias_id"},{id:"street_fias_id",fields:["street_fias_id"],forBounds:!1,forLocations:!0},{id:"street",fields:["street","street_type","street_type_full","street_with_type"],forBounds:!0,forLocations:!0,kladrFormat:{digits:15,zeros:2},fiasType:"street_fias_id"},{id:"house",fields:["house","house_type","house_type_full","block","block_type"],forBounds:!0,forLocations:!1,kladrFormat:{digits:19}}],i=/<strong>/,j={LEGAL:[2,2,5,1],INDIVIDUAL:[2,2,6,2]};d.NAME={urlSuffix:"fio",matchers:[n.matchByNormalizedQuery,n.matchByWords],fieldNames:{surname:"фамилия",name:"имя",patronymic:"отчество"},alwaysContinueSelecting:!0,isDataComplete:function(c){var d,e=this,f=e.options.params,g=c.data;return a.isFunction(f)&&(f=f.call(e.element,c.value)),f&&f.parts?d=a.map(f.parts,function(a){return a.toLowerCase()}):(d=["surname","name"],b(c,"surname")&&d.push("patronymic")),m.fieldsNotEmpty(g,d)},composeValue:function(a){return m.compact([a.surname,a.name,a.patronymic]).join(" ")}},d.ADDRESS={urlSuffix:"address",matchers:[a.proxy(n.matchByNormalizedQuery,{stopwords:f}),a.proxy(n.matchByWordsAddress,{stopwords:f})],dataComponents:h,dataComponentsById:m.indexBy(h,"id","index"),unformattableTokens:f,enrichmentEnabled:!0,geoEnabled:!0,isDataComplete:function(b){var c=[this.bounds.to||"flat"],d=b.data;return!a.isPlainObject(d)||m.fieldsNotEmpty(d,c)},composeValue:function(b,c){return m.compact([b.region_with_type||m.compact([b.region,b.region_type]).join(" "),b.area_with_type||m.compact([b.area_type,b.area]).join(" "),b.city_with_type||m.compact([b.city_type,b.city]).join(" "),a.inArray("city_district",c)>=0&&(b.city_district_with_type||m.compact([b.city_district_type,b.city_district]).join(" ")),b.settlement_with_type||m.compact([b.settlement_type,b.settlement]).join(" "),b.street_with_type||m.compact([b.street_type,b.street]).join(" "),m.compact([b.house_type,b.house,b.block_type,b.block]).join(" "),m.compact([b.flat_type,b.flat]).join(" "),b.postal_box&&"а/я "+b.postal_box]).join(", ")},formatResult:function(){var b=[],c=!1;return a.each(h,function(){c&&b.push(this.id),"city_district"===this.id&&(c=!0)}),function(c,d,e,f){var g=this,h=e.data&&e.data.city_district_with_type;return c=g.highlightMatches(c,d,e,f),c=g.wrapFormattedValue(c,e),h&&(!g.bounds.own.length||g.bounds.own.indexOf("street")>=0)&&!a.isEmptyObject(g.copyDataComponents(e.data,b))&&(c+='<div class="'+g.classes.subtext+'">'+g.highlightMatches(h,d,e)+"</div>"),c}}()},d.PARTY={urlSuffix:"party",matchers:[a.proxy(n.matchByFields,{fieldsStopwords:{value:null,"data.address.value":f,"data.inn":null,"data.ogrn":null}})],dataComponents:h,geoEnabled:!0,formatResult:function(a,b,d,h){var i=this,j=i.type.formatResultInn.call(i,d,b),k=i.highlightMatches(m.getDeepValue(d.data,"ogrn"),b,d),l=c(j,k),n=i.highlightMatches(m.getDeepValue(d.data,"management.name"),b,d),o=m.getDeepValue(d.data,"address.value")||"";return i.isMobile&&((h||(h={})).maxLength=50),a=e.call(i,a,m.getDeepValue(d.data,"name.latin"),b,d,h),a=i.wrapFormattedValue(a,d),o&&(o=o.replace(/^(\d{6}?\s+|Россия,\s+)/i,""),o=i.isMobile?o.replace(new RegExp("^([^"+g+"]+["+g+"]+[^"+g+"]+).*"),"$1"):i.highlightMatches(o,b,d,{unformattableTokens:f})),(l||o||n)&&(a+='<div class="'+i.classes.subtext+'"><span class="'+i.classes.subtext_inline+'">'+(l||"")+"</span>"+(c(o,n)||"")+"</div>"),a},formatResultInn:function(b,c){var d,e,f=this,g=b.data&&b.data.inn,h=j[b.data&&b.data.type],i=/\d/;return g?(e=f.highlightMatches(g,c,b),h&&(e=e.split(""),d=a.map(h,function(a){for(var b,c="";a&&(b=e.shift());)c+=b,i.test(b)&&a--;return c}),e=d.join('<span class="'+f.classes.subtext_delimiter+'"></span>')+e.join("")),e):void 0}},d.EMAIL={urlSuffix:"email",matchers:[n.matchByNormalizedQuery],isQueryRequestable:function(a){return this.options.suggest_local||a.indexOf("@")>=0}},d.BANK={urlSuffix:"bank",matchers:[a.proxy(n.matchByFields,{fieldsStopwords:{value:null,"data.bic":null,"data.swift":null}})],formatResult:function(a,b,c,d){var e=this,h=e.highlightMatches(m.getDeepValue(c.data,"bic"),b,c),i=m.getDeepValue(c.data,"address.value")||"";return a=e.highlightMatches(a,b,c,d),a=e.wrapFormattedValue(a,c),i&&(i=i.replace(/^\d{6}( РОССИЯ)?, /i,""),i=e.isMobile?i.replace(new RegExp("^([^"+g+"]+["+g+"]+[^"+g+"]+).*"),"$1"):e.highlightMatches(i,b,c,{unformattableTokens:f})),(h||i)&&(a+='<div class="'+e.classes.subtext+'"><span class="'+e.classes.subtext_inline+'">'+h+"</span>"+i+"</div>"),a},formatSelected:function(a){return m.getDeepValue(a,"data.name.payment")}},a.extend(k,{suggest_local:!0})}();var o={suggest:{defaultParams:{type:m.getDefaultType(),dataType:"json",contentType:m.getDefaultContentType()},addTypeInUrl:!0},detectAddressByIp:{defaultParams:{type:"GET",dataType:"json"},addTypeInUrl:!1},status:{defaultParams:{type:"GET",dataType:"json"},addTypeInUrl:!0},findById:{defaultParams:{type:m.getDefaultType(),dataType:"json",contentType:m.getDefaultContentType()},addTypeInUrl:!0}},p={suggest:{method:"suggest",userSelect:!0,updateValue:!0,enrichmentEnabled:!0},findById:{method:"findById",userSelect:!1,updateValue:!1,enrichmentEnabled:!1}};b.utils=m,b.defaultOptions=k,b.version="16.10.4",a.Suggestions=b,b.prototype={initialize:function(){var a=this;a.uniqueId=m.uniqueId("i"),a.createWrapper(),a.notify("initialize"),a.bindWindowEvents(),a.setOptions(),a.fixPosition()},deferInitialization:function(){var a,b=this,c="mouseover focus keydown",d=function(){b.initializer.resolve(),b.enable()};b.initializer.always(function(){b.el.off(c,d),clearInterval(a)}),b.disabled=!0,b.el.on(c,d),a=setInterval(function(){b.el.is(":visible")&&d()},b.options.initializeInterval)},isInitialized:function(){return"resolved"===this.initializer.state()},dispose:function(){var a=this;a.initializer.reject(),a.notify("dispose"),a.el.removeData(f).removeClass("suggestions-input"),a.unbindWindowEvents(),a.removeWrapper(),a.el.trigger("suggestions-dispose")},notify:function(b){var c=this,d=m.slice(arguments,1);return a.map(l.get(b),function(a){return a.apply(c,d)})},createWrapper:function(){var b=this;b.$wrapper=a('<div class="suggestions-wrapper"/>'),b.el.after(b.$wrapper),b.$wrapper.on("mousedown"+e,a.proxy(b.onMousedown,b))},removeWrapper:function(){var b=this;b.$wrapper&&b.$wrapper.remove(),a(b.options.$helpers).off(e)},onMousedown:function(b){var c=this;b.preventDefault(),c.cancelBlur=!0,m.delay(function(){delete c.cancelBlur}),0==a(b.target).closest(".ui-menu-item").length&&m.delay(function(){a(document).one("mousedown",function(b){var d=c.el.add(c.$wrapper).add(c.options.$helpers);c.options.floating&&(d=d.add(c.$container)),d=d.filter(function(){return this===b.target||a.contains(this,b.target)}),d.length||c.hide()})})},bindWindowEvents:function(){var b=this,c=a.proxy(b.fixPosition,b);b.$viewport.on("resize"+e+b.uniqueId,c).on("scroll"+e+b.uniqueId,c)},unbindWindowEvents:function(){this.$viewport.off("resize"+e+this.uniqueId).off("scroll"+e+this.uniqueId)},scrollToTop:function(){var b=this,c=b.options.scrollOnFocus;c===!0&&(c=b.el),c instanceof a&&c.length>0&&a("body,html").animate({scrollTop:c.offset().top},"fast")},setOptions:function(b){var c=this;a.extend(c.options,b),a.each({type:d,requestMode:p},function(b,d){if(c[b]=d[c.options[b]],!c[b])throw c.disable(),"`"+b+"` option is incorrect! Must be one of: "+a.map(d,function(a,b){return'"'+b+'"'}).join(", ")}),a(c.options.$helpers).off(e).on("mousedown"+e,a.proxy(c.onMousedown,c)),c.isInitialized()&&c.notify("setOptions")},fixPosition:function(b){var c,d,e=this,f={};e.isMobile=e.$viewport.width()<=e.options.mobileWidth,e.isInitialized()&&(!b||"scroll"!=b.type||e.options.floating||e.isMobile)&&(e.$container.appendTo(e.options.floating?e.$body:e.$wrapper),e.notify("resetPosition"),e.el.css("paddingLeft",""),e.el.css("paddingRight",""),f.paddingLeft=parseFloat(e.el.css("paddingLeft")),f.paddingRight=parseFloat(e.el.css("paddingRight")),a.extend(f,e.el.offset()),f.borderTop="none"==e.el.css("border-top-style")?0:parseFloat(e.el.css("border-top-width")),f.borderLeft="none"==e.el.css("border-left-style")?0:parseFloat(e.el.css("border-left-width")),f.innerHeight=e.el.innerHeight(),f.innerWidth=e.el.innerWidth(),f.outerHeight=e.el.outerHeight(),f.componentsLeft=0,f.componentsRight=0,c=e.$wrapper.offset(),d={top:f.top-c.top,left:f.left-c.left},e.notify("fixPosition",d,f),f.componentsLeft>f.paddingLeft&&e.el.css("paddingLeft",f.componentsLeft+"px"),f.componentsRight>f.paddingRight&&e.el.css("paddingRight",f.componentsRight+"px"))},clearCache:function(){this.cachedResponse={},this.enrichmentCache={},this.badQueries=[]},clear:function(){var a=this;a.isInitialized()&&(a.clearCache(),a.currentValue="",a.selection=null,a.hide(),a.suggestions=[],a.el.val(""),a.el.trigger("suggestions-clear"),a.notify("clear"))},disable:function(){var a=this;a.disabled=!0,a.abortRequest(),a.visible&&a.hide()},enable:function(){this.disabled=!1},isUnavailable:function(){return this.disabled},update:function(){var a=this,b=a.el.val();a.isInitialized()&&(a.currentValue=b,a.isQueryRequestable(b)?a.updateSuggestions(b):a.hide())},setSuggestion:function(b){var c,d,e=this;a.isPlainObject(b)&&a.isPlainObject(b.data)&&(b=a.extend(!0,{},b),e.bounds.own.length&&(e.checkValueBounds(b),c=e.copyDataComponents(b.data,e.bounds.all),b.data.kladr_id&&(c.kladr_id=e.getBoundedKladrId(b.data.kladr_id,e.bounds.all)),b.data=c),e.selection=b,e.suggestions=[b],d=e.getSuggestionValue(b)||"",e.currentValue=d,e.el.val(d),e.abortRequest(),e.el.trigger("suggestions-set"))},fixData:function(){var b=this,c=b.extendedCurrentValue(),d=b.el.val(),e=a.Deferred();e.done(function(a){b.selectSuggestion(a,0,d,{hasBeenEnriched:!0}),b.el.trigger("suggestions-fixdata",a)}).fail(function(){b.selection=null,b.currentValue="",b.el.val(b.currentValue),b.el.trigger("suggestions-fixdata")}),b.isQueryRequestable(c)?(b.currentValue=c,b.getSuggestions(c,{count:1,from_bound:null,to_bound:null}).done(function(a){var b=a[0];b?e.resolve(b):e.reject()}).fail(function(){e.reject()})):e.reject()},extendedCurrentValue:function(){var b=this,c=b.getParentInstance(),d=c&&c.extendedCurrentValue(),e=a.trim(b.el.val());return m.compact([d,e]).join(" ")},getAjaxParams:function(c,d){var e=this,f=a.trim(e.options.token),g=a.trim(e.options.partner),h=e.options.serviceUrl,i=o[c],j=a.extend({timeout:e.options.timeout},i.defaultParams),k={};return/\/$/.test(h)||(h+="/"),h+=c,i.addTypeInUrl&&(h+="/"+e.type.urlSuffix),h=m.fixURLProtocol(h),a.support.cors?(f&&(k.Authorization="Token "+f),g&&(k["X-Partner"]=g),k["X-Version"]=b.version,j.headers||(j.headers={}),a.extend(j.headers,e.options.headers,k)):(f&&(k.token=f),g&&(k.partner=g),k.version=b.version,h=m.addUrlParams(h,k)),j.url=h,a.extend(j,d)},isQueryRequestable:function(a){var b,c=this;return b=a.length>=c.options.minChars,b&&c.type.isQueryRequestable&&(b=c.type.isQueryRequestable.call(c,a)),b},constructRequestParams:function(b,c){var d=this,e=d.options,f=a.isFunction(e.params)?e.params.call(d.element,b):a.extend({},e.params);return d.type.constructRequestParams&&a.extend(f,d.type.constructRequestParams.call(d)),a.each(d.notify("requestParams"),function(b,c){a.extend(f,c)}),f[e.paramName]=b,a.isNumeric(e.count)&&e.count>0&&(f.count=e.count),a.extend(f,c)},updateSuggestions:function(a){var b=this;b.fetchPhase=b.getSuggestions(a).done(function(c){b.assignSuggestions(c,a)})},getSuggestions:function(b,c,d){var e,f=this,g=f.options,h=d&&d.noCallbacks,i=d&&d.useEnrichmentCache,j=f.constructRequestParams(b,c),k=a.param(j||{}),l=a.Deferred();return e=f.cachedResponse[k],e&&a.isArray(e.suggestions)?l.resolve(e.suggestions):f.isBadQuery(b)?l.reject():h||g.onSearchStart.call(f.element,j)!==!1?f.doGetSuggestions(j).done(function(a){f.processResponse(a)&&b==f.currentValue?(g.noCache||(i?f.enrichmentCache[b]=a.suggestions[0]:(f.enrichResponse(a,b),f.cachedResponse[k]=a,g.preventBadQueries&&0===a.suggestions.length&&f.badQueries.push(b))),l.resolve(a.suggestions)):l.reject(),h||g.onSearchComplete.call(f.element,b,a.suggestions)}).fail(function(a,c,d){l.reject(),h||"abort"===c||g.onSearchError.call(f.element,b,a,c,d)}):l.reject(),l},doGetSuggestions:function(b){var c=this,d=a.ajax(c.getAjaxParams(c.requestMode.method,{data:m.serialize(b)}));return c.abortRequest(),c.currentRequest=d,c.notify("request"),d.always(function(){c.currentRequest=null,c.notify("request")}),d},isBadQuery:function(b){if(!this.options.preventBadQueries)return!1;var c=!1;return a.each(this.badQueries,function(a,d){return!(c=0===b.indexOf(d))}),c},abortRequest:function(){var a=this;a.currentRequest&&a.currentRequest.abort()},processResponse:function(b){var c,d=this;return b&&a.isArray(b.suggestions)?(d.verifySuggestionsFormat(b.suggestions),d.setUnrestrictedValues(b.suggestions),a.isFunction(d.options.onSuggestionsFetch)&&(c=d.options.onSuggestionsFetch.call(d.element,b.suggestions),a.isArray(c)&&(b.suggestions=c)),!0):!1},verifySuggestionsFormat:function(b){"string"==typeof b[0]&&a.each(b,function(a,c){b[a]={value:c,data:null}})},getSuggestionValue:function(b,c){var d,e=this,f=e.options.formatSelected||e.type.formatSelected,g=c&&c.hasSameValues,h=c&&c.hasBeenEnriched;return a.isFunction(f)&&(d=f.call(e,b)),"string"==typeof d&&0!=d.length||(d=b.value,e.type.composeValue&&(h?e.options.restrict_value?d=e.type.composeValue(e.getUnrestrictedData(b.data),g&&["city_district"]):e.bounds.own.indexOf("street")>=0&&(d=e.type.composeValue(e.copyDataComponents(b.data,e.bounds.own.concat(["city_district"])),g&&["city_district"])):g&&(d=e.options.restrict_value?e.type.composeValue(e.getUnrestrictedData(b.data),["city_district"]):e.bounds.own.indexOf("street")>=0?e.type.composeValue(e.copyDataComponents(b.data,e.bounds.own.concat(["city_district"])),["city_district"]):b.unrestricted_value))),d},hasSameValues:function(b){var c=!1;return a.each(this.suggestions,function(a,d){return d.value===b.value&&d!==b?(c=!0,!1):void 0}),c},assignSuggestions:function(a,b){var c=this;c.suggestions=a,c.notify("assignSuggestions",b)},shouldRestrictValues:function(){var a=this;return a.options.restrict_value&&a.constraints&&1==Object.keys(a.constraints).length},setUnrestrictedValues:function(b){var c=this,d=c.shouldRestrictValues(),e=c.getFirstConstraintLabel();a.each(b,function(a,b){b.unrestricted_value||(b.unrestricted_value=d?e+", "+b.value:b.value)})},areSuggestionsSame:function(a,b){return a&&b&&a.value===b.value&&m.areSame(a.data,b.data)}},function(){var d={setupElement:function(){this.el.attr("autocomplete","off").addClass("suggestions-input").css("box-sizing","border-box")},bindElementEvents:function(){var b=this;b.el.on("keydown"+e,a.proxy(b.onElementKeyDown,b)),b.el.on(["keyup"+e,"cut"+e,"paste"+e,"input"+e].join(" "),a.proxy(b.onElementKeyUp,b)),b.el.on("blur"+e,a.proxy(b.onElementBlur,b)),b.el.on("focus"+e,a.proxy(b.onElementFocus,b))},unbindElementEvents:function(){this.el.off(e)},onElementBlur:function(){var a=this;return a.cancelBlur?void(a.cancelBlur=!1):(a.options.triggerSelectOnBlur?a.isUnavailable()||a.selectCurrentValue({noSpace:!0}).always(function(){a.hide()}):a.hide(),void(a.fetchPhase.abort&&a.fetchPhase.abort()))},onElementFocus:function(){var b=this;b.cancelFocus||m.delay(a.proxy(b.completeOnFocus,b)),b.cancelFocus=!1},onElementKeyDown:function(a){var b=this;if(!b.isUnavailable())if(b.visible){switch(a.which){case c.ESC:b.el.val(b.currentValue),b.hide(),b.abortRequest();break;case c.TAB:if(b.options.tabDisabled===!1)return;break;case c.ENTER:b.options.triggerSelectOnEnter&&b.selectCurrentValue();break;case c.SPACE:return void(b.options.triggerSelectOnSpace&&b.isCursorAtEnd()&&(a.preventDefault(),b.selectCurrentValue({continueSelecting:!0,dontEnrich:!0}).fail(function(){b.currentValue+=" ",b.el.val(b.currentValue),b.proceedChangedValue()})));case c.UP:b.moveUp();break;case c.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}else switch(a.which){case c.DOWN:b.suggest();break;case c.ENTER:b.options.triggerSelectOnEnter&&b.triggerOnSelectNothing()}},onElementKeyUp:function(a){var b=this;if(!b.isUnavailable()){switch(a.which){case c.UP:case c.DOWN:case c.ENTER:return}clearTimeout(b.onChangeTimeout),b.inputPhase.reject(),b.currentValue!==b.el.val()&&b.proceedChangedValue()}},proceedChangedValue:function(){var b=this;b.abortRequest(),b.inputPhase=a.Deferred().done(a.proxy(b.onValueChange,b)),b.options.deferRequestBy>0?b.onChangeTimeout=m.delay(function(){b.inputPhase.resolve()},b.options.deferRequestBy):b.inputPhase.resolve()},onValueChange:function(){var a,b=this;b.selection&&(a=b.selection,b.selection=null,b.trigger("InvalidateSelection",a)),b.selectedIndex=-1,b.update(),b.notify("valueChange")},completeOnFocus:function(){var a=this;a.isUnavailable()||a.isElementFocused()&&(a.fixPosition(),a.update(),a.isMobile&&(a.setCursorAtEnd(),a.scrollToTop()))},isElementFocused:function(){return document.activeElement===this.element},isCursorAtEnd:function(){var a,b,c=this,d=c.el.val().length;try{if(a=c.element.selectionStart,"number"==typeof a)return a===d}catch(e){}return document.selection?(b=document.selection.createRange(),b.moveStart("character",-d),d===b.text.length):!0},setCursorAtEnd:function(){var a=this.element;try{a.selectionEnd=a.selectionStart=a.value.length,a.scrollLeft=a.scrollWidth}catch(b){a.value=a.value}}};a.extend(b.prototype,d),l.on("initialize",d.bindElementEvents).on("dispose",d.unbindElementEvents)}(),function(){function c(){a.each(d,function(){this.abort()}),d={}}var d={};c();var e={checkStatus:function(){function b(b){a.isFunction(c.options.onSearchError)&&c.options.onSearchError.call(c.element,null,g,"error",b)}var c=this,e=a.trim(c.options.token),f=c.options.type+e,g=d[f];g||(g=d[f]=a.ajax(c.getAjaxParams("status"))),g.done(function(d){d.search?a.extend(c.status,d):b("Service Unavailable")}).fail(function(){b(g.statusText)})}};b.resetTokens=c,a.extend(b.prototype,e),l.on("setOptions",e.checkStatus)}(),function(){function c(){d=null,b.defaultOptions.geoLocation=e}if("GET"!=m.getDefaultType()){var d,e=!0,f={checkLocation:function(){var b=this,c=b.options.geoLocation;b.type.geoEnabled&&c&&(b.geoLocation=a.Deferred(),a.isPlainObject(c)||a.isArray(c)?b.geoLocation.resolve(c):(d||(d=a.ajax(b.getAjaxParams("detectAddressByIp"))),d.done(function(a){var c=a&&a.location&&a.location.data;c&&c.kladr_id?b.geoLocation.resolve(c):b.geoLocation.reject()}).fail(function(){b.geoLocation.reject()})))},getGeoLocation:function(){return this.geoLocation},constructParams:function(){var b=this,c={};return b.geoLocation&&a.isFunction(b.geoLocation.promise)&&"resolved"==b.geoLocation.state()&&b.geoLocation.done(function(b){c.locations_boost=a.makeArray(b)}),c}};a.extend(k,{geoLocation:e}),a.extend(b,{resetLocation:c}),a.extend(b.prototype,{getGeoLocation:f.getGeoLocation}),l.on("setOptions",f.checkLocation).on("requestParams",f.constructParams)}}(),function(){var c={enrichSuggestion:function(b,c){var d=this,e=a.Deferred();return!d.status.enrich||!d.type.enrichmentEnabled||!d.requestMode.enrichmentEnabled||c&&c.dontEnrich?e.resolve(b):b.data&&null!=b.data.qc?e.resolve(b):(d.disableDropdown(),d.currentValue=b.unrestricted_value,d.enrichPhase=d.getSuggestions(b.unrestricted_value,{count:1,locations:null,locations_boost:null,from_bound:null,to_bound:null},{noCallbacks:!0,useEnrichmentCache:!0}).always(function(){d.enableDropdown()}).done(function(a){var c=a&&a[0];e.resolve(c||b,!!c)}).fail(function(){e.resolve(b)}),e)},enrichResponse:function(b,c){var d=this,e=d.enrichmentCache[c];e&&a.each(b.suggestions,function(a,d){return d.value===c?(b.suggestions[a]=e,!1):void 0})}};a.extend(b.prototype,c)}(),function(){function c(b){return a.map(b,function(a){var b=m.escapeHtml(a.text);return b&&a.matched&&(b="<strong>"+b+"</strong>"),b}).join("")}function d(b,c){var d=b.split(", ");return 1===d.length?b:a.map(d,function(a){return'<span class="'+c+'">'+a+"</span>"}).join(", ")}function f(b,c){var d=!1;return a.each(b,function(a,b){return d=b.value==c.value&&b!=c,d?!1:void 0}),d}var g={width:"auto",floating:!1},j={createContainer:function(){var b=this,c="."+b.classes.suggestion,d=b.options,f=a("<div/>").addClass(d.containerClass).css({position:"absolute",display:"none"});b.$container=f,f.on("click"+e,c,a.proxy(b.onSuggestionClick,b))},removeContainer:function(){var a=this;a.options.floating&&a.$container.remove()},setContainerOptions:function(){var b=this,c="mousedown"+e;b.$container.off(c),b.options.floating&&b.$container.on(c,a.proxy(b.onMousedown,b))},onSuggestionClick:function(b){var c,d=this,e=a(b.target);if(!d.dropdownDisabled){for(d.cancelFocus=!0,d.el.focus();e.length&&!(c=e.attr("data-index"));)e=e.closest("."+d.classes.suggestion);c&&!isNaN(c)&&d.select(+c)}},setDropdownPosition:function(a,b){var c,d=this,e=d.$viewport.scrollLeft();d.isMobile?(c=d.options.floating?{left:e+"px",top:b.top+b.outerHeight+"px"}:{left:a.left-b.left+e+"px",top:a.top+b.outerHeight+"px"},c.width=d.$viewport.width()+"px"):(c=d.options.floating?{left:b.left+"px",top:b.top+b.borderTop+b.innerHeight+"px"}:{left:a.left+"px",top:a.top+b.borderTop+b.innerHeight+"px"},m.delay(function(){var a=d.options.width;"auto"===a&&(a=d.el.outerWidth()),d.$container.outerWidth(a)})),d.$container.toggleClass(d.classes.mobile,d.isMobile).css(c),d.containerItemsPadding=b.left+b.borderLeft+b.paddingLeft-e},setItemsPositions:function(){var a=this,b=a.getSuggestionsItems();b.css("paddingLeft",a.isMobile?a.containerItemsPadding+"px":"")},getSuggestionsItems:function(){return this.$container.children("."+this.classes.suggestion)},toggleDropdownEnabling:function(a){this.dropdownDisabled=!a,this.$container.attr("disabled",!a)},disableDropdown:function(){this.toggleDropdownEnabling(!1)},enableDropdown:function(){this.toggleDropdownEnabling(!0)},hasSuggestionsToChoose:function(){var b=this;return b.suggestions.length>1||1===b.suggestions.length&&(!b.selection||a.trim(b.suggestions[0].value)!==a.trim(b.selection.value))},suggest:function(){var b,c,d=this,e=d.options;if(d.requestMode.userSelect){if(!d.hasSuggestionsToChoose())return void d.hide();b=e.formatResult||d.type.formatResult||d.formatResult,c=[],!d.isMobile&&e.hint&&d.suggestions.length&&c.push('<div class="'+d.classes.hint+'">'+e.hint+"</div>"),d.selectedIndex=-1,a.each(d.suggestions,function(a,e){var f=d.makeSuggestionLabel(d.suggestions,e);e==d.selection&&(d.selectedIndex=a),c.push('<div class="'+d.classes.suggestion+'" data-index="'+a+'">'),c.push(b.call(d,e.value,d.currentValue,e,{unformattableTokens:d.type.unformattableTokens})),f&&c.push('<span class="'+d.classes.subtext_label+'">'+m.escapeHtml(f)+"</span>"),c.push("</div>");
}),d.$container.html(c.join("")),e.autoSelectFirst&&-1===d.selectedIndex&&(d.selectedIndex=0),-1!==d.selectedIndex&&d.getSuggestionsItems().eq(d.selectedIndex).addClass(d.classes.selected),a.isFunction(e.beforeRender)&&e.beforeRender.call(d.element,d.$container),d.$container.show(),d.visible=!0,d.fixPosition(),d.setItemsPositions()}},wrapFormattedValue:function(a,b){var c=this,d=m.getDeepValue(b.data,"state.status");return'<span class="'+c.classes.value+'"'+(d?' data-suggestion-status="'+d+'"':"")+">"+a+"</span>"},formatResult:function(a,b,c,d){var e=this;return a=e.highlightMatches(a,b,c,d),e.wrapFormattedValue(a,c)},highlightMatches:function(b,e,f,g){var j,k,l,n,o,p,q,r,s=this,t=[],u=g&&g.unformattableTokens,v=g&&g.maxLength,w=m.reWordExtractor();if(!b)return"";for(j=m.compact(m.formatToken(e).split(h)),l=m.arrayMinus(j,u),j=m.withSubTokens(l.concat(m.arrayMinus(j,l))),k=a.map(j,function(a){return new RegExp("^((.*)(["+i+"]+))?("+m.escapeRegExChars(a)+")([^"+i+"]*["+i+"]*)","i")});(n=w.exec(b))&&n[0];)o=n[1],t.push({text:o,hasUpperCase:o.toLowerCase()!==o,formatted:m.formatToken(o),matchable:!0}),n[2]&&t.push({text:n[2]});for(p=0;p<t.length;p++)q=t[p],!q.matchable||q.matched||-1!==a.inArray(q.formatted,u)&&!q.hasUpperCase||a.each(k,function(a,b){var c,d=b.exec(q.formatted),e=p+1;return d?(d={before:d[1]||"",beforeText:d[2]||"",beforeDelimiter:d[3]||"",text:d[4]||"",after:d[5]||""},d.before&&(t.splice(p,0,{text:q.text.substr(0,d.beforeText.length),formatted:d.beforeText,matchable:!0},{text:d.beforeDelimiter}),e+=2,c=d.before.length,q.text=q.text.substr(c),q.formatted=q.formatted.substr(c),p--),c=d.text.length+d.after.length,q.formatted.length>c&&(t.splice(e,0,{text:q.text.substr(c),formatted:q.formatted.substr(c),matchable:!0}),q.text=q.text.substr(0,c),q.formatted=q.formatted.substr(0,c)),d.after&&(c=d.text.length,t.splice(e,0,{text:q.text.substr(c),formatted:q.formatted.substr(c)}),q.text=q.text.substr(0,c),q.formatted=q.formatted.substr(0,c)),q.matched=!0,!1):void 0});if(v){for(p=0;p<t.length&&v>=0;p++)q=t[p],v-=q.text.length,0>v&&(q.text=q.text.substr(0,q.text.length+v)+"...");t.length=p}return r=c(t),d(r,s.classes.nowrap)},makeSuggestionLabel:function(b,c){var d,e,g=this,h=g.type.fieldNames,i={},j=m.reWordExtractor(),k=[];if(h&&f(b,c)&&c.data&&(a.each(h,function(a){var b=c.data[a];b&&(i[a]=m.formatToken(b))}),!a.isEmptyObject(i))){for(;(d=j.exec(m.formatToken(c.value)))&&(e=d[1]);)a.each(i,function(a,b){return b==e?(k.push(h[a]),delete i[a],!1):void 0});if(k.length)return k.join(", ")}},hide:function(){var a=this;a.visible=!1,a.selectedIndex=-1,a.$container.hide().empty()},activate:function(a){var b,c,d=this,e=d.classes.selected;return!d.dropdownDisabled&&(c=d.getSuggestionsItems(),c.removeClass(e),d.selectedIndex=a,-1!==d.selectedIndex&&c.length>d.selectedIndex)?(b=c.eq(d.selectedIndex),b.addClass(e),b):null},deactivate:function(a){var b=this;b.dropdownDisabled||(b.selectedIndex=-1,b.getSuggestionsItems().removeClass(b.classes.selected),a&&b.el.val(b.currentValue))},moveUp:function(){var a=this;if(!a.dropdownDisabled)return-1===a.selectedIndex?void(a.suggestions.length&&a.adjustScroll(a.suggestions.length-1)):0===a.selectedIndex?void a.deactivate(!0):void a.adjustScroll(a.selectedIndex-1)},moveDown:function(){var a=this;if(!a.dropdownDisabled)return a.selectedIndex===a.suggestions.length-1?void a.deactivate(!0):void a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(a){var b,c,d,e=this,f=e.activate(a),g=e.$container.scrollTop();f&&f.length&&(b=f.position().top,0>b?e.$container.scrollTop(g+b):(c=b+f.outerHeight(),d=e.$container.innerHeight(),c>d&&e.$container.scrollTop(g-d+c)),e.el.val(e.suggestions[a].value))}};a.extend(k,g),a.extend(b.prototype,j),l.on("initialize",j.createContainer).on("dispose",j.removeContainer).on("setOptions",j.setContainerOptions).on("fixPosition",j.setDropdownPosition).on("fixPosition",j.setItemsPositions).on("assignSuggestions",j.suggest)}(),function(){var b="addon",c=50,d=1e3,e={addon:null},f={NONE:"none",SPINNER:"spinner",CLEAR:"clear"},g=function(b){var c=this,d=a('<span class="suggestions-addon"/>');c.owner=b,c.$el=d,c.type=f.NONE,c.visible=!1,c.initialPadding=null,d.on("click",a.proxy(c,"onClick"))};g.prototype={checkType:function(){var b=this,c=b.owner.options.addon,d=!1;a.each(f,function(a,b){return d=b==c,d?!1:void 0}),d||(c=b.owner.isMobile?f.CLEAR:f.SPINNER),c!=b.type&&(b.type=c,b.$el.attr("data-addon-type",c),b.toggle(!0))},toggle:function(a){var b,c=this;switch(c.type){case f.CLEAR:b=!!c.owner.currentValue;break;case f.SPINNER:b=!!c.owner.currentRequest;break;default:b=!1}b!=c.visible&&(c.visible=b,b?c.show(a):c.hide(a))},show:function(a){var b=this,d={opacity:1};a?(b.$el.show().css(d),b.showBackground(!0)):b.$el.stop(!0,!0).delay(c).queue(function(){b.$el.show(),b.showBackground(),b.$el.dequeue()}).animate(d,"fast")},hide:function(a){var b=this,c={opacity:0};a&&b.$el.hide().css(c),b.$el.stop(!0).animate(c,{duration:"fast",complete:function(){b.$el.hide(),b.hideBackground()}})},fixPosition:function(a,b){var c=this,d=b.innerHeight;c.checkType(),c.$el.css({left:a.left+b.borderLeft+b.innerWidth-d+"px",top:a.top+b.borderTop+"px",height:d,width:d}),c.initialPadding=b.paddingRight,c.width=d,c.visible&&(b.componentsRight+=d)},showBackground:function(a){var c=this,d=c.owner.el,e={paddingRight:c.width};c.width>c.initialPadding&&(c.stopBackground(),a?d.css(e):d.animate(e,{duration:"fast",queue:b}).dequeue(b))},hideBackground:function(a){var c=this,e=c.owner.el,f={paddingRight:c.initialPadding};c.width>c.initialPadding&&(c.stopBackground(!0),a?e.css(f):e.delay(d,b).animate(f,{duration:"fast",queue:b}).dequeue(b))},stopBackground:function(a){this.owner.el.stop(b,!0,a)},onClick:function(a){var b=this;b.type==f.CLEAR&&b.owner.clear()}};var h={createAddon:function(){var a=this,b=new g(a);a.$wrapper.append(b.$el),a.addon=b},fixAddonPosition:function(a,b){this.addon.fixPosition(a,b)},checkAddonType:function(){this.addon.checkType()},checkAddonVisibility:function(){this.addon.toggle()},stopBackground:function(){this.addon.stopBackground()}};a.extend(k,e),l.on("initialize",h.createAddon).on("setOptions",h.checkAddonType).on("fixPosition",h.fixAddonPosition).on("clear",h.checkAddonVisibility).on("valueChange",h.checkAddonVisibility).on("request",h.checkAddonVisibility).on("resetPosition",h.stopBackground)}(),function(){function c(b,c){var d=c.selection,e=d&&d.data&&c.bounds;return e&&a.each(c.bounds.all,function(a,c){return e=d.data[c]===b.data[c]}),e}var d={constraints:null,restrict_value:!1},e=["region_fias_id","area_fias_id","city_fias_id","city_district_fias_id","settlement_fias_id","street_fias_id"],f=function(b,c){var d,f,g=this,h={};g.instance=c,g.fields={},g.specificity=-1,a.isPlainObject(b)&&c.type.dataComponents&&a.each(c.type.dataComponents,function(a,c){var d=c.id;c.forLocations&&b[d]&&(g.fields[d]=b[d],g.specificity=a)}),d=m.objectKeys(g.fields),f=m.arraysIntersection(d,e),f.length?(a.each(f,function(a,b){h[b]=g.fields[b]}),g.fields=h,g.specificity=g.getFiasSpecificity(f)):g.fields.kladr_id&&(g.fields={kladr_id:g.fields.kladr_id},g.specificity=g.getKladrSpecificity(g.fields.kladr_id))};a.extend(f.prototype,{getLabel:function(){return this.instance.type.composeValue(this.fields)},getFields:function(){return this.fields},isValid:function(){return!a.isEmptyObject(this.fields)},getKladrSpecificity:function(b){var c,d=-1;return this.significantKladr=b.replace(/^(\d{2})(\d*?)(0+)$/g,"$1$2"),c=this.significantKladr.length,a.each(this.instance.type.dataComponents,function(a,b){b.kladrFormat&&c===b.kladrFormat.digits&&(d=a)}),d},getFiasSpecificity:function(b){var c=-1;return a.each(this.instance.type.dataComponents,function(d,e){e.fiasType&&a.inArray(e.fiasType,b)>-1&&d>c&&(c=d)}),c},containsData:function(b){var c=!0;return this.fields.kladr_id?!!b.kladr_id&&0===b.kladr_id.indexOf(this.significantKladr):(a.each(this.fields,function(a,d){return c=!!b[a]&&b[a].toLowerCase()===d.toLowerCase()}),c)}}),b.ConstraintLocation=f;var g=function(b,c){this.id=m.uniqueId("c"),this.deletable=!!b.deletable,this.instance=c,this.locations=a.map(a.makeArray(b&&(b.locations||b.restrictions)),function(a){return new f(a,c)}),this.locations=a.grep(this.locations,function(a){return a.isValid()}),this.label=b.label,null==this.label&&c.type.composeValue&&(this.label=a.map(this.locations,function(a){return a.getLabel()}).join(", ")),this.label&&this.isValid()&&(this.$el=a(document.createElement("li")).append(a(document.createElement("span")).text(this.label)).attr("data-constraint-id",this.id),this.deletable&&this.$el.append(a(document.createElement("span")).addClass(c.classes.removeConstraint)))};a.extend(g.prototype,{isValid:function(){return this.locations.length>0},getFields:function(){return a.map(this.locations,function(a){return a.getFields()})}});var h={createConstraints:function(){var b=this;b.constraints={},b.$constraints=a('<ul class="suggestions-constraints"/>'),b.$wrapper.append(b.$constraints),b.$constraints.on("click","."+b.classes.removeConstraint,a.proxy(b.onConstraintRemoveClick,b))},setConstraintsPosition:function(a,b){var c=this;c.$constraints.css({left:a.left+b.borderLeft+b.paddingLeft+"px",top:a.top+b.borderTop+Math.round((b.innerHeight-c.$constraints.height())/2)+"px"}),b.componentsLeft+=c.$constraints.outerWidth(!0)+b.paddingLeft},onConstraintRemoveClick:function(b){var c=this,d=a(b.target).closest("li"),e=d.attr("data-constraint-id");delete c.constraints[e],c.update(),d.fadeOut("fast",function(){c.removeConstraint(e)})},setupConstraints:function(){var b,c=this,d=c.options.constraints;return d?void(d instanceof a||"string"==typeof d||"number"==typeof d.nodeType?(b=a(d),b.is(c.constraints)||(c.unbindFromParent(),b.is(c.el)||(c.constraints=b,c.bindToParent()))):(c._constraintsUpdating=!0,a.each(c.constraints,a.proxy(c.removeConstraint,c)),a.each(a.makeArray(d),function(a,b){c.addConstraint(b)}),c._constraintsUpdating=!1,c.fixPosition())):void c.unbindFromParent()},filteredLocation:function(b){var c=[],d={};return a.each(this.type.dataComponents,function(){this.forLocations&&c.push(this.id)}),a.isPlainObject(b)&&a.each(b,function(a,b){b&&c.indexOf(a)>=0&&(d[a]=b)}),a.isEmptyObject(d)?void 0:d.kladr_id?{kladr_id:d.kladr_id}:d},addConstraint:function(a){var b=this;a=new g(a,b),a.isValid()&&(b.constraints[a.id]=a,a.$el&&(b.$constraints.append(a.$el),b._constraintsUpdating||b.fixPosition()))},removeConstraint:function(a){var b=this;delete b.constraints[a],b.$constraints.children('[data-constraint-id="'+a+'"]').remove(),b._constraintsUpdating||b.fixPosition()},constructConstraintsParams:function(){for(var b,c,d=this,e=[],g=d.constraints,h={};g instanceof a&&(b=g.suggestions())&&!(c=m.getDeepValue(b,"selection.data"));)g=b.constraints;return g instanceof a?(c=new f(c,b).getFields(),c&&(h.locations=[c],h.restrict_value=!0)):g&&(a.each(g,function(a,b){e=e.concat(b.getFields())}),e.length&&(h.locations=e,h.restrict_value=d.options.restrict_value)),h},getFirstConstraintLabel:function(){var b=this,c=a.isPlainObject(b.constraints)&&Object.keys(b.constraints)[0];return c?b.constraints[c].label:""},bindToParent:function(){var b=this;b.constraints.on(["suggestions-select."+b.uniqueId,"suggestions-invalidateselection."+b.uniqueId,"suggestions-clear."+b.uniqueId].join(" "),a.proxy(b.onParentSelectionChanged,b)).on("suggestions-dispose."+b.uniqueId,a.proxy(b.onParentDispose,b))},unbindFromParent:function(){var b=this,c=b.constraints;c instanceof a&&c.off("."+b.uniqueId)},onParentSelectionChanged:function(a,b,c){("suggestions-select"!==a.type||c)&&this.clear()},onParentDispose:function(a){this.unbindFromParent()},getParentInstance:function(){return this.constraints instanceof a&&this.constraints.suggestions()},shareWithParent:function(a){var b=this.getParentInstance();b&&b.type===this.type&&!c(a,b)&&(b.shareWithParent(a),b.setSuggestion(a))},getUnrestrictedData:function(b){var c=this,d=[],e={},f=-1;return a.each(c.constraints,function(c,d){a.each(d.locations,function(a,c){c.containsData(b)&&c.specificity>f&&(f=c.specificity)})}),f>=0?(b.region_kladr_id&&b.region_kladr_id===b.city_kladr_id&&d.push.apply(d,c.type.dataComponentsById.city.fields),a.each(c.type.dataComponents.slice(0,f+1),function(a,b){d.push.apply(d,b.fields)}),a.each(b,function(a,b){-1===d.indexOf(a)&&(e[a]=b)})):e=b,e}};a.extend(k,d),a.extend(b.prototype,h),"GET"!=m.getDefaultType()&&l.on("initialize",h.createConstraints).on("setOptions",h.setupConstraints).on("fixPosition",h.setConstraintsPosition).on("requestParams",h.constructConstraintsParams).on("dispose",h.unbindFromParent)}(),function(){var c={proceedQuery:function(a){var b=this;a.length>=b.options.minChars?b.updateSuggestions(a):b.hide()},selectCurrentValue:function(b){var c=this,d=a.Deferred();return c.inputPhase.resolve(),c.fetchPhase.done(function(){var a;c.selection&&!c.visible?d.reject():(a=c.findSuggestionIndex(),c.select(a,b),-1===a?d.reject():d.resolve(a))}).fail(function(){d.reject()}),d},selectFoundSuggestion:function(){var a=this;a.requestMode.userSelect||a.select(0)},findSuggestionIndex:function(){var b,c=this,d=c.selectedIndex;return-1===d&&(b=a.trim(c.el.val()),b&&a.each(c.type.matchers,function(a,e){return d=e(b,c.suggestions),-1===d})),d},select:function(b,c){var d,e=this,f=e.suggestions[b],g=c&&c.continueSelecting,h=e.currentValue;if(!e.triggering.Select){if(!f)return g||e.selection||e.triggerOnSelectNothing(),void e.onSelectComplete(g);d=e.hasSameValues(f),e.enrichSuggestion(f,c).done(function(f,g){e.selectSuggestion(f,b,h,a.extend({hasBeenEnriched:g,hasSameValues:d},c))})}},selectSuggestion:function(a,b,c,d){var e=this,f=d.continueSelecting,g=!e.type.isDataComplete||e.type.isDataComplete.call(e,a),h=e.selection;e.triggering.Select||(e.type.alwaysContinueSelecting&&(f=!0),g&&(f=!1),d.hasBeenEnriched&&e.suggestions[b]&&(e.suggestions[b].data=a.data),e.requestMode.updateValue&&(e.checkValueBounds(a),e.currentValue=e.getSuggestionValue(a,d),!e.currentValue||d.noSpace||g||(e.currentValue+=" "),e.el.val(e.currentValue)),e.currentValue?(e.selection=a,e.areSuggestionsSame(a,h)||e.trigger("Select",a,e.currentValue!=c),e.requestMode.userSelect&&e.onSelectComplete(f)):(e.selection=null,e.triggerOnSelectNothing()),e.shareWithParent(a))},onSelectComplete:function(a){var b=this;a?(b.selectedIndex=-1,b.updateSuggestions(b.currentValue)):b.hide()},triggerOnSelectNothing:function(){var a=this;a.triggering.SelectNothing||a.trigger("SelectNothing",a.currentValue)},trigger:function(b){var c=this,d=m.slice(arguments,1),e=c.options["on"+b];c.triggering[b]=!0,a.isFunction(e)&&e.apply(c.element,d),c.el.trigger.call(c.el,"suggestions-"+b.toLowerCase(),d),c.triggering[b]=!1}};a.extend(b.prototype,c),l.on("assignSuggestions",c.selectFoundSuggestion)}(),function(){var b={bounds:null},c={setupBounds:function(){this.bounds={from:null,to:null}},setBoundsOptions:function(){var b,c,d=this,e=[],f=a.trim(d.options.bounds).split("-"),g=f[0],h=f[f.length-1],i=[],j=[];d.type.dataComponents&&a.each(d.type.dataComponents,function(){this.forBounds&&e.push(this.id)}),-1===a.inArray(g,e)&&(g=null),c=a.inArray(h,e),-1!==c&&c!==e.length-1||(h=null),(g||h)&&(b=!g,a.each(e,function(a,c){return c==g&&(b=!0),j.push(c),b&&i.push(c),c==h?!1:void 0})),d.bounds.from=g,d.bounds.to=h,d.bounds.all=j,d.bounds.own=i},constructBoundsParams:function(){var a=this,b={};return a.bounds.from&&(b.from_bound={value:a.bounds.from}),a.bounds.to&&(b.to_bound={value:a.bounds.to}),b},checkValueBounds:function(a){var b,c=this;c.bounds.own.length&&c.type.composeValue&&(b=c.copyDataComponents(a.data,c.bounds.own),a.value=c.type.composeValue(b,["city_district"]))},copyDataComponents:function(b,c){var d={},e=this.type.dataComponentsById;return e&&a.each(c,function(c,f){a.each(e[f].fields,function(a,c){null!=b[c]&&(d[c]=b[c])})}),d},getBoundedKladrId:function(b,c){var d,e=c[c.length-1];return a.each(this.type.dataComponents,function(a,b){return b.id===e?(d=b.kladrFormat,!1):void 0}),b.substr(0,d.digits)+new Array((d.zeros||0)+1).join("0")}};a.extend(k,b),a.extend(a.Suggestions.prototype,c),l.on("initialize",c.setupBounds).on("setOptions",c.setBoundsOptions).on("requestParams",c.constructBoundsParams)}(),a.fn.suggestions=function(c,d){return 0===arguments.length?this.first().data(f):this.each(function(){var e=a(this),g=e.data(f);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),e.data(f,g))})}});! function (a) {
    var b = /iPhone/i, c = /iPod/i, d = /iPad/i, e = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, f = /Android/i, g = /IEMobile/i, h = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, i = /BlackBerry/i, j = /BB10/i, k = /Opera Mini/i, l = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, m = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), n = function (a, b) {
        return a.test(b)
    }, o = function (a) {
        var o = a || navigator.userAgent;
        return this.apple = {
            phone: n(b, o),
            ipod: n(c, o),
            tablet: n(d, o),
            device: n(b, o) || n(c, o) || n(d, o)
        }, this.android = {
            phone: n(e, o),
            tablet: ! n(e, o) && n(f, o),
            device: n(e, o) || n(f, o)
        }, this.windows = {
            phone: n(g, o),
            tablet: n(h, o),
            device: n(g, o) || n(h, o)
        }, this.other = {
            blackberry: n(i, o),
            blackberry10: n(j, o),
            opera: n(k, o),
            firefox: n(l, o),
            device: n(i, o) || n(j, o) || n(k, o) || n(l, o)
        }, this.seven_inch = n(m, o), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window
            ? this
            : void 0
    }, p = function () {
        var a = new o;
        return a.Class = o, a
    };
    "undefined" != typeof module && module.exports && "undefined" == typeof window
        ? module.exports = o
        : "undefined" != typeof module && module.exports && "undefined" != typeof window
        ? module.exports = p()
        : "function" == typeof define && define.amd
        ? define(a.isMobile = p())
        : a.isMobile = p()
}(this);
function areCookiesEnabled() {
    if (typeof navigator.cookieEnabled != "undefined") {
        return ! ! navigator.cookieEnabled;
    }
    document.cookie = 'testcookie';

    return (document.cookie.indexOf("testcookie") != - 1);
}

function checkFlashInBrowser() {
    var hasFlash = false;
    try {
        hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch (exception) {
        hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
    }

    return hasFlash;
}

function checkPrivateMode() {
    var storage,
        fail,
        uid;
    try {
        uid = new Date;
        (storage = window.localStorage).setItem(uid, uid);
        fail = storage.getItem(uid) != uid;
        storage.removeItem(uid);
        fail && (storage = false);
    } catch (e) {
        storage = false;
    }

    return ! ! ((Ext.isSafari || Ext.is.iOS || Ext.is.Mac) && storage === false);
}

function checkForJacarta() {
    return document.getElementById('jacarta');
}

function isChromiumBased()
{
    var retVal_chrome = navigator.userAgent.match(/chrome/i);
    //некоторых версиях IE8 с подключенным плагином chromeframe он определяется как
    //Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; chromeframe/29.0.1547.67;
    // и может попадать в ветку Chrome
    var retVal_chromeframe = navigator.userAgent.match(/chromeframe/i),
        isOpera = navigator.userAgent.match(/opr/i),
        isYaBrowser = navigator.userAgent.match(/YaBrowser/i);

    if(retVal_chrome == null) // В Firefox и IE работаем через NPAPI
        return false;
    else
    {
        // В Chrome и Opera работаем через асинхронную версию
        if(retVal_chrome.length > 0 || isOpera != null )
        {
            return true;
        }
    }
    return false;
}

$(".help").ezpz_tooltip({
    contentPosition: 'belowStatic',
    stayOnContent: true,
    offset: 0,
    action: 'mouseover'
});

$(document).ready(function () {
    if (! areCookiesEnabled()) {
        $('#error-block').removeClass('display-none');
        $('#cookieError').removeClass('display-none');

    }
    $('#fancybox').fancybox({
        tpl: {
            // wrap template with custom inner DIV: the empty player container
            /*wrap: '<div class="fancybox-wrap" tabIndex="-1">' +
             '<div class="fancybox-skin">' +
             '<div class="fancybox-outer">' +
             '<div id="player">' + // player container replaces fancybox-inner
             '</div></div></div></div>'*/
            wrap: '<div class="fancybox-wrap" tabIndex="-1">' +
            '<div class="fancybox-skin">' +
            '<div class="fancybox-outer">' +
            '<div id="player">' + // player container replaces fancybox-inner
            (Ext.isIE8
                ? '<div style="margin: 0 auto; padding: 200px 0 0; text-align:center; width: 820px;height:450px; border: 1px solid #ccc;">Ваш браузер не смог отобразить это видео</div>'
                :
                (window.isMobile.any
                    ? '<div style="margin: 0 auto; padding: 200px 0 0; text-align:center; width: 820px;height:450px; border: 1px solid #ccc;">Браузер не поддерживает проигрывание данного видео.</div>'
                    : checkFlashInBrowser()
                    ?
                '<object id="swfplayer" type="application/x-shockwave-flash" data="/uppod.swf" height="450px" width="800px">' +
                '<param name="bgcolor" value="#ffffff" />' +
                '<param name="allowFullScreen" value="true" />' +
                '<param name="allowScriptAccess" value="always" />' +
                '<param name="movie" value="/uppod.swf" />' +
                '<param name="flashvars" value="st=uppod-styles.txt&file=media/video/2015-2.mp4" /></object>'
                    :
                '<div style="margin: 0 auto; padding: 200px 0 0; text-align:center; width: 820px;height:450px; border: 1px solid #ccc;">' +
                'Для просмотра видео вам необходимо установить <a href="https://get.adobe.com/ru/flashplayer/" target="_blank">Adobe Flash Player</a>.' +
                '</div>')) +
            '</div></div></div></div>'
        }
    });
    $('#slider-control').smSlider({
        autoArr: false,
        autoPlay: true,
        delay: 15000
    });

    $("#help-login,#help-elogin,#help-login-password,#help-kskpep,#help-kskpep-software,#help-kskpep-access,#help-common,#help-wrong-data").MiniSpoiler('maximizator', 'minimizator');


});

var utf8 = {
    /**
     *
     * @param {string} string
     * @returns {bytearray}
     */
    encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = new Array();

        for (var n = 0, k = string.length; n < k; n ++) {
            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext.push(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext.push((c >> 6) | 192);
                utftext.push((c & 63) | 128);
            }
            else {
                utftext.push((c >> 12) | 224);
                utftext.push(((c >> 6) & 63) | 128);
                utftext.push((c & 63) | 128);
            }
        }
        return utftext;
    },

    decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {
            c = utftext[i];
            if (c < 128) {
                string += String.fromCharCode(c);
                i ++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext[i + 1];
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext[i + 1];
                c3 = utftext[i + 2];
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }
        return string;
    }
};

//----------------------------------------------------------------------
//
// ECMAScript 5 Polyfills
//
//----------------------------------------------------------------------

//----------------------------------------------------------------------
// ES5 15.2 Object Objects
//----------------------------------------------------------------------

//
// ES5 15.2.3 Properties of the Object Constructor
//

// ES5 15.2.3.2 Object.getPrototypeOf ( O )
// From http://ejohn.org/blog/objectgetprototypeof/
// NOTE: won't work for typical function T() {}; T.prototype = {}; new T; case
// since the constructor property is destroyed.
if (!Object.getPrototypeOf) {
    Object.getPrototypeOf = function (o) {
        if (o !== Object(o)) { throw TypeError("Object.getPrototypeOf called on non-object"); }
        return o.__proto__ || o.constructor.prototype || Object.prototype;
    };
}

//    // ES5 15.2.3.3 Object.getOwnPropertyDescriptor ( O, P )
//    if (typeof Object.getOwnPropertyDescriptor !== "function") {
//        Object.getOwnPropertyDescriptor = function (o, name) {
//            if (o !== Object(o)) { throw TypeError(); }
//            if (o.hasOwnProperty(name)) {
//                return {
//                    value: o[name],
//                    enumerable: true,
//                    writable: true,
//                    configurable: true
//                };
//            }
//        };
//    }

// ES5 15.2.3.4 Object.getOwnPropertyNames ( O )
if (typeof Object.getOwnPropertyNames !== "function") {
    Object.getOwnPropertyNames = function (o) {
        if (o !== Object(o)) { throw TypeError("Object.getOwnPropertyNames called on non-object"); }
        var props = [], p;
        for (p in o) {
            if (Object.prototype.hasOwnProperty.call(o, p)) {
                props.push(p);
            }
        }
        return props;
    };
}

// ES5 15.2.3.5 Object.create ( O [, Properties] )
if (typeof Object.create !== "function") {
    Object.create = function (prototype, properties) {
        if (typeof prototype !== "object") { throw TypeError(); }
        function Ctor() {}
        Ctor.prototype = prototype;
        var o = new Ctor();
        if (prototype) { o.constructor = Ctor; }
        if (properties !== undefined) {
            if (properties !== Object(properties)) { throw TypeError(); }
            Object.defineProperties(o, properties);
        }
        return o;
    };
}

// ES 15.2.3.6 Object.defineProperty ( O, P, Attributes )
// Partial support for most common case - getters, setters, and values
(function() {
    if (!Object.defineProperty ||
        !(function () { try { Object.defineProperty({}, 'x', {}); return true; } catch (e) { return false; } } ())) {
        var orig = Object.defineProperty;
        Object.defineProperty = function (o, prop, desc) {
            // In IE8 try built-in implementation for defining properties on DOM prototypes.
            if (orig) { try { return orig(o, prop, desc); } catch (e) {} }

            if (o !== Object(o)) { throw TypeError("Object.defineProperty called on non-object"); }
            if (Object.prototype.__defineGetter__ && ('get' in desc)) {
                Object.prototype.__defineGetter__.call(o, prop, desc.get);
            }
            if (Object.prototype.__defineSetter__ && ('set' in desc)) {
                Object.prototype.__defineSetter__.call(o, prop, desc.set);
            }
            if ('value' in desc) {
                o[prop] = desc.value;
            }
            return o;
        };
    }
}());

// ES 15.2.3.7 Object.defineProperties ( O, Properties )
if (typeof Object.defineProperties !== "function") {
    Object.defineProperties = function (o, properties) {
        if (o !== Object(o)) { throw TypeError("Object.defineProperties called on non-object"); }
        var name;
        for (name in properties) {
            if (Object.prototype.hasOwnProperty.call(properties, name)) {
                Object.defineProperty(o, name, properties[name]);
            }
        }
        return o;
    };
}


// ES5 15.2.3.14 Object.keys ( O )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
    Object.keys = function (o) {
        if (o !== Object(o)) { throw TypeError('Object.keys called on non-object'); }
        var ret = [], p;
        for (p in o) {
            if (Object.prototype.hasOwnProperty.call(o, p)) {
                ret.push(p);
            }
        }
        return ret;
    };
}

//----------------------------------------------------------------------
// ES5 15.3 Function Objects
//----------------------------------------------------------------------

//
// ES5 15.3.4 Properties of the Function Prototype Object
//

// ES5 15.3.4.5 Function.prototype.bind ( thisArg [, arg1 [, arg2, ... ]] )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind) {
    Function.prototype.bind = function (o) {
        if (typeof this !== 'function') { throw TypeError("Bind must be called on a function"); }

        var args = Array.prototype.slice.call(arguments, 1),
            self = this,
            nop = function() {},
            bound = function () {
                return self.apply(this instanceof nop ? this : o,
                    args.concat(Array.prototype.slice.call(arguments)));
            };

        if (this.prototype)
            nop.prototype = this.prototype;
        bound.prototype = new nop();
        return bound;
    };
}


//----------------------------------------------------------------------
// ES5 15.4 Array Objects
//----------------------------------------------------------------------

//
// ES5 15.4.3 Properties of the Array Constructor
//


// ES5 15.4.3.2 Array.isArray ( arg )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
Array.isArray = Array.isArray || function (o) { return Boolean(o && Object.prototype.toString.call(Object(o)) === '[object Array]'); };


//
// ES5 15.4.4 Properties of the Array Prototype Object
//

// ES5 15.4.4.14 Array.prototype.indexOf ( searchElement [ , fromIndex ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */) {
        if (this === void 0 || this === null) { throw TypeError(); }

        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) { return -1; }

        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (isNaN(n)) {
                n = 0;
            } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }

        if (n >= len) { return -1; }

        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

// ES5 15.4.4.15 Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
if (!Array.prototype.lastIndexOf) {
    Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/) {
        if (this === void 0 || this === null) { throw TypeError(); }

        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) { return -1; }

        var n = len;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n !== n) {
                n = 0;
            } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }

        var k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);

        for (; k >= 0; k--) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

// ES5 15.4.4.16 Array.prototype.every ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
if (!Array.prototype.every) {
    Array.prototype.every = function (fun /*, thisp */) {
        if (this === void 0 || this === null) { throw TypeError(); }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function") { throw TypeError(); }

        var thisp = arguments[1], i;
        for (i = 0; i < len; i++) {
            if (i in t && !fun.call(thisp, t[i], i, t)) {
                return false;
            }
        }

        return true;
    };
}

// ES5 15.4.4.17 Array.prototype.some ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some) {
    Array.prototype.some = function (fun /*, thisp */) {
        if (this === void 0 || this === null) { throw TypeError(); }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function") { throw TypeError(); }

        var thisp = arguments[1], i;
        for (i = 0; i < len; i++) {
            if (i in t && fun.call(thisp, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

// ES5 15.4.4.18 Array.prototype.forEach ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fun /*, thisp */) {
        if (this === void 0 || this === null) { throw TypeError(); }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function") { throw TypeError(); }

        var thisp = arguments[1], i;
        for (i = 0; i < len; i++) {
            if (i in t) {
                fun.call(thisp, t[i], i, t);
            }
        }
    };
}


// ES5 15.4.4.19 Array.prototype.map ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Map
if (!Array.prototype.map) {
    Array.prototype.map = function (fun /*, thisp */) {
        if (this === void 0 || this === null) { throw TypeError(); }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function") { throw TypeError(); }

        var res = []; res.length = len;
        var thisp = arguments[1], i;
        for (i = 0; i < len; i++) {
            if (i in t) {
                res[i] = fun.call(thisp, t[i], i, t);
            }
        }

        return res;
    };
}

// ES5 15.4.4.20 Array.prototype.filter ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Filter
if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun /*, thisp */) {
        if (this === void 0 || this === null) { throw TypeError(); }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function") { throw TypeError(); }

        var res = [];
        var thisp = arguments[1], i;
        for (i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t)) {
                    res.push(val);
                }
            }
        }

        return res;
    };
}


// ES5 15.4.4.21 Array.prototype.reduce ( callbackfn [ , initialValue ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Reduce
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (fun /*, initialValue */) {
        if (this === void 0 || this === null) { throw TypeError(); }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function") { throw TypeError(); }

        // no value to return if no initial value and an empty array
        if (len === 0 && arguments.length === 1) { throw TypeError(); }

        var k = 0;
        var accumulator;
        if (arguments.length >= 2) {
            accumulator = arguments[1];
        } else {
            do {
                if (k in t) {
                    accumulator = t[k++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++k >= len) { throw TypeError(); }
            }
            while (true);
        }

        while (k < len) {
            if (k in t) {
                accumulator = fun.call(undefined, accumulator, t[k], k, t);
            }
            k++;
        }

        return accumulator;
    };
}


// ES5 15.4.4.22 Array.prototype.reduceRight ( callbackfn [, initialValue ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/ReduceRight
if (!Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function (callbackfn /*, initialValue */) {
        if (this === void 0 || this === null) { throw TypeError(); }

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof callbackfn !== "function") { throw TypeError(); }

        // no value to return if no initial value, empty array
        if (len === 0 && arguments.length === 1) { throw TypeError(); }

        var k = len - 1;
        var accumulator;
        if (arguments.length >= 2) {
            accumulator = arguments[1];
        } else {
            do {
                if (k in this) {
                    accumulator = this[k--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--k < 0) { throw TypeError(); }
            }
            while (true);
        }

        while (k >= 0) {
            if (k in t) {
                accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
            }
            k--;
        }

        return accumulator;
    };
}


//----------------------------------------------------------------------
// ES5 15.5 String Objects
//----------------------------------------------------------------------

//
// ES5 15.5.4 Properties of the String Prototype Object
//


// ES5 15.5.4.20 String.prototype.trim()
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return String(this).replace(/^\s+/, '').replace(/\s+$/, '');
    };
}



//----------------------------------------------------------------------
// ES5 15.9 Date Objects
//----------------------------------------------------------------------


//
// ES 15.9.4 Properties of the Date Constructor
//

// ES5 15.9.4.4 Date.now ( )
// From https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Date/now
if (!Date.now) {
    Date.now = function now() {
        return Number(new Date());
    };
}


//
// ES5 15.9.5 Properties of the Date Prototype Object
//

// ES5 15.9.4.43 Date.prototype.toISOString ( )
// Inspired by http://www.json.org/json2.js
if (!Date.prototype.toISOString) {
    Date.prototype.toISOString = function () {
        function pad2(n) { return ('00' + n).slice(-2); }
        function pad3(n) { return ('000' + n).slice(-3); }

        return this.getUTCFullYear() + '-' +
            pad2(this.getUTCMonth() + 1) + '-' +
            pad2(this.getUTCDate()) + 'T' +
            pad2(this.getUTCHours()) + ':' +
            pad2(this.getUTCMinutes()) + ':' +
            pad2(this.getUTCSeconds()) + '.' +
            pad3(this.getUTCMilliseconds()) + 'Z';
    };
}

function isIe8() {
    var na = navigator.userAgent.toLowerCase(),
        isIE = !/opera/.test(na) && /msie/.test(na),
        docMode = document.documentMode;

    return isIE && (/msie 8/.test(na) && docMode != 7 && docMode != 9 || docMode == 8);

}$(document).ready(function () {
    var posHash = window.location.href.indexOf('#'),
        section = $('#section'),
        subject = $('#subject');

    if (typeof sections != "undefined") {
        setSections(section);

        if (posHash != '-1') {
            var question = $(window.location.href.slice(posHash)),
                subjectDiv = question.parents('[id^=subject]'),
                subjectDivId = subjectDiv.attr('id'),
                sectionId = 'section_' + subjectDivId.split("_")[1];

          //  if (auth == '1' || sectionId != 'section_2') {
                setSections(section, sectionId);
                setSubjects(sectionId);
                subject.
                    find('option:selected').
                    removeAttr("selected");
                subject.
                    find('option[value="'+subjectDivId+'"]').
                    attr('selected', 'selected');
                openAnswersBlock(subjectDivId);

                toggleAnswer(question.parent().next('.answer'));
                $('html, body').animate({scrollTop: question.offset().top}, 500);
          //  }
        }

        $('.show-answer').click(function (e) {
            toggleAnswer($(e.target).parent());
        });
        $('.hide-answer').click(function (e) {
            toggleAnswer($(e.target).parent());
        });
    }
});

/**
 * Открываем блок с ответами
 *
 * @param id
 */
function openAnswersBlock(id) {
    var el = $('#answer-content-element');
    $.each(el.find('> div'), function() {
       !$(this).hasClass('display-none') && $(this).addClass('display-none');
    });
    el.find('#'+id).removeClass('display-none');
}

/**
 * Наполняем блок с тематиками
 *
 * @param el
 * @param id
 */
function setSubjects(id) {
    var el = $('#subject');
    el.empty();
    $.each(subjects[id], function (key, value) {
        el.append($("<option></option>").attr("value",key).text(value));
    });
    openAnswersBlock(el.find("option").first().attr('value'));
}

/**
 * Устанавливаем секции
 * @param items
 * @param el
 */
function setSections(el, id) {
    el.empty();
    id = id || false;
    $.each(sections, function (key, value) {
        if (auth == '' && key == 'section_2') { return; }

        el.append($("<option></option>").attr("value",key).text(value));
    });

   /* if (auth == '') {
        el.find('option[value=section_1]').attr("selected", "selected");
    } else {
        el.find('option[value=section_2]').attr("selected", "selected");
    }
*/
    if (false !== id) {
        if (el.find('option[value='+id+']').length > 0) {
            el.find('option[value='+id+']').attr("selected", "selected");
        }
    }

    setSubjects(el.find(':selected').first().attr('value'));
}

/**
 * Показать ответ
 *
 * @param el
 */
function toggleAnswer(el) {
    // el - ссылка на блок answer
    var content = el.find('.content');

    if (content.is(":visible")) {
        content.hide();
        el.find('.hide-answer').hide();
        el.find('.show-answer').show();
    } else {
        content.show();
        el.find('.hide-answer').show();
        el.find('.show-answer').hide();
    }
}
$(function () {
    if (!areCookiesEnabled()) {
        $('#login-block').hide();
    } else {
        var rememberMeSpan = $('#__remember_me_checkbox'),
            rememberMeCheckbox = $('#__remember_me'),
            userLoginInput = $('input[name="username"]'),
            userLogin = $.cookie('userName'),
            countTry = 0;

        if (userLogin) {
            rememberMeSpan.addClass('checked');
            rememberMeCheckbox.attr('checked', true);
            userLoginInput.val(userLogin);
        }

        rememberMeSpan.click(function () {
            $(this).toggleClass('checked');

            rememberMeCheckbox.attr(
                'checked', !rememberMeCheckbox.attr('checked')
            );
        });

        $(document).keydown(function(e)
        {
            if (e.keyCode === 13) {
                $("#form-submit-login").click();
            }
        });

        $("input[name='username']").keydown(function (e) {
            $('.error-block').hide();
            var charCode = (e.which) ? e.which : e.keyCode;

            if (!e.ctrlKey) {
                //if the letter is not digit then display error and don't type anything
                if (charCode != 8 && charCode != 9 && charCode != 13 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode >105)) {
                    return false;
                }
            } else {
                if (charCode != 67 && charCode != 86 && charCode != 88) {
                    return false;
                }
            }
        });

        $("input[name='password']").keypress(function () {
            $('.error-block').hide();
        });

        $("input[name='captcha']").keypress(function () {
            $('.error-block').hide();
        });

        $('#newCaptcha').click(function() {
            $('#captchaImage').attr('src', '/generateCaptcha?' + new Date().getTime());
            $('input[name="captcha"]').val('');
        });

        $("#form-submit-login").click(function (e) {
            var name = $('input[name="username"]').val(),
                pass = $('input[name="password"]').val(),
                captcha = $('input[name="captcha"]').val(),
                error = false,
                loadingDiv = $('#loadingDiv'),
                params = {
                    username: name,
                    password: pass,
                    _version: $('[name="version"]').val(),
                    _token: $.trim($('#_token').text()),
                    authType: 1
                };

            if (12 !== name.length) {
                showError('Неправильный логин пользователя.');
                return false;
            } else if (0 === pass.length) {
                showError('Неправильный пароль пользователя.');
                return false;
            }

            if (countTry >=3) {
                if (6 !== captcha.length) {
                    showError('Неправильно введены цифры с картинки.');
                    return false;
                } else {
                    params.withCaptcha = 1;
                    params.captcha = captcha;
                }

            }

            loadingDiv.show();
            request.init($('input[name="version"]').val());

            var defaultError = 'Сервис временно недоступен по техническим причинам. Пожалуйста, повторите попытку позже.';
            request.send(
                {
                    url: '/api/auth/login/password',
                    params: params
                },
                function (resp) {
                    if (false == resp) {
                        loadingDiv.hide();
                        showError(defaultError);
                    } else {
                        if (1 == resp.status
                            || (typeof resp.response.code != "undefined" && resp.response.code == 'USER_NOT_FOUND')
                        ) {
                            if (rememberMeCheckbox.attr('checked')) {
                                //если не устновить атрибут expires то куки вылетят при закрытии браузера
                                $.cookie('userName', name, {expires: 20*365});
                            }
                            var index = document.location.href.indexOf('#!'),
                                location = '/lk';
                            if (index !== -1) {
                                location += document.location.href.substring(index);
                            }
                            window.location = location;
                        } else { console.log(resp.response.code);
                            if (typeof resp.response == "undefined"
                                || resp.response.length == 0) {
                                loadingDiv.hide();
                                showError(defaultError);
                            } else if ('PASSWORD_EXPIRED' == resp.response.code) {
                                window.location = '/restricted/expired';
                            } else if ('ACCESS_DENIED' === resp.response.code) {
                                window.location = '/restricted/cancelled';
                            } else if ('TECHNICAL_ERROR' == resp.response.code) {
                                window.location = '/restricted/deny';
                            } else if ('NO_OGRNIP' == resp.response.code) {
                                window.location = '/restricted/auth';
                            } else if ('ACTIVITY_CANCELED' == resp.response.code) {
                                window.location = '/restricted/egrip';
                            } else if ('INVALID_USERNAME' == resp.response.code) {
                                loadingDiv.hide();
                                showError(resp.response.data);
                            } else if ('INVALID_PASSWORD' == resp.response.code) {
                                loadingDiv.hide();
                                if(resp.response.data == '10') {
                                    showError('Вы ввели неверный пароль. Просьба повторить попытку.');
                                } else {
                                    window.location = '/restricted/lkflerror'+resp.response.data;
                                }
                            } else if ('CAPTCHA_ERROR' == resp.response.code) {
                                loadingDiv.hide();
                                showError(resp.response.data);
                            } else if ('USER_WITHOUT_LKFL_PASSWORD_ERROR' == resp.response.code) {
                                loadingDiv.hide();
                                window.location = '/restricted/lkflpassword';
                            } else if ('BLOCKED' == resp.response.code) {
                                window.location = '/restricted/registrationerror';
                            } else {
                                loadingDiv.hide();
                                showError(defaultError);
                            }
                        }
                    }
                }
            );
        });
    }
    function showError(text) {
        text = text.length > 0 ? text : 'Сервис временно недоступен по техническим причинам.';
        $('.error-block>.flash-error').text(text);
        $('.error-block').show();

        if (++countTry == 3) {
            $('#captcha-table').removeClass('display-none');
        }
        if (countTry >= 3) {
            $('#newCaptcha').click();
        }
        return false;
    }

});
var request = {
    attempt: 1,
    maxAttempts: 10,
    firstDelay: 500,
    id: null,
    version: '',

    init: function(version) {
        this.version = version;
    },

    send: function(params, callback, attempt) {
        var me = this;
        attempt = attempt || 1;

        if (attempt <= me.maxAttempts) {
            $.ajax({
                type: params.type || 'POST',
                dataType: 'json',
                url: params.url,
                data: params.params,
                headers: {"Web-Client-Version": me.version},
                success: function(response) {
                    if (2 === response.status) {
                        me.id = setInterval(function() {
                            clearInterval(me.id);
                            me.send(params, callback, ++attempt);
                        }, me.firstDelay + (attempt * 1000) / 2);
                    } else {
                        callback(response);
                    }
                },
                error: function(response) {
                    window.location = '/restricted/'+response.status;
                }
            });
        } else {
            callback(false);
        }
    }
};
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
$(document).ready(function() {
    $("form").ajaxForm(function(responseText, status, responseObject) {
        $('#loadingDiv').hide();
        if ('success' == status) {
            responseObject = JSON.parse(responseObject.responseText);
            if (1 == responseObject.success) {
                var fileHash = responseObject.response[0];

                $('#filename').val(fileHash);
                $('.nicefileinput .NFI-button').hide();
                $('.nicefileinput .remove-button').show();
            } else {
                showError(responseObject.response.length > 0 ? responseObject.response : 'Произошла ошибка добавления файла. Возможно размер вашего файла превышает 20Мб.');
                $('.nicefileinput .remove-button').trigger('click');
            }
        } else {
            showError('Произошла ошибка добавления файла. Возможно размер вашего файла превышает 20Мб.');
            $('.nicefileinput .remove-button').trigger('click');
        }
    });
    $('#newCaptcha').click(function() {
        $('#captchaImage').attr('src', '/generateCaptcha?' + new Date().getTime());
    });

    $('input[type=file].nicefileinput').nicefileinput();

    $('.nicefileinput input').change(function(e) {
        var form = $('form'),
            rmvButton = $('.nicefileinput .remove-button'),
            baseButton = $('.nicefileinput .NFI-button');

        hideError();
        form.submit();

        $('#loadingDiv').show();
    });

    $('.nicefileinput .remove-button').click(function() {
        var rmvButton = $('.nicefileinput .remove-button'),
            baseButton = $('.nicefileinput .NFI-button');

        baseButton.show();
        rmvButton.hide();
        $('.nicefileinput input').val('');
        $('#filename').val('');
    });

    $('input').focus(function() {
        $('.success-send').hide();
    });

    $('#form-submit').on('click', function(e) {
        var formValues = $('form').serializeArray(),
            isAuth = $('input[name="isAuth"]').val(),
            error = [],
            notRequired = ['phone', 'isAuth', 'filename'],
            loadingDiv = $('#loadingDiv');

        hideError();

        $.each(formValues, function(index, item) {

            if (!item.value && $.inArray(item.name, notRequired) == '-1') {
                error.push('Вы заполнили не все обязательные поля');
                return false;
            }

            switch(item.name) {
                case 'inn':
                    if (item.value.length != 12) {
                        error.push('Поле "ИНН" должно содержать 12 символов.');
                    }
                    break;
                case 'ogrnIp':
                    if (item.value.length != 15) {
                        error.push('Поле "ОГРНИП" должно содержать 15 символов.');
                    }
                    if (! isAuth) {
                        var checkNumber = item.value.slice(0,-1)%13,
                            checkWith = item.value.slice(-1);
                        
                        if (checkNumber > 9) {
                            checkNumber  = (checkNumber+'').slice(-1);
                        }

                        if (checkNumber != checkWith) {
                            error.push('Поле "ОГРНИП" введено неверно.');
                        }
                    }
                    break;
                case 'email':
                    if (!isEmail(item.value)) {
                        error.push('Поле "E-mail" должно содержать адрес электронной почты.');
                    }
                    break;
                case 'captcha':
                    if (!isCaptcha(item.value)) {
                        error.push('Поле "Цифры с картинки" должно содержать 6 цифр.');
                    }
                    break;
            }
        });

        if (error.length) {
            error = error.join("<br>");
            showError(error);
            return false;
        }

        loadingDiv.show();
        request.init($('input[name="version"]').val());
        request.send(
            {
                url: '/api/support/send',
                params: $('form').serialize()
            },
            function(resp) {
                loadingDiv.hide();
                $('#newCaptcha').click();
                $('input[name="captcha"]').val('');
                if (false !== resp) {
                    if (0 !== resp.status) {
                        $('form').hide();
                        $('.right-panel').hide();
                        $('#form-submit').hide();
                        $('.success-send').show();
                    } else {
                        showError(resp.response);
                        $('html, body').animate({
                            scrollTop: 0
                        }, 800);
                    }
                } else {
                    showError('Произошла техническая ошибка.')
                }
            }
        );

    });
});

function showError(text) {
    $('.error-block>.flash-error').html(text);
    $('.error-block').show();
}

function hideError() {
    $('.error-block>.flash-error').text('');
    $('.error-block').hide();
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isCaptcha(value) {
    var regex = /^([0-9]{6})$/;
    return regex.test(value);
}
/*------------------------ Select  -----------------------------*/

$(function init(){
    if($('select').size()) var select=$('select').select();
});
//version 1.0.3
$.fn.select=function(o){
    var callMethod=$.fn.select.method,
        itemClick=jQuery.Event("itemClick"),
        selectReady=jQuery.Event("selectReady"),
        enabled=jQuery.Event("enabled"),
        disabled=jQuery.Event("disabled"),
        destroyed=jQuery.Event("destroyed");
    if(typeof o=="string" && o in $.fn.select.method){
        var select=$(this);
        callMethod[o](select);
        return select;
    }
    if(!("method" in $.fn.select)){
        $.fn.select.method={
            "destroy":function(select){
                if(select.data('customized')){
                    select.off('change.select');
                    $(document).off('click.select');
                    select.each(function(){
                        $(this).data('customSelect').off('click.select').remove();
                    });
                    select.removeData();
                    select.trigger('destroyed');
                }else{
                    throw new Error('объект не проинициализирован');
                }
            },
            "enable":function(select){
                if(select.data('disable')){
                    select.attr('disabled',false);
                    select.data('customSelect').first().on('click.select',select.data('openerHandler')).removeClass('disabled');
                    select.trigger('enabled');
                }
            },
            "disable":function(select){
                if(!select.data('disable')){
                    select.data('disable',true);
                    select.attr('disabled',true);
                    select.data('openerHandler',$._data(select.data('customSelect').first().get(0),"events").click[0].handler);
                    select.data('customSelect').first().off('click').addClass('disabled');
                    select.trigger('disabled');
                }
            }
        };
        callMethod=$.fn.select.method;
    }
    o=$.extend({
        "list":"ul",
        "item":"li",
        "itemHTML":"li",
        "openerClass":"dropdown",
        "icoClass":"dropdown_btn",
        "selectedClass":"dropdown_text",
        "activeItemClass":"active",
        "dropDownClass":"selectmenu-menu",
        "openerActiveClass":"state-active",
        "style":"dropdown", //popup,dropdown
        "transferClass":true,
        "dropdownHasBorder":true,
        "hasIcons":false,
        "resizable":false,
        "triggerEvents":true,
        "autocomplete":false
    },o);
    var select=[],
        body=$('body'),
        openerHTML=$('<a class="'+o.openerClass+'"><span class="'+o.icoClass+'"></span><span class="'+o.selectedClass+'"></span></a>'),
        dropdownHTML=$('<div class='+o.dropDownClass+'>'+
        '<div class="select-top">'+
        '<div class="select-l"></div>'+
        '<div class="select-r"></div>'+
        '</div>'+
        '<div class="select-c"><div class="dropdown_up dropdown-arrows"></div><div class="dropdown_down dropdown-arrows"></div>'+
        '<div class="c appendHere">'+
        '</div>'+
        '</div>'+
        '<div class="select-bottom">'+
        '<div class="select-l"></div>'+
        '<div class="select-r"></div>'+
        '</div>'+
        '</div>');
    $(this).each(function(i){
        if(!$(this).data('customized')){
            select.push(this);
        }
    });
    if(select.length){
        $(select).each(function(){
            var opener = openerHTML.clone(),
                nativeSelect = $(this),
                title=nativeSelect.find("option[title]").text(),
                selectId = nativeSelect.attr('id'),
                options=nativeSelect.find("option[title]").attr('disabled',true).end().find('option'),
                optionSize = options.size() - 1,
                dropdown = dropdownHTML.clone(),
                itemTree=o.itemHTML.split(' '),
                hasChild=itemTree.length>=2,
                list = "<" + o.list + ">";
            nativeSelect.find('option').each(function(i, data){
                if($(this).attr('title')){
                    list += "<" + o.item + " data-val='"+data.value+"' class='title' style='display:none;'>" + data.childNodes[0].nodeValue + "</" + o.item + ">";
                }else{
                    if(!hasChild){
                        list += "<" + o.item + (data.selected?" class='active' ":"") + " data-val='"+data.value+"'><span>" + data.childNodes[0].nodeValue + "</span></" + o.item + ">";
                    }else{
                        var buffer='';
                        for(var k=itemTree.length-1;k!=0;k--){
                            if(!buffer){
                                buffer+="<" + itemTree[k] + " >"+ data.childNodes[0].nodeValue +"</" + itemTree[k] + ">";
                            }else if(k!=0 && itemTree.length>2){
                                buffer="<" + itemTree[k] + ">"+buffer+"</" + itemTree[k] + ">";
                            }
                        }
                        buffer="<" + itemTree[0] + ">"+buffer+"</" + itemTree[0] + ">";
                        list+=buffer;
                    }
                }
                if (i == optionSize) {
                    list += "</" + o.list + ">";
                }
            });
            list = $(list);
            dropdown = dropdown.find('.appendHere').removeClass('appendHere').append(list).end();
            opener.insertAfter(nativeSelect);
            opener.find('.'+o.selectedClass).text(nativeSelect.find('option:selected').text());
            body.append(dropdown);
            (o.dropdownHasBorder) ? dropdown.width(opener.width()) : dropdown.width(opener.outerWidth());
            if(o.transferClass){
                opener.addClass(opener.attr('class') + " " + nativeSelect.attr('class'));
                dropdown.addClass(dropdown.attr('class') + " " + nativeSelect.attr('class'));
            }
            $(this).data('customSelect', opener.add(dropdown));
            $(this).data('customized', true);
            var listItems = list.find(">" + o.item),
                dropdownWidth = dropdown.outerWidth(),
                dropdownHeight = dropdown.outerHeight();
            selectedByHover='',
                selected='';
            if(!o.resizable){
                //opener.width(nativeSelect.width());
                (o.dropdownHasBorder) ? dropdownWidth=dropdown.width(opener.width()) : dropdownWidth=dropdown.width(opener.outerWidth());
            }else{
                $(window).on('resize.opener',function(){
                    (o.dropdownHasBorder) ? dropdownWidth=dropdown.width(opener.width()) : dropdownWidth=dropdown.width(opener.outerWidth());
                }).trigger('resize.opener');
            }
            if(title){
                opener.find('.'+o.selectedClass).text(title);
                nativeSelect.trigger('change.select',[options.filter(':selected').index()]);
            }
            //autocomplete section
            if($(this).hasClass("writable")){
                o.autocomplete = true;
            }
            if(o.autocomplete){
                if(title) opener.find('.'+o.selectedClass).get(0).defaultValue=title;
                opener.find('.'+o.selectedClass).html('<input type="text" />');
                opener.find('.'+o.selectedClass).find('input').mouseup(function(e){
                    var ooo5 = $(this);
                    var offset = ooo5.offset();
                    var relativeX = (e.pageX - offset.left);
                    var relativeY = (e.pageY - offset.top);
                    if(relativeX<0 || relativeX>ooo5.width() || relativeY<0 || relativeY>ooo5.height()){
                        return false;
                    }

                    // alert("X: " + relativeX + "  Y: " + relativeY);

                    $(this).val("");

                }).blur(function(e){
                    var o55 = $(this);
                    if($.trim(o55.val()).length==0){
                        o55.val(nativeSelect.find(":selected").text());
                    }
                }).keyup(function(e){
                    var searchVal=$.trim($(this).val()),
                        matched=[];

                    dropdown.show();
                    listItems.not('.title').each(function(){
                        var text=$(this).text();
                        var textv=$(this).attr("data-val");
                        if((new RegExp(searchVal,'ig')).test(text)){
                            matched.push(this);
                        }else if((new RegExp(searchVal,'ig')).test(textv)){
                            matched.push(this);
                        }
                    });
                    matched=$(matched);
                    matched.show().first().addClass(o.activeItemClass).siblings().removeClass(o.activeItemClass);
                    listItems.not(matched).hide();
                    $(this).off('keydown').keydown(function(e){
                        if(e.keyCode==13){
                            matched.first().trigger('click');
                            $(this).blur();
                        }
                    });
                    if(!listItems.filter(':visible').size()){
                        dropdown.hide();
                    }
                }).val($(this).find(":selected").text());
            }
            nativeSelect.on("change.select", function(e, selectedIndex,dontHide){
                if (!selectedIndex && selectedIndex !== 0) selectedIndex = this.selectedIndex;
                listItems.removeClass(o.activeItemClass).eq(selectedIndex).addClass(o.activeItemClass);
                selected=options.removeAttr('selected').eq(selectedIndex);
                selected.get(0).selected=true;
                selectedByHover=selected;
                if(o.autocomplete) {
                    opener.find('input').val(selected.text());
                }else{
                    opener.find('.'+o.selectedClass).text(selected.text());
                }
                if(!dontHide){
                    dropdown.hide();
                    $(document).off('keydown.select');
                }
                if ('section' === nativeSelect.attr('id')) {
                    setSubjects(selected.attr('value'));
                    $('#subject').select('destroy').select();
                } else {
                    openAnswersBlock(selected.attr('value'));
                }
            });
            if(o.hasIcons){
                options.each(function(i){
                    listItems.eq(i).prepend('<span class="'+this.className+'"></span>');
                });
                nativeSelect.on("change.select",function(e, selectedIndex,dontHide){
                    opener.find('.'+o.selectedClass).prepend('<span class="'+selected.attr('class')+'"></span>');
                });
            }
            nativeSelect.hide();
            listItems.click(function(e){
                nativeSelect.trigger("change.select", [$(this).index()]);
                dropdown.hide();
                opener.removeClass(o.openerActiveClass);
            });
            listItems.hover(function(){
                selectedByHover=$(this);
            },function(){
                selectedByHover="";
            });
            opener.click(function(e){
                if(dropdown.is(':hidden')){

                    var ooo5 = $(this);
                    var offset = ooo5.offset();
                    var relativeX = (e.pageX - offset.left);
                    var relativeY = (e.pageY - offset.top);

                    var a = relativeX<0;
                    var b = relativeX>ooo5.width();
                    var c = relativeY<0;
                    var d = relativeY>ooo5.height();
                    if(a || b || c || d){
                        return false;
                    }

                    opener.addClass(o.openerActiveClass);

                    alignDropDown();
                    $(document).off('keydown.select');
                    $(document).on('keydown.select',function(e){
                        if(e.keyCode==13 && selectedByHover){
                            nativeSelect.trigger("change.select",[selectedByHover.index()]);
                            e.preventDefault();
                        }
                        if(e.keyCode==38 && selected.prev().size() && !selected.prev().is(':disabled')){
                            nativeSelect.trigger("change.select",[selected.prev().index(),true]);
                            if(o.style=="popup"){
                                alignDropDown();
                            }
                            e.preventDefault();
                        }else if(e.keyCode==40 && selected.next().size() && !selected.next().is(':disabled')){
                            nativeSelect.trigger("change.select",[selected.next().index(),true]);
                            alignDropDown();
                            e.preventDefault();
                        }
                    });

                    var cul = dropdown.find("ul");
                    var cli = cul.find("li");
                    var ci = 0;
                    for(var i=0;i<cli.length;i++){
                        if($(cli[i]).hasClass("active"))
                            break;
                        ci=ci+1;
                    }
                    if(ci>3 && cli.length>7){
                        ci = ci - 3;
                    } else {
                        ci = 0;
                    }

                    if(cli.length<=7){
                        dropdown.find(".dropdown-arrows").hide();
                        dropdown.find("ul").css("margin","0px");
                    }


                    dropdown.show();
                    cul.scrollTop(28*ci);
                }else{
                    opener.removeClass(o.openerActiveClass);
                    dropdown.hide();
                }
            });

            var go_down = function(){
                var el = $(this).parent().find("ul");
                el.scrollTop(el.scrollTop()+196);
            };

            $(".dropdown_down").click(go_down);

            var go_up = function(){
                var el = $(this).parent().find("ul");
                var z = el.scrollTop()-196;
                if(z<0) z = 0;
                el.scrollTop(z);
            };

            $(".dropdown_up").click(go_up);
            var dtsc = new Date(2012,10,10);
            /*$(".select-c > .c").mousewheel(function (event, delta) {
                //console.log(delta);
                if(delta == -1){
                    var el = $(".dropdown_down").parent().find("ul");
                    el.scrollTop(el.scrollTop()+49);
                } else {
                    var el = $(".dropdown_down").parent().find("ul");
                    el.scrollTop(el.scrollTop()-49);
                }
                return false;
            });*/


            $(window).on('resize.select', function(){
                if (dropdown.is(':visible')){
                    alignDropDown();
                }
            });
            $(document).on('mousedown.select', function(e){
                if (!$(e.target).closest(dropdown).size() && !$(e.target).closest(opener).size()) {
                    dropdown.hide();
                    opener.removeClass(o.openerActiveClass);
                    $(document).off('keydown.select');
                }
            });
            //event section
            if(o.triggerEvents){
                listItems.click(function(e){
                    nativeSelect.trigger(itemClick, [$(this).text()]);
                });
                nativeSelect.trigger(selectReady,[dropdown]);
            }
            function alignDropDown(){
                if(o.style=="dropdown"){
                    var top = opener.offset().top + opener.outerHeight(),
                        left = opener.offset().left;
                    /*
                     if(top + dropdownHeight > $(window).height() && top - dropdownHeight - opener.outerHeight() > 0){
                     dropdown.css({
                     'top': top - dropdownHeight - opener.outerHeight(),
                     'left': left
                     });
                     }else{
                     */
                    dropdown.css({
                        'top': top,
                        'left': left
                    });
                    /*
                     }
                     */
                }else{
                    var top = opener.offset().top-listItems.filter("."+o.activeItemClass).position().top,
                        left = opener.offset().left;
                    dropdown.css({
                        'top': top,
                        'left': left
                    });
                }
            }
            if(nativeSelect.is(':disabled')) nativeSelect.select('disable');
        });
    }else{
        throw Error('селект/ы уже проинициализирован/ы');
    }
}
