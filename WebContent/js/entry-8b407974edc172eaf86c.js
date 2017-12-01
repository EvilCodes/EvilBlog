webpackJsonp([8], {
	"../../../../shared/node_modules/axios/index.js": function(e, t, o) {
		e.exports = o("../../../../shared/node_modules/axios/lib/axios.js")
	},
	"../../../../shared/node_modules/axios/lib/adapters/xhr.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/axios/lib/utils.js"),
			r = o("../../../../shared/node_modules/axios/lib/core/settle.js"),
			s = o("../../../../shared/node_modules/axios/lib/helpers/buildURL.js"),
			i = o("../../../../shared/node_modules/axios/lib/helpers/parseHeaders.js"),
			a = o("../../../../shared/node_modules/axios/lib/helpers/isURLSameOrigin.js"),
			l = o("../../../../shared/node_modules/axios/lib/core/createError.js"),
			u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || o("../../../../shared/node_modules/axios/lib/helpers/btoa.js");
		e.exports = function(e) {
			return new Promise(function(t, d) {
				var c = e.data,
					f = e.headers;
				n.isFormData(c) && delete f["Content-Type"];
				var p = new XMLHttpRequest,
					h = "onreadystatechange",
					m = !1;
				if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || a(e.url) || (p = new window.XDomainRequest, h = "onload", m = !0, p.onprogress = function() {}, p.ontimeout = function() {}), e.auth) {
					var b = e.auth.username || "",
						g = e.auth.password || "";
					f.Authorization = "Basic " + u(b + ":" + g)
				}
				if (p.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[h] = function() {
						if (p && (4 === p.readyState || m) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
							var o = "getAllResponseHeaders" in p ? i(p.getAllResponseHeaders()) : null,
								n = e.responseType && "text" !== e.responseType ? p.response : p.responseText,
								s = {
									data: n,
									status: 1223 === p.status ? 204 : p.status,
									statusText: 1223 === p.status ? "No Content" : p.statusText,
									headers: o,
									config: e,
									request: p
								};
							r(t, d, s), p = null
						}
					}, p.onerror = function() {
						d(l("Network Error", e)), p = null
					}, p.ontimeout = function() {
						d(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED")), p = null
					}, n.isStandardBrowserEnv()) {
					var v = o("../../../../shared/node_modules/axios/lib/helpers/cookies.js"),
						y = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
					y && (f[e.xsrfHeaderName] = y)
				}
				if ("setRequestHeader" in p && n.forEach(f, function(e, t) {
						void 0 === c && "content-type" === t.toLowerCase() ? delete f[t] : p.setRequestHeader(t, e)
					}), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
					p.responseType = e.responseType
				} catch (t) {
					if ("json" !== e.responseType) throw t
				}
				"function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
					p && (p.abort(), d(e), p = null)
				}), void 0 === c && (c = null), p.send(c)
			})
		}
	},
	"../../../../shared/node_modules/axios/lib/axios.js": function(e, t, o) {
		"use strict";

		function n(e) {
			var t = new i(e),
				o = s(i.prototype.request, t);
			return r.extend(o, i.prototype, t), r.extend(o, t), o
		}
		var r = o("../../../../shared/node_modules/axios/lib/utils.js"),
			s = o("../../../../shared/node_modules/axios/lib/helpers/bind.js"),
			i = o("../../../../shared/node_modules/axios/lib/core/Axios.js"),
			a = o("../../../../shared/node_modules/axios/lib/defaults.js"),
			l = n(a);
		l.Axios = i, l.create = function(e) {
			return n(r.merge(a, e))
		}, l.Cancel = o("../../../../shared/node_modules/axios/lib/cancel/Cancel.js"), l.CancelToken = o("../../../../shared/node_modules/axios/lib/cancel/CancelToken.js"), l.isCancel = o("../../../../shared/node_modules/axios/lib/cancel/isCancel.js"), l.all = function(e) {
			return Promise.all(e)
		}, l.spread = o("../../../../shared/node_modules/axios/lib/helpers/spread.js"), e.exports = l, e.exports.default = l
	},
	"../../../../shared/node_modules/axios/lib/cancel/Cancel.js": function(e, t, o) {
		"use strict";

		function n(e) {
			this.message = e
		}
		n.prototype.toString = function() {
			return "Cancel" + (this.message ? ": " + this.message : "")
		}, n.prototype.__CANCEL__ = !0, e.exports = n
	},
	"../../../../shared/node_modules/axios/lib/cancel/CancelToken.js": function(e, t, o) {
		"use strict";

		function n(e) {
			if ("function" != typeof e) throw new TypeError("executor must be a function.");
			var t;
			this.promise = new Promise(function(e) {
				t = e
			});
			var o = this;
			e(function(e) {
				o.reason || (o.reason = new r(e), t(o.reason))
			})
		}
		var r = o("../../../../shared/node_modules/axios/lib/cancel/Cancel.js");
		n.prototype.throwIfRequested = function() {
			if (this.reason) throw this.reason
		}, n.source = function() {
			var e;
			return {
				token: new n(function(t) {
					e = t
				}),
				cancel: e
			}
		}, e.exports = n
	},
	"../../../../shared/node_modules/axios/lib/cancel/isCancel.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			return !(!e || !e.__CANCEL__)
		}
	},
	"../../../../shared/node_modules/axios/lib/core/Axios.js": function(e, t, o) {
		"use strict";

		function n(e) {
			this.defaults = e, this.interceptors = {
				request: new i,
				response: new i
			}
		}
		var r = o("../../../../shared/node_modules/axios/lib/defaults.js"),
			s = o("../../../../shared/node_modules/axios/lib/utils.js"),
			i = o("../../../../shared/node_modules/axios/lib/core/InterceptorManager.js"),
			a = o("../../../../shared/node_modules/axios/lib/core/dispatchRequest.js"),
			l = o("../../../../shared/node_modules/axios/lib/helpers/isAbsoluteURL.js"),
			u = o("../../../../shared/node_modules/axios/lib/helpers/combineURLs.js");
		n.prototype.request = function(e) {
			"string" == typeof e && (e = s.merge({
				url: arguments[0]
			}, arguments[1])), e = s.merge(r, this.defaults, {
				method: "get"
			}, e), e.baseURL && !l(e.url) && (e.url = u(e.baseURL, e.url));
			var t = [a, void 0],
				o = Promise.resolve(e);
			for (this.interceptors.request.forEach(function(e) {
					t.unshift(e.fulfilled, e.rejected)
				}), this.interceptors.response.forEach(function(e) {
					t.push(e.fulfilled, e.rejected)
				}); t.length;) o = o.then(t.shift(), t.shift());
			return o
		}, s.forEach(["delete", "get", "head", "options"], function(e) {
			n.prototype[e] = function(t, o) {
				return this.request(s.merge(o || {}, {
					method: e,
					url: t
				}))
			}
		}), s.forEach(["post", "put", "patch"], function(e) {
			n.prototype[e] = function(t, o, n) {
				return this.request(s.merge(n || {}, {
					method: e,
					url: t,
					data: o
				}))
			}
		}), e.exports = n
	},
	"../../../../shared/node_modules/axios/lib/core/InterceptorManager.js": function(e, t, o) {
		"use strict";

		function n() {
			this.handlers = []
		}
		var r = o("../../../../shared/node_modules/axios/lib/utils.js");
		n.prototype.use = function(e, t) {
			return this.handlers.push({
				fulfilled: e,
				rejected: t
			}), this.handlers.length - 1
		}, n.prototype.eject = function(e) {
			this.handlers[e] && (this.handlers[e] = null)
		}, n.prototype.forEach = function(e) {
			r.forEach(this.handlers, function(t) {
				null !== t && e(t)
			})
		}, e.exports = n
	},
	"../../../../shared/node_modules/axios/lib/core/createError.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/axios/lib/core/enhanceError.js");
		e.exports = function(e, t, o, r) {
			var s = new Error(e);
			return n(s, t, o, r)
		}
	},
	"../../../../shared/node_modules/axios/lib/core/dispatchRequest.js": function(e, t, o) {
		"use strict";

		function n(e) {
			e.cancelToken && e.cancelToken.throwIfRequested()
		}
		var r = o("../../../../shared/node_modules/axios/lib/utils.js"),
			s = o("../../../../shared/node_modules/axios/lib/core/transformData.js"),
			i = o("../../../../shared/node_modules/axios/lib/cancel/isCancel.js"),
			a = o("../../../../shared/node_modules/axios/lib/defaults.js");
		e.exports = function(e) {
			return n(e), e.headers = e.headers || {}, e.data = s(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
				delete e.headers[t]
			}), (e.adapter || a.adapter)(e).then(function(t) {
				return n(e), t.data = s(t.data, t.headers, e.transformResponse), t
			}, function(t) {
				return i(t) || (n(e), t && t.response && (t.response.data = s(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
			})
		}
	},
	"../../../../shared/node_modules/axios/lib/core/enhanceError.js": function(e, t, o) {
		"use strict";
		e.exports = function(e, t, o, n) {
			return e.config = t, o && (e.code = o), e.response = n, e
		}
	},
	"../../../../shared/node_modules/axios/lib/core/settle.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/axios/lib/core/createError.js");
		e.exports = function(e, t, o) {
			var r = o.config.validateStatus;
			o.status && r && !r(o.status) ? t(n("Request failed with status code " + o.status, o.config, null, o)) : e(o)
		}
	},
	"../../../../shared/node_modules/axios/lib/core/transformData.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = function(e, t, o) {
			return n.forEach(o, function(o) {
				e = o(e, t)
			}), e
		}
	},
	"../../../../shared/node_modules/axios/lib/defaults.js": function(e, t, o) {
		"use strict";
		(function(t) {
			function n(e, t) {
				!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
			}
			var r = o("../../../../shared/node_modules/axios/lib/utils.js"),
				s = o("../../../../shared/node_modules/axios/lib/helpers/normalizeHeaderName.js"),
				i = {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				a = {
					adapter: function() {
						var e;
						return "undefined" != typeof XMLHttpRequest ? e = o("../../../../shared/node_modules/axios/lib/adapters/xhr.js") : void 0 !== t && (e = o("../../../../shared/node_modules/axios/lib/adapters/xhr.js")), e
					}(),
					transformRequest: [function(e, t) {
						return s(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (n(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (n(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
					}],
					transformResponse: [function(e) {
						if ("string" == typeof e) try {
							e = JSON.parse(e)
						} catch (e) {}
						return e
					}],
					timeout: 0,
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					maxContentLength: -1,
					validateStatus: function(e) {
						return e >= 200 && e < 300
					}
				};
			a.headers = {
				common: {
					Accept: "application/json, text/plain, */*"
				}
			}, r.forEach(["delete", "get", "head"], function(e) {
				a.headers[e] = {}
			}), r.forEach(["post", "put", "patch"], function(e) {
				a.headers[e] = r.merge(i)
			}), e.exports = a
		}).call(t, o("../../../../shared/node_modules/process/browser.js"))
	},
	"../../../../shared/node_modules/axios/lib/helpers/bind.js": function(e, t, o) {
		"use strict";
		e.exports = function(e, t) {
			return function() {
				for (var o = new Array(arguments.length), n = 0; n < o.length; n++) o[n] = arguments[n];
				return e.apply(t, o)
			}
		}
	},
	"../../../../shared/node_modules/axios/lib/helpers/btoa.js": function(e, t, o) {
		"use strict";

		function n() {
			this.message = "String contains an invalid character"
		}

		function r(e) {
			for (var t, o, r = String(e), i = "", a = 0, l = s; r.charAt(0 | a) || (l = "=", a % 1); i += l.charAt(63 & t >> 8 - a % 1 * 8)) {
				if ((o = r.charCodeAt(a += .75)) > 255) throw new n;
				t = t << 8 | o
			}
			return i
		}
		var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		n.prototype = new Error, n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", e.exports = r
	},
	"../../../../shared/node_modules/axios/lib/helpers/buildURL.js": function(e, t, o) {
		"use strict";

		function n(e) {
			return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
		}
		var r = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = function(e, t, o) {
			if (!t) return e;
			var s;
			if (o) s = o(t);
			else if (r.isURLSearchParams(t)) s = t.toString();
			else {
				var i = [];
				r.forEach(t, function(e, t) {
					null !== e && void 0 !== e && (r.isArray(e) && (t += "[]"), r.isArray(e) || (e = [e]), r.forEach(e, function(e) {
						r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(n(t) + "=" + n(e))
					}))
				}), s = i.join("&")
			}
			return s && (e += (-1 === e.indexOf("?") ? "?" : "&") + s), e
		}
	},
	"../../../../shared/node_modules/axios/lib/helpers/combineURLs.js": function(e, t, o) {
		"use strict";
		e.exports = function(e, t) {
			return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
		}
	},
	"../../../../shared/node_modules/axios/lib/helpers/cookies.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = n.isStandardBrowserEnv() ? function() {
			return {
				write: function(e, t, o, r, s, i) {
					var a = [];
					a.push(e + "=" + encodeURIComponent(t)), n.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()), n.isString(r) && a.push("path=" + r), n.isString(s) && a.push("domain=" + s), !0 === i && a.push("secure"), document.cookie = a.join("; ")
				},
				read: function(e) {
					var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
					return t ? decodeURIComponent(t[3]) : null
				},
				remove: function(e) {
					this.write(e, "", Date.now() - 864e5)
				}
			}
		}() : function() {
			return {
				write: function() {},
				read: function() {
					return null
				},
				remove: function() {}
			}
		}()
	},
	"../../../../shared/node_modules/axios/lib/helpers/isAbsoluteURL.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
		}
	},
	"../../../../shared/node_modules/axios/lib/helpers/isURLSameOrigin.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = n.isStandardBrowserEnv() ? function() {
			function e(e) {
				var t = e;
				return o && (r.setAttribute("href", t), t = r.href), r.setAttribute("href", t), {
					href: r.href,
					protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
					host: r.host,
					search: r.search ? r.search.replace(/^\?/, "") : "",
					hash: r.hash ? r.hash.replace(/^#/, "") : "",
					hostname: r.hostname,
					port: r.port,
					pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
				}
			}
			var t, o = /(msie|trident)/i.test(navigator.userAgent),
				r = document.createElement("a");
			return t = e(window.location.href),
				function(o) {
					var r = n.isString(o) ? e(o) : o;
					return r.protocol === t.protocol && r.host === t.host
				}
		}() : function() {
			return function() {
				return !0
			}
		}()
	},
	"../../../../shared/node_modules/axios/lib/helpers/normalizeHeaderName.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = function(e, t) {
			n.forEach(e, function(o, n) {
				n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = o, delete e[n])
			})
		}
	},
	"../../../../shared/node_modules/axios/lib/helpers/parseHeaders.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = function(e) {
			var t, o, r, s = {};
			return e ? (n.forEach(e.split("\n"), function(e) {
				r = e.indexOf(":"), t = n.trim(e.substr(0, r)).toLowerCase(), o = n.trim(e.substr(r + 1)), t && (s[t] = s[t] ? s[t] + ", " + o : o)
			}), s) : s
		}
	},
	"../../../../shared/node_modules/axios/lib/helpers/spread.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			return function(t) {
				return e.apply(null, t)
			}
		}
	},
	"../../../../shared/node_modules/axios/lib/utils.js": function(e, t, o) {
		"use strict";
		(function(t) {
			function n(e) {
				return "[object Array]" === C.call(e)
			}

			function r(e) {
				return void 0 !== t && t.isBuffer && t.isBuffer(e)
			}

			function s(e) {
				return "[object ArrayBuffer]" === C.call(e)
			}

			function i(e) {
				return "undefined" != typeof FormData && e instanceof FormData
			}

			function a(e) {
				return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
			}

			function l(e) {
				return "string" == typeof e
			}

			function u(e) {
				return "number" == typeof e
			}

			function d(e) {
				return void 0 === e
			}

			function c(e) {
				return null !== e && "object" == typeof e
			}

			function f(e) {
				return "[object Date]" === C.call(e)
			}

			function p(e) {
				return "[object File]" === C.call(e)
			}

			function h(e) {
				return "[object Blob]" === C.call(e)
			}

			function m(e) {
				return "[object Function]" === C.call(e)
			}

			function b(e) {
				return c(e) && m(e.pipe)
			}

			function g(e) {
				return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
			}

			function v(e) {
				return e.replace(/^\s*/, "").replace(/\s*$/, "")
			}

			function y() {
				return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
			}

			function _(e, t) {
				if (null !== e && void 0 !== e)
					if ("object" == typeof e || n(e) || (e = [e]), n(e))
						for (var o = 0, r = e.length; o < r; o++) t.call(null, e[o], o, e);
					else
						for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e)
			}

			function j() {
				function e(e, o) {
					"object" == typeof t[o] && "object" == typeof e ? t[o] = j(t[o], e) : t[o] = e
				}
				for (var t = {}, o = 0, n = arguments.length; o < n; o++) _(arguments[o], e);
				return t
			}

			function x(e, t, o) {
				return _(t, function(t, n) {
					e[n] = o && "function" == typeof t ? w(t, o) : t
				}), e
			}
			var w = o("../../../../shared/node_modules/axios/lib/helpers/bind.js"),
				C = Object.prototype.toString;
			e.exports = {
				isArray: n,
				isArrayBuffer: s,
				isBuffer: r,
				isFormData: i,
				isArrayBufferView: a,
				isString: l,
				isNumber: u,
				isObject: c,
				isUndefined: d,
				isDate: f,
				isFile: p,
				isBlob: h,
				isFunction: m,
				isStream: b,
				isURLSearchParams: g,
				isStandardBrowserEnv: y,
				forEach: _,
				merge: j,
				extend: x,
				trim: v
			}
		}).call(t, o("../../../../shared/node_modules/buffer/index.js").Buffer)
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./galileo/desktop/button/ToggleButton.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./galileo/desktop/button/base.vue"),
			r = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n);
		t.default = {
			name: "GalileoToggleButton",
			components: {
				GalileoBaseButton: r.default
			},
			props: ["value"],
			watch: {
				value: function() {
					this.state = "success"
				}
			},
			data: function() {
				return {
					state: ""
				}
			},
			methods: {
				emitClick: function() {
					this.state = "loading", this.$emit("click")
				},
				emitHover: function(e) {
					this.$emit("hover", e)
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./galileo/desktop/button/base.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {
			name: "GalileoBaseButton",
			props: {
				disabled: {
					type: Boolean,
					default: !1
				},
				loading: {
					type: Boolean,
					default: !1
				}
			},
			methods: {
				handleClick: function() {
					this.disabled || this.loading || this.$emit("click")
				},
				handleMouseOver: function() {
					this.disabled || this.$emit("hover", !0)
				},
				handleMouseOut: function() {
					this.$emit("hover", !1)
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/common/components/CollectionFollowButton.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("./javascripts/common/mixins/i18nMixin.js"),
			s = n(r),
			i = o("./javascripts/common/components/api.js"),
			a = n(i);
		t.default = {
			name: "CollectionFollowButton",
			mixins: [s.default],
			data: function() {
				return {
					userSignedIn: M.pageData.user_signed_in,
					hovering: !1,
					api: new a.default
				}
			},
			props: {
				collectionId: [String, Number],
				following: [String, Boolean],
				disableUrl: {
					type: Boolean,
					default: !1
				}
			},
			computed: {
				intCollectionId: function() {
					return parseInt(this.collectionId, 10) || -1
				},
				boolFollowing: function() {
					return "string" == typeof this.following ? "true" === this.following : this.following
				},
				buttonText: function() {
					return this.userSignedIn && this.boolFollowing ? this.hovering ? this.t("unfollow") : this.t("following") : this.t("follow")
				},
				iconClasses: function() {
					return this.userSignedIn && this.boolFollowing ? this.hovering ? "iconfont ic-unfollow" : "iconfont ic-followed" : "iconfont ic-follow"
				},
				buttonClasses: function() {
					return this.userSignedIn && this.boolFollowing ? "btn btn-default following" : "btn btn-success follow"
				}
			},
			methods: {
				handleMouseEnter: function() {
					this.userSignedIn && this.boolFollowing && (this.hovering = !0)
				},
				handleMouseLeave: function() {
					this.userSignedIn && this.boolFollowing && (this.hovering = !1)
				},
				handleClick: function() {
					this.userSignedIn ? this.boolFollowing ? this.unsubscribe() : this.subscribe() : this.disableUrl ? this.$emit("go-sign-in") : window.location = Routes.new_user_session_path({
						utm_medium: "not-signed-in-collection-follow-button"
					})
				},
				unsubscribe: function() {
					var e = this;
					this.api.unsubscribeCollection(this.intCollectionId).then(function() {
						e.following = !1
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				},
				subscribe: function() {
					var e = this;
					this.api.subscribeCollection(this.intCollectionId).then(function() {
						e.following = !0, M.vueHub.$emit("subscribe-collection")
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				}
			},
			watch: {
				following: function() {
					this.hovering = !1
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/common/components/NotebookFollowButton.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("./javascripts/common/mixins/i18nMixin.js"),
			s = n(r),
			i = o("./javascripts/common/components/api.js"),
			a = n(i);
		t.default = {
			name: "NotebookFollowButton",
			mixins: [s.default],
			props: {
				notebookId: {
					type: [String, Number],
					default: -1
				},
				following: {
					type: [String, Boolean],
					default: !1
				},
				disableUrl: {
					type: Boolean,
					default: !1
				}
			},
			data: function() {
				return {
					i18nPrefix: "common:",
					userSignedIn: M.pageData.user_signed_in,
					hovering: !1,
					api: new a.default
				}
			},
			computed: {
				intNotebookId: function() {
					return parseInt(this.notebookId, 10) || -1
				},
				boolFollowing: function() {
					return "string" == typeof this.following ? "true" === this.following : this.following
				},
				buttonClasses: function() {
					var e = ["btn"];
					return this.userSignedIn && this.boolFollowing ? (e.push("btn-default"), e.push("following"), e.join(" ")) : (e.push("btn-success"), e.push("follow"), e.join(" "))
				},
				iconClasses: function() {
					return this.userSignedIn && this.boolFollowing ? this.hovering ? "ic-unfollow" : "ic-followed" : "ic-follow"
				},
				buttonText: function() {
					return this.userSignedIn && this.boolFollowing ? this.hovering ? this.t("unfollow") : this.t("following") : this.t("follow")
				}
			},
			methods: {
				handleClick: function() {
					this.userSignedIn ? this.boolFollowing ? this.unsubscribe() : this.subscribe() : this.disableUrl ? this.emitGoSignInEvent() : window.location = Routes.new_user_session_path({
						utm_medium: "not-signed-in-notebook-follow-button"
					})
				},
				handleMouseLeave: function() {
					this.userSignedIn && this.boolFollowing && (this.hovering = !1)
				},
				handleMouseEnter: function() {
					this.userSignedIn && this.boolFollowing && (this.hovering = !0)
				},
				unsubscribe: function() {
					var e = this;
					this.api.toggleLikeNotebook(this.intNotebookId).then(function() {
						e.following = !1
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				},
				subscribe: function() {
					var e = this;
					this.api.toggleLikeNotebook(this.intNotebookId).then(function() {
						e.following = !0, M.vueHub.$emit("subscribe-notebook")
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				},
				emitGoSignInEvent: function() {
					this.$emit("go-sign-in")
				}
			},
			watch: {
				following: function() {
					this.hovering = !1
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/common/components/UserFollowButton.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("./javascripts/common/mixins/i18nMixin.js"),
			s = n(r),
			i = o("./javascripts/common/components/api.js"),
			a = n(i);
		t.default = {
			name: "UserFollowButton",
			mixins: [s.default],
			data: function() {
				return {
					i18nPrefix: "common:",
					userSignedIn: M.pageData.user_signed_in,
					hovering: !1,
					api: new a.default
				}
			},
			props: {
				userId: [String, Number],
				following: [String, Boolean],
				disableUrl: {
					type: Boolean,
					default: !1
				}
			},
			computed: {
				buttonText: function() {
					return this.userSignedIn && this.boolFollowing ? this.hovering ? this.t("unfollow") : this.t("following") : this.t("follow")
				},
				iconClasses: function() {
					return this.userSignedIn && this.boolFollowing ? this.hovering ? "iconfont ic-unfollow" : "iconfont ic-followed" : "iconfont ic-follow"
				},
				buttonClasses: function() {
					return this.userSignedIn && this.boolFollowing ? "btn btn-default following" : "btn btn-success follow"
				},
				isMyself: function() {
					return M.pageData.current_user.id === this.intUserId
				},
				intUserId: function() {
					return parseInt(this.userId, 10) || -1
				},
				boolFollowing: function() {
					return "string" == typeof this.following ? "true" === this.following : this.following
				}
			},
			created: function() {
				this.userSignedIn && M.vueHub && M.vueHub.$on("change-follow-state", this.changeFollowState)
			},
			beforeDestroy: function() {
				this.userSignedIn && M.vueHub && M.vueHub.$off("change-follow-state")
			},
			methods: {
				handleClick: function() {
					this.userSignedIn ? this.boolFollowing ? this.unsubscribe() : this.subscribe() : this.disableUrl ? this.$emit("go-sign-in") : window.location = Routes.new_user_session_path({
						utm_medium: "not-signed-in-user-follow-button"
					})
				},
				handleMouseLeave: function() {
					this.userSignedIn && this.boolFollowing && (this.hovering = !1)
				},
				handleMouseEnter: function() {
					this.userSignedIn && this.boolFollowing && (this.hovering = !0)
				},
				unsubscribe: function() {
					var e = this;
					this.api.toggleLikeUser(this.intUserId).then(function() {
						M.vueHub.$emit("change-follow-state", e.userId, !1)
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				},
				subscribe: function() {
					var e = this;
					this.api.toggleLikeUser(this.intUserId).then(function() {
						M.vueHub.$emit("change-follow-state", e.userId, !0), M.vueHub.$emit("subscribe-user")
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				},
				changeFollowState: function(e, t) {
					this.userId === e && (this.following = t)
				}
			},
			watch: {
				boolFollowing: function() {
					this.hovering = !1
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/buttons/UserFollowButton/Comp.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), o("./javascripts/web/components/buttons/UserFollowButton/style.scss");
		var r = o("./galileo/desktop/button/ToggleButton.vue"),
			s = n(r),
			i = o("./javascripts/common/mixins/i18nMixin.js"),
			a = n(i),
			l = o("./javascripts/web/api/followApi.js"),
			u = n(l);
		t.default = {
			name: "UserFollowButton",
			mixins: [a.default],
			components: {
				ToggleButton: s.default
			},
			props: {
				userId: [Number, String],
				state: {
					type: [Number, String],
					default: 0
				},
				classes: {
					type: [String, Array],
					default: ""
				}
			},
			watch: {
				state: function(e) {
					this.$emit("input", e)
				},
				value: function(e) {
					e ? this.followState++ : this.followState--, this.state = this.followState
				}
			},
			computed: {
				buttonText: function() {
					return 1 === this.followState || 3 === this.followState ? this.hovering ? this.t("unfollow") : this.t("following") : this.t("follow")
				}
			},
			data: function() {
				return {
					i18nPrefix: "common:",
					userSignedIn: M.pageData.user_signed_in,
					hovering: !1,
					followState: this.state - 0,
					value: this.state - 0 == 1 || this.state - 0 == 3,
					api: new u.default
				}
			},
			created: function() {
				var e = this;
				this.userSignedIn && M.vueHub && M.vueHub.$on("change-follow-state", function(t) {
					t == e.userId && (e.value = !e.value)
				})
			},
			beforeDestroy: function() {
				this.userSignedIn && M.vueHub && M.vueHub.$off("change-follow-state")
			},
			methods: {
				handleClick: function() {
					this.userSignedIn ? this.value ? this.unsubscribe() : this.subscribe() : window.location = Routes.new_user_session_path()
				},
				handleHover: function(e) {
					this.hovering = e
				},
				unsubscribe: function() {
					var e = this;
					this.api.user(this.userId).then(function() {
						M.vueHub.$emit("change-follow-state", e.userId, !1)
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				},
				subscribe: function() {
					var e = this;
					this.api.user(this.userId).then(function() {
						M.vueHub.$emit("change-follow-state", e.userId, !0), M.vueHub.$emit("subscribe-user")
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/BlockUserModal.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("./javascripts/common/mixins/i18nMixin.js"),
			s = n(r),
			i = o("./javascripts/web/mixins/modalMixin.js"),
			a = n(i),
			l = o("./javascripts/web/api/userApi.js"),
			u = n(l);
		t.default = {
			name: "BlockUserModal",
			mixins: [s.default, a.default],
			data: function() {
				return {
					i18nPrefix: "common:blockUserModal",
					extraClasses: ["top-up", "animated", "add-blacklist"],
					api: new u.default
				}
			},
			props: {
				userId: {
					type: Number,
					default: -1
				}
			},
			methods: {
				block: function() {
					this.api.block({
						userId: this.userId
					}).then(function() {
						M.vueHub.$emit("block-user-success"), M.flash.success("已加入黑名单")
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/Modal.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {
			name: "Modal",
			props: {
				extraClasses: {
					type: Array,
					default: function() {
						return []
					}
				},
				noFooter: {
					type: Boolean,
					default: !1
				}
			},
			computed: {
				show: function() {
					return this.$parent.show
				}
			},
			watch: {
				show: function(e) {
					e ? ($("body").addClass("modal-open"), window.addEventListener("keyup", this.escDismiss)) : ($("body").removeClass("modal-open"), window.removeEventListener("keyup", this.escDismiss))
				}
			},
			methods: {
				open: function() {
					this.$parent.open()
				},
				close: function() {
					this.$parent.close()
				},
				handleOutsideClick: function(e) {
					e.target === e.currentTarget && this.close()
				},
				escDismiss: function(e) {
					27 === e.keyCode && this.close()
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/ReportModal.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("./javascripts/common/mixins/i18nMixin.js"),
			s = n(r),
			i = o("./javascripts/web/mixins/modalMixin.js"),
			a = n(i),
			l = o("./javascripts/web/api/userApi.js"),
			u = n(l);
		t.default = {
			name: "ReportModal",
			mixins: [s.default, a.default],
			props: {
				abuseReportableType: {
					type: String
				},
				abuseReportableId: {
					type: Number
				}
			},
			data: function() {
				return {
					i18nPrefix: "common:reportModal",
					extraClasses: ["report-modal", "animated"],
					reportType: "ad",
					reportContent: "",
					api: new u.default
				}
			},
			computed: {
				abuseReportUrl: function() {
					var e = void 0;
					switch (this.abuseReportableType) {
						case "comment":
							e = Routes.comment_abuse_reports_path(this.abuseReportableId);
							break;
						case "note":
							e = Routes.note_abuse_reports_path(this.abuseReportableId);
							break;
						case "user":
							e = Routes.user_abuse_reports_path(this.abuseReportableId)
					}
					return e
				},
				placeholder: function() {
					return "plagiarism" === this.reportType ? this.t(".plagiarismPlaceholder") : "other" === this.reportType ? this.t(".otherPlaceholder") : this.t(".defaultPlaceholder")
				}
			},
			methods: {
				submit: function() {
					var e = this;
					this.api.abuseReport({
						url: this.abuseReportUrl,
						type: this.reportType,
						content: this.reportContent.trim() ? this.reportContent : void 0
					}).then(function() {
						M.flash.success(i18next.t("common:report.success")), e.close()
					}).catch(function(t) {
						M.flash.error(t.response.data.error), e.close()
					})
				},
				updateReprotContent: function(e) {
					this.reportContent = e.currentTarget.value
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/CollectionsAndNotebooks.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("./javascripts/web/components/users/OwnCollections.vue"),
			s = n(r),
			i = o("./javascripts/web/components/users/ManageableCollections.vue"),
			a = n(i),
			l = o("./javascripts/web/components/users/Notebooks.vue"),
			u = n(l),
			d = o("./javascripts/web/api/userApi.js"),
			c = n(d);
		t.default = {
			name: "UserCollectionsAndNotebooks",
			components: {
				OwnCollections: s.default,
				ManageableCollections: a.default,
				Notebooks: u.default
			},
			data: function() {
				return {
					userSlug: M.pageData.user.slug,
					isLoading: !1,
					ownCollections: [],
					manageableCollections: [],
					notebooks: [],
					ownCollectionsPage: 0,
					ownCollectionsTotalPages: 0,
					manageableCollectionsPage: 0,
					manageableCollectionsTotalPages: 0,
					notebooksPage: 0,
					notebooksTotalPages: 0,
					api: new c.default
				}
			},
			computed: {
				humanGender: function() {
					return M.pageData.user_signed_in && M.pageData.current_user.slug === this.userSlug ? "me" : 2 === M.pageData.user.gender ? "female" : "male"
				}
			},
			created: function() {
				this.fetchCollectionsAndNotebooks()
			},
			methods: {
				fetchCollectionsAndNotebooks: function() {
					var e = this;
					this.isLoading = !0, this.api.collectionsAndNotebooks({
						slug: this.userSlug
					}).then(function(t) {
						e.ownCollections = t.data.own_collections, e.ownCollectionsPage = t.data.own_collections_page, e.ownCollectionsTotalPages = t.data.own_collections_total_pages, e.manageableCollections = t.data.manageable_collections, e.manageableCollectionsPage = t.data.manageable_collections_page, e.manageableCollectionsTotalPages = t.data.manageable_collections_total_pages, e.notebooks = t.data.notebooks, e.notebooksPage = t.data.notebooks_page, e.notebooksTotalPages = t.data.notebooks_total_pages, e.isLoading = !1
					}).catch(function() {})
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/ManageableCollections.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("./javascripts/common/mixins/resizeImage.js"),
			s = n(r),
			i = o("./javascripts/web/api/collectionApi.js"),
			a = n(i);
		t.default = {
			name: "ManageableCollections",
			mixins: [s.default],
			props: {
				propCollections: {
					type: Array,
					default: function() {
						return []
					}
				},
				propDisplayableCollections: {
					type: Array,
					default: function() {
						return []
					}
				},
				propPage: {
					type: [String, Number],
					default: 0
				},
				propTotalPages: {
					type: [String, Number],
					default: 0
				},
				propHumanGender: {
					type: String,
					default: "male"
				}
			},
			data: function() {
				return {
					userSlug: M.pageData.user.slug,
					expanded: !1,
					isLoadingCollections: !1,
					collections: this.propCollections,
					displayableCollections: this.propDisplayableCollections,
					page: this.propPage,
					totalPages: this.propTotalPages,
					api: new a.default
				}
			},
			computed: {
				moreThanTenCollections: function() {
					return this.collections.length > 10
				}
			},
			methods: {
				fetchCollections: function() {
					var e = this;
					this.isLoadingCollections || (this.isLoadingCollections = !0, this.api.getByUser({
						slug: this.userSlug,
						type: "manager",
						page: this.page + 1,
						per_page: 10
					}).then(function(t) {
						t.data.collections.forEach(function(t) {
							e.collections.push(t)
						}), e.page = t.data.page, e.totalPages = t.data.total_pages, e.page === e.totalPages && (e.expanded = !0), e.isLoadingCollections = !1
					}).catch(function() {
						e.isLoadingCollections = !1
					}))
				},
				toggleCollections: function() {
					this.expanded ? (this.displayableCollections = this.collections.slice(0, 10), this.expanded = !1) : (this.displayableCollections = this.collections, this.expanded = !0)
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/Notebooks.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/api/notebooksApi.js"),
			r = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n);
		t.default = {
			name: "Notebooks",
			props: {
				propNotebooks: {
					type: Array,
					default: function() {
						return []
					}
				},
				propDisplayableNotebooks: {
					type: Array,
					default: function() {
						return []
					}
				},
				propPage: {
					type: [String, Number],
					default: 0
				},
				propTotalPages: {
					type: [String, Number],
					default: 0
				},
				propHumanGender: {
					type: String,
					default: "male"
				}
			},
			data: function() {
				return {
					userSlug: M.pageData.user.slug,
					expanded: !1,
					isLoadingNotebooks: !1,
					notebooks: this.propNotebooks,
					displayableNotebooks: this.propNotebooks,
					page: this.propPage,
					totalPages: this.propTotalPages,
					api: new r.default
				}
			},
			computed: {
				moreThanTenNotebooks: function() {
					return this.notebooks.length > 10
				}
			},
			methods: {
				fetchNotebooks: function() {
					var e = this;
					this.isLoadingNotebooks || (this.isLoadingNotebooks = !0, this.api.getByUser({
						slug: this.userSlug,
						type: "manager",
						page: this.page + 1,
						per_page: 10
					}).then(function(t) {
						t.data.notebooks.forEach(function(t) {
							e.notebooks.push(t)
						}), e.page = t.data.page, e.totalPages = t.data.total_pages, e.page === e.totalPages && (e.expanded = !0), e.isLoadingNotebooks = !1
					}).catch(function() {
						e.isLoadingNotebooks = !1
					}))
				},
				toggleNotebooks: function() {
					this.expanded ? (this.displayableNotebooks = this.notebooks.slice(0, 10), this.expanded = !1) : (this.displayableNotebooks = this.notebooks, this.expanded = !0)
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/OwnCollections.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("./javascripts/common/mixins/resizeImage.js"),
			s = n(r),
			i = o("./javascripts/web/api/collectionApi.js"),
			a = n(i);
		t.default = {
			name: "OwnCollections",
			mixins: [s.default],
			props: {
				propCollections: {
					type: Array,
					default: function() {
						return []
					}
				},
				propDisplayableCollections: {
					type: Array,
					default: function() {
						return []
					}
				},
				propPage: {
					type: [String, Number],
					default: 0
				},
				propTotalPages: {
					type: [String, Number],
					default: 0
				},
				propHumanGender: {
					type: String,
					default: 0
				}
			},
			data: function() {
				return {
					userSlug: M.pageData.user.slug,
					hasCollections: M.pageData.has_collections,
					expanded: !1,
					isLoadingCollections: !1,
					collections: this.propCollections,
					displayableCollections: this.propDisplayableCollections,
					page: this.propPage,
					totalPages: this.propTotalPages,
					api: new a.default
				}
			},
			computed: {
				moreThanTenCollections: function() {
					return this.collections.length > 10
				},
				isMine: function() {
					return M.pageData.user_signed_in && M.pageData.current_user.slug === this.userSlug
				}
			},
			methods: {
				fetchCollections: function() {
					var e = this;
					this.isLoadingCollections || (this.isLoadingCollections = !0, this.api.getByUser({
						slug: this.userSlug,
						type: "own",
						page: this.page + 1,
						per_page: 10
					}).then(function(t) {
						t.data.collections.forEach(function(t) {
							e.collections.push(t)
						}), e.page = t.data.page, e.totalPages = t.data.total_pages, e.page === e.totalPages && (e.expanded = !0), e.isLoadingCollections = !1
					}).catch(function() {
						e.isLoadingCollections = !1
					}))
				},
				toggleCollections: function() {
					this.expanded ? (this.displayableCollections = this.collections.slice(0, 10), this.expanded = !1) : (this.displayableCollections = this.collections, this.expanded = !0)
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/PublicationList/Comp.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), o("./javascripts/web/components/users/PublicationList/style.scss");
		var r = o("./javascripts/web/components/users/PublicationList/PublicationListModal.vue"),
			s = n(r),
			i = o("./javascripts/web/api/publicationsApi.js"),
			a = n(i),
			l = o("./javascripts/common/mixins/resizeImage.js"),
			u = n(l);
		t.default = {
			mixins: [u.default],
			name: "PublicationList",
			components: {
				PublicationListModal: s.default
			},
			data: function() {
				return {
					eof: !1,
					showModal: !1,
					loading: !1,
					list: [],
					total: 0,
					api: new a.default,
					page: 1,
					count: 10,
					userSlug: M.pageData.user.slug
				}
			},
			computed: {
				filter: function() {
					return this.list.slice(0, 2)
				},
				humanGender: function() {
					return M.pageData.user_signed_in && M.pageData.current_user.slug === this.userSlug ? "me" : 2 === M.pageData.user.gender ? "female" : "male"
				}
			},
			created: function() {
				M.vueHub.$on("fetch-more-publication", this.getList), this.getList()
			},
			mounted: function() {
				setTimeout(function() {
					$('[data-toggle="tooltip"]').tooltip()
				}, 2e3)
			},
			beforeDestroy: function() {
				M.vueHub.$off("fetch-more-publication")
			},
			methods: {
				getList: function() {
					var e = this;
					this.eof || this.loading || (this.loading = !0, this.api.list({
						userSlug: this.userSlug,
						page: this.page,
						count: this.count
					}).then(function(t) {
						var o = t.data.publications;
						o.forEach(function(t) {
							return e.list.push(t)
						}), o.length < e.count && (e.eof = !0), e.total = t.data.publications_count, e.page++, e.loading = !1
					}).catch(function() {
						e.loading = !1
					}))
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/PublicationList/PublicationListModal.vue": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("./javascripts/web/mixins/modalMixin.js"),
			s = n(r),
			i = o("./javascripts/common/mixins/resizeImage.js"),
			a = n(i);
		t.default = {
			mixins: [s.default, a.default],
			name: "PublicationListModal",
			props: {
				show: {
					type: Boolean,
					default: !1
				},
				list: {
					type: Array,
					default: function() {
						return []
					}
				},
				total: Number
			},
			data: function() {
				return {
					extraClasses: ["animated", "publication-list-modal"]
				}
			},
			computed: {
				humanGender: function() {
					return M.pageData.user_signed_in && M.pageData.current_user.slug === this.userSlug ? "me" : 2 === M.pageData.user.gender ? "female" : "male"
				}
			},
			methods: {
				listenModalScroll: function() {
					var e = this;
					$(".publication-list-modal .modal-body").on("scroll", function(t) {
						var o = t.currentTarget.scrollTop,
							n = t.currentTarget.clientHeight;
						e.$refs.subscriberList.clientHeight - n - o < 300 && M.vueHub.$emit("fetch-more-publication")
					})
				}
			},
			watch: {
				show: function(e) {
					var t = this;
					!0 === e ? this.$nextTick(function() {
						t.listenModalScroll()
					}) : $(".follow-list .modal-body").unbind("scroll")
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-runtime/core-js/object/assign.js": function(e, t, o) {
		e.exports = {
			default: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"),
			__esModule: !0
		}
	},
	"../../../../shared/node_modules/babel-runtime/core-js/object/create.js": function(e, t, o) {
		e.exports = {
			default: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js"),
			__esModule: !0
		}
	},
	"../../../../shared/node_modules/babel-runtime/core-js/object/define-property.js": function(e, t, o) {
		e.exports = {
			default: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js"),
			__esModule: !0
		}
	},
	"../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js": function(e, t, o) {
		e.exports = {
			default: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/get-prototype-of.js"),
			__esModule: !0
		}
	},
	"../../../../shared/node_modules/babel-runtime/core-js/object/set-prototype-of.js": function(e, t, o) {
		e.exports = {
			default: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js"),
			__esModule: !0
		}
	},
	"../../../../shared/node_modules/babel-runtime/core-js/symbol.js": function(e, t, o) {
		e.exports = {
			default: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"),
			__esModule: !0
		}
	},
	"../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js": function(e, t, o) {
		"use strict";
		t.__esModule = !0, t.default = function(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
	},
	"../../../../shared/node_modules/babel-runtime/helpers/createClass.js": function(e, t, o) {
		"use strict";
		t.__esModule = !0;
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/object/define-property.js"),
			r = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n);
		t.default = function() {
			function e(e, t) {
				for (var o = 0; o < t.length; o++) {
					var n = t[o];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, r.default)(e, n.key, n)
				}
			}
			return function(t, o, n) {
				return o && e(t.prototype, o), n && e(t, n), t
			}
		}()
	},
	"../../../../shared/node_modules/babel-runtime/helpers/inherits.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/object/create.js").default,
			r = o("../../../../shared/node_modules/babel-runtime/core-js/object/set-prototype-of.js").default;
		t.default = function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = n(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (r ? r(e, t) : e.__proto__ = t)
		}, t.__esModule = !0
	},
	"../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js": function(e, t, o) {
		"use strict";
		t.__esModule = !0;
		var n = o("../../../../shared/node_modules/babel-runtime/helpers/typeof.js"),
			r = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n);
		t.default = function(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" !== (void 0 === t ? "undefined" : (0, r.default)(t)) && "function" != typeof t ? e : t
		}
	},
	"../../../../shared/node_modules/babel-runtime/helpers/typeof.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/symbol.js").default;
		t.default = function(e) {
			return e && e.constructor === n ? "symbol" : typeof e
		}, t.__esModule = !0
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js": function(e, t, o) {
		o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js"), e.exports = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js").Object.assign
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js");
		e.exports = function(e, t) {
			return n.create(e, t)
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js");
		e.exports = function(e, t, o) {
			return n.setDesc(e, t, o)
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/get-prototype-of.js": function(e, t, o) {
		o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.get-prototype-of.js"), e.exports = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js").Object.getPrototypeOf
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js": function(e, t, o) {
		o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js"), e.exports = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js").Object.setPrototypeOf
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js": function(e, t, o) {
		o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js"), o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js"), e.exports = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js").Symbol
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.a-function.js": function(e, t) {
		e.exports = function(e) {
			if ("function" != typeof e) throw TypeError(e + " is not a function!");
			return e
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.an-object.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.is-object.js");
		e.exports = function(e) {
			if (!n(e)) throw TypeError(e + " is not an object!");
			return e
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.cof.js": function(e, t) {
		var o = {}.toString;
		e.exports = function(e) {
			return o.call(e).slice(8, -1)
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js": function(e, t) {
		var o = e.exports = {
			version: "1.2.6"
		};
		"number" == typeof __e && (__e = o)
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.ctx.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.a-function.js");
		e.exports = function(e, t, o) {
			if (n(e), void 0 === t) return e;
			switch (o) {
				case 1:
					return function(o) {
						return e.call(t, o)
					};
				case 2:
					return function(o, n) {
						return e.call(t, o, n)
					};
				case 3:
					return function(o, n, r) {
						return e.call(t, o, n, r)
					}
			}
			return function() {
				return e.apply(t, arguments)
			}
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.defined.js": function(e, t) {
		e.exports = function(e) {
			if (void 0 == e) throw TypeError("Can't call method on  " + e);
			return e
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.descriptors.js": function(e, t, o) {
		e.exports = !o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.fails.js")(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.enum-keys.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js");
		e.exports = function(e) {
			var t = n.getKeys(e),
				o = n.getSymbols;
			if (o)
				for (var r, s = o(e), i = n.isEnum, a = 0; s.length > a;) i.call(e, r = s[a++]) && t.push(r);
			return t
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.export.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.global.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js"),
			s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.ctx.js"),
			i = function(e, t, o) {
				var a, l, u, d = e & i.F,
					c = e & i.G,
					f = e & i.S,
					p = e & i.P,
					h = e & i.B,
					m = e & i.W,
					b = c ? r : r[t] || (r[t] = {}),
					g = c ? n : f ? n[t] : (n[t] || {}).prototype;
				c && (o = t);
				for (a in o)(l = !d && g && a in g) && a in b || (u = l ? g[a] : o[a], b[a] = c && "function" != typeof g[a] ? o[a] : h && l ? s(u, n) : m && g[a] == u ? function(e) {
					var t = function(t) {
						return this instanceof e ? new e(t) : e(t)
					};
					return t.prototype = e.prototype, t
				}(u) : p && "function" == typeof u ? s(Function.call, u) : u, p && ((b.prototype || (b.prototype = {}))[a] = u))
			};
		i.F = 1, i.G = 2, i.S = 4, i.P = 8, i.B = 16, i.W = 32, e.exports = i
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.fails.js": function(e, t) {
		e.exports = function(e) {
			try {
				return !!e()
			} catch (e) {
				return !0
			}
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.get-names.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-iobject.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js").getNames,
			s = {}.toString,
			i = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
			a = function(e) {
				try {
					return r(e)
				} catch (e) {
					return i.slice()
				}
			};
		e.exports.get = function(e) {
			return i && "[object Window]" == s.call(e) ? a(e) : r(n(e))
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.global.js": function(e, t) {
		var o = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = o)
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.has.js": function(e, t) {
		var o = {}.hasOwnProperty;
		e.exports = function(e, t) {
			return o.call(e, t)
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.hide.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.property-desc.js");
		e.exports = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.descriptors.js") ? function(e, t, o) {
			return n.setDesc(e, t, r(1, o))
		} : function(e, t, o) {
			return e[t] = o, e
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.iobject.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.cof.js");
		e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
			return "String" == n(e) ? e.split("") : Object(e)
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.is-array.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.cof.js");
		e.exports = Array.isArray || function(e) {
			return "Array" == n(e)
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.is-object.js": function(e, t) {
		e.exports = function(e) {
			return "object" == typeof e ? null !== e : "function" == typeof e
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js": function(e, t) {
		var o = Object;
		e.exports = {
			create: o.create,
			getProto: o.getPrototypeOf,
			isEnum: {}.propertyIsEnumerable,
			getDesc: o.getOwnPropertyDescriptor,
			setDesc: o.defineProperty,
			setDescs: o.defineProperties,
			getKeys: o.keys,
			getNames: o.getOwnPropertyNames,
			getSymbols: o.getOwnPropertySymbols,
			each: [].forEach
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.keyof.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-iobject.js");
		e.exports = function(e, t) {
			for (var o, s = r(e), i = n.getKeys(s), a = i.length, l = 0; a > l;)
				if (s[o = i[l++]] === t) return o
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.library.js": function(e, t) {
		e.exports = !0
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.object-assign.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-object.js"),
			s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.iobject.js");
		e.exports = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.fails.js")(function() {
			var e = Object.assign,
				t = {},
				o = {},
				n = Symbol(),
				r = "abcdefghijklmnopqrst";
			return t[n] = 7, r.split("").forEach(function(e) {
				o[e] = e
			}), 7 != e({}, t)[n] || Object.keys(e({}, o)).join("") != r
		}) ? function(e, t) {
			for (var o = r(e), i = arguments, a = i.length, l = 1, u = n.getKeys, d = n.getSymbols, c = n.isEnum; a > l;)
				for (var f, p = s(i[l++]), h = d ? u(p).concat(d(p)) : u(p), m = h.length, b = 0; m > b;) c.call(p, f = h[b++]) && (o[f] = p[f]);
			return o
		} : Object.assign
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.object-sap.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.export.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js"),
			s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.fails.js");
		e.exports = function(e, t) {
			var o = (r.Object || {})[e] || Object[e],
				i = {};
			i[e] = t(o), n(n.S + n.F * s(function() {
				o(1)
			}), "Object", i)
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.property-desc.js": function(e, t) {
		e.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.redefine.js": function(e, t, o) {
		e.exports = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.hide.js")
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.set-proto.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js").getDesc,
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.is-object.js"),
			s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.an-object.js"),
			i = function(e, t) {
				if (s(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
			};
		e.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
				try {
					r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.ctx.js")(Function.call, n(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
				} catch (e) {
					t = !0
				}
				return function(e, o) {
					return i(e, o), t ? e.__proto__ = o : r(e, o), e
				}
			}({}, !1) : void 0),
			check: i
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.set-to-string-tag.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js").setDesc,
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.has.js"),
			s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.wks.js")("toStringTag");
		e.exports = function(e, t, o) {
			e && !r(e = o ? e : e.prototype, s) && n(e, s, {
				configurable: !0,
				value: t
			})
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.shared.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.global.js"),
			r = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
		e.exports = function(e) {
			return r[e] || (r[e] = {})
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-iobject.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.iobject.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.defined.js");
		e.exports = function(e) {
			return n(r(e))
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-object.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.defined.js");
		e.exports = function(e) {
			return Object(n(e))
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.uid.js": function(e, t) {
		var o = 0,
			n = Math.random();
		e.exports = function(e) {
			return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++o + n).toString(36))
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.wks.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.shared.js")("wks"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.uid.js"),
			s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.global.js").Symbol;
		e.exports = function(e) {
			return n[e] || (n[e] = s && s[e] || (s || r)("Symbol." + e))
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.export.js");
		n(n.S + n.F, "Object", {
			assign: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.object-assign.js")
		})
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.get-prototype-of.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-object.js");
		o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.object-sap.js")("getPrototypeOf", function(e) {
			return function(t) {
				return e(n(t))
			}
		})
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js": function(e, t, o) {
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.export.js");
		n(n.S, "Object", {
			setPrototypeOf: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.set-proto.js").set
		})
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js": function(e, t) {},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js": function(e, t, o) {
		"use strict";
		var n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.global.js"),
			s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.has.js"),
			i = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.descriptors.js"),
			a = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.export.js"),
			l = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.redefine.js"),
			u = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.fails.js"),
			d = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.shared.js"),
			c = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.set-to-string-tag.js"),
			f = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.uid.js"),
			p = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.wks.js"),
			h = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.keyof.js"),
			m = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.get-names.js"),
			b = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.enum-keys.js"),
			g = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.is-array.js"),
			v = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.an-object.js"),
			y = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-iobject.js"),
			_ = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.property-desc.js"),
			j = n.getDesc,
			x = n.setDesc,
			w = n.create,
			C = m.get,
			k = r.Symbol,
			T = r.JSON,
			S = T && T.stringify,
			E = !1,
			M = p("_hidden"),
			A = n.isEnum,
			P = d("symbol-registry"),
			R = d("symbols"),
			N = "function" == typeof k,
			$ = Object.prototype,
			L = i && u(function() {
				return 7 != w(x({}, "a", {
					get: function() {
						return x(this, "a", {
							value: 7
						}).a
					}
				})).a
			}) ? function(e, t, o) {
				var n = j($, t);
				n && delete $[t], x(e, t, o), n && e !== $ && x($, t, n)
			} : x,
			D = function(e) {
				var t = R[e] = w(k.prototype);
				return t._k = e, i && E && L($, e, {
					configurable: !0,
					set: function(t) {
						s(this, M) && s(this[M], e) && (this[M][e] = !1), L(this, e, _(1, t))
					}
				}), t
			},
			O = function(e) {
				return "symbol" == typeof e
			},
			I = function(e, t, o) {
				return o && s(R, t) ? (o.enumerable ? (s(e, M) && e[M][t] && (e[M][t] = !1), o = w(o, {
					enumerable: _(0, !1)
				})) : (s(e, M) || x(e, M, _(1, {})), e[M][t] = !0), L(e, t, o)) : x(e, t, o)
			},
			B = function(e, t) {
				v(e);
				for (var o, n = b(t = y(t)), r = 0, s = n.length; s > r;) I(e, o = n[r++], t[o]);
				return e
			},
			F = function(e, t) {
				return void 0 === t ? w(e) : B(w(e), t)
			},
			q = function(e) {
				var t = A.call(this, e);
				return !(t || !s(this, e) || !s(R, e) || s(this, M) && this[M][e]) || t
			},
			U = function(e, t) {
				var o = j(e = y(e), t);
				return !o || !s(R, t) || s(e, M) && e[M][t] || (o.enumerable = !0), o
			},
			H = function(e) {
				for (var t, o = C(y(e)), n = [], r = 0; o.length > r;) s(R, t = o[r++]) || t == M || n.push(t);
				return n
			},
			z = function(e) {
				for (var t, o = C(y(e)), n = [], r = 0; o.length > r;) s(R, t = o[r++]) && n.push(R[t]);
				return n
			},
			W = function(e) {
				if (void 0 !== e && !O(e)) {
					for (var t, o, n = [e], r = 1, s = arguments; s.length > r;) n.push(s[r++]);
					return t = n[1], "function" == typeof t && (o = t), !o && g(t) || (t = function(e, t) {
						if (o && (t = o.call(this, e, t)), !O(t)) return t
					}), n[1] = t, S.apply(T, n)
				}
			},
			Y = u(function() {
				var e = k();
				return "[null]" != S([e]) || "{}" != S({
					a: e
				}) || "{}" != S(Object(e))
			});
		N || (k = function() {
			if (O(this)) throw TypeError("Symbol is not a constructor");
			return D(f(arguments.length > 0 ? arguments[0] : void 0))
		}, l(k.prototype, "toString", function() {
			return this._k
		}), O = function(e) {
			return e instanceof k
		}, n.create = F, n.isEnum = q, n.getDesc = U, n.setDesc = I, n.setDescs = B, n.getNames = m.get = H, n.getSymbols = z, i && !o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.library.js") && l($, "propertyIsEnumerable", q, !0));
		var X = {
			for: function(e) {
				return s(P, e += "") ? P[e] : P[e] = k(e)
			},
			keyFor: function(e) {
				return h(P, e)
			},
			useSetter: function() {
				E = !0
			},
			useSimple: function() {
				E = !1
			}
		};
		n.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function(e) {
			var t = p(e);
			X[e] = N ? t : D(t)
		}), E = !0, a(a.G + a.W, {
			Symbol: k
		}), a(a.S, "Symbol", X), a(a.S + a.F * !N, "Object", {
			create: F,
			defineProperty: I,
			defineProperties: B,
			getOwnPropertyDescriptor: U,
			getOwnPropertyNames: H,
			getOwnPropertySymbols: z
		}), T && a(a.S + a.F * (!N || Y), "JSON", {
			stringify: W
		}), c(k, "Symbol"), c(Math, "Math", !0), c(r.JSON, "JSON", !0)
	},
	"../../../../shared/node_modules/base64-js/index.js": function(e, t, o) {
		"use strict";

		function n(e) {
			var t = e.length;
			if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
		}

		function r(e) {
			return 3 * e.length / 4 - n(e)
		}

		function s(e) {
			var t, o, r, s, i, a = e.length;
			s = n(e), i = new c(3 * a / 4 - s), o = s > 0 ? a - 4 : a;
			var l = 0;
			for (t = 0; t < o; t += 4) r = d[e.charCodeAt(t)] << 18 | d[e.charCodeAt(t + 1)] << 12 | d[e.charCodeAt(t + 2)] << 6 | d[e.charCodeAt(t + 3)], i[l++] = r >> 16 & 255, i[l++] = r >> 8 & 255, i[l++] = 255 & r;
			return 2 === s ? (r = d[e.charCodeAt(t)] << 2 | d[e.charCodeAt(t + 1)] >> 4, i[l++] = 255 & r) : 1 === s && (r = d[e.charCodeAt(t)] << 10 | d[e.charCodeAt(t + 1)] << 4 | d[e.charCodeAt(t + 2)] >> 2, i[l++] = r >> 8 & 255, i[l++] = 255 & r), i
		}

		function i(e) {
			return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e]
		}

		function a(e, t, o) {
			for (var n, r = [], s = t; s < o; s += 3) n = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2], r.push(i(n));
			return r.join("")
		}

		function l(e) {
			for (var t, o = e.length, n = o % 3, r = "", s = [], i = 0, l = o - n; i < l; i += 16383) s.push(a(e, i, i + 16383 > l ? l : i + 16383));
			return 1 === n ? (t = e[o - 1], r += u[t >> 2], r += u[t << 4 & 63], r += "==") : 2 === n && (t = (e[o - 2] << 8) + e[o - 1], r += u[t >> 10], r += u[t >> 4 & 63], r += u[t << 2 & 63], r += "="), s.push(r), s.join("")
		}
		t.byteLength = r, t.toByteArray = s, t.fromByteArray = l;
		for (var u = [], d = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, h = f.length; p < h; ++p) u[p] = f[p], d[f.charCodeAt(p)] = p;
		d["-".charCodeAt(0)] = 62, d["_".charCodeAt(0)] = 63
	},
	"../../../../shared/node_modules/buffer/index.js": function(e, t, o) {
		"use strict";
		(function(e) {
			function n() {
				return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}

			function r(e, t) {
				if (n() < t) throw new RangeError("Invalid typed array length");
				return s.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = s.prototype) : (null === e && (e = new s(t)), e.length = t), e
			}

			function s(e, t, o) {
				if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(e, t, o);
				if ("number" == typeof e) {
					if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
					return u(this, e)
				}
				return i(this, e, t, o)
			}

			function i(e, t, o, n) {
				if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? f(e, t, o, n) : "string" == typeof t ? d(e, t, o) : p(e, t)
			}

			function a(e) {
				if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
				if (e < 0) throw new RangeError('"size" argument must not be negative')
			}

			function l(e, t, o, n) {
				return a(t), t <= 0 ? r(e, t) : void 0 !== o ? "string" == typeof n ? r(e, t).fill(o, n) : r(e, t).fill(o) : r(e, t)
			}

			function u(e, t) {
				if (a(t), e = r(e, t < 0 ? 0 : 0 | h(t)), !s.TYPED_ARRAY_SUPPORT)
					for (var o = 0; o < t; ++o) e[o] = 0;
				return e
			}

			function d(e, t, o) {
				if ("string" == typeof o && "" !== o || (o = "utf8"), !s.isEncoding(o)) throw new TypeError('"encoding" must be a valid string encoding');
				var n = 0 | b(t, o);
				e = r(e, n);
				var i = e.write(t, o);
				return i !== n && (e = e.slice(0, i)), e
			}

			function c(e, t) {
				var o = t.length < 0 ? 0 : 0 | h(t.length);
				e = r(e, o);
				for (var n = 0; n < o; n += 1) e[n] = 255 & t[n];
				return e
			}

			function f(e, t, o, n) {
				if (t.byteLength, o < 0 || t.byteLength < o) throw new RangeError("'offset' is out of bounds");
				if (t.byteLength < o + (n || 0)) throw new RangeError("'length' is out of bounds");
				return t = void 0 === o && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, o) : new Uint8Array(t, o, n), s.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = s.prototype) : e = c(e, t), e
			}

			function p(e, t) {
				if (s.isBuffer(t)) {
					var o = 0 | h(t.length);
					return e = r(e, o), 0 === e.length ? e : (t.copy(e, 0, 0, o), e)
				}
				if (t) {
					if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || V(t.length) ? r(e, 0) : c(e, t);
					if ("Buffer" === t.type && Q(t.data)) return c(e, t.data)
				}
				throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
			}

			function h(e) {
				if (e >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
				return 0 | e
			}

			function m(e) {
				return +e != e && (e = 0), s.alloc(+e)
			}

			function b(e, t) {
				if (s.isBuffer(e)) return e.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
				"string" != typeof e && (e = "" + e);
				var o = e.length;
				if (0 === o) return 0;
				for (var n = !1;;) switch (t) {
					case "ascii":
					case "latin1":
					case "binary":
						return o;
					case "utf8":
					case "utf-8":
					case void 0:
						return z(e).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * o;
					case "hex":
						return o >>> 1;
					case "base64":
						return X(e).length;
					default:
						if (n) return z(e).length;
						t = ("" + t).toLowerCase(), n = !0
				}
			}

			function g(e, t, o) {
				var n = !1;
				if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
				if ((void 0 === o || o > this.length) && (o = this.length), o <= 0) return "";
				if (o >>>= 0, t >>>= 0, o <= t) return "";
				for (e || (e = "utf8");;) switch (e) {
					case "hex":
						return R(this, t, o);
					case "utf8":
					case "utf-8":
						return E(this, t, o);
					case "ascii":
						return A(this, t, o);
					case "latin1":
					case "binary":
						return P(this, t, o);
					case "base64":
						return S(this, t, o);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return N(this, t, o);
					default:
						if (n) throw new TypeError("Unknown encoding: " + e);
						e = (e + "").toLowerCase(), n = !0
				}
			}

			function v(e, t, o) {
				var n = e[t];
				e[t] = e[o], e[o] = n
			}

			function y(e, t, o, n, r) {
				if (0 === e.length) return -1;
				if ("string" == typeof o ? (n = o, o = 0) : o > 2147483647 ? o = 2147483647 : o < -2147483648 && (o = -2147483648), o = +o, isNaN(o) && (o = r ? 0 : e.length - 1), o < 0 && (o = e.length + o), o >= e.length) {
					if (r) return -1;
					o = e.length - 1
				} else if (o < 0) {
					if (!r) return -1;
					o = 0
				}
				if ("string" == typeof t && (t = s.from(t, n)), s.isBuffer(t)) return 0 === t.length ? -1 : _(e, t, o, n, r);
				if ("number" == typeof t) return t &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, o) : Uint8Array.prototype.lastIndexOf.call(e, t, o) : _(e, [t], o, n, r);
				throw new TypeError("val must be string, number or Buffer")
			}

			function _(e, t, o, n, r) {
				function s(e, t) {
					return 1 === i ? e[t] : e.readUInt16BE(t * i)
				}
				var i = 1,
					a = e.length,
					l = t.length;
				if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
					if (e.length < 2 || t.length < 2) return -1;
					i = 2, a /= 2, l /= 2, o /= 2
				}
				var u;
				if (r) {
					var d = -1;
					for (u = o; u < a; u++)
						if (s(e, u) === s(t, -1 === d ? 0 : u - d)) {
							if (-1 === d && (d = u), u - d + 1 === l) return d * i
						} else -1 !== d && (u -= u - d), d = -1
				} else
					for (o + l > a && (o = a - l), u = o; u >= 0; u--) {
						for (var c = !0, f = 0; f < l; f++)
							if (s(e, u + f) !== s(t, f)) {
								c = !1;
								break
							}
						if (c) return u
					}
				return -1
			}

			function j(e, t, o, n) {
				o = Number(o) || 0;
				var r = e.length - o;
				n ? (n = Number(n)) > r && (n = r) : n = r;
				var s = t.length;
				if (s % 2 != 0) throw new TypeError("Invalid hex string");
				n > s / 2 && (n = s / 2);
				for (var i = 0; i < n; ++i) {
					var a = parseInt(t.substr(2 * i, 2), 16);
					if (isNaN(a)) return i;
					e[o + i] = a
				}
				return i
			}

			function x(e, t, o, n) {
				return G(z(t, e.length - o), e, o, n)
			}

			function w(e, t, o, n) {
				return G(W(t), e, o, n)
			}

			function C(e, t, o, n) {
				return w(e, t, o, n)
			}

			function k(e, t, o, n) {
				return G(X(t), e, o, n)
			}

			function T(e, t, o, n) {
				return G(Y(t, e.length - o), e, o, n)
			}

			function S(e, t, o) {
				return 0 === t && o === e.length ? J.fromByteArray(e) : J.fromByteArray(e.slice(t, o))
			}

			function E(e, t, o) {
				o = Math.min(e.length, o);
				for (var n = [], r = t; r < o;) {
					var s = e[r],
						i = null,
						a = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
					if (r + a <= o) {
						var l, u, d, c;
						switch (a) {
							case 1:
								s < 128 && (i = s);
								break;
							case 2:
								l = e[r + 1], 128 == (192 & l) && (c = (31 & s) << 6 | 63 & l) > 127 && (i = c);
								break;
							case 3:
								l = e[r + 1], u = e[r + 2], 128 == (192 & l) && 128 == (192 & u) && (c = (15 & s) << 12 | (63 & l) << 6 | 63 & u) > 2047 && (c < 55296 || c > 57343) && (i = c);
								break;
							case 4:
								l = e[r + 1], u = e[r + 2], d = e[r + 3], 128 == (192 & l) && 128 == (192 & u) && 128 == (192 & d) && (c = (15 & s) << 18 | (63 & l) << 12 | (63 & u) << 6 | 63 & d) > 65535 && c < 1114112 && (i = c)
						}
					}
					null === i ? (i = 65533, a = 1) : i > 65535 && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), n.push(i), r += a
				}
				return M(n)
			}

			function M(e) {
				var t = e.length;
				if (t <= Z) return String.fromCharCode.apply(String, e);
				for (var o = "", n = 0; n < t;) o += String.fromCharCode.apply(String, e.slice(n, n += Z));
				return o
			}

			function A(e, t, o) {
				var n = "";
				o = Math.min(e.length, o);
				for (var r = t; r < o; ++r) n += String.fromCharCode(127 & e[r]);
				return n
			}

			function P(e, t, o) {
				var n = "";
				o = Math.min(e.length, o);
				for (var r = t; r < o; ++r) n += String.fromCharCode(e[r]);
				return n
			}

			function R(e, t, o) {
				var n = e.length;
				(!t || t < 0) && (t = 0), (!o || o < 0 || o > n) && (o = n);
				for (var r = "", s = t; s < o; ++s) r += H(e[s]);
				return r
			}

			function N(e, t, o) {
				for (var n = e.slice(t, o), r = "", s = 0; s < n.length; s += 2) r += String.fromCharCode(n[s] + 256 * n[s + 1]);
				return r
			}

			function $(e, t, o) {
				if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
				if (e + t > o) throw new RangeError("Trying to access beyond buffer length")
			}

			function L(e, t, o, n, r, i) {
				if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (t > r || t < i) throw new RangeError('"value" argument is out of bounds');
				if (o + n > e.length) throw new RangeError("Index out of range")
			}

			function D(e, t, o, n) {
				t < 0 && (t = 65535 + t + 1);
				for (var r = 0, s = Math.min(e.length - o, 2); r < s; ++r) e[o + r] = (t & 255 << 8 * (n ? r : 1 - r)) >>> 8 * (n ? r : 1 - r)
			}

			function O(e, t, o, n) {
				t < 0 && (t = 4294967295 + t + 1);
				for (var r = 0, s = Math.min(e.length - o, 4); r < s; ++r) e[o + r] = t >>> 8 * (n ? r : 3 - r) & 255
			}

			function I(e, t, o, n, r, s) {
				if (o + n > e.length) throw new RangeError("Index out of range");
				if (o < 0) throw new RangeError("Index out of range")
			}

			function B(e, t, o, n, r) {
				return r || I(e, t, o, 4, 3.4028234663852886e38, -3.4028234663852886e38), K.write(e, t, o, n, 23, 4), o + 4
			}

			function F(e, t, o, n, r) {
				return r || I(e, t, o, 8, 1.7976931348623157e308, -1.7976931348623157e308), K.write(e, t, o, n, 52, 8), o + 8
			}

			function q(e) {
				if (e = U(e).replace(ee, ""), e.length < 2) return "";
				for (; e.length % 4 != 0;) e += "=";
				return e
			}

			function U(e) {
				return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
			}

			function H(e) {
				return e < 16 ? "0" + e.toString(16) : e.toString(16)
			}

			function z(e, t) {
				t = t || 1 / 0;
				for (var o, n = e.length, r = null, s = [], i = 0; i < n; ++i) {
					if ((o = e.charCodeAt(i)) > 55295 && o < 57344) {
						if (!r) {
							if (o > 56319) {
								(t -= 3) > -1 && s.push(239, 191, 189);
								continue
							}
							if (i + 1 === n) {
								(t -= 3) > -1 && s.push(239, 191, 189);
								continue
							}
							r = o;
							continue
						}
						if (o < 56320) {
							(t -= 3) > -1 && s.push(239, 191, 189), r = o;
							continue
						}
						o = 65536 + (r - 55296 << 10 | o - 56320)
					} else r && (t -= 3) > -1 && s.push(239, 191, 189);
					if (r = null, o < 128) {
						if ((t -= 1) < 0) break;
						s.push(o)
					} else if (o < 2048) {
						if ((t -= 2) < 0) break;
						s.push(o >> 6 | 192, 63 & o | 128)
					} else if (o < 65536) {
						if ((t -= 3) < 0) break;
						s.push(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128)
					} else {
						if (!(o < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						s.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
					}
				}
				return s
			}

			function W(e) {
				for (var t = [], o = 0; o < e.length; ++o) t.push(255 & e.charCodeAt(o));
				return t
			}

			function Y(e, t) {
				for (var o, n, r, s = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) o = e.charCodeAt(i), n = o >> 8, r = o % 256, s.push(r), s.push(n);
				return s
			}

			function X(e) {
				return J.toByteArray(q(e))
			}

			function G(e, t, o, n) {
				for (var r = 0; r < n && !(r + o >= t.length || r >= e.length); ++r) t[r + o] = e[r];
				return r
			}

			function V(e) {
				return e !== e
			}
			var J = o("../../../../shared/node_modules/base64-js/index.js"),
				K = o("../../../../shared/node_modules/ieee754/index.js"),
				Q = o("../../../../shared/node_modules/isarray/index.js");
			t.Buffer = s, t.SlowBuffer = m, t.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
				try {
					var e = new Uint8Array(1);
					return e.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
				} catch (e) {
					return !1
				}
			}(), t.kMaxLength = n(), s.poolSize = 8192, s._augment = function(e) {
				return e.__proto__ = s.prototype, e
			}, s.from = function(e, t, o) {
				return i(null, e, t, o)
			}, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
				value: null,
				configurable: !0
			})), s.alloc = function(e, t, o) {
				return l(null, e, t, o)
			}, s.allocUnsafe = function(e) {
				return u(null, e)
			}, s.allocUnsafeSlow = function(e) {
				return u(null, e)
			}, s.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, s.compare = function(e, t) {
				if (!s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
				if (e === t) return 0;
				for (var o = e.length, n = t.length, r = 0, i = Math.min(o, n); r < i; ++r)
					if (e[r] !== t[r]) {
						o = e[r], n = t[r];
						break
					}
				return o < n ? -1 : n < o ? 1 : 0
			}, s.isEncoding = function(e) {
				switch (String(e).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
				}
			}, s.concat = function(e, t) {
				if (!Q(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return s.alloc(0);
				var o;
				if (void 0 === t)
					for (t = 0, o = 0; o < e.length; ++o) t += e[o].length;
				var n = s.allocUnsafe(t),
					r = 0;
				for (o = 0; o < e.length; ++o) {
					var i = e[o];
					if (!s.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
					i.copy(n, r), r += i.length
				}
				return n
			}, s.byteLength = b, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
				var e = this.length;
				if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var t = 0; t < e; t += 2) v(this, t, t + 1);
				return this
			}, s.prototype.swap32 = function() {
				var e = this.length;
				if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var t = 0; t < e; t += 4) v(this, t, t + 3), v(this, t + 1, t + 2);
				return this
			}, s.prototype.swap64 = function() {
				var e = this.length;
				if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var t = 0; t < e; t += 8) v(this, t, t + 7), v(this, t + 1, t + 6), v(this, t + 2, t + 5), v(this, t + 3, t + 4);
				return this
			}, s.prototype.toString = function() {
				var e = 0 | this.length;
				return 0 === e ? "" : 0 === arguments.length ? E(this, 0, e) : g.apply(this, arguments)
			}, s.prototype.equals = function(e) {
				if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				return this === e || 0 === s.compare(this, e)
			}, s.prototype.inspect = function() {
				var e = "",
					o = t.INSPECT_MAX_BYTES;
				return this.length > 0 && (e = this.toString("hex", 0, o).match(/.{2}/g).join(" "), this.length > o && (e += " ... ")), "<Buffer " + e + ">"
			}, s.prototype.compare = function(e, t, o, n, r) {
				if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				if (void 0 === t && (t = 0), void 0 === o && (o = e ? e.length : 0), void 0 === n && (n = 0), void 0 === r && (r = this.length), t < 0 || o > e.length || n < 0 || r > this.length) throw new RangeError("out of range index");
				if (n >= r && t >= o) return 0;
				if (n >= r) return -1;
				if (t >= o) return 1;
				if (t >>>= 0, o >>>= 0, n >>>= 0, r >>>= 0, this === e) return 0;
				for (var i = r - n, a = o - t, l = Math.min(i, a), u = this.slice(n, r), d = e.slice(t, o), c = 0; c < l; ++c)
					if (u[c] !== d[c]) {
						i = u[c], a = d[c];
						break
					}
				return i < a ? -1 : a < i ? 1 : 0
			}, s.prototype.includes = function(e, t, o) {
				return -1 !== this.indexOf(e, t, o)
			}, s.prototype.indexOf = function(e, t, o) {
				return y(this, e, t, o, !0)
			}, s.prototype.lastIndexOf = function(e, t, o) {
				return y(this, e, t, o, !1)
			}, s.prototype.write = function(e, t, o, n) {
				if (void 0 === t) n = "utf8", o = this.length, t = 0;
				else if (void 0 === o && "string" == typeof t) n = t, o = this.length, t = 0;
				else {
					if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					t |= 0, isFinite(o) ? (o |= 0, void 0 === n && (n = "utf8")) : (n = o, o = void 0)
				}
				var r = this.length - t;
				if ((void 0 === o || o > r) && (o = r), e.length > 0 && (o < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				n || (n = "utf8");
				for (var s = !1;;) switch (n) {
					case "hex":
						return j(this, e, t, o);
					case "utf8":
					case "utf-8":
						return x(this, e, t, o);
					case "ascii":
						return w(this, e, t, o);
					case "latin1":
					case "binary":
						return C(this, e, t, o);
					case "base64":
						return k(this, e, t, o);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return T(this, e, t, o);
					default:
						if (s) throw new TypeError("Unknown encoding: " + n);
						n = ("" + n).toLowerCase(), s = !0
				}
			}, s.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};
			var Z = 4096;
			s.prototype.slice = function(e, t) {
				var o = this.length;
				e = ~~e, t = void 0 === t ? o : ~~t, e < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o), t < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o), t < e && (t = e);
				var n;
				if (s.TYPED_ARRAY_SUPPORT) n = this.subarray(e, t), n.__proto__ = s.prototype;
				else {
					var r = t - e;
					n = new s(r, void 0);
					for (var i = 0; i < r; ++i) n[i] = this[i + e]
				}
				return n
			}, s.prototype.readUIntLE = function(e, t, o) {
				e |= 0, t |= 0, o || $(e, t, this.length);
				for (var n = this[e], r = 1, s = 0; ++s < t && (r *= 256);) n += this[e + s] * r;
				return n
			}, s.prototype.readUIntBE = function(e, t, o) {
				e |= 0, t |= 0, o || $(e, t, this.length);
				for (var n = this[e + --t], r = 1; t > 0 && (r *= 256);) n += this[e + --t] * r;
				return n
			}, s.prototype.readUInt8 = function(e, t) {
				return t || $(e, 1, this.length), this[e]
			}, s.prototype.readUInt16LE = function(e, t) {
				return t || $(e, 2, this.length), this[e] | this[e + 1] << 8
			}, s.prototype.readUInt16BE = function(e, t) {
				return t || $(e, 2, this.length), this[e] << 8 | this[e + 1]
			}, s.prototype.readUInt32LE = function(e, t) {
				return t || $(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
			}, s.prototype.readUInt32BE = function(e, t) {
				return t || $(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
			}, s.prototype.readIntLE = function(e, t, o) {
				e |= 0, t |= 0, o || $(e, t, this.length);
				for (var n = this[e], r = 1, s = 0; ++s < t && (r *= 256);) n += this[e + s] * r;
				return r *= 128, n >= r && (n -= Math.pow(2, 8 * t)), n
			}, s.prototype.readIntBE = function(e, t, o) {
				e |= 0, t |= 0, o || $(e, t, this.length);
				for (var n = t, r = 1, s = this[e + --n]; n > 0 && (r *= 256);) s += this[e + --n] * r;
				return r *= 128, s >= r && (s -= Math.pow(2, 8 * t)), s
			}, s.prototype.readInt8 = function(e, t) {
				return t || $(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
			}, s.prototype.readInt16LE = function(e, t) {
				t || $(e, 2, this.length);
				var o = this[e] | this[e + 1] << 8;
				return 32768 & o ? 4294901760 | o : o
			}, s.prototype.readInt16BE = function(e, t) {
				t || $(e, 2, this.length);
				var o = this[e + 1] | this[e] << 8;
				return 32768 & o ? 4294901760 | o : o
			}, s.prototype.readInt32LE = function(e, t) {
				return t || $(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
			}, s.prototype.readInt32BE = function(e, t) {
				return t || $(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
			}, s.prototype.readFloatLE = function(e, t) {
				return t || $(e, 4, this.length), K.read(this, e, !0, 23, 4)
			}, s.prototype.readFloatBE = function(e, t) {
				return t || $(e, 4, this.length), K.read(this, e, !1, 23, 4)
			}, s.prototype.readDoubleLE = function(e, t) {
				return t || $(e, 8, this.length), K.read(this, e, !0, 52, 8)
			}, s.prototype.readDoubleBE = function(e, t) {
				return t || $(e, 8, this.length), K.read(this, e, !1, 52, 8)
			}, s.prototype.writeUIntLE = function(e, t, o, n) {
				if (e = +e, t |= 0, o |= 0, !n) {
					L(this, e, t, o, Math.pow(2, 8 * o) - 1, 0)
				}
				var r = 1,
					s = 0;
				for (this[t] = 255 & e; ++s < o && (r *= 256);) this[t + s] = e / r & 255;
				return t + o
			}, s.prototype.writeUIntBE = function(e, t, o, n) {
				if (e = +e, t |= 0, o |= 0, !n) {
					L(this, e, t, o, Math.pow(2, 8 * o) - 1, 0)
				}
				var r = o - 1,
					s = 1;
				for (this[t + r] = 255 & e; --r >= 0 && (s *= 256);) this[t + r] = e / s & 255;
				return t + o
			}, s.prototype.writeUInt8 = function(e, t, o) {
				return e = +e, t |= 0, o || L(this, e, t, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
			}, s.prototype.writeUInt16LE = function(e, t, o) {
				return e = +e, t |= 0, o || L(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : D(this, e, t, !0), t + 2
			}, s.prototype.writeUInt16BE = function(e, t, o) {
				return e = +e, t |= 0, o || L(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : D(this, e, t, !1), t + 2
			}, s.prototype.writeUInt32LE = function(e, t, o) {
				return e = +e, t |= 0, o || L(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : O(this, e, t, !0), t + 4
			}, s.prototype.writeUInt32BE = function(e, t, o) {
				return e = +e, t |= 0, o || L(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : O(this, e, t, !1), t + 4
			}, s.prototype.writeIntLE = function(e, t, o, n) {
				if (e = +e, t |= 0, !n) {
					var r = Math.pow(2, 8 * o - 1);
					L(this, e, t, o, r - 1, -r)
				}
				var s = 0,
					i = 1,
					a = 0;
				for (this[t] = 255 & e; ++s < o && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1), this[t + s] = (e / i >> 0) - a & 255;
				return t + o
			}, s.prototype.writeIntBE = function(e, t, o, n) {
				if (e = +e, t |= 0, !n) {
					var r = Math.pow(2, 8 * o - 1);
					L(this, e, t, o, r - 1, -r)
				}
				var s = o - 1,
					i = 1,
					a = 0;
				for (this[t + s] = 255 & e; --s >= 0 && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1), this[t + s] = (e / i >> 0) - a & 255;
				return t + o
			}, s.prototype.writeInt8 = function(e, t, o) {
				return e = +e, t |= 0, o || L(this, e, t, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
			}, s.prototype.writeInt16LE = function(e, t, o) {
				return e = +e, t |= 0, o || L(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : D(this, e, t, !0), t + 2
			}, s.prototype.writeInt16BE = function(e, t, o) {
				return e = +e, t |= 0, o || L(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : D(this, e, t, !1), t + 2
			}, s.prototype.writeInt32LE = function(e, t, o) {
				return e = +e, t |= 0, o || L(this, e, t, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : O(this, e, t, !0), t + 4
			}, s.prototype.writeInt32BE = function(e, t, o) {
				return e = +e, t |= 0, o || L(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : O(this, e, t, !1), t + 4
			}, s.prototype.writeFloatLE = function(e, t, o) {
				return B(this, e, t, !0, o)
			}, s.prototype.writeFloatBE = function(e, t, o) {
				return B(this, e, t, !1, o)
			}, s.prototype.writeDoubleLE = function(e, t, o) {
				return F(this, e, t, !0, o)
			}, s.prototype.writeDoubleBE = function(e, t, o) {
				return F(this, e, t, !1, o)
			}, s.prototype.copy = function(e, t, o, n) {
				if (o || (o = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < o && (n = o), n === o) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (o < 0 || o >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), e.length - t < n - o && (n = e.length - t + o);
				var r, i = n - o;
				if (this === e && o < t && t < n)
					for (r = i - 1; r >= 0; --r) e[r + t] = this[r + o];
				else if (i < 1e3 || !s.TYPED_ARRAY_SUPPORT)
					for (r = 0; r < i; ++r) e[r + t] = this[r + o];
				else Uint8Array.prototype.set.call(e, this.subarray(o, o + i), t);
				return i
			}, s.prototype.fill = function(e, t, o, n) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (n = t, t = 0, o = this.length) : "string" == typeof o && (n = o, o = this.length), 1 === e.length) {
						var r = e.charCodeAt(0);
						r < 256 && (e = r)
					}
					if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
					if ("string" == typeof n && !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < o) throw new RangeError("Out of range index");
				if (o <= t) return this;
				t >>>= 0, o = void 0 === o ? this.length : o >>> 0, e || (e = 0);
				var i;
				if ("number" == typeof e)
					for (i = t; i < o; ++i) this[i] = e;
				else {
					var a = s.isBuffer(e) ? e : z(new s(e, n).toString()),
						l = a.length;
					for (i = 0; i < o - t; ++i) this[i + t] = a[i % l]
				}
				return this
			};
			var ee = /[^+\/0-9A-Za-z-_]/g
		}).call(t, o("../../../../shared/node_modules/webpack/buildin/global.js"))
	},
	'../../../../shared/node_modules/css-loader/index.js!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6292e408","scoped":true,"hasInlineConfig":true}!../../../../shared/node_modules/sass-loader/lib/loader.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./galileo/desktop/button/base.vue': function(e, t, o) {
		t = e.exports = o("../../../../shared/node_modules/css-loader/lib/css-base.js")(), t.push([e.i, "\nbutton[data-v-6292e408] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: auto !important;\n  cursor: pointer;\n}\nbutton *[data-v-6292e408] {\n    pointer-events: none;\n}\nbutton[data-v-6292e408]:focus {\n    outline-width: 0;\n}\n", ""])
	},
	'../../../../shared/node_modules/css-loader/index.js!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-db8f69d6","scoped":false,"hasInlineConfig":true}!../../../../shared/node_modules/sass-loader/lib/loader.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./javascripts/web/components/users/PublicationList/PublicationListModal.vue': function(e, t, o) {
		t = e.exports = o("../../../../shared/node_modules/css-loader/lib/css-base.js")(), t.push([e.i, '\n@charset "UTF-8";\n/*\n * 变量\n*/\n.modal.publication-list-modal .modal-dialog {\n  width: 560px;\n}\n.modal.publication-list-modal .modal-body ul {\n  padding: 11px 20px;\n}\n.modal.publication-list-modal .modal-body ul li {\n    list-style: none;\n}\n.modal.publication-list-modal .modal-body ul li .cover {\n      width: 56px;\n      height: 75px;\n      vertical-align: middle;\n      display: inline-block;\n      margin-right: 5px;\n}\n.modal.publication-list-modal .modal-body ul li .cover img {\n        width: 100%;\n        height: 100%;\n}\n.modal.publication-list-modal .modal-body ul li .info {\n      display: inline-block;\n      vertical-align: middle;\n      max-width: 440px;\n}\n.modal.publication-list-modal .modal-body ul li .info .name {\n        color: #333333;\n        font-size: 14px;\n}\n.modal.publication-list-modal .modal-body ul li .info .intros {\n        color: #969696;\n        font-size: 14px;\n        margin-top: 5px;\n}\n.reader-night-mode .modal.publication-list-modal li .info .name {\n  color: #C8C8C8;\n}\n.reader-night-mode .modal.publication-list-modal li .info .name:hover {\n    color: #ffffff !important;\n}\n', ""])
	},
	"../../../../shared/node_modules/css-loader/lib/css-base.js": function(e, t) {
		e.exports = function() {
			var e = [];
			return e.toString = function() {
				for (var e = [], t = 0; t < this.length; t++) {
					var o = this[t];
					o[2] ? e.push("@media " + o[2] + "{" + o[1] + "}") : e.push(o[1])
				}
				return e.join("")
			}, e.i = function(t, o) {
				"string" == typeof t && (t = [
					[null, t, ""]
				]);
				for (var n = {}, r = 0; r < this.length; r++) {
					var s = this[r][0];
					"number" == typeof s && (n[s] = !0)
				}
				for (r = 0; r < t.length; r++) {
					var i = t[r];
					"number" == typeof i[0] && n[i[0]] || (o && !i[2] ? i[2] = o : o && (i[2] = "(" + i[2] + ") and (" + o + ")"), e.push(i))
				}
			}, e
		}
	},
	"../../../../shared/node_modules/ieee754/index.js": function(e, t) {
		t.read = function(e, t, o, n, r) {
			var s, i, a = 8 * r - n - 1,
				l = (1 << a) - 1,
				u = l >> 1,
				d = -7,
				c = o ? r - 1 : 0,
				f = o ? -1 : 1,
				p = e[t + c];
			for (c += f, s = p & (1 << -d) - 1, p >>= -d, d += a; d > 0; s = 256 * s + e[t + c], c += f, d -= 8);
			for (i = s & (1 << -d) - 1, s >>= -d, d += n; d > 0; i = 256 * i + e[t + c], c += f, d -= 8);
			if (0 === s) s = 1 - u;
			else {
				if (s === l) return i ? NaN : 1 / 0 * (p ? -1 : 1);
				i += Math.pow(2, n), s -= u
			}
			return (p ? -1 : 1) * i * Math.pow(2, s - n)
		}, t.write = function(e, t, o, n, r, s) {
			var i, a, l, u = 8 * s - r - 1,
				d = (1 << u) - 1,
				c = d >> 1,
				f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				p = n ? 0 : s - 1,
				h = n ? 1 : -1,
				m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
			for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, i = d) : (i = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -i)) < 1 && (i--, l *= 2), t += i + c >= 1 ? f / l : f * Math.pow(2, 1 - c), t * l >= 2 && (i++, l /= 2), i + c >= d ? (a = 0, i = d) : i + c >= 1 ? (a = (t * l - 1) * Math.pow(2, r), i += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, r), i = 0)); r >= 8; e[o + p] = 255 & a, p += h, a /= 256, r -= 8);
			for (i = i << r | a, u += r; u > 0; e[o + p] = 255 & i, p += h, i /= 256, u -= 8);
			e[o + p - h] |= 128 * m
		}
	},
	"../../../../shared/node_modules/isarray/index.js": function(e, t) {
		var o = {}.toString;
		e.exports = Array.isArray || function(e) {
			return "[object Array]" == o.call(e)
		}
	},
	"../../../../shared/node_modules/jquery/dist/jquery.js": function(e, t, o) {
		var n, r;
		! function(t, o) {
			"object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? o(t, !0) : function(e) {
				if (!e.document) throw new Error("jQuery requires a window with a document");
				return o(e)
			} : o(t)
		}("undefined" != typeof window ? window : this, function(o, s) {
			function i(e) {
				var t = !!e && "length" in e && e.length,
					o = le.type(e);
				return "function" !== o && !le.isWindow(e) && ("array" === o || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
			}

			function a(e, t, o) {
				if (le.isFunction(t)) return le.grep(e, function(e, n) {
					return !!t.call(e, n, e) !== o
				});
				if (t.nodeType) return le.grep(e, function(e) {
					return e === t !== o
				});
				if ("string" == typeof t) {
					if (ve.test(t)) return le.filter(t, e, o);
					t = le.filter(t, e)
				}
				return le.grep(e, function(e) {
					return ne.call(t, e) > -1 !== o
				})
			}

			function l(e, t) {
				for (;
					(e = e[t]) && 1 !== e.nodeType;);
				return e
			}

			function u(e) {
				var t = {};
				return le.each(e.match(we) || [], function(e, o) {
					t[o] = !0
				}), t
			}

			function d() {
				Z.removeEventListener("DOMContentLoaded", d), o.removeEventListener("load", d), le.ready()
			}

			function c() {
				this.expando = le.expando + c.uid++
			}

			function f(e, t, o) {
				var n;
				if (void 0 === o && 1 === e.nodeType)
					if (n = "data-" + t.replace(Ae, "-$&").toLowerCase(), "string" == typeof(o = e.getAttribute(n))) {
						try {
							o = "true" === o || "false" !== o && ("null" === o ? null : +o + "" === o ? +o : Me.test(o) ? le.parseJSON(o) : o)
						} catch (e) {}
						Ee.set(e, t, o)
					} else o = void 0;
				return o
			}

			function p(e, t, o, n) {
				var r, s = 1,
					i = 20,
					a = n ? function() {
						return n.cur()
					} : function() {
						return le.css(e, t, "")
					},
					l = a(),
					u = o && o[3] || (le.cssNumber[t] ? "" : "px"),
					d = (le.cssNumber[t] || "px" !== u && +l) && Re.exec(le.css(e, t));
				if (d && d[3] !== u) {
					u = u || d[3], o = o || [], d = +l || 1;
					do {
						s = s || ".5", d /= s, le.style(e, t, d + u)
					} while (s !== (s = a() / l) && 1 !== s && --i)
				}
				return o && (d = +d || +l || 0, r = o[1] ? d + (o[1] + 1) * o[2] : +o[2], n && (n.unit = u, n.start = d, n.end = r)), r
			}

			function h(e, t) {
				var o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
				return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], o) : o
			}

			function m(e, t) {
				for (var o = 0, n = e.length; o < n; o++) Se.set(e[o], "globalEval", !t || Se.get(t[o], "globalEval"))
			}

			function b(e, t, o, n, r) {
				for (var s, i, a, l, u, d, c = t.createDocumentFragment(), f = [], p = 0, b = e.length; p < b; p++)
					if ((s = e[p]) || 0 === s)
						if ("object" === le.type(s)) le.merge(f, s.nodeType ? [s] : s);
						else if (Be.test(s)) {
					for (i = i || c.appendChild(t.createElement("div")), a = (De.exec(s) || ["", ""])[1].toLowerCase(), l = Ie[a] || Ie._default, i.innerHTML = l[1] + le.htmlPrefilter(s) + l[2], d = l[0]; d--;) i = i.lastChild;
					le.merge(f, i.childNodes), i = c.firstChild, i.textContent = ""
				} else f.push(t.createTextNode(s));
				for (c.textContent = "", p = 0; s = f[p++];)
					if (n && le.inArray(s, n) > -1) r && r.push(s);
					else if (u = le.contains(s.ownerDocument, s), i = h(c.appendChild(s), "script"), u && m(i), o)
					for (d = 0; s = i[d++];) Oe.test(s.type || "") && o.push(s);
				return c
			}

			function g() {
				return !0
			}

			function v() {
				return !1
			}

			function y() {
				try {
					return Z.activeElement
				} catch (e) {}
			}

			function _(e, t, o, n, r, s) {
				var i, a;
				if ("object" == typeof t) {
					"string" != typeof o && (n = n || o, o = void 0);
					for (a in t) _(e, a, o, n, t[a], s);
					return e
				}
				if (null == n && null == r ? (r = o, n = o = void 0) : null == r && ("string" == typeof o ? (r = n, n = void 0) : (r = n, n = o, o = void 0)), !1 === r) r = v;
				else if (!r) return e;
				return 1 === s && (i = r, r = function(e) {
					return le().off(e), i.apply(this, arguments)
				}, r.guid = i.guid || (i.guid = le.guid++)), e.each(function() {
					le.event.add(this, t, r, n, o)
				})
			}

			function j(e, t) {
				return le.nodeName(e, "table") && le.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
			}

			function x(e) {
				return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
			}

			function w(e) {
				var t = Ye.exec(e.type);
				return t ? e.type = t[1] : e.removeAttribute("type"), e
			}

			function C(e, t) {
				var o, n, r, s, i, a, l, u;
				if (1 === t.nodeType) {
					if (Se.hasData(e) && (s = Se.access(e), i = Se.set(t, s), u = s.events)) {
						delete i.handle, i.events = {};
						for (r in u)
							for (o = 0, n = u[r].length; o < n; o++) le.event.add(t, r, u[r][o])
					}
					Ee.hasData(e) && (a = Ee.access(e), l = le.extend({}, a), Ee.set(t, l))
				}
			}

			function k(e, t) {
				var o = t.nodeName.toLowerCase();
				"input" === o && Le.test(e.type) ? t.checked = e.checked : "input" !== o && "textarea" !== o || (t.defaultValue = e.defaultValue)
			}

			function T(e, t, o, n) {
				t = te.apply([], t);
				var r, s, i, a, l, u, d = 0,
					c = e.length,
					f = c - 1,
					p = t[0],
					m = le.isFunction(p);
				if (m || c > 1 && "string" == typeof p && !ae.checkClone && We.test(p)) return e.each(function(r) {
					var s = e.eq(r);
					m && (t[0] = p.call(this, r, s.html())), T(s, t, o, n)
				});
				if (c && (r = b(t, e[0].ownerDocument, !1, e, n), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
					for (i = le.map(h(r, "script"), x), a = i.length; d < c; d++) l = r, d !== f && (l = le.clone(l, !0, !0), a && le.merge(i, h(l, "script"))), o.call(e[d], l, d);
					if (a)
						for (u = i[i.length - 1].ownerDocument, le.map(i, w), d = 0; d < a; d++) l = i[d], Oe.test(l.type || "") && !Se.access(l, "globalEval") && le.contains(u, l) && (l.src ? le._evalUrl && le._evalUrl(l.src) : le.globalEval(l.textContent.replace(Xe, "")))
				}
				return e
			}

			function S(e, t, o) {
				for (var n, r = t ? le.filter(t, e) : e, s = 0; null != (n = r[s]); s++) o || 1 !== n.nodeType || le.cleanData(h(n)), n.parentNode && (o && le.contains(n.ownerDocument, n) && m(h(n, "script")), n.parentNode.removeChild(n));
				return e
			}

			function E(e, t) {
				var o = le(t.createElement(e)).appendTo(t.body),
					n = le.css(o[0], "display");
				return o.detach(), n
			}

			function M(e) {
				var t = Z,
					o = Ve[e];
				return o || (o = E(e, t), "none" !== o && o || (Ge = (Ge || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ge[0].contentDocument, t.write(), t.close(), o = E(e, t), Ge.detach()), Ve[e] = o), o
			}

			function A(e, t, o) {
				var n, r, s, i, a = e.style;
				return o = o || Qe(e), i = o ? o.getPropertyValue(t) || o[t] : void 0, "" !== i && void 0 !== i || le.contains(e.ownerDocument, e) || (i = le.style(e, t)), o && !ae.pixelMarginRight() && Ke.test(i) && Je.test(t) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = i, i = o.width, a.width = n, a.minWidth = r, a.maxWidth = s), void 0 !== i ? i + "" : i
			}

			function P(e, t) {
				return {
					get: function() {
						return e() ? void delete this.get : (this.get = t).apply(this, arguments)
					}
				}
			}

			function R(e) {
				if (e in st) return e;
				for (var t = e[0].toUpperCase() + e.slice(1), o = rt.length; o--;)
					if ((e = rt[o] + t) in st) return e
			}

			function N(e, t, o) {
				var n = Re.exec(t);
				return n ? Math.max(0, n[2] - (o || 0)) + (n[3] || "px") : t
			}

			function $(e, t, o, n, r) {
				for (var s = o === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, i = 0; s < 4; s += 2) "margin" === o && (i += le.css(e, o + Ne[s], !0, r)), n ? ("content" === o && (i -= le.css(e, "padding" + Ne[s], !0, r)), "margin" !== o && (i -= le.css(e, "border" + Ne[s] + "Width", !0, r))) : (i += le.css(e, "padding" + Ne[s], !0, r), "padding" !== o && (i += le.css(e, "border" + Ne[s] + "Width", !0, r)));
				return i
			}

			function L(e, t, n) {
				var r = !0,
					s = "width" === t ? e.offsetWidth : e.offsetHeight,
					i = Qe(e),
					a = "border-box" === le.css(e, "boxSizing", !1, i);
				if (Z.msFullscreenElement && o.top !== o && e.getClientRects().length && (s = Math.round(100 * e.getBoundingClientRect()[t])), s <= 0 || null == s) {
					if (s = A(e, t, i), (s < 0 || null == s) && (s = e.style[t]), Ke.test(s)) return s;
					r = a && (ae.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
				}
				return s + $(e, t, n || (a ? "border" : "content"), r, i) + "px"
			}

			function D(e, t) {
				for (var o, n, r, s = [], i = 0, a = e.length; i < a; i++) n = e[i], n.style && (s[i] = Se.get(n, "olddisplay"), o = n.style.display, t ? (s[i] || "none" !== o || (n.style.display = ""), "" === n.style.display && $e(n) && (s[i] = Se.access(n, "olddisplay", M(n.nodeName)))) : (r = $e(n), "none" === o && r || Se.set(n, "olddisplay", r ? o : le.css(n, "display"))));
				for (i = 0; i < a; i++) n = e[i], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[i] || "" : "none"));
				return e
			}

			function O(e, t, o, n, r) {
				return new O.prototype.init(e, t, o, n, r)
			}

			function I() {
				return o.setTimeout(function() {
					it = void 0
				}), it = le.now()
			}

			function B(e, t) {
				var o, n = 0,
					r = {
						height: e
					};
				for (t = t ? 1 : 0; n < 4; n += 2 - t) o = Ne[n], r["margin" + o] = r["padding" + o] = e;
				return t && (r.opacity = r.width = e), r
			}

			function F(e, t, o) {
				for (var n, r = (H.tweeners[t] || []).concat(H.tweeners["*"]), s = 0, i = r.length; s < i; s++)
					if (n = r[s].call(o, t, e)) return n
			}

			function q(e, t, o) {
				var n, r, s, i, a, l, u, d = this,
					c = {},
					f = e.style,
					p = e.nodeType && $e(e),
					h = Se.get(e, "fxshow");
				o.queue || (a = le._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
					a.unqueued || l()
				}), a.unqueued++, d.always(function() {
					d.always(function() {
						a.unqueued--, le.queue(e, "fx").length || a.empty.fire()
					})
				})), 1 === e.nodeType && ("height" in t || "width" in t) && (o.overflow = [f.overflow, f.overflowX, f.overflowY], u = le.css(e, "display"), "inline" === ("none" === u ? Se.get(e, "olddisplay") || M(e.nodeName) : u) && "none" === le.css(e, "float") && (f.display = "inline-block")), o.overflow && (f.overflow = "hidden", d.always(function() {
					f.overflow = o.overflow[0], f.overflowX = o.overflow[1], f.overflowY = o.overflow[2]
				}));
				for (n in t)
					if (r = t[n], lt.exec(r)) {
						if (delete t[n], s = s || "toggle" === r, r === (p ? "hide" : "show")) {
							if ("show" !== r || !h || void 0 === h[n]) continue;
							p = !0
						}
						c[n] = h && h[n] || le.style(e, n)
					} else u = void 0;
				if (le.isEmptyObject(c)) "inline" === ("none" === u ? M(e.nodeName) : u) && (f.display = u);
				else {
					h ? "hidden" in h && (p = h.hidden) : h = Se.access(e, "fxshow", {}), s && (h.hidden = !p), p ? le(e).show() : d.done(function() {
						le(e).hide()
					}), d.done(function() {
						var t;
						Se.remove(e, "fxshow");
						for (t in c) le.style(e, t, c[t])
					});
					for (n in c) i = F(p ? h[n] : 0, n, d), n in h || (h[n] = i.start, p && (i.end = i.start, i.start = "width" === n || "height" === n ? 1 : 0))
				}
			}

			function U(e, t) {
				var o, n, r, s, i;
				for (o in e)
					if (n = le.camelCase(o), r = t[n], s = e[o], le.isArray(s) && (r = s[1], s = e[o] = s[0]), o !== n && (e[n] = s, delete e[o]), (i = le.cssHooks[n]) && "expand" in i) {
						s = i.expand(s), delete e[n];
						for (o in s) o in e || (e[o] = s[o], t[o] = r)
					} else t[n] = r
			}

			function H(e, t, o) {
				var n, r, s = 0,
					i = H.prefilters.length,
					a = le.Deferred().always(function() {
						delete l.elem
					}),
					l = function() {
						if (r) return !1;
						for (var t = it || I(), o = Math.max(0, u.startTime + u.duration - t), n = o / u.duration || 0, s = 1 - n, i = 0, l = u.tweens.length; i < l; i++) u.tweens[i].run(s);
						return a.notifyWith(e, [u, s, o]), s < 1 && l ? o : (a.resolveWith(e, [u]), !1)
					},
					u = a.promise({
						elem: e,
						props: le.extend({}, t),
						opts: le.extend(!0, {
							specialEasing: {},
							easing: le.easing._default
						}, o),
						originalProperties: t,
						originalOptions: o,
						startTime: it || I(),
						duration: o.duration,
						tweens: [],
						createTween: function(t, o) {
							var n = le.Tween(e, u.opts, t, o, u.opts.specialEasing[t] || u.opts.easing);
							return u.tweens.push(n), n
						},
						stop: function(t) {
							var o = 0,
								n = t ? u.tweens.length : 0;
							if (r) return this;
							for (r = !0; o < n; o++) u.tweens[o].run(1);
							return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
						}
					}),
					d = u.props;
				for (U(d, u.opts.specialEasing); s < i; s++)
					if (n = H.prefilters[s].call(u, e, d, u.opts)) return le.isFunction(n.stop) && (le._queueHooks(u.elem, u.opts.queue).stop = le.proxy(n.stop, n)), n;
				return le.map(d, F, u), le.isFunction(u.opts.start) && u.opts.start.call(e, u), le.fx.timer(le.extend(l, {
					elem: e,
					anim: u,
					queue: u.opts.queue
				})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
			}

			function z(e) {
				return e.getAttribute && e.getAttribute("class") || ""
			}

			function W(e) {
				return function(t, o) {
					"string" != typeof t && (o = t, t = "*");
					var n, r = 0,
						s = t.toLowerCase().match(we) || [];
					if (le.isFunction(o))
						for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(o)) : (e[n] = e[n] || []).push(o)
				}
			}

			function Y(e, t, o, n) {
				function r(a) {
					var l;
					return s[a] = !0, le.each(e[a] || [], function(e, a) {
						var u = a(t, o, n);
						return "string" != typeof u || i || s[u] ? i ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
					}), l
				}
				var s = {},
					i = e === Et;
				return r(t.dataTypes[0]) || !s["*"] && r("*")
			}

			function X(e, t) {
				var o, n, r = le.ajaxSettings.flatOptions || {};
				for (o in t) void 0 !== t[o] && ((r[o] ? e : n || (n = {}))[o] = t[o]);
				return n && le.extend(!0, e, n), e
			}

			function G(e, t, o) {
				for (var n, r, s, i, a = e.contents, l = e.dataTypes;
					"*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
				if (n)
					for (r in a)
						if (a[r] && a[r].test(n)) {
							l.unshift(r);
							break
						}
				if (l[0] in o) s = l[0];
				else {
					for (r in o) {
						if (!l[0] || e.converters[r + " " + l[0]]) {
							s = r;
							break
						}
						i || (i = r)
					}
					s = s || i
				}
				if (s) return s !== l[0] && l.unshift(s), o[s]
			}

			function V(e, t, o, n) {
				var r, s, i, a, l, u = {},
					d = e.dataTypes.slice();
				if (d[1])
					for (i in e.converters) u[i.toLowerCase()] = e.converters[i];
				for (s = d.shift(); s;)
					if (e.responseFields[s] && (o[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
						if ("*" === s) s = l;
						else if ("*" !== l && l !== s) {
					if (!(i = u[l + " " + s] || u["* " + s]))
						for (r in u)
							if (a = r.split(" "), a[1] === s && (i = u[l + " " + a[0]] || u["* " + a[0]])) {
								!0 === i ? i = u[r] : !0 !== u[r] && (s = a[0], d.unshift(a[1]));
								break
							}
					if (!0 !== i)
						if (i && e.throws) t = i(t);
						else try {
							t = i(t)
						} catch (e) {
							return {
								state: "parsererror",
								error: i ? e : "No conversion from " + l + " to " + s
							}
						}
				}
				return {
					state: "success",
					data: t
				}
			}

			function J(e, t, o, n) {
				var r;
				if (le.isArray(t)) le.each(t, function(t, r) {
					o || Rt.test(e) ? n(e, r) : J(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, o, n)
				});
				else if (o || "object" !== le.type(t)) n(e, t);
				else
					for (r in t) J(e + "[" + r + "]", t[r], o, n)
			}

			function K(e) {
				return le.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
			}
			var Q = [],
				Z = o.document,
				ee = Q.slice,
				te = Q.concat,
				oe = Q.push,
				ne = Q.indexOf,
				re = {},
				se = re.toString,
				ie = re.hasOwnProperty,
				ae = {},
				le = function(e, t) {
					return new le.fn.init(e, t)
				},
				ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
				de = /^-ms-/,
				ce = /-([\da-z])/gi,
				fe = function(e, t) {
					return t.toUpperCase()
				};
			le.fn = le.prototype = {
				jquery: "2.2.2",
				constructor: le,
				selector: "",
				length: 0,
				toArray: function() {
					return ee.call(this)
				},
				get: function(e) {
					return null != e ? e < 0 ? this[e + this.length] : this[e] : ee.call(this)
				},
				pushStack: function(e) {
					var t = le.merge(this.constructor(), e);
					return t.prevObject = this, t.context = this.context, t
				},
				each: function(e) {
					return le.each(this, e)
				},
				map: function(e) {
					return this.pushStack(le.map(this, function(t, o) {
						return e.call(t, o, t)
					}))
				},
				slice: function() {
					return this.pushStack(ee.apply(this, arguments))
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				eq: function(e) {
					var t = this.length,
						o = +e + (e < 0 ? t : 0);
					return this.pushStack(o >= 0 && o < t ? [this[o]] : [])
				},
				end: function() {
					return this.prevObject || this.constructor()
				},
				push: oe,
				sort: Q.sort,
				splice: Q.splice
			}, le.extend = le.fn.extend = function() {
				var e, t, o, n, r, s, i = arguments[0] || {},
					a = 1,
					l = arguments.length,
					u = !1;
				for ("boolean" == typeof i && (u = i, i = arguments[a] || {}, a++), "object" == typeof i || le.isFunction(i) || (i = {}), a === l && (i = this, a--); a < l; a++)
					if (null != (e = arguments[a]))
						for (t in e) o = i[t], n = e[t], i !== n && (u && n && (le.isPlainObject(n) || (r = le.isArray(n))) ? (r ? (r = !1, s = o && le.isArray(o) ? o : []) : s = o && le.isPlainObject(o) ? o : {}, i[t] = le.extend(u, s, n)) : void 0 !== n && (i[t] = n));
				return i
			}, le.extend({
				expando: "jQuery" + ("2.2.2" + Math.random()).replace(/\D/g, ""),
				isReady: !0,
				error: function(e) {
					throw new Error(e)
				},
				noop: function() {},
				isFunction: function(e) {
					return "function" === le.type(e)
				},
				isArray: Array.isArray,
				isWindow: function(e) {
					return null != e && e === e.window
				},
				isNumeric: function(e) {
					var t = e && e.toString();
					return !le.isArray(e) && t - parseFloat(t) + 1 >= 0
				},
				isPlainObject: function(e) {
					var t;
					if ("object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
					if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
					for (t in e);
					return void 0 === t || ie.call(e, t)
				},
				isEmptyObject: function(e) {
					var t;
					for (t in e) return !1;
					return !0
				},
				type: function(e) {
					return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[se.call(e)] || "object" : typeof e
				},
				globalEval: function(e) {
					var t, o = eval;
					(e = le.trim(e)) && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"), t.text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : o(e))
				},
				camelCase: function(e) {
					return e.replace(de, "ms-").replace(ce, fe)
				},
				nodeName: function(e, t) {
					return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
				},
				each: function(e, t) {
					var o, n = 0;
					if (i(e))
						for (o = e.length; n < o && !1 !== t.call(e[n], n, e[n]); n++);
					else
						for (n in e)
							if (!1 === t.call(e[n], n, e[n])) break; return e
				},
				trim: function(e) {
					return null == e ? "" : (e + "").replace(ue, "")
				},
				makeArray: function(e, t) {
					var o = t || [];
					return null != e && (i(Object(e)) ? le.merge(o, "string" == typeof e ? [e] : e) : oe.call(o, e)), o
				},
				inArray: function(e, t, o) {
					return null == t ? -1 : ne.call(t, e, o)
				},
				merge: function(e, t) {
					for (var o = +t.length, n = 0, r = e.length; n < o; n++) e[r++] = t[n];
					return e.length = r, e
				},
				grep: function(e, t, o) {
					for (var n = [], r = 0, s = e.length, i = !o; r < s; r++) !t(e[r], r) !== i && n.push(e[r]);
					return n
				},
				map: function(e, t, o) {
					var n, r, s = 0,
						a = [];
					if (i(e))
						for (n = e.length; s < n; s++) null != (r = t(e[s], s, o)) && a.push(r);
					else
						for (s in e) null != (r = t(e[s], s, o)) && a.push(r);
					return te.apply([], a)
				},
				guid: 1,
				proxy: function(e, t) {
					var o, n, r;
					if ("string" == typeof t && (o = e[t], t = e, e = o), le.isFunction(e)) return n = ee.call(arguments, 2), r = function() {
						return e.apply(t || this, n.concat(ee.call(arguments)))
					}, r.guid = e.guid = e.guid || le.guid++, r
				},
				now: Date.now,
				support: ae
			}), "function" == typeof Symbol && (le.fn[Symbol.iterator] = Q[Symbol.iterator]), le.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
				re["[object " + t + "]"] = t.toLowerCase()
			});
			var pe = function(e) {
				function t(e, t, o, n) {
					var r, s, i, a, u, c, f, p, h = t && t.ownerDocument,
						m = t ? t.nodeType : 9;
					if (o = o || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return o;
					if (!n && ((t ? t.ownerDocument || t : I) !== A && M(t), t = t || A, R)) {
						if (11 !== m && (c = me.exec(e)))
							if (r = c[1]) {
								if (9 === m) {
									if (!(i = t.getElementById(r))) return o;
									if (i.id === r) return o.push(i), o
								} else if (h && (i = h.getElementById(r)) && D(t, i) && i.id === r) return o.push(i), o
							} else {
								if (c[2]) return J.apply(o, t.getElementsByTagName(e)), o;
								if ((r = c[3]) && y.getElementsByClassName && t.getElementsByClassName) return J.apply(o, t.getElementsByClassName(r)), o
							}
						if (y.qsa && !H[e + " "] && (!N || !N.test(e))) {
							if (1 !== m) h = t, p = e;
							else if ("object" !== t.nodeName.toLowerCase()) {
								for ((a = t.getAttribute("id")) ? a = a.replace(ge, "\\$&") : t.setAttribute("id", a = O), f = w(e), s = f.length, u = de.test(a) ? "#" + a : "[id='" + a + "']"; s--;) f[s] = u + " " + d(f[s]);
								p = f.join(","), h = be.test(e) && l(t.parentNode) || t
							}
							if (p) try {
								return J.apply(o, h.querySelectorAll(p)), o
							} catch (e) {} finally {
								a === O && t.removeAttribute("id")
							}
						}
					}
					return k(e.replace(se, "$1"), t, o, n)
				}

				function o() {
					function e(o, n) {
						return t.push(o + " ") > _.cacheLength && delete e[t.shift()], e[o + " "] = n
					}
					var t = [];
					return e
				}

				function n(e) {
					return e[O] = !0, e
				}

				function r(e) {
					var t = A.createElement("div");
					try {
						return !!e(t)
					} catch (e) {
						return !1
					} finally {
						t.parentNode && t.parentNode.removeChild(t), t = null
					}
				}

				function s(e, t) {
					for (var o = e.split("|"), n = o.length; n--;) _.attrHandle[o[n]] = t
				}

				function i(e, t) {
					var o = t && e,
						n = o && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
					if (n) return n;
					if (o)
						for (; o = o.nextSibling;)
							if (o === t) return -1;
					return e ? 1 : -1
				}

				function a(e) {
					return n(function(t) {
						return t = +t, n(function(o, n) {
							for (var r, s = e([], o.length, t), i = s.length; i--;) o[r = s[i]] && (o[r] = !(n[r] = o[r]))
						})
					})
				}

				function l(e) {
					return e && void 0 !== e.getElementsByTagName && e
				}

				function u() {}

				function d(e) {
					for (var t = 0, o = e.length, n = ""; t < o; t++) n += e[t].value;
					return n
				}

				function c(e, t, o) {
					var n = t.dir,
						r = o && "parentNode" === n,
						s = F++;
					return t.first ? function(t, o, s) {
						for (; t = t[n];)
							if (1 === t.nodeType || r) return e(t, o, s)
					} : function(t, o, i) {
						var a, l, u, d = [B, s];
						if (i) {
							for (; t = t[n];)
								if ((1 === t.nodeType || r) && e(t, o, i)) return !0
						} else
							for (; t = t[n];)
								if (1 === t.nodeType || r) {
									if (u = t[O] || (t[O] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[n]) && a[0] === B && a[1] === s) return d[2] = a[2];
									if (l[n] = d, d[2] = e(t, o, i)) return !0
								}
					}
				}

				function f(e) {
					return e.length > 1 ? function(t, o, n) {
						for (var r = e.length; r--;)
							if (!e[r](t, o, n)) return !1;
						return !0
					} : e[0]
				}

				function p(e, o, n) {
					for (var r = 0, s = o.length; r < s; r++) t(e, o[r], n);
					return n
				}

				function h(e, t, o, n, r) {
					for (var s, i = [], a = 0, l = e.length, u = null != t; a < l; a++)(s = e[a]) && (o && !o(s, n, r) || (i.push(s), u && t.push(a)));
					return i
				}

				function m(e, t, o, r, s, i) {
					return r && !r[O] && (r = m(r)), s && !s[O] && (s = m(s, i)), n(function(n, i, a, l) {
						var u, d, c, f = [],
							m = [],
							b = i.length,
							g = n || p(t || "*", a.nodeType ? [a] : a, []),
							v = !e || !n && t ? g : h(g, f, e, a, l),
							y = o ? s || (n ? e : b || r) ? [] : i : v;
						if (o && o(v, y, a, l), r)
							for (u = h(y, m), r(u, [], a, l), d = u.length; d--;)(c = u[d]) && (y[m[d]] = !(v[m[d]] = c));
						if (n) {
							if (s || e) {
								if (s) {
									for (u = [], d = y.length; d--;)(c = y[d]) && u.push(v[d] = c);
									s(null, y = [], u, l)
								}
								for (d = y.length; d--;)(c = y[d]) && (u = s ? Q(n, c) : f[d]) > -1 && (n[u] = !(i[u] = c))
							}
						} else y = h(y === i ? y.splice(b, y.length) : y), s ? s(null, i, y, l) : J.apply(i, y)
					})
				}

				function b(e) {
					for (var t, o, n, r = e.length, s = _.relative[e[0].type], i = s || _.relative[" "], a = s ? 1 : 0, l = c(function(e) {
							return e === t
						}, i, !0), u = c(function(e) {
							return Q(t, e) > -1
						}, i, !0), p = [function(e, o, n) {
							var r = !s && (n || o !== T) || ((t = o).nodeType ? l(e, o, n) : u(e, o, n));
							return t = null, r
						}]; a < r; a++)
						if (o = _.relative[e[a].type]) p = [c(f(p), o)];
						else {
							if (o = _.filter[e[a].type].apply(null, e[a].matches), o[O]) {
								for (n = ++a; n < r && !_.relative[e[n].type]; n++);
								return m(a > 1 && f(p), a > 1 && d(e.slice(0, a - 1).concat({
									value: " " === e[a - 2].type ? "*" : ""
								})).replace(se, "$1"), o, a < n && b(e.slice(a, n)), n < r && b(e = e.slice(n)), n < r && d(e))
							}
							p.push(o)
						}
					return f(p)
				}

				function g(e, o) {
					var r = o.length > 0,
						s = e.length > 0,
						i = function(n, i, a, l, u) {
							var d, c, f, p = 0,
								m = "0",
								b = n && [],
								g = [],
								v = T,
								y = n || s && _.find.TAG("*", u),
								j = B += null == v ? 1 : Math.random() || .1,
								x = y.length;
							for (u && (T = i === A || i || u); m !== x && null != (d = y[m]); m++) {
								if (s && d) {
									for (c = 0, i || d.ownerDocument === A || (M(d), a = !R); f = e[c++];)
										if (f(d, i || A, a)) {
											l.push(d);
											break
										}
									u && (B = j)
								}
								r && ((d = !f && d) && p--, n && b.push(d))
							}
							if (p += m, r && m !== p) {
								for (c = 0; f = o[c++];) f(b, g, i, a);
								if (n) {
									if (p > 0)
										for (; m--;) b[m] || g[m] || (g[m] = G.call(l));
									g = h(g)
								}
								J.apply(l, g), u && !n && g.length > 0 && p + o.length > 1 && t.uniqueSort(l)
							}
							return u && (B = j, T = v), b
						};
					return r ? n(i) : i
				}
				var v, y, _, j, x, w, C, k, T, S, E, M, A, P, R, N, $, L, D, O = "sizzle" + 1 * new Date,
					I = e.document,
					B = 0,
					F = 0,
					q = o(),
					U = o(),
					H = o(),
					z = function(e, t) {
						return e === t && (E = !0), 0
					},
					W = 1 << 31,
					Y = {}.hasOwnProperty,
					X = [],
					G = X.pop,
					V = X.push,
					J = X.push,
					K = X.slice,
					Q = function(e, t) {
						for (var o = 0, n = e.length; o < n; o++)
							if (e[o] === t) return o;
						return -1
					},
					Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					ee = "[\\x20\\t\\r\\n\\f]",
					te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
					oe = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
					ne = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
					re = new RegExp(ee + "+", "g"),
					se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
					ie = new RegExp("^" + ee + "*," + ee + "*"),
					ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
					le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
					ue = new RegExp(ne),
					de = new RegExp("^" + te + "$"),
					ce = {
						ID: new RegExp("^#(" + te + ")"),
						CLASS: new RegExp("^\\.(" + te + ")"),
						TAG: new RegExp("^(" + te + "|[*])"),
						ATTR: new RegExp("^" + oe),
						PSEUDO: new RegExp("^" + ne),
						CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
						bool: new RegExp("^(?:" + Z + ")$", "i"),
						needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
					},
					fe = /^(?:input|select|textarea|button)$/i,
					pe = /^h\d$/i,
					he = /^[^{]+\{\s*\[native \w/,
					me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					be = /[+~]/,
					ge = /'|\\/g,
					ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
					ye = function(e, t, o) {
						var n = "0x" + t - 65536;
						return n !== n || o ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
					},
					_e = function() {
						M()
					};
				try {
					J.apply(X = K.call(I.childNodes), I.childNodes), X[I.childNodes.length].nodeType
				} catch (e) {
					J = {
						apply: X.length ? function(e, t) {
							V.apply(e, K.call(t))
						} : function(e, t) {
							for (var o = e.length, n = 0; e[o++] = t[n++];);
							e.length = o - 1
						}
					}
				}
				y = t.support = {}, x = t.isXML = function(e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return !!t && "HTML" !== t.nodeName
				}, M = t.setDocument = function(e) {
					var t, o, n = e ? e.ownerDocument || e : I;
					return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, P = A.documentElement, R = !x(A), (o = A.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", _e, !1) : o.attachEvent && o.attachEvent("onunload", _e)), y.attributes = r(function(e) {
						return e.className = "i", !e.getAttribute("className")
					}), y.getElementsByTagName = r(function(e) {
						return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
					}), y.getElementsByClassName = he.test(A.getElementsByClassName), y.getById = r(function(e) {
						return P.appendChild(e).id = O, !A.getElementsByName || !A.getElementsByName(O).length
					}), y.getById ? (_.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && R) {
							var o = t.getElementById(e);
							return o ? [o] : []
						}
					}, _.filter.ID = function(e) {
						var t = e.replace(ve, ye);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}) : (delete _.find.ID, _.filter.ID = function(e) {
						var t = e.replace(ve, ye);
						return function(e) {
							var o = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
							return o && o.value === t
						}
					}), _.find.TAG = y.getElementsByTagName ? function(e, t) {
						return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
					} : function(e, t) {
						var o, n = [],
							r = 0,
							s = t.getElementsByTagName(e);
						if ("*" === e) {
							for (; o = s[r++];) 1 === o.nodeType && n.push(o);
							return n
						}
						return s
					}, _.find.CLASS = y.getElementsByClassName && function(e, t) {
						if (void 0 !== t.getElementsByClassName && R) return t.getElementsByClassName(e)
					}, $ = [], N = [], (y.qsa = he.test(A.querySelectorAll)) && (r(function(e) {
						P.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + O + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || N.push(".#.+[+~]")
					}), r(function(e) {
						var t = A.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
					})), (y.matchesSelector = he.test(L = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(e) {
						y.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), $.push("!=", ne)
					}), N = N.length && new RegExp(N.join("|")), $ = $.length && new RegExp($.join("|")), t = he.test(P.compareDocumentPosition), D = t || he.test(P.contains) ? function(e, t) {
						var o = 9 === e.nodeType ? e.documentElement : e,
							n = t && t.parentNode;
						return e === n || !(!n || 1 !== n.nodeType || !(o.contains ? o.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
					} : function(e, t) {
						if (t)
							for (; t = t.parentNode;)
								if (t === e) return !0;
						return !1
					}, z = t ? function(e, t) {
						if (e === t) return E = !0, 0;
						var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return o || (o = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & o || !y.sortDetached && t.compareDocumentPosition(e) === o ? e === A || e.ownerDocument === I && D(I, e) ? -1 : t === A || t.ownerDocument === I && D(I, t) ? 1 : S ? Q(S, e) - Q(S, t) : 0 : 4 & o ? -1 : 1)
					} : function(e, t) {
						if (e === t) return E = !0, 0;
						var o, n = 0,
							r = e.parentNode,
							s = t.parentNode,
							a = [e],
							l = [t];
						if (!r || !s) return e === A ? -1 : t === A ? 1 : r ? -1 : s ? 1 : S ? Q(S, e) - Q(S, t) : 0;
						if (r === s) return i(e, t);
						for (o = e; o = o.parentNode;) a.unshift(o);
						for (o = t; o = o.parentNode;) l.unshift(o);
						for (; a[n] === l[n];) n++;
						return n ? i(a[n], l[n]) : a[n] === I ? -1 : l[n] === I ? 1 : 0
					}, A) : A
				}, t.matches = function(e, o) {
					return t(e, null, null, o)
				}, t.matchesSelector = function(e, o) {
					if ((e.ownerDocument || e) !== A && M(e), o = o.replace(le, "='$1']"), y.matchesSelector && R && !H[o + " "] && (!$ || !$.test(o)) && (!N || !N.test(o))) try {
						var n = L.call(e, o);
						if (n || y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					} catch (e) {}
					return t(o, A, null, [e]).length > 0
				}, t.contains = function(e, t) {
					return (e.ownerDocument || e) !== A && M(e), D(e, t)
				}, t.attr = function(e, t) {
					(e.ownerDocument || e) !== A && M(e);
					var o = _.attrHandle[t.toLowerCase()],
						n = o && Y.call(_.attrHandle, t.toLowerCase()) ? o(e, t, !R) : void 0;
					return void 0 !== n ? n : y.attributes || !R ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
				}, t.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, t.uniqueSort = function(e) {
					var t, o = [],
						n = 0,
						r = 0;
					if (E = !y.detectDuplicates, S = !y.sortStable && e.slice(0), e.sort(z), E) {
						for (; t = e[r++];) t === e[r] && (n = o.push(r));
						for (; n--;) e.splice(o[n], 1)
					}
					return S = null, e
				}, j = t.getText = function(e) {
					var t, o = "",
						n = 0,
						r = e.nodeType;
					if (r) {
						if (1 === r || 9 === r || 11 === r) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) o += j(e)
						} else if (3 === r || 4 === r) return e.nodeValue
					} else
						for (; t = e[n++];) o += j(t);
					return o
				}, _ = t.selectors = {
					cacheLength: 50,
					createPseudo: n,
					match: ce,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
						},
						PSEUDO: function(e) {
							var t, o = !e[6] && e[2];
							return ce.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : o && ue.test(o) && (t = w(o, !0)) && (t = o.indexOf(")", o.length - t) - o.length) && (e[0] = e[0].slice(0, t), e[2] = o.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(ve, ye).toLowerCase();
							return "*" === e ? function() {
								return !0
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e) {
							var t = q[e + " "];
							return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && q(e, function(e) {
								return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function(e, o, n) {
							return function(r) {
								var s = t.attr(r, e);
								return null == s ? "!=" === o : !o || (s += "", "=" === o ? s === n : "!=" === o ? s !== n : "^=" === o ? n && 0 === s.indexOf(n) : "*=" === o ? n && s.indexOf(n) > -1 : "$=" === o ? n && s.slice(-n.length) === n : "~=" === o ? (" " + s.replace(re, " ") + " ").indexOf(n) > -1 : "|=" === o && (s === n || s.slice(0, n.length + 1) === n + "-"))
							}
						},
						CHILD: function(e, t, o, n, r) {
							var s = "nth" !== e.slice(0, 3),
								i = "last" !== e.slice(-4),
								a = "of-type" === t;
							return 1 === n && 0 === r ? function(e) {
								return !!e.parentNode
							} : function(t, o, l) {
								var u, d, c, f, p, h, m = s !== i ? "nextSibling" : "previousSibling",
									b = t.parentNode,
									g = a && t.nodeName.toLowerCase(),
									v = !l && !a,
									y = !1;
								if (b) {
									if (s) {
										for (; m;) {
											for (f = t; f = f[m];)
												if (a ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
											h = m = "only" === e && !h && "nextSibling"
										}
										return !0
									}
									if (h = [i ? b.firstChild : b.lastChild], i && v) {
										for (f = b, c = f[O] || (f[O] = {}), d = c[f.uniqueID] || (c[f.uniqueID] = {}), u = d[e] || [], p = u[0] === B && u[1], y = p && u[2], f = p && b.childNodes[p]; f = ++p && f && f[m] || (y = p = 0) || h.pop();)
											if (1 === f.nodeType && ++y && f === t) {
												d[e] = [B, p, y];
												break
											}
									} else if (v && (f = t, c = f[O] || (f[O] = {}), d = c[f.uniqueID] || (c[f.uniqueID] = {}), u = d[e] || [], p = u[0] === B && u[1], y = p), !1 === y)
										for (;
											(f = ++p && f && f[m] || (y = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++y || (v && (c = f[O] || (f[O] = {}), d = c[f.uniqueID] || (c[f.uniqueID] = {}), d[e] = [B, y]), f !== t)););
									return (y -= r) === n || y % n == 0 && y / n >= 0
								}
							}
						},
						PSEUDO: function(e, o) {
							var r, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
							return s[O] ? s(o) : s.length > 1 ? (r = [e, e, "", o], _.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
								for (var n, r = s(e, o), i = r.length; i--;) n = Q(e, r[i]), e[n] = !(t[n] = r[i])
							}) : function(e) {
								return s(e, 0, r)
							}) : s
						}
					},
					pseudos: {
						not: n(function(e) {
							var t = [],
								o = [],
								r = C(e.replace(se, "$1"));
							return r[O] ? n(function(e, t, o, n) {
								for (var s, i = r(e, null, n, []), a = e.length; a--;)(s = i[a]) && (e[a] = !(t[a] = s))
							}) : function(e, n, s) {
								return t[0] = e, r(t, null, s, o), t[0] = null, !o.pop()
							}
						}),
						has: n(function(e) {
							return function(o) {
								return t(e, o).length > 0
							}
						}),
						contains: n(function(e) {
							return e = e.replace(ve, ye),
								function(t) {
									return (t.textContent || t.innerText || j(t)).indexOf(e) > -1
								}
						}),
						lang: n(function(e) {
							return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
								function(t) {
									var o;
									do {
										if (o = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (o = o.toLowerCase()) === e || 0 === o.indexOf(e + "-")
									} while ((t = t.parentNode) && 1 === t.nodeType);
									return !1
								}
						}),
						target: function(t) {
							var o = e.location && e.location.hash;
							return o && o.slice(1) === t.id
						},
						root: function(e) {
							return e === P
						},
						focus: function(e) {
							return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: function(e) {
							return !1 === e.disabled
						},
						disabled: function(e) {
							return !0 === e.disabled
						},
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function(e) {
							return !_.pseudos.empty(e)
						},
						header: function(e) {
							return pe.test(e.nodeName)
						},
						input: function(e) {
							return fe.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: a(function() {
							return [0]
						}),
						last: a(function(e, t) {
							return [t - 1]
						}),
						eq: a(function(e, t, o) {
							return [o < 0 ? o + t : o]
						}),
						even: a(function(e, t) {
							for (var o = 0; o < t; o += 2) e.push(o);
							return e
						}),
						odd: a(function(e, t) {
							for (var o = 1; o < t; o += 2) e.push(o);
							return e
						}),
						lt: a(function(e, t, o) {
							for (var n = o < 0 ? o + t : o; --n >= 0;) e.push(n);
							return e
						}),
						gt: a(function(e, t, o) {
							for (var n = o < 0 ? o + t : o; ++n < t;) e.push(n);
							return e
						})
					}
				}, _.pseudos.nth = _.pseudos.eq;
				for (v in {
						radio: !0,
						checkbox: !0,
						file: !0,
						password: !0,
						image: !0
					}) _.pseudos[v] = function(e) {
					return function(t) {
						return "input" === t.nodeName.toLowerCase() && t.type === e
					}
				}(v);
				for (v in {
						submit: !0,
						reset: !0
					}) _.pseudos[v] = function(e) {
					return function(t) {
						var o = t.nodeName.toLowerCase();
						return ("input" === o || "button" === o) && t.type === e
					}
				}(v);
				return u.prototype = _.filters = _.pseudos, _.setFilters = new u, w = t.tokenize = function(e, o) {
					var n, r, s, i, a, l, u, d = U[e + " "];
					if (d) return o ? 0 : d.slice(0);
					for (a = e, l = [], u = _.preFilter; a;) {
						n && !(r = ie.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = ae.exec(a)) && (n = r.shift(), s.push({
							value: n,
							type: r[0].replace(se, " ")
						}), a = a.slice(n.length));
						for (i in _.filter) !(r = ce[i].exec(a)) || u[i] && !(r = u[i](r)) || (n = r.shift(), s.push({
							value: n,
							type: i,
							matches: r
						}), a = a.slice(n.length));
						if (!n) break
					}
					return o ? a.length : a ? t.error(e) : U(e, l).slice(0)
				}, C = t.compile = function(e, t) {
					var o, n = [],
						r = [],
						s = H[e + " "];
					if (!s) {
						for (t || (t = w(e)), o = t.length; o--;) s = b(t[o]), s[O] ? n.push(s) : r.push(s);
						s = H(e, g(r, n)), s.selector = e
					}
					return s
				}, k = t.select = function(e, t, o, n) {
					var r, s, i, a, u, c = "function" == typeof e && e,
						f = !n && w(e = c.selector || e);
					if (o = o || [], 1 === f.length) {
						if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (i = s[0]).type && y.getById && 9 === t.nodeType && R && _.relative[s[1].type]) {
							if (!(t = (_.find.ID(i.matches[0].replace(ve, ye), t) || [])[0])) return o;
							c && (t = t.parentNode), e = e.slice(s.shift().value.length)
						}
						for (r = ce.needsContext.test(e) ? 0 : s.length; r-- && (i = s[r], !_.relative[a = i.type]);)
							if ((u = _.find[a]) && (n = u(i.matches[0].replace(ve, ye), be.test(s[0].type) && l(t.parentNode) || t))) {
								if (s.splice(r, 1), !(e = n.length && d(s))) return J.apply(o, n), o;
								break
							}
					}
					return (c || C(e, f))(n, t, !R, o, !t || be.test(e) && l(t.parentNode) || t), o
				}, y.sortStable = O.split("").sort(z).join("") === O, y.detectDuplicates = !!E, M(), y.sortDetached = r(function(e) {
					return 1 & e.compareDocumentPosition(A.createElement("div"))
				}), r(function(e) {
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				}) || s("type|href|height|width", function(e, t, o) {
					if (!o) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}), y.attributes && r(function(e) {
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				}) || s("value", function(e, t, o) {
					if (!o && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				}), r(function(e) {
					return null == e.getAttribute("disabled")
				}) || s(Z, function(e, t, o) {
					var n;
					if (!o) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
				}), t
			}(o);
			le.find = pe, le.expr = pe.selectors, le.expr[":"] = le.expr.pseudos, le.uniqueSort = le.unique = pe.uniqueSort, le.text = pe.getText, le.isXMLDoc = pe.isXML, le.contains = pe.contains;
			var he = function(e, t, o) {
					for (var n = [], r = void 0 !== o;
						(e = e[t]) && 9 !== e.nodeType;)
						if (1 === e.nodeType) {
							if (r && le(e).is(o)) break;
							n.push(e)
						}
					return n
				},
				me = function(e, t) {
					for (var o = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && o.push(e);
					return o
				},
				be = le.expr.match.needsContext,
				ge = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
				ve = /^.[^:#\[\.,]*$/;
			le.filter = function(e, t, o) {
				var n = t[0];
				return o && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? le.find.matchesSelector(n, e) ? [n] : [] : le.find.matches(e, le.grep(t, function(e) {
					return 1 === e.nodeType
				}))
			}, le.fn.extend({
				find: function(e) {
					var t, o = this.length,
						n = [],
						r = this;
					if ("string" != typeof e) return this.pushStack(le(e).filter(function() {
						for (t = 0; t < o; t++)
							if (le.contains(r[t], this)) return !0
					}));
					for (t = 0; t < o; t++) le.find(e, r[t], n);
					return n = this.pushStack(o > 1 ? le.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
				},
				filter: function(e) {
					return this.pushStack(a(this, e || [], !1))
				},
				not: function(e) {
					return this.pushStack(a(this, e || [], !0))
				},
				is: function(e) {
					return !!a(this, "string" == typeof e && be.test(e) ? le(e) : e || [], !1).length
				}
			});
			var ye, _e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
			(le.fn.init = function(e, t, o) {
				var n, r;
				if (!e) return this;
				if (o = o || ye, "string" == typeof e) {
					if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : _e.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || o).find(e) : this.constructor(t).find(e);
					if (n[1]) {
						if (t = t instanceof le ? t[0] : t, le.merge(this, le.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), ge.test(n[1]) && le.isPlainObject(t))
							for (n in t) le.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
						return this
					}
					return r = Z.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Z, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? void 0 !== o.ready ? o.ready(e) : e(le) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
			}).prototype = le.fn, ye = le(Z);
			var je = /^(?:parents|prev(?:Until|All))/,
				xe = {
					children: !0,
					contents: !0,
					next: !0,
					prev: !0
				};
			le.fn.extend({
				has: function(e) {
					var t = le(e, this),
						o = t.length;
					return this.filter(function() {
						for (var e = 0; e < o; e++)
							if (le.contains(this, t[e])) return !0
					})
				},
				closest: function(e, t) {
					for (var o, n = 0, r = this.length, s = [], i = be.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; n < r; n++)
						for (o = this[n]; o && o !== t; o = o.parentNode)
							if (o.nodeType < 11 && (i ? i.index(o) > -1 : 1 === o.nodeType && le.find.matchesSelector(o, e))) {
								s.push(o);
								break
							}
					return this.pushStack(s.length > 1 ? le.uniqueSort(s) : s)
				},
				index: function(e) {
					return e ? "string" == typeof e ? ne.call(le(e), this[0]) : ne.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
				},
				add: function(e, t) {
					return this.pushStack(le.uniqueSort(le.merge(this.get(), le(e, t))))
				},
				addBack: function(e) {
					return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
				}
			}), le.each({
				parent: function(e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null
				},
				parents: function(e) {
					return he(e, "parentNode")
				},
				parentsUntil: function(e, t, o) {
					return he(e, "parentNode", o)
				},
				next: function(e) {
					return l(e, "nextSibling")
				},
				prev: function(e) {
					return l(e, "previousSibling")
				},
				nextAll: function(e) {
					return he(e, "nextSibling")
				},
				prevAll: function(e) {
					return he(e, "previousSibling")
				},
				nextUntil: function(e, t, o) {
					return he(e, "nextSibling", o)
				},
				prevUntil: function(e, t, o) {
					return he(e, "previousSibling", o)
				},
				siblings: function(e) {
					return me((e.parentNode || {}).firstChild, e)
				},
				children: function(e) {
					return me(e.firstChild)
				},
				contents: function(e) {
					return e.contentDocument || le.merge([], e.childNodes)
				}
			}, function(e, t) {
				le.fn[e] = function(o, n) {
					var r = le.map(this, t, o);
					return "Until" !== e.slice(-5) && (n = o), n && "string" == typeof n && (r = le.filter(n, r)), this.length > 1 && (xe[e] || le.uniqueSort(r), je.test(e) && r.reverse()), this.pushStack(r)
				}
			});
			var we = /\S+/g;
			le.Callbacks = function(e) {
				e = "string" == typeof e ? u(e) : le.extend({}, e);
				var t, o, n, r, s = [],
					i = [],
					a = -1,
					l = function() {
						for (r = e.once, n = t = !0; i.length; a = -1)
							for (o = i.shift(); ++a < s.length;) !1 === s[a].apply(o[0], o[1]) && e.stopOnFalse && (a = s.length, o = !1);
						e.memory || (o = !1), t = !1, r && (s = o ? [] : "")
					},
					d = {
						add: function() {
							return s && (o && !t && (a = s.length - 1, i.push(o)), function t(o) {
								le.each(o, function(o, n) {
									le.isFunction(n) ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== le.type(n) && t(n)
								})
							}(arguments), o && !t && l()), this
						},
						remove: function() {
							return le.each(arguments, function(e, t) {
								for (var o;
									(o = le.inArray(t, s, o)) > -1;) s.splice(o, 1), o <= a && a--
							}), this
						},
						has: function(e) {
							return e ? le.inArray(e, s) > -1 : s.length > 0
						},
						empty: function() {
							return s && (s = []), this
						},
						disable: function() {
							return r = i = [], s = o = "", this
						},
						disabled: function() {
							return !s
						},
						lock: function() {
							return r = i = [], o || (s = o = ""), this
						},
						locked: function() {
							return !!r
						},
						fireWith: function(e, o) {
							return r || (o = o || [], o = [e, o.slice ? o.slice() : o], i.push(o), t || l()), this
						},
						fire: function() {
							return d.fireWith(this, arguments), this
						},
						fired: function() {
							return !!n
						}
					};
				return d
			}, le.extend({
				Deferred: function(e) {
					var t = [
							["resolve", "done", le.Callbacks("once memory"), "resolved"],
							["reject", "fail", le.Callbacks("once memory"), "rejected"],
							["notify", "progress", le.Callbacks("memory")]
						],
						o = "pending",
						n = {
							state: function() {
								return o
							},
							always: function() {
								return r.done(arguments).fail(arguments), this
							},
							then: function() {
								var e = arguments;
								return le.Deferred(function(o) {
									le.each(t, function(t, s) {
										var i = le.isFunction(e[t]) && e[t];
										r[s[1]](function() {
											var e = i && i.apply(this, arguments);
											e && le.isFunction(e.promise) ? e.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[s[0] + "With"](this === n ? o.promise() : this, i ? [e] : arguments)
										})
									}), e = null
								}).promise()
							},
							promise: function(e) {
								return null != e ? le.extend(e, n) : n
							}
						},
						r = {};
					return n.pipe = n.then, le.each(t, function(e, s) {
						var i = s[2],
							a = s[3];
						n[s[1]] = i.add, a && i.add(function() {
							o = a
						}, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = function() {
							return r[s[0] + "With"](this === r ? n : this, arguments), this
						}, r[s[0] + "With"] = i.fireWith
					}), n.promise(r), e && e.call(r, r), r
				},
				when: function(e) {
					var t, o, n, r = 0,
						s = ee.call(arguments),
						i = s.length,
						a = 1 !== i || e && le.isFunction(e.promise) ? i : 0,
						l = 1 === a ? e : le.Deferred(),
						u = function(e, o, n) {
							return function(r) {
								o[e] = this, n[e] = arguments.length > 1 ? ee.call(arguments) : r, n === t ? l.notifyWith(o, n) : --a || l.resolveWith(o, n)
							}
						};
					if (i > 1)
						for (t = new Array(i), o = new Array(i), n = new Array(i); r < i; r++) s[r] && le.isFunction(s[r].promise) ? s[r].promise().progress(u(r, o, t)).done(u(r, n, s)).fail(l.reject) : --a;
					return a || l.resolveWith(n, s), l.promise()
				}
			});
			var Ce;
			le.fn.ready = function(e) {
				return le.ready.promise().done(e), this
			}, le.extend({
				isReady: !1,
				readyWait: 1,
				holdReady: function(e) {
					e ? le.readyWait++ : le.ready(!0)
				},
				ready: function(e) {
					(!0 === e ? --le.readyWait : le.isReady) || (le.isReady = !0, !0 !== e && --le.readyWait > 0 || (Ce.resolveWith(Z, [le]), le.fn.triggerHandler && (le(Z).triggerHandler("ready"), le(Z).off("ready"))))
				}
			}), le.ready.promise = function(e) {
				return Ce || (Ce = le.Deferred(), "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? o.setTimeout(le.ready) : (Z.addEventListener("DOMContentLoaded", d), o.addEventListener("load", d))), Ce.promise(e)
			}, le.ready.promise();
			var ke = function(e, t, o, n, r, s, i) {
					var a = 0,
						l = e.length,
						u = null == o;
					if ("object" === le.type(o)) {
						r = !0;
						for (a in o) ke(e, t, a, o[a], !0, s, i)
					} else if (void 0 !== n && (r = !0, le.isFunction(n) || (i = !0), u && (i ? (t.call(e, n), t = null) : (u = t, t = function(e, t, o) {
							return u.call(le(e), o)
						})), t))
						for (; a < l; a++) t(e[a], o, i ? n : n.call(e[a], a, t(e[a], o)));
					return r ? e : u ? t.call(e) : l ? t(e[0], o) : s
				},
				Te = function(e) {
					return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
				};
			c.uid = 1, c.prototype = {
				register: function(e, t) {
					var o = t || {};
					return e.nodeType ? e[this.expando] = o : Object.defineProperty(e, this.expando, {
						value: o,
						writable: !0,
						configurable: !0
					}), e[this.expando]
				},
				cache: function(e) {
					if (!Te(e)) return {};
					var t = e[this.expando];
					return t || (t = {}, Te(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
						value: t,
						configurable: !0
					}))), t
				},
				set: function(e, t, o) {
					var n, r = this.cache(e);
					if ("string" == typeof t) r[t] = o;
					else
						for (n in t) r[n] = t[n];
					return r
				},
				get: function(e, t) {
					return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
				},
				access: function(e, t, o) {
					var n;
					return void 0 === t || t && "string" == typeof t && void 0 === o ? (n = this.get(e, t), void 0 !== n ? n : this.get(e, le.camelCase(t))) : (this.set(e, t, o), void 0 !== o ? o : t)
				},
				remove: function(e, t) {
					var o, n, r, s = e[this.expando];
					if (void 0 !== s) {
						if (void 0 === t) this.register(e);
						else {
							le.isArray(t) ? n = t.concat(t.map(le.camelCase)) : (r = le.camelCase(t), t in s ? n = [t, r] : (n = r, n = n in s ? [n] : n.match(we) || [])), o = n.length;
							for (; o--;) delete s[n[o]]
						}(void 0 === t || le.isEmptyObject(s)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
					}
				},
				hasData: function(e) {
					var t = e[this.expando];
					return void 0 !== t && !le.isEmptyObject(t)
				}
			};
			var Se = new c,
				Ee = new c,
				Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				Ae = /[A-Z]/g;
			le.extend({
				hasData: function(e) {
					return Ee.hasData(e) || Se.hasData(e)
				},
				data: function(e, t, o) {
					return Ee.access(e, t, o)
				},
				removeData: function(e, t) {
					Ee.remove(e, t)
				},
				_data: function(e, t, o) {
					return Se.access(e, t, o)
				},
				_removeData: function(e, t) {
					Se.remove(e, t)
				}
			}), le.fn.extend({
				data: function(e, t) {
					var o, n, r, s = this[0],
						i = s && s.attributes;
					if (void 0 === e) {
						if (this.length && (r = Ee.get(s), 1 === s.nodeType && !Se.get(s, "hasDataAttrs"))) {
							for (o = i.length; o--;) i[o] && (n = i[o].name, 0 === n.indexOf("data-") && (n = le.camelCase(n.slice(5)), f(s, n, r[n])));
							Se.set(s, "hasDataAttrs", !0)
						}
						return r
					}
					return "object" == typeof e ? this.each(function() {
						Ee.set(this, e)
					}) : ke(this, function(t) {
						var o, n;
						if (s && void 0 === t) {
							if (void 0 !== (o = Ee.get(s, e) || Ee.get(s, e.replace(Ae, "-$&").toLowerCase()))) return o;
							if (n = le.camelCase(e), void 0 !== (o = Ee.get(s, n))) return o;
							if (void 0 !== (o = f(s, n, void 0))) return o
						} else n = le.camelCase(e), this.each(function() {
							var o = Ee.get(this, n);
							Ee.set(this, n, t), e.indexOf("-") > -1 && void 0 !== o && Ee.set(this, e, t)
						})
					}, null, t, arguments.length > 1, null, !0)
				},
				removeData: function(e) {
					return this.each(function() {
						Ee.remove(this, e)
					})
				}
			}), le.extend({
				queue: function(e, t, o) {
					var n;
					if (e) return t = (t || "fx") + "queue", n = Se.get(e, t), o && (!n || le.isArray(o) ? n = Se.access(e, t, le.makeArray(o)) : n.push(o)), n || []
				},
				dequeue: function(e, t) {
					t = t || "fx";
					var o = le.queue(e, t),
						n = o.length,
						r = o.shift(),
						s = le._queueHooks(e, t),
						i = function() {
							le.dequeue(e, t)
						};
					"inprogress" === r && (r = o.shift(), n--), r && ("fx" === t && o.unshift("inprogress"), delete s.stop, r.call(e, i, s)), !n && s && s.empty.fire()
				},
				_queueHooks: function(e, t) {
					var o = t + "queueHooks";
					return Se.get(e, o) || Se.access(e, o, {
						empty: le.Callbacks("once memory").add(function() {
							Se.remove(e, [t + "queue", o])
						})
					})
				}
			}), le.fn.extend({
				queue: function(e, t) {
					var o = 2;
					return "string" != typeof e && (t = e, e = "fx", o--), arguments.length < o ? le.queue(this[0], e) : void 0 === t ? this : this.each(function() {
						var o = le.queue(this, e, t);
						le._queueHooks(this, e), "fx" === e && "inprogress" !== o[0] && le.dequeue(this, e)
					})
				},
				dequeue: function(e) {
					return this.each(function() {
						le.dequeue(this, e)
					})
				},
				clearQueue: function(e) {
					return this.queue(e || "fx", [])
				},
				promise: function(e, t) {
					var o, n = 1,
						r = le.Deferred(),
						s = this,
						i = this.length,
						a = function() {
							--n || r.resolveWith(s, [s])
						};
					for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;)(o = Se.get(s[i], e + "queueHooks")) && o.empty && (n++, o.empty.add(a));
					return a(), r.promise(t)
				}
			});
			var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				Re = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
				Ne = ["Top", "Right", "Bottom", "Left"],
				$e = function(e, t) {
					return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
				},
				Le = /^(?:checkbox|radio)$/i,
				De = /<([\w:-]+)/,
				Oe = /^$|\/(?:java|ecma)script/i,
				Ie = {
					option: [1, "<select multiple='multiple'>", "</select>"],
					thead: [1, "<table>", "</table>"],
					col: [2, "<table><colgroup>", "</colgroup></table>"],
					tr: [2, "<table><tbody>", "</tbody></table>"],
					td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
					_default: [0, "", ""]
				};
			Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td;
			var Be = /<|&#?\w+;/;
			! function() {
				var e = Z.createDocumentFragment(),
					t = e.appendChild(Z.createElement("div")),
					o = Z.createElement("input");
				o.setAttribute("type", "radio"), o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), t.appendChild(o), ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
			}();
			var Fe = /^key/,
				qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
				Ue = /^([^.]*)(?:\.(.+)|)/;
			le.event = {
				global: {},
				add: function(e, t, o, n, r) {
					var s, i, a, l, u, d, c, f, p, h, m, b = Se.get(e);
					if (b)
						for (o.handler && (s = o, o = s.handler, r = s.selector), o.guid || (o.guid = le.guid++), (l = b.events) || (l = b.events = {}), (i = b.handle) || (i = b.handle = function(t) {
								return void 0 !== le && le.event.triggered !== t.type ? le.event.dispatch.apply(e, arguments) : void 0
							}), t = (t || "").match(we) || [""], u = t.length; u--;) a = Ue.exec(t[u]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p && (c = le.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = le.event.special[p] || {}, d = le.extend({
							type: p,
							origType: m,
							data: n,
							handler: o,
							guid: o.guid,
							selector: r,
							needsContext: r && le.expr.match.needsContext.test(r),
							namespace: h.join(".")
						}, s), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, h, i) || e.addEventListener && e.addEventListener(p, i)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = o.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), le.event.global[p] = !0)
				},
				remove: function(e, t, o, n, r) {
					var s, i, a, l, u, d, c, f, p, h, m, b = Se.hasData(e) && Se.get(e);
					if (b && (l = b.events)) {
						for (t = (t || "").match(we) || [""], u = t.length; u--;)
							if (a = Ue.exec(t[u]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
								for (c = le.event.special[p] || {}, p = (n ? c.delegateType : c.bindType) || p, f = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = s = f.length; s--;) d = f[s], !r && m !== d.origType || o && o.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (f.splice(s, 1), d.selector && f.delegateCount--, c.remove && c.remove.call(e, d));
								i && !f.length && (c.teardown && !1 !== c.teardown.call(e, h, b.handle) || le.removeEvent(e, p, b.handle), delete l[p])
							} else
								for (p in l) le.event.remove(e, p + t[u], o, n, !0);
						le.isEmptyObject(l) && Se.remove(e, "handle events")
					}
				},
				dispatch: function(e) {
					e = le.event.fix(e);
					var t, o, n, r, s, i = [],
						a = ee.call(arguments),
						l = (Se.get(this, "events") || {})[e.type] || [],
						u = le.event.special[e.type] || {};
					if (a[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
						for (i = le.event.handlers.call(this, e, l), t = 0;
							(r = i[t++]) && !e.isPropagationStopped();)
							for (e.currentTarget = r.elem, o = 0;
								(s = r.handlers[o++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (n = ((le.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
						return u.postDispatch && u.postDispatch.call(this, e), e.result
					}
				},
				handlers: function(e, t) {
					var o, n, r, s, i = [],
						a = t.delegateCount,
						l = e.target;
					if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
						for (; l !== this; l = l.parentNode || this)
							if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
								for (n = [], o = 0; o < a; o++) s = t[o], r = s.selector + " ", void 0 === n[r] && (n[r] = s.needsContext ? le(r, this).index(l) > -1 : le.find(r, this, null, [l]).length), n[r] && n.push(s);
								n.length && i.push({
									elem: l,
									handlers: n
								})
							}
					return a < t.length && i.push({
						elem: this,
						handlers: t.slice(a)
					}), i
				},
				props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
				fixHooks: {},
				keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function(e, t) {
						return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
					}
				},
				mouseHooks: {
					props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter: function(e, t) {
						var o, n, r, s = t.button;
						return null == e.pageX && null != t.clientX && (o = e.target.ownerDocument || Z, n = o.documentElement, r = o.body, e.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
					}
				},
				fix: function(e) {
					if (e[le.expando]) return e;
					var t, o, n, r = e.type,
						s = e,
						i = this.fixHooks[r];
					for (i || (this.fixHooks[r] = i = qe.test(r) ? this.mouseHooks : Fe.test(r) ? this.keyHooks : {}), n = i.props ? this.props.concat(i.props) : this.props, e = new le.Event(s), t = n.length; t--;) o = n[t], e[o] = s[o];
					return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), i.filter ? i.filter(e, s) : e
				},
				special: {
					load: {
						noBubble: !0
					},
					focus: {
						trigger: function() {
							if (this !== y() && this.focus) return this.focus(), !1
						},
						delegateType: "focusin"
					},
					blur: {
						trigger: function() {
							if (this === y() && this.blur) return this.blur(), !1
						},
						delegateType: "focusout"
					},
					click: {
						trigger: function() {
							if ("checkbox" === this.type && this.click && le.nodeName(this, "input")) return this.click(), !1
						},
						_default: function(e) {
							return le.nodeName(e.target, "a")
						}
					},
					beforeunload: {
						postDispatch: function(e) {
							void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
						}
					}
				}
			}, le.removeEvent = function(e, t, o) {
				e.removeEventListener && e.removeEventListener(t, o)
			}, le.Event = function(e, t) {
				if (!(this instanceof le.Event)) return new le.Event(e, t);
				e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? g : v) : this.type = e, t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), this[le.expando] = !0
			}, le.Event.prototype = {
				constructor: le.Event,
				isDefaultPrevented: v,
				isPropagationStopped: v,
				isImmediatePropagationStopped: v,
				preventDefault: function() {
					var e = this.originalEvent;
					this.isDefaultPrevented = g, e && e.preventDefault()
				},
				stopPropagation: function() {
					var e = this.originalEvent;
					this.isPropagationStopped = g, e && e.stopPropagation()
				},
				stopImmediatePropagation: function() {
					var e = this.originalEvent;
					this.isImmediatePropagationStopped = g, e && e.stopImmediatePropagation(), this.stopPropagation()
				}
			}, le.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout"
			}, function(e, t) {
				le.event.special[e] = {
					delegateType: t,
					bindType: t,
					handle: function(e) {
						var o, n = this,
							r = e.relatedTarget,
							s = e.handleObj;
						return r && (r === n || le.contains(n, r)) || (e.type = s.origType, o = s.handler.apply(this, arguments), e.type = t), o
					}
				}
			}), le.fn.extend({
				on: function(e, t, o, n) {
					return _(this, e, t, o, n)
				},
				one: function(e, t, o, n) {
					return _(this, e, t, o, n, 1)
				},
				off: function(e, t, o) {
					var n, r;
					if (e && e.preventDefault && e.handleObj) return n = e.handleObj, le(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
					if ("object" == typeof e) {
						for (r in e) this.off(r, t, e[r]);
						return this
					}
					return !1 !== t && "function" != typeof t || (o = t, t = void 0), !1 === o && (o = v), this.each(function() {
						le.event.remove(this, e, o, t)
					})
				}
			});
			var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
				ze = /<script|<style|<link/i,
				We = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Ye = /^true\/(.*)/,
				Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
			le.extend({
				htmlPrefilter: function(e) {
					return e.replace(He, "<$1></$2>")
				},
				clone: function(e, t, o) {
					var n, r, s, i, a = e.cloneNode(!0),
						l = le.contains(e.ownerDocument, e);
					if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
						for (i = h(a), s = h(e), n = 0, r = s.length; n < r; n++) k(s[n], i[n]);
					if (t)
						if (o)
							for (s = s || h(e), i = i || h(a), n = 0, r = s.length; n < r; n++) C(s[n], i[n]);
						else C(e, a);
					return i = h(a, "script"), i.length > 0 && m(i, !l && h(e, "script")), a
				},
				cleanData: function(e) {
					for (var t, o, n, r = le.event.special, s = 0; void 0 !== (o = e[s]); s++)
						if (Te(o)) {
							if (t = o[Se.expando]) {
								if (t.events)
									for (n in t.events) r[n] ? le.event.remove(o, n) : le.removeEvent(o, n, t.handle);
								o[Se.expando] = void 0
							}
							o[Ee.expando] && (o[Ee.expando] = void 0)
						}
				}
			}), le.fn.extend({
				domManip: T,
				detach: function(e) {
					return S(this, e, !0)
				},
				remove: function(e) {
					return S(this, e)
				},
				text: function(e) {
					return ke(this, function(e) {
						return void 0 === e ? le.text(this) : this.empty().each(function() {
							1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
						})
					}, null, e, arguments.length)
				},
				append: function() {
					return T(this, arguments, function(e) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							j(this, e).appendChild(e)
						}
					})
				},
				prepend: function() {
					return T(this, arguments, function(e) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var t = j(this, e);
							t.insertBefore(e, t.firstChild)
						}
					})
				},
				before: function() {
					return T(this, arguments, function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this)
					})
				},
				after: function() {
					return T(this, arguments, function(e) {
						this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
					})
				},
				empty: function() {
					for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (le.cleanData(h(e, !1)), e.textContent = "");
					return this
				},
				clone: function(e, t) {
					return e = null != e && e, t = null == t ? e : t, this.map(function() {
						return le.clone(this, e, t)
					})
				},
				html: function(e) {
					return ke(this, function(e) {
						var t = this[0] || {},
							o = 0,
							n = this.length;
						if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
						if ("string" == typeof e && !ze.test(e) && !Ie[(De.exec(e) || ["", ""])[1].toLowerCase()]) {
							e = le.htmlPrefilter(e);
							try {
								for (; o < n; o++) t = this[o] || {}, 1 === t.nodeType && (le.cleanData(h(t, !1)), t.innerHTML = e);
								t = 0
							} catch (e) {}
						}
						t && this.empty().append(e)
					}, null, e, arguments.length)
				},
				replaceWith: function() {
					var e = [];
					return T(this, arguments, function(t) {
						var o = this.parentNode;
						le.inArray(this, e) < 0 && (le.cleanData(h(this)), o && o.replaceChild(t, this))
					}, e)
				}
			}), le.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function(e, t) {
				le.fn[e] = function(e) {
					for (var o, n = [], r = le(e), s = r.length - 1, i = 0; i <= s; i++) o = i === s ? this : this.clone(!0), le(r[i])[t](o), oe.apply(n, o.get());
					return this.pushStack(n)
				}
			});
			var Ge, Ve = {
					HTML: "block",
					BODY: "block"
				},
				Je = /^margin/,
				Ke = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
				Qe = function(e) {
					var t = e.ownerDocument.defaultView;
					return t && t.opener || (t = o), t.getComputedStyle(e)
				},
				Ze = function(e, t, o, n) {
					var r, s, i = {};
					for (s in t) i[s] = e.style[s], e.style[s] = t[s];
					r = o.apply(e, n || []);
					for (s in t) e.style[s] = i[s];
					return r
				},
				et = Z.documentElement;
			! function() {
				function e() {
					a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", et.appendChild(i);
					var e = o.getComputedStyle(a);
					t = "1%" !== e.top, s = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, et.removeChild(i)
				}
				var t, n, r, s, i = Z.createElement("div"),
					a = Z.createElement("div");
				a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ae.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", i.appendChild(a), le.extend(ae, {
					pixelPosition: function() {
						return e(), t
					},
					boxSizingReliable: function() {
						return null == n && e(), n
					},
					pixelMarginRight: function() {
						return null == n && e(), r
					},
					reliableMarginLeft: function() {
						return null == n && e(), s
					},
					reliableMarginRight: function() {
						var e, t = a.appendChild(Z.createElement("div"));
						return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", et.appendChild(i), e = !parseFloat(o.getComputedStyle(t).marginRight), et.removeChild(i), a.removeChild(t), e
					}
				}))
			}();
			var tt = /^(none|table(?!-c[ea]).+)/,
				ot = {
					position: "absolute",
					visibility: "hidden",
					display: "block"
				},
				nt = {
					letterSpacing: "0",
					fontWeight: "400"
				},
				rt = ["Webkit", "O", "Moz", "ms"],
				st = Z.createElement("div").style;
			le.extend({
				cssHooks: {
					opacity: {
						get: function(e, t) {
							if (t) {
								var o = A(e, "opacity");
								return "" === o ? "1" : o
							}
						}
					}
				},
				cssNumber: {
					animationIterationCount: !0,
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0
				},
				cssProps: {
					float: "cssFloat"
				},
				style: function(e, t, o, n) {
					if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
						var r, s, i, a = le.camelCase(t),
							l = e.style;
						if (t = le.cssProps[a] || (le.cssProps[a] = R(a) || a), i = le.cssHooks[t] || le.cssHooks[a], void 0 === o) return i && "get" in i && void 0 !== (r = i.get(e, !1, n)) ? r : l[t];
						s = typeof o, "string" === s && (r = Re.exec(o)) && r[1] && (o = p(e, t, r), s = "number"), null != o && o === o && ("number" === s && (o += r && r[3] || (le.cssNumber[a] ? "" : "px")), ae.clearCloneStyle || "" !== o || 0 !== t.indexOf("background") || (l[t] = "inherit"), i && "set" in i && void 0 === (o = i.set(e, o, n)) || (l[t] = o))
					}
				},
				css: function(e, t, o, n) {
					var r, s, i, a = le.camelCase(t);
					return t = le.cssProps[a] || (le.cssProps[a] = R(a) || a), i = le.cssHooks[t] || le.cssHooks[a], i && "get" in i && (r = i.get(e, !0, o)), void 0 === r && (r = A(e, t, n)), "normal" === r && t in nt && (r = nt[t]), "" === o || o ? (s = parseFloat(r), !0 === o || isFinite(s) ? s || 0 : r) : r
				}
			}), le.each(["height", "width"], function(e, t) {
				le.cssHooks[t] = {
					get: function(e, o, n) {
						if (o) return tt.test(le.css(e, "display")) && 0 === e.offsetWidth ? Ze(e, ot, function() {
							return L(e, t, n)
						}) : L(e, t, n)
					},
					set: function(e, o, n) {
						var r, s = n && Qe(e),
							i = n && $(e, t, n, "border-box" === le.css(e, "boxSizing", !1, s), s);
						return i && (r = Re.exec(o)) && "px" !== (r[3] || "px") && (e.style[t] = o, o = le.css(e, t)), N(e, o, i)
					}
				}
			}), le.cssHooks.marginLeft = P(ae.reliableMarginLeft, function(e, t) {
				if (t) return (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Ze(e, {
					marginLeft: 0
				}, function() {
					return e.getBoundingClientRect().left
				})) + "px"
			}), le.cssHooks.marginRight = P(ae.reliableMarginRight, function(e, t) {
				if (t) return Ze(e, {
					display: "inline-block"
				}, A, [e, "marginRight"])
			}), le.each({
				margin: "",
				padding: "",
				border: "Width"
			}, function(e, t) {
				le.cssHooks[e + t] = {
					expand: function(o) {
						for (var n = 0, r = {}, s = "string" == typeof o ? o.split(" ") : [o]; n < 4; n++) r[e + Ne[n] + t] = s[n] || s[n - 2] || s[0];
						return r
					}
				}, Je.test(e) || (le.cssHooks[e + t].set = N)
			}), le.fn.extend({
				css: function(e, t) {
					return ke(this, function(e, t, o) {
						var n, r, s = {},
							i = 0;
						if (le.isArray(t)) {
							for (n = Qe(e), r = t.length; i < r; i++) s[t[i]] = le.css(e, t[i], !1, n);
							return s
						}
						return void 0 !== o ? le.style(e, t, o) : le.css(e, t)
					}, e, t, arguments.length > 1)
				},
				show: function() {
					return D(this, !0)
				},
				hide: function() {
					return D(this)
				},
				toggle: function(e) {
					return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
						$e(this) ? le(this).show() : le(this).hide()
					})
				}
			}), le.Tween = O, O.prototype = {
				constructor: O,
				init: function(e, t, o, n, r, s) {
					this.elem = e, this.prop = o, this.easing = r || le.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (le.cssNumber[o] ? "" : "px")
				},
				cur: function() {
					var e = O.propHooks[this.prop];
					return e && e.get ? e.get(this) : O.propHooks._default.get(this)
				},
				run: function(e) {
					var t, o = O.propHooks[this.prop];
					return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), o && o.set ? o.set(this) : O.propHooks._default.set(this), this
				}
			}, O.prototype.init.prototype = O.prototype, O.propHooks = {
				_default: {
					get: function(e) {
						var t;
						return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
					},
					set: function(e) {
						le.fx.step[e.prop] ? le.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[le.cssProps[e.prop]] && !le.cssHooks[e.prop] ? e.elem[e.prop] = e.now : le.style(e.elem, e.prop, e.now + e.unit)
					}
				}
			}, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
				set: function(e) {
					e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
				}
			}, le.easing = {
				linear: function(e) {
					return e
				},
				swing: function(e) {
					return .5 - Math.cos(e * Math.PI) / 2
				},
				_default: "swing"
			}, le.fx = O.prototype.init, le.fx.step = {};
			var it, at, lt = /^(?:toggle|show|hide)$/,
				ut = /queueHooks$/;
			le.Animation = le.extend(H, {
					tweeners: {
						"*": [function(e, t) {
							var o = this.createTween(e, t);
							return p(o.elem, e, Re.exec(t), o), o
						}]
					},
					tweener: function(e, t) {
						le.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
						for (var o, n = 0, r = e.length; n < r; n++) o = e[n], H.tweeners[o] = H.tweeners[o] || [], H.tweeners[o].unshift(t)
					},
					prefilters: [q],
					prefilter: function(e, t) {
						t ? H.prefilters.unshift(e) : H.prefilters.push(e)
					}
				}), le.speed = function(e, t, o) {
					var n = e && "object" == typeof e ? le.extend({}, e) : {
						complete: o || !o && t || le.isFunction(e) && e,
						duration: e,
						easing: o && t || t && !le.isFunction(t) && t
					};
					return n.duration = le.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in le.fx.speeds ? le.fx.speeds[n.duration] : le.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
						le.isFunction(n.old) && n.old.call(this), n.queue && le.dequeue(this, n.queue)
					}, n
				}, le.fn.extend({
					fadeTo: function(e, t, o, n) {
						return this.filter($e).css("opacity", 0).show().end().animate({
							opacity: t
						}, e, o, n)
					},
					animate: function(e, t, o, n) {
						var r = le.isEmptyObject(e),
							s = le.speed(t, o, n),
							i = function() {
								var t = H(this, le.extend({}, e), s);
								(r || Se.get(this, "finish")) && t.stop(!0)
							};
						return i.finish = i, r || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
					},
					stop: function(e, t, o) {
						var n = function(e) {
							var t = e.stop;
							delete e.stop, t(o)
						};
						return "string" != typeof e && (o = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
							var t = !0,
								r = null != e && e + "queueHooks",
								s = le.timers,
								i = Se.get(this);
							if (r) i[r] && i[r].stop && n(i[r]);
							else
								for (r in i) i[r] && i[r].stop && ut.test(r) && n(i[r]);
							for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(o), t = !1, s.splice(r, 1));
							!t && o || le.dequeue(this, e)
						})
					},
					finish: function(e) {
						return !1 !== e && (e = e || "fx"), this.each(function() {
							var t, o = Se.get(this),
								n = o[e + "queue"],
								r = o[e + "queueHooks"],
								s = le.timers,
								i = n ? n.length : 0;
							for (o.finish = !0, le.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
							for (t = 0; t < i; t++) n[t] && n[t].finish && n[t].finish.call(this);
							delete o.finish
						})
					}
				}), le.each(["toggle", "show", "hide"], function(e, t) {
					var o = le.fn[t];
					le.fn[t] = function(e, n, r) {
						return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(B(t, !0), e, n, r)
					}
				}), le.each({
					slideDown: B("show"),
					slideUp: B("hide"),
					slideToggle: B("toggle"),
					fadeIn: {
						opacity: "show"
					},
					fadeOut: {
						opacity: "hide"
					},
					fadeToggle: {
						opacity: "toggle"
					}
				}, function(e, t) {
					le.fn[e] = function(e, o, n) {
						return this.animate(t, e, o, n)
					}
				}), le.timers = [], le.fx.tick = function() {
					var e, t = 0,
						o = le.timers;
					for (it = le.now(); t < o.length; t++)(e = o[t])() || o[t] !== e || o.splice(t--, 1);
					o.length || le.fx.stop(), it = void 0
				}, le.fx.timer = function(e) {
					le.timers.push(e), e() ? le.fx.start() : le.timers.pop()
				}, le.fx.interval = 13, le.fx.start = function() {
					at || (at = o.setInterval(le.fx.tick, le.fx.interval))
				}, le.fx.stop = function() {
					o.clearInterval(at), at = null
				}, le.fx.speeds = {
					slow: 600,
					fast: 200,
					_default: 400
				}, le.fn.delay = function(e, t) {
					return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
						var r = o.setTimeout(t, e);
						n.stop = function() {
							o.clearTimeout(r)
						}
					})
				},
				function() {
					var e = Z.createElement("input"),
						t = Z.createElement("select"),
						o = t.appendChild(Z.createElement("option"));
					e.type = "checkbox", ae.checkOn = "" !== e.value, ae.optSelected = o.selected, t.disabled = !0, ae.optDisabled = !o.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", ae.radioValue = "t" === e.value
				}();
			var dt, ct = le.expr.attrHandle;
			le.fn.extend({
				attr: function(e, t) {
					return ke(this, le.attr, e, t, arguments.length > 1)
				},
				removeAttr: function(e) {
					return this.each(function() {
						le.removeAttr(this, e)
					})
				}
			}), le.extend({
				attr: function(e, t, o) {
					var n, r, s = e.nodeType;
					if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? le.prop(e, t, o) : (1 === s && le.isXMLDoc(e) || (t = t.toLowerCase(), r = le.attrHooks[t] || (le.expr.match.bool.test(t) ? dt : void 0)), void 0 !== o ? null === o ? void le.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, o, t)) ? n : (e.setAttribute(t, o + ""), o) : r && "get" in r && null !== (n = r.get(e, t)) ? n : (n = le.find.attr(e, t), null == n ? void 0 : n))
				},
				attrHooks: {
					type: {
						set: function(e, t) {
							if (!ae.radioValue && "radio" === t && le.nodeName(e, "input")) {
								var o = e.value;
								return e.setAttribute("type", t), o && (e.value = o), t
							}
						}
					}
				},
				removeAttr: function(e, t) {
					var o, n, r = 0,
						s = t && t.match(we);
					if (s && 1 === e.nodeType)
						for (; o = s[r++];) n = le.propFix[o] || o, le.expr.match.bool.test(o) && (e[n] = !1), e.removeAttribute(o)
				}
			}), dt = {
				set: function(e, t, o) {
					return !1 === t ? le.removeAttr(e, o) : e.setAttribute(o, o), o
				}
			}, le.each(le.expr.match.bool.source.match(/\w+/g), function(e, t) {
				var o = ct[t] || le.find.attr;
				ct[t] = function(e, t, n) {
					var r, s;
					return n || (s = ct[t], ct[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, ct[t] = s), r
				}
			});
			var ft = /^(?:input|select|textarea|button)$/i,
				pt = /^(?:a|area)$/i;
			le.fn.extend({
				prop: function(e, t) {
					return ke(this, le.prop, e, t, arguments.length > 1)
				},
				removeProp: function(e) {
					return this.each(function() {
						delete this[le.propFix[e] || e]
					})
				}
			}), le.extend({
				prop: function(e, t, o) {
					var n, r, s = e.nodeType;
					if (3 !== s && 8 !== s && 2 !== s) return 1 === s && le.isXMLDoc(e) || (t = le.propFix[t] || t, r = le.propHooks[t]), void 0 !== o ? r && "set" in r && void 0 !== (n = r.set(e, o, t)) ? n : e[t] = o : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
				},
				propHooks: {
					tabIndex: {
						get: function(e) {
							var t = le.find.attr(e, "tabindex");
							return t ? parseInt(t, 10) : ft.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
						}
					}
				},
				propFix: {
					for: "htmlFor",
					class: "className"
				}
			}), ae.optSelected || (le.propHooks.selected = {
				get: function(e) {
					var t = e.parentNode;
					return t && t.parentNode && t.parentNode.selectedIndex, null
				},
				set: function(e) {
					var t = e.parentNode;
					t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
				}
			}), le.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
				le.propFix[this.toLowerCase()] = this
			});
			var ht = /[\t\r\n\f]/g;
			le.fn.extend({
				addClass: function(e) {
					var t, o, n, r, s, i, a, l = 0;
					if (le.isFunction(e)) return this.each(function(t) {
						le(this).addClass(e.call(this, t, z(this)))
					});
					if ("string" == typeof e && e)
						for (t = e.match(we) || []; o = this[l++];)
							if (r = z(o), n = 1 === o.nodeType && (" " + r + " ").replace(ht, " ")) {
								for (i = 0; s = t[i++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
								a = le.trim(n), r !== a && o.setAttribute("class", a)
							}
					return this
				},
				removeClass: function(e) {
					var t, o, n, r, s, i, a, l = 0;
					if (le.isFunction(e)) return this.each(function(t) {
						le(this).removeClass(e.call(this, t, z(this)))
					});
					if (!arguments.length) return this.attr("class", "");
					if ("string" == typeof e && e)
						for (t = e.match(we) || []; o = this[l++];)
							if (r = z(o), n = 1 === o.nodeType && (" " + r + " ").replace(ht, " ")) {
								for (i = 0; s = t[i++];)
									for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
								a = le.trim(n), r !== a && o.setAttribute("class", a)
							}
					return this
				},
				toggleClass: function(e, t) {
					var o = typeof e;
					return "boolean" == typeof t && "string" === o ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function(o) {
						le(this).toggleClass(e.call(this, o, z(this), t), t)
					}) : this.each(function() {
						var t, n, r, s;
						if ("string" === o)
							for (n = 0, r = le(this), s = e.match(we) || []; t = s[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
						else void 0 !== e && "boolean" !== o || (t = z(this), t && Se.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Se.get(this, "__className__") || ""))
					})
				},
				hasClass: function(e) {
					var t, o, n = 0;
					for (t = " " + e + " "; o = this[n++];)
						if (1 === o.nodeType && (" " + z(o) + " ").replace(ht, " ").indexOf(t) > -1) return !0;
					return !1
				}
			});
			var mt = /\r/g,
				bt = /[\x20\t\r\n\f]+/g;
			le.fn.extend({
				val: function(e) {
					var t, o, n, r = this[0]; {
						if (arguments.length) return n = le.isFunction(e), this.each(function(o) {
							var r;
							1 === this.nodeType && (r = n ? e.call(this, o, le(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : le.isArray(r) && (r = le.map(r, function(e) {
								return null == e ? "" : e + ""
							})), (t = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
						});
						if (r) return (t = le.valHooks[r.type] || le.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (o = t.get(r, "value")) ? o : (o = r.value, "string" == typeof o ? o.replace(mt, "") : null == o ? "" : o)
					}
				}
			}), le.extend({
				valHooks: {
					option: {
						get: function(e) {
							var t = le.find.attr(e, "value");
							return null != t ? t : le.trim(le.text(e)).replace(bt, " ")
						}
					},
					select: {
						get: function(e) {
							for (var t, o, n = e.options, r = e.selectedIndex, s = "select-one" === e.type || r < 0, i = s ? null : [], a = s ? r + 1 : n.length, l = r < 0 ? a : s ? r : 0; l < a; l++)
								if (o = n[l], (o.selected || l === r) && (ae.optDisabled ? !o.disabled : null === o.getAttribute("disabled")) && (!o.parentNode.disabled || !le.nodeName(o.parentNode, "optgroup"))) {
									if (t = le(o).val(), s) return t;
									i.push(t)
								}
							return i
						},
						set: function(e, t) {
							for (var o, n, r = e.options, s = le.makeArray(t), i = r.length; i--;) n = r[i], (n.selected = le.inArray(le.valHooks.option.get(n), s) > -1) && (o = !0);
							return o || (e.selectedIndex = -1), s
						}
					}
				}
			}), le.each(["radio", "checkbox"], function() {
				le.valHooks[this] = {
					set: function(e, t) {
						if (le.isArray(t)) return e.checked = le.inArray(le(e).val(), t) > -1
					}
				}, ae.checkOn || (le.valHooks[this].get = function(e) {
					return null === e.getAttribute("value") ? "on" : e.value
				})
			});
			var gt = /^(?:focusinfocus|focusoutblur)$/;
			le.extend(le.event, {
				trigger: function(e, t, n, r) {
					var s, i, a, l, u, d, c, f = [n || Z],
						p = ie.call(e, "type") ? e.type : e,
						h = ie.call(e, "namespace") ? e.namespace.split(".") : [];
					if (i = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !gt.test(p + le.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[le.expando] ? e : new le.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : le.makeArray(t, [e]), c = le.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
						if (!r && !c.noBubble && !le.isWindow(n)) {
							for (l = c.delegateType || p, gt.test(l + p) || (i = i.parentNode); i; i = i.parentNode) f.push(i), a = i;
							a === (n.ownerDocument || Z) && f.push(a.defaultView || a.parentWindow || o)
						}
						for (s = 0;
							(i = f[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : c.bindType || p, d = (Se.get(i, "events") || {})[e.type] && Se.get(i, "handle"), d && d.apply(i, t), (d = u && i[u]) && d.apply && Te(i) && (e.result = d.apply(i, t), !1 === e.result && e.preventDefault());
						return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !Te(n) || u && le.isFunction(n[p]) && !le.isWindow(n) && (a = n[u], a && (n[u] = null), le.event.triggered = p, n[p](), le.event.triggered = void 0, a && (n[u] = a)), e.result
					}
				},
				simulate: function(e, t, o) {
					var n = le.extend(new le.Event, o, {
						type: e,
						isSimulated: !0
					});
					le.event.trigger(n, null, t), n.isDefaultPrevented() && o.preventDefault()
				}
			}), le.fn.extend({
				trigger: function(e, t) {
					return this.each(function() {
						le.event.trigger(e, t, this)
					})
				},
				triggerHandler: function(e, t) {
					var o = this[0];
					if (o) return le.event.trigger(e, t, o, !0)
				}
			}), le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
				le.fn[t] = function(e, o) {
					return arguments.length > 0 ? this.on(t, null, e, o) : this.trigger(t)
				}
			}), le.fn.extend({
				hover: function(e, t) {
					return this.mouseenter(e).mouseleave(t || e)
				}
			}), ae.focusin = "onfocusin" in o, ae.focusin || le.each({
				focus: "focusin",
				blur: "focusout"
			}, function(e, t) {
				var o = function(e) {
					le.event.simulate(t, e.target, le.event.fix(e))
				};
				le.event.special[t] = {
					setup: function() {
						var n = this.ownerDocument || this,
							r = Se.access(n, t);
						r || n.addEventListener(e, o, !0), Se.access(n, t, (r || 0) + 1)
					},
					teardown: function() {
						var n = this.ownerDocument || this,
							r = Se.access(n, t) - 1;
						r ? Se.access(n, t, r) : (n.removeEventListener(e, o, !0), Se.remove(n, t))
					}
				}
			});
			var vt = o.location,
				yt = le.now(),
				_t = /\?/;
			le.parseJSON = function(e) {
				return JSON.parse(e + "")
			}, le.parseXML = function(e) {
				var t;
				if (!e || "string" != typeof e) return null;
				try {
					t = (new o.DOMParser).parseFromString(e, "text/xml")
				} catch (e) {
					t = void 0
				}
				return t && !t.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + e), t
			};
			var jt = /#.*$/,
				xt = /([?&])_=[^&]*/,
				wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
				Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
				kt = /^(?:GET|HEAD)$/,
				Tt = /^\/\//,
				St = {},
				Et = {},
				Mt = "*/".concat("*"),
				At = Z.createElement("a");
			At.href = vt.href, le.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: vt.href,
					type: "GET",
					isLocal: Ct.test(vt.protocol),
					global: !0,
					processData: !0,
					async: !0,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					accepts: {
						"*": Mt,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},
					contents: {
						xml: /\bxml\b/,
						html: /\bhtml/,
						json: /\bjson\b/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},
					converters: {
						"* text": String,
						"text html": !0,
						"text json": le.parseJSON,
						"text xml": le.parseXML
					},
					flatOptions: {
						url: !0,
						context: !0
					}
				},
				ajaxSetup: function(e, t) {
					return t ? X(X(e, le.ajaxSettings), t) : X(le.ajaxSettings, e)
				},
				ajaxPrefilter: W(St),
				ajaxTransport: W(Et),
				ajax: function(e, t) {
					function n(e, t, n, a) {
						var u, c, v, y, j, w = t;
						2 !== _ && (_ = 2, l && o.clearTimeout(l), r = void 0, i = a || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (y = G(f, x, n)), y = V(f, y, x, u), u ? (f.ifModified && (j = x.getResponseHeader("Last-Modified"), j && (le.lastModified[s] = j), (j = x.getResponseHeader("etag")) && (le.etag[s] = j)), 204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = y.state, c = y.data, v = y.error, u = !v)) : (v = w, !e && w || (w = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || w) + "", u ? m.resolveWith(p, [c, w, x]) : m.rejectWith(p, [x, w, v]), x.statusCode(g), g = void 0, d && h.trigger(u ? "ajaxSuccess" : "ajaxError", [x, f, u ? c : v]), b.fireWith(p, [x, w]), d && (h.trigger("ajaxComplete", [x, f]), --le.active || le.event.trigger("ajaxStop")))
					}
					"object" == typeof e && (t = e, e = void 0), t = t || {};
					var r, s, i, a, l, u, d, c, f = le.ajaxSetup({}, t),
						p = f.context || f,
						h = f.context && (p.nodeType || p.jquery) ? le(p) : le.event,
						m = le.Deferred(),
						b = le.Callbacks("once memory"),
						g = f.statusCode || {},
						v = {},
						y = {},
						_ = 0,
						j = "canceled",
						x = {
							readyState: 0,
							getResponseHeader: function(e) {
								var t;
								if (2 === _) {
									if (!a)
										for (a = {}; t = wt.exec(i);) a[t[1].toLowerCase()] = t[2];
									t = a[e.toLowerCase()]
								}
								return null == t ? null : t
							},
							getAllResponseHeaders: function() {
								return 2 === _ ? i : null
							},
							setRequestHeader: function(e, t) {
								var o = e.toLowerCase();
								return _ || (e = y[o] = y[o] || e, v[e] = t), this
							},
							overrideMimeType: function(e) {
								return _ || (f.mimeType = e), this
							},
							statusCode: function(e) {
								var t;
								if (e)
									if (_ < 2)
										for (t in e) g[t] = [g[t], e[t]];
									else x.always(e[x.status]);
								return this
							},
							abort: function(e) {
								var t = e || j;
								return r && r.abort(t), n(0, t), this
							}
						};
					if (m.promise(x).complete = b.add, x.success = x.done, x.error = x.fail, f.url = ((e || f.url || vt.href) + "").replace(jt, "").replace(Tt, vt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = le.trim(f.dataType || "*").toLowerCase().match(we) || [""], null == f.crossDomain) {
						u = Z.createElement("a");
						try {
							u.href = f.url, u.href = u.href, f.crossDomain = At.protocol + "//" + At.host != u.protocol + "//" + u.host
						} catch (e) {
							f.crossDomain = !0
						}
					}
					if (f.data && f.processData && "string" != typeof f.data && (f.data = le.param(f.data, f.traditional)), Y(St, f, t, x), 2 === _) return x;
					d = le.event && f.global, d && 0 == le.active++ && le.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !kt.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (_t.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = xt.test(s) ? s.replace(xt, "$1_=" + yt++) : s + (_t.test(s) ? "&" : "?") + "_=" + yt++)), f.ifModified && (le.lastModified[s] && x.setRequestHeader("If-Modified-Since", le.lastModified[s]), le.etag[s] && x.setRequestHeader("If-None-Match", le.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : f.accepts["*"]);
					for (c in f.headers) x.setRequestHeader(c, f.headers[c]);
					if (f.beforeSend && (!1 === f.beforeSend.call(p, x, f) || 2 === _)) return x.abort();
					j = "abort";
					for (c in {
							success: 1,
							error: 1,
							complete: 1
						}) x[c](f[c]);
					if (r = Y(Et, f, t, x)) {
						if (x.readyState = 1, d && h.trigger("ajaxSend", [x, f]), 2 === _) return x;
						f.async && f.timeout > 0 && (l = o.setTimeout(function() {
							x.abort("timeout")
						}, f.timeout));
						try {
							_ = 1, r.send(v, n)
						} catch (e) {
							if (!(_ < 2)) throw e;
							n(-1, e)
						}
					} else n(-1, "No Transport");
					return x
				},
				getJSON: function(e, t, o) {
					return le.get(e, t, o, "json")
				},
				getScript: function(e, t) {
					return le.get(e, void 0, t, "script")
				}
			}), le.each(["get", "post"], function(e, t) {
				le[t] = function(e, o, n, r) {
					return le.isFunction(o) && (r = r || n, n = o, o = void 0), le.ajax(le.extend({
						url: e,
						type: t,
						dataType: r,
						data: o,
						success: n
					}, le.isPlainObject(e) && e))
				}
			}), le._evalUrl = function(e) {
				return le.ajax({
					url: e,
					type: "GET",
					dataType: "script",
					async: !1,
					global: !1,
					throws: !0
				})
			}, le.fn.extend({
				wrapAll: function(e) {
					var t;
					return le.isFunction(e) ? this.each(function(t) {
						le(this).wrapAll(e.call(this, t))
					}) : (this[0] && (t = le(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
						for (var e = this; e.firstElementChild;) e = e.firstElementChild;
						return e
					}).append(this)), this)
				},
				wrapInner: function(e) {
					return le.isFunction(e) ? this.each(function(t) {
						le(this).wrapInner(e.call(this, t))
					}) : this.each(function() {
						var t = le(this),
							o = t.contents();
						o.length ? o.wrapAll(e) : t.append(e)
					})
				},
				wrap: function(e) {
					var t = le.isFunction(e);
					return this.each(function(o) {
						le(this).wrapAll(t ? e.call(this, o) : e)
					})
				},
				unwrap: function() {
					return this.parent().each(function() {
						le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
					}).end()
				}
			}), le.expr.filters.hidden = function(e) {
				return !le.expr.filters.visible(e)
			}, le.expr.filters.visible = function(e) {
				return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
			};
			var Pt = /%20/g,
				Rt = /\[\]$/,
				Nt = /\r?\n/g,
				$t = /^(?:submit|button|image|reset|file)$/i,
				Lt = /^(?:input|select|textarea|keygen)/i;
			le.param = function(e, t) {
				var o, n = [],
					r = function(e, t) {
						t = le.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
					};
				if (void 0 === t && (t = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() {
					r(this.name, this.value)
				});
				else
					for (o in e) J(o, e[o], t, r);
				return n.join("&").replace(Pt, "+")
			}, le.fn.extend({
				serialize: function() {
					return le.param(this.serializeArray())
				},
				serializeArray: function() {
					return this.map(function() {
						var e = le.prop(this, "elements");
						return e ? le.makeArray(e) : this
					}).filter(function() {
						var e = this.type;
						return this.name && !le(this).is(":disabled") && Lt.test(this.nodeName) && !$t.test(e) && (this.checked || !Le.test(e))
					}).map(function(e, t) {
						var o = le(this).val();
						return null == o ? null : le.isArray(o) ? le.map(o, function(e) {
							return {
								name: t.name,
								value: e.replace(Nt, "\r\n")
							}
						}) : {
							name: t.name,
							value: o.replace(Nt, "\r\n")
						}
					}).get()
				}
			}), le.ajaxSettings.xhr = function() {
				try {
					return new o.XMLHttpRequest
				} catch (e) {}
			};
			var Dt = {
					0: 200,
					1223: 204
				},
				Ot = le.ajaxSettings.xhr();
			ae.cors = !!Ot && "withCredentials" in Ot, ae.ajax = Ot = !!Ot, le.ajaxTransport(function(e) {
				var t, n;
				if (ae.cors || Ot && !e.crossDomain) return {
					send: function(r, s) {
						var i, a = e.xhr();
						if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
							for (i in e.xhrFields) a[i] = e.xhrFields[i];
						e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
						for (i in r) a.setRequestHeader(i, r[i]);
						t = function(e) {
							return function() {
								t && (t = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Dt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
									binary: a.response
								} : {
									text: a.responseText
								}, a.getAllResponseHeaders()))
							}
						}, a.onload = t(), n = a.onerror = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
							4 === a.readyState && o.setTimeout(function() {
								t && n()
							})
						}, t = t("abort");
						try {
							a.send(e.hasContent && e.data || null)
						} catch (e) {
							if (t) throw e
						}
					},
					abort: function() {
						t && t()
					}
				}
			}), le.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /\b(?:java|ecma)script\b/
				},
				converters: {
					"text script": function(e) {
						return le.globalEval(e), e
					}
				}
			}), le.ajaxPrefilter("script", function(e) {
				void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
			}), le.ajaxTransport("script", function(e) {
				if (e.crossDomain) {
					var t, o;
					return {
						send: function(n, r) {
							t = le("<script>").prop({
								charset: e.scriptCharset,
								src: e.url
							}).on("load error", o = function(e) {
								t.remove(), o = null, e && r("error" === e.type ? 404 : 200, e.type)
							}), Z.head.appendChild(t[0])
						},
						abort: function() {
							o && o()
						}
					}
				}
			});
			var It = [],
				Bt = /(=)\?(?=&|$)|\?\?/;
			le.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function() {
					var e = It.pop() || le.expando + "_" + yt++;
					return this[e] = !0, e
				}
			}), le.ajaxPrefilter("json jsonp", function(e, t, n) {
				var r, s, i, a = !1 !== e.jsonp && (Bt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(e.data) && "data");
				if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Bt, "$1" + r) : !1 !== e.jsonp && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
					return i || le.error(r + " was not called"), i[0]
				}, e.dataTypes[0] = "json", s = o[r], o[r] = function() {
					i = arguments
				}, n.always(function() {
					void 0 === s ? le(o).removeProp(r) : o[r] = s, e[r] && (e.jsonpCallback = t.jsonpCallback, It.push(r)), i && le.isFunction(s) && s(i[0]), i = s = void 0
				}), "script"
			}), le.parseHTML = function(e, t, o) {
				if (!e || "string" != typeof e) return null;
				"boolean" == typeof t && (o = t, t = !1), t = t || Z;
				var n = ge.exec(e),
					r = !o && [];
				return n ? [t.createElement(n[1])] : (n = b([e], t, r), r && r.length && le(r).remove(), le.merge([], n.childNodes))
			};
			var Ft = le.fn.load;
			le.fn.load = function(e, t, o) {
				if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
				var n, r, s, i = this,
					a = e.indexOf(" ");
				return a > -1 && (n = le.trim(e.slice(a)), e = e.slice(0, a)), le.isFunction(t) ? (o = t, t = void 0) : t && "object" == typeof t && (r = "POST"), i.length > 0 && le.ajax({
					url: e,
					type: r || "GET",
					dataType: "html",
					data: t
				}).done(function(e) {
					s = arguments, i.html(n ? le("<div>").append(le.parseHTML(e)).find(n) : e)
				}).always(o && function(e, t) {
					i.each(function() {
						o.apply(i, s || [e.responseText, t, e])
					})
				}), this
			}, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
				le.fn[t] = function(e) {
					return this.on(t, e)
				}
			}), le.expr.filters.animated = function(e) {
				return le.grep(le.timers, function(t) {
					return e === t.elem
				}).length
			}, le.offset = {
				setOffset: function(e, t, o) {
					var n, r, s, i, a, l, u, d = le.css(e, "position"),
						c = le(e),
						f = {};
					"static" === d && (e.style.position = "relative"), a = c.offset(), s = le.css(e, "top"), l = le.css(e, "left"), u = ("absolute" === d || "fixed" === d) && (s + l).indexOf("auto") > -1, u ? (n = c.position(), i = n.top, r = n.left) : (i = parseFloat(s) || 0, r = parseFloat(l) || 0), le.isFunction(t) && (t = t.call(e, o, le.extend({}, a))), null != t.top && (f.top = t.top - a.top + i), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
				}
			}, le.fn.extend({
				offset: function(e) {
					if (arguments.length) return void 0 === e ? this : this.each(function(t) {
						le.offset.setOffset(this, e, t)
					});
					var t, o, n = this[0],
						r = {
							top: 0,
							left: 0
						},
						s = n && n.ownerDocument;
					if (s) return t = s.documentElement, le.contains(t, n) ? (r = n.getBoundingClientRect(), o = K(s), {
						top: r.top + o.pageYOffset - t.clientTop,
						left: r.left + o.pageXOffset - t.clientLeft
					}) : r
				},
				position: function() {
					if (this[0]) {
						var e, t, o = this[0],
							n = {
								top: 0,
								left: 0
							};
						return "fixed" === le.css(o, "position") ? t = o.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)), {
							top: t.top - n.top - le.css(o, "marginTop", !0),
							left: t.left - n.left - le.css(o, "marginLeft", !0)
						}
					}
				},
				offsetParent: function() {
					return this.map(function() {
						for (var e = this.offsetParent; e && "static" === le.css(e, "position");) e = e.offsetParent;
						return e || et
					})
				}
			}), le.each({
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset"
			}, function(e, t) {
				var o = "pageYOffset" === t;
				le.fn[e] = function(n) {
					return ke(this, function(e, n, r) {
						var s = K(e);
						if (void 0 === r) return s ? s[t] : e[n];
						s ? s.scrollTo(o ? s.pageXOffset : r, o ? r : s.pageYOffset) : e[n] = r
					}, e, n, arguments.length)
				}
			}), le.each(["top", "left"], function(e, t) {
				le.cssHooks[t] = P(ae.pixelPosition, function(e, o) {
					if (o) return o = A(e, t), Ke.test(o) ? le(e).position()[t] + "px" : o
				})
			}), le.each({
				Height: "height",
				Width: "width"
			}, function(e, t) {
				le.each({
					padding: "inner" + e,
					content: t,
					"": "outer" + e
				}, function(o, n) {
					le.fn[n] = function(n, r) {
						var s = arguments.length && (o || "boolean" != typeof n),
							i = o || (!0 === n || !0 === r ? "margin" : "border");
						return ke(this, function(t, o, n) {
							var r;
							return le.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === n ? le.css(t, o, i) : le.style(t, o, n, i)
						}, t, s ? n : void 0, s, null)
					}
				})
			}), le.fn.extend({
				bind: function(e, t, o) {
					return this.on(e, null, t, o)
				},
				unbind: function(e, t) {
					return this.off(e, null, t)
				},
				delegate: function(e, t, o, n) {
					return this.on(t, e, o, n)
				},
				undelegate: function(e, t, o) {
					return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", o)
				},
				size: function() {
					return this.length
				}
			}), le.fn.andSelf = le.fn.addBack, n = [], void 0 !== (r = function() {
				return le
			}.apply(t, n)) && (e.exports = r);
			var qt = o.jQuery,
				Ut = o.$;
			return le.noConflict = function(e) {
				return o.$ === le && (o.$ = Ut), e && o.jQuery === le && (o.jQuery = qt), le
			}, s || (o.jQuery = o.$ = le), le
		})
	},
	"../../../../shared/node_modules/process/browser.js": function(e, t) {
		function o() {
			throw new Error("setTimeout has not been defined")
		}

		function n() {
			throw new Error("clearTimeout has not been defined")
		}

		function r(e) {
			if (d === setTimeout) return setTimeout(e, 0);
			if ((d === o || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
			try {
				return d(e, 0)
			} catch (t) {
				try {
					return d.call(null, e, 0)
				} catch (t) {
					return d.call(this, e, 0)
				}
			}
		}

		function s(e) {
			if (c === clearTimeout) return clearTimeout(e);
			if ((c === n || !c) && clearTimeout) return c = clearTimeout, clearTimeout(e);
			try {
				return c(e)
			} catch (t) {
				try {
					return c.call(null, e)
				} catch (t) {
					return c.call(this, e)
				}
			}
		}

		function i() {
			m && p && (m = !1, p.length ? h = p.concat(h) : b = -1, h.length && a())
		}

		function a() {
			if (!m) {
				var e = r(i);
				m = !0;
				for (var t = h.length; t;) {
					for (p = h, h = []; ++b < t;) p && p[b].run();
					b = -1, t = h.length
				}
				p = null, m = !1, s(e)
			}
		}

		function l(e, t) {
			this.fun = e, this.array = t
		}

		function u() {}
		var d, c, f = e.exports = {};
		! function() {
			try {
				d = "function" == typeof setTimeout ? setTimeout : o
			} catch (e) {
				d = o
			}
			try {
				c = "function" == typeof clearTimeout ? clearTimeout : n
			} catch (e) {
				c = n
			}
		}();
		var p, h = [],
			m = !1,
			b = -1;
		f.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
			h.push(new l(e, t)), 1 !== h.length || m || r(a)
		}, l.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(e) {
			return []
		}, f.binding = function(e) {
			throw new Error("process.binding is not supported")
		}, f.cwd = function() {
			return "/"
		}, f.chdir = function(e) {
			throw new Error("process.chdir is not supported")
		}, f.umask = function() {
			return 0
		}
	},
	"../../../../shared/node_modules/vue-loader/lib/component-normalizer.js": function(e, t) {
		e.exports = function(e, t, o, n, r) {
			var s, i = e = e || {},
				a = typeof e.default;
			"object" !== a && "function" !== a || (s = e, i = e.default);
			var l = "function" == typeof i ? i.options : i;
			t && (l.render = t.render, l.staticRenderFns = t.staticRenderFns), n && (l._scopeId = n);
			var u;
			if (r ? (u = function(e) {
					e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
				}, l._ssrRegister = u) : o && (u = o), u) {
				var d = l.functional,
					c = d ? l.render : l.beforeCreate;
				d ? l.render = function(e, t) {
					return u.call(t), c(e, t)
				} : l.beforeCreate = c ? [].concat(c, u) : [u]
			}
			return {
				esModule: s,
				exports: i,
				options: l
			}
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-05b68ac4","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/common/components/CollectionFollowButton.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("a", {
					class: e.buttonClasses,
					on: {
						click: e.handleClick,
						mouseenter: e.handleMouseEnter,
						mouseleave: e.handleMouseLeave
					}
				}, [o("i", {
					class: e.iconClasses
				}), o("span", [e._v(e._s(e.buttonText))])])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0802877e","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/PublicationList/Comp.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					attrs: {
						id: "user-publications"
					}
				}, [e.list.length ? [o("div", {
					staticClass: "title"
				}, [e._v("\n      " + e._s(e.$t("user:" + e.humanGender + ".publication_title")) + "\n      "), o("a", {
					attrs: {
						href: "/publications",
						target: "_blank",
						"data-toggle": "tooltip",
						"data-placement": "top",
						"data-original-title": e.$t("user:publication_tip")
					}
				}, [o("i", {
					staticClass: "iconfont ic-navigation-help"
				})])]), e._v(" "), o("ul", {
					staticClass: "list publication-list"
				}, [e._l(e.filter, function(t) {
					return o("li", {
						key: t.id,
						staticClass: "item"
					}, [o("a", {
						staticClass: "cover",
						attrs: {
							href: t.note,
							target: "_blank"
						}
					}, [o("img", {
						attrs: {
							src: e.resizeImage(t.image_url, {
								width: 112,
								height: 150
							})
						}
					})]), e._v(" "), o("div", {
						staticClass: "info"
					}, [o("a", {
						staticClass: "name",
						attrs: {
							href: t.note,
							target: "_blank"
						},
						domProps: {
							textContent: e._s(t.title)
						}
					}), e._v(" "), o("div", {
						staticClass: "intros",
						domProps: {
							textContent: e._s(t.intro)
						}
					})])])
				}), e._v(" "), e.list.length > 2 ? [e.showModal ? [o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							e.showModal = !1
						}
					}
				}, [e._v(e._s(e.$t("common:collapse")) + " "), o("i", {
					staticClass: "iconfont ic-hide"
				})])] : [o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							e.showModal = !0
						}
					}
				}, [e._v(e._s(e.$t("user:" + e.humanGender + ".publication_more", {
					total: e.total
				})) + " "), o("i", {
					staticClass: "iconfont ic-show"
				})])]] : e._e(), e._v(" "), o("publication-list-modal", {
					attrs: {
						show: e.showModal,
						list: e.list,
						total: e.total
					},
					on: {
						close: function(t) {
							e.showModal = !1
						}
					}
				})], 2)] : e._e()], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0ef0f11b","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/common/components/NotebookFollowButton.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("a", {
					class: e.buttonClasses,
					on: {
						click: e.handleClick,
						mouseenter: e.handleMouseEnter,
						mouseleave: e.handleMouseLeave
					}
				}, [o("i", {
					staticClass: "iconfont",
					class: e.iconClasses
				}), e._v(" "), o("span", [e._v(e._s(e.buttonText))])])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2d23e4fa","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/BlockUserModal.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("modal", {
					attrs: {
						show: e.show,
						"extra-classes": e.extraClasses
					}
				}, [o("template", {
					slot: "modal-header"
				}, [o("button", {
					staticClass: "close",
					attrs: {
						type: "button",
						"data-dismiss": "modal"
					},
					on: {
						click: e.close
					}
				}, [e._v("×")]), e._v(" "), o("h4", {
					staticClass: "modal-title"
				}, [e._v(e._s(e.t(".title")))])]), e._v(" "), o("template", {
					slot: "modal-body"
				}, [o("div", [e._v(e._s(e.t(".info")))]), e._v(" "), o("div", {
					staticClass: "action"
				}, [o("a", {
					attrs: {
						"data-dismiss": "modal"
					},
					on: {
						click: e.close
					}
				}, [e._v(e._s(e.t(".cancel")))]), e._v(" "), o("a", {
					staticClass: "btn btn-delete",
					on: {
						click: e.block
					}
				}, [e._v(e._s(e.t(".submit")))])])]), e._v(" "), o("template", {
					slot: "modal-footer"
				})], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-30a20d6c","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/buttons/UserFollowButton/Comp.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return e.userSignedIn && e.M.pageData.current_user.id == e.userId ? e._e() : o("toggle-button", {
					class: [e.classes + " user-follow-button", {
						followed: 1 === e.followState || 3 === e.followState
					}],
					on: {
						click: e.handleClick,
						hover: e.handleHover
					},
					model: {
						value: e.value,
						callback: function(t) {
							e.value = t
						},
						expression: "value"
					}
				}, [o("i", {
					staticClass: "iconfont"
				}), o("span", [e._v(e._s(e.buttonText))])])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3f9aa908","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/OwnCollections.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", [e.hasCollections && e.collections.length > 0 ? [o("div", {
					staticClass: "title"
				}, [e._v("\n      " + e._s(e.$t("user:" + e.propHumanGender + ".own_collection_title")) + "\n    ")]), e._v(" "), e.isMine ? o("a", {
					staticClass: "function-btn new-collection-btn",
					attrs: {
						href: e.Routes.new_collection_path(),
						target: "_blank"
					}
				}, [o("i", {
					staticClass: "iconfont ic-follow"
				}), o("span", [e._v(e._s(e.$t("user:new_collection_button")))])]) : e._e(), e._v(" "), o("ul", {
					staticClass: "list"
				}, [e._l(e.displayableCollections, function(t) {
					return o("li", {
						key: t.slug
					}, [o("a", {
						staticClass: "avatar-collection",
						attrs: {
							href: e.Routes.show_collection_path(t.slug),
							target: "_blank"
						}
					}, [o("img", {
						attrs: {
							src: e.resizeImage(t.avatar, {
								width: 96
							})
						}
					})]), e._v(" "), o("a", {
						staticClass: "name",
						attrs: {
							href: e.Routes.show_collection_path(t.slug),
							target: "_blank"
						}
					}, [e._v(e._s(t.title))])])
				}), e._v(" "), o("li", [e.expanded ? [e.moreThanTenCollections && e.totalPages === e.page ? o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							t.preventDefault(), e.toggleCollections(t)
						}
					}
				}, [e._v(e._s(e.$t("common:collapse")) + " "), o("i", {
					staticClass: "iconfont ic-hide"
				})]) : e._e()] : [e.totalPages > e.page ? o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							t.preventDefault(), e.fetchCollections(t)
						}
					}
				}, [e._v(e._s(e.$t("common:expandMore")) + " "), o("i", {
					staticClass: "iconfont ic-show"
				})]) : e._e(), e._v(" "), e.moreThanTenCollections && e.totalPages === e.page ? o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							t.preventDefault(), e.toggleCollections(t)
						}
					}
				}, [e._v(e._s(e.$t("common:expand")) + " "), o("i", {
					staticClass: "iconfont ic-show"
				})]) : e._e()]], 2)], 2)] : e._e(), e._v(" "), !e.hasCollections && e.isMine ? [o("div", {
					staticClass: "title"
				}, [e._v(e._s(e.$t("user:my_collections_title")))]), e._v(" "), o("div", {
					staticClass: "new-collection-block"
				}, [o("a", {
					staticClass: "new-collection-btn",
					attrs: {
						href: e.Routes.new_collection_path()
					}
				}, [o("i", {
					staticClass: "iconfont ic-follow"
				}), o("span", [e._v(e._s(e.$t("user:create_collection_button")))])])])] : e._e()], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6292e408","hasScoped":true}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./galileo/desktop/button/base.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				return (e._self._c || t)("button", {
					class: {
						loading: e.loading, disabled: e.disabled
					},
					on: {
						click: e.handleClick,
						mouseover: e.handleMouseOver,
						mouseout: e.handleMouseOut
					}
				}, [e._t("default")], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7150e93b","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/Notebooks.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return e.notebooks.length > 0 ? o("div", [o("div", {
					staticClass: "title"
				}, [e._v("\n    " + e._s(e.$t("user:" + e.propHumanGender + ".notebooks_title")) + "\n  ")]), e._v(" "), o("ul", {
					staticClass: "list"
				}, [e._l(e.displayableNotebooks, function(t, n) {
					return o("li", {
						key: t.id
					}, [o("a", {
						attrs: {
							href: e.Routes.show_notebook_path(t.id),
							target: "_blank"
						}
					}, [o("i", {
						staticClass: "iconfont ic-search-notebook"
					})]), e._v(" "), o("a", {
						staticClass: "name",
						attrs: {
							href: e.Routes.show_notebook_path(t.id),
							target: "_blank"
						}
					}, [e._v(e._s(t.name))])])
				}), e._v(" "), o("li", [e.expanded ? [e.moreThanTenNotebooks && e.totalPages === e.page ? o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							t.preventDefault(), e.toggleNotebooks(t)
						}
					}
				}, [e._v(e._s(e.$t("common:collapse")) + " "), o("i", {
					staticClass: "iconfont ic-hide"
				})]) : e._e()] : [e.totalPages > e.page ? o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							t.preventDefault(), e.fetchNotebooks(t)
						}
					}
				}, [e._v(e._s(e.$t("common:expandMore")) + " "), o("i", {
					staticClass: "iconfont ic-show"
				})]) : e._e(), e._v(" "), e.moreThanTenNotebooks && e.totalPages === e.page ? o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							t.preventDefault(), e.toggleNotebooks(t)
						}
					}
				}, [e._v(e._s(e.$t("common:expand")) + " "), o("i", {
					staticClass: "iconfont ic-show"
				})]) : e._e()]], 2)], 2)]) : e._e()
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7c6e2d19","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/CollectionsAndNotebooks.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return e.isLoading ? e._e() : o("div", [o("own-collections", {
					attrs: {
						"prop-collections": e.ownCollections,
						"prop-displayable-collections": e.ownCollections,
						"prop-page": e.ownCollectionsPage,
						"prop-total-pages": e.ownCollectionsTotalPages,
						"prop-human-gender": e.humanGender
					}
				}), e._v(" "), o("manageable-collections", {
					attrs: {
						"prop-collections": e.manageableCollections,
						"prop-displayable-collections": e.manageableCollections,
						"prop-page": e.manageableCollectionsPage,
						"prop-total-pages": e.manageableCollectionsTotalPages,
						"prop-human-gender": e.humanGender
					}
				}), e._v(" "), o("notebooks", {
					attrs: {
						"prop-notebooks": e.notebooks,
						"prop-displayable-notebooks": e.notebooks,
						"prop-page": e.notebooksPage,
						"prop-total-pages": e.notebooksTotalPages,
						"prop-human-gender": e.humanGender
					}
				})], 1)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-807f6fa2","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/Modal.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("transition", {
					attrs: {
						name: "fade"
					}
				}, [e.show ? o("div", {
					staticClass: "modal",
					class: e.extraClasses,
					staticStyle: {
						display: "block"
					},
					on: {
						click: e.handleOutsideClick
					}
				}, [o("div", {
					staticClass: "modal-dialog"
				}, [o("div", {
					staticClass: "modal-content"
				}, [o("div", {
					staticClass: "modal-header"
				}, [e._t("modal-header")], 2), e._v(" "), o("div", {
					staticClass: "modal-body"
				}, [e._t("modal-body")], 2), e._v(" "), e.noFooter ? e._e() : o("div", {
					staticClass: "modal-footer"
				}, [e._t("modal-footer")], 2)])])]) : e._e()])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-bf3be0ce","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/ManageableCollections.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return e.collections.length > 0 ? o("div", [o("div", {
					staticClass: "title"
				}, [e._v("\n    " + e._s(e.$t("user:" + e.propHumanGender + ".manageable_collections_title")) + "\n  ")]), e._v(" "), o("ul", {
					staticClass: "list"
				}, [e._l(e.displayableCollections, function(t) {
					return o("li", {
						key: t.slug
					}, [o("a", {
						staticClass: "avatar-collection",
						attrs: {
							href: e.Routes.show_collection_path(t.slug),
							target: "_blank"
						}
					}, [o("img", {
						attrs: {
							src: e.resizeImage(t.avatar, {
								width: 96
							})
						}
					})]), e._v(" "), o("a", {
						staticClass: "name",
						attrs: {
							href: e.Routes.show_collection_path(t.slug),
							target: "_blank"
						}
					}, [e._v(e._s(t.title))])])
				}), e._v(" "), o("li", [e.expanded ? [e.moreThanTenCollections && e.totalPages === e.page ? o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							t.preventDefault(), e.toggleCollections(t)
						}
					}
				}, [e._v(e._s(e.$t("common:collapse")) + " "), o("i", {
					staticClass: "iconfont ic-hide"
				})]) : e._e()] : [e.totalPages > e.page ? o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							t.preventDefault(), e.fetchCollections(t)
						}
					}
				}, [e._v(e._s(e.$t("common:expandMore")) + " "), o("i", {
					staticClass: "iconfont ic-show"
				})]) : e._e(), e._v(" "), e.moreThanTenCollections && e.totalPages === e.page ? o("a", {
					staticClass: "check-more",
					on: {
						click: function(t) {
							t.preventDefault(), e.toggleCollections(t)
						}
					}
				}, [e._v(e._s(e.$t("common:expand")) + " "), o("i", {
					staticClass: "iconfont ic-show"
				})]) : e._e()]], 2)], 2)]) : e._e()
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-cd7ad51e","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./galileo/desktop/button/ToggleButton.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				return (e._self._c || t)("galileo-base-button", {
					class: [e.value ? "on" : "off"],
					attrs: {
						disabled: "disabled" === e.state,
						loading: "loading" === e.state
					},
					on: {
						click: e.emitClick,
						hover: e.emitHover
					}
				}, [e._t("default")], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-db8f69d6","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/PublicationList/PublicationListModal.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("modal", {
					attrs: {
						"extra-classes": e.extraClasses
					}
				}, [o("template", {
					slot: "modal-header"
				}, [o("button", {
					staticClass: "close",
					attrs: {
						type: "button"
					},
					on: {
						click: e.close
					}
				}, [e._v("×")]), e._v(" "), o("h4", {
					staticClass: "modal-title"
				}, [e._v("\n      " + e._s(e.$t("user:" + e.humanGender + ".publication_title")) + "(" + e._s(e.total) + ")\n    ")])]), e._v(" "), o("template", {
					slot: "modal-body"
				}, [o("ul", {
					ref: "subscriberList"
				}, e._l(e.list, function(t) {
					return o("li", {
						key: t.slug
					}, [o("a", {
						staticClass: "cover",
						attrs: {
							href: t.note,
							target: "_blank"
						}
					}, [o("img", {
						attrs: {
							src: e.resizeImage(t.image_url, {
								width: 112,
								height: 150
							})
						}
					})]), e._v(" "), o("div", {
						staticClass: "info"
					}, [o("a", {
						staticClass: "name",
						attrs: {
							href: t.note,
							target: "_blank"
						},
						domProps: {
							textContent: e._s(t.title)
						}
					}), e._v(" "), o("div", {
						staticClass: "intros",
						domProps: {
							textContent: e._s(t.intro)
						}
					})])])
				}))])], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-e709f4ea","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/common/components/UserFollowButton.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return e.userSignedIn && e.isMyself ? e._e() : o("a", {
					class: e.buttonClasses,
					on: {
						click: e.handleClick,
						mouseenter: e.handleMouseEnter,
						mouseleave: e.handleMouseLeave
					}
				}, [o("i", {
					class: e.iconClasses
				}), o("span", [e._v(e._s(e.buttonText))])])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-fdf3144a","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/ReportModal.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("modal", {
					attrs: {
						"extra-classes": e.extraClasses
					}
				}, [o("template", {
					slot: "modal-header"
				}, [o("button", {
					staticClass: "close",
					attrs: {
						type: "button",
						"data-dismiss": "modal"
					},
					on: {
						click: e.close
					}
				}, [e._v("×")]), e._v(" "), o("h4", {
					staticClass: "modal-title"
				}, [e._v(e._s(e.t(".title", {
					title: e.t("." + e.abuseReportableType)
				})))])]), e._v(" "), o("template", {
					slot: "modal-body"
				}, [o("form", [o("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.reportType,
						expression: "reportType"
					}],
					attrs: {
						type: "radio",
						name: "report",
						value: "ad"
					},
					domProps: {
						checked: e._q(e.reportType, "ad")
					},
					on: {
						__c: function(t) {
							e.reportType = "ad"
						}
					}
				}), o("span", [e._v(e._s(e.t(".ad")))]), e._v(" "), o("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.reportType,
						expression: "reportType"
					}],
					attrs: {
						type: "radio",
						name: "report",
						value: "plagiarism"
					},
					domProps: {
						checked: e._q(e.reportType, "plagiarism")
					},
					on: {
						__c: function(t) {
							e.reportType = "plagiarism"
						}
					}
				}), o("span", [e._v(e._s(e.t(".plagiarism")))]), e._v(" "), o("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.reportType,
						expression: "reportType"
					}],
					attrs: {
						type: "radio",
						name: "report",
						value: "other"
					},
					domProps: {
						checked: e._q(e.reportType, "other")
					},
					on: {
						__c: function(t) {
							e.reportType = "other"
						}
					}
				}), o("span", [e._v(e._s(e.t(".other")))]), e._v(" "), o("textarea", {
					staticClass: "form-control",
					attrs: {
						placeholder: e.placeholder
					},
					on: {
						input: e.updateReprotContent
					}
				}, [e._v(e._s(e.reportContent))])])]), e._v(" "), o("template", {
					slot: "modal-footer"
				}, [o("div", {
					staticClass: "action"
				}, [o("a", {
					on: {
						click: e.close
					}
				}, [e._v(e._s(e.t(".cancel")))]), e._v(" "), o("input", {
					staticClass: "btn btn-hollow",
					attrs: {
						type: "submit"
					},
					domProps: {
						value: e.t(".submit")
					},
					on: {
						click: e.submit
					}
				})])])], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-style-loader/index.js!../../../../shared/node_modules/css-loader/index.js!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6292e408","scoped":true,"hasInlineConfig":true}!../../../../shared/node_modules/sass-loader/lib/loader.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./galileo/desktop/button/base.vue': function(e, t, o) {
		var n = o('../../../../shared/node_modules/css-loader/index.js!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6292e408","scoped":true,"hasInlineConfig":true}!../../../../shared/node_modules/sass-loader/lib/loader.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./galileo/desktop/button/base.vue');
		"string" == typeof n && (n = [
			[e.i, n, ""]
		]), n.locals && (e.exports = n.locals);
		o("../../../../shared/node_modules/vue-style-loader/lib/addStylesClient.js")("0a7d750f", n, !0)
	},
	'../../../../shared/node_modules/vue-style-loader/index.js!../../../../shared/node_modules/css-loader/index.js!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-db8f69d6","scoped":false,"hasInlineConfig":true}!../../../../shared/node_modules/sass-loader/lib/loader.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./javascripts/web/components/users/PublicationList/PublicationListModal.vue': function(e, t, o) {
		var n = o('../../../../shared/node_modules/css-loader/index.js!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-db8f69d6","scoped":false,"hasInlineConfig":true}!../../../../shared/node_modules/sass-loader/lib/loader.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./javascripts/web/components/users/PublicationList/PublicationListModal.vue');
		"string" == typeof n && (n = [
			[e.i, n, ""]
		]), n.locals && (e.exports = n.locals);
		o("../../../../shared/node_modules/vue-style-loader/lib/addStylesClient.js")("7ee6696b", n, !0)
	},
	"../../../../shared/node_modules/vue-style-loader/lib/addStylesClient.js": function(e, t, o) {
		function n(e) {
			for (var t = 0; t < e.length; t++) {
				var o = e[t],
					n = d[o.id];
				if (n) {
					n.refs++;
					for (var r = 0; r < n.parts.length; r++) n.parts[r](o.parts[r]);
					for (; r < o.parts.length; r++) n.parts.push(s(o.parts[r]));
					n.parts.length > o.parts.length && (n.parts.length = o.parts.length)
				} else {
					for (var i = [], r = 0; r < o.parts.length; r++) i.push(s(o.parts[r]));
					d[o.id] = {
						id: o.id,
						refs: 1,
						parts: i
					}
				}
			}
		}

		function r() {
			var e = document.createElement("style");
			return e.type = "text/css", c.appendChild(e), e
		}

		function s(e) {
			var t, o, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
			if (n) {
				if (h) return m;
				n.parentNode.removeChild(n)
			}
			if (b) {
				var s = p++;
				n = f || (f = r()), t = i.bind(null, n, s, !1), o = i.bind(null, n, s, !0)
			} else n = r(), t = a.bind(null, n), o = function() {
				n.parentNode.removeChild(n)
			};
			return t(e),
				function(n) {
					if (n) {
						if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
						t(e = n)
					} else o()
				}
		}

		function i(e, t, o, n) {
			var r = o ? "" : n.css;
			if (e.styleSheet) e.styleSheet.cssText = g(t, r);
			else {
				var s = document.createTextNode(r),
					i = e.childNodes;
				i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(s, i[t]) : e.appendChild(s)
			}
		}

		function a(e, t) {
			var o = t.css,
				n = t.media,
				r = t.sourceMap;
			if (n && e.setAttribute("media", n), r && (o += "\n/*# sourceURL=" + r.sources[0] + " */", o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = o;
			else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(o))
			}
		}
		var l = "undefined" != typeof document;
		if ("undefined" != typeof DEBUG && DEBUG && !l) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
		var u = o("../../../../shared/node_modules/vue-style-loader/lib/listToStyles.js"),
			d = {},
			c = l && (document.head || document.getElementsByTagName("head")[0]),
			f = null,
			p = 0,
			h = !1,
			m = function() {},
			b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
		e.exports = function(e, t, o) {
			h = o;
			var r = u(e, t);
			return n(r),
				function(t) {
					for (var o = [], s = 0; s < r.length; s++) {
						var i = r[s],
							a = d[i.id];
						a.refs--, o.push(a)
					}
					t ? (r = u(e, t), n(r)) : r = [];
					for (var s = 0; s < o.length; s++) {
						var a = o[s];
						if (0 === a.refs) {
							for (var l = 0; l < a.parts.length; l++) a.parts[l]();
							delete d[a.id]
						}
					}
				}
		};
		var g = function() {
			var e = [];
			return function(t, o) {
				return e[t] = o, e.filter(Boolean).join("\n")
			}
		}()
	},
	"../../../../shared/node_modules/vue-style-loader/lib/listToStyles.js": function(e, t) {
		e.exports = function(e, t) {
			for (var o = [], n = {}, r = 0; r < t.length; r++) {
				var s = t[r],
					i = s[0],
					a = s[1],
					l = s[2],
					u = s[3],
					d = {
						id: e + ":" + r,
						css: a,
						media: l,
						sourceMap: u
					};
				n[i] ? n[i].parts.push(d) : o.push(n[i] = {
					id: i,
					parts: [d]
				})
			}
			return o
		}
	},
	"../../../../shared/node_modules/webpack/buildin/global.js": function(e, t) {
		var o;
		o = function() {
			return this
		}();
		try {
			o = o || Function("return this")() || (0, eval)("this")
		} catch (e) {
			"object" == typeof window && (o = window)
		}
		e.exports = o
	},
	"./galileo/desktop/button/ToggleButton.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./galileo/desktop/button/ToggleButton.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-cd7ad51e","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./galileo/desktop/button/ToggleButton.vue'), null, null, null);
		e.exports = n.exports
	},
	"./galileo/desktop/button/base.vue": function(e, t, o) {
		function n(e) {
			o('../../../../shared/node_modules/vue-style-loader/index.js!../../../../shared/node_modules/css-loader/index.js!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-6292e408","scoped":true,"hasInlineConfig":true}!../../../../shared/node_modules/sass-loader/lib/loader.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./galileo/desktop/button/base.vue')
		}
		var r = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./galileo/desktop/button/base.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6292e408","hasScoped":true}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./galileo/desktop/button/base.vue'), n, "data-v-6292e408", null);
		e.exports = r.exports
	},
	"./javascripts/common/components/CollectionFollowButton.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/common/components/CollectionFollowButton.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-05b68ac4","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/common/components/CollectionFollowButton.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/common/components/NotebookFollowButton.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/common/components/NotebookFollowButton.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0ef0f11b","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/common/components/NotebookFollowButton.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/common/components/UserFollowButton.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/common/components/UserFollowButton.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-e709f4ea","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/common/components/UserFollowButton.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/common/components/api.js": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			s = n(r),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = n(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = n(l),
			d = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			c = n(d),
			f = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			p = n(f),
			h = o("./javascripts/mobile/api/baseApi.js"),
			m = n(h),
			b = function(e) {
				function t() {
					return (0, a.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
				}
				return (0, p.default)(t, e), (0, u.default)(t, [{
					key: "unsubscribeCollection",
					value: function(e) {
						return this.axios.post("/collections/" + e + "/unsubscribe")
					}
				}, {
					key: "subscribeCollection",
					value: function(e) {
						return this.axios.post("/collections/" + e + "/subscribe")
					}
				}, {
					key: "toggleLikeUser",
					value: function(e) {
						return this.axios.post("/users/" + e + "/toggle_like")
					}
				}, {
					key: "toggleLikeNotebook",
					value: function(e) {
						return this.axios.post("/notebooks/" + e + "/toggle_like")
					}
				}]), t
			}(m.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/common/m/echo.js": function(e, t, o) {
		"use strict";

		function n() {
			var e, t, o, n, r, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
				i = {},
				a = function() {},
				l = function(e) {
					return null === e.offsetParent
				},
				u = function(e, t) {
					if (l(e)) return !1;
					var o = e.getBoundingClientRect();
					return o.right >= t.l && o.bottom >= t.t && o.left <= t.r && o.top <= t.b
				},
				d = function() {
					n && (t && clearTimeout(t), t = setTimeout(function() {
						i.render(), t = null
					}, o))
				};
			return i.init = function(t) {
				t = t || {};
				var l = t.offset || 0,
					u = t.offsetVertical || l,
					c = t.offsetHorizontal || l,
					f = function(e, t) {
						return parseInt(e || t, 10)
					};
				e = {
					t: f(t.offsetTop, u),
					b: f(t.offsetBottom, u),
					l: f(t.offsetLeft, c),
					r: f(t.offsetRight, c)
				}, o = f(t.throttle, 250), n = !1 !== t.debounce, r = !!t.unload, a = t.callback || a, i.render(), document.addEventListener ? (s.addEventListener("scroll", d, !1), s.addEventListener("load", d, !1)) : (s.attachEvent("onscroll", d), s.attachEvent("onload", d))
			}, i.render = function() {
				for (var t, o, n = document.querySelectorAll("img[data-echo], [data-echo-background]"), i = n.length, l = {
						l: 0 - e.l,
						t: 0 - e.t,
						b: (s.innerHeight || document.documentElement.clientHeight) + e.b,
						r: (s.innerWidth || document.documentElement.clientWidth) + e.r
					}, d = 0; d < i; d++) o = n[d], u(o, l) ? (r && o.setAttribute("data-echo-placeholder", o.src), null !== o.getAttribute("data-echo-background") ? o.style.backgroundImage = "url(" + o.getAttribute("data-echo-background") + ")" : o.src = o.getAttribute("data-echo"), r || (o.removeAttribute("data-echo"), o.removeAttribute("data-echo-background")), $(o).removeClass("img-blur"), $(o).addClass("img-blur-done"), a(o, "load")) : r && (t = o.getAttribute("data-echo-placeholder")) && (null !== o.getAttribute("data-echo-background") ? o.style.backgroundImage = "url(" + t + ")" : o.src = t, o.removeAttribute("data-echo-placeholder"), a(o, "unload"))
			}, i.detach = function() {
				document.removeEventListener ? s.removeEventListener("scroll", d) : s.detachEvent("onscroll", d), clearTimeout(t)
			}, i
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = n, e.exports = t.default
	},
	"./javascripts/common/mixins/i18nMixin.js": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {
			methods: {
				t: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					if (t && !1 === t.prefix) return delete t.prefix, i18next.t(e, t);
					var o = this.i18nPrefix || "common:";
					return i18next.t("" + o + e, t)
				}
			}
		}, e.exports = t.default
	},
	"./javascripts/common/mixins/resizeImage.js": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {
			methods: {
				resizeImage: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					if (/\/\/(upload-images|upload)\.jianshu\.io/.test(e) && t.width > 0) {
						var o = e.replace(/http:/, ""),
							n = t.width,
							r = t.height || t.width;
						return o + "?imageMogr2/auto-orient/strip|imageView2/" + (t.mode || 1) + "/w/" + n + "/h/" + r
					}
					return e
				}
			}
		}, e.exports = t.default
	},
	"./javascripts/mobile/api/baseApi.js": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("../../../../shared/node_modules/babel-runtime/core-js/object/assign.js"),
			s = n(r),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = n(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = n(l),
			d = o("../../../../shared/node_modules/axios/index.js"),
			c = n(d),
			f = function() {
				function e() {
					var t = this;
					(0, a.default)(this, e), this.axios = c.default.create({
						timeout: 1e4,
						headers: {
							Accept: "application/json"
						}
					}), this.axios.interceptors.request.use(function(e) {
						(0, s.default)(e.headers, t.constructor.getApiSignatures());
						var o = e.method;
						return "post" !== o && "put" !== o && "delete" !== o || ((0, s.default)(e.headers, t.constructor.getCSRFToken()), e.data || (e.data = {
							fuc: 1
						})), e
					})
				}
				return (0, u.default)(e, null, [{
					key: "getApiSignatures",
					value: function() {
						return M.pageData.mobile_app ? M.invoker.getApiSignatures() : {}
					}
				}, {
					key: "getCSRFToken",
					value: function() {
						return {
							"X-CSRF-Token": M.csrf ? M.csrf.token : document.querySelector("[name=csrf-token]").getAttribute("content")
						}
					}
				}]), e
			}();
		t.default = f, e.exports = t.default
	},
	"./javascripts/web/api/baseApi.js": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("../../../../shared/node_modules/babel-runtime/core-js/object/assign.js"),
			s = n(r),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = n(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = n(l),
			d = o("../../../../shared/node_modules/axios/index.js"),
			c = n(d),
			f = function() {
				function e() {
					var t = this;
					(0, a.default)(this, e), this.axios = c.default.create({
						timeout: 1e4,
						headers: {
							Accept: "application/json"
						}
					}), this.axios.interceptors.request.use(function(e) {
						var o = e.method;
						return "post" !== o && "put" !== o && "delete" !== o || (0, s.default)(e.headers, t.constructor.getCSRFToken()), e
					})
				}
				return (0, u.default)(e, null, [{
					key: "getCSRFToken",
					value: function() {
						return document.querySelector("[name=csrf-token]") ? {
							"X-CSRF-Token": document.querySelector("[name=csrf-token]").getAttribute("content")
						} : {}
					}
				}]), e
			}();
		t.default = f, e.exports = t.default
	},
	"./javascripts/web/api/collectionApi.js": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			s = n(r),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = n(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = n(l),
			d = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			c = n(d),
			f = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			p = n(f),
			h = o("./javascripts/web/api/baseApi.js"),
			m = n(h),
			b = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					(0, a.default)(this, t);
					var o = (0, c.default)(this, (t.__proto__ || (0, s.default)(t)).call(this));
					return o.collection = e, o
				}
				return (0, p.default)(t, e), (0, u.default)(t, [{
					key: "sideList",
					value: function() {
						return this.axios.get(Routes.side_list_collection_path(this.collection.id))
					}
				}, {
					key: "subscribers",
					value: function(e) {
						var t = e.max_sort_id;
						return this.axios.get(Routes.subscribers_collection_path(this.collection.id, {
							max_sort_id: t
						}))
					}
				}, {
					key: "recommended",
					value: function(e) {
						var t = e.page,
							o = e.count;
						return this.axios.get(Routes.collection_recommended_users_path({
							collection_ids: this.collection.id,
							page: t,
							count: o
						}))
					}
				}, {
					key: "create",
					value: function(e) {
						return this.axios.post(Routes.collections_path(), e)
					}
				}, {
					key: "edit",
					value: function(e) {
						var t = e.collection_slug,
							o = e.data;
						return this.axios.post(Routes.collection_path(t), o)
					}
				}, {
					key: "show",
					value: function(e) {
						var t = e.slug,
							o = e.order_by,
							n = e.page,
							r = e.per_page;
						return this.axios.get(Routes.show_collection_path(t), {
							headers: {
								"X-PJAX": !0
							},
							params: {
								order_by: o,
								page: n,
								per_page: r
							}
						})
					}
				}, {
					key: "delete",
					value: function(e) {
						return this.axios.delete("/collections/" + e)
					}
				}, {
					key: "getByUser",
					value: function(e) {
						var t = e.slug,
							o = e.type,
							n = e.page,
							r = e.per_page;
						return this.axios.get(Routes.collections_user_path(t), {
							params: {
								slug: t,
								type: o,
								page: n,
								per_page: r
							}
						})
					}
				}, {
					key: "editing",
					value: function(e) {
						var t = e.count,
							o = e.page,
							n = e.seen_ids;
						return this.axios.get(Routes.editing_collections_path(), {
							params: {
								count: t,
								page: o,
								seen_ids: n
							}
						})
					}
				}, {
					key: "editors",
					value: function(e) {
						var t = e.collectionId,
							o = e.page;
						return this.axios.get(Routes.editors_collection_path(t), {
							params: {
								page: o
							}
						})
					}
				}, {
					key: "searchContributeNotes",
					value: function(e) {
						var t = e.collectionId,
							o = e.q;
						return this.axios.get(Routes.search_collection_contribute_notes_path(t), {
							params: {
								q: o
							}
						})
					}
				}, {
					key: "showContributeNotes",
					value: function(e) {
						var t = e.collectionId,
							o = e.page;
						return this.axios.get(Routes.collection_contribute_notes_path(t), {
							params: {
								page: o
							}
						})
					}
				}]), t
			}(m.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/web/api/followApi.js": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			s = n(r),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = n(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = n(l),
			d = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			c = n(d),
			f = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			p = n(f),
			h = o("./javascripts/web/api/baseApi.js"),
			m = n(h),
			b = function(e) {
				function t() {
					return (0, a.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
				}
				return (0, p.default)(t, e), (0, u.default)(t, [{
					key: "user",
					value: function(e) {
						return this.axios.post(Routes.toggle_like_user_path(e))
					}
				}]), t
			}(m.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/web/api/notebooksApi.js": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			s = n(r),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = n(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = n(l),
			d = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			c = n(d),
			f = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			p = n(f),
			h = o("./javascripts/web/api/baseApi.js"),
			m = n(h),
			b = function(e) {
				function t() {
					return (0, a.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
				}
				return (0, p.default)(t, e), (0, u.default)(t, [{
					key: "show",
					value: function(e) {
						var t = e.id,
							o = e.order_by,
							n = e.page,
							r = e.per_page;
						return this.axios.get(Routes.show_notebook_path(t), {
							headers: {
								"X-PJAX": !0
							},
							params: {
								order_by: o,
								page: n,
								per_page: r
							}
						})
					}
				}, {
					key: "getByUser",
					value: function(e) {
						var t = e.slug,
							o = e.type,
							n = e.page,
							r = e.per_page;
						return this.axios.get(Routes.notebooks_user_path(t), {
							params: {
								slug: t,
								type: o,
								page: n,
								per_page: r
							}
						})
					}
				}]), t
			}(m.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/web/api/publicationsApi.js": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			s = n(r),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = n(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = n(l),
			d = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			c = n(d),
			f = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			p = n(f),
			h = o("./javascripts/web/api/baseApi.js"),
			m = n(h),
			b = function(e) {
				function t() {
					return (0, a.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
				}
				return (0, p.default)(t, e), (0, u.default)(t, [{
					key: "recommendedUsers",
					value: function(e, t) {
						return this.axios.get(Routes.publication_recommended_users_path({
							page: e,
							count: t
						}))
					}
				}, {
					key: "list",
					value: function(e) {
						var t = e.page,
							o = e.count,
							n = e.userSlug;
						return this.axios.get(Routes.user_publications_path(n, {
							page: t,
							count: o
						}))
					}
				}]), t
			}(m.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/web/api/userApi.js": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			s = n(r),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = n(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = n(l),
			d = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			c = n(d),
			f = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			p = n(f),
			h = o("./javascripts/web/api/baseApi.js"),
			m = n(h),
			b = function(e) {
				function t() {
					return (0, a.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
				}
				return (0, p.default)(t, e), (0, u.default)(t, [{
					key: "show",
					value: function(e) {
						var t = e.slug,
							o = e.order_by,
							n = e.page,
							r = e.per_page;
						return this.axios.get(Routes.show_user_path(t), {
							headers: {
								"X-PJAX": !0
							},
							params: {
								order_by: o,
								page: n,
								per_page: r
							}
						})
					}
				}, {
					key: "unblock",
					value: function(e) {
						var t = e.userId;
						return this.axios.delete(Routes.user_block_path(t))
					}
				}, {
					key: "block",
					value: function(e) {
						var t = e.userId;
						return this.axios.put(Routes.user_block_path(t))
					}
				}, {
					key: "collectionsAndNotebooks",
					value: function(e) {
						var t = e.slug;
						return this.axios.get(Routes.collections_and_notebooks_user_path(t), {
							params: {
								slug: t
							}
						})
					}
				}, {
					key: "checkNickname",
					value: function(e) {
						var t = e.nickname;
						return this.axios.post("/check_nickname", {
							nickname: t
						})
					}
				}, {
					key: "abuseReport",
					value: function(e) {
						var t = e.url,
							o = e.type,
							n = e.content;
						return this.axios.post(t, {
							type: o,
							content: n
						})
					}
				}]), t
			}(m.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/web/components/buttons/UserFollowButton/Comp.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/buttons/UserFollowButton/Comp.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-30a20d6c","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/buttons/UserFollowButton/Comp.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/web/components/buttons/UserFollowButton/style.scss": function(e, t) {},
	"./javascripts/web/components/common/BlockUserModal.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/BlockUserModal.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2d23e4fa","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/BlockUserModal.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/web/components/common/Modal.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/Modal.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-807f6fa2","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/Modal.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/web/components/common/ReportModal.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/ReportModal.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-fdf3144a","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/ReportModal.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/web/components/users/CollectionsAndNotebooks.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/CollectionsAndNotebooks.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7c6e2d19","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/CollectionsAndNotebooks.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/web/components/users/ManageableCollections.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/ManageableCollections.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-bf3be0ce","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/ManageableCollections.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/web/components/users/Notebooks.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/Notebooks.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7150e93b","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/Notebooks.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/web/components/users/OwnCollections.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/OwnCollections.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3f9aa908","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/OwnCollections.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/web/components/users/PublicationList/Comp.vue": function(e, t, o) {
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/PublicationList/Comp.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0802877e","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/PublicationList/Comp.vue'), null, null, null);
		e.exports = n.exports
	},
	"./javascripts/web/components/users/PublicationList/PublicationListModal.vue": function(e, t, o) {
		function n(e) {
			o('../../../../shared/node_modules/vue-style-loader/index.js!../../../../shared/node_modules/css-loader/index.js!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-db8f69d6","scoped":false,"hasInlineConfig":true}!../../../../shared/node_modules/sass-loader/lib/loader.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./javascripts/web/components/users/PublicationList/PublicationListModal.vue')
		}
		var r = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/users/PublicationList/PublicationListModal.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-db8f69d6","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/users/PublicationList/PublicationListModal.vue'), n, null, null);
		e.exports = r.exports
	},
	"./javascripts/web/components/users/PublicationList/style.scss": function(e, t) {},
	"./javascripts/web/jquery_extensions/jquery.ajaxTab.js": function(e, t, o) {
		"use strict";
		var n, r, s, i = o("../../../../shared/node_modules/babel-runtime/helpers/typeof.js");
		! function(e) {
			e && e.__esModule
		}(i);
		! function(i) {
			r = [o("../../../../shared/node_modules/jquery/dist/jquery.js")], n = i, void 0 !== (s = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = s)
		}(function(e) {
			e.fn.ajaxTab = function(t) {
				var o = e(this),
					n = t.loader || e(o.data("loader")),
					r = t.container || e(o.data("pjax-container"));
				null !== r && r.length > 0 && o.on("click", "li > a", function(s) {
					s.preventDefault();
					var i = e(s.currentTarget).attr("href"),
						a = e(e(s.currentTarget).parent()),
						l = e(s.currentTarget).data("placeholder") || "note";
					a.hasClass("disabled") || a.hasClass("active") || (a.siblings().removeClass("active"), a.addClass("active"), e.ajax({
						url: i,
						type: "GET",
						dataType: "html",
						data: {
							_pjax: o.data("pjax-container")
						},
						beforeSend: function(e) {
							n.show(), e.setRequestHeader("X-PJAX", "true"), null !== t.before && "function" == typeof t.before && t.before.call(o[0], o[0], a[0], r[0], l)
						},
						success: function(e, s, i) {
							n.hide(), r.html(e), null !== t.success && "function" == typeof t.success && t.success.call(o[0], o[0], a[0], r[0], i)
						}
					}))
				})
			}
		})
	},
	"./javascripts/web/jquery_extensions/jquery.infiniteScroll.js": function(e, t, o) {
		"use strict";
		var n, r, s, i = o("../../../../shared/node_modules/babel-runtime/helpers/typeof.js");
		! function(e) {
			e && e.__esModule
		}(i);
		! function(i) {
			r = [o("../../../../shared/node_modules/jquery/dist/jquery.js")], n = i, void 0 !== (s = "function" == typeof n ? n.apply(t, r) : n) && (e.exports = s)
		}(function(e) {
			e.fn.infiniteScroll = function(t) {
				var o = this,
					n = t.url || o.attr("infinite-scroll-url"),
					r = o.data("eof") || !1,
					s = (o.data("page") || 1) + 1,
					i = o.data("infinite-loading") || !1,
					a = (t.times || 999) + 1,
					l = t.placeholder || o.data("placeholder") || "note";
				if (a >= s && !r && !i) {
					var u = t.params || {};
					u.page = s, e.ajax({
						url: n,
						type: "GET",
						dataType: "html",
						data: u,
						beforeSend: function(e) {
							o.data("infinite-loading", !0), e.setRequestHeader("X-INFINITESCROLL", "true"), i || null === t.before || "function" != typeof t.before || t.before.call(o[0], o[0], l)
						}
					}).done(function(e) {
						e.trim().length > 0 ? (o.data("page", s), o.data("infinite-loading", !1), o.append(e)) : o.data("eof", !0), null !== t.success && "function" == typeof t.success && t.success.call(o[0], o[0], e)
					})
				}
			}
		})
	},
	"./javascripts/web/mixins/modalMixin.js": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/components/common/Modal.vue"),
			r = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(n);
		t.default = {
			components: {
				Modal: r.default
			},
			props: {
				show: {
					type: Boolean,
					default: !1
				}
			},
			methods: {
				open: function() {
					this.$emit("open")
				},
				close: function() {
					this.$emit("close")
				}
			}
		}, e.exports = t.default
	},
	"./javascripts/web/pages/users/show/entry.js": function(e, t, o) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var r = o("./javascripts/web/components/common/BlockUserModal.vue"),
			s = n(r),
			i = o("./javascripts/web/components/users/CollectionsAndNotebooks.vue"),
			a = n(i),
			l = o("./javascripts/web/components/users/PublicationList/Comp.vue"),
			u = n(l);
		o("./stylesheets/web/page/person.scss"), o("./stylesheets/web/module/note_list.scss"), o("./javascripts/web/jquery_extensions/jquery.ajaxTab.js"), o("./javascripts/web/jquery_extensions/jquery.infiniteScroll.js");
		var d = o("./javascripts/common/m/echo.js")(window);
		M.util.addI18n("user", {
			"zh-CN": o("./javascripts/web/pages/users/show/zh-CN.json"),
			"zh-TW": o("./javascripts/web/pages/users/show/zh-TW.json")
		}), document.body.style["overflow-y"] = "scroll", $(document).ready(function() {
			function e() {
				$.find("[props-data-state]").forEach(function(e) {
					M.componentLoader.load(e, Vue.extend(o("./javascripts/web/components/buttons/UserFollowButton/Comp.vue")))
				}), $.find("[props-data-user-id]").forEach(function(e) {
					M.componentLoader.load(e, Vue.extend(o("./javascripts/common/components/UserFollowButton.vue")))
				}), $.find("[props-data-collection-id]").forEach(function(e) {
					M.componentLoader.load(e, Vue.extend(o("./javascripts/common/components/CollectionFollowButton.vue")))
				}), $.find("[props-data-notebook-id]").forEach(function(e) {
					M.componentLoader.load(e, Vue.extend(o("./javascripts/common/components/NotebookFollowButton.vue")))
				})
			}

			function t() {
				$.find("span.time").forEach(function(e) {
					var t = $(e);
					t.html(M.format.timeFromNow(t.data("sharedAt")))
				})
			}

			function n() {
				var e = (new Date).getFullYear();
				["join_jianshu", "share_note", "like_note", "comment_note", "like_comment", "like_user", "like_collection", "like_notebook", "reward_note"].forEach(function(t) {
					$.find("span[data-type=" + t + "]").forEach(function(o) {
						var n = [$(o), $(o).data("datetime")],
							r = n[0],
							s = n[1],
							i = e === moment(s).year() ? "MM.D HH:mm" : "YYYY.MM.D HH:mm";
						r.html(i18next.t("user:" + t, {
							datetime: moment(s).format(i)
						}))
					})
				})
			}

			function r() {
				var e = $("ul[infinite-scroll-url]").attr("infinite-scroll-url"),
					t = M.pageData.user.slug;
				return e === Routes.public_timeline_users_path(t) ? {
					max_id: $("ul.note-list").find("li:last").attr("id").split("-")[1] - 1
				} : {}
			}

			function i() {
				$(".note-list").on("click", ".cancel", function(e) {
					var t = M.pageData.current_user.slug,
						o = $(e.currentTarget).data("note-id"),
						n = $(e.currentTarget).closest("li");
					confirm(i18next.t("user:delete_confirm")) && $.ajax({
						url: Routes.user_liked_note_path(t, o),
						type: "Delete",
						dataType: "json"
					}).done(function() {
						n.hide()
					}).fail(function(e) {
						M.flash.error(e.responseJSON.error)
					})
				})
			}

			function l() {
				$("ul[infinite-scroll-url]").height() < window.outerHeight && $("ul[infinite-scroll-url]").infiniteScroll({
					params: r(),
					before: function(e, t) {
						M.util.appendPlaceholder("ul[infinite-scroll-url]", t)
					},
					success: function() {
						t(), n(), e(), M.util.removePlaceholder(), d.render()
					}
				})
			}
			M.componentLoader.load(document.querySelector(".publication-list"), Vue.extend(u.default)), d.init({
					offset: 0,
					throttle: 50,
					unload: !1
				}), e(), t(), n(),
				function() {
					$("ul[data-pjax-container]").ajaxTab({
						before: function(e, t, o, n) {
							M.util.htmlPlaceholder(o, n)
						},
						success: function() {
							t(), n(), e(), i(), l(), d.render()
						}
					})
				}(),
				function() {
					$(window).scroll(function() {
						var o = [$(window), $(document)],
							s = o[0],
							i = o[1],
							a = i.height() / s.height() * (s.height() / 3);
						s.scrollTop() > i.height() - s.height() - a && $("ul[infinite-scroll-url]").infiniteScroll({
							params: r(),
							before: function(e, t) {
								M.util.appendPlaceholder("ul[infinite-scroll-url]", t)
							},
							success: function() {
								t(), n(), e(), M.util.removePlaceholder(), d.render()
							}
						})
					})
				}(),
				function() {
					$('[data-action="start-edit-intro"]').click(function() {
						$(".js-intro-form").show(), $(".js-intro").hide()
					}), $('[data-action="cancel-edit-intro"]').click(function() {
						$(".js-intro").show(), $(".js-intro-form").hide()
					}), $(".js-intro-form").on("ajax:success", function(e, t) {
						$(".js-intro").html(t.user.intro_compiled), $(".js-intro").show(), $(".js-intro-form").hide()
					})
				}(),
				function() {
					$("body").append("<report-modal></report-modal>");
					var e = M.componentLoader.load(document.getElementsByTagName("report-modal")[0], Vue.extend(o("./javascripts/web/components/common/ReportModal.vue")));
					$(".js-report-button").on("click", function(t) {
						t.preventDefault(), e.show = !0, e.abuseReportableId = $(t.currentTarget).data("reportable-id"), e.abuseReportableType = $(t.currentTarget).data("reportable-type")
					}), e.$on("close", function() {
						e.show = !1
					})
				}(),
				function() {
					$("body").append('<div class="block-user-modal"></div>');
					var e = M.componentLoader.load(document.querySelector(".block-user-modal"), Vue.extend(s.default));
					$("body").on("click", ".js-block-button", function(t) {
						t.preventDefault(), e.userId = $(t.currentTarget).data("user-id"), e.show = !0
					}), e.$on("close", function() {
						e.show = !1
					}), M.vueHub.$on("block-user-success", function() {
						e.show = !1, $(".js-block-button").removeClass("js-block-button").addClass("js-unblock-button").html(i18next.t("user:dismiss_blacklist"))
					})
				}(),
				function() {
					$("body").on("click", ".js-unblock-button", function(e) {
						e.preventDefault();
						var t = $(e.currentTarget).data("user-id");
						$.ajax({
							url: Routes.user_block_path(t),
							type: "DELETE",
							dataType: "json",
							data: {
								user_id: t
							}
						}).done(function() {
							M.flash.success(i18next.t("user:dismissed_blacklist")), $(".js-unblock-button").removeClass("js-unblock-button").addClass("js-block-button").html(i18next.t("user:add_to_blacklist"))
						})
					})
				}(), i(),
				function() {
					M.componentLoader.load(document.getElementsByClassName("js-collection-and-notebook-container")[0], Vue.extend(a.default))
				}(), l()
		})
	},
	"./javascripts/web/pages/users/show/zh-CN.json": function(e, t) {
		e.exports = {
			join_jianshu: " 加入了简书 · {{datetime}}",
			share_note: " 发表了文章 · {{datetime}}",
			like_note: " 喜欢了文章 · {{datetime}}",
			reward_note: " 赞赏了文章 · {{datetime}}",
			comment_note: " 发表了评论 · {{datetime}}",
			like_comment: " 赞了评论 · {{datetime}}",
			like_user: "关注了作者 · {{datetime}}",
			like_collection: "关注了专题 · {{datetime}}",
			like_notebook: "关注了文集 · {{datetime}}",
			dismiss_blacklist: "解除黑名单",
			add_to_blacklist: "加入黑名单",
			dismissed_blacklist: "已解除黑名单",
			delete_confirm: "确认删除?",
			my_collections_title: "我创建的专题",
			his_collections_title: "他创建的专题",
			new_collection_button: "新建专题",
			create_collection_button: "创建一个新专题",
			my_notebooks_title: "我的文集",
			his_notebooks_title: "他的文集",
			remove_liked_note: "取消喜欢",
			publication_tip: "什么是简书出版",
			me: {
				own_collection_title: "我创建的专题",
				manageable_collections_title: "我管理的专题",
				notebooks_title: "我的文集",
				publication_title: "我的已出版图书",
				publication_more: "查看我的全部{{ total }}本书"
			},
			male: {
				own_collection_title: "他创建的专题",
				manageable_collections_title: "他管理的专题",
				notebooks_title: "他的文集",
				publication_title: "他的已出版图书",
				publication_more: "查看他的全部{{ total }}本书"
			},
			female: {
				own_collection_title: "她创建的专题",
				manageable_collections_title: "她管理的专题",
				notebooks_title: "她的文集",
				publication_title: "她的已出版图书",
				publication_more: "查看她的全部{{ total }}本书"
			}
		}
	},
	"./javascripts/web/pages/users/show/zh-TW.json": function(e, t) {
		e.exports = {
			join_jianshu: " 加入了簡書 · {{datetime}}",
			share_note: " 發表了文章 · {{datetime}}",
			like_note: " 喜歡了文章 · {{datetime}}",
			reward_note: " 讚賞了文章 · {{datetime}}",
			comment_note: " 發表了評論 · {{datetime}}",
			like_comment: " 讚了評論 · {{datetime}}",
			like_user: "關注了作者 · {{datetime}}",
			like_collection: "關注了專題 · {{datetime}}",
			like_notebook: "關注了文集 · {{datetime}}",
			dismiss_blacklist: "解除黑名單",
			add_to_blacklist: "加入黑名單",
			dismissed_blacklist: "已解除黑名單",
			delete_confirm: "確認刪除?",
			my_collections_title: "我創建的專題",
			his_collections_title: "他創建的專題",
			new_collection_button: "新建專題",
			create_collection_button: "創建一個新專題",
			my_notebooks_title: "我的文集",
			his_notebooks_title: "他的文集",
			remove_liked_note: "取消喜歡",
			publication_tip: "什麼是簡書出版",
			me: {
				own_collection_title: "我創建的專題",
				manageable_collections_title: "我管理的專題",
				notebooks_title: "我的文集",
				publication_title: "我的已出版圖書",
				publication_more: "查看我的全部{{ total }}本書"
			},
			male: {
				own_collection_title: "他創建的專題",
				manageable_collections_title: "他管理的專題",
				notebooks_title: "他的文集",
				publication_title: "他的已出版圖書",
				publication_more: "查看他的全部{{ total }}本書"
			},
			female: {
				own_collection_title: "她創建的專題",
				manageable_collections_title: "她管理的專題",
				notebooks_title: "她的文集",
				publication_title: "她的已出版圖書",
				publication_more: "查看她的全部{{ total }}本書"
			}
		}
	},
	"./stylesheets/web/module/note_list.scss": function(e, t) {},
	"./stylesheets/web/page/person.scss": function(e, t) {}
}, ["./javascripts/web/pages/users/show/entry.js"]);
//# sourceMappingURL=entry-8b407974edc172eaf86c.js.map