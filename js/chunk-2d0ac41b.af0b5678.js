(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac41b"],{1985:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tweet-replies"},[a("section",{staticClass:"center-view"},[a("page-name-banner",{attrs:{"banner-title":e.bannerTitle,"banner-link-back":e.bannerLinkBack}}),a("ScaleLoader",{attrs:{"is-loading":e.isLoading}}),e.isLoading?e._e():a("tweet-card",{attrs:{"initial-tweet":e.tweet},on:{"after-show-reply-modal":e.afterShowReplyModal,"after-add-like":e.afterAddLike,"after-delete-like":e.afterDeleteLike}}),e.isLoading?e._e():a("reply-list",{attrs:{tweet:e.tweet}})],1),a("section",{staticClass:"right-card"},[a("popular-users-card")],1),a("reply-model",{directives:[{name:"show",rawName:"v-show",value:e.showReplyModal,expression:"showReplyModal"}],attrs:{"reply-tweet":e.tweet},on:{"after-reply-submit":e.afterReplySubmit,"after-comment-checkout":e.afterCommentCheckout}}),a("Toast",{attrs:{ToastMessage:e.ToastMessage}})],1)},r=[],i=a("1da1"),n=(a("96cf"),a("a4d3"),a("e01a"),a("b0c0"),a("d81d"),a("7424")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tweet-card"},[a("div",{staticClass:"tweet-card__author"},[a("router-link",{attrs:{to:{name:"user",params:{id:e.tweet.userId}}}},[a("img",{staticClass:"tweet-card__author__avatar",attrs:{src:e.tweet.avatar,alt:"Avatar"}})]),a("div",{staticClass:"tweet-card__author__detail"},[a("router-link",{staticClass:"tweet-card__author__detail__name",attrs:{to:{name:"user",params:{id:e.tweet.userId}}}},[e._v(" "+e._s(e.tweet.name)+" ")]),a("router-link",{staticClass:"tweet-card__author__detail__account",attrs:{to:{name:"user",params:{id:e.tweet.userId}}}},[e._v(e._s(e._f("accountTag")(e.tweet.account)))])],1)],1),a("div",{staticClass:"tweet-card__post-content"},[e._v(" "+e._s(e.tweet.description)+" ")]),a("div",{staticClass:"tweet-card__create-time"},[e._v(e._s(e._f("timeFormat")(e.tweet.createdAt))+" ")]),a("div",{staticClass:"tweet-card__social-count"},[a("div",{staticClass:"tweet-card__social-count__reply"},[a("span",{staticClass:"tweet-card__social-count__reply__count"},[e._v(e._s(e.tweet.replyCount))]),e._v(" 回覆 ")]),a("div",{staticClass:"tweet-card__social-count__like"},[a("span",{staticClass:"tweet-card__social-count__like__count"},[e._v(e._s(e.tweet.likeCount))]),e._v(" 喜歡次數 ")])]),a("div",{staticClass:"tweet-card__social-action-bar"},[a("span",{staticClass:"tweet-card__social-action-bar__reply-icon",on:{click:e.showReplyModal}}),e.tweet.isLike?a("span",{staticClass:"tweet-card__social-action-bar__red-like-icon",on:{click:function(t){return e.removeLike(e.tweet.id)}}}):a("span",{staticClass:"tweet-card__social-action-bar__like-icon",on:{click:function(t){return e.addLike(e.tweet.id)}}})])])},o=[],l=a("5530"),d=a("2708"),u={props:{initialTweet:{type:Object,required:!0}},mixins:[d["e"],d["a"]],data:function(){return{tweet:{id:-1,userId:-1,account:"",name:"",avatar:"",description:"",createdAt:"",Replies:[],replyCount:0,likeCount:0,isLike:!1}}},created:function(){this.updateTweetData()},watch:{initialTweet:{handler:function(){this.updateTweetData()},deep:!0}},methods:{updateTweetData:function(){var e=this.initialTweet,t=e.id,a=e.UserId,s=e.account,r=e.name,i=e.avatar,n=e.description,c=e.createdAt,o=e.replyCount,d=e.likeCount,u=e.isLike;this.tweet=Object(l["a"])(Object(l["a"])({},this.tweet),{},{id:t,userId:a,account:s,name:r,avatar:i,description:n,createdAt:c,replyCount:o,likeCount:d,isLike:u})},showReplyModal:function(){this.$emit("after-show-reply-modal")},addLike:function(e){this.$emit("after-add-like",e)},removeLike:function(e){this.$emit("after-delete-like",e),this.tweet.isLike=!1}}},_=u,p=a("2877"),w=Object(p["a"])(_,c,o,!1,null,null,null),m=w.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reply-list"},e._l(e.tweet.Replies,(function(t){return a("div",{key:t.id,staticClass:"reply"},[a("router-link",{staticClass:"reply__avatar",attrs:{to:{name:"user",params:{id:t.UserId}}}},[a("img",{staticClass:"reply__avatar__img",attrs:{src:t.avatar,alt:"Avatar"}})]),a("div",{staticClass:"reply__detail"},[a("div",{staticClass:"reply__detail__author"},[a("router-link",{staticClass:"reply__detail__author__name",attrs:{to:{name:"user",params:{id:t.UserId}}}},[e._v(" "+e._s(t.name)+" ")]),a("span",{staticClass:"reply__detail__author__account"},[e._v(" "+e._s(e._f("accountTag")(t.account))+" ")]),a("span",{staticClass:"reply__detail__author__post-time"},[e._v(" ・"+e._s(e._f("fromNow")(t.createdAt))+" ")])],1),a("div",{staticClass:"reply__detail__reply-to"},[e._v(" 回覆 "),a("router-link",{staticClass:"reply__detail__reply-to__account",attrs:{to:{name:"user",params:{id:e.tweet.UserId}}}},[e._v(e._s(e._f("accountTag")(e.tweet.name)))])],1),a("div",{staticClass:"reply__detail__comment"},[e._v(e._s(t.comment))])])],1)})),0)},h=[],k={props:{tweet:{type:Object,required:!0}},mixins:[d["b"],d["a"]]},f=k,C=Object(p["a"])(f,v,h,!1,null,null,null),y=C.exports,g=a("5a23"),b=a("c340"),L=a("de64"),T=a("a0e7"),R=a("2e15"),M=a("2612"),x={components:{PageNameBanner:n["a"],TweetCard:m,ReplyList:y,PopularUsersCard:g["a"],ReplyModel:b["a"],Toast:L["a"],ScaleLoader:T["a"]},data:function(){return{bannerLinkBack:!0,bannerTitle:"推文",tweet:{},showReplyModal:!1,ToastMessage:{message:"",dataStatus:""},isLoading:!0}},created:function(){this.isLoading=!0;var e=this.$route.params.id;this.fetchTweetData(e)},methods:{fetchTweetData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,r,i,n,c,o,l,d,u,_,p,w;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R["a"].getTweet({tweetId:e});case 3:s=a.sent,r=s.data,i=r.id,n=r.UserId,c=r.User,o=r.description,l=r.createdAt,d=r.Replies,u=r.Likes,_=r.replyCount,p=r.likeCount,w=r.isLiked,t.tweet={id:i,UserId:n,account:c.account,name:c.name,avatar:c.avatar,description:o,createdAt:l,Replies:d,Likes:u,replyCount:_,likeCount:p,isLike:w},t.tweet.Replies=t.tweet.Replies.map((function(e){var t=e.id,a=e.UserId,s=e.User,r=e.comment,i=e.createdAt;return{id:t,UserId:a,account:s.account,name:s.name,comment:r,avatar:s.avatar,createdAt:i}})),t.isLoading=!1,a.next=17;break;case 11:a.prev=11,a.t0=a["catch"](0),console.log(a.t0),t.ToastMessage.message="無法取得推文資料，請稍後再試",t.ToastMessage.dataStatus="error",t.isLoading=!1;case 17:case"end":return a.stop()}}),a,null,[[0,11]])})))()},afterShowReplyModal:function(){this.showReplyModal=!0},afterCommentCheckout:function(){this.showReplyModal=!1},afterReplySubmit:function(){var e=this.$route.params.id;this.fetchTweetData(e)},afterAddLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,M["a"].addLike({tweetId:e});case 3:if(s=a.sent,r=s.data,"success"===r.status){a.next=7;break}throw new Error(r.message);case 7:t.tweet.isLike=!0,t.tweet.likeCount+=1,a.next=16;break;case 11:a.prev=11,a.t0=a["catch"](0),console.log(a.t0),t.ToastMessage.message="無法取新增最愛，請稍後再試",t.ToastMessage.dataStatus="error";case 16:case"end":return a.stop()}}),a,null,[[0,11]])})))()},afterDeleteLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,M["a"].deleteLike({tweetId:e});case 3:if(s=a.sent,r=s.data,"success"===r.status){a.next=7;break}throw new Error(r.message);case 7:t.tweet.isLike=!1,t.tweet.likeCount-=1,a.next=16;break;case 11:a.prev=11,a.t0=a["catch"](0),console.log(a.t0),t.ToastMessage.message="無法移除最愛，請稍後再試",t.ToastMessage.dataStatus="error";case 16:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},I=x,A=Object(p["a"])(I,s,r,!1,null,null,null);t["default"]=A.exports}}]);
//# sourceMappingURL=chunk-2d0ac41b.af0b5678.js.map