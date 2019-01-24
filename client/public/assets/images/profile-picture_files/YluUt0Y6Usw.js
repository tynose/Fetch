if (self.CavalryLogger) { CavalryLogger.start_js(["+dZqi"]); }

__d("MessengerPlatformInterfaceType",[],(function(a,b,c,d,e,f){e.exports={UNKNOWN_INTERFACE:0,MESSENGER_INTERFACE:1,FB_INTERFACE:2,FB_POST_INTERFACE:3}}),null);
__d("UFIAsyncWrapper",["React","UFIConfig"],(function(a,b,c,d,e,f){"use strict";e.exports=b("UFIConfig").reactFiberAsyncUFI?b("React").unstable_ConcurrentMode:b("React").Fragment}),null);
__d("UFINewCommentNotifier",["Arbiter","UFIFeedbackTargets","UFIUIEvents","UFIUserActions"],(function(a,b,c,d,e,f){"use strict";a={onNewComment:function(a,c,d,e,f,g){b("UFIUserActions").addComment(c.ftentidentifier,d.visibleValue,d.encodedValue,{source:c.source,ufiinstanceid:c.instanceid,target:e,replyid:f,rootid:c.rootid,attachedphoto:d.attachedPhoto,attachedvideo:d.attachedVideo,attachedfile:d.attachedFile,attachedsticker:d.attachedSticker,feedcontext:c.feedcontext,timestamp:g,feedbackReferrer:c.feedbackReferrer,isMarkdown:d.isMarkdown,fluentContentToken:c.fluentContentToken,isLiveVOD:c.isLiveVOD,islivestreaming:c.islivestreaming,liveVideoQuickCommentQuality:d.liveVideoQuickCommentQuality,photoTextTagID:c.photoTextTagID,isPhotoTag:c.isPhotoTag,photoFBID:c.photoFBID,photoTagX:c.photoTagX,photoTagY:c.photoTagY,privacyValue:d.privacy_value,section:d.section,selectedInsightPoint:d.selectedInsightPoint,attachedshareurl:d.attachedShareURL,isBroadcasterUFI:c.isBroadcasterUFI,enableVODCommentTimestamps:c.enableVODCommentTimestamps,trackingID:d.trackingID,delightRanges:d.delightRanges}),b("UFIFeedbackTargets").getFeedbackTarget(c.ftentidentifier,function(f){a&&b("Arbiter").inform(b("UFIUIEvents").Comment,{ft_id:f.entidentifier,target:e,form:a,isinverted:f.isranked||c.islivestreaming||c.isActiveLivingRoom,isPhotoTag:c.isPhotoTag,photoTextTagID:c.photoTextTagID,photoTagX:c.photoTagX,photoTagY:c.photoTagY,commentString:d.visibleValue})})}};e.exports=a}),null);
__d("UFICallbackStore",["FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxStore"));g&&g.prototype;a.prototype.__onDispatch=function(a){var b=a.type;a=babelHelpers.objectWithoutPropertiesLoose(a,["type"]);this.__emitter.emit(b,a)};a.prototype.on=function(a,b){return this.__emitter.addListener(a,b)};a.prototype.remove=function(){this.__emitter.removeAllListeners()};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=a}),null);
__d("UFICommentLink.react",["cx","fbt","React","TrackingNodes","emptyFunction"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a=h._("Leave a comment"),c='{ "tn": "'+b("TrackingNodes").encodeTN(b("TrackingNodes").types.COMMENT_LINK)+'", "type": 24 }';return b("React").createElement("a",{className:"comment_link _5yxe","data-testid":"fb-ufi-commentlink",role:"button",href:this.props.href?this.props.href:"#",title:a,ajaxify:this.props.ajaxify,rel:this.props.rel,onClick:this.props.onClick,"data-ft":c,ref:"root"},this.props.children)};function a(){i.apply(this,arguments)}a.propTypes={onClick:c.func,href:c.string,ajaxify:c.string,rel:c.string};a.defaultProps={onClick:b("emptyFunction")};e.exports=a}),null);
__d("UFIMentionsInputProxy.react",["cx","Promise","JSResource","JSResourceReference","React","UFICommonInteractionEvents","UFICommonInteractionLogger","promiseDone","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").createClass({displayName:"UFIMentionsInputProxy",_cmdBuffer:[],_interactionTrackingID:null,getInitialState:function(){return{component:null,viewComponent:null}},componentDidMount:function(){this._cmdBuffer=this._cmdBuffer||[],this.props.initialData&&this._bootload()},componentDidUpdate:function(a,c){this._interactionTrackingID&&this.state.component&&!c.component&&(b("UFICommonInteractionLogger").endInteraction(this._interactionTrackingID),this._interactionTrackingID=null),this.state.component&&this._drainFnBuffer()},hasEnteredText:function(){return this._fillCmdBuffer({fn:"hasEnteredText",args:[]})},getText:function(){return this._fillCmdBuffer({fn:"getText",args:[]})},focus:function(){this._bootload(),this._fillCmdBuffer({fn:"focus",args:[]}),this.state.component||(this._interactionTrackingID=b("UFICommonInteractionLogger").startInteraction(b("UFICommonInteractionEvents").UFI_COMPOSER_INPUT_FOCUS))},onDummyFocus:function(){this.props.onDummyFocus&&this.props.onDummyFocus(),this.focus()},submitComment:function(a,b){this._fillCmdBuffer({fn:"submitComment",args:[a,b]})},insertMention:function(a){this._fillCmdBuffer({fn:"insertMention",args:[a]})},insertEmoticon:function(a){this._fillCmdBuffer({fn:"insertEmoticon",args:[a]})},insertEmoji:function(a){this._fillCmdBuffer({fn:"insertEmoji",args:[a]})},replaceText:function(a,b){this._fillCmdBuffer({fn:"replaceText",args:[a,b]})},_bootload:function(){b("promiseDone")(b("Promise").all([b("JSResource")("UFIMentionsInput.react").__setRef("UFIMentionsInputProxy.react").load(),new(b("Promise"))(function(a){this.props.viewComponent instanceof b("JSResourceReference")?this.props.viewComponent.load().done(a):a(this.props.viewComponent)}.bind(this))]),function(a){var b=a[0];a=a[1];this.isMounted()&&this.setState({component:b,viewComponent:a})}.bind(this))},_shouldDrainBuffer:function(){return this._cmdBuffer.length>0},_fillCmdBuffer:function(a){if(this.refs.mentionsinputchild)return this._execCmd(a);else this._cmdBuffer=this._cmdBuffer.concat([a])},_drainFnBuffer:function(){if(this._shouldDrainBuffer()){var a=this._cmdBuffer[0];this._execCmd(a);this._cmdBuffer=this._cmdBuffer.slice(1);b("setImmediate")(this._drainFnBuffer)}},_execCmd:function(a){var b=this.refs.mentionsinputchild;return b[a.fn].apply(b,a.args)},_renderProxyInput:function(){var a="_1osa mentionsHidden";return b("React").createElement("input",{className:a,name:"add_comment_text",ref:"proxyInput",onFocus:this.focus})},_renderDummy:function(){var a="UFIAddCommentInput _1osb _1osc _2xww";return b("React").createElement("div",{onClick:this.onDummyFocus,className:"_2xwx",onFocus:this.onDummyFocus,onMouseOver:this._bootload,role:"presentation"},b("React").createElement("div",{className:a},this._renderProxyInput(),this.props.placeholder))},render:function(){var a=this.state.component;return!a?this._renderDummy():b("React").createElement(a,babelHelpers["extends"]({key:"mentionsinputchild",ref:"mentionsinputchild"},this.props,{viewComponent:this.state.viewComponent}),this.props.children)}});e.exports=a}),null);
__d("UFIInsightsSharingCommentTag.react",["cx","fbt","invariant","Arbiter","DOMScroll","Middot.react","React","ReactDOM","ShimButton.react","Tooltip.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=j.constructor).call.apply(a,[this].concat(e)),this.state={isSelected:!1},this.$2=function(){var a=this.props.commentId,c=this.$1();c!==void 0&&a!==void 0&&(b("Arbiter").inform("InsightsComments/"+c+"/clickedInsightsCommentTag",{commentId:a}),this.setSelected())}.bind(this),this.$3=function(){var a=this.$1();a!==void 0&&b("Arbiter").inform("InsightsComments/"+a+"/clickedInsightsCommentTag",{commentId:null})}.bind(this),c}a.prototype.componentWillUnmount=function(){this.onCommentClicked&&b("Arbiter").unsubscribe(this.onCommentClicked)};a.prototype.setSelected=function(){this.setState({isSelected:!0}),window.setTimeout(function(){this.setState({isSelected:!1})}.bind(this),2e3)};a.prototype.componentDidMount=function(){var a=this.props.commentId;a!==void 0&&a!==null&&(this.onCommentClicked=b("Arbiter").subscribe("InsightsComments/clickedInsightComment/"+a,function(){var a=b("ReactDOM").findDOMNode(this.refs.commentTagContainer);a instanceof Element||i(0,4555);b("DOMScroll").ensureVisible(a,null,55,180);this.setSelected()}.bind(this)))};a.prototype.$1=function(){var a=this.props,b=a.feedbackTargetID;a=a.feedbackTargetGraphQLId;if(b!==null&&b!==void 0)return b;return a!==null&&a!==void 0?atob(a).split(":")[1]:""};a.prototype.render=function(){var a=this.props.showMiddot,c=a&&b("React").createElement(b("Tooltip.react"),{tooltip:h._("Comment posted with relevance to a certain point on the graph")},b("React").createElement(b("Middot.react"),{className:"_6y-0"})),d="_71ku"+(this.state.isSelected?" _71kv":"");return b("React").createElement("span",{className:d,ref:"commentTagContainer",role:"link",tabIndex:0,onBlur:this.$3,onClick:this.$2},c,b("React").createElement(b("ShimButton.react"),{className:"_39g5 _71kw",form:"link"},a&&"commented about ["+this.props.formattedValue+"] "))};e.exports=a}),null);
__d("LivingRoomProfileTileBadge.react",["cx","Image.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.isCommentating||a.isSpeaking,d=a.isSpeaking?b("React").createElement("div",{className:"_6mm6"},b("React").createElement("span",{className:"_6mlm"})):null,e=a.asset===null,f=e||a.size==="small"?null:b("React").createElement(b("Image.react"),{className:(a.size==="regular"?"_6y-q":"")+(a.size==="large"?" _6y-r":"")+(a.size==="extra large"?" _7a6j":""),src:a.asset}),g="_6z5p"+(c?" _6y-l":"")+(c?"":" _6y-m")+(a.size==="small"?" _6y-n":"")+(a.size==="regular"?" _6y-o":"")+(a.size==="large"?" _6y-p":"")+(a.size==="extra large"?" _7a6k":"");g=b("React").createElement("div",{className:g},f);return b("React").createElement(b("React").Fragment,null,a.size!=="small"?b("React").createElement("div",{className:"_6y-s"+(c?" _6y-t":"")+(c?"":" _6y-u")+(a.useBackgroundColor?" _7a6y":"")}):null,e?null:g,d)}e.exports=a}),null);
__d("LivingRoomPresenceBadge",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({HOST:"HOST",MEMBER:"MEMBER"})}),null);
__d("FRXServerFbt.react",["cx","React","ServerHTML.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props,c=a.blob,d=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["blob","className"]);return c==null?null:b("React").createElement(b("ServerHTML.react"),babelHelpers["extends"]({blob:c,className:b("joinClasses")("_6u30",d)},a))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);