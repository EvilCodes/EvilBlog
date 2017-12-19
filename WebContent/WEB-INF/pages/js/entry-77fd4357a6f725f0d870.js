webpackJsonp([3], {
	"../../../../shared/node_modules/axios/index.js": function(e, t, o) {
		e.exports = o("../../../../shared/node_modules/axios/lib/axios.js")
	},
	"../../../../shared/node_modules/axios/lib/adapters/xhr.js": function(e, t, o) {
		"use strict";
		var s = o("../../../../shared/node_modules/axios/lib/utils.js"),
			n = o("../../../../shared/node_modules/axios/lib/core/settle.js"),
			r = o("../../../../shared/node_modules/axios/lib/helpers/buildURL.js"),
			i = o("../../../../shared/node_modules/axios/lib/helpers/parseHeaders.js"),
			a = o("../../../../shared/node_modules/axios/lib/helpers/isURLSameOrigin.js"),
			l = o("../../../../shared/node_modules/axios/lib/core/createError.js"),
			u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || o("../../../../shared/node_modules/axios/lib/helpers/btoa.js");
		e.exports = function(e) {
			return new Promise(function(t, c) {
				var d = e.data,
					p = e.headers;
				s.isFormData(d) && delete p["Content-Type"];
				var h = new XMLHttpRequest,
					m = "onreadystatechange",
					f = !1;
				if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || a(e.url) || (h = new window.XDomainRequest, m = "onload", f = !0, h.onprogress = function() {}, h.ontimeout = function() {}), e.auth) {
					var b = e.auth.username || "",
						v = e.auth.password || "";
					p.Authorization = "Basic " + u(b + ":" + v)
				}
				if (h.open(e.method.toUpperCase(), r(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h[m] = function() {
						if (h && (4 === h.readyState || f) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
							var o = "getAllResponseHeaders" in h ? i(h.getAllResponseHeaders()) : null,
								s = e.responseType && "text" !== e.responseType ? h.response : h.responseText,
								r = {
									data: s,
									status: 1223 === h.status ? 204 : h.status,
									statusText: 1223 === h.status ? "No Content" : h.statusText,
									headers: o,
									config: e,
									request: h
								};
							n(t, c, r), h = null
						}
					}, h.onerror = function() {
						c(l("Network Error", e)), h = null
					}, h.ontimeout = function() {
						c(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED")), h = null
					}, s.isStandardBrowserEnv()) {
					var _ = o("../../../../shared/node_modules/axios/lib/helpers/cookies.js"),
						g = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? _.read(e.xsrfCookieName) : void 0;
					g && (p[e.xsrfHeaderName] = g)
				}
				if ("setRequestHeader" in h && s.forEach(p, function(e, t) {
						void 0 === d && "content-type" === t.toLowerCase() ? delete p[t] : h.setRequestHeader(t, e)
					}), e.withCredentials && (h.withCredentials = !0), e.responseType) try {
					h.responseType = e.responseType
				} catch (t) {
					if ("json" !== e.responseType) throw t
				}
				"function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
					h && (h.abort(), c(e), h = null)
				}), void 0 === d && (d = null), h.send(d)
			})
		}
	},
	"../../../../shared/node_modules/axios/lib/axios.js": function(e, t, o) {
		"use strict";

		function s(e) {
			var t = new i(e),
				o = r(i.prototype.request, t);
			return n.extend(o, i.prototype, t), n.extend(o, t), o
		}
		var n = o("../../../../shared/node_modules/axios/lib/utils.js"),
			r = o("../../../../shared/node_modules/axios/lib/helpers/bind.js"),
			i = o("../../../../shared/node_modules/axios/lib/core/Axios.js"),
			a = o("../../../../shared/node_modules/axios/lib/defaults.js"),
			l = s(a);
		l.Axios = i, l.create = function(e) {
			return s(n.merge(a, e))
		}, l.Cancel = o("../../../../shared/node_modules/axios/lib/cancel/Cancel.js"), l.CancelToken = o("../../../../shared/node_modules/axios/lib/cancel/CancelToken.js"), l.isCancel = o("../../../../shared/node_modules/axios/lib/cancel/isCancel.js"), l.all = function(e) {
			return Promise.all(e)
		}, l.spread = o("../../../../shared/node_modules/axios/lib/helpers/spread.js"), e.exports = l, e.exports.default = l
	},
	"../../../../shared/node_modules/axios/lib/cancel/Cancel.js": function(e, t, o) {
		"use strict";

		function s(e) {
			this.message = e
		}
		s.prototype.toString = function() {
			return "Cancel" + (this.message ? ": " + this.message : "")
		}, s.prototype.__CANCEL__ = !0, e.exports = s
	},
	"../../../../shared/node_modules/axios/lib/cancel/CancelToken.js": function(e, t, o) {
		"use strict";

		function s(e) {
			if ("function" != typeof e) throw new TypeError("executor must be a function.");
			var t;
			this.promise = new Promise(function(e) {
				t = e
			});
			var o = this;
			e(function(e) {
				o.reason || (o.reason = new n(e), t(o.reason))
			})
		}
		var n = o("../../../../shared/node_modules/axios/lib/cancel/Cancel.js");
		s.prototype.throwIfRequested = function() {
			if (this.reason) throw this.reason
		}, s.source = function() {
			var e;
			return {
				token: new s(function(t) {
					e = t
				}),
				cancel: e
			}
		}, e.exports = s
	},
	"../../../../shared/node_modules/axios/lib/cancel/isCancel.js": function(e, t, o) {
		"use strict";
		e.exports = function(e) {
			return !(!e || !e.__CANCEL__)
		}
	},
	"../../../../shared/node_modules/axios/lib/core/Axios.js": function(e, t, o) {
		"use strict";

		function s(e) {
			this.defaults = e, this.interceptors = {
				request: new i,
				response: new i
			}
		}
		var n = o("../../../../shared/node_modules/axios/lib/defaults.js"),
			r = o("../../../../shared/node_modules/axios/lib/utils.js"),
			i = o("../../../../shared/node_modules/axios/lib/core/InterceptorManager.js"),
			a = o("../../../../shared/node_modules/axios/lib/core/dispatchRequest.js"),
			l = o("../../../../shared/node_modules/axios/lib/helpers/isAbsoluteURL.js"),
			u = o("../../../../shared/node_modules/axios/lib/helpers/combineURLs.js");
		s.prototype.request = function(e) {
			"string" == typeof e && (e = r.merge({
				url: arguments[0]
			}, arguments[1])), e = r.merge(n, this.defaults, {
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
		}, r.forEach(["delete", "get", "head", "options"], function(e) {
			s.prototype[e] = function(t, o) {
				return this.request(r.merge(o || {}, {
					method: e,
					url: t
				}))
			}
		}), r.forEach(["post", "put", "patch"], function(e) {
			s.prototype[e] = function(t, o, s) {
				return this.request(r.merge(s || {}, {
					method: e,
					url: t,
					data: o
				}))
			}
		}), e.exports = s
	},
	"../../../../shared/node_modules/axios/lib/core/InterceptorManager.js": function(e, t, o) {
		"use strict";

		function s() {
			this.handlers = []
		}
		var n = o("../../../../shared/node_modules/axios/lib/utils.js");
		s.prototype.use = function(e, t) {
			return this.handlers.push({
				fulfilled: e,
				rejected: t
			}), this.handlers.length - 1
		}, s.prototype.eject = function(e) {
			this.handlers[e] && (this.handlers[e] = null)
		}, s.prototype.forEach = function(e) {
			n.forEach(this.handlers, function(t) {
				null !== t && e(t)
			})
		}, e.exports = s
	},
	"../../../../shared/node_modules/axios/lib/core/createError.js": function(e, t, o) {
		"use strict";
		var s = o("../../../../shared/node_modules/axios/lib/core/enhanceError.js");
		e.exports = function(e, t, o, n) {
			var r = new Error(e);
			return s(r, t, o, n)
		}
	},
	"../../../../shared/node_modules/axios/lib/core/dispatchRequest.js": function(e, t, o) {
		"use strict";

		function s(e) {
			e.cancelToken && e.cancelToken.throwIfRequested()
		}
		var n = o("../../../../shared/node_modules/axios/lib/utils.js"),
			r = o("../../../../shared/node_modules/axios/lib/core/transformData.js"),
			i = o("../../../../shared/node_modules/axios/lib/cancel/isCancel.js"),
			a = o("../../../../shared/node_modules/axios/lib/defaults.js");
		e.exports = function(e) {
			return s(e), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
				delete e.headers[t]
			}), (e.adapter || a.adapter)(e).then(function(t) {
				return s(e), t.data = r(t.data, t.headers, e.transformResponse), t
			}, function(t) {
				return i(t) || (s(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
			})
		}
	},
	"../../../../shared/node_modules/axios/lib/core/enhanceError.js": function(e, t, o) {
		"use strict";
		e.exports = function(e, t, o, s) {
			return e.config = t, o && (e.code = o), e.response = s, e
		}
	},
	"../../../../shared/node_modules/axios/lib/core/settle.js": function(e, t, o) {
		"use strict";
		var s = o("../../../../shared/node_modules/axios/lib/core/createError.js");
		e.exports = function(e, t, o) {
			var n = o.config.validateStatus;
			o.status && n && !n(o.status) ? t(s("Request failed with status code " + o.status, o.config, null, o)) : e(o)
		}
	},
	"../../../../shared/node_modules/axios/lib/core/transformData.js": function(e, t, o) {
		"use strict";
		var s = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = function(e, t, o) {
			return s.forEach(o, function(o) {
				e = o(e, t)
			}), e
		}
	},
	"../../../../shared/node_modules/axios/lib/defaults.js": function(e, t, o) {
		"use strict";
		(function(t) {
			function s(e, t) {
				!n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
			}
			var n = o("../../../../shared/node_modules/axios/lib/utils.js"),
				r = o("../../../../shared/node_modules/axios/lib/helpers/normalizeHeaderName.js"),
				i = {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				a = {
					adapter: function() {
						var e;
						return "undefined" != typeof XMLHttpRequest ? e = o("../../../../shared/node_modules/axios/lib/adapters/xhr.js") : void 0 !== t && (e = o("../../../../shared/node_modules/axios/lib/adapters/xhr.js")), e
					}(),
					transformRequest: [function(e, t) {
						return r(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
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
			}, n.forEach(["delete", "get", "head"], function(e) {
				a.headers[e] = {}
			}), n.forEach(["post", "put", "patch"], function(e) {
				a.headers[e] = n.merge(i)
			}), e.exports = a
		}).call(t, o("../../../../shared/node_modules/process/browser.js"))
	},
	"../../../../shared/node_modules/axios/lib/helpers/bind.js": function(e, t, o) {
		"use strict";
		e.exports = function(e, t) {
			return function() {
				for (var o = new Array(arguments.length), s = 0; s < o.length; s++) o[s] = arguments[s];
				return e.apply(t, o)
			}
		}
	},
	"../../../../shared/node_modules/axios/lib/helpers/btoa.js": function(e, t, o) {
		"use strict";

		function s() {
			this.message = "String contains an invalid character"
		}

		function n(e) {
			for (var t, o, n = String(e), i = "", a = 0, l = r; n.charAt(0 | a) || (l = "=", a % 1); i += l.charAt(63 & t >> 8 - a % 1 * 8)) {
				if ((o = n.charCodeAt(a += .75)) > 255) throw new s;
				t = t << 8 | o
			}
			return i
		}
		var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		s.prototype = new Error, s.prototype.code = 5, s.prototype.name = "InvalidCharacterError", e.exports = n
	},
	"../../../../shared/node_modules/axios/lib/helpers/buildURL.js": function(e, t, o) {
		"use strict";

		function s(e) {
			return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
		}
		var n = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = function(e, t, o) {
			if (!t) return e;
			var r;
			if (o) r = o(t);
			else if (n.isURLSearchParams(t)) r = t.toString();
			else {
				var i = [];
				n.forEach(t, function(e, t) {
					null !== e && void 0 !== e && (n.isArray(e) && (t += "[]"), n.isArray(e) || (e = [e]), n.forEach(e, function(e) {
						n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), i.push(s(t) + "=" + s(e))
					}))
				}), r = i.join("&")
			}
			return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e
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
		var s = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = s.isStandardBrowserEnv() ? function() {
			return {
				write: function(e, t, o, n, r, i) {
					var a = [];
					a.push(e + "=" + encodeURIComponent(t)), s.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()), s.isString(n) && a.push("path=" + n), s.isString(r) && a.push("domain=" + r), !0 === i && a.push("secure"), document.cookie = a.join("; ")
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
		var s = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = s.isStandardBrowserEnv() ? function() {
			function e(e) {
				var t = e;
				return o && (n.setAttribute("href", t), t = n.href), n.setAttribute("href", t), {
					href: n.href,
					protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
					host: n.host,
					search: n.search ? n.search.replace(/^\?/, "") : "",
					hash: n.hash ? n.hash.replace(/^#/, "") : "",
					hostname: n.hostname,
					port: n.port,
					pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
				}
			}
			var t, o = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement("a");
			return t = e(window.location.href),
				function(o) {
					var n = s.isString(o) ? e(o) : o;
					return n.protocol === t.protocol && n.host === t.host
				}
		}() : function() {
			return function() {
				return !0
			}
		}()
	},
	"../../../../shared/node_modules/axios/lib/helpers/normalizeHeaderName.js": function(e, t, o) {
		"use strict";
		var s = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = function(e, t) {
			s.forEach(e, function(o, s) {
				s !== t && s.toUpperCase() === t.toUpperCase() && (e[t] = o, delete e[s])
			})
		}
	},
	"../../../../shared/node_modules/axios/lib/helpers/parseHeaders.js": function(e, t, o) {
		"use strict";
		var s = o("../../../../shared/node_modules/axios/lib/utils.js");
		e.exports = function(e) {
			var t, o, n, r = {};
			return e ? (s.forEach(e.split("\n"), function(e) {
				n = e.indexOf(":"), t = s.trim(e.substr(0, n)).toLowerCase(), o = s.trim(e.substr(n + 1)), t && (r[t] = r[t] ? r[t] + ", " + o : o)
			}), r) : r
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
			function s(e) {
				return "[object Array]" === C.call(e)
			}

			function n(e) {
				return void 0 !== t && t.isBuffer && t.isBuffer(e)
			}

			function r(e) {
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

			function c(e) {
				return void 0 === e
			}

			function d(e) {
				return null !== e && "object" == typeof e
			}

			function p(e) {
				return "[object Date]" === C.call(e)
			}

			function h(e) {
				return "[object File]" === C.call(e)
			}

			function m(e) {
				return "[object Blob]" === C.call(e)
			}

			function f(e) {
				return "[object Function]" === C.call(e)
			}

			function b(e) {
				return d(e) && f(e.pipe)
			}

			function v(e) {
				return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
			}

			function _(e) {
				return e.replace(/^\s*/, "").replace(/\s*$/, "")
			}

			function g() {
				return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
			}

			function y(e, t) {
				if (null !== e && void 0 !== e)
					if ("object" == typeof e || s(e) || (e = [e]), s(e))
						for (var o = 0, n = e.length; o < n; o++) t.call(null, e[o], o, e);
					else
						for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
			}

			function j() {
				function e(e, o) {
					"object" == typeof t[o] && "object" == typeof e ? t[o] = j(t[o], e) : t[o] = e
				}
				for (var t = {}, o = 0, s = arguments.length; o < s; o++) y(arguments[o], e);
				return t
			}

			function w(e, t, o) {
				return y(t, function(t, s) {
					e[s] = o && "function" == typeof t ? x(t, o) : t
				}), e
			}
			var x = o("../../../../shared/node_modules/axios/lib/helpers/bind.js"),
				C = Object.prototype.toString;
			e.exports = {
				isArray: s,
				isArrayBuffer: r,
				isBuffer: n,
				isFormData: i,
				isArrayBufferView: a,
				isString: l,
				isNumber: u,
				isObject: d,
				isUndefined: c,
				isDate: p,
				isFile: h,
				isBlob: m,
				isFunction: f,
				isStream: b,
				isURLSearchParams: v,
				isStandardBrowserEnv: g,
				forEach: y,
				merge: j,
				extend: w,
				trim: _
			}
		}).call(t, o("../../../../shared/node_modules/buffer/index.js").Buffer)
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/common/components/CollectionFollowButton.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/common/mixins/i18nMixin.js"),
			r = s(n),
			i = o("./javascripts/common/components/api.js"),
			a = s(i);
		t.default = {
			name: "CollectionFollowButton",
			mixins: [r.default],
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
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/common/components/UserFollowButton.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/json/stringify.js"),
			r = s(n),
			i = o("./javascripts/common/mixins/i18nMixin.js"),
			a = s(i),
			l = o("./javascripts/common/components/api.js"),
			u = s(l);
		t.default = {
			name: "UserFollowButton",
			mixins: [a.default],
			data: function() {
				return {
					i18nPrefix: "common:",
					userSignedIn: M.pageData.user_signed_in,
					hovering: !1,
					api: new u.default
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
						M.vueHub.$emit("change-follow-state", e.userId, !1), e.userCardCache(!1)
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				},
				subscribe: function() {
					var e = this;
					this.api.toggleLikeUser(this.intUserId).then(function() {
						M.vueHub.$emit("change-follow-state", e.userId, !0), M.vueHub.$emit("subscribe-user"), e.userCardCache(!0)
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				},
				changeFollowState: function(e, t) {
					this.userId === e && (this.following = t)
				},
				userCardCache: function(e) {
					try {
						var t = "user-card-" + this.userId;
						if (localStorage.getItem(t)) {
							var o = JSON.parse(localStorage.getItem(t));
							o.follow_state.is_following = e, localStorage.setItem(t, (0, r.default)(o))
						}
					} catch (e) {}
				}
			},
			watch: {
				boolFollowing: function() {
					this.hovering = !1
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/ContributeModal.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/components/common/ContributeNoteItem.vue"),
			r = s(n),
			i = o("./javascripts/web/components/common/ContributeNoteItemPlaceholder.vue"),
			a = s(i),
			l = o("./javascripts/web/mixins/modalMixin.js"),
			u = s(l),
			c = o("./javascripts/common/mixins/i18nMixin.js"),
			d = s(c),
			p = o("./javascripts/web/api/collectionApi.js"),
			h = s(p);
		t.default = {
			name: "ContributeModal",
			components: {
				ContributeNoteItem: r.default,
				ContributeNoteItemPlaceholder: a.default
			},
			mixins: [u.default, d.default],
			props: {
				show: Boolean,
				collectionId: Number,
				isCollectionEditor: Boolean
			},
			data: function() {
				return {
					extraClasses: ["contribute-modal", "animated"],
					i18nPrefix: "common:contributeModal",
					userSignedIn: M.pageData.user_signed_in,
					notes: [],
					page: 1,
					isLoading: !1,
					noMore: !1,
					isSearching: !1,
					searchKeyword: "",
					searchedNotes: [],
					searchNothingFound: !1,
					api: new h.default
				}
			},
			methods: {
				fetchContributeNotes: function() {
					var e = this;
					this.isLoading || (this.isLoading = !0, this.api.showContributeNotes({
						collectionId: this.collectionId,
						page: this.page
					}).then(function(t) {
						t.data.length ? (t.data.forEach(function(t) {
							e.notes.push(t)
						}), e.page += 1, e.isLoading = !1) : e.noMore = !0
					}).catch(function() {}))
				},
				searchNotes: function() {
					var e = this;
					this.isSearching || (this.isSearching = !0, this.api.searchContributeNotes({
						collectionId: this.collectionId,
						q: this.searchKeyword
					}).then(function(t) {
						e.searchedNotes = t.data, e.searchNothingFound = 0 === e.searchedNotes.length, e.isSearching = !1
					}).catch(function() {
						e.isSearching = !1
					}))
				},
				updateContributeNoteState: function(e, t) {
					this.notes.forEach(function(o) {
						o.id === e && (o.state = t)
					}), this.searchedNotes.forEach(function(o) {
						o.id === e && (o.state = t)
					})
				},
				listenModalScroll: function() {
					var e = this;
					$(".contribute-modal .modal-body").on("scroll", function(t) {
						if (!(e.searchedNotes.length > 0 || e.searchNothingFound)) {
							var o = t.currentTarget.scrollTop,
								s = t.currentTarget.clientHeight;
							e.$refs.contributeNoteList.clientHeight - s - o < 300 && e.fetchContributeNotes()
						}
					})
				}
			},
			watch: {
				searchKeyword: function() {
					"" === this.searchKeyword && (this.searchedNotes = [], this.searchNothingFound = !1)
				},
				show: function() {
					var e = this;
					this.show ? (0 === this.notes.length && this.fetchContributeNotes(), this.$nextTick(function() {
						e.listenModalScroll()
					})) : $(".contribute-modal .modal-body").unbind("scroll")
				},
				$route: function() {
					this.notes = [], this.page = 1
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/ContributeNoteItem.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/common/mixins/i18nMixin.js"),
			r = s(n),
			i = o("./javascripts/web/api/notesApi.js"),
			a = s(i);
		t.default = {
			name: "ContributeNoteItem",
			mixins: [r.default],
			props: {
				note: Object,
				collectionId: Number,
				isCollectionEditor: Boolean
			},
			data: function() {
				return {
					i18nPrefix: "common:contributeModal",
					api: new a.default
				}
			},
			methods: {
				submit: function(e) {
					var t = this;
					this.api.submit({
						note_id: e,
						collection_id: this.collectionId
					}).then(function(e) {
						t.$emit("update-state", t.note.id, e.data.state), "pending" === e.data.state && M.flash.success(t.t(".submitSuccess", {
							submissionsLeft: e.body.submissions_left
						}))
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				},
				withdraw: function(e) {
					var t = this;
					this.api.withdraw({
						note_id: e,
						collection_id: this.collectionId
					}).then(function(e) {
						t.$emit("update-state", t.note.id, e.data.state)
					}).catch(function(e) {
						M.flash.error(e.response.data.error)
					})
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/ContributeNoteItemPlaceholder.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {
			name: "ContributeNoteItemPlaceholder"
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
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/NoteItem.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = o("./javascripts/common/mixins/resizeImage.js"),
			n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s);
		t.default = {
			name: "NoteItem",
			mixins: [n.default],
			props: {
				note: Object
			},
			computed: {
				hasCoverImage: function() {
					return "" !== this.note.cover_img
				},
				author: function() {
					return this.note.author
				},
				formatedShareTime: function() {
					return M.format.timeFromNow(this.note.shared_at)
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/NoteItemPlaceholder.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {
			name: "NoteItemPlaceholder",
			props: {
				extraClasses: {
					type: Array,
					default: function() {
						return []
					}
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/App.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/components/subscriptions/placeholders/SidebarUserPlaceholder.vue"),
			r = s(n),
			i = o("./javascripts/common/mixins/resizeImage.js"),
			a = s(i),
			l = o("./javascripts/web/api/subscriptionsApi.js"),
			u = s(l);
		M.util.addI18n("subscriptions", {
			"zh-CN": o("./javascripts/web/components/subscriptions/zh-CN.json"),
			"zh-TW": o("./javascripts/web/components/subscriptions/zh-TW.json")
		}), t.default = {
			components: {
				SidebarUserPlaceholder: r.default
			},
			mixins: [a.default],
			data: function() {
				return {
					page: 0,
					totalPages: 0,
					showPlaceholder: !0,
					isLoading: !1,
					hasSubscriptions: M.pageData.has_subscriptions,
					hasFollowingUsers: M.pageData.has_following_users,
					currentType: "all",
					subscriptions: [],
					api: new u.default
				}
			},
			computed: {
				typeText: function() {
					return i18next.t("subscriptions:typeText." + this.currentType)
				},
				types: function() {
					return "all" === this.currentType || "onlyPushEnabled" === this.currentType ? ["user", "collection", "notebook"] : [this.currentType]
				},
				onlyPushEnabled: function() {
					return "onlyPushEnabled" === this.currentType
				},
				hasMoreSubscriptions: function() {
					return this.totalPages > this.page
				}
			},
			created: function() {
				this.fetchSubscriptions(), M.vueHub.$on("reset-unread-count", this.resetUnreadCount)
			},
			methods: {
				subscriptionRoutePath: function(e) {
					return "/subscriptions/" + e.id + "/" + e.source_type.toLowerCase()
				},
				fetchSubscriptions: function() {
					var e = this;
					this.isLoading || (this.isLoading = !0, this.api.list({
						types: this.types,
						only_push_enabled: this.onlyPushEnabled,
						page: this.page + 1
					}).then(function(t) {
						t.data.subscriptions.forEach(function(t) {
							e.subscriptions.push(t)
						}), e.page = t.data.page, e.totalPages = t.data.total_pages, e.isLoading = !1, e.hidePlaceholder()
					}).catch(function() {
						e.isLoading = !1, e.hidePlaceholder()
					}))
				},
				loadMore: function(e) {
					if (this.hasMoreSubscriptions && !this.isLoading) {
						var t = e.currentTarget.scrollTop,
							o = e.currentTarget.clientHeight;
						this.$refs.subscriptionList.clientHeight - o - t < 100 && this.fetchSubscriptions()
					}
				},
				hidePlaceholder: function() {
					this.showPlaceholder = !1
				},
				resetUnreadCount: function(e) {
					this.subscriptions.forEach(function(t) {
						t.id === e && (t.unread_count = 0)
					})
				}
			},
			watch: {
				types: function() {
					this.page = 0, this.subscriptions = [], this.fetchSubscriptions()
				},
				page: function() {
					this.hasMoreSubscriptions && this.$refs.subscriptionList.clientHeight < window.outerHeight && this.fetchSubscriptions()
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/CollectionDetailView.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/components/common/NoteItem.vue"),
			r = s(n),
			i = o("./javascripts/web/components/common/NoteItemPlaceholder.vue"),
			a = s(i),
			l = o("./javascripts/web/components/common/ContributeModal.vue"),
			u = s(l),
			c = o("./javascripts/common/mixins/resizeImage.js"),
			d = s(c),
			p = o("./javascripts/web/api/collectionApi.js"),
			h = s(p);
		t.default = {
			name: "CollectionDetailView",
			components: {
				NoteItem: r.default,
				NoteItemPlaceholder: a.default,
				ContributeModal: u.default
			},
			mixins: [d.default],
			props: {
				propSource: Object,
				propNotes: {
					type: Array,
					default: function() {
						return []
					}
				},
				propPage: Number,
				propTotalPages: Number
			},
			data: function() {
				return {
					orderBy: "added_at",
					isLoadingNotes: !1,
					showContributeModal: !1,
					source: this.propSource,
					notes: this.propNotes,
					page: this.propPage,
					totalPages: this.propTotalPages,
					api: new h.default
				}
			},
			computed: {
				collection: function() {
					return this.source
				},
				hasMoreNotes: function() {
					return this.totalPages > this.page
				},
				isCollectionEditor: function() {
					return this.source.current_user_is_editor
				},
				collectionMetaInfo: function() {
					return i18next.t("subscriptions:collectionDetailView.statisticInfo", {
						userPath: Routes.show_user_path(this.collection.owner.slug),
						owner: this.collection.owner.nickname,
						notesCount: this.collection.notes_count,
						subscribersCount: this.collection.subscribers_count
					})
				}
			},
			mounted: function() {
				this.$nextTick(function() {
					$('[data-toggle="tooltip"]').tooltip()
				})
			},
			methods: {
				fetchNotes: function() {
					var e = this;
					this.isLoadingNotes || (this.isLoadingNotes = !0, this.api.show({
						slug: this.source.slug,
						order_by: this.orderBy,
						page: this.page + 1,
						per_page: 20
					}).then(function(t) {
						t.data.notes.forEach(function(t) {
							e.notes.push(t)
						}), e.page = t.data.page, e.totalPages = t.data.total_pages, e.isLoadingNotes = !1
					}).catch(function() {
						e.isLoadingNotes = !1
					}))
				},
				openContributeModal: function() {
					this.showContributeModal = !0
				},
				closeContributeModal: function() {
					this.showContributeModal = !1
				}
			},
			watch: {
				collection: function() {
					this.orderBy = "added_at"
				},
				orderBy: function() {
					this.page = 0, this.totalPages = 0, this.notes = [], this.fetchNotes()
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/DetailView.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/components/subscriptions/CollectionDetailView.vue"),
			r = s(n),
			i = o("./javascripts/web/components/subscriptions/NotebookDetailView.vue"),
			a = s(i),
			l = o("./javascripts/web/components/subscriptions/UserDetailView.vue"),
			u = s(l),
			c = o("./javascripts/web/components/subscriptions/placeholders/CollectionPlaceholder.vue"),
			d = s(c),
			p = o("./javascripts/web/components/subscriptions/placeholders/NotebookPlaceholder.vue"),
			h = s(p),
			m = o("./javascripts/web/components/subscriptions/placeholders/UserPlaceholder.vue"),
			f = s(m),
			b = o("./javascripts/web/api/subscriptionsApi.js"),
			v = s(b);
		t.default = {
			name: "SubscriptionView",
			components: {
				collectionPlaceholder: d.default,
				notebookPlaceholder: h.default,
				userPlaceholder: f.default,
				Collection: r.default,
				Notebook: a.default,
				User: u.default
			},
			data: function() {
				return {
					subscription: {},
					showPlaceHolder: !1,
					api: new v.default
				}
			},
			computed: {
				placeholderType: function() {
					return this.$route.params.sourceType + "Placeholder"
				}
			},
			created: function() {
				this.fetchSubscription()
			},
			methods: {
				fetchSubscription: function() {
					var e = this;
					this.showPlaceHolder = !0, this.api.show(this.$route.params.id).then(function(t) {
						e.subscription = t.data, e.showPlaceHolder = !1, M.vueHub.$emit("reset-unread-count", e.subscription.id)
					}).catch(function() {})
				}
			},
			watch: {
				$route: function() {
					this.fetchSubscription()
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/NotebookDetailView.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/components/common/NoteItem.vue"),
			r = s(n),
			i = o("./javascripts/web/components/common/NoteItemPlaceholder.vue"),
			a = s(i),
			l = o("./javascripts/web/api/notebooksApi.js"),
			u = s(l);
		t.default = {
			name: "NotebookDetailView",
			components: {
				NoteItem: r.default,
				NoteItemPlaceholder: a.default
			},
			props: {
				propSource: Object,
				propNotes: {
					type: Array,
					default: function() {
						return []
					}
				},
				propPage: Number,
				propTotalPages: Number
			},
			data: function() {
				return {
					orderBy: "added_at",
					showNotePlaceholder: !1,
					isLoadingNotes: !1,
					source: this.propSource,
					notes: this.propNotes,
					page: this.propPage,
					totalPages: this.propTotalPages,
					api: new u.default
				}
			},
			computed: {
				notebook: function() {
					return this.source
				},
				notebookMetaInfo: function() {
					return i18next.t("subscriptions:notebookDetailView.statisticInfo", {
						userPath: Routes.show_user_path(this.notebook.owner.slug),
						owner: this.notebook.owner.nickname,
						notesCount: this.notebook.notes_count,
						subscribersCount: this.notebook.subscribers_count
					})
				}
			},
			methods: {
				fetchNotes: function() {
					var e = this;
					this.isLoadingNotes || (this.isLoadingNotes = !0, this.api.show({
						id: this.source.id,
						order_by: this.orderBy,
						page: this.page + 1,
						per_page: 20
					}).then(function(t) {
						t.data.notes.forEach(function(t) {
							e.notes.push(t)
						}), e.page = t.data.page, e.totalPages = t.data.total_pages, e.isLoadingNotes = !1
					}).catch(function() {
						e.isLoadingNotes = !1
					}))
				}
			},
			watch: {
				notebook: function() {
					this.orderBy = "added_at"
				},
				orderBy: function() {
					this.page = 0, this.totalPages = 0, this.notes = [], this.fetchNotes()
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/UserDetailView.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/components/common/NoteItem.vue"),
			r = s(n),
			i = o("./javascripts/web/components/common/NoteItemPlaceholder.vue"),
			a = s(i),
			l = o("./javascripts/common/mixins/resizeImage.js"),
			u = s(l),
			c = o("./javascripts/web/api/userApi.js"),
			d = s(c);
		t.default = {
			name: "UserDetailView",
			components: {
				NoteItem: r.default,
				NoteItemPlaceholder: a.default
			},
			mixins: [u.default],
			props: {
				propSource: Object,
				propNotes: {
					type: Array,
					default: function() {
						return []
					}
				},
				propPage: Number,
				propTotalPages: Number
			},
			data: function() {
				return {
					orderBy: "shared_at",
					isLoadingNotes: !1,
					source: this.propSource,
					notes: this.propNotes,
					page: this.propPage,
					totalPages: this.propTotalPages,
					api: new d.default
				}
			},
			mounted: function() {
				setTimeout(function() {
					$('[data-toggle="tooltip"]').tooltip()
				}, 2e3)
			},
			computed: {
				user: function() {
					return this.source
				},
				userMetaInfo: function() {
					return i18next.t("subscriptions:userDetailView.statisticInfo", {
						totalWordage: this.user.total_wordage,
						likesCount: this.user.total_likes_count
					})
				}
			},
			methods: {
				fetchNotes: function() {
					var e = this;
					this.isLoadingNotes || (this.isLoadingNotes = !0, this.api.show({
						slug: this.source.slug,
						order_by: this.orderBy,
						page: this.page + 1,
						per_page: 20
					}).then(function(t) {
						t.data.notes.forEach(function(t) {
							e.notes.push(t)
						}), e.page = t.data.page, e.totalPages = t.data.total_pages, e.isLoadingNotes = !1
					}).catch(function() {
						e.isLoadingNotes = !1
					}))
				}
			},
			watch: {
				user: function() {
					this.orderBy = "shared_at"
				},
				orderBy: function() {
					this.page = 0, this.totalPages = 0, this.notes = [], this.fetchNotes()
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/CollectionPlaceholder.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = o("./javascripts/web/components/common/NoteItemPlaceholder.vue"),
			n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s);
		t.default = {
			components: {
				NoteItemPlaceholder: n.default
			},
			name: "NotebookPlaceholder"
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/NotebookPlaceholder.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = o("./javascripts/web/components/common/NoteItemPlaceholder.vue"),
			n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s);
		t.default = {
			components: {
				NoteItemPlaceholder: n.default
			},
			name: "NotebookPlaceholder"
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendAllPlaceholder.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/components/subscriptions/placeholders/RecommendCollectionPlaceholder.vue"),
			r = s(n),
			i = o("./javascripts/web/components/subscriptions/placeholders/RecommendUserPlaceholder.vue"),
			a = s(i);
		t.default = {
			components: {
				RecommendCollectionPlaceholder: r.default,
				RecommendUserPlaceholder: a.default
			},
			name: "RecommendAllPlaceholder"
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendCollectionPlaceholder.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {
			name: "RecommendCollectionPlaceholder"
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendUserPlaceholder.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {
			name: "RecommendUserPlaceholder"
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/SidebarUserPlaceholder.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = {
			name: "SidebarUserPlaceholder"
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/TimeLinePlaceholder.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = o("./javascripts/web/components/common/NoteItemPlaceholder.vue"),
			n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s);
		t.default = {
			components: {
				NoteItemPlaceholder: n.default
			},
			name: "TimeLinePlaceholder",
			data: function() {
				return {
					extraClasses: ["timeline"]
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/UserPlaceholder.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = o("./javascripts/web/components/common/NoteItemPlaceholder.vue"),
			n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s);
		t.default = {
			components: {
				NoteItemPlaceholder: n.default
			},
			name: "NotebookPlaceholder"
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/recommendation/CollectionItem.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/common/components/CollectionFollowButton.vue"),
			r = s(n),
			i = o("./javascripts/common/mixins/resizeImage.js"),
			a = s(i);
		t.default = {
			name: "RecommendedCollectionItem",
			components: {
				FollowButton: r.default
			},
			mixins: [a.default],
			props: {
				recommendation: Object,
				showRecommendTag: !1,
				recommendType: String
			},
			computed: {
				collection: function() {
					return this.recommendation.subscription.source
				},
				collectionContent: function() {
					return this.collection.content
				},
				friends: function() {
					return this.recommendation.friends ? this.recommendation.friends : []
				},
				friendsCount: function() {
					return this.recommendation.friends_count ? this.recommendation.friends_count : 0
				}
			},
			methods: {
				t: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return i18next.t("subscriptions:recommendation." + e, t)
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/recommendation/ListView.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/components/subscriptions/recommendation/CollectionItem.vue"),
			r = s(n),
			i = o("./javascripts/web/components/subscriptions/recommendation/UserItem.vue"),
			a = s(i),
			l = o("./javascripts/web/components/subscriptions/placeholders/RecommendAllPlaceholder.vue"),
			u = s(l),
			c = o("./javascripts/web/components/subscriptions/placeholders/RecommendUserPlaceholder.vue"),
			d = s(c),
			p = o("./javascripts/web/components/subscriptions/placeholders/RecommendCollectionPlaceholder.vue"),
			h = s(p),
			m = o("./javascripts/web/api/subscriptionsApi.js"),
			f = s(m);
		t.default = {
			components: {
				RecommendedCollectionItem: r.default,
				RecommendedUserItem: a.default,
				RecommendAllPlaceholder: u.default,
				RecommendUserPlaceholder: d.default,
				RecommendCollectionPlaceholder: h.default
			},
			name: "RecommendationListView",
			data: function() {
				return {
					showPlaceholder: !0,
					recommendations: [],
					recommendType: "all",
					hasMoreRecommends: !1,
					isLoading: !1,
					hasFollowingUsers: M.pageData.has_following_users,
					api: new f.default
				}
			},
			computed: {
				identities: function() {
					return this.recommendations.map(function(e) {
						return e.subscription.source_identity
					})
				}
			},
			created: function() {
				this.fetchRecommendations()
			},
			methods: {
				t: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return i18next.t("subscriptions:recommendation." + e, t)
				},
				componentName: function(e) {
					return "Recommended" + e + "Item"
				},
				fetchRecommendations: function() {
					var e = this;
					this.isLoading || (this.isLoading = !0, this.api.recommended({
						type: this.recommendType,
						except_ids: this.identities.join()
					}).then(function(t) {
						t.data.recommendations.forEach(function(t) {
							e.recommendations.push(t)
						}), e.hasMoreRecommends = "true" == t.headers["has-more"], e.isLoading = !1, e.hidePlaceholder()
					}).catch(function() {
						e.isLoading = !1, e.hidePlaceholder()
					}))
				},
				hidePlaceholder: function() {
					this.showPlaceholder = !1
				}
			},
			watch: {
				recommendType: function() {
					this.page = 0, this.recommendations = [], this.fetchRecommendations()
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/recommendation/UserItem.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/common/components/UserFollowButton.vue"),
			r = s(n),
			i = o("./javascripts/common/mixins/resizeImage.js"),
			a = s(i);
		t.default = {
			name: "RecommendedUserItem",
			components: {
				UserFollowButton: r.default
			},
			mixins: [a.default],
			props: {
				recommendation: Object,
				showRecommendTag: !1,
				recommendType: String
			},
			computed: {
				subscription: function() {
					return this.recommendation.subscription
				},
				user: function() {
					return this.subscription.source
				},
				userIntro: function() {
					return this.user.intro
				},
				recentNotes: function() {
					return this.user.recent_notes
				},
				friends: function() {
					return this.recommendation.friends ? this.recommendation.friends.slice(0, 2) : []
				},
				friendsCount: function() {
					return this.recommendation.friends_count ? this.recommendation.friends_count : 0
				}
			},
			methods: {
				t: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return i18next.t("subscriptions:recommendation." + e, t)
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/timeline/ListView.vue": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("./javascripts/web/components/subscriptions/timeline/UserLikeSomethingNote.vue"),
			r = s(n),
			i = o("./javascripts/web/components/subscriptions/timeline/UserShareNoteNote.vue"),
			a = s(i),
			l = o("./javascripts/web/components/subscriptions/placeholders/TimeLinePlaceholder.vue"),
			u = s(l),
			c = o("./javascripts/web/api/subscriptionsApi.js"),
			d = s(c);
		t.default = {
			components: {
				TimeLinePlaceholder: u.default,
				user_like_something_note: r.default,
				user_share_note_note: a.default
			},
			name: "TimelineListView",
			data: function() {
				return {
					showPlaceholder: !0,
					feeds: [],
					hasMoreFeeds: !1,
					isLoadingFeeds: !1,
					api: new d.default
				}
			},
			computed: {
				oldestFeedId: function() {
					return this.feeds[this.feeds.length - 1].id
				}
			},
			created: function() {
				this.fetchActivities()
			},
			methods: {
				fetchActivities: function(e) {
					var t = this;
					this.isLoadingFeeds || (this.isLoadingFeeds = !0, this.api.timeline(e).then(function(e) {
						e.data.forEach(function(e) {
							return t.feeds.push(e)
						}), t.hasMoreFeeds = e.headers["has-more"], t.isLoadingFeeds = !1, t.hidePlaceholder()
					}).catch(function() {
						t.isLoadingFeeds = !1, t.hidePlaceholder()
					}))
				},
				hidePlaceholder: function() {
					this.showPlaceholder = !1
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/timeline/UserLikeSomethingNote.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = o("./javascripts/common/mixins/resizeImage.js"),
			n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s);
		t.default = {
			name: "UserLikeSomethingNote",
			mixins: [n.default],
			props: {
				feed: Object
			},
			mounted: function() {
				setTimeout(function() {
					$('[data-toggle="tooltip"]').tooltip()
				}, 2e3)
			},
			computed: {
				user: function() {
					return this.feed.user
				},
				note: function() {
					return this.feed.note
				},
				noteAuthor: function() {
					return this.note.user
				},
				hasListImage: function() {
					return "" !== this.note.list_image_url
				},
				feedCreatedTime: function() {
					return M.format.timeFromNow(this.feed.created_at)
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/timeline/UserShareNoteNote.vue": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = o("./javascripts/common/mixins/resizeImage.js"),
			n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s);
		t.default = {
			name: "UserShareNoteNote",
			mixins: [n.default],
			props: {
				feed: Object
			},
			mounted: function() {
				setTimeout(function() {
					$('[data-toggle="tooltip"]').tooltip()
				}, 2e3)
			},
			computed: {
				user: function() {
					return this.feed.user
				},
				note: function() {
					return this.feed.note
				},
				hasListImage: function() {
					return "" !== this.note.list_image_url
				},
				feedCreatedTime: function() {
					return M.format.timeFromNow(this.feed.created_at)
				}
			}
		}, e.exports = t.default
	},
	"../../../../shared/node_modules/babel-runtime/core-js/json/stringify.js": function(e, t, o) {
		e.exports = {
			default: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/json/stringify.js"),
			__esModule: !0
		}
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
		var s = o("../../../../shared/node_modules/babel-runtime/core-js/object/define-property.js"),
			n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s);
		t.default = function() {
			function e(e, t) {
				for (var o = 0; o < t.length; o++) {
					var s = t[o];
					s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), (0, n.default)(e, s.key, s)
				}
			}
			return function(t, o, s) {
				return o && e(t.prototype, o), s && e(t, s), t
			}
		}()
	},
	"../../../../shared/node_modules/babel-runtime/helpers/inherits.js": function(e, t, o) {
		"use strict";
		var s = o("../../../../shared/node_modules/babel-runtime/core-js/object/create.js").default,
			n = o("../../../../shared/node_modules/babel-runtime/core-js/object/set-prototype-of.js").default;
		t.default = function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = s(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (n ? n(e, t) : e.__proto__ = t)
		}, t.__esModule = !0
	},
	"../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js": function(e, t, o) {
		"use strict";
		t.__esModule = !0;
		var s = o("../../../../shared/node_modules/babel-runtime/helpers/typeof.js"),
			n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s);
		t.default = function(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t
		}
	},
	"../../../../shared/node_modules/babel-runtime/helpers/typeof.js": function(e, t, o) {
		"use strict";
		var s = o("../../../../shared/node_modules/babel-runtime/core-js/symbol.js").default;
		t.default = function(e) {
			return e && e.constructor === s ? "symbol" : typeof e
		}, t.__esModule = !0
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/json/stringify.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js");
		e.exports = function(e) {
			return (s.JSON && s.JSON.stringify || JSON.stringify).apply(JSON, arguments)
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js": function(e, t, o) {
		o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js"), e.exports = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js").Object.assign
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js");
		e.exports = function(e, t) {
			return s.create(e, t)
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js");
		e.exports = function(e, t, o) {
			return s.setDesc(e, t, o)
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
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.is-object.js");
		e.exports = function(e) {
			if (!s(e)) throw TypeError(e + " is not an object!");
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
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.a-function.js");
		e.exports = function(e, t, o) {
			if (s(e), void 0 === t) return e;
			switch (o) {
				case 1:
					return function(o) {
						return e.call(t, o)
					};
				case 2:
					return function(o, s) {
						return e.call(t, o, s)
					};
				case 3:
					return function(o, s, n) {
						return e.call(t, o, s, n)
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
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js");
		e.exports = function(e) {
			var t = s.getKeys(e),
				o = s.getSymbols;
			if (o)
				for (var n, r = o(e), i = s.isEnum, a = 0; r.length > a;) i.call(e, n = r[a++]) && t.push(n);
			return t
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.export.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.global.js"),
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.ctx.js"),
			i = function(e, t, o) {
				var a, l, u, c = e & i.F,
					d = e & i.G,
					p = e & i.S,
					h = e & i.P,
					m = e & i.B,
					f = e & i.W,
					b = d ? n : n[t] || (n[t] = {}),
					v = d ? s : p ? s[t] : (s[t] || {}).prototype;
				d && (o = t);
				for (a in o)(l = !c && v && a in v) && a in b || (u = l ? v[a] : o[a], b[a] = d && "function" != typeof v[a] ? o[a] : m && l ? r(u, s) : f && v[a] == u ? function(e) {
					var t = function(t) {
						return this instanceof e ? new e(t) : e(t)
					};
					return t.prototype = e.prototype, t
				}(u) : h && "function" == typeof u ? r(Function.call, u) : u, h && ((b.prototype || (b.prototype = {}))[a] = u))
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
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-iobject.js"),
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js").getNames,
			r = {}.toString,
			i = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
			a = function(e) {
				try {
					return n(e)
				} catch (e) {
					return i.slice()
				}
			};
		e.exports.get = function(e) {
			return i && "[object Window]" == r.call(e) ? a(e) : n(s(e))
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
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js"),
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.property-desc.js");
		e.exports = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.descriptors.js") ? function(e, t, o) {
			return s.setDesc(e, t, n(1, o))
		} : function(e, t, o) {
			return e[t] = o, e
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.iobject.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.cof.js");
		e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
			return "String" == s(e) ? e.split("") : Object(e)
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.is-array.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.cof.js");
		e.exports = Array.isArray || function(e) {
			return "Array" == s(e)
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
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js"),
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-iobject.js");
		e.exports = function(e, t) {
			for (var o, r = n(e), i = s.getKeys(r), a = i.length, l = 0; a > l;)
				if (r[o = i[l++]] === t) return o
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.library.js": function(e, t) {
		e.exports = !0
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.object-assign.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js"),
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-object.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.iobject.js");
		e.exports = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.fails.js")(function() {
			var e = Object.assign,
				t = {},
				o = {},
				s = Symbol(),
				n = "abcdefghijklmnopqrst";
			return t[s] = 7, n.split("").forEach(function(e) {
				o[e] = e
			}), 7 != e({}, t)[s] || Object.keys(e({}, o)).join("") != n
		}) ? function(e, t) {
			for (var o = n(e), i = arguments, a = i.length, l = 1, u = s.getKeys, c = s.getSymbols, d = s.isEnum; a > l;)
				for (var p, h = r(i[l++]), m = c ? u(h).concat(c(h)) : u(h), f = m.length, b = 0; f > b;) d.call(h, p = m[b++]) && (o[p] = h[p]);
			return o
		} : Object.assign
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.object-sap.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.export.js"),
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.core.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.fails.js");
		e.exports = function(e, t) {
			var o = (n.Object || {})[e] || Object[e],
				i = {};
			i[e] = t(o), s(s.S + s.F * r(function() {
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
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js").getDesc,
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.is-object.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.an-object.js"),
			i = function(e, t) {
				if (r(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
			};
		e.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
				try {
					n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.ctx.js")(Function.call, s(Object.prototype, "__proto__").set, 2), n(e, []), t = !(e instanceof Array)
				} catch (e) {
					t = !0
				}
				return function(e, o) {
					return i(e, o), t ? e.__proto__ = o : n(e, o), e
				}
			}({}, !1) : void 0),
			check: i
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.set-to-string-tag.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js").setDesc,
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.has.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.wks.js")("toStringTag");
		e.exports = function(e, t, o) {
			e && !n(e = o ? e : e.prototype, r) && s(e, r, {
				configurable: !0,
				value: t
			})
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.shared.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.global.js"),
			n = s["__core-js_shared__"] || (s["__core-js_shared__"] = {});
		e.exports = function(e) {
			return n[e] || (n[e] = {})
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-iobject.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.iobject.js"),
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.defined.js");
		e.exports = function(e) {
			return s(n(e))
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-object.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.defined.js");
		e.exports = function(e) {
			return Object(s(e))
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.uid.js": function(e, t) {
		var o = 0,
			s = Math.random();
		e.exports = function(e) {
			return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++o + s).toString(36))
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.wks.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.shared.js")("wks"),
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.uid.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.global.js").Symbol;
		e.exports = function(e) {
			return s[e] || (s[e] = r && r[e] || (r || n)("Symbol." + e))
		}
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.export.js");
		s(s.S + s.F, "Object", {
			assign: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.object-assign.js")
		})
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.get-prototype-of.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-object.js");
		o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.object-sap.js")("getPrototypeOf", function(e) {
			return function(t) {
				return e(s(t))
			}
		})
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js": function(e, t, o) {
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.export.js");
		s(s.S, "Object", {
			setPrototypeOf: o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.set-proto.js").set
		})
	},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js": function(e, t) {},
	"../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js": function(e, t, o) {
		"use strict";
		var s = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.js"),
			n = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.global.js"),
			r = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.has.js"),
			i = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.descriptors.js"),
			a = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.export.js"),
			l = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.redefine.js"),
			u = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.fails.js"),
			c = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.shared.js"),
			d = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.set-to-string-tag.js"),
			p = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.uid.js"),
			h = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.wks.js"),
			m = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.keyof.js"),
			f = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.get-names.js"),
			b = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.enum-keys.js"),
			v = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.is-array.js"),
			_ = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.an-object.js"),
			g = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.to-iobject.js"),
			y = o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.property-desc.js"),
			j = s.getDesc,
			w = s.setDesc,
			x = s.create,
			C = f.get,
			k = n.Symbol,
			R = n.JSON,
			P = R && R.stringify,
			S = !1,
			E = h("_hidden"),
			N = s.isEnum,
			T = c("symbol-registry"),
			A = c("symbols"),
			I = "function" == typeof k,
			$ = Object.prototype,
			M = i && u(function() {
				return 7 != x(w({}, "a", {
					get: function() {
						return w(this, "a", {
							value: 7
						}).a
					}
				})).a
			}) ? function(e, t, o) {
				var s = j($, t);
				s && delete $[t], w(e, t, o), s && e !== $ && w($, t, s)
			} : w,
			U = function(e) {
				var t = A[e] = x(k.prototype);
				return t._k = e, i && S && M($, e, {
					configurable: !0,
					set: function(t) {
						r(this, E) && r(this[E], e) && (this[E][e] = !1), M(this, e, y(1, t))
					}
				}), t
			},
			L = function(e) {
				return "symbol" == typeof e
			},
			O = function(e, t, o) {
				return o && r(A, t) ? (o.enumerable ? (r(e, E) && e[E][t] && (e[E][t] = !1), o = x(o, {
					enumerable: y(0, !1)
				})) : (r(e, E) || w(e, E, y(1, {})), e[E][t] = !0), M(e, t, o)) : w(e, t, o)
			},
			B = function(e, t) {
				_(e);
				for (var o, s = b(t = g(t)), n = 0, r = s.length; r > n;) O(e, o = s[n++], t[o]);
				return e
			},
			F = function(e, t) {
				return void 0 === t ? x(e) : B(x(e), t)
			},
			D = function(e) {
				var t = N.call(this, e);
				return !(t || !r(this, e) || !r(A, e) || r(this, E) && this[E][e]) || t
			},
			z = function(e, t) {
				var o = j(e = g(e), t);
				return !o || !r(A, t) || r(e, E) && e[E][t] || (o.enumerable = !0), o
			},
			V = function(e) {
				for (var t, o = C(g(e)), s = [], n = 0; o.length > n;) r(A, t = o[n++]) || t == E || s.push(t);
				return s
			},
			q = function(e) {
				for (var t, o = C(g(e)), s = [], n = 0; o.length > n;) r(A, t = o[n++]) && s.push(A[t]);
				return s
			},
			H = function(e) {
				if (void 0 !== e && !L(e)) {
					for (var t, o, s = [e], n = 1, r = arguments; r.length > n;) s.push(r[n++]);
					return t = s[1], "function" == typeof t && (o = t), !o && v(t) || (t = function(e, t) {
						if (o && (t = o.call(this, e, t)), !L(t)) return t
					}), s[1] = t, P.apply(R, s)
				}
			},
			Y = u(function() {
				var e = k();
				return "[null]" != P([e]) || "{}" != P({
					a: e
				}) || "{}" != P(Object(e))
			});
		I || (k = function() {
			if (L(this)) throw TypeError("Symbol is not a constructor");
			return U(p(arguments.length > 0 ? arguments[0] : void 0))
		}, l(k.prototype, "toString", function() {
			return this._k
		}), L = function(e) {
			return e instanceof k
		}, s.create = F, s.isEnum = D, s.getDesc = z, s.setDesc = O, s.setDescs = B, s.getNames = f.get = V, s.getSymbols = q, i && !o("../../../../shared/node_modules/babel-runtime/node_modules/core-js/library/modules/$.library.js") && l($, "propertyIsEnumerable", D, !0));
		var X = {
			for: function(e) {
				return r(T, e += "") ? T[e] : T[e] = k(e)
			},
			keyFor: function(e) {
				return m(T, e)
			},
			useSetter: function() {
				S = !0
			},
			useSimple: function() {
				S = !1
			}
		};
		s.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function(e) {
			var t = h(e);
			X[e] = I ? t : U(t)
		}), S = !0, a(a.G + a.W, {
			Symbol: k
		}), a(a.S, "Symbol", X), a(a.S + a.F * !I, "Object", {
			create: F,
			defineProperty: O,
			defineProperties: B,
			getOwnPropertyDescriptor: z,
			getOwnPropertyNames: V,
			getOwnPropertySymbols: q
		}), R && a(a.S + a.F * (!I || Y), "JSON", {
			stringify: H
		}), d(k, "Symbol"), d(Math, "Math", !0), d(n.JSON, "JSON", !0)
	},
	"../../../../shared/node_modules/base64-js/index.js": function(e, t, o) {
		"use strict";

		function s(e) {
			var t = e.length;
			if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
		}

		function n(e) {
			return 3 * e.length / 4 - s(e)
		}

		function r(e) {
			var t, o, n, r, i, a = e.length;
			r = s(e), i = new d(3 * a / 4 - r), o = r > 0 ? a - 4 : a;
			var l = 0;
			for (t = 0; t < o; t += 4) n = c[e.charCodeAt(t)] << 18 | c[e.charCodeAt(t + 1)] << 12 | c[e.charCodeAt(t + 2)] << 6 | c[e.charCodeAt(t + 3)], i[l++] = n >> 16 & 255, i[l++] = n >> 8 & 255, i[l++] = 255 & n;
			return 2 === r ? (n = c[e.charCodeAt(t)] << 2 | c[e.charCodeAt(t + 1)] >> 4, i[l++] = 255 & n) : 1 === r && (n = c[e.charCodeAt(t)] << 10 | c[e.charCodeAt(t + 1)] << 4 | c[e.charCodeAt(t + 2)] >> 2, i[l++] = n >> 8 & 255, i[l++] = 255 & n), i
		}

		function i(e) {
			return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e]
		}

		function a(e, t, o) {
			for (var s, n = [], r = t; r < o; r += 3) s = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], n.push(i(s));
			return n.join("")
		}

		function l(e) {
			for (var t, o = e.length, s = o % 3, n = "", r = [], i = 0, l = o - s; i < l; i += 16383) r.push(a(e, i, i + 16383 > l ? l : i + 16383));
			return 1 === s ? (t = e[o - 1], n += u[t >> 2], n += u[t << 4 & 63], n += "==") : 2 === s && (t = (e[o - 2] << 8) + e[o - 1], n += u[t >> 10], n += u[t >> 4 & 63], n += u[t << 2 & 63], n += "="), r.push(n), r.join("")
		}
		t.byteLength = n, t.toByteArray = r, t.fromByteArray = l;
		for (var u = [], c = [], d = "undefined" != typeof Uint8Array ? Uint8Array : Array, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, m = p.length; h < m; ++h) u[h] = p[h], c[p.charCodeAt(h)] = h;
		c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63
	},
	"../../../../shared/node_modules/buffer/index.js": function(e, t, o) {
		"use strict";
		(function(e) {
			function s() {
				return r.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}

			function n(e, t) {
				if (s() < t) throw new RangeError("Invalid typed array length");
				return r.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = r.prototype) : (null === e && (e = new r(t)), e.length = t), e
			}

			function r(e, t, o) {
				if (!(r.TYPED_ARRAY_SUPPORT || this instanceof r)) return new r(e, t, o);
				if ("number" == typeof e) {
					if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
					return u(this, e)
				}
				return i(this, e, t, o)
			}

			function i(e, t, o, s) {
				if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? p(e, t, o, s) : "string" == typeof t ? c(e, t, o) : h(e, t)
			}

			function a(e) {
				if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
				if (e < 0) throw new RangeError('"size" argument must not be negative')
			}

			function l(e, t, o, s) {
				return a(t), t <= 0 ? n(e, t) : void 0 !== o ? "string" == typeof s ? n(e, t).fill(o, s) : n(e, t).fill(o) : n(e, t)
			}

			function u(e, t) {
				if (a(t), e = n(e, t < 0 ? 0 : 0 | m(t)), !r.TYPED_ARRAY_SUPPORT)
					for (var o = 0; o < t; ++o) e[o] = 0;
				return e
			}

			function c(e, t, o) {
				if ("string" == typeof o && "" !== o || (o = "utf8"), !r.isEncoding(o)) throw new TypeError('"encoding" must be a valid string encoding');
				var s = 0 | b(t, o);
				e = n(e, s);
				var i = e.write(t, o);
				return i !== s && (e = e.slice(0, i)), e
			}

			function d(e, t) {
				var o = t.length < 0 ? 0 : 0 | m(t.length);
				e = n(e, o);
				for (var s = 0; s < o; s += 1) e[s] = 255 & t[s];
				return e
			}

			function p(e, t, o, s) {
				if (t.byteLength, o < 0 || t.byteLength < o) throw new RangeError("'offset' is out of bounds");
				if (t.byteLength < o + (s || 0)) throw new RangeError("'length' is out of bounds");
				return t = void 0 === o && void 0 === s ? new Uint8Array(t) : void 0 === s ? new Uint8Array(t, o) : new Uint8Array(t, o, s), r.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = r.prototype) : e = d(e, t), e
			}

			function h(e, t) {
				if (r.isBuffer(t)) {
					var o = 0 | m(t.length);
					return e = n(e, o), 0 === e.length ? e : (t.copy(e, 0, 0, o), e)
				}
				if (t) {
					if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || K(t.length) ? n(e, 0) : d(e, t);
					if ("Buffer" === t.type && Q(t.data)) return d(e, t.data)
				}
				throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
			}

			function m(e) {
				if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
				return 0 | e
			}

			function f(e) {
				return +e != e && (e = 0), r.alloc(+e)
			}

			function b(e, t) {
				if (r.isBuffer(e)) return e.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
				"string" != typeof e && (e = "" + e);
				var o = e.length;
				if (0 === o) return 0;
				for (var s = !1;;) switch (t) {
					case "ascii":
					case "latin1":
					case "binary":
						return o;
					case "utf8":
					case "utf-8":
					case void 0:
						return q(e).length;
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
						if (s) return q(e).length;
						t = ("" + t).toLowerCase(), s = !0
				}
			}

			function v(e, t, o) {
				var s = !1;
				if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
				if ((void 0 === o || o > this.length) && (o = this.length), o <= 0) return "";
				if (o >>>= 0, t >>>= 0, o <= t) return "";
				for (e || (e = "utf8");;) switch (e) {
					case "hex":
						return A(this, t, o);
					case "utf8":
					case "utf-8":
						return S(this, t, o);
					case "ascii":
						return N(this, t, o);
					case "latin1":
					case "binary":
						return T(this, t, o);
					case "base64":
						return P(this, t, o);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return I(this, t, o);
					default:
						if (s) throw new TypeError("Unknown encoding: " + e);
						e = (e + "").toLowerCase(), s = !0
				}
			}

			function _(e, t, o) {
				var s = e[t];
				e[t] = e[o], e[o] = s
			}

			function g(e, t, o, s, n) {
				if (0 === e.length) return -1;
				if ("string" == typeof o ? (s = o, o = 0) : o > 2147483647 ? o = 2147483647 : o < -2147483648 && (o = -2147483648), o = +o, isNaN(o) && (o = n ? 0 : e.length - 1), o < 0 && (o = e.length + o), o >= e.length) {
					if (n) return -1;
					o = e.length - 1
				} else if (o < 0) {
					if (!n) return -1;
					o = 0
				}
				if ("string" == typeof t && (t = r.from(t, s)), r.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, o, s, n);
				if ("number" == typeof t) return t &= 255, r.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, o) : Uint8Array.prototype.lastIndexOf.call(e, t, o) : y(e, [t], o, s, n);
				throw new TypeError("val must be string, number or Buffer")
			}

			function y(e, t, o, s, n) {
				function r(e, t) {
					return 1 === i ? e[t] : e.readUInt16BE(t * i)
				}
				var i = 1,
					a = e.length,
					l = t.length;
				if (void 0 !== s && ("ucs2" === (s = String(s).toLowerCase()) || "ucs-2" === s || "utf16le" === s || "utf-16le" === s)) {
					if (e.length < 2 || t.length < 2) return -1;
					i = 2, a /= 2, l /= 2, o /= 2
				}
				var u;
				if (n) {
					var c = -1;
					for (u = o; u < a; u++)
						if (r(e, u) === r(t, -1 === c ? 0 : u - c)) {
							if (-1 === c && (c = u), u - c + 1 === l) return c * i
						} else -1 !== c && (u -= u - c), c = -1
				} else
					for (o + l > a && (o = a - l), u = o; u >= 0; u--) {
						for (var d = !0, p = 0; p < l; p++)
							if (r(e, u + p) !== r(t, p)) {
								d = !1;
								break
							}
						if (d) return u
					}
				return -1
			}

			function j(e, t, o, s) {
				o = Number(o) || 0;
				var n = e.length - o;
				s ? (s = Number(s)) > n && (s = n) : s = n;
				var r = t.length;
				if (r % 2 != 0) throw new TypeError("Invalid hex string");
				s > r / 2 && (s = r / 2);
				for (var i = 0; i < s; ++i) {
					var a = parseInt(t.substr(2 * i, 2), 16);
					if (isNaN(a)) return i;
					e[o + i] = a
				}
				return i
			}

			function w(e, t, o, s) {
				return J(q(t, e.length - o), e, o, s)
			}

			function x(e, t, o, s) {
				return J(H(t), e, o, s)
			}

			function C(e, t, o, s) {
				return x(e, t, o, s)
			}

			function k(e, t, o, s) {
				return J(X(t), e, o, s)
			}

			function R(e, t, o, s) {
				return J(Y(t, e.length - o), e, o, s)
			}

			function P(e, t, o) {
				return 0 === t && o === e.length ? W.fromByteArray(e) : W.fromByteArray(e.slice(t, o))
			}

			function S(e, t, o) {
				o = Math.min(e.length, o);
				for (var s = [], n = t; n < o;) {
					var r = e[n],
						i = null,
						a = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
					if (n + a <= o) {
						var l, u, c, d;
						switch (a) {
							case 1:
								r < 128 && (i = r);
								break;
							case 2:
								l = e[n + 1], 128 == (192 & l) && (d = (31 & r) << 6 | 63 & l) > 127 && (i = d);
								break;
							case 3:
								l = e[n + 1], u = e[n + 2], 128 == (192 & l) && 128 == (192 & u) && (d = (15 & r) << 12 | (63 & l) << 6 | 63 & u) > 2047 && (d < 55296 || d > 57343) && (i = d);
								break;
							case 4:
								l = e[n + 1], u = e[n + 2], c = e[n + 3], 128 == (192 & l) && 128 == (192 & u) && 128 == (192 & c) && (d = (15 & r) << 18 | (63 & l) << 12 | (63 & u) << 6 | 63 & c) > 65535 && d < 1114112 && (i = d)
						}
					}
					null === i ? (i = 65533, a = 1) : i > 65535 && (i -= 65536, s.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), s.push(i), n += a
				}
				return E(s)
			}

			function E(e) {
				var t = e.length;
				if (t <= Z) return String.fromCharCode.apply(String, e);
				for (var o = "", s = 0; s < t;) o += String.fromCharCode.apply(String, e.slice(s, s += Z));
				return o
			}

			function N(e, t, o) {
				var s = "";
				o = Math.min(e.length, o);
				for (var n = t; n < o; ++n) s += String.fromCharCode(127 & e[n]);
				return s
			}

			function T(e, t, o) {
				var s = "";
				o = Math.min(e.length, o);
				for (var n = t; n < o; ++n) s += String.fromCharCode(e[n]);
				return s
			}

			function A(e, t, o) {
				var s = e.length;
				(!t || t < 0) && (t = 0), (!o || o < 0 || o > s) && (o = s);
				for (var n = "", r = t; r < o; ++r) n += V(e[r]);
				return n
			}

			function I(e, t, o) {
				for (var s = e.slice(t, o), n = "", r = 0; r < s.length; r += 2) n += String.fromCharCode(s[r] + 256 * s[r + 1]);
				return n
			}

			function $(e, t, o) {
				if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
				if (e + t > o) throw new RangeError("Trying to access beyond buffer length")
			}

			function M(e, t, o, s, n, i) {
				if (!r.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (t > n || t < i) throw new RangeError('"value" argument is out of bounds');
				if (o + s > e.length) throw new RangeError("Index out of range")
			}

			function U(e, t, o, s) {
				t < 0 && (t = 65535 + t + 1);
				for (var n = 0, r = Math.min(e.length - o, 2); n < r; ++n) e[o + n] = (t & 255 << 8 * (s ? n : 1 - n)) >>> 8 * (s ? n : 1 - n)
			}

			function L(e, t, o, s) {
				t < 0 && (t = 4294967295 + t + 1);
				for (var n = 0, r = Math.min(e.length - o, 4); n < r; ++n) e[o + n] = t >>> 8 * (s ? n : 3 - n) & 255
			}

			function O(e, t, o, s, n, r) {
				if (o + s > e.length) throw new RangeError("Index out of range");
				if (o < 0) throw new RangeError("Index out of range")
			}

			function B(e, t, o, s, n) {
				return n || O(e, t, o, 4, 3.4028234663852886e38, -3.4028234663852886e38), G.write(e, t, o, s, 23, 4), o + 4
			}

			function F(e, t, o, s, n) {
				return n || O(e, t, o, 8, 1.7976931348623157e308, -1.7976931348623157e308), G.write(e, t, o, s, 52, 8), o + 8
			}

			function D(e) {
				if (e = z(e).replace(ee, ""), e.length < 2) return "";
				for (; e.length % 4 != 0;) e += "=";
				return e
			}

			function z(e) {
				return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
			}

			function V(e) {
				return e < 16 ? "0" + e.toString(16) : e.toString(16)
			}

			function q(e, t) {
				t = t || 1 / 0;
				for (var o, s = e.length, n = null, r = [], i = 0; i < s; ++i) {
					if ((o = e.charCodeAt(i)) > 55295 && o < 57344) {
						if (!n) {
							if (o > 56319) {
								(t -= 3) > -1 && r.push(239, 191, 189);
								continue
							}
							if (i + 1 === s) {
								(t -= 3) > -1 && r.push(239, 191, 189);
								continue
							}
							n = o;
							continue
						}
						if (o < 56320) {
							(t -= 3) > -1 && r.push(239, 191, 189), n = o;
							continue
						}
						o = 65536 + (n - 55296 << 10 | o - 56320)
					} else n && (t -= 3) > -1 && r.push(239, 191, 189);
					if (n = null, o < 128) {
						if ((t -= 1) < 0) break;
						r.push(o)
					} else if (o < 2048) {
						if ((t -= 2) < 0) break;
						r.push(o >> 6 | 192, 63 & o | 128)
					} else if (o < 65536) {
						if ((t -= 3) < 0) break;
						r.push(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128)
					} else {
						if (!(o < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						r.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
					}
				}
				return r
			}

			function H(e) {
				for (var t = [], o = 0; o < e.length; ++o) t.push(255 & e.charCodeAt(o));
				return t
			}

			function Y(e, t) {
				for (var o, s, n, r = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) o = e.charCodeAt(i), s = o >> 8, n = o % 256, r.push(n), r.push(s);
				return r
			}

			function X(e) {
				return W.toByteArray(D(e))
			}

			function J(e, t, o, s) {
				for (var n = 0; n < s && !(n + o >= t.length || n >= e.length); ++n) t[n + o] = e[n];
				return n
			}

			function K(e) {
				return e !== e
			}
			var W = o("../../../../shared/node_modules/base64-js/index.js"),
				G = o("../../../../shared/node_modules/ieee754/index.js"),
				Q = o("../../../../shared/node_modules/isarray/index.js");
			t.Buffer = r, t.SlowBuffer = f, t.INSPECT_MAX_BYTES = 50, r.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
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
			}(), t.kMaxLength = s(), r.poolSize = 8192, r._augment = function(e) {
				return e.__proto__ = r.prototype, e
			}, r.from = function(e, t, o) {
				return i(null, e, t, o)
			}, r.TYPED_ARRAY_SUPPORT && (r.prototype.__proto__ = Uint8Array.prototype, r.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && r[Symbol.species] === r && Object.defineProperty(r, Symbol.species, {
				value: null,
				configurable: !0
			})), r.alloc = function(e, t, o) {
				return l(null, e, t, o)
			}, r.allocUnsafe = function(e) {
				return u(null, e)
			}, r.allocUnsafeSlow = function(e) {
				return u(null, e)
			}, r.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, r.compare = function(e, t) {
				if (!r.isBuffer(e) || !r.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
				if (e === t) return 0;
				for (var o = e.length, s = t.length, n = 0, i = Math.min(o, s); n < i; ++n)
					if (e[n] !== t[n]) {
						o = e[n], s = t[n];
						break
					}
				return o < s ? -1 : s < o ? 1 : 0
			}, r.isEncoding = function(e) {
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
			}, r.concat = function(e, t) {
				if (!Q(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return r.alloc(0);
				var o;
				if (void 0 === t)
					for (t = 0, o = 0; o < e.length; ++o) t += e[o].length;
				var s = r.allocUnsafe(t),
					n = 0;
				for (o = 0; o < e.length; ++o) {
					var i = e[o];
					if (!r.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
					i.copy(s, n), n += i.length
				}
				return s
			}, r.byteLength = b, r.prototype._isBuffer = !0, r.prototype.swap16 = function() {
				var e = this.length;
				if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var t = 0; t < e; t += 2) _(this, t, t + 1);
				return this
			}, r.prototype.swap32 = function() {
				var e = this.length;
				if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var t = 0; t < e; t += 4) _(this, t, t + 3), _(this, t + 1, t + 2);
				return this
			}, r.prototype.swap64 = function() {
				var e = this.length;
				if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var t = 0; t < e; t += 8) _(this, t, t + 7), _(this, t + 1, t + 6), _(this, t + 2, t + 5), _(this, t + 3, t + 4);
				return this
			}, r.prototype.toString = function() {
				var e = 0 | this.length;
				return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : v.apply(this, arguments)
			}, r.prototype.equals = function(e) {
				if (!r.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				return this === e || 0 === r.compare(this, e)
			}, r.prototype.inspect = function() {
				var e = "",
					o = t.INSPECT_MAX_BYTES;
				return this.length > 0 && (e = this.toString("hex", 0, o).match(/.{2}/g).join(" "), this.length > o && (e += " ... ")), "<Buffer " + e + ">"
			}, r.prototype.compare = function(e, t, o, s, n) {
				if (!r.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				if (void 0 === t && (t = 0), void 0 === o && (o = e ? e.length : 0), void 0 === s && (s = 0), void 0 === n && (n = this.length), t < 0 || o > e.length || s < 0 || n > this.length) throw new RangeError("out of range index");
				if (s >= n && t >= o) return 0;
				if (s >= n) return -1;
				if (t >= o) return 1;
				if (t >>>= 0, o >>>= 0, s >>>= 0, n >>>= 0, this === e) return 0;
				for (var i = n - s, a = o - t, l = Math.min(i, a), u = this.slice(s, n), c = e.slice(t, o), d = 0; d < l; ++d)
					if (u[d] !== c[d]) {
						i = u[d], a = c[d];
						break
					}
				return i < a ? -1 : a < i ? 1 : 0
			}, r.prototype.includes = function(e, t, o) {
				return -1 !== this.indexOf(e, t, o)
			}, r.prototype.indexOf = function(e, t, o) {
				return g(this, e, t, o, !0)
			}, r.prototype.lastIndexOf = function(e, t, o) {
				return g(this, e, t, o, !1)
			}, r.prototype.write = function(e, t, o, s) {
				if (void 0 === t) s = "utf8", o = this.length, t = 0;
				else if (void 0 === o && "string" == typeof t) s = t, o = this.length, t = 0;
				else {
					if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					t |= 0, isFinite(o) ? (o |= 0, void 0 === s && (s = "utf8")) : (s = o, o = void 0)
				}
				var n = this.length - t;
				if ((void 0 === o || o > n) && (o = n), e.length > 0 && (o < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				s || (s = "utf8");
				for (var r = !1;;) switch (s) {
					case "hex":
						return j(this, e, t, o);
					case "utf8":
					case "utf-8":
						return w(this, e, t, o);
					case "ascii":
						return x(this, e, t, o);
					case "latin1":
					case "binary":
						return C(this, e, t, o);
					case "base64":
						return k(this, e, t, o);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return R(this, e, t, o);
					default:
						if (r) throw new TypeError("Unknown encoding: " + s);
						s = ("" + s).toLowerCase(), r = !0
				}
			}, r.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};
			var Z = 4096;
			r.prototype.slice = function(e, t) {
				var o = this.length;
				e = ~~e, t = void 0 === t ? o : ~~t, e < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o), t < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o), t < e && (t = e);
				var s;
				if (r.TYPED_ARRAY_SUPPORT) s = this.subarray(e, t), s.__proto__ = r.prototype;
				else {
					var n = t - e;
					s = new r(n, void 0);
					for (var i = 0; i < n; ++i) s[i] = this[i + e]
				}
				return s
			}, r.prototype.readUIntLE = function(e, t, o) {
				e |= 0, t |= 0, o || $(e, t, this.length);
				for (var s = this[e], n = 1, r = 0; ++r < t && (n *= 256);) s += this[e + r] * n;
				return s
			}, r.prototype.readUIntBE = function(e, t, o) {
				e |= 0, t |= 0, o || $(e, t, this.length);
				for (var s = this[e + --t], n = 1; t > 0 && (n *= 256);) s += this[e + --t] * n;
				return s
			}, r.prototype.readUInt8 = function(e, t) {
				return t || $(e, 1, this.length), this[e]
			}, r.prototype.readUInt16LE = function(e, t) {
				return t || $(e, 2, this.length), this[e] | this[e + 1] << 8
			}, r.prototype.readUInt16BE = function(e, t) {
				return t || $(e, 2, this.length), this[e] << 8 | this[e + 1]
			}, r.prototype.readUInt32LE = function(e, t) {
				return t || $(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
			}, r.prototype.readUInt32BE = function(e, t) {
				return t || $(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
			}, r.prototype.readIntLE = function(e, t, o) {
				e |= 0, t |= 0, o || $(e, t, this.length);
				for (var s = this[e], n = 1, r = 0; ++r < t && (n *= 256);) s += this[e + r] * n;
				return n *= 128, s >= n && (s -= Math.pow(2, 8 * t)), s
			}, r.prototype.readIntBE = function(e, t, o) {
				e |= 0, t |= 0, o || $(e, t, this.length);
				for (var s = t, n = 1, r = this[e + --s]; s > 0 && (n *= 256);) r += this[e + --s] * n;
				return n *= 128, r >= n && (r -= Math.pow(2, 8 * t)), r
			}, r.prototype.readInt8 = function(e, t) {
				return t || $(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
			}, r.prototype.readInt16LE = function(e, t) {
				t || $(e, 2, this.length);
				var o = this[e] | this[e + 1] << 8;
				return 32768 & o ? 4294901760 | o : o
			}, r.prototype.readInt16BE = function(e, t) {
				t || $(e, 2, this.length);
				var o = this[e + 1] | this[e] << 8;
				return 32768 & o ? 4294901760 | o : o
			}, r.prototype.readInt32LE = function(e, t) {
				return t || $(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
			}, r.prototype.readInt32BE = function(e, t) {
				return t || $(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
			}, r.prototype.readFloatLE = function(e, t) {
				return t || $(e, 4, this.length), G.read(this, e, !0, 23, 4)
			}, r.prototype.readFloatBE = function(e, t) {
				return t || $(e, 4, this.length), G.read(this, e, !1, 23, 4)
			}, r.prototype.readDoubleLE = function(e, t) {
				return t || $(e, 8, this.length), G.read(this, e, !0, 52, 8)
			}, r.prototype.readDoubleBE = function(e, t) {
				return t || $(e, 8, this.length), G.read(this, e, !1, 52, 8)
			}, r.prototype.writeUIntLE = function(e, t, o, s) {
				if (e = +e, t |= 0, o |= 0, !s) {
					M(this, e, t, o, Math.pow(2, 8 * o) - 1, 0)
				}
				var n = 1,
					r = 0;
				for (this[t] = 255 & e; ++r < o && (n *= 256);) this[t + r] = e / n & 255;
				return t + o
			}, r.prototype.writeUIntBE = function(e, t, o, s) {
				if (e = +e, t |= 0, o |= 0, !s) {
					M(this, e, t, o, Math.pow(2, 8 * o) - 1, 0)
				}
				var n = o - 1,
					r = 1;
				for (this[t + n] = 255 & e; --n >= 0 && (r *= 256);) this[t + n] = e / r & 255;
				return t + o
			}, r.prototype.writeUInt8 = function(e, t, o) {
				return e = +e, t |= 0, o || M(this, e, t, 1, 255, 0), r.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
			}, r.prototype.writeUInt16LE = function(e, t, o) {
				return e = +e, t |= 0, o || M(this, e, t, 2, 65535, 0), r.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2
			}, r.prototype.writeUInt16BE = function(e, t, o) {
				return e = +e, t |= 0, o || M(this, e, t, 2, 65535, 0), r.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2
			}, r.prototype.writeUInt32LE = function(e, t, o) {
				return e = +e, t |= 0, o || M(this, e, t, 4, 4294967295, 0), r.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : L(this, e, t, !0), t + 4
			}, r.prototype.writeUInt32BE = function(e, t, o) {
				return e = +e, t |= 0, o || M(this, e, t, 4, 4294967295, 0), r.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4
			}, r.prototype.writeIntLE = function(e, t, o, s) {
				if (e = +e, t |= 0, !s) {
					var n = Math.pow(2, 8 * o - 1);
					M(this, e, t, o, n - 1, -n)
				}
				var r = 0,
					i = 1,
					a = 0;
				for (this[t] = 255 & e; ++r < o && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + r - 1] && (a = 1), this[t + r] = (e / i >> 0) - a & 255;
				return t + o
			}, r.prototype.writeIntBE = function(e, t, o, s) {
				if (e = +e, t |= 0, !s) {
					var n = Math.pow(2, 8 * o - 1);
					M(this, e, t, o, n - 1, -n)
				}
				var r = o - 1,
					i = 1,
					a = 0;
				for (this[t + r] = 255 & e; --r >= 0 && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + r + 1] && (a = 1), this[t + r] = (e / i >> 0) - a & 255;
				return t + o
			}, r.prototype.writeInt8 = function(e, t, o) {
				return e = +e, t |= 0, o || M(this, e, t, 1, 127, -128), r.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
			}, r.prototype.writeInt16LE = function(e, t, o) {
				return e = +e, t |= 0, o || M(this, e, t, 2, 32767, -32768), r.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2
			}, r.prototype.writeInt16BE = function(e, t, o) {
				return e = +e, t |= 0, o || M(this, e, t, 2, 32767, -32768), r.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2
			}, r.prototype.writeInt32LE = function(e, t, o) {
				return e = +e, t |= 0, o || M(this, e, t, 4, 2147483647, -2147483648), r.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : L(this, e, t, !0), t + 4
			}, r.prototype.writeInt32BE = function(e, t, o) {
				return e = +e, t |= 0, o || M(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), r.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4
			}, r.prototype.writeFloatLE = function(e, t, o) {
				return B(this, e, t, !0, o)
			}, r.prototype.writeFloatBE = function(e, t, o) {
				return B(this, e, t, !1, o)
			}, r.prototype.writeDoubleLE = function(e, t, o) {
				return F(this, e, t, !0, o)
			}, r.prototype.writeDoubleBE = function(e, t, o) {
				return F(this, e, t, !1, o)
			}, r.prototype.copy = function(e, t, o, s) {
				if (o || (o = 0), s || 0 === s || (s = this.length), t >= e.length && (t = e.length), t || (t = 0), s > 0 && s < o && (s = o), s === o) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (o < 0 || o >= this.length) throw new RangeError("sourceStart out of bounds");
				if (s < 0) throw new RangeError("sourceEnd out of bounds");
				s > this.length && (s = this.length), e.length - t < s - o && (s = e.length - t + o);
				var n, i = s - o;
				if (this === e && o < t && t < s)
					for (n = i - 1; n >= 0; --n) e[n + t] = this[n + o];
				else if (i < 1e3 || !r.TYPED_ARRAY_SUPPORT)
					for (n = 0; n < i; ++n) e[n + t] = this[n + o];
				else Uint8Array.prototype.set.call(e, this.subarray(o, o + i), t);
				return i
			}, r.prototype.fill = function(e, t, o, s) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (s = t, t = 0, o = this.length) : "string" == typeof o && (s = o, o = this.length), 1 === e.length) {
						var n = e.charCodeAt(0);
						n < 256 && (e = n)
					}
					if (void 0 !== s && "string" != typeof s) throw new TypeError("encoding must be a string");
					if ("string" == typeof s && !r.isEncoding(s)) throw new TypeError("Unknown encoding: " + s)
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < o) throw new RangeError("Out of range index");
				if (o <= t) return this;
				t >>>= 0, o = void 0 === o ? this.length : o >>> 0, e || (e = 0);
				var i;
				if ("number" == typeof e)
					for (i = t; i < o; ++i) this[i] = e;
				else {
					var a = r.isBuffer(e) ? e : q(new r(e, s).toString()),
						l = a.length;
					for (i = 0; i < o - t; ++i) this[i + t] = a[i % l]
				}
				return this
			};
			var ee = /[^+\/0-9A-Za-z-_]/g
		}).call(t, o("../../../../shared/node_modules/webpack/buildin/global.js"))
	},
	'../../../../shared/node_modules/css-loader/index.js?minimize!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7b1cff45","scoped":false,"hasInlineConfig":true}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./javascripts/web/components/subscriptions/recommendation/UserItem.vue': function(e, t, o) {
		t = e.exports = o("../../../../shared/node_modules/css-loader/lib/css-base.js")(), t.push([e.i, ".user-follow-button{float:right;padding:8px 0;margin-top:5px;width:100px}", ""])
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
				for (var s = {}, n = 0; n < this.length; n++) {
					var r = this[n][0];
					"number" == typeof r && (s[r] = !0)
				}
				for (n = 0; n < t.length; n++) {
					var i = t[n];
					"number" == typeof i[0] && s[i[0]] || (o && !i[2] ? i[2] = o : o && (i[2] = "(" + i[2] + ") and (" + o + ")"), e.push(i))
				}
			}, e
		}
	},
	"../../../../shared/node_modules/ieee754/index.js": function(e, t) {
		t.read = function(e, t, o, s, n) {
			var r, i, a = 8 * n - s - 1,
				l = (1 << a) - 1,
				u = l >> 1,
				c = -7,
				d = o ? n - 1 : 0,
				p = o ? -1 : 1,
				h = e[t + d];
			for (d += p, r = h & (1 << -c) - 1, h >>= -c, c += a; c > 0; r = 256 * r + e[t + d], d += p, c -= 8);
			for (i = r & (1 << -c) - 1, r >>= -c, c += s; c > 0; i = 256 * i + e[t + d], d += p, c -= 8);
			if (0 === r) r = 1 - u;
			else {
				if (r === l) return i ? NaN : 1 / 0 * (h ? -1 : 1);
				i += Math.pow(2, s), r -= u
			}
			return (h ? -1 : 1) * i * Math.pow(2, r - s)
		}, t.write = function(e, t, o, s, n, r) {
			var i, a, l, u = 8 * r - n - 1,
				c = (1 << u) - 1,
				d = c >> 1,
				p = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				h = s ? 0 : r - 1,
				m = s ? 1 : -1,
				f = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
			for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, i = c) : (i = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -i)) < 1 && (i--, l *= 2), t += i + d >= 1 ? p / l : p * Math.pow(2, 1 - d), t * l >= 2 && (i++, l /= 2), i + d >= c ? (a = 0, i = c) : i + d >= 1 ? (a = (t * l - 1) * Math.pow(2, n), i += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, n), i = 0)); n >= 8; e[o + h] = 255 & a, h += m, a /= 256, n -= 8);
			for (i = i << n | a, u += n; u > 0; e[o + h] = 255 & i, h += m, i /= 256, u -= 8);
			e[o + h - m] |= 128 * f
		}
	},
	"../../../../shared/node_modules/isarray/index.js": function(e, t) {
		var o = {}.toString;
		e.exports = Array.isArray || function(e) {
			return "[object Array]" == o.call(e)
		}
	},
	"../../../../shared/node_modules/process/browser.js": function(e, t) {
		function o() {
			throw new Error("setTimeout has not been defined")
		}

		function s() {
			throw new Error("clearTimeout has not been defined")
		}

		function n(e) {
			if (c === setTimeout) return setTimeout(e, 0);
			if ((c === o || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
			try {
				return c(e, 0)
			} catch (t) {
				try {
					return c.call(null, e, 0)
				} catch (t) {
					return c.call(this, e, 0)
				}
			}
		}

		function r(e) {
			if (d === clearTimeout) return clearTimeout(e);
			if ((d === s || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
			try {
				return d(e)
			} catch (t) {
				try {
					return d.call(null, e)
				} catch (t) {
					return d.call(this, e)
				}
			}
		}

		function i() {
			f && h && (f = !1, h.length ? m = h.concat(m) : b = -1, m.length && a())
		}

		function a() {
			if (!f) {
				var e = n(i);
				f = !0;
				for (var t = m.length; t;) {
					for (h = m, m = []; ++b < t;) h && h[b].run();
					b = -1, t = m.length
				}
				h = null, f = !1, r(e)
			}
		}

		function l(e, t) {
			this.fun = e, this.array = t
		}

		function u() {}
		var c, d, p = e.exports = {};
		! function() {
			try {
				c = "function" == typeof setTimeout ? setTimeout : o
			} catch (e) {
				c = o
			}
			try {
				d = "function" == typeof clearTimeout ? clearTimeout : s
			} catch (e) {
				d = s
			}
		}();
		var h, m = [],
			f = !1,
			b = -1;
		p.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
			m.push(new l(e, t)), 1 !== m.length || f || n(a)
		}, l.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.prependListener = u, p.prependOnceListener = u, p.listeners = function(e) {
			return []
		}, p.binding = function(e) {
			throw new Error("process.binding is not supported")
		}, p.cwd = function() {
			return "/"
		}, p.chdir = function(e) {
			throw new Error("process.chdir is not supported")
		}, p.umask = function() {
			return 0
		}
	},
	"../../../../shared/node_modules/vue-loader/lib/component-normalizer.js": function(e, t) {
		e.exports = function(e, t, o, s, n) {
			var r, i = e = e || {},
				a = typeof e.default;
			"object" !== a && "function" !== a || (r = e, i = e.default);
			var l = "function" == typeof i ? i.options : i;
			t && (l.render = t.render, l.staticRenderFns = t.staticRenderFns), s && (l._scopeId = s);
			var u;
			if (n ? (u = function(e) {
					e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(n)
				}, l._ssrRegister = u) : o && (u = o), u) {
				var c = l.functional,
					d = c ? l.render : l.beforeCreate;
				c ? l.render = function(e, t) {
					return u.call(t), d(e, t)
				} : l.beforeCreate = d ? [].concat(d, u) : [u]
			}
			return {
				esModule: r,
				exports: i,
				options: l
			}
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-018daa6c","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/SidebarUserPlaceholder.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(0)
			},
			staticRenderFns: [function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "subscription-users-placeholder"
				}, [o("div", {
					staticClass: "avatar"
				}), e._v(" "), o("div", {
					staticClass: "text"
				})])
			}]
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-05993ee2","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/timeline/ListView.vue': function(e, t, o) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					s = e._self._c || t;
				return s("div", [e.showPlaceholder ? [s("time-line-placeholder")] : [s("ul", {
					staticClass: "note-list"
				}, [e._l(e.feeds, function(e) {
					return s(e.type, {
						key: e.id,
						tag: "component",
						attrs: {
							feed: e
						}
					})
				}), e._v(" "), e.isLoadingFeeds ? s("time-line-placeholder") : e._e(), e._v(" "), "true" !== e.hasMoreFeeds || e.isLoadingFeeds ? e._e() : s("a", {
					staticClass: "load-more",
					on: {
						click: function(t) {
							e.fetchActivities({
								max_id: e.oldestFeedId
							})
						}
					}
				}, [e._v(e._s(e.$t("common:loadmore")))])], 2)], e._v(" "), e.isLoadingFeeds || 0 !== e.feeds.length ? e._e() : [s("div", {
					staticClass: "find-nothing"
				}, [s("img", {
					attrs: {
						src: o("./images/web/icon_nocontent.png")
					}
				}), e._v(" "), s("div", [e._v(e._s(e.$t("subscriptions:no_content")))])])]], 2)
			},
			staticRenderFns: []
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
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-09d15820","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/ContributeNoteItem.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("li", ["included" === e.note.state ? o("div", [o("div", {
					staticClass: "note-name has-add"
				}, [e._v(e._s(e.note.title))]), e._v(" "), o("span", {
					staticClass: "status has-add"
				}, [e._v(e._s(e.t(".state.included")))]), e._v(" "), o("a", {
					staticClass: "action-btn remove",
					on: {
						click: function(t) {
							e.withdraw(e.note.id)
						}
					}
				}, [e._v(e._s(e.t(".action.remove")))])]) : "not_included" === e.note.state ? o("div", [o("div", {
					staticClass: "note-name"
				}, [e._v(e._s(e.note.title))]), e._v(" "), e.isCollectionEditor ? o("a", {
					staticClass: "action-btn push",
					on: {
						click: function(t) {
							e.submit(e.note.id)
						}
					}
				}, [e._v(e._s(e.t(".action.add")))]) : o("a", {
					staticClass: "action-btn push",
					on: {
						click: function(t) {
							e.submit(e.note.id)
						}
					}
				}, [e._v(e._s(e.t(".action.submit")))])]) : "pending" === e.note.state ? o("div", [o("div", {
					staticClass: "note-name waiting"
				}, [e._v(e._s(e.note.title))]), e._v(" "), o("span", {
					staticClass: "status waiting"
				}, [e._v(e._s(e.t(".state.pending")))]), e._v(" "), o("a", {
					staticClass: "action-btn revoke",
					on: {
						click: function(t) {
							e.withdraw(e.note.id)
						}
					}
				}, [e._v(e._s(e.t(".action.withdraw")))])]) : "declined" === e.note.state ? o("div", [o("div", {
					staticClass: "note-name reject"
				}, [e._v(e._s(e.note.title))]), e._v(" "), o("span", {
					staticClass: "status reject"
				}, [e._v(e._s(e.t(".state.declined")))]), e._v(" "), e.isCollectionEditor ? o("a", {
					staticClass: "action-btn repush",
					on: {
						click: function(t) {
							e.submit(e.note.id)
						}
					}
				}, [e._v(e._s(e.t(".action.add")))]) : o("a", {
					staticClass: "action-btn repush",
					on: {
						click: function(t) {
							e.submit(e.note.id)
						}
					}
				}, [e._v(e._s(e.t(".action.resubmit")))])]) : "withdrawed" === e.note.state ? o("div", [o("div", {
					staticClass: "note-name reject"
				}, [e._v(e._s(e.note.title))]), e._v(" "), o("span", {
					staticClass: "status reject"
				}, [e._v(e._s(e.t(".state.withdrawed")))]), e._v(" "), e.isCollectionEditor ? o("a", {
					staticClass: "action-btn push",
					on: {
						click: function(t) {
							e.submit(e.note.id)
						}
					}
				}, [e._v(e._s(e.t(".action.add")))]) : o("a", {
					staticClass: "action-btn push",
					on: {
						click: function(t) {
							e.submit(e.note.id)
						}
					}
				}, [e._v(e._s(e.t(".action.submit")))])]) : e._e()])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0a3ff190","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/NoteItemPlaceholder.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(1)
			},
			staticRenderFns: [function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "content"
				}, [o("div", {
					staticClass: "author"
				}, [o("div", {
					staticClass: "avatar"
				}), e._v(" "), o("div", {
					staticClass: "name"
				})]), o("div", {
					staticClass: "title"
				}), o("div", {
					staticClass: "sub-title"
				}), e._v(" "), o("div", {
					staticClass: "text"
				}), o("div", {
					staticClass: "text animation-delay"
				}), e._v(" "), o("div", {
					staticClass: "text short-text"
				}), o("div", {
					staticClass: "meta"
				}, [o("div", {
					staticClass: "tag"
				}), o("i", {
					staticClass: "iconfont ic-list-read"
				}), o("div", {
					staticClass: "read"
				}), e._v(" "), o("i", {
					staticClass: "iconfont ic-list-comments"
				}), o("div", {
					staticClass: "small"
				}), e._v(" "), o("i", {
					staticClass: "iconfont ic-list-like"
				}), o("div", {
					staticClass: "small"
				})])])
			}, function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "notes-placeholder",
					class: e.extraClasses
				}, [o("div", {
					staticClass: "img"
				}), e._v(" "), e._m(0)])
			}]
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0ac87940","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/UserDetailView.vue': function(e, t, o) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					s = e._self._c || t;
				return s("div", [s("div", {
					staticClass: "main-top"
				}, [s("a", {
					staticClass: "avatar",
					attrs: {
						href: e.Routes.show_user_path(e.user.slug),
						target: "_blank"
					}
				}, [s("img", {
					attrs: {
						src: e.resizeImage(e.user.avatar_source, {
							width: 160
						})
					}
				})]), e._v(" "), s("a", {
					staticClass: "btn btn-hollow",
					attrs: {
						href: e.Routes.show_user_path(e.user.slug),
						target: "_blank"
					}
				}, [e._v("\n      " + e._s(e.$t("subscriptions:HomepageText.user"))), s("i", {
					staticClass: "iconfont ic-link"
				})]), e._v(" "), s("a", {
					staticClass: "btn btn-hollow",
					attrs: {
						href: e.Routes.notifications_path({
							anchor: "/chats/new?mail_to=" + e.user.id
						}),
						target: "_blank"
					}
				}, [e._v(e._s(e.$t("subscriptions:userDetailView.chat")))]), e._v(" "), s("div", {
					staticClass: "title"
				}, [s("a", {
					staticClass: "name",
					attrs: {
						href: e.Routes.show_user_path(e.user.slug),
						target: "_blank"
					}
				}, [e._v(e._s(e.user.nickname))]), e._v(" "), e.user.badge ? [s("user-badge", {
					attrs: {
						type: e.user.badge.icon,
						text: e.user.badge.text,
						image: e.user.badge.image
					}
				})] : e._e(), e._v(" "), 1 === e.user.gender ? s("i", {
					staticClass: "iconfont ic-man"
				}) : 2 === e.user.gender ? s("i", {
					staticClass: "iconfont ic-woman"
				}) : e._e()], 2), e._v(" "), s("div", {
					staticClass: "info",
					domProps: {
						innerHTML: e._s(e.userMetaInfo)
					}
				})]), e._v(" "), s("ul", {
					staticClass: "trigger-menu"
				}, [s("li", {
					class: {
						active: "shared_at" === e.orderBy
					}
				}, [s("a", {
					on: {
						click: function(t) {
							e.orderBy = "shared_at"
						}
					}
				}, [s("i", {
					staticClass: "iconfont ic-articles"
				}), e._v(e._s(e.$t("subscriptions:orderBy.sharedAt")))])]), e._v(" "), s("li", {
					class: {
						active: "commented_at" === e.orderBy
					}
				}, [s("a", {
					on: {
						click: function(t) {
							e.orderBy = "commented_at"
						}
					}
				}, [s("i", {
					staticClass: "iconfont ic-latestcomments"
				}), e._v(e._s(e.$t("subscriptions:orderBy.commentedAt")))])]), e._v(" "), s("li", {
					class: {
						active: "top" === e.orderBy
					}
				}, [s("a", {
					on: {
						click: function(t) {
							e.orderBy = "top"
						}
					}
				}, [s("i", {
					staticClass: "iconfont ic-hot"
				}), e._v(e._s(e.$t("subscriptions:orderBy.top")))])])]), e._v(" "), e.isLoadingNotes || 0 !== e.notes.length ? [s("ul", {
					staticClass: "note-list"
				}, e._l(e.notes, function(e) {
					return s("note-item", {
						key: e.id,
						attrs: {
							note: e
						}
					})
				})), e._v(" "), s("note-item-placeholder", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isLoadingNotes,
						expression: "isLoadingNotes"
					}]
				}), e._v(" "), s("a", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.totalPages > e.page && !e.isLoadingNotes,
						expression: "totalPages > page && !isLoadingNotes"
					}],
					staticClass: "load-more",
					on: {
						click: e.fetchNotes
					}
				}, [e._v(e._s(e.$t("common:loadmore")))])] : [s("div", {
					staticClass: "find-nothing"
				}, [s("img", {
					attrs: {
						src: o("./images/web/icon_nocontent.png")
					}
				}), e._v(" "), s("div", [e._v(e._s(e.$t("subscriptions:no_content")))])])]], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0c0b4493","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/NoteItem.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", [o("li", {
					class: {
						"have-img": e.hasCoverImage
					}
				}, [e.note.cover_img ? o("a", {
					staticClass: "wrap-img",
					attrs: {
						href: e.Routes.show_note_path(e.note.slug),
						target: "_blank"
					}
				}, [o("img", {
					attrs: {
						src: e.resizeImage(e.note.cover_img, {
							width: 300,
							height: 240
						})
					}
				})]) : e._e(), e._v(" "), o("div", {
					staticClass: "content"
				}, [o("div", {
					staticClass: "author"
				}, [o("a", {
					staticClass: "avatar",
					attrs: {
						href: e.Routes.show_user_path(e.note.author.slug),
						target: "_blank"
					}
				}, [o("img", {
					attrs: {
						src: e.resizeImage(e.note.author.avatar, {
							width: 64
						})
					}
				})]), e._v(" "), o("div", {
					staticClass: "info"
				}, [o("a", {
					staticClass: "nickname",
					attrs: {
						href: e.Routes.show_user_path(e.note.author.slug),
						target: "_blank"
					}
				}, [e._v(e._s(e.note.author.nickname))]), e._v(" "), o("span", {
					staticClass: "time"
				}, [e._v(e._s(e.formatedShareTime))])])]), e._v(" "), o("a", {
					staticClass: "title",
					attrs: {
						href: e.Routes.show_note_path(e.note.slug),
						target: "_blank"
					}
				}, [e._v(e._s(e.note.title))]), e._v(" "), o("p", {
					staticClass: "abstract"
				}, [e._v(e._s(e.note.public_abbr))]), e._v(" "), o("div", {
					staticClass: "meta"
				}, [o("a", {
					attrs: {
						href: e.Routes.show_note_path(e.note.slug),
						target: "_blank"
					}
				}, [o("i", {
					staticClass: "iconfont ic-list-read"
				}), e._v(" " + e._s(e.note.views_count))]), e._v(" "), e.note.commentable ? o("a", {
					attrs: {
						href: e.Routes.show_note_path(e.note.slug, {
							anchor: "comments"
						}),
						target: "_blank"
					}
				}, [o("i", {
					staticClass: "iconfont ic-list-comments"
				}), e._v(" " + e._s(e.note.comments_count))]) : e._e(), e._v(" "), o("span", [o("i", {
					staticClass: "iconfont ic-list-like"
				}), e._v(" " + e._s(e.note.likes_count))]), e._v(" "), e.note.rewards_count > 0 ? o("span", [o("i", {
					staticClass: "iconfont ic-list-money"
				}), e._v(" " + e._s(e.note.rewards_count))]) : e._e()])])])])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0f07695e","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendAllPlaceholder.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(1)
			},
			staticRenderFns: [function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "subscription-placeholder"
				}, [o("ul", {
					staticClass: "trigger-menu"
				}, [o("li", {
					staticClass: "no-icon"
				}, [o("div", {
					staticClass: "title"
				})]), e._v(" "), o("li", [o("i", {
					staticClass: "iconfont ic-user"
				}), o("div", {
					staticClass: "title"
				})]), e._v(" "), o("li", [o("i", {
					staticClass: "iconfont ic-search-collection"
				}), o("div", {
					staticClass: "title"
				})])])])
			}, function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", [e._m(0), e._v(" "), o("recommend-user-placeholder"), e._v(" "), o("recommend-collection-placeholder")], 1)
			}]
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-244a1c08","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/NotebookPlaceholder.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(1)
			},
			staticRenderFns: [function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "subscription-placeholder"
				}, [o("div", {
					staticClass: "avatar collection"
				}), e._v(" "), o("div", {
					staticClass: "main-top"
				}, [o("div", {
					staticClass: "btn"
				}), e._v(" "), o("div", {
					staticClass: "title"
				}), e._v(" "), o("div", {
					staticClass: "info"
				})]), e._v(" "), o("ul", {
					staticClass: "trigger-menu"
				}, [o("li", [o("i", {
					staticClass: "iconfont ic-articles"
				}), o("div", {
					staticClass: "title"
				})]), e._v(" "), o("li", [o("i", {
					staticClass: "iconfont ic-latestcomments"
				}), o("div", {
					staticClass: "title"
				})]), e._v(" "), o("li", [o("i", {
					staticClass: "iconfont ic-catalog"
				}), o("div", {
					staticClass: "title"
				})])])])
			}, function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", [e._m(0), e._v(" "), o("note-item-placeholder")], 1)
			}]
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-24b6e018","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/UserPlaceholder.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(1)
			},
			staticRenderFns: [function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "subscription-placeholder"
				}, [o("div", {
					staticClass: "avatar"
				}), e._v(" "), o("div", {
					staticClass: "main-top"
				}, [o("div", {
					staticClass: "btn"
				}), e._v(" "), o("div", {
					staticClass: "btn short"
				}), e._v(" "), o("div", {
					staticClass: "title"
				}), e._v(" "), o("div", {
					staticClass: "info"
				})]), e._v(" "), o("ul", {
					staticClass: "trigger-menu"
				}, [o("li", [o("i", {
					staticClass: "iconfont ic-articles"
				}), o("div", {
					staticClass: "title"
				})]), e._v(" "), o("li", [o("i", {
					staticClass: "iconfont ic-latestcomments"
				}), o("div", {
					staticClass: "title"
				})]), e._v(" "), o("li", [o("i", {
					staticClass: "iconfont ic-hot"
				}), o("div", {
					staticClass: "title"
				})])])])
			}, function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", [e._m(0), e._v(" "), o("note-item-placeholder")], 1)
			}]
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2ad830ac","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/recommendation/ListView.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", [e.showPlaceholder ? [o("recommend-all-placeholder")] : [o("ul", {
					staticClass: "trigger-menu"
				}, [o("li", {
					class: {
						active: "all" === e.recommendType
					}
				}, [o("a", {
					on: {
						click: function(t) {
							t.preventDefault(), e.recommendType = "all"
						}
					}
				}, [e._v(e._s(e.t("recommendAll")))])]), e._v(" "), o("li", {
					class: {
						active: "user" === e.recommendType
					}
				}, [o("a", {
					on: {
						click: function(t) {
							t.preventDefault(), e.recommendType = "user"
						}
					}
				}, [o("i", {
					staticClass: "iconfont ic-user"
				}), e._v(e._s(e.t("recommendUser")))])]), e._v(" "), o("li", {
					class: {
						active: "collection" === e.recommendType
					}
				}, [o("a", {
					on: {
						click: function(t) {
							t.preventDefault(), e.recommendType = "collection"
						}
					}
				}, [o("i", {
					staticClass: "iconfont ic-search-collection"
				}), e._v(e._s(e.t("recommendCollection")))])])]), e._v(" "), o("ul", {
					staticClass: "add-follow-list"
				}, e._l(e.recommendations, function(t) {
					return o(e.componentName(t.subscription.source_type), {
						key: t.subscription.id,
						tag: "component",
						attrs: {
							recommendation: t,
							"show-recommend-tag": "all" === e.recommendType && !e.hasFollowingUsers,
							"recommend-type": e.recommendType
						}
					})
				})), e._v(" "), e.isLoading ? ["all" === e.recommendType ? [o("recommend-user-placeholder"), e._v(" "), o("recommend-collection-placeholder")] : e._e(), e._v(" "), "user" === e.recommendType ? [o("recommend-user-placeholder")] : e._e(), e._v(" "), "collection" === e.recommendType ? [o("recommend-collection-placeholder")] : e._e()] : e._e(), e._v(" "), o("a", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.hasMoreRecommends && !e.isLoading,
						expression: "hasMoreRecommends && !isLoading"
					}],
					staticClass: "load-more",
					on: {
						click: e.fetchRecommendations
					}
				}, [e._v(e._s(e.$t("common:loadmore")))])]], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2deca7c2","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/ContributeModal.vue': function(e, t) {
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
				}, [e._v("\n      " + e._s(e.isCollectionEditor ? e.t(".addNoteTitle") : e.t(".contributeTitle")) + "\n      "), e.notes.length > 0 ? o("a", {
					staticClass: "new-note-btn",
					attrs: {
						href: "/writer#"
					}
				}, [e._v(e._s(e.t(".newNote")))]) : e._e()]), e._v(" "), o("span", {
					staticClass: "notice"
				}, [e._v(e._s(e.t(".contributeNotice")))]), e._v(" "), o("div", [o("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.searchKeyword,
						expression: "searchKeyword"
					}],
					staticClass: "search-input",
					attrs: {
						type: "text",
						placeholder: e.t(".search_placeholder")
					},
					domProps: {
						value: e.searchKeyword
					},
					on: {
						keyup: function(t) {
							if (!("button" in t) && e._k(t.keyCode, "enter", 13)) return null;
							t.preventDefault(), e.searchNotes(t)
						},
						input: function(t) {
							t.target.composing || (e.searchKeyword = t.target.value)
						}
					}
				}), e._v(" "), o("a", {
					staticClass: "search-btn",
					on: {
						click: e.searchNotes
					}
				}, [o("i", {
					staticClass: "iconfont ic-search"
				})])])]), e._v(" "), o("template", {
					slot: "modal-body"
				}, [o("ul", {
					ref: "contributeNoteList",
					attrs: {
						id: "contribute-note-list"
					}
				}, [e.searchedNotes.length > 0 || e.searchNothingFound || e.isSearching ? [e.isSearching ? e._e() : [e._l(e.searchedNotes, function(t) {
					return o("contribute-note-item", {
						key: t.id,
						attrs: {
							note: t,
							"collection-id": e.collectionId,
							"is-collection-editor": e.isCollectionEditor
						},
						on: {
							"update-state": e.updateContributeNoteState
						}
					})
				}), e._v(" "), e.searchNothingFound ? o("div", {
					staticClass: "default"
				}, [e._v(e._s(e.t(".nothingFound")))]) : e._e()]] : [e._l(e.notes, function(t) {
					return o("contribute-note-item", {
						key: t.id,
						attrs: {
							note: t,
							"collection-id": e.collectionId,
							"is-collection-editor": e.isCollectionEditor
						},
						on: {
							"update-state": e.updateContributeNoteState
						}
					})
				}), e._v(" "), e.isLoading || 0 != e.notes.length ? e._e() : o("div", {
					staticClass: "default"
				}, [e._v("你还没有公开发表的文章，"), o("a", {
					attrs: {
						href: "/writer#"
					}
				}, [e._v(e._s(e.t(".createNote")))])])]], 2), e._v(" "), o("contribute-note-item-placeholder", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isLoading && !e.noMore || e.isSearching,
						expression: "(isLoading && ! noMore) || isSearching"
					}]
				})], 1)], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3b516635","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/DetailView.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", [e.showPlaceHolder ? [o(e.placeholderType, {
					tag: "component"
				})] : [o(e.subscription.source_type, {
					tag: "component",
					attrs: {
						"prop-source": e.subscription.source,
						"prop-notes": e.subscription.source.notes,
						"prop-page": e.subscription.source.page,
						"prop-total-pages": e.subscription.source.total_pages
					}
				})]], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3fba7f0c","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendUserPlaceholder.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(1)
			},
			staticRenderFns: [function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "wrap"
				}, [o("div", {
					staticClass: "btn"
				}), e._v(" "), o("div", {
					staticClass: "name"
				}), e._v(" "), o("div", {
					staticClass: "text"
				}), e._v(" "), o("div", {
					staticClass: "text short-text"
				})])
			}, function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "users-placeholder subscription"
				}, [o("div", {
					staticClass: "avatar"
				}), e._v(" "), e._m(0)])
			}]
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-40d813e3","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/ContributeNoteItemPlaceholder.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(0)
			},
			staticRenderFns: [function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "modal-notes-placeholder"
				}, [o("div", {
					staticClass: "text"
				}), e._v(" "), o("div", {
					staticClass: "btn"
				})])
			}]
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-54abd7b3","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/CollectionDetailView.vue': function(e, t, o) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					s = e._self._c || t;
				return s("div", [s("div", {
					staticClass: "main-top"
				}, [s("a", {
					staticClass: "avatar-collection",
					attrs: {
						href: e.Routes.show_collection_path(e.collection.slug),
						target: "_blank"
					}
				}, [s("img", {
					attrs: {
						src: e.resizeImage(e.source.avatar_source, {
							width: 240
						})
					}
				})]), e._v(" "), s("a", {
					staticClass: "btn btn-hollow",
					attrs: {
						href: e.Routes.show_collection_path(e.collection.slug),
						target: "_blank"
					}
				}, [e._v("\n      " + e._s(e.$t("subscriptions:HomepageText.collection"))), s("i", {
					staticClass: "iconfont ic-link"
				})]), e._v(" "), e.isCollectionEditor || e.collection.can_contribute ? s("a", {
					staticClass: "btn btn-hollow",
					on: {
						click: e.openContributeModal
					}
				}, [e._v("\n      " + e._s(e.isCollectionEditor ? e.$t("subscriptions:collectionDetailView.addNote") : e.$t("subscriptions:collectionDetailView.contribute")) + "\n    ")]) : s("div", {
					staticClass: "btn btn-hollow disabled",
					attrs: {
						"data-toggle": "tooltip",
						title: e.$t("subscriptions:collectionDetailView.canNotContribute")
					}
				}, [e._v("\n      " + e._s(e.$t("subscriptions:collectionDetailView.contribute")) + "\n    ")]), e._v(" "), s("div", {
					staticClass: "title"
				}, [s("a", {
					staticClass: "name",
					attrs: {
						href: e.Routes.show_collection_path(e.collection.slug),
						target: "_blank"
					}
				}, [e._v(e._s(e.collection.title))])]), e._v(" "), s("div", {
					staticClass: "info",
					domProps: {
						innerHTML: e._s(e.collectionMetaInfo)
					}
				})]), e._v(" "), s("ul", {
					staticClass: "trigger-menu"
				}, [s("li", {
					class: {
						active: "added_at" === e.orderBy
					}
				}, [s("a", {
					on: {
						click: function(t) {
							e.orderBy = "added_at"
						}
					}
				}, [s("i", {
					staticClass: "iconfont ic-articles"
				}), e._v(e._s(e.$t("subscriptions:orderBy.addedAt")))])]), e._v(" "), s("li", {
					class: {
						active: "commented_at" === e.orderBy
					}
				}, [s("a", {
					on: {
						click: function(t) {
							e.orderBy = "commented_at"
						}
					}
				}, [s("i", {
					staticClass: "iconfont ic-latestcomments"
				}), e._v(e._s(e.$t("subscriptions:orderBy.commentedAt")))])]), e._v(" "), s("li", {
					class: {
						active: "top" === e.orderBy
					}
				}, [s("a", {
					on: {
						click: function(t) {
							e.orderBy = "top"
						}
					}
				}, [s("i", {
					staticClass: "iconfont ic-hot"
				}), e._v(e._s(e.$t("subscriptions:orderBy.top")))])])]), e._v(" "), e.isLoadingNotes || 0 !== e.notes.length ? [s("ul", {
					staticClass: "note-list"
				}, e._l(e.notes, function(e) {
					return s("note-item", {
						key: e.id,
						attrs: {
							note: e
						}
					})
				})), e._v(" "), s("note-item-placeholder", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isLoadingNotes,
						expression: "isLoadingNotes"
					}]
				}), e._v(" "), e.totalPages > e.page && !e.isLoadingNotes ? s("a", {
					staticClass: "load-more",
					on: {
						click: e.fetchNotes
					}
				}, [e._v(e._s(e.$t("common:loadmore")))]) : e._e()] : [s("div", {
					staticClass: "find-nothing"
				}, [s("img", {
					attrs: {
						src: o("./images/web/icon_nocontent.png")
					}
				}), e._v(" "), s("div", [e._v(e._s(e.$t("subscriptions:no_content")))])])], e._v(" "), s("contribute-modal", {
					attrs: {
						show: e.showContributeModal,
						"collection-id": e.collection.id,
						"is-collection-editor": e.isCollectionEditor
					},
					on: {
						close: e.closeContributeModal
					}
				})], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5afabae5","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/CollectionPlaceholder.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(1)
			},
			staticRenderFns: [function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "subscription-placeholder"
				}, [o("div", {
					staticClass: "avatar collection"
				}), e._v(" "), o("div", {
					staticClass: "main-top"
				}, [o("div", {
					staticClass: "btn"
				}), e._v(" "), o("div", {
					staticClass: "btn short"
				}), e._v(" "), o("div", {
					staticClass: "title"
				}), e._v(" "), o("div", {
					staticClass: "info"
				})]), e._v(" "), o("ul", {
					staticClass: "trigger-menu"
				}, [o("li", [o("i", {
					staticClass: "iconfont ic-articles"
				}), o("div", {
					staticClass: "title"
				})]), e._v(" "), o("li", [o("i", {
					staticClass: "iconfont ic-latestcomments"
				}), o("div", {
					staticClass: "title"
				})]), e._v(" "), o("li", [o("i", {
					staticClass: "iconfont ic-hot"
				}), o("div", {
					staticClass: "title"
				})])])])
			}, function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", [e._m(0), e._v(" "), o("note-item-placeholder")], 1)
			}]
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6bc052d9","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendCollectionPlaceholder.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(1)
			},
			staticRenderFns: [function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "wrap"
				}, [o("div", {
					staticClass: "btn"
				}), e._v(" "), o("div", {
					staticClass: "name"
				}), e._v(" "), o("div", {
					staticClass: "text"
				})])
			}, function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("div", {
					staticClass: "collections-placeholder subscription"
				}, [o("div", {
					staticClass: "avatar"
				}), e._v(" "), e._m(0)])
			}]
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-780b7b09","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/timeline/UserShareNoteNote.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("li", {
					class: {
						"have-img": e.hasListImage
					}
				}, [e.hasListImage ? o("a", {
					staticClass: "wrap-img",
					attrs: {
						href: e.Routes.show_note_path(e.note.slug, {
							utm_source: "desktop",
							utm_medium: "timeline"
						}),
						target: "_blank"
					}
				}, [o("img", {
					attrs: {
						src: e.resizeImage(e.note.list_image_url, {
							width: 300,
							height: 240
						})
					}
				})]) : e._e(), e._v(" "), o("div", {
					staticClass: "content"
				}, [o("div", {
					staticClass: "author"
				}, [o("a", {
					staticClass: "avatar",
					attrs: {
						href: e.Routes.show_user_path(e.user.slug),
						target: "_blank"
					}
				}, [o("img", {
					attrs: {
						src: e.resizeImage(e.user.avatar_source, {
							width: 96
						})
					}
				})]), e._v(" "), o("div", {
					staticClass: "info"
				}, [o("a", {
					staticClass: "nickname",
					attrs: {
						href: e.Routes.show_user_path(e.user.slug),
						target: "_blank"
					}
				}, [e._v(e._s(e.user.nickname))]), e._v(" "), e.user.badge ? [o("user-badge", {
					attrs: {
						type: e.user.badge.icon,
						text: e.user.badge.text,
						image: e.user.badge.image
					}
				})] : e._e(), e._v(" "), o("span", [e._v(e._s(e.$t("subscriptions:timelineView.userShareNote")) + " · " + e._s(e.feedCreatedTime))])], 2)]), e._v(" "), o("a", {
					staticClass: "title",
					attrs: {
						href: e.Routes.show_note_path(e.note.slug, {
							utm_source: "desktop",
							utm_medium: "timeline"
						}),
						target: "_blank"
					}
				}, [e._v(e._s(e.note.title))]), e._v(" "), o("p", {
					staticClass: "abstract"
				}, [e._v(e._s(e.note.description))]), e._v(" "), o("div", {
					staticClass: "meta"
				}, [o("a", {
					attrs: {
						href: e.Routes.show_note_path(e.note.slug, {
							utm_source: "desktop",
							utm_medium: "timeline"
						}),
						target: "_blank"
					}
				}, [o("i", {
					staticClass: "iconfont ic-list-read"
				}), e._v(" " + e._s(e.note.views_count))]), e._v(" "), o("a", {
					attrs: {
						href: e.Routes.show_note_path(e.note.slug, {
							anchor: "comments"
						}),
						target: "_blank"
					}
				}, [o("i", {
					staticClass: "iconfont ic-list-comments"
				}), e._v(" " + e._s(e.note.comments_count))]), e._v(" "), o("span", [o("i", {
					staticClass: "iconfont ic-list-like"
				}), e._v(" " + e._s(e.note.likes_count))]), e._v(" "), e.note.rewards_count > 0 ? o("span", [o("i", {
					staticClass: "iconfont ic-list-money"
				}), e._v(" " + e._s(e.note.rewards_count))]) : e._e()])])])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7a0a01f0","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/NotebookDetailView.vue': function(e, t, o) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					s = e._self._c || t;
				return s("div", [s("div", {
					staticClass: "main-top"
				}, [s("a", {
					staticClass: "avatar-collection",
					attrs: {
						href: e.Routes.show_notebook_path(e.notebook.id),
						target: "_blank"
					}
				}, [s("img", {
					attrs: {
						src: o("./images/default_avatar/avatar-notebook-default.png")
					}
				})]), e._v(" "), s("a", {
					staticClass: "btn btn-hollow",
					attrs: {
						href: e.Routes.show_notebook_path(e.notebook.id),
						target: "_blank"
					}
				}, [e._v("\n      " + e._s(e.$t("subscriptions:HomepageText.notebook"))), s("i", {
					staticClass: "iconfont ic-link"
				})]), e._v(" "), s("div", {
					staticClass: "title"
				}, [s("a", {
					staticClass: "name",
					attrs: {
						href: e.Routes.show_notebook_path(e.notebook.id),
						target: "_blank"
					}
				}, [e._v(e._s(e.notebook.name))])]), e._v(" "), s("div", {
					staticClass: "info",
					domProps: {
						innerHTML: e._s(e.notebookMetaInfo)
					}
				})]), e._v(" "), s("ul", {
					staticClass: "trigger-menu"
				}, [s("li", {
					class: {
						active: "added_at" === e.orderBy
					}
				}, [s("a", {
					on: {
						click: function(t) {
							e.orderBy = "added_at"
						}
					}
				}, [s("i", {
					staticClass: "iconfont ic-articles"
				}), e._v(e._s(e.$t("subscriptions:orderBy.publishAt")))])]), e._v(" "), s("li", {
					class: {
						active: "commented_at" === e.orderBy
					}
				}, [s("a", {
					on: {
						click: function(t) {
							e.orderBy = "commented_at"
						}
					}
				}, [s("i", {
					staticClass: "iconfont ic-latestcomments"
				}), e._v(e._s(e.$t("subscriptions:orderBy.commentedAt")))])]), e._v(" "), s("li", {
					class: {
						active: "seq" === e.orderBy
					}
				}, [s("a", {
					on: {
						click: function(t) {
							e.orderBy = "seq"
						}
					}
				}, [s("i", {
					staticClass: "iconfont ic-catalog"
				}), e._v(e._s(e.$t("subscriptions:orderBy.menu")))])])]), e._v(" "), e.isLoadingNotes || 0 !== e.notes.length ? [s("ul", {
					staticClass: "note-list"
				}, e._l(e.notes, function(e) {
					return s("note-item", {
						key: e.id,
						attrs: {
							note: e
						}
					})
				})), e._v(" "), s("note-item-placeholder", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isLoadingNotes,
						expression: "isLoadingNotes"
					}]
				}), e._v(" "), e.totalPages > e.page && !e.isLoadingNotes ? s("a", {
					staticClass: "load-more",
					on: {
						click: e.fetchNotes
					}
				}, [e._v(e._s(e.$t("common:loadmore")))]) : e._e()] : [s("div", {
					staticClass: "find-nothing"
				}, [s("img", {
					attrs: {
						src: o("./images/web/icon_nocontent.png")
					}
				}), e._v(" "), s("div", [e._v(e._s(e.$t("subscriptions:no_content")))])])]], 2)
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7b1cff45","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/recommendation/UserItem.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("li", [o("div", [o("user-follow-button", {
					attrs: {
						following: e.user.followed,
						"user-id": e.user.id
					}
				}), e._v(" "), e.showRecommendTag ? [o("div", {
					staticClass: "tag"
				}, [o("i", {
					staticClass: "iconfont ic-recommend-collection"
				}), e._v(" "), o("span", [e._v(e._s(e.t("jianshuRecommendUser")))])])] : e._e(), e._v(" "), o("a", {
					staticClass: "avatar",
					attrs: {
						href: e.Routes.show_user_path(e.user.slug),
						target: "_blank"
					}
				}, [o("img", {
					attrs: {
						src: e.resizeImage(e.user.avatar_source, {
							width: 144
						})
					}
				})]), e._v(" "), o("div", {
					staticClass: "info"
				}, [o("a", {
					staticClass: "name",
					attrs: {
						href: e.Routes.show_user_path(e.user.slug),
						target: "_blank"
					}
				}, [e._v(e._s(e.user.nickname))]), e._v(" "), e.userIntro ? o("p", [e._v(e._s(e.userIntro))]) : e._e(), e._v(" "), e._l(e.recentNotes, function(t) {
					return o("a", {
						attrs: {
							href: e.Routes.show_note_path(t.slug),
							target: "_blank"
						}
					}, [o("i", {
						staticClass: "iconfont ic-article-s"
					}), o("span", [e._v(e._s(t.title))])])
				}), e._v(" "), "all" === e.recommendType && e.friendsCount > 0 ? o("div", {
					staticClass: "meta"
				}, [e._l(e.friends, function(t, s) {
					return o("a", {
						attrs: {
							href: e.Routes.show_user_path(t.slug),
							target: "_blank"
						}
					}, [e._v("\n          " + e._s(t.nickname) + "\n          "), s != e.friends.length - 1 ? [e._v("\n            、\n          ")] : e._e()], 2)
				}), e._v(" "), e.friendsCount <= 2 ? o("span", [e._v(e._s(e.t("friendsFollowUser")))]) : o("span", [e._v(e._s(e.t("friendsFollowUser", {
					count: e.friendsCount
				})))])], 2) : e._e()], 2)], 2)])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7ffdd8c2","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/TimeLinePlaceholder.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement;
				return (e._self._c || t)("note-item-placeholder", {
					attrs: {
						"extra-classes": e.extraClasses
					}
				})
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
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-c980c050","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/recommendation/CollectionItem.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("li", [o("div", [o("follow-button", {
					attrs: {
						following: e.collection.followed,
						"collection-id": e.collection.id
					}
				}), e._v(" "), e.showRecommendTag ? [o("div", {
					staticClass: "tag"
				}, [o("i", {
					staticClass: "iconfont ic-recommend-collection"
				}), e._v(" "), o("span", [e._v(e._s(e.t("jianshuRecommendCollection")))])])] : e._e(), e._v(" "), o("a", {
					staticClass: "avatar-collection",
					attrs: {
						href: e.Routes.show_collection_path(e.collection.slug),
						target: "_blank"
					}
				}, [o("img", {
					attrs: {
						src: e.resizeImage(e.collection.avatar_url, {
							width: 144
						})
					}
				})]), e._v(" "), o("div", {
					staticClass: "info"
				}, [o("a", {
					staticClass: "name",
					attrs: {
						href: e.Routes.show_collection_path(e.collection.slug),
						target: "_blank"
					}
				}, [e._v(e._s(e.collection.title))]), e._v(" "), o("p", [e._v(e._s(e.collectionContent))]), e._v(" "), o("a", {
					attrs: {
						href: e.Routes.show_collection_path(e.collection.slug),
						target: "_blank"
					}
				}, [o("i", {
					staticClass: "iconfont ic-collection-s"
				}), o("span", [e._v(e._s(e.t("collectionInfo", {
					notesCount: e.collection.public_notes_count,
					likesCount: e.collection.likes_count
				})))])]), e._v(" "), "all" === e.recommendType && e.friendsCount > 0 ? o("div", {
					staticClass: "meta"
				}, [e._l(e.friends, function(t, s) {
					return o("a", {
						attrs: {
							href: e.Routes.show_user_path(t.slug),
							target: "_blank"
						}
					}, [e._v("\n          " + e._s(t.nickname) + "\n          "), s != e.friends.length - 1 ? [e._v("\n            、\n          ")] : e._e()], 2)
				}), e._v(" "), e.friendsCount <= 2 ? o("span", [e._v(e._s(e.t("friendsFollowCollection")))]) : o("span", [e._v(e._s(e.t("moreFriendsFollowCollection", {
					count: e.friendsCount
				})))])], 2) : e._e()])], 2)])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-caeb33dc","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/App.vue': function(e, t, o) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					s = e._self._c || t;
				return s("div", {
					staticClass: "container subscription"
				}, [s("div", {
					staticClass: "row"
				}, [s("div", {
					staticClass: "aside",
					on: {
						scroll: function(t) {
							e.loadMore(t)
						}
					}
				}, [e.hasSubscriptions ? [s("a", {
					staticClass: "change-type",
					attrs: {
						"data-toggle": "dropdown"
					}
				}, [e._v(e._s(e.typeText)), s("i", {
					staticClass: "iconfont ic-filter"
				})]), e._v(" "), s("ul", {
					staticClass: "dropdown-menu arrow-top"
				}, [s("li", [s("a", {
					on: {
						click: function(t) {
							e.currentType = "all"
						}
					}
				}, [e._v(e._s(e.$t("subscriptions:typeText.all")))])]), e._v(" "), s("li", [s("a", {
					on: {
						click: function(t) {
							e.currentType = "user"
						}
					}
				}, [e._v(e._s(e.$t("subscriptions:typeText.user")))])]), e._v(" "), s("li", [s("a", {
					on: {
						click: function(t) {
							e.currentType = "collection"
						}
					}
				}, [e._v(e._s(e.$t("subscriptions:typeText.collection")))])]), e._v(" "), s("li", [s("a", {
					on: {
						click: function(t) {
							e.currentType = "notebook"
						}
					}
				}, [e._v(e._s(e.$t("subscriptions:typeText.notebook")))])]), e._v(" "), s("li", [s("a", {
					on: {
						click: function(t) {
							e.currentType = "onlyPushEnabled"
						}
					}
				}, [e._v(e._s(e.$t("subscriptions:typeText.onlyPushEnabled")))])])]), e._v(" "), e.hasFollowingUsers ? [s("router-link", {
					staticClass: "add-people",
					attrs: {
						to: "/recommendation"
					}
				}, [s("i", {
					staticClass: "iconfont ic-addpeople"
				}), e._v(" "), s("span", [e._v(e._s(e.$t("subscriptions:follow")))])])] : e._e(), e._v(" "), s("ul", {
					ref: "subscriptionList",
					staticClass: "js-subscription-list"
				}, [e.hasFollowingUsers ? [s("router-link", {
					attrs: {
						tag: "li",
						to: "/timeline"
					}
				}, [s("a", {
					staticClass: "wrap"
				}, [s("div", {
					staticClass: "avatar"
				}, [s("img", {
					style: {
						border: "none"
					},
					attrs: {
						src: o("./images/web/jianyouquan.png")
					}
				})]), e._v(" "), s("div", {
					staticClass: "name"
				}, [e._v(e._s(e.$t("subscriptions:timeline")))])])])] : [s("router-link", {
					attrs: {
						tag: "li",
						to: "/recommendation"
					}
				}, [s("a", {
					staticClass: "wrap"
				}, [s("div", {
					staticClass: "avatar"
				}, [s("img", {
					attrs: {
						src: o("./images/web/addfollow.png")
					}
				})]), e._v(" "), s("div", {
					staticClass: "name"
				}, [e._v(e._s(e.$t("subscriptions:follow")))])])])], e._v(" "), e._l(e.subscriptions, function(t) {
					return s("router-link", {
						key: t.id,
						attrs: {
							tag: "li",
							to: e.subscriptionRoutePath(t)
						}
					}, [s("a", {
						staticClass: "wrap"
					}, ["Notebook" === t.source_type ? [s("div", {
						staticClass: "avatar-collection"
					}, [s("img", {
						attrs: {
							src: o("./images/default_avatar/avatar-notebook-default.png")
						}
					})])] : [s("div", {
						class: {
							avatar: "User" === t.source_type, "avatar-collection": "Collection" === t.source_type
						}
					}, [s("img", {
						attrs: {
							src: e.resizeImage(t.avatar_source, {
								width: 120
							})
						}
					})])], e._v(" "), s("div", {
						staticClass: "name"
					}, [e._v(e._s(t.name))]), e._v(" "), t.unread_count > 0 ? s("span", {
						staticClass: "count"
					}, [e._v(e._s(t.unread_count))]) : e._e()], 2)])
				})], 2), e._v(" "), e.showPlaceholder ? s("sidebar-user-placeholder") : e._e(), e._v(" "), e.isLoading ? s("sidebar-user-placeholder") : e._e()] : [s("a", {
					staticClass: "change-type"
				}, [e._v(e._s(e.typeText))]), e._v(" "), s("ul", {
					staticClass: "js-subscription-list"
				}, [s("router-link", {
					attrs: {
						tag: "li",
						to: "/recommendation"
					}
				}, [s("a", {
					staticClass: "wrap"
				}, [s("div", {
					staticClass: "avatar"
				}, [s("img", {
					attrs: {
						src: o("./images/web/addfollow.png")
					}
				})]), e._v(" "), s("div", {
					staticClass: "name"
				}, [e._v(e._s(e.$t("subscriptions:follow")))])])])], 1)]], 2), e._v(" "), s("div", {
					staticClass: "col-xs-16 col-xs-offset-8 main"
				}, [s("router-view")], 1)])])
			},
			staticRenderFns: []
		}
	},
	'../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-ded4af8a","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/timeline/UserLikeSomethingNote.vue': function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o("li", {
					class: {
						"have-img": e.hasListImage
					}
				}, [e.hasListImage ? o("a", {
					staticClass: "wrap-img",
					attrs: {
						href: e.Routes.show_note_path(e.note.slug, {
							utm_source: "desktop",
							utm_medium: "timeline"
						}),
						target: "_blank"
					}
				}, [o("img", {
					attrs: {
						src: e.resizeImage(e.note.list_image_url, {
							width: 300,
							height: 240
						})
					}
				})]) : e._e(), e._v(" "), o("div", {
					staticClass: "content"
				}, [o("div", {
					staticClass: "author"
				}, [o("a", {
					staticClass: "avatar",
					attrs: {
						href: e.Routes.show_user_path(e.user.slug),
						target: "_blank"
					}
				}, [o("img", {
					attrs: {
						src: e.resizeImage(e.user.avatar_source, {
							width: 96
						})
					}
				})]), e._v(" "), o("div", {
					staticClass: "info"
				}, [o("a", {
					staticClass: "nickname",
					attrs: {
						href: e.Routes.show_user_path(e.user.slug),
						target: "_blank"
					}
				}, [e._v(e._s(e.user.nickname))]), e._v(" "), e.user.badge ? [o("user-badge", {
					attrs: {
						type: e.user.badge.icon,
						text: e.user.badge.text,
						image: e.user.badge.image
					}
				})] : e._e(), e._v(" "), o("span", [e._v(e._s(e.$t("subscriptions:timelineView.userLikeNote")) + " · " + e._s(e.feedCreatedTime))])], 2)]), e._v(" "), o("a", {
					staticClass: "title",
					attrs: {
						href: e.Routes.show_note_path(e.note.slug, {
							utm_source: "desktop",
							utm_medium: "timeline"
						}),
						target: "_blank"
					}
				}, [e._v(e._s(e.note.title))]), e._v(" "), o("p", {
					staticClass: "abstract"
				}, [e._v(e._s(e.note.description))]), e._v(" "), o("div", {
					staticClass: "meta"
				}, [o("div", {
					staticClass: "origin-author"
				}, [o("a", {
					attrs: {
						href: e.Routes.show_user_path(e.noteAuthor.slug),
						target: "_blank"
					}
				}, [e._v(e._s(e.noteAuthor.nickname))])]), e._v(" "), o("a", {
					attrs: {
						href: e.Routes.show_note_path(e.note.slug, {
							utm_source: "desktop",
							utm_medium: "timeline"
						}),
						target: "_blank"
					}
				}, [o("i", {
					staticClass: "iconfont ic-list-read"
				}), e._v(" " + e._s(e.note.views_count))]), e._v(" "), o("a", {
					attrs: {
						href: e.Routes.show_note_path(e.note.slug, {
							anchor: "comments"
						}),
						target: "_blank"
					}
				}, [o("i", {
					staticClass: "iconfont ic-list-comments"
				}), e._v(" " + e._s(e.note.comments_count))]), e._v(" "), o("span", [o("i", {
					staticClass: "iconfont ic-list-like"
				}), e._v(" " + e._s(e.note.likes_count))]), e._v(" "), e.note.rewards_count > 0 ? o("span", [o("i", {
					staticClass: "iconfont ic-list-money"
				}), e._v(" " + e._s(e.note.rewards_count))]) : e._e()])])])
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
	"../../../../shared/node_modules/vue-router/dist/vue-router.esm.js": function(e, t, o) {
		"use strict";

		function s(e, t) {}

		function n(e) {
			return Object.prototype.toString.call(e).indexOf("Error") > -1
		}

		function r(e, t) {
			switch (typeof t) {
				case "undefined":
					return;
				case "object":
					return t;
				case "function":
					return t(e);
				case "boolean":
					return t ? e.params : void 0
			}
		}

		function i(e, t, o) {
			void 0 === t && (t = {});
			var s, n = o || a;
			try {
				s = n(e || "")
			} catch (e) {
				s = {}
			}
			for (var r in t) {
				var i = t[r];
				s[r] = Array.isArray(i) ? i.slice() : i
			}
			return s
		}

		function a(e) {
			var t = {};
			return (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
				var o = e.replace(/\+/g, " ").split("="),
					s = Me(o.shift()),
					n = o.length > 0 ? Me(o.join("=")) : null;
				void 0 === t[s] ? t[s] = n : Array.isArray(t[s]) ? t[s].push(n) : t[s] = [t[s], n]
			}), t) : t
		}

		function l(e) {
			var t = e ? Object.keys(e).map(function(t) {
				var o = e[t];
				if (void 0 === o) return "";
				if (null === o) return $e(t);
				if (Array.isArray(o)) {
					var s = [];
					return o.forEach(function(e) {
						void 0 !== e && (null === e ? s.push($e(t)) : s.push($e(t) + "=" + $e(e)))
					}), s.join("&")
				}
				return $e(t) + "=" + $e(o)
			}).filter(function(e) {
				return e.length > 0
			}).join("&") : null;
			return t ? "?" + t : ""
		}

		function u(e, t, o, s) {
			var n = s && s.options.stringifyQuery,
				r = {
					name: t.name || e && e.name,
					meta: e && e.meta || {},
					path: t.path || "/",
					hash: t.hash || "",
					query: t.query || {},
					params: t.params || {},
					fullPath: d(t, n),
					matched: e ? c(e) : []
				};
			return o && (r.redirectedFrom = d(o, n)), Object.freeze(r)
		}

		function c(e) {
			for (var t = []; e;) t.unshift(e), e = e.parent;
			return t
		}

		function d(e, t) {
			var o = e.path,
				s = e.query;
			void 0 === s && (s = {});
			var n = e.hash;
			void 0 === n && (n = "");
			var r = t || l;
			return (o || "/") + r(s) + n
		}

		function p(e, t) {
			return t === Le ? e === t : !!t && (e.path && t.path ? e.path.replace(Ue, "") === t.path.replace(Ue, "") && e.hash === t.hash && h(e.query, t.query) : !(!e.name || !t.name) && (e.name === t.name && e.hash === t.hash && h(e.query, t.query) && h(e.params, t.params)))
		}

		function h(e, t) {
			void 0 === e && (e = {}), void 0 === t && (t = {});
			var o = Object.keys(e),
				s = Object.keys(t);
			return o.length === s.length && o.every(function(o) {
				var s = e[o],
					n = t[o];
				return "object" == typeof s && "object" == typeof n ? h(s, n) : String(s) === String(n)
			})
		}

		function m(e, t) {
			return 0 === e.path.replace(Ue, "/").indexOf(t.path.replace(Ue, "/")) && (!t.hash || e.hash === t.hash) && f(e.query, t.query)
		}

		function f(e, t) {
			for (var o in t)
				if (!(o in e)) return !1;
			return !0
		}

		function b(e) {
			if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button)) {
				if (e.currentTarget && e.currentTarget.getAttribute) {
					if (/\b_blank\b/i.test(e.currentTarget.getAttribute("target"))) return
				}
				return e.preventDefault && e.preventDefault(), !0
			}
		}

		function v(e) {
			if (e)
				for (var t, o = 0; o < e.length; o++) {
					if (t = e[o], "a" === t.tag) return t;
					if (t.children && (t = v(t.children))) return t
				}
		}

		function _(e) {
			if (!_.installed) {
				_.installed = !0, Ee = e;
				var t = function(e) {
						return void 0 !== e
					},
					o = function(e, o) {
						var s = e.$options._parentVnode;
						t(s) && t(s = s.data) && t(s = s.registerRouteInstance) && s(e, o)
					};
				e.mixin({
					beforeCreate: function() {
						t(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, this._router.init(this), e.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, o(this, this)
					},
					destroyed: function() {
						o(this)
					}
				}), Object.defineProperty(e.prototype, "$router", {
					get: function() {
						return this._routerRoot._router
					}
				}), Object.defineProperty(e.prototype, "$route", {
					get: function() {
						return this._routerRoot._route
					}
				}), e.component("router-view", Ne), e.component("router-link", Fe);
				var s = e.config.optionMergeStrategies;
				s.beforeRouteEnter = s.beforeRouteLeave = s.beforeRouteUpdate = s.created
			}
		}

		function g(e, t, o) {
			var s = e.charAt(0);
			if ("/" === s) return e;
			if ("?" === s || "#" === s) return t + e;
			var n = t.split("/");
			o && n[n.length - 1] || n.pop();
			for (var r = e.replace(/^\//, "").split("/"), i = 0; i < r.length; i++) {
				var a = r[i];
				".." === a ? n.pop() : "." !== a && n.push(a)
			}
			return "" !== n[0] && n.unshift(""), n.join("/")
		}

		function y(e) {
			var t = "",
				o = "",
				s = e.indexOf("#");
			s >= 0 && (t = e.slice(s), e = e.slice(0, s));
			var n = e.indexOf("?");
			return n >= 0 && (o = e.slice(n + 1), e = e.slice(0, n)), {
				path: e,
				query: o,
				hash: t
			}
		}

		function j(e) {
			return e.replace(/\/\//g, "/")
		}

		function w(e, t) {
			for (var o, s = [], n = 0, r = 0, i = "", a = t && t.delimiter || "/"; null != (o = Je.exec(e));) {
				var l = o[0],
					u = o[1],
					c = o.index;
				if (i += e.slice(r, c), r = c + l.length, u) i += u[1];
				else {
					var d = e[r],
						p = o[2],
						h = o[3],
						m = o[4],
						f = o[5],
						b = o[6],
						v = o[7];
					i && (s.push(i), i = "");
					var _ = null != p && null != d && d !== p,
						g = "+" === b || "*" === b,
						y = "?" === b || "*" === b,
						j = o[2] || a,
						w = m || f;
					s.push({
						name: h || n++,
						prefix: p || "",
						delimiter: j,
						optional: y,
						repeat: g,
						partial: _,
						asterisk: !!v,
						pattern: w ? S(w) : v ? ".*" : "[^" + P(j) + "]+?"
					})
				}
			}
			return r < e.length && (i += e.substr(r)), i && s.push(i), s
		}

		function x(e, t) {
			return R(w(e, t))
		}

		function C(e) {
			return encodeURI(e).replace(/[\/?#]/g, function(e) {
				return "%" + e.charCodeAt(0).toString(16).toUpperCase()
			})
		}

		function k(e) {
			return encodeURI(e).replace(/[?#]/g, function(e) {
				return "%" + e.charCodeAt(0).toString(16).toUpperCase()
			})
		}

		function R(e) {
			for (var t = new Array(e.length), o = 0; o < e.length; o++) "object" == typeof e[o] && (t[o] = new RegExp("^(?:" + e[o].pattern + ")$"));
			return function(o, s) {
				for (var n = "", r = o || {}, i = s || {}, a = i.pretty ? C : encodeURIComponent, l = 0; l < e.length; l++) {
					var u = e[l];
					if ("string" != typeof u) {
						var c, d = r[u.name];
						if (null == d) {
							if (u.optional) {
								u.partial && (n += u.prefix);
								continue
							}
							throw new TypeError('Expected "' + u.name + '" to be defined')
						}
						if (ze(d)) {
							if (!u.repeat) throw new TypeError('Expected "' + u.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
							if (0 === d.length) {
								if (u.optional) continue;
								throw new TypeError('Expected "' + u.name + '" to not be empty')
							}
							for (var p = 0; p < d.length; p++) {
								if (c = a(d[p]), !t[l].test(c)) throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '", but received `' + JSON.stringify(c) + "`");
								n += (0 === p ? u.prefix : u.delimiter) + c
							}
						} else {
							if (c = u.asterisk ? k(d) : a(d), !t[l].test(c)) throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but received "' + c + '"');
							n += u.prefix + c
						}
					} else n += u
				}
				return n
			}
		}

		function P(e) {
			return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
		}

		function S(e) {
			return e.replace(/([=!:$\/()])/g, "\\$1")
		}

		function E(e, t) {
			return e.keys = t, e
		}

		function N(e) {
			return e.sensitive ? "" : "i"
		}

		function T(e, t) {
			var o = e.source.match(/\((?!\?)/g);
			if (o)
				for (var s = 0; s < o.length; s++) t.push({
					name: s,
					prefix: null,
					delimiter: null,
					optional: !1,
					repeat: !1,
					partial: !1,
					asterisk: !1,
					pattern: null
				});
			return E(e, t)
		}

		function A(e, t, o) {
			for (var s = [], n = 0; n < e.length; n++) s.push(M(e[n], t, o).source);
			return E(new RegExp("(?:" + s.join("|") + ")", N(o)), t)
		}

		function I(e, t, o) {
			return $(w(e, o), t, o)
		}

		function $(e, t, o) {
			ze(t) || (o = t || o, t = []), o = o || {};
			for (var s = o.strict, n = !1 !== o.end, r = "", i = 0; i < e.length; i++) {
				var a = e[i];
				if ("string" == typeof a) r += P(a);
				else {
					var l = P(a.prefix),
						u = "(?:" + a.pattern + ")";
					t.push(a), a.repeat && (u += "(?:" + l + u + ")*"), u = a.optional ? a.partial ? l + "(" + u + ")?" : "(?:" + l + "(" + u + "))?" : l + "(" + u + ")", r += u
				}
			}
			var c = P(o.delimiter || "/"),
				d = r.slice(-c.length) === c;
			return s || (r = (d ? r.slice(0, -c.length) : r) + "(?:" + c + "(?=$))?"), r += n ? "$" : s && d ? "" : "(?=" + c + "|$)", E(new RegExp("^" + r, N(o)), t)
		}

		function M(e, t, o) {
			return ze(t) || (o = t || o, t = []), o = o || {}, e instanceof RegExp ? T(e, t) : ze(e) ? A(e, t, o) : I(e, t, o)
		}

		function U(e, t, o) {
			try {
				return (Ke[e] || (Ke[e] = Ve.compile(e)))(t || {}, {
					pretty: !0
				})
			} catch (e) {
				return ""
			}
		}

		function L(e, t, o, s) {
			var n = t || [],
				r = o || Object.create(null),
				i = s || Object.create(null);
			e.forEach(function(e) {
				O(n, r, i, e)
			});
			for (var a = 0, l = n.length; a < l; a++) "*" === n[a] && (n.push(n.splice(a, 1)[0]), l--, a--);
			return {
				pathList: n,
				pathMap: r,
				nameMap: i
			}
		}

		function O(e, t, o, s, n, r) {
			var i = s.path,
				a = s.name,
				l = F(i, n),
				u = s.pathToRegexpOptions || {};
			"boolean" == typeof s.caseSensitive && (u.sensitive = s.caseSensitive);
			var c = {
				path: l,
				regex: B(l, u),
				components: s.components || {
					default: s.component
				},
				instances: {},
				name: a,
				parent: n,
				matchAs: r,
				redirect: s.redirect,
				beforeEnter: s.beforeEnter,
				meta: s.meta || {},
				props: null == s.props ? {} : s.components ? s.props : {
					default: s.props
				}
			};
			if (s.children && s.children.forEach(function(s) {
					var n = r ? j(r + "/" + s.path) : void 0;
					O(e, t, o, s, c, n)
				}), void 0 !== s.alias) {
				(Array.isArray(s.alias) ? s.alias : [s.alias]).forEach(function(r) {
					var i = {
						path: r,
						children: s.children
					};
					O(e, t, o, i, n, c.path || "/")
				})
			}
			t[c.path] || (e.push(c.path), t[c.path] = c), a && (o[a] || (o[a] = c))
		}

		function B(e, t) {
			var o = Ve(e, [], t);
			return o
		}

		function F(e, t) {
			return e = e.replace(/\/$/, ""), "/" === e[0] ? e : null == t ? e : j(t.path + "/" + e)
		}

		function D(e, t, o, s) {
			var n = "string" == typeof e ? {
				path: e
			} : e;
			if (n.name || n._normalized) return n;
			if (!n.path && n.params && t) {
				n = z({}, n), n._normalized = !0;
				var r = z(z({}, t.params), n.params);
				if (t.name) n.name = t.name, n.params = r;
				else if (t.matched.length) {
					var a = t.matched[t.matched.length - 1].path;
					n.path = U(a, r, "path " + t.path)
				}
				return n
			}
			var l = y(n.path || ""),
				u = t && t.path || "/",
				c = l.path ? g(l.path, u, o || n.append) : u,
				d = i(l.query, n.query, s && s.options.parseQuery),
				p = n.hash || l.hash;
			return p && "#" !== p.charAt(0) && (p = "#" + p), {
				_normalized: !0,
				path: c,
				query: d,
				hash: p
			}
		}

		function z(e, t) {
			for (var o in t) e[o] = t[o];
			return e
		}

		function V(e, t) {
			function o(e) {
				L(e, l, c, d)
			}

			function s(e, o, s) {
				var n = D(e, o, !1, t),
					r = n.name;
				if (r) {
					var a = d[r];
					if (!a) return i(null, n);
					var u = a.regex.keys.filter(function(e) {
						return !e.optional
					}).map(function(e) {
						return e.name
					});
					if ("object" != typeof n.params && (n.params = {}), o && "object" == typeof o.params)
						for (var p in o.params) !(p in n.params) && u.indexOf(p) > -1 && (n.params[p] = o.params[p]);
					if (a) return n.path = U(a.path, n.params, 'named route "' + r + '"'), i(a, n, s)
				} else if (n.path) {
					n.params = {};
					for (var h = 0; h < l.length; h++) {
						var m = l[h],
							f = c[m];
						if (q(f.regex, n.path, n.params)) return i(f, n, s)
					}
				}
				return i(null, n)
			}

			function n(e, o) {
				var n = e.redirect,
					r = "function" == typeof n ? n(u(e, o, null, t)) : n;
				if ("string" == typeof r && (r = {
						path: r
					}), !r || "object" != typeof r) return i(null, o);
				var a = r,
					l = a.name,
					c = a.path,
					p = o.query,
					h = o.hash,
					m = o.params;
				if (p = a.hasOwnProperty("query") ? a.query : p, h = a.hasOwnProperty("hash") ? a.hash : h, m = a.hasOwnProperty("params") ? a.params : m, l) {
					d[l];
					return s({
						_normalized: !0,
						name: l,
						query: p,
						hash: h,
						params: m
					}, void 0, o)
				}
				if (c) {
					var f = H(c, e);
					return s({
						_normalized: !0,
						path: U(f, m, 'redirect route with path "' + f + '"'),
						query: p,
						hash: h
					}, void 0, o)
				}
				return i(null, o)
			}

			function r(e, t, o) {
				var n = U(o, t.params, 'aliased route with path "' + o + '"'),
					r = s({
						_normalized: !0,
						path: n
					});
				if (r) {
					var a = r.matched,
						l = a[a.length - 1];
					return t.params = r.params, i(l, t)
				}
				return i(null, t)
			}

			function i(e, o, s) {
				return e && e.redirect ? n(e, s || o) : e && e.matchAs ? r(e, o, e.matchAs) : u(e, o, s, t)
			}
			var a = L(e),
				l = a.pathList,
				c = a.pathMap,
				d = a.nameMap;
			return {
				match: s,
				addRoutes: o
			}
		}

		function q(e, t, o) {
			var s = t.match(e);
			if (!s) return !1;
			if (!o) return !0;
			for (var n = 1, r = s.length; n < r; ++n) {
				var i = e.keys[n - 1],
					a = "string" == typeof s[n] ? decodeURIComponent(s[n]) : s[n];
				i && (o[i.name] = a)
			}
			return !0
		}

		function H(e, t) {
			return g(e, t.parent ? t.parent.path : "/", !0)
		}

		function Y() {
			window.addEventListener("popstate", function(e) {
				J(), e.state && e.state.key && se(e.state.key)
			})
		}

		function X(e, t, o, s) {
			if (e.app) {
				var n = e.options.scrollBehavior;
				n && e.app.$nextTick(function() {
					var e = K(),
						r = n(t, o, s ? e : null);
					if (r) {
						var i = "object" == typeof r;
						if (i && "string" == typeof r.selector) {
							var a = document.querySelector(r.selector);
							if (a) {
								var l = r.offset && "object" == typeof r.offset ? r.offset : {};
								l = Z(l), e = W(a, l)
							} else G(r) && (e = Q(r))
						} else i && G(r) && (e = Q(r));
						e && window.scrollTo(e.x, e.y)
					}
				})
			}
		}

		function J() {
			var e = oe();
			e && (We[e] = {
				x: window.pageXOffset,
				y: window.pageYOffset
			})
		}

		function K() {
			var e = oe();
			if (e) return We[e]
		}

		function W(e, t) {
			var o = document.documentElement,
				s = o.getBoundingClientRect(),
				n = e.getBoundingClientRect();
			return {
				x: n.left - s.left - t.x,
				y: n.top - s.top - t.y
			}
		}

		function G(e) {
			return ee(e.x) || ee(e.y)
		}

		function Q(e) {
			return {
				x: ee(e.x) ? e.x : window.pageXOffset,
				y: ee(e.y) ? e.y : window.pageYOffset
			}
		}

		function Z(e) {
			return {
				x: ee(e.x) ? e.x : 0,
				y: ee(e.y) ? e.y : 0
			}
		}

		function ee(e) {
			return "number" == typeof e
		}

		function te() {
			return Qe.now().toFixed(3)
		}

		function oe() {
			return Ze
		}

		function se(e) {
			Ze = e
		}

		function ne(e, t) {
			J();
			var o = window.history;
			try {
				t ? o.replaceState({
					key: Ze
				}, "", e) : (Ze = te(), o.pushState({
					key: Ze
				}, "", e))
			} catch (o) {
				window.location[t ? "replace" : "assign"](e)
			}
		}

		function re(e) {
			ne(e, !0)
		}

		function ie(e, t, o) {
			var s = function(n) {
				n >= e.length ? o() : e[n] ? t(e[n], function() {
					s(n + 1)
				}) : s(n + 1)
			};
			s(0)
		}

		function ae(e) {
			return function(t, o, s) {
				var r = !1,
					i = 0,
					a = null;
				le(e, function(e, t, o, l) {
					if ("function" == typeof e && void 0 === e.cid) {
						r = !0, i++;
						var u, c = ce(function(t) {
								t.__esModule && t.default && (t = t.default), e.resolved = "function" == typeof t ? t : Ee.extend(t), o.components[l] = t, --i <= 0 && s()
							}),
							d = ce(function(e) {
								var t = "Failed to resolve async component " + l + ": " + e;
								a || (a = n(e) ? e : new Error(t), s(a))
							});
						try {
							u = e(c, d)
						} catch (e) {
							d(e)
						}
						if (u)
							if ("function" == typeof u.then) u.then(c, d);
							else {
								var p = u.component;
								p && "function" == typeof p.then && p.then(c, d)
							}
					}
				}), r || s()
			}
		}

		function le(e, t) {
			return ue(e.map(function(e) {
				return Object.keys(e.components).map(function(o) {
					return t(e.components[o], e.instances[o], e, o)
				})
			}))
		}

		function ue(e) {
			return Array.prototype.concat.apply([], e)
		}

		function ce(e) {
			var t = !1;
			return function() {
				for (var o = [], s = arguments.length; s--;) o[s] = arguments[s];
				if (!t) return t = !0, e.apply(this, o)
			}
		}

		function de(e) {
			if (!e)
				if (De) {
					var t = document.querySelector("base");
					e = t && t.getAttribute("href") || "/", e = e.replace(/^https?:\/\/[^\/]+/, "")
				} else e = "/";
			return "/" !== e.charAt(0) && (e = "/" + e), e.replace(/\/$/, "")
		}

		function pe(e, t) {
			var o, s = Math.max(e.length, t.length);
			for (o = 0; o < s && e[o] === t[o]; o++);
			return {
				updated: t.slice(0, o),
				activated: t.slice(o),
				deactivated: e.slice(o)
			}
		}

		function he(e, t, o, s) {
			var n = le(e, function(e, s, n, r) {
				var i = me(e, t);
				if (i) return Array.isArray(i) ? i.map(function(e) {
					return o(e, s, n, r)
				}) : o(i, s, n, r)
			});
			return ue(s ? n.reverse() : n)
		}

		function me(e, t) {
			return "function" != typeof e && (e = Ee.extend(e)), e.options[t]
		}

		function fe(e) {
			return he(e, "beforeRouteLeave", ve, !0)
		}

		function be(e) {
			return he(e, "beforeRouteUpdate", ve)
		}

		function ve(e, t) {
			if (t) return function() {
				return e.apply(t, arguments)
			}
		}

		function _e(e, t, o) {
			return he(e, "beforeRouteEnter", function(e, s, n, r) {
				return ge(e, n, r, t, o)
			})
		}

		function ge(e, t, o, s, n) {
			return function(r, i, a) {
				return e(r, i, function(e) {
					a(e), "function" == typeof e && s.push(function() {
						ye(e, t.instances, o, n)
					})
				})
			}
		}

		function ye(e, t, o, s) {
			t[o] ? e(t[o]) : s() && setTimeout(function() {
				ye(e, t, o, s)
			}, 16)
		}

		function je(e) {
			var t = window.location.pathname;
			return e && 0 === t.indexOf(e) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash
		}

		function we(e) {
			var t = je(e);
			if (!/^\/#/.test(t)) return window.location.replace(j(e + "/#" + t)), !0
		}

		function xe() {
			var e = Ce();
			return "/" === e.charAt(0) || (Re("/" + e), !1)
		}

		function Ce() {
			var e = window.location.href,
				t = e.indexOf("#");
			return -1 === t ? "" : e.slice(t + 1)
		}

		function ke(e) {
			window.location.hash = e
		}

		function Re(e) {
			var t = window.location.href,
				o = t.indexOf("#"),
				s = o >= 0 ? t.slice(0, o) : t;
			window.location.replace(s + "#" + e)
		}

		function Pe(e, t) {
			return e.push(t),
				function() {
					var o = e.indexOf(t);
					o > -1 && e.splice(o, 1)
				}
		}

		function Se(e, t, o) {
			var s = "hash" === o ? "#" + t : t;
			return e ? j(e + "/" + s) : s
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var Ee, Ne = {
				name: "router-view",
				functional: !0,
				props: {
					name: {
						type: String,
						default: "default"
					}
				},
				render: function(e, t) {
					var o = t.props,
						s = t.children,
						n = t.parent,
						i = t.data;
					i.routerView = !0;
					for (var a = n.$createElement, l = o.name, u = n.$route, c = n._routerViewCache || (n._routerViewCache = {}), d = 0, p = !1; n && n._routerRoot !== n;) n.$vnode && n.$vnode.data.routerView && d++, n._inactive && (p = !0), n = n.$parent;
					if (i.routerViewDepth = d, p) return a(c[l], i, s);
					var h = u.matched[d];
					if (!h) return c[l] = null, a();
					var m = c[l] = h.components[l];
					return i.registerRouteInstance = function(e, t) {
						var o = h.instances[l];
						(t && o !== e || !t && o === e) && (h.instances[l] = t)
					}, (i.hook || (i.hook = {})).prepatch = function(e, t) {
						h.instances[l] = t.componentInstance
					}, i.props = r(u, h.props && h.props[l]), a(m, i, s)
				}
			},
			Te = /[!'()*]/g,
			Ae = function(e) {
				return "%" + e.charCodeAt(0).toString(16)
			},
			Ie = /%2C/g,
			$e = function(e) {
				return encodeURIComponent(e).replace(Te, Ae).replace(Ie, ",")
			},
			Me = decodeURIComponent,
			Ue = /\/?$/,
			Le = u(null, {
				path: "/"
			}),
			Oe = [String, Object],
			Be = [String, Array],
			Fe = {
				name: "router-link",
				props: {
					to: {
						type: Oe,
						required: !0
					},
					tag: {
						type: String,
						default: "a"
					},
					exact: Boolean,
					append: Boolean,
					replace: Boolean,
					activeClass: String,
					exactActiveClass: String,
					event: {
						type: Be,
						default: "click"
					}
				},
				render: function(e) {
					var t = this,
						o = this.$router,
						s = this.$route,
						n = o.resolve(this.to, s, this.append),
						r = n.location,
						i = n.route,
						a = n.href,
						l = {},
						c = o.options.linkActiveClass,
						d = o.options.linkExactActiveClass,
						h = null == c ? "router-link-active" : c,
						f = null == d ? "router-link-exact-active" : d,
						_ = null == this.activeClass ? h : this.activeClass,
						g = null == this.exactActiveClass ? f : this.exactActiveClass,
						y = r.path ? u(null, r, null, o) : i;
					l[g] = p(s, y), l[_] = this.exact ? l[g] : m(s, y);
					var j = function(e) {
							b(e) && (t.replace ? o.replace(r) : o.push(r))
						},
						w = {
							click: b
						};
					Array.isArray(this.event) ? this.event.forEach(function(e) {
						w[e] = j
					}) : w[this.event] = j;
					var x = {
						class: l
					};
					if ("a" === this.tag) x.on = w, x.attrs = {
						href: a
					};
					else {
						var C = v(this.$slots.default);
						if (C) {
							C.isStatic = !1;
							var k = Ee.util.extend;
							(C.data = k({}, C.data)).on = w;
							(C.data.attrs = k({}, C.data.attrs)).href = a
						} else x.on = w
					}
					return e(this.tag, x, this.$slots.default)
				}
			},
			De = "undefined" != typeof window,
			ze = Array.isArray || function(e) {
				return "[object Array]" == Object.prototype.toString.call(e)
			},
			Ve = M,
			qe = w,
			He = x,
			Ye = R,
			Xe = $,
			Je = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
		Ve.parse = qe, Ve.compile = He, Ve.tokensToFunction = Ye, Ve.tokensToRegExp = Xe;
		var Ke = Object.create(null),
			We = Object.create(null),
			Ge = De && function() {
				var e = window.navigator.userAgent;
				return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && (window.history && "pushState" in window.history)
			}(),
			Qe = De && window.performance && window.performance.now ? window.performance : Date,
			Ze = te(),
			et = function(e, t) {
				this.router = e, this.base = de(t), this.current = Le, this.pending = null, this.ready = !1, this.readyCbs = [], this.readyErrorCbs = [], this.errorCbs = []
			};
		et.prototype.listen = function(e) {
			this.cb = e
		}, et.prototype.onReady = function(e, t) {
			this.ready ? e() : (this.readyCbs.push(e), t && this.readyErrorCbs.push(t))
		}, et.prototype.onError = function(e) {
			this.errorCbs.push(e)
		}, et.prototype.transitionTo = function(e, t, o) {
			var s = this,
				n = this.router.match(e, this.current);
			this.confirmTransition(n, function() {
				s.updateRoute(n), t && t(n), s.ensureURL(), s.ready || (s.ready = !0, s.readyCbs.forEach(function(e) {
					e(n)
				}))
			}, function(e) {
				o && o(e), e && !s.ready && (s.ready = !0, s.readyErrorCbs.forEach(function(t) {
					t(e)
				}))
			})
		}, et.prototype.confirmTransition = function(e, t, o) {
			var r = this,
				i = this.current,
				a = function(e) {
					n(e) && (r.errorCbs.length ? r.errorCbs.forEach(function(t) {
						t(e)
					}) : (s(!1, "uncaught error during route navigation:"), console.error(e))), o && o(e)
				};
			if (p(e, i) && e.matched.length === i.matched.length) return this.ensureURL(), a();
			var l = pe(this.current.matched, e.matched),
				u = l.updated,
				c = l.deactivated,
				d = l.activated,
				h = [].concat(fe(c), this.router.beforeHooks, be(u), d.map(function(e) {
					return e.beforeEnter
				}), ae(d));
			this.pending = e;
			var m = function(t, o) {
				if (r.pending !== e) return a();
				try {
					t(e, i, function(e) {
						!1 === e || n(e) ? (r.ensureURL(!0), a(e)) : "string" == typeof e || "object" == typeof e && ("string" == typeof e.path || "string" == typeof e.name) ? (a(), "object" == typeof e && e.replace ? r.replace(e) : r.push(e)) : o(e)
					})
				} catch (e) {
					a(e)
				}
			};
			ie(h, m, function() {
				var o = [];
				ie(_e(d, o, function() {
					return r.current === e
				}).concat(r.router.resolveHooks), m, function() {
					if (r.pending !== e) return a();
					r.pending = null, t(e), r.router.app && r.router.app.$nextTick(function() {
						o.forEach(function(e) {
							e()
						})
					})
				})
			})
		}, et.prototype.updateRoute = function(e) {
			var t = this.current;
			this.current = e, this.cb && this.cb(e), this.router.afterHooks.forEach(function(o) {
				o && o(e, t)
			})
		};
		var tt = function(e) {
				function t(t, o) {
					var s = this;
					e.call(this, t, o);
					var n = t.options.scrollBehavior;
					n && Y(), window.addEventListener("popstate", function(e) {
						var o = s.current;
						s.transitionTo(je(s.base), function(e) {
							n && X(t, e, o, !0)
						})
					})
				}
				return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.go = function(e) {
					window.history.go(e)
				}, t.prototype.push = function(e, t, o) {
					var s = this,
						n = this,
						r = n.current;
					this.transitionTo(e, function(e) {
						ne(j(s.base + e.fullPath)), X(s.router, e, r, !1), t && t(e)
					}, o)
				}, t.prototype.replace = function(e, t, o) {
					var s = this,
						n = this,
						r = n.current;
					this.transitionTo(e, function(e) {
						re(j(s.base + e.fullPath)), X(s.router, e, r, !1), t && t(e)
					}, o)
				}, t.prototype.ensureURL = function(e) {
					if (je(this.base) !== this.current.fullPath) {
						var t = j(this.base + this.current.fullPath);
						e ? ne(t) : re(t)
					}
				}, t.prototype.getCurrentLocation = function() {
					return je(this.base)
				}, t
			}(et),
			ot = function(e) {
				function t(t, o, s) {
					e.call(this, t, o), s && we(this.base) || xe()
				}
				return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.setupListeners = function() {
					var e = this;
					window.addEventListener("hashchange", function() {
						xe() && e.transitionTo(Ce(), function(e) {
							Re(e.fullPath)
						})
					})
				}, t.prototype.push = function(e, t, o) {
					this.transitionTo(e, function(e) {
						ke(e.fullPath), t && t(e)
					}, o)
				}, t.prototype.replace = function(e, t, o) {
					this.transitionTo(e, function(e) {
						Re(e.fullPath), t && t(e)
					}, o)
				}, t.prototype.go = function(e) {
					window.history.go(e)
				}, t.prototype.ensureURL = function(e) {
					var t = this.current.fullPath;
					Ce() !== t && (e ? ke(t) : Re(t))
				}, t.prototype.getCurrentLocation = function() {
					return Ce()
				}, t
			}(et),
			st = function(e) {
				function t(t, o) {
					e.call(this, t, o), this.stack = [], this.index = -1
				}
				return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.push = function(e, t, o) {
					var s = this;
					this.transitionTo(e, function(e) {
						s.stack = s.stack.slice(0, s.index + 1).concat(e), s.index++, t && t(e)
					}, o)
				}, t.prototype.replace = function(e, t, o) {
					var s = this;
					this.transitionTo(e, function(e) {
						s.stack = s.stack.slice(0, s.index).concat(e), t && t(e)
					}, o)
				}, t.prototype.go = function(e) {
					var t = this,
						o = this.index + e;
					if (!(o < 0 || o >= this.stack.length)) {
						var s = this.stack[o];
						this.confirmTransition(s, function() {
							t.index = o, t.updateRoute(s)
						})
					}
				}, t.prototype.getCurrentLocation = function() {
					var e = this.stack[this.stack.length - 1];
					return e ? e.fullPath : "/"
				}, t.prototype.ensureURL = function() {}, t
			}(et),
			nt = function(e) {
				void 0 === e && (e = {}), this.app = null, this.apps = [], this.options = e, this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = V(e.routes || [], this);
				var t = e.mode || "hash";
				switch (this.fallback = "history" === t && !Ge && !1 !== e.fallback, this.fallback && (t = "hash"), De || (t = "abstract"), this.mode = t, t) {
					case "history":
						this.history = new tt(this, e.base);
						break;
					case "hash":
						this.history = new ot(this, e.base, this.fallback);
						break;
					case "abstract":
						this.history = new st(this, e.base)
				}
			},
			rt = {
				currentRoute: {}
			};
		nt.prototype.match = function(e, t, o) {
			return this.matcher.match(e, t, o)
		}, rt.currentRoute.get = function() {
			return this.history && this.history.current
		}, nt.prototype.init = function(e) {
			var t = this;
			if (this.apps.push(e), !this.app) {
				this.app = e;
				var o = this.history;
				if (o instanceof tt) o.transitionTo(o.getCurrentLocation());
				else if (o instanceof ot) {
					var s = function() {
						o.setupListeners()
					};
					o.transitionTo(o.getCurrentLocation(), s, s)
				}
				o.listen(function(e) {
					t.apps.forEach(function(t) {
						t._route = e
					})
				})
			}
		}, nt.prototype.beforeEach = function(e) {
			return Pe(this.beforeHooks, e)
		}, nt.prototype.beforeResolve = function(e) {
			return Pe(this.resolveHooks, e)
		}, nt.prototype.afterEach = function(e) {
			return Pe(this.afterHooks, e)
		}, nt.prototype.onReady = function(e, t) {
			this.history.onReady(e, t)
		}, nt.prototype.onError = function(e) {
			this.history.onError(e)
		}, nt.prototype.push = function(e, t, o) {
			this.history.push(e, t, o)
		}, nt.prototype.replace = function(e, t, o) {
			this.history.replace(e, t, o)
		}, nt.prototype.go = function(e) {
			this.history.go(e)
		}, nt.prototype.back = function() {
			this.go(-1)
		}, nt.prototype.forward = function() {
			this.go(1)
		}, nt.prototype.getMatchedComponents = function(e) {
			var t = e ? e.matched ? e : this.resolve(e).route : this.currentRoute;
			return t ? [].concat.apply([], t.matched.map(function(e) {
				return Object.keys(e.components).map(function(t) {
					return e.components[t]
				})
			})) : []
		}, nt.prototype.resolve = function(e, t, o) {
			var s = D(e, t || this.history.current, o, this),
				n = this.match(s, t),
				r = n.redirectedFrom || n.fullPath;
			return {
				location: s,
				route: n,
				href: Se(this.history.base, r, this.mode),
				normalizedTo: s,
				resolved: n
			}
		}, nt.prototype.addRoutes = function(e) {
			this.matcher.addRoutes(e), this.history.current !== Le && this.history.transitionTo(this.history.getCurrentLocation())
		}, Object.defineProperties(nt.prototype, rt), nt.install = _, nt.version = "2.7.0", De && window.Vue && window.Vue.use(nt), t.default = nt
	},
	'../../../../shared/node_modules/vue-style-loader/index.js!../../../../shared/node_modules/css-loader/index.js?minimize!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7b1cff45","scoped":false,"hasInlineConfig":true}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./javascripts/web/components/subscriptions/recommendation/UserItem.vue': function(e, t, o) {
		var s = o('../../../../shared/node_modules/css-loader/index.js?minimize!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7b1cff45","scoped":false,"hasInlineConfig":true}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./javascripts/web/components/subscriptions/recommendation/UserItem.vue');
		"string" == typeof s && (s = [
			[e.i, s, ""]
		]), s.locals && (e.exports = s.locals);
		o("../../../../shared/node_modules/vue-style-loader/lib/addStylesClient.js")("a472be58", s, !0)
	},
	"../../../../shared/node_modules/vue-style-loader/lib/addStylesClient.js": function(e, t, o) {
		function s(e) {
			for (var t = 0; t < e.length; t++) {
				var o = e[t],
					s = c[o.id];
				if (s) {
					s.refs++;
					for (var n = 0; n < s.parts.length; n++) s.parts[n](o.parts[n]);
					for (; n < o.parts.length; n++) s.parts.push(r(o.parts[n]));
					s.parts.length > o.parts.length && (s.parts.length = o.parts.length)
				} else {
					for (var i = [], n = 0; n < o.parts.length; n++) i.push(r(o.parts[n]));
					c[o.id] = {
						id: o.id,
						refs: 1,
						parts: i
					}
				}
			}
		}

		function n() {
			var e = document.createElement("style");
			return e.type = "text/css", d.appendChild(e), e
		}

		function r(e) {
			var t, o, s = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
			if (s) {
				if (m) return f;
				s.parentNode.removeChild(s)
			}
			if (b) {
				var r = h++;
				s = p || (p = n()), t = i.bind(null, s, r, !1), o = i.bind(null, s, r, !0)
			} else s = n(), t = a.bind(null, s), o = function() {
				s.parentNode.removeChild(s)
			};
			return t(e),
				function(s) {
					if (s) {
						if (s.css === e.css && s.media === e.media && s.sourceMap === e.sourceMap) return;
						t(e = s)
					} else o()
				}
		}

		function i(e, t, o, s) {
			var n = o ? "" : s.css;
			if (e.styleSheet) e.styleSheet.cssText = v(t, n);
			else {
				var r = document.createTextNode(n),
					i = e.childNodes;
				i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(r, i[t]) : e.appendChild(r)
			}
		}

		function a(e, t) {
			var o = t.css,
				s = t.media,
				n = t.sourceMap;
			if (s && e.setAttribute("media", s), n && (o += "\n/*# sourceURL=" + n.sources[0] + " */", o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), e.styleSheet) e.styleSheet.cssText = o;
			else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(o))
			}
		}
		var l = "undefined" != typeof document;
		if ("undefined" != typeof DEBUG && DEBUG && !l) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
		var u = o("../../../../shared/node_modules/vue-style-loader/lib/listToStyles.js"),
			c = {},
			d = l && (document.head || document.getElementsByTagName("head")[0]),
			p = null,
			h = 0,
			m = !1,
			f = function() {},
			b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
		e.exports = function(e, t, o) {
			m = o;
			var n = u(e, t);
			return s(n),
				function(t) {
					for (var o = [], r = 0; r < n.length; r++) {
						var i = n[r],
							a = c[i.id];
						a.refs--, o.push(a)
					}
					t ? (n = u(e, t), s(n)) : n = [];
					for (var r = 0; r < o.length; r++) {
						var a = o[r];
						if (0 === a.refs) {
							for (var l = 0; l < a.parts.length; l++) a.parts[l]();
							delete c[a.id]
						}
					}
				}
		};
		var v = function() {
			var e = [];
			return function(t, o) {
				return e[t] = o, e.filter(Boolean).join("\n")
			}
		}()
	},
	"../../../../shared/node_modules/vue-style-loader/lib/listToStyles.js": function(e, t) {
		e.exports = function(e, t) {
			for (var o = [], s = {}, n = 0; n < t.length; n++) {
				var r = t[n],
					i = r[0],
					a = r[1],
					l = r[2],
					u = r[3],
					c = {
						id: e + ":" + n,
						css: a,
						media: l,
						sourceMap: u
					};
				s[i] ? s[i].parts.push(c) : o.push(s[i] = {
					id: i,
					parts: [c]
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
	"./images/default_avatar/avatar-notebook-default.png": function(e, t, o) {
		e.exports = o.p + "default_avatar/avatar-notebook-default-640f7dde88592bdf6417d8ce1902636e.png"
	},
	"./images/web/addfollow.png": function(e, t, o) {
		e.exports = o.p + "web/addfollow-fc392ec918dda9d19818181ca42d2d7e.png"
	},
	"./images/web/icon_nocontent.png": function(e, t, o) {
		e.exports = o.p + "web/icon_nocontent-00c423de394b9184d467f2f2a7284b54.png"
	},
	"./images/web/jianyouquan.png": function(e, t, o) {
		e.exports = o.p + "web/jianyouquan-2fb0cd72e35147c79d6507c3a3a2591b.png"
	},
	"./javascripts/common/components/CollectionFollowButton.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/common/components/CollectionFollowButton.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-05b68ac4","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/common/components/CollectionFollowButton.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/common/components/UserFollowButton.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/common/components/UserFollowButton.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-e709f4ea","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/common/components/UserFollowButton.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/common/components/api.js": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			r = s(n),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = s(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = s(l),
			c = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			d = s(c),
			p = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			h = s(p),
			m = o("./javascripts/mobile/api/baseApi.js"),
			f = s(m),
			b = function(e) {
				function t() {
					return (0, a.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, r.default)(t)).apply(this, arguments))
				}
				return (0, h.default)(t, e), (0, u.default)(t, [{
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
			}(f.default);
		t.default = b, e.exports = t.default
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
					if (/\/\/(upload-images|upload|cdn2)\.jianshu\.io/.test(e) && t.width > 0) {
						var o = e.replace(/http:/, ""),
							s = t.width,
							n = t.height || t.width;
						return o + "?imageMogr2/auto-orient/strip|imageView2/" + (t.mode || 1) + "/w/" + s + "/h/" + n
					}
					return e
				}
			}
		}, e.exports = t.default
	},
	"./javascripts/mobile/api/baseApi.js": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/object/assign.js"),
			r = s(n),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = s(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = s(l),
			c = o("../../../../shared/node_modules/axios/index.js"),
			d = s(c),
			p = function() {
				function e() {
					var t = this;
					(0, a.default)(this, e), this.axios = d.default.create({
						timeout: 1e4,
						headers: {
							Accept: "application/json"
						}
					}), this.axios.interceptors.request.use(function(e) {
						(0, r.default)(e.headers, t.getApiSignatures());
						var o = e.method;
						return "post" !== o && "put" !== o && "delete" !== o || ((0, r.default)(e.headers, t.getCSRFToken()), e.data || (e.data = {
							fuc: 1
						})), e
					})
				}
				return (0, u.default)(e, [{
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
		t.default = p, e.exports = t.default
	},
	"./javascripts/web/api/baseApi.js": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/object/assign.js"),
			r = s(n),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = s(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = s(l),
			c = o("../../../../shared/node_modules/axios/index.js"),
			d = s(c),
			p = function() {
				function e() {
					var t = this;
					(0, a.default)(this, e), this.axios = d.default.create({
						timeout: 1e4,
						headers: {
							Accept: "application/json"
						}
					}), this.axios.interceptors.request.use(function(e) {
						var o = e.method;
						return "post" !== o && "put" !== o && "delete" !== o || (0, r.default)(e.headers, t.constructor.getCSRFToken()), e
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
		t.default = p, e.exports = t.default
	},
	"./javascripts/web/api/collectionApi.js": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			r = s(n),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = s(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = s(l),
			c = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			d = s(c),
			p = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			h = s(p),
			m = o("./javascripts/web/api/baseApi.js"),
			f = s(m),
			b = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					(0, a.default)(this, t);
					var o = (0, d.default)(this, (t.__proto__ || (0, r.default)(t)).call(this));
					return o.collection = e, o
				}
				return (0, h.default)(t, e), (0, u.default)(t, [{
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
							s = e.page,
							n = e.per_page;
						return this.axios.get(Routes.show_collection_path(t), {
							headers: {
								"X-PJAX": !0
							},
							params: {
								order_by: o,
								page: s,
								per_page: n
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
							s = e.page,
							n = e.per_page;
						return this.axios.get(Routes.collections_user_path(t), {
							params: {
								slug: t,
								type: o,
								page: s,
								per_page: n
							}
						})
					}
				}, {
					key: "editing",
					value: function(e) {
						var t = e.count,
							o = e.page,
							s = e.seen_ids;
						return this.axios.get(Routes.editing_collections_path(), {
							params: {
								count: t,
								page: o,
								seen_ids: s
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
			}(f.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/web/api/notebooksApi.js": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			r = s(n),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = s(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = s(l),
			c = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			d = s(c),
			p = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			h = s(p),
			m = o("./javascripts/web/api/baseApi.js"),
			f = s(m),
			b = function(e) {
				function t() {
					return (0, a.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, r.default)(t)).apply(this, arguments))
				}
				return (0, h.default)(t, e), (0, u.default)(t, [{
					key: "show",
					value: function(e) {
						var t = e.id,
							o = e.order_by,
							s = e.page,
							n = e.per_page;
						return this.axios.get(Routes.show_notebook_path(t), {
							headers: {
								"X-PJAX": !0
							},
							params: {
								order_by: o,
								page: s,
								per_page: n
							}
						})
					}
				}, {
					key: "getByUser",
					value: function(e) {
						var t = e.slug,
							o = e.type,
							s = e.page,
							n = e.per_page;
						return this.axios.get(Routes.notebooks_user_path(t), {
							params: {
								slug: t,
								type: o,
								page: s,
								per_page: n
							}
						})
					}
				}]), t
			}(f.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/web/api/notesApi.js": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			r = s(n),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = s(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = s(l),
			c = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			d = s(c),
			p = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			h = s(p),
			m = o("./javascripts/web/api/baseApi.js"),
			f = s(m),
			b = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					(0, a.default)(this, t);
					var o = (0, d.default)(this, (t.__proto__ || (0, r.default)(t)).call(this));
					return o.note = e, o
				}
				return (0, h.default)(t, e), (0, u.default)(t, [{
					key: "recommendations",
					value: function() {
						return this.axios.get(Routes.recommendations_note_path({
							id: this.note.id
						}))
					}
				}, {
					key: "rewards",
					value: function(e) {
						var t = e.noteId,
							o = e.amount,
							s = e.message,
							n = e.channel;
						return this.axios.post(Routes.note_rewards_path(t), {
							amount: o,
							message: s,
							channel: n
						})
					}
				}, {
					key: "order",
					value: function(e) {
						var t = e.id,
							o = e.type;
						return this.axios.get(Routes.order_path(t), {
							params: {
								type: o
							}
						})
					}
				}, {
					key: "submit",
					value: function(e) {
						var t = e.note_id,
							o = e.collection_id;
						return this.axios.post(Routes.note_submit_path(t), {
							collection_id: o
						})
					}
				}, {
					key: "withdraw",
					value: function(e) {
						var t = e.note_id,
							o = e.collection_id;
						return this.axios.delete(Routes.note_submit_path(t), {
							params: {
								collection_id: o
							}
						})
					}
				}, {
					key: "editableCollections",
					value: function(e) {
						var t = e.note_id,
							o = e.page,
							s = e.per_page;
						return this.axios.get(Routes.note_editable_collections_path(t), {
							params: {
								page: o,
								per_page: s
							}
						})
					}
				}, {
					key: "includedCollections",
					value: function(e) {
						var t = e.noteId,
							o = e.page;
						return this.axios.get(Routes.included_collections_note_path(t), {
							params: {
								page: o
							}
						})
					}
				}, {
					key: "rewardsRecord",
					value: function(e) {
						var t = e.note_id,
							o = e.max_id,
							s = e.count;
						return this.axios.get(Routes.note_rewards_path(t), {
							params: {
								max_id: o,
								count: s
							}
						})
					}
				}, {
					key: "searchSubmitCollections",
					value: function(e) {
						var t = e.noteId,
							o = e.q;
						return this.axios.get(Routes.search_note_submit_collections_path(t), {
							params: {
								q: o
							}
						})
					}
				}, {
					key: "recommendedCollections",
					value: function(e) {
						var t = e.note_id,
							o = e.page,
							s = e.per_page;
						return this.axios.get(Routes.note_recommended_collections_path(t), {
							params: {
								page: o,
								per_page: s
							}
						})
					}
				}, {
					key: "submitCollections",
					value: function(e) {
						var t = e.noteId;
						return this.axios.get(Routes.note_submit_collections_path(t))
					}
				}, {
					key: "addToBookmarks",
					value: function(e) {
						var t = e.noteId;
						return this.axios.post(Routes.note_bookmarks_path(t))
					}
				}, {
					key: "removeBookmarks",
					value: function(e) {
						var t = e.noteId;
						return this.axios.delete(Routes.note_bookmarks_path(t))
					}
				}, {
					key: "sideTool",
					value: function(e) {
						var t = e.noteId;
						return this.axios.get(Routes.side_tool_note_path(t))
					}
				}, {
					key: "likesList",
					value: function(e) {
						var t = e.note_id,
							o = e.max_id,
							s = e.count;
						return this.axios.get(Routes.likes_note_path(t), {
							params: {
								max_id: o,
								count: s
							}
						})
					}
				}, {
					key: "like",
					value: function(e) {
						var t = e.noteId;
						return this.axios.post(Routes.note_like_path(t))
					}
				}, {
					key: "unlike",
					value: function(e) {
						var t = e.noteId;
						return this.axios.delete(Routes.note_like_path(t))
					}
				}]), t
			}(f.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/web/api/subscriptionsApi.js": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			r = s(n),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = s(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = s(l),
			c = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			d = s(c),
			p = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			h = s(p),
			m = o("./javascripts/web/api/baseApi.js"),
			f = s(m),
			b = function(e) {
				function t() {
					return (0, a.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, r.default)(t)).apply(this, arguments))
				}
				return (0, h.default)(t, e), (0, u.default)(t, [{
					key: "timeline",
					value: function(e) {
						return this.axios.get("/timeline.json", {
							params: e
						})
					}
				}, {
					key: "show",
					value: function(e) {
						return this.axios.get(Routes.subscription_path(e))
					}
				}, {
					key: "list",
					value: function(e) {
						var t = e.types,
							o = e.only_push_enabled,
							s = e.page;
						return this.axios.get(Routes.subscriptions_path(), {
							params: {
								types: t,
								only_push_enabled: o,
								page: s
							}
						})
					}
				}, {
					key: "recommended",
					value: function(e) {
						var t = e.type,
							o = e.except_ids;
						return this.axios.get(Routes.recommended_subscriptions_path(), {
							params: {
								type: t,
								except_ids: o
							}
						})
					}
				}]), t
			}(f.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/web/api/userApi.js": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = o("../../../../shared/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),
			r = s(n),
			i = o("../../../../shared/node_modules/babel-runtime/helpers/classCallCheck.js"),
			a = s(i),
			l = o("../../../../shared/node_modules/babel-runtime/helpers/createClass.js"),
			u = s(l),
			c = o("../../../../shared/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),
			d = s(c),
			p = o("../../../../shared/node_modules/babel-runtime/helpers/inherits.js"),
			h = s(p),
			m = o("./javascripts/web/api/baseApi.js"),
			f = s(m),
			b = function(e) {
				function t() {
					return (0, a.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, r.default)(t)).apply(this, arguments))
				}
				return (0, h.default)(t, e), (0, u.default)(t, [{
					key: "show",
					value: function(e) {
						var t = e.slug,
							o = e.order_by,
							s = e.page,
							n = e.per_page;
						return this.axios.get(Routes.show_user_path(t), {
							headers: {
								"X-PJAX": !0
							},
							params: {
								order_by: o,
								page: s,
								per_page: n
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
							s = e.content;
						return this.axios.post(t, {
							type: o,
							content: s
						})
					}
				}]), t
			}(f.default);
		t.default = b, e.exports = t.default
	},
	"./javascripts/web/components/common/ContributeModal.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/ContributeModal.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2deca7c2","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/ContributeModal.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/common/ContributeNoteItem.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/ContributeNoteItem.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-09d15820","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/ContributeNoteItem.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/common/ContributeNoteItemPlaceholder.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/ContributeNoteItemPlaceholder.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-40d813e3","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/ContributeNoteItemPlaceholder.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/common/Modal.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/Modal.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-807f6fa2","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/Modal.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/common/NoteItem.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/NoteItem.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0c0b4493","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/NoteItem.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/common/NoteItemPlaceholder.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/common/NoteItemPlaceholder.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0a3ff190","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/common/NoteItemPlaceholder.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/App.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/App.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-caeb33dc","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/App.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/CollectionDetailView.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/CollectionDetailView.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-54abd7b3","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/CollectionDetailView.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/DetailView.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/DetailView.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3b516635","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/DetailView.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/NotebookDetailView.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/NotebookDetailView.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7a0a01f0","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/NotebookDetailView.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/UserDetailView.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/UserDetailView.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0ac87940","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/UserDetailView.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/placeholders/CollectionPlaceholder.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/CollectionPlaceholder.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5afabae5","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/CollectionPlaceholder.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/placeholders/NotebookPlaceholder.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/NotebookPlaceholder.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-244a1c08","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/NotebookPlaceholder.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/placeholders/RecommendAllPlaceholder.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendAllPlaceholder.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-0f07695e","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendAllPlaceholder.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/placeholders/RecommendCollectionPlaceholder.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendCollectionPlaceholder.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-6bc052d9","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendCollectionPlaceholder.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/placeholders/RecommendUserPlaceholder.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendUserPlaceholder.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3fba7f0c","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/RecommendUserPlaceholder.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/placeholders/SidebarUserPlaceholder.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/SidebarUserPlaceholder.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-018daa6c","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/SidebarUserPlaceholder.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/placeholders/TimeLinePlaceholder.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/TimeLinePlaceholder.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7ffdd8c2","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/TimeLinePlaceholder.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/placeholders/UserPlaceholder.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/placeholders/UserPlaceholder.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-24b6e018","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/placeholders/UserPlaceholder.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/recommendation/CollectionItem.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/recommendation/CollectionItem.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-c980c050","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/recommendation/CollectionItem.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/recommendation/ListView.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/recommendation/ListView.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2ad830ac","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/recommendation/ListView.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/recommendation/UserItem.vue": function(e, t, o) {
		function s(e) {
			o('../../../../shared/node_modules/vue-style-loader/index.js!../../../../shared/node_modules/css-loader/index.js?minimize!../../../../shared/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-7b1cff45","scoped":false,"hasInlineConfig":true}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./javascripts/web/components/subscriptions/recommendation/UserItem.vue')
		}
		var n = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/recommendation/UserItem.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-7b1cff45","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/recommendation/UserItem.vue'), s, null, null);
		e.exports = n.exports
	},
	"./javascripts/web/components/subscriptions/timeline/ListView.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/timeline/ListView.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-05993ee2","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/timeline/ListView.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/timeline/UserLikeSomethingNote.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/timeline/UserLikeSomethingNote.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-ded4af8a","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/timeline/UserLikeSomethingNote.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/timeline/UserShareNoteNote.vue": function(e, t, o) {
		var s = o("../../../../shared/node_modules/vue-loader/lib/component-normalizer.js")(o("../../../../shared/node_modules/babel-loader/lib/index.js!../../../../shared/node_modules/vue-loader/lib/selector.js?type=script&index=0!./javascripts/web/components/subscriptions/timeline/UserShareNoteNote.vue"), o('../../../../shared/node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-780b7b09","hasScoped":false}!../../../../shared/node_modules/vue-loader/lib/selector.js?type=template&index=0!./javascripts/web/components/subscriptions/timeline/UserShareNoteNote.vue'), null, null, null);
		e.exports = s.exports
	},
	"./javascripts/web/components/subscriptions/zh-CN.json": function(e, t) {
		e.exports = {
			typeText: {
				all: "全部关注",
				user: "只看作者",
				collection: "只看专题",
				notebook: "只看文集",
				onlyPushEnabled: "只看推送更新"
			},
			HomepageText: {
				collection: "专题主页",
				notebook: "文集主页",
				user: "个人主页"
			},
			timeline: "简友圈",
			follow: "添加关注",
			orderBy: {
				addedAt: "最新收录",
				sharedAt: "最新发布",
				commentedAt: "最新评论",
				top: "热门",
				publishAt: "最新发布",
				menu: "目录"
			},
			no_content: "这里还木有内容哦~",
			collectionDetailView: {
				addNote: "收录",
				contribute: "投稿",
				canNotContribute: "该专题暂不接受投稿",
				statisticInfo: "<a href='{{userPath}}'' target='_blank'>{{owner}}</a> 编 · 收录了{{notesCount}}篇文章 · {{subscribersCount}}人关注"
			},
			notebookDetailView: {
				statisticInfo: "<a href='{{userPath}}'' target='_blank'>{{owner}}</a> 编 · 收录了{{notesCount}}篇文章 · {{subscribersCount}}人关注"
			},
			userDetailView: {
				signedAuthor: "签约作者",
				chat: "发简信",
				statisticInfo: "写了{{totalWordage}}字，获得了{{likesCount}}个喜欢"
			},
			recommendation: {
				collectionInfo: "{{notesCount}}篇文章 · {{likesCount}}人关注",
				friendsFollowCollection: "关注了专题",
				moreFriendsFollowCollection: "等{{count}}位好友也关注了专题",
				friendsFollowUser: "关注了作者",
				moreFriendsFollowUser: "等{{count}}位好友也关注了专题",
				jianshuRecommendUser: "简书推荐作者",
				jianshuRecommendCollection: "简书推荐专题",
				recommendAll: "全部推荐",
				recommendUser: "推荐作者",
				recommendCollection: "推荐专题"
			},
			timelineView: {
				userLikeNote: "喜欢了文章",
				userShareNote: "发表了文章"
			}
		}
	},
	"./javascripts/web/components/subscriptions/zh-TW.json": function(e, t) {
		e.exports = {
			typeText: {
				all: "全部關注",
				user: "只看作者",
				collection: "只看專題",
				notebook: "只看文集",
				onlyPushEnabled: "只看推送更新"
			},
			HomepageText: {
				collection: "專題主頁",
				notebook: "文集主頁",
				user: "個人主頁"
			},
			timeline: "簡友圈",
			follow: "添加關注",
			orderBy: {
				addedAt: "最新收錄",
				sharedAt: "最新發布",
				commentedAt: "最新評論",
				top: "熱門",
				publishAt: "最新發布",
				menu: "目錄"
			},
			no_content: "這裡還木有內容哦~",
			collectionDetailView: {
				addNote: "收錄",
				contribute: "投稿",
				canNotContribute: "該專題暫不接受投稿",
				statisticInfo: "<a href='{{userPath}}'' target='_blank'>{{owner}}</a> 編 · 收錄了{{notesCount}}篇文章 · {{subscribersCount}}人關注"
			},
			notebookDetailView: {
				statisticInfo: "<a href='{{userPath}}'' target='_blank'>{{owner}}</a> 編 · 收錄了{{notesCount}}篇文章 · {{subscribersCount}}人關注"
			},
			userDetailView: {
				signedAuthor: "簽約作者",
				chat: "發簡信",
				statisticInfo: "寫了{{totalWordage}}字，獲得了{{likesCount}}個喜歡"
			},
			recommendation: {
				collectionInfo: "{{notesCount}}篇文章 · {{likesCount}}人關注",
				friendsFollowCollection: "關注了專題",
				moreFriendsFollowCollection: "等{{count}}位好友也關注了專題",
				friendsFollowUser: "關注了作者",
				moreFriendsFollowUser: "等{{count}}位好友也關注了專題",
				jianshuRecommendUser: "簡書推薦作者",
				jianshuRecommendCollection: "簡書推薦專題",
				recommendAll: "全部推薦",
				recommendUser: "推薦作者",
				recommendCollection: "推薦專題"
			},
			timelineView: {
				userLikeNote: "喜歡了文章",
				userShareNote: "發表了文章"
			}
		}
	},
	"./javascripts/web/mixins/modalMixin.js": function(e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = o("./javascripts/web/components/common/Modal.vue"),
			n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(s);
		t.default = {
			components: {
				Modal: n.default
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
	"./javascripts/web/pages/subscriptions/index/entry.js": function(e, t, o) {
		"use strict";

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var n = o("../../../../shared/node_modules/vue-router/dist/vue-router.esm.js"),
			r = s(n),
			i = o("./javascripts/web/components/subscriptions/App.vue"),
			a = s(i),
			l = o("./javascripts/web/components/subscriptions/timeline/ListView.vue"),
			u = s(l),
			c = o("./javascripts/web/components/subscriptions/DetailView.vue"),
			d = s(c),
			p = o("./javascripts/web/components/subscriptions/recommendation/ListView.vue"),
			h = s(p);
		o("./stylesheets/web/page/subscription.scss"), o("./stylesheets/web/module/note_list.scss"), document.body.style["overflow-y"] = "scroll", $(document).ready(function() {
			var e = new r.default({
				linkActiveClass: "active",
				routes: [{
					path: "/timeline",
					component: u.default
				}, {
					path: "/subscriptions/:id/:sourceType",
					component: d.default
				}, {
					path: "/recommendation",
					component: h.default
				}, {
					path: "*",
					redirect: M.pageData.has_following_users ? "/timeline" : "/recommendation"
				}]
			});
			new(Vue.extend(a.default))({
				router: e
			}).$mount("#subscriptions"), window.router = e
		})
	},
	"./stylesheets/web/module/note_list.scss": function(e, t) {},
	"./stylesheets/web/page/subscription.scss": function(e, t) {}
}, ["./javascripts/web/pages/subscriptions/index/entry.js"]);
//# sourceMappingURL=entry-77fd4357a6f725f0d870.js.map