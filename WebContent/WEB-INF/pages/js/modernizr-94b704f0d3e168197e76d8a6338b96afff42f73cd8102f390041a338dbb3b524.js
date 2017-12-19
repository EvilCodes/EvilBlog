window.Modernizr = function(e, t, n) {
	function i(e) {
		y.cssText = e
	}

	function r(e, t) {
		return i(C.join(e + ";") + (t || ""))
	}

	function o(e, t) {
		return typeof e === t
	}

	function s(e, t) {
		return !!~("" + e).indexOf(t)
	}

	function a(e, t) {
		for (var i in e) {
			var r = e[i];
			if (!s(r, "-") && y[r] !== n) return "pfx" == t ? r : !0
		}
		return !1
	}

	function l(e, t, i) {
		for (var r in e) {
			var s = t[e[r]];
			if (s !== n) return i === !1 ? e[r] : o(s, "function") ? s.bind(i || t) : s
		}
		return !1
	}

	function c(e, t, n) {
		var i = e.charAt(0).toUpperCase() + e.slice(1),
			r = (e + " " + S.join(i + " ") + i).split(" ");
		return o(t, "string") || o(t, "undefined") ? a(r, t) : (r = (e + " " + T.join(i + " ") + i).split(" "), l(r, t, n))
	}

	function u() {
		f.input = function(n) {
			for (var i = 0, r = n.length; r > i; i++) D[n[i]] = !!(n[i] in w);
			return D.list && (D.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), D
		}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(e) {
			for (var i, r, o, s = 0, a = e.length; a > s; s++) w.setAttribute("type", r = e[s]), i = "text" !== w.type, i && (w.value = _, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && w.style.WebkitAppearance !== n ? (g.appendChild(w), o = t.defaultView, i = o.getComputedStyle && "textfield" !== o.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? w.checkValidity && w.checkValidity() === !1 : w.value != _)), N[e[s]] = !!i;
			return N
		}("search tel url email datetime date month week time datetime-local number range color".split(" "))
	}
	var h, d, p = "2.7.1",
		f = {},
		m = !0,
		g = t.documentElement,
		v = "modernizr",
		b = t.createElement(v),
		y = b.style,
		w = t.createElement("input"),
		_ = ":)",
		x = {}.toString,
		C = " -webkit- -moz- -o- -ms- ".split(" "),
		k = "Webkit Moz O ms",
		S = k.split(" "),
		T = k.toLowerCase().split(" "),
		E = {
			svg: "http://www.w3.org/2000/svg"
		},
		A = {},
		N = {},
		D = {},
		M = [],
		I = M.slice,
		P = function(e, n, i, r) {
			var o, s, a, l, c = t.createElement("div"),
				u = t.body,
				h = u || t.createElement("body");
			if (parseInt(i, 10))
				for (; i--;) a = t.createElement("div"), a.id = r ? r[i] : v + (i + 1), c.appendChild(a);
			return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), c.id = v, (u ? c : h).innerHTML += o, h.appendChild(c), u || (h.style.background = "", h.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(h)), s = n(c, e), u ? c.parentNode.removeChild(c) : (h.parentNode.removeChild(h), g.style.overflow = l), !!s
		},
		L = function(t) {
			var n = e.matchMedia || e.msMatchMedia;
			if (n) return n(t).matches;
			var i;
			return P("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
				i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
			}), i
		},
		R = function() {
			function e(e, r) {
				r = r || t.createElement(i[e] || "div"), e = "on" + e;
				var s = e in r;
				return s || (r.setAttribute || (r = t.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(e, ""), s = o(r[e], "function"), o(r[e], "undefined") || (r[e] = n), r.removeAttribute(e))), r = null, s
			}
			var i = {
				select: "input",
				change: "input",
				submit: "form",
				reset: "form",
				error: "img",
				load: "img",
				abort: "img"
			};
			return e
		}(),
		O = {}.hasOwnProperty;
	d = o(O, "undefined") || o(O.call, "undefined") ? function(e, t) {
		return t in e && o(e.constructor.prototype[t], "undefined")
	} : function(e, t) {
		return O.call(e, t)
	}, Function.prototype.bind || (Function.prototype.bind = function(e) {
		var t = this;
		if ("function" != typeof t) throw new TypeError;
		var n = I.call(arguments, 1),
			i = function() {
				if (this instanceof i) {
					var r = function() {};
					r.prototype = t.prototype;
					var o = new r,
						s = t.apply(o, n.concat(I.call(arguments)));
					return Object(s) === s ? s : o
				}
				return t.apply(e, n.concat(I.call(arguments)))
			};
		return i
	}), A.flexbox = function() {
		return c("flexWrap")
	}, A.flexboxlegacy = function() {
		return c("boxDirection")
	}, A.canvas = function() {
		var e = t.createElement("canvas");
		return !(!e.getContext || !e.getContext("2d"))
	}, A.canvastext = function() {
		return !(!f.canvas || !o(t.createElement("canvas").getContext("2d").fillText, "function"))
	}, A.webgl = function() {
		return !!e.WebGLRenderingContext
	}, A.touch = function() {
		var n;
		return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : P(["@media (", C.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
			n = 9 === e.offsetTop
		}), n
	}, A.geolocation = function() {
		return "geolocation" in navigator
	}, A.postmessage = function() {
		return !!e.postMessage
	}, A.websqldatabase = function() {
		return !!e.openDatabase
	}, A.indexedDB = function() {
		return !!c("indexedDB", e)
	}, A.hashchange = function() {
		return R("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
	}, A.history = function() {
		return !(!e.history || !history.pushState)
	}, A.draganddrop = function() {
		var e = t.createElement("div");
		return "draggable" in e || "ondragstart" in e && "ondrop" in e
	}, A.websockets = function() {
		return "WebSocket" in e || "MozWebSocket" in e
	}, A.rgba = function() {
		return i("background-color:rgba(150,255,150,.5)"), s(y.backgroundColor, "rgba")
	}, A.hsla = function() {
		return i("background-color:hsla(120,40%,100%,.5)"), s(y.backgroundColor, "rgba") || s(y.backgroundColor, "hsla")
	}, A.multiplebgs = function() {
		return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(y.background)
	}, A.backgroundsize = function() {
		return c("backgroundSize")
	}, A.borderimage = function() {
		return c("borderImage")
	}, A.borderradius = function() {
		return c("borderRadius")
	}, A.boxshadow = function() {
		return c("boxShadow")
	}, A.textshadow = function() {
		return "" === t.createElement("div").style.textShadow
	}, A.opacity = function() {
		return r("opacity:.55"), /^0.55$/.test(y.opacity)
	}, A.cssanimations = function() {
		return c("animationName")
	}, A.csscolumns = function() {
		return c("columnCount")
	}, A.cssgradients = function() {
		var e = "background-image:",
			t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
			n = "linear-gradient(left top,#9f9, white);";
		return i((e + "-webkit- ".split(" ").join(t + e) + C.join(n + e)).slice(0, -e.length)), s(y.backgroundImage, "gradient")
	}, A.cssreflections = function() {
		return c("boxReflect")
	}, A.csstransforms = function() {
		return !!c("transform")
	}, A.csstransforms3d = function() {
		var e = !!c("perspective");
		return e && "webkitPerspective" in g.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
			e = 9 === t.offsetLeft && 3 === t.offsetHeight
		}), e
	}, A.csstransitions = function() {
		return c("transition")
	}, A.fontface = function() {
		var e;
		return P('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
			var r = t.getElementById("smodernizr"),
				o = r.sheet || r.styleSheet,
				s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
			e = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
		}), e
	}, A.generatedcontent = function() {
		var e;
		return P(["#", v, "{font:0/0 a}#", v, ':after{content:"', _, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
			e = t.offsetHeight >= 3
		}), e
	}, A.video = function() {
		var e = t.createElement("video"),
			n = !1;
		try {
			(n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
		} catch (i) {}
		return n
	}, A.audio = function() {
		var e = t.createElement("audio"),
			n = !1;
		try {
			(n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
		} catch (i) {}
		return n
	}, A.localstorage = function() {
		try {
			return localStorage.setItem(v, v), localStorage.removeItem(v), !0
		} catch (e) {
			return !1
		}
	}, A.sessionstorage = function() {
		try {
			return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
		} catch (e) {
			return !1
		}
	}, A.webworkers = function() {
		return !!e.Worker
	}, A.applicationcache = function() {
		return !!e.applicationCache
	}, A.svg = function() {
		return !!t.createElementNS && !!t.createElementNS(E.svg, "svg").createSVGRect
	}, A.inlinesvg = function() {
		var e = t.createElement("div");
		return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == E.svg
	}, A.smil = function() {
		return !!t.createElementNS && /SVGAnimate/.test(x.call(t.createElementNS(E.svg, "animate")))
	}, A.svgclippaths = function() {
		return !!t.createElementNS && /SVGClipPath/.test(x.call(t.createElementNS(E.svg, "clipPath")))
	};
	for (var B in A) d(A, B) && (h = B.toLowerCase(), f[h] = A[B](), M.push((f[h] ? "" : "no-") + h));
	return f.input || u(), f.addTest = function(e, t) {
			if ("object" == typeof e)
				for (var i in e) d(e, i) && f.addTest(i, e[i]);
			else {
				if (e = e.toLowerCase(), f[e] !== n) return f;
				t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (g.className += " " + (t ? "" : "no-") + e), f[e] = t
			}
			return f
		}, i(""), b = w = null,
		function(e, t) {
			function n(e, t) {
				var n = e.createElement("p"),
					i = e.getElementsByTagName("head")[0] || e.documentElement;
				return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
			}

			function i() {
				var e = b.elements;
				return "string" == typeof e ? e.split(" ") : e
			}

			function r(e) {
				var t = v[e[m]];
				return t || (t = {}, g++, e[m] = g, v[g] = t), t
			}

			function o(e, n, i) {
				if (n || (n = t), u) return n.createElement(e);
				i || (i = r(n));
				var o;
				return o = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !o.canHaveChildren || p.test(e) || o.tagUrn ? o : i.frag.appendChild(o)
			}

			function s(e, n) {
				if (e || (e = t), u) return e.createDocumentFragment();
				n = n || r(e);
				for (var o = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++) o.createElement(a[s]);
				return o
			}

			function a(e, t) {
				t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
					return b.shivMethods ? o(n, e, t) : t.createElem(n)
				}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) {
					return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
				}) + ");return n}")(b, t.frag)
			}

			function l(e) {
				e || (e = t);
				var i = r(e);
				return !b.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || a(e, i), e
			}
			var c, u, h = "3.7.0",
				d = e.html5 || {},
				p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
				f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
				m = "_html5shiv",
				g = 0,
				v = {};
			! function() {
				try {
					var e = t.createElement("a");
					e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
						t.createElement("a");
						var e = t.createDocumentFragment();
						return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
					}()
				} catch (n) {
					c = !0, u = !0
				}
			}();
			var b = {
				elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
				version: h,
				shivCSS: d.shivCSS !== !1,
				supportsUnknownElements: u,
				shivMethods: d.shivMethods !== !1,
				type: "default",
				shivDocument: l,
				createElement: o,
				createDocumentFragment: s
			};
			e.html5 = b, l(t)
		}(this, t), f._version = p, f._prefixes = C, f._domPrefixes = T, f._cssomPrefixes = S, f.mq = L, f.hasEvent = R, f.testProp = function(e) {
			return a([e])
		}, f.testAllProps = c, f.testStyles = P, f.prefixed = function(e, t, n) {
			return t ? c(e, t, n) : c(e, "pfx")
		}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + M.join(" ") : ""), f
}(this, this.document);