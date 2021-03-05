/*! ElementCreator 1.0.0 | https://github.com/zulkarneynyavas/Element-Creator-JS | (c) 2021 Zülkarneyn Yavaş | MIT License */
!(function(h) {
	'use strict';
	h.create = function(a, b, c) {
		a.forEach(function(d) {
			c = document.createElement(d.tag);
			if (d.html) {
				c.innerHTML = d.html;
			}
			if (d.att) {
				Object.keys(d.att).forEach(function(k) {
					c.setAttribute(k, d.att[k]);
				});
			}
			if (d.script) {
				try {
					d.script();
				} catch(g) {
					Object.keys(d.script).forEach(function(k) {
						c.addEventListener(k, d.script[k]);
					});
				};
			}
			if (d.child) {
				b.appendChild(c);
				create(d.child, c, c);
			} else {
				b.appendChild(c);
			}
		});
		return c;
	}
})(window);