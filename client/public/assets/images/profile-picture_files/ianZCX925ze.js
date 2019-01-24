if (self.CavalryLogger) { CavalryLogger.start_js(["h\/gh6"]); }

__d("ScrollColumn.react",["cx","invariant","Arbiter","Event","React","ReactDOM","SubscriptionsHandler","Vector","ViewportBounds","joinClasses","throttle","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;var i="ScrollColumn/adjust";c=b("React").createClass({displayName:"ScrollColumn",_subscriptionsHandler:null,propTypes:{left:a.string,topOffset:a.number,zIndex:a.number},getDefaultProps:function(){return{left:"",topOffset:0,zIndex:0}},_scroll:0,_scrollDelta:0,getInitialState:function(){return{fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0}},render:function(){var a="auto",c=this.state.fixedLeft,d="auto";this.state.fixed==="bottom"?a=this.state.fixedBottom:this.state.fixed==="top"?d=this.state.fixedTop:(c="auto",d=this.state.top);var e=b("joinClasses")(this.props.className,"_5ss7");return b("React").createElement("div",{className:e,ref:"container"},b("React").createElement("div",{className:"_5ss8"+(this.state.fixed?" fixed_always":""),ref:"column",style:{bottom:a,left:c,top:d,zIndex:this.props.zIndex}},this.props.children))},componentDidMount:function(){this._subscriptionsHandler=new(b("SubscriptionsHandler"))(),this._subscriptionsHandler.addSubscriptions(b("tidyEvent")(b("Arbiter").subscribe(i,function(){this._adjust()}.bind(this))),b("tidyEvent")(b("Event").listen(window,"resize",b("throttle")(this._adjust))),b("tidyEvent")(b("Event").listen(window,"scroll",this._onScroll)),b("tidyEvent")(b("ViewportBounds").subscribe("change",this._adjust))),this._adjust()},componentDidUpdate:function(a,c){c.fixed!==this.state.fixed&&b("Arbiter").inform("reflow")},componentWillUnmount:function(){this._subscriptionsHandler&&this._subscriptionsHandler.release()},_onScroll:function(a){a=b("Vector").getScrollPosition().y;this._scrollDelta=a-this._scroll;this._scroll=a;this._adjust()},_adjust:function(){__p&&__p();if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return}if(this._scrollDelta>0&&this._isBottomOfColumnVisible()){this._setFixedToBottom();return}if(this._scrollDelta<0&&this._isTopOfColumnVisible()){this._setFixedToTop();return}var a=this._getTopPositionForRef("column"),b=this._getTopPositionForRef("container");a=a-b;this._setNotFixed(a)},_getTopPositionForRef:function(a){a=this.refs[a];a||h(0,6103);a=b("Vector").getElementPosition(b("ReactDOM").findDOMNode(a),"viewport").y;this._scroll<0&&(a+=this._scroll);return a},_getTopBoundWithOffset:function(){return b("ViewportBounds").getTop()+this.props.topOffset},_isContainerBelowViewportTop:function(){var a=this._getTopPositionForRef("container");return a>=this._getTopBoundWithOffset()},_isColumnLargerThanViewport:function(){var a=b("Vector").getViewportDimensions().y-b("ViewportBounds").getBottom()-this._getTopBoundWithOffset();return b("ReactDOM").findDOMNode(this.refs.column).offsetHeight>a},_isBottomOfColumnVisible:function(){var a=this._getTopPositionForRef("column"),c=b("Vector").getElementDimensions(b("ReactDOM").findDOMNode(this.refs.column),"viewport").y;a=a+c;return a<=b("Vector").getViewportDimensions().y-b("ViewportBounds").getBottom()},_isTopOfColumnVisible:function(){var a=this._getTopPositionForRef("column");return a>=this._getTopBoundWithOffset()},_getFixedLeft:function(){return b("Vector").getElementPosition(b("ReactDOM").findDOMNode(this.refs.container),"viewport").x},_setFixedToBottom:function(){this.setState({fixed:"bottom",fixedBottom:b("ViewportBounds").getBottom(),fixedLeft:this.props.left===""?this._getFixedLeft():this.props.left})},_setFixedToTop:function(){this.setState({fixed:"top",fixedLeft:this.props.left===""?this._getFixedLeft():this.props.left,fixedTop:this._getTopBoundWithOffset()})},_setNotFixed:function(a){this.setState({fixed:!1,top:a})},_updateContainerHeight:function(){b("ReactDOM").findDOMNode(this.refs.container).style.height=b("ReactDOM").findDOMNode(this.refs.column).offsetHeight+this.state.top+"px"},_updateColumnWidth:function(){b("ReactDOM").findDOMNode(this.refs.column).style.width=b("ReactDOM").findDOMNode(this.refs.container).offsetWidth+"px"}});c.EVENT_SHOULD_ADJUST=i;e.exports=c}),null);
__d("FollowRequestResultEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REVERT:"revert"})}),null);
__d("SeeFirstNuxEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"})}),null);
__d("XFeedSeeFirstNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/control/see_first/nux/",{})}),null);
__d("ProfileHoverButton",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","FeedBlacklistButton","FollowRequestResultEnum","MenuStaticItem","ProfileSubFollowStatus","QE2Logger","Run","SeeFirstNuxEvents","SubscribeButton","SubscriptionsHandler","XFeedSeeFirstNuxController"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=1,j="live_notifs",k={follow:0,see_first:0,see_more:0,highlights_only:0,subscribe_all_live_notifications:j,subscribe_suggested_live_notifications:j,subscribe_none_live_notifications:j};function a(a,c,d,e,f){"use strict";__p&&__p();this.$1=c,this.$2=d,this.$3=f,this.$4=e,this.$5=a,this.$6=null,this.$7=new(b("SubscriptionsHandler"))(),this.$5.getPopover().subscribe("show",function(){b("QE2Logger").logExposureForUser("feed_control_highlight_only")}),this.$2.subscribe("itemclick",function(a,c){if(c.item instanceof b("MenuStaticItem"))return;a=c.item.getValue();a==="unfollow"?(b("Arbiter").inform(b("SubscribeButton").UNSUBSCRIBED,{profile_id:this.$3.id}),b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,{profile_id:this.$3.id}),this.$4&&this.$4.hide(),this.$5.getPopover().hideLayer()):(this.setSelected(a),a===b("ProfileSubFollowStatus").SEE_FIRST?(this.$4&&(this.$4.hide(),this.logNux(b("SeeFirstNuxEvents").SEE_FIRST_SELECTED)),b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!0,see_more:!1,highlights_only:!1})):a===b("ProfileSubFollowStatus").SEE_MORE?b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!0,highlights_only:!1}):a===b("ProfileSubFollowStatus").HIGHLIGHTS_ONLY?b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!1,highlights_only:!0}):b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED,{profile_id:this.$3.id,see_first:!1,see_more:!1,highlights_only:!1}))}.bind(this)),this.$7.addSubscriptions(b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED,function(a,c){if(this.$3.id!==c.profile_id)return;c.see_first?this.setSelected(b("ProfileSubFollowStatus").SEE_FIRST):c.see_more?this.setSelected(b("ProfileSubFollowStatus").SEE_MORE):c.highlights_only?this.setSelected(b("ProfileSubFollowStatus").HIGHLIGHTS_ONLY):this.setSelected(b("ProfileSubFollowStatus").REGULAR_FOLLOW)}.bind(this))),this.$7.addSubscriptions(b("Arbiter").subscribe(b("FollowRequestResultEnum").REVERT,this.handleResponse.bind(this))),this.$4&&(this.$4.show(),this.logNux(b("SeeFirstNuxEvents").IMP),this.$7.addSubscriptions(b("Event").listen(b("DOM").find(this.$4.getRoot(),"._50zy"),"click",this.logNux.bind(this,b("SeeFirstNuxEvents").XOUT)))),b("Run").onLeave(this.cleanUp.bind(this))}a.prototype.logNux=function(a){"use strict";var c=b("XFeedSeeFirstNuxController").getURIBuilder().getURI();new(b("AsyncRequest"))(c).setData({event:a,id:this.$3.id}).send()};a.prototype.getButtons=function(){"use strict";return b("DOM").scry(this.$1,"._3oz-")};a.prototype.getSelected=function(){"use strict";var a=this.getButtons(),c=null;a.forEach(function(a){var d=a.getAttribute("data-status");b("CSS").matchesSelector(a,"._52-0")&&(c=d)});return c};a.prototype.setSelected=function(a){"use strict";__p&&__p();this.$6=this.getSelected();var c=this.getButtons(),d=k[a];c.forEach(function(c){if(d===j)return;var e=c.getAttribute("data-status");e===a?b("CSS").addClass(c,"_52-0"):b("CSS").removeClass(c,"_52-0")});this.$2.forEachItem(function(c){if(!c.getValue)return;var e=c.getValue(),f=k[e];if(e==="unfollow")return;c=c.getRoot();e===a?b("CSS").addClass(c,"_52-0"):f===d&&b("CSS").removeClass(c,"_52-0")})};a.prototype.handleResponse=function(a,c){"use strict";if(c.id!==this.$3.id||c.location!==i)return;a===b("FollowRequestResultEnum").REVERT&&this.revert()};a.prototype.revert=function(){"use strict";if(this.$6===null)return;this.setSelected(this.$6)};a.prototype.cleanUp=function(){"use strict";this.$7&&this.$7.release(),this.$7=null,this.$1=null,this.$2=null,this.$3=null};e.exports=a}),null);
__d("SeeFirstProfilePopoverMenu",["PopoverMenu"],(function(a,b,c,d,e,f){var g;g=babelHelpers.inherits(a,b("PopoverMenu"));g&&g.prototype;a.prototype._onMenuDone=function(a){"use strict"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("ProfileEngagementTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAppID=function(a){this.$1.appid=a;return this};a.prototype.setAppversion=function(a){this.$1.appversion=a;return this};a.prototype.setBrowseSessionID=function(a){this.$1.browse_session_id=a;return this};a.prototype.setContentID=function(a){this.$1.content_id=a;return this};a.prototype.setEngagementType=function(a){this.$1.engagement_type=a;return this};a.prototype.setEventMetadata=function(a){this.$1.event_metadata=b("GeneratedLoggerUtils").serializeMap(a);return this};a.prototype.setIsemployee=function(a){this.$1.isemployee=a;return this};a.prototype.setItemSubtype=function(a){this.$1.item_subtype=a;return this};a.prototype.setItemType=function(a){this.$1.item_type=a;return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setProductBucket=function(a){this.$1.product_bucket=a;return this};a.prototype.setProfileIDDummy=function(a){this.$1.profile_id_dummy=a;return this};a.prototype.setProfileSessionID=function(a){this.$1.profile_session_id=a;return this};a.prototype.setSessionid=function(a){this.$1.sessionid=a;return this};a.prototype.setSubsurface=function(a){this.$1.subsurface=a;return this};a.prototype.setSurface=function(a){this.$1.surface=a;return this};a.prototype.setTabName=function(a){this.$1.tab_name=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={appid:!0,appversion:!0,browse_session_id:!0,content_id:!0,engagement_type:!0,event_metadata:!0,isemployee:!0,item_subtype:!0,item_type:!0,name:!0,product_bucket:!0,profile_id_dummy:!0,profile_session_id:!0,sessionid:!0,subsurface:!0,surface:!0,tab_name:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ProfileIntroCardLogger",["csx","BanzaiLogger","CSS","DataStore","Event","Parent","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null,i=null;function a(a,c,d,e){h=c,i=e,b("tidyEvent")(b("Event").listen(a,"click",function(a){a=a.getTarget();var c=b("Parent").byAttribute(a,d);if(c){if(b("CSS").matchesSelector(c,"._md0")&&a.nodeName!=="A")return;j(JSON.parse(b("DataStore").get(c,"store")))}}))}function c(a){j(a)}function j(a){b("BanzaiLogger").log(h,babelHelpers["extends"]({},i,a))}e.exports={init:a,logClick:c}}),null);
__d("ProfileOverviewFilterDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ExplicitRegistrationReactDispatcher"))({strict:!0})}),null);
__d("ProfileOverviewFilterFluxStore",["FluxReduceStore","ProfileBulkEditConstants","ProfileOverviewFilterDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=b("ProfileBulkEditConstants").maxCount,j=b("immutable").Map;c=b("immutable").Record;var k=b("immutable").Set;g=babelHelpers.inherits(l,c({taggedInOnly:!1,postedBy:"ANYONE",selectedStories:null,actionCounts:j(),dateOption:{key:"all",start:null,end:null}}));g&&g.prototype;function l(){g.apply(this,arguments)}h=babelHelpers.inherits(a,b("FluxReduceStore"));h&&h.prototype;a.prototype.getInitialState=function(){return new l()};a.prototype.getTaggedInOnly=function(){return this.getState().get("taggedInOnly")};a.prototype.getPostedBy=function(){return this.getState().get("postedBy")};a.prototype.getDateOptionKey=function(){return this.getState().get("dateOption").key};a.prototype.getStartTime=function(){return this.getState().get("dateOption").start};a.prototype.getEndTime=function(){return this.getState().get("dateOption").end};a.prototype.getPostedByFilterParams=function(){var a=this.getPostedBy();switch(a){case"OWNER":case"NON_OWNER":return{group:a};default:return{}}};a.prototype.getFilterOptions=function(){return{taggedInOnly:this.getTaggedInOnly(),postedBy:this.getPostedByFilterParams(),startTime:this.getStartTime(),endTime:this.getEndTime()}};a.prototype.isDefaultFilterOptions=function(){var a=this.getState();return a.taggedInOnly===!1&&a.postedBy==="ANYONE"&&a.dateOption.key==="all"};a.prototype.getSelectedStories=function(){return this.getState().get("selectedStories")};a.prototype.getCanDoAction=function(a){var b=this.getSelectedStories();return!b?!1:b.size===this.getState().actionCounts.get(a)};a.prototype.$ProfileOverviewFilterFluxStore1=function(a,b){return a.set("selectedStories",b?k():null).set("actionCounts",j())};a.prototype.$ProfileOverviewFilterFluxStore2=function(a,b,c,d){__p&&__p();var e=a.selectedStories;if(!e||d===e.contains(b))return a;var f;if(d){if(e.size>=i)return a;e=e.add(b);f=1}else e=e.remove(b),f=-1;var g=c;d=a.get("actionCounts").withMutations(function(a){for(var b in g)a.set(b,(a.get(b)||0)+f*g[b])});return a.set("selectedStories",e).set("actionCounts",d)};a.prototype.reduce=function(a,b){__p&&__p();switch(b.key){case"taggedInOnly":case"postedBy":case"dateOption":return a.set(b.key,b.value);case"resetSettings":return this.getInitialState();case"setStorySelected":return this.$ProfileOverviewFilterFluxStore2(a,b.storyID,b.actionMap,b.selected);case"toggleStory":var c=a.selectedStories;if(!c)break;c=c.contains(b.storyID);return this.$ProfileOverviewFilterFluxStore2(a,b.storyID,b.actionMap,!c);case"toggleManaging":return this.$ProfileOverviewFilterFluxStore1(a,!this.getSelectedStories());case"setManaging":return this.$ProfileOverviewFilterFluxStore1(a,b.value)}return a};function a(){h.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("ProfileOverviewFilterDispatcher"))}),null);
__d("ProfileViewSwitcher.react",["ix","cx","fbt","FlexLayout.react","FluxContainer","Image.react","ProfileEngagementTypedLogger","ProfileOverviewFilterFluxStore","ProfileTabUtils","React","TimelineComponentKeys","TimelineController","XUIButton.react","XUIButtonGroup.react","asset","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k;c=babelHelpers.inherits(l,b("React").Component);j=c&&c.prototype;function l(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.$1=function(){new(b("ProfileEngagementTypedLogger"))().setEngagementType("timeline_view_switcher_click").setItemType(this.props.loggingName).setProductBucket("profile_core").setProfileIDDummy(this.props.profileID).setProfileSessionID(this.props.profileSessionID).setSurface(this.props.surface).log()}.bind(this),c}l.getButtonSize=function(a){return"large"};l.prototype.render=function(){return b("React").createElement(b("XUIButton.react"),{className:b("joinClasses")(this.props.className,this.props.isSelected?"_6ciz":""),href:this.props.link,image:b("React").createElement(b("Image.react"),{className:"_3-90",src:this.props.isSelected?this.props.selectedImage:this.props.notSelectedImage}),label:this.props.label,onClick:this.$1,size:"large"})};d=babelHelpers.inherits(a,b("React").Component);k=d&&d.prototype;function a(a){k.constructor.call(this,a)}a.prototype.componentDidMount=function(){this.props.surface==="sticky_header"&&b("TimelineController").register(b("TimelineComponentKeys").STICKY_HEADER_VIEW_SWITCHER,this)};a.prototype.render=function(){var a=this.state.tabKey,c=b("ProfileTabUtils").isTimelineTab(a),d=b("ProfileTabUtils").isTimelineOverviewTab(a)&&!this.state.isManaging;a=b("ProfileTabUtils").isTimelineOverviewTab(a)&&this.state.isManaging;var e=a?this.props.gridLink:this.props.gridManageLink,f={profileID:this.props.profileID,profileSessionID:this.props.profileSessionID,surface:this.props.surface};a=this.props.showManageButton?b("React").createElement(l,babelHelpers["extends"]({className:"_3-91 _3-94",isSelected:a,label:i._("Manage Posts"),link:e,loggingName:"grid-view-manage",notSelectedImage:g("566584"),selectedImage:g("591462")},f)):null;e=b("React").createElement(l,babelHelpers["extends"]({isSelected:c,label:i._("List View"),link:this.props.listLink,loggingName:"list-view",notSelectedImage:g("509325"),selectedImage:g("509324")},f));c=b("React").createElement(l,babelHelpers["extends"]({isSelected:d,label:i._("Grid View"),link:this.props.gridLink,loggingName:"grid-view",notSelectedImage:g("509303"),selectedImage:g("509302")},f));return b("React").createElement(b("FlexLayout.react"),{align:"start",wrap:"wrap"},a,b("React").createElement(b("XUIButtonGroup.react"),{className:this.props.bottomSpacing,display:"inline"},e,c))};a.prototype.handleTabChange=function(a,b){this.setState({tabKey:a})};a.getStores=function(){return[b("ProfileOverviewFilterFluxStore")]};a.calculateState=function(a,c){return{isManaging:b("ProfileOverviewFilterFluxStore").getSelectedStories()!==null,tabKey:a?a.tabKey:c.initialTabKey}};e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);
__d("TimelineCoverCollapse",["DOMDimensions","Style","TidyArbiter","$","getViewportDimensions"],(function(a,b,c,d,e,f){f.collapse=function(a,c){c--;a=b("getViewportDimensions")().height;var d=b("DOMDimensions").getDocumentDimensions().height;a=a+c;d<=a&&b("Style").set(b("$")("globalContainer"),"min-height",a+"px");window.scrollBy(0,c);b("TidyArbiter").inform("TimelineCover/coverCollapsed",c,"state")}}),null);
__d("TimelineCapsuleUtilities",["CSS"],(function(a,b,c,d,e,f){__p&&__p();a={setFirstUnit:function(a){__p&&__p();var c=!0;for(var d=0;d<a.children.length;++d){var e=a.children[d];if(e.id.indexOf("tl_unit_")===0)if(c)c=!1,b("CSS").addClass(e,"firstUnit");else{b("CSS").removeClass(e,"firstUnit");break}}}};e.exports=a}),null);
__d("TimelineComposer",["csx","Arbiter","Bootloader","ComposerXMarauderLogger","ComposerXStore","CSS","DOM","DOMQuery","Event","Parent","ReloadPage","Run","TimelineCapsuleUtilities","$","findTag","getObjectValues","goURI","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i,j;function k(){h&&b("ComposerXMarauderLogger").logCompleted(h.id)}function l(a){__p&&__p();if(a.hidePost){k();return}var c=a.redirect;if(c){var d=b("ComposerXStore").getAllForComposer(a.composer_id);b("getObjectValues")(d).forEach(function(a){a.reset&&a.reset(a)});b("goURI")(c);k();return}d=a.streamStory;if(!d){b("ReloadPage").now();return}if(a.backdatedTime){b("Bootloader").loadModules(["TimelineStoryPublisher"],function(b){b.publish(a)},"TimelineComposer");k();return}m.renderCapsuleBasedStory(b("$")(a.composer_id),d);b("Arbiter").inform("TimelineComposer/on_after_publish",d,"persistent");k()}var m={init:function(a){h||(i=b("Arbiter").subscribe("composer/publish",function(a,b){l(b)}),j=b("Arbiter").subscribe("LitestandComposer/publishTemp",function(b,c){l({composer_id:a,streamStory:c.markup})}),b("Run").onLeave(m.destroy)),h=b("$")(a)},destroy:function(){i&&i.unsubscribe(),j&&j.unsubscribe(),h=null},renderCapsuleBasedStory:function(a,c){__p&&__p();var d=b("findTag")("timeline_tab_content");d=d.querySelector("[id^=timeline_story_container]");var e=null;if(d)e=b("DOM").prependContent(d,c)[0];else{d=b("Parent").byClass(a,"fbTimelineCapsule");if(!(d instanceof HTMLElement))return;a=b("DOMQuery").scry(d,".fbTimelineUnit")[0];e=b("DOM").insertAfter(a,c)[0];b("CSS").hasClass(e,"fbTimelineUnit")&&(e=b("DOM").find(e,"div.timelineUnitContainer"));b("TimelineCapsuleUtilities").setFirstUnit(d)}e&&b("Bootloader").loadModules(["Animation"],function(a){new a(e).from("backgroundColor","#fff8dd").to("backgroundColor","#fff").duration(2e3).ease(a.ease.both).go()},"TimelineComposer")},getRoot:function(){return h},initNUX:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(){var a=b("DOM").scry(c,"textarea")[0];a&&a.focus()}))}};e.exports=m}),null);