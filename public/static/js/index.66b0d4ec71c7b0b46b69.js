webpackJsonp([2,0],{0:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){window.imgcan=0,window.canplay=0,(0,r.default)(".child").width("100%"),setTimeout(function(){(0,r.default)("#masker").fadeIn(),(0,r.default)(".js-video-wrapper").css("display","block"),setTimeout(function(){(0,r.default)("#loading").fadeOut()},1e3),v=new f.default,v.init()},500)}var o=i(5),r=n(o);i(82);var s=(i(14),i(42)),u=n(s),d=i(43),l=n(d),c=i(40),f=n(c);i(44);var h=i(45),p=n(h);window.canplay=0;var v;(0,r.default)(window).resize(function(){var e=document.getElementsByTagName("meta");if((0,r.default)(window).width()>(0,r.default)(window).height()){var t=(0,r.default)(window).width()/(0,r.default)(window).height()*640;e[0].content="user-scalable=no, width="+t}else e[0].content="user-scalable=no, width=640"}),document.addEventListener("WeixinJSBridgeReady",function(){(0,r.default)(".js-video").get(0).load(),(0,r.default)(".js-video-2").get(0).load(),(0,r.default)("#ling")[0].load(),(0,r.default)("#slidemusic")[0].load()},!1),(0,u.default)(a),(0,l.default)(),(0,r.default)(".js-video").get(0).addEventListener("canplaythrough",function(){window.canplay=1,window.imgcan&&a()}),(0,r.default)(".js-video").on("playing",function(e){event.preventDefault(),setTimeout(function(){(0,r.default)("#ling")[0].play()},65e3)}),(0,r.default)(".js-video").get(0).addEventListener("timeupdate",function(e){this.currentTime>63&&(0,r.default)("#phone").css("z-index","8000")}),(0,r.default)(".js-video").on("ended",function(){(0,r.default)("#phone").animate({opacity:"1"},1e3,function(){(0,r.default)(".js-video-wrapper").remove(),(0,r.default)(".js-video-wrapper-2").css("display","block"),(0,p.default)()})}),(0,r.default)(".right").click(function(){(0,r.default)(".clouds-wrap").show(),(0,r.default)(".js-video-wrapper-2").show(),(0,r.default)("#phone").remove(),(0,r.default)("#ling").remove(),(0,r.default)(".js-video-2")[0].play(),(0,r.default)("#slide").show()}),(0,r.default)(".js-video-2").on("ended",function(){(0,r.default)(".js-video-wrapper-2").animate({opacity:0}),(0,r.default)("#slide").animate({opacity:"1"}),(0,r.default)("#slidemusic")[0].play(),setTimeout(function(){(0,r.default)("#slidemusic")[0].play()},0),(0,r.default)(".move-tip").show(),setTimeout(function(){(0,r.default)(".js-video-wrapper-2").remove()},1e3)}),(0,r.default)(".share-btn").on("touchstart",function(){(0,r.default)(".share-btn").addClass("share-btn-click"),(0,r.default)(".share").css("opacity","1"),(0,r.default)(".share-mask").show()}).on("touchend",function(){(0,r.default)(".share-btn").removeClass("share-btn-click")});var w=0,g={max:(0,r.default)("#masker").height()-window.innerHeight};(0,r.default)("#masker").on("touchstart",function(e){event.preventDefault(),v.stop(),g.start=e.originalEvent.targetTouches[0].clientY,g.cur=parseInt((0,r.default)(this).css("top"))||0}).on("touchmove",function(e){event.preventDefault();var t=e.originalEvent.targetTouches[0].clientY-g.start,i=g.cur+t,n=-g.max+10;i>0?i=0:"",i<n?i=n:"",g.changed=t,(0,r.default)(this).css("top",i)}).on("touchend",function(){w||(g.changed<-10?(w=1,(0,r.default)("#masker").css("top","-215px"),(0,r.default)(".js-video").get(0).play(),(0,r.default)(".js-video-wrapper").show(),(0,r.default)("#masker").remove(),setTimeout(function(){},500)):v.continue())}),(0,r.default)(document).on("touchmove",function(e){event.preventDefault()})},14:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.formatParams=t.erlize=t.xhr4File=t.preLoad=void 0;var a=i(47),o=n(a),r=i(46),s=n(r),u=i(48),d=n(u),l=i(83),c=(n(l),t.preLoad=function(e){return new d.default(function(t,i){var n=new Image;n.onload=function(e){t(n)},n.onerror=i,n.src=e})},t.xhr4File=function(){this.xhr=new XMLHttpRequest});c.prototype={init:function(e){this.cfg=e},send:function(e){this.xhr=new XMLHttpRequest,this.xhr.open("post",this.cfg.url,!0),this.bindEvents(),this.xhr.send(e)},bindEvents:function(){this.progress(),this.load()},progress:function(){var e=this.cfg.onProgress;e&&this.xhr.upload.addEventListener("progress",function(t){if(t.lengthComputable){var i=parseInt(t.loaded/t.total*100);i>15&&i<100&&e(i)}},!1)},load:function(){var e=this.xhr,t=this,i=this.cfg.onLoad;e.addEventListener("load",function(n){if(4==this.readyState&&200==this.status){try{var a=JSON.parse(e.responseText)}catch(e){var a={code:500,message:"服务器异常，请重试"}}200==a.code?i&&i(a):t.error(a)}else t.error({message:"网络异常，请重试"})})},error:function(e){var t=this.cfg.onError;t&&t(e)}};t.erlize=function(e){var t={};e=e.substr(e.indexOf("?")+1);for(var i=e.split("&"),n=0,a=i.length;n<a;n++){var o=i[n],r=o.split("=");t[r[0]]=r[1]}return t},t.formatParams=function(e){var t=[],i=!0,n=!1,a=void 0;try{for(var r,u=(0,s.default)((0,o.default)(e));!(i=(r=u.next()).done);i=!0){var d=r.value;t.push(encodeURIComponent(d)+"="+encodeURIComponent(e[d]))}}catch(e){n=!0,a=e}finally{try{!i&&u.return&&u.return()}finally{if(n)throw a}}return t.join("&")}},24:function(e,t){"use strict";e.exports={NODE_ENV:'"production"',isUglyfy:!0,showVConsole:!1,baseApi:"",cdnURL:"http://cdn.holyhilab.com/"}},40:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(5),o=n(a),r=function(){this.canvas=(0,o.default)("#start-img")[0],this.ctx=this.canvas.getContext("2d"),this.curFrame=0};r.prototype={init:function(){var e=this.canvas,t=this.ctx,i=(0,o.default)("#masker").width(),n=(0,o.default)("#masker").height(),a=this.getPixelRatio(t);a.devicePixelRatio!==a.backingStoreRatio?(e.width=i*a.ratio,e.height=n*a.ratio,e.style.width=i+"px",e.style.height=n+"px",t.scale(a.ratio,a.ratio)):(e.width=i,e.height=n),this.w=i,this.h=n,this.timer&&clearInterval(this.timer),this.continue()},getPixelRatio:function(e){var t=window.devicePixelRatio||1,i=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1,n=t/i;return{devicePixelRatio:t,backingStoreRatio:i,ratio:n}},drawPic:function(){var e=window.result[this.curFrame];this.ctx.clearRect(0,0,this.w,this.h),e&&this.ctx.drawImage(e,0,0,e.naturalWidth,e.naturalHeight,0,0,this.w,this.h)},start:function(){this.curFrame>=window.result.length&&(this.curFrame=29),this.drawPic(),this.curFrame++},continue:function(){clearInterval(window.timer),window.timer=setInterval(this.start.bind(this),50)},stop:function(){clearInterval(this.timer)}},t.default=r},41:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(5),o=n(a),r=function(){this.canvas=(0,o.default)("#run-people-second")[0],this.ctx=this.canvas.getContext("2d"),this.curFrame=0};r.prototype={init:function(){var e=this.canvas,t=this.ctx,i=(0,o.default)("#run-people-second").width(),n=(0,o.default)("#run-people-second").height(),a=this.getPixelRatio(t);a.devicePixelRatio!==a.backingStoreRatio?(e.width=i*a.ratio,e.height=n*a.ratio,e.style.width=i+"px",e.style.height=n+"px",t.scale(a.ratio,a.ratio)):(e.width=i,e.height=n),this.w=i,this.h=n,this.timer&&clearInterval(this.timer),this.continue()},getPixelRatio:function(e){var t=window.devicePixelRatio||1,i=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1,n=t/i;return{devicePixelRatio:t,backingStoreRatio:i,ratio:n}},drawPic:function(){var e=window.run_people[this.curFrame];this.ctx.clearRect(0,0,this.w,this.h),e&&this.ctx.drawImage(e,0,0,e.naturalWidth,e.naturalHeight,0,0,this.w,this.h)},start:function(){this.curFrame>=window.run_people.length&&(this.curFrame=0),this.drawPic(),this.curFrame++},continue:function(){clearInterval(window.timer),window.timer=setInterval(this.start.bind(this),50)},stop:function(){clearInterval(this.timer)}},t.default=r},42:function(e,t,i){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(t,i){if(t.length){var n=(new Image,t.shift());(0,s.preLoad)(e.cdnURL+n).then(function(e){return function(t){f[e]=t,i()}}(h)).catch(function(e){return function(t){f[e]=!1,i()}}(h)),h++,a(t,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){var i=(parseInt((0,r.default)(".progress").width()),!1);a(u,function(){var n=f.length/c;(0,r.default)(".child").width(95*n+"%"),1!==n||i||(i=!0,window.imgcan=1,window.result=f,window.canplay?(t(),(0,s.preLoad)(e.cdnURL+"phone_bg.jpg")):((0,r.default)(".js-video").get(0).load(),(0,r.default)(".js-video-2").get(0).load()))})};var o=i(5),r=n(o),s=i(14),u=[];window.imgcan=0;for(var d=1;d<=62;d++){var l=d>=30?2:1;d<10&&(d="0"+d),u.push(l+"_000"+d+".jpg")}var c=u.length,f=[],h=0}).call(t,i(24))},43:function(e,t,i){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(t,i){if(t.length){var n=(new Image,t.shift());(0,s.preLoad)(e.cdnURL+n).then(function(e){return function(t){c[e]=t,i()}}(f)).catch(function(e){return function(t){c[e]=!1,i()}}(f)),f++,a(t,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(parseInt((0,r.default)(".progress").width()),!1);a(u,function(){var e=c.length/l;1!==e||t||(t=!0,window.run_people=c)})};var o=i(5),r=n(o),s=i(14),u=[];window.imgcan=0;for(var d=0;d<16;d++)u.push("12_028"+(48+d)+".png");var l=u.length,c=[],f=0,h=[];h.push(e.cdnURL+"hangup.png"),h.push(e.cdnURL+"receive.png"),h.push(e.cdnURL+"phone_bg.jpg");for(var p=0;p<h.length;p++){var v=new Image;v.src=h[p],v.onload=function(){}}}).call(t,i(24))},44:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=i(5),o=n(a);setTimeout(function(){o.default.get("http://api.holyhilab.com/share",{url:window.location.href.split("#")[0]},function(e){e=e.data;var t={debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.noncestr,signature:e.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]},i={title:"震惊！你家孩子在社交媒体上竟然是这样的……",desc:"妈妈不在家，双胞胎竟然...",imgUrl:"http://cdn.holyhilab.com/meta.png",link:"http://h5.holyhilab.com/capri-sun/"};wx.config(t),wx.ready(function(){wx.onMenuShareAppMessage(i),wx.onMenuShareTimeline({title:i.desc,link:i.link,imgUrl:i.imgUrl,desc:i.desc}),(0,o.default)(".js-video").get(0).load(),(0,o.default)(".js-video-2").get(0).load(),(0,o.default)("#ling")[0].load()})})},2e3)},45:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var i=f[p];(0,u.default)(".swiper-wrapper").css("top",i)}function o(e,t){if(!(e>7)){if(7==e)return r=new l.default,r.init(),e++,(0,u.default)(".move-tip").hide(),(0,u.default)(".swiper-container").hide(),(0,u.default)(".run-people").css("bottom","-20px"),window.timer3=setTimeout(function(){(0,u.default)(".before-share").show()},1e3),void(window.timer1=setTimeout(function(){(0,u.default)(".share-btn-wrap").css("display","block").css("opacity","1"),(0,u.default)(".before-share").remove(),window.timer2=setTimeout(function(){(0,u.default)(".share-btn").addClass("share-btn-enter")},500)},4e3));var i=f[p];(0,u.default)(".swiper-wrapper").css("top",i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){(0,u.default)(".swiper-slide").removeClass("active").eq(c).addClass("active"),(0,u.default)("#slide").bind("touchstart",function(e){h.start=e.originalEvent.targetTouches[0].clientY,h.cur=parseInt((0,u.default)(".swiper-wrapper").css("top"))}).bind("touchmove",function(e){e.preventDefault(),e.stopPropagation()}),(0,u.default)("#slide").bind("touchend",function(e){var t=e.originalEvent.changedTouches[0].clientY,i=t-h.start;i>0?(p--,p<=0&&(p=0),a(p,!0)):(p++,p>=7&&(p=7),o(p,!0)),(0,u.default)(".swiper-slide").removeClass("active").eq(p).addClass("active")})};var r,s=i(5),u=n(s),d=i(41),l=n(d),c=0,f=[0,-230,-670,-1100,-1400,-1460,-1700],h={step:parseInt((0,u.default)(".swiper-slide").height()),max:70,min:parseInt((0,u.default)(".swiper-container").height())-parseInt((0,u.default)(".swiper-wrapper").height())-140},p=0},82:function(e,t){}});
//# sourceMappingURL=index.66b0d4ec71c7b0b46b69.js.map