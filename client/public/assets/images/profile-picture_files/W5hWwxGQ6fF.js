if (self.CavalryLogger) { CavalryLogger.start_js(["ZWWe\/"]); }

__d("MessengerTextWithEntities.react",["BaseTextWithEntities.react","Link.react","MessengerTextWithEmoticons.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a){return a.replace(/<3\b|&hearts;/g,"\u2665")}c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){if(this.props.renderEmoticons||this.props.renderEmoji)return b("React").createElement(b("MessengerTextWithEmoticons.react"),{text:a,customSize:this.props.customSize,renderEmoticons:this.props.renderEmoticons,renderEmoji:this.props.renderEmoji});else return h(a)}.bind(this),this.$2=function(a,c){if(this.props.interpolator)return this.props.interpolator(a,c);else return b("React").createElement(b("Link.react"),{href:c.entity},a)}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("BaseTextWithEntities.react"),babelHelpers["extends"]({},this.props,{aggregatedRanges:this.props.aggregatedRanges,imageRanges:this.props.imageRanges,metaRanges:this.props.metaRanges,rangeRenderer:this.$2,ranges:this.props.ranges,text:this.props.text,textRenderer:this.$1}))};e.exports=a}),null);
__d("AbstractBadge.react",["cx","invariant","React","formatNumber","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;function j(a){return parseInt(a,10)===a}i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=this.props,c=a.count,d=a.maxcount,e=a.label;a=babelHelpers.objectWithoutPropertiesLoose(a,["count","maxcount","label"]);j(c)||h(0,186);j(d)||h(0,187);var f="_51lp"+(c>d?" _51lr":"")+(!this.props.allowZero&&c===0?" hidden_elem":"");e=e?b("React").createElement("span",{className:"accessible_elem","aria-hidden":c?"false":"true"},"\xa0",e):null;c=b("formatNumber").withMaxLimit(c,d);e!==null&&(c=b("React").createElement("span",{"aria-hidden":"true"},c));return b("React").createElement("span",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,f)}),c,e)};function a(){"use strict";i.apply(this,arguments)}a.propTypes={className:c.string,count:c.number.isRequired,maxcount:c.number,label:c.string};a.defaultProps={maxcount:20};e.exports=a}),null);
__d("XUIBadge.react",["cx","AbstractBadge.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.type;a="_5ugh"+(a==="regular"?" _5ugf":"")+(a==="special"?" _5ugg":"");return b("React").createElement(b("AbstractBadge.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a),type:null}))};function a(){"use strict";h.apply(this,arguments)}a.propTypes={type:c.oneOf(["regular","special"]),allowZero:c.bool};a.defaultProps={type:"regular"};e.exports=a}),null);
__d("EventReminderRequestHelper",["AsyncRequest","EventReminderActions","XEventReminderController"],(function(a,b,c,d,e,f){"use strict";a={fetchEventReminder:function(a,c,d){var e=b("XEventReminderController").getURIBuilder().setInt("event_reminder_id",c);new(b("AsyncRequest"))(e.getURI()).setHandler(function(e){e.payload&&(b("EventReminderActions").updateEventReminder(a,e.payload,c),d())}).send()}};e.exports=a}),null);
__d("StickersTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:StickersLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:StickersLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:StickersLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setNumsearchresults=function(a){this.$1.numsearchresults=a;return this};a.prototype.setPackid=function(a){this.$1.packid=a;return this};a.prototype.setPackids=function(a){this.$1.packids=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setSearchtoken=function(a){this.$1.searchtoken=a;return this};a.prototype.setStickerid=function(a){this.$1.stickerid=a;return this};a.prototype.setTagid=function(a){this.$1.tagid=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setTriggeredword=function(a){this.$1.triggeredword=a;return this};a.prototype.setTriggerused=function(a){this.$1.triggerused=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={event:!0,numsearchresults:!0,packid:!0,packids:!0,searchtoken:!0,stickerid:!0,tagid:!0,time:!0,triggeredword:!0,triggerused:!0,weight:!0};e.exports=a}),null);
__d("M4ThreadFillDetect.bs",["bs_caml_builtin_exceptions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return a.style}function c(a,b){a.appendChild(b);return 0}try{d=document.createElement("div");e=document.createElement("div");var g=document.createElement("div"),h=document.createElement("div"),i=document.createElement("div"),j=document.createElement("div"),k=document.createElement("div"),l=document.createElement("table");d.appendChild(e);d.appendChild(k);e.appendChild(g);k.appendChild(l);g.appendChild(h);h.appendChild(i);h.appendChild(j);d.style.position="absolute";d.style.marginLeft="-999px";d.style.contain="layout";e.style.height="200px";e.style.display="flex";e.style.visibility="hidden";e.style.flexDirection="column";e.style.position="relative";g.style.flexBasis="0px";g.style.flexGrow="1";g.style.flexShrink="0";g.style.position="relative";h.style.display="flex";h.style.flexDirection="column";h.style.minHeight="100%";i.style.flexGrow="1";j.style.height="50px";k.style.height="200px";k.style.visibility="hidden";k.style.position="relative";l.style.minHeight="100%";e=document.body;e.appendChild(d);g=i.clientHeight===150;h=l.clientHeight===200;document.body.removeChild(d);j=g?0:h?1:2}catch(a){if(a===b("bs_caml_builtin_exceptions").not_found)j=3;else throw a}k=j===2||j===1?1:0;e=k?"TABLE":"FLEX";f.getStylesheet=a;f.appendChild=c;f.measuredTechnique=j;f.technique=k;f.forJS=e}),null);
__d("FantaThread.react",["cx","M4ThreadFillDetect.bs","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("M4ThreadFillDetect.bs").forJS;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.setRef=function(a){this.$1=a,typeof this.props.scrollRef==="function"&&this.props.scrollRef(a)}.bind(this),b}a.prototype.render=function(){var a=this.props,c=a.children;a=a.spacerContent;return b("React").createElement("div",{className:"_1i6a",onClick:this.props.onClick},b("React").createElement("div",{className:"_4po3"+(i==="FLEX"?" _4poa":"")+(i==="TABLE"?" _4po4":""),ref:this.setRef},b("React").createElement("div",{className:"_4po5"},b("React").createElement("div",{className:"_4po6"},b("React").createElement("div",{className:"_4po7"},a)),b("React").createElement("div",{className:"_4po8"},b("React").createElement("div",{className:"_4po9"},c)))))};e.exports=a}),null);
__d("ChatInitialDataTransformer.bs",["bs_array","bs_js_dict","bs_caml_array","bs_caml_format","bs_js_primitive","MessengerServerPayloadTransformer.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c=a.viewer,d=a.is_page,e=[],f=[],g={},h=[],i={},j=[];b("bs_array").iter(function(a){__p&&__p();if(a==null)return 0;else{var k=b("MessengerServerPayloadTransformer.bs").getThreadFBID(a),l=b("MessengerServerPayloadTransformer.bs").getOtherUserID(a),m=b("MessengerServerPayloadTransformer.bs").transformThread(c,a,d);e.push(m);var n=b("MessengerServerPayloadTransformer.bs").transformMessages(c,a,d);n!==void 0&&b("bs_array").iter(function(a){f.push(a);return 0},n);n=b("MessengerServerPayloadTransformer.bs").getMessagePageInfo(a);n!==void 0&&(b("bs_js_primitive").valFromOption(n).has_previous_page||(k==null?l==null||j.push({type:"thread",fbid:l}):j.push({type:"thread",fbid:k})));n=b("MessengerServerPayloadTransformer.bs").transformReadReceipts(c,a);if(n!==void 0){n=b("bs_js_primitive").valFromOption(n);k==null||(g[k]=n);l==null||(g[l]=n)}k=b("MessengerServerPayloadTransformer.bs").transformDeliveryReceipts(a);if(k.length>=1){l=b("bs_caml_array").caml_array_get(k,0);if(m.is_canonical){n=m.other_user_fbid;n==null||h.push({other_user_fbid:n,thread_fbid:null,time:b("bs_caml_format").caml_float_of_string(l.timestamp_precise)})}else{k=m.thread_fbid;k==null||h.push({other_user_fbid:null,thread_fbid:k,time:b("bs_caml_format").caml_float_of_string(l.timestamp_precise)})}}n=b("MessengerServerPayloadTransformer.bs").transformParticipants(a);return b("bs_array").iter(function(a){i[a.fbid]=a;return 0},n)}},a.threads);return{threads:e,actions:f,roger:g,delivery_receipts:h,participants:b("bs_js_dict").values(i),end_of_history:j}}f.transform=a}),null);
__d("LinkReact.bs",["Link.react","ReasonReact.bs","bs_js_primitive","bs_js_null_undefined"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){d={"aria-label":b("bs_js_null_undefined").fromOption(d),"data-ft":b("bs_js_null_undefined").fromOption(f),"data-hover":b("bs_js_null_undefined").fromOption(g),"data-tooltip-content":b("bs_js_null_undefined").fromOption(h),"data-tooltip-alignh":b("bs_js_null_undefined").fromOption(i),"data-tooltip-position":b("bs_js_null_undefined").fromOption(j),className:b("bs_js_null_undefined").fromOption(e),href:b("bs_js_null_undefined").fromOption(k),linkRef:b("bs_js_null_undefined").fromOption(l),onClick:b("bs_js_null_undefined").fromOption(m),onMouseDown:b("bs_js_null_undefined").fromOption(n),onMouseEnter:b("bs_js_null_undefined").fromOption(o),role:b("bs_js_null_undefined").fromOption(p),rel:b("bs_js_null_undefined").fromOption(q),style:b("bs_js_null_undefined").fromOption(r),tabIndex:b("bs_js_null_undefined").fromOption(s),target:b("bs_js_null_undefined").fromOption(t),title:b("bs_js_null_undefined").fromOption(u)};a!==void 0&&(d["aria-expanded"]=b("bs_js_primitive").valFromOption(a));c!==void 0&&(d["aria-hidden"]=b("bs_js_primitive").valFromOption(c));return b("ReasonReact.bs").wrapJsForReason(b("Link.react"),d,v)}f.make=a}),null);
__d("MessengerContactActions.bs",[],(function(a,b,c,d,e,f){"use strict";a={ADD_OWNER:"ADD_OWNER",FREE_CALL:"FREE_CALL",MESSAGE:"MESSAGE",PROFILE:"PROFILE",REMOVE:"REMOVE",REMOVE_OWNER:"REMOVE_OWNER",SELECT:"SELECT"};f.actions=a}),null);