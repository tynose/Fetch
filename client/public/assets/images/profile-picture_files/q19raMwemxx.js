if (self.CavalryLogger) { CavalryLogger.start_js(["\/ThC5"]); }

__d("AYMTClientSideChannelNames",[],(function(a,b,c,d,e,f){e.exports={AYMT_ADS_CAMPAIGN_EDIT_FLOW_MEGAPHONE_CHANNEL:"AYMTAdsCampaignEditFlowMegaphoneChannel",AYMT_BOOSTED_COMPONENT_PROMOTIONS_CHANNEL:"AYMTBoostedComponentPromotionsChannel",AYMT_FLASH_INSIGHTS_CHANNEL:"AYMTFlashInsightsChannel",AYMT_ADS_INSIGHTS_EXPORT_CHANNEL:"AYMTAdsInsightsExportChannel",AYMT_CAMPAIGN_MANAGER_HOME_CHANNEL:"AYMTCampaignManagerHomeChannel",AYMT_CAMPAIGN_MANAGER_MEGAPHONE_CHANNEL:"AYMTCampaignManagerMegaphoneChannel",AYMT_POWER_EDITOR_CREATION_MEGAPHONE_CHANNEL:"AYMTPowerEditorCreationMegaphoneChannel",AYMT_PROMOTIONS_HUB_NEEDS_ATTENTION_CHANNEL:"AYMTPromotionsHubNeedsAttentionChannel",AYMT_WWW_ADS_DELIVERY_CHANNEL:"AYMTWWWAdsDeliveryChannel",AYMT_WWW_GROUPS_INSIGHTS_CHANNEL:"AYMTWWWGroupsInsightsChannel",AYMT_WWW_GROUPS_MALL_CARD_CHANNEL:"AYMTWWWGroupsMallCardChannel",AYMT_WWW_GROUPS_MALL_MODAL_CHANNEL:"AYMTWWWGroupsMallModalChannel",AYMT_WWW_GROUPS_MALL_RHC_CHANNEL:"AYMTWWWGroupsRHCChannel",AYMT_WWW_GROUPS_MALL_PEEKBAR_CHANNEL:"AYMTWWWGroupsMallPeekBarChannel",AYMT_WWW_PAGE_GROUPS_TAB_CHANNEL:"AYMTPageGroupsTabWWWChannel",AYMT_PIXEL_MEGAPHONE_CHANNEL:"AYMTEventsManagerPixelPageMegaphoneChannel",AYMT_CREATOR_STUDIO_TOP_PRIORITY_CHANNEL:"AYMTCreatorStudioTopPriorityChannel",AYMT_CREATOR_STUDIO_FUNSIGHTS_CHANNEL:"AYMTCreatorStudioInsightsChannel",AYMT_EVENTS_MANAGER_PIXEL_CHANNEL:"AYMTEventsManagerPixelChannel",AYMT_EVENTS_MANAGER_APP_CHANNEL:"AYMTEventsManagerAppChannel",AYMT_EVENTS_MANAGER_OFFLINE_DS_CHANNEL:"AYMTEventsManagerOfflineDSChannel",AYMT_EVENTS_MANAGER_DS_LISTING_SCREEN_CHANNEL:"AYMTEventsManagerDSListingScreenChannel",AYMT_CREATOR_STUDIO_ANNOUNCEMENT_CARD_CHANNEL:"AYMTCreatorStudioAnnouncementCardChannel",AYMT_ADS_LWI_PROMOTION_ROW_CHANNEL:"AYMTAdsLWIPromotionRowChannel"}}),null);
__d("AYMTClientSideParam",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACTOR_ID:"actor_id",AD_ACCOUNT_ID:"ad_account_id",ADGROUP_ID:"adgroup_id",APP_ID:"app_id",ADS_PIXEL_ID:"ads_pixel_id",BUSINESS_ID:"business_id",CACHE:"cache",CAMPAIGN_GROUP_ID:"campaign_group_id",CAMPAIGN_ID:"campaign_id",CAMPAIGN_IDS:"campaign_ids",CHANNEL:"channel",ESTIMATED_AUDIENCE_SIZE:"estimated_audience_size",GROUP_ID:"group_id",INJECT_TIP:"inject_tip",INSIGHTS_METRIC:"insights_metric",INSTAGRAM_MEDIA_FBID_V2:"instagram_media_fbid_v2",INSTAGRAM_USER_FBID_V2:"instagram_user_fbid_v2",INSTAGRAM_USER_ID:"instagram_user_id",INVALIDATE:"invalidate",PAGE_ID:"page_id",PAGE_IDS:"page_ids",POST_ID:"post_id",TARGETING_GENDER:"targeting_gender",TIP:"tip",USER_ID:"user_id",VALIDATE:"validate",TIME_RANGE:"time_range"})}),null);
__d("XAYMTClientSideTipsAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/growth/aymt/load_client_side_tips/",{cache:{type:"Int"},channel:{type:"String"},channel_name:{type:"String",required:!0},invalidate:{type:"Int"},params:{type:"StringToStringMap"},previous_params:{type:"StringToStringMap"},previous_tips_aymt_data:{type:"StringVector"},request_id:{type:"String",required:!0},tip:{type:"String"},validate:{type:"Int"},enable_for_test_users:{type:"Bool",defaultValue:!1}})}),null);
__d("AYMTTipsLoader",["invariant","Promise","AsyncRequest","AYMTClientSideChannelNames","AYMTClientSideParam","AYMTTipActions","AYMTTipSettings","XAYMTClientSideTipsAsyncController","ex","mergeDeepInto"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("AYMTClientSideChannelNames").AYMT_ADS_LWI_PROMOTION_ROW_CHANNEL;function a(){this.$1={},this.$2={},this.$3={},this.$4={},this.$5={},this.$6={}}a.prototype.$7=function(a,c){__p&&__p();return new(b("Promise"))(function(d,e){__p&&__p();var f=new Date();f="id_"+Math.random()+"_"+f.getTime();this.$2[f]={resolve:d};this.$3[c]=f;this.$1[c+f]=f;this.$4[c]=a;d=b("XAYMTClientSideTipsAsyncController").getURIBuilder().setString("channel_name",c).setString("request_id",f).setStringVector("previous_tips_aymt_data",this.$6[c]).setStringToStringMap("params",a).setStringToStringMap("previous_params",this.$5[c]);f=a[b("AYMTClientSideParam").CHANNEL];this.$2[c]||f&&f!==c||d.setString("channel",f).setInt("cache",a[b("AYMTClientSideParam").CACHE]).setInt("validate",a[b("AYMTClientSideParam").VALIDATE]).setString("tip",a[b("AYMTClientSideParam").TIP]).setInt("invalidate",a[b("AYMTClientSideParam").INVALIDATE]);new(b("AsyncRequest"))().setURI(d.getURI()).setErrorHandler(function(a){e(a.errorDescription)}).setAllowCrossPageTransition(!0).send()}.bind(this))};a.prototype.loadTips=function(a,c,d){this.$7(a,c).done(function(e){e&&e.tips&&Array.isArray(e.tips)&&(b("AYMTTipActions").dispatchTips(e.tips,c,d,this.$4[c]),this.$5[c]={},b("mergeDeepInto")(this.$5[c],a),this.$6[c]=e.tips.map(function(a){return JSON.stringify(a[b("AYMTTipSettings").AYMT_DATA])}))}.bind(this),function(a){a=new Error(b("ex")("Tip loading request failed for %s channel %s",c,a.__html));b("AYMTTipActions").dispatchTipsLoadingError(a,c,d,this.$4[c])}.bind(this))};a.prototype.setTips=function(a,b,c){a&&a.tips||g(0,1761,b),this.$2[c]&&this.$2[c].resolve||g(0,1762,b),b===h?this.$1[b+c]!==c?this.$2[c].resolve(null):this.$2[c].resolve(a):this.$3[b]!==c?this.$2[c].resolve(null):this.$2[c].resolve(a),delete this.$2[c]};c=new a();e.exports=c}),null);
__d("AYMTTipActionTypes",["keyMirrorRecursive"],(function(a,b,c,d,e,f){"use strict";a="AYMT";c={TIPS_REQUESTED:"",TIPS_LOADED:"",TIPS_LOADED_ERROR:"",TIPS_DISMISSED:""};d=b("keyMirrorRecursive")(c,a);e.exports=d}),null);
__d("AYMTTipActions",["AdsLWILoadPromotionRowTipsAction","AYMTClientSideChannelNames","AYMTTipActionTypes","MediaManagerActionTypes","SignalsHomeAYMTTipsLoadedAction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MediaManagerActionTypes").MediaManagerInternalActionTypes;a={dispatchTips:function(a,c,d,e){__p&&__p();switch(c){case b("AYMTClientSideChannelNames").AYMT_BOOSTED_COMPONENT_TARGETING_CHANNEL:case b("AYMTClientSideChannelNames").AYMT_BOOSTED_COMPONENT_BUDGET_AND_DURATION_CHANNEL:case b("AYMTClientSideChannelNames").AYMT_BOOSTED_COMPONENT_PAYMENTS_SECTION_CHANNEL:case b("AYMTClientSideChannelNames").AYMT_PROMOTIONS_HUB_NEEDS_ATTENTION_CHANNEL:d.handleUpdateFromServerResponse({data:{channelName:c,tips:a},actionType:b("AYMTTipActionTypes").TIPS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_FLASH_INSIGHTS_CHANNEL:case b("AYMTClientSideChannelNames").AYMT_BOOSTED_COMPONENT_PROMOTIONS_CHANNEL:d.dispatch({data:{channelName:c,tips:a,params:e},type:b("AYMTTipActionTypes").TIPS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_ADS_LWI_PROMOTION_ROW_CHANNEL:b("AdsLWILoadPromotionRowTipsAction").dispatch({data:{tips:a}},{line:"51",module:"AYMTTipActions.js"});break;case b("AYMTClientSideChannelNames").AYMT_ADS_INSIGHTS_NAM_PERFORMANCE_CHANNEL:case b("AYMTClientSideChannelNames").AYMT_POWER_EDITOR_CREATION_MEGAPHONE_CHANNEL:d.dispatch({data:{channelName:c,tips:a,params:e},action:{actionType:b("AYMTTipActionTypes").TIPS_LOADED,data:{channelName:c,tips:a,params:e,type:b("AYMTTipActionTypes").TIPS_LOADED},type:b("AYMTTipActionTypes").TIPS_LOADED}});break;case b("AYMTClientSideChannelNames").AYMT_CAMPAIGN_MANAGER_HOME_CHANNEL:d.handleUpdateFromServerResponse({data:{channelName:c,tips:a},type:b("AYMTTipActionTypes").TIPS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_CAMPAIGN_MANAGER_MEGAPHONE_CHANNEL:d.handleUpdateFromServerResponse({data:{channelName:c,tips:a},type:b("AYMTTipActionTypes").TIPS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_WWW_ADS_DELIVERY_CHANNEL:d.handleUpdateFromServerResponse({data:{channelName:c,tips:a},type:b("AYMTTipActionTypes").TIPS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_INSIGHTS_CHANNEL:case b("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_CARD_CHANNEL:case b("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_MODAL_CHANNEL:case b("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_PEEKBAR_CHANNEL:d.handleUpdateFromServerResponse({data:{channelName:c,tips:a},type:b("AYMTTipActionTypes").TIPS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_RHC_CHANNEL:d.handleUpdateFromServerResponse({data:{channelName:c,tips:a},type:b("AYMTTipActionTypes").TIPS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_WWW_PAGE_GROUPS_TAB_CHANNEL:d.handleUpdateFromServerResponse({data:{channelName:c,tips:a},type:b("AYMTTipActionTypes").TIPS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_PIXEL_MEGAPHONE_CHANNEL:d.handleUpdateFromServerResponse({data:{channelName:c,tips:a},type:b("AYMTTipActionTypes").TIPS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_CREATOR_STUDIO_TOP_PRIORITY_CHANNEL:d.dispatch({channelName:c,tips:a,type:g.TOP_PRIORITY_CARDS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_CREATOR_STUDIO_FUNSIGHTS_CHANNEL:d.dispatch({channelName:c,tips:a,type:g.SET_FUNSIGHTS_DATA,params:e});break;case b("AYMTClientSideChannelNames").AYMT_CREATOR_STUDIO_ANNOUNCEMENT_CARD_CHANNEL:d.dispatch({channelName:c,tips:a,type:g.ANNOUNCEMENT_CARDS_LOADED});break;case b("AYMTClientSideChannelNames").AYMT_EVENTS_MANAGER_PIXEL_CHANNEL:b("SignalsHomeAYMTTipsLoadedAction").dispatch({channelName:c,tips:a},{line:"142",module:"AYMTTipActions.js"});break;default:throw new Error("Unregistered %s channel for AYMTTipActions.dispatchTips",c)}},dispatchTipsLoadingError:function(a,c,d,e){switch(c){case b("AYMTClientSideChannelNames").AYMT_CREATOR_STUDIO_TOP_PRIORITY_CHANNEL:d.dispatch({channelName:c,error:a,type:g.TOP_PRIORITY_CARDS_LOAD_ERROR});break;case b("AYMTClientSideChannelNames").AYMT_CREATOR_STUDIO_FUNSIGHTS_CHANNEL:d.dispatch({channelName:c,error:a,type:g.SET_FUNSIGHTS_ERROR,params:e});break;default:d.handleUpdateFromServerResponse({data:{channelName:c,error:a},actionType:b("AYMTTipActionTypes").TIPS_LOADED_ERROR})}},dismissTips:function(a,c,d){switch(a){case b("AYMTClientSideChannelNames").AYMT_POWER_EDITOR_CREATION_MEGAPHONE_CHANNEL:c.handleUpdateFromServerResponse({channelName:a,type:b("AYMTTipActionTypes").TIPS_DISMISSED});break;case b("AYMTClientSideChannelNames").AYMT_WWW_ADS_DELIVERY_CHANNEL:c.handleUpdateFromServerResponse({data:{channelName:a,tipData:d},type:b("AYMTTipActionTypes").TIPS_DISMISSED});break}}};e.exports=a}),null);
__d("AdsLWIFetchPromotionRowTipsAction",["Laminar","AdsLWIFetchPromotionRowTipsReducerPlugin","AdsLWIPromotionRowAYMTTipProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("AdsLWIFetchPromotionRowTipsReducerPlugin"),b("AdsLWIPromotionRowAYMTTipProvider"),{})]},function(){return[]},"AdsLWIFetchPromotionRowTipsActionPlugin");e.exports=a}),null);
__d("AYMTClientCreativeSpecField",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({RENDERING_CLASS:"client_side_rendering_class",RENDERING_PARAMS:"client_side_rendering_params",TIP_CLASS:"tip_class",ADS_DELIVERY_TIP_PARAMS:"ads_delivery_tip_params",REACT_PROPS:"client_side_react_props"})}),null);
__d("AYMTClientSideRenderingParam",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TIP_ACTION_LABEL:"tip_action_label",TIP_ASSET_TYPE:"tip_asset_type",TIP_BODY:"tip_body",TIP_COLLAPSE_TITLE:"tip_collapse_title",TIP_COLLAPSE_BODY:"tip_collapse_body",TIP_HAS_ASYNC_ACTION_LINK:"tip_is_async",TIP_IMAGE:"tip_image",TIP_IMAGE_URI:"tip_image_uri",TIP_JS_ACTION:"tip_js_action",TIP_JS_PARAMS:"tip_js_params",TIP_LEARN_MORE_CMS_ID:"tip_learn_more_cms_id",TIP_LINK:"tip_link",TIP_MESSAGE_SEVERITY:"tip_message_severity",TIP_NATIVE_ACTION_NAME:"tip_native_action_name",TIP_TITLE:"tip_title",TIP_SURVEY_ID:"tip_survey_id",TIP_SURVEY_DESC:"tip_survey_desc",TIP_SURVEY_LABEL:"tip_survey_label",CLIENT_SIDE_RENDERING_SPEC:"client_side_rendering_spec",CMS_TIP:"cms-tip"})}),null);
__d("AdsLWIPromotionRowTip",["immutable"],(function(a,b,c,d,e,f){"use strict";var g;c=b("immutable").Record({body:void 0,buttonAction:void 0,buttonText:void 0,channelID:void 0,tipID:void 0,title:void 0});g=babelHelpers.inherits(a,c);g&&g.prototype;function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("AdsLWILoadPromotionRowTipsReducerPlugin",["AdsLWIPromotionRowTip","AYMTClientCreativeSpecField","AYMTClientSideRenderingParam","AYMTTipSettings","FBLogger","LoadObject","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={reduce:function(a,c){__p&&__p();c=c.data.tips;if(c.length>0){c=c[0];var d=c[b("AYMTClientSideRenderingParam").CLIENT_SIDE_RENDERING_SPEC],e=d[b("AYMTClientCreativeSpecField").RENDERING_PARAMS];d=d[b("AYMTClientCreativeSpecField").REACT_PROPS];d=d.campaign_group_id;try{c=new(b("AdsLWIPromotionRowTip"))({body:e[b("AYMTClientSideRenderingParam").TIP_BODY],buttonAction:e.actions.primary.tip_link,buttonText:e.actions.primary.tip_action_label,channelID:b("nullthrows")(c[b("AYMTTipSettings").AYMT_DATA][b("AYMTTipSettings").CHANNEL_ID]),tipID:b("nullthrows")(c[b("AYMTTipSettings").AYMT_DATA][b("AYMTTipSettings").TIP_ID]),title:e[b("AYMTClientSideRenderingParam").TIP_TITLE]});return a.set(d,b("LoadObject").withValue(c).done())}catch(c){b("FBLogger")("boosted_component").catching(c.toError()).mustfix("Promotion tip does not have tipID or channelID");return a}}return a}};e.exports=a}),null);
__d("AdsLWILoadPromotionRowTipsAction",["Laminar","AdsLWILoadPromotionRowTipsReducerPlugin","AdsLWIPromotionRowAYMTTipProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("AdsLWILoadPromotionRowTipsReducerPlugin"),b("AdsLWIPromotionRowAYMTTipProvider"),{})]},function(){return[]},"AdsLWILoadPromotionRowTipsActionPlugin");e.exports=a}),null);
__d("AdsLWIPromotionRowAYMTTipProvider",["AdsLWIPromotionRowAYMTTipProviderPlugin","Laminar"],(function(a,b,c,d,e,f){"use strict";e.exports=b("Laminar").__createProvider(b("AdsLWIPromotionRowAYMTTipProviderPlugin"),"AdsLWIPromotionRowAYMTTipProviderPlugin")}),null);
__d("SignalsHomeAYMTProviderPlugin",["immutable"],(function(a,b,c,d,e,f){"use strict";b("immutable").List;a=b("immutable").Map;c={initialState:a()};e.exports=c}),null);
__d("SignalsHomeAYMTProvider",["Laminar","SignalsHomeAYMTProviderPlugin"],(function(a,b,c,d,e,f){"use strict";e.exports=b("Laminar").__createProvider(b("SignalsHomeAYMTProviderPlugin"),"SignalsHomeAYMTProviderPlugin")}),null);
__d("SignalsHomeAYMTTipsLoadedAction",["Laminar","SignalsHomeAYMTReducerPlugins","SignalsHomeAYMTProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("SignalsHomeAYMTReducerPlugins").onTipsLoaded,b("SignalsHomeAYMTProvider"),{})]},function(){return[]},"SignalsHomeAYMTTipsLoadedActionPlugin");e.exports=a}),null);
__d("AdsLWIPromotionRowAYMTTipProviderPlugin",["AdsLWIFetchPromotionRowTipsAction","LoadObjectMap"],(function(a,b,c,d,e,f){"use strict";a={initialState:function(a){return b("LoadObjectMap").create(function(a){b("AdsLWIFetchPromotionRowTipsAction").dispatch({campaignGroupIDs:a},{line:"23",module:"AdsLWIPromotionRowAYMTTipProviderPlugin.js"})})}};e.exports=a}),null);
__d("AdsLWIFetchPromotionRowTipsReducerPlugin",["AdsDataAtom","AYMTClientSideChannelNames","AYMTClientSideParam","AYMTTipsLoader"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AYMTClientSideChannelNames").AYMT_ADS_LWI_PROMOTION_ROW_CHANNEL;a={reduce:function(a,c){__p&&__p();c=c.campaignGroupIDs;var d=a;c.forEach(function(a){var c=d.get(a);if(c.isLoading())return;var e={};e[b("AYMTClientSideParam").CAMPAIGN_GROUP_ID]=a;b("AYMTTipsLoader").loadTips(e,g,b("AdsDataAtom"));d=d.set(a,c.loading())});return d}};e.exports=a}),null);
__d("EventsManagerAYMTEventSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({APP:"app",DATA_SET:"dataset",PIXEL:"pixel"})}),null);
__d("SignalsHomeAYMTUtils",["AYMTClientSideParam","EventsManagerAYMTEventSource"],(function(a,b,c,d,e,f){"use strict";function a(a){var c={},d=a.adAccountID,e=a.businessID,f=a.dataSourceID;a=a.dataSourceType;d!=null&&(c[b("AYMTClientSideParam").AD_ACCOUNT_ID]=d);e!=null&&(c[b("AYMTClientSideParam").BUSINESS_ID]=e);f!=null&&a===b("EventsManagerAYMTEventSource").PIXEL&&(c[b("AYMTClientSideParam").ADS_PIXEL_ID]=f);return c}e.exports={makeParams:a}}),null);
__d("SignalsHomeAYMTReducerPlugins",["AdsDataAtom","AYMTTipsLoader","SignalsHomeAYMTUtils","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("SignalsHomeAYMTUtils").makeParams,h=b("immutable").List;a={reduce:function(a,c){b("AYMTTipsLoader").loadTips(g(c),c.channelName,b("AdsDataAtom"));return a.set(c.channelName,h())}};c={reduce:function(a,b){var c=b.channelName;b=b.tips;return!a.has(c)?a:a.set(c,h(b.map(function(a){return{name:typeof a.name==="string"?a.name:"",renderingSpec:a.client_side_rendering_spec!=null&&typeof a.client_side_rendering_spec==="object"?a.client_side_rendering_spec:{},aymtData:a.aymt_data}})))}};e.exports={onTipsRequested:a,onTipsLoaded:c}}),null);
__d("ReactComposerLivingRoomSproutInitializer",["ExtensibleSproutsItemType","LivingRoomComposerActions","LivingRoomComposerDispatcher","LivingRoomComposerLogger","LivingRoomComposerStore","LivingRoomConfigType","LivingRoomExperiments","LivingRoomLoggerAction","LivingRoomTypeValues","ReactComposerAttachmentActions","ReactComposerAttachmentType","ReactComposerFocusActions","ReactComposerStore","guid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("LivingRoomTypeValues").AddVideoTabValue;a={initializeUnselectedSprout:function(a,c,d,e,f,h){__p&&__p();b("LivingRoomComposerDispatcher").explicitlyRegisterStores([b("LivingRoomComposerStore")]);var i=b("guid")(),j=null,k=b("ExtensibleSproutsItemType").LIVING_ROOM;e===b("LivingRoomConfigType").GROUP?(j=c,b("LivingRoomComposerActions").setGroupID(j),b("LivingRoomComposerActions").setIsGameGroup(f)):e===b("LivingRoomConfigType").PAGE&&(k=b("ExtensibleSproutsItemType").LIVING_ROOM_PAGE,b("ReactComposerFocusActions").notifyFocusAcquired(a),b("LivingRoomComposerActions").setPageID(c),h.includes(b("LivingRoomExperiments").AVD_DEFAULT_PAGE_TAB)&&b("LivingRoomComposerActions").setAddVideoDialogTab(g.PAGE));b("LivingRoomComposerActions").setProfileID(c);b("LivingRoomComposerActions").setSessionID(i);b("LivingRoomComposerActions").setComposerID(a);b("LivingRoomComposerActions").resetSession();b("LivingRoomComposerLogger").init(i,e,c,j,d);b("LivingRoomComposerLogger").get().setLivingRoomAction(b("LivingRoomLoggerAction").CLICK_SPROUT).log();b("ReactComposerAttachmentActions").selectAttachment(a,b("ReactComposerAttachmentType").LIVING_ROOM,!0,k,b("ReactComposerStore").getSproutSurface(a))}};e.exports=a}),null);
__d("ReactComposerPageLivingRoomSproutNux.react",["fbt","PageNuxFrameworkActions","PageNuxIDEnum","PageNuxSurfaceEnum","PagesNuxDispatcher","PagesNuxFrameworkHelper","React","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={shown:!1},this.$1=function(){this.setState({shown:!1}),b("PagesNuxDispatcher").dispatch({type:b("PageNuxFrameworkActions").XOUT,config:{surface:b("PageNuxSurfaceEnum").PAGE_COMPOSER,nuxID:b("PageNuxIDEnum").WWW_LIVING_ROOM_COMPOSER_SPROUT}})}.bind(this),c}a.prototype.componentDidMount=function(){b("PagesNuxFrameworkHelper").registerNux(b("PageNuxIDEnum").WWW_LIVING_ROOM_COMPOSER_SPROUT,b("PageNuxSurfaceEnum").PAGE_COMPOSER,function(){return this.setState({shown:!0})}.bind(this)),b("PagesNuxFrameworkHelper").showNuxAferComponentLoading(b("PageNuxSurfaceEnum").PAGE_COMPOSER)};a.prototype.render=function(){return!this.props.contextRef||!this.props.contextRef()?null:b("React").createElement(b("XUIAmbientNUX.react"),{contextRef:this.props.contextRef,shown:this.state.shown,onCloseButtonClick:this.$1},g._("New! Bring your audience together around your videos"))};e.exports=a}),null);
__d("ReactComposerLivingRoomSproutContainer.react",["ComposerTestID","ExtensibleSproutsItemType","FluxContainer","LivingRoomConfigType","React","ReactComposerAttachmentActions","ReactComposerAttachmentStore","ReactComposerAttachmentType","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerLivingRoomSproutInitializer","ReactComposerPageLivingRoomSproutNux.react","ReactComposerSproutItem.react","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerStore","ReactComposerTaggerType","ShimButton.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=b("React").createRef(),this.state={isDisabled:!1,isSelected:!1},this.$2=function(a){!this.state.isSelected?b("ReactComposerLivingRoomSproutInitializer").initializeUnselectedSprout(this.context.composerID,this.context.targetID,this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").LIVING_ROOM].creationSource,this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").LIVING_ROOM].configType,this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").LIVING_ROOM].isGameGroup,this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").LIVING_ROOM].experiments):b("ReactComposerAttachmentActions").selectAttachment(this.context.composerID,b("ReactComposerAttachmentType").STATUS,!0)}.bind(this),c}a.getStores=function(){return[b("ReactComposerAttachmentStore"),b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=b("ReactComposerAttachmentStore").getSelectedAttachmentID(d.composerID);c=a===b("ReactComposerAttachmentType").LIVING_ROOM;a=b("ReactComposerTaggerStore").isDisabled(d.composerID,b("ReactComposerTaggerType").LIVING_ROOM);return{isDisabled:a,isSelected:c}};a.prototype.render=function(){if(this.state.isDisabled)return b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig});var a=this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").LIVING_ROOM].configType;return b("React").createElement(b("ShimButton.react"),{onClick:this.$2,tabIndex:-1,"data-testid":b("ComposerTestID").LIVING_ROOM_SPROUT},b("React").createElement(b("ReactComposerSproutItem.react"),{ref:this.$1,uiConfig:this.props.uiConfig,highlighted:this.state.isSelected}),a===b("LivingRoomConfigType").PAGE?b("React").createElement(b("ReactComposerPageLivingRoomSproutNux.react"),{contextRef:function(){return this.$1.current}.bind(this)}):null)};a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").LIVING_ROOM]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);