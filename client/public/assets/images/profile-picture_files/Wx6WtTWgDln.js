if (self.CavalryLogger) { CavalryLogger.start_js(["vgpZB"]); }

__d("GamingDestinationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GamingDestinationLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAttachedStoryAttachmentType=function(a){this.$1.attached_story_attachment_type=a;return this};a.prototype.setAttachedStoryType=function(a){this.$1.attached_story_type=a;return this};a.prototype.setBadgeCount=function(a){this.$1.badge_count=a;return this};a.prototype.setClientUserID=function(a){this.$1.client_userid=a;return this};a.prototype.setClienttime=function(a){this.$1.clienttime=a;return this};a.prototype.setContentCount=function(a){this.$1.content_count=a;return this};a.prototype.setDeviceid=function(a){this.$1.deviceid=a;return this};a.prototype.setEncodedSectionID=function(a){this.$1.encoded_section_id=a;return this};a.prototype.setEntAttachmentType=function(a){this.$1.ent_attachment_type=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setException=function(a){this.$1.exception=a;return this};a.prototype.setExternalEntrypoint=function(a){this.$1.external_entrypoint=a;return this};a.prototype.setFeedUnitType=function(a){this.$1.feed_unit_type=a;return this};a.prototype.setGameID=function(a){this.$1.game_id=a;return this};a.prototype.setGroupID=function(a){this.$1.group_id=a;return this};a.prototype.setHasGamesApp=function(a){this.$1.has_games_app=a;return this};a.prototype.setHasGamesTab=function(a){this.$1.has_games_tab=a;return this};a.prototype.setIgAppID=function(a){this.$1.ig_app_id=a;return this};a.prototype.setIndex=function(a){this.$1.index=a;return this};a.prototype.setIsAsyncJob=function(a){this.$1.is_async_job=a;return this};a.prototype.setLoadTimeMs=function(a){this.$1.load_time_ms=a;return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setNavPillID=function(a){this.$1.nav_pill_id=a;return this};a.prototype.setNotifID=function(a){this.$1.notif_id=a;return this};a.prototype.setNotifType=function(a){this.$1.notif_type=a;return this};a.prototype.setNtSection=function(a){this.$1.nt_section=a;return this};a.prototype.setObjectID=function(a){this.$1.object_id=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setPageIndex=function(a){this.$1.page_index=a;return this};a.prototype.setPreviousSurface=function(a){this.$1.previous_surface=a;return this};a.prototype.setQueryID=function(a){this.$1.query_id=a;return this};a.prototype.setSectionID=function(a){this.$1.section_id=a;return this};a.prototype.setSessionid=function(a){this.$1.sessionid=a;return this};a.prototype.setStoryType=function(a){this.$1.story_type=a;return this};a.prototype.setSubSurface=function(a){this.$1.sub_surface=a;return this};a.prototype.setSurface=function(a){this.$1.surface=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setTimeSpent=function(a){this.$1.time_spent=a;return this};a.prototype.setTopUnitTypes=function(a){this.$1.top_unit_types=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setTrackingData=function(a){this.$1.tracking_data=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVideoID=function(a){this.$1.video_id=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={attached_story_attachment_type:!0,attached_story_type:!0,badge_count:!0,client_userid:!0,clienttime:!0,content_count:!0,deviceid:!0,encoded_section_id:!0,ent_attachment_type:!0,event:!0,exception:!0,external_entrypoint:!0,feed_unit_type:!0,game_id:!0,group_id:!0,has_games_app:!0,has_games_tab:!0,ig_app_id:!0,index:!0,is_async_job:!0,load_time_ms:!0,name:!0,nav_pill_id:!0,notif_id:!0,notif_type:!0,nt_section:!0,object_id:!0,page_id:!0,page_index:!0,previous_surface:!0,query_id:!0,section_id:!0,sessionid:!0,story_type:!0,sub_surface:!0,surface:!0,time:!0,time_spent:!0,top_unit_types:!0,tracking_data:!0,vc:!0,video_id:!0,weight:!0};e.exports=a}),null);
__d("GamingDestinationEntrypoints",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CANVAS_RHC:"canvas_rhc",GAMES_VIDEO_BOOKMARK:"games_video_bookmark",GAME_SEARCH_UNIT:"game_search_unit",GAMEROOM_LHC:"gameroom_lhc",GAMEROOM_FOLLOWED_GAME_LHC:"gameroom_followed_game_lhc",GAMEROOM_RHC:"gameroom_rhc",GAMES_APP:"games_app",GROUP_RHC:"group_rhc",GROUP_HOVERCARD:"group_hovercard",GROUP_METALINE:"group_metaline",NEWSFEED_RHC:"newsfeed_rhc",INSTANT_GAMES_RHC:"instant_games_rhc",VIDEO_ATTRIBUTION_NEWSFEED:"video_newsfeed",VIDEO_ATTRIBUTION_PAGE:"video_page",VIDEO_ATTRIBUTION_OTHER:"video_other",LIVE_NOTIFICATION:"live_notification",NONFOLLOWER_NOTIFICATION:"nonfollower_notification",GAME_FOLLOWER_NOTIFICATION:"game_follower_notification",FRIEND_OF_FOLLOWER_NOTIFICATION:"friend_of_follower_notification",GAME_FEED_NOTIFICATION:"game_feed_notification",GAME_DESTINATION_NOTIFICATION:"game_destination_notification",GAME_BOOKMARK:"game_bookmark",GAME_SHORTCUT:"game_shortcut",GAMES_VIDEO_QP:"games_video_qp",GAME_PAGES:"game_pages",VIDEO_HOME:"video_home",NEWS_FEED_ON_VIDEO_CLICK:"news_feed_on_video_click",NEWS_FEED_AFTER_VIDEO_PLAY:"news_feed_after_video_play",GAMES_VIDEO_SOCIAL_PLUGIN:"games_video_social_plugin",ANDROID_GAMING_SHORTCUT:"android_gaming_shortcut",ANDROID_INSTANT_GAME_SHORTCUT:"android_instant_game_shortcut",ANDROID_INSTANT_GAMES_HUB_SHORTCUT:"android_instant_games_hub_shortcut",INSTANT_GAMEHUB_CROSS_SELL:"instant_gamehub_cross_sell",DEEPLINK:"deeplink",UNKNOWN:"unknown",FEED_NAVIGATION_PILLS:"feed_navigation_pills",FEED_STORY_TITLE:"feed_story_title",PUSH_NOTIFICATION:"push_notification",RAIDING:"raiding",FBLITE_BOOKMARK:"fblite_bookmark",FBLITE_MESSENGER_TAB:"fblite_messenger_tab",GAMES_TAB:"games_tab",GAMES_TAB_NOTIFICATION:"games_tab_notification",VIDEO_ACTION_LINK:"video_action_link",FB_OTHER_GAMES_NOTIF:"fb_other_games_notif",STREAMER_EVENT_NOTIFICATION:"streamer_event_notification",STREAMER_SCHEDULE:"streamer_schedule"})}),null);
__d("GamingDestinationEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SURFACE_ENTER:"surface_enter",SURFACE_EXIT:"surface_exit",CLICK:"click",IMPRESSION:"impression",CONTENT_LOAD:"content_load",COMBINED_FEED_PAGE_LOAD:"combined_feed_page_load",SECTION_LOAD:"section_load",SECTION_DATA_GENERATED:"section_data_generated",FOLLOW_GAME:"follow_game",UNFOLLOW_GAME:"unfollow_game",FOLLOW_STREAMER:"follow_streamer",UNFOLLOW_STREAMER:"unfollow_streamer",LOAD_ERROR:"load_error",PUMA_ERROR:"puma_error",NON_FATAL_ERROR:"non_fatal_error",REDIRECT_ENTER:"redirect_enter",FUSS_FILTERED_VIDEO:"fuss_filtered_video",FLAGGED_FILTERED_VIDEO:"flagged_filtered_video",FUSS_ERROR:"fuss_error",QUERY_SOURCE:"query_source",FEED_INDEX_QUERY:"feed_index_query",REACHED_FEED_END:"reached_feed_end",DISMISS:"instant_gamehub_cross_sell_dismiss",LOGIN_SUCCESS:"login_success",LOGIN_FAILED:"login_failed",SEARCH:"search",LAUNCH_APP:"launch_app",TOGGLE_ON:"toggle_on",TOGGLE_OFF:"toggle_off",FEED_ATTACHMENT_RENDER_ERROR:"feed_attachment_render_error",CANCEL:"cancel",GAMES_FEED_LOAD_SUCCESS:"games_feed_load_success",GAMES_FEED_LOAD_FAILURE:"games_feed_load_failure",GAMES_FEED_GO_TO_TOP:"games_feed_go_to_top",GO_LIVE:"go_live",GAMES_TAB_BADGED:"games_tab_badged",HARD_FOLLOW_STREAMER:"hard_follow_streamer",HARD_UNFOLLOW_STREAMER:"hard_unfollow_streamer",SHARE:"share",WRONG_HAS_TAB_VALUE:"wrong_has_tab_value",REFRESH_TOP_UNIT:"refresh_top_unit",STREAMER_EVENT_SHARE:"streamer_event_share",STREAMER_EVENT_WATCHED:"streamer_event_watched",STREAMER_EVENT_JOINED:"streamer_event_joined",STREAMER_EVENT_UNWATCHED:"streamer_event_unwatched",STREAMER_EVENT_WATCH_NOW:"streamer_event_watch_now",THREAD_CREATED:"thread_created",MESSAGE_SEND:"message_send"})}),null);
__d("XGamesQuicksilverPlayController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instantgames/play/{game_or_link}/",{context_source_id:{type:"String"},context_type:{type:"Enum",enumType:1},game_or_link:{type:"String",required:!0},source:{type:"Enum",enumType:1},upsell_logging_info:{type:"TypeAssert"},payload:{type:"String"}})}),null);
__d("XGamesVideoHomeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/gaming/{?vanity}/",{view:{type:"Enum",enumType:1},game_id:{type:"FBID"},section_id:{type:"String"},previous_view:{type:"Enum",enumType:1},sub_view:{type:"Enum",enumType:1},external_ref:{type:"Enum",enumType:1},hc_ref:{type:"String"},streamer_vanity:{type:"String"},vanity:{type:"String"},video_id:{type:"String"},follow:{type:"Bool",defaultValue:!1},go_live:{type:"Bool",defaultValue:!1}})}),null);
__d("XPlayWithFriendsShareController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instantgames/playwithfriends/",{game_id:{type:"Int"},always_show_share_dialog:{type:"Bool",defaultValue:!1},source:{type:"Enum",enumType:1},__asyncDialog:{type:"Int"}})}),null);