if (self.CavalryLogger) { CavalryLogger.start_js(["fKXTg"]); }

__d("SubscribeStatuses",[],(function(a,b,c,d,e,f){e.exports={CANNOT_SUBSCRIBE:"CANNOT_SUBSCRIBE",IS_SUBSCRIBED:"IS_SUBSCRIBED",CAN_SUBSCRIBE:"CAN_SUBSCRIBE"}}),null);
__d("GamerGraphUserActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:GamerGraphUserActionsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:GamerGraphUserActionsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GamerGraphUserActionsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setContainerGameIds=function(a){this.$1.container_game_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setContainerID=function(a){this.$1.container_id=a;return this};a.prototype.setCount=function(a){this.$1.count=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setGameID=function(a){this.$1.game_id=a;return this};a.prototype.setItemID=function(a){this.$1.item_id=a;return this};a.prototype.setItemdefExtID=function(a){this.$1.itemdef_ext_id=a;return this};a.prototype.setItemdefType=function(a){this.$1.itemdef_type=a;return this};a.prototype.setMaxTime=function(a){this.$1.max_time=a;return this};a.prototype.setMinInterval=function(a){this.$1.min_interval=a;return this};a.prototype.setMinTime=function(a){this.$1.min_time=a;return this};a.prototype.setP50Time=function(a){this.$1.p50_time=a;return this};a.prototype.setSeconds=function(a){this.$1.seconds=a;return this};a.prototype.setStarTableValue=function(a){this.$1.star_table_value=a;return this};a.prototype.setTargetID=function(a){this.$1.target_id=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVideoID=function(a){this.$1.video_id=a;return this};a.prototype.setVideoType=function(a){this.$1.video_type=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={container_game_ids:!0,container_id:!0,count:!0,event:!0,game_id:!0,item_id:!0,itemdef_ext_id:!0,itemdef_type:!0,max_time:!0,min_interval:!0,min_time:!0,p50_time:!0,seconds:!0,star_table_value:!0,target_id:!0,time:!0,vc:!0,video_id:!0,video_type:!0,weight:!0};e.exports=a}),null);
__d("ReactAlbumPermalinkComposer.react",["cx","Arbiter","LitestandComposer","React","ReactComposerAttachmentType","ReactComposerAudienceActions","ReactComposerBodyContainer.react","ReactComposerContextProviderMixin","ReactComposerEvents","ReactComposerFeedMediaPostButtonContainer.react","ReactComposerFeedPostButtonContainer.react","ReactComposerFocusInit","ReactComposerLoggingName","ReactComposerMediaEagerAttachment.react","ReactComposerSproutsStatusAndMediaSelector.react","ReactComposerStatusEagerAttachment.react","ReactComposerWithSprouts.react","$"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.getChildContext=function(){"use strict";return b("ReactComposerContextProviderMixin").staticGetChildContext(this.props)};a.prototype.componentDidMount=function(){var a,c=this.props,d=c.collectionsID;c=c.contextConfig;b("LitestandComposer").initComposer(c.composerID);b("ReactComposerFocusInit").handler(b("$")("album_react_composer_container"),c.composerID,c.actorID,c.gks,(a=c)!=null?(a=a.jsModules)!=null?a.composerFocus:a:a,!0);b("ReactComposerAudienceActions").setCollectionIDWithoutLogging(c.composerID,d.toString());this.props.focus&&b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+c.composerID)};a.prototype.render=function(){"use strict";var a=b("React").createElement(b("ReactComposerWithSprouts.react"),{defaultAttachmentOnExpand:b("ReactComposerAttachmentType").STATUS,innerProps:{className:"_292i",loggingConfig:this.props.config.loggingConfig,sproutsConfig:this.props.config.sproutsConfig},expandOnInit:!1},this.$1(),b("React").createElement(b("ReactComposerBodyContainer.react"),{expanded:this.props.config.showExpandedComposer},this.$2(),this.$3()));return a};a.prototype.$1=function(){"use strict";var a=this.props.config.attachmentsConfig,c=[];a[b("ReactComposerAttachmentType").STATUS].enabled&&c.push(b("React").createElement(b("ReactComposerSproutsStatusAndMediaSelector.react"),{key:b("ReactComposerLoggingName").STATUS_TAB_SELECTOR,label:a[b("ReactComposerAttachmentType").STATUS].defaultTabTitle,statusOnly:!1}));return b("React").createElement("div",{className:"_3ubp _sg2"},c)};a.prototype.$2=function(){"use strict";if(!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").STATUS].enabled)return null;var a=this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").STATUS].placeholderText;return b("React").createElement(b("ReactComposerStatusEagerAttachment.react"),{key:"status",config:this.props.config,selected:!0,postButtonModule:b("ReactComposerFeedPostButtonContainer.react"),placeholder:a})};a.prototype.$3=function(){"use strict";return!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").MEDIA].enabled?null:b("React").createElement(b("ReactComposerMediaEagerAttachment.react"),{key:"media",config:this.props.config,postButtonModule:b("ReactComposerFeedMediaPostButtonContainer.react"),selected:!1})};function a(){"use strict";h.apply(this,arguments)}a.childContextTypes=b("ReactComposerContextProviderMixin").childContextTypes;e.exports=a}),null);
__d("ReactComposerLocationSproutContainer.react",["ExtensibleSproutsItemType","FluxContainer","React","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerSproutContainer.react","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.getStores=function(){return[b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=d.composerID;return{isDisabled:b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").LOCATION)}};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ReactComposerTaggerSproutContainer.react"),{uiConfig:this.props.uiConfig,taggerID:b("ReactComposerTaggerType").LOCATION})};function a(){g.apply(this,arguments)}a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").LOCATION]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("AddCommentFlyoutSizeType",[],(function(a,b,c,d,e,f){a={LARGE:"large",SMALL:"small"};e.exports=a}),null);
__d("LiveVideoBroadcastConstants",[],(function(a,b,c,d,e,f){"use strict";a={MSEC_IN_SEC:1e3,DEFAULT_RETRY_TIMEOUT_SECONDS:20,RENDER_DELAY_TIME_MS:500,REQUEST_ACCESS_DELAY_MS:0,AUTO_TAKENDOWN_TIME_FOR_COPYRIGHT_VIOLATION:6e4,COUNTDOWN_START_TIME:3,LIVE_WWW_BROADCASTING_APP_ID:1761791807395020,MINIMUM_BROADCAST_LENGTH_MS:4e3,FINISH_BUTTON_NUX_TIME_MS:3e3,PUBLISH_FAILURE_TIMEOUT_S:90,FUNNEL_LOGGER_NAME:"FACECAST_BROADCASTER_FUNNEL",MAX_CROSSPOST_PAGES_IN_COMPACT_VIEW:5,BROADCAST_STATE:{PREVIEW:"PREVIEW",READY_TO_LIVE:"READY_TO_LIVE",LIVE:"LIVE",FINISHING:"FINISHING",FINISHED:"FINISHED",EDITING:"EDITING"},ENCODER_TYPE:{STREAM_KEY:"STREAM_KEY",PAIRED_ENCODER:"PAIRED_ENCODER"},RHC_TAB_TYPE:{POST:"POST",SETTINGS:"SETTINGS",MONETIZATION:"MONETIZATION",TOOLS:"TOOLS"},CAMERA_STATE:{CHECK_CAMERA_ACCESS:"CHECK_CAMERA_ACCESS",REQUEST_CAMERA_ACCESS:"REQUEST_CAMERA_ACCESS",BROADCAST:"BROADCAST",CAMERA_NOT_FOUND:"CAMERA_NOT_FOUND",MICROPHONE_NOT_FOUND:"MICROPHONE_NOT_FOUND",CAMERA_NOT_ALLOWED:"CAMERA_NOT_ALLOWED"},CAMERA_DIMENSIONS:{ONE_ONE:1,FOUR_THREE:4/3,SIXTEEN_NINE:16/9},INPUT_SOURCE:{API:"API",CAMERA:"CAMERA",EDIT:"EDIT",EDIT_SCHEDULE:"EDIT_SCHEDULE",VIDEO_GAME:"VIDEO_GAME"},ACTIONS:{ACCEPT_ERROR_BROADCAST_COULD_NOT_START:"ACCEPT_ERROR_BROADCAST_COULD_NOT_START",FINISH_BROADCAST_REQUEST:"FINISH_BROADCAST_REQUEST",FINISH_BROADCAST_SUCCESS:"FINISH_BROADCAST_SUCCESS",FETCH_INVITED_FRIENDS:"FETCH_INVITED_FRIENDS",SET_INVITED_FRIENDS:"SET_INVITED_FRIENDS",GET_WEBCAM_STREAM_URL_REQUEST:"GET_WEBCAM_STREAM_URL_REQUEST",GET_WEBCAM_STREAM_URL_SUCCESS:"GET_WEBCAM_STREAM_URL_SUCCESS",GET_SCREEN_STREAM_URL_REQUEST:"GET_SCREEN_STREAM_URL_REQUEST",GET_SCREEN_STREAM_URL_SUCCESS:"GET_SCREEN_STREAM_URL_SUCCESS",HIDE_COMMENT_PLACEHOLDER:"HIDE_COMMENT_PLACEHOLDER",INITIALIZE:"INITIALIZE",FINISH_COUNT_DOWN:"FINISH_COUNT_DOWN",START_BROADCAST_REQUEST:"START_BROADCAST_REQUEST",START_BROADCAST_SUCCESS:"START_BROADCAST_SUCCESS",START_LIVE_COUNTDOWN:"START_LIVE_COUNTDOWN",CANCEL_LIVE_COUNTDOWN:"CANCEL_LIVE_COUNTDOWN",UPDATE_CAMERA_STATE:"UPDATE_CAMERA_STATE",UPDATE_COUNTDOWN:"UPDATE_COUNTDOWN",SET_REPLAY_SHOULD_UPLOAD_HIGHER_QUALITY_VIDEO:"SET_REPLAY_SHOULD_UPLOAD_HIGHER_QUALITY_VIDEO",SHOW_REPLAY:"SHOW_REPLAY",ERROR_BROADCAST_COULD_NOT_START:"ERROR_BROADCAST_COULD_NOT_START",ERROR_BROADCAST_PUBLISH_FAIL:"ERROR_BROADCAST_PUBLISH_FAIL",ERROR_CONNECTION_BROKEN:"ERROR_CONNECTION_BROKEN",ERROR_CONNECTION_FAILED:"ERROR_CONNECTION_FAILED",ERROR_END_BROADCAST_MUTATION_FAIL:"ERROR_END_BROADCAST_MUTATION_FAIL",ERROR_MEDIA_VALIDATION:"ERROR_MEDIA_VALIDATION",ERROR_LOADING_BROADCAST_BODY:"ERROR_LOADING_BROADCAST_BODY",ATTEMPT_RECONNECTION:"ATTEMPT_RECONNECTION",WEBRTC_CONNECTION_ESTABLISHED:"WEBRTC_CONNECTION_ESTABLISHED",SET_INVITE_FRIENDS_QUERY:"SET_INVITE_FRIENDS_QUERY",SET_INVITE_FRIENDS_SHOWN:"SET_INVITE_FRIENDS_SHOWN",ICE_CONNECTION_STATE_CHANGED:"ICE_CONNECTION_STATE_CHANGED",DELETE_REPLAY_VIDEO:"DELETE_REPLAY_VIDEO",NETWORK_OFFLINE:"NETWORK_OFFLINE",NETWORK_ONLINE:"NETWORK_ONLINE",PREPARE_THUMBNAIL_URI:"PREPARE_THUMBNAIL_URI",SET_THUMBNAIL_URI:"SET_THUMBNAIL_URI",SET_COPYRIGHT_TRIGGERED:"SET_COPYRIGHT_TRIGGERED",SET_COPYRIGHTS_VIOLATION_DIALOG_STATE:"SET_COPYRIGHTS_VIOLATION_DIALOG_STATE",SET_BROADCAST_ENDED_WITH_COPYRIGHT_VIOLATION:"SET_BROADCAST_ENDED_WITH_COPYRIGHT_VIOLATION",SET_VOD_READY:"SET_VOD_READY",INVITE_FRIEND:"INVITE_FRIEND",SET_INVITE_FRIENDS_RESULTS:"SET_INVITE_FRIENDS_RESULTS",SET_INVITE_FRIENDS_SUGGESTIONS:"SET_INVITE_FRIENDS_SUGGESTIONS",HANDLE_COPYRIGHT_EVENT:"HANDLE_COPYRIGHT_EVENT",SET_SHOW_NUX:"SET_SHOW_NUX",REQUEST_UFI:"REQUEST_UFI",SET_DIALOG:"SET_DIALOG",SET_DIALOG_CONTAINER_ID:"SET_DIALOG_CONTAINER_ID",SET_COMPOSER_CONFIG:"SET_COMPOSER_CONFIG",SETUP_UFI:"SETUP_UFI",LOG_WEBRTC_STATS:"LOG_WEBRTC_STATS",SET_DESCRIPTION_EXPANDED:"SET_DESCRIPTION_EXPANDED",CLEANUP:"CLEANUP",SET_DESCRIPTION:"SET_DESCRIPTION",SET_TAG_LIST:"SET_TAG_LIST",SET_TARGET:"SET_TARGET",CLEAR_BROADCAST_ID:"CLEAR_BROADCAST_ID",CLEAR_API_BROADCAST_ID:"CLEAR_API_BROADCAST_ID",SET_ATTRIBUTION_TAGS:"SET_ATTRIBUTION_TAGS",SET_VIDEO_TITLE:"SET_VIDEO_TITLE",SET_CONTENT_TAGS:"SET_CONTENT_TAGS",SET_SELECTED_ATTRIBUTION_TAG:"SET_SELECTED_ATTRIBUTION_TAG",SET_BROADCAST_ID:"SET_BROADCAST_ID",SET_VIDEO_ID:"SET_VIDEO_ID",SET_PRIVACY_SELECTOR:"SET_PRIVACY_SELECTOR",ERROR_TIME_OUT_WAITING_FOR_PUBLISH:"ERROR_TIME_OUT_WAITING_FOR_PUBLISH",SET_PEOPLE_TAGGER_SOURCE:"SET_PEOPLE_TAGGER_SOURCE",UI_MOUNTED:"UI_MOUNTED",READY_STATE_ENDED:"READY_STATE_ENDED",ERROR_MWS_BAD_AUDIO_OR_VIDEO_DATA:"ERROR_MWS_BAD_AUDIO_OR_VIDEO_DATA",UPDATE_UI_CONFIG:"UPDATE_UI_CONFIG",ERROR_RTC_CLIENT_ERROR:"ERROR_RTC_CLIENT_ERROR",SET_INPUT_SOURCE:"SET_INPUT_SOURCE",ADD_INPUT_STREAM:"ADD_INPUT_STREAM",API_BROADCAST_CREATED:"API_BROADCAST_CREATED",API_BROADCAST_LIVE_PREVIEW_PLAYING:"API_BROADCAST_LIVE_PREVIEW_PLAYING",DELETE_API_REPLAY_VIDEO:"DELETE_API_REPLAY_VIDEO",API_BROADCAST_STOPPED:"API_BROADCAST_STOPPED",API_GO_LIVE_CLICKED:"API_GO_LIVE_CLICKED",SET_API_BROADCAST_PRIVACY_SELECTOR:"SET_API_BROADCAST_PRIVACY_SELECTOR",ERROR_TRACK_ENDED:"ERROR_TRACK_ENDED",ERROR_CREATING_BROADCAST:"ERROR_CREATING_BROADCAST",SET_IS_360_VIDEO:"SET_IS_360_VIDEO",SET_IS_360_AUDIO:"SET_IS_360_AUDIO",SET_IS_SINGLE_FISHEYE:"SET_IS_SINGLE_FISHEYE",SET_SINGLE_FISHEYE_FOV:"SET_SINGLE_FISHEYE_FOV",UPDATE_360_CONFIGURATION:"UPDATE_360_CONFIGURATION",SET_EMBEDDABLE:"SET_EMBEDDABLE",SET_SHOULD_EXPIRE_AFTER_GO_LIVE:"SET_SHOULD_EXPIRE_AFTER_GO_LIVE",SET_SHOULD_SHOW_GRAPHIC_CONTENT_WARNING:"SET_SHOULD_SHOW_GRAPHIC_CONTENT_WARNING",SET_SHOW_EVENT_LOG_DIALOG:"SET_SHOW_EVENT_LOG_DIALOG",SET_CONTINUOUS:"SET_CONTINUOUS",SET_COPYRIGHTED:"SET_COPYRIGHTED",SET_COPYRIGHT_MONITORING_TYPE:"SET_COPYRIGHT_MONITORING_TYPE",SET_COPYRIGHT_CONTENT_CATEGORY:"SET_COPYRIGHT_CONTENT_CATEGORY",SET_COPYRIGHT_OWNERSHIP_COUNTRIES:"SET_COPYRIGHT_OWNERSHIP_COUNTRIES",SET_COPYRIGHT_RULE_ID:"SET_COPYRIGHT_RULE_ID",UPDATE_COPYRIGHT_WHITELISTED_FB_USERS:"UPDATE_COPYRIGHT_WHITELISTED_FB_USERS",UPDATE_COPYRIGHT_WHITELISTED_IG_USERNAMES:"UPDATE_COPYRIGHT_WHITELISTED_IG_USERNAMES",SCHEDULED_LIVE_SUCCESS:"SCHEDULED_LIVE_SUCCESS",SCHEDULED_LIVE_REQUEST:"SCHEDULED_LIVE_REQUEST",SCHEDULED_LIVE_FAIL:"SCHEDULED_LIVE_FAIL",PREPARE_BROADCAST_FOR_SCHEDULED_LIVE:"PREPARE_BROADCAST_FOR_SCHEDULED_LIVE",SET_DIALOG_LOADING:"SET_DIALOG_LOADING",SET_EPISODE_DATA:"SET_EPISODE_DATA",SET_HIDE_INPUT_TOGGLE:"SET_HIDE_INPUT_TOGGLE",BROADCAST_ERROR_RECEIVED:"BROADCAST_ERROR_RECEIVED",ERROR_STARTING_API_BROADCAST:"ERROR_STARTING_API_BROADCAST",ERROR_FETCHING_BROADCAST_INPUT_STREAM:"ERROR_FETCHING_BROADCAST_INPUT_STREAM",ERROR_FETCHING_BROADCAST_PREVIEW_INPUT_STREAM:"ERROR_FETCHING_BROADCAST_PREVIEW_INPUT_STREAM",ERROR_FETCHING_STREAM_HEALTH:"ERROR_FETCHING_STREAM_HEALTH",SET_BROADCAST_STATE:"SET_BROADCAST_STATE",SET_START_TIME:"SET_START_TIME",SET_GAME:"SET_GAME",SET_GROUPS:"SET_GROUPS",SET_VIDEO_TJ_APP:"SET_VIDEO_TJ_APP",SET_SHOULD_CROSSPOST_TO_PAGE:"SET_SHOULD_CROSSPOST_TO_PAGE",TOGGLE_CROSSPOST_TO_SHOW_PARENT_PAGE:"TOGGLE_CROSSPOST_TO_SHOW_PARENT_PAGE",SET_SHOULD_CROSSPOST_TO_ALL_PAGES:"SET_SHOULD_CROSSPOST_TO_ALL_PAGES",RESORT_CROSSPOST_CONFIGS:"RESORT_CROSSPOST_CONFIGS",SET_UPDATE_REQUEST_PENDING:"SET_UPDATE_REQUEST_PENDING",SET_LIVE_COVER_VIDEO_ENABLED:"SET_LIVE_COVER_VIDEO_ENABLED",SET_SELECTED_ENCODER_NAME:"SET_SELECTED_ENCODER_NAME",SET_SELECTED_ENCODER_TYPE:"SET_SELECTED_ENCODER_TYPE",SET_SELECTED_RHC_TAB:"SET_SELECTED_RHC_TAB",SET_SCHEDULED_LIVE_DATA:"SET_SCHEDULED_LIVE_DATA",SET_REWIND_ENABLED:"SET_REWIND_ENABLED",SET_CONTENT_PROTECTION_ENABLED:"SET_CONTENT_PROTECTION_ENABLED",UPDATE_METADATA_CONFIG:"UPDATE_METADATA_CONFIG",SERVER_ERROR:"SERVER_ERROR",SET_SHOW_SAVE_CHANGES_DIALOG:"SET_SHOW_SAVE_CHANGES_DIALOG",SET_COMMENT_MODES:"SET_COMMENT_MODES",SET_ATTACHED_TRIVIA_GAME:"SET_ATTACHED_TRIVIA_GAME",CLICK_FINISH_BUTTON:"CLICK_FINISH_BUTTON",UPDATE_BACKUP_INPUT_STREAM:"UPDATE_BACKUP_INPUT_STREAM",PREVIEW_PLAYER_CRASH:"PREVIEW_PLAYER_CRASH",SET_IS_FUNDRAISER_SELECTED:"SET_IS_FUNDRAISER_SELECTED",SET_FUNDRAISER_GOAL:"SET_FUNDRAISER_GOAL",SET_IS_REHEARSAL:"SET_IS_REHEARSAL",ENABLE_WAS_LIVE_POLL_VOTING:"ENABLE_WAS_LIVE_POLL_VOTING",SET_SHOW_WAS_LIVE_VOTING_TOGGLE:"SET_SHOW_WAS_LIVE_VOTING_TOGGLE"}};e.exports=a}),null);
__d("VideoWithTahoeExitAutoplay",["VideoPlayerReason"],(function(a,b,c,d,e,f){"use strict";function a(a){this.$3=function(){this.$1.play(b("VideoPlayerReason").AUTOPLAY),this.$2||this.$1.unmute()}.bind(this),this.$1=a,a.addListener("TahoeController/exitTahoe",this.$3),a.addListener("unmuteVideo",function(){this.$2=!1}.bind(this)),a.addListener("muteVideo",function(){this.$2=!0}.bind(this)),this.$2=a.isMuted()||a.getVolume()===0}e.exports=a}),null);
__d("Video.react",["React","ReactDOM"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.componentDidMount=function(){"use strict";var a=b("ReactDOM").findDOMNode(this.refs.video);this.props.paused&&a&&a.pause&&a.pause()};a.prototype.UNSAFE_componentWillUpdate=function(a,c){"use strict";c=b("ReactDOM").findDOMNode(this.refs.video);a.playbackRate&&(c.playbackRate=a.playbackRate);a.paused!=this.props.paused&&c&&(a.paused&&c.pause?c.pause():c.play&&c.play())};a.prototype.render=function(){"use strict";return b("React").createElement("video",babelHelpers["extends"]({},this.props,{ref:"video"}))};function a(){"use strict";g.apply(this,arguments)}a.propTypes={autoPlay:c.bool,paused:c.bool,controls:c.bool,height:c.oneOfType([c.string,c.number]),loop:c.bool,muted:c.bool,onAbort:c.func,onCanPlay:c.func,onCanPlayThrough:c.func,onDurationChange:c.func,onEmptied:c.func,onEncrypted:c.func,onEnded:c.func,onError:c.func,onLoadedData:c.func,onLoadedMetadata:c.func,onLoadStart:c.func,onPause:c.func,onPlay:c.func,onPlaying:c.func,onProgress:c.func,onRateChange:c.func,onSeeked:c.func,onSeeking:c.func,onStalled:c.func,onSuspend:c.func,onTimeUpdate:c.func,onVolumeChange:c.func,onWaiting:c.func,playbackRate:c.number,poster:c.string,src:c.string.isRequired,width:c.oneOfType([c.string,c.number])};e.exports=a}),null);
__d("XLiveVideoBroadcastLaunchComposerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live_map/composer_config/",{default_input_source:{type:"String"},composer_entry_point:{type:"String",required:!0},page_id:{type:"FBID"},game_id:{type:"FBID"},hide_input_toggle:{type:"Bool",defaultValue:!1},default_message:{type:"String"}})}),null);