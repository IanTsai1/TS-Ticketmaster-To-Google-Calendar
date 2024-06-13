"use strict";
function Qf(e, t) { for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
        for (const l in r)
            if (l !== "default" && !(l in e)) {
                const o = Object.getOwnPropertyDescriptor(r, l);
                o && Object.defineProperty(e, l, o.get ? o : { enumerable: !0, get: () => r[l] });
            }
    }
} return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })); }
(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
    r(l); new MutationObserver(l => { for (const o of l)
    if (o.type === "childList")
        for (const i of o.addedNodes)
            i.tagName === "LINK" && i.rel === "modulepreload" && r(i); }).observe(document, { childList: !0, subtree: !0 }); function n(l) { const o = {}; return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o; } function r(l) { if (l.ep)
    return; l.ep = !0; const o = n(l); fetch(l.href, o); } })();
function Kf(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var ta = { exports: {} }, xl = {}, na = { exports: {} }, z = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr = Symbol.for("react.element"), Xf = Symbol.for("react.portal"), Jf = Symbol.for("react.fragment"), Gf = Symbol.for("react.strict_mode"), Yf = Symbol.for("react.profiler"), qf = Symbol.for("react.provider"), Zf = Symbol.for("react.context"), bf = Symbol.for("react.forward_ref"), ed = Symbol.for("react.suspense"), td = Symbol.for("react.memo"), nd = Symbol.for("react.lazy"), Ru = Symbol.iterator;
function rd(e) { return e === null || typeof e != "object" ? null : (e = Ru && e[Ru] || e["@@iterator"], typeof e == "function" ? e : null); }
var ra = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, la = Object.assign, oa = {};
function gn(e, t, n) { this.props = e, this.context = t, this.refs = oa, this.updater = n || ra; }
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); };
gn.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function ia() { }
ia.prototype = gn.prototype;
function Ri(e, t, n) { this.props = e, this.context = t, this.refs = oa, this.updater = n || ra; }
var Ti = Ri.prototype = new ia;
Ti.constructor = Ri;
la(Ti, gn.prototype);
Ti.isPureReactComponent = !0;
var Tu = Array.isArray, ua = Object.prototype.hasOwnProperty, Oi = { current: null }, sa = { key: !0, ref: !0, __self: !0, __source: !0 };
function aa(e, t, n) { var r, l = {}, o = null, i = null; if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        ua.call(t, r) && !sa.hasOwnProperty(r) && (l[r] = t[r]); var u = arguments.length - 2; if (u === 1)
    l.children = n;
else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++)
        s[a] = arguments[a + 2];
    l.children = s;
} if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
        l[r] === void 0 && (l[r] = u[r]); return { $$typeof: cr, type: e, key: o, ref: i, props: l, _owner: Oi.current }; }
function ld(e, t) { return { $$typeof: cr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
function Li(e) { return typeof e == "object" && e !== null && e.$$typeof === cr; }
function od(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return t[n]; }); }
var Ou = /\/+/g;
function Gl(e, t) { return typeof e == "object" && e !== null && e.key != null ? od("" + e.key) : t.toString(36); }
function Ir(e, t, n, r, l) { var o = typeof e; (o === "undefined" || o === "boolean") && (e = null); var i = !1; if (e === null)
    i = !0;
else
    switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object": switch (e.$$typeof) {
            case cr:
            case Xf: i = !0;
        }
    } if (i)
    return i = e, l = l(i), e = r === "" ? "." + Gl(i, 0) : r, Tu(l) ? (n = "", e != null && (n = e.replace(Ou, "$&/") + "/"), Ir(l, t, n, "", function (a) { return a; })) : l != null && (Li(l) && (l = ld(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ou, "$&/") + "/") + e)), t.push(l)), 1; if (i = 0, r = r === "" ? "." : r + ":", Tu(e))
    for (var u = 0; u < e.length; u++) {
        o = e[u];
        var s = r + Gl(o, u);
        i += Ir(o, t, n, s, l);
    }
else if (s = rd(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done;)
        o = o.value, s = r + Gl(o, u++), i += Ir(o, t, n, s, l);
else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return i; }
function Sr(e, t, n) { if (e == null)
    return e; var r = [], l = 0; return Ir(e, r, "", "", function (o) { return t.call(n, o, l++); }), r; }
function id(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var fe = { current: null }, Ur = { transition: null }, ud = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Ur, ReactCurrentOwner: Oi };
function ca() { throw Error("act(...) is not supported in production builds of React."); }
z.Children = { map: Sr, forEach: function (e, t, n) { Sr(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return Sr(e, function () { t++; }), t; }, toArray: function (e) { return Sr(e, function (t) { return t; }) || []; }, only: function (e) { if (!Li(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
z.Component = gn;
z.Fragment = Jf;
z.Profiler = Yf;
z.PureComponent = Ri;
z.StrictMode = Gf;
z.Suspense = ed;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ud;
z.act = ca;
z.cloneElement = function (e, t, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = la({}, e.props), l = e.key, o = e.ref, i = e._owner; if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Oi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
        var u = e.type.defaultProps;
    for (s in t)
        ua.call(t, s) && !sa.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
} var s = arguments.length - 2; if (s === 1)
    r.children = n;
else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++)
        u[a] = arguments[a + 2];
    r.children = u;
} return { $$typeof: cr, type: e.type, key: l, ref: o, props: r, _owner: i }; };
z.createContext = function (e) { return e = { $$typeof: Zf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: qf, _context: e }, e.Consumer = e; };
z.createElement = aa;
z.createFactory = function (e) { var t = aa.bind(null, e); return t.type = e, t; };
z.createRef = function () { return { current: null }; };
z.forwardRef = function (e) { return { $$typeof: bf, render: e }; };
z.isValidElement = Li;
z.lazy = function (e) { return { $$typeof: nd, _payload: { _status: -1, _result: e }, _init: id }; };
z.memo = function (e, t) { return { $$typeof: td, type: e, compare: t === void 0 ? null : t }; };
z.startTransition = function (e) { var t = Ur.transition; Ur.transition = {}; try {
    e();
}
finally {
    Ur.transition = t;
} };
z.unstable_act = ca;
z.useCallback = function (e, t) { return fe.current.useCallback(e, t); };
z.useContext = function (e) { return fe.current.useContext(e); };
z.useDebugValue = function () { };
z.useDeferredValue = function (e) { return fe.current.useDeferredValue(e); };
z.useEffect = function (e, t) { return fe.current.useEffect(e, t); };
z.useId = function () { return fe.current.useId(); };
z.useImperativeHandle = function (e, t, n) { return fe.current.useImperativeHandle(e, t, n); };
z.useInsertionEffect = function (e, t) { return fe.current.useInsertionEffect(e, t); };
z.useLayoutEffect = function (e, t) { return fe.current.useLayoutEffect(e, t); };
z.useMemo = function (e, t) { return fe.current.useMemo(e, t); };
z.useReducer = function (e, t, n) { return fe.current.useReducer(e, t, n); };
z.useRef = function (e) { return fe.current.useRef(e); };
z.useState = function (e) { return fe.current.useState(e); };
z.useSyncExternalStore = function (e, t, n) { return fe.current.useSyncExternalStore(e, t, n); };
z.useTransition = function () { return fe.current.useTransition(); };
z.version = "18.3.1";
na.exports = z;
var T = na.exports;
const fa = Kf(T), sd = Qf({ __proto__: null, default: fa }, [T]); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ad = T, cd = Symbol.for("react.element"), fd = Symbol.for("react.fragment"), dd = Object.prototype.hasOwnProperty, pd = ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, hd = { key: !0, ref: !0, __self: !0, __source: !0 };
function da(e, t, n) { var r, l = {}, o = null, i = null; n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref); for (r in t)
    dd.call(t, r) && !hd.hasOwnProperty(r) && (l[r] = t[r]); if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
        l[r] === void 0 && (l[r] = t[r]); return { $$typeof: cd, type: e, key: o, ref: i, props: l, _owner: pd.current }; }
xl.Fragment = fd;
xl.jsx = da;
xl.jsxs = da;
ta.exports = xl;
var I = ta.exports, Po = {}, pa = { exports: {} }, xe = {}, ha = { exports: {} }, ma = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function t(_, O) { var L = _.length; _.push(O); e: for (; 0 < L;) {
    var X = L - 1 >>> 1, b = _[X];
    if (0 < l(b, O))
        _[X] = O, _[L] = b, L = X;
    else
        break e;
} } function n(_) { return _.length === 0 ? null : _[0]; } function r(_) { if (_.length === 0)
    return null; var O = _[0], L = _.pop(); if (L !== O) {
    _[0] = L;
    e: for (var X = 0, b = _.length, gr = b >>> 1; X < gr;) {
        var Pt = 2 * (X + 1) - 1, Jl = _[Pt], Nt = Pt + 1, wr = _[Nt];
        if (0 > l(Jl, L))
            Nt < b && 0 > l(wr, Jl) ? (_[X] = wr, _[Nt] = L, X = Nt) : (_[X] = Jl, _[Pt] = L, X = Pt);
        else if (Nt < b && 0 > l(wr, L))
            _[X] = wr, _[Nt] = L, X = Nt;
        else
            break e;
    }
} return O; } function l(_, O) { var L = _.sortIndex - O.sortIndex; return L !== 0 ? L : _.id - O.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () { return o.now(); };
}
else {
    var i = Date, u = i.now();
    e.unstable_now = function () { return i.now() - u; };
} var s = [], a = [], p = 1, c = null, m = 3, w = !1, y = !1, v = !1, k = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function h(_) { for (var O = n(a); O !== null;) {
    if (O.callback === null)
        r(a);
    else if (O.startTime <= _)
        r(a), O.sortIndex = O.expirationTime, t(s, O);
    else
        break;
    O = n(a);
} } function S(_) { if (v = !1, h(_), !y)
    if (n(s) !== null)
        y = !0, Kl(x);
    else {
        var O = n(a);
        O !== null && Xl(S, O.startTime - _);
    } } function x(_, O) { y = !1, v && (v = !1, d(R), R = -1), w = !0; var L = m; try {
    for (h(O), c = n(s); c !== null && (!(c.expirationTime > O) || _ && !Fe());) {
        var X = c.callback;
        if (typeof X == "function") {
            c.callback = null, m = c.priorityLevel;
            var b = X(c.expirationTime <= O);
            O = e.unstable_now(), typeof b == "function" ? c.callback = b : c === n(s) && r(s), h(O);
        }
        else
            r(s);
        c = n(s);
    }
    if (c !== null)
        var gr = !0;
    else {
        var Pt = n(a);
        Pt !== null && Xl(S, Pt.startTime - O), gr = !1;
    }
    return gr;
}
finally {
    c = null, m = L, w = !1;
} } var P = !1, N = null, R = -1, K = 5, F = -1; function Fe() { return !(e.unstable_now() - F < K); } function kn() { if (N !== null) {
    var _ = e.unstable_now();
    F = _;
    var O = !0;
    try {
        O = N(!0, _);
    }
    finally {
        O ? xn() : (P = !1, N = null);
    }
}
else
    P = !1; } var xn; if (typeof f == "function")
    xn = function () { f(kn); };
else if (typeof MessageChannel < "u") {
    var Nu = new MessageChannel, Wf = Nu.port2;
    Nu.port1.onmessage = kn, xn = function () { Wf.postMessage(null); };
}
else
    xn = function () { k(kn, 0); }; function Kl(_) { N = _, P || (P = !0, xn()); } function Xl(_, O) { R = k(function () { _(e.unstable_now()); }, O); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (_) { _.callback = null; }, e.unstable_continueExecution = function () { y || w || (y = !0, Kl(x)); }, e.unstable_forceFrameRate = function (_) { 0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < _ ? Math.floor(1e3 / _) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return m; }, e.unstable_getFirstCallbackNode = function () { return n(s); }, e.unstable_next = function (_) { switch (m) {
    case 1:
    case 2:
    case 3:
        var O = 3;
        break;
    default: O = m;
} var L = m; m = O; try {
    return _();
}
finally {
    m = L;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (_, O) { switch (_) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: _ = 3;
} var L = m; m = _; try {
    return O();
}
finally {
    m = L;
} }, e.unstable_scheduleCallback = function (_, O, L) { var X = e.unstable_now(); switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? X + L : X) : L = X, _) {
    case 1:
        var b = -1;
        break;
    case 2:
        b = 250;
        break;
    case 5:
        b = 1073741823;
        break;
    case 4:
        b = 1e4;
        break;
    default: b = 5e3;
} return b = L + b, _ = { id: p++, callback: O, priorityLevel: _, startTime: L, expirationTime: b, sortIndex: -1 }, L > X ? (_.sortIndex = L, t(a, _), n(s) === null && _ === n(a) && (v ? (d(R), R = -1) : v = !0, Xl(S, L - X))) : (_.sortIndex = b, t(s, _), y || w || (y = !0, Kl(x))), _; }, e.unstable_shouldYield = Fe, e.unstable_wrapCallback = function (_) { var O = m; return function () { var L = m; m = O; try {
    return _.apply(this, arguments);
}
finally {
    m = L;
} }; }; })(ma);
ha.exports = ma;
var md = ha.exports; /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var yd = T, ke = md;
function E(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var ya = new Set, Kn = {};
function $t(e, t) { cn(e, t), cn(e + "Capture", t); }
function cn(e, t) { for (Kn[e] = t, e = 0; e < t.length; e++)
    ya.add(t[e]); }
var be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), No = Object.prototype.hasOwnProperty, vd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Lu = {}, zu = {};
function gd(e) { return No.call(zu, e) ? !0 : No.call(Lu, e) ? !1 : vd.test(e) ? zu[e] = !0 : (Lu[e] = !0, !1); }
function wd(e, t, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof t) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function Sd(e, t, n, r) { if (t === null || typeof t > "u" || wd(e, t, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !t;
        case 4: return t === !1;
        case 5: return isNaN(t);
        case 6: return isNaN(t) || 1 > t;
    } return !1; }
function de(e, t, n, r, l, o, i) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i; }
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { le[e] = new de(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; le[t] = new de(t, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { le[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { le[e] = new de(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { le[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { le[e] = new de(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { le[e] = new de(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { le[e] = new de(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { le[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var zi = /[\-:]([a-z])/g;
function Fi(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(zi, Fi); le[t] = new de(t, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(zi, Fi); le[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(zi, Fi); le[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { le[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1); });
le.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { le[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function ji(e, t, n, r) { var l = le.hasOwnProperty(t) ? le[t] : null; (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sd(t, n, l, r) && (n = null), r || l === null ? gd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
var rt = yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Er = Symbol.for("react.element"), Wt = Symbol.for("react.portal"), Qt = Symbol.for("react.fragment"), Di = Symbol.for("react.strict_mode"), Ro = Symbol.for("react.profiler"), va = Symbol.for("react.provider"), ga = Symbol.for("react.context"), Ai = Symbol.for("react.forward_ref"), To = Symbol.for("react.suspense"), Oo = Symbol.for("react.suspense_list"), Ii = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), wa = Symbol.for("react.offscreen"), Fu = Symbol.iterator;
function Cn(e) { return e === null || typeof e != "object" ? null : (e = Fu && e[Fu] || e["@@iterator"], typeof e == "function" ? e : null); }
var W = Object.assign, Yl;
function Fn(e) {
    if (Yl === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Yl = t && t[1] || "";
        }
    return `
` + Yl + e;
}
var ql = !1;
function Zl(e, t) {
    if (!e || ql)
        return "";
    ql = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                }
                catch (a) {
                    var r = a;
                }
                Reflect.construct(e, [], t);
            }
            else {
                try {
                    t.call();
                }
                catch (a) {
                    r = a;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (a) {
                r = a;
            }
            e();
        }
    }
    catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];)
                u--;
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if (i--, u--, 0 > u || l[i] !== o[u]) {
                                var s = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                            }
                        while (1 <= i && 0 <= u);
                    break;
                }
        }
    }
    finally {
        ql = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function Ed(e) { switch (e.tag) {
    case 5: return Fn(e.type);
    case 16: return Fn("Lazy");
    case 13: return Fn("Suspense");
    case 19: return Fn("SuspenseList");
    case 0:
    case 2:
    case 15: return e = Zl(e.type, !1), e;
    case 11: return e = Zl(e.type.render, !1), e;
    case 1: return e = Zl(e.type, !0), e;
    default: return "";
} }
function Lo(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case Qt: return "Fragment";
    case Wt: return "Portal";
    case Ro: return "Profiler";
    case Di: return "StrictMode";
    case To: return "Suspense";
    case Oo: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case ga: return (e.displayName || "Context") + ".Consumer";
        case va: return (e._context.displayName || "Context") + ".Provider";
        case Ai:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ii: return t = e.displayName || null, t !== null ? t : Lo(e.type) || "Memo";
        case it:
            t = e._payload, e = e._init;
            try {
                return Lo(e(t));
            }
            catch { }
    } return null; }
function kd(e) { var t = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (t.displayName || "Context") + ".Consumer";
    case 10: return (t._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return t;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return Lo(t);
    case 8: return t === Di ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
} return null; }
function Et(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function Sa(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
function xd(e) { var t = Sa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function () { return l.call(this); }, set: function (i) { r = "" + i, o.call(this, i); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (i) { r = "" + i; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
} }
function kr(e) { e._valueTracker || (e._valueTracker = xd(e)); }
function Ea(e) { if (!e)
    return !1; var t = e._valueTracker; if (!t)
    return !0; var n = t.getValue(), r = ""; return e && (r = Sa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1; }
function qr(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch {
    return e.body;
} }
function zo(e, t) { var n = t.checked; return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked }); }
function ju(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked; n = Et(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }; }
function ka(e, t) { t = t.checked, t != null && ji(e, "checked", t, !1); }
function Fo(e, t) { ka(e, t); var n = Et(t.value), r = t.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} t.hasOwnProperty("value") ? jo(e, t.type, n) : t.hasOwnProperty("defaultValue") && jo(e, t.type, Et(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked); }
function Du(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function jo(e, t, n) { (t !== "number" || qr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var jn = Array.isArray;
function nn(e, t, n, r) { if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + Et(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
            e[l].selected = !0, r && (e[l].defaultSelected = !0);
            return;
        }
        t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
} }
function Do(e, t) { if (t.dangerouslySetInnerHTML != null)
    throw Error(E(91)); return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function Au(e, t) { var n = t.value; if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
            throw Error(E(92));
        if (jn(n)) {
            if (1 < n.length)
                throw Error(E(93));
            n = n[0];
        }
        t = n;
    }
    t == null && (t = ""), n = t;
} e._wrapperState = { initialValue: Et(n) }; }
function xa(e, t) { var n = Et(t.value), r = Et(t.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function Iu(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t); }
function Ca(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function Ao(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Ca(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var xr, _a = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, l) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, l); }); } : e; }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
else {
    for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xr.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; t.firstChild;)
        e.appendChild(t.firstChild);
} });
function Xn(e, t) { if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
    }
} e.textContent = t; }
var In = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Cd = ["Webkit", "ms", "Moz", "O"];
Object.keys(In).forEach(function (e) { Cd.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e]; }); });
function Pa(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px"; }
function Na(e, t) { e = e.style; for (var n in t)
    if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, l = Pa(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    } }
var _d = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Io(e, t) { if (t) {
    if (_d[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
            throw Error(E(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
            throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object")
        throw Error(E(62));
} }
function Uo(e, t) { if (e.indexOf("-") === -1)
    return typeof t.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var Mo = null;
function Ui(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var Bo = null, rn = null, ln = null;
function Uu(e) { if (e = pr(e)) {
    if (typeof Bo != "function")
        throw Error(E(280));
    var t = e.stateNode;
    t && (t = Rl(t), Bo(e.stateNode, e.type, t));
} }
function Ra(e) { rn ? ln ? ln.push(e) : ln = [e] : rn = e; }
function Ta() { if (rn) {
    var e = rn, t = ln;
    if (ln = rn = null, Uu(e), t)
        for (e = 0; e < t.length; e++)
            Uu(t[e]);
} }
function Oa(e, t) { return e(t); }
function La() { }
var bl = !1;
function za(e, t, n) { if (bl)
    return e(t, n); bl = !0; try {
    return Oa(e, t, n);
}
finally {
    bl = !1, (rn !== null || ln !== null) && (La(), Ta());
} }
function Jn(e, t) { var n = e.stateNode; if (n === null)
    return null; var r = Rl(n); if (r === null)
    return null; n = r[t]; e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default: e = !1;
} if (e)
    return null; if (n && typeof n != "function")
    throw Error(E(231, t, typeof n)); return n; }
var $o = !1;
if (be)
    try {
        var _n = {};
        Object.defineProperty(_n, "passive", { get: function () { $o = !0; } }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
    }
    catch {
        $o = !1;
    }
function Pd(e, t, n, r, l, o, i, u, s) { var a = Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, a);
}
catch (p) {
    this.onError(p);
} }
var Un = !1, Zr = null, br = !1, Vo = null, Nd = { onError: function (e) { Un = !0, Zr = e; } };
function Rd(e, t, n, r, l, o, i, u, s) { Un = !1, Zr = null, Pd.apply(Nd, arguments); }
function Td(e, t, n, r, l, o, i, u, s) { if (Rd.apply(this, arguments), Un) {
    if (Un) {
        var a = Zr;
        Un = !1, Zr = null;
    }
    else
        throw Error(E(198));
    br || (br = !0, Vo = a);
} }
function Vt(e) { var t = e, n = e; if (e.alternate)
    for (; t.return;)
        t = t.return;
else {
    e = t;
    do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
} return t.tag === 3 ? n : null; }
function Fa(e) { if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
} return null; }
function Mu(e) { if (Vt(e) !== e)
    throw Error(E(188)); }
function Od(e) { var t = e.alternate; if (!t) {
    if (t = Vt(e), t === null)
        throw Error(E(188));
    return t !== e ? null : e;
} for (var n = e, r = t;;) {
    var l = n.return;
    if (l === null)
        break;
    var o = l.alternate;
    if (o === null) {
        if (r = l.return, r !== null) {
            n = r;
            continue;
        }
        break;
    }
    if (l.child === o.child) {
        for (o = l.child; o;) {
            if (o === n)
                return Mu(l), e;
            if (o === r)
                return Mu(l), t;
            o = o.sibling;
        }
        throw Error(E(188));
    }
    if (n.return !== r.return)
        n = l, r = o;
    else {
        for (var i = !1, u = l.child; u;) {
            if (u === n) {
                i = !0, n = l, r = o;
                break;
            }
            if (u === r) {
                i = !0, r = l, n = o;
                break;
            }
            u = u.sibling;
        }
        if (!i) {
            for (u = o.child; u;) {
                if (u === n) {
                    i = !0, n = o, r = l;
                    break;
                }
                if (u === r) {
                    i = !0, r = o, n = l;
                    break;
                }
                u = u.sibling;
            }
            if (!i)
                throw Error(E(189));
        }
    }
    if (n.alternate !== r)
        throw Error(E(190));
} if (n.tag !== 3)
    throw Error(E(188)); return n.stateNode.current === n ? e : t; }
function ja(e) { return e = Od(e), e !== null ? Da(e) : null; }
function Da(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var t = Da(e);
    if (t !== null)
        return t;
    e = e.sibling;
} return null; }
var Aa = ke.unstable_scheduleCallback, Bu = ke.unstable_cancelCallback, Ld = ke.unstable_shouldYield, zd = ke.unstable_requestPaint, J = ke.unstable_now, Fd = ke.unstable_getCurrentPriorityLevel, Mi = ke.unstable_ImmediatePriority, Ia = ke.unstable_UserBlockingPriority, el = ke.unstable_NormalPriority, jd = ke.unstable_LowPriority, Ua = ke.unstable_IdlePriority, Cl = null, Qe = null;
function Dd(e) { if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
        Qe.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128);
    }
    catch { } }
var Ue = Math.clz32 ? Math.clz32 : Ud, Ad = Math.log, Id = Math.LN2;
function Ud(e) { return e >>>= 0, e === 0 ? 32 : 31 - (Ad(e) / Id | 0) | 0; }
var Cr = 64, _r = 4194304;
function Dn(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function tl(e, t) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455; if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Dn(u) : (o &= i, o !== 0 && (r = Dn(o)));
}
else
    i = n & ~l, i !== 0 ? r = Dn(i) : o !== 0 && (r = Dn(o)); if (r === 0)
    return 0; if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;)
        n = 31 - Ue(t), l = 1 << n, r |= e[n], t &= ~l; return r; }
function Md(e, t) { switch (e) {
    case 1:
    case 2:
    case 4: return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function Bd(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
    var i = 31 - Ue(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Md(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
} }
function Ho(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function Ma() { var e = Cr; return Cr <<= 1, !(Cr & 4194240) && (Cr = 64), e; }
function eo(e) { for (var t = [], n = 0; 31 > n; n++)
    t.push(e); return t; }
function fr(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ue(t), e[t] = n; }
function $d(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var l = 31 - Ue(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
} }
function Bi(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
    var r = 31 - Ue(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
} }
var A = 0;
function Ba(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var $a, $i, Va, Ha, Wa, Wo = !1, Pr = [], pt = null, ht = null, mt = null, Gn = new Map, Yn = new Map, st = [], Vd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $u(e, t) { switch (e) {
    case "focusin":
    case "focusout":
        pt = null;
        break;
    case "dragenter":
    case "dragleave":
        ht = null;
        break;
    case "mouseover":
    case "mouseout":
        mt = null;
        break;
    case "pointerover":
    case "pointerout":
        Gn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": Yn.delete(t.pointerId);
} }
function Pn(e, t, n, r, l, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = pr(t), t !== null && $i(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e); }
function Hd(e, t, n, r, l) { switch (t) {
    case "focusin": return pt = Pn(pt, e, t, n, r, l), !0;
    case "dragenter": return ht = Pn(ht, e, t, n, r, l), !0;
    case "mouseover": return mt = Pn(mt, e, t, n, r, l), !0;
    case "pointerover":
        var o = l.pointerId;
        return Gn.set(o, Pn(Gn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture": return o = l.pointerId, Yn.set(o, Pn(Yn.get(o) || null, e, t, n, r, l)), !0;
} return !1; }
function Qa(e) { var t = Ot(e.target); if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
        if (t = n.tag, t === 13) {
            if (t = Fa(n), t !== null) {
                e.blockedOn = t, Wa(e.priority, function () { Va(n); });
                return;
            }
        }
        else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function Mr(e) { if (e.blockedOn !== null)
    return !1; for (var t = e.targetContainers; 0 < t.length;) {
    var n = Qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Mo = r, n.target.dispatchEvent(r), Mo = null;
    }
    else
        return t = pr(n), t !== null && $i(t), e.blockedOn = n, !1;
    t.shift();
} return !0; }
function Vu(e, t, n) { Mr(e) && n.delete(t); }
function Wd() { Wo = !1, pt !== null && Mr(pt) && (pt = null), ht !== null && Mr(ht) && (ht = null), mt !== null && Mr(mt) && (mt = null), Gn.forEach(Vu), Yn.forEach(Vu); }
function Nn(e, t) { e.blockedOn === t && (e.blockedOn = null, Wo || (Wo = !0, ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Wd))); }
function qn(e) { function t(l) { return Nn(l, e); } if (0 < Pr.length) {
    Nn(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
        var r = Pr[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (pt !== null && Nn(pt, e), ht !== null && Nn(ht, e), mt !== null && Nn(mt, e), Gn.forEach(t), Yn.forEach(t), n = 0; n < st.length; n++)
    r = st[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < st.length && (n = st[0], n.blockedOn === null);)
    Qa(n), n.blockedOn === null && st.shift(); }
var on = rt.ReactCurrentBatchConfig, nl = !0;
function Qd(e, t, n, r) { var l = A, o = on.transition; on.transition = null; try {
    A = 1, Vi(e, t, n, r);
}
finally {
    A = l, on.transition = o;
} }
function Kd(e, t, n, r) { var l = A, o = on.transition; on.transition = null; try {
    A = 4, Vi(e, t, n, r);
}
finally {
    A = l, on.transition = o;
} }
function Vi(e, t, n, r) { if (nl) {
    var l = Qo(e, t, n, r);
    if (l === null)
        co(e, t, r, rl, n), $u(e, r);
    else if (Hd(l, e, t, n, r))
        r.stopPropagation();
    else if ($u(e, r), t & 4 && -1 < Vd.indexOf(e)) {
        for (; l !== null;) {
            var o = pr(l);
            if (o !== null && $a(o), o = Qo(e, t, n, r), o === null && co(e, t, r, rl, n), o === l)
                break;
            l = o;
        }
        l !== null && r.stopPropagation();
    }
    else
        co(e, t, r, null, n);
} }
var rl = null;
function Qo(e, t, n, r) { if (rl = null, e = Ui(r), e = Ot(e), e !== null)
    if (t = Vt(e), t === null)
        e = null;
    else if (n = t.tag, n === 13) {
        if (e = Fa(t), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    }
    else
        t !== e && (e = null); return rl = e, null; }
function Ka(e) { switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart": return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave": return 4;
    case "message": switch (Fd()) {
        case Mi: return 1;
        case Ia: return 4;
        case el:
        case jd: return 16;
        case Ua: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var ct = null, Hi = null, Br = null;
function Xa() { if (Br)
    return Br; var e, t = Hi, n = t.length, r, l = "value" in ct ? ct.value : ct.textContent, o = l.length; for (e = 0; e < n && t[e] === l[e]; e++)
    ; var i = n - e; for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ; return Br = l.slice(e, 1 < r ? 1 - r : void 0); }
function $r(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function Nr() { return !0; }
function Hu() { return !1; }
function Ce(e) { function t(n, r, l, o, i) { this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null; for (var u in e)
    e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Nr : Hu, this.isPropagationStopped = Hu, this; } return W(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Nr); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Nr); }, persist: function () { }, isPersistent: Nr }), t; }
var wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Wi = Ce(wn), dr = W({}, wn, { view: 0, detail: 0 }), Xd = Ce(dr), to, no, Rn, _l = W({}, dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qi, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Rn && (Rn && e.type === "mousemove" ? (to = e.screenX - Rn.screenX, no = e.screenY - Rn.screenY) : no = to = 0, Rn = e), to); }, movementY: function (e) { return "movementY" in e ? e.movementY : no; } }), Wu = Ce(_l), Jd = W({}, _l, { dataTransfer: 0 }), Gd = Ce(Jd), Yd = W({}, dr, { relatedTarget: 0 }), ro = Ce(Yd), qd = W({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Zd = Ce(qd), bd = W({}, wn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), ep = Ce(bd), tp = W({}, wn, { data: 0 }), Qu = Ce(tp), np = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, rp = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, lp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function op(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = lp[e]) ? !!t[e] : !1; }
function Qi() { return op; }
var ip = W({}, dr, { key: function (e) { if (e.key) {
        var t = np[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } return e.type === "keypress" ? (e = $r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rp[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qi, charCode: function (e) { return e.type === "keypress" ? $r(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? $r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), up = Ce(ip), sp = W({}, _l, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ku = Ce(sp), ap = W({}, dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qi }), cp = Ce(ap), fp = W({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dp = Ce(fp), pp = W({}, _l, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), hp = Ce(pp), mp = [9, 13, 27, 32], Ki = be && "CompositionEvent" in window, Mn = null;
be && "documentMode" in document && (Mn = document.documentMode);
var yp = be && "TextEvent" in window && !Mn, Ja = be && (!Ki || Mn && 8 < Mn && 11 >= Mn), Xu = " ", Ju = !1;
function Ga(e, t) { switch (e) {
    case "keyup": return mp.indexOf(t.keyCode) !== -1;
    case "keydown": return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Ya(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var Kt = !1;
function vp(e, t) { switch (e) {
    case "compositionend": return Ya(t);
    case "keypress": return t.which !== 32 ? null : (Ju = !0, Xu);
    case "textInput": return e = t.data, e === Xu && Ju ? null : e;
    default: return null;
} }
function gp(e, t) { if (Kt)
    return e === "compositionend" || !Ki && Ga(e, t) ? (e = Xa(), Br = Hi = ct = null, Kt = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which);
        }
        return null;
    case "compositionend": return Ja && t.locale !== "ko" ? null : t.data;
    default: return null;
} }
var wp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Gu(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!wp[e.type] : t === "textarea"; }
function qa(e, t, n, r) { Ra(r), t = ll(t, "onChange"), 0 < t.length && (n = new Wi("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
var Bn = null, Zn = null;
function Sp(e) { sc(e, 0); }
function Pl(e) { var t = Gt(e); if (Ea(t))
    return e; }
function Ep(e, t) { if (e === "change")
    return t; }
var Za = !1;
if (be) {
    var lo;
    if (be) {
        var oo = "oninput" in document;
        if (!oo) {
            var Yu = document.createElement("div");
            Yu.setAttribute("oninput", "return;"), oo = typeof Yu.oninput == "function";
        }
        lo = oo;
    }
    else
        lo = !1;
    Za = lo && (!document.documentMode || 9 < document.documentMode);
}
function qu() { Bn && (Bn.detachEvent("onpropertychange", ba), Zn = Bn = null); }
function ba(e) { if (e.propertyName === "value" && Pl(Zn)) {
    var t = [];
    qa(t, Zn, e, Ui(e)), za(Sp, t);
} }
function kp(e, t, n) { e === "focusin" ? (qu(), Bn = t, Zn = n, Bn.attachEvent("onpropertychange", ba)) : e === "focusout" && qu(); }
function xp(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pl(Zn); }
function Cp(e, t) { if (e === "click")
    return Pl(t); }
function _p(e, t) { if (e === "input" || e === "change")
    return Pl(t); }
function Pp(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var Be = typeof Object.is == "function" ? Object.is : Pp;
function bn(e, t) { if (Be(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!No.call(t, l) || !Be(e[l], t[l]))
        return !1;
} return !0; }
function Zu(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function bu(e, t) { var n = Zu(e); e = 0; for (var r; n;) {
    if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
            return { node: n, offset: t - e };
        e = r;
    }
    e: {
        for (; n;) {
            if (n.nextSibling) {
                n = n.nextSibling;
                break e;
            }
            n = n.parentNode;
        }
        n = void 0;
    }
    n = Zu(n);
} }
function ec(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ec(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
function tc() { for (var e = window, t = qr(); t instanceof e.HTMLIFrameElement;) {
    try {
        var n = typeof t.contentWindow.location.href == "string";
    }
    catch {
        n = !1;
    }
    if (n)
        e = t.contentWindow;
    else
        break;
    t = qr(e.document);
} return t; }
function Xi(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
function Np(e) { var t = tc(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && ec(n.ownerDocument.documentElement, n)) {
    if (r !== null && Xi(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
            n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var l = n.textContent.length, o = Math.min(r.start, l);
            r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = bu(n, o);
            var i = bu(n, r);
            l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
    }
    for (t = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var Rp = be && "documentMode" in document && 11 >= document.documentMode, Xt = null, Ko = null, $n = null, Xo = !1;
function es(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; Xo || Xt == null || Xt !== qr(r) || (r = Xt, "selectionStart" in r && Xi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), $n && bn($n, r) || ($n = r, r = ll(Ko, "onSelect"), 0 < r.length && (t = new Wi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Xt))); }
function Rr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
var Jt = { animationend: Rr("Animation", "AnimationEnd"), animationiteration: Rr("Animation", "AnimationIteration"), animationstart: Rr("Animation", "AnimationStart"), transitionend: Rr("Transition", "TransitionEnd") }, io = {}, nc = {};
be && (nc = document.createElement("div").style, "AnimationEvent" in window || (delete Jt.animationend.animation, delete Jt.animationiteration.animation, delete Jt.animationstart.animation), "TransitionEvent" in window || delete Jt.transitionend.transition);
function Nl(e) { if (io[e])
    return io[e]; if (!Jt[e])
    return e; var t = Jt[e], n; for (n in t)
    if (t.hasOwnProperty(n) && n in nc)
        return io[e] = t[n]; return e; }
var rc = Nl("animationend"), lc = Nl("animationiteration"), oc = Nl("animationstart"), ic = Nl("transitionend"), uc = new Map, ts = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xt(e, t) { uc.set(e, t), $t(t, [e]); }
for (var uo = 0; uo < ts.length; uo++) {
    var so = ts[uo], Tp = so.toLowerCase(), Op = so[0].toUpperCase() + so.slice(1);
    xt(Tp, "on" + Op);
}
xt(rc, "onAnimationEnd");
xt(lc, "onAnimationIteration");
xt(oc, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(ic, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
$t("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$t("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$t("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$t("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lp = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));
function ns(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, Td(r, t, void 0, e), e.currentTarget = null; }
function sc(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
        var o = void 0;
        if (t)
            for (var i = r.length - 1; 0 <= i; i--) {
                var u = r[i], s = u.instance, a = u.currentTarget;
                if (u = u.listener, s !== o && l.isPropagationStopped())
                    break e;
                ns(l, u, a), o = s;
            }
        else
            for (i = 0; i < r.length; i++) {
                if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
                    break e;
                ns(l, u, a), o = s;
            }
    }
} if (br)
    throw e = Vo, br = !1, Vo = null, e; }
function M(e, t) { var n = t[Zo]; n === void 0 && (n = t[Zo] = new Set); var r = e + "__bubble"; n.has(r) || (ac(t, e, 2, !1), n.add(r)); }
function ao(e, t, n) { var r = 0; t && (r |= 4), ac(n, e, r, t); }
var Tr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) { if (!e[Tr]) {
    e[Tr] = !0, ya.forEach(function (n) { n !== "selectionchange" && (Lp.has(n) || ao(n, !1, e), ao(n, !0, e)); });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tr] || (t[Tr] = !0, ao("selectionchange", !1, t));
} }
function ac(e, t, n, r) { switch (Ka(t)) {
    case 1:
        var l = Qd;
        break;
    case 4:
        l = Kd;
        break;
    default: l = Vi;
} n = l.bind(null, t, n, e), l = void 0, !$o || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1); }
function co(e, t, n, r, l) { var o = r; if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l)
                break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var s = i.tag;
                    if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                        return;
                    i = i.return;
                }
            for (; u !== null;) {
                if (i = Ot(u), i === null)
                    return;
                if (s = i.tag, s === 5 || s === 6) {
                    r = o = i;
                    continue e;
                }
                u = u.parentNode;
            }
        }
        r = r.return;
    } za(function () { var a = o, p = Ui(n), c = []; e: {
    var m = uc.get(e);
    if (m !== void 0) {
        var w = Wi, y = e;
        switch (e) {
            case "keypress": if ($r(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                w = up;
                break;
            case "focusin":
                y = "focus", w = ro;
                break;
            case "focusout":
                y = "blur", w = ro;
                break;
            case "beforeblur":
            case "afterblur":
                w = ro;
                break;
            case "click": if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                w = Wu;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                w = Gd;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                w = cp;
                break;
            case rc:
            case lc:
            case oc:
                w = Zd;
                break;
            case ic:
                w = dp;
                break;
            case "scroll":
                w = Xd;
                break;
            case "wheel":
                w = hp;
                break;
            case "copy":
            case "cut":
            case "paste":
                w = ep;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": w = Ku;
        }
        var v = (t & 4) !== 0, k = !v && e === "scroll", d = v ? m !== null ? m + "Capture" : null : m;
        v = [];
        for (var f = a, h; f !== null;) {
            h = f;
            var S = h.stateNode;
            if (h.tag === 5 && S !== null && (h = S, d !== null && (S = Jn(f, d), S != null && v.push(tr(f, S, h)))), k)
                break;
            f = f.return;
        }
        0 < v.length && (m = new w(m, y, null, n, p), c.push({ event: m, listeners: v }));
    }
} if (!(t & 7)) {
    e: {
        if (m = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", m && n !== Mo && (y = n.relatedTarget || n.fromElement) && (Ot(y) || y[et]))
            break e;
        if ((w || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, w ? (y = n.relatedTarget || n.toElement, w = a, y = y ? Ot(y) : null, y !== null && (k = Vt(y), y !== k || y.tag !== 5 && y.tag !== 6) && (y = null)) : (w = null, y = a), w !== y)) {
            if (v = Wu, S = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (v = Ku, S = "onPointerLeave", d = "onPointerEnter", f = "pointer"), k = w == null ? m : Gt(w), h = y == null ? m : Gt(y), m = new v(S, f + "leave", w, n, p), m.target = k, m.relatedTarget = h, S = null, Ot(p) === a && (v = new v(d, f + "enter", y, n, p), v.target = h, v.relatedTarget = k, S = v), k = S, w && y)
                t: {
                    for (v = w, d = y, f = 0, h = v; h; h = Ht(h))
                        f++;
                    for (h = 0, S = d; S; S = Ht(S))
                        h++;
                    for (; 0 < f - h;)
                        v = Ht(v), f--;
                    for (; 0 < h - f;)
                        d = Ht(d), h--;
                    for (; f--;) {
                        if (v === d || d !== null && v === d.alternate)
                            break t;
                        v = Ht(v), d = Ht(d);
                    }
                    v = null;
                }
            else
                v = null;
            w !== null && rs(c, m, w, v, !1), y !== null && k !== null && rs(c, k, y, v, !0);
        }
    }
    e: {
        if (m = a ? Gt(a) : window, w = m.nodeName && m.nodeName.toLowerCase(), w === "select" || w === "input" && m.type === "file")
            var x = Ep;
        else if (Gu(m))
            if (Za)
                x = _p;
            else {
                x = xp;
                var P = kp;
            }
        else
            (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = Cp);
        if (x && (x = x(e, a))) {
            qa(c, x, n, p);
            break e;
        }
        P && P(e, m, a), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && jo(m, "number", m.value);
    }
    switch (P = a ? Gt(a) : window, e) {
        case "focusin":
            (Gu(P) || P.contentEditable === "true") && (Xt = P, Ko = a, $n = null);
            break;
        case "focusout":
            $n = Ko = Xt = null;
            break;
        case "mousedown":
            Xo = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            Xo = !1, es(c, n, p);
            break;
        case "selectionchange": if (Rp)
            break;
        case "keydown":
        case "keyup": es(c, n, p);
    }
    var N;
    if (Ki)
        e: {
            switch (e) {
                case "compositionstart":
                    var R = "onCompositionStart";
                    break e;
                case "compositionend":
                    R = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    R = "onCompositionUpdate";
                    break e;
            }
            R = void 0;
        }
    else
        Kt ? Ga(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
    R && (Ja && n.locale !== "ko" && (Kt || R !== "onCompositionStart" ? R === "onCompositionEnd" && Kt && (N = Xa()) : (ct = p, Hi = "value" in ct ? ct.value : ct.textContent, Kt = !0)), P = ll(a, R), 0 < P.length && (R = new Qu(R, e, null, n, p), c.push({ event: R, listeners: P }), N ? R.data = N : (N = Ya(n), N !== null && (R.data = N)))), (N = yp ? vp(e, n) : gp(e, n)) && (a = ll(a, "onBeforeInput"), 0 < a.length && (p = new Qu("onBeforeInput", "beforeinput", null, n, p), c.push({ event: p, listeners: a }), p.data = N));
} sc(c, t); }); }
function tr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
function ll(e, t) { for (var n = t + "Capture", r = []; e !== null;) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Jn(e, n), o != null && r.unshift(tr(e, o, l)), o = Jn(e, t), o != null && r.push(tr(e, o, l))), e = e.return;
} return r; }
function Ht(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function rs(e, t, n, r, l) { for (var o = t._reactName, i = []; n !== null && n !== r;) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
        break;
    u.tag === 5 && a !== null && (u = a, l ? (s = Jn(n, o), s != null && i.unshift(tr(n, s, u))) : l || (s = Jn(n, o), s != null && i.push(tr(n, s, u)))), n = n.return;
} i.length !== 0 && e.push({ event: t, listeners: i }); }
var zp = /\r\n?/g, Fp = /\u0000|\uFFFD/g;
function ls(e) {
    return (typeof e == "string" ? e : "" + e).replace(zp, `
`).replace(Fp, "");
}
function Or(e, t, n) { if (t = ls(t), ls(e) !== t && n)
    throw Error(E(425)); }
function ol() { }
var Jo = null, Go = null;
function Yo(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
var qo = typeof setTimeout == "function" ? setTimeout : void 0, jp = typeof clearTimeout == "function" ? clearTimeout : void 0, os = typeof Promise == "function" ? Promise : void 0, Dp = typeof queueMicrotask == "function" ? queueMicrotask : typeof os < "u" ? function (e) { return os.resolve(null).then(e).catch(Ap); } : qo;
function Ap(e) { setTimeout(function () { throw e; }); }
function fo(e, t) { var n = t, r = 0; do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
            if (r === 0) {
                e.removeChild(l), qn(t);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
} while (n); qn(t); }
function yt(e) { for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
        break;
    if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
            break;
        if (t === "/$")
            return null;
    }
} return e; }
function is(e) { e = e.previousSibling; for (var t = 0; e;) {
    if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0)
                return e;
            t--;
        }
        else
            n === "/$" && t++;
    }
    e = e.previousSibling;
} return null; }
var Sn = Math.random().toString(36).slice(2), He = "__reactFiber$" + Sn, nr = "__reactProps$" + Sn, et = "__reactContainer$" + Sn, Zo = "__reactEvents$" + Sn, Ip = "__reactListeners$" + Sn, Up = "__reactHandles$" + Sn;
function Ot(e) { var t = e[He]; if (t)
    return t; for (var n = e.parentNode; n;) {
    if (t = n[et] || n[He]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = is(e); e !== null;) {
                if (n = e[He])
                    return n;
                e = is(e);
            }
        return t;
    }
    e = n, n = e.parentNode;
} return null; }
function pr(e) { return e = e[He] || e[et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function Gt(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(E(33)); }
function Rl(e) { return e[nr] || null; }
var bo = [], Yt = -1;
function Ct(e) { return { current: e }; }
function B(e) { 0 > Yt || (e.current = bo[Yt], bo[Yt] = null, Yt--); }
function U(e, t) { Yt++, bo[Yt] = e.current, e.current = t; }
var kt = {}, se = Ct(kt), me = Ct(!1), At = kt;
function fn(e, t) { var n = e.type.contextTypes; if (!n)
    return kt; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext; var l = {}, o; for (o in n)
    l[o] = t[o]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l; }
function ye(e) { return e = e.childContextTypes, e != null; }
function il() { B(me), B(se); }
function us(e, t, n) { if (se.current !== kt)
    throw Error(E(168)); U(se, t), U(me, n); }
function cc(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var l in r)
    if (!(l in t))
        throw Error(E(108, kd(e) || "Unknown", l)); return W({}, n, r); }
function ul(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kt, At = se.current, U(se, e), U(me, me.current), !0; }
function ss(e, t, n) { var r = e.stateNode; if (!r)
    throw Error(E(169)); n ? (e = cc(e, t, At), r.__reactInternalMemoizedMergedChildContext = e, B(me), B(se), U(se, e)) : B(me), U(me, n); }
var Ge = null, Tl = !1, po = !1;
function fc(e) { Ge === null ? Ge = [e] : Ge.push(e); }
function Mp(e) { Tl = !0, fc(e); }
function _t() { if (!po && Ge !== null) {
    po = !0;
    var e = 0, t = A;
    try {
        var n = Ge;
        for (A = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        Ge = null, Tl = !1;
    }
    catch (l) {
        throw Ge !== null && (Ge = Ge.slice(e + 1)), Aa(Mi, _t), l;
    }
    finally {
        A = t, po = !1;
    }
} return null; }
var qt = [], Zt = 0, sl = null, al = 0, _e = [], Pe = 0, It = null, Ye = 1, qe = "";
function Rt(e, t) { qt[Zt++] = al, qt[Zt++] = sl, sl = e, al = t; }
function dc(e, t, n) { _e[Pe++] = Ye, _e[Pe++] = qe, _e[Pe++] = It, It = e; var r = Ye; e = qe; var l = 32 - Ue(r) - 1; r &= ~(1 << l), n += 1; var o = 32 - Ue(t) + l; if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ye = 1 << 32 - Ue(t) + l | n << l | r, qe = o + e;
}
else
    Ye = 1 << o | n << l | r, qe = e; }
function Ji(e) { e.return !== null && (Rt(e, 1), dc(e, 1, 0)); }
function Gi(e) { for (; e === sl;)
    sl = qt[--Zt], qt[Zt] = null, al = qt[--Zt], qt[Zt] = null; for (; e === It;)
    It = _e[--Pe], _e[Pe] = null, qe = _e[--Pe], _e[Pe] = null, Ye = _e[--Pe], _e[Pe] = null; }
var Ee = null, Se = null, $ = !1, Ie = null;
function pc(e, t) { var n = Ne(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
function as(e, t) { switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ee = e, Se = yt(t.firstChild), !0) : !1;
    case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ee = e, Se = null, !0) : !1;
    case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (n = It !== null ? { id: Ye, overflow: qe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ne(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ee = e, Se = null, !0) : !1;
    default: return !1;
} }
function ei(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function ti(e) { if ($) {
    var t = Se;
    if (t) {
        var n = t;
        if (!as(e, t)) {
            if (ei(e))
                throw Error(E(418));
            t = yt(n.nextSibling);
            var r = Ee;
            t && as(e, t) ? pc(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, Ee = e);
        }
    }
    else {
        if (ei(e))
            throw Error(E(418));
        e.flags = e.flags & -4097 | 2, $ = !1, Ee = e;
    }
} }
function cs(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; Ee = e; }
function Lr(e) { if (e !== Ee)
    return !1; if (!$)
    return cs(e), $ = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yo(e.type, e.memoizedProps)), t && (t = Se)) {
    if (ei(e))
        throw hc(), Error(E(418));
    for (; t;)
        pc(e, t), t = yt(t.nextSibling);
} if (cs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(E(317));
    e: {
        for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (t === 0) {
                        Se = yt(e.nextSibling);
                        break e;
                    }
                    t--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
        }
        Se = null;
    }
}
else
    Se = Ee ? yt(e.stateNode.nextSibling) : null; return !0; }
function hc() { for (var e = Se; e;)
    e = yt(e.nextSibling); }
function dn() { Se = Ee = null, $ = !1; }
function Yi(e) { Ie === null ? Ie = [e] : Ie.push(e); }
var Bp = rt.ReactCurrentBatchConfig;
function Tn(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(E(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(E(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) { var u = l.refs; i === null ? delete u[o] : u[o] = i; }, t._stringRef = o, t);
    }
    if (typeof e != "string")
        throw Error(E(284));
    if (!n._owner)
        throw Error(E(290, e));
} return e; }
function zr(e, t) { throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
function fs(e) { var t = e._init; return t(e._payload); }
function mc(e) { function t(d, f) { if (e) {
    var h = d.deletions;
    h === null ? (d.deletions = [f], d.flags |= 16) : h.push(f);
} } function n(d, f) { if (!e)
    return null; for (; f !== null;)
    t(d, f), f = f.sibling; return null; } function r(d, f) { for (d = new Map; f !== null;)
    f.key !== null ? d.set(f.key, f) : d.set(f.index, f), f = f.sibling; return d; } function l(d, f) { return d = St(d, f), d.index = 0, d.sibling = null, d; } function o(d, f, h) { return d.index = h, e ? (h = d.alternate, h !== null ? (h = h.index, h < f ? (d.flags |= 2, f) : h) : (d.flags |= 2, f)) : (d.flags |= 1048576, f); } function i(d) { return e && d.alternate === null && (d.flags |= 2), d; } function u(d, f, h, S) { return f === null || f.tag !== 6 ? (f = So(h, d.mode, S), f.return = d, f) : (f = l(f, h), f.return = d, f); } function s(d, f, h, S) { var x = h.type; return x === Qt ? p(d, f, h.props.children, S, h.key) : f !== null && (f.elementType === x || typeof x == "object" && x !== null && x.$$typeof === it && fs(x) === f.type) ? (S = l(f, h.props), S.ref = Tn(d, f, h), S.return = d, S) : (S = Jr(h.type, h.key, h.props, null, d.mode, S), S.ref = Tn(d, f, h), S.return = d, S); } function a(d, f, h, S) { return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = Eo(h, d.mode, S), f.return = d, f) : (f = l(f, h.children || []), f.return = d, f); } function p(d, f, h, S, x) { return f === null || f.tag !== 7 ? (f = jt(h, d.mode, S, x), f.return = d, f) : (f = l(f, h), f.return = d, f); } function c(d, f, h) { if (typeof f == "string" && f !== "" || typeof f == "number")
    return f = So("" + f, d.mode, h), f.return = d, f; if (typeof f == "object" && f !== null) {
    switch (f.$$typeof) {
        case Er: return h = Jr(f.type, f.key, f.props, null, d.mode, h), h.ref = Tn(d, null, f), h.return = d, h;
        case Wt: return f = Eo(f, d.mode, h), f.return = d, f;
        case it:
            var S = f._init;
            return c(d, S(f._payload), h);
    }
    if (jn(f) || Cn(f))
        return f = jt(f, d.mode, h, null), f.return = d, f;
    zr(d, f);
} return null; } function m(d, f, h, S) { var x = f !== null ? f.key : null; if (typeof h == "string" && h !== "" || typeof h == "number")
    return x !== null ? null : u(d, f, "" + h, S); if (typeof h == "object" && h !== null) {
    switch (h.$$typeof) {
        case Er: return h.key === x ? s(d, f, h, S) : null;
        case Wt: return h.key === x ? a(d, f, h, S) : null;
        case it: return x = h._init, m(d, f, x(h._payload), S);
    }
    if (jn(h) || Cn(h))
        return x !== null ? null : p(d, f, h, S, null);
    zr(d, h);
} return null; } function w(d, f, h, S, x) { if (typeof S == "string" && S !== "" || typeof S == "number")
    return d = d.get(h) || null, u(f, d, "" + S, x); if (typeof S == "object" && S !== null) {
    switch (S.$$typeof) {
        case Er: return d = d.get(S.key === null ? h : S.key) || null, s(f, d, S, x);
        case Wt: return d = d.get(S.key === null ? h : S.key) || null, a(f, d, S, x);
        case it:
            var P = S._init;
            return w(d, f, h, P(S._payload), x);
    }
    if (jn(S) || Cn(S))
        return d = d.get(h) || null, p(f, d, S, x, null);
    zr(f, S);
} return null; } function y(d, f, h, S) { for (var x = null, P = null, N = f, R = f = 0, K = null; N !== null && R < h.length; R++) {
    N.index > R ? (K = N, N = null) : K = N.sibling;
    var F = m(d, N, h[R], S);
    if (F === null) {
        N === null && (N = K);
        break;
    }
    e && N && F.alternate === null && t(d, N), f = o(F, f, R), P === null ? x = F : P.sibling = F, P = F, N = K;
} if (R === h.length)
    return n(d, N), $ && Rt(d, R), x; if (N === null) {
    for (; R < h.length; R++)
        N = c(d, h[R], S), N !== null && (f = o(N, f, R), P === null ? x = N : P.sibling = N, P = N);
    return $ && Rt(d, R), x;
} for (N = r(d, N); R < h.length; R++)
    K = w(N, d, R, h[R], S), K !== null && (e && K.alternate !== null && N.delete(K.key === null ? R : K.key), f = o(K, f, R), P === null ? x = K : P.sibling = K, P = K); return e && N.forEach(function (Fe) { return t(d, Fe); }), $ && Rt(d, R), x; } function v(d, f, h, S) { var x = Cn(h); if (typeof x != "function")
    throw Error(E(150)); if (h = x.call(h), h == null)
    throw Error(E(151)); for (var P = x = null, N = f, R = f = 0, K = null, F = h.next(); N !== null && !F.done; R++, F = h.next()) {
    N.index > R ? (K = N, N = null) : K = N.sibling;
    var Fe = m(d, N, F.value, S);
    if (Fe === null) {
        N === null && (N = K);
        break;
    }
    e && N && Fe.alternate === null && t(d, N), f = o(Fe, f, R), P === null ? x = Fe : P.sibling = Fe, P = Fe, N = K;
} if (F.done)
    return n(d, N), $ && Rt(d, R), x; if (N === null) {
    for (; !F.done; R++, F = h.next())
        F = c(d, F.value, S), F !== null && (f = o(F, f, R), P === null ? x = F : P.sibling = F, P = F);
    return $ && Rt(d, R), x;
} for (N = r(d, N); !F.done; R++, F = h.next())
    F = w(N, d, R, F.value, S), F !== null && (e && F.alternate !== null && N.delete(F.key === null ? R : F.key), f = o(F, f, R), P === null ? x = F : P.sibling = F, P = F); return e && N.forEach(function (kn) { return t(d, kn); }), $ && Rt(d, R), x; } function k(d, f, h, S) { if (typeof h == "object" && h !== null && h.type === Qt && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
    switch (h.$$typeof) {
        case Er:
            e: {
                for (var x = h.key, P = f; P !== null;) {
                    if (P.key === x) {
                        if (x = h.type, x === Qt) {
                            if (P.tag === 7) {
                                n(d, P.sibling), f = l(P, h.props.children), f.return = d, d = f;
                                break e;
                            }
                        }
                        else if (P.elementType === x || typeof x == "object" && x !== null && x.$$typeof === it && fs(x) === P.type) {
                            n(d, P.sibling), f = l(P, h.props), f.ref = Tn(d, P, h), f.return = d, d = f;
                            break e;
                        }
                        n(d, P);
                        break;
                    }
                    else
                        t(d, P);
                    P = P.sibling;
                }
                h.type === Qt ? (f = jt(h.props.children, d.mode, S, h.key), f.return = d, d = f) : (S = Jr(h.type, h.key, h.props, null, d.mode, S), S.ref = Tn(d, f, h), S.return = d, d = S);
            }
            return i(d);
        case Wt:
            e: {
                for (P = h.key; f !== null;) {
                    if (f.key === P)
                        if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                            n(d, f.sibling), f = l(f, h.children || []), f.return = d, d = f;
                            break e;
                        }
                        else {
                            n(d, f);
                            break;
                        }
                    else
                        t(d, f);
                    f = f.sibling;
                }
                f = Eo(h, d.mode, S), f.return = d, d = f;
            }
            return i(d);
        case it: return P = h._init, k(d, f, P(h._payload), S);
    }
    if (jn(h))
        return y(d, f, h, S);
    if (Cn(h))
        return v(d, f, h, S);
    zr(d, h);
} return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, h), f.return = d, d = f) : (n(d, f), f = So(h, d.mode, S), f.return = d, d = f), i(d)) : n(d, f); } return k; }
var pn = mc(!0), yc = mc(!1), cl = Ct(null), fl = null, bt = null, qi = null;
function Zi() { qi = bt = fl = null; }
function bi(e) { var t = cl.current; B(cl), e._currentValue = t; }
function ni(e, t, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
    e = e.return;
} }
function un(e, t) { fl = e, qi = bt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), e.firstContext = null); }
function Le(e) { var t = e._currentValue; if (qi !== e)
    if (e = { context: e, memoizedValue: t, next: null }, bt === null) {
        if (fl === null)
            throw Error(E(308));
        bt = e, fl.dependencies = { lanes: 0, firstContext: e };
    }
    else
        bt = bt.next = e; return t; }
var Lt = null;
function eu(e) { Lt === null ? Lt = [e] : Lt.push(e); }
function vc(e, t, n, r) { var l = t.interleaved; return l === null ? (n.next = n, eu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, tt(e, r); }
function tt(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
var ut = !1;
function tu(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function gc(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function Ze(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
function vt(e, t, n) { var r = e.updateQueue; if (r === null)
    return null; if (r = r.shared, D & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, tt(e, n);
} return l = r.interleaved, l === null ? (t.next = t, eu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, tt(e, n); }
function Vr(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Bi(e, n);
} }
function ds(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            o === null ? l = o = i : o = o.next = i, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
    }
    else
        l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
function dl(e, t, n, r) { var l = e.updateQueue; ut = !1; var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending; if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== i && (u === null ? p.firstBaseUpdate = a : u.next = a, p.lastBaseUpdate = s));
} if (o !== null) {
    var c = l.baseState;
    i = 0, p = a = s = null, u = o;
    do {
        var m = u.lane, w = u.eventTime;
        if ((r & m) === m) {
            p !== null && (p = p.next = { eventTime: w, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
            e: {
                var y = e, v = u;
                switch (m = t, w = n, v.tag) {
                    case 1:
                        if (y = v.payload, typeof y == "function") {
                            c = y.call(w, c, m);
                            break e;
                        }
                        c = y;
                        break e;
                    case 3: y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = v.payload, m = typeof y == "function" ? y.call(w, c, m) : y, m == null)
                            break e;
                        c = W({}, c, m);
                        break e;
                    case 2: ut = !0;
                }
            }
            u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
        }
        else
            w = { eventTime: w, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, p === null ? (a = p = w, s = c) : p = p.next = w, i |= m;
        if (u = u.next, u === null) {
            if (u = l.shared.pending, u === null)
                break;
            m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
        }
    } while (!0);
    if (p === null && (s = c), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
        l = t;
        do
            i |= l.lane, l = l.next;
        while (l !== t);
    }
    else
        o === null && (l.shared.lanes = 0);
    Mt |= i, e.lanes = i, e.memoizedState = c;
} }
function ps(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
        var r = e[t], l = r.callback;
        if (l !== null) {
            if (r.callback = null, r = n, typeof l != "function")
                throw Error(E(191, l));
            l.call(r);
        }
    } }
var hr = {}, Ke = Ct(hr), rr = Ct(hr), lr = Ct(hr);
function zt(e) { if (e === hr)
    throw Error(E(174)); return e; }
function nu(e, t) { switch (U(lr, t), U(rr, e), U(Ke, hr), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ao(null, "");
        break;
    default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ao(t, e);
} B(Ke), U(Ke, t); }
function hn() { B(Ke), B(rr), B(lr); }
function wc(e) { zt(lr.current); var t = zt(Ke.current), n = Ao(t, e.type); t !== n && (U(rr, e), U(Ke, n)); }
function ru(e) { rr.current === e && (B(Ke), B(rr)); }
var V = Ct(0);
function pl(e) { for (var t = e; t !== null;) {
    if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
            return t;
    }
    else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
            return t;
    }
    else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
    }
    if (t === e)
        break;
    for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
            return null;
        t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
} return null; }
var ho = [];
function lu() { for (var e = 0; e < ho.length; e++)
    ho[e]._workInProgressVersionPrimary = null; ho.length = 0; }
var Hr = rt.ReactCurrentDispatcher, mo = rt.ReactCurrentBatchConfig, Ut = 0, H = null, q = null, ee = null, hl = !1, Vn = !1, or = 0, $p = 0;
function oe() { throw Error(E(321)); }
function ou(e, t) { if (t === null)
    return !1; for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n]))
        return !1; return !0; }
function iu(e, t, n, r, l, o) { if (Ut = o, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hr.current = e === null || e.memoizedState === null ? Qp : Kp, e = n(r, l), Vn) {
    o = 0;
    do {
        if (Vn = !1, or = 0, 25 <= o)
            throw Error(E(301));
        o += 1, ee = q = null, t.updateQueue = null, Hr.current = Xp, e = n(r, l);
    } while (Vn);
} if (Hr.current = ml, t = q !== null && q.next !== null, Ut = 0, ee = q = H = null, hl = !1, t)
    throw Error(E(300)); return e; }
function uu() { var e = or !== 0; return or = 0, e; }
function Ve() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return ee === null ? H.memoizedState = ee = e : ee = ee.next = e, ee; }
function ze() { if (q === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = q.next; var t = ee === null ? H.memoizedState : ee.next; if (t !== null)
    ee = t, q = e;
else {
    if (e === null)
        throw Error(E(310));
    q = e, e = { memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null }, ee === null ? H.memoizedState = ee = e : ee = ee.next = e;
} return ee; }
function ir(e, t) { return typeof t == "function" ? t(e) : t; }
function yo(e) { var t = ze(), n = t.queue; if (n === null)
    throw Error(E(311)); n.lastRenderedReducer = e; var r = q, l = r.baseQueue, o = n.pending; if (o !== null) {
    if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
} if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, a = o;
    do {
        var p = a.lane;
        if ((Ut & p) === p)
            s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
        else {
            var c = { lane: p, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null };
            s === null ? (u = s = c, i = r) : s = s.next = c, H.lanes |= p, Mt |= p;
        }
        a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, Be(r, t.memoizedState) || (he = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    l = e;
    do
        o = l.lane, H.lanes |= o, Mt |= o, l = l.next;
    while (l !== e);
}
else
    l === null && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
function vo(e) { var t = ze(), n = t.queue; if (n === null)
    throw Error(E(311)); n.lastRenderedReducer = e; var r = n.dispatch, l = n.pending, o = t.memoizedState; if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
        o = e(o, i.action), i = i.next;
    while (i !== l);
    Be(o, t.memoizedState) || (he = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
} return [o, r]; }
function Sc() { }
function Ec(e, t) { var n = H, r = ze(), l = t(), o = !Be(r.memoizedState, l); if (o && (r.memoizedState = l, he = !0), r = r.queue, su(Cc.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ee !== null && ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, ur(9, xc.bind(null, n, r, l, t), void 0, null), te === null)
        throw Error(E(349));
    Ut & 30 || kc(n, t, l);
} return l; }
function kc(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
function xc(e, t, n, r) { t.value = n, t.getSnapshot = r, _c(t) && Pc(e); }
function Cc(e, t, n) { return n(function () { _c(t) && Pc(e); }); }
function _c(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !Be(e, n);
}
catch {
    return !0;
} }
function Pc(e) { var t = tt(e, 1); t !== null && Me(t, e, 1, -1); }
function hs(e) { var t = Ve(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = Wp.bind(null, H, e), [t.memoizedState, e]; }
function ur(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e; }
function Nc() { return ze().memoizedState; }
function Wr(e, t, n, r) { var l = Ve(); H.flags |= e, l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r); }
function Ol(e, t, n, r) { var l = ze(); r = r === void 0 ? null : r; var o = void 0; if (q !== null) {
    var i = q.memoizedState;
    if (o = i.destroy, r !== null && ou(r, i.deps)) {
        l.memoizedState = ur(t, n, o, r);
        return;
    }
} H.flags |= e, l.memoizedState = ur(1 | t, n, o, r); }
function ms(e, t) { return Wr(8390656, 8, e, t); }
function su(e, t) { return Ol(2048, 8, e, t); }
function Rc(e, t) { return Ol(4, 2, e, t); }
function Tc(e, t) { return Ol(4, 4, e, t); }
function Oc(e, t) { if (typeof t == "function")
    return e = e(), t(e), function () { t(null); }; if (t != null)
    return e = e(), t.current = e, function () { t.current = null; }; }
function Lc(e, t, n) { return n = n != null ? n.concat([e]) : null, Ol(4, 4, Oc.bind(null, t, e), n); }
function au() { }
function zc(e, t) { var n = ze(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && ou(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
function Fc(e, t) { var n = ze(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && ou(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
function jc(e, t, n) { return Ut & 21 ? (Be(n, t) || (n = Ma(), H.lanes |= n, Mt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = n); }
function Vp(e, t) { var n = A; A = n !== 0 && 4 > n ? n : 4, e(!0); var r = mo.transition; mo.transition = {}; try {
    e(!1), t();
}
finally {
    A = n, mo.transition = r;
} }
function Dc() { return ze().memoizedState; }
function Hp(e, t, n) { var r = wt(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ac(e))
    Ic(t, n);
else if (n = vc(e, t, n, r), n !== null) {
    var l = ce();
    Me(n, e, r, l), Uc(n, t, r);
} }
function Wp(e, t, n) { var r = wt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (Ac(e))
    Ic(t, l);
else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
            var i = t.lastRenderedState, u = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = u, Be(u, i)) {
                var s = t.interleaved;
                s === null ? (l.next = l, eu(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                return;
            }
        }
        catch { }
        finally { }
    n = vc(e, t, l, r), n !== null && (l = ce(), Me(n, e, r, l), Uc(n, t, r));
} }
function Ac(e) { var t = e.alternate; return e === H || t !== null && t === H; }
function Ic(e, t) { Vn = hl = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
function Uc(e, t, n) { if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Bi(e, n);
} }
var ml = { readContext: Le, useCallback: oe, useContext: oe, useEffect: oe, useImperativeHandle: oe, useInsertionEffect: oe, useLayoutEffect: oe, useMemo: oe, useReducer: oe, useRef: oe, useState: oe, useDebugValue: oe, useDeferredValue: oe, useTransition: oe, useMutableSource: oe, useSyncExternalStore: oe, useId: oe, unstable_isNewReconciler: !1 }, Qp = { readContext: Le, useCallback: function (e, t) { return Ve().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: Le, useEffect: ms, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, Wr(4194308, 4, Oc.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Wr(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Wr(4, 2, e, t); }, useMemo: function (e, t) { var n = Ve(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = Ve(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Hp.bind(null, H, e), [r.memoizedState, e]; }, useRef: function (e) { var t = Ve(); return e = { current: e }, t.memoizedState = e; }, useState: hs, useDebugValue: au, useDeferredValue: function (e) { return Ve().memoizedState = e; }, useTransition: function () { var e = hs(!1), t = e[0]; return e = Vp.bind(null, e[1]), Ve().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = H, l = Ve(); if ($) {
        if (n === void 0)
            throw Error(E(407));
        n = n();
    }
    else {
        if (n = t(), te === null)
            throw Error(E(349));
        Ut & 30 || kc(r, t, n);
    } l.memoizedState = n; var o = { value: n, getSnapshot: t }; return l.queue = o, ms(Cc.bind(null, r, o, e), [e]), r.flags |= 2048, ur(9, xc.bind(null, r, o, n, t), void 0, null), n; }, useId: function () { var e = Ve(), t = te.identifierPrefix; if ($) {
        var n = qe, r = Ye;
        n = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = or++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    }
    else
        n = $p++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, Kp = { readContext: Le, useCallback: zc, useContext: Le, useEffect: su, useImperativeHandle: Lc, useInsertionEffect: Rc, useLayoutEffect: Tc, useMemo: Fc, useReducer: yo, useRef: Nc, useState: function () { return yo(ir); }, useDebugValue: au, useDeferredValue: function (e) { var t = ze(); return jc(t, q.memoizedState, e); }, useTransition: function () { var e = yo(ir)[0], t = ze().memoizedState; return [e, t]; }, useMutableSource: Sc, useSyncExternalStore: Ec, useId: Dc, unstable_isNewReconciler: !1 }, Xp = { readContext: Le, useCallback: zc, useContext: Le, useEffect: su, useImperativeHandle: Lc, useInsertionEffect: Rc, useLayoutEffect: Tc, useMemo: Fc, useReducer: vo, useRef: Nc, useState: function () { return vo(ir); }, useDebugValue: au, useDeferredValue: function (e) { var t = ze(); return q === null ? t.memoizedState = e : jc(t, q.memoizedState, e); }, useTransition: function () { var e = vo(ir)[0], t = ze().memoizedState; return [e, t]; }, useMutableSource: Sc, useSyncExternalStore: Ec, useId: Dc, unstable_isNewReconciler: !1 };
function De(e, t) { if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    return t;
} return t; }
function ri(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var Ll = { isMounted: function (e) { return (e = e._reactInternals) ? Vt(e) === e : !1; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = ce(), l = wt(e), o = Ze(r, l); o.payload = t, n != null && (o.callback = n), t = vt(e, o, l), t !== null && (Me(t, e, l, r), Vr(t, e, l)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = ce(), l = wt(e), o = Ze(r, l); o.tag = 1, o.payload = t, n != null && (o.callback = n), t = vt(e, o, l), t !== null && (Me(t, e, l, r), Vr(t, e, l)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = ce(), r = wt(e), l = Ze(n, r); l.tag = 2, t != null && (l.callback = t), t = vt(e, l, r), t !== null && (Me(t, e, r, n), Vr(t, e, r)); } };
function ys(e, t, n, r, l, o, i) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !bn(n, r) || !bn(l, o) : !0; }
function Mc(e, t, n) { var r = !1, l = kt, o = t.contextType; return typeof o == "object" && o !== null ? o = Le(o) : (l = ye(t) ? At : se.current, r = t.contextTypes, o = (r = r != null) ? fn(e, l) : kt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ll, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t; }
function vs(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ll.enqueueReplaceState(t, t.state, null); }
function li(e, t, n, r) { var l = e.stateNode; l.props = n, l.state = e.memoizedState, l.refs = {}, tu(e); var o = t.contextType; typeof o == "object" && o !== null ? l.context = Le(o) : (o = ye(t) ? At : se.current, l.context = fn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ri(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ll.enqueueReplaceState(l, l.state, null), dl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308); }
function mn(e, t) {
    try {
        var n = "", r = t;
        do
            n += Ed(r), r = r.return;
        while (r);
        var l = n;
    }
    catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
}
function go(e, t, n) { return { value: e, source: null, stack: n ?? null, digest: t ?? null }; }
function oi(e, t) { try {
    console.error(t.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var Jp = typeof WeakMap == "function" ? WeakMap : Map;
function Bc(e, t, n) { n = Ze(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { vl || (vl = !0, mi = r), oi(e, t); }, n; }
function $c(e, t, n) { n = Ze(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var l = t.value;
    n.payload = function () { return r(l); }, n.callback = function () { oi(e, t); };
} var o = e.stateNode; return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () { oi(e, t), typeof r != "function" && (gt === null ? gt = new Set([this]) : gt.add(this)); var i = t.stack; this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" }); }), n; }
function gs(e, t, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new Jp;
    var l = new Set;
    r.set(t, l);
}
else
    l = r.get(t), l === void 0 && (l = new Set, r.set(t, l)); l.has(n) || (l.add(n), e = sh.bind(null, e, t, n), t.then(e, e)); }
function ws(e) { do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
    e = e.return;
} while (e !== null); return null; }
function Ss(e, t, n, r, l) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ze(-1, 1), t.tag = 2, vt(n, t, 1))), n.lanes |= 1), e); }
var Gp = rt.ReactCurrentOwner, he = !1;
function ae(e, t, n, r) { t.child = e === null ? yc(t, null, n, r) : pn(t, e.child, n, r); }
function Es(e, t, n, r, l) { n = n.render; var o = t.ref; return un(t, l), r = iu(e, t, n, r, o, l), n = uu(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : ($ && n && Ji(t), t.flags |= 1, ae(e, t, r, l), t.child); }
function ks(e, t, n, r, l) { if (e === null) {
    var o = n.type;
    return typeof o == "function" && !vu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Vc(e, t, o, r, l)) : (e = Jr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
} if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : bn, n(i, r) && e.ref === t.ref)
        return nt(e, t, l);
} return t.flags |= 1, e = St(o, r), e.ref = t.ref, e.return = t, t.child = e; }
function Vc(e, t, n, r, l) { if (e !== null) {
    var o = e.memoizedProps;
    if (bn(o, r) && e.ref === t.ref)
        if (he = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
            e.flags & 131072 && (he = !0);
        else
            return t.lanes = e.lanes, nt(e, t, l);
} return ii(e, t, n, r, l); }
function Hc(e, t, n) { var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(tn, we), we |= n;
    else {
        if (!(n & 1073741824))
            return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(tn, we), we |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(tn, we), we |= r;
    }
else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(tn, we), we |= r; return ae(e, t, l, n), t.child; }
function Wc(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
function ii(e, t, n, r, l) { var o = ye(n) ? At : se.current; return o = fn(t, o), un(t, l), n = iu(e, t, n, r, o, l), r = uu(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nt(e, t, l)) : ($ && r && Ji(t), t.flags |= 1, ae(e, t, n, l), t.child); }
function xs(e, t, n, r, l) { if (ye(n)) {
    var o = !0;
    ul(t);
}
else
    o = !1; if (un(t, l), t.stateNode === null)
    Qr(e, t), Mc(t, n, r), li(t, n, r, l), r = !0;
else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Le(a) : (a = ye(n) ? At : se.current, a = fn(t, a));
    var p = n.getDerivedStateFromProps, c = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && vs(t, i, r, a), ut = !1;
    var m = t.memoizedState;
    i.state = m, dl(t, r, i, l), s = t.memoizedState, u !== r || m !== s || me.current || ut ? (typeof p == "function" && (ri(t, n, p, r), s = t.memoizedState), (u = ut || ys(t, n, u, r, m, s, a)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
}
else {
    i = t.stateNode, gc(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : De(t.type, u), i.props = a, c = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Le(s) : (s = ye(n) ? At : se.current, s = fn(t, s));
    var w = n.getDerivedStateFromProps;
    (p = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== c || m !== s) && vs(t, i, r, s), ut = !1, m = t.memoizedState, i.state = m, dl(t, r, i, l);
    var y = t.memoizedState;
    u !== c || m !== y || me.current || ut ? (typeof w == "function" && (ri(t, n, w, r), y = t.memoizedState), (a = ut || ys(t, n, a, r, m, y, s) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
} return ui(e, t, n, r, o, l); }
function ui(e, t, n, r, l, o) { Wc(e, t); var i = (t.flags & 128) !== 0; if (!r && !i)
    return l && ss(t, n, !1), nt(e, t, o); r = t.stateNode, Gp.current = t; var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && i ? (t.child = pn(t, e.child, null, o), t.child = pn(t, null, u, o)) : ae(e, t, u, o), t.memoizedState = r.state, l && ss(t, n, !0), t.child; }
function Qc(e) { var t = e.stateNode; t.pendingContext ? us(e, t.pendingContext, t.pendingContext !== t.context) : t.context && us(e, t.context, !1), nu(e, t.containerInfo); }
function Cs(e, t, n, r, l) { return dn(), Yi(l), t.flags |= 256, ae(e, t, n, r), t.child; }
var si = { dehydrated: null, treeContext: null, retryLane: 0 };
function ai(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function Kc(e, t, n) { var r = t.pendingProps, l = V.current, o = !1, i = (t.flags & 128) !== 0, u; if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(V, l & 1), e === null)
    return ti(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = jl(i, r, 0, null), e = jt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ai(n), t.memoizedState = si, e) : cu(t, i)); if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Yp(e, t, i, r, u, l, n); if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = St(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = St(u, o) : (o = jt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ai(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = si, r;
} return o = e.child, e = o.sibling, r = St(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r; }
function cu(e, t) { return t = jl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t; }
function Fr(e, t, n, r) { return r !== null && Yi(r), pn(t, e.child, null, n), e = cu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
function Yp(e, t, n, r, l, o, i) { if (n)
    return t.flags & 256 ? (t.flags &= -257, r = go(Error(E(422))), Fr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = jl({ mode: "visible", children: r.children }, l, 0, null), o = jt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pn(t, e.child, null, i), t.child.memoizedState = ai(i), t.memoizedState = si, o); if (!(t.mode & 1))
    return Fr(e, t, i, null); if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
        var u = r.dgst;
    return r = u, o = Error(E(419)), r = go(o, r, void 0), Fr(e, t, i, r);
} if (u = (i & e.childLanes) !== 0, he || u) {
    if (r = te, r !== null) {
        switch (i & -i) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default: l = 0;
        }
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, tt(e, l), Me(r, e, l, -1));
    }
    return yu(), r = go(Error(E(421))), Fr(e, t, i, r);
} return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ah.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Se = yt(l.nextSibling), Ee = t, $ = !0, Ie = null, e !== null && (_e[Pe++] = Ye, _e[Pe++] = qe, _e[Pe++] = It, Ye = e.id, qe = e.overflow, It = t), t = cu(t, r.children), t.flags |= 4096, t); }
function _s(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), ni(e.return, t, n); }
function wo(e, t, n, r, l) { var o = e.memoizedState; o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l); }
function Xc(e, t, n) { var r = t.pendingProps, l = r.revealOrder, o = r.tail; if (ae(e, t, r.children, n), r = V.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && _s(e, n, t);
            else if (e.tag === 19)
                _s(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
} if (U(V, r), !(t.mode & 1))
    t.memoizedState = null;
else
    switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;)
                e = n.alternate, e !== null && pl(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), wo(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && pl(e) === null) {
                    t.child = l;
                    break;
                }
                e = l.sibling, l.sibling = n, n = l, l = e;
            }
            wo(t, !0, n, null, o);
            break;
        case "together":
            wo(t, !1, null, null, void 0);
            break;
        default: t.memoizedState = null;
    } return t.child; }
function Qr(e, t) { !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2); }
function nt(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), Mt |= t.lanes, !(n & t.childLanes))
    return null; if (e !== null && t.child !== e.child)
    throw Error(E(153)); if (t.child !== null) {
    for (e = t.child, n = St(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        e = e.sibling, n = n.sibling = St(e, e.pendingProps), n.return = t;
    n.sibling = null;
} return t.child; }
function qp(e, t, n) { switch (t.tag) {
    case 3:
        Qc(t), dn();
        break;
    case 5:
        wc(t);
        break;
    case 1:
        ye(t.type) && ul(t);
        break;
    case 4:
        nu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        U(cl, r._currentValue), r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? (U(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Kc(e, t, n) : (U(V, V.current & 1), e = nt(e, t, n), e !== null ? e.sibling : null);
        U(V, V.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r)
                return Xc(e, t, n);
            t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(V, V.current), r)
            break;
        return null;
    case 22:
    case 23: return t.lanes = 0, Hc(e, t, n);
} return nt(e, t, n); }
var Jc, ci, Gc, Yc;
Jc = function (e, t) { for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === t)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === t)
            return;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} };
ci = function () { };
Gc = function (e, t, n, r) { var l = e.memoizedProps; if (l !== r) {
    e = t.stateNode, zt(Ke.current);
    var o = null;
    switch (n) {
        case "input":
            l = zo(e, l), r = zo(e, r), o = [];
            break;
        case "select":
            l = W({}, l, { value: void 0 }), r = W({}, r, { value: void 0 }), o = [];
            break;
        case "textarea":
            l = Do(e, l), r = Do(e, r), o = [];
            break;
        default: typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ol);
    }
    Io(n, r);
    var i;
    n = null;
    for (a in l)
        if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
            if (a === "style") {
                var u = l[a];
                for (i in u)
                    u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            }
            else
                a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Kn.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
        var s = r[a];
        if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
            if (a === "style")
                if (u) {
                    for (i in u)
                        !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for (i in s)
                        s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
                }
                else
                    n || (o || (o = []), o.push(a, n)), n = s;
            else
                a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Kn.hasOwnProperty(a) ? (s != null && a === "onScroll" && M("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
} };
Yc = function (e, t, n, r) { n !== r && (t.flags |= 4); };
function On(e, t) { if (!$)
    switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;)
                t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    } }
function ie(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
    for (var l = e.child; l !== null;)
        n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
else
    for (l = e.child; l !== null;)
        n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
function Zp(e, t, n) { var r = t.pendingProps; switch (Gi(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return ie(t), null;
    case 1: return ye(t.type) && il(), ie(t), null;
    case 3: return r = t.stateNode, hn(), B(me), B(se), lu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Lr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ie !== null && (gi(Ie), Ie = null))), ci(e, t), ie(t), null;
    case 5:
        ru(t);
        var l = zt(lr.current);
        if (n = t.type, e !== null && t.stateNode != null)
            Gc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(E(166));
                return ie(t), null;
            }
            if (e = zt(Ke.current), Lr(t)) {
                r = t.stateNode, n = t.type;
                var o = t.memoizedProps;
                switch (r[He] = t, r[nr] = o, e = (t.mode & 1) !== 0, n) {
                    case "dialog":
                        M("cancel", r), M("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        M("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < An.length; l++)
                            M(An[l], r);
                        break;
                    case "source":
                        M("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        M("error", r), M("load", r);
                        break;
                    case "details":
                        M("toggle", r);
                        break;
                    case "input":
                        ju(r, o), M("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!o.multiple }, M("invalid", r);
                        break;
                    case "textarea": Au(r, o), M("invalid", r);
                }
                Io(n, o), l = null;
                for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var u = o[i];
                        i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Or(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Or(r.textContent, u, e), l = ["children", "" + u]) : Kn.hasOwnProperty(i) && u != null && i === "onScroll" && M("scroll", r);
                    }
                switch (n) {
                    case "input":
                        kr(r), Du(r, o, !0);
                        break;
                    case "textarea":
                        kr(r), Iu(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof o.onClick == "function" && (r.onclick = ol);
                }
                r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
            }
            else {
                i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ca(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[He] = t, e[nr] = r, Jc(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (i = Uo(n, r), n) {
                        case "dialog":
                            M("cancel", e), M("close", e), l = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            M("load", e), l = r;
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < An.length; l++)
                                M(An[l], e);
                            l = r;
                            break;
                        case "source":
                            M("error", e), l = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            M("error", e), M("load", e), l = r;
                            break;
                        case "details":
                            M("toggle", e), l = r;
                            break;
                        case "input":
                            ju(e, r), l = zo(e, r), M("invalid", e);
                            break;
                        case "option":
                            l = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, l = W({}, r, { value: void 0 }), M("invalid", e);
                            break;
                        case "textarea":
                            Au(e, r), l = Do(e, r), M("invalid", e);
                            break;
                        default: l = r;
                    }
                    Io(n, l), u = l;
                    for (o in u)
                        if (u.hasOwnProperty(o)) {
                            var s = u[o];
                            o === "style" ? Na(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && _a(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Xn(e, s) : typeof s == "number" && Xn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Kn.hasOwnProperty(o) ? s != null && o === "onScroll" && M("scroll", e) : s != null && ji(e, o, s, i));
                        }
                    switch (n) {
                        case "input":
                            kr(e), Du(e, r, !1);
                            break;
                        case "textarea":
                            kr(e), Iu(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + Et(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, o = r.value, o != null ? nn(e, !!r.multiple, o, !1) : r.defaultValue != null && nn(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof l.onClick == "function" && (e.onclick = ol);
                    }
                    switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default: r = !1;
                    }
                }
                r && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return ie(t), null;
    case 6:
        if (e && t.stateNode != null)
            Yc(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(E(166));
            if (n = zt(lr.current), zt(Ke.current), Lr(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[He] = t, (o = r.nodeValue !== n) && (e = Ee, e !== null))
                    switch (e.tag) {
                        case 3:
                            Or(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && Or(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                o && (t.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[He] = t, t.stateNode = r;
        }
        return ie(t), null;
    case 13:
        if (B(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if ($ && Se !== null && t.mode & 1 && !(t.flags & 128))
                hc(), dn(), t.flags |= 98560, o = !1;
            else if (o = Lr(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(E(318));
                    if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                        throw Error(E(317));
                    o[He] = t;
                }
                else
                    dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                ie(t), o = !1;
            }
            else
                Ie !== null && (gi(Ie), Ie = null), o = !0;
            if (!o)
                return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? Z === 0 && (Z = 3) : yu())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4: return hn(), ci(e, t), e === null && er(t.stateNode.containerInfo), ie(t), null;
    case 10: return bi(t.type._context), ie(t), null;
    case 17: return ye(t.type) && il(), ie(t), null;
    case 19:
        if (B(V), o = t.memoizedState, o === null)
            return ie(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
            if (r)
                On(o, !1);
            else {
                if (Z !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (i = pl(e), i !== null) {
                            for (t.flags |= 128, On(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return U(V, V.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                o.tail !== null && J() > yn && (t.flags |= 128, r = !0, On(o, !1), t.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = pl(i), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), On(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$)
                        return ie(t), null;
                }
                else
                    2 * J() - o.renderingStartTime > yn && n !== 1073741824 && (t.flags |= 128, r = !0, On(o, !1), t.lanes = 4194304);
            o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = V.current, U(V, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23: return mu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? we & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24: return null;
    case 25: return null;
} throw Error(E(156, t.tag)); }
function bp(e, t) { switch (Gi(t), t.tag) {
    case 1: return ye(t.type) && il(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3: return hn(), B(me), B(se), lu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5: return ru(t), null;
    case 13:
        if (B(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(E(340));
            dn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19: return B(V), null;
    case 4: return hn(), null;
    case 10: return bi(t.type._context), null;
    case 22:
    case 23: return mu(), null;
    case 24: return null;
    default: return null;
} }
var jr = !1, ue = !1, eh = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function en(e, t) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            Q(e, t, r);
        }
    else
        n.current = null; }
function fi(e, t, n) { try {
    n();
}
catch (r) {
    Q(e, t, r);
} }
var Ps = !1;
function th(e, t) { if (Jo = nl, e = tc(), Xi(e)) {
    if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset, o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType;
                }
                catch {
                    n = null;
                    break e;
                }
                var i = 0, u = -1, s = -1, a = 0, p = 0, c = e, m = null;
                t: for (;;) {
                    for (var w; c !== n || l !== 0 && c.nodeType !== 3 || (u = i + l), c !== o || r !== 0 && c.nodeType !== 3 || (s = i + r), c.nodeType === 3 && (i += c.nodeValue.length), (w = c.firstChild) !== null;)
                        m = c, c = w;
                    for (;;) {
                        if (c === e)
                            break t;
                        if (m === n && ++a === l && (u = i), m === o && ++p === r && (s = i), (w = c.nextSibling) !== null)
                            break;
                        c = m, m = c.parentNode;
                    }
                    c = w;
                }
                n = u === -1 || s === -1 ? null : { start: u, end: s };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (Go = { focusedElem: e, selectionRange: n }, nl = !1, C = t; C !== null;)
    if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, C = e;
    else
        for (; C !== null;) {
            t = C;
            try {
                var y = t.alternate;
                if (t.flags & 1024)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (y !== null) {
                                var v = y.memoizedProps, k = y.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? v : De(t.type, v), k);
                                d.__reactInternalSnapshotBeforeUpdate = f;
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(E(163));
                    }
            }
            catch (S) {
                Q(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, C = e;
                break;
            }
            C = t.return;
        } return y = Ps, Ps = !1, y; }
function Hn(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
        if ((l.tag & e) === e) {
            var o = l.destroy;
            l.destroy = void 0, o !== void 0 && fi(t, n, o);
        }
        l = l.next;
    } while (l !== r);
} }
function zl(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== t);
} }
function di(e) { var t = e.ref; if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
} }
function qc(e) { var t = e.alternate; t !== null && (e.alternate = null, qc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[He], delete t[nr], delete t[Zo], delete t[Ip], delete t[Up])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function Zc(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function Ns(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || Zc(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function pi(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ol));
else if (r !== 4 && (e = e.child, e !== null))
    for (pi(e, t, n), e = e.sibling; e !== null;)
        pi(e, t, n), e = e.sibling; }
function hi(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (hi(e, t, n), e = e.sibling; e !== null;)
        hi(e, t, n), e = e.sibling; }
var ne = null, Ae = !1;
function lt(e, t, n) { for (n = n.child; n !== null;)
    bc(e, t, n), n = n.sibling; }
function bc(e, t, n) { if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
        Qe.onCommitFiberUnmount(Cl, n);
    }
    catch { } switch (n.tag) {
    case 5: ue || en(n, t);
    case 6:
        var r = ne, l = Ae;
        ne = null, lt(e, t, n), ne = r, Ae = l, ne !== null && (Ae ? (e = ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ne.removeChild(n.stateNode));
        break;
    case 18:
        ne !== null && (Ae ? (e = ne, n = n.stateNode, e.nodeType === 8 ? fo(e.parentNode, n) : e.nodeType === 1 && fo(e, n), qn(e)) : fo(ne, n.stateNode));
        break;
    case 4:
        r = ne, l = Ae, ne = n.stateNode.containerInfo, Ae = !0, lt(e, t, n), ne = r, Ae = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            l = r = r.next;
            do {
                var o = l, i = o.destroy;
                o = o.tag, i !== void 0 && (o & 2 || o & 4) && fi(n, t, i), l = l.next;
            } while (l !== r);
        }
        lt(e, t, n);
        break;
    case 1:
        if (!ue && (en(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (u) {
                Q(n, t, u);
            }
        lt(e, t, n);
        break;
    case 21:
        lt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, lt(e, t, n), ue = r) : lt(e, t, n);
        break;
    default: lt(e, t, n);
} }
function Rs(e) { var t = e.updateQueue; if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new eh), t.forEach(function (r) { var l = ch.bind(null, e, r); n.has(r) || (n.add(r), r.then(l, l)); });
} }
function je(e, t) { var n = t.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
            var o = e, i = t, u = i;
            e: for (; u !== null;) {
                switch (u.tag) {
                    case 5:
                        ne = u.stateNode, Ae = !1;
                        break e;
                    case 3:
                        ne = u.stateNode.containerInfo, Ae = !0;
                        break e;
                    case 4:
                        ne = u.stateNode.containerInfo, Ae = !0;
                        break e;
                }
                u = u.return;
            }
            if (ne === null)
                throw Error(E(160));
            bc(o, i, l), ne = null, Ae = !1;
            var s = l.alternate;
            s !== null && (s.return = null), l.return = null;
        }
        catch (a) {
            Q(l, t, a);
        }
    } if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
        ef(t, e), t = t.sibling; }
function ef(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (je(t, e), $e(e), r & 4) {
            try {
                Hn(3, e, e.return), zl(3, e);
            }
            catch (v) {
                Q(e, e.return, v);
            }
            try {
                Hn(5, e, e.return);
            }
            catch (v) {
                Q(e, e.return, v);
            }
        }
        break;
    case 1:
        je(t, e), $e(e), r & 512 && n !== null && en(n, n.return);
        break;
    case 5:
        if (je(t, e), $e(e), r & 512 && n !== null && en(n, n.return), e.flags & 32) {
            var l = e.stateNode;
            try {
                Xn(l, "");
            }
            catch (v) {
                Q(e, e.return, v);
            }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
            var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
            if (e.updateQueue = null, s !== null)
                try {
                    u === "input" && o.type === "radio" && o.name != null && ka(l, o), Uo(u, i);
                    var a = Uo(u, o);
                    for (i = 0; i < s.length; i += 2) {
                        var p = s[i], c = s[i + 1];
                        p === "style" ? Na(l, c) : p === "dangerouslySetInnerHTML" ? _a(l, c) : p === "children" ? Xn(l, c) : ji(l, p, c, a);
                    }
                    switch (u) {
                        case "input":
                            Fo(l, o);
                            break;
                        case "textarea":
                            xa(l, o);
                            break;
                        case "select":
                            var m = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var w = o.value;
                            w != null ? nn(l, !!o.multiple, w, !1) : m !== !!o.multiple && (o.defaultValue != null ? nn(l, !!o.multiple, o.defaultValue, !0) : nn(l, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    l[nr] = o;
                }
                catch (v) {
                    Q(e, e.return, v);
                }
        }
        break;
    case 6:
        if (je(t, e), $e(e), r & 4) {
            if (e.stateNode === null)
                throw Error(E(162));
            l = e.stateNode, o = e.memoizedProps;
            try {
                l.nodeValue = o;
            }
            catch (v) {
                Q(e, e.return, v);
            }
        }
        break;
    case 3:
        if (je(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                qn(t.containerInfo);
            }
            catch (v) {
                Q(e, e.return, v);
            }
        break;
    case 4:
        je(t, e), $e(e);
        break;
    case 13:
        je(t, e), $e(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (pu = J())), r & 4 && Rs(e);
        break;
    case 22:
        if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (a = ue) || p, je(t, e), ue = a) : je(t, e), $e(e), r & 8192) {
            if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !p && e.mode & 1)
                for (C = e, p = e.child; p !== null;) {
                    for (c = C = p; C !== null;) {
                        switch (m = C, w = m.child, m.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Hn(4, m, m.return);
                                break;
                            case 1:
                                en(m, m.return);
                                var y = m.stateNode;
                                if (typeof y.componentWillUnmount == "function") {
                                    r = m, n = m.return;
                                    try {
                                        t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                                    }
                                    catch (v) {
                                        Q(r, n, v);
                                    }
                                }
                                break;
                            case 5:
                                en(m, m.return);
                                break;
                            case 22: if (m.memoizedState !== null) {
                                Os(c);
                                continue;
                            }
                        }
                        w !== null ? (w.return = m, C = w) : Os(c);
                    }
                    p = p.sibling;
                }
            e: for (p = null, c = e;;) {
                if (c.tag === 5) {
                    if (p === null) {
                        p = c;
                        try {
                            l = c.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = c.stateNode, s = c.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Pa("display", i));
                        }
                        catch (v) {
                            Q(e, e.return, v);
                        }
                    }
                }
                else if (c.tag === 6) {
                    if (p === null)
                        try {
                            c.stateNode.nodeValue = a ? "" : c.memoizedProps;
                        }
                        catch (v) {
                            Q(e, e.return, v);
                        }
                }
                else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                    c.child.return = c, c = c.child;
                    continue;
                }
                if (c === e)
                    break e;
                for (; c.sibling === null;) {
                    if (c.return === null || c.return === e)
                        break e;
                    p === c && (p = null), c = c.return;
                }
                p === c && (p = null), c.sibling.return = c.return, c = c.sibling;
            }
        }
        break;
    case 19:
        je(t, e), $e(e), r & 4 && Rs(e);
        break;
    case 21: break;
    default: je(t, e), $e(e);
} }
function $e(e) { var t = e.flags; if (t & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if (Zc(n)) {
                    var r = n;
                    break e;
                }
                n = n.return;
            }
            throw Error(E(160));
        }
        switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Xn(l, ""), r.flags &= -33);
                var o = Ns(e);
                hi(e, o, l);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo, u = Ns(e);
                pi(e, u, i);
                break;
            default: throw Error(E(161));
        }
    }
    catch (s) {
        Q(e, e.return, s);
    }
    e.flags &= -3;
} t & 4096 && (e.flags &= -4097); }
function nh(e, t, n) { C = e, tf(e); }
function tf(e, t, n) { for (var r = (e.mode & 1) !== 0; C !== null;) {
    var l = C, o = l.child;
    if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || jr;
        if (!i) {
            var u = l.alternate, s = u !== null && u.memoizedState !== null || ue;
            u = jr;
            var a = ue;
            if (jr = i, (ue = s) && !a)
                for (C = l; C !== null;)
                    i = C, s = i.child, i.tag === 22 && i.memoizedState !== null ? Ls(l) : s !== null ? (s.return = i, C = s) : Ls(l);
            for (; o !== null;)
                C = o, tf(o), o = o.sibling;
            C = l, jr = u, ue = a;
        }
        Ts(e);
    }
    else
        l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : Ts(e);
} }
function Ts(e) { for (; C !== null;) {
    var t = C;
    if (t.flags & 8772) {
        var n = t.alternate;
        try {
            if (t.flags & 8772)
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ue || zl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ue)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : De(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var o = t.updateQueue;
                        o !== null && ps(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1: n = t.child.stateNode;
                                }
                            ps(t, i, n);
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case "img": s.src && (n.src = s.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (t.memoizedState === null) {
                            var a = t.alternate;
                            if (a !== null) {
                                var p = a.memoizedState;
                                if (p !== null) {
                                    var c = p.dehydrated;
                                    c !== null && qn(c);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25: break;
                    default: throw Error(E(163));
                }
            ue || t.flags & 512 && di(t);
        }
        catch (m) {
            Q(t, t.return, m);
        }
    }
    if (t === e) {
        C = null;
        break;
    }
    if (n = t.sibling, n !== null) {
        n.return = t.return, C = n;
        break;
    }
    C = t.return;
} }
function Os(e) { for (; C !== null;) {
    var t = C;
    if (t === e) {
        C = null;
        break;
    }
    var n = t.sibling;
    if (n !== null) {
        n.return = t.return, C = n;
        break;
    }
    C = t.return;
} }
function Ls(e) { for (; C !== null;) {
    var t = C;
    try {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    zl(4, t);
                }
                catch (s) {
                    Q(t, n, s);
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (s) {
                        Q(t, l, s);
                    }
                }
                var o = t.return;
                try {
                    di(t);
                }
                catch (s) {
                    Q(t, o, s);
                }
                break;
            case 5:
                var i = t.return;
                try {
                    di(t);
                }
                catch (s) {
                    Q(t, i, s);
                }
        }
    }
    catch (s) {
        Q(t, t.return, s);
    }
    if (t === e) {
        C = null;
        break;
    }
    var u = t.sibling;
    if (u !== null) {
        u.return = t.return, C = u;
        break;
    }
    C = t.return;
} }
var rh = Math.ceil, yl = rt.ReactCurrentDispatcher, fu = rt.ReactCurrentOwner, Re = rt.ReactCurrentBatchConfig, D = 0, te = null, Y = null, re = 0, we = 0, tn = Ct(0), Z = 0, sr = null, Mt = 0, Fl = 0, du = 0, Wn = null, pe = null, pu = 0, yn = 1 / 0, Je = null, vl = !1, mi = null, gt = null, Dr = !1, ft = null, gl = 0, Qn = 0, yi = null, Kr = -1, Xr = 0;
function ce() { return D & 6 ? J() : Kr !== -1 ? Kr : Kr = J(); }
function wt(e) { return e.mode & 1 ? D & 2 && re !== 0 ? re & -re : Bp.transition !== null ? (Xr === 0 && (Xr = Ma()), Xr) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ka(e.type)), e) : 1; }
function Me(e, t, n, r) { if (50 < Qn)
    throw Qn = 0, yi = null, Error(E(185)); fr(e, n, r), (!(D & 2) || e !== te) && (e === te && (!(D & 2) && (Fl |= n), Z === 4 && at(e, re)), ve(e, r), n === 1 && D === 0 && !(t.mode & 1) && (yn = J() + 500, Tl && _t())); }
function ve(e, t) { var n = e.callbackNode; Bd(e, t); var r = tl(e, e === te ? re : 0); if (r === 0)
    n !== null && Bu(n), e.callbackNode = null, e.callbackPriority = 0;
else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Bu(n), t === 1)
        e.tag === 0 ? Mp(zs.bind(null, e)) : fc(zs.bind(null, e)), Dp(function () { !(D & 6) && _t(); }), n = null;
    else {
        switch (Ba(r)) {
            case 1:
                n = Mi;
                break;
            case 4:
                n = Ia;
                break;
            case 16:
                n = el;
                break;
            case 536870912:
                n = Ua;
                break;
            default: n = el;
        }
        n = cf(n, nf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
} }
function nf(e, t) { if (Kr = -1, Xr = 0, D & 6)
    throw Error(E(327)); var n = e.callbackNode; if (sn() && e.callbackNode !== n)
    return null; var r = tl(e, e === te ? re : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || t)
    t = wl(e, r);
else {
    t = r;
    var l = D;
    D |= 2;
    var o = lf();
    (te !== e || re !== t) && (Je = null, yn = J() + 500, Ft(e, t));
    do
        try {
            ih();
            break;
        }
        catch (u) {
            rf(e, u);
        }
    while (!0);
    Zi(), yl.current = o, D = l, Y !== null ? t = 0 : (te = null, re = 0, t = Z);
} if (t !== 0) {
    if (t === 2 && (l = Ho(e), l !== 0 && (r = l, t = vi(e, l))), t === 1)
        throw n = sr, Ft(e, 0), at(e, r), ve(e, J()), n;
    if (t === 6)
        at(e, r);
    else {
        if (l = e.current.alternate, !(r & 30) && !lh(l) && (t = wl(e, r), t === 2 && (o = Ho(e), o !== 0 && (r = o, t = vi(e, o))), t === 1))
            throw n = sr, Ft(e, 0), at(e, r), ve(e, J()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
            case 0:
            case 1: throw Error(E(345));
            case 2:
                Tt(e, pe, Je);
                break;
            case 3:
                if (at(e, r), (r & 130023424) === r && (t = pu + 500 - J(), 10 < t)) {
                    if (tl(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes, (l & r) !== r) {
                        ce(), e.pingedLanes |= e.suspendedLanes & l;
                        break;
                    }
                    e.timeoutHandle = qo(Tt.bind(null, e, pe, Je), t);
                    break;
                }
                Tt(e, pe, Je);
                break;
            case 4:
                if (at(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, l = -1; 0 < r;) {
                    var i = 31 - Ue(r);
                    o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
                }
                if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * rh(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = qo(Tt.bind(null, e, pe, Je), r);
                    break;
                }
                Tt(e, pe, Je);
                break;
            case 5:
                Tt(e, pe, Je);
                break;
            default: throw Error(E(329));
        }
    }
} return ve(e, J()), e.callbackNode === n ? nf.bind(null, e) : null; }
function vi(e, t) { var n = Wn; return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = wl(e, t), e !== 2 && (t = pe, pe = n, t !== null && gi(t)), e; }
function gi(e) { pe === null ? pe = e : pe.push.apply(pe, e); }
function lh(e) { for (var t = e;;) {
    if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var l = n[r], o = l.getSnapshot;
                l = l.value;
                try {
                    if (!Be(o(), l))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
    else {
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return !0;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    }
} return !0; }
function at(e, t) { for (t &= ~du, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - Ue(t), r = 1 << n;
    e[n] = -1, t &= ~r;
} }
function zs(e) { if (D & 6)
    throw Error(E(327)); sn(); var t = tl(e, 0); if (!(t & 1))
    return ve(e, J()), null; var n = wl(e, t); if (e.tag !== 0 && n === 2) {
    var r = Ho(e);
    r !== 0 && (t = r, n = vi(e, r));
} if (n === 1)
    throw n = sr, Ft(e, 0), at(e, t), ve(e, J()), n; if (n === 6)
    throw Error(E(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tt(e, pe, Je), ve(e, J()), null; }
function hu(e, t) { var n = D; D |= 1; try {
    return e(t);
}
finally {
    D = n, D === 0 && (yn = J() + 500, Tl && _t());
} }
function Bt(e) { ft !== null && ft.tag === 0 && !(D & 6) && sn(); var t = D; D |= 1; var n = Re.transition, r = A; try {
    if (Re.transition = null, A = 1, e)
        return e();
}
finally {
    A = r, Re.transition = n, D = t, !(D & 6) && _t();
} }
function mu() { we = tn.current, B(tn); }
function Ft(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, jp(n)), Y !== null)
    for (n = Y.return; n !== null;) {
        var r = n;
        switch (Gi(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && il();
                break;
            case 3:
                hn(), B(me), B(se), lu();
                break;
            case 5:
                ru(r);
                break;
            case 4:
                hn();
                break;
            case 13:
                B(V);
                break;
            case 19:
                B(V);
                break;
            case 10:
                bi(r.type._context);
                break;
            case 22:
            case 23: mu();
        }
        n = n.return;
    } if (te = e, Y = e = St(e.current, null), re = we = t, Z = 0, sr = null, du = Fl = Mt = 0, pe = Wn = null, Lt !== null) {
    for (t = 0; t < Lt.length; t++)
        if (n = Lt[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var l = r.next, o = n.pending;
            if (o !== null) {
                var i = o.next;
                o.next = l, r.next = i;
            }
            n.pending = r;
        }
    Lt = null;
} return e; }
function rf(e, t) { do {
    var n = Y;
    try {
        if (Zi(), Hr.current = ml, hl) {
            for (var r = H.memoizedState; r !== null;) {
                var l = r.queue;
                l !== null && (l.pending = null), r = r.next;
            }
            hl = !1;
        }
        if (Ut = 0, ee = q = H = null, Vn = !1, or = 0, fu.current = null, n === null || n.return === null) {
            Z = 1, sr = t, Y = null;
            break;
        }
        e: {
            var o = e, i = n.return, u = n, s = t;
            if (t = re, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                var a = s, p = u, c = p.tag;
                if (!(p.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                    var m = p.alternate;
                    m ? (p.updateQueue = m.updateQueue, p.memoizedState = m.memoizedState, p.lanes = m.lanes) : (p.updateQueue = null, p.memoizedState = null);
                }
                var w = ws(i);
                if (w !== null) {
                    w.flags &= -257, Ss(w, i, u, o, t), w.mode & 1 && gs(o, a, t), t = w, s = a;
                    var y = t.updateQueue;
                    if (y === null) {
                        var v = new Set;
                        v.add(s), t.updateQueue = v;
                    }
                    else
                        y.add(s);
                    break e;
                }
                else {
                    if (!(t & 1)) {
                        gs(o, a, t), yu();
                        break e;
                    }
                    s = Error(E(426));
                }
            }
            else if ($ && u.mode & 1) {
                var k = ws(i);
                if (k !== null) {
                    !(k.flags & 65536) && (k.flags |= 256), Ss(k, i, u, o, t), Yi(mn(s, u));
                    break e;
                }
            }
            o = s = mn(s, u), Z !== 4 && (Z = 2), Wn === null ? Wn = [o] : Wn.push(o), o = i;
            do {
                switch (o.tag) {
                    case 3:
                        o.flags |= 65536, t &= -t, o.lanes |= t;
                        var d = Bc(o, s, t);
                        ds(o, d);
                        break e;
                    case 1:
                        u = s;
                        var f = o.type, h = o.stateNode;
                        if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (gt === null || !gt.has(h)))) {
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var S = $c(o, u, t);
                            ds(o, S);
                            break e;
                        }
                }
                o = o.return;
            } while (o !== null);
        }
        uf(n);
    }
    catch (x) {
        t = x, Y === n && n !== null && (Y = n = n.return);
        continue;
    }
    break;
} while (!0); }
function lf() { var e = yl.current; return yl.current = ml, e === null ? ml : e; }
function yu() { (Z === 0 || Z === 3 || Z === 2) && (Z = 4), te === null || !(Mt & 268435455) && !(Fl & 268435455) || at(te, re); }
function wl(e, t) { var n = D; D |= 2; var r = lf(); (te !== e || re !== t) && (Je = null, Ft(e, t)); do
    try {
        oh();
        break;
    }
    catch (l) {
        rf(e, l);
    }
while (!0); if (Zi(), D = n, yl.current = r, Y !== null)
    throw Error(E(261)); return te = null, re = 0, Z; }
function oh() { for (; Y !== null;)
    of(Y); }
function ih() { for (; Y !== null && !Ld();)
    of(Y); }
function of(e) { var t = af(e.alternate, e, we); e.memoizedProps = e.pendingProps, t === null ? uf(e) : Y = t, fu.current = null; }
function uf(e) { var t = e; do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
        if (n = bp(n, t), n !== null) {
            n.flags &= 32767, Y = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            Z = 6, Y = null;
            return;
        }
    }
    else if (n = Zp(n, t, we), n !== null) {
        Y = n;
        return;
    }
    if (t = t.sibling, t !== null) {
        Y = t;
        return;
    }
    Y = t = e;
} while (t !== null); Z === 0 && (Z = 5); }
function Tt(e, t, n) { var r = A, l = Re.transition; try {
    Re.transition = null, A = 1, uh(e, t, n, r);
}
finally {
    Re.transition = l, A = r;
} return null; }
function uh(e, t, n, r) { do
    sn();
while (ft !== null); if (D & 6)
    throw Error(E(327)); n = e.finishedWork; var l = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(E(177)); e.callbackNode = null, e.callbackPriority = 0; var o = n.lanes | n.childLanes; if ($d(e, o), e === te && (Y = te = null, re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Dr || (Dr = !0, cf(el, function () { return sn(), null; })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Re.transition, Re.transition = null;
    var i = A;
    A = 1;
    var u = D;
    D |= 4, fu.current = null, th(e, n), ef(n, e), Np(Go), nl = !!Jo, Go = Jo = null, e.current = n, nh(n), zd(), D = u, A = i, Re.transition = o;
}
else
    e.current = n; if (Dr && (Dr = !1, ft = e, gl = l), o = e.pendingLanes, o === 0 && (gt = null), Dd(n.stateNode), ve(e, J()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest }); if (vl)
    throw vl = !1, e = mi, mi = null, e; return gl & 1 && e.tag !== 0 && sn(), o = e.pendingLanes, o & 1 ? e === yi ? Qn++ : (Qn = 0, yi = e) : Qn = 0, _t(), null; }
function sn() { if (ft !== null) {
    var e = Ba(gl), t = Re.transition, n = A;
    try {
        if (Re.transition = null, A = 16 > e ? 16 : e, ft === null)
            var r = !1;
        else {
            if (e = ft, ft = null, gl = 0, D & 6)
                throw Error(E(331));
            var l = D;
            for (D |= 4, C = e.current; C !== null;) {
                var o = C, i = o.child;
                if (C.flags & 16) {
                    var u = o.deletions;
                    if (u !== null) {
                        for (var s = 0; s < u.length; s++) {
                            var a = u[s];
                            for (C = a; C !== null;) {
                                var p = C;
                                switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15: Hn(8, p, o);
                                }
                                var c = p.child;
                                if (c !== null)
                                    c.return = p, C = c;
                                else
                                    for (; C !== null;) {
                                        p = C;
                                        var m = p.sibling, w = p.return;
                                        if (qc(p), p === a) {
                                            C = null;
                                            break;
                                        }
                                        if (m !== null) {
                                            m.return = w, C = m;
                                            break;
                                        }
                                        C = w;
                                    }
                            }
                        }
                        var y = o.alternate;
                        if (y !== null) {
                            var v = y.child;
                            if (v !== null) {
                                y.child = null;
                                do {
                                    var k = v.sibling;
                                    v.sibling = null, v = k;
                                } while (v !== null);
                            }
                        }
                        C = o;
                    }
                }
                if (o.subtreeFlags & 2064 && i !== null)
                    i.return = o, C = i;
                else
                    e: for (; C !== null;) {
                        if (o = C, o.flags & 2048)
                            switch (o.tag) {
                                case 0:
                                case 11:
                                case 15: Hn(9, o, o.return);
                            }
                        var d = o.sibling;
                        if (d !== null) {
                            d.return = o.return, C = d;
                            break e;
                        }
                        C = o.return;
                    }
            }
            var f = e.current;
            for (C = f; C !== null;) {
                i = C;
                var h = i.child;
                if (i.subtreeFlags & 2064 && h !== null)
                    h.return = i, C = h;
                else
                    e: for (i = f; C !== null;) {
                        if (u = C, u.flags & 2048)
                            try {
                                switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15: zl(9, u);
                                }
                            }
                            catch (x) {
                                Q(u, u.return, x);
                            }
                        if (u === i) {
                            C = null;
                            break e;
                        }
                        var S = u.sibling;
                        if (S !== null) {
                            S.return = u.return, C = S;
                            break e;
                        }
                        C = u.return;
                    }
            }
            if (D = l, _t(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
                try {
                    Qe.onPostCommitFiberRoot(Cl, e);
                }
                catch { }
            r = !0;
        }
        return r;
    }
    finally {
        A = n, Re.transition = t;
    }
} return !1; }
function Fs(e, t, n) { t = mn(n, t), t = Bc(e, t, 1), e = vt(e, t, 1), t = ce(), e !== null && (fr(e, 1, t), ve(e, t)); }
function Q(e, t, n) { if (e.tag === 3)
    Fs(e, e, n);
else
    for (; t !== null;) {
        if (t.tag === 3) {
            Fs(t, e, n);
            break;
        }
        else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gt === null || !gt.has(r))) {
                e = mn(n, e), e = $c(t, e, 1), t = vt(t, e, 1), e = ce(), t !== null && (fr(t, 1, e), ve(t, e));
                break;
            }
        }
        t = t.return;
    } }
function sh(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, te === e && (re & n) === n && (Z === 4 || Z === 3 && (re & 130023424) === re && 500 > J() - pu ? Ft(e, 0) : du |= n), ve(e, t); }
function sf(e, t) { t === 0 && (e.mode & 1 ? (t = _r, _r <<= 1, !(_r & 130023424) && (_r = 4194304)) : t = 1); var n = ce(); e = tt(e, t), e !== null && (fr(e, t, n), ve(e, n)); }
function ah(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), sf(e, n); }
function ch(e, t) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(E(314));
} r !== null && r.delete(t), sf(e, n); }
var af;
af = function (e, t, n) { if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current)
        he = !0;
    else {
        if (!(e.lanes & n) && !(t.flags & 128))
            return he = !1, qp(e, t, n);
        he = !!(e.flags & 131072);
    }
else
    he = !1, $ && t.flags & 1048576 && dc(t, al, t.index); switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        Qr(e, t), e = t.pendingProps;
        var l = fn(t, se.current);
        un(t, n), l = iu(null, t, r, e, l, n);
        var o = uu();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ye(r) ? (o = !0, ul(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, tu(t), l.updater = Ll, t.stateNode = l, l._reactInternals = t, li(t, r, e, n), t = ui(null, t, r, !0, o, n)) : (t.tag = 0, $ && o && Ji(t), ae(null, t, l, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e: {
            switch (Qr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = dh(r), e = De(r, e), l) {
                case 0:
                    t = ii(null, t, r, e, n);
                    break e;
                case 1:
                    t = xs(null, t, r, e, n);
                    break e;
                case 11:
                    t = Es(null, t, r, e, n);
                    break e;
                case 14:
                    t = ks(null, t, r, De(r.type, e), n);
                    break e;
            }
            throw Error(E(306, r, ""));
        }
        return t;
    case 0: return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), ii(e, t, r, l, n);
    case 1: return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), xs(e, t, r, l, n);
    case 3:
        e: {
            if (Qc(t), e === null)
                throw Error(E(387));
            r = t.pendingProps, o = t.memoizedState, l = o.element, gc(e, t), dl(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element, o.isDehydrated)
                if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                    l = mn(Error(E(423)), t), t = Cs(e, t, r, n, l);
                    break e;
                }
                else if (r !== l) {
                    l = mn(Error(E(424)), t), t = Cs(e, t, r, n, l);
                    break e;
                }
                else
                    for (Se = yt(t.stateNode.containerInfo.firstChild), Ee = t, $ = !0, Ie = null, n = yc(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if (dn(), r === l) {
                    t = nt(e, t, n);
                    break e;
                }
                ae(e, t, r, n);
            }
            t = t.child;
        }
        return t;
    case 5: return wc(t), e === null && ti(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Yo(r, l) ? i = null : o !== null && Yo(r, o) && (t.flags |= 32), Wc(e, t), ae(e, t, i, n), t.child;
    case 6: return e === null && ti(t), null;
    case 13: return Kc(e, t, n);
    case 4: return nu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : ae(e, t, r, n), t.child;
    case 11: return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Es(e, t, r, l, n);
    case 7: return ae(e, t, t.pendingProps, n), t.child;
    case 8: return ae(e, t, t.pendingProps.children, n), t.child;
    case 12: return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, U(cl, r._currentValue), r._currentValue = i, o !== null)
                if (Be(o.value, i)) {
                    if (o.children === l.children && !me.current) {
                        t = nt(e, t, n);
                        break e;
                    }
                }
                else
                    for (o = t.child, o !== null && (o.return = t); o !== null;) {
                        var u = o.dependencies;
                        if (u !== null) {
                            i = o.child;
                            for (var s = u.firstContext; s !== null;) {
                                if (s.context === r) {
                                    if (o.tag === 1) {
                                        s = Ze(-1, n & -n), s.tag = 2;
                                        var a = o.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var p = a.pending;
                                            p === null ? s.next = s : (s.next = p.next, p.next = s), a.pending = s;
                                        }
                                    }
                                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), ni(o.return, n, t), u.lanes |= n;
                                    break;
                                }
                                s = s.next;
                            }
                        }
                        else if (o.tag === 10)
                            i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return, i === null)
                                throw Error(E(341));
                            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), ni(i, n, t), i = o.sibling;
                        }
                        else
                            i = o.child;
                        if (i !== null)
                            i.return = o;
                        else
                            for (i = o; i !== null;) {
                                if (i === t) {
                                    i = null;
                                    break;
                                }
                                if (o = i.sibling, o !== null) {
                                    o.return = i.return, i = o;
                                    break;
                                }
                                i = i.return;
                            }
                        o = i;
                    }
            ae(e, t, l.children, n), t = t.child;
        }
        return t;
    case 9: return l = t.type, r = t.pendingProps.children, un(t, n), l = Le(l), r = r(l), t.flags |= 1, ae(e, t, r, n), t.child;
    case 14: return r = t.type, l = De(r, t.pendingProps), l = De(r.type, l), ks(e, t, r, l, n);
    case 15: return Vc(e, t, t.type, t.pendingProps, n);
    case 17: return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : De(r, l), Qr(e, t), t.tag = 1, ye(r) ? (e = !0, ul(t)) : e = !1, un(t, n), Mc(t, r, l), li(t, r, l, n), ui(null, t, r, !0, e, n);
    case 19: return Xc(e, t, n);
    case 22: return Hc(e, t, n);
} throw Error(E(156, t.tag)); };
function cf(e, t) { return Aa(e, t); }
function fh(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function Ne(e, t, n, r) { return new fh(e, t, n, r); }
function vu(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function dh(e) { if (typeof e == "function")
    return vu(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === Ai)
        return 11;
    if (e === Ii)
        return 14;
} return 2; }
function St(e, t) { var n = e.alternate; return n === null ? (n = Ne(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function Jr(e, t, n, r, l, o) { var i = 2; if (r = e, typeof e == "function")
    vu(e) && (i = 1);
else if (typeof e == "string")
    i = 5;
else
    e: switch (e) {
        case Qt: return jt(n.children, l, o, t);
        case Di:
            i = 8, l |= 8;
            break;
        case Ro: return e = Ne(12, n, t, l | 2), e.elementType = Ro, e.lanes = o, e;
        case To: return e = Ne(13, n, t, l), e.elementType = To, e.lanes = o, e;
        case Oo: return e = Ne(19, n, t, l), e.elementType = Oo, e.lanes = o, e;
        case wa: return jl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case va:
                        i = 10;
                        break e;
                    case ga:
                        i = 9;
                        break e;
                    case Ai:
                        i = 11;
                        break e;
                    case Ii:
                        i = 14;
                        break e;
                    case it:
                        i = 16, r = null;
                        break e;
                }
            throw Error(E(130, e == null ? e : typeof e, ""));
    } return t = Ne(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t; }
function jt(e, t, n, r) { return e = Ne(7, e, r, t), e.lanes = n, e; }
function jl(e, t, n, r) { return e = Ne(22, e, r, t), e.elementType = wa, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
function So(e, t, n) { return e = Ne(6, e, null, t), e.lanes = n, e; }
function Eo(e, t, n) { return t = Ne(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
function ph(e, t, n, r, l) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = eo(0), this.expirationTimes = eo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null; }
function gu(e, t, n, r, l, o, i, u, s) { return e = new ph(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ne(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, tu(o), e; }
function hh(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Wt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }; }
function ff(e) { if (!e)
    return kt; e = e._reactInternals; e: {
    if (Vt(e) !== e || e.tag !== 1)
        throw Error(E(170));
    var t = e;
    do {
        switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1: if (ye(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        t = t.return;
    } while (t !== null);
    throw Error(E(171));
} if (e.tag === 1) {
    var n = e.type;
    if (ye(n))
        return cc(e, n, t);
} return t; }
function df(e, t, n, r, l, o, i, u, s) { return e = gu(n, r, !0, e, l, o, i, u, s), e.context = ff(null), n = e.current, r = ce(), l = wt(n), o = Ze(r, l), o.callback = t ?? null, vt(n, o, l), e.current.lanes = l, fr(e, l, r), ve(e, r), e; }
function Dl(e, t, n, r) { var l = t.current, o = ce(), i = wt(l); return n = ff(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ze(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = vt(l, t, i), e !== null && (Me(e, l, i, o), Vr(e, l, i)), i; }
function Sl(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function js(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
} }
function wu(e, t) { js(e, t), (e = e.alternate) && js(e, t); }
function mh() { return null; }
var pf = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function Su(e) { this._internalRoot = e; }
Al.prototype.render = Su.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
    throw Error(E(409)); Dl(e, t, null, null); };
Al.prototype.unmount = Su.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function () { Dl(null, e, null, null); }), t[et] = null;
} };
function Al(e) { this._internalRoot = e; }
Al.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var t = Ha();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++)
        ;
    st.splice(n, 0, e), n === 0 && Qa(e);
} };
function Eu(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function Il(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function Ds() { }
function yh(e, t, n, r, l) { if (l) {
    if (typeof r == "function") {
        var o = r;
        r = function () { var a = Sl(i); o.call(a); };
    }
    var i = df(t, r, e, 0, null, !1, !1, "", Ds);
    return e._reactRootContainer = i, e[et] = i.current, er(e.nodeType === 8 ? e.parentNode : e), Bt(), i;
} for (; l = e.lastChild;)
    e.removeChild(l); if (typeof r == "function") {
    var u = r;
    r = function () { var a = Sl(s); u.call(a); };
} var s = gu(e, 0, !1, null, null, !1, !1, "", Ds); return e._reactRootContainer = s, e[et] = s.current, er(e.nodeType === 8 ? e.parentNode : e), Bt(function () { Dl(t, s, n, r); }), s; }
function Ul(e, t, n, r, l) { var o = n._reactRootContainer; if (o) {
    var i = o;
    if (typeof l == "function") {
        var u = l;
        l = function () { var s = Sl(i); u.call(s); };
    }
    Dl(t, i, e, l);
}
else
    i = yh(n, t, e, l, r); return Sl(i); }
$a = function (e) { switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Dn(t.pendingLanes);
            n !== 0 && (Bi(t, n | 1), ve(t, J()), !(D & 6) && (yn = J() + 500, _t()));
        }
        break;
    case 13: Bt(function () { var r = tt(e, 1); if (r !== null) {
        var l = ce();
        Me(r, e, 1, l);
    } }), wu(e, 1);
} };
$i = function (e) { if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
        var n = ce();
        Me(t, e, 134217728, n);
    }
    wu(e, 134217728);
} };
Va = function (e) { if (e.tag === 13) {
    var t = wt(e), n = tt(e, t);
    if (n !== null) {
        var r = ce();
        Me(n, e, t, r);
    }
    wu(e, t);
} };
Ha = function () { return A; };
Wa = function (e, t) { var n = A; try {
    return A = e, t();
}
finally {
    A = n;
} };
Bo = function (e, t, n) { switch (t) {
    case "input":
        if (Fo(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = Rl(r);
                    if (!l)
                        throw Error(E(90));
                    Ea(r), Fo(r, l);
                }
            }
        }
        break;
    case "textarea":
        xa(e, n);
        break;
    case "select": t = n.value, t != null && nn(e, !!n.multiple, t, !1);
} };
Oa = hu;
La = Bt;
var vh = { usingClientEntryPoint: !1, Events: [pr, Gt, Rl, Ra, Ta, hu] }, Ln = { findFiberByHostInstance: Ot, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gh = { bundleType: Ln.bundleType, version: Ln.version, rendererPackageName: Ln.rendererPackageName, rendererConfig: Ln.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = ja(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: Ln.findFiberByHostInstance || mh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ar.isDisabled && Ar.supportsFiber)
        try {
            Cl = Ar.inject(gh), Qe = Ar;
        }
        catch { }
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vh;
xe.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!Eu(t))
    throw Error(E(200)); return hh(e, t, null, n); };
xe.createRoot = function (e, t) { if (!Eu(e))
    throw Error(E(299)); var n = !1, r = "", l = pf; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = gu(e, 1, !1, null, null, n, !1, r, l), e[et] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new Su(t); };
xe.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var t = e._reactInternals; if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e))); return e = ja(t), e = e === null ? null : e.stateNode, e; };
xe.flushSync = function (e) { return Bt(e); };
xe.hydrate = function (e, t, n) { if (!Il(t))
    throw Error(E(200)); return Ul(null, e, t, !0, n); };
xe.hydrateRoot = function (e, t, n) { if (!Eu(e))
    throw Error(E(405)); var r = n != null && n.hydratedSources || null, l = !1, o = "", i = pf; if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = df(t, null, e, 1, n ?? null, l, !1, o, i), e[et] = t.current, er(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l); return new Al(t); };
xe.render = function (e, t, n) { if (!Il(t))
    throw Error(E(200)); return Ul(null, e, t, !1, n); };
xe.unmountComponentAtNode = function (e) { if (!Il(e))
    throw Error(E(40)); return e._reactRootContainer ? (Bt(function () { Ul(null, null, e, !1, function () { e._reactRootContainer = null, e[et] = null; }); }), !0) : !1; };
xe.unstable_batchedUpdates = hu;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Il(n))
    throw Error(E(200)); if (e == null || e._reactInternals === void 0)
    throw Error(E(38)); return Ul(e, t, n, !1, r); };
xe.version = "18.3.1-next-f1338f8080-20240426";
function hf() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf);
    }
    catch (e) {
        console.error(e);
    } }
hf(), pa.exports = xe;
var wh = pa.exports, As = wh;
Po.createRoot = As.createRoot, Po.hydrateRoot = As.hydrateRoot; /**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function El() { return El = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, El.apply(this, arguments); }
var dt;
(function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; })(dt || (dt = {}));
const Is = "popstate";
function Sh(e) { e === void 0 && (e = {}); function t(r, l) { let { pathname: o, search: i, hash: u } = r.location; return wi("", { pathname: o, search: i, hash: u }, l.state && l.state.usr || null, l.state && l.state.key || "default"); } function n(r, l) { return typeof l == "string" ? l : yf(l); } return kh(t, n, null, e); }
function ge(e, t) { if (e === !1 || e === null || typeof e > "u")
    throw new Error(t); }
function mf(e, t) { if (!e) {
    typeof console < "u" && console.warn(t);
    try {
        throw new Error(t);
    }
    catch { }
} }
function Eh() { return Math.random().toString(36).substr(2, 8); }
function Us(e, t) { return { usr: e.state, key: e.key, idx: t }; }
function wi(e, t, n, r) { return n === void 0 && (n = null), El({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Ml(t) : t, { state: n, key: t && t.key || r || Eh() }); }
function yf(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t; }
function Ml(e) { let t = {}; if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
} return t; }
function kh(e, t, n, r) { r === void 0 && (r = {}); let { window: l = document.defaultView, v5Compat: o = !1 } = r, i = l.history, u = dt.Pop, s = null, a = p(); a == null && (a = 0, i.replaceState(El({}, i.state, { idx: a }), "")); function p() { return (i.state || { idx: null }).idx; } function c() { u = dt.Pop; let k = p(), d = k == null ? null : k - a; a = k, s && s({ action: u, location: v.location, delta: d }); } function m(k, d) { u = dt.Push; let f = wi(v.location, k, d); a = p() + 1; let h = Us(f, a), S = v.createHref(f); try {
    i.pushState(h, "", S);
}
catch (x) {
    if (x instanceof DOMException && x.name === "DataCloneError")
        throw x;
    l.location.assign(S);
} o && s && s({ action: u, location: v.location, delta: 1 }); } function w(k, d) { u = dt.Replace; let f = wi(v.location, k, d); a = p(); let h = Us(f, a), S = v.createHref(f); i.replaceState(h, "", S), o && s && s({ action: u, location: v.location, delta: 0 }); } function y(k) { let d = l.location.origin !== "null" ? l.location.origin : l.location.href, f = typeof k == "string" ? k : yf(k); return f = f.replace(/ $/, "%20"), ge(d, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, d); } let v = { get action() { return u; }, get location() { return e(l, i); }, listen(k) { if (s)
        throw new Error("A history only accepts one active listener"); return l.addEventListener(Is, c), s = k, () => { l.removeEventListener(Is, c), s = null; }; }, createHref(k) { return t(l, k); }, createURL: y, encodeLocation(k) { let d = y(k); return { pathname: d.pathname, search: d.search, hash: d.hash }; }, push: m, replace: w, go(k) { return i.go(k); } }; return v; }
var Ms;
(function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; })(Ms || (Ms = {}));
function xh(e, t, n) { n === void 0 && (n = "/"); let r = typeof t == "string" ? Ml(t) : t, l = wf(r.pathname || "/", n); if (l == null)
    return null; let o = vf(e); Ch(o); let i = null; for (let u = 0; i == null && u < o.length; ++u) {
    let s = Ah(l);
    i = Fh(o[u], s);
} return i; }
function vf(e, t, n, r) { t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""); let l = (o, i, u) => { let s = { relativePath: u === void 0 ? o.path || "" : u, caseSensitive: o.caseSensitive === !0, childrenIndex: i, route: o }; s.relativePath.startsWith("/") && (ge(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), s.relativePath = s.relativePath.slice(r.length)); let a = an([r, s.relativePath]), p = n.concat(s); o.children && o.children.length > 0 && (ge(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')), vf(o.children, t, p, a)), !(o.path == null && !o.index) && t.push({ path: a, score: Lh(a, o.index), routesMeta: p }); }; return e.forEach((o, i) => { var u; if (o.path === "" || !((u = o.path) != null && u.includes("?")))
    l(o, i);
else
    for (let s of gf(o.path))
        l(o, i, s); }), t; }
function gf(e) { let t = e.split("/"); if (t.length === 0)
    return []; let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, ""); if (r.length === 0)
    return l ? [o, ""] : [o]; let i = gf(r.join("/")), u = []; return u.push(...i.map(s => s === "" ? o : [o, s].join("/"))), l && u.push(...i), u.map(s => e.startsWith("/") && s === "" ? "/" : s); }
function Ch(e) { e.sort((t, n) => t.score !== n.score ? n.score - t.score : zh(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex))); }
const _h = /^:[\w-]+$/, Ph = 3, Nh = 2, Rh = 1, Th = 10, Oh = -2, Bs = e => e === "*";
function Lh(e, t) { let n = e.split("/"), r = n.length; return n.some(Bs) && (r += Oh), t && (r += Nh), n.filter(l => !Bs(l)).reduce((l, o) => l + (_h.test(o) ? Ph : o === "" ? Rh : Th), r); }
function zh(e, t) { return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0; }
function Fh(e, t) { let { routesMeta: n } = e, r = {}, l = "/", o = []; for (let i = 0; i < n.length; ++i) {
    let u = n[i], s = i === n.length - 1, a = l === "/" ? t : t.slice(l.length) || "/", p = jh({ path: u.relativePath, caseSensitive: u.caseSensitive, end: s }, a);
    if (!p)
        return null;
    Object.assign(r, p.params);
    let c = u.route;
    o.push({ params: r, pathname: an([l, p.pathname]), pathnameBase: Ih(an([l, p.pathnameBase])), route: c }), p.pathnameBase !== "/" && (l = an([l, p.pathnameBase]));
} return o; }
function jh(e, t) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = Dh(e.path, e.caseSensitive, e.end), l = t.match(n); if (!l)
    return null; let o = l[0], i = o.replace(/(.)\/+$/, "$1"), u = l.slice(1); return { params: r.reduce((a, p, c) => { let { paramName: m, isOptional: w } = p; if (m === "*") {
        let v = u[c] || "";
        i = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
    } const y = u[c]; return w && !y ? a[m] = void 0 : a[m] = (y || "").replace(/%2F/g, "/"), a; }, {}), pathname: o, pathnameBase: i, pattern: e }; }
function Dh(e, t, n) { t === void 0 && (t = !1), n === void 0 && (n = !0), mf(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let r = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, u, s) => (r.push({ paramName: u, isOptional: s != null }), s ? "/?([^\\/]+)?" : "/([^\\/]+)")); return e.endsWith("*") ? (r.push({ paramName: "*" }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]; }
function Ah(e) { try {
    return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
}
catch (t) {
    return mf(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
} }
function wf(e, t) { if (t === "/")
    return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null; let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && r !== "/" ? null : e.slice(n) || "/"; }
const an = e => e.join("/").replace(/\/\/+/g, "/"), Ih = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Uh(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e; }
const Sf = ["post", "put", "patch", "delete"];
new Set(Sf);
const Mh = ["get", ...Sf];
new Set(Mh); /**
* React Router v6.23.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function kl() { return kl = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, kl.apply(this, arguments); }
const Bh = T.createContext(null), $h = T.createContext(null), Ef = T.createContext(null), Bl = T.createContext(null), $l = T.createContext({ outlet: null, matches: [], isDataRoute: !1 }), kf = T.createContext(null);
function ku() { return T.useContext(Bl) != null; }
function Vh() { return ku() || ge(!1), T.useContext(Bl).location; }
function Hh(e, t) { return Wh(e, t); }
function Wh(e, t, n, r) { ku() || ge(!1); let { navigator: l } = T.useContext(Ef), { matches: o } = T.useContext($l), i = o[o.length - 1], u = i ? i.params : {}; i && i.pathname; let s = i ? i.pathnameBase : "/"; i && i.route; let a = Vh(), p; if (t) {
    var c;
    let k = typeof t == "string" ? Ml(t) : t;
    s === "/" || (c = k.pathname) != null && c.startsWith(s) || ge(!1), p = k;
}
else
    p = a; let m = p.pathname || "/", w = m; if (s !== "/") {
    let k = s.replace(/^\//, "").split("/");
    w = "/" + m.replace(/^\//, "").split("/").slice(k.length).join("/");
} let y = xh(e, { pathname: w }), v = Gh(y && y.map(k => Object.assign({}, k, { params: Object.assign({}, u, k.params), pathname: an([s, l.encodeLocation ? l.encodeLocation(k.pathname).pathname : k.pathname]), pathnameBase: k.pathnameBase === "/" ? s : an([s, l.encodeLocation ? l.encodeLocation(k.pathnameBase).pathname : k.pathnameBase]) })), o, n, r); return t && v ? T.createElement(Bl.Provider, { value: { location: kl({ pathname: "/", search: "", hash: "", state: null, key: "default" }, p), navigationType: dt.Pop } }, v) : v; }
function Qh() { let e = bh(), t = Uh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? T.createElement("pre", { style: l }, n) : null, null); }
const Kh = T.createElement(Qh, null);
class Xh extends T.Component {
    constructor(t) { super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error }; }
    static getDerivedStateFromError(t) { return { error: t }; }
    static getDerivedStateFromProps(t, n) { return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation }; }
    componentDidCatch(t, n) { console.error("React Router caught the following error during render", t, n); }
    render() { return this.state.error !== void 0 ? T.createElement($l.Provider, { value: this.props.routeContext }, T.createElement(kf.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; }
}
function Jh(e) { let { routeContext: t, match: n, children: r } = e, l = T.useContext(Bh); return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), T.createElement($l.Provider, { value: t }, r); }
function Gh(e, t, n, r) { var l; if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var o;
    if ((o = n) != null && o.errors)
        e = n.matches;
    else
        return null;
} let i = e, u = (l = n) == null ? void 0 : l.errors; if (u != null) {
    let p = i.findIndex(c => c.route.id && (u == null ? void 0 : u[c.route.id]) !== void 0);
    p >= 0 || ge(!1), i = i.slice(0, Math.min(i.length, p + 1));
} let s = !1, a = -1; if (n && r && r.v7_partialHydration)
    for (let p = 0; p < i.length; p++) {
        let c = i[p];
        if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (a = p), c.route.id) {
            let { loaderData: m, errors: w } = n, y = c.route.loader && m[c.route.id] === void 0 && (!w || w[c.route.id] === void 0);
            if (c.route.lazy || y) {
                s = !0, a >= 0 ? i = i.slice(0, a + 1) : i = [i[0]];
                break;
            }
        }
    } return i.reduceRight((p, c, m) => { let w, y = !1, v = null, k = null; n && (w = u && c.route.id ? u[c.route.id] : void 0, v = c.route.errorElement || Kh, s && (a < 0 && m === 0 ? (y = !0, k = null) : a === m && (y = !0, k = c.route.hydrateFallbackElement || null))); let d = t.concat(i.slice(0, m + 1)), f = () => { let h; return w ? h = v : y ? h = k : c.route.Component ? h = T.createElement(c.route.Component, null) : c.route.element ? h = c.route.element : h = p, T.createElement(Jh, { match: c, routeContext: { outlet: p, matches: d, isDataRoute: n != null }, children: h }); }; return n && (c.route.ErrorBoundary || c.route.errorElement || m === 0) ? T.createElement(Xh, { location: n.location, revalidation: n.revalidation, component: v, error: w, children: f(), routeContext: { outlet: null, matches: d, isDataRoute: !0 } }) : f(); }, null); }
var Si = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(Si || {});
function Yh(e) { let t = T.useContext($h); return t || ge(!1), t; }
function qh(e) { let t = T.useContext($l); return t || ge(!1), t; }
function Zh(e) { let t = qh(), n = t.matches[t.matches.length - 1]; return n.route.id || ge(!1), n.route.id; }
function bh() { var e; let t = T.useContext(kf), n = Yh(Si.UseRouteError), r = Zh(Si.UseRouteError); return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]; }
function Ei(e) { ge(!1); }
function em(e) { let { basename: t = "/", children: n = null, location: r, navigationType: l = dt.Pop, navigator: o, static: i = !1, future: u } = e; ku() && ge(!1); let s = t.replace(/^\/*/, "/"), a = T.useMemo(() => ({ basename: s, navigator: o, static: i, future: kl({ v7_relativeSplatPath: !1 }, u) }), [s, u, o, i]); typeof r == "string" && (r = Ml(r)); let { pathname: p = "/", search: c = "", hash: m = "", state: w = null, key: y = "default" } = r, v = T.useMemo(() => { let k = wf(p, s); return k == null ? null : { location: { pathname: k, search: c, hash: m, state: w, key: y }, navigationType: l }; }, [s, p, c, m, w, y, l]); return v == null ? null : T.createElement(Ef.Provider, { value: a }, T.createElement(Bl.Provider, { children: n, value: v })); }
function tm(e) { let { children: t, location: n } = e; return Hh(ki(t), n); }
new Promise(() => { });
function ki(e, t) { t === void 0 && (t = []); let n = []; return T.Children.forEach(e, (r, l) => { if (!T.isValidElement(r))
    return; let o = [...t, l]; if (r.type === T.Fragment) {
    n.push.apply(n, ki(r.props.children, o));
    return;
} r.type !== Ei && ge(!1), !r.props.index || !r.props.children || ge(!1); let i = { id: r.props.id || o.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy }; r.props.children && (i.children = ki(r.props.children, o)), n.push(i); }), n; } /**
* React Router DOM v6.23.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
const nm = "6";
try {
    window.__reactRouterVersion = nm;
}
catch { }
const rm = "startTransition", $s = sd[rm];
function lm(e) { let { basename: t, children: n, future: r, window: l } = e, o = T.useRef(); o.current == null && (o.current = Sh({ window: l, v5Compat: !0 })); let i = o.current, [u, s] = T.useState({ action: i.action, location: i.location }), { v7_startTransition: a } = r || {}, p = T.useCallback(c => { a && $s ? $s(() => s(c)) : s(c); }, [s, a]); return T.useLayoutEffect(() => i.listen(p), [i, p]), T.createElement(em, { basename: t, children: n, location: u.location, navigationType: u.action, navigator: i, future: r }); }
var Vs;
(function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"; })(Vs || (Vs = {}));
var Hs;
(function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; })(Hs || (Hs = {}));
const om = () => I.jsxs("div", { className: "login-container", children: [I.jsx("h1", { children: "Welcome to Our App" }), I.jsx("a", { href: "/google", className: "login-button", children: "Sign in with Google" })] });
function xf(e, t) { return function () { return e.apply(t, arguments); }; }
const { toString: im } = Object.prototype, { getPrototypeOf: xu } = Object, Vl = (e => t => { const n = im.call(t); return e[n] || (e[n] = n.slice(8, -1).toLowerCase()); })(Object.create(null)), Xe = e => (e = e.toLowerCase(), t => Vl(t) === e), Hl = e => t => typeof t === e, { isArray: En } = Array, ar = Hl("undefined");
function um(e) { return e !== null && !ar(e) && e.constructor !== null && !ar(e.constructor) && Te(e.constructor.isBuffer) && e.constructor.isBuffer(e); }
const Cf = Xe("ArrayBuffer");
function sm(e) { let t; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Cf(e.buffer), t; }
const am = Hl("string"), Te = Hl("function"), _f = Hl("number"), Wl = e => e !== null && typeof e == "object", cm = e => e === !0 || e === !1, Gr = e => { if (Vl(e) !== "object")
    return !1; const t = xu(e); return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e); }, fm = Xe("Date"), dm = Xe("File"), pm = Xe("Blob"), hm = Xe("FileList"), mm = e => Wl(e) && Te(e.pipe), ym = e => { let t; return e && (typeof FormData == "function" && e instanceof FormData || Te(e.append) && ((t = Vl(e)) === "formdata" || t === "object" && Te(e.toString) && e.toString() === "[object FormData]")); }, vm = Xe("URLSearchParams"), gm = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function mr(e, t, { allOwnKeys: n = !1 } = {}) { if (e === null || typeof e > "u")
    return; let r, l; if (typeof e != "object" && (e = [e]), En(e))
    for (r = 0, l = e.length; r < l; r++)
        t.call(null, e[r], r, e);
else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let u;
    for (r = 0; r < i; r++)
        u = o[r], t.call(null, e[u], u, e);
} }
function Pf(e, t) { t = t.toLowerCase(); const n = Object.keys(e); let r = n.length, l; for (; r-- > 0;)
    if (l = n[r], t === l.toLowerCase())
        return l; return null; }
const Nf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rf = e => !ar(e) && e !== Nf;
function xi() { const { caseless: e } = Rf(this) && this || {}, t = {}, n = (r, l) => { const o = e && Pf(t, l) || l; Gr(t[o]) && Gr(r) ? t[o] = xi(t[o], r) : Gr(r) ? t[o] = xi({}, r) : En(r) ? t[o] = r.slice() : t[o] = r; }; for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && mr(arguments[r], n); return t; }
const wm = (e, t, n, { allOwnKeys: r } = {}) => (mr(t, (l, o) => { n && Te(l) ? e[o] = xf(l, n) : e[o] = l; }, { allOwnKeys: r }), e), Sm = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Em = (e, t, n, r) => { e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: t.prototype }), n && Object.assign(e.prototype, n); }, km = (e, t, n, r) => { let l, o, i; const u = {}; if (t = t || {}, e == null)
    return t; do {
    for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0;)
        i = l[o], (!r || r(i, e, t)) && !u[i] && (t[i] = e[i], u[i] = !0);
    e = n !== !1 && xu(e);
} while (e && (!n || n(e, t)) && e !== Object.prototype); return t; }, xm = (e, t, n) => { e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length; const r = e.indexOf(t, n); return r !== -1 && r === n; }, Cm = e => { if (!e)
    return null; if (En(e))
    return e; let t = e.length; if (!_f(t))
    return null; const n = new Array(t); for (; t-- > 0;)
    n[t] = e[t]; return n; }, _m = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && xu(Uint8Array)), Pm = (e, t) => { const r = (e && e[Symbol.iterator]).call(e); let l; for (; (l = r.next()) && !l.done;) {
    const o = l.value;
    t.call(e, o[0], o[1]);
} }, Nm = (e, t) => { let n; const r = []; for (; (n = e.exec(t)) !== null;)
    r.push(n); return r; }, Rm = Xe("HTMLFormElement"), Tm = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) { return r.toUpperCase() + l; }), Ws = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Om = Xe("RegExp"), Tf = (e, t) => { const n = Object.getOwnPropertyDescriptors(e), r = {}; mr(n, (l, o) => { let i; (i = t(l, o, e)) !== !1 && (r[o] = i || l); }), Object.defineProperties(e, r); }, Lm = e => { Tf(e, (t, n) => { if (Te(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
    return !1; const r = e[n]; if (Te(r)) {
    if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
    }
    t.set || (t.set = () => { throw Error("Can not rewrite read-only method '" + n + "'"); });
} }); }, zm = (e, t) => { const n = {}, r = l => { l.forEach(o => { n[o] = !0; }); }; return En(e) ? r(e) : r(String(e).split(t)), n; }, Fm = () => { }, jm = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ko = "abcdefghijklmnopqrstuvwxyz", Qs = "0123456789", Of = { DIGIT: Qs, ALPHA: ko, ALPHA_DIGIT: ko + ko.toUpperCase() + Qs }, Dm = (e = 16, t = Of.ALPHA_DIGIT) => { let n = ""; const { length: r } = t; for (; e--;)
    n += t[Math.random() * r | 0]; return n; };
function Am(e) { return !!(e && Te(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]); }
const Im = e => { const t = new Array(10), n = (r, l) => { if (Wl(r)) {
    if (t.indexOf(r) >= 0)
        return;
    if (!("toJSON" in r)) {
        t[l] = r;
        const o = En(r) ? [] : {};
        return mr(r, (i, u) => { const s = n(i, l + 1); !ar(s) && (o[u] = s); }), t[l] = void 0, o;
    }
} return r; }; return n(e, 0); }, Um = Xe("AsyncFunction"), Mm = e => e && (Wl(e) || Te(e)) && Te(e.then) && Te(e.catch), g = { isArray: En, isArrayBuffer: Cf, isBuffer: um, isFormData: ym, isArrayBufferView: sm, isString: am, isNumber: _f, isBoolean: cm, isObject: Wl, isPlainObject: Gr, isUndefined: ar, isDate: fm, isFile: dm, isBlob: pm, isRegExp: Om, isFunction: Te, isStream: mm, isURLSearchParams: vm, isTypedArray: _m, isFileList: hm, forEach: mr, merge: xi, extend: wm, trim: gm, stripBOM: Sm, inherits: Em, toFlatObject: km, kindOf: Vl, kindOfTest: Xe, endsWith: xm, toArray: Cm, forEachEntry: Pm, matchAll: Nm, isHTMLForm: Rm, hasOwnProperty: Ws, hasOwnProp: Ws, reduceDescriptors: Tf, freezeMethods: Lm, toObjectSet: zm, toCamelCase: Tm, noop: Fm, toFiniteNumber: jm, findKey: Pf, global: Nf, isContextDefined: Rf, ALPHABET: Of, generateString: Dm, isSpecCompliantForm: Am, toJSONObject: Im, isAsyncFn: Um, isThenable: Mm };
function j(e, t, n, r, l) { Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), l && (this.response = l); }
g.inherits(j, Error, { toJSON: function () { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: g.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null }; } });
const Lf = j.prototype, zf = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => { zf[e] = { value: e }; });
Object.defineProperties(j, zf);
Object.defineProperty(Lf, "isAxiosError", { value: !0 });
j.from = (e, t, n, r, l, o) => { const i = Object.create(Lf); return g.toFlatObject(e, i, function (s) { return s !== Error.prototype; }, u => u !== "isAxiosError"), j.call(i, e.message, t, n, r, l), i.cause = e, i.name = e.name, o && Object.assign(i, o), i; };
const Bm = null;
function Ci(e) { return g.isPlainObject(e) || g.isArray(e); }
function Ff(e) { return g.endsWith(e, "[]") ? e.slice(0, -2) : e; }
function Ks(e, t, n) { return e ? e.concat(t).map(function (l, o) { return l = Ff(l), !n && o ? "[" + l + "]" : l; }).join(n ? "." : "") : t; }
function $m(e) { return g.isArray(e) && !e.some(Ci); }
const Vm = g.toFlatObject(g, {}, null, function (t) { return /^is[A-Z]/.test(t); });
function Ql(e, t, n) { if (!g.isObject(e))
    throw new TypeError("target must be an object"); t = t || new FormData, n = g.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (v, k) { return !g.isUndefined(k[v]); }); const r = n.metaTokens, l = n.visitor || p, o = n.dots, i = n.indexes, s = (n.Blob || typeof Blob < "u" && Blob) && g.isSpecCompliantForm(t); if (!g.isFunction(l))
    throw new TypeError("visitor must be a function"); function a(y) { if (y === null)
    return ""; if (g.isDate(y))
    return y.toISOString(); if (!s && g.isBlob(y))
    throw new j("Blob is not supported. Use a Buffer instead."); return g.isArrayBuffer(y) || g.isTypedArray(y) ? s && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y; } function p(y, v, k) { let d = y; if (y && !k && typeof y == "object") {
    if (g.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), y = JSON.stringify(y);
    else if (g.isArray(y) && $m(y) || (g.isFileList(y) || g.endsWith(v, "[]")) && (d = g.toArray(y)))
        return v = Ff(v), d.forEach(function (h, S) { !(g.isUndefined(h) || h === null) && t.append(i === !0 ? Ks([v], S, o) : i === null ? v : v + "[]", a(h)); }), !1;
} return Ci(y) ? !0 : (t.append(Ks(k, v, o), a(y)), !1); } const c = [], m = Object.assign(Vm, { defaultVisitor: p, convertValue: a, isVisitable: Ci }); function w(y, v) { if (!g.isUndefined(y)) {
    if (c.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
    c.push(y), g.forEach(y, function (d, f) { (!(g.isUndefined(d) || d === null) && l.call(t, d, g.isString(f) ? f.trim() : f, v, m)) === !0 && w(d, v ? v.concat(f) : [f]); }), c.pop();
} } if (!g.isObject(e))
    throw new TypeError("data must be an object"); return w(e), t; }
function Xs(e) { const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }; return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) { return t[r]; }); }
function Cu(e, t) { this._pairs = [], e && Ql(e, this, t); }
const jf = Cu.prototype;
jf.append = function (t, n) { this._pairs.push([t, n]); };
jf.toString = function (t) { const n = t ? function (r) { return t.call(this, r, Xs); } : Xs; return this._pairs.map(function (l) { return n(l[0]) + "=" + n(l[1]); }, "").join("&"); };
function Hm(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]"); }
function Df(e, t, n) { if (!t)
    return e; const r = n && n.encode || Hm, l = n && n.serialize; let o; if (l ? o = l(t, n) : o = g.isURLSearchParams(t) ? t.toString() : new Cu(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
} return e; }
class Js {
    constructor() { this.handlers = []; }
    use(t, n, r) { return this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1; }
    eject(t) { this.handlers[t] && (this.handlers[t] = null); }
    clear() { this.handlers && (this.handlers = []); }
    forEach(t) { g.forEach(this.handlers, function (r) { r !== null && t(r); }); }
}
const Af = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, Wm = typeof URLSearchParams < "u" ? URLSearchParams : Cu, Qm = typeof FormData < "u" ? FormData : null, Km = typeof Blob < "u" ? Blob : null, Xm = { isBrowser: !0, classes: { URLSearchParams: Wm, FormData: Qm, Blob: Km }, protocols: ["http", "https", "file", "blob", "url", "data"] }, If = typeof window < "u" && typeof document < "u", Jm = (e => If && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Gm = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ym = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: If, hasStandardBrowserEnv: Jm, hasStandardBrowserWebWorkerEnv: Gm }, Symbol.toStringTag, { value: "Module" })), We = { ...Ym, ...Xm };
function qm(e, t) { return Ql(e, new We.classes.URLSearchParams, Object.assign({ visitor: function (n, r, l, o) { return We.isNode && g.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments); } }, t)); }
function Zm(e) { return g.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0]); }
function bm(e) { const t = {}, n = Object.keys(e); let r; const l = n.length; let o; for (r = 0; r < l; r++)
    o = n[r], t[o] = e[o]; return t; }
function Uf(e) { function t(n, r, l, o) { let i = n[o++]; if (i === "__proto__")
    return !0; const u = Number.isFinite(+i), s = o >= n.length; return i = !i && g.isArray(l) ? l.length : i, s ? (g.hasOwnProp(l, i) ? l[i] = [l[i], r] : l[i] = r, !u) : ((!l[i] || !g.isObject(l[i])) && (l[i] = []), t(n, r, l[i], o) && g.isArray(l[i]) && (l[i] = bm(l[i])), !u); } if (g.isFormData(e) && g.isFunction(e.entries)) {
    const n = {};
    return g.forEachEntry(e, (r, l) => { t(Zm(r), l, n, 0); }), n;
} return null; }
function e0(e, t, n) { if (g.isString(e))
    try {
        return (t || JSON.parse)(e), g.trim(e);
    }
    catch (r) {
        if (r.name !== "SyntaxError")
            throw r;
    } return (n || JSON.stringify)(e); }
const yr = { transitional: Af, adapter: ["xhr", "http"], transformRequest: [function (t, n) { const r = n.getContentType() || "", l = r.indexOf("application/json") > -1, o = g.isObject(t); if (o && g.isHTMLForm(t) && (t = new FormData(t)), g.isFormData(t))
            return l && l ? JSON.stringify(Uf(t)) : t; if (g.isArrayBuffer(t) || g.isBuffer(t) || g.isStream(t) || g.isFile(t) || g.isBlob(t))
            return t; if (g.isArrayBufferView(t))
            return t.buffer; if (g.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString(); let u; if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return qm(t, this.formSerializer).toString();
            if ((u = g.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const s = this.env && this.env.FormData;
                return Ql(u ? { "files[]": t } : t, s && new s, this.formSerializer);
            }
        } return o || l ? (n.setContentType("application/json", !1), e0(t)) : t; }], transformResponse: [function (t) { const n = this.transitional || yr.transitional, r = n && n.forcedJSONParsing, l = this.responseType === "json"; if (t && g.isString(t) && (r && !this.responseType || l)) {
            const i = !(n && n.silentJSONParsing) && l;
            try {
                return JSON.parse(t);
            }
            catch (u) {
                if (i)
                    throw u.name === "SyntaxError" ? j.from(u, j.ERR_BAD_RESPONSE, this, null, this.response) : u;
            }
        } return t; }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: We.classes.FormData, Blob: We.classes.Blob }, validateStatus: function (t) { return t >= 200 && t < 300; }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
g.forEach(["delete", "get", "head", "post", "put", "patch"], e => { yr.headers[e] = {}; });
const t0 = g.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), n0 = e => {
    const t = {};
    let n, r, l;
    return e && e.split(`
`).forEach(function (i) { l = i.indexOf(":"), n = i.substring(0, l).trim().toLowerCase(), r = i.substring(l + 1).trim(), !(!n || t[n] && t0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r); }), t;
}, Gs = Symbol("internals");
function zn(e) { return e && String(e).trim().toLowerCase(); }
function Yr(e) { return e === !1 || e == null ? e : g.isArray(e) ? e.map(Yr) : String(e); }
function r0(e) { const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let r; for (; r = n.exec(e);)
    t[r[1]] = r[2]; return t; }
const l0 = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function xo(e, t, n, r, l) { if (g.isFunction(r))
    return r.call(this, t, n); if (l && (t = n), !!g.isString(t)) {
    if (g.isString(r))
        return t.indexOf(r) !== -1;
    if (g.isRegExp(r))
        return r.test(t);
} }
function o0(e) { return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r); }
function i0(e, t) { const n = g.toCamelCase(" " + t); ["get", "set", "has"].forEach(r => { Object.defineProperty(e, r + n, { value: function (l, o, i) { return this[r].call(this, t, l, o, i); }, configurable: !0 }); }); }
class Oe {
    constructor(t) { t && this.set(t); }
    set(t, n, r) { const l = this; function o(u, s, a) { const p = zn(s); if (!p)
        throw new Error("header name must be a non-empty string"); const c = g.findKey(l, p); (!c || l[c] === void 0 || a === !0 || a === void 0 && l[c] !== !1) && (l[c || s] = Yr(u)); } const i = (u, s) => g.forEach(u, (a, p) => o(a, p, s)); return g.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : g.isString(t) && (t = t.trim()) && !l0(t) ? i(n0(t), n) : t != null && o(n, t, r), this; }
    get(t, n) { if (t = zn(t), t) {
        const r = g.findKey(this, t);
        if (r) {
            const l = this[r];
            if (!n)
                return l;
            if (n === !0)
                return r0(l);
            if (g.isFunction(n))
                return n.call(this, l, r);
            if (g.isRegExp(n))
                return n.exec(l);
            throw new TypeError("parser must be boolean|regexp|function");
        }
    } }
    has(t, n) { if (t = zn(t), t) {
        const r = g.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!n || xo(this, this[r], r, n)));
    } return !1; }
    delete(t, n) { const r = this; let l = !1; function o(i) { if (i = zn(i), i) {
        const u = g.findKey(r, i);
        u && (!n || xo(r, r[u], u, n)) && (delete r[u], l = !0);
    } } return g.isArray(t) ? t.forEach(o) : o(t), l; }
    clear(t) { const n = Object.keys(this); let r = n.length, l = !1; for (; r--;) {
        const o = n[r];
        (!t || xo(this, this[o], o, t, !0)) && (delete this[o], l = !0);
    } return l; }
    normalize(t) { const n = this, r = {}; return g.forEach(this, (l, o) => { const i = g.findKey(r, o); if (i) {
        n[i] = Yr(l), delete n[o];
        return;
    } const u = t ? o0(o) : String(o).trim(); u !== o && delete n[o], n[u] = Yr(l), r[u] = !0; }), this; }
    concat(...t) { return this.constructor.concat(this, ...t); }
    toJSON(t) { const n = Object.create(null); return g.forEach(this, (r, l) => { r != null && r !== !1 && (n[l] = t && g.isArray(r) ? r.join(", ") : r); }), n; }
    [Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator](); }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
    }
    get [Symbol.toStringTag]() { return "AxiosHeaders"; }
    static from(t) { return t instanceof this ? t : new this(t); }
    static concat(t, ...n) { const r = new this(t); return n.forEach(l => r.set(l)), r; }
    static accessor(t) { const r = (this[Gs] = this[Gs] = { accessors: {} }).accessors, l = this.prototype; function o(i) { const u = zn(i); r[u] || (i0(l, i), r[u] = !0); } return g.isArray(t) ? t.forEach(o) : o(t), this; }
}
Oe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
g.reduceDescriptors(Oe.prototype, ({ value: e }, t) => { let n = t[0].toUpperCase() + t.slice(1); return { get: () => e, set(r) { this[n] = r; } }; });
g.freezeMethods(Oe);
function Co(e, t) { const n = this || yr, r = t || n, l = Oe.from(r.headers); let o = r.data; return g.forEach(e, function (u) { o = u.call(n, o, l.normalize(), t ? t.status : void 0); }), l.normalize(), o; }
function Mf(e) { return !!(e && e.__CANCEL__); }
function vr(e, t, n) { j.call(this, e ?? "canceled", j.ERR_CANCELED, t, n), this.name = "CanceledError"; }
g.inherits(vr, j, { __CANCEL__: !0 });
function u0(e, t, n) { const r = n.config.validateStatus; !n.status || !r || r(n.status) ? e(n) : t(new j("Request failed with status code " + n.status, [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)); }
const s0 = We.hasStandardBrowserEnv ? { write(e, t, n, r, l, o) { const i = [e + "=" + encodeURIComponent(t)]; g.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), g.isString(r) && i.push("path=" + r), g.isString(l) && i.push("domain=" + l), o === !0 && i.push("secure"), document.cookie = i.join("; "); }, read(e) { const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null; }, remove(e) { this.write(e, "", Date.now() - 864e5); } } : { write() { }, read() { return null; }, remove() { } };
function a0(e) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e); }
function c0(e, t) { return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e; }
function Bf(e, t) { return e && !a0(t) ? c0(e, t) : t; }
const f0 = We.hasStandardBrowserEnv ? function () { const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"); let r; function l(o) { let i = o; return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname }; } return r = l(window.location.href), function (i) { const u = g.isString(i) ? l(i) : i; return u.protocol === r.protocol && u.host === r.host; }; }() : function () { return function () { return !0; }; }();
function d0(e) { const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e); return t && t[1] || ""; }
function p0(e, t) { e = e || 10; const n = new Array(e), r = new Array(e); let l = 0, o = 0, i; return t = t !== void 0 ? t : 1e3, function (s) { const a = Date.now(), p = r[o]; i || (i = a), n[l] = s, r[l] = a; let c = o, m = 0; for (; c !== l;)
    m += n[c++], c = c % e; if (l = (l + 1) % e, l === o && (o = (o + 1) % e), a - i < t)
    return; const w = p && a - p; return w ? Math.round(m * 1e3 / w) : void 0; }; }
function Ys(e, t) { let n = 0; const r = p0(50, 250); return l => { const o = l.loaded, i = l.lengthComputable ? l.total : void 0, u = o - n, s = r(u), a = o <= i; n = o; const p = { loaded: o, total: i, progress: i ? o / i : void 0, bytes: u, rate: s || void 0, estimated: s && i && a ? (i - o) / s : void 0, event: l }; p[t ? "download" : "upload"] = !0, e(p); }; }
const h0 = typeof XMLHttpRequest < "u", m0 = h0 && function (e) { return new Promise(function (n, r) { let l = e.data; const o = Oe.from(e.headers).normalize(); let { responseType: i, withXSRFToken: u } = e, s; function a() { e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s); } let p; if (g.isFormData(l)) {
    if (We.hasStandardBrowserEnv || We.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
    else if ((p = o.getContentType()) !== !1) {
        const [v, ...k] = p ? p.split(";").map(d => d.trim()).filter(Boolean) : [];
        o.setContentType([v || "multipart/form-data", ...k].join("; "));
    }
} let c = new XMLHttpRequest; if (e.auth) {
    const v = e.auth.username || "", k = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
    o.set("Authorization", "Basic " + btoa(v + ":" + k));
} const m = Bf(e.baseURL, e.url); c.open(e.method.toUpperCase(), Df(m, e.params, e.paramsSerializer), !0), c.timeout = e.timeout; function w() { if (!c)
    return; const v = Oe.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()), d = { data: !i || i === "text" || i === "json" ? c.responseText : c.response, status: c.status, statusText: c.statusText, headers: v, config: e, request: c }; u0(function (h) { n(h), a(); }, function (h) { r(h), a(); }, d), c = null; } if ("onloadend" in c ? c.onloadend = w : c.onreadystatechange = function () { !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(w); }, c.onabort = function () { c && (r(new j("Request aborted", j.ECONNABORTED, e, c)), c = null); }, c.onerror = function () { r(new j("Network Error", j.ERR_NETWORK, e, c)), c = null; }, c.ontimeout = function () { let k = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"; const d = e.transitional || Af; e.timeoutErrorMessage && (k = e.timeoutErrorMessage), r(new j(k, d.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED, e, c)), c = null; }, We.hasStandardBrowserEnv && (u && g.isFunction(u) && (u = u(e)), u || u !== !1 && f0(m))) {
    const v = e.xsrfHeaderName && e.xsrfCookieName && s0.read(e.xsrfCookieName);
    v && o.set(e.xsrfHeaderName, v);
} l === void 0 && o.setContentType(null), "setRequestHeader" in c && g.forEach(o.toJSON(), function (k, d) { c.setRequestHeader(d, k); }), g.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Ys(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ys(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = v => { c && (r(!v || v.type ? new vr(null, e, c) : v), c.abort(), c = null); }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s))); const y = d0(m); if (y && We.protocols.indexOf(y) === -1) {
    r(new j("Unsupported protocol " + y + ":", j.ERR_BAD_REQUEST, e));
    return;
} c.send(l || null); }); }, _i = { http: Bm, xhr: m0 };
g.forEach(_i, (e, t) => { if (e) {
    try {
        Object.defineProperty(e, "name", { value: t });
    }
    catch { }
    Object.defineProperty(e, "adapterName", { value: t });
} });
const qs = e => `- ${e}`, y0 = e => g.isFunction(e) || e === null || e === !1, $f = { getAdapter: e => {
        e = g.isArray(e) ? e : [e];
        const { length: t } = e;
        let n, r;
        const l = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let i;
            if (r = n, !y0(n) && (r = _i[(i = String(n)).toLowerCase()], r === void 0))
                throw new j(`Unknown adapter '${i}'`);
            if (r)
                break;
            l[i || "#" + o] = r;
        }
        if (!r) {
            const o = Object.entries(l).map(([u, s]) => `adapter ${u} ` + (s === !1 ? "is not supported by the environment" : "is not available in the build"));
            let i = t ? o.length > 1 ? `since :
` + o.map(qs).join(`
`) : " " + qs(o[0]) : "as no adapter specified";
            throw new j("There is no suitable adapter to dispatch the request " + i, "ERR_NOT_SUPPORT");
        }
        return r;
    }, adapters: _i };
function _o(e) { if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new vr(null, e); }
function Zs(e) { return _o(e), e.headers = Oe.from(e.headers), e.data = Co.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $f.getAdapter(e.adapter || yr.adapter)(e).then(function (r) { return _o(e), r.data = Co.call(e, e.transformResponse, r), r.headers = Oe.from(r.headers), r; }, function (r) { return Mf(r) || (_o(e), r && r.response && (r.response.data = Co.call(e, e.transformResponse, r.response), r.response.headers = Oe.from(r.response.headers))), Promise.reject(r); }); }
const bs = e => e instanceof Oe ? e.toJSON() : e;
function vn(e, t) { t = t || {}; const n = {}; function r(a, p, c) { return g.isPlainObject(a) && g.isPlainObject(p) ? g.merge.call({ caseless: c }, a, p) : g.isPlainObject(p) ? g.merge({}, p) : g.isArray(p) ? p.slice() : p; } function l(a, p, c) { if (g.isUndefined(p)) {
    if (!g.isUndefined(a))
        return r(void 0, a, c);
}
else
    return r(a, p, c); } function o(a, p) { if (!g.isUndefined(p))
    return r(void 0, p); } function i(a, p) { if (g.isUndefined(p)) {
    if (!g.isUndefined(a))
        return r(void 0, a);
}
else
    return r(void 0, p); } function u(a, p, c) { if (c in t)
    return r(a, p); if (c in e)
    return r(void 0, a); } const s = { url: o, method: o, data: o, baseURL: i, transformRequest: i, transformResponse: i, paramsSerializer: i, timeout: i, timeoutMessage: i, withCredentials: i, withXSRFToken: i, adapter: i, responseType: i, xsrfCookieName: i, xsrfHeaderName: i, onUploadProgress: i, onDownloadProgress: i, decompress: i, maxContentLength: i, maxBodyLength: i, beforeRedirect: i, transport: i, httpAgent: i, httpsAgent: i, cancelToken: i, socketPath: i, responseEncoding: i, validateStatus: u, headers: (a, p) => l(bs(a), bs(p), !0) }; return g.forEach(Object.keys(Object.assign({}, e, t)), function (p) { const c = s[p] || l, m = c(e[p], t[p], p); g.isUndefined(m) && c !== u || (n[p] = m); }), n; }
const Vf = "1.6.5", _u = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => { _u[e] = function (r) { return typeof r === e || "a" + (t < 1 ? "n " : " ") + e; }; });
const ea = {};
_u.transitional = function (t, n, r) { function l(o, i) { return "[Axios v" + Vf + "] Transitional option '" + o + "'" + i + (r ? ". " + r : ""); } return (o, i, u) => { if (t === !1)
    throw new j(l(i, " has been removed" + (n ? " in " + n : "")), j.ERR_DEPRECATED); return n && !ea[i] && (ea[i] = !0, console.warn(l(i, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, i, u) : !0; }; };
function v0(e, t, n) { if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE); const r = Object.keys(e); let l = r.length; for (; l-- > 0;) {
    const o = r[l], i = t[o];
    if (i) {
        const u = e[o], s = u === void 0 || i(u, o, e);
        if (s !== !0)
            throw new j("option " + o + " must be " + s, j.ERR_BAD_OPTION_VALUE);
        continue;
    }
    if (n !== !0)
        throw new j("Unknown option " + o, j.ERR_BAD_OPTION);
} }
const Pi = { assertOptions: v0, validators: _u }, ot = Pi.validators;
class Dt {
    constructor(t) { this.defaults = t, this.interceptors = { request: new Js, response: new Js }; }
    request(t, n) { typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = vn(this.defaults, n); const { transitional: r, paramsSerializer: l, headers: o } = n; r !== void 0 && Pi.assertOptions(r, { silentJSONParsing: ot.transitional(ot.boolean), forcedJSONParsing: ot.transitional(ot.boolean), clarifyTimeoutError: ot.transitional(ot.boolean) }, !1), l != null && (g.isFunction(l) ? n.paramsSerializer = { serialize: l } : Pi.assertOptions(l, { encode: ot.function, serialize: ot.function }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase(); let i = o && g.merge(o.common, o[n.method]); o && g.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => { delete o[y]; }), n.headers = Oe.concat(i, o); const u = []; let s = !0; this.interceptors.request.forEach(function (v) { typeof v.runWhen == "function" && v.runWhen(n) === !1 || (s = s && v.synchronous, u.unshift(v.fulfilled, v.rejected)); }); const a = []; this.interceptors.response.forEach(function (v) { a.push(v.fulfilled, v.rejected); }); let p, c = 0, m; if (!s) {
        const y = [Zs.bind(this), void 0];
        for (y.unshift.apply(y, u), y.push.apply(y, a), m = y.length, p = Promise.resolve(n); c < m;)
            p = p.then(y[c++], y[c++]);
        return p;
    } m = u.length; let w = n; for (c = 0; c < m;) {
        const y = u[c++], v = u[c++];
        try {
            w = y(w);
        }
        catch (k) {
            v.call(this, k);
            break;
        }
    } try {
        p = Zs.call(this, w);
    }
    catch (y) {
        return Promise.reject(y);
    } for (c = 0, m = a.length; c < m;)
        p = p.then(a[c++], a[c++]); return p; }
    getUri(t) { t = vn(this.defaults, t); const n = Bf(t.baseURL, t.url); return Df(n, t.params, t.paramsSerializer); }
}
g.forEach(["delete", "get", "head", "options"], function (t) { Dt.prototype[t] = function (n, r) { return this.request(vn(r || {}, { method: t, url: n, data: (r || {}).data })); }; });
g.forEach(["post", "put", "patch"], function (t) { function n(r) { return function (o, i, u) { return this.request(vn(u || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: o, data: i })); }; } Dt.prototype[t] = n(), Dt.prototype[t + "Form"] = n(!0); });
class Pu {
    constructor(t) { if (typeof t != "function")
        throw new TypeError("executor must be a function."); let n; this.promise = new Promise(function (o) { n = o; }); const r = this; this.promise.then(l => { if (!r._listeners)
        return; let o = r._listeners.length; for (; o-- > 0;)
        r._listeners[o](l); r._listeners = null; }), this.promise.then = l => { let o; const i = new Promise(u => { r.subscribe(u), o = u; }).then(l); return i.cancel = function () { r.unsubscribe(o); }, i; }, t(function (o, i, u) { r.reason || (r.reason = new vr(o, i, u), n(r.reason)); }); }
    throwIfRequested() { if (this.reason)
        throw this.reason; }
    subscribe(t) { if (this.reason) {
        t(this.reason);
        return;
    } this._listeners ? this._listeners.push(t) : this._listeners = [t]; }
    unsubscribe(t) { if (!this._listeners)
        return; const n = this._listeners.indexOf(t); n !== -1 && this._listeners.splice(n, 1); }
    static source() { let t; return { token: new Pu(function (l) { t = l; }), cancel: t }; }
}
function g0(e) { return function (n) { return e.apply(null, n); }; }
function w0(e) { return g.isObject(e) && e.isAxiosError === !0; }
const Ni = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(Ni).forEach(([e, t]) => { Ni[t] = e; });
function Hf(e) { const t = new Dt(e), n = xf(Dt.prototype.request, t); return g.extend(n, Dt.prototype, t, { allOwnKeys: !0 }), g.extend(n, t, null, { allOwnKeys: !0 }), n.create = function (l) { return Hf(vn(e, l)); }, n; }
const G = Hf(yr);
G.Axios = Dt;
G.CanceledError = vr;
G.CancelToken = Pu;
G.isCancel = Mf;
G.VERSION = Vf;
G.toFormData = Ql;
G.AxiosError = j;
G.Cancel = G.CanceledError;
G.all = function (t) { return Promise.all(t); };
G.spread = g0;
G.isAxiosError = w0;
G.mergeConfig = vn;
G.AxiosHeaders = Oe;
G.formToJSON = e => Uf(g.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = $f.getAdapter;
G.HttpStatusCode = Ni;
G.default = G;
const S0 = ({ name: e, date: t, time: n }) => { const r = e, l = t, o = n, i = async (s) => { s.preventDefault(); try {
    await u();
}
catch (a) {
    console.error("Error:", a);
} }, u = async () => { try {
    console.log("I'm in insert event"), await G.post("/google/calendar/insert", { name: r, date: l, time: o }, { headers: { "Content-Type": "application/json" } });
}
catch (s) {
    console.error("Error:", s);
} }; return I.jsx("li", { className: "event", children: I.jsxs("div", { className: "event-content", children: [I.jsxs("div", { children: [I.jsx("h2", { className: "event-title", children: r }), I.jsxs("p", { className: "event-time", children: [t, " at ", n] })] }), I.jsx("button", { onClick: i, className: "add-event-button", children: "Add Event" })] }) }); }, E0 = "/api/data", k0 = async (e) => { try {
    return (await G.post(E0 + "/eventName", { name: e }, { headers: { "Content-Type": "application/json" } })).data.reduce((n, r) => (n.newEvents.push(r.name), n.newDates.push(r.dates.start.localDate), n.newTimes.push(r.dates.start.localTime), n), { newEvents: [], newDates: [], newTimes: [] });
}
catch (t) {
    console.error("Error:", t);
} }, x0 = { postEventName: k0 }, C0 = () => { const [e, t] = T.useState(""), [n, r] = T.useState([]), [l, o] = T.useState([]), [i, u] = T.useState([]), [s, a] = T.useState(!1); T.useEffect(() => { s && (async () => { const { newEvents: w, newDates: y, newTimes: v } = await x0.postEventName(e); r(k => k.concat(w)), o(k => k.concat(y)), u(k => k.concat(v)), t(""), a(!1); })(); }, [s]); const p = async (m) => { m.preventDefault(), a(!0); }, c = m => { t(m.target.value); }; return I.jsxs("div", { className: "main-page", children: [I.jsxs("div", { className: "search-container", children: [I.jsx("h1", { children: "Events:" }), I.jsxs("form", { onSubmit: p, children: [I.jsx("input", { className: "search-input", value: e, onChange: c }), I.jsx("button", { type: "submit", className: "search-button", children: "Search" })] })] }), I.jsx("ul", { children: n.map((m, w) => I.jsx(S0, { name: m, date: l[w], time: i[w] }, w)) })] }); };
function _0() { return I.jsx(lm, { children: I.jsx("div", { className: "App", children: I.jsxs(tm, { children: [I.jsx(Ei, { path: "/", element: I.jsx(om, {}) }), I.jsx(Ei, { path: "/main", element: I.jsx(C0, {}) })] }) }) }); }
Po.createRoot(document.getElementById("root")).render(I.jsx(fa.StrictMode, { children: I.jsx(_0, {}) }));
