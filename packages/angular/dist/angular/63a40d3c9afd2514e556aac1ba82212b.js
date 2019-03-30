!function (e) { var t = {}; function n(r) { if (t[r])
    return t[r].exports; var i = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports; } n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }); }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t)
    return e; if (4 & t && "object" == typeof e && e && e.__esModule)
    return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
    for (var i in e)
        n.d(r, i, function (t) { return e[t]; }.bind(null, i)); return r; }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(t, "a", t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = "", n(n.s = 6); }([function (e, t, n) {
        "use strict";
        (function (e, r) { n.d(t, "c", function () { return m; }), n.d(t, "b", function () { return p; }), n.d(t, "a", function () { return g; }); var i = !1, o = !1, s = !1, u = !1, a = !1, l = void 0 !== e && void 0 !== e.versions && void 0 !== e.versions.electron && "renderer" === e.type; if ("object" != typeof navigator || l) {
            if ("object" == typeof e) {
                i = "win32" === e.platform, o = "darwin" === e.platform, s = "linux" === e.platform, "en", "en";
                var c = e.env.VSCODE_NLS_CONFIG;
                if (c)
                    try {
                        var h = JSON.parse(c), f = h.availableLanguages["*"];
                        h.locale, f || "en", h._translationsConfigFile;
                    }
                    catch (e) { }
                u = !0;
            }
        }
        else {
            var d = navigator.userAgent;
            i = d.indexOf("Windows") >= 0, o = d.indexOf("Macintosh") >= 0, s = d.indexOf("Linux") >= 0, a = !0, navigator.language;
        } var m = i, p = a, g = "object" == typeof self ? self : "object" == typeof r ? r : {}; }).call(this, n(2), n(1));
    }, function (e, t) { var n; n = function () { return this; }(); try {
        n = n || new Function("return this")();
    }
    catch (e) {
        "object" == typeof window && (n = window);
    } e.exports = n; }, function (e, t) { var n, r, i = e.exports = {}; function o() { throw new Error("setTimeout has not been defined"); } function s() { throw new Error("clearTimeout has not been defined"); } function u(e) { if (n === setTimeout)
        return setTimeout(e, 0); if ((n === o || !n) && setTimeout)
        return n = setTimeout, setTimeout(e, 0); try {
        return n(e, 0);
    }
    catch (t) {
        try {
            return n.call(null, e, 0);
        }
        catch (t) {
            return n.call(this, e, 0);
        }
    } } !function () { try {
        n = "function" == typeof setTimeout ? setTimeout : o;
    }
    catch (e) {
        n = o;
    } try {
        r = "function" == typeof clearTimeout ? clearTimeout : s;
    }
    catch (e) {
        r = s;
    } }(); var a, l = [], c = !1, h = -1; function f() { c && a && (c = !1, a.length ? l = a.concat(l) : h = -1, l.length && d()); } function d() { if (!c) {
        var e = u(f);
        c = !0;
        for (var t = l.length; t;) {
            for (a = l, l = []; ++h < t;)
                a && a[h].run();
            h = -1, t = l.length;
        }
        a = null, c = !1, function (e) { if (r === clearTimeout)
            return clearTimeout(e); if ((r === s || !r) && clearTimeout)
            return r = clearTimeout, clearTimeout(e); try {
            r(e);
        }
        catch (t) {
            try {
                return r.call(null, e);
            }
            catch (t) {
                return r.call(this, e);
            }
        } }(e);
    } } function m(e, t) { this.fun = e, this.array = t; } function p() { } i.nextTick = function (e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n]; l.push(new m(e, t)), 1 !== l.length || c || u(d); }, m.prototype.run = function () { this.fun.apply(null, this.array); }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function (e) { return []; }, i.binding = function (e) { throw new Error("process.binding is not supported"); }, i.cwd = function () { return "/"; }, i.chdir = function (e) { throw new Error("process.chdir is not supported"); }, i.umask = function () { return 0; }; }, function (e, t, n) { (function (e, t) { (function () {
        "use strict";
        function n(e) { var t = this.constructor; return this.then(function (n) { return t.resolve(e()).then(function () { return n; }); }, function (n) { return t.resolve(e()).then(function () { return t.reject(n); }); }); }
        var r = setTimeout;
        function i() { }
        function o(e) { if (!(this instanceof o))
            throw new TypeError("Promises must be constructed via new"); if ("function" != typeof e)
            throw new TypeError("not a function"); this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(e, this); }
        function s(e, t) { for (; 3 === e._state;)
            e = e._value; 0 !== e._state ? (e._handled = !0, o._immediateFn(function () { var n = 1 === e._state ? t.onFulfilled : t.onRejected; if (null !== n) {
            var r;
            try {
                r = n(e._value);
            }
            catch (e) {
                return void a(t.promise, e);
            }
            u(t.promise, r);
        }
        else
            (1 === e._state ? u : a)(t.promise, e._value); })) : e._deferreds.push(t); }
        function u(e, t) { try {
            if (t === e)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof o)
                    return e._state = 3, e._value = t, void l(e);
                if ("function" == typeof n)
                    return void h((r = n, i = t, function () { r.apply(i, arguments); }), e);
            }
            e._state = 1, e._value = t, l(e);
        }
        catch (t) {
            a(e, t);
        } var r, i; }
        function a(e, t) { e._state = 2, e._value = t, l(e); }
        function l(e) { 2 === e._state && 0 === e._deferreds.length && o._immediateFn(function () { e._handled || o._unhandledRejectionFn(e._value); }); for (var t = 0, n = e._deferreds.length; t < n; t++)
            s(e, e._deferreds[t]); e._deferreds = null; }
        function c(e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n; }
        function h(e, t) { var n = !1; try {
            e(function (e) { n || (n = !0, u(t, e)); }, function (e) { n || (n = !0, a(t, e)); });
        }
        catch (e) {
            if (n)
                return;
            n = !0, a(t, e);
        } }
        o.prototype.catch = function (e) { return this.then(null, e); }, o.prototype.then = function (e, t) { var n = new this.constructor(i); return s(this, new c(e, t, n)), n; }, o.prototype.finally = n, o.all = function (e) { return new o(function (t, n) { if (!e || void 0 === e.length)
            throw new TypeError("Promise.all accepts an array"); var r = Array.prototype.slice.call(e); if (0 === r.length)
            return t([]); var i = r.length; function o(e, s) { try {
            if (s && ("object" == typeof s || "function" == typeof s)) {
                var u = s.then;
                if ("function" == typeof u)
                    return void u.call(s, function (t) { o(e, t); }, n);
            }
            r[e] = s, 0 == --i && t(r);
        }
        catch (e) {
            n(e);
        } } for (var s = 0; s < r.length; s++)
            o(s, r[s]); }); }, o.resolve = function (e) { return e && "object" == typeof e && e.constructor === o ? e : new o(function (t) { t(e); }); }, o.reject = function (e) { return new o(function (t, n) { n(e); }); }, o.race = function (e) { return new o(function (t, n) { for (var r = 0, i = e.length; r < i; r++)
            e[r].then(t, n); }); }, o._immediateFn = "function" == typeof e && function (t) { e(t); } || function (e) { r(e, 0); }, o._unhandledRejectionFn = function (e) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e); };
        var f = function () { if ("undefined" != typeof self)
            return self; if ("undefined" != typeof window)
            return window; if (void 0 !== t)
            return t; throw new Error("unable to locate global object"); }();
        "Promise" in f ? f.Promise.prototype.finally || (f.Promise.prototype.finally = n) : f.Promise = o;
    })(); }).call(this, n(4).setImmediate, n(1)); }, function (e, t, n) { (function (e) { var r = void 0 !== e && e || "undefined" != typeof self && self || window, i = Function.prototype.apply; function o(e, t) { this._id = e, this._clearFn = t; } t.setTimeout = function () { return new o(i.call(setTimeout, r, arguments), clearTimeout); }, t.setInterval = function () { return new o(i.call(setInterval, r, arguments), clearInterval); }, t.clearTimeout = t.clearInterval = function (e) { e && e.close(); }, o.prototype.unref = o.prototype.ref = function () { }, o.prototype.close = function () { this._clearFn.call(r, this._id); }, t.enroll = function (e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t; }, t.unenroll = function (e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1; }, t._unrefActive = t.active = function (e) { clearTimeout(e._idleTimeoutId); var t = e._idleTimeout; t >= 0 && (e._idleTimeoutId = setTimeout(function () { e._onTimeout && e._onTimeout(); }, t)); }, n(5), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate; }).call(this, n(1)); }, function (e, t, n) { (function (e, t) { !function (e, n) {
        "use strict";
        if (!e.setImmediate) {
            var r, i, o, s, u, a = 1, l = {}, c = !1, h = e.document, f = Object.getPrototypeOf && Object.getPrototypeOf(e);
            f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? r = function (e) { t.nextTick(function () { m(e); }); } : !function () { if (e.postMessage && !e.importScripts) {
                var t = !0, n = e.onmessage;
                return e.onmessage = function () { t = !1; }, e.postMessage("", "*"), e.onmessage = n, t;
            } }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function (e) { m(e.data); }, r = function (e) { o.port2.postMessage(e); }) : h && "onreadystatechange" in h.createElement("script") ? (i = h.documentElement, r = function (e) { var t = h.createElement("script"); t.onreadystatechange = function () { m(e), t.onreadystatechange = null, i.removeChild(t), t = null; }, i.appendChild(t); }) : r = function (e) { setTimeout(m, 0, e); } : (s = "setImmediate$" + Math.random() + "$", u = function (t) { t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && m(+t.data.slice(s.length)); }, e.addEventListener ? e.addEventListener("message", u, !1) : e.attachEvent("onmessage", u), r = function (t) { e.postMessage(s + t, "*"); }), f.setImmediate = function (e) { "function" != typeof e && (e = new Function("" + e)); for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                t[n] = arguments[n + 1]; var i = { callback: e, args: t }; return l[a] = i, r(a), a++; }, f.clearImmediate = d;
        }
        function d(e) { delete l[e]; }
        function m(e) { if (c)
            setTimeout(m, 0, e);
        else {
            var t = l[e];
            if (t) {
                c = !0;
                try {
                    !function (e) { var t = e.callback, r = e.args; switch (r.length) {
                        case 0:
                            t();
                            break;
                        case 1:
                            t(r[0]);
                            break;
                        case 2:
                            t(r[0], r[1]);
                            break;
                        case 3:
                            t(r[0], r[1], r[2]);
                            break;
                        default: t.apply(n, r);
                    } }(t);
                }
                finally {
                    d(e), c = !1;
                }
            }
        } }
    }("undefined" == typeof self ? void 0 === e ? this : e : self); }).call(this, n(1), n(2)); }, function (e, t, n) {
        "use strict";
        n.r(t);
        var r = new (function () { function e() { this.listeners = [], this.unexpectedErrorHandler = function (e) { setTimeout(function () { if (e.stack)
            throw new Error(e.message + "\n\n" + e.stack); throw e; }, 0); }; } return e.prototype.emit = function (e) { this.listeners.forEach(function (t) { t(e); }); }, e.prototype.onUnexpectedError = function (e) { this.unexpectedErrorHandler(e), this.emit(e); }, e.prototype.onUnexpectedExternalError = function (e) { this.unexpectedErrorHandler(e); }, e; }());
        function i(e) { u(e) || r.onUnexpectedError(e); }
        function o(e) { return e instanceof Error ? { $isError: !0, name: e.name, message: e.message, stack: e.stacktrace || e.stack } : e; }
        var s = "Canceled";
        function u(e) { return e instanceof Error && e.name === s && e.message === s; }
        function a(e) { for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n]; return Array.isArray(e) ? (e.forEach(function (e) { return e && e.dispose(); }), []) : 0 === t.length ? e ? (e.dispose(), e) : void 0 : (a(e), a(t), []); }
        var l = function () { function e() { this._toDispose = [], this._lifecycle_disposable_isDisposed = !1; } return e.prototype.dispose = function () { this._lifecycle_disposable_isDisposed = !0, this._toDispose = a(this._toDispose); }, e.prototype._register = function (e) { return this._lifecycle_disposable_isDisposed ? (console.warn("Registering disposable on object that has already been disposed."), e.dispose()) : this._toDispose.push(e), e; }, e.None = Object.freeze({ dispose: function () { } }), e; }(), c = (function () { function e(e) { this.object = e; } e.prototype.dispose = function () { }; }(), n(0));
        Object.prototype.hasOwnProperty;
        function h(e) { for (var t = [], n = Object.getPrototypeOf(e); Object.prototype !== n;)
            t = t.concat(Object.getOwnPropertyNames(n)), n = Object.getPrototypeOf(n); return t; }
        var f, d = (f = function (e, t) { return (f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); })(e, t); }, function (e, t) { function n() { this.constructor = e; } f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }), m = "$initialize";
        var p = function () { function e(e) { this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = Object.create(null); } return e.prototype.setWorkerId = function (e) { this._workerId = e; }, e.prototype.sendMessage = function (e, t) { var n = this, r = String(++this._lastSentReq); return new Promise(function (i, o) { n._pendingReplies[r] = { resolve: i, reject: o }, n._send({ vsWorker: n._workerId, req: r, method: e, args: t }); }); }, e.prototype.handleMessage = function (e) { var t; try {
            t = JSON.parse(e);
        }
        catch (e) {
            return;
        } t && t.vsWorker && (-1 !== this._workerId && t.vsWorker !== this._workerId || this._handleMessage(t)); }, e.prototype._handleMessage = function (e) { var t = this; if (e.seq) {
            var n = e;
            if (!this._pendingReplies[n.seq])
                return void console.warn("Got reply to unknown seq");
            var r = this._pendingReplies[n.seq];
            if (delete this._pendingReplies[n.seq], n.err) {
                var i = n.err;
                return n.err.$isError && ((i = new Error).name = n.err.name, i.message = n.err.message, i.stack = n.err.stack), void r.reject(i);
            }
            r.resolve(n.res);
        }
        else {
            var s = e, u = s.req;
            this._handler.handleMessage(s.method, s.args).then(function (e) { t._send({ vsWorker: t._workerId, seq: u, res: e, err: void 0 }); }, function (e) { e.detail instanceof Error && (e.detail = o(e.detail)), t._send({ vsWorker: t._workerId, seq: u, res: void 0, err: o(e) }); });
        } }, e.prototype._send = function (e) { var t = JSON.stringify(e); this._handler.sendMessage(t); }, e; }(), g = (function (e) { function t(t, n) { var r = e.call(this) || this, i = null; r._worker = r._register(t.create("vs/base/common/worker/simpleWorker", function (e) { r._protocol.handleMessage(e); }, function (e) { i && i(e); })), r._protocol = new p({ sendMessage: function (e) { r._worker.postMessage(e); }, handleMessage: function (e, t) { return Promise.resolve(null); } }), r._protocol.setWorkerId(r._worker.getId()); var o = null; void 0 !== self.require && "function" == typeof self.require.getConfig ? o = self.require.getConfig() : void 0 !== self.requirejs && (o = self.requirejs.s.contexts._.config), r._onModuleLoaded = r._protocol.sendMessage(m, [r._worker.getId(), n, o]), r._lazyProxy = new Promise(function (e, t) { i = t, r._onModuleLoaded.then(function (t) { for (var n = {}, r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            n[o] = u(o, s);
        } e(n); }, function (e) { t(e), r._onError("Worker failed to load " + n, e); }); }); var s = function (e, t) { return r._request(e, t); }, u = function (e, t) { return function () { var n = Array.prototype.slice.call(arguments, 0); return t(e, n); }; }; return r; } d(t, e), t.prototype.getProxyObject = function () { return this._lazyProxy; }, t.prototype._request = function (e, t) { var n = this; return new Promise(function (r, i) { n._onModuleLoaded.then(function () { n._protocol.sendMessage(e, t).then(r, i); }, i); }); }, t.prototype._onError = function (e, t) { console.error(e), console.info(t); }; }(l), function () { function e(e, t) { var n = this; this._requestHandler = t, this._protocol = new p({ sendMessage: function (t) { e(t); }, handleMessage: function (e, t) { return n._handleMessage(e, t); } }); } return e.prototype.onmessage = function (e) { this._protocol.handleMessage(e); }, e.prototype._handleMessage = function (e, t) { if (e === m)
            return this.initialize(t[0], t[1], t[2]); if (!this._requestHandler || "function" != typeof this._requestHandler[e])
            return Promise.reject(new Error("Missing requestHandler or method: " + e)); try {
            return Promise.resolve(this._requestHandler[e].apply(this._requestHandler, t));
        }
        catch (e) {
            return Promise.reject(e);
        } }, e.prototype.initialize = function (e, t, n) { var r = this; if (this._protocol.setWorkerId(e), this._requestHandler) {
            for (var i = [], o = 0, s = h(this._requestHandler); o < s.length; o++) {
                var u = s[o];
                "function" == typeof this._requestHandler[u] && i.push(u);
            }
            return Promise.resolve(i);
        } return n && (void 0 !== n.baseUrl && delete n.baseUrl, void 0 !== n.paths && void 0 !== n.paths.vs && delete n.paths.vs, n.catchError = !0, self.require.config(n)), new Promise(function (e, n) { self.require([t], function () { for (var t = [], i = 0; i < arguments.length; i++)
            t[i] = arguments[i]; var o = t[0]; if (r._requestHandler = o.create(), r._requestHandler) {
            for (var s = [], u = 0, a = h(r._requestHandler); u < a.length; u++) {
                var l = a[u];
                "function" == typeof r._requestHandler[l] && s.push(l);
            }
            e(s);
        }
        else
            n(new Error("No RequestHandler!")); }, n); }); }, e; }());
        function _(e, t) { return function e(t, n, r, i, o) { if (i <= r)
            return; var s = r + (i - r) / 2 | 0; e(t, n, r, s, o); e(t, n, s + 1, i, o); if (n(t[s], t[s + 1]) <= 0)
            return; !function (e, t, n, r, i, o) { for (var s = n, u = r + 1, a = n; a <= i; a++)
            o[a] = e[a]; for (var a = n; a <= i; a++)
            s > r ? e[a] = o[u++] : u > i ? e[a] = o[s++] : t(o[u], o[s]) < 0 ? e[a] = o[u++] : e[a] = o[s++]; }(t, n, r, s, i, o); }(e, t, 0, e.length - 1, []), e; }
        var v = function () { function e(e, t, n, r) { this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = r; } return e.prototype.getOriginalEnd = function () { return this.originalStart + this.originalLength; }, e.prototype.getModifiedEnd = function () { return this.modifiedStart + this.modifiedLength; }, e; }();
        function y(e) { return { getLength: function () { return e.length; }, getElementAtIndex: function (t) { return e.charCodeAt(t); } }; }
        function C(e, t, n) { return new S(y(e), y(t)).ComputeDiff(n); }
        var b, L = function () { function e() { } return e.Assert = function (e, t) { if (!e)
            throw new Error(t); }, e; }(), N = function () { function e() { } return e.Copy = function (e, t, n, r, i) { for (var o = 0; o < i; o++)
            n[r + o] = e[t + o]; }, e; }(), E = function () { function e() { this.m_changes = [], this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE, this.m_originalCount = 0, this.m_modifiedCount = 0; } return e.prototype.MarkNextChange = function () { (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new v(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE; }, e.prototype.AddOriginalElement = function (e, t) { this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++; }, e.prototype.AddModifiedElement = function (e, t) { this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++; }, e.prototype.getChanges = function () { return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes; }, e.prototype.getReverseChanges = function () { return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes; }, e; }(), S = function () { function e(e, t, n) { void 0 === n && (n = null), this.OriginalSequence = e, this.ModifiedSequence = t, this.ContinueProcessingPredicate = n, this.m_forwardHistory = [], this.m_reverseHistory = []; } return e.prototype.ElementsAreEqual = function (e, t) { return this.OriginalSequence.getElementAtIndex(e) === this.ModifiedSequence.getElementAtIndex(t); }, e.prototype.OriginalElementsAreEqual = function (e, t) { return this.OriginalSequence.getElementAtIndex(e) === this.OriginalSequence.getElementAtIndex(t); }, e.prototype.ModifiedElementsAreEqual = function (e, t) { return this.ModifiedSequence.getElementAtIndex(e) === this.ModifiedSequence.getElementAtIndex(t); }, e.prototype.ComputeDiff = function (e) { return this._ComputeDiff(0, this.OriginalSequence.getLength() - 1, 0, this.ModifiedSequence.getLength() - 1, e); }, e.prototype._ComputeDiff = function (e, t, n, r, i) { var o = this.ComputeDiffRecursive(e, t, n, r, [!1]); return i ? this.PrettifyChanges(o) : o; }, e.prototype.ComputeDiffRecursive = function (e, t, n, r, i) { for (i[0] = !1; e <= t && n <= r && this.ElementsAreEqual(e, n);)
            e++, n++; for (; t >= e && r >= n && this.ElementsAreEqual(t, r);)
            t--, r--; if (e > t || n > r) {
            var o = void 0;
            return n <= r ? (L.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), o = [new v(e, 0, n, r - n + 1)]) : e <= t ? (L.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), o = [new v(e, t - e + 1, n, 0)]) : (L.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), L.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), o = []), o;
        } var s = [0], u = [0], a = this.ComputeRecursionPoint(e, t, n, r, s, u, i), l = s[0], c = u[0]; if (null !== a)
            return a; if (!i[0]) {
            var h = this.ComputeDiffRecursive(e, l, n, c, i), f = [];
            return f = i[0] ? [new v(l + 1, t - (l + 1) + 1, c + 1, r - (c + 1) + 1)] : this.ComputeDiffRecursive(l + 1, t, c + 1, r, i), this.ConcatenateChanges(h, f);
        } return [new v(e, t - e + 1, n, r - n + 1)]; }, e.prototype.WALKTRACE = function (e, t, n, r, i, o, s, u, a, l, c, h, f, d, m, p, g, _) { var y, C, b = null, L = new E, N = t, S = n, w = f[0] - p[0] - r, A = Number.MIN_VALUE, T = this.m_forwardHistory.length - 1; do {
            (C = w + e) === N || C < S && a[C - 1] < a[C + 1] ? (d = (c = a[C + 1]) - w - r, c < A && L.MarkNextChange(), A = c, L.AddModifiedElement(c + 1, d), w = C + 1 - e) : (d = (c = a[C - 1] + 1) - w - r, c < A && L.MarkNextChange(), A = c - 1, L.AddOriginalElement(c, d + 1), w = C - 1 - e), T >= 0 && (e = (a = this.m_forwardHistory[T])[0], N = 1, S = a.length - 1);
        } while (--T >= -1); if (y = L.getReverseChanges(), _[0]) {
            var M = f[0] + 1, P = p[0] + 1;
            if (null !== y && y.length > 0) {
                var O = y[y.length - 1];
                M = Math.max(M, O.getOriginalEnd()), P = Math.max(P, O.getModifiedEnd());
            }
            b = [new v(M, h - M + 1, P, m - P + 1)];
        }
        else {
            L = new E, N = o, S = s, w = f[0] - p[0] - u, A = Number.MAX_VALUE, T = g ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
            do {
                (C = w + i) === N || C < S && l[C - 1] >= l[C + 1] ? (d = (c = l[C + 1] - 1) - w - u, c > A && L.MarkNextChange(), A = c + 1, L.AddOriginalElement(c + 1, d + 1), w = C + 1 - i) : (d = (c = l[C - 1]) - w - u, c > A && L.MarkNextChange(), A = c, L.AddModifiedElement(c + 1, d + 1), w = C - 1 - i), T >= 0 && (i = (l = this.m_reverseHistory[T])[0], N = 1, S = l.length - 1);
            } while (--T >= -1);
            b = L.getChanges();
        } return this.ConcatenateChanges(y, b); }, e.prototype.ComputeRecursionPoint = function (e, t, n, r, i, o, s) { var u, a = 0, l = 0, c = 0, h = 0, f = 0, d = 0; e--, n--, i[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = []; var m, p, g = t - e + (r - n), _ = g + 1, y = new Array(_), C = new Array(_), b = r - n, L = t - e, E = e - n, S = t - r, w = (L - b) % 2 == 0; for (y[b] = e, C[L] = t, s[0] = !1, u = 1; u <= g / 2 + 1; u++) {
            var A = 0, T = 0;
            for (c = this.ClipDiagonalBound(b - u, u, b, _), h = this.ClipDiagonalBound(b + u, u, b, _), m = c; m <= h; m += 2) {
                for (l = (a = m === c || m < h && y[m - 1] < y[m + 1] ? y[m + 1] : y[m - 1] + 1) - (m - b) - E, p = a; a < t && l < r && this.ElementsAreEqual(a + 1, l + 1);)
                    a++, l++;
                if (y[m] = a, a + l > A + T && (A = a, T = l), !w && Math.abs(m - L) <= u - 1 && a >= C[m])
                    return i[0] = a, o[0] = l, p <= C[m] && u <= 1448 ? this.WALKTRACE(b, c, h, E, L, f, d, S, y, C, a, t, i, l, r, o, w, s) : null;
            }
            var M = (A - e + (T - n) - u) / 2;
            if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(A, this.OriginalSequence, M))
                return s[0] = !0, i[0] = A, o[0] = T, M > 0 && u <= 1448 ? this.WALKTRACE(b, c, h, E, L, f, d, S, y, C, a, t, i, l, r, o, w, s) : [new v(++e, t - e + 1, ++n, r - n + 1)];
            for (f = this.ClipDiagonalBound(L - u, u, L, _), d = this.ClipDiagonalBound(L + u, u, L, _), m = f; m <= d; m += 2) {
                for (l = (a = m === f || m < d && C[m - 1] >= C[m + 1] ? C[m + 1] - 1 : C[m - 1]) - (m - L) - S, p = a; a > e && l > n && this.ElementsAreEqual(a, l);)
                    a--, l--;
                if (C[m] = a, w && Math.abs(m - b) <= u && a <= y[m])
                    return i[0] = a, o[0] = l, p >= y[m] && u <= 1448 ? this.WALKTRACE(b, c, h, E, L, f, d, S, y, C, a, t, i, l, r, o, w, s) : null;
            }
            if (u <= 1447) {
                var P = new Array(h - c + 2);
                P[0] = b - c + 1, N.Copy(y, c, P, 1, h - c + 1), this.m_forwardHistory.push(P), (P = new Array(d - f + 2))[0] = L - f + 1, N.Copy(C, f, P, 1, d - f + 1), this.m_reverseHistory.push(P);
            }
        } return this.WALKTRACE(b, c, h, E, L, f, d, S, y, C, a, t, i, l, r, o, w, s); }, e.prototype.PrettifyChanges = function (e) { for (var t = 0; t < e.length; t++) {
            for (var n = e[t], r = t < e.length - 1 ? e[t + 1].originalStart : this.OriginalSequence.getLength(), i = t < e.length - 1 ? e[t + 1].modifiedStart : this.ModifiedSequence.getLength(), o = n.originalLength > 0, s = n.modifiedLength > 0; n.originalStart + n.originalLength < r && n.modifiedStart + n.modifiedLength < i && (!o || this.OriginalElementsAreEqual(n.originalStart, n.originalStart + n.originalLength)) && (!s || this.ModifiedElementsAreEqual(n.modifiedStart, n.modifiedStart + n.modifiedLength));)
                n.originalStart++, n.modifiedStart++;
            var u = [null];
            t < e.length - 1 && this.ChangesOverlap(e[t], e[t + 1], u) && (e[t] = u[0], e.splice(t + 1, 1), t--);
        } for (t = e.length - 1; t >= 0; t--) {
            n = e[t], r = 0, i = 0;
            if (t > 0) {
                var a = e[t - 1];
                a.originalLength > 0 && (r = a.originalStart + a.originalLength), a.modifiedLength > 0 && (i = a.modifiedStart + a.modifiedLength);
            }
            o = n.originalLength > 0, s = n.modifiedLength > 0;
            for (var l = 0, c = this._boundaryScore(n.originalStart, n.originalLength, n.modifiedStart, n.modifiedLength), h = 1;; h++) {
                var f = n.originalStart - h, d = n.modifiedStart - h;
                if (f < r || d < i)
                    break;
                if (o && !this.OriginalElementsAreEqual(f, f + n.originalLength))
                    break;
                if (s && !this.ModifiedElementsAreEqual(d, d + n.modifiedLength))
                    break;
                var m = this._boundaryScore(f, n.originalLength, d, n.modifiedLength);
                m > c && (c = m, l = h);
            }
            n.originalStart -= l, n.modifiedStart -= l;
        } return e; }, e.prototype._OriginalIsBoundary = function (e) { if (e <= 0 || e >= this.OriginalSequence.getLength() - 1)
            return !0; var t = this.OriginalSequence.getElementAtIndex(e); return "string" == typeof t && /^\s*$/.test(t); }, e.prototype._OriginalRegionIsBoundary = function (e, t) { if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1))
            return !0; if (t > 0) {
            var n = e + t;
            if (this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n))
                return !0;
        } return !1; }, e.prototype._ModifiedIsBoundary = function (e) { if (e <= 0 || e >= this.ModifiedSequence.getLength() - 1)
            return !0; var t = this.ModifiedSequence.getElementAtIndex(e); return "string" == typeof t && /^\s*$/.test(t); }, e.prototype._ModifiedRegionIsBoundary = function (e, t) { if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1))
            return !0; if (t > 0) {
            var n = e + t;
            if (this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n))
                return !0;
        } return !1; }, e.prototype._boundaryScore = function (e, t, n, r) { return (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) + (this._ModifiedRegionIsBoundary(n, r) ? 1 : 0); }, e.prototype.ConcatenateChanges = function (e, t) { var n = []; if (0 === e.length || 0 === t.length)
            return t.length > 0 ? t : e; if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
            var r = new Array(e.length + t.length - 1);
            return N.Copy(e, 0, r, 0, e.length - 1), r[e.length - 1] = n[0], N.Copy(t, 1, r, e.length, t.length - 1), r;
        } r = new Array(e.length + t.length); return N.Copy(e, 0, r, 0, e.length), N.Copy(t, 0, r, e.length, t.length), r; }, e.prototype.ChangesOverlap = function (e, t, n) { if (L.Assert(e.originalStart <= t.originalStart, "Left change is not less than or equal to right change"), L.Assert(e.modifiedStart <= t.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= t.originalStart || e.modifiedStart + e.modifiedLength >= t.modifiedStart) {
            var r = e.originalStart, i = e.originalLength, o = e.modifiedStart, s = e.modifiedLength;
            return e.originalStart + e.originalLength >= t.originalStart && (i = t.originalStart + t.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= t.modifiedStart && (s = t.modifiedStart + t.modifiedLength - e.modifiedStart), n[0] = new v(r, i, o, s), !0;
        } return n[0] = null, !1; }, e.prototype.ClipDiagonalBound = function (e, t, n, r) { if (e >= 0 && e < r)
            return e; var i = t % 2 == 0; return e < 0 ? i === (n % 2 == 0) ? 0 : 1 : i === ((r - n - 1) % 2 == 0) ? r - 1 : r - 2; }, e; }(), w = function () { var e = function (t, n) { return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); })(t, n); }; return function (t, n) { function r() { this.constructor = t; } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r); }; }(), A = { done: !0, value: void 0 };
        !function (e) { var t = { next: function () { return A; } }; function n(e, t) { for (var n = e.next(); !n.done; n = e.next())
            t(n.value); } e.empty = function () { return t; }, e.fromArray = function (e, t, n) { return void 0 === t && (t = 0), void 0 === n && (n = e.length), { next: function () { return t >= n ? A : { done: !1, value: e[t++] }; } }; }, e.from = function (t) { return t ? Array.isArray(t) ? e.fromArray(t) : t : e.empty(); }, e.map = function (e, t) { return { next: function () { var n = e.next(); return n.done ? A : { done: !1, value: t(n.value) }; } }; }, e.filter = function (e, t) { return { next: function () { for (;;) {
                var n = e.next();
                if (n.done)
                    return A;
                if (t(n.value))
                    return { done: !1, value: n.value };
            } } }; }, e.forEach = n, e.collect = function (e) { var t = []; return n(e, function (e) { return t.push(e); }), t; }; }(b || (b = {}));
        (function (e) { function t(t, n, r, i) { return void 0 === n && (n = 0), void 0 === r && (r = t.length), void 0 === i && (i = n - 1), e.call(this, t, n, r, i) || this; } w(t, e), t.prototype.current = function () { return e.prototype.current.call(this); }, t.prototype.previous = function () { return this.index = Math.max(this.index - 1, this.start - 1), this.current(); }, t.prototype.first = function () { return this.index = this.start, this.current(); }, t.prototype.last = function () { return this.index = this.end - 1, this.current(); }, t.prototype.parent = function () { return null; }; })(function () { function e(e, t, n, r) { void 0 === t && (t = 0), void 0 === n && (n = e.length), void 0 === r && (r = t - 1), this.items = e, this.start = t, this.end = n, this.index = r; } return e.prototype.next = function () { return this.index = Math.min(this.index + 1, this.end), this.current(); }, e.prototype.current = function () { return this.index === this.start - 1 || this.index === this.end ? null : this.items[this.index]; }, e; }()), function () { function e(e, t) { this.iterator = e, this.fn = t; } e.prototype.next = function () { return this.fn(this.iterator.next()); }; }();
        var T, M = function () { var e = function (t, n) { return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); })(t, n); }; return function (t, n) { function r() { this.constructor = t; } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r); }; }(), P = /^\w[\w\d+.-]*$/, O = /^\//, x = /^\/\//, I = !0;
        var R = "", k = "/", U = /^(([^:\/?#]+?):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, F = function () { function e(e, t, n, r, i, o) { "object" == typeof e ? (this.scheme = e.scheme || R, this.authority = e.authority || R, this.path = e.path || R, this.query = e.query || R, this.fragment = e.fragment || R) : (this.scheme = e || R, this.authority = t || R, this.path = function (e, t) { switch (e) {
            case "https":
            case "http":
            case "file": t ? t[0] !== k && (t = k + t) : t = k;
        } return t; }(this.scheme, n || R), this.query = r || R, this.fragment = i || R, function (e, t) { if (!e.scheme) {
            if (t || I)
                throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "' + e.authority + '", path: "' + e.path + '", query: "' + e.query + '", fragment: "' + e.fragment + '"}');
            console.warn('[UriError]: Scheme is missing: {scheme: "", authority: "' + e.authority + '", path: "' + e.path + '", query: "' + e.query + '", fragment: "' + e.fragment + '"}');
        } if (e.scheme && !P.test(e.scheme))
            throw new Error("[UriError]: Scheme contains illegal characters."); if (e.path)
            if (e.authority) {
                if (!O.test(e.path))
                    throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
            }
            else if (x.test(e.path))
                throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'); }(this, o)); } return e.isUri = function (t) { return t instanceof e || !!t && ("string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme && "function" == typeof t.fsPath && "function" == typeof t.with && "function" == typeof t.toString); }, Object.defineProperty(e.prototype, "fsPath", { get: function () { return B(this); }, enumerable: !0, configurable: !0 }), e.prototype.with = function (e) { if (!e)
            return this; var t = e.scheme, n = e.authority, r = e.path, i = e.query, o = e.fragment; return void 0 === t ? t = this.scheme : null === t && (t = R), void 0 === n ? n = this.authority : null === n && (n = R), void 0 === r ? r = this.path : null === r && (r = R), void 0 === i ? i = this.query : null === i && (i = R), void 0 === o ? o = this.fragment : null === o && (o = R), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new D(t, n, r, i, o); }, e.parse = function (e, t) { void 0 === t && (t = !1); var n = U.exec(e); return n ? new D(n[2] || R, decodeURIComponent(n[4] || R), decodeURIComponent(n[5] || R), decodeURIComponent(n[7] || R), decodeURIComponent(n[9] || R), t) : new D(R, R, R, R, R); }, e.file = function (e) { var t = R; if (c.c && (e = e.replace(/\\/g, k)), e[0] === k && e[1] === k) {
            var n = e.indexOf(k, 2);
            -1 === n ? (t = e.substring(2), e = k) : (t = e.substring(2, n), e = e.substring(n) || k);
        } return new D("file", t, e, R, R); }, e.from = function (e) { return new D(e.scheme, e.authority, e.path, e.query, e.fragment); }, e.prototype.toString = function (e) { return void 0 === e && (e = !1), Y(this, e); }, e.prototype.toJSON = function () { return this; }, e.revive = function (t) { if (t) {
            if (t instanceof e)
                return t;
            var n = new D(t);
            return n._fsPath = t.fsPath, n._formatted = t.external, n;
        } return t; }, e; }(), D = function (e) { function t() { var t = null !== e && e.apply(this, arguments) || this; return t._formatted = null, t._fsPath = null, t; } return M(t, e), Object.defineProperty(t.prototype, "fsPath", { get: function () { return this._fsPath || (this._fsPath = B(this)), this._fsPath; }, enumerable: !0, configurable: !0 }), t.prototype.toString = function (e) { return void 0 === e && (e = !1), e ? Y(this, !0) : (this._formatted || (this._formatted = Y(this, !1)), this._formatted); }, t.prototype.toJSON = function () { var e = { $mid: 1 }; return this._fsPath && (e.fsPath = this._fsPath), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e; }, t; }(F), K = ((T = {})[58] = "%3A", T[47] = "%2F", T[63] = "%3F", T[35] = "%23", T[91] = "%5B", T[93] = "%5D", T[64] = "%40", T[33] = "%21", T[36] = "%24", T[38] = "%26", T[39] = "%27", T[40] = "%28", T[41] = "%29", T[42] = "%2A", T[43] = "%2B", T[44] = "%2C", T[59] = "%3B", T[61] = "%3D", T[32] = "%20", T);
        function q(e, t) { for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
            var o = e.charCodeAt(i);
            if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || 45 === o || 46 === o || 95 === o || 126 === o || t && 47 === o)
                -1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), void 0 !== n && (n += e.charAt(i));
            else {
                void 0 === n && (n = e.substr(0, i));
                var s = K[o];
                void 0 !== s ? (-1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), n += s) : -1 === r && (r = i);
            }
        } return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e; }
        function V(e) { for (var t = void 0, n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            35 === r || 63 === r ? (void 0 === t && (t = e.substr(0, n)), t += K[r]) : void 0 !== t && (t += e[n]);
        } return void 0 !== t ? t : e; }
        function B(e) { var t; return t = e.authority && e.path.length > 1 && "file" === e.scheme ? "//" + e.authority + e.path : 47 === e.path.charCodeAt(0) && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && 58 === e.path.charCodeAt(2) ? e.path[1].toLowerCase() + e.path.substr(2) : e.path, c.c && (t = t.replace(/\//g, "\\")), t; }
        function Y(e, t) { var n = t ? V : q, r = "", i = e.scheme, o = e.authority, s = e.path, u = e.query, a = e.fragment; if (i && (r += i, r += ":"), (o || "file" === i) && (r += k, r += k), o) {
            var l = o.indexOf("@");
            if (-1 !== l) {
                var c = o.substr(0, l);
                o = o.substr(l + 1), -1 === (l = c.indexOf(":")) ? r += n(c, !1) : (r += n(c.substr(0, l), !1), r += ":", r += n(c.substr(l + 1), !1)), r += "@";
            }
            -1 === (l = (o = o.toLowerCase()).indexOf(":")) ? r += n(o, !1) : (r += n(o.substr(0, l), !1), r += o.substr(l));
        } if (s) {
            if (s.length >= 3 && 47 === s.charCodeAt(0) && 58 === s.charCodeAt(2))
                (h = s.charCodeAt(1)) >= 65 && h <= 90 && (s = "/" + String.fromCharCode(h + 32) + ":" + s.substr(3));
            else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
                var h;
                (h = s.charCodeAt(0)) >= 65 && h <= 90 && (s = String.fromCharCode(h + 32) + ":" + s.substr(2));
            }
            r += n(s, !0);
        } return u && (r += "?", r += n(u, !1)), a && (r += "#", r += t ? a : q(a, !1)), r; }
        var j = function () { function e(e, t) { this.lineNumber = e, this.column = t; } return e.prototype.with = function (t, n) { return void 0 === t && (t = this.lineNumber), void 0 === n && (n = this.column), t === this.lineNumber && n === this.column ? this : new e(t, n); }, e.prototype.delta = function (e, t) { return void 0 === e && (e = 0), void 0 === t && (t = 0), this.with(this.lineNumber + e, this.column + t); }, e.prototype.equals = function (t) { return e.equals(this, t); }, e.equals = function (e, t) { return !e && !t || !!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column; }, e.prototype.isBefore = function (t) { return e.isBefore(this, t); }, e.isBefore = function (e, t) { return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column < t.column; }, e.prototype.isBeforeOrEqual = function (t) { return e.isBeforeOrEqual(this, t); }, e.isBeforeOrEqual = function (e, t) { return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column <= t.column; }, e.compare = function (e, t) { var n = 0 | e.lineNumber, r = 0 | t.lineNumber; return n === r ? (0 | e.column) - (0 | t.column) : n - r; }, e.prototype.clone = function () { return new e(this.lineNumber, this.column); }, e.prototype.toString = function () { return "(" + this.lineNumber + "," + this.column + ")"; }, e.lift = function (t) { return new e(t.lineNumber, t.column); }, e.isIPosition = function (e) { return e && "number" == typeof e.lineNumber && "number" == typeof e.column; }, e; }(), W = function () { function e(e, t, n, r) { e > n || e === n && t > r ? (this.startLineNumber = n, this.startColumn = r, this.endLineNumber = e, this.endColumn = t) : (this.startLineNumber = e, this.startColumn = t, this.endLineNumber = n, this.endColumn = r); } return e.prototype.isEmpty = function () { return e.isEmpty(this); }, e.isEmpty = function (e) { return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn; }, e.prototype.containsPosition = function (t) { return e.containsPosition(this, t); }, e.containsPosition = function (e, t) { return !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && (!(t.lineNumber === e.startLineNumber && t.column < e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column > e.endColumn)); }, e.prototype.containsRange = function (t) { return e.containsRange(this, t); }, e.containsRange = function (e, t) { return !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && (!(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && (!(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn))); }, e.prototype.plusRange = function (t) { return e.plusRange(this, t); }, e.plusRange = function (t, n) { var r, i, o, s; return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (o = n.endLineNumber, s = n.endColumn) : n.endLineNumber === t.endLineNumber ? (o = n.endLineNumber, s = Math.max(n.endColumn, t.endColumn)) : (o = t.endLineNumber, s = t.endColumn), new e(r, i, o, s); }, e.prototype.intersectRanges = function (t) { return e.intersectRanges(this, t); }, e.intersectRanges = function (t, n) { var r = t.startLineNumber, i = t.startColumn, o = t.endLineNumber, s = t.endColumn, u = n.startLineNumber, a = n.startColumn, l = n.endLineNumber, c = n.endColumn; return r < u ? (r = u, i = a) : r === u && (i = Math.max(i, a)), o > l ? (o = l, s = c) : o === l && (s = Math.min(s, c)), r > o ? null : r === o && i > s ? null : new e(r, i, o, s); }, e.prototype.equalsRange = function (t) { return e.equalsRange(this, t); }, e.equalsRange = function (e, t) { return !!e && !!t && e.startLineNumber === t.startLineNumber && e.startColumn === t.startColumn && e.endLineNumber === t.endLineNumber && e.endColumn === t.endColumn; }, e.prototype.getEndPosition = function () { return new j(this.endLineNumber, this.endColumn); }, e.prototype.getStartPosition = function () { return new j(this.startLineNumber, this.startColumn); }, e.prototype.toString = function () { return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]"; }, e.prototype.setEndPosition = function (t, n) { return new e(this.startLineNumber, this.startColumn, t, n); }, e.prototype.setStartPosition = function (t, n) { return new e(t, n, this.endLineNumber, this.endColumn); }, e.prototype.collapseToStart = function () { return e.collapseToStart(this); }, e.collapseToStart = function (t) { return new e(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn); }, e.fromPositions = function (t, n) { return void 0 === n && (n = t), new e(t.lineNumber, t.column, n.lineNumber, n.column); }, e.lift = function (t) { return t ? new e(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null; }, e.isIRange = function (e) { return e && "number" == typeof e.startLineNumber && "number" == typeof e.startColumn && "number" == typeof e.endLineNumber && "number" == typeof e.endColumn; }, e.areIntersectingOrTouching = function (e, t) { return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn); }, e.areIntersecting = function (e, t) { return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn <= t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn <= e.startColumn); }, e.compareRangesUsingStarts = function (e, t) { if (e && t) {
            var n = 0 | e.startLineNumber, r = 0 | t.startLineNumber;
            if (n === r) {
                var i = 0 | e.startColumn, o = 0 | t.startColumn;
                if (i === o) {
                    var s = 0 | e.endLineNumber, u = 0 | t.endLineNumber;
                    return s === u ? (0 | e.endColumn) - (0 | t.endColumn) : s - u;
                }
                return i - o;
            }
            return n - r;
        } return (e ? 1 : 0) - (t ? 1 : 0); }, e.compareRangesUsingEnds = function (e, t) { return e.endLineNumber === t.endLineNumber ? e.endColumn === t.endColumn ? e.startLineNumber === t.startLineNumber ? e.startColumn - t.startColumn : e.startLineNumber - t.startLineNumber : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber; }, e.spansMultipleLines = function (e) { return e.endLineNumber > e.startLineNumber; }, e; }();
        String.fromCharCode(65279);
        var H = 5e3, G = 3;
        function z(e, t, n, r) { return new S(e, t, n).ComputeDiff(r); }
        var Q = function () { function e(t) { for (var n = [], r = [], i = 0, o = t.length; i < o; i++)
            n[i] = e._getFirstNonBlankColumn(t[i], 1), r[i] = e._getLastNonBlankColumn(t[i], 1); this._lines = t, this._startColumns = n, this._endColumns = r; } return e.prototype.getLength = function () { return this._lines.length; }, e.prototype.getElementAtIndex = function (e) { return this._lines[e].substring(this._startColumns[e] - 1, this._endColumns[e] - 1); }, e.prototype.getStartLineNumber = function (e) { return e + 1; }, e.prototype.getEndLineNumber = function (e) { return e + 1; }, e._getFirstNonBlankColumn = function (e, t) { var n = function (e) { for (var t = 0, n = e.length; t < n; t++) {
            var r = e.charCodeAt(t);
            if (32 !== r && 9 !== r)
                return t;
        } return -1; }(e); return -1 === n ? t : n + 1; }, e._getLastNonBlankColumn = function (e, t) { var n = function (e, t) { void 0 === t && (t = e.length - 1); for (var n = t; n >= 0; n--) {
            var r = e.charCodeAt(n);
            if (32 !== r && 9 !== r)
                return n;
        } return -1; }(e); return -1 === n ? t : n + 2; }, e.prototype.getCharSequence = function (e, t, n) { for (var r = [], i = [], o = [], s = 0, u = t; u <= n; u++)
            for (var a = this._lines[u], l = e ? this._startColumns[u] : 1, c = e ? this._endColumns[u] : a.length + 1, h = l; h < c; h++)
                r[s] = a.charCodeAt(h - 1), i[s] = u + 1, o[s] = h, s++; return new X(r, i, o); }, e; }(), X = function () { function e(e, t, n) { this._charCodes = e, this._lineNumbers = t, this._columns = n; } return e.prototype.getLength = function () { return this._charCodes.length; }, e.prototype.getElementAtIndex = function (e) { return this._charCodes[e]; }, e.prototype.getStartLineNumber = function (e) { return this._lineNumbers[e]; }, e.prototype.getStartColumn = function (e) { return this._columns[e]; }, e.prototype.getEndLineNumber = function (e) { return this._lineNumbers[e]; }, e.prototype.getEndColumn = function (e) { return this._columns[e] + 1; }, e; }(), $ = function () { function e(e, t, n, r, i, o, s, u) { this.originalStartLineNumber = e, this.originalStartColumn = t, this.originalEndLineNumber = n, this.originalEndColumn = r, this.modifiedStartLineNumber = i, this.modifiedStartColumn = o, this.modifiedEndLineNumber = s, this.modifiedEndColumn = u; } return e.createFromDiffChange = function (t, n, r) { var i, o, s, u, a, l, c, h; return 0 === t.originalLength ? (i = 0, o = 0, s = 0, u = 0) : (i = n.getStartLineNumber(t.originalStart), o = n.getStartColumn(t.originalStart), s = n.getEndLineNumber(t.originalStart + t.originalLength - 1), u = n.getEndColumn(t.originalStart + t.originalLength - 1)), 0 === t.modifiedLength ? (a = 0, l = 0, c = 0, h = 0) : (a = r.getStartLineNumber(t.modifiedStart), l = r.getStartColumn(t.modifiedStart), c = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), h = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1)), new e(i, o, s, u, a, l, c, h); }, e; }();
        var J = function () { function e(e, t, n, r, i) { this.originalStartLineNumber = e, this.originalEndLineNumber = t, this.modifiedStartLineNumber = n, this.modifiedEndLineNumber = r, this.charChanges = i; } return e.createFromDiffResult = function (t, n, r, i, o, s, u) { var a, l, c, h, f = void 0; if (0 === n.originalLength ? (a = r.getStartLineNumber(n.originalStart) - 1, l = 0) : (a = r.getStartLineNumber(n.originalStart), l = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), 0 === n.modifiedLength ? (c = i.getStartLineNumber(n.modifiedStart) - 1, h = 0) : (c = i.getStartLineNumber(n.modifiedStart), h = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), s && 0 !== n.originalLength && 0 !== n.modifiedLength && o()) {
            var d = r.getCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), m = i.getCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1), p = z(d, m, o, !0);
            u && (p = function (e) { if (e.length <= 1)
                return e; for (var t = [e[0]], n = t[0], r = 1, i = e.length; r < i; r++) {
                var o = e[r], s = o.originalStart - (n.originalStart + n.originalLength), u = o.modifiedStart - (n.modifiedStart + n.modifiedLength);
                Math.min(s, u) < G ? (n.originalLength = o.originalStart + o.originalLength - n.originalStart, n.modifiedLength = o.modifiedStart + o.modifiedLength - n.modifiedStart) : (t.push(o), n = o);
            } return t; }(p)), f = [];
            for (var g = 0, _ = p.length; g < _; g++)
                f.push($.createFromDiffChange(p[g], d, m));
        } return new e(a, l, c, h, f); }, e; }(), Z = function () { function e(e, t, n) { this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.maximumRunTimeMs = H, this.originalLines = e, this.modifiedLines = t, this.original = new Q(e), this.modified = new Q(t); } return e.prototype.computeDiff = function () { if (1 === this.original.getLength() && 0 === this.original.getElementAtIndex(0).length)
            return [{ originalStartLineNumber: 1, originalEndLineNumber: 1, modifiedStartLineNumber: 1, modifiedEndLineNumber: this.modified.getLength(), charChanges: [{ modifiedEndColumn: 0, modifiedEndLineNumber: 0, modifiedStartColumn: 0, modifiedStartLineNumber: 0, originalEndColumn: 0, originalEndLineNumber: 0, originalStartColumn: 0, originalStartLineNumber: 0 }] }]; if (1 === this.modified.getLength() && 0 === this.modified.getElementAtIndex(0).length)
            return [{ originalStartLineNumber: 1, originalEndLineNumber: this.original.getLength(), modifiedStartLineNumber: 1, modifiedEndLineNumber: 1, charChanges: [{ modifiedEndColumn: 0, modifiedEndLineNumber: 0, modifiedStartColumn: 0, modifiedStartLineNumber: 0, originalEndColumn: 0, originalEndLineNumber: 0, originalStartColumn: 0, originalStartLineNumber: 0 }] }]; this.computationStartTime = (new Date).getTime(); var e = z(this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldMakePrettyDiff); if (this.shouldIgnoreTrimWhitespace) {
            for (var t = [], n = 0, r = e.length; n < r; n++)
                t.push(J.createFromDiffResult(this.shouldIgnoreTrimWhitespace, e[n], this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
            return t;
        } for (var i = [], o = 0, s = 0, u = (n = -1, e.length); n < u; n++) {
            for (var a = n + 1 < u ? e[n + 1] : null, l = a ? a.originalStart : this.originalLines.length, c = a ? a.modifiedStart : this.modifiedLines.length; o < l && s < c;) {
                var h = this.originalLines[o], f = this.modifiedLines[s];
                if (h !== f) {
                    for (var d = Q._getFirstNonBlankColumn(h, 1), m = Q._getFirstNonBlankColumn(f, 1); d > 1 && m > 1;) {
                        if (h.charCodeAt(d - 2) !== f.charCodeAt(m - 2))
                            break;
                        d--, m--;
                    }
                    (d > 1 || m > 1) && this._pushTrimWhitespaceCharChange(i, o + 1, 1, d, s + 1, 1, m);
                    for (var p = Q._getLastNonBlankColumn(h, 1), g = Q._getLastNonBlankColumn(f, 1), _ = h.length + 1, v = f.length + 1; p < _ && g < v;) {
                        if (h.charCodeAt(p - 1) !== h.charCodeAt(g - 1))
                            break;
                        p++, g++;
                    }
                    (p < _ || g < v) && this._pushTrimWhitespaceCharChange(i, o + 1, p, _, s + 1, g, v);
                }
                o++, s++;
            }
            a && (i.push(J.createFromDiffResult(this.shouldIgnoreTrimWhitespace, a, this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), o += a.originalLength, s += a.modifiedLength);
        } return i; }, e.prototype._pushTrimWhitespaceCharChange = function (e, t, n, r, i, o, s) { if (!this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s)) {
            var u = void 0;
            this.shouldComputeCharChanges && (u = [new $(t, n, t, r, i, o, i, s)]), e.push(new J(t, t, i, i, u));
        } }, e.prototype._mergeTrimWhitespaceCharChange = function (e, t, n, r, i, o, s) { var u = e.length; if (0 === u)
            return !1; var a = e[u - 1]; return 0 !== a.originalEndLineNumber && 0 !== a.modifiedEndLineNumber && (a.originalEndLineNumber + 1 === t && a.modifiedEndLineNumber + 1 === i && (a.originalEndLineNumber = t, a.modifiedEndLineNumber = i, this.shouldComputeCharChanges && a.charChanges.push(new $(t, n, t, r, i, o, i, s)), !0)); }, e.prototype._continueProcessingPredicate = function () { return 0 === this.maximumRunTimeMs || (new Date).getTime() - this.computationStartTime < this.maximumRunTimeMs; }, e; }(), ee = function () { function e(e, t, n) { for (var r = new Uint8Array(e * t), i = 0, o = e * t; i < o; i++)
            r[i] = n; this._data = r, this.rows = e, this.cols = t; } return e.prototype.get = function (e, t) { return this._data[e * this.cols + t]; }, e.prototype.set = function (e, t, n) { this._data[e * this.cols + t] = n; }, e; }();
        function te(e) { return e < 0 ? 0 : e > 255 ? 255 : 0 | e; }
        function ne(e) { return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e; }
        var re = function () { return function (e, t) { this.index = e, this.remainder = t; }; }(), ie = function () { function e(e) { this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1; } return e.prototype.getCount = function () { return this.values.length; }, e.prototype.insertValues = function (e, t) { e = ne(e); var n = this.values, r = this.prefixSum, i = t.length; return 0 !== i && (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0); }, e.prototype.changeValue = function (e, t) { return e = ne(e), t = ne(t), this.values[e] !== t && (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0); }, e.prototype.removeValues = function (e, t) { e = ne(e), t = ne(t); var n = this.values, r = this.prefixSum; if (e >= n.length)
            return !1; var i = n.length - e; return t >= i && (t = i), 0 !== t && (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0); }, e.prototype.getTotalValue = function () { return 0 === this.values.length ? 0 : this._getAccumulatedValue(this.values.length - 1); }, e.prototype.getAccumulatedValue = function (e) { return e < 0 ? 0 : (e = ne(e), this._getAccumulatedValue(e)); }, e.prototype._getAccumulatedValue = function (e) { if (e <= this.prefixSumValidIndex[0])
            return this.prefixSum[e]; var t = this.prefixSumValidIndex[0] + 1; 0 === t && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1); for (var n = t; n <= e; n++)
            this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n]; return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e]; }, e.prototype.getIndexOf = function (e) { e = Math.floor(e), this.getTotalValue(); for (var t = 0, n = this.values.length - 1, r = 0, i = 0, o = 0; t <= n;)
            if (r = t + (n - t) / 2 | 0, e < (o = (i = this.prefixSum[r]) - this.values[r]))
                n = r - 1;
            else {
                if (!(e >= i))
                    break;
                t = r + 1;
            } return new re(r, e - o); }, e; }(), oe = (function () { function e(e) { this._cacheAccumulatedValueStart = 0, this._cache = null, this._actual = new ie(e), this._bustCache(); } e.prototype._bustCache = function () { this._cacheAccumulatedValueStart = 0, this._cache = null; }, e.prototype.insertValues = function (e, t) { this._actual.insertValues(e, t) && this._bustCache(); }, e.prototype.changeValue = function (e, t) { this._actual.changeValue(e, t) && this._bustCache(); }, e.prototype.removeValues = function (e, t) { this._actual.removeValues(e, t) && this._bustCache(); }, e.prototype.getTotalValue = function () { return this._actual.getTotalValue(); }, e.prototype.getAccumulatedValue = function (e) { return this._actual.getAccumulatedValue(e); }, e.prototype.getIndexOf = function (e) { if (e = Math.floor(e), null !== this._cache) {
            var t = e - this._cacheAccumulatedValueStart;
            if (t >= 0 && t < this._cache.length)
                return this._cache[t];
        } return this._actual.getIndexOf(e); }, e.prototype.warmUpCache = function (e, t) { for (var n = [], r = e; r <= t; r++)
            n[r - e] = this.getIndexOf(r); this._cache = n, this._cacheAccumulatedValueStart = e; }; }(), function () { function e(e, t, n, r) { this._uri = e, this._lines = t, this._eol = n, this._versionId = r, this._lineStarts = null; } return e.prototype.dispose = function () { this._lines.length = 0; }, e.prototype.getText = function () { return this._lines.join(this._eol); }, e.prototype.onEvents = function (e) { e.eol && e.eol !== this._eol && (this._eol = e.eol, this._lineStarts = null); for (var t = 0, n = e.changes; t < n.length; t++) {
            var r = n[t];
            this._acceptDeleteRange(r.range), this._acceptInsertText(new j(r.range.startLineNumber, r.range.startColumn), r.text);
        } this._versionId = e.versionId; }, e.prototype._ensureLineStarts = function () { if (!this._lineStarts) {
            for (var e = this._eol.length, t = this._lines.length, n = new Uint32Array(t), r = 0; r < t; r++)
                n[r] = this._lines[r].length + e;
            this._lineStarts = new ie(n);
        } }, e.prototype._setLineText = function (e, t) { this._lines[e] = t, this._lineStarts && this._lineStarts.changeValue(e, this._lines[e].length + this._eol.length); }, e.prototype._acceptDeleteRange = function (e) { if (e.startLineNumber !== e.endLineNumber)
            this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);
        else {
            if (e.startColumn === e.endColumn)
                return;
            this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1));
        } }, e.prototype._acceptInsertText = function (e, t) { if (0 !== t.length) {
            var n = t.split(/\r\n|\r|\n/);
            if (1 !== n.length) {
                n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
                for (var r = new Uint32Array(n.length - 1), i = 1; i < n.length; i++)
                    this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
                this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r);
            }
            else
                this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
        } }, e; }()), se = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
        var ue = function (e) { void 0 === e && (e = ""); for (var t = "(-?\\d*\\.\\d\\w*)|([^", n = 0, r = se; n < r.length; n++) {
            var i = r[n];
            e.indexOf(i) >= 0 || (t += "\\" + i);
        } return t += "\\s]+)", new RegExp(t, "g"); }();
        var ae = function () { function e(t) { var n = te(t); this._defaultValue = n, this._asciiMap = e._createAsciiMap(n), this._map = new Map; } return e._createAsciiMap = function (e) { for (var t = new Uint8Array(256), n = 0; n < 256; n++)
            t[n] = e; return t; }, e.prototype.set = function (e, t) { var n = te(t); e >= 0 && e < 256 ? this._asciiMap[e] = n : this._map.set(e, n); }, e.prototype.get = function (e) { return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue; }, e; }(), le = (function () { function e() { this._actual = new ae(0); } e.prototype.add = function (e) { this._actual.set(e, 1); }, e.prototype.has = function (e) { return 1 === this._actual.get(e); }; }(), function () { function e(e) { for (var t = 0, n = 0, r = 0, i = e.length; r < i; r++) {
            var o = e[r], s = o[0];
            (l = o[1]) > t && (t = l), s > n && (n = s), (c = o[2]) > n && (n = c);
        } var u = new ee(++n, ++t, 0); for (r = 0, i = e.length; r < i; r++) {
            var a = e[r], l = (s = a[0], a[1]), c = a[2];
            u.set(s, l, c);
        } this._states = u, this._maxCharCode = t; } return e.prototype.nextState = function (e, t) { return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t); }, e; }()), ce = null;
        var he = null;
        var fe = function () { function e() { } return e._createLink = function (e, t, n, r, i) { var o = i - 1; do {
            var s = t.charCodeAt(o);
            if (2 !== e.get(s))
                break;
            o--;
        } while (o > r); if (r > 0) {
            var u = t.charCodeAt(r - 1), a = t.charCodeAt(o);
            (40 === u && 41 === a || 91 === u && 93 === a || 123 === u && 125 === a) && o--;
        } return { range: { startLineNumber: n, startColumn: r + 1, endLineNumber: n, endColumn: o + 2 }, url: t.substring(r, o + 1) }; }, e.computeLinks = function (t, n) { void 0 === n && (null === ce && (ce = new le([[1, 104, 2], [1, 72, 2], [1, 102, 6], [1, 70, 6], [2, 116, 3], [2, 84, 3], [3, 116, 4], [3, 84, 4], [4, 112, 5], [4, 80, 5], [5, 115, 9], [5, 83, 9], [5, 58, 10], [6, 105, 7], [6, 73, 7], [7, 108, 8], [7, 76, 8], [8, 101, 9], [8, 69, 9], [9, 58, 10], [10, 47, 11], [11, 47, 12]])), n = ce); for (var r = function () { if (null === he) {
            he = new ae(0);
            for (var e = 0; e < " \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".length; e++)
                he.set(" \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".charCodeAt(e), 1);
            for (e = 0; e < ".,;".length; e++)
                he.set(".,;".charCodeAt(e), 2);
        } return he; }(), i = [], o = 1, s = t.getLineCount(); o <= s; o++) {
            for (var u = t.getLineContent(o), a = u.length, l = 0, c = 0, h = 0, f = 1, d = !1, m = !1, p = !1; l < a;) {
                var g = !1, _ = u.charCodeAt(l);
                if (13 === f) {
                    var v = void 0;
                    switch (_) {
                        case 40:
                            d = !0, v = 0;
                            break;
                        case 41:
                            v = d ? 0 : 1;
                            break;
                        case 91:
                            m = !0, v = 0;
                            break;
                        case 93:
                            v = m ? 0 : 1;
                            break;
                        case 123:
                            p = !0, v = 0;
                            break;
                        case 125:
                            v = p ? 0 : 1;
                            break;
                        case 39:
                            v = 34 === h || 96 === h ? 0 : 1;
                            break;
                        case 34:
                            v = 39 === h || 96 === h ? 0 : 1;
                            break;
                        case 96:
                            v = 39 === h || 34 === h ? 0 : 1;
                            break;
                        default: v = r.get(_);
                    }
                    1 === v && (i.push(e._createLink(r, u, o, c, l)), g = !0);
                }
                else if (12 === f) {
                    v = void 0;
                    91 === _ ? (m = !0, v = 0) : v = r.get(_), 1 === v ? g = !0 : f = 13;
                }
                else
                    0 === (f = n.nextState(f, _)) && (g = !0);
                g && (f = 1, d = !1, m = !1, p = !1, c = l + 1, h = _), l++;
            }
            13 === f && i.push(e._createLink(r, u, o, c, a));
        } return i; }, e; }();
        var de = function () { function e() { this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]]; } return e.prototype.navigateValueSet = function (e, t, n, r, i) { var o; if (e && t && (o = this.doNavigateValueSet(t, i)))
            return { range: e, value: o }; if (n && r && (o = this.doNavigateValueSet(r, i)))
            return { range: n, value: o }; return null; }, e.prototype.doNavigateValueSet = function (e, t) { var n = this.numberReplace(e, t); return null !== n ? n : this.textReplace(e, t); }, e.prototype.numberReplace = function (e, t) { var n = Math.pow(10, e.length - (e.lastIndexOf(".") + 1)), r = Number(e), i = parseFloat(e); return isNaN(r) || isNaN(i) || r !== i ? null : 0 !== r || t ? (r = Math.floor(r * n), r += t ? n : -n, String(r / n)) : null; }, e.prototype.textReplace = function (e, t) { return this.valueSetsReplace(this._defaultValueSet, e, t); }, e.prototype.valueSetsReplace = function (e, t, n) { for (var r = null, i = 0, o = e.length; null === r && i < o; i++)
            r = this.valueSetReplace(e[i], t, n); return r; }, e.prototype.valueSetReplace = function (e, t, n) { var r = e.indexOf(t); return r >= 0 ? ((r += n ? 1 : -1) < 0 ? r = e.length - 1 : r %= e.length, e[r]) : null; }, e.INSTANCE = new e, e; }();
        n(3);
        var me, pe = function () { return function (e) { this.element = e; }; }(), ge = function () { function e() { this._size = 0; } return Object.defineProperty(e.prototype, "size", { get: function () { return this._size; }, enumerable: !0, configurable: !0 }), e.prototype.isEmpty = function () { return !this._first; }, e.prototype.unshift = function (e) { return this._insert(e, !1); }, e.prototype.push = function (e) { return this._insert(e, !0); }, e.prototype._insert = function (e, t) { var n = new pe(e); if (this._first)
            if (t) {
                var r = this._last;
                this._last = n, n.prev = r, r.next = n;
            }
            else {
                var i = this._first;
                this._first = n, n.next = i, i.prev = n;
            }
        else
            this._first = n, this._last = n; return this._size += 1, this._remove.bind(this, n); }, e.prototype.shift = function () { if (this._first) {
            var e = this._first.element;
            return this._remove(this._first), e;
        } }, e.prototype._remove = function (e) { for (var t = this._first; t instanceof pe;) {
            if (t === e) {
                if (t.prev && t.next) {
                    var n = t.prev;
                    n.next = t.next, t.next.prev = n;
                }
                else
                    t.prev || t.next ? t.next ? t.prev || (this._first = this._first.next, this._first.prev = void 0) : (this._last = this._last.prev, this._last.next = void 0) : (this._first = void 0, this._last = void 0);
                this._size -= 1;
                break;
            }
            t = t.next;
        } }, e.prototype.iterator = function () { var e, t = this._first; return { next: function () { return t ? (e ? e.value = t.element : e = { done: !1, value: t.element }, t = t.next, e) : A; } }; }, e; }();
        !function (e) { var t = { dispose: function () { } }; function n(e) { return function (t, n, r) { void 0 === n && (n = null); var i, o = !1; return i = e(function (e) { if (!o)
            return i ? i.dispose() : o = !0, t.call(n, e); }, null, r), o && i.dispose(), i; }; } function r(e, t) { return u(function (n, r, i) { return void 0 === r && (r = null), e(function (e) { return n.call(r, t(e)); }, null, i); }); } function i(e, t) { return u(function (n, r, i) { return void 0 === r && (r = null), e(function (e) { t(e), n.call(r, e); }, null, i); }); } function o(e, t) { return u(function (n, r, i) { return void 0 === r && (r = null), e(function (e) { return t(e) && n.call(r, e); }, null, i); }); } function s(e, t, n) { var i = n; return r(e, function (e) { return i = t(i, e); }); } function u(e) { var t, n = new Ce({ onFirstListenerAdd: function () { t = e(n.fire, n); }, onLastListenerRemove: function () { t.dispose(); } }); return n.event; } function l(e) { var t, n = !0; return o(e, function (e) { var r = n || e !== t; return n = !1, t = e, r; }); } e.None = function () { return t; }, e.once = n, e.map = r, e.forEach = i, e.filter = o, e.signal = function (e) { return e; }, e.any = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t]; return function (t, n, r) { return void 0 === n && (n = null), function (e) { return { dispose: function () { return a(e); } }; }(e.map(function (e) { return e(function (e) { return t.call(n, e); }, null, r); })); }; }, e.reduce = s, e.snapshot = u, e.debounce = function (e, t, n, r, i) { var o; void 0 === n && (n = 100), void 0 === r && (r = !1); var s = void 0, u = void 0, a = 0, l = new Ce({ leakWarningThreshold: i, onFirstListenerAdd: function () { o = e(function (e) { a++, s = t(s, e), r && !u && l.fire(s), clearTimeout(u), u = setTimeout(function () { var e = s; s = void 0, u = void 0, (!r || a > 1) && l.fire(e), a = 0; }, n); }); }, onLastListenerRemove: function () { o.dispose(); } }); return l.event; }, e.stopwatch = function (e) { var t = (new Date).getTime(); return r(n(e), function (e) { return (new Date).getTime() - t; }); }, e.latch = l, e.buffer = function (e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = []); var r = n.slice(), i = e(function (e) { r ? r.push(e) : s.fire(e); }), o = function () { r && r.forEach(function (e) { return s.fire(e); }), r = null; }, s = new Ce({ onFirstListenerAdd: function () { i || (i = e(function (e) { return s.fire(e); })); }, onFirstListenerDidAdd: function () { r && (t ? setTimeout(o) : o()); }, onLastListenerRemove: function () { i && i.dispose(), i = null; } }); return s.event; }, e.echo = function (e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = []), n = n.slice(), e(function (e) { n.push(e), i.fire(e); }); var r = function (e, t) { return n.forEach(function (n) { return e.call(t, n); }); }, i = new Ce({ onListenerDidAdd: function (e, n, i) { t ? setTimeout(function () { return r(n, i); }) : r(n, i); } }); return i.event; }; var c = function () { function e(e) { this.event = e; } return e.prototype.map = function (t) { return new e(r(this.event, t)); }, e.prototype.forEach = function (t) { return new e(i(this.event, t)); }, e.prototype.filter = function (t) { return new e(o(this.event, t)); }, e.prototype.reduce = function (t, n) { return new e(s(this.event, t, n)); }, e.prototype.latch = function () { return new e(l(this.event)); }, e.prototype.on = function (e, t, n) { return this.event(e, t, n); }, e.prototype.once = function (e, t, r) { return n(this.event)(e, t, r); }, e; }(); e.chain = function (e) { return new c(e); }, e.fromNodeEventEmitter = function (e, t, n) { void 0 === n && (n = function (e) { return e; }); var r = function () { for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t]; return i.fire(n.apply(void 0, e)); }, i = new Ce({ onFirstListenerAdd: function () { return e.on(t, r); }, onLastListenerRemove: function () { return e.removeListener(t, r); } }); return i.event; }, e.fromPromise = function (e) { var t = new Ce, n = !1; return e.then(void 0, function () { return null; }).then(function () { n ? t.fire(void 0) : setTimeout(function () { return t.fire(void 0); }, 0); }), n = !0, t.event; }, e.toPromise = function (e) { return new Promise(function (t) { return n(e)(t); }); }; }(me || (me = {}));
        var _e, ve = -1, ye = function () { function e(e, t) { void 0 === t && (t = Math.random().toString(18).slice(2, 5)), this.customThreshold = e, this.name = t, this._warnCountdown = 0; } return e.prototype.dispose = function () { this._stacks && this._stacks.clear(); }, e.prototype.check = function (e) { var t = this, n = ve; if ("number" == typeof this.customThreshold && (n = this.customThreshold), !(n <= 0 || e < n)) {
            this._stacks || (this._stacks = new Map);
            var r = (new Error).stack.split("\n").slice(3).join("\n"), i = this._stacks.get(r) || 0;
            if (this._stacks.set(r, i + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
                var o;
                this._warnCountdown = .5 * n;
                var s = 0;
                this._stacks.forEach(function (e, t) { (!o || s < e) && (o = t, s = e); }), console.warn("[" + this.name + "] potential listener LEAK detected, having " + e + " listeners already. MOST frequent listener (" + s + "):"), console.warn(o);
            }
            return function () { var e = t._stacks.get(r) || 0; t._stacks.set(r, e - 1); };
        } }, e; }(), Ce = function () { function e(e) { this._disposed = !1, this._options = e, this._leakageMon = ve > 0 ? new ye(this._options && this._options.leakWarningThreshold) : void 0; } return Object.defineProperty(e.prototype, "event", { get: function () { var t = this; return this._event || (this._event = function (n, r, i) { t._listeners || (t._listeners = new ge); var o = t._listeners.isEmpty(); o && t._options && t._options.onFirstListenerAdd && t._options.onFirstListenerAdd(t); var s, u, a = t._listeners.push(r ? [n, r] : n); return o && t._options && t._options.onFirstListenerDidAdd && t._options.onFirstListenerDidAdd(t), t._options && t._options.onListenerDidAdd && t._options.onListenerDidAdd(t, n, r), t._leakageMon && (s = t._leakageMon.check(t._listeners.size)), u = { dispose: function () { (s && s(), u.dispose = e._noop, t._disposed) || (a(), t._options && t._options.onLastListenerRemove && (t._listeners && !t._listeners.isEmpty() || t._options.onLastListenerRemove(t))); } }, Array.isArray(i) && i.push(u), u; }), this._event; }, enumerable: !0, configurable: !0 }), e.prototype.fire = function (e) { if (this._listeners) {
            this._deliveryQueue || (this._deliveryQueue = []);
            for (var t = this._listeners.iterator(), n = t.next(); !n.done; n = t.next())
                this._deliveryQueue.push([n.value, e]);
            for (; this._deliveryQueue.length > 0;) {
                var r = this._deliveryQueue.shift(), o = r[0], s = r[1];
                try {
                    "function" == typeof o ? o.call(void 0, s) : o[0].call(o[1], s);
                }
                catch (n) {
                    i(n);
                }
            }
        } }, e.prototype.dispose = function () { this._listeners && (this._listeners = void 0), this._deliveryQueue && (this._deliveryQueue.length = 0), this._leakageMon && this._leakageMon.dispose(), this._disposed = !0; }, e._noop = function () { }, e; }(), be = (function () { function e() { var e = this; this.hasListeners = !1, this.events = [], this.emitter = new Ce({ onFirstListenerAdd: function () { return e.onFirstListenerAdd(); }, onLastListenerRemove: function () { return e.onLastListenerRemove(); } }); } Object.defineProperty(e.prototype, "event", { get: function () { return this.emitter.event; }, enumerable: !0, configurable: !0 }), e.prototype.add = function (e) { var t = this, n = { event: e, listener: null }; this.events.push(n), this.hasListeners && this.hook(n); var r; return r = function (e) { var t, n = this, r = !1; return function () { return r ? t : (r = !0, t = e.apply(n, arguments)); }; }(function () { t.hasListeners && t.unhook(n); var e = t.events.indexOf(n); t.events.splice(e, 1); }), { dispose: function () { r(); } }; }, e.prototype.onFirstListenerAdd = function () { var e = this; this.hasListeners = !0, this.events.forEach(function (t) { return e.hook(t); }); }, e.prototype.onLastListenerRemove = function () { var e = this; this.hasListeners = !1, this.events.forEach(function (t) { return e.unhook(t); }); }, e.prototype.hook = function (e) { var t = this; e.listener = e.event(function (e) { return t.emitter.fire(e); }); }, e.prototype.unhook = function (e) { e.listener && e.listener.dispose(), e.listener = null; }, e.prototype.dispose = function () { this.emitter.dispose(); }; }(), function () { function e() { this.buffers = []; } e.prototype.wrapEvent = function (e) { var t = this; return function (n, r, i) { return e(function (e) { var i = t.buffers[t.buffers.length - 1]; i ? i.push(function () { return n.call(r, e); }) : n.call(r, e); }, void 0, i); }; }, e.prototype.bufferEvents = function (e) { var t = []; this.buffers.push(t); var n = e(); return this.buffers.pop(), t.forEach(function (e) { return e(); }), n; }; }(), function () { function e() { var e = this; this.listening = !1, this.inputEvent = me.None, this.inputEventListener = l.None, this.emitter = new Ce({ onFirstListenerDidAdd: function () { e.listening = !0, e.inputEventListener = e.inputEvent(e.emitter.fire, e.emitter); }, onLastListenerRemove: function () { e.listening = !1, e.inputEventListener.dispose(); } }), this.event = this.emitter.event; } Object.defineProperty(e.prototype, "input", { set: function (e) { this.inputEvent = e, this.listening && (this.inputEventListener.dispose(), this.inputEventListener = e(this.emitter.fire, this.emitter)); }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () { this.inputEventListener.dispose(), this.emitter.dispose(); }; }(), Object.freeze(function (e, t) { var n = setTimeout(e.bind(t), 0); return { dispose: function () { clearTimeout(n); } }; }));
        !function (e) { e.isCancellationToken = function (t) { return t === e.None || t === e.Cancelled || t instanceof Ne || !(!t || "object" != typeof t) && "boolean" == typeof t.isCancellationRequested && "function" == typeof t.onCancellationRequested; }, e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: me.None }), e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: be }); }(_e || (_e = {}));
        var Le, Ne = function () { function e() { this._isCancelled = !1, this._emitter = null; } return e.prototype.cancel = function () { this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose())); }, Object.defineProperty(e.prototype, "isCancellationRequested", { get: function () { return this._isCancelled; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "onCancellationRequested", { get: function () { return this._isCancelled ? be : (this._emitter || (this._emitter = new Ce), this._emitter.event); }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () { this._emitter && (this._emitter.dispose(), this._emitter = null); }, e; }(), Ee = function () { function e() { } return Object.defineProperty(e.prototype, "token", { get: function () { return this._token || (this._token = new Ne), this._token; }, enumerable: !0, configurable: !0 }), e.prototype.cancel = function () { this._token ? this._token instanceof Ne && this._token.cancel() : this._token = _e.Cancelled; }, e.prototype.dispose = function () { this._token ? this._token instanceof Ne && this._token.dispose() : this._token = _e.None; }, e; }(), Se = function () { function e() { this._keyCodeToStr = [], this._strToKeyCode = Object.create(null); } return e.prototype.define = function (e, t) { this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e; }, e.prototype.keyCodeToStr = function (e) { return this._keyCodeToStr[e]; }, e.prototype.strToKeyCode = function (e) { return this._strToKeyCode[e.toLowerCase()] || 0; }, e; }(), we = new Se, Ae = new Se, Te = new Se;
        !function () { function e(e, t, n, r) { void 0 === n && (n = t), void 0 === r && (r = n), we.define(e, t), Ae.define(e, n), Te.define(e, r); } e(0, "unknown"), e(1, "Backspace"), e(2, "Tab"), e(3, "Enter"), e(4, "Shift"), e(5, "Ctrl"), e(6, "Alt"), e(7, "PauseBreak"), e(8, "CapsLock"), e(9, "Escape"), e(10, "Space"), e(11, "PageUp"), e(12, "PageDown"), e(13, "End"), e(14, "Home"), e(15, "LeftArrow", "Left"), e(16, "UpArrow", "Up"), e(17, "RightArrow", "Right"), e(18, "DownArrow", "Down"), e(19, "Insert"), e(20, "Delete"), e(21, "0"), e(22, "1"), e(23, "2"), e(24, "3"), e(25, "4"), e(26, "5"), e(27, "6"), e(28, "7"), e(29, "8"), e(30, "9"), e(31, "A"), e(32, "B"), e(33, "C"), e(34, "D"), e(35, "E"), e(36, "F"), e(37, "G"), e(38, "H"), e(39, "I"), e(40, "J"), e(41, "K"), e(42, "L"), e(43, "M"), e(44, "N"), e(45, "O"), e(46, "P"), e(47, "Q"), e(48, "R"), e(49, "S"), e(50, "T"), e(51, "U"), e(52, "V"), e(53, "W"), e(54, "X"), e(55, "Y"), e(56, "Z"), e(57, "Meta"), e(58, "ContextMenu"), e(59, "F1"), e(60, "F2"), e(61, "F3"), e(62, "F4"), e(63, "F5"), e(64, "F6"), e(65, "F7"), e(66, "F8"), e(67, "F9"), e(68, "F10"), e(69, "F11"), e(70, "F12"), e(71, "F13"), e(72, "F14"), e(73, "F15"), e(74, "F16"), e(75, "F17"), e(76, "F18"), e(77, "F19"), e(78, "NumLock"), e(79, "ScrollLock"), e(80, ";", ";", "OEM_1"), e(81, "=", "=", "OEM_PLUS"), e(82, ",", ",", "OEM_COMMA"), e(83, "-", "-", "OEM_MINUS"), e(84, ".", ".", "OEM_PERIOD"), e(85, "/", "/", "OEM_2"), e(86, "`", "`", "OEM_3"), e(110, "ABNT_C1"), e(111, "ABNT_C2"), e(87, "[", "[", "OEM_4"), e(88, "\\", "\\", "OEM_5"), e(89, "]", "]", "OEM_6"), e(90, "'", "'", "OEM_7"), e(91, "OEM_8"), e(92, "OEM_102"), e(93, "NumPad0"), e(94, "NumPad1"), e(95, "NumPad2"), e(96, "NumPad3"), e(97, "NumPad4"), e(98, "NumPad5"), e(99, "NumPad6"), e(100, "NumPad7"), e(101, "NumPad8"), e(102, "NumPad9"), e(103, "NumPad_Multiply"), e(104, "NumPad_Add"), e(105, "NumPad_Separator"), e(106, "NumPad_Subtract"), e(107, "NumPad_Decimal"), e(108, "NumPad_Divide"); }(), function (e) { e.toString = function (e) { return we.keyCodeToStr(e); }, e.fromString = function (e) { return we.strToKeyCode(e); }, e.toUserSettingsUS = function (e) { return Ae.keyCodeToStr(e); }, e.toUserSettingsGeneral = function (e) { return Te.keyCodeToStr(e); }, e.fromUserSettings = function (e) { return Ae.strToKeyCode(e) || Te.strToKeyCode(e); }; }(Le || (Le = {}));
        !function () { function e(e, t, n, r, i) { this.ctrlKey = e, this.shiftKey = t, this.altKey = n, this.metaKey = r, this.keyCode = i; } e.prototype.equals = function (e) { return this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.keyCode === e.keyCode; }, e.prototype.isModifierKey = function () { return 0 === this.keyCode || 5 === this.keyCode || 57 === this.keyCode || 6 === this.keyCode || 4 === this.keyCode; }, e.prototype.toChord = function () { return new nt([this]); }, e.prototype.isDuplicateModifierCase = function () { return this.ctrlKey && 5 === this.keyCode || this.shiftKey && 4 === this.keyCode || this.altKey && 6 === this.keyCode || this.metaKey && 57 === this.keyCode; }; }();
        var Me, Pe, Oe, xe, Ie, Re, ke, Ue, Fe, De, Ke, qe, Ve, Be, Ye, je, We, He, Ge, ze, Qe, Xe, $e, Je, Ze, et, tt, nt = function () { function e(e) { if (0 === e.length)
            throw (t = "parts") ? new Error("Illegal argument: " + t) : new Error("Illegal argument"); var t; this.parts = e; } return e.prototype.equals = function (e) { if (null === e)
            return !1; if (this.parts.length !== e.parts.length)
            return !1; for (var t = 0; t < this.parts.length; t++)
            if (!this.parts[t].equals(e.parts[t]))
                return !1; return !0; }, e; }(), rt = (function () { }(), function () { }(), function () { var e = function (t, n) { return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); })(t, n); }; return function (t, n) { function r() { this.constructor = t; } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r); }; }()), it = function (e) { function t(t, n, r, i) { var o = e.call(this, t, n, r, i) || this; return o.selectionStartLineNumber = t, o.selectionStartColumn = n, o.positionLineNumber = r, o.positionColumn = i, o; } return rt(t, e), t.prototype.clone = function () { return new t(this.selectionStartLineNumber, this.selectionStartColumn, this.positionLineNumber, this.positionColumn); }, t.prototype.toString = function () { return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]"; }, t.prototype.equalsSelection = function (e) { return t.selectionsEqual(this, e); }, t.selectionsEqual = function (e, t) { return e.selectionStartLineNumber === t.selectionStartLineNumber && e.selectionStartColumn === t.selectionStartColumn && e.positionLineNumber === t.positionLineNumber && e.positionColumn === t.positionColumn; }, t.prototype.getDirection = function () { return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? 0 : 1; }, t.prototype.setEndPosition = function (e, n) { return 0 === this.getDirection() ? new t(this.startLineNumber, this.startColumn, e, n) : new t(e, n, this.startLineNumber, this.startColumn); }, t.prototype.getPosition = function () { return new j(this.positionLineNumber, this.positionColumn); }, t.prototype.setStartPosition = function (e, n) { return 0 === this.getDirection() ? new t(e, n, this.endLineNumber, this.endColumn) : new t(this.endLineNumber, this.endColumn, e, n); }, t.fromPositions = function (e, n) { return void 0 === n && (n = e), new t(e.lineNumber, e.column, n.lineNumber, n.column); }, t.liftSelection = function (e) { return new t(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn); }, t.selectionsArrEqual = function (e, t) { if (e && !t || !e && t)
            return !1; if (!e && !t)
            return !0; if (e.length !== t.length)
            return !1; for (var n = 0, r = e.length; n < r; n++)
            if (!this.selectionsEqual(e[n], t[n]))
                return !1; return !0; }, t.isISelection = function (e) { return e && "number" == typeof e.selectionStartLineNumber && "number" == typeof e.selectionStartColumn && "number" == typeof e.positionLineNumber && "number" == typeof e.positionColumn; }, t.createWithDirection = function (e, n, r, i, o) { return 0 === o ? new t(e, n, r, i) : new t(r, i, e, n); }, t; }(W), ot = function () { function e(e, t, n) { this.offset = 0 | e, this.type = t, this.language = n; } return e.prototype.toString = function () { return "(" + this.offset + ", " + this.type + ")"; }, e; }();
        !function (e) { e[e.Unnecessary = 1] = "Unnecessary"; }(Me || (Me = {})), function (e) { e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error"; }(Pe || (Pe = {})), function (e) { e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.KEY_0 = 21] = "KEY_0", e[e.KEY_1 = 22] = "KEY_1", e[e.KEY_2 = 23] = "KEY_2", e[e.KEY_3 = 24] = "KEY_3", e[e.KEY_4 = 25] = "KEY_4", e[e.KEY_5 = 26] = "KEY_5", e[e.KEY_6 = 27] = "KEY_6", e[e.KEY_7 = 28] = "KEY_7", e[e.KEY_8 = 29] = "KEY_8", e[e.KEY_9 = 30] = "KEY_9", e[e.KEY_A = 31] = "KEY_A", e[e.KEY_B = 32] = "KEY_B", e[e.KEY_C = 33] = "KEY_C", e[e.KEY_D = 34] = "KEY_D", e[e.KEY_E = 35] = "KEY_E", e[e.KEY_F = 36] = "KEY_F", e[e.KEY_G = 37] = "KEY_G", e[e.KEY_H = 38] = "KEY_H", e[e.KEY_I = 39] = "KEY_I", e[e.KEY_J = 40] = "KEY_J", e[e.KEY_K = 41] = "KEY_K", e[e.KEY_L = 42] = "KEY_L", e[e.KEY_M = 43] = "KEY_M", e[e.KEY_N = 44] = "KEY_N", e[e.KEY_O = 45] = "KEY_O", e[e.KEY_P = 46] = "KEY_P", e[e.KEY_Q = 47] = "KEY_Q", e[e.KEY_R = 48] = "KEY_R", e[e.KEY_S = 49] = "KEY_S", e[e.KEY_T = 50] = "KEY_T", e[e.KEY_U = 51] = "KEY_U", e[e.KEY_V = 52] = "KEY_V", e[e.KEY_W = 53] = "KEY_W", e[e.KEY_X = 54] = "KEY_X", e[e.KEY_Y = 55] = "KEY_Y", e[e.KEY_Z = 56] = "KEY_Z", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.NumLock = 78] = "NumLock", e[e.ScrollLock = 79] = "ScrollLock", e[e.US_SEMICOLON = 80] = "US_SEMICOLON", e[e.US_EQUAL = 81] = "US_EQUAL", e[e.US_COMMA = 82] = "US_COMMA", e[e.US_MINUS = 83] = "US_MINUS", e[e.US_DOT = 84] = "US_DOT", e[e.US_SLASH = 85] = "US_SLASH", e[e.US_BACKTICK = 86] = "US_BACKTICK", e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET", e[e.US_BACKSLASH = 88] = "US_BACKSLASH", e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET", e[e.US_QUOTE = 90] = "US_QUOTE", e[e.OEM_8 = 91] = "OEM_8", e[e.OEM_102 = 92] = "OEM_102", e[e.NUMPAD_0 = 93] = "NUMPAD_0", e[e.NUMPAD_1 = 94] = "NUMPAD_1", e[e.NUMPAD_2 = 95] = "NUMPAD_2", e[e.NUMPAD_3 = 96] = "NUMPAD_3", e[e.NUMPAD_4 = 97] = "NUMPAD_4", e[e.NUMPAD_5 = 98] = "NUMPAD_5", e[e.NUMPAD_6 = 99] = "NUMPAD_6", e[e.NUMPAD_7 = 100] = "NUMPAD_7", e[e.NUMPAD_8 = 101] = "NUMPAD_8", e[e.NUMPAD_9 = 102] = "NUMPAD_9", e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY", e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD", e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR", e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT", e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL", e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE", e[e.KEY_IN_COMPOSITION = 109] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 110] = "ABNT_C1", e[e.ABNT_C2 = 111] = "ABNT_C2", e[e.MAX_VALUE = 112] = "MAX_VALUE"; }(Oe || (Oe = {})), function (e) { e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL"; }(xe || (xe = {})), function (e) { e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible"; }(Ie || (Ie = {})), function (e) { e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full"; }(Re || (Re = {})), function (e) { e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF"; }(ke || (ke = {})), function (e) { e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF"; }(Ue || (Ue = {})), function (e) { e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF"; }(Fe || (Fe = {})), function (e) { e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter"; }(De || (De = {})), function (e) { e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate"; }(Ke || (Ke = {})), function (e) { e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo"; }(qe || (qe = {})), function (e) { e[e.None = 0] = "None", e[e.Small = 1] = "Small", e[e.Large = 2] = "Large", e[e.SmallBlocks = 3] = "SmallBlocks", e[e.LargeBlocks = 4] = "LargeBlocks"; }(Ve || (Ve = {})), function (e) { e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent"; }(Be || (Be = {})), function (e) { e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid"; }(Ye || (Ye = {})), function (e) { e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin"; }(je || (je = {})), function (e) { e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom"; }(We || (We = {})), function (e) { e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW"; }(He || (He = {})), function (e) { e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER"; }(Ge || (Ge = {})), function (e) { e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR"; }(ze || (ze = {})), function (e) { e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent"; }(Qe || (Qe = {})), function (e) { e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.Snippet = 25] = "Snippet"; }(Xe || (Xe = {})), function (e) { e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet"; }($e || ($e = {})), function (e) { e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions"; }(Je || (Je = {})), function (e) { e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange"; }(Ze || (Ze = {})), function (e) { e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write"; }(et || (et = {})), function (e) { e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter"; }(tt || (tt = {}));
        var st = function () { function e() { } return e.chord = function (e, t) { return function (e, t) { return (e | (65535 & t) << 16 >>> 0) >>> 0; }(e, t); }, e.CtrlCmd = 2048, e.Shift = 1024, e.Alt = 512, e.WinCtrl = 256, e; }();
        var ut = function () { var e = function (t, n) { return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]); })(t, n); }; return function (t, n) { function r() { this.constructor = t; } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r); }; }(), at = function (e) { function t() { return null !== e && e.apply(this, arguments) || this; } return ut(t, e), Object.defineProperty(t.prototype, "uri", { get: function () { return this._uri; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "version", { get: function () { return this._versionId; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "eol", { get: function () { return this._eol; }, enumerable: !0, configurable: !0 }), t.prototype.getValue = function () { return this.getText(); }, t.prototype.getLinesContent = function () { return this._lines.slice(0); }, t.prototype.getLineCount = function () { return this._lines.length; }, t.prototype.getLineContent = function (e) { return this._lines[e - 1]; }, t.prototype.getWordAtPosition = function (e, t) { var n = function (e, t, n, r) { t.lastIndex = 0; var i = t.exec(n); if (!i)
            return null; var o = i[0].indexOf(" ") >= 0 ? function (e, t, n, r) { var i, o = e - 1 - r; for (t.lastIndex = 0; i = t.exec(n);) {
            var s = i.index || 0;
            if (s > o)
                return null;
            if (t.lastIndex >= o)
                return { word: i[0], startColumn: r + 1 + s, endColumn: r + 1 + t.lastIndex };
        } return null; }(e, t, n, r) : function (e, t, n, r) { var i, o = e - 1 - r, s = n.lastIndexOf(" ", o - 1) + 1; for (t.lastIndex = s; i = t.exec(n);) {
            var u = i.index || 0;
            if (u <= o && t.lastIndex >= o)
                return { word: i[0], startColumn: r + 1 + u, endColumn: r + 1 + t.lastIndex };
        } return null; }(e, t, n, r); return t.lastIndex = 0, o; }(e.column, function (e) { var t = ue; if (e && e instanceof RegExp)
            if (e.global)
                t = e;
            else {
                var n = "g";
                e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
            } return t.lastIndex = 0, t; }(t), this._lines[e.lineNumber - 1], 0); return n ? new W(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null; }, t.prototype.getWordUntilPosition = function (e, t) { var n = this.getWordAtPosition(e, t); return n ? { word: this._lines[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1), startColumn: n.startColumn, endColumn: e.column } : { word: "", startColumn: e.column, endColumn: e.column }; }, t.prototype.createWordIterator = function (e) { var t, n, r = this, i = 0, o = 0, s = [], u = function () { if (o < s.length) {
            var a = n.substring(s[o].start, s[o].end);
            return o += 1, t ? t.value = a : t = { done: !1, value: a }, t;
        } return i >= r._lines.length ? A : (n = r._lines[i], s = r._wordenize(n, e), o = 0, i += 1, u()); }; return { next: u }; }, t.prototype.getLineWords = function (e, t) { for (var n = this._lines[e - 1], r = [], i = 0, o = this._wordenize(n, t); i < o.length; i++) {
            var s = o[i];
            r.push({ word: n.substring(s.start, s.end), startColumn: s.start + 1, endColumn: s.end + 1 });
        } return r; }, t.prototype._wordenize = function (e, t) { var n, r = []; for (t.lastIndex = 0; (n = t.exec(e)) && 0 !== n[0].length;)
            r.push({ start: n.index, end: n.index + n[0].length }); return r; }, t.prototype.getValueInRange = function (e) { if ((e = this._validateRange(e)).startLineNumber === e.endLineNumber)
            return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1); var t = this._eol, n = e.startLineNumber - 1, r = e.endLineNumber - 1, i = []; i.push(this._lines[n].substring(e.startColumn - 1)); for (var o = n + 1; o < r; o++)
            i.push(this._lines[o]); return i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t); }, t.prototype.offsetAt = function (e) { return e = this._validatePosition(e), this._ensureLineStarts(), this._lineStarts.getAccumulatedValue(e.lineNumber - 2) + (e.column - 1); }, t.prototype.positionAt = function (e) { e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts(); var t = this._lineStarts.getIndexOf(e), n = this._lines[t.index].length; return { lineNumber: 1 + t.index, column: 1 + Math.min(t.remainder, n) }; }, t.prototype._validateRange = function (e) { var t = this._validatePosition({ lineNumber: e.startLineNumber, column: e.startColumn }), n = this._validatePosition({ lineNumber: e.endLineNumber, column: e.endColumn }); return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || n.lineNumber !== e.endLineNumber || n.column !== e.endColumn ? { startLineNumber: t.lineNumber, startColumn: t.column, endLineNumber: n.lineNumber, endColumn: n.column } : e; }, t.prototype._validatePosition = function (e) { if (!j.isIPosition(e))
            throw new Error("bad position"); var t = e.lineNumber, n = e.column, r = !1; if (t < 1)
            t = 1, n = 1, r = !0;
        else if (t > this._lines.length)
            t = this._lines.length, n = this._lines[t - 1].length + 1, r = !0;
        else {
            var i = this._lines[t - 1].length + 1;
            n < 1 ? (n = 1, r = !0) : n > i && (n = i, r = !0);
        } return r ? { lineNumber: t, column: n } : e; }, t; }(oe), lt = function (e) { function t(t) { var n = e.call(this, t) || this; return n._models = Object.create(null), n; } return ut(t, e), t.prototype.dispose = function () { this._models = Object.create(null); }, t.prototype._getModel = function (e) { return this._models[e]; }, t.prototype._getModels = function () { var e = this, t = []; return Object.keys(this._models).forEach(function (n) { return t.push(e._models[n]); }), t; }, t.prototype.acceptNewModel = function (e) { this._models[e.url] = new at(F.parse(e.url), e.lines, e.EOL, e.versionId); }, t.prototype.acceptModelChanged = function (e, t) { this._models[e] && this._models[e].onEvents(t); }, t.prototype.acceptRemovedModel = function (e) { this._models[e] && delete this._models[e]; }, t; }(function () { function e(e) { this._foreignModuleFactory = e, this._foreignModule = null; } return e.prototype.computeDiff = function (e, t, n) { var r = this._getModel(e), i = this._getModel(t); if (!r || !i)
            return Promise.resolve(null); var o = r.getLinesContent(), s = i.getLinesContent(), u = new Z(o, s, { shouldComputeCharChanges: !0, shouldPostProcessCharChanges: !0, shouldIgnoreTrimWhitespace: n, shouldMakePrettyDiff: !0 }).computeDiff(), a = !(u.length > 0) && this._modelsAreIdentical(r, i); return Promise.resolve({ identical: a, changes: u }); }, e.prototype._modelsAreIdentical = function (e, t) { var n = e.getLineCount(); if (n !== t.getLineCount())
            return !1; for (var r = 1; r <= n; r++) {
            if (e.getLineContent(r) !== t.getLineContent(r))
                return !1;
        } return !0; }, e.prototype.computeMoreMinimalEdits = function (t, n) { var r = this._getModel(t); if (!r)
            return Promise.resolve(n); for (var i = [], o = void 0, s = 0, u = n = _(n, function (e, t) { return e.range && t.range ? W.compareRangesUsingStarts(e.range, t.range) : (e.range ? 0 : 1) - (t.range ? 0 : 1); }); s < u.length; s++) {
            var a = u[s], l = a.range, c = a.text, h = a.eol;
            if ("number" == typeof h && (o = h), !W.isEmpty(l) || c) {
                var f = r.getValueInRange(l);
                if (f !== (c = c.replace(/\r\n|\n|\r/g, r.eol)))
                    if (Math.max(c.length, f.length) > e._diffLimit)
                        i.push({ range: l, text: c });
                    else
                        for (var d = C(f, c, !1), m = r.offsetAt(W.lift(l).getStartPosition()), p = 0, g = d; p < g.length; p++) {
                            var v = g[p], y = r.positionAt(m + v.originalStart), b = r.positionAt(m + v.originalStart + v.originalLength), L = { text: c.substr(v.modifiedStart, v.modifiedLength), range: { startLineNumber: y.lineNumber, startColumn: y.column, endLineNumber: b.lineNumber, endColumn: b.column } };
                            r.getValueInRange(L.range) !== L.text && i.push(L);
                        }
            }
        } return "number" == typeof o && i.push({ eol: o, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), Promise.resolve(i); }, e.prototype.computeLinks = function (e) { var t = this._getModel(e); return t ? Promise.resolve(function (e) { return e && "function" == typeof e.getLineCount && "function" == typeof e.getLineContent ? fe.computeLinks(e) : []; }(t)) : Promise.resolve(null); }, e.prototype.textualSuggest = function (t, n, r, i) { var o = this._getModel(t); if (!o)
            return Promise.resolve(null); var s = [], u = new RegExp(r, i), a = o.getWordUntilPosition(n, u), l = Object.create(null); l[a.word] = !0; for (var c = o.createWordIterator(u), h = c.next(); !h.done && s.length <= e._suggestionsLimit; h = c.next()) {
            var f = h.value;
            l[f] || (l[f] = !0, isNaN(Number(f)) && s.push({ kind: 18, label: f, insertText: f, range: { startLineNumber: n.lineNumber, startColumn: a.startColumn, endLineNumber: n.lineNumber, endColumn: a.endColumn } }));
        } return Promise.resolve({ suggestions: s }); }, e.prototype.computeWordRanges = function (e, t, n, r) { var i = this._getModel(e); if (!i)
            return Promise.resolve(Object.create(null)); for (var o = new RegExp(n, r), s = Object.create(null), u = t.startLineNumber; u < t.endLineNumber; u++)
            for (var a = 0, l = i.getLineWords(u, o); a < l.length; a++) {
                var c = l[a];
                if (isNaN(Number(c.word))) {
                    var h = s[c.word];
                    h || (h = [], s[c.word] = h), h.push({ startLineNumber: u, startColumn: c.startColumn, endLineNumber: u, endColumn: c.endColumn });
                }
            } return Promise.resolve(s); }, e.prototype.navigateValueSet = function (e, t, n, r, i) { var o = this._getModel(e); if (!o)
            return Promise.resolve(null); var s = new RegExp(r, i); t.startColumn === t.endColumn && (t = { startLineNumber: t.startLineNumber, startColumn: t.startColumn, endLineNumber: t.endLineNumber, endColumn: t.endColumn + 1 }); var u = o.getValueInRange(t), a = o.getWordAtPosition({ lineNumber: t.startLineNumber, column: t.startColumn }, s); if (!a)
            return Promise.resolve(null); var l = o.getValueInRange(a), c = de.INSTANCE.navigateValueSet(t, u, a, l, n); return Promise.resolve(c); }, e.prototype.loadForeignModule = function (e, t) { var n = this, r = { getMirrorModels: function () { return n._getModels(); } }; if (this._foreignModuleFactory) {
            this._foreignModule = this._foreignModuleFactory(r, t);
            for (var i = [], o = 0, s = h(this._foreignModule); o < s.length; o++) {
                var u = s[o];
                "function" == typeof this._foreignModule[u] && i.push(u);
            }
            return Promise.resolve(i);
        } return Promise.reject(new Error("Unexpected usage")); }, e.prototype.fmr = function (e, t) { if (!this._foreignModule || "function" != typeof this._foreignModule[e])
            return Promise.reject(new Error("Missing requestHandler or method: " + e)); try {
            return Promise.resolve(this._foreignModule[e].apply(this._foreignModule, t));
        }
        catch (e) {
            return Promise.reject(e);
        } }, e._diffLimit = 1e4, e._suggestionsLimit = 1e4, e; }());
        "function" == typeof importScripts && (c.a.monaco = { editor: void 0, languages: void 0, CancellationTokenSource: Ee, Emitter: Ce, KeyCode: Oe, KeyMod: st, Position: j, Range: W, Selection: it, SelectionDirection: xe, MarkerSeverity: Pe, MarkerTag: Me, Uri: F, Token: ot }), n.d(t, "initialize", function () { return ht; });
        var ct = !1;
        function ht(e) { if (!ct) {
            ct = !0;
            var t = new lt(e), n = new g(function (e) { self.postMessage(e); }, t);
            self.onmessage = function (e) { n.onmessage(e.data); };
        } }
        self.onmessage = function (e) { ct || ht(null); };
    }]);

