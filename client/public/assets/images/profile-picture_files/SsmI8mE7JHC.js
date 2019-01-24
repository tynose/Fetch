if (self.CavalryLogger) { CavalryLogger.start_js(["8F+UV"]); }

__d("ContentSearchEvents",[],(function(a,b,c,d,e,f){e.exports={CONTENT_SEARCH:"content_search",OPEN_TRAY:"open_tray",QUERY_RESULTS_LOADED:"query_results_loaded",RESULT_SENT:"result_sent",namesByValue:{content_search:"CONTENT_SEARCH",open_tray:"OPEN_TRAY",query_results_loaded:"QUERY_RESULTS_LOADED",result_sent:"RESULT_SENT"}}}),null);
__d("MessengerPlatformQueryType",[],(function(a,b,c,d,e,f){e.exports={SEARCH:0,MEDIAFY:1,TRENDING:2,SAMPLE:3,namesByValue:["SEARCH","MEDIAFY","TRENDING","SAMPLE"]}}),null);
__d("XMessengerPlatformContentSearchController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/content_search/",{q:{type:"String",defaultValue:""},qtype:{type:"Enum",defaultValue:0,enumType:0},resume:{type:"String",defaultValue:""},"interface":{type:"Enum",enumType:0},platform_fbids:{type:"IntVector"}})}),null);
__d("ChatContentSearch",["AsyncRequest","MessengerPlatformQueryType","XMessengerPlatformContentSearchController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={getContentForQuery:function(a){var c=a.query,d=a.callback,e=a.resume,f=a.searchInterface;a=a.platformFBIDs;c=b("XMessengerPlatformContentSearchController").getURIBuilder().setString("q",c).setString("resume",e);f!=null&&c.setEnum("interface",f);a!=null&&c.setIntVector("platform_fbids",a);e=new(b("AsyncRequest"))().setURI(c.getURI()).setHandler(d);e.send();return e},getTrending:function(a,c,d){c=b("XMessengerPlatformContentSearchController").getURIBuilder().setEnum("qtype",b("MessengerPlatformQueryType").TRENDING).setString("resume",c);d!=null&&c.setEnum("interface",d);d=new(b("AsyncRequest"))().setURI(c.getURI()).setHandler(a);d.send();return d}};e.exports=a}),null);
__d("ChatContentSearchResult.react",["cx","fbt","AddCommentFlyoutSizeType","Image.react","Keys","React","ShimButton.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=274,k=308,l=137,m=152;a=babelHelpers.inherits(n,b("React").PureComponent);i=a&&a.prototype;function n(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){a.stopPropagation(),this.props.onClick(this.props.result)}.bind(this),this.$2=function(a){a.keyCode===b("Keys").RETURN&&(a.preventDefault(),this.props.onClick(this.props.result))}.bind(this),c}n.isWide=function(a){a=a.media.preview;return a.width>a.height*1.2};n.getScaledDimensions=function(a,b,c){a=a.media.preview;var d=a.height;a=a.width;var e=c?m:l;c=c?k:j;b=(b?c:e)/a;d*=b;a*=b;return{height:d,width:a}};n.prototype.render=function(){var a=n.getScaledDimensions(this.props.result,this.props.isWide,this.props.size==="large");return b("React").createElement(b("ShimButton.react"),{"aria-label":h._("GIF"),"data-testid":this.props["data-testid"],onClick:this.$1,onKeyPress:this.$2},b("React").createElement(b("Image.react"),{className:"_358"+(this.props.isWide?" _26n6":""),src:this.props.src,style:a}))};n.defaultProps={size:b("AddCommentFlyoutSizeType").SMALL};e.exports=n}),null);
__d("ChatContentSearchResults.react",["Bootloader","ChatContentSearch","ChatContentSearchResult.react","MercuryConfig","MessengerSpinner.react","React","ScrollableArea.react","debounce","emptyFunction","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={};function i(a){return a.replace(/^httpss/,"https")}var j={isLoading:!1,response:null,results:[]};c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(a){__p&&__p();g.constructor.call(this,a),this.state=j,this.$11=function(){var a=b("performanceAbsoluteNow")(),c=this.state.results?this.state.results.length:0;b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,d){b.markerPoint(d.COMPOSER_INTERACTION,"load_gif_result",JSON.stringify({length:c}),0,a)},"ChatContentSearchResults.react");this.$11=b("emptyFunction")}.bind(this),this.$6=function(){this.$7();this.$4=Date.now();if(this.state.response&&(!this.state.response.resultNextCursor||!this.props.query))return;var a;this.setState({isLoading:!0});this.props.query?a=b("ChatContentSearch").getContentForQuery({query:this.props.query,resume:this.state.response?this.state.response.resultNextCursor:void 0,callback:this.$12,searchInterface:this.props.searchInterface,platformFBIDs:this.props.platformFBIDs}):a=b("ChatContentSearch").getTrending(this.$12,this.state.response?this.state.response.resultNextCursor:void 0,this.props.searchInterface);this.$1=a}.bind(this),this.$12=function(a){this.$1===a.request&&(h=babelHelpers["extends"]({},h,a.payload.attribution),this.setState(function(b){return{isLoading:!1,response:a.payload,results:a.payload.resultGroup[0]?b.results.concat(a.payload.resultGroup[0].results):b.results}},function(){this.$4!==void 0&&(this.props.onResultsLoaded&&this.props.onResultsLoaded(Date.now()-this.$4),delete this.$4)}.bind(this)),delete this.$1)}.bind(this),this.$15=function(a){this.props.onSelect(a,h[a.platformFBID])}.bind(this),this.$8=function(){this.$16()&&!this.$1&&this.$2()}.bind(this),this.$5=function(a){this.setState(j,a)}.bind(this),this.$2=b("emptyFunction"),this.$3=b("emptyFunction")}a.prototype.componentDidMount=function(){this.$3=b("debounce")(this.$5,100),this.$2=b("debounce")(this.$6,200),this.$2()};a.prototype.componentWillUnmount=function(){this.$2.reset(),this.$3.reset(),this.$7()};a.prototype.UNSAFE_componentWillReceiveProps=function(a){a.query!==this.props.query&&this.$3(this.$6)};a.prototype.render=function(){return b("React").createElement(b("ScrollableArea.react"),{"data-testid":this.props["data-testid"],fade:!0,onScroll:this.$8,ref:"scrollable"},this.$9(),this.$10())};a.prototype.$10=function(){return!this.state.isLoading?null:b("React").createElement("div",{style:{marginTop:this.state.response?"10px":"140px",textAlign:"center"}},b("React").createElement(b("MessengerSpinner.react"),{color:"grey",size:b("MessengerSpinner.react").medium_size}))};a.prototype.$7=function(){this.setState({isLoading:!1}),this.$1&&(this.$1.abort(),delete this.$1,delete this.$4)};a.prototype.$9=function(){return!this.state.response||!this.state.results.length?null:this.state.results.map(function(a,c){var d=b("ChatContentSearchResult.react").isWide(a);if(!d&&a.platformFBID.toString()!==b("MercuryConfig").MessengerAppID){var e=c-this.$13(c),f=this.$14(c)-c;d=(e<=1||e%2!==0)&&f<=1}this.$11();return b("React").createElement(b("ChatContentSearchResult.react"),{isWide:d,"data-testid":this.props["data-testid"]+"-items-"+c,key:"result:"+c+":"+a.resultID,onClick:this.$15,result:a,src:i(a.media.preview.url),size:this.props.size})}.bind(this))};a.prototype.$13=function(a){a=a;while(a>0){--a;if(b("ChatContentSearchResult.react").isWide(this.state.results[a]))return a}return a};a.prototype.$14=function(a){a=a;var c=this.state.results.length;while(a<c-1){++a;if(b("ChatContentSearchResult.react").isWide(this.state.results[a]))return a}return a};a.prototype.$16=function(){var a=this.refs.scrollable.getArea();return!!(a&&a.distanceToBottom()<=50)};a.defaultProps={"data-testid":"search-results",size:"small"};e.exports=a}),null);
__d("ChatContentSearchTrendingIndicator.react",["cx","fbt","ix","Image.react","React"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.shouldComponentUpdate=function(a){return a.shown!==this.props.shown};a.prototype.render=function(){return this.props.shown?b("React").createElement("div",{className:"_515"},b("React").createElement(b("Image.react"),{src:i("28005")}),h._("Trending")):null};function a(){j.apply(this,arguments)}e.exports=a}),null);
__d("MessengerSearchInput.react",["cx","AbstractTextInput.react","React","XUICloseButton.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);h=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.focusInput=function(){this.refs.inputField.focusInput()}.bind(this),b}a.prototype.render=function(){return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_5iwm"+(this.props.isFocused||!!this.props.value?" _5iwn":"")),role:"search"},b("React").createElement(b("AbstractTextInput.react"),{className:"_3deo",onBlur:this.props.onBlur,onChange:this.props.onChange,onClick:this.props.onClick,onEnter:this.props.onEnter,onFocus:this.props.onFocus,placeholder:this.props.placeholder,ref:"inputField",value:this.props.value}),b("React").createElement(b("XUICloseButton.react"),{size:"small",onMouseDown:this.props.onClear,className:(this.props.value.length===0?"hidden_elem":"")+" _2xme"}))};a.propTypes={isFocused:c.bool,onBlur:c.func,onChange:c.func,onClear:c.func,onClick:c.func,onEnter:c.func,onFocus:c.func,placeholder:c.node,value:c.string.isRequired};e.exports=a}),null);
__d("ChatContentSearchFlyout.react",["cx","fbt","AddCommentFlyoutSizeType","BanzaiLogger","Bootloader","ChatContentSearchResults.react","ChatContentSearchTrendingIndicator.react","ContentSearchEvents","Keys","MercuryShareAttachmentRenderLocations","MessengerPlatformInterfaceType","MessengerSearchInput.react","React","ReactDOM","UFISearchInput.react","XUITextInput.react","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j=" ",k=/\s+/g,l=b("MercuryShareAttachmentRenderLocations").COMPOSER,m=b("MercuryShareAttachmentRenderLocations").MESSENGER,n=406655189415060;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={query:this.props.query,viewerEnteredText:!1},this.$7=function(a){this.setState({query:a.target.value,viewerEnteredText:a.target.value.length>0})}.bind(this),this.$2=function(a){return(a||"").trim().replace(k,j).toLowerCase()},this.$3=function(a){a.keyCode===b("Keys").ESC&&this.props.onEscKeyDown&&this.props.onEscKeyDown()}.bind(this),this.$6=function(a,c){this.$8(),this.props.onSelect(a,c),b("BanzaiLogger").log("ContentSearchLoggerConfig",{event:b("ContentSearchEvents").RESULT_SENT,query:this.state.query,resultid:a.resultID})}.bind(this),this.$5=function(a){b("BanzaiLogger").log("ContentSearchLoggerConfig",{event:b("ContentSearchEvents").QUERY_RESULTS_LOADED,query:this.state.query,inflighttime:a})}.bind(this),c}a.prototype.$1=function(){var a=b("performanceAbsoluteNow")();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerPoint(c.COMPOSER_INTERACTION,"mount_gif_flyout","",0,a)},"ChatContentSearchFlyout.react")};a.prototype.componentDidMount=function(){this.$1(),b("BanzaiLogger").log("ContentSearchLoggerConfig",{event:b("ContentSearchEvents").OPEN_TRAY,query:this.state.query}),this.refs.input&&(this.refs.input.focusInput?this.refs.input.focusInput():b("ReactDOM").findDOMNode(this.refs.input).focus())};a.prototype.UNSAFE_componentWillReceiveProps=function(a){this.state.viewerEnteredText||this.setState({query:a.query})};a.prototype.render=function(){var a=this.$2(this.state.query),c=this.$2(this.props.queryDefault);a=a.length===0?c:a;return b("React").createElement("div",{className:"_1er4",onKeyDown:this.$3,"data-testid":"mercury-content-search-flyout"},b("React").createElement("div",{className:"_3mtr"},this.$4()),b("React").createElement("div",{className:"_3mts"},b("React").createElement(b("ChatContentSearchResults.react"),{"data-testid":"mercury-content-search-flyout-results",onResultsLoaded:this.$5,onSelect:this.$6,query:a,searchInterface:this.props.searchInterface,size:this.props.size,platformFBIDs:c.length===0?[]:[n]}),b("React").createElement(b("ChatContentSearchTrendingIndicator.react"),{shown:a.length===0})))};a.prototype.$4=function(){var a=this.props.location===m?b("MessengerSearchInput.react"):this.props.location===l?b("UFISearchInput.react"):b("XUITextInput.react");return b("React").createElement(a,{className:"_4qcs",isFocused:!0,onClick:function(a){return a&&a.stopPropagation()},onChange:this.$7,onClear:function(){this.setState({query:this.props.queryDefault||"",viewerEnteredText:!1})}.bind(this),placeholder:h._("Search GIFs across apps..."),ref:"input",value:this.state.query||""})};a.prototype.$8=function(){var a=b("performanceAbsoluteNow")();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerPoint(c.COMPOSER_INTERACTION,"send_gif","",0,a),b.markerEnd(c.COMPOSER_INTERACTION,"SUCCESS",0,a)},"ChatContentSearchFlyout.react")};a.propTypes={location:c.oneOf(b("MercuryShareAttachmentRenderLocations").getValues()),onEscKeyDown:c.func,onSelect:c.func.isRequired,query:c.string,searchInterface:c.oneOf([b("MessengerPlatformInterfaceType").UNKNOWN_INTERFACE,b("MessengerPlatformInterfaceType").FB_INTERFACE,b("MessengerPlatformInterfaceType").FB_POST_INTERFACE,b("MessengerPlatformInterfaceType").MESSENGER_INTERFACE]),size:c.oneOf(Object.values(b("AddCommentFlyoutSizeType"))),queryDefault:c.string};a.defaultProps={size:b("AddCommentFlyoutSizeType").SMALL};e.exports=a}),null);
__d("ReactComposerStatusDonateButtonActionType",["keyMirrorRecursive"],(function(a,b,c,d,e,f){e.exports=b("keyMirrorRecursive")({SET_DONATE_CONFIG:null,UPDATE_DESCRIPTION:null,UPDATE_TITLE:null,SET_DATA:null,SET_ENABLED:null,SET_ERRORS:null,SET_TEXT_DISABLED:null},"ReactComposerStatusDonateButtonActionType")}),null);
__d("ReactComposerStatusDonateButtonStore",["ReactComposerStatusDonateButtonActionType","ReactComposerStoreBase"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("ReactComposerStoreBase"));g=c&&c.prototype;function a(){"use strict";__p&&__p();var a;g.constructor.call(this,function(){return{charityName:"",fundraiserCampaignId:1,enabled:!1,textDisabled:!1,errors:!1}},function(c){__p&&__p();switch(c.type){case b("ReactComposerStatusDonateButtonActionType").SET_DONATE_CONFIG:a&&a.$ReactComposerStatusDonateButtonStore1(c);break;case b("ReactComposerStatusDonateButtonActionType").UPDATE_TITLE:a&&a.$ReactComposerStatusDonateButtonStore2(c);break;case b("ReactComposerStatusDonateButtonActionType").UPDATE_DESCRIPTION:a&&a.$ReactComposerStatusDonateButtonStore3(c);break;case b("ReactComposerStatusDonateButtonActionType").SET_DATA:a&&a.$ReactComposerStatusDonateButtonStore4(c);break;case b("ReactComposerStatusDonateButtonActionType").SET_ENABLED:a&&a.$ReactComposerStatusDonateButtonStore5(c);break;case b("ReactComposerStatusDonateButtonActionType").SET_ERRORS:a&&a.$ReactComposerStatusDonateButtonStore6(c);break;case b("ReactComposerStatusDonateButtonActionType").SET_TEXT_DISABLED:a&&a.$ReactComposerStatusDonateButtonStore7(c);break}});a=this}a.prototype.getFundraiserCampaignID=function(a){"use strict";return this.getComposerData(a).fundraiserCampaignId};a.prototype.getCharityName=function(a){"use strict";return this.getComposerData(a).charityName};a.prototype.getTitle=function(a){"use strict";return this.getComposerData(a).title};a.prototype.getDescription=function(a){"use strict";return this.getComposerData(a).description};a.prototype.getEnabled=function(a){"use strict";return this.getComposerData(a).enabled};a.prototype.getErrors=function(a){"use strict";return this.getComposerData(a).errors};a.prototype.getTextDisabled=function(a){"use strict";return this.getComposerData(a).textDisabled};a.prototype.$ReactComposerStatusDonateButtonStore1=function(a){"use strict";var b=this.validateAction(a,["composerID","config"]),c=b[0];b=b[1];c=this.getComposerData(c);c.fundraiserCampaignId=b.fundraiserCampaignId;c.charityName=b.charityName;this.emitChange(a.composerID)};a.prototype.$ReactComposerStatusDonateButtonStore2=function(a){"use strict";var b=this.validateAction(a,["composerID","title"]),c=b[0];b=b[1];c=this.getComposerData(c);c.title=b.substring(0,60);this.emitChange(a.composerID)};a.prototype.$ReactComposerStatusDonateButtonStore3=function(a){"use strict";var b=this.validateAction(a,["composerID","description"]),c=b[0];b=b[1];c=this.getComposerData(c);c.description=b;this.emitChange(a.composerID)};a.prototype.$ReactComposerStatusDonateButtonStore4=function(a){"use strict";var b=this.validateAction(a,["composerID","title","description"]),c=b[0],d=b[1];b=b[2];c=this.getComposerData(c);c.title=d;c.description=b;this.emitChange(a.composerID)};a.prototype.$ReactComposerStatusDonateButtonStore5=function(a){"use strict";var b=this.validateAction(a,["composerID","enabled"]),c=b[0];b=b[1];c=this.getComposerData(c);c.enabled=b;this.emitChange(a.composerID)};a.prototype.$ReactComposerStatusDonateButtonStore6=function(a){"use strict";var b=this.validateAction(a,["composerID","errors"]),c=b[0];b=b[1];c=this.getComposerData(c);c.errors=b;this.emitChange(a.composerID)};a.prototype.$ReactComposerStatusDonateButtonStore7=function(a){"use strict";var b=this.validateAction(a,["composerID","textDisabled"]),c=b[0];b=b[1];c=this.getComposerData(c);c.textDisabled=b;this.emitChange(a.composerID)};e.exports=new a()}),null);
__d("ReactComposerStatusDonateButtonActions.react",["ReactComposerDispatcher","ReactComposerStatusDonateButtonActionType","ReactComposerStatusDonateButtonStore"],(function(a,b,c,d,e,f){__p&&__p();b("ReactComposerStatusDonateButtonStore");a.prototype.setConfig=function(a,c){"use strict";b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerStatusDonateButtonActionType").SET_DONATE_CONFIG,config:c})};a.prototype.setEnabled=function(a,c){"use strict";b("ReactComposerDispatcher").dispatch({composerID:a,enabled:c,type:b("ReactComposerStatusDonateButtonActionType").SET_ENABLED})};a.prototype.updateTitle=function(a,c){"use strict";b("ReactComposerDispatcher").dispatch({composerID:a,title:c,type:b("ReactComposerStatusDonateButtonActionType").UPDATE_TITLE})};a.prototype.updateDescription=function(a,c){"use strict";b("ReactComposerDispatcher").dispatch({composerID:a,description:c,type:b("ReactComposerStatusDonateButtonActionType").UPDATE_DESCRIPTION})};a.prototype.setData=function(a,c,d){"use strict";b("ReactComposerDispatcher").dispatch({composerID:a,title:c,description:d,type:b("ReactComposerStatusDonateButtonActionType").SET_DATA})};a.prototype.setErrors=function(a,c){"use strict";b("ReactComposerDispatcher").dispatch({composerID:a,errors:c,type:b("ReactComposerStatusDonateButtonActionType").SET_ERRORS})};a.prototype.setTextDisabled=function(a,c){"use strict";b("ReactComposerDispatcher").dispatch({composerID:a,textDisabled:c,type:b("ReactComposerStatusDonateButtonActionType").SET_TEXT_DISABLED})};function a(){"use strict"}e.exports=new a()}),null);
__d("ReactComposerGIFToggleController.react",["Arbiter","ChatContentSearchFlyout.react","LayerTabIsolation","MessengerPlatformInterfaceType","React","ReactComposerContextTypes","ReactComposerEvents","ReactComposerScrapedAttachmentActions","ReactComposerTaggerActions","ReactComposerTaggerType","XUIContextualDialog.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(){b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.loggingName,b("ReactComposerTaggerType").GIF,!1)}.bind(this),this.$3=function(){this.props.showFlyout&&b("ReactComposerTaggerActions").deselectCurrentTagger(this.context.composerID,this.props.loggingName)}.bind(this),this.$4=function(a){b("ReactComposerScrapedAttachmentActions").scrapeAttachment(this.context.composerID,this.context.targetID,a.source.url,this.context.composerType,this.context.actorID,this.props.loggingName),b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,this.props.loggingName,b("ReactComposerTaggerType").GIF,{gifData:{url:a.source.url}}),this.$3(),b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+this.context.composerID)}.bind(this),c}a.prototype.render=function(){return b("React").createElement("span",{onClick:this.props.onClick||this.$1,role:"presentation"},b("React").createElement("span",{className:this.props.spanClassName,ref:"container"},this.props.children),this.$2())};a.prototype.$2=function(){return!this.props.showFlyout?null:b("React").createElement(b("XUIContextualDialog.react"),{alignment:this.props.alignment||"left",behaviors:{LayerTabIsolation:b("LayerTabIsolation")},contextRef:function(){return this.refs.container}.bind(this),onBlur:this.props.onBlur||this.$3,onToggle:function(a){!a&&this.props.showFlyout&&(this.props.onBlur&&this.props.onBlur()||this.$3())}.bind(this),position:"below",shown:this.props.showFlyout,hasActionableContext:!0,width:278},b("React").createElement("div",null,b("React").createElement(b("ChatContentSearchFlyout.react"),{onEscKeyDown:this.props.onBlur||this.$3,onSelect:this.props.onSelect||this.$4,searchInterface:b("MessengerPlatformInterfaceType").FB_POST_INTERFACE,shown:this.props.showFlyout})))};a.contextTypes=b("ReactComposerContextTypes");e.exports=a}),null);
__d("FundraiserComposer",["csx","Arbiter","Bootloader","ComposerXMarauderLogger","DOM","DOMQuery","DOMScroll","Event","ReloadPage","Run","ViewportTrackingHelper","$","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h=!1,i={},j;function k(a){if(!a.streamStory){b("ReloadPage").now();return}l.renderStory(a.streamStory);b("ComposerXMarauderLogger").logCompleted(i.id)}var l={init:function(a){i=b("$")(a),j=b("Arbiter").subscribe("composer/publish",function(a,b){i&&b.composer_id===i.id&&k(b)}),b("Run").onLeave(l.destroy),h&&b("Run").onAfterLoad(function(){setTimeout(l.focus,0)})},destroy:function(){j&&j.unsubscribe()},renderStory:function(a){var c=b("ge")("pagelet_fundraiser_feed");if(c===null)return null;b("DOM").prependContent(c,a);b("Bootloader").loadModules(["Animation"],function(b){new b(a).from("backgroundColor","#fff8dd").to("backgroundColor","#fff").duration(2e3).ease(b.ease.both).go()},"FundraiserComposer");return a},setAutofocus:function(a){h=a},addFocusTrigger:function(a){b("Event").listen(a,"click",l.focus)},focus:function(){l._scrollIntoView(function(){var a=b("DOMQuery").scry(i,"textarea");if(a[0])a[0].focus();else{a=b("DOMQuery").scry(i,"._5yk2");a[0]&&a[0].click()}})},_scrollIntoView:function(a){if(b("ViewportTrackingHelper").isVisible(i,200)){a();return}b("DOMScroll").scrollTo(i,750,!0,0,0,a)}};e.exports=l}),null);
__d("ReactComposerSproutsLiveVideoSelector.react",["ix","fbt","React","ReactComposerAttachmentType","ReactComposerLoggingName","ReactComposerSproutsSelector.react","fbglyph"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.defaultProps={onSelected:function(){}},b}a.prototype.render=function(){return b("React").createElement(b("ReactComposerSproutsSelector.react"),{attachmentID:b("ReactComposerAttachmentType").LIVE_VIDEO,loggingName:b("ReactComposerLoggingName").LIVE_VIDEO_TAB_SELECTOR,icon:g("123206"),label:h._("Live Video"),onSelected:this.props.onSelected,dataTestID:"react-composer-live-video-selector-react"})};e.exports=a}),null);
__d("ReactComposerSproutsLiveVideoDialogSelector.react",["Arbiter","Bootloader","React","ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerConfig","ReactComposerContextConfig","ReactComposerEvents","ReactComposerLoggingName","ReactComposerSproutsLiveVideoSelector.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(){b("ReactComposerAttachmentActions").selectAttachment(this.props.contextConfig.composerID,b("ReactComposerAttachmentType").LIVE_VIDEO,!0,b("ReactComposerLoggingName").LIVE_VIDEO_TAB_SELECTOR),setTimeout(function(){return b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+this.props.contextConfig.composerID)}.bind(this),0),b("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(a){return a.startPreviewUI(this.props.contextConfig,this.props.config)}.bind(this),"ReactComposerSproutsLiveVideoDialogSelector.react")}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("ReactComposerSproutsLiveVideoSelector.react"),{onSelected:this.$1})};e.exports=a}),null);
__d("ReactFundraiserComposer.react",["cx","BootloadedComponent.react","FundraiserComposer","JSResource","React","ReactComposerAttachmentType","ReactComposerAudienceActions","ReactComposerBodyContainer.react","ReactComposerConfig","ReactComposerContextConfig","ReactComposerContextProviderMixin","ReactComposerFeedMediaPostButtonContainer.react","ReactComposerFeedPostButtonContainer.react","ReactComposerFocusInit","ReactComposerLazyHeader.react","ReactComposerLiveVideoLazyAttachment.react","ReactComposerLiveVideoPreviewButton.react","ReactComposerLoggingName","ReactComposerMediaEagerAttachment.react","ReactComposerPrefillConfig","ReactComposerPrefillStore","ReactComposerPrefillUtils","ReactComposerSproutsLiveVideoDialogSelector.react","ReactComposerSproutsMediaSelector.react","ReactComposerSproutsStatusAndMediaSelector.react","ReactComposerStatusDonateButtonActions.react","ReactComposerStatusEagerAttachment.react","ReactComposerWithSprouts.react","XUISpinner.react","$","ReactComposerStatusDonateButtonStore"],(function(a,b,c,d,e,f,g){__p&&__p();b("ReactComposerStatusDonateButtonStore");a=b("React").createClass({displayName:"ReactFundraiserComposer",mixins:[b("ReactComposerContextProviderMixin")],propTypes:{contextConfig:b("ReactComposerContextConfig").isRequired,config:b("ReactComposerConfig").isRequired,prefillConfig:b("ReactComposerPrefillConfig").isRequired},componentDidMount:function(){b("FundraiserComposer").init(this.props.contextConfig.composerID);b("ReactComposerAudienceActions").setPrivacyxNullDangerous(this.props.contextConfig.composerID,!0);this.props.prefillConfig&&b("ReactComposerPrefillUtils").prefill(this.props.contextConfig.composerID,this.props.prefillConfig,this.props.contextConfig.gks);var a=b("ReactComposerPrefillStore").getAndEraseField(this.props.contextConfig.composerID,"donateConfig");a&&(b("ReactComposerStatusDonateButtonActions.react").setConfig(this.props.contextConfig.composerID,a),b("ReactComposerStatusDonateButtonActions.react").setData(this.props.contextConfig.composerID,a.charityName,""),b("ReactComposerStatusDonateButtonActions.react").setEnabled(this.props.contextConfig.composerID,!0));a=(a=this.props)!=null?(a=a.config)!=null?(a=a.actorConfig)!=null?a.willShowActorSelector:a:a:a;if(!a&&this.props.contextConfig.gks.shouldBlurOnFocus){b("ReactComposerFocusInit").handler(b("$")("fundraiser_composer_container"),this.props.contextConfig.composerID,this.props.contextConfig.actorID,this.props.contextConfig.gks,(a=this.props.contextConfig)!=null?(a=a.jsModules)!=null?a.composerFocus:a:a,!0)}},render:function(){var a=this.props.config.attachmentsConfig,c=this.props.contextConfig.gks.shouldShowLive;return b("React").createElement(b("ReactComposerWithSprouts.react"),{defaultAttachmentOnExpand:b("ReactComposerAttachmentType").STATUS,innerProps:{sproutsConfig:this.props.config.sproutsConfig,loggingConfig:this.props.config.loggingConfig},ref:"root"},b("React").createElement(b("ReactComposerLazyHeader.react"),{background:"light-wash",noHorizontalMargin:!0,rightChild:this._renderActorSelector(),showDelimiter:!1},b("React").createElement(b("ReactComposerSproutsStatusAndMediaSelector.react"),{key:b("ReactComposerLoggingName").STATUS_TAB_SELECTOR,label:a[b("ReactComposerAttachmentType").STATUS].tabTitle,statusOnly:!1}),b("React").createElement(b("ReactComposerSproutsMediaSelector.react"),{key:b("ReactComposerLoggingName").MEDIA_TAB_SELECTOR,config:this.props.config}),c?b("React").createElement(b("ReactComposerSproutsLiveVideoDialogSelector.react"),{key:b("ReactComposerLoggingName").LIVE_VIDEO_TAB_SELECTOR,contextConfig:this.props.contextConfig,config:this.props.config}):null),b("React").createElement(b("ReactComposerBodyContainer.react"),{expanded:!0,hasMinHeight:!1},b("React").createElement(b("ReactComposerStatusEagerAttachment.react"),{key:"status",config:this.props.config,selected:!0,postButtonModule:b("ReactComposerFeedPostButtonContainer.react"),placeholder:a[b("ReactComposerAttachmentType").STATUS].placeholder}),b("React").createElement(b("ReactComposerMediaEagerAttachment.react"),{config:this.props.config,postButtonModule:b("ReactComposerFeedMediaPostButtonContainer.react"),selected:!1}),c?b("React").createElement(b("ReactComposerLiveVideoLazyAttachment.react"),{key:"live_video",config:this.props.config,postButtonModule:b("ReactComposerLiveVideoPreviewButton.react"),selected:!1}):null))},_renderActorSelector:function(){var a=this.props.config.actorConfig;a.composerID=this.props.contextConfig.composerID;return b("React").createElement(b("BootloadedComponent.react"),babelHelpers["extends"]({},a,{bootloadPlaceholder:b("React").createElement(b("XUISpinner.react"),{className:"_3igw"}),bootloadLoader:b("JSResource")("ReactComposerActorSelectorContainer.react").__setRef("ReactFundraiserComposer.react")}))}});e.exports=a}),null);
__d("XWifiAuthReleaseAccessController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/wifiauth/release_access/",{gw_id:{type:"FBID",required:!0},redirect_mac:{type:"String",required:!0},redirect_url:{type:"String",required:!0},login_type:{type:"Enum",required:!0,enumType:0}})}),null);
__d("ReactSocialWifiComposer.react",["fbt","Arbiter","React","ReactComposerAttachmentType","ReactComposerBodyContainer.react","ReactComposerConfig","ReactComposerContextConfig","ReactComposerContextProviderMixin","ReactComposerEvents","ReactComposerFeedPostButtonContainer.react","ReactComposerLazyHeader.react","ReactComposerLoggingName","ReactComposerPrefillConfig","ReactComposerPrefillUtils","ReactComposerSproutsStatusAndMediaSelector.react","ReactComposerStatusEagerAttachment.react","ReactComposerWithSprouts.react","SocialWifiLoginType","XWifiAuthReleaseAccessController","goURI"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=a.shape({gw_id:a.string.isRequired,redirect_mac:a.string.isRequired,redirect_url:a.string.isRequired});d=b("React").createClass({displayName:"ReactSocialWifiComposer",mixins:[b("ReactComposerContextProviderMixin")],propTypes:{contextConfig:b("ReactComposerContextConfig").isRequired,config:b("ReactComposerConfig").isRequired,prefillConfig:b("ReactComposerPrefillConfig").isRequired,gateway:c.isRequired},UNSAFE_componentWillMount:function(){b("ReactComposerPrefillUtils").prefill(this.props.contextConfig.composerID,this.props.prefillConfig,this.props.contextConfig.gks),b("Arbiter").subscribe(b("ReactComposerEvents").POST_SUCCEEDED+this.props.contextConfig.composerID,function(){b("goURI")(b("XWifiAuthReleaseAccessController").getURIBuilder().setFBID("gw_id",this.props.gateway.gw_id).setString("redirect_mac",this.props.gateway.redirect_mac).setString("redirect_url",this.props.gateway.redirect_url).setEnum("login_type",b("SocialWifiLoginType").CHECKIN).getURI())}.bind(this))},render:function(){var a=this.props.config.attachmentsConfig;a=[b("React").createElement(b("ReactComposerSproutsStatusAndMediaSelector.react"),{key:b("ReactComposerLoggingName").STATUS_TAB_SELECTOR,label:a[b("ReactComposerAttachmentType").STATUS].tabTitle,statusOnly:!1})];return b("React").createElement(b("ReactComposerWithSprouts.react"),{defaultAttachmentOnExpand:b("ReactComposerAttachmentType").STATUS,innerProps:{loggingConfig:this.props.config.loggingConfig,sproutsConfig:this.props.config.sproutsConfig},ref:"root"},b("React").createElement(b("ReactComposerLazyHeader.react"),{background:"light-wash",noHorizontalMargin:!0,showDelimiter:!1},a),b("React").createElement(b("ReactComposerBodyContainer.react"),null,b("React").createElement(b("ReactComposerStatusEagerAttachment.react"),{key:"status",config:this.props.config,selected:!0,postButtonModule:b("ReactComposerFeedPostButtonContainer.react"),postButtonLabel:g._("Check In"),prefillConfig:this.props.prefillConfig})))}});e.exports=d}),null);
__d("ReactComposerGIFSproutContainer.react",["cx","ExtensibleSproutsItemType","FluxContainer","React","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerGIFToggleController.react","ReactComposerMediaUploadStore","ReactComposerScrapedAttachmentStore","ReactComposerSproutItem.react","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.getStores=function(){return[b("ReactComposerTaggerStore"),b("ReactComposerScrapedAttachmentStore"),b("ReactComposerMediaUploadStore")]};a.calculateState=function(a,c,d){a=d.composerID;return{highlighted:b("ReactComposerTaggerStore").hasData(a,b("ReactComposerTaggerType").GIF),isDisabled:b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").GIF),isSelected:b("ReactComposerTaggerStore").getSelectedTagger(a)===b("ReactComposerTaggerType").GIF}};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ReactComposerGIFToggleController.react"),babelHelpers["extends"]({},this.props,{showFlyout:this.state.isSelected,spanClassName:"_4mvf",loggingName:this.props.uiConfig.loggingName}),b("React").createElement(b("ReactComposerSproutItem.react"),{uiConfig:this.props.uiConfig,highlighted:this.state.highlighted}))};function a(){h.apply(this,arguments)}a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").GIF]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerMediaSproutContainer.react",["fbt","FluxContainer","React","ReactComposerAttachmentStore","ReactComposerAttachmentType","ReactComposerContextTypes","ReactComposerMediaSprout.react","ReactComposerMediaUploadStore","ReactComposerTaggerActions","ReactComposerTaggerStore","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(){this.setState({showPagePostTemplateNux:!1}),b("ReactComposerTaggerActions").handleSetTaggerShowNUX(this.context.composerID,"page_post_template",!1)}.bind(this),c}a.getStores=function(){return[b("ReactComposerAttachmentStore"),b("ReactComposerMediaUploadStore"),b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=b("ReactComposerAttachmentStore").getIsAttachmentSelected(d.composerID,b("ReactComposerAttachmentType").MEDIA);c=b("ReactComposerMediaUploadStore").getUploadsCount(d.composerID);d=b("ReactComposerTaggerStore").shouldShowNUX(d.composerID,"page_post_template");return{highlighted:!!c&&a,showPagePostTemplateNux:d}};a.prototype.render=function(){return b("React").createElement("div",null,b("React").createElement(b("ReactComposerMediaSprout.react"),babelHelpers["extends"]({config:this.props.config,mediaType:"MEDIA",ref:"mediaSprout"},this.props,this.state)),b("React").createElement(b("XUIAmbientNUX.react"),{contextRef:function(){return this.refs.mediaSprout}.bind(this),onCloseButtonClick:this.$1,position:"left",shown:this.state.showPagePostTemplateNux},g._("Posts with photos typically get more engagement.")))};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);