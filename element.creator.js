/*
 * Element Creator v1.0.0
 * Create elements with Javascript easily.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Library General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * Author: Zülkarneyn Yavaş
 *
 * Project: https://github.com/zulkarneynyavas/Element-Creator-JS
 */
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
