!(function r(s, a, l) {
    function h(e, t) {
        if (!a[e]) {
            if (!s[e]) {
                var n = "function" == typeof require && require;
                if (!t && n) return n(e, !0);
                if (c) return c(e, !0);
                var i = new Error("Cannot find module '" + e + "'");
                throw ((i.code = "MODULE_NOT_FOUND"), i);
            }
            var o = (a[e] = { exports: {} });
            s[e][0].call(
                o.exports,
                function (t) {
                    return h(s[e][1][t] || t);
                },
                o,
                o.exports,
                r,
                s,
                a,
                l
            );
        }
        return a[e].exports;
    }
    for (var c = "function" == typeof require && require, t = 0; t < l.length; t++) h(l[t]);
    return h;
})(
    {
        1: [
            function (t, A, e) {
                "use strict";
                function E(t) {
                    return (E =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              })(t);
                }
                var s;
                !(function (f, u, p) {
                    var a = [],
                        l = [],
                        t = {
                            _version: "3.2.0",
                            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
                            _q: [],
                            on: function (t, e) {
                                var n = this;
                                setTimeout(function () {
                                    e(n[t]);
                                }, 0);
                            },
                            addTest: function (t, e, n) {
                                l.push({ name: t, fn: e, options: n });
                            },
                            addAsyncTest: function (t) {
                                l.push({ name: null, fn: t });
                            },
                        },
                        h = function () {};
                    function m(t, e) {
                        return E(t) === e;
                    }
                    (h.prototype = t), (h = new h());
                    var g = u.documentElement,
                        y = "svg" === g.nodeName.toLowerCase();
                    y ||
                        (function (t, l) {
                            var h,
                                c,
                                e = t.html5 || {},
                                o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                r = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                n = "_html5shiv",
                                i = 0,
                                s = {};
                            function d() {
                                var t = p.elements;
                                return "string" == typeof t ? t.split(" ") : t;
                            }
                            function f(t) {
                                var e = s[t[n]];
                                return e || ((e = {}), i++, (t[n] = i), (s[i] = e)), e;
                            }
                            function u(t, e, n) {
                                return (
                                    e || (e = l),
                                    c
                                        ? e.createElement(t)
                                        : (n || (n = f(e)),
                                          !(i = n.cache[t] ? n.cache[t].cloneNode() : r.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t)).canHaveChildren || o.test(t) || i.tagUrn ? i : n.frag.appendChild(i))
                                );
                                var i;
                            }
                            function a(t) {
                                t || (t = l);
                                var e,
                                    n,
                                    i,
                                    o,
                                    r,
                                    s,
                                    a = f(t);
                                return (
                                    !p.shivCSS ||
                                        h ||
                                        a.hasCSS ||
                                        (a.hasCSS =
                                            ((n = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"),
                                            (i = (e = t).createElement("p")),
                                            (o = e.getElementsByTagName("head")[0] || e.documentElement),
                                            (i.innerHTML = "x<style>" + n + "</style>"),
                                            !!o.insertBefore(i.lastChild, o.firstChild))),
                                    c ||
                                        ((r = t),
                                        (s = a).cache || ((s.cache = {}), (s.createElem = r.createElement), (s.createFrag = r.createDocumentFragment), (s.frag = s.createFrag())),
                                        (r.createElement = function (t) {
                                            return p.shivMethods ? u(t, r, s) : s.createElem(t);
                                        }),
                                        (r.createDocumentFragment = Function(
                                            "h,f",
                                            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                                                d()
                                                    .join()
                                                    .replace(/[\w\-:]+/g, function (t) {
                                                        return s.createElem(t), s.frag.createElement(t), 'c("' + t + '")';
                                                    }) +
                                                ");return n}"
                                        )(p, s.frag))),
                                    t
                                );
                            }
                            !(function () {
                                try {
                                    var t = l.createElement("a");
                                    (t.innerHTML = "<xyz></xyz>"),
                                        (h = "hidden" in t),
                                        (c =
                                            1 == t.childNodes.length ||
                                            (function () {
                                                l.createElement("a");
                                                var t = l.createDocumentFragment();
                                                return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement;
                                            })());
                                } catch (t) {
                                    c = h = !0;
                                }
                            })();
                            var p = {
                                elements:
                                    e.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                                version: "3.7.3",
                                shivCSS: !1 !== e.shivCSS,
                                supportsUnknownElements: c,
                                shivMethods: !1 !== e.shivMethods,
                                type: "default",
                                shivDocument: a,
                                createElement: u,
                                createDocumentFragment: function (t, e) {
                                    if ((t || (t = l), c)) return t.createDocumentFragment();
                                    for (var n = (e = e || f(t)).frag.cloneNode(), i = 0, o = d(), r = o.length; i < r; i++) n.createElement(o[i]);
                                    return n;
                                },
                                addElements: function (t, e) {
                                    var n = p.elements;
                                    "string" != typeof n && (n = n.join(" ")), "string" != typeof t && (t = t.join(" ")), (p.elements = n + " " + t), a(e);
                                },
                            };
                            (t.html5 = p), a(l), "object" == (void 0 === A ? "undefined" : E(A)) && A.exports && (A.exports = p);
                        })(void 0 !== f ? f : this, u);
                    var n = t._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
                    function w() {
                        return "function" != typeof u.createElement ? u.createElement(arguments[0]) : y ? u.createElementNS.call(u, "http://www.w3.org/2000/svg", arguments[0]) : u.createElement.apply(u, arguments);
                    }
                    function v(t, e, n, i) {
                        var o,
                            r,
                            s,
                            a,
                            l,
                            h = "modernizr",
                            c = w("div"),
                            d = ((l = u.body) || ((l = w(y ? "svg" : "body")).fake = !0), l);
                        if (parseInt(n, 10)) for (; n--; ) ((s = w("div")).id = i ? i[n] : h + (n + 1)), c.appendChild(s);
                        return (
                            ((o = w("style")).type = "text/css"),
                            (o.id = "s" + h),
                            (d.fake ? d : c).appendChild(o),
                            d.appendChild(c),
                            o.styleSheet ? (o.styleSheet.cssText = t) : o.appendChild(u.createTextNode(t)),
                            (c.id = h),
                            d.fake && ((d.style.background = ""), (d.style.overflow = "hidden"), (a = g.style.overflow), (g.style.overflow = "hidden"), g.appendChild(d)),
                            (r = e(c, t)),
                            d.fake ? (d.parentNode.removeChild(d), (g.style.overflow = a), g.offsetHeight) : c.parentNode.removeChild(c),
                            !!r
                        );
                    }
                    t._prefixes = n;
                    var i,
                        e = (i = f.matchMedia || f.msMatchMedia)
                            ? function (t) {
                                  var e = i(t);
                                  return (e && e.matches) || !1;
                              }
                            : function (t) {
                                  var e = !1;
                                  return (
                                      v("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
                                          e = "absolute" == (f.getComputedStyle ? f.getComputedStyle(t, null) : t.currentStyle).position;
                                      }),
                                      e
                                  );
                              };
                    t.mq = e;
                    var o = (t.testStyles = v);
                    h.addTest("touchevents", function () {
                        var e;
                        if ("ontouchstart" in f || (f.DocumentTouch && u instanceof DocumentTouch)) e = !0;
                        else {
                            var t = ["@media (", n.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                            o(t, function (t) {
                                e = 9 === t.offsetTop;
                            });
                        }
                        return e;
                    });
                    var r = "Moz O ms Webkit",
                        c = t._config.usePrefixes ? r.split(" ") : [];
                    t._cssomPrefixes = c;
                    var d = t._config.usePrefixes ? r.toLowerCase().split(" ") : [];
                    function b(t, e) {
                        return function () {
                            return t.apply(e, arguments);
                        };
                    }
                    t._domPrefixes = d;
                    var s = { elem: w("modernizr") };
                    h._q.push(function () {
                        delete s.elem;
                    });
                    var x = { style: s.elem.style };
                    function S(t) {
                        return t
                            .replace(/([A-Z])/g, function (t, e) {
                                return "-" + e.toLowerCase();
                            })
                            .replace(/^ms-/, "-ms-");
                    }
                    function C(t, e, n, i) {
                        if (((i = !m(i, "undefined") && i), !m(n, "undefined"))) {
                            var o = (function (t, e) {
                                var n = t.length;
                                if ("CSS" in f && "supports" in f.CSS) {
                                    for (; n--; ) if (f.CSS.supports(S(t[n]), e)) return !0;
                                    return !1;
                                }
                                if ("CSSSupportsRule" in f) {
                                    for (var i = []; n--; ) i.push("(" + S(t[n]) + ":" + e + ")");
                                    return v("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", function (t) {
                                        return "absolute" == getComputedStyle(t, null).position;
                                    });
                                }
                                return p;
                            })(t, n);
                            if (!m(o, "undefined")) return o;
                        }
                        for (var r, s, a, l, h, c = ["modernizr", "tspan"]; !x.style; ) (r = !0), (x.modElem = w(c.shift())), (x.style = x.modElem.style);
                        function d() {
                            r && (delete x.style, delete x.modElem);
                        }
                        for (a = t.length, s = 0; s < a; s++)
                            if (
                                ((l = t[s]),
                                (h = x.style[l]),
                                ~("" + l).indexOf("-") &&
                                    (l = l
                                        .replace(/([a-z])-([a-z])/g, function (t, e, n) {
                                            return e + n.toUpperCase();
                                        })
                                        .replace(/^-/, "")),
                                x.style[l] !== p)
                            ) {
                                if (i || m(n, "undefined")) return d(), "pfx" != e || l;
                                try {
                                    x.style[l] = n;
                                } catch (t) {}
                                if (x.style[l] != h) return d(), "pfx" != e || l;
                            }
                        return d(), !1;
                    }
                    function k(t, e, n, i, o) {
                        var r = t.charAt(0).toUpperCase() + t.slice(1),
                            s = (t + " " + c.join(r + " ") + r).split(" ");
                        return m(e, "string") || m(e, "undefined")
                            ? C(s, e, i, o)
                            : (function (t, e, n) {
                                  var i;
                                  for (var o in t) if (t[o] in e) return !1 === n ? t[o] : m((i = e[t[o]]), "function") ? b(i, n || e) : i;
                                  return !1;
                              })((s = (t + " " + d.join(r + " ") + r).split(" ")), e, n);
                    }
                    function z(t, e, n) {
                        return k(t, p, p, e, n);
                    }
                    h._q.unshift(function () {
                        delete x.style;
                    }),
                        (t.testAllProps = k),
                        (t.testAllProps = z),
                        h.addTest("csstransitions", z("transition", "all", !0)),
                        (function () {
                            var t, e, n, i, o, r;
                            for (var s in l)
                                if (l.hasOwnProperty(s)) {
                                    if (((t = []), (e = l[s]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)))
                                        for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
                                    for (i = m(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++)
                                        1 === (r = t[o].split(".")).length ? (h[r[0]] = i) : (!h[r[0]] || h[r[0]] instanceof Boolean || (h[r[0]] = new Boolean(h[r[0]])), (h[r[0]][r[1]] = i)), a.push((i ? "" : "no-") + r.join("-"));
                                }
                        })(),
                        (function (t) {
                            var e = g.className,
                                n = h._config.classPrefix || "";
                            if ((y && (e = e.baseVal), h._config.enableJSClass)) {
                                var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                                e = e.replace(i, "$1" + n + "js$2");
                            }
                            h._config.enableClasses && ((e += " " + n + t.join(" " + n)), y ? (g.className.baseVal = e) : (g.className = e));
                        })(a),
                        delete t.addTest,
                        delete t.addAsyncTest;
                    for (var T = 0; T < h._q.length; T++) h._q[T]();
                    f.Modernizr = h;
                })(window, document),
                    (function (a, s, t) {
                        (a.fn.backstretch = function (n, i) {
                            return (
                                (void 0 !== n && 0 !== n.length) || a.error("No images were supplied for Backstretch"),
                                0 === a(s).scrollTop() && s.scrollTo(0, 0),
                                this.each(function () {
                                    var t = a(this),
                                        e = t.data("backstretch");
                                    if (e) {
                                        if ("string" == typeof n && "function" == typeof e[n]) return void e[n](i);
                                        (i = a.extend(e.options, i)), e.destroy(!0);
                                    }
                                    (e = new o(this, n, i)), t.data("backstretch", e);
                                })
                            );
                        }),
                            (a.backstretch = function (t, e) {
                                return a("body").backstretch(t, e).data("backstretch");
                            }),
                            (a.expr[":"].backstretch = function (t) {
                                return void 0 !== a(t).data("backstretch");
                            }),
                            (a.fn.backstretch.defaults = { centeredX: !0, centeredY: !0, duration: 5e3, fade: 0 });
                        var l = { left: 0, top: 0, overflow: "hidden", margin: 0, padding: 0, height: "100%", width: "100%", zIndex: -999999 },
                            e = { position: "absolute", display: "none", margin: 0, padding: 0, border: "none", width: "auto", height: "auto", maxHeight: "none", maxWidth: "none", zIndex: -999999 },
                            o = function (t, e, n) {
                                (this.options = a.extend({}, a.fn.backstretch.defaults, n || {})),
                                    (this.images = a.isArray(e) ? e : [e]),
                                    a.each(this.images, function () {
                                        a("<img />")[0].src = this;
                                    }),
                                    (this.isBody = t === document.body),
                                    (this.$container = a(t)),
                                    (this.$root = this.isBody ? a(g ? s : document) : this.$container);
                                var i = this.$container.children(".backstretch").first();
                                if (((this.$wrap = i.length ? i : a('<div class="backstretch"></div>').css(l).appendTo(this.$container)), !this.isBody)) {
                                    var o = this.$container.css("position"),
                                        r = this.$container.css("zIndex");
                                    this.$container.css({ position: "static" === o ? "relative" : o, zIndex: "auto" === r ? 0 : r, background: "none" }), this.$wrap.css({ zIndex: -999998 });
                                }
                                this.$wrap.css({ position: this.isBody && g ? "fixed" : "absolute" }),
                                    (this.index = 0),
                                    this.show(this.index),
                                    a(s)
                                        .on("resize.backstretch", a.proxy(this.resize, this))
                                        .on(
                                            "orientationchange.backstretch",
                                            a.proxy(function () {
                                                this.isBody && 0 === s.pageYOffset && (s.scrollTo(0, 1), this.resize());
                                            }, this)
                                        );
                            };
                        o.prototype = {
                            resize: function () {
                                try {
                                    var t,
                                        e = { left: 0, top: 0 },
                                        n = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                                        i = n,
                                        o = this.isBody ? (s.innerHeight ? s.innerHeight : this.$root.height()) : this.$root.innerHeight(),
                                        r = i / this.$img.data("ratio");
                                    o <= r ? ((t = (r - o) / 2), this.options.centeredY && (e.top = "-" + t + "px")) : ((t = ((i = (r = o) * this.$img.data("ratio")) - n) / 2), this.options.centeredX && (e.left = "-" + t + "px")),
                                        this.$wrap.css({ width: n, height: o }).find("img:not(.deleteable)").css({ width: i, height: r }).css(e);
                                } catch (t) {}
                                return this;
                            },
                            show: function (i) {
                                if (!(Math.abs(i) > this.images.length - 1)) {
                                    var o = this,
                                        r = o.$wrap.find("img").addClass("deleteable"),
                                        s = { relatedTarget: o.$container[0] };
                                    return (
                                        o.$container.trigger(a.Event("backstretch.before", s), [o, i]),
                                        (this.index = i),
                                        clearInterval(o.interval),
                                        (o.$img = a("<img />")
                                            .css(e)
                                            .bind("load", function (t) {
                                                var e = this.width || a(t.target).width(),
                                                    n = this.height || a(t.target).height();
                                                a(this).data("ratio", e / n),
                                                    a(this).fadeIn(o.options.speed || o.options.fade, function () {
                                                        r.remove(),
                                                            o.paused || o.cycle(),
                                                            a(["after", "show"]).each(function () {
                                                                o.$container.trigger(a.Event("backstretch." + this, s), [o, i]);
                                                            });
                                                    }),
                                                    o.resize();
                                            })
                                            .appendTo(o.$wrap)),
                                        o.$img.attr("src", o.images[i]),
                                        o
                                    );
                                }
                            },
                            next: function () {
                                return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
                            },
                            prev: function () {
                                return this.show(0 === this.index ? this.images.length - 1 : this.index - 1);
                            },
                            pause: function () {
                                return (this.paused = !0), this;
                            },
                            resume: function () {
                                return (this.paused = !1), this.next(), this;
                            },
                            cycle: function () {
                                return (
                                    1 < this.images.length &&
                                        (clearInterval(this.interval),
                                        (this.interval = setInterval(
                                            a.proxy(function () {
                                                this.paused || this.next();
                                            }, this),
                                            this.options.duration
                                        ))),
                                    this
                                );
                            },
                            destroy: function (t) {
                                a(s).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), t || this.$wrap.remove(), this.$container.removeData("backstretch");
                            },
                        };
                        var n,
                            i,
                            r,
                            h,
                            c,
                            d,
                            f,
                            u,
                            p,
                            m,
                            g =
                                ((n = navigator.userAgent),
                                (i = navigator.platform),
                                (r = n.match(/AppleWebKit\/([0-9]+)/)),
                                (h = !!r && r[1]),
                                (c = n.match(/Fennec\/([0-9]+)/)),
                                (d = !!c && c[1]),
                                (f = n.match(/Opera Mobi\/([0-9]+)/)),
                                (u = !!f && f[1]),
                                (p = n.match(/MSIE ([0-9]+)/)),
                                (m = !!p && p[1]),
                                !(
                                    ((-1 < i.indexOf("iPhone") || -1 < i.indexOf("iPad") || -1 < i.indexOf("iPod")) && h && h < 534) ||
                                    (s.operamini && "[object OperaMini]" === {}.toString.call(s.operamini)) ||
                                    (f && u < 7458) ||
                                    (-1 < n.indexOf("Android") && h && h < 533) ||
                                    (d && d < 6) ||
                                    ("palmGetResource" in s && h && h < 534) ||
                                    (-1 < n.indexOf("MeeGo") && -1 < n.indexOf("NokiaBrowser/8.5.0")) ||
                                    (m && m <= 6)
                                ));
                    })(jQuery, window),
                    (function () {
                        var e = 0,
                            r = {};
                        function n(t) {
                            if (!t) throw new Error("No options passed to Waypoint constructor");
                            if (!t.element) throw new Error("No element option passed to Waypoint constructor");
                            if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
                            (this.key = "waypoint-" + e),
                                (this.options = n.Adapter.extend({}, n.defaults, t)),
                                (this.element = this.options.element),
                                (this.adapter = new n.Adapter(this.element)),
                                (this.callback = t.handler),
                                (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
                                (this.enabled = this.options.enabled),
                                (this.triggerPoint = null),
                                (this.group = n.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
                                (this.context = n.Context.findOrCreateByElement(this.options.context)),
                                n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]),
                                this.group.add(this),
                                this.context.add(this),
                                (r[this.key] = this),
                                (e += 1);
                        }
                        (n.prototype.queueTrigger = function (t) {
                            this.group.queueTrigger(this, t);
                        }),
                            (n.prototype.trigger = function (t) {
                                this.enabled && this.callback && this.callback.apply(this, t);
                            }),
                            (n.prototype.destroy = function () {
                                this.context.remove(this), this.group.remove(this), delete r[this.key];
                            }),
                            (n.prototype.disable = function () {
                                return (this.enabled = !1), this;
                            }),
                            (n.prototype.enable = function () {
                                return this.context.refresh(), (this.enabled = !0), this;
                            }),
                            (n.prototype.next = function () {
                                return this.group.next(this);
                            }),
                            (n.prototype.previous = function () {
                                return this.group.previous(this);
                            }),
                            (n.invokeAll = function (t) {
                                var e = [];
                                for (var n in r) e.push(r[n]);
                                for (var i = 0, o = e.length; i < o; i++) e[i][t]();
                            }),
                            (n.destroyAll = function () {
                                n.invokeAll("destroy");
                            }),
                            (n.disableAll = function () {
                                n.invokeAll("disable");
                            }),
                            (n.enableAll = function () {
                                n.invokeAll("enable");
                            }),
                            (n.refreshAll = function () {
                                n.Context.refreshAll();
                            }),
                            (n.viewportHeight = function () {
                                return window.innerHeight || document.documentElement.clientHeight;
                            }),
                            (n.viewportWidth = function () {
                                return document.documentElement.clientWidth;
                            }),
                            (n.adapters = []),
                            (n.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }),
                            (n.offsetAliases = {
                                "bottom-in-view": function () {
                                    return this.context.innerHeight() - this.adapter.outerHeight();
                                },
                                "right-in-view": function () {
                                    return this.context.innerWidth() - this.adapter.outerWidth();
                                },
                            }),
                            (window.Waypoint = n);
                    })(),
                    (function () {
                        function e(t) {
                            window.setTimeout(t, 1e3 / 60);
                        }
                        var n = 0,
                            i = {},
                            g = window.Waypoint,
                            t = window.onload;
                        function o(t) {
                            (this.element = t),
                                (this.Adapter = g.Adapter),
                                (this.adapter = new this.Adapter(t)),
                                (this.key = "waypoint-context-" + n),
                                (this.didScroll = !1),
                                (this.didResize = !1),
                                (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
                                (this.waypoints = { vertical: {}, horizontal: {} }),
                                (t.waypointContextKey = this.key),
                                (i[t.waypointContextKey] = this),
                                (n += 1),
                                this.createThrottledScrollHandler(),
                                this.createThrottledResizeHandler();
                        }
                        (o.prototype.add = function (t) {
                            var e = t.options.horizontal ? "horizontal" : "vertical";
                            (this.waypoints[e][t.key] = t), this.refresh();
                        }),
                            (o.prototype.checkEmpty = function () {
                                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                                    e = this.Adapter.isEmptyObject(this.waypoints.vertical);
                                t && e && (this.adapter.off(".waypoints"), delete i[this.key]);
                            }),
                            (o.prototype.createThrottledResizeHandler = function () {
                                var t = this;
                                function e() {
                                    t.handleResize(), (t.didResize = !1);
                                }
                                this.adapter.on("resize.waypoints", function () {
                                    t.didResize || ((t.didResize = !0), g.requestAnimationFrame(e));
                                });
                            }),
                            (o.prototype.createThrottledScrollHandler = function () {
                                var t = this;
                                function e() {
                                    t.handleScroll(), (t.didScroll = !1);
                                }
                                this.adapter.on("scroll.waypoints", function () {
                                    (t.didScroll && !g.isTouch) || ((t.didScroll = !0), g.requestAnimationFrame(e));
                                });
                            }),
                            (o.prototype.handleResize = function () {
                                g.Context.refreshAll();
                            }),
                            (o.prototype.handleScroll = function () {
                                var t = {},
                                    e = {
                                        horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" },
                                        vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" },
                                    };
                                for (var n in e) {
                                    var i = e[n],
                                        o = i.newScroll > i.oldScroll ? i.forward : i.backward;
                                    for (var r in this.waypoints[n]) {
                                        var s = this.waypoints[n][r],
                                            a = i.oldScroll < s.triggerPoint,
                                            l = i.newScroll >= s.triggerPoint;
                                        ((a && l) || (!a && !l)) && (s.queueTrigger(o), (t[s.group.id] = s.group));
                                    }
                                }
                                for (var h in t) t[h].flushTriggers();
                                this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
                            }),
                            (o.prototype.innerHeight = function () {
                                return this.element == this.element.window ? g.viewportHeight() : this.adapter.innerHeight();
                            }),
                            (o.prototype.remove = function (t) {
                                delete this.waypoints[t.axis][t.key], this.checkEmpty();
                            }),
                            (o.prototype.innerWidth = function () {
                                return this.element == this.element.window ? g.viewportWidth() : this.adapter.innerWidth();
                            }),
                            (o.prototype.destroy = function () {
                                var t = [];
                                for (var e in this.waypoints) for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
                                for (var i = 0, o = t.length; i < o; i++) t[i].destroy();
                            }),
                            (o.prototype.refresh = function () {
                                var t,
                                    e = this.element == this.element.window,
                                    n = e ? void 0 : this.adapter.offset(),
                                    i = {};
                                for (var o in (this.handleScroll(),
                                (t = {
                                    horizontal: {
                                        contextOffset: e ? 0 : n.left,
                                        contextScroll: e ? 0 : this.oldScroll.x,
                                        contextDimension: this.innerWidth(),
                                        oldScroll: this.oldScroll.x,
                                        forward: "right",
                                        backward: "left",
                                        offsetProp: "left",
                                    },
                                    vertical: { contextOffset: e ? 0 : n.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" },
                                }))) {
                                    var r = t[o];
                                    for (var s in this.waypoints[o]) {
                                        var a,
                                            l,
                                            h,
                                            c,
                                            d = this.waypoints[o][s],
                                            f = d.options.offset,
                                            u = d.triggerPoint,
                                            p = 0,
                                            m = null == u;
                                        d.element !== d.element.window && (p = d.adapter.offset()[r.offsetProp]),
                                            "function" == typeof f ? (f = f.apply(d)) : "string" == typeof f && ((f = parseFloat(f)), -1 < d.options.offset.indexOf("%") && (f = Math.ceil((r.contextDimension * f) / 100))),
                                            (a = r.contextScroll - r.contextOffset),
                                            (d.triggerPoint = p + a - f),
                                            (l = u < r.oldScroll),
                                            (h = d.triggerPoint >= r.oldScroll),
                                            (c = !l && !h),
                                            !m && l && h
                                                ? (d.queueTrigger(r.backward), (i[d.group.id] = d.group))
                                                : !m && c
                                                ? (d.queueTrigger(r.forward), (i[d.group.id] = d.group))
                                                : m && r.oldScroll >= d.triggerPoint && (d.queueTrigger(r.forward), (i[d.group.id] = d.group));
                                    }
                                }
                                return (
                                    g.requestAnimationFrame(function () {
                                        for (var t in i) i[t].flushTriggers();
                                    }),
                                    this
                                );
                            }),
                            (o.findOrCreateByElement = function (t) {
                                return o.findByElement(t) || new o(t);
                            }),
                            (o.refreshAll = function () {
                                for (var t in i) i[t].refresh();
                            }),
                            (o.findByElement = function (t) {
                                return i[t.waypointContextKey];
                            }),
                            (window.onload = function () {
                                t && t(), o.refreshAll();
                            }),
                            (g.requestAnimationFrame = function (t) {
                                (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t);
                            }),
                            (g.Context = o);
                    })(),
                    (function () {
                        function s(t, e) {
                            return t.triggerPoint - e.triggerPoint;
                        }
                        function a(t, e) {
                            return e.triggerPoint - t.triggerPoint;
                        }
                        var e = { vertical: {}, horizontal: {} },
                            n = window.Waypoint;
                        function i(t) {
                            (this.name = t.name), (this.axis = t.axis), (this.id = this.name + "-" + this.axis), (this.waypoints = []), this.clearTriggerQueues(), (e[this.axis][this.name] = this);
                        }
                        (i.prototype.add = function (t) {
                            this.waypoints.push(t);
                        }),
                            (i.prototype.clearTriggerQueues = function () {
                                this.triggerQueues = { up: [], down: [], left: [], right: [] };
                            }),
                            (i.prototype.flushTriggers = function () {
                                for (var t in this.triggerQueues) {
                                    var e = this.triggerQueues[t],
                                        n = "up" === t || "left" === t;
                                    e.sort(n ? a : s);
                                    for (var i = 0, o = e.length; i < o; i += 1) {
                                        var r = e[i];
                                        (r.options.continuous || i === e.length - 1) && r.trigger([t]);
                                    }
                                }
                                this.clearTriggerQueues();
                            }),
                            (i.prototype.next = function (t) {
                                this.waypoints.sort(s);
                                var e = n.Adapter.inArray(t, this.waypoints);
                                return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1];
                            }),
                            (i.prototype.previous = function (t) {
                                this.waypoints.sort(s);
                                var e = n.Adapter.inArray(t, this.waypoints);
                                return e ? this.waypoints[e - 1] : null;
                            }),
                            (i.prototype.queueTrigger = function (t, e) {
                                this.triggerQueues[e].push(t);
                            }),
                            (i.prototype.remove = function (t) {
                                var e = n.Adapter.inArray(t, this.waypoints);
                                -1 < e && this.waypoints.splice(e, 1);
                            }),
                            (i.prototype.first = function () {
                                return this.waypoints[0];
                            }),
                            (i.prototype.last = function () {
                                return this.waypoints[this.waypoints.length - 1];
                            }),
                            (i.findOrCreate = function (t) {
                                return e[t.axis][t.name] || new i(t);
                            }),
                            (n.Group = i);
                    })(),
                    (function () {
                        var n = window.jQuery,
                            t = window.Waypoint;
                        function i(t) {
                            this.$element = n(t);
                        }
                        n.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, e) {
                            i.prototype[e] = function () {
                                var t = Array.prototype.slice.call(arguments);
                                return this.$element[e].apply(this.$element, t);
                            };
                        }),
                            n.each(["extend", "inArray", "isEmptyObject"], function (t, e) {
                                i[e] = n[e];
                            }),
                            t.adapters.push({ name: "jquery", Adapter: i }),
                            (t.Adapter = i);
                    })(),
                    (function () {
                        var o = window.Waypoint;
                        function t(i) {
                            return function () {
                                var e = [],
                                    n = arguments[0];
                                return (
                                    i.isFunction(arguments[0]) && ((n = i.extend({}, arguments[1])).handler = arguments[0]),
                                    this.each(function () {
                                        var t = i.extend({}, n, { element: this });
                                        "string" == typeof t.context && (t.context = i(this).closest(t.context)[0]), e.push(new o(t));
                                    }),
                                    e
                                );
                            };
                        }
                        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
                    })(),
                    (s = self.jQuery)(document).ready(function () {
                        var e;
                        0 < s(".boxed .fullscreen-bg").length && s("body").addClass("transparent-page-wrapper"),
                            s(window).load(function () {
                                s("body").removeClass("no-trans");
                            }),
                            s("html").niceScroll && s("html").niceScroll(),
                            ((Modernizr.mq("only all and (min-width: 768px)") && !Modernizr.touch) || 0 < s("html.ie8").length) &&
                                s(".main-navigation:not(.onclick) .navbar-nav>li.dropdown, .main-navigation:not(.onclick) li.dropdown>ul>li.dropdown").hover(
                                    function () {
                                        var t = s(this);
                                        e = setTimeout(function () {
                                            t.addClass("open").slideDown(), t.find(".dropdown-toggle").addClass("disabled");
                                        }, 0);
                                    },
                                    function () {
                                        clearTimeout(e), s(this).removeClass("open"), s(this).find(".dropdown-toggle").removeClass("disabled");
                                    }
                                ),
                            (Modernizr.mq("only all and (max-width: 767px)") || Modernizr.touch || 0 < s(".main-navigation.onclick").length) &&
                                s(".main-navigation [data-toggle=dropdown], .header-top [data-toggle=dropdown]").on("click", function (t) {
                                    t.preventDefault(),
                                        t.stopPropagation(),
                                        s(this).parent().siblings().removeClass("open"),
                                        s(this).parent().siblings().find("[data-toggle=dropdown]").parent().removeClass("open"),
                                        s(this).parent().toggleClass("open");
                                });
                        var t,
                            n = s(".header-top").outerHeight(),
                            i = s("header.header.fixed").outerHeight();
                        s(window).resize(function () {
                            s(this).scrollTop() < n + i - 5 && 767 < s(window).width() && ((n = s(".header-top").outerHeight()), (i = s("header.header.fixed").outerHeight()));
                        }),
                            s(window).scroll(function () {
                                0 < s(".header.fixed").length && !(0 < s(".transparent-header .slideshow").length)
                                    ? s(this).scrollTop() > n + i && 767 < s(window).width()
                                        ? (s("body").addClass("fixed-header-on"), s(".header.fixed").addClass("animated object-visible fadeInDown"))
                                        : (s("body").removeClass("fixed-header-on"), s(".header.fixed").removeClass("animated object-visible fadeInDown"))
                                    : 0 < s(".header.fixed").length &&
                                      (s(this).scrollTop() > n + i && 767 < s(window).width()
                                          ? (s("body").addClass("fixed-header-on"), s(".header.fixed").addClass("animated object-visible fadeInDown"))
                                          : (s("body").removeClass("fixed-header-on"), s(".header.fixed").removeClass("animated object-visible fadeInDown")));
                            }),
                            s(this).waypoint &&
                                0 < s("[data-animation-effect]").length &&
                                s("[data-animation-effect]").each(function () {
                                    Modernizr.csstransitions && Modernizr.mq("only all and (min-width: 768px)")
                                        ? s(this).waypoint(
                                              function (t) {
                                                  var e = s(this.element).attr("data-effect-delay"),
                                                      n = s(this.element);
                                                  setTimeout(function () {
                                                      n.addClass("animated object-visible " + n.attr("data-animation-effect"));
                                                  }, e),
                                                      this.destroy();
                                              },
                                              { offset: "100%" }
                                          )
                                        : s(this).addClass("object-visible");
                                }),
                            0 < s(".affix-menu").length &&
                                setTimeout(function () {
                                    var e = s(".sidebar");
                                    e.affix({
                                        offset: {
                                            top: function () {
                                                var t = e.offset().top;
                                                return (this.top = t - 65);
                                            },
                                            bottom: function () {
                                                var t = s(".footer").outerHeight(!0) + s(".subfooter").outerHeight(!0);
                                                return 0 < s(".footer-top").length && (t += s(".footer-top").outerHeight(!0)), (this.bottom = t + 50);
                                            },
                                        },
                                    });
                                }, 100),
                            0 < s(".scrollspy").length &&
                                (s("body").addClass("scroll-spy"), 0 < s(".fixed.header").length ? s("body").scrollspy({ target: ".scrollspy", offset: 85 }) : s("body").scrollspy({ target: ".scrollspy", offset: 20 })),
                            0 < s(".smooth-scroll").length &&
                                (0 < s(".header.fixed").length && Modernizr.mq("only all and (min-width: 768px)")
                                    ? s(".smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll").click(function () {
                                          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                                              var t = s(this.hash);
                                              if ((t = t.length ? t : s("[name=" + this.hash.slice(1) + "]")).length) return s("html,body").animate({ scrollTop: t.offset().top - 64 }, 1e3), !1;
                                          }
                                      })
                                    : s(".smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll").click(function () {
                                          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                                              var t = s(this.hash);
                                              if ((t = t.length ? t : s("[name=" + this.hash.slice(1) + "]")).length) return s("html,body").animate({ scrollTop: t.offset().top }, 1e3), !1;
                                          }
                                      })),
                            (t = void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1);
                        var o = s(window).width() * t,
                            r = "./images/bg/bg-" + (o < 1200 ? "1200" : o < 1400 ? "1400" : o < 1920 ? "1920" : o < 2200 ? "2200" : o < 2500 ? "2500" : o < 3e3 ? "3000" : o < 3500 ? "3500" : "4000") + ".jpg";
                        s.backstretch(r, { fade: 300 }),
                            s(window).on("backstretch.after", function (t, e, n) {
                                s("body > img:not([alt])").attr("alt", "");
                            });
                    });
            },
            {},
        ],
    },
    {},
    [1]
);
