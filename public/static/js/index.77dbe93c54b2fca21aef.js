webpackJsonp([2,0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(5);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(90);
	
	var _base = __webpack_require__(17);
	
	var _loader = __webpack_require__(50);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _loader3 = __webpack_require__(51);
	
	var _loader4 = _interopRequireDefault(_loader3);
	
	var _Animater = __webpack_require__(48);
	
	var _Animater2 = _interopRequireDefault(_Animater);
	
	__webpack_require__(52);
	
	var _slider = __webpack_require__(53);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.canplay = 0;
	
	var animater;
	
	document.addEventListener("WeixinJSBridgeReady", function () {
	  (0, _jquery2.default)('.js-video').get(0).load();
	  (0, _jquery2.default)('.js-video-2').get(0).load();
	  (0, _jquery2.default)('#ling')[0].load();
	  (0, _jquery2.default)('#slidemusic')[0].load();
	}, !1);
	
	function startCb() {
	  window.imgcan = 0;
	  window.canplay = 0;
	  (0, _jquery2.default)('.child').width('100%');
	
	  setTimeout(function () {
	    (0, _jquery2.default)('#masker').fadeIn();
	    (0, _jquery2.default)('.js-video-wrapper').css('display', 'block');
	    showBtn();
	
	    setTimeout(function () {
	      (0, _jquery2.default)('#loading').fadeOut();
	    }, 1000);
	
	    animater = new _Animater2.default();
	    animater.init();
	  }, 500);
	}
	
	(0, _loader2.default)(startCb);
	(0, _loader4.default)();
	
	(0, _jquery2.default)('.js-video').get(0).addEventListener('canplaythrough', function () {
	  window.canplay = 1;
	
	  if (window.imgcan) {
	    startCb();
	  }
	});
	
	(0, _jquery2.default)('.js-video').on('playing', function (e) {
	  event.preventDefault();
	
	  setTimeout(function () {
	    (0, _jquery2.default)('#ling')[0].play();
	  }, 65 * 1000);
	});
	
	(0, _jquery2.default)('.js-video').on('ended', function () {
	  (0, _jquery2.default)('#phone').css('z-index', '6000');
	  setTimeout(function () {
	    (0, _jquery2.default)('.js-video-wrapper').remove();
	    (0, _jquery2.default)('.js-video-wrapper-2').css('display', 'block');
	    (0, _slider2.default)();
	  }, 1000);
	});
	
	(0, _jquery2.default)('.right').click(function () {
	  (0, _jquery2.default)('.clouds-wrap').show();
	  (0, _jquery2.default)('.js-video-wrapper-2').show();
	  (0, _jquery2.default)('#phone').remove();
	  (0, _jquery2.default)('#ling').remove();
	  (0, _jquery2.default)('.js-video-2')[0].play();
	});
	
	(0, _jquery2.default)('.js-video-2').on('ended', function () {
	  (0, _jquery2.default)('#slide').show();
	  (0, _jquery2.default)('#slidemusic')[0].play();
	  setTimeout(function () {
	    (0, _jquery2.default)('#slidemusic')[0].play();
	  }, 0);
	  (0, _jquery2.default)('.move-tip').show();
	
	  setTimeout(function () {
	    (0, _jquery2.default)('.js-video-wrapper-2').remove();
	  }, 1000);
	});
	
	(0, _jquery2.default)('.share-btn').on('touchstart', function () {
	  (0, _jquery2.default)('.share').css('opacity', '1');
	}).on('touchend', function () {
	  (0, _jquery2.default)('.share-btn').removeClass('share-btn-click');
	});
	
	function showBtn() {
	  (0, _jquery2.default)('#phone').css('opacity', 1);
	  (0, _jquery2.default)('.clouds-wrap').hide();
	}
	
	var has = 0;
	
	var cfg = {
	  max: (0, _jquery2.default)('#masker').height() - window.innerHeight
	};
	
	(0, _jquery2.default)('#masker').on('touchstart', function (e) {
	  event.preventDefault();
	  animater.stop();
	  cfg.start = e.originalEvent.targetTouches[0].clientY;
	  cfg.cur = parseInt((0, _jquery2.default)(this).css('top')) || 0;
	}).on('touchmove', function (e) {
	  event.preventDefault();
	
	  var changed = e.originalEvent.targetTouches[0].clientY - cfg.start;
	  var result = cfg.cur + changed;
	  var max = -cfg.max + 10;
	
	  result > 0 ? result = 0 : '';
	  result < max ? result = max : '';
	
	  cfg.changed = changed;
	  (0, _jquery2.default)(this).css('top', result);
	}).on('touchend', function () {
	  if (has) {
	    return;
	  }
	
	  if (cfg.changed < -10) {
	    has = 1;
	
	    (0, _jquery2.default)('#masker').css('top', -215 + 'px');
	
	    (0, _jquery2.default)('.js-video').get(0).play();
	    (0, _jquery2.default)('.js-video-wrapper').show();
	    (0, _jquery2.default)('#masker').remove();
	
	    setTimeout(function () {}, 500);
	  } else {
	    animater.continue();
	  }
	});
	
	(0, _jquery2.default)(document).on('touchmove', function (e) {
	  event.preventDefault();
	});

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatParams = exports.erlize = exports.xhr4File = exports.preLoad = undefined;
	
	var _keys = __webpack_require__(55);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(54);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _promise = __webpack_require__(56);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _vue = __webpack_require__(109);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var preLoad = exports.preLoad = function preLoad(url) {
	  return new _promise2.default(function (resolve, reject) {
	    var img = new Image();
	
	    img.onload = function (_) {
	      resolve(img);
	    };
	    img.onerror = reject;
	    img.src = url;
	  });
	};
	
	var xhr4File = exports.xhr4File = function xhr4File() {
	  this.xhr = new XMLHttpRequest();
	};
	
	xhr4File.prototype = {
	  init: function init(cfg) {
	    this.cfg = cfg;
	  },
	  send: function send(file) {
	    this.xhr = new XMLHttpRequest();
	    this.xhr.open('post', this.cfg.url, true);
	    this.bindEvents();
	    this.xhr.send(file);
	  },
	  bindEvents: function bindEvents() {
	    this.progress();
	    this.load();
	  },
	  progress: function progress() {
	    var onProgress = this.cfg.onProgress;
	
	    if (onProgress) {
	      this.xhr.upload.addEventListener('progress', function (e) {
	        if (e.lengthComputable) {
	          var p = parseInt(e.loaded / e.total * 100);
	          if (p > 15 && p < 100) {
	            onProgress(p);
	          }
	        }
	      }, false);
	    }
	  },
	  load: function load() {
	    var xhr = this.xhr,
	        that = this,
	        onLoad = this.cfg.onLoad;
	
	    xhr.addEventListener('load', function (r) {
	      if (this.readyState == 4 && this.status == 200) {
	        try {
	          var json = JSON.parse(xhr.responseText);
	        } catch (e) {
	          var json = {
	            'code': 500,
	            message: '服务器异常，请重试'
	          };
	        }
	
	        if (json.code == 200) {
	          onLoad && onLoad(json);
	        } else {
	          that.error(json);
	        }
	      } else {
	        that.error({
	          message: '网络异常，请重试'
	        });
	      }
	    });
	  },
	  error: function error(msg) {
	    var onError = this.cfg.onError;
	
	    onError && onError(msg);
	  }
	};
	
	var erlize = exports.erlize = function erlize(url) {
	  var result = {};
	
	  url = url.substr(url.indexOf("?") + 1);
	  var args = url.split("&");
	  for (var i = 0, len = args.length; i < len; i++) {
	    var arg = args[i];
	    var item = arg.split('=');
	    result[item[0]] = item[1];
	  }
	  return result;
	};
	
	var formatParams = exports.formatParams = function formatParams(data) {
	  var arr = [];
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(data)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var name = _step.value;
	
	      arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return arr.join('&');
	};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var merge = __webpack_require__(110);
	var prodEnv = __webpack_require__(47);
	
	module.exports = merge(prodEnv, {
	  NODE_ENV: '"development"',
	  isUglyfy: false,
	  showVConsole: false,
	  baseApi: '/mock/',
	  cdnURL: 'http://cdn.holyhilab.com/'
	});

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = {
	  NODE_ENV: '"production"',
	  isUglyfy: true,
	  showVConsole: false,
	  baseApi: '',
	  cdnURL: 'http://cdn.holyhilab.com/'
	};

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(5);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Animater = function Animater() {
	  this.canvas = (0, _jquery2.default)('#start-img')[0];
	  this.ctx = this.canvas.getContext('2d');
	  this.curFrame = 0;
	};
	
	Animater.prototype = {
	  init: function init() {
	    var canvas = this.canvas;
	    var ctx = this.ctx;
	    var w = (0, _jquery2.default)('#masker').width(),
	        h = (0, _jquery2.default)('#masker').height();
	
	    var getRatio = this.getPixelRatio(ctx);
	    if (getRatio.devicePixelRatio !== getRatio.backingStoreRatio) {
	      canvas.width = w * getRatio.ratio;
	      canvas.height = h * getRatio.ratio;
	      canvas.style.width = w + 'px';
	      canvas.style.height = h + 'px';
	      ctx.scale(getRatio.ratio, getRatio.ratio);
	    } else {
	      canvas.width = w;
	      canvas.height = h;
	    }
	
	    this.w = w;
	    this.h = h;
	
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	
	    this.continue();
	  },
	  getPixelRatio: function getPixelRatio(context) {
	    var devicePixelRatio = window.devicePixelRatio || 1;
	    var backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
	    var ratio = devicePixelRatio / backingStoreRatio;
	
	    return {
	      'devicePixelRatio': devicePixelRatio,
	      'backingStoreRatio': backingStoreRatio,
	      'ratio': ratio
	    };
	  },
	  drawPic: function drawPic() {
	    var p = window.result[this.curFrame];
	
	    this.ctx.clearRect(0, 0, this.w, this.h);
	
	    p && this.ctx.drawImage(p, 0, 0, p.naturalWidth, p.naturalHeight, 0, 0, this.w, this.h);
	  },
	  start: function start() {
	    if (this.curFrame >= window.result.length) {
	      this.curFrame = 29;
	    }
	
	    this.drawPic();
	    this.curFrame++;
	  },
	  continue: function _continue() {
	    clearInterval(window.timer);
	    window.timer = setInterval(this.start.bind(this), 1000 / 20);
	  },
	  stop: function stop() {
	    clearInterval(this.timer);
	  }
	};
	
	exports.default = Animater;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(5);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Animater = function Animater() {
	  this.canvas = (0, _jquery2.default)('#run-people-second')[0];
	  this.ctx = this.canvas.getContext('2d');
	  this.curFrame = 0;
	};
	
	Animater.prototype = {
	  init: function init() {
	    var canvas = this.canvas;
	    var ctx = this.ctx;
	    var w = (0, _jquery2.default)('#run-people-second').width(),
	        h = (0, _jquery2.default)('#run-people-second').height();
	
	    var getRatio = this.getPixelRatio(ctx);
	    if (getRatio.devicePixelRatio !== getRatio.backingStoreRatio) {
	      canvas.width = w * getRatio.ratio;
	      canvas.height = h * getRatio.ratio;
	      canvas.style.width = w + 'px';
	      canvas.style.height = h + 'px';
	      ctx.scale(getRatio.ratio, getRatio.ratio);
	    } else {
	      canvas.width = w;
	      canvas.height = h;
	    }
	
	    this.w = w;
	    this.h = h;
	
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	
	    this.continue();
	  },
	  getPixelRatio: function getPixelRatio(context) {
	    var devicePixelRatio = window.devicePixelRatio || 1;
	    var backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
	    var ratio = devicePixelRatio / backingStoreRatio;
	
	    return {
	      'devicePixelRatio': devicePixelRatio,
	      'backingStoreRatio': backingStoreRatio,
	      'ratio': ratio
	    };
	  },
	  drawPic: function drawPic() {
	    var p = window.run_people[this.curFrame];
	
	    this.ctx.clearRect(0, 0, this.w, this.h);
	
	    p && this.ctx.drawImage(p, 0, 0, p.naturalWidth, p.naturalHeight, 0, 0, this.w, this.h);
	  },
	  start: function start() {
	    if (this.curFrame >= window.run_people.length) {
	      this.curFrame = 0;
	    }
	
	    this.drawPic();
	    this.curFrame++;
	  },
	  continue: function _continue() {
	    clearInterval(window.timer);
	    window.timer = setInterval(this.start.bind(this), 1000 / 20);
	  },
	  stop: function stop() {
	    clearInterval(this.timer);
	  }
	};
	
	exports.default = Animater;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ENV_OPT) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (cb) {
	  var per = 0,
	      totalW = parseInt((0, _jquery2.default)('.progress').width()),
	      has = false;
	
	  loadImages(pics, function () {
	    var p = result.length / l;
	    (0, _jquery2.default)('.child').width(p * 95 + '%');
	
	    if (p === 1 && !has) {
	      has = true;
	      window.imgcan = 1;
	      window.result = result;
	      if (window.canplay) {
	        cb();
	        (0, _base.preLoad)(ENV_OPT.cdnURL + 'phone_bg.jpg');
	      } else {
	        (0, _jquery2.default)('.js-video').get(0).load();
	        (0, _jquery2.default)('.js-video-2').get(0).load();
	      }
	    };
	  });
	};
	
	var _jquery = __webpack_require__(5);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _base = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pics = [],
	    pics2 = [];
	window.imgcan = 0;
	
	for (var i = 1; i <= 62; i++) {
	  var start = i >= 30 ? 2 : 1;
	
	  if (i < 10) {
	    i = '0' + i;
	  }
	
	  pics.push(start + '_000' + i + '.jpg');
	}
	
	var l = pics.length,
	    result = [],
	    index = 0;
	
	function loadImages(pics, callback) {
	  if (pics.length) {
	    var img = new Image(),
	        pic = pics.shift();
	
	    (0, _base.preLoad)(ENV_OPT.cdnURL + pic).then(function (index) {
	
	      return function (pic) {
	        result[index] = pic;
	        callback();
	      };
	    }(index)).catch(function (index) {
	
	      return function (_) {
	        result[index] = false;
	        callback();
	      };
	    }(index));
	
	    index++;
	
	    loadImages(pics, callback);
	  } else {
	    return;
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ENV_OPT) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (cb) {
	  var per = 0,
	      totalW = parseInt((0, _jquery2.default)('.progress').width()),
	      has = false;
	
	  loadImages(pics, function () {
	    var p = result.length / l;
	
	    if (p === 1 && !has) {
	      has = true;
	      window.run_people = result;
	    };
	  });
	};
	
	var _jquery = __webpack_require__(5);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _base = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pics = [],
	    pics2 = [];
	window.imgcan = 0;
	
	for (var i = 0; i < 16; i++) {
	  pics.push('12_028' + (48 + i) + '.png');
	}
	
	var l = pics.length,
	    result = [],
	    index = 0;
	
	function loadImages(pics, callback) {
	  if (pics.length) {
	    var img = new Image(),
	        pic = pics.shift();
	
	    (0, _base.preLoad)(ENV_OPT.cdnURL + pic).then(function (index) {
	
	      return function (pic) {
	        result[index] = pic;
	        callback();
	      };
	    }(index)).catch(function (index) {
	
	      return function (_) {
	        result[index] = false;
	        callback();
	      };
	    }(index));
	
	    index++;
	
	    loadImages(pics, callback);
	  } else {
	    return;
	  }
	}
	
	var finish_image = [];
	
	finish_image.push(ENV_OPT.cdnURL + 'hangup.png');
	finish_image.push(ENV_OPT.cdnURL + 'receive.png');
	finish_image.push(ENV_OPT.cdnURL + 'phone_bg.jpg');
	
	for (var j = 0; j < finish_image.length; j++) {
	  var fin_img = new Image();
	  fin_img.src = finish_image[j];
	  fin_img.onload = function () {};
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(5);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	setTimeout(function () {
	  _jquery2.default.get('http://api.holyhilab.com/share', {
	    url: window.location.href.split('#')[0]
	  }, function (data) {
	    data = data.data;
	
	    var shareConfig = {
	      debug: false,
	      appId: data.appId,
	      timestamp: data.timestamp,
	      nonceStr: data.noncestr,
	      signature: data.signature,
	      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
	    };
	
	    var shareAllData = {
	      title: '震惊！你家孩子在社交媒体上竟然是这样的……',
	      desc: '妈妈不在家，双胞胎竟然...',
	      imgUrl: 'http://cdn.holyhilab.com/meta.png',
	      link: 'http://h5.holyhilab.com/capri-sun/'
	    };
	
	    wx.config(shareConfig);
	    wx.ready(function () {
	      wx.onMenuShareAppMessage(shareAllData);
	      wx.onMenuShareTimeline({
	        title: shareAllData.desc,
	        link: shareAllData.link,
	        imgUrl: shareAllData.imgUrl,
	        desc: shareAllData.desc
	      });
	
	      (0, _jquery2.default)('.js-video').get(0).load();
	      (0, _jquery2.default)('.js-video-2').get(0).load();
	      (0, _jquery2.default)('#ling')[0].load();
	    });
	  });
	}, 2000);

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  (0, _jquery2.default)('.swiper-slide').removeClass('active').eq(index).addClass('active');
	  (0, _jquery2.default)('#slide').bind("touchstart", function (e) {
	    cfg.start = e.originalEvent.targetTouches[0].clientY;
	    cfg.cur = parseInt((0, _jquery2.default)('.swiper-wrapper').css('top'));
	  }).bind('touchmove', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	  });
	
	  (0, _jquery2.default)('#slide').bind("touchend", function (e) {
	    var end = e.originalEvent.changedTouches[0].clientY;
	    var offset = end - cfg.start;
	
	    if (offset > 0) {
	      indexAbs--;
	      if (indexAbs <= 0) {
	        indexAbs = 0;
	      }
	      up(indexAbs, true);
	    } else {
	      indexAbs++;
	      if (indexAbs >= 5) {
	        indexAbs = 5;
	      }
	      down(indexAbs, true);
	    }
	
	    (0, _jquery2.default)('.swiper-slide').removeClass('active').eq(indexAbs).addClass('active');
	  });
	};
	
	var _jquery = __webpack_require__(5);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Animater = __webpack_require__(49);
	
	var _Animater2 = _interopRequireDefault(_Animater);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var has = 0;
	var index = 0;
	var changeResArr = [0, -230, -670, -1050, -1300];
	var cfg = {
	  step: parseInt((0, _jquery2.default)('.swiper-slide').height()),
	  max: 70,
	  min: parseInt((0, _jquery2.default)('.swiper-container').height()) - parseInt((0, _jquery2.default)('.swiper-wrapper').height()) - 140
	};
	var indexAbs = 0;
	
	function up(num, isEnd) {
	  var res = changeResArr[indexAbs];
	  (0, _jquery2.default)('.swiper-wrapper').css('top', res);
	}
	
	var animater;
	
	function down(num, isEnd) {
	  if (num > 5) {
	    return;
	  }
	  if (num == 5) {
	
	    animater = new _Animater2.default();
	    animater.init();
	
	    num++;
	
	    (0, _jquery2.default)('.move-tip').hide();
	    (0, _jquery2.default)('.swiper-container').hide();
	    (0, _jquery2.default)('.run-people').css('bottom', '-20px');
	
	    window.timer3 = setTimeout(function () {
	      (0, _jquery2.default)('.before-share').show();
	    }, 1000);
	
	    window.timer1 = setTimeout(function () {
	      (0, _jquery2.default)('.share-btn-wrap').css('display', 'block').css('opacity', '1');
	      (0, _jquery2.default)('.before-share').remove();
	      window.timer2 = setTimeout(function () {
	        (0, _jquery2.default)('.share-btn').addClass('share-btn-enter');
	      }, 500);
	    }, 4000);
	
	    return;
	  }
	  var res = changeResArr[indexAbs];
	  (0, _jquery2.default)('.swiper-wrapper').css('top', res);
	}

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=index.77dbe93c54b2fca21aef.js.map