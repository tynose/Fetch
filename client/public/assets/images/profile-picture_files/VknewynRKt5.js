if (self.CavalryLogger) { CavalryLogger.start_js(["kNpqD"]); }

__d("BiometricDataField",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TIME_STAMP:"ts",WEB_SESSION_ID:"web_session_id",PAGE_URI:"page_uri",SCRIPT_PATH:"script_path",MOUSE_MOVEMENT_COORDINATES:"mouse_movement_coordinates",MOUSE_MOVEMENT_COORDINATES_NO_SCROLL:"mouse_movement_coordinates_no_scroll",MOUSE_CLICK_COORDINATES:"mouse_click_coordinates",MOUSE_CLICK_COORDINATES_NO_SCROLL:"mouse_click_coordinates_no_scroll",MOUSE_CLICK_DURATIONS:"mouse_click_durations",MOUSE_MOVEMENT_SPEEDS:"mouse_movement_speeds",MOUSE_MOVEMENT_ACCELERATIONS:"mouse_movement_accelerations",KEY_STROKE_TIMES:"key_stroke_times",KEY_STROKE_CATEGORIES:"key_stroke_categories",KEY_STROKE_DURATIONS:"key_stroke_durations",KEY_TO_KEY_DOWN_TIMES:"key_to_key_down_times",KEY_TO_KEY_UP_TIMES:"key_to_key_up_times",SCROLL_LENGTHS:"scroll_lengths",SCROLL_SPEEDS:"scroll_speeds",BOT_DETECTOR_RESULTS:"bot_detector_results",BOT_DETECTOR_CONFIDENCE_SCORES:"bot_detector_confidence_scores",BOT_SCORER_FEATURE_SCORES:"bot_scorer_feature_scores"})}),null);
__d("KeyStrokeCategory",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:0,ALPHABETIC:1,NUMERIC:2,PUNCTUATION_AND_ARITHMETIC:3,NAVIGATION:4,BACKSPACE_AND_DELETE:5,SPECIAL:6})}),null);
__d("IntegrityKeyStrokeCategoryCollector",["BiometricDataField","Event","KeyStrokeCategory"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=65,h=90,i=48,j=57,k=96,l=105,m=106,n=111,o=186,p=222,q=9,r=33,s=40,t=8,u=46,v=0,w=[];a={attachListener:function(){b("Event").listen(window.document,"keydown",x)},storeData:function(){w.push(y(v)),v=0},clearData:function(){w=[],v=0},getData:function(){var a;if(w.every(function(a){return a===b("KeyStrokeCategory").NONE}))return{};var c=b("BiometricDataField").KEY_STROKE_CATEGORIES;return a={},a[c]=JSON.stringify(w),a}};function x(a){a.repeat||(v=a.keyCode)}function y(a){__p&&__p();if(z(v))return b("KeyStrokeCategory").ALPHABETIC;if(A(v))return b("KeyStrokeCategory").NUMERIC;if(B(v))return b("KeyStrokeCategory").PUNCTUATION_AND_ARITHMETIC;if(C(v))return b("KeyStrokeCategory").NAVIGATION;if(D(v))return b("KeyStrokeCategory").BACKSPACE_AND_DELETE;return v!==0?b("KeyStrokeCategory").SPECIAL:b("KeyStrokeCategory").NONE}function z(a){return a>=g&&a<=h}function A(a){return a>=i&&a<=j||a>=k&&a<=l}function B(a){return a>=m&&a<=n||a>=o&&a<=p}function C(a){return a===q||a>=r&&a<=s}function D(a){return a===t||a===u}e.exports=a}),null);
__d("IntegrityKeyStrokeTimeCollector",["BiometricDataField","Event","getTime"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map(),h=new Map(),i=[];a={attachListener:function(){b("Event").listen(window.document,"keydown",j),b("Event").listen(window.document,"keyup",k)},storeData:function(){var a=Array.from(h.keys()),b=a.find(function(a){return g.has(a)})||"",c=g.get(b)||0;b=h.get(b)||0;c&&b?i.push([c,b]):i.push([0,0]);a.forEach(function(a){g["delete"](a),h["delete"](a)})},clearData:function(){i=[],g.clear(),h.clear()},getData:function(){var a;if(i.every(function(a){return a[0]===0&&a[1]===0}))return{};var c=b("BiometricDataField").KEY_STROKE_TIMES;return a={},a[c]=JSON.stringify(i),a}};function j(a){!g.has(a.code)&&!a.repeat&&g.set(a.code,b("getTime")())}function k(a){g.has(a.code)&&!h.has(a.code)&&h.set(a.code,b("getTime")())}e.exports=a}),null);
__d("IntegrityMouseClickCollector",["BiometricDataField","Event"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=[],i=-1,j=-1,k=-1,l=-1;a={attachListener:function(){b("Event").listen(window.document,"click",m)},storeData:function(){g.push([i,j]),h.push([k,l]),i=-1,j=-1,k=-1,l=-1},clearData:function(){g=[],h=[]},getData:function(){var a;if(g.every(function(a){return a.length===2&&a[0]===-1&&a[1]===-1}))return{};var c=b("BiometricDataField").MOUSE_CLICK_COORDINATES,d=b("BiometricDataField").MOUSE_CLICK_COORDINATES_NO_SCROLL;return a={},a[c]=JSON.stringify(g),a[d]=JSON.stringify(h),a}};function m(a){i=a.pageX,j=a.pageY,k=a.clientX,l=a.clientY}e.exports=a}),null);
__d("IntegrityMouseClickDurationCollector",["BiometricDataField","Event","getTime"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=0,i=0;a={attachListener:function(){b("Event").listen(window.document,"mousedown",j),b("Event").listen(window.document,"mouseup",k)},storeData:function(){g.push(i),i=0},clearData:function(){g=[],h=0,i=0},getData:function(){var a;if(g.every(function(a){return a===0}))return{};var c=b("BiometricDataField").MOUSE_CLICK_DURATIONS;return a={},a[c]=JSON.stringify(g),a}};function j(a){h=b("getTime")()}function k(a){i=b("getTime")()-h}e.exports=a}),null);
__d("IntegrityMouseMovementCollector",["BiometricDataField","Event"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=[],i=-1,j=-1,k=-1,l=-1;a={attachListener:function(){b("Event").listen(window.document,"mousemove",m)},storeData:function(){g.push([i,j]),h.push([k,l])},clearData:function(){g=[],h=[]},getData:function(){var a;if(g.every(function(a){return a.length===2&&a[0]===-1&&a[1]===-1}))return{};var c=b("BiometricDataField").MOUSE_MOVEMENT_COORDINATES,d=b("BiometricDataField").MOUSE_MOVEMENT_COORDINATES_NO_SCROLL;return a={},a[c]=JSON.stringify(g),a[d]=JSON.stringify(h),a}};function m(a){i=a.pageX,j=a.pageY,k=a.clientX,l=a.clientY}e.exports=a}),null);
__d("IntegrityScrollLengthCollector",["BiometricDataField"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=window.pageYOffset;a={attachListener:function(){},storeData:function(){var a=window.pageYOffset;g.push(a-h);h=a},clearData:function(){g=[],h=window.pageYOffset},getData:function(){var a;if(g.every(function(a){return a===0}))return{};var c=b("BiometricDataField").SCROLL_LENGTHS;return a={},a[c]=JSON.stringify(g),a}};e.exports=a}),null);
__d("XIntegrityBiometricLoggingAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/ibl/",{})}),null);
__d("IntegrityBiometricsLogger",["AsyncRequest","BiometricDataField","XIntegrityBiometricLoggingAsyncController","IntegrityKeyStrokeCategoryCollector","IntegrityKeyStrokeTimeCollector","IntegrityMouseClickCollector","IntegrityMouseClickDurationCollector","IntegrityMouseMovementCollector","IntegrityScrollLengthCollector"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[b("IntegrityKeyStrokeCategoryCollector"),b("IntegrityKeyStrokeTimeCollector"),b("IntegrityMouseClickCollector"),b("IntegrityMouseClickDurationCollector"),b("IntegrityMouseMovementCollector"),b("IntegrityScrollLengthCollector")];a={attachListeners:function(){g.forEach(function(a){return a.attachListener()})},storeData:function(){g.forEach(function(a){return a.storeData()})},clearData:function(){g.forEach(function(a){return a.clearData()})},logData:function(a){var c=b("XIntegrityBiometricLoggingAsyncController").getURIBuilder().getURI(),d=h(),e=b("BiometricDataField").WEB_SESSION_ID,f=b("BiometricDataField").PAGE_URI,g=b("BiometricDataField").SCRIPT_PATH;new(b("AsyncRequest"))(c).setData(babelHelpers["extends"]((c={},c[e]=a.webSessionID,c[f]=a.currentPageURI,c[g]=a.scriptPath,c),d)).setOption("suppressEvaluation",!0).send()}};function h(){return g.map(function(a){return a.getData()}).reduce(function(a,b){return babelHelpers["extends"]({},a,b)},{})}e.exports=a}),null);
__d("IntegrityBiometricsScheduler",["BotDetectionMouseMovementSitevarConfig","IntegrityBiometricsLogger","Run","URI","getTime","guid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("BotDetectionMouseMovementSitevarConfig").run_time_ms,h=b("BotDetectionMouseMovementSitevarConfig").interval_time_ms,i=!1,j=!1,k,l,m,n={schedule:function(a){if(!i){i=!0;l=b("getTime")();k=a;b("IntegrityBiometricsLogger").attachListeners();m=setInterval(n._storeData,h);a=!0;b("Run").onBeforeUnload(n._handlePageTransition,a)}},_storeData:function(){__p&&__p();if(j){clearInterval(m);return}if(b("getTime")()-l>g){b("IntegrityBiometricsLogger").logData({webSessionID:b("guid")(),currentPageURI:b("URI").getRequestURI().getPath(),scriptPath:k});b("IntegrityBiometricsLogger").clearData();j=!0;clearInterval(m);return}b("IntegrityBiometricsLogger").storeData()},_handlePageTransition:function(){j||(b("IntegrityBiometricsLogger").logData({webSessionID:b("guid")(),currentPageURI:b("URI").getRequestURI().getPath(),scriptPath:k}),b("IntegrityBiometricsLogger").clearData()),i=!1,j=!1}};e.exports=n}),null);
__d("HelpLiteFlyoutBootloader",["regeneratorRuntime","Deferred","JSResource"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=null,i=null,j={loadFlyout:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:j.loadFlyoutWithHelpType(null);case 1:case"end":return a.stop()}},null,this)},loadFlyoutWithHelpType:function(a){__p&&__p();var c,d,e,f;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:h.next=2;return b("regeneratorRuntime").awrap(b("JSResource")("HelpLiteFlyout").__setRef("HelpLiteFlyoutBootloader").load());case 2:c=h.sent;if(!g){h.next=6;break}c.refreshHelp();return h.abrupt("return");case 6:g=!0;a&&j.setHelpType(a);h.next=10;return b("regeneratorRuntime").awrap(this._getDeferredFlyoutElements().getPromise());case 10:d=h.sent,e=d.flyout,f=d.flyoutRoot,c.registerFlyoutToggler(e,f),c.loadBody();case 15:case"end":return h.stop()}},null,this)},setHelpType:function(a){i=a},getHelpType:function(){return i},_getDeferredFlyoutElements:function(){h==null&&(h=new(b("Deferred"))());return h},registerFlyoutElements:function(a,b){this._getDeferredFlyoutElements().resolve({flyout:a,flyoutRoot:b})}};e.exports=j}),null);
__d("PrivacyLiteFlyoutBootloader",["regeneratorRuntime","Promise","Deferred","JSResource"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=null,i=null,j={loadFlyout:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!1));case 2:case"end":return a.stop()}},null,this)},loadFlyoutAsChild:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!0));case 2:case"end":return a.stop()}},null,this)},_loadFlyout:function(a){__p&&__p();var c,d,e,f,h,i,j,k,l,m;return b("regeneratorRuntime").async(function(n){__p&&__p();while(1)switch(n.prev=n.next){case 0:if(!g){n.next=2;break}return n.abrupt("return");case 2:g=!0;n.next=5;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise(),this._getDeferredFooterElements().getPromise()]));case 5:c=n.sent,d=c[0],e=c[1],f=e.flyout,h=e.flyoutRoot,i=c[2],j=i.footer,k=i.event,l=i.settingsExitPoint,m=i.basicsExitPoint,d.setIsChild(!!a),d.registerFlyoutToggler(f,h),d.registerSettingsAndBasicsLinkLogging(j,k,l,m),d.loadBody();case 19:case"end":return n.stop()}},null,this)},setChildFlyoutVisible:function(a){__p&&__p();var c,d,e,f;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:if(!(!g&&!a)){h.next=2;break}return h.abrupt("return");case 2:h.next=4;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise()]));case 4:c=h.sent;d=c[0];e=c[1];f=e.flyout;e._flyoutRoot;if(!(a===d.isFlyoutVisible())){h.next=11;break}return h.abrupt("return");case 11:d.setChildFlyoutVisible(a),d.onToggle(f,a?"show":"hide");case 13:case"end":return h.stop()}},null,this)},_getDeferredFlyoutElements:function(){h==null&&(h=new(b("Deferred"))());return h},registerFlyoutElements:function(a,b){this._getDeferredFlyoutElements().resolve({flyout:a,flyoutRoot:b})},_getDeferredFooterElements:function(){i==null&&(i=new(b("Deferred"))());return i},registerFooterElements:function(a,b,c,d){this._getDeferredFooterElements().resolve({footer:a,event:b,settingsExitPoint:c,basicsExitPoint:d})}};e.exports=j}),null);
__d("HelpLiteFlyout",["AsyncRequest","CSS","DOM","Event","HelpLiteFlyoutBootloader","PrivacyLiteFlyoutBootloader","Toggler","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={loadBody:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType()}).send()},refreshHelp:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType(),is_refresh:!0}).send()},resetHelp:function(a){var c=b("ge")("fbContextualHelpContent");c&&b("DOM").replace(c,a);h.isFlyoutVisible()&&h.refreshHelp()},showHelp:function(){b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1),b("CSS").show(b("ge")("fbHelpLiteFlyout"))},openPrivacy:function(){b("CSS").hide(b("ge")("fbHelpLiteFlyout")),b("PrivacyLiteFlyoutBootloader").loadFlyoutAsChild(),b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!0)},registerPrivacyBackLink:function(a){b("Event").listen(a,"click",h.showHelp)},registerFlyoutToggler:function(a,c){g=c;a=b("Toggler").createInstance(a);a.setSticky(!1);b("Toggler").listen("hide",c,function(a){b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1)});b("Toggler").listen("show",c,function(a){h.showHelp()})},isFlyoutVisible:function(){return g&&b("Toggler").getActive()===g},setFlyoutVisible:function(a){a&&b("HelpLiteFlyoutBootloader").loadFlyout(),a?b("Toggler").show(g):b("Toggler").hide(g)}};e.exports=h}),null);
__d("legacy:intl-base",["IntlUtils"],(function(a,b,c,d,e,f){a.intl_set_xmode=b("IntlUtils").setXmode,a.intl_set_amode=b("IntlUtils").setAmode,a.intl_set_rmode=b("IntlUtils").setRmode,a.intl_set_locale=b("IntlUtils").setLocale}),3);
__d("legacy:onload-action",["PageHooks"],(function(a,b,c,d,e,f){a._domreadyHook=b("PageHooks")._domreadyHook,a._onloadHook=b("PageHooks")._onloadHook,a.runHook=b("PageHooks").runHook,a.runHooks=b("PageHooks").runHooks,a.keep_window_set_as_loaded=b("PageHooks").keepWindowSetAsLoaded}),3);
__d("RealtimeRequestStreamWebClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:RealtimeRequestStreamWebClientLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setClientSessionID=function(a){this.$1.client_session_id=a;return this};a.prototype.setClientTimeMs=function(a){this.$1.client_time_ms=a;return this};a.prototype.setMessage=function(a){this.$1.message=a;return this};a.prototype.setSeverity=function(a){this.$1.severity=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setUserFbid=function(a){this.$1.user_fbid=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={client_session_id:!0,client_time_ms:!0,message:!0,severity:!0,time:!0,user_fbid:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("FantaHider",["ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={hide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.hide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.hide()})})},unhide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.unhide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.unhide()})})}}}),null);
__d("BladeRunnerLogger",["BanzaiODS","CurrentUser","FBLogger","RealtimeRequestStreamWebClientTypedLogger","gkx"],(function(a,b,c,d,e,f){__p&&__p();var g="bladerunner_js_client",h={info:"info",warning:"warning",exception:"exception"};function a(){"use strict";this.$1=this.$4(),this.setFBLoggerLevel(1)}a.prototype.info=function(a){"use strict";this.$3>=2&&b("FBLogger")(g).info(a),this.$5(h.info,a)};a.prototype.warn=function(a){"use strict";this.$3>=1&&b("FBLogger")(g).warn(a),this.$5(h.warning,a)};a.prototype.exception=function(a,c){c===void 0&&(c="");c=c+" "+a.toString();this.$3>=0&&b("FBLogger")(g).warn(c);this.$5(h.exception,c)};a.prototype.bumpCounter=function(a,c){c===void 0&&(c=1),b("BanzaiODS").bumpEntityKey("BladeRunnerClient",a,c)};a.prototype.setClientSessionId=function(a){"use strict";this.$2=a};a.prototype.setFBLoggerLevel=function(a){"use strict";this.$3=a};a.prototype.$5=function(a,c){"use strict";if(this.$1){a=new(b("RealtimeRequestStreamWebClientTypedLogger"))().setClientTimeMs(Date.now()).setSeverity(a).setMessage(c).setClientSessionID(this.$2).setUserFbid(b("CurrentUser").getID());a.log()}};a.prototype.$4=function(){"use strict";return b("gkx")("676834")};c=new a();e.exports=c}),null);
__d("BladeRunnerConfig",["BladeRunnerLogger","CurrentLocale","RTISubscriptionManagerConfig"],(function(a,b,c,d,e,f){__p&&__p();a.prototype.patchRequestHeaders=function(a){"use strict";var c={};typeof b("RTISubscriptionManagerConfig").bladerunner_www_sandbox==="string"&&(c["javascript-sandbox"]=b("RTISubscriptionManagerConfig").bladerunner_www_sandbox);for(var d in a)c[d]=a[d];return c};function a(){"use strict"}c=new a();e.exports=c}),null);
__d("BladeRunnerTypesInternal",["Base64","BladeRunnerLogger","BladeRunnerTypes"],(function(a,b,c,d,e,f){__p&&__p();g.prototype.getHeaders=function(){"use strict";if(this.headers!=null)return this.headers;throw new Error("Expected headers")};g.readObject=function(a){"use strict";var b=new g();b.streamId=n(a.streamId);b.requestType=n(a.requestType);b.payload=q(a.payload);b.headers=t(a.headers);b.extraHeader=q(a.extraHeader);b.requestTarget=q(a.requestTarget);return b};function g(){"use strict"}h.readObject=function(a){"use strict";var b=new h();b.streamId=n(a.streamId);b.dataId=o(a.dataId);b.data=q(a.data);b.shouldAck=v(a.shouldAck);return b};h.prototype.decodeData=function(){"use strict";if(this.data==null)throw new Error("Expected data");return b("Base64").decode(this.data)};function h(){"use strict"}i.readObject=function(a){"use strict";var b=new i();b.streamId=n(a.streamId);b.dataId=n(a.dataId);b.success=u(a.success);b.message=q(a.message);b.code=o(a.code);return b};function i(){"use strict"}j.readObject=function(a){"use strict";var b=new j();b.streamId=o(a.streamId);b.message=q(a.message);return b};function j(){"use strict"}k.readObject=function(a){"use strict";var b=new k();b.streamId=n(a.streamId);b.status=n(a.status);b.message=q(a.message);b.code=o(a.code);b.shouldRetry=v(a.shouldRetry);b.retryDelayMs=o(a.retryDelayMs);return b};function k(){"use strict"}l.prototype.getRequest=function(){"use strict";if(this.type==b("BladeRunnerTypes").StreamFrameType.REQUEST&&this.request!=null)return this.request;throw new Error("Expected request")};l.prototype.getData=function(){"use strict";if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA&&this.data!=null)return this.data;throw new Error("Expected data")};l.prototype.getDataAck=function(){"use strict";if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA_ACK&&this.dataAck!=null)return this.dataAck;throw new Error("Expected dataAck")};l.prototype.getStatusUpdate=function(){"use strict";if(this.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE&&this.statusUpdate!=null)return this.statusUpdate;throw new Error("Expected status update")};l.prototype.getLog=function(){"use strict";if(this.type==b("BladeRunnerTypes").StreamFrameType.LOG&&this.log!=null)return this.log;throw new Error("Expected log")};l.prototype.getStreamId=function(){"use strict";__p&&__p();if(this.type==b("BladeRunnerTypes").StreamFrameType.REQUEST&&this.request!=null)return this.request.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.DATA&&this.data!=null)return this.data.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE&&this.statusUpdate!=null)return this.statusUpdate.streamId;if(this.type==b("BladeRunnerTypes").StreamFrameType.LOG&&this.log!=null)return this.log.streamId;throw new Error("Frame with unexpected type")};l.readObject=function(a){"use strict";__p&&__p();var c=new l();c.type=n(a.type);switch(c.type){case b("BladeRunnerTypes").StreamFrameType.REQUEST:c.request=g.readObject(r(a.request));break;case b("BladeRunnerTypes").StreamFrameType.DATA:c.data=h.readObject(r(a.data));break;case b("BladeRunnerTypes").StreamFrameType.DATA_ACK:c.dataAck=i.readObject(r(a.dataAck));break;case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:c.statusUpdate=k.readObject(r(a.statusUpdate));break;case b("BladeRunnerTypes").StreamFrameType.LOG:c.log=j.readObject(r(a.log));break;default:b("BladeRunnerLogger").warn("Frame with unexpected type: "+c.type);return null}return c};l.newRequestFrame=function(a){"use strict";var c=new l();c.type=b("BladeRunnerTypes").StreamFrameType.REQUEST;c.request=a;return c};l.newDataFrame=function(a){"use strict";var c=new l();c.type=b("BladeRunnerTypes").StreamFrameType.DATA;c.data=a;return c};l.newDataAckFrame=function(a){"use strict";var c=new l();c.type=b("BladeRunnerTypes").StreamFrameType.DATA_ACK;c.dataAck=a;return c};l.newStatusUpdateFrame=function(a){"use strict";var c=new l();c.type=b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE;c.statusUpdate=a;return c};l.newLogFrame=function(a){"use strict";var c=new l();c.type=b("BladeRunnerTypes").StreamFrameType.LOG;c.log=a;return c};function l(){"use strict"}function m(a,b){"use strict";this.batchId=a,this.frames=b}m.prototype.getFrames=function(){"use strict";if(this.frames!=null)return this.frames;throw new Error("Expected frames")};m.prototype.write=function(){"use strict";return JSON.stringify(this)};m.read=function(a){"use strict";__p&&__p();a=JSON.parse(a);var b=a.batchId||0,c=[];for(var a=a.frames,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;f=l.readObject(f);f!=null&&c.push(f)}return new m(b,c)};function n(a){if(typeof a==="number")return a;throw new Error("Expected number")}function o(a){return a==null?null:n(a)}function p(a){if(typeof a==="string")return a;throw new Error("Expected string")}function q(a){return a==null?null:p(a)}function r(a){if(typeof a==="object"&&a!=null)return a;throw new Error("Expected object")}function s(a){if(typeof a==="object"&&a!=null){var b=a,c={};Object.keys(b).forEach(function(a){var d=b[a];typeof d==="string"&&d!=null&&(c[a]=d)});return c}throw new Error("Expected string map")}function t(a){return a==null?null:s(a)}function u(a){if(typeof a==="boolean"&&a!=null)return a;throw new Error("Expected boolean")}function v(a){return a==null?null:u(a)}e.exports={GatewayStreamBatch:m,GatewayStreamData:h,GatewayStreamDataAck:i,GatewayStreamFrame:l,GatewayStreamLog:j,GatewayStreamRequest:g,GatewayStreamStatusUpdate:k}}),null);
__d("BladeRunnerEventHandler",["BladeRunnerLogger","BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3;function a(a,b,c){"use strict";this.$2=a,this.$1=b,this.$3=c}a.prototype.onProxyResponse=function(a){"use strict";__p&&__p();this.$4(a);var c=[];for(var d=a.getFrames(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;this.$2.witnessFrame(g)&&c.push(g)}c.length>0&&this.$5(new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(a.batchId,c))};a.prototype.onDisconnect=function(){"use strict";this.$2.resetErrors();var a=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();a.streamId=this.$2.getRequest().streamId;a.status=b("BladeRunnerTypes").StreamStatus.CLOSED;a.shouldRetry=!0;a.retryDelayMs=0;a=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(null,[b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)]);this.onProxyResponse(a)};a.prototype.$4=function(a){"use strict";__p&&__p();a=a.getFrames().filter(function(a){return a.type==b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE});for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e=e.getStatusUpdate();if(e.status==b("BladeRunnerTypes").StreamStatus.CLOSED||e.status==b("BladeRunnerTypes").StreamStatus.REJECTED){this.$2.onError();var f=e.shouldRetry!=null&&e.shouldRetry,h=e.message!=null?e.message:"null";if(f&&this.$2.getErrorCount()<=this.$2.getRetriesAllowed()){e.status=b("BladeRunnerTypes").StreamStatus.PAUSED;var i=g;e.retryDelayMs!=null&&(i=e.retryDelayMs);b("BladeRunnerLogger").info("Can retry: stream "+e.streamId+" closed with status "+e.status+", message "+h+". Error count: "+this.$2.getErrorCount()+", retryDelay "+i+"ms. Already retrying: "+this.$2.getRetryRequestScheduled().toString());this.$2.getRetryRequestScheduled()?b("BladeRunnerLogger").bumpCounter("stream_closed_already_retrying"):(b("BladeRunnerLogger").bumpCounter("stream_closed_will_retry"),this.$2.setRetryRequestScheduled(!0),i>0?setTimeout(function(){return this.$6()}.bind(this),i):this.$6())}else b("BladeRunnerLogger").info("Will not retry: stream "+e.streamId+" closed with status "+e.status+", message "+h+". Error count: "+this.$2.getErrorCount()+", shouldRetry "+f.toString()+". Already retrying: "+this.$2.getRetryRequestScheduled().toString()),f?b("BladeRunnerLogger").bumpCounter("stream_closed_retry_exceeded"):b("BladeRunnerLogger").bumpCounter("stream_closed_no_retry"),this.$3.removeStream(e.streamId)}}};a.prototype.$6=function(){"use strict";this.$2.setRetryRequestScheduled(!1),this.$2.isAlive()&&this.$3.sendRetryStreamRequest(this.$2)};a.prototype.$5=function(a){"use strict";__p&&__p();b("BladeRunnerLogger").bumpCounter("send_to_handler");var c=[];this.$1.onBatch(a);for(var a=a.getFrames(),d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;try{switch(f.type){case b("BladeRunnerTypes").StreamFrameType.DATA:this.$1.onData(f.getData().decodeData());c.push(f.getData());break;case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:this.$1.onStatusUpdate(f.getStatusUpdate().status);break;case b("BladeRunnerTypes").StreamFrameType.LOG:f=f.getLog().message;f!=null&&this.$1.onLog(f);break;default:throw new Error("Frame with unexpected type")}}catch(a){b("BladeRunnerLogger").bumpCounter("send_to_handler_error"),b("BladeRunnerLogger").exception(a,"Failed sending frame to stream handler")}}this.$7(c)};a.prototype.$7=function(a){"use strict";__p&&__p();var c=[];for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;if(f.shouldAck===!0&&f.dataId!=null){var g=new(b("BladeRunnerTypesInternal").GatewayStreamDataAck)();g.streamId=f.streamId;g.dataId=f.dataId;g.success=!0;c.push(g)}}this.$3.sendDataAcks(c)};e.exports=a}),null);
__d("BladeRunnerSocket",["BladeRunnerEventHandler","BladeRunnerLogger","BladeRunnerTypes","BladeRunnerTypesInternal","FBMqttChannel","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="Connected",h="Disconnected",i=32*1024,j="/br_sr",k="/sr_res",l=null;function m(a){this.$1=[],this.$2=0,this.$3=null,this.$4=0,this.$5=new Map(),this.$6=a!=null?a:b("FBMqttChannel"),b("BladeRunnerLogger").setClientSessionId(b("uuid")()),this.$7()}m.get=function(){l==null&&(l=new m(b("FBMqttChannel")));return l};m.prototype.sendNewStreamRequest=function(a,c){c=new(b("BladeRunnerEventHandler"))(a,c,this);var d=a.getRequest();this.$5.set(d.streamId,c);this.getStreamCount()<=m.maxStreamCount?this.$8(d):(b("BladeRunnerLogger").bumpCounter("socket_request_throttled_max_streams"),b("BladeRunnerLogger").warn("Maximum stream count reached, will not send request: "+JSON.stringify(a.getRequest().getHeaders())),this.$9(c,d.streamId))};m.prototype.sendRetryStreamRequest=function(a){this.$8(a.getRequest())};m.prototype.sendCancel=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_cancel");var c=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();c.streamId=a;c.status=b("BladeRunnerTypes").StreamStatus.CLOSED;this.$10(c);this.removeStream(a)};m.prototype.sendDataAcks=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_data_ack",a.length),this.$11(a)};m.prototype.removeStream=function(a){this.$5["delete"](a)};m.prototype.getStreamCount=function(){return this.$5.size};m.prototype.getNextStreamId=function(){this.$4++;return this.$4};m.prototype.onMQTTStateChanged=function(a){this.$12();if(a!=h&&a!=g||this.$3==a)return;this.$3=a;b("BladeRunnerLogger").info("MQTTStateChanged: "+a);a==h?(b("BladeRunnerLogger").bumpCounter("mqtt_state_disconnected"),this.$13()):a==g&&b("BladeRunnerLogger").bumpCounter("mqtt_state_connected")};m.prototype.$8=function(a){b("BladeRunnerLogger").bumpCounter("socket_send_request"),this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newRequestFrame(a)),this.$12()};m.prototype.$10=function(a){this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(a)),this.$12()};m.prototype.$11=function(a){__p&&__p();for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;this.$1.push(b("BladeRunnerTypesInternal").GatewayStreamFrame.newDataAckFrame(e))}this.$12()};m.prototype.$14=function(){this.$2++;return this.$2};m.prototype.$12=function(){if(this.$6.getConnectionState()===g&&this.$1.length>0){try{this.$15(this.$1)}finally{this.$1=[]}return!0}return!1};m.prototype.$15=function(a){__p&&__p();var c=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(this.$14(),a);c=c.write();if(c.length>i){var d=Math.floor(a.length/2);if(d===0)throw new Error("Publish is too long: "+c.length);this.$15(a.slice(0,d));this.$15(a.slice(d,a.length))}else try{b("BladeRunnerLogger").info("send message to "+j+" "+c),this.$6.publish(j,c),b("BladeRunnerLogger").bumpCounter("mqtt_publish_success")}catch(a){b("BladeRunnerLogger").exception(a,"Failed publishing to MQTT");b("BladeRunnerLogger").bumpCounter("mqtt_publish_error");throw a}};m.prototype.$7=function(){b("BladeRunnerLogger").info("Starting socket with endpoint "+this.$6.getEndpoint()+" useragent "+navigator.userAgent),this.$16(),this.onMQTTStateChanged(this.$6.getConnectionState()),this.$6.subscribeChannelEvents({onMQTTStateChanged:function(a){this.onMQTTStateChanged(a)}.bind(this),onJSError:function(a){b("BladeRunnerLogger").warn("JS error in MQTTChannel: "+(typeof a=="object"&&a!=null?a.toString():"unknown error")+", "+JSON.stringify(a)),b("BladeRunnerLogger").bumpCounter("mqtt_channel_error")}}),this.$6.subscribe(j,function(a){throw new Error("Unexpected response: "+j+" "+a.toString())}),this.$6.subscribe(k,function(a){this.$17(a)}.bind(this))};m.prototype.$17=function(a){a=b("BladeRunnerTypesInternal").GatewayStreamBatch.read(a);this.processBatch(a)};m.prototype.processBatch=function(a){__p&&__p();try{b("BladeRunnerLogger").bumpCounter("socket_process_batch");b("BladeRunnerLogger").info("Received batch "+JSON.stringify(a));var c=null;for(var d=a.getFrames(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;g=g.getStreamId();c==null&&(c=g);if(g!=null&&c!=g)throw new Error("Received batch with frames for multiple streams")}if(c!=null){g=this.$5.get(c);g!=null?g.onProxyResponse(a):b("BladeRunnerLogger").info("Received batch with frames for unknown stream id: "+c)}else b("BladeRunnerLogger").info("Received batch with no frames")}catch(a){b("BladeRunnerLogger").exception(a,"Failed processing batch from MQTT");b("BladeRunnerLogger").bumpCounter("socket_process_batch_error");throw a}};m.prototype.$13=function(){this.$5.forEach(function(a,b,c){a.onDisconnect()})};m.prototype.$9=function(a,c){var d=new(b("BladeRunnerTypesInternal").GatewayStreamStatusUpdate)();d.streamId=c;d.status=b("BladeRunnerTypes").StreamStatus.REJECTED;d.shouldRetry=!1;d.retryDelayMs=0;c=new(b("BladeRunnerTypesInternal").GatewayStreamBatch)(null,[b("BladeRunnerTypesInternal").GatewayStreamFrame.newStatusUpdateFrame(d)]);a.onProxyResponse(c)};m.prototype.$16=function(){"WebSocket"in window||(b("BladeRunnerLogger").warn("Browser does not support websocket"),b("BladeRunnerLogger").bumpCounter("websocket_not_supported"))};m.maxStreamCount=500;e.exports=m}),null);
__d("BladeRunnerStream",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a}a.prototype.getStreamHandler=function(){"use strict";return this.$1};a.prototype.cancel=function(){"use strict"};a.prototype.isAlive=function(){"use strict";return!1};a.prototype.getStatus=function(){"use strict";return null};a.prototype.getStreamId=function(){"use strict";return 0};e.exports=a}),null);
__d("BladeRunnerStreamState",["BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a,this.$2=null,this.$3=0,this.$4=!1,this.$5=0,this.$6=!1}a.prototype.getRequest=function(){"use strict";return this.$1};a.prototype.isAlive=function(){"use strict";return!(this.$2==b("BladeRunnerTypes").StreamStatus.CLOSED||this.$2==b("BladeRunnerTypes").StreamStatus.REJECTED)};a.prototype.getLastStatus=function(){"use strict";return this.$2};a.prototype.setLastStatus=function(a){"use strict";this.$2=a};a.prototype.onError=function(){"use strict";this.$3+=1};a.prototype.getErrorCount=function(){"use strict";return this.$3};a.prototype.resetErrors=function(){"use strict";this.$3=0};a.prototype.getRetryRequestScheduled=function(){"use strict";return this.$6};a.prototype.setRetryRequestScheduled=function(a){"use strict";this.$6=a};a.prototype.witnessFrame=function(a){"use strict";__p&&__p();switch(a.type){case b("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE:a=a.getStatusUpdate();var c=!0;switch(a.status){case b("BladeRunnerTypes").StreamStatus.ACCEPTED:c=!this.$4;this.$4||(this.$4=!0);break;case b("BladeRunnerTypes").StreamStatus.STARTED:c=this.getLastStatus()!=b("BladeRunnerTypes").StreamStatus.STARTED;break;case b("BladeRunnerTypes").StreamStatus.PAUSED:c=this.getLastStatus()==b("BladeRunnerTypes").StreamStatus.STARTED;break;case b("BladeRunnerTypes").StreamStatus.CLOSED:case b("BladeRunnerTypes").StreamStatus.REJECTED:default:c=!0}this.setLastStatus(a.status);return c;default:return!0}};a.prototype.setRetriesAllowed=function(a){"use strict";this.$5=a};a.prototype.getRetriesAllowed=function(){"use strict";return this.$5};e.exports=a}),null);
__d("BladeRunnerSocketStream",["BladeRunnerLogger","BladeRunnerStream","BladeRunnerStreamState","BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();var g,h=5;c=babelHelpers.inherits(a,b("BladeRunnerStream"));g=c&&c.prototype;function a(a,c,d){"use strict";g.constructor.call(this,a),this.$BladeRunnerSocketStream1=d,this.$BladeRunnerSocketStream2=new(b("BladeRunnerStreamState"))(c),this.$BladeRunnerSocketStream2.setRetriesAllowed(h)}a.prototype.send=function(){"use strict";this.$BladeRunnerSocketStream1.sendNewStreamRequest(this.$BladeRunnerSocketStream2,this.getStreamHandler())};a.prototype.cancel=function(){"use strict";this.isAlive()&&(this.$BladeRunnerSocketStream1.sendCancel(this.$BladeRunnerSocketStream2.getRequest().streamId),this.$BladeRunnerSocketStream2.setLastStatus(b("BladeRunnerTypes").StreamStatus.CLOSED))};a.prototype.isAlive=function(){"use strict";return this.$BladeRunnerSocketStream2.isAlive()};a.prototype.getStatus=function(){"use strict";return this.$BladeRunnerSocketStream2.getLastStatus()};a.prototype.getStreamId=function(){"use strict";return this.$BladeRunnerSocketStream2.getRequest().streamId};e.exports=a}),null);
__d("BladeRunnerClient",["Base64","BladeRunnerConfig","BladeRunnerLogger","BladeRunnerSocket","BladeRunnerSocketStream","BladeRunnerTypes","BladeRunnerTypesInternal"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a!=null?a:b("BladeRunnerSocket").get()}a.prototype.requestStream=function(a,c,d){"use strict";__p&&__p();var e=new(b("BladeRunnerTypesInternal").GatewayStreamRequest)();e.streamId=this.$1.getNextStreamId();e.requestType=b("BladeRunnerTypes").StreamRequestType.BLADE_RUNNER;e.headers=b("BladeRunnerConfig").patchRequestHeaders(a);e.extraHeader=JSON.stringify(e.headers);e.payload=c!=null?b("Base64").encode(c):null;a=new(b("BladeRunnerSocketStream"))(d,e,this.$1);a.send();return a};a.prototype.logInfo=function(a){"use strict";b("BladeRunnerLogger").info(a)};a.prototype.bumpCounter=function(a){"use strict";b("BladeRunnerLogger").bumpCounter(a)};e.exports=a}),null);
__d("VisualCompletionGating",["requireCond","cr:729414"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:729414")}),null);
__d("SkywalkerUtils",["CurrentLocale","RTISubscriptionManagerConfig"],(function(a,b,c,d,e,f){__p&&__p();a={patchContext:function(a){a=a||{};a.locale=b("CurrentLocale").get();if(b("RTISubscriptionManagerConfig").assimilator){var c=b("RTISubscriptionManagerConfig").assimilator;c.tierType!=null&&(a.tierType=c.tierType);c.sandboxIP!=null&&c.sandboxPort!=null&&c.sandboxHostname!=null&&(a.sandboxIP=c.sandboxIP,a.sandboxPort=c.sandboxPort,a.sandboxHostname=c.sandboxHostname)}return a}};e.exports=a}),null);