protobowl_auth_build = 'Thu Dec 17 2015 14:15:43 GMT-0500 (EST)';

window.Modernizr=function(t,e,n){function o(t){f.cssText=t}function i(t,e){return typeof t===e}var s,r,a,c="2.6.1",l={},u=!0,h=e.documentElement,d="modernizr",p=e.createElement(d),f=p.style,m=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),v={},g=[],y=g.slice,b=function(t,n,o,i){var s,r,a,c=e.createElement("div"),l=e.body,u=l?l:e.createElement("body");if(parseInt(o,10))for(;o--;)a=e.createElement("div"),a.id=i?i[o]:d+(o+1),c.appendChild(a);return s=["&#173;",'<style id="s',d,'">',t,"</style>"].join(""),c.id=d,(l?c:u).innerHTML+=s,u.appendChild(c),l||(u.style.background="",h.appendChild(u)),r=n(c,t),l?c.parentNode.removeChild(c):u.parentNode.removeChild(u),!!r},w={}.hasOwnProperty;a=i(w,"undefined")||i(w.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return w.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=y.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=e.prototype;var s=new i,r=e.apply(s,n.concat(y.call(arguments)));return Object(r)===r?r:s}return e.apply(t,n.concat(y.call(arguments)))};return o}),v.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:b(["@media (",m.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n};for(var k in v)a(v,k)&&(r=k.toLowerCase(),l[r]=v[k](),g.push((l[r]?"":"no-")+r));return l.addTest=function(t,e){if("object"==typeof t)for(var o in t)a(t,o)&&l.addTest(o,t[o]);else{if(t=t.toLowerCase(),l[t]!==n)return l;e="function"==typeof e?e():e,u&&(h.className+=" "+(e?"":"no-")+t),l[t]=e}return l},o(""),p=s=null,function(t,e){function n(t,e){var n=t.createElement("p"),o=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var t=g.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=v[t[f]];return e||(e={},m++,t[f]=m,v[m]=e),e}function s(t,n,o){if(n||(n=e),u)return n.createElement(t);o||(o=i(n));var s;return s=o.cache[t]?o.cache[t].cloneNode():p.test(t)?(o.cache[t]=o.createElem(t)).cloneNode():o.createElem(t),s.canHaveChildren&&!d.test(t)?o.frag.appendChild(s):s}function r(t,n){if(t||(t=e),u)return t.createDocumentFragment();n=n||i(t);for(var s=n.frag.cloneNode(),r=0,a=o(),c=a.length;c>r;r++)s.createElement(a[r]);return s}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return g.shivMethods?s(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(g,e.frag)}function c(t){t||(t=e);var o=i(t);return g.shivCSS&&!l&&!o.hasCSS&&(o.hasCSS=!!n(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||a(t,o),t}var l,u,h=t.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f="_html5shiv",m=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,u=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){l=!0,u=!0}}();var g={elements:h.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:h.shivCSS!==!1,supportsUnknownElements:u,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:c,createElement:s,createDocumentFragment:r};t.html5=g,c(e)}(this,e),l._version=c,l._prefixes=m,l.testStyles=b,h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+g.join(" "):""),l}(this,this.document),function(t,e,n){function o(t){return"[object Function]"==v.call(t)}function i(t){return"string"==typeof t}function s(){}function r(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=g.shift();y=1,t?t.t?f(function(){("c"==t.t?d.injectCss:d.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),a()):y=0}function c(t,n,o,i,s,c,l){function u(e){if(!p&&r(h.readyState)&&(b.r=p=1,!y&&a(),h.onload=h.onreadystatechange=null,e)){"img"!=t&&f(function(){k.removeChild(h)},50);for(var o in E[n])E[n].hasOwnProperty(o)&&E[n][o].onload()}}var l=l||d.errorTimeout,h=e.createElement(t),p=0,v=0,b={t:o,s:n,e:s,a:c,x:l};1===E[n]&&(v=1,E[n]=[]),"object"==t?h.data=n:(h.src=n,h.type=t),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){u.call(this,v)},g.splice(i,0,b),"img"!=t&&(v||2===E[n]?(k.insertBefore(h,w?null:m),f(u,l)):E[n].push(h))}function l(t,e,n,o,s){return y=0,e=e||"j",i(t)?c("c"==e?C:$,t,e,this.i++,n,o,s):(g.splice(this.i++,0,t),1==g.length&&a()),this}function u(){var t=d;return t.loader={load:l,i:0},t}var h,d,p=e.documentElement,f=t.setTimeout,m=e.getElementsByTagName("script")[0],v={}.toString,g=[],y=0,b="MozAppearance"in p.style,w=b&&!!e.createRange().compareNode,k=w?p:m.parentNode,p=t.opera&&"[object Opera]"==v.call(t.opera),p=!!e.attachEvent&&!p,$=b?"object":p?"script":"img",C=p?"script":$,x=Array.isArray||function(t){return"[object Array]"==v.call(t)},T=[],E={},j={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};d=function(t){function e(t){var e,n,o,t=t.split("!"),i=T.length,s=t.pop(),r=t.length,s={url:s,origUrl:s,prefixes:t};for(n=0;r>n;n++)o=t[n].split("="),(e=j[o.shift()])&&(s=e(s,o));for(n=0;i>n;n++)s=T[n](s);return s}function r(t,i,s,r,a){var c=e(t),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(i&&(i=o(i)?i:i[t]||i[r]||i[t.split("/").pop().split("?")[0]]),c.instead?c.instead(t,i,s,r,a):(E[c.url]?c.noexec=!0:E[c.url]=1,s.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(o(i)||o(l))&&s.load(function(){u(),i&&i(c.origUrl,a,r),l&&l(c.origUrl,a,r),E[c.url]=2})))}function a(t,e){function n(t,n){if(t){if(i(t))n||(h=function(){var t=[].slice.call(arguments);d.apply(this,t),p()}),r(t,h,e,0,l);else if(Object(t)===t)for(c in a=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(c)&&(!n&&!--a&&(o(h)?h=function(){var t=[].slice.call(arguments);d.apply(this,t),p()}:h[c]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),p()}}(d[c])),r(t[c],h,e,c,l))}else!n&&p()}var a,c,l=!!t.test,u=t.load||t.both,h=t.callback||s,d=h,p=t.complete||s;n(l?t.yep:t.nope,!!u),u&&n(u)}var c,l,h=this.yepnope.loader;if(i(t))r(t,0,h,0);else if(x(t))for(c=0;c<t.length;c++)l=t[c],i(l)?r(l,0,h,0):x(l)?d(l):Object(l)===l&&a(l,h);else Object(t)===t&&a(t,h)},d.addPrefix=function(t,e){j[t]=e},d.addFilter=function(t){T.push(t)},d.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",h=function(){e.removeEventListener("DOMContentLoaded",h,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,n,o,i,c,l){var u,h,p=e.createElement("script"),i=i||d.errorTimeout;p.src=t;for(h in o)p.setAttribute(h,o[h]);n=l?a:n||s,p.onreadystatechange=p.onload=function(){!u&&r(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},f(function(){u||(u=1,n(1))},i),c?p.onload():m.parentNode.insertBefore(p,m)},t.yepnope.injectCss=function(t,n,o,i,r,c){var l,i=e.createElement("link"),n=c?a:n||s;i.href=t,i.rel="stylesheet",i.type="text/css";for(l in o)i.setAttribute(l,o[l]);r||(m.parentNode.insertBefore(i,m),f(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("csscalc",function(t,e,n){return e="width:",n="calc(10px);",t=document.createElement("div"),t.style.cssText=e+Modernizr._prefixes.join(n+e),!!t.style.length}),!function(t){t(function(){"use strict";t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}()})}(window.jQuery),!function(t){"use strict";function e(){t(o).each(function(){n(t(this)).removeClass("open")})}function n(e){var n,o=e.attr("data-target");return o||(o=e.attr("href"),o=o&&/#/.test(o)&&o.replace(/.*(?=#[^\s]*$)/,"")),n=o&&t(o),n&&n.length||(n=e.parent()),n}var o="[data-toggle=dropdown]",i=function(e){var n=t(e).on("click.dropdown.data-api",this.toggle);t("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};i.prototype={constructor:i,toggle:function(){var o,i,s=t(this);if(!s.is(".disabled, :disabled"))return o=n(s),i=o.hasClass("open"),e(),i||o.toggleClass("open"),s.focus(),!1},keydown:function(e){var i,s,r,a,c;if(/(38|40|27)/.test(e.keyCode)&&(i=t(this),e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled"))){if(r=n(i),a=r.hasClass("open"),!a||a&&27==e.keyCode)return 27==e.which&&r.find(o).focus(),i.click();s=t("[role=menu] li:not(.divider):visible a",r),s.length&&(c=s.index(s.filter(":focus")),38==e.keyCode&&c>0&&c--,40==e.keyCode&&c<s.length-1&&c++,~c||(c=0),s.eq(c).focus())}}};var s=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),o=n.data("dropdown");o||n.data("dropdown",o=new i(this)),"string"==typeof e&&o[e].call(n)})},t.fn.dropdown.Constructor=i,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=s,this},t(document).on("click.dropdown.data-api",e).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown-menu",function(t){t.stopPropagation()}).on("click.dropdown.data-api",o,i.prototype.toggle).on("keydown.dropdown.data-api",o+", [role=menu]",i.prototype.keydown)}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.options=n,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,n=t.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(t("body").addClass("modal-open"),this.isShown=!0,this.escape(),this.backdrop(function(){var n=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),n&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1).focus(),e.enforceFocus(),n?e.$element.one(t.support.transition.end,function(){e.$element.trigger("shown")}):e.$element.trigger("shown")}))},hide:function(e){e&&e.preventDefault(),e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,t("body").removeClass("modal-open"),this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,n=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(n),e.hideModal()})},hideModal:function(){this.$element.hide().trigger("hidden"),this.backdrop()},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&n;this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(document.body),"static"!=this.options.backdrop&&this.$backdrop.click(t.proxy(this.hide,this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),o?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,t.proxy(this.removeBackdrop,this)):this.removeBackdrop()):e&&e()}},t.fn.modal=function(n){return this.each(function(){var o=t(this),i=o.data("modal"),s=t.extend({},t.fn.modal.defaults,o.data(),"object"==typeof n&&n);i||o.data("modal",i=new e(this,s)),"string"==typeof n?i[n]():s.show&&i.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t(function(){t("body").on("click.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),o=n.attr("href"),i=t(n.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},i.data(),n.data());e.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})})}(window.jQuery),!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,n,o){var i,s;this.type=e,this.$element=t(n),this.options=this.getOptions(o),this.enabled=!0,"click"==this.options.trigger?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=this.options.trigger&&(i="hover"==this.options.trigger?"mouseenter":"focus",s="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.leave,this))),this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,e,this.$element.data()),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var n=t(e.currentTarget)[this.type](this._options).data(this.type);return n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show),void 0):n.show()},leave:function(e){var n=t(e.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide),void 0):n.hide()},show:function(){var t,e,n,o,i,s,r;if(this.hasContent()&&this.enabled){switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,e=/in/.test(s),t.remove().css({top:0,left:0,display:"block"}).appendTo(e?this.$element:document.body),n=this.getPosition(e),o=t[0].offsetWidth,i=t[0].offsetHeight,e?s.split(" ")[1]:s){case"bottom":r={top:n.top+n.height,left:n.left+n.width/2-o/2};break;case"top":r={top:n.top-i,left:n.left+n.width/2-o/2};break;case"left":r={top:n.top+n.height/2-i/2,left:n.left-o};break;case"right":r={top:n.top+n.height/2-i/2,left:n.left+n.width}}t.css(r).addClass(s).addClass("in")}},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){function e(){var e=setTimeout(function(){n.off(t.support.transition.end).remove()},500);n.one(t.support.transition.end,function(){clearTimeout(e),n.remove()})}var n=this.tip();return n.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?e():n.remove(),this},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(e){return t.extend({},e?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},t.fn.tooltip=function(n){return this.each(function(){var o=t(this),i=o.data("tooltip"),s="object"==typeof n&&n;i||o.data("tooltip",i=new e(this,s)),"string"==typeof n&&i[n]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!0}}(window.jQuery),!function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content > *")[this.options.html?"html":"text"](n),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,e=this.$element,n=this.options;return t=e.attr("data-content")||("function"==typeof n.content?n.content.call(e[0]):n.content)},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}),t.fn.popover=function(n){return this.each(function(){var o=t(this),i=o.data("popover"),s="object"==typeof n&&n;i||o.data("popover",i=new e(this,s)),"string"==typeof n&&i[n]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(t){"use strict";var e='[data-dismiss="alert"]',n=function(n){t(n).on("click",e,this.close)};n.prototype.close=function(e){function n(){o.trigger("closed").remove()}var o,i=t(this),s=i.attr("data-target");s||(s=i.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),o=t(s),e&&e.preventDefault(),o.length||(o=i.hasClass("alert")?i:i.parent()),o.trigger(e=t.Event("close")),e.isDefaultPrevented()||(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.on(t.support.transition.end,n):o.slideUp("normal",function(){n()}))},t.fn.alert=function(e){return this.each(function(){var o=t(this),i=o.data("alert");i||o.data("alert",i=new n(this)),"string"==typeof e&&i[e].call(o)})},t.fn.alert.Constructor=n,t(function(){t("body").on("click.alert.data-api",e,n.prototype.close)})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,n)};e.prototype.setState=function(t){var e="disabled",n=this.$element,o=n.data(),i=n.is("input")?"val":"html";t+="Text",o.resetText||n.data("resetText",n[i]()),n[i](o[t]||this.options[t]),setTimeout(function(){"loadingText"==t?n.addClass(e).attr(e,e):n.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")},t.fn.button=function(n){return this.each(function(){var o=t(this),i=o.data("button"),s="object"==typeof n&&n;i||o.data("button",i=new e(this,s)),"toggle"==n?i.toggle():n&&i.setState(n)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t(function(){t("body").on("click.button.data-api","[data-toggle^=button]",function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})})}(window.jQuery),!function(t){"use strict";var e=function(e,n){this.$element=t(e),this.options=t.extend({},t.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=t(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};e.prototype={constructor:e,select:function(){var t=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(t)).change(),this.hide()},updater:function(t){return t},show:function(){var e=t.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:e.top+e.height,left:e.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var e;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(e=t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source,e?this.process(e):this)},process:function(e){var n=this;return e=t.grep(e,function(t){return n.matcher(t)}),e=this.sorter(e),e.length?this.render(e.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,n=[],o=[],i=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?o.push(e):i.push(e):n.push(e);return n.concat(o,i)},highlighter:function(t){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return t.replace(new RegExp("("+e+")","ig"),function(t,e){return"<strong>"+e+"</strong>"})},render:function(e){var n=this;return e=t(e).map(function(e,o){return e=t(n.options.item).attr("data-value",o),e.find("a").html(n.highlighter(o)),e[0]}),e.first().addClass("active"),this.$menu.html(e),this},next:function(){var e=this.$menu.find(".active").removeClass("active"),n=e.next();n.length||(n=t(this.$menu.find("li")[0])),n.addClass("active")},prev:function(){var t=this.$menu.find(".active").removeClass("active"),e=t.prev();e.length||(e=this.$menu.find("li").last()),e.addClass("active")},listen:function(){this.$element.on("blur",t.proxy(this.blur,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)),(t.browser.chrome||t.browser.webkit||t.browser.msie)&&this.$element.on("keydown",t.proxy(this.keydown,this)),this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter","li",t.proxy(this.mouseenter,this))},move:function(t){if(this.shown){switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()}t.stopPropagation()}},keydown:function(e){this.suppressKeyPressRepeat=!~t.inArray(e.keyCode,[40,38,9,13,27]),this.move(e)},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},keyup:function(t){switch(t.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}t.stopPropagation(),t.preventDefault()},blur:function(){var t=this;setTimeout(function(){t.hide()},150)},click:function(t){t.stopPropagation(),t.preventDefault(),this.select()},mouseenter:function(e){this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")}},t.fn.typeahead=function(n){return this.each(function(){var o=t(this),i=o.data("typeahead"),s="object"==typeof n&&n;i||o.data("typeahead",i=new e(this,s)),"string"==typeof n&&i[n]()})},t.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},t.fn.typeahead.Constructor=e,t(function(){t("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(e){var n=t(this);n.data("typeahead")||(e.preventDefault(),n.typeahead(n.data()))})})}(window.jQuery);var assertion,auth,auth_cookie,logged_in,switch_socket;assertion=null,auth=null,auth_cookie=function(t){var e,n,o,i;t?jQuery.cookie("protoauth",t):"undefined"!=typeof t&&jQuery.cookie("protoauth","");try{i=jQuery.cookie("protoauth").split("&"),o=i[0],e=i[1],auth=JSON.parse(decodeURIComponent(e))}catch(s){n=s,auth=null}return $("body").toggleClass("authenticated",!!auth),$("#userinfo").is(":hidden")||!!auth===$("#user").is(":hidden")?$("#userinfo").fadeOut("normal",function(){return auth?($("#signin").hide(),$(".user-name").text(auth.email),$("#user").show(),$("#userinfo").fadeIn()):($("#signin").show(),$("#user").hide(),$("#userinfo").fadeIn())}):void 0},auth_cookie(),$(document).ready(function(){var t;return("undefined"!=typeof protobowl_config&&null!==protobowl_config?protobowl_config.auth:void 0)?"undefined"!=typeof navigator&&null!==navigator?null!=(t=navigator.id)?t.watch({loggedInUser:null!=auth?auth.email:void 0,onlogin:function(t){return assertion=t,connected()&&has_connected?me.link({assertion:assertion,audience:location.protocol+"//"+location.host+"/"}):void 0},onlogout:function(){return assertion=null,auth&&(verbAnnotation({verb:"logging out of the current authenticated session"}),switch_socket()),auth_cookie(null)}}):void 0:void 0:void 0}),logged_in=function(t){var e,n;return assertion=null,e=function(){return verbAnnotation({verb:"logging in and beginning a new authenticated session"}),"function"==typeof auth_cookie&&auth_cookie(t.cookie),switch_socket()},"okay"!==(null!=t?t.status:void 0)?(verbAnnotation({verb:"server rejected login request: "+(null!=t?t.reason:void 0)}),"undefined"!=typeof navigator&&null!==navigator?null!=(n=navigator.id)?n.logout():void 0:void 0):t.cookie?(null!=t?t.exists:void 0)||auth||me.score()<100?(auth||me.accelerate_cleanup(),e()):bootbox.dialog("<h4>Would you like to transfer your current score to your authenticated account?</h4> <p>This will allow you to play as the same user on multiple computers and allow your score to persist beyond cookie clears. While your score may still be deleted after a period of inactivity in popular rooms, you will be last in line for eviction.<p> <em>Note that if you log out of your current session, you will not be able to play as the current user without logging back in.</em>",[{label:"Don't Transfer","class":"btn",callback:function(){return me.accelerate_cleanup(),e(),!0}},{label:"Transfer to "+t.email,"class":"btn-primary",callback:function(){return me.transfer_account(t.cookie),e(),!0}}]):void 0},switch_socket=function(){return sock?(sock.hide_disconnect=!0,sock.socket.disconnect(),room.users={},sock.socket.reconnect(),sock.hide_disconnect=!1):void 0},$("a[href='#signin']").click(function(t){var e;return"undefined"!=typeof navigator&&null!==navigator&&null!=(e=navigator.id)&&e.request(),t.preventDefault()}),$("a[href='#logout']").click(function(t){var e;return"undefined"!=typeof navigator&&null!==navigator&&null!=(e=navigator.id)&&e.logout(),t.preventDefault()});