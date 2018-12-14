if (self.CavalryLogger) { CavalryLogger.start_js(["2RxUE"]); }

__d("ReactComposerFunFactSinglePromptDialog.react",["ix","cx","CurrentUser","FacebookAppIDs","FunFactSinglePromptSelector.react","Image.react","LayerFadeOnHide","ProfileEngagementTypedLogger","ProfileFunFactsStrings","ProfileFunFactsTestIDs","React","SimpleNUXMessage","SimpleNUXMessageTypes","XUIAmbientNUX.react","XUIButton.react","XUIDialog.react","XUIDialogBody.react","XUIDialogTitle.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=600;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={showNux:!b("SimpleNUXMessage").hasUserSeenMessage(b("SimpleNUXMessageTypes").PROFILE_FUN_FACTS_ASK_NUX)},this.$2=function(){b("SimpleNUXMessage").markMessageSeenByUser(b("SimpleNUXMessageTypes").PROFILE_FUN_FACTS_ASK_NUX),this.setState({showNux:!1})}.bind(this),this.$1=function(){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(this.props.isGroup?"group":"unknown").setEngagementType("tap").setAppID(b("FacebookAppIDs").WWW).setItemType("create_prompt").setEventMetadata({entry_point:this.props.entryPoint}).log(),this.props.onAsk()}.bind(this),this.$3=function(){this.$4("exit"),this.props.onClose()}.bind(this),c}a.prototype.render=function(){var a=this.props.isGroup?null:b("React").createElement(b("XUIButton.react"),{className:"_3-90",image:b("React").createElement(b("Image.react"),{src:g("407424")}),label:b("ProfileFunFactsStrings").MANAGE_QUESTIONS_NULL_STATE_CTA_BUTTON_TEXT,onClick:this.$1,ref:"createButton"}),c=a===null?null:b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"right",contextRef:function(){return this.refs.createButton}.bind(this),onCloseButtonClick:this.$2,position:"above",shown:this.state.showNux},b("ProfileFunFactsStrings").SINGLE_PROMPT_ASK_NUX);return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("XUIDialog.react"),{behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},"data-testid":b("ProfileFunFactsTestIDs").DIALOG,isStrictlyControlled:!0,onHide:this.$3,shown:this.props.showDialog,width:j},b("React").createElement(b("XUIDialogTitle.react"),{className:"_4xqu"},b("ProfileFunFactsStrings").SINGLE_PROMPT_DIALOG_TITLE,a),b("React").createElement(b("XUIDialogBody.react"),{useCustomPadding:!0},b("React").createElement("div",{className:"_4xqv _2ph_"},b("React").createElement("div",{className:"_64pf"},b("React").createElement(b("FunFactSinglePromptSelector.react"),this.props))))),c)};a.prototype.componentDidMount=function(){this.$4("enter")};a.prototype.$4=function(a){new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(this.props.isGroup?"group":"unknown").setEngagementType(a).setAppID(b("FacebookAppIDs").WWW).setItemType("answer_tab").setItemSubtype("single_prompt").setEventMetadata({entry_point:this.props.entryPoint}).log()};e.exports=a}),null);
__d("FunFactSelectorDialog.react",["AsyncRequest","LoadingDialog.react","React","ReactComposerFunFactSinglePromptDialog.react","XProfileFunFactsSelectorController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state={isLoading:!1,showDialog:!0},this.$1=function(a){a=b("XProfileFunFactsSelectorController").getURIBuilder().setEnum("entry_point",this.props.entryPoint).setFBID("pinned_prompt_id",a.id.toString()).setFBID("group_id",this.props.groupID).setBool("skip_selector",!0).getURI();this.setState({isLoading:!0});new(b("AsyncRequest"))().setURI(a).setFinallyHandler(function(){this.$2()}.bind(this)).send()}.bind(this),this.$3=function(){var a=b("XProfileFunFactsSelectorController").getURIBuilder().setEnum("entry_point",this.props.entryPoint).setExists("show_ask_tagger",!0).setBool("skip_selector",!0).getURI();this.setState({isLoading:!0});new(b("AsyncRequest"))().setURI(a).setFinallyHandler(function(){this.$2()}.bind(this)).send()}.bind(this),this.$2=function(){this.setState({isLoading:!1,showDialog:!1})}.bind(this),c}a.prototype.render=function(){return this.state.isLoading?b("React").createElement(b("LoadingDialog.react"),null):b("React").createElement(b("ReactComposerFunFactSinglePromptDialog.react"),{entryPoint:this.props.entryPoint,isGroup:this.props.groupID!==null,onAsk:this.$3,onClose:this.$2,onSelect:this.$1,pinnedPromptID:this.props.pinnedPromptID,showDialog:this.state.showDialog})};e.exports=a}),null);