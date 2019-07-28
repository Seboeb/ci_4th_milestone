var TE=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";e.__esModule=!0,e.extend=l,e.indexOf=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!o.test(t))return t;return t.replace(a,i)},e.isEmpty=function(t){return!t&&0!==t||!(!c(t)||0!==t.length)},e.createFrame=function(t){var e=l({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(t){return r[t]}function l(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var s=Object.prototype.toString;e.toString=s;var u=function(t){return"function"==typeof t};u(/x/)&&(e.isFunction=u=function(t){return"function"==typeof t&&"[object Function]"===s.call(t)}),e.isFunction=u;var c=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===s.call(t)};e.isArray=c},function(t,e,n){"use strict";e.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];function a(t,e){var n=e&&e.loc,o=void 0,i=void 0;n&&(t+=" - "+(o=n.start.line)+":"+(i=n.start.column));for(var l=Error.prototype.constructor.call(this,t),s=0;s<r.length;s++)this[r[s]]=l[r[s]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{n&&(this.lineNumber=o,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(t){}}a.prototype=new Error,e.default=a,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=u;var a=n(0),o=r(n(1)),i=n(9),l=n(17),s=r(n(19));e.VERSION="4.1.2";e.COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:s.default,log:s.default.log,registerHelper:function(t,e){if("[object Object]"===a.toString.call(t)){if(e)throw new o.default("Arg not supported with multiple helpers");a.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===a.toString.call(t))a.extend(this.partials,t);else{if(void 0===e)throw new o.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===a.toString.call(t)){if(e)throw new o.default("Arg not supported with multiple decorators");a.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var c=s.default.log;e.log=c,e.createFrame=a.createFrame,e.logger=s.default},function(t,e,n){var r=n(4),a=n(5),o=n(24),i=n(25);i.initCounter(),i.initFormChecks(),e.openModal=r.openModal,e.closeModal=r.closeModal,e.loadMoreTickets=a.loadMoreTickets,e.searchInitialTickets=a.searchInitialTickets,e.showMenu=a.showMenu,e.closeMenu=a.closeMenu,e.toggleUpvote=o.toggleUpvote,e.toggleWatchlist=o.toggleWatchlist},function(t,e){e.openModal=function(t){var e=$("#"+t);$(e).css({display:"flex"}),$("body").addClass("no-scroll")},e.closeModal=function(t){var e=$("#"+t);$(e).css({display:"none"}),$("body").removeClass("no-scroll")}},function(t,e,n){var r=n(6);e.loadMoreTickets=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch(window.location.origin+"/dashboard/?app="+e+"&start="+t+"&query="+n,{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(a){var o=a.data;o.map(function(t){"bug_report"==t.ticket_type?t.bug=!0:t.bug=!1});var i=r(o),l=$(".load-more");$(".load-more").remove(),$(".list").append(i),a.load_more&&($(l).children().attr("onclick","TE.loadMoreTickets(".concat(t+10,', "').concat(e,'", "').concat(n,'");')),$(".list").append(l)),history.replaceState({},"query","?app=".concat(e,"&limit=").concat(t+9,"&query=").concat(n))})},e.searchInitialTickets=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch(window.location.origin+"/dashboard/?app="+e+"&start="+t+"&query="+n,{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(a){var o=a.data;o.map(function(t){"bug_report"==t.ticket_type?t.bug=!0:t.bug=!1});var i=r(o);if($(".list").html(i),a.load_more){var l=$('<div class="load-more">\n                              <div onclick=\'TE.loadMoreTickets('.concat(t+10,', "').concat(e,'", "').concat(n,'");\'>\n                                <img src="/static/img/arrow-down.svg" alt="load more">\n                                <span>show more</span>\n                              </div>\n                            </div>'));$(".list").append(l)}history.replaceState({},"query","?app=".concat(e,"&limit=").concat(t+9,"&query=").concat(n))})},e.showMenu=function(){$(".mobile-menu").toggleClass("opened"),$(".mobile-menu > .inner").toggleClass("opened"),$("body").addClass("no-scroll"),$(".mobile-menu-btn").find("img").attr("src","/static/img/clear-white.svg"),$(".mobile-menu-btn").attr("onclick","TE.closeMenu();")},e.closeMenu=function(){$(".mobile-menu").toggleClass("opened"),$(".mobile-menu > .inner").toggleClass("opened"),$("body").removeClass("no-scroll"),$(".mobile-menu-btn").find("img").attr("src","/static/img/menu.svg"),$(".mobile-menu-btn").attr("onclick","TE.showMenu();")}},function(t,e,n){var r=n(7);t.exports=(r.default||r).template({1:function(t,e,n,r,a){var o,i,l=null!=e?e:t.nullContext||{},s=n.helperMissing,u="function",c=t.escapeExpression;return'<div class="ticket-list-item" onclick="location.href=\'/tickets/'+c(typeof(i=null!=(i=n.id||(null!=e?e.id:e))?i:s)===u?i.call(l,{name:"id",hash:{},data:a}):i)+"';\">\r\n"+(null!=(o=n.if.call(l,null!=e?e.bug:e,{name:"if",hash:{},fn:t.program(2,a,0),inverse:t.program(4,a,0),data:a}))?o:"")+'  <p class="title">'+c(typeof(i=null!=(i=n.title||(null!=e?e.title:e))?i:s)===u?i.call(l,{name:"title",hash:{},data:a}):i)+'</p>\r\n  <p class="subtitle">'+c(typeof(i=null!=(i=n.ticket_id||(null!=e?e.ticket_id:e))?i:s)===u?i.call(l,{name:"ticket_id",hash:{},data:a}):i)+" opened at "+c(typeof(i=null!=(i=n.date_created||(null!=e?e.date_created:e))?i:s)===u?i.call(l,{name:"date_created",hash:{},data:a}):i)+" by\r\n    "+c(typeof(i=null!=(i=n.user_name||(null!=e?e.user_name:e))?i:s)===u?i.call(l,{name:"user_name",hash:{},data:a}):i)+'</p>\r\n  <div class="icons">\r\n    <div class="icon">\r\n      <span>'+c(typeof(i=null!=(i=n.nr_comments||(null!=e?e.nr_comments:e))?i:s)===u?i.call(l,{name:"nr_comments",hash:{},data:a}):i)+'</span>\r\n      <img src="/static/img/comment3.svg" alt="comments">\r\n    </div>\r\n    <div class="icon">\r\n      <span>'+c(typeof(i=null!=(i=n.upvotes||(null!=e?e.upvotes:e))?i:s)===u?i.call(l,{name:"upvotes",hash:{},data:a}):i)+'</span>\r\n      <img src="/static/img/up-vote.svg" alt="upvote">\r\n    </div>\r\n  </div>\r\n</div>\r\n'},2:function(t,e,n,r,a){return'  <img src="/static/img/bug-report-red.svg" alt="bug_report">\r\n'},4:function(t,e,n,r,a){return'  <img src="/static/img/develop-feature2-blue.svg" alt="feature_request">\r\n'},compiler:[7,">= 4.0.0"],main:function(t,e,n,r,a){var o;return null!=(o=n.each.call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a}))?o:""},useData:!0})},function(t,e,n){t.exports=n(8).default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.__esModule=!0;var o=a(n(2)),i=r(n(20)),l=r(n(1)),s=a(n(0)),u=a(n(21)),c=r(n(22));function d(){var t=new o.HandlebarsEnvironment;return s.extend(t,o),t.SafeString=i.default,t.Exception=l.default,t.Utils=s,t.escapeExpression=s.escapeExpression,t.VM=u,t.template=function(e){return u.template(e,t)},t}var f=d();f.create=d,c.default(f),f.default=f,e.default=f,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){a.default(t),o.default(t),i.default(t),l.default(t),s.default(t),u.default(t),c.default(t)};var a=r(n(10)),o=r(n(11)),i=r(n(12)),l=r(n(13)),s=r(n(14)),u=r(n(15)),c=r(n(16))},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,n){var a=n.inverse,o=n.fn;if(!0===e)return o(this);if(!1===e||null==e)return a(this);if(r.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):a(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return o(e,n)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,a=n(0),o=n(1),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new i.default("Must pass iterator to #each");var n=e.fn,r=e.inverse,o=0,l="",s=void 0,u=void 0;function c(e,r,o){s&&(s.key=e,s.index=r,s.first=0===r,s.last=!!o,u&&(s.contextPath=u+e)),l+=n(t[e],{data:s,blockParams:a.blockParams([t[e],e],[u+e,null])})}if(e.data&&e.ids&&(u=a.appendContextPath(e.data.contextPath,e.ids[0])+"."),a.isFunction(t)&&(t=t.call(this)),e.data&&(s=a.createFrame(e.data)),t&&"object"==typeof t)if(a.isArray(t))for(var d=t.length;o<d;o++)o in t&&c(o,o,o===t.length-1);else{var f=void 0;for(var p in t)t.hasOwnProperty(p)&&(void 0!==f&&c(f,o-1),f=p,o++);void 0!==f&&c(f,o-1,!0)}return 0===o&&(l=r(this)),l})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,a=n(1),o=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("if",function(t,e){return r.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||r.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var a=1;null!=n.hash.level?a=n.hash.level:n.data&&null!=n.data.level&&(a=n.data.level),e[0]=a,t.log.apply(t,e)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){return t?"constructor"!==e||t.propertyIsEnumerable(e)?t[e]:void 0:t})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("with",function(t,e){r.isFunction(t)&&(t=t.call(this));var n=e.fn;if(r.isEmpty(t))return e.inverse(this);var a=e.data;return e.data&&e.ids&&((a=r.createFrame(e.data)).contextPath=r.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:a,blockParams:r.blockParams([t],[a&&a.contextPath])})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){o.default(t)};var r,a=n(18),o=(r=a)&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerDecorator("inline",function(t,e,n,a){var o=t;return e.partials||(e.partials={},o=function(a,o){var i=n.partials;n.partials=r.extend({},i,e.partials);var l=t(a,o);return n.partials=i,l}),e.partials[a.args[0]]=a.fn,o})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=r.indexOf(a.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=a.lookupLevel(t),"undefined"!=typeof console&&a.lookupLevel(a.level)<=t){var e=a.methodMap[t];console[e]||(e="log");for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];console[e].apply(console,r)}}};e.default=a,t.exports=e.default},function(t,e,n){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=l.COMPILER_REVISION;if(e!==n){if(e<n){var r=l.REVISION_CHANGES[n],a=l.REVISION_CHANGES[e];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new i.default("No environment passed to template");if(!t||!t.main)throw new i.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n={strict:function(t,e){if(!(e in t))throw new i.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,r=0;r<n;r++)if(t[r]&&null!=t[r][e])return t[r][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:a.escapeExpression,invokePartial:function(n,r,o){o.hash&&(r=a.extend({},r,o.hash),o.ids&&(o.ids[0]=!0));n=e.VM.resolvePartial.call(this,n,r,o);var l=e.VM.invokePartial.call(this,n,r,o);null==l&&e.compile&&(o.partials[o.name]=e.compile(n,t.compilerOptions,e),l=o.partials[o.name](r,o));if(null!=l){if(o.indent){for(var s=l.split("\n"),u=0,c=s.length;u<c&&(s[u]||u+1!==c);u++)s[u]=o.indent+s[u];l=s.join("\n")}return l}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,a){var o=this.programs[t],i=this.fn(t);return e||a||r||n?o=s(this,t,i,e,n,r,a):o||(o=this.programs[t]=s(this,t,i)),o},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=a.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function r(e){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=a.data;r._setup(a),!a.partial&&t.useData&&(o=function(t,e){e&&"root"in e||((e=e?l.createFrame(e):{}).root=t);return e}(e,o));var i=void 0,s=t.useBlockParams?[]:void 0;function u(e){return""+t.main(n,e,n.helpers,n.partials,o,s,i)}return t.useDepths&&(i=a.depths?e!=a.depths[0]?[e].concat(a.depths):a.depths:[e]),(u=c(t.main,u,n,a.depths||[],o,s))(e,a)}return r.isTop=!0,r._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(r.partials,e.partials)),(t.usePartial||t.useDecorators)&&(n.decorators=n.merge(r.decorators,e.decorators)))},r._child=function(e,r,a,o){if(t.useBlockParams&&!a)throw new i.default("must pass block params");if(t.useDepths&&!o)throw new i.default("must pass parent depths");return s(n,e,t[e],r,0,a,o)},r},e.wrapProgram=s,e.resolvePartial=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},e.invokePartial=function(t,e,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var o=void 0;n.fn&&n.fn!==u&&function(){n.data=l.createFrame(n.data);var t=n.fn;o=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=l.createFrame(n.data),n.data["partial-block"]=r,t(e,n)},t.partials&&(n.partials=a.extend({},n.partials,t.partials))}();void 0===t&&o&&(t=o);if(void 0===t)throw new i.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=u;var r,a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),o=n(1),i=(r=o)&&r.__esModule?r:{default:r},l=n(2);function s(t,e,n,r,a,o,i){function l(e){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||e==i[0]||e===t.nullContext&&null===i[0]||(l=[e].concat(i)),n(t,e,t.helpers,t.partials,a.data||r,o&&[a.blockParams].concat(o),l)}return(l=c(n,l,t,i,r,o)).program=e,l.depth=i?i.length:0,l.blockParams=a||0,l}function u(){return""}function c(t,e,n,r,o,i){if(t.decorator){var l={};e=t.decorator(e,l,n,r&&r[0],o,i,r),a.extend(e,l)}return e}},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,r=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=r),t}},t.exports=e.default}).call(this,n(23))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){e.toggleUpvote=function(t){fetch(window.location.origin+"/tickets/upvote/"+t,{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){"ok"===t.status?("on"===t.state?$(".upvote").addClass("active"):"off"===t.state&&$(".upvote").removeClass("active"),$(".upvotes").html(t.upvotes)):console.error("Something went wrong while toggling upvote")})},e.toggleWatchlist=function(t){fetch(window.location.origin+"/tickets/watchlist/"+t,{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(t){"ok"===t.status?"on"===t.state?$(".watchlist").addClass("active"):"off"===t.state&&$(".watchlist").removeClass("active"):console.error("Something went wrong while toggling watchlist")})}},function(t,e){e.initCounter=function(){$("textarea").on("change keyup paste click",function(){var t=$(this).attr("data-length");if(t){var e=$(this).siblings(".counter");$(e).html("".concat($(this).val().length,"/").concat(t)),$(this).val().length>t?($(this).addClass("red"),$(this).siblings(".counter").addClass("red")):($(this).removeClass("red"),$(this).siblings(".counter").removeClass("red"))}}),$("input[type=text").on("change keyup paste click",function(){var t=$(this).attr("data-length");if(t){var e=$(this).siblings(".counter");$(e).html("".concat($(this).val().length,"/").concat(t)),$(this).val().length>t?($(this).addClass("red"),$(this).siblings(".counter").addClass("red")):($(this).removeClass("red"),$(this).siblings(".counter").removeClass("red"))}})},e.initFormChecks=function(){function t(){var t=this,e=$(t).find("[data-length]");$(t).find("#form-error-container").empty().hide();var n=!0;if($(e).each(function(e){var r=$(this).attr("data-length");if(!r)return $(t).find("#form-error-container").append('<div id="form-error-message">Something went wrong checking length</div>'),$(t).find("#form-error-container").show(),void(n=!1);if(0==$(this).val().length){var a=$(this).attr("name");return a=a.charAt(0).toUpperCase()+a.slice(1),$(t).find("#form-error-container").append('<div id="form-error-message">'.concat(a," is required.</div>")),$(t).find("#form-error-container").show(),void(n=!1)}if($(this).val().length>r){var o=$(this).attr("name");return o=o.charAt(0).toUpperCase()+o.slice(1),$(t).find("#form-error-container").append('<div id="form-error-message">'.concat(o," is too long. Please adjust.</div>")),$(t).find("#form-error-container").show(),void(n=!1)}}),!n)return!1;$(t).find(":submit").attr("disabled","disabled"),t.submit()}$("#comment-form").submit(function(){var t=$("#comment-form").find("textarea"),e=$(t).attr("data-length");return e?$(t).val().length>e?($("#comment-error-message").text("Your comment is too long. Please adjust."),$("#comment-error-container").show(),!1):($(this).find(":submit").attr("disabled","disabled"),void this.submit()):($("#comment-error-message").text("Something went wrong checking length"),$("#comment-error-container").show(),!1)}),$("#bug-report-form").submit(t),$("#feature-request-form").submit(t),$("#edit-ticket-form").submit(t),$("#profile-form").submit(t)}}]);