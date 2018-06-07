!(function() {

	var imgUrls = [
		'assets/img/wf-1.jpg',
		'assets/img/wf-2.jpg',
		'assets/img/wf-3.jpg',
		'assets/img/wf-4.jpg',
		'assets/img/wf-5.jpg',
		'assets/img/wf-6.jpg',
		'assets/img/wf-7.jpg'
	];

	var cfg = {
		container: $('.waterfall-container'),
		col: 0,
		w: 200,
		heightArr: [], // 存放列高
		busy: false,
		total: 0, // 存放已载入图片总数
	};

	// 计算宽度
	var cw = cfg.container.width();
	if (cw < 480) {
		cfg.col = 1;
	} else if (cw < 960) {
		cfg.col = 3;
	} else {
		cfg.col = 6;
	}
	cfg.w = parseInt(cw / cfg.col);

	for (var i = 0; i < cfg.col; i++) {
		cfg.heightArr[i] = 0;
	}
	cfg.container.width(cw);

	// 载入图片
	function _addimgs(imgUrls) {
		var fragment = document.createDocumentFragment();
		var count = 0;

		imgUrls.forEach(function(url, idx) {
			var div = document.createElement('div');
			var img = new Image();
			div.className = "box";
			img.src = url;
			div.appendChild(img);
			fragment.appendChild(div);

			img.onload = function() {
				_render(img);
				++cfg.total;
				if (++count == imgUrls.length) {
					cfg.busy = false;
				}
			};
		});

		cfg.container.append(fragment);
		cfg.busy = true;
	}

	function _render(img) {
		var targetColIdx = _getMinHeightIdx();
		var left = cfg.w * targetColIdx;
		var top = cfg.heightArr[targetColIdx];
		$(img).parent().css({
			top: top,
			left: left,
			width: cfg.w
		});

		// 更新高度
		cfg.heightArr[targetColIdx] += $(img).parent().outerHeight();
		cfg.container.height(cfg.heightArr[_getMaxHeightIdx()]);
	}

	// 获取最小高度列的下标
	function _getMinHeightIdx() {
		var min = cfg.heightArr[0];
		var idx = 0;
		cfg.heightArr.forEach(function(v, i) {
			if (v < min) {
				min = v;
				idx = i;
			}
		});
		return idx;
	}

	function _getMaxHeightIdx() {
		var max = cfg.heightArr[0];
		var idx = 0;
		cfg.heightArr.forEach(function(v, i) {
			if (v >= max) {
				max = v;
				idx = i;
			}
		});
		return idx;
	}

	$(document).bind('scroll', function(e) {
		if (cfg.busy) return;
		var targetH = cfg.container.offset().top + cfg.container.height();
		var currH = document.body.scrollTop + document.body.clientHeight;
		if (currH >= targetH) {

			// get imgs from server
			console.log(cfg.total);
			_addimgs(imgUrls);
		}
	});

	_addimgs(imgUrls);
}());
