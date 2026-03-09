var Jm = t => {
    throw TypeError(t)
}
;
var Fc = (t, e, r) => e.has(t) || Jm("Cannot " + r);
var _ = (t, e, r) => (Fc(t, e, "read from private field"),
r ? r.call(t) : e.get(t))
  , ue = (t, e, r) => e.has(t) ? Jm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r)
  , X = (t, e, r, i) => (Fc(t, e, "write to private field"),
i ? i.call(t, r) : e.set(t, r),
r)
  , ke = (t, e, r) => (Fc(t, e, "access private method"),
r);
var Ka = (t, e, r, i) => ({
    set _(a) {
        X(t, e, a, r)
    },
    get _() {
        return _(t, e, i)
    }
});
function GS(t, e) {
    for (var r = 0; r < e.length; r++) {
        const i = e[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in t)) {
                    const u = Object.getOwnPropertyDescriptor(i, a);
                    u && Object.defineProperty(t, a, u.get ? u : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        i(a);
    new MutationObserver(a => {
        for (const u of a)
            if (u.type === "childList")
                for (const c of u.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(a) {
        const u = {};
        return a.integrity && (u.integrity = a.integrity),
        a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? u.credentials = "include" : a.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin",
        u
    }
    function i(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const u = r(a);
        fetch(a.href, u)
    }
}
)();
function qv(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Vc = {
    exports: {}
}
  , Qi = {}
  , Bc = {
    exports: {}
}
  , Se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zm;
function YS() {
    if (Zm)
        return Se;
    Zm = 1;
    var t = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , u = Symbol.for("react.provider")
      , c = Symbol.for("react.context")
      , f = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function w(A) {
        return A === null || typeof A != "object" ? null : (A = y && A[y] || A["@@iterator"],
        typeof A == "function" ? A : null)
    }
    var E = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , b = Object.assign
      , k = {};
    function x(A, z, ge) {
        this.props = A,
        this.context = z,
        this.refs = k,
        this.updater = ge || E
    }
    x.prototype.isReactComponent = {},
    x.prototype.setState = function(A, z) {
        if (typeof A != "object" && typeof A != "function" && A != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, z, "setState")
    }
    ,
    x.prototype.forceUpdate = function(A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    }
    ;
    function R() {}
    R.prototype = x.prototype;
    function V(A, z, ge) {
        this.props = A,
        this.context = z,
        this.refs = k,
        this.updater = ge || E
    }
    var L = V.prototype = new R;
    L.constructor = V,
    b(L, x.prototype),
    L.isPureReactComponent = !0;
    var j = Array.isArray
      , B = Object.prototype.hasOwnProperty
      , K = {
        current: null
    }
      , G = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function M(A, z, ge) {
        var ye, le = {}, he = null, Ne = null;
        if (z != null)
            for (ye in z.ref !== void 0 && (Ne = z.ref),
            z.key !== void 0 && (he = "" + z.key),
            z)
                B.call(z, ye) && !G.hasOwnProperty(ye) && (le[ye] = z[ye]);
        var _e = arguments.length - 2;
        if (_e === 1)
            le.children = ge;
        else if (1 < _e) {
            for (var ve = Array(_e), ht = 0; ht < _e; ht++)
                ve[ht] = arguments[ht + 2];
            le.children = ve
        }
        if (A && A.defaultProps)
            for (ye in _e = A.defaultProps,
            _e)
                le[ye] === void 0 && (le[ye] = _e[ye]);
        return {
            $$typeof: t,
            type: A,
            key: he,
            ref: Ne,
            props: le,
            _owner: K.current
        }
    }
    function Z(A, z) {
        return {
            $$typeof: t,
            type: A.type,
            key: z,
            ref: A.ref,
            props: A.props,
            _owner: A._owner
        }
    }
    function fe(A) {
        return typeof A == "object" && A !== null && A.$$typeof === t
    }
    function Re(A) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function(ge) {
            return z[ge]
        })
    }
    var Le = /\/+/g;
    function De(A, z) {
        return typeof A == "object" && A !== null && A.key != null ? Re("" + A.key) : z.toString(36)
    }
    function Ae(A, z, ge, ye, le) {
        var he = typeof A;
        (he === "undefined" || he === "boolean") && (A = null);
        var Ne = !1;
        if (A === null)
            Ne = !0;
        else
            switch (he) {
            case "string":
            case "number":
                Ne = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                case t:
                case e:
                    Ne = !0
                }
            }
        if (Ne)
            return Ne = A,
            le = le(Ne),
            A = ye === "" ? "." + De(Ne, 0) : ye,
            j(le) ? (ge = "",
            A != null && (ge = A.replace(Le, "$&/") + "/"),
            Ae(le, z, ge, "", function(ht) {
                return ht
            })) : le != null && (fe(le) && (le = Z(le, ge + (!le.key || Ne && Ne.key === le.key ? "" : ("" + le.key).replace(Le, "$&/") + "/") + A)),
            z.push(le)),
            1;
        if (Ne = 0,
        ye = ye === "" ? "." : ye + ":",
        j(A))
            for (var _e = 0; _e < A.length; _e++) {
                he = A[_e];
                var ve = ye + De(he, _e);
                Ne += Ae(he, z, ge, ve, le)
            }
        else if (ve = w(A),
        typeof ve == "function")
            for (A = ve.call(A),
            _e = 0; !(he = A.next()).done; )
                he = he.value,
                ve = ye + De(he, _e++),
                Ne += Ae(he, z, ge, ve, le);
        else if (he === "object")
            throw z = String(A),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return Ne
    }
    function Ie(A, z, ge) {
        if (A == null)
            return A;
        var ye = []
          , le = 0;
        return Ae(A, ye, "", "", function(he) {
            return z.call(ge, he, le++)
        }),
        ye
    }
    function we(A) {
        if (A._status === -1) {
            var z = A._result;
            z = z(),
            z.then(function(ge) {
                (A._status === 0 || A._status === -1) && (A._status = 1,
                A._result = ge)
            }, function(ge) {
                (A._status === 0 || A._status === -1) && (A._status = 2,
                A._result = ge)
            }),
            A._status === -1 && (A._status = 0,
            A._result = z)
        }
        if (A._status === 1)
            return A._result.default;
        throw A._result
    }
    var de = {
        current: null
    }
      , W = {
        transition: null
    }
      , se = {
        ReactCurrentDispatcher: de,
        ReactCurrentBatchConfig: W,
        ReactCurrentOwner: K
    };
    function U() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Se.Children = {
        map: Ie,
        forEach: function(A, z, ge) {
            Ie(A, function() {
                z.apply(this, arguments)
            }, ge)
        },
        count: function(A) {
            var z = 0;
            return Ie(A, function() {
                z++
            }),
            z
        },
        toArray: function(A) {
            return Ie(A, function(z) {
                return z
            }) || []
        },
        only: function(A) {
            if (!fe(A))
                throw Error("React.Children.only expected to receive a single React element child.");
            return A
        }
    },
    Se.Component = x,
    Se.Fragment = r,
    Se.Profiler = a,
    Se.PureComponent = V,
    Se.StrictMode = i,
    Se.Suspense = h,
    Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se,
    Se.act = U,
    Se.cloneElement = function(A, z, ge) {
        if (A == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
        var ye = b({}, A.props)
          , le = A.key
          , he = A.ref
          , Ne = A._owner;
        if (z != null) {
            if (z.ref !== void 0 && (he = z.ref,
            Ne = K.current),
            z.key !== void 0 && (le = "" + z.key),
            A.type && A.type.defaultProps)
                var _e = A.type.defaultProps;
            for (ve in z)
                B.call(z, ve) && !G.hasOwnProperty(ve) && (ye[ve] = z[ve] === void 0 && _e !== void 0 ? _e[ve] : z[ve])
        }
        var ve = arguments.length - 2;
        if (ve === 1)
            ye.children = ge;
        else if (1 < ve) {
            _e = Array(ve);
            for (var ht = 0; ht < ve; ht++)
                _e[ht] = arguments[ht + 2];
            ye.children = _e
        }
        return {
            $$typeof: t,
            type: A.type,
            key: le,
            ref: he,
            props: ye,
            _owner: Ne
        }
    }
    ,
    Se.createContext = function(A) {
        return A = {
            $$typeof: c,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        A.Provider = {
            $$typeof: u,
            _context: A
        },
        A.Consumer = A
    }
    ,
    Se.createElement = M,
    Se.createFactory = function(A) {
        var z = M.bind(null, A);
        return z.type = A,
        z
    }
    ,
    Se.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Se.forwardRef = function(A) {
        return {
            $$typeof: f,
            render: A
        }
    }
    ,
    Se.isValidElement = fe,
    Se.lazy = function(A) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: we
        }
    }
    ,
    Se.memo = function(A, z) {
        return {
            $$typeof: m,
            type: A,
            compare: z === void 0 ? null : z
        }
    }
    ,
    Se.startTransition = function(A) {
        var z = W.transition;
        W.transition = {};
        try {
            A()
        } finally {
            W.transition = z
        }
    }
    ,
    Se.unstable_act = U,
    Se.useCallback = function(A, z) {
        return de.current.useCallback(A, z)
    }
    ,
    Se.useContext = function(A) {
        return de.current.useContext(A)
    }
    ,
    Se.useDebugValue = function() {}
    ,
    Se.useDeferredValue = function(A) {
        return de.current.useDeferredValue(A)
    }
    ,
    Se.useEffect = function(A, z) {
        return de.current.useEffect(A, z)
    }
    ,
    Se.useId = function() {
        return de.current.useId()
    }
    ,
    Se.useImperativeHandle = function(A, z, ge) {
        return de.current.useImperativeHandle(A, z, ge)
    }
    ,
    Se.useInsertionEffect = function(A, z) {
        return de.current.useInsertionEffect(A, z)
    }
    ,
    Se.useLayoutEffect = function(A, z) {
        return de.current.useLayoutEffect(A, z)
    }
    ,
    Se.useMemo = function(A, z) {
        return de.current.useMemo(A, z)
    }
    ,
    Se.useReducer = function(A, z, ge) {
        return de.current.useReducer(A, z, ge)
    }
    ,
    Se.useRef = function(A) {
        return de.current.useRef(A)
    }
    ,
    Se.useState = function(A) {
        return de.current.useState(A)
    }
    ,
    Se.useSyncExternalStore = function(A, z, ge) {
        return de.current.useSyncExternalStore(A, z, ge)
    }
    ,
    Se.useTransition = function() {
        return de.current.useTransition()
    }
    ,
    Se.version = "18.3.1",
    Se
}
var eg;
function of() {
    return eg || (eg = 1,
    Bc.exports = YS()),
    Bc.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tg;
function XS() {
    if (tg)
        return Qi;
    tg = 1;
    var t = of()
      , e = Symbol.for("react.element")
      , r = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , u = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function c(f, h, m) {
        var g, y = {}, w = null, E = null;
        m !== void 0 && (w = "" + m),
        h.key !== void 0 && (w = "" + h.key),
        h.ref !== void 0 && (E = h.ref);
        for (g in h)
            i.call(h, g) && !u.hasOwnProperty(g) && (y[g] = h[g]);
        if (f && f.defaultProps)
            for (g in h = f.defaultProps,
            h)
                y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: e,
            type: f,
            key: w,
            ref: E,
            props: y,
            _owner: a.current
        }
    }
    return Qi.Fragment = r,
    Qi.jsx = c,
    Qi.jsxs = c,
    Qi
}
var ng;
function JS() {
    return ng || (ng = 1,
    Vc.exports = XS()),
    Vc.exports
}
var S = JS()
  , D = of();
const ZS = qv(D)
  , eb = GS({
    __proto__: null,
    default: ZS
}, [D]);
var Qa = {}
  , Uc = {
    exports: {}
}
  , At = {}
  , zc = {
    exports: {}
}
  , $c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rg;
function tb() {
    return rg || (rg = 1,
    (function(t) {
        function e(W, se) {
            var U = W.length;
            W.push(se);
            e: for (; 0 < U; ) {
                var A = U - 1 >>> 1
                  , z = W[A];
                if (0 < a(z, se))
                    W[A] = se,
                    W[U] = z,
                    U = A;
                else
                    break e
            }
        }
        function r(W) {
            return W.length === 0 ? null : W[0]
        }
        function i(W) {
            if (W.length === 0)
                return null;
            var se = W[0]
              , U = W.pop();
            if (U !== se) {
                W[0] = U;
                e: for (var A = 0, z = W.length, ge = z >>> 1; A < ge; ) {
                    var ye = 2 * (A + 1) - 1
                      , le = W[ye]
                      , he = ye + 1
                      , Ne = W[he];
                    if (0 > a(le, U))
                        he < z && 0 > a(Ne, le) ? (W[A] = Ne,
                        W[he] = U,
                        A = he) : (W[A] = le,
                        W[ye] = U,
                        A = ye);
                    else if (he < z && 0 > a(Ne, U))
                        W[A] = Ne,
                        W[he] = U,
                        A = he;
                    else
                        break e
                }
            }
            return se
        }
        function a(W, se) {
            var U = W.sortIndex - se.sortIndex;
            return U !== 0 ? U : W.id - se.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            t.unstable_now = function() {
                return u.now()
            }
        } else {
            var c = Date
              , f = c.now();
            t.unstable_now = function() {
                return c.now() - f
            }
        }
        var h = []
          , m = []
          , g = 1
          , y = null
          , w = 3
          , E = !1
          , b = !1
          , k = !1
          , x = typeof setTimeout == "function" ? setTimeout : null
          , R = typeof clearTimeout == "function" ? clearTimeout : null
          , V = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function L(W) {
            for (var se = r(m); se !== null; ) {
                if (se.callback === null)
                    i(m);
                else if (se.startTime <= W)
                    i(m),
                    se.sortIndex = se.expirationTime,
                    e(h, se);
                else
                    break;
                se = r(m)
            }
        }
        function j(W) {
            if (k = !1,
            L(W),
            !b)
                if (r(h) !== null)
                    b = !0,
                    we(B);
                else {
                    var se = r(m);
                    se !== null && de(j, se.startTime - W)
                }
        }
        function B(W, se) {
            b = !1,
            k && (k = !1,
            R(M),
            M = -1),
            E = !0;
            var U = w;
            try {
                for (L(se),
                y = r(h); y !== null && (!(y.expirationTime > se) || W && !Re()); ) {
                    var A = y.callback;
                    if (typeof A == "function") {
                        y.callback = null,
                        w = y.priorityLevel;
                        var z = A(y.expirationTime <= se);
                        se = t.unstable_now(),
                        typeof z == "function" ? y.callback = z : y === r(h) && i(h),
                        L(se)
                    } else
                        i(h);
                    y = r(h)
                }
                if (y !== null)
                    var ge = !0;
                else {
                    var ye = r(m);
                    ye !== null && de(j, ye.startTime - se),
                    ge = !1
                }
                return ge
            } finally {
                y = null,
                w = U,
                E = !1
            }
        }
        var K = !1
          , G = null
          , M = -1
          , Z = 5
          , fe = -1;
        function Re() {
            return !(t.unstable_now() - fe < Z)
        }
        function Le() {
            if (G !== null) {
                var W = t.unstable_now();
                fe = W;
                var se = !0;
                try {
                    se = G(!0, W)
                } finally {
                    se ? De() : (K = !1,
                    G = null)
                }
            } else
                K = !1
        }
        var De;
        if (typeof V == "function")
            De = function() {
                V(Le)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ae = new MessageChannel
              , Ie = Ae.port2;
            Ae.port1.onmessage = Le,
            De = function() {
                Ie.postMessage(null)
            }
        } else
            De = function() {
                x(Le, 0)
            }
            ;
        function we(W) {
            G = W,
            K || (K = !0,
            De())
        }
        function de(W, se) {
            M = x(function() {
                W(t.unstable_now())
            }, se)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(W) {
            W.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            b || E || (b = !0,
            we(B))
        }
        ,
        t.unstable_forceFrameRate = function(W) {
            0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < W ? Math.floor(1e3 / W) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return w
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return r(h)
        }
        ,
        t.unstable_next = function(W) {
            switch (w) {
            case 1:
            case 2:
            case 3:
                var se = 3;
                break;
            default:
                se = w
            }
            var U = w;
            w = se;
            try {
                return W()
            } finally {
                w = U
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(W, se) {
            switch (W) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                W = 3
            }
            var U = w;
            w = W;
            try {
                return se()
            } finally {
                w = U
            }
        }
        ,
        t.unstable_scheduleCallback = function(W, se, U) {
            var A = t.unstable_now();
            switch (typeof U == "object" && U !== null ? (U = U.delay,
            U = typeof U == "number" && 0 < U ? A + U : A) : U = A,
            W) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
            }
            return z = U + z,
            W = {
                id: g++,
                callback: se,
                priorityLevel: W,
                startTime: U,
                expirationTime: z,
                sortIndex: -1
            },
            U > A ? (W.sortIndex = U,
            e(m, W),
            r(h) === null && W === r(m) && (k ? (R(M),
            M = -1) : k = !0,
            de(j, U - A))) : (W.sortIndex = z,
            e(h, W),
            b || E || (b = !0,
            we(B))),
            W
        }
        ,
        t.unstable_shouldYield = Re,
        t.unstable_wrapCallback = function(W) {
            var se = w;
            return function() {
                var U = w;
                w = se;
                try {
                    return W.apply(this, arguments)
                } finally {
                    w = U
                }
            }
        }
    }
    )($c)),
    $c
}
var sg;
function nb() {
    return sg || (sg = 1,
    zc.exports = tb()),
    zc.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ig;
function rb() {
    if (ig)
        return At;
    ig = 1;
    var t = of()
      , e = nb();
    function r(n) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
            s += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , a = {};
    function u(n, s) {
        c(n, s),
        c(n + "Capture", s)
    }
    function c(n, s) {
        for (a[n] = s,
        n = 0; n < s.length; n++)
            i.add(s[n])
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , h = Object.prototype.hasOwnProperty
      , m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , y = {};
    function w(n) {
        return h.call(y, n) ? !0 : h.call(g, n) ? !1 : m.test(n) ? y[n] = !0 : (g[n] = !0,
        !1)
    }
    function E(n, s, o, l) {
        if (o !== null && o.type === 0)
            return !1;
        switch (typeof s) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return l ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5),
            n !== "data-" && n !== "aria-");
        default:
            return !1
        }
    }
    function b(n, s, o, l) {
        if (s === null || typeof s > "u" || E(n, s, o, l))
            return !0;
        if (l)
            return !1;
        if (o !== null)
            switch (o.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
            }
        return !1
    }
    function k(n, s, o, l, d, p, v) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4,
        this.attributeName = l,
        this.attributeNamespace = d,
        this.mustUseProperty = o,
        this.propertyName = n,
        this.type = s,
        this.sanitizeURL = p,
        this.removeEmptyString = v
    }
    var x = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
        x[n] = new k(n,0,!1,n,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
        var s = n[0];
        x[s] = new k(s,1,!1,n[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
        x[n] = new k(n,2,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
        x[n] = new k(n,2,!1,n,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
        x[n] = new k(n,3,!1,n.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(n) {
        x[n] = new k(n,3,!0,n,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(n) {
        x[n] = new k(n,4,!1,n,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(n) {
        x[n] = new k(n,6,!1,n,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(n) {
        x[n] = new k(n,5,!1,n.toLowerCase(),null,!1,!1)
    });
    var R = /[\-:]([a-z])/g;
    function V(n) {
        return n[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new k(s,1,!1,n,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new k(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new k(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(n) {
        x[n] = new k(n,1,!1,n.toLowerCase(),null,!1,!1)
    }),
    x.xlinkHref = new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(n) {
        x[n] = new k(n,1,!1,n.toLowerCase(),null,!0,!0)
    });
    function L(n, s, o, l) {
        var d = x.hasOwnProperty(s) ? x[s] : null;
        (d !== null ? d.type !== 0 : l || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (b(s, o, d, l) && (o = null),
        l || d === null ? w(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : d.mustUseProperty ? n[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (s = d.attributeName,
        l = d.attributeNamespace,
        o === null ? n.removeAttribute(s) : (d = d.type,
        o = d === 3 || d === 4 && o === !0 ? "" : "" + o,
        l ? n.setAttributeNS(l, s, o) : n.setAttribute(s, o))))
    }
    var j = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , B = Symbol.for("react.element")
      , K = Symbol.for("react.portal")
      , G = Symbol.for("react.fragment")
      , M = Symbol.for("react.strict_mode")
      , Z = Symbol.for("react.profiler")
      , fe = Symbol.for("react.provider")
      , Re = Symbol.for("react.context")
      , Le = Symbol.for("react.forward_ref")
      , De = Symbol.for("react.suspense")
      , Ae = Symbol.for("react.suspense_list")
      , Ie = Symbol.for("react.memo")
      , we = Symbol.for("react.lazy")
      , de = Symbol.for("react.offscreen")
      , W = Symbol.iterator;
    function se(n) {
        return n === null || typeof n != "object" ? null : (n = W && n[W] || n["@@iterator"],
        typeof n == "function" ? n : null)
    }
    var U = Object.assign, A;
    function z(n) {
        if (A === void 0)
            try {
                throw Error()
            } catch (o) {
                var s = o.stack.trim().match(/\n( *(at )?)/);
                A = s && s[1] || ""
            }
        return `
` + A + n
    }
    var ge = !1;
    function ye(n, s) {
        if (!n || ge)
            return "";
        ge = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(s.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (I) {
                        var l = I
                    }
                    Reflect.construct(n, [], s)
                } else {
                    try {
                        s.call()
                    } catch (I) {
                        l = I
                    }
                    n.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (I) {
                    l = I
                }
                n()
            }
        } catch (I) {
            if (I && l && typeof I.stack == "string") {
                for (var d = I.stack.split(`
`), p = l.stack.split(`
`), v = d.length - 1, T = p.length - 1; 1 <= v && 0 <= T && d[v] !== p[T]; )
                    T--;
                for (; 1 <= v && 0 <= T; v--,
                T--)
                    if (d[v] !== p[T]) {
                        if (v !== 1 || T !== 1)
                            do
                                if (v--,
                                T--,
                                0 > T || d[v] !== p[T]) {
                                    var C = `
` + d[v].replace(" at new ", " at ");
                                    return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)),
                                    C
                                }
                            while (1 <= v && 0 <= T);
                        break
                    }
            }
        } finally {
            ge = !1,
            Error.prepareStackTrace = o
        }
        return (n = n ? n.displayName || n.name : "") ? z(n) : ""
    }
    function le(n) {
        switch (n.tag) {
        case 5:
            return z(n.type);
        case 16:
            return z("Lazy");
        case 13:
            return z("Suspense");
        case 19:
            return z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return n = ye(n.type, !1),
            n;
        case 11:
            return n = ye(n.type.render, !1),
            n;
        case 1:
            return n = ye(n.type, !0),
            n;
        default:
            return ""
        }
    }
    function he(n) {
        if (n == null)
            return null;
        if (typeof n == "function")
            return n.displayName || n.name || null;
        if (typeof n == "string")
            return n;
        switch (n) {
        case G:
            return "Fragment";
        case K:
            return "Portal";
        case Z:
            return "Profiler";
        case M:
            return "StrictMode";
        case De:
            return "Suspense";
        case Ae:
            return "SuspenseList"
        }
        if (typeof n == "object")
            switch (n.$$typeof) {
            case Re:
                return (n.displayName || "Context") + ".Consumer";
            case fe:
                return (n._context.displayName || "Context") + ".Provider";
            case Le:
                var s = n.render;
                return n = n.displayName,
                n || (n = s.displayName || s.name || "",
                n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"),
                n;
            case Ie:
                return s = n.displayName || null,
                s !== null ? s : he(n.type) || "Memo";
            case we:
                s = n._payload,
                n = n._init;
                try {
                    return he(n(s))
                } catch {}
            }
        return null
    }
    function Ne(n) {
        var s = n.type;
        switch (n.tag) {
        case 24:
            return "Cache";
        case 9:
            return (s.displayName || "Context") + ".Consumer";
        case 10:
            return (s._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return n = s.render,
            n = n.displayName || n.name || "",
            s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return s;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return he(s);
        case 8:
            return s === M ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof s == "function")
                return s.displayName || s.name || null;
            if (typeof s == "string")
                return s
        }
        return null
    }
    function _e(n) {
        switch (typeof n) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return n;
        case "object":
            return n;
        default:
            return ""
        }
    }
    function ve(n) {
        var s = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }
    function ht(n) {
        var s = ve(n) ? "checked" : "value"
          , o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s)
          , l = "" + n[s];
        if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var d = o.get
              , p = o.set;
            return Object.defineProperty(n, s, {
                configurable: !0,
                get: function() {
                    return d.call(this)
                },
                set: function(v) {
                    l = "" + v,
                    p.call(this, v)
                }
            }),
            Object.defineProperty(n, s, {
                enumerable: o.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(v) {
                    l = "" + v
                },
                stopTracking: function() {
                    n._valueTracker = null,
                    delete n[s]
                }
            }
        }
    }
    function Cn(n) {
        n._valueTracker || (n._valueTracker = ht(n))
    }
    function Rr(n) {
        if (!n)
            return !1;
        var s = n._valueTracker;
        if (!s)
            return !0;
        var o = s.getValue()
          , l = "";
        return n && (l = ve(n) ? n.checked ? "true" : "false" : n.value),
        n = l,
        n !== o ? (s.setValue(n),
        !0) : !1
    }
    function $n(n) {
        if (n = n || (typeof document < "u" ? document : void 0),
        typeof n > "u")
            return null;
        try {
            return n.activeElement || n.body
        } catch {
            return n.body
        }
    }
    function qn(n, s) {
        var o = s.checked;
        return U({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? n._wrapperState.initialChecked
        })
    }
    function ih(n, s) {
        var o = s.defaultValue == null ? "" : s.defaultValue
          , l = s.checked != null ? s.checked : s.defaultChecked;
        o = _e(s.value != null ? s.value : o),
        n._wrapperState = {
            initialChecked: l,
            initialValue: o,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }
    function oh(n, s) {
        s = s.checked,
        s != null && L(n, "checked", s, !1)
    }
    function Wl(n, s) {
        oh(n, s);
        var o = _e(s.value)
          , l = s.type;
        if (o != null)
            l === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
        else if (l === "submit" || l === "reset") {
            n.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? Kl(n, s.type, o) : s.hasOwnProperty("defaultValue") && Kl(n, s.type, _e(s.defaultValue)),
        s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
    }
    function ah(n, s, o) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var l = s.type;
            if (!(l !== "submit" && l !== "reset" || s.value !== void 0 && s.value !== null))
                return;
            s = "" + n._wrapperState.initialValue,
            o || s === n.value || (n.value = s),
            n.defaultValue = s
        }
        o = n.name,
        o !== "" && (n.name = ""),
        n.defaultChecked = !!n._wrapperState.initialChecked,
        o !== "" && (n.name = o)
    }
    function Kl(n, s, o) {
        (s !== "number" || $n(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
    }
    var ui = Array.isArray;
    function ds(n, s, o, l) {
        if (n = n.options,
        s) {
            s = {};
            for (var d = 0; d < o.length; d++)
                s["$" + o[d]] = !0;
            for (o = 0; o < n.length; o++)
                d = s.hasOwnProperty("$" + n[o].value),
                n[o].selected !== d && (n[o].selected = d),
                d && l && (n[o].defaultSelected = !0)
        } else {
            for (o = "" + _e(o),
            s = null,
            d = 0; d < n.length; d++) {
                if (n[d].value === o) {
                    n[d].selected = !0,
                    l && (n[d].defaultSelected = !0);
                    return
                }
                s !== null || n[d].disabled || (s = n[d])
            }
            s !== null && (s.selected = !0)
        }
    }
    function Ql(n, s) {
        if (s.dangerouslySetInnerHTML != null)
            throw Error(r(91));
        return U({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + n._wrapperState.initialValue
        })
    }
    function lh(n, s) {
        var o = s.value;
        if (o == null) {
            if (o = s.children,
            s = s.defaultValue,
            o != null) {
                if (s != null)
                    throw Error(r(92));
                if (ui(o)) {
                    if (1 < o.length)
                        throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""),
            o = s
        }
        n._wrapperState = {
            initialValue: _e(o)
        }
    }
    function uh(n, s) {
        var o = _e(s.value)
          , l = _e(s.defaultValue);
        o != null && (o = "" + o,
        o !== n.value && (n.value = o),
        s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)),
        l != null && (n.defaultValue = "" + l)
    }
    function ch(n) {
        var s = n.textContent;
        s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
    }
    function dh(n) {
        switch (n) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Gl(n, s) {
        return n == null || n === "http://www.w3.org/1999/xhtml" ? dh(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
    }
    var Vo, fh = (function(n) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, o, l, d) {
            MSApp.execUnsafeLocalFunction(function() {
                return n(s, o, l, d)
            })
        }
        : n
    }
    )(function(n, s) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in n)
            n.innerHTML = s;
        else {
            for (Vo = Vo || document.createElement("div"),
            Vo.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>",
            s = Vo.firstChild; n.firstChild; )
                n.removeChild(n.firstChild);
            for (; s.firstChild; )
                n.appendChild(s.firstChild)
        }
    });
    function ci(n, s) {
        if (s) {
            var o = n.firstChild;
            if (o && o === n.lastChild && o.nodeType === 3) {
                o.nodeValue = s;
                return
            }
        }
        n.textContent = s
    }
    var di = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , Zx = ["Webkit", "ms", "Moz", "O"];
    Object.keys(di).forEach(function(n) {
        Zx.forEach(function(s) {
            s = s + n.charAt(0).toUpperCase() + n.substring(1),
            di[s] = di[n]
        })
    });
    function hh(n, s, o) {
        return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || di.hasOwnProperty(n) && di[n] ? ("" + s).trim() : s + "px"
    }
    function ph(n, s) {
        n = n.style;
        for (var o in s)
            if (s.hasOwnProperty(o)) {
                var l = o.indexOf("--") === 0
                  , d = hh(o, s[o], l);
                o === "float" && (o = "cssFloat"),
                l ? n.setProperty(o, d) : n[o] = d
            }
    }
    var e1 = U({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Yl(n, s) {
        if (s) {
            if (e1[n] && (s.children != null || s.dangerouslySetInnerHTML != null))
                throw Error(r(137, n));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null)
                    throw Error(r(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html"in s.dangerouslySetInnerHTML))
                    throw Error(r(61))
            }
            if (s.style != null && typeof s.style != "object")
                throw Error(r(62))
        }
    }
    function Xl(n, s) {
        if (n.indexOf("-") === -1)
            return typeof s.is == "string";
        switch (n) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Jl = null;
    function Zl(n) {
        return n = n.target || n.srcElement || window,
        n.correspondingUseElement && (n = n.correspondingUseElement),
        n.nodeType === 3 ? n.parentNode : n
    }
    var eu = null
      , fs = null
      , hs = null;
    function mh(n) {
        if (n = ji(n)) {
            if (typeof eu != "function")
                throw Error(r(280));
            var s = n.stateNode;
            s && (s = la(s),
            eu(n.stateNode, n.type, s))
        }
    }
    function gh(n) {
        fs ? hs ? hs.push(n) : hs = [n] : fs = n
    }
    function yh() {
        if (fs) {
            var n = fs
              , s = hs;
            if (hs = fs = null,
            mh(n),
            s)
                for (n = 0; n < s.length; n++)
                    mh(s[n])
        }
    }
    function vh(n, s) {
        return n(s)
    }
    function wh() {}
    var tu = !1;
    function xh(n, s, o) {
        if (tu)
            return n(s, o);
        tu = !0;
        try {
            return vh(n, s, o)
        } finally {
            tu = !1,
            (fs !== null || hs !== null) && (wh(),
            yh())
        }
    }
    function fi(n, s) {
        var o = n.stateNode;
        if (o === null)
            return null;
        var l = la(o);
        if (l === null)
            return null;
        o = l[s];
        e: switch (s) {
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
            (l = !l.disabled) || (n = n.type,
            l = !(n === "button" || n === "input" || n === "select" || n === "textarea")),
            n = !l;
            break e;
        default:
            n = !1
        }
        if (n)
            return null;
        if (o && typeof o != "function")
            throw Error(r(231, s, typeof o));
        return o
    }
    var nu = !1;
    if (f)
        try {
            var hi = {};
            Object.defineProperty(hi, "passive", {
                get: function() {
                    nu = !0
                }
            }),
            window.addEventListener("test", hi, hi),
            window.removeEventListener("test", hi, hi)
        } catch {
            nu = !1
        }
    function t1(n, s, o, l, d, p, v, T, C) {
        var I = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(o, I)
        } catch (q) {
            this.onError(q)
        }
    }
    var pi = !1
      , Bo = null
      , Uo = !1
      , ru = null
      , n1 = {
        onError: function(n) {
            pi = !0,
            Bo = n
        }
    };
    function r1(n, s, o, l, d, p, v, T, C) {
        pi = !1,
        Bo = null,
        t1.apply(n1, arguments)
    }
    function s1(n, s, o, l, d, p, v, T, C) {
        if (r1.apply(this, arguments),
        pi) {
            if (pi) {
                var I = Bo;
                pi = !1,
                Bo = null
            } else
                throw Error(r(198));
            Uo || (Uo = !0,
            ru = I)
        }
    }
    function Ar(n) {
        var s = n
          , o = n;
        if (n.alternate)
            for (; s.return; )
                s = s.return;
        else {
            n = s;
            do
                s = n,
                (s.flags & 4098) !== 0 && (o = s.return),
                n = s.return;
            while (n)
        }
        return s.tag === 3 ? o : null
    }
    function Sh(n) {
        if (n.tag === 13) {
            var s = n.memoizedState;
            if (s === null && (n = n.alternate,
            n !== null && (s = n.memoizedState)),
            s !== null)
                return s.dehydrated
        }
        return null
    }
    function bh(n) {
        if (Ar(n) !== n)
            throw Error(r(188))
    }
    function i1(n) {
        var s = n.alternate;
        if (!s) {
            if (s = Ar(n),
            s === null)
                throw Error(r(188));
            return s !== n ? null : n
        }
        for (var o = n, l = s; ; ) {
            var d = o.return;
            if (d === null)
                break;
            var p = d.alternate;
            if (p === null) {
                if (l = d.return,
                l !== null) {
                    o = l;
                    continue
                }
                break
            }
            if (d.child === p.child) {
                for (p = d.child; p; ) {
                    if (p === o)
                        return bh(d),
                        n;
                    if (p === l)
                        return bh(d),
                        s;
                    p = p.sibling
                }
                throw Error(r(188))
            }
            if (o.return !== l.return)
                o = d,
                l = p;
            else {
                for (var v = !1, T = d.child; T; ) {
                    if (T === o) {
                        v = !0,
                        o = d,
                        l = p;
                        break
                    }
                    if (T === l) {
                        v = !0,
                        l = d,
                        o = p;
                        break
                    }
                    T = T.sibling
                }
                if (!v) {
                    for (T = p.child; T; ) {
                        if (T === o) {
                            v = !0,
                            o = p,
                            l = d;
                            break
                        }
                        if (T === l) {
                            v = !0,
                            l = p,
                            o = d;
                            break
                        }
                        T = T.sibling
                    }
                    if (!v)
                        throw Error(r(189))
                }
            }
            if (o.alternate !== l)
                throw Error(r(190))
        }
        if (o.tag !== 3)
            throw Error(r(188));
        return o.stateNode.current === o ? n : s
    }
    function kh(n) {
        return n = i1(n),
        n !== null ? Eh(n) : null
    }
    function Eh(n) {
        if (n.tag === 5 || n.tag === 6)
            return n;
        for (n = n.child; n !== null; ) {
            var s = Eh(n);
            if (s !== null)
                return s;
            n = n.sibling
        }
        return null
    }
    var Th = e.unstable_scheduleCallback
      , Ch = e.unstable_cancelCallback
      , o1 = e.unstable_shouldYield
      , a1 = e.unstable_requestPaint
      , Ge = e.unstable_now
      , l1 = e.unstable_getCurrentPriorityLevel
      , su = e.unstable_ImmediatePriority
      , _h = e.unstable_UserBlockingPriority
      , zo = e.unstable_NormalPriority
      , u1 = e.unstable_LowPriority
      , Ph = e.unstable_IdlePriority
      , $o = null
      , pn = null;
    function c1(n) {
        if (pn && typeof pn.onCommitFiberRoot == "function")
            try {
                pn.onCommitFiberRoot($o, n, void 0, (n.current.flags & 128) === 128)
            } catch {}
    }
    var tn = Math.clz32 ? Math.clz32 : h1
      , d1 = Math.log
      , f1 = Math.LN2;
    function h1(n) {
        return n >>>= 0,
        n === 0 ? 32 : 31 - (d1(n) / f1 | 0) | 0
    }
    var qo = 64
      , Ho = 4194304;
    function mi(n) {
        switch (n & -n) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
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
            return n & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return n & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return n
        }
    }
    function Wo(n, s) {
        var o = n.pendingLanes;
        if (o === 0)
            return 0;
        var l = 0
          , d = n.suspendedLanes
          , p = n.pingedLanes
          , v = o & 268435455;
        if (v !== 0) {
            var T = v & ~d;
            T !== 0 ? l = mi(T) : (p &= v,
            p !== 0 && (l = mi(p)))
        } else
            v = o & ~d,
            v !== 0 ? l = mi(v) : p !== 0 && (l = mi(p));
        if (l === 0)
            return 0;
        if (s !== 0 && s !== l && (s & d) === 0 && (d = l & -l,
        p = s & -s,
        d >= p || d === 16 && (p & 4194240) !== 0))
            return s;
        if ((l & 4) !== 0 && (l |= o & 16),
        s = n.entangledLanes,
        s !== 0)
            for (n = n.entanglements,
            s &= l; 0 < s; )
                o = 31 - tn(s),
                d = 1 << o,
                l |= n[o],
                s &= ~d;
        return l
    }
    function p1(n, s) {
        switch (n) {
        case 1:
        case 2:
        case 4:
            return s + 250;
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
        case 2097152:
            return s + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function m1(n, s) {
        for (var o = n.suspendedLanes, l = n.pingedLanes, d = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
            var v = 31 - tn(p)
              , T = 1 << v
              , C = d[v];
            C === -1 ? ((T & o) === 0 || (T & l) !== 0) && (d[v] = p1(T, s)) : C <= s && (n.expiredLanes |= T),
            p &= ~T
        }
    }
    function iu(n) {
        return n = n.pendingLanes & -1073741825,
        n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    }
    function Rh() {
        var n = qo;
        return qo <<= 1,
        (qo & 4194240) === 0 && (qo = 64),
        n
    }
    function ou(n) {
        for (var s = [], o = 0; 31 > o; o++)
            s.push(n);
        return s
    }
    function gi(n, s, o) {
        n.pendingLanes |= s,
        s !== 536870912 && (n.suspendedLanes = 0,
        n.pingedLanes = 0),
        n = n.eventTimes,
        s = 31 - tn(s),
        n[s] = o
    }
    function g1(n, s) {
        var o = n.pendingLanes & ~s;
        n.pendingLanes = s,
        n.suspendedLanes = 0,
        n.pingedLanes = 0,
        n.expiredLanes &= s,
        n.mutableReadLanes &= s,
        n.entangledLanes &= s,
        s = n.entanglements;
        var l = n.eventTimes;
        for (n = n.expirationTimes; 0 < o; ) {
            var d = 31 - tn(o)
              , p = 1 << d;
            s[d] = 0,
            l[d] = -1,
            n[d] = -1,
            o &= ~p
        }
    }
    function au(n, s) {
        var o = n.entangledLanes |= s;
        for (n = n.entanglements; o; ) {
            var l = 31 - tn(o)
              , d = 1 << l;
            d & s | n[l] & s && (n[l] |= s),
            o &= ~d
        }
    }
    var je = 0;
    function Ah(n) {
        return n &= -n,
        1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Nh, lu, Oh, jh, Lh, uu = !1, Ko = [], Hn = null, Wn = null, Kn = null, yi = new Map, vi = new Map, Qn = [], y1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Dh(n, s) {
        switch (n) {
        case "focusin":
        case "focusout":
            Hn = null;
            break;
        case "dragenter":
        case "dragleave":
            Wn = null;
            break;
        case "mouseover":
        case "mouseout":
            Kn = null;
            break;
        case "pointerover":
        case "pointerout":
            yi.delete(s.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            vi.delete(s.pointerId)
        }
    }
    function wi(n, s, o, l, d, p) {
        return n === null || n.nativeEvent !== p ? (n = {
            blockedOn: s,
            domEventName: o,
            eventSystemFlags: l,
            nativeEvent: p,
            targetContainers: [d]
        },
        s !== null && (s = ji(s),
        s !== null && lu(s)),
        n) : (n.eventSystemFlags |= l,
        s = n.targetContainers,
        d !== null && s.indexOf(d) === -1 && s.push(d),
        n)
    }
    function v1(n, s, o, l, d) {
        switch (s) {
        case "focusin":
            return Hn = wi(Hn, n, s, o, l, d),
            !0;
        case "dragenter":
            return Wn = wi(Wn, n, s, o, l, d),
            !0;
        case "mouseover":
            return Kn = wi(Kn, n, s, o, l, d),
            !0;
        case "pointerover":
            var p = d.pointerId;
            return yi.set(p, wi(yi.get(p) || null, n, s, o, l, d)),
            !0;
        case "gotpointercapture":
            return p = d.pointerId,
            vi.set(p, wi(vi.get(p) || null, n, s, o, l, d)),
            !0
        }
        return !1
    }
    function Mh(n) {
        var s = Nr(n.target);
        if (s !== null) {
            var o = Ar(s);
            if (o !== null) {
                if (s = o.tag,
                s === 13) {
                    if (s = Sh(o),
                    s !== null) {
                        n.blockedOn = s,
                        Lh(n.priority, function() {
                            Oh(o)
                        });
                        return
                    }
                } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        n.blockedOn = null
    }
    function Qo(n) {
        if (n.blockedOn !== null)
            return !1;
        for (var s = n.targetContainers; 0 < s.length; ) {
            var o = du(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
            if (o === null) {
                o = n.nativeEvent;
                var l = new o.constructor(o.type,o);
                Jl = l,
                o.target.dispatchEvent(l),
                Jl = null
            } else
                return s = ji(o),
                s !== null && lu(s),
                n.blockedOn = o,
                !1;
            s.shift()
        }
        return !0
    }
    function Ih(n, s, o) {
        Qo(n) && o.delete(s)
    }
    function w1() {
        uu = !1,
        Hn !== null && Qo(Hn) && (Hn = null),
        Wn !== null && Qo(Wn) && (Wn = null),
        Kn !== null && Qo(Kn) && (Kn = null),
        yi.forEach(Ih),
        vi.forEach(Ih)
    }
    function xi(n, s) {
        n.blockedOn === s && (n.blockedOn = null,
        uu || (uu = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, w1)))
    }
    function Si(n) {
        function s(d) {
            return xi(d, n)
        }
        if (0 < Ko.length) {
            xi(Ko[0], n);
            for (var o = 1; o < Ko.length; o++) {
                var l = Ko[o];
                l.blockedOn === n && (l.blockedOn = null)
            }
        }
        for (Hn !== null && xi(Hn, n),
        Wn !== null && xi(Wn, n),
        Kn !== null && xi(Kn, n),
        yi.forEach(s),
        vi.forEach(s),
        o = 0; o < Qn.length; o++)
            l = Qn[o],
            l.blockedOn === n && (l.blockedOn = null);
        for (; 0 < Qn.length && (o = Qn[0],
        o.blockedOn === null); )
            Mh(o),
            o.blockedOn === null && Qn.shift()
    }
    var ps = j.ReactCurrentBatchConfig
      , Go = !0;
    function x1(n, s, o, l) {
        var d = je
          , p = ps.transition;
        ps.transition = null;
        try {
            je = 1,
            cu(n, s, o, l)
        } finally {
            je = d,
            ps.transition = p
        }
    }
    function S1(n, s, o, l) {
        var d = je
          , p = ps.transition;
        ps.transition = null;
        try {
            je = 4,
            cu(n, s, o, l)
        } finally {
            je = d,
            ps.transition = p
        }
    }
    function cu(n, s, o, l) {
        if (Go) {
            var d = du(n, s, o, l);
            if (d === null)
                Pu(n, s, l, Yo, o),
                Dh(n, l);
            else if (v1(d, n, s, o, l))
                l.stopPropagation();
            else if (Dh(n, l),
            s & 4 && -1 < y1.indexOf(n)) {
                for (; d !== null; ) {
                    var p = ji(d);
                    if (p !== null && Nh(p),
                    p = du(n, s, o, l),
                    p === null && Pu(n, s, l, Yo, o),
                    p === d)
                        break;
                    d = p
                }
                d !== null && l.stopPropagation()
            } else
                Pu(n, s, l, null, o)
        }
    }
    var Yo = null;
    function du(n, s, o, l) {
        if (Yo = null,
        n = Zl(l),
        n = Nr(n),
        n !== null)
            if (s = Ar(n),
            s === null)
                n = null;
            else if (o = s.tag,
            o === 13) {
                if (n = Sh(s),
                n !== null)
                    return n;
                n = null
            } else if (o === 3) {
                if (s.stateNode.current.memoizedState.isDehydrated)
                    return s.tag === 3 ? s.stateNode.containerInfo : null;
                n = null
            } else
                s !== n && (n = null);
        return Yo = n,
        null
    }
    function Fh(n) {
        switch (n) {
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
        case "selectstart":
            return 1;
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
        case "pointerleave":
            return 4;
        case "message":
            switch (l1()) {
            case su:
                return 1;
            case _h:
                return 4;
            case zo:
            case u1:
                return 16;
            case Ph:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Gn = null
      , fu = null
      , Xo = null;
    function Vh() {
        if (Xo)
            return Xo;
        var n, s = fu, o = s.length, l, d = "value"in Gn ? Gn.value : Gn.textContent, p = d.length;
        for (n = 0; n < o && s[n] === d[n]; n++)
            ;
        var v = o - n;
        for (l = 1; l <= v && s[o - l] === d[p - l]; l++)
            ;
        return Xo = d.slice(n, 1 < l ? 1 - l : void 0)
    }
    function Jo(n) {
        var s = n.keyCode;
        return "charCode"in n ? (n = n.charCode,
        n === 0 && s === 13 && (n = 13)) : n = s,
        n === 10 && (n = 13),
        32 <= n || n === 13 ? n : 0
    }
    function Zo() {
        return !0
    }
    function Bh() {
        return !1
    }
    function Mt(n) {
        function s(o, l, d, p, v) {
            this._reactName = o,
            this._targetInst = d,
            this.type = l,
            this.nativeEvent = p,
            this.target = v,
            this.currentTarget = null;
            for (var T in n)
                n.hasOwnProperty(T) && (o = n[T],
                this[T] = o ? o(p) : p[T]);
            return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Zo : Bh,
            this.isPropagationStopped = Bh,
            this
        }
        return U(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                this.isDefaultPrevented = Zo)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                this.isPropagationStopped = Zo)
            },
            persist: function() {},
            isPersistent: Zo
        }),
        s
    }
    var ms = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(n) {
            return n.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, hu = Mt(ms), bi = U({}, ms, {
        view: 0,
        detail: 0
    }), b1 = Mt(bi), pu, mu, ki, ea = U({}, bi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: yu,
        button: 0,
        buttons: 0,
        relatedTarget: function(n) {
            return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
        },
        movementX: function(n) {
            return "movementX"in n ? n.movementX : (n !== ki && (ki && n.type === "mousemove" ? (pu = n.screenX - ki.screenX,
            mu = n.screenY - ki.screenY) : mu = pu = 0,
            ki = n),
            pu)
        },
        movementY: function(n) {
            return "movementY"in n ? n.movementY : mu
        }
    }), Uh = Mt(ea), k1 = U({}, ea, {
        dataTransfer: 0
    }), E1 = Mt(k1), T1 = U({}, bi, {
        relatedTarget: 0
    }), gu = Mt(T1), C1 = U({}, ms, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), _1 = Mt(C1), P1 = U({}, ms, {
        clipboardData: function(n) {
            return "clipboardData"in n ? n.clipboardData : window.clipboardData
        }
    }), R1 = Mt(P1), A1 = U({}, ms, {
        data: 0
    }), zh = Mt(A1), N1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, O1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, j1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function L1(n) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(n) : (n = j1[n]) ? !!s[n] : !1
    }
    function yu() {
        return L1
    }
    var D1 = U({}, bi, {
        key: function(n) {
            if (n.key) {
                var s = N1[n.key] || n.key;
                if (s !== "Unidentified")
                    return s
            }
            return n.type === "keypress" ? (n = Jo(n),
            n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? O1[n.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: yu,
        charCode: function(n) {
            return n.type === "keypress" ? Jo(n) : 0
        },
        keyCode: function(n) {
            return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        },
        which: function(n) {
            return n.type === "keypress" ? Jo(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
        }
    })
      , M1 = Mt(D1)
      , I1 = U({}, ea, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , $h = Mt(I1)
      , F1 = U({}, bi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: yu
    })
      , V1 = Mt(F1)
      , B1 = U({}, ms, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , U1 = Mt(B1)
      , z1 = U({}, ea, {
        deltaX: function(n) {
            return "deltaX"in n ? n.deltaX : "wheelDeltaX"in n ? -n.wheelDeltaX : 0
        },
        deltaY: function(n) {
            return "deltaY"in n ? n.deltaY : "wheelDeltaY"in n ? -n.wheelDeltaY : "wheelDelta"in n ? -n.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , $1 = Mt(z1)
      , q1 = [9, 13, 27, 32]
      , vu = f && "CompositionEvent"in window
      , Ei = null;
    f && "documentMode"in document && (Ei = document.documentMode);
    var H1 = f && "TextEvent"in window && !Ei
      , qh = f && (!vu || Ei && 8 < Ei && 11 >= Ei)
      , Hh = " "
      , Wh = !1;
    function Kh(n, s) {
        switch (n) {
        case "keyup":
            return q1.indexOf(s.keyCode) !== -1;
        case "keydown":
            return s.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Qh(n) {
        return n = n.detail,
        typeof n == "object" && "data"in n ? n.data : null
    }
    var gs = !1;
    function W1(n, s) {
        switch (n) {
        case "compositionend":
            return Qh(s);
        case "keypress":
            return s.which !== 32 ? null : (Wh = !0,
            Hh);
        case "textInput":
            return n = s.data,
            n === Hh && Wh ? null : n;
        default:
            return null
        }
    }
    function K1(n, s) {
        if (gs)
            return n === "compositionend" || !vu && Kh(n, s) ? (n = Vh(),
            Xo = fu = Gn = null,
            gs = !1,
            n) : null;
        switch (n) {
        case "paste":
            return null;
        case "keypress":
            if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                if (s.char && 1 < s.char.length)
                    return s.char;
                if (s.which)
                    return String.fromCharCode(s.which)
            }
            return null;
        case "compositionend":
            return qh && s.locale !== "ko" ? null : s.data;
        default:
            return null
        }
    }
    var Q1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Gh(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s === "input" ? !!Q1[n.type] : s === "textarea"
    }
    function Yh(n, s, o, l) {
        gh(l),
        s = ia(s, "onChange"),
        0 < s.length && (o = new hu("onChange","change",null,o,l),
        n.push({
            event: o,
            listeners: s
        }))
    }
    var Ti = null
      , Ci = null;
    function G1(n) {
        pp(n, 0)
    }
    function ta(n) {
        var s = Ss(n);
        if (Rr(s))
            return n
    }
    function Y1(n, s) {
        if (n === "change")
            return s
    }
    var Xh = !1;
    if (f) {
        var wu;
        if (f) {
            var xu = "oninput"in document;
            if (!xu) {
                var Jh = document.createElement("div");
                Jh.setAttribute("oninput", "return;"),
                xu = typeof Jh.oninput == "function"
            }
            wu = xu
        } else
            wu = !1;
        Xh = wu && (!document.documentMode || 9 < document.documentMode)
    }
    function Zh() {
        Ti && (Ti.detachEvent("onpropertychange", ep),
        Ci = Ti = null)
    }
    function ep(n) {
        if (n.propertyName === "value" && ta(Ci)) {
            var s = [];
            Yh(s, Ci, n, Zl(n)),
            xh(G1, s)
        }
    }
    function X1(n, s, o) {
        n === "focusin" ? (Zh(),
        Ti = s,
        Ci = o,
        Ti.attachEvent("onpropertychange", ep)) : n === "focusout" && Zh()
    }
    function J1(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown")
            return ta(Ci)
    }
    function Z1(n, s) {
        if (n === "click")
            return ta(s)
    }
    function eS(n, s) {
        if (n === "input" || n === "change")
            return ta(s)
    }
    function tS(n, s) {
        return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
    }
    var nn = typeof Object.is == "function" ? Object.is : tS;
    function _i(n, s) {
        if (nn(n, s))
            return !0;
        if (typeof n != "object" || n === null || typeof s != "object" || s === null)
            return !1;
        var o = Object.keys(n)
          , l = Object.keys(s);
        if (o.length !== l.length)
            return !1;
        for (l = 0; l < o.length; l++) {
            var d = o[l];
            if (!h.call(s, d) || !nn(n[d], s[d]))
                return !1
        }
        return !0
    }
    function tp(n) {
        for (; n && n.firstChild; )
            n = n.firstChild;
        return n
    }
    function np(n, s) {
        var o = tp(n);
        n = 0;
        for (var l; o; ) {
            if (o.nodeType === 3) {
                if (l = n + o.textContent.length,
                n <= s && l >= s)
                    return {
                        node: o,
                        offset: s - n
                    };
                n = l
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = tp(o)
        }
    }
    function rp(n, s) {
        return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? rp(n, s.parentNode) : "contains"in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
    }
    function sp() {
        for (var n = window, s = $n(); s instanceof n.HTMLIFrameElement; ) {
            try {
                var o = typeof s.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o)
                n = s.contentWindow;
            else
                break;
            s = $n(n.document)
        }
        return s
    }
    function Su(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
    }
    function nS(n) {
        var s = sp()
          , o = n.focusedElem
          , l = n.selectionRange;
        if (s !== o && o && o.ownerDocument && rp(o.ownerDocument.documentElement, o)) {
            if (l !== null && Su(o)) {
                if (s = l.start,
                n = l.end,
                n === void 0 && (n = s),
                "selectionStart"in o)
                    o.selectionStart = s,
                    o.selectionEnd = Math.min(n, o.value.length);
                else if (n = (s = o.ownerDocument || document) && s.defaultView || window,
                n.getSelection) {
                    n = n.getSelection();
                    var d = o.textContent.length
                      , p = Math.min(l.start, d);
                    l = l.end === void 0 ? p : Math.min(l.end, d),
                    !n.extend && p > l && (d = l,
                    l = p,
                    p = d),
                    d = np(o, p);
                    var v = np(o, l);
                    d && v && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== v.node || n.focusOffset !== v.offset) && (s = s.createRange(),
                    s.setStart(d.node, d.offset),
                    n.removeAllRanges(),
                    p > l ? (n.addRange(s),
                    n.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset),
                    n.addRange(s)))
                }
            }
            for (s = [],
            n = o; n = n.parentNode; )
                n.nodeType === 1 && s.push({
                    element: n,
                    left: n.scrollLeft,
                    top: n.scrollTop
                });
            for (typeof o.focus == "function" && o.focus(),
            o = 0; o < s.length; o++)
                n = s[o],
                n.element.scrollLeft = n.left,
                n.element.scrollTop = n.top
        }
    }
    var rS = f && "documentMode"in document && 11 >= document.documentMode
      , ys = null
      , bu = null
      , Pi = null
      , ku = !1;
    function ip(n, s, o) {
        var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        ku || ys == null || ys !== $n(l) || (l = ys,
        "selectionStart"in l && Su(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Pi && _i(Pi, l) || (Pi = l,
        l = ia(bu, "onSelect"),
        0 < l.length && (s = new hu("onSelect","select",null,s,o),
        n.push({
            event: s,
            listeners: l
        }),
        s.target = ys)))
    }
    function na(n, s) {
        var o = {};
        return o[n.toLowerCase()] = s.toLowerCase(),
        o["Webkit" + n] = "webkit" + s,
        o["Moz" + n] = "moz" + s,
        o
    }
    var vs = {
        animationend: na("Animation", "AnimationEnd"),
        animationiteration: na("Animation", "AnimationIteration"),
        animationstart: na("Animation", "AnimationStart"),
        transitionend: na("Transition", "TransitionEnd")
    }
      , Eu = {}
      , op = {};
    f && (op = document.createElement("div").style,
    "AnimationEvent"in window || (delete vs.animationend.animation,
    delete vs.animationiteration.animation,
    delete vs.animationstart.animation),
    "TransitionEvent"in window || delete vs.transitionend.transition);
    function ra(n) {
        if (Eu[n])
            return Eu[n];
        if (!vs[n])
            return n;
        var s = vs[n], o;
        for (o in s)
            if (s.hasOwnProperty(o) && o in op)
                return Eu[n] = s[o];
        return n
    }
    var ap = ra("animationend")
      , lp = ra("animationiteration")
      , up = ra("animationstart")
      , cp = ra("transitionend")
      , dp = new Map
      , fp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Yn(n, s) {
        dp.set(n, s),
        u(s, [n])
    }
    for (var Tu = 0; Tu < fp.length; Tu++) {
        var Cu = fp[Tu]
          , sS = Cu.toLowerCase()
          , iS = Cu[0].toUpperCase() + Cu.slice(1);
        Yn(sS, "on" + iS)
    }
    Yn(ap, "onAnimationEnd"),
    Yn(lp, "onAnimationIteration"),
    Yn(up, "onAnimationStart"),
    Yn("dblclick", "onDoubleClick"),
    Yn("focusin", "onFocus"),
    Yn("focusout", "onBlur"),
    Yn(cp, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , oS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));
    function hp(n, s, o) {
        var l = n.type || "unknown-event";
        n.currentTarget = o,
        s1(l, s, void 0, n),
        n.currentTarget = null
    }
    function pp(n, s) {
        s = (s & 4) !== 0;
        for (var o = 0; o < n.length; o++) {
            var l = n[o]
              , d = l.event;
            l = l.listeners;
            e: {
                var p = void 0;
                if (s)
                    for (var v = l.length - 1; 0 <= v; v--) {
                        var T = l[v]
                          , C = T.instance
                          , I = T.currentTarget;
                        if (T = T.listener,
                        C !== p && d.isPropagationStopped())
                            break e;
                        hp(d, T, I),
                        p = C
                    }
                else
                    for (v = 0; v < l.length; v++) {
                        if (T = l[v],
                        C = T.instance,
                        I = T.currentTarget,
                        T = T.listener,
                        C !== p && d.isPropagationStopped())
                            break e;
                        hp(d, T, I),
                        p = C
                    }
            }
        }
        if (Uo)
            throw n = ru,
            Uo = !1,
            ru = null,
            n
    }
    function Ve(n, s) {
        var o = s[Lu];
        o === void 0 && (o = s[Lu] = new Set);
        var l = n + "__bubble";
        o.has(l) || (mp(s, n, 2, !1),
        o.add(l))
    }
    function _u(n, s, o) {
        var l = 0;
        s && (l |= 4),
        mp(o, n, l, s)
    }
    var sa = "_reactListening" + Math.random().toString(36).slice(2);
    function Ai(n) {
        if (!n[sa]) {
            n[sa] = !0,
            i.forEach(function(o) {
                o !== "selectionchange" && (oS.has(o) || _u(o, !1, n),
                _u(o, !0, n))
            });
            var s = n.nodeType === 9 ? n : n.ownerDocument;
            s === null || s[sa] || (s[sa] = !0,
            _u("selectionchange", !1, s))
        }
    }
    function mp(n, s, o, l) {
        switch (Fh(s)) {
        case 1:
            var d = x1;
            break;
        case 4:
            d = S1;
            break;
        default:
            d = cu
        }
        o = d.bind(null, s, o, n),
        d = void 0,
        !nu || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (d = !0),
        l ? d !== void 0 ? n.addEventListener(s, o, {
            capture: !0,
            passive: d
        }) : n.addEventListener(s, o, !0) : d !== void 0 ? n.addEventListener(s, o, {
            passive: d
        }) : n.addEventListener(s, o, !1)
    }
    function Pu(n, s, o, l, d) {
        var p = l;
        if ((s & 1) === 0 && (s & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var v = l.tag;
                if (v === 3 || v === 4) {
                    var T = l.stateNode.containerInfo;
                    if (T === d || T.nodeType === 8 && T.parentNode === d)
                        break;
                    if (v === 4)
                        for (v = l.return; v !== null; ) {
                            var C = v.tag;
                            if ((C === 3 || C === 4) && (C = v.stateNode.containerInfo,
                            C === d || C.nodeType === 8 && C.parentNode === d))
                                return;
                            v = v.return
                        }
                    for (; T !== null; ) {
                        if (v = Nr(T),
                        v === null)
                            return;
                        if (C = v.tag,
                        C === 5 || C === 6) {
                            l = p = v;
                            continue e
                        }
                        T = T.parentNode
                    }
                }
                l = l.return
            }
        xh(function() {
            var I = p
              , q = Zl(o)
              , H = [];
            e: {
                var $ = dp.get(n);
                if ($ !== void 0) {
                    var Y = hu
                      , ee = n;
                    switch (n) {
                    case "keypress":
                        if (Jo(o) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Y = M1;
                        break;
                    case "focusin":
                        ee = "focus",
                        Y = gu;
                        break;
                    case "focusout":
                        ee = "blur",
                        Y = gu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Y = gu;
                        break;
                    case "click":
                        if (o.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        Y = Uh;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Y = E1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Y = V1;
                        break;
                    case ap:
                    case lp:
                    case up:
                        Y = _1;
                        break;
                    case cp:
                        Y = U1;
                        break;
                    case "scroll":
                        Y = b1;
                        break;
                    case "wheel":
                        Y = $1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Y = R1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Y = $h
                    }
                    var re = (s & 4) !== 0
                      , Ye = !re && n === "scroll"
                      , N = re ? $ !== null ? $ + "Capture" : null : $;
                    re = [];
                    for (var P = I, O; P !== null; ) {
                        O = P;
                        var Q = O.stateNode;
                        if (O.tag === 5 && Q !== null && (O = Q,
                        N !== null && (Q = fi(P, N),
                        Q != null && re.push(Ni(P, Q, O)))),
                        Ye)
                            break;
                        P = P.return
                    }
                    0 < re.length && ($ = new Y($,ee,null,o,q),
                    H.push({
                        event: $,
                        listeners: re
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if ($ = n === "mouseover" || n === "pointerover",
                    Y = n === "mouseout" || n === "pointerout",
                    $ && o !== Jl && (ee = o.relatedTarget || o.fromElement) && (Nr(ee) || ee[_n]))
                        break e;
                    if ((Y || $) && ($ = q.window === q ? q : ($ = q.ownerDocument) ? $.defaultView || $.parentWindow : window,
                    Y ? (ee = o.relatedTarget || o.toElement,
                    Y = I,
                    ee = ee ? Nr(ee) : null,
                    ee !== null && (Ye = Ar(ee),
                    ee !== Ye || ee.tag !== 5 && ee.tag !== 6) && (ee = null)) : (Y = null,
                    ee = I),
                    Y !== ee)) {
                        if (re = Uh,
                        Q = "onMouseLeave",
                        N = "onMouseEnter",
                        P = "mouse",
                        (n === "pointerout" || n === "pointerover") && (re = $h,
                        Q = "onPointerLeave",
                        N = "onPointerEnter",
                        P = "pointer"),
                        Ye = Y == null ? $ : Ss(Y),
                        O = ee == null ? $ : Ss(ee),
                        $ = new re(Q,P + "leave",Y,o,q),
                        $.target = Ye,
                        $.relatedTarget = O,
                        Q = null,
                        Nr(q) === I && (re = new re(N,P + "enter",ee,o,q),
                        re.target = O,
                        re.relatedTarget = Ye,
                        Q = re),
                        Ye = Q,
                        Y && ee)
                            t: {
                                for (re = Y,
                                N = ee,
                                P = 0,
                                O = re; O; O = ws(O))
                                    P++;
                                for (O = 0,
                                Q = N; Q; Q = ws(Q))
                                    O++;
                                for (; 0 < P - O; )
                                    re = ws(re),
                                    P--;
                                for (; 0 < O - P; )
                                    N = ws(N),
                                    O--;
                                for (; P--; ) {
                                    if (re === N || N !== null && re === N.alternate)
                                        break t;
                                    re = ws(re),
                                    N = ws(N)
                                }
                                re = null
                            }
                        else
                            re = null;
                        Y !== null && gp(H, $, Y, re, !1),
                        ee !== null && Ye !== null && gp(H, Ye, ee, re, !0)
                    }
                }
                e: {
                    if ($ = I ? Ss(I) : window,
                    Y = $.nodeName && $.nodeName.toLowerCase(),
                    Y === "select" || Y === "input" && $.type === "file")
                        var ie = Y1;
                    else if (Gh($))
                        if (Xh)
                            ie = eS;
                        else {
                            ie = J1;
                            var oe = X1
                        }
                    else
                        (Y = $.nodeName) && Y.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ie = Z1);
                    if (ie && (ie = ie(n, I))) {
                        Yh(H, ie, o, q);
                        break e
                    }
                    oe && oe(n, $, I),
                    n === "focusout" && (oe = $._wrapperState) && oe.controlled && $.type === "number" && Kl($, "number", $.value)
                }
                switch (oe = I ? Ss(I) : window,
                n) {
                case "focusin":
                    (Gh(oe) || oe.contentEditable === "true") && (ys = oe,
                    bu = I,
                    Pi = null);
                    break;
                case "focusout":
                    Pi = bu = ys = null;
                    break;
                case "mousedown":
                    ku = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ku = !1,
                    ip(H, o, q);
                    break;
                case "selectionchange":
                    if (rS)
                        break;
                case "keydown":
                case "keyup":
                    ip(H, o, q)
                }
                var ae;
                if (vu)
                    e: {
                        switch (n) {
                        case "compositionstart":
                            var me = "onCompositionStart";
                            break e;
                        case "compositionend":
                            me = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            me = "onCompositionUpdate";
                            break e
                        }
                        me = void 0
                    }
                else
                    gs ? Kh(n, o) && (me = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (me = "onCompositionStart");
                me && (qh && o.locale !== "ko" && (gs || me !== "onCompositionStart" ? me === "onCompositionEnd" && gs && (ae = Vh()) : (Gn = q,
                fu = "value"in Gn ? Gn.value : Gn.textContent,
                gs = !0)),
                oe = ia(I, me),
                0 < oe.length && (me = new zh(me,n,null,o,q),
                H.push({
                    event: me,
                    listeners: oe
                }),
                ae ? me.data = ae : (ae = Qh(o),
                ae !== null && (me.data = ae)))),
                (ae = H1 ? W1(n, o) : K1(n, o)) && (I = ia(I, "onBeforeInput"),
                0 < I.length && (q = new zh("onBeforeInput","beforeinput",null,o,q),
                H.push({
                    event: q,
                    listeners: I
                }),
                q.data = ae))
            }
            pp(H, s)
        })
    }
    function Ni(n, s, o) {
        return {
            instance: n,
            listener: s,
            currentTarget: o
        }
    }
    function ia(n, s) {
        for (var o = s + "Capture", l = []; n !== null; ) {
            var d = n
              , p = d.stateNode;
            d.tag === 5 && p !== null && (d = p,
            p = fi(n, o),
            p != null && l.unshift(Ni(n, p, d)),
            p = fi(n, s),
            p != null && l.push(Ni(n, p, d))),
            n = n.return
        }
        return l
    }
    function ws(n) {
        if (n === null)
            return null;
        do
            n = n.return;
        while (n && n.tag !== 5);
        return n || null
    }
    function gp(n, s, o, l, d) {
        for (var p = s._reactName, v = []; o !== null && o !== l; ) {
            var T = o
              , C = T.alternate
              , I = T.stateNode;
            if (C !== null && C === l)
                break;
            T.tag === 5 && I !== null && (T = I,
            d ? (C = fi(o, p),
            C != null && v.unshift(Ni(o, C, T))) : d || (C = fi(o, p),
            C != null && v.push(Ni(o, C, T)))),
            o = o.return
        }
        v.length !== 0 && n.push({
            event: s,
            listeners: v
        })
    }
    var aS = /\r\n?/g
      , lS = /\u0000|\uFFFD/g;
    function yp(n) {
        return (typeof n == "string" ? n : "" + n).replace(aS, `
`).replace(lS, "")
    }
    function oa(n, s, o) {
        if (s = yp(s),
        yp(n) !== s && o)
            throw Error(r(425))
    }
    function aa() {}
    var Ru = null
      , Au = null;
    function Nu(n, s) {
        return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var Ou = typeof setTimeout == "function" ? setTimeout : void 0
      , uS = typeof clearTimeout == "function" ? clearTimeout : void 0
      , vp = typeof Promise == "function" ? Promise : void 0
      , cS = typeof queueMicrotask == "function" ? queueMicrotask : typeof vp < "u" ? function(n) {
        return vp.resolve(null).then(n).catch(dS)
    }
    : Ou;
    function dS(n) {
        setTimeout(function() {
            throw n
        })
    }
    function ju(n, s) {
        var o = s
          , l = 0;
        do {
            var d = o.nextSibling;
            if (n.removeChild(o),
            d && d.nodeType === 8)
                if (o = d.data,
                o === "/$") {
                    if (l === 0) {
                        n.removeChild(d),
                        Si(s);
                        return
                    }
                    l--
                } else
                    o !== "$" && o !== "$?" && o !== "$!" || l++;
            o = d
        } while (o);
        Si(s)
    }
    function Xn(n) {
        for (; n != null; n = n.nextSibling) {
            var s = n.nodeType;
            if (s === 1 || s === 3)
                break;
            if (s === 8) {
                if (s = n.data,
                s === "$" || s === "$!" || s === "$?")
                    break;
                if (s === "/$")
                    return null
            }
        }
        return n
    }
    function wp(n) {
        n = n.previousSibling;
        for (var s = 0; n; ) {
            if (n.nodeType === 8) {
                var o = n.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (s === 0)
                        return n;
                    s--
                } else
                    o === "/$" && s++
            }
            n = n.previousSibling
        }
        return null
    }
    var xs = Math.random().toString(36).slice(2)
      , mn = "__reactFiber$" + xs
      , Oi = "__reactProps$" + xs
      , _n = "__reactContainer$" + xs
      , Lu = "__reactEvents$" + xs
      , fS = "__reactListeners$" + xs
      , hS = "__reactHandles$" + xs;
    function Nr(n) {
        var s = n[mn];
        if (s)
            return s;
        for (var o = n.parentNode; o; ) {
            if (s = o[_n] || o[mn]) {
                if (o = s.alternate,
                s.child !== null || o !== null && o.child !== null)
                    for (n = wp(n); n !== null; ) {
                        if (o = n[mn])
                            return o;
                        n = wp(n)
                    }
                return s
            }
            n = o,
            o = n.parentNode
        }
        return null
    }
    function ji(n) {
        return n = n[mn] || n[_n],
        !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
    }
    function Ss(n) {
        if (n.tag === 5 || n.tag === 6)
            return n.stateNode;
        throw Error(r(33))
    }
    function la(n) {
        return n[Oi] || null
    }
    var Du = []
      , bs = -1;
    function Jn(n) {
        return {
            current: n
        }
    }
    function Be(n) {
        0 > bs || (n.current = Du[bs],
        Du[bs] = null,
        bs--)
    }
    function Fe(n, s) {
        bs++,
        Du[bs] = n.current,
        n.current = s
    }
    var Zn = {}
      , pt = Jn(Zn)
      , Tt = Jn(!1)
      , Or = Zn;
    function ks(n, s) {
        var o = n.type.contextTypes;
        if (!o)
            return Zn;
        var l = n.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === s)
            return l.__reactInternalMemoizedMaskedChildContext;
        var d = {}, p;
        for (p in o)
            d[p] = s[p];
        return l && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = s,
        n.__reactInternalMemoizedMaskedChildContext = d),
        d
    }
    function Ct(n) {
        return n = n.childContextTypes,
        n != null
    }
    function ua() {
        Be(Tt),
        Be(pt)
    }
    function xp(n, s, o) {
        if (pt.current !== Zn)
            throw Error(r(168));
        Fe(pt, s),
        Fe(Tt, o)
    }
    function Sp(n, s, o) {
        var l = n.stateNode;
        if (s = s.childContextTypes,
        typeof l.getChildContext != "function")
            return o;
        l = l.getChildContext();
        for (var d in l)
            if (!(d in s))
                throw Error(r(108, Ne(n) || "Unknown", d));
        return U({}, o, l)
    }
    function ca(n) {
        return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Zn,
        Or = pt.current,
        Fe(pt, n),
        Fe(Tt, Tt.current),
        !0
    }
    function bp(n, s, o) {
        var l = n.stateNode;
        if (!l)
            throw Error(r(169));
        o ? (n = Sp(n, s, Or),
        l.__reactInternalMemoizedMergedChildContext = n,
        Be(Tt),
        Be(pt),
        Fe(pt, n)) : Be(Tt),
        Fe(Tt, o)
    }
    var Pn = null
      , da = !1
      , Mu = !1;
    function kp(n) {
        Pn === null ? Pn = [n] : Pn.push(n)
    }
    function pS(n) {
        da = !0,
        kp(n)
    }
    function er() {
        if (!Mu && Pn !== null) {
            Mu = !0;
            var n = 0
              , s = je;
            try {
                var o = Pn;
                for (je = 1; n < o.length; n++) {
                    var l = o[n];
                    do
                        l = l(!0);
                    while (l !== null)
                }
                Pn = null,
                da = !1
            } catch (d) {
                throw Pn !== null && (Pn = Pn.slice(n + 1)),
                Th(su, er),
                d
            } finally {
                je = s,
                Mu = !1
            }
        }
        return null
    }
    var Es = []
      , Ts = 0
      , fa = null
      , ha = 0
      , zt = []
      , $t = 0
      , jr = null
      , Rn = 1
      , An = "";
    function Lr(n, s) {
        Es[Ts++] = ha,
        Es[Ts++] = fa,
        fa = n,
        ha = s
    }
    function Ep(n, s, o) {
        zt[$t++] = Rn,
        zt[$t++] = An,
        zt[$t++] = jr,
        jr = n;
        var l = Rn;
        n = An;
        var d = 32 - tn(l) - 1;
        l &= ~(1 << d),
        o += 1;
        var p = 32 - tn(s) + d;
        if (30 < p) {
            var v = d - d % 5;
            p = (l & (1 << v) - 1).toString(32),
            l >>= v,
            d -= v,
            Rn = 1 << 32 - tn(s) + d | o << d | l,
            An = p + n
        } else
            Rn = 1 << p | o << d | l,
            An = n
    }
    function Iu(n) {
        n.return !== null && (Lr(n, 1),
        Ep(n, 1, 0))
    }
    function Fu(n) {
        for (; n === fa; )
            fa = Es[--Ts],
            Es[Ts] = null,
            ha = Es[--Ts],
            Es[Ts] = null;
        for (; n === jr; )
            jr = zt[--$t],
            zt[$t] = null,
            An = zt[--$t],
            zt[$t] = null,
            Rn = zt[--$t],
            zt[$t] = null
    }
    var It = null
      , Ft = null
      , ze = !1
      , rn = null;
    function Tp(n, s) {
        var o = Kt(5, null, null, 0);
        o.elementType = "DELETED",
        o.stateNode = s,
        o.return = n,
        s = n.deletions,
        s === null ? (n.deletions = [o],
        n.flags |= 16) : s.push(o)
    }
    function Cp(n, s) {
        switch (n.tag) {
        case 5:
            var o = n.type;
            return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s,
            s !== null ? (n.stateNode = s,
            It = n,
            Ft = Xn(s.firstChild),
            !0) : !1;
        case 6:
            return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s,
            s !== null ? (n.stateNode = s,
            It = n,
            Ft = null,
            !0) : !1;
        case 13:
            return s = s.nodeType !== 8 ? null : s,
            s !== null ? (o = jr !== null ? {
                id: Rn,
                overflow: An
            } : null,
            n.memoizedState = {
                dehydrated: s,
                treeContext: o,
                retryLane: 1073741824
            },
            o = Kt(18, null, null, 0),
            o.stateNode = s,
            o.return = n,
            n.child = o,
            It = n,
            Ft = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Vu(n) {
        return (n.mode & 1) !== 0 && (n.flags & 128) === 0
    }
    function Bu(n) {
        if (ze) {
            var s = Ft;
            if (s) {
                var o = s;
                if (!Cp(n, s)) {
                    if (Vu(n))
                        throw Error(r(418));
                    s = Xn(o.nextSibling);
                    var l = It;
                    s && Cp(n, s) ? Tp(l, o) : (n.flags = n.flags & -4097 | 2,
                    ze = !1,
                    It = n)
                }
            } else {
                if (Vu(n))
                    throw Error(r(418));
                n.flags = n.flags & -4097 | 2,
                ze = !1,
                It = n
            }
        }
    }
    function _p(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
            n = n.return;
        It = n
    }
    function pa(n) {
        if (n !== It)
            return !1;
        if (!ze)
            return _p(n),
            ze = !0,
            !1;
        var s;
        if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type,
        s = s !== "head" && s !== "body" && !Nu(n.type, n.memoizedProps)),
        s && (s = Ft)) {
            if (Vu(n))
                throw Pp(),
                Error(r(418));
            for (; s; )
                Tp(n, s),
                s = Xn(s.nextSibling)
        }
        if (_p(n),
        n.tag === 13) {
            if (n = n.memoizedState,
            n = n !== null ? n.dehydrated : null,
            !n)
                throw Error(r(317));
            e: {
                for (n = n.nextSibling,
                s = 0; n; ) {
                    if (n.nodeType === 8) {
                        var o = n.data;
                        if (o === "/$") {
                            if (s === 0) {
                                Ft = Xn(n.nextSibling);
                                break e
                            }
                            s--
                        } else
                            o !== "$" && o !== "$!" && o !== "$?" || s++
                    }
                    n = n.nextSibling
                }
                Ft = null
            }
        } else
            Ft = It ? Xn(n.stateNode.nextSibling) : null;
        return !0
    }
    function Pp() {
        for (var n = Ft; n; )
            n = Xn(n.nextSibling)
    }
    function Cs() {
        Ft = It = null,
        ze = !1
    }
    function Uu(n) {
        rn === null ? rn = [n] : rn.push(n)
    }
    var mS = j.ReactCurrentBatchConfig;
    function Li(n, s, o) {
        if (n = o.ref,
        n !== null && typeof n != "function" && typeof n != "object") {
            if (o._owner) {
                if (o = o._owner,
                o) {
                    if (o.tag !== 1)
                        throw Error(r(309));
                    var l = o.stateNode
                }
                if (!l)
                    throw Error(r(147, n));
                var d = l
                  , p = "" + n;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p ? s.ref : (s = function(v) {
                    var T = d.refs;
                    v === null ? delete T[p] : T[p] = v
                }
                ,
                s._stringRef = p,
                s)
            }
            if (typeof n != "string")
                throw Error(r(284));
            if (!o._owner)
                throw Error(r(290, n))
        }
        return n
    }
    function ma(n, s) {
        throw n = Object.prototype.toString.call(s),
        Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
    }
    function Rp(n) {
        var s = n._init;
        return s(n._payload)
    }
    function Ap(n) {
        function s(N, P) {
            if (n) {
                var O = N.deletions;
                O === null ? (N.deletions = [P],
                N.flags |= 16) : O.push(P)
            }
        }
        function o(N, P) {
            if (!n)
                return null;
            for (; P !== null; )
                s(N, P),
                P = P.sibling;
            return null
        }
        function l(N, P) {
            for (N = new Map; P !== null; )
                P.key !== null ? N.set(P.key, P) : N.set(P.index, P),
                P = P.sibling;
            return N
        }
        function d(N, P) {
            return N = lr(N, P),
            N.index = 0,
            N.sibling = null,
            N
        }
        function p(N, P, O) {
            return N.index = O,
            n ? (O = N.alternate,
            O !== null ? (O = O.index,
            O < P ? (N.flags |= 2,
            P) : O) : (N.flags |= 2,
            P)) : (N.flags |= 1048576,
            P)
        }
        function v(N) {
            return n && N.alternate === null && (N.flags |= 2),
            N
        }
        function T(N, P, O, Q) {
            return P === null || P.tag !== 6 ? (P = Oc(O, N.mode, Q),
            P.return = N,
            P) : (P = d(P, O),
            P.return = N,
            P)
        }
        function C(N, P, O, Q) {
            var ie = O.type;
            return ie === G ? q(N, P, O.props.children, Q, O.key) : P !== null && (P.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === we && Rp(ie) === P.type) ? (Q = d(P, O.props),
            Q.ref = Li(N, P, O),
            Q.return = N,
            Q) : (Q = Va(O.type, O.key, O.props, null, N.mode, Q),
            Q.ref = Li(N, P, O),
            Q.return = N,
            Q)
        }
        function I(N, P, O, Q) {
            return P === null || P.tag !== 4 || P.stateNode.containerInfo !== O.containerInfo || P.stateNode.implementation !== O.implementation ? (P = jc(O, N.mode, Q),
            P.return = N,
            P) : (P = d(P, O.children || []),
            P.return = N,
            P)
        }
        function q(N, P, O, Q, ie) {
            return P === null || P.tag !== 7 ? (P = zr(O, N.mode, Q, ie),
            P.return = N,
            P) : (P = d(P, O),
            P.return = N,
            P)
        }
        function H(N, P, O) {
            if (typeof P == "string" && P !== "" || typeof P == "number")
                return P = Oc("" + P, N.mode, O),
                P.return = N,
                P;
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                case B:
                    return O = Va(P.type, P.key, P.props, null, N.mode, O),
                    O.ref = Li(N, null, P),
                    O.return = N,
                    O;
                case K:
                    return P = jc(P, N.mode, O),
                    P.return = N,
                    P;
                case we:
                    var Q = P._init;
                    return H(N, Q(P._payload), O)
                }
                if (ui(P) || se(P))
                    return P = zr(P, N.mode, O, null),
                    P.return = N,
                    P;
                ma(N, P)
            }
            return null
        }
        function $(N, P, O, Q) {
            var ie = P !== null ? P.key : null;
            if (typeof O == "string" && O !== "" || typeof O == "number")
                return ie !== null ? null : T(N, P, "" + O, Q);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case B:
                    return O.key === ie ? C(N, P, O, Q) : null;
                case K:
                    return O.key === ie ? I(N, P, O, Q) : null;
                case we:
                    return ie = O._init,
                    $(N, P, ie(O._payload), Q)
                }
                if (ui(O) || se(O))
                    return ie !== null ? null : q(N, P, O, Q, null);
                ma(N, O)
            }
            return null
        }
        function Y(N, P, O, Q, ie) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number")
                return N = N.get(O) || null,
                T(P, N, "" + Q, ie);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                case B:
                    return N = N.get(Q.key === null ? O : Q.key) || null,
                    C(P, N, Q, ie);
                case K:
                    return N = N.get(Q.key === null ? O : Q.key) || null,
                    I(P, N, Q, ie);
                case we:
                    var oe = Q._init;
                    return Y(N, P, O, oe(Q._payload), ie)
                }
                if (ui(Q) || se(Q))
                    return N = N.get(O) || null,
                    q(P, N, Q, ie, null);
                ma(P, Q)
            }
            return null
        }
        function ee(N, P, O, Q) {
            for (var ie = null, oe = null, ae = P, me = P = 0, ot = null; ae !== null && me < O.length; me++) {
                ae.index > me ? (ot = ae,
                ae = null) : ot = ae.sibling;
                var Pe = $(N, ae, O[me], Q);
                if (Pe === null) {
                    ae === null && (ae = ot);
                    break
                }
                n && ae && Pe.alternate === null && s(N, ae),
                P = p(Pe, P, me),
                oe === null ? ie = Pe : oe.sibling = Pe,
                oe = Pe,
                ae = ot
            }
            if (me === O.length)
                return o(N, ae),
                ze && Lr(N, me),
                ie;
            if (ae === null) {
                for (; me < O.length; me++)
                    ae = H(N, O[me], Q),
                    ae !== null && (P = p(ae, P, me),
                    oe === null ? ie = ae : oe.sibling = ae,
                    oe = ae);
                return ze && Lr(N, me),
                ie
            }
            for (ae = l(N, ae); me < O.length; me++)
                ot = Y(ae, N, me, O[me], Q),
                ot !== null && (n && ot.alternate !== null && ae.delete(ot.key === null ? me : ot.key),
                P = p(ot, P, me),
                oe === null ? ie = ot : oe.sibling = ot,
                oe = ot);
            return n && ae.forEach(function(ur) {
                return s(N, ur)
            }),
            ze && Lr(N, me),
            ie
        }
        function re(N, P, O, Q) {
            var ie = se(O);
            if (typeof ie != "function")
                throw Error(r(150));
            if (O = ie.call(O),
            O == null)
                throw Error(r(151));
            for (var oe = ie = null, ae = P, me = P = 0, ot = null, Pe = O.next(); ae !== null && !Pe.done; me++,
            Pe = O.next()) {
                ae.index > me ? (ot = ae,
                ae = null) : ot = ae.sibling;
                var ur = $(N, ae, Pe.value, Q);
                if (ur === null) {
                    ae === null && (ae = ot);
                    break
                }
                n && ae && ur.alternate === null && s(N, ae),
                P = p(ur, P, me),
                oe === null ? ie = ur : oe.sibling = ur,
                oe = ur,
                ae = ot
            }
            if (Pe.done)
                return o(N, ae),
                ze && Lr(N, me),
                ie;
            if (ae === null) {
                for (; !Pe.done; me++,
                Pe = O.next())
                    Pe = H(N, Pe.value, Q),
                    Pe !== null && (P = p(Pe, P, me),
                    oe === null ? ie = Pe : oe.sibling = Pe,
                    oe = Pe);
                return ze && Lr(N, me),
                ie
            }
            for (ae = l(N, ae); !Pe.done; me++,
            Pe = O.next())
                Pe = Y(ae, N, me, Pe.value, Q),
                Pe !== null && (n && Pe.alternate !== null && ae.delete(Pe.key === null ? me : Pe.key),
                P = p(Pe, P, me),
                oe === null ? ie = Pe : oe.sibling = Pe,
                oe = Pe);
            return n && ae.forEach(function(QS) {
                return s(N, QS)
            }),
            ze && Lr(N, me),
            ie
        }
        function Ye(N, P, O, Q) {
            if (typeof O == "object" && O !== null && O.type === G && O.key === null && (O = O.props.children),
            typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case B:
                    e: {
                        for (var ie = O.key, oe = P; oe !== null; ) {
                            if (oe.key === ie) {
                                if (ie = O.type,
                                ie === G) {
                                    if (oe.tag === 7) {
                                        o(N, oe.sibling),
                                        P = d(oe, O.props.children),
                                        P.return = N,
                                        N = P;
                                        break e
                                    }
                                } else if (oe.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === we && Rp(ie) === oe.type) {
                                    o(N, oe.sibling),
                                    P = d(oe, O.props),
                                    P.ref = Li(N, oe, O),
                                    P.return = N,
                                    N = P;
                                    break e
                                }
                                o(N, oe);
                                break
                            } else
                                s(N, oe);
                            oe = oe.sibling
                        }
                        O.type === G ? (P = zr(O.props.children, N.mode, Q, O.key),
                        P.return = N,
                        N = P) : (Q = Va(O.type, O.key, O.props, null, N.mode, Q),
                        Q.ref = Li(N, P, O),
                        Q.return = N,
                        N = Q)
                    }
                    return v(N);
                case K:
                    e: {
                        for (oe = O.key; P !== null; ) {
                            if (P.key === oe)
                                if (P.tag === 4 && P.stateNode.containerInfo === O.containerInfo && P.stateNode.implementation === O.implementation) {
                                    o(N, P.sibling),
                                    P = d(P, O.children || []),
                                    P.return = N,
                                    N = P;
                                    break e
                                } else {
                                    o(N, P);
                                    break
                                }
                            else
                                s(N, P);
                            P = P.sibling
                        }
                        P = jc(O, N.mode, Q),
                        P.return = N,
                        N = P
                    }
                    return v(N);
                case we:
                    return oe = O._init,
                    Ye(N, P, oe(O._payload), Q)
                }
                if (ui(O))
                    return ee(N, P, O, Q);
                if (se(O))
                    return re(N, P, O, Q);
                ma(N, O)
            }
            return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O,
            P !== null && P.tag === 6 ? (o(N, P.sibling),
            P = d(P, O),
            P.return = N,
            N = P) : (o(N, P),
            P = Oc(O, N.mode, Q),
            P.return = N,
            N = P),
            v(N)) : o(N, P)
        }
        return Ye
    }
    var _s = Ap(!0)
      , Np = Ap(!1)
      , ga = Jn(null)
      , ya = null
      , Ps = null
      , zu = null;
    function $u() {
        zu = Ps = ya = null
    }
    function qu(n) {
        var s = ga.current;
        Be(ga),
        n._currentValue = s
    }
    function Hu(n, s, o) {
        for (; n !== null; ) {
            var l = n.alternate;
            if ((n.childLanes & s) !== s ? (n.childLanes |= s,
            l !== null && (l.childLanes |= s)) : l !== null && (l.childLanes & s) !== s && (l.childLanes |= s),
            n === o)
                break;
            n = n.return
        }
    }
    function Rs(n, s) {
        ya = n,
        zu = Ps = null,
        n = n.dependencies,
        n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (_t = !0),
        n.firstContext = null)
    }
    function qt(n) {
        var s = n._currentValue;
        if (zu !== n)
            if (n = {
                context: n,
                memoizedValue: s,
                next: null
            },
            Ps === null) {
                if (ya === null)
                    throw Error(r(308));
                Ps = n,
                ya.dependencies = {
                    lanes: 0,
                    firstContext: n
                }
            } else
                Ps = Ps.next = n;
        return s
    }
    var Dr = null;
    function Wu(n) {
        Dr === null ? Dr = [n] : Dr.push(n)
    }
    function Op(n, s, o, l) {
        var d = s.interleaved;
        return d === null ? (o.next = o,
        Wu(s)) : (o.next = d.next,
        d.next = o),
        s.interleaved = o,
        Nn(n, l)
    }
    function Nn(n, s) {
        n.lanes |= s;
        var o = n.alternate;
        for (o !== null && (o.lanes |= s),
        o = n,
        n = n.return; n !== null; )
            n.childLanes |= s,
            o = n.alternate,
            o !== null && (o.childLanes |= s),
            o = n,
            n = n.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var tr = !1;
    function Ku(n) {
        n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function jp(n, s) {
        n = n.updateQueue,
        s.updateQueue === n && (s.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
        })
    }
    function On(n, s) {
        return {
            eventTime: n,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function nr(n, s, o) {
        var l = n.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Ce & 2) !== 0) {
            var d = l.pending;
            return d === null ? s.next = s : (s.next = d.next,
            d.next = s),
            l.pending = s,
            Nn(n, o)
        }
        return d = l.interleaved,
        d === null ? (s.next = s,
        Wu(l)) : (s.next = d.next,
        d.next = s),
        l.interleaved = s,
        Nn(n, o)
    }
    function va(n, s, o) {
        if (s = s.updateQueue,
        s !== null && (s = s.shared,
        (o & 4194240) !== 0)) {
            var l = s.lanes;
            l &= n.pendingLanes,
            o |= l,
            s.lanes = o,
            au(n, o)
        }
    }
    function Lp(n, s) {
        var o = n.updateQueue
          , l = n.alternate;
        if (l !== null && (l = l.updateQueue,
        o === l)) {
            var d = null
              , p = null;
            if (o = o.firstBaseUpdate,
            o !== null) {
                do {
                    var v = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    p === null ? d = p = v : p = p.next = v,
                    o = o.next
                } while (o !== null);
                p === null ? d = p = s : p = p.next = s
            } else
                d = p = s;
            o = {
                baseState: l.baseState,
                firstBaseUpdate: d,
                lastBaseUpdate: p,
                shared: l.shared,
                effects: l.effects
            },
            n.updateQueue = o;
            return
        }
        n = o.lastBaseUpdate,
        n === null ? o.firstBaseUpdate = s : n.next = s,
        o.lastBaseUpdate = s
    }
    function wa(n, s, o, l) {
        var d = n.updateQueue;
        tr = !1;
        var p = d.firstBaseUpdate
          , v = d.lastBaseUpdate
          , T = d.shared.pending;
        if (T !== null) {
            d.shared.pending = null;
            var C = T
              , I = C.next;
            C.next = null,
            v === null ? p = I : v.next = I,
            v = C;
            var q = n.alternate;
            q !== null && (q = q.updateQueue,
            T = q.lastBaseUpdate,
            T !== v && (T === null ? q.firstBaseUpdate = I : T.next = I,
            q.lastBaseUpdate = C))
        }
        if (p !== null) {
            var H = d.baseState;
            v = 0,
            q = I = C = null,
            T = p;
            do {
                var $ = T.lane
                  , Y = T.eventTime;
                if ((l & $) === $) {
                    q !== null && (q = q.next = {
                        eventTime: Y,
                        lane: 0,
                        tag: T.tag,
                        payload: T.payload,
                        callback: T.callback,
                        next: null
                    });
                    e: {
                        var ee = n
                          , re = T;
                        switch ($ = s,
                        Y = o,
                        re.tag) {
                        case 1:
                            if (ee = re.payload,
                            typeof ee == "function") {
                                H = ee.call(Y, H, $);
                                break e
                            }
                            H = ee;
                            break e;
                        case 3:
                            ee.flags = ee.flags & -65537 | 128;
                        case 0:
                            if (ee = re.payload,
                            $ = typeof ee == "function" ? ee.call(Y, H, $) : ee,
                            $ == null)
                                break e;
                            H = U({}, H, $);
                            break e;
                        case 2:
                            tr = !0
                        }
                    }
                    T.callback !== null && T.lane !== 0 && (n.flags |= 64,
                    $ = d.effects,
                    $ === null ? d.effects = [T] : $.push(T))
                } else
                    Y = {
                        eventTime: Y,
                        lane: $,
                        tag: T.tag,
                        payload: T.payload,
                        callback: T.callback,
                        next: null
                    },
                    q === null ? (I = q = Y,
                    C = H) : q = q.next = Y,
                    v |= $;
                if (T = T.next,
                T === null) {
                    if (T = d.shared.pending,
                    T === null)
                        break;
                    $ = T,
                    T = $.next,
                    $.next = null,
                    d.lastBaseUpdate = $,
                    d.shared.pending = null
                }
            } while (!0);
            if (q === null && (C = H),
            d.baseState = C,
            d.firstBaseUpdate = I,
            d.lastBaseUpdate = q,
            s = d.shared.interleaved,
            s !== null) {
                d = s;
                do
                    v |= d.lane,
                    d = d.next;
                while (d !== s)
            } else
                p === null && (d.shared.lanes = 0);
            Fr |= v,
            n.lanes = v,
            n.memoizedState = H
        }
    }
    function Dp(n, s, o) {
        if (n = s.effects,
        s.effects = null,
        n !== null)
            for (s = 0; s < n.length; s++) {
                var l = n[s]
                  , d = l.callback;
                if (d !== null) {
                    if (l.callback = null,
                    l = o,
                    typeof d != "function")
                        throw Error(r(191, d));
                    d.call(l)
                }
            }
    }
    var Di = {}
      , gn = Jn(Di)
      , Mi = Jn(Di)
      , Ii = Jn(Di);
    function Mr(n) {
        if (n === Di)
            throw Error(r(174));
        return n
    }
    function Qu(n, s) {
        switch (Fe(Ii, s),
        Fe(Mi, n),
        Fe(gn, Di),
        n = s.nodeType,
        n) {
        case 9:
        case 11:
            s = (s = s.documentElement) ? s.namespaceURI : Gl(null, "");
            break;
        default:
            n = n === 8 ? s.parentNode : s,
            s = n.namespaceURI || null,
            n = n.tagName,
            s = Gl(s, n)
        }
        Be(gn),
        Fe(gn, s)
    }
    function As() {
        Be(gn),
        Be(Mi),
        Be(Ii)
    }
    function Mp(n) {
        Mr(Ii.current);
        var s = Mr(gn.current)
          , o = Gl(s, n.type);
        s !== o && (Fe(Mi, n),
        Fe(gn, o))
    }
    function Gu(n) {
        Mi.current === n && (Be(gn),
        Be(Mi))
    }
    var $e = Jn(0);
    function xa(n) {
        for (var s = n; s !== null; ) {
            if (s.tag === 13) {
                var o = s.memoizedState;
                if (o !== null && (o = o.dehydrated,
                o === null || o.data === "$?" || o.data === "$!"))
                    return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0)
                    return s
            } else if (s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === n)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                    return null;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
        return null
    }
    var Yu = [];
    function Xu() {
        for (var n = 0; n < Yu.length; n++)
            Yu[n]._workInProgressVersionPrimary = null;
        Yu.length = 0
    }
    var Sa = j.ReactCurrentDispatcher
      , Ju = j.ReactCurrentBatchConfig
      , Ir = 0
      , qe = null
      , tt = null
      , st = null
      , ba = !1
      , Fi = !1
      , Vi = 0
      , gS = 0;
    function mt() {
        throw Error(r(321))
    }
    function Zu(n, s) {
        if (s === null)
            return !1;
        for (var o = 0; o < s.length && o < n.length; o++)
            if (!nn(n[o], s[o]))
                return !1;
        return !0
    }
    function ec(n, s, o, l, d, p) {
        if (Ir = p,
        qe = s,
        s.memoizedState = null,
        s.updateQueue = null,
        s.lanes = 0,
        Sa.current = n === null || n.memoizedState === null ? xS : SS,
        n = o(l, d),
        Fi) {
            p = 0;
            do {
                if (Fi = !1,
                Vi = 0,
                25 <= p)
                    throw Error(r(301));
                p += 1,
                st = tt = null,
                s.updateQueue = null,
                Sa.current = bS,
                n = o(l, d)
            } while (Fi)
        }
        if (Sa.current = Ta,
        s = tt !== null && tt.next !== null,
        Ir = 0,
        st = tt = qe = null,
        ba = !1,
        s)
            throw Error(r(300));
        return n
    }
    function tc() {
        var n = Vi !== 0;
        return Vi = 0,
        n
    }
    function yn() {
        var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return st === null ? qe.memoizedState = st = n : st = st.next = n,
        st
    }
    function Ht() {
        if (tt === null) {
            var n = qe.alternate;
            n = n !== null ? n.memoizedState : null
        } else
            n = tt.next;
        var s = st === null ? qe.memoizedState : st.next;
        if (s !== null)
            st = s,
            tt = n;
        else {
            if (n === null)
                throw Error(r(310));
            tt = n,
            n = {
                memoizedState: tt.memoizedState,
                baseState: tt.baseState,
                baseQueue: tt.baseQueue,
                queue: tt.queue,
                next: null
            },
            st === null ? qe.memoizedState = st = n : st = st.next = n
        }
        return st
    }
    function Bi(n, s) {
        return typeof s == "function" ? s(n) : s
    }
    function nc(n) {
        var s = Ht()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var l = tt
          , d = l.baseQueue
          , p = o.pending;
        if (p !== null) {
            if (d !== null) {
                var v = d.next;
                d.next = p.next,
                p.next = v
            }
            l.baseQueue = d = p,
            o.pending = null
        }
        if (d !== null) {
            p = d.next,
            l = l.baseState;
            var T = v = null
              , C = null
              , I = p;
            do {
                var q = I.lane;
                if ((Ir & q) === q)
                    C !== null && (C = C.next = {
                        lane: 0,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    }),
                    l = I.hasEagerState ? I.eagerState : n(l, I.action);
                else {
                    var H = {
                        lane: q,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    };
                    C === null ? (T = C = H,
                    v = l) : C = C.next = H,
                    qe.lanes |= q,
                    Fr |= q
                }
                I = I.next
            } while (I !== null && I !== p);
            C === null ? v = l : C.next = T,
            nn(l, s.memoizedState) || (_t = !0),
            s.memoizedState = l,
            s.baseState = v,
            s.baseQueue = C,
            o.lastRenderedState = l
        }
        if (n = o.interleaved,
        n !== null) {
            d = n;
            do
                p = d.lane,
                qe.lanes |= p,
                Fr |= p,
                d = d.next;
            while (d !== n)
        } else
            d === null && (o.lanes = 0);
        return [s.memoizedState, o.dispatch]
    }
    function rc(n) {
        var s = Ht()
          , o = s.queue;
        if (o === null)
            throw Error(r(311));
        o.lastRenderedReducer = n;
        var l = o.dispatch
          , d = o.pending
          , p = s.memoizedState;
        if (d !== null) {
            o.pending = null;
            var v = d = d.next;
            do
                p = n(p, v.action),
                v = v.next;
            while (v !== d);
            nn(p, s.memoizedState) || (_t = !0),
            s.memoizedState = p,
            s.baseQueue === null && (s.baseState = p),
            o.lastRenderedState = p
        }
        return [p, l]
    }
    function Ip() {}
    function Fp(n, s) {
        var o = qe
          , l = Ht()
          , d = s()
          , p = !nn(l.memoizedState, d);
        if (p && (l.memoizedState = d,
        _t = !0),
        l = l.queue,
        sc(Up.bind(null, o, l, n), [n]),
        l.getSnapshot !== s || p || st !== null && st.memoizedState.tag & 1) {
            if (o.flags |= 2048,
            Ui(9, Bp.bind(null, o, l, d, s), void 0, null),
            it === null)
                throw Error(r(349));
            (Ir & 30) !== 0 || Vp(o, s, d)
        }
        return d
    }
    function Vp(n, s, o) {
        n.flags |= 16384,
        n = {
            getSnapshot: s,
            value: o
        },
        s = qe.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        qe.updateQueue = s,
        s.stores = [n]) : (o = s.stores,
        o === null ? s.stores = [n] : o.push(n))
    }
    function Bp(n, s, o, l) {
        s.value = o,
        s.getSnapshot = l,
        zp(s) && $p(n)
    }
    function Up(n, s, o) {
        return o(function() {
            zp(s) && $p(n)
        })
    }
    function zp(n) {
        var s = n.getSnapshot;
        n = n.value;
        try {
            var o = s();
            return !nn(n, o)
        } catch {
            return !0
        }
    }
    function $p(n) {
        var s = Nn(n, 1);
        s !== null && ln(s, n, 1, -1)
    }
    function qp(n) {
        var s = yn();
        return typeof n == "function" && (n = n()),
        s.memoizedState = s.baseState = n,
        n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Bi,
            lastRenderedState: n
        },
        s.queue = n,
        n = n.dispatch = wS.bind(null, qe, n),
        [s.memoizedState, n]
    }
    function Ui(n, s, o, l) {
        return n = {
            tag: n,
            create: s,
            destroy: o,
            deps: l,
            next: null
        },
        s = qe.updateQueue,
        s === null ? (s = {
            lastEffect: null,
            stores: null
        },
        qe.updateQueue = s,
        s.lastEffect = n.next = n) : (o = s.lastEffect,
        o === null ? s.lastEffect = n.next = n : (l = o.next,
        o.next = n,
        n.next = l,
        s.lastEffect = n)),
        n
    }
    function Hp() {
        return Ht().memoizedState
    }
    function ka(n, s, o, l) {
        var d = yn();
        qe.flags |= n,
        d.memoizedState = Ui(1 | s, o, void 0, l === void 0 ? null : l)
    }
    function Ea(n, s, o, l) {
        var d = Ht();
        l = l === void 0 ? null : l;
        var p = void 0;
        if (tt !== null) {
            var v = tt.memoizedState;
            if (p = v.destroy,
            l !== null && Zu(l, v.deps)) {
                d.memoizedState = Ui(s, o, p, l);
                return
            }
        }
        qe.flags |= n,
        d.memoizedState = Ui(1 | s, o, p, l)
    }
    function Wp(n, s) {
        return ka(8390656, 8, n, s)
    }
    function sc(n, s) {
        return Ea(2048, 8, n, s)
    }
    function Kp(n, s) {
        return Ea(4, 2, n, s)
    }
    function Qp(n, s) {
        return Ea(4, 4, n, s)
    }
    function Gp(n, s) {
        if (typeof s == "function")
            return n = n(),
            s(n),
            function() {
                s(null)
            }
            ;
        if (s != null)
            return n = n(),
            s.current = n,
            function() {
                s.current = null
            }
    }
    function Yp(n, s, o) {
        return o = o != null ? o.concat([n]) : null,
        Ea(4, 4, Gp.bind(null, s, n), o)
    }
    function ic() {}
    function Xp(n, s) {
        var o = Ht();
        s = s === void 0 ? null : s;
        var l = o.memoizedState;
        return l !== null && s !== null && Zu(s, l[1]) ? l[0] : (o.memoizedState = [n, s],
        n)
    }
    function Jp(n, s) {
        var o = Ht();
        s = s === void 0 ? null : s;
        var l = o.memoizedState;
        return l !== null && s !== null && Zu(s, l[1]) ? l[0] : (n = n(),
        o.memoizedState = [n, s],
        n)
    }
    function Zp(n, s, o) {
        return (Ir & 21) === 0 ? (n.baseState && (n.baseState = !1,
        _t = !0),
        n.memoizedState = o) : (nn(o, s) || (o = Rh(),
        qe.lanes |= o,
        Fr |= o,
        n.baseState = !0),
        s)
    }
    function yS(n, s) {
        var o = je;
        je = o !== 0 && 4 > o ? o : 4,
        n(!0);
        var l = Ju.transition;
        Ju.transition = {};
        try {
            n(!1),
            s()
        } finally {
            je = o,
            Ju.transition = l
        }
    }
    function em() {
        return Ht().memoizedState
    }
    function vS(n, s, o) {
        var l = or(n);
        if (o = {
            lane: l,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        tm(n))
            nm(s, o);
        else if (o = Op(n, s, o, l),
        o !== null) {
            var d = kt();
            ln(o, n, l, d),
            rm(o, s, l)
        }
    }
    function wS(n, s, o) {
        var l = or(n)
          , d = {
            lane: l,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (tm(n))
            nm(s, d);
        else {
            var p = n.alternate;
            if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer,
            p !== null))
                try {
                    var v = s.lastRenderedState
                      , T = p(v, o);
                    if (d.hasEagerState = !0,
                    d.eagerState = T,
                    nn(T, v)) {
                        var C = s.interleaved;
                        C === null ? (d.next = d,
                        Wu(s)) : (d.next = C.next,
                        C.next = d),
                        s.interleaved = d;
                        return
                    }
                } catch {} finally {}
            o = Op(n, s, d, l),
            o !== null && (d = kt(),
            ln(o, n, l, d),
            rm(o, s, l))
        }
    }
    function tm(n) {
        var s = n.alternate;
        return n === qe || s !== null && s === qe
    }
    function nm(n, s) {
        Fi = ba = !0;
        var o = n.pending;
        o === null ? s.next = s : (s.next = o.next,
        o.next = s),
        n.pending = s
    }
    function rm(n, s, o) {
        if ((o & 4194240) !== 0) {
            var l = s.lanes;
            l &= n.pendingLanes,
            o |= l,
            s.lanes = o,
            au(n, o)
        }
    }
    var Ta = {
        readContext: qt,
        useCallback: mt,
        useContext: mt,
        useEffect: mt,
        useImperativeHandle: mt,
        useInsertionEffect: mt,
        useLayoutEffect: mt,
        useMemo: mt,
        useReducer: mt,
        useRef: mt,
        useState: mt,
        useDebugValue: mt,
        useDeferredValue: mt,
        useTransition: mt,
        useMutableSource: mt,
        useSyncExternalStore: mt,
        useId: mt,
        unstable_isNewReconciler: !1
    }
      , xS = {
        readContext: qt,
        useCallback: function(n, s) {
            return yn().memoizedState = [n, s === void 0 ? null : s],
            n
        },
        useContext: qt,
        useEffect: Wp,
        useImperativeHandle: function(n, s, o) {
            return o = o != null ? o.concat([n]) : null,
            ka(4194308, 4, Gp.bind(null, s, n), o)
        },
        useLayoutEffect: function(n, s) {
            return ka(4194308, 4, n, s)
        },
        useInsertionEffect: function(n, s) {
            return ka(4, 2, n, s)
        },
        useMemo: function(n, s) {
            var o = yn();
            return s = s === void 0 ? null : s,
            n = n(),
            o.memoizedState = [n, s],
            n
        },
        useReducer: function(n, s, o) {
            var l = yn();
            return s = o !== void 0 ? o(s) : s,
            l.memoizedState = l.baseState = s,
            n = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: n,
                lastRenderedState: s
            },
            l.queue = n,
            n = n.dispatch = vS.bind(null, qe, n),
            [l.memoizedState, n]
        },
        useRef: function(n) {
            var s = yn();
            return n = {
                current: n
            },
            s.memoizedState = n
        },
        useState: qp,
        useDebugValue: ic,
        useDeferredValue: function(n) {
            return yn().memoizedState = n
        },
        useTransition: function() {
            var n = qp(!1)
              , s = n[0];
            return n = yS.bind(null, n[1]),
            yn().memoizedState = n,
            [s, n]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(n, s, o) {
            var l = qe
              , d = yn();
            if (ze) {
                if (o === void 0)
                    throw Error(r(407));
                o = o()
            } else {
                if (o = s(),
                it === null)
                    throw Error(r(349));
                (Ir & 30) !== 0 || Vp(l, s, o)
            }
            d.memoizedState = o;
            var p = {
                value: o,
                getSnapshot: s
            };
            return d.queue = p,
            Wp(Up.bind(null, l, p, n), [n]),
            l.flags |= 2048,
            Ui(9, Bp.bind(null, l, p, o, s), void 0, null),
            o
        },
        useId: function() {
            var n = yn()
              , s = it.identifierPrefix;
            if (ze) {
                var o = An
                  , l = Rn;
                o = (l & ~(1 << 32 - tn(l) - 1)).toString(32) + o,
                s = ":" + s + "R" + o,
                o = Vi++,
                0 < o && (s += "H" + o.toString(32)),
                s += ":"
            } else
                o = gS++,
                s = ":" + s + "r" + o.toString(32) + ":";
            return n.memoizedState = s
        },
        unstable_isNewReconciler: !1
    }
      , SS = {
        readContext: qt,
        useCallback: Xp,
        useContext: qt,
        useEffect: sc,
        useImperativeHandle: Yp,
        useInsertionEffect: Kp,
        useLayoutEffect: Qp,
        useMemo: Jp,
        useReducer: nc,
        useRef: Hp,
        useState: function() {
            return nc(Bi)
        },
        useDebugValue: ic,
        useDeferredValue: function(n) {
            var s = Ht();
            return Zp(s, tt.memoizedState, n)
        },
        useTransition: function() {
            var n = nc(Bi)[0]
              , s = Ht().memoizedState;
            return [n, s]
        },
        useMutableSource: Ip,
        useSyncExternalStore: Fp,
        useId: em,
        unstable_isNewReconciler: !1
    }
      , bS = {
        readContext: qt,
        useCallback: Xp,
        useContext: qt,
        useEffect: sc,
        useImperativeHandle: Yp,
        useInsertionEffect: Kp,
        useLayoutEffect: Qp,
        useMemo: Jp,
        useReducer: rc,
        useRef: Hp,
        useState: function() {
            return rc(Bi)
        },
        useDebugValue: ic,
        useDeferredValue: function(n) {
            var s = Ht();
            return tt === null ? s.memoizedState = n : Zp(s, tt.memoizedState, n)
        },
        useTransition: function() {
            var n = rc(Bi)[0]
              , s = Ht().memoizedState;
            return [n, s]
        },
        useMutableSource: Ip,
        useSyncExternalStore: Fp,
        useId: em,
        unstable_isNewReconciler: !1
    };
    function sn(n, s) {
        if (n && n.defaultProps) {
            s = U({}, s),
            n = n.defaultProps;
            for (var o in n)
                s[o] === void 0 && (s[o] = n[o]);
            return s
        }
        return s
    }
    function oc(n, s, o, l) {
        s = n.memoizedState,
        o = o(l, s),
        o = o == null ? s : U({}, s, o),
        n.memoizedState = o,
        n.lanes === 0 && (n.updateQueue.baseState = o)
    }
    var Ca = {
        isMounted: function(n) {
            return (n = n._reactInternals) ? Ar(n) === n : !1
        },
        enqueueSetState: function(n, s, o) {
            n = n._reactInternals;
            var l = kt()
              , d = or(n)
              , p = On(l, d);
            p.payload = s,
            o != null && (p.callback = o),
            s = nr(n, p, d),
            s !== null && (ln(s, n, d, l),
            va(s, n, d))
        },
        enqueueReplaceState: function(n, s, o) {
            n = n._reactInternals;
            var l = kt()
              , d = or(n)
              , p = On(l, d);
            p.tag = 1,
            p.payload = s,
            o != null && (p.callback = o),
            s = nr(n, p, d),
            s !== null && (ln(s, n, d, l),
            va(s, n, d))
        },
        enqueueForceUpdate: function(n, s) {
            n = n._reactInternals;
            var o = kt()
              , l = or(n)
              , d = On(o, l);
            d.tag = 2,
            s != null && (d.callback = s),
            s = nr(n, d, l),
            s !== null && (ln(s, n, l, o),
            va(s, n, l))
        }
    };
    function sm(n, s, o, l, d, p, v) {
        return n = n.stateNode,
        typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, p, v) : s.prototype && s.prototype.isPureReactComponent ? !_i(o, l) || !_i(d, p) : !0
    }
    function im(n, s, o) {
        var l = !1
          , d = Zn
          , p = s.contextType;
        return typeof p == "object" && p !== null ? p = qt(p) : (d = Ct(s) ? Or : pt.current,
        l = s.contextTypes,
        p = (l = l != null) ? ks(n, d) : Zn),
        s = new s(o,p),
        n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
        s.updater = Ca,
        n.stateNode = s,
        s._reactInternals = n,
        l && (n = n.stateNode,
        n.__reactInternalMemoizedUnmaskedChildContext = d,
        n.__reactInternalMemoizedMaskedChildContext = p),
        s
    }
    function om(n, s, o, l) {
        n = s.state,
        typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, l),
        typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, l),
        s.state !== n && Ca.enqueueReplaceState(s, s.state, null)
    }
    function ac(n, s, o, l) {
        var d = n.stateNode;
        d.props = o,
        d.state = n.memoizedState,
        d.refs = {},
        Ku(n);
        var p = s.contextType;
        typeof p == "object" && p !== null ? d.context = qt(p) : (p = Ct(s) ? Or : pt.current,
        d.context = ks(n, p)),
        d.state = n.memoizedState,
        p = s.getDerivedStateFromProps,
        typeof p == "function" && (oc(n, s, p, o),
        d.state = n.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (s = d.state,
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(),
        s !== d.state && Ca.enqueueReplaceState(d, d.state, null),
        wa(n, o, d, l),
        d.state = n.memoizedState),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308)
    }
    function Ns(n, s) {
        try {
            var o = ""
              , l = s;
            do
                o += le(l),
                l = l.return;
            while (l);
            var d = o
        } catch (p) {
            d = `
Error generating stack: ` + p.message + `
` + p.stack
        }
        return {
            value: n,
            source: s,
            stack: d,
            digest: null
        }
    }
    function lc(n, s, o) {
        return {
            value: n,
            source: null,
            stack: o ?? null,
            digest: s ?? null
        }
    }
    function uc(n, s) {
        try {
            console.error(s.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var kS = typeof WeakMap == "function" ? WeakMap : Map;
    function am(n, s, o) {
        o = On(-1, o),
        o.tag = 3,
        o.payload = {
            element: null
        };
        var l = s.value;
        return o.callback = function() {
            ja || (ja = !0,
            Ec = l),
            uc(n, s)
        }
        ,
        o
    }
    function lm(n, s, o) {
        o = On(-1, o),
        o.tag = 3;
        var l = n.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var d = s.value;
            o.payload = function() {
                return l(d)
            }
            ,
            o.callback = function() {
                uc(n, s)
            }
        }
        var p = n.stateNode;
        return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
            uc(n, s),
            typeof l != "function" && (sr === null ? sr = new Set([this]) : sr.add(this));
            var v = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: v !== null ? v : ""
            })
        }
        ),
        o
    }
    function um(n, s, o) {
        var l = n.pingCache;
        if (l === null) {
            l = n.pingCache = new kS;
            var d = new Set;
            l.set(s, d)
        } else
            d = l.get(s),
            d === void 0 && (d = new Set,
            l.set(s, d));
        d.has(o) || (d.add(o),
        n = IS.bind(null, n, s, o),
        s.then(n, n))
    }
    function cm(n) {
        do {
            var s;
            if ((s = n.tag === 13) && (s = n.memoizedState,
            s = s !== null ? s.dehydrated !== null : !0),
            s)
                return n;
            n = n.return
        } while (n !== null);
        return null
    }
    function dm(n, s, o, l, d) {
        return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128,
        o.flags |= 131072,
        o.flags &= -52805,
        o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = On(-1, 1),
        s.tag = 2,
        nr(o, s, 1))),
        o.lanes |= 1),
        n) : (n.flags |= 65536,
        n.lanes = d,
        n)
    }
    var ES = j.ReactCurrentOwner
      , _t = !1;
    function bt(n, s, o, l) {
        s.child = n === null ? Np(s, null, o, l) : _s(s, n.child, o, l)
    }
    function fm(n, s, o, l, d) {
        o = o.render;
        var p = s.ref;
        return Rs(s, d),
        l = ec(n, s, o, l, p, d),
        o = tc(),
        n !== null && !_t ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~d,
        jn(n, s, d)) : (ze && o && Iu(s),
        s.flags |= 1,
        bt(n, s, l, d),
        s.child)
    }
    function hm(n, s, o, l, d) {
        if (n === null) {
            var p = o.type;
            return typeof p == "function" && !Nc(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15,
            s.type = p,
            pm(n, s, p, l, d)) : (n = Va(o.type, null, l, s, s.mode, d),
            n.ref = s.ref,
            n.return = s,
            s.child = n)
        }
        if (p = n.child,
        (n.lanes & d) === 0) {
            var v = p.memoizedProps;
            if (o = o.compare,
            o = o !== null ? o : _i,
            o(v, l) && n.ref === s.ref)
                return jn(n, s, d)
        }
        return s.flags |= 1,
        n = lr(p, l),
        n.ref = s.ref,
        n.return = s,
        s.child = n
    }
    function pm(n, s, o, l, d) {
        if (n !== null) {
            var p = n.memoizedProps;
            if (_i(p, l) && n.ref === s.ref)
                if (_t = !1,
                s.pendingProps = l = p,
                (n.lanes & d) !== 0)
                    (n.flags & 131072) !== 0 && (_t = !0);
                else
                    return s.lanes = n.lanes,
                    jn(n, s, d)
        }
        return cc(n, s, o, l, d)
    }
    function mm(n, s, o) {
        var l = s.pendingProps
          , d = l.children
          , p = n !== null ? n.memoizedState : null;
        if (l.mode === "hidden")
            if ((s.mode & 1) === 0)
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Fe(js, Vt),
                Vt |= o;
            else {
                if ((o & 1073741824) === 0)
                    return n = p !== null ? p.baseLanes | o : o,
                    s.lanes = s.childLanes = 1073741824,
                    s.memoizedState = {
                        baseLanes: n,
                        cachePool: null,
                        transitions: null
                    },
                    s.updateQueue = null,
                    Fe(js, Vt),
                    Vt |= n,
                    null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                l = p !== null ? p.baseLanes : o,
                Fe(js, Vt),
                Vt |= l
            }
        else
            p !== null ? (l = p.baseLanes | o,
            s.memoizedState = null) : l = o,
            Fe(js, Vt),
            Vt |= l;
        return bt(n, s, d, o),
        s.child
    }
    function gm(n, s) {
        var o = s.ref;
        (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512,
        s.flags |= 2097152)
    }
    function cc(n, s, o, l, d) {
        var p = Ct(o) ? Or : pt.current;
        return p = ks(s, p),
        Rs(s, d),
        o = ec(n, s, o, l, p, d),
        l = tc(),
        n !== null && !_t ? (s.updateQueue = n.updateQueue,
        s.flags &= -2053,
        n.lanes &= ~d,
        jn(n, s, d)) : (ze && l && Iu(s),
        s.flags |= 1,
        bt(n, s, o, d),
        s.child)
    }
    function ym(n, s, o, l, d) {
        if (Ct(o)) {
            var p = !0;
            ca(s)
        } else
            p = !1;
        if (Rs(s, d),
        s.stateNode === null)
            Pa(n, s),
            im(s, o, l),
            ac(s, o, l, d),
            l = !0;
        else if (n === null) {
            var v = s.stateNode
              , T = s.memoizedProps;
            v.props = T;
            var C = v.context
              , I = o.contextType;
            typeof I == "object" && I !== null ? I = qt(I) : (I = Ct(o) ? Or : pt.current,
            I = ks(s, I));
            var q = o.getDerivedStateFromProps
              , H = typeof q == "function" || typeof v.getSnapshotBeforeUpdate == "function";
            H || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (T !== l || C !== I) && om(s, v, l, I),
            tr = !1;
            var $ = s.memoizedState;
            v.state = $,
            wa(s, l, v, d),
            C = s.memoizedState,
            T !== l || $ !== C || Tt.current || tr ? (typeof q == "function" && (oc(s, o, q, l),
            C = s.memoizedState),
            (T = tr || sm(s, o, T, l, $, C, I)) ? (H || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(),
            typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()),
            typeof v.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            s.memoizedProps = l,
            s.memoizedState = C),
            v.props = l,
            v.state = C,
            v.context = I,
            l = T) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308),
            l = !1)
        } else {
            v = s.stateNode,
            jp(n, s),
            T = s.memoizedProps,
            I = s.type === s.elementType ? T : sn(s.type, T),
            v.props = I,
            H = s.pendingProps,
            $ = v.context,
            C = o.contextType,
            typeof C == "object" && C !== null ? C = qt(C) : (C = Ct(o) ? Or : pt.current,
            C = ks(s, C));
            var Y = o.getDerivedStateFromProps;
            (q = typeof Y == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (T !== H || $ !== C) && om(s, v, l, C),
            tr = !1,
            $ = s.memoizedState,
            v.state = $,
            wa(s, l, v, d);
            var ee = s.memoizedState;
            T !== H || $ !== ee || Tt.current || tr ? (typeof Y == "function" && (oc(s, o, Y, l),
            ee = s.memoizedState),
            (I = tr || sm(s, o, I, l, $, ee, C) || !1) ? (q || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(l, ee, C),
            typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(l, ee, C)),
            typeof v.componentDidUpdate == "function" && (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || T === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024),
            s.memoizedProps = l,
            s.memoizedState = ee),
            v.props = l,
            v.state = ee,
            v.context = C,
            l = I) : (typeof v.componentDidUpdate != "function" || T === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4),
            typeof v.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024),
            l = !1)
        }
        return dc(n, s, o, l, p, d)
    }
    function dc(n, s, o, l, d, p) {
        gm(n, s);
        var v = (s.flags & 128) !== 0;
        if (!l && !v)
            return d && bp(s, o, !1),
            jn(n, s, p);
        l = s.stateNode,
        ES.current = s;
        var T = v && typeof o.getDerivedStateFromError != "function" ? null : l.render();
        return s.flags |= 1,
        n !== null && v ? (s.child = _s(s, n.child, null, p),
        s.child = _s(s, null, T, p)) : bt(n, s, T, p),
        s.memoizedState = l.state,
        d && bp(s, o, !0),
        s.child
    }
    function vm(n) {
        var s = n.stateNode;
        s.pendingContext ? xp(n, s.pendingContext, s.pendingContext !== s.context) : s.context && xp(n, s.context, !1),
        Qu(n, s.containerInfo)
    }
    function wm(n, s, o, l, d) {
        return Cs(),
        Uu(d),
        s.flags |= 256,
        bt(n, s, o, l),
        s.child
    }
    var fc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function hc(n) {
        return {
            baseLanes: n,
            cachePool: null,
            transitions: null
        }
    }
    function xm(n, s, o) {
        var l = s.pendingProps, d = $e.current, p = !1, v = (s.flags & 128) !== 0, T;
        if ((T = v) || (T = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0),
        T ? (p = !0,
        s.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1),
        Fe($e, d & 1),
        n === null)
            return Bu(s),
            n = s.memoizedState,
            n !== null && (n = n.dehydrated,
            n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824,
            null) : (v = l.children,
            n = l.fallback,
            p ? (l = s.mode,
            p = s.child,
            v = {
                mode: "hidden",
                children: v
            },
            (l & 1) === 0 && p !== null ? (p.childLanes = 0,
            p.pendingProps = v) : p = Ba(v, l, 0, null),
            n = zr(n, l, o, null),
            p.return = s,
            n.return = s,
            p.sibling = n,
            s.child = p,
            s.child.memoizedState = hc(o),
            s.memoizedState = fc,
            n) : pc(s, v));
        if (d = n.memoizedState,
        d !== null && (T = d.dehydrated,
        T !== null))
            return TS(n, s, v, l, T, d, o);
        if (p) {
            p = l.fallback,
            v = s.mode,
            d = n.child,
            T = d.sibling;
            var C = {
                mode: "hidden",
                children: l.children
            };
            return (v & 1) === 0 && s.child !== d ? (l = s.child,
            l.childLanes = 0,
            l.pendingProps = C,
            s.deletions = null) : (l = lr(d, C),
            l.subtreeFlags = d.subtreeFlags & 14680064),
            T !== null ? p = lr(T, p) : (p = zr(p, v, o, null),
            p.flags |= 2),
            p.return = s,
            l.return = s,
            l.sibling = p,
            s.child = l,
            l = p,
            p = s.child,
            v = n.child.memoizedState,
            v = v === null ? hc(o) : {
                baseLanes: v.baseLanes | o,
                cachePool: null,
                transitions: v.transitions
            },
            p.memoizedState = v,
            p.childLanes = n.childLanes & ~o,
            s.memoizedState = fc,
            l
        }
        return p = n.child,
        n = p.sibling,
        l = lr(p, {
            mode: "visible",
            children: l.children
        }),
        (s.mode & 1) === 0 && (l.lanes = o),
        l.return = s,
        l.sibling = null,
        n !== null && (o = s.deletions,
        o === null ? (s.deletions = [n],
        s.flags |= 16) : o.push(n)),
        s.child = l,
        s.memoizedState = null,
        l
    }
    function pc(n, s) {
        return s = Ba({
            mode: "visible",
            children: s
        }, n.mode, 0, null),
        s.return = n,
        n.child = s
    }
    function _a(n, s, o, l) {
        return l !== null && Uu(l),
        _s(s, n.child, null, o),
        n = pc(s, s.pendingProps.children),
        n.flags |= 2,
        s.memoizedState = null,
        n
    }
    function TS(n, s, o, l, d, p, v) {
        if (o)
            return s.flags & 256 ? (s.flags &= -257,
            l = lc(Error(r(422))),
            _a(n, s, v, l)) : s.memoizedState !== null ? (s.child = n.child,
            s.flags |= 128,
            null) : (p = l.fallback,
            d = s.mode,
            l = Ba({
                mode: "visible",
                children: l.children
            }, d, 0, null),
            p = zr(p, d, v, null),
            p.flags |= 2,
            l.return = s,
            p.return = s,
            l.sibling = p,
            s.child = l,
            (s.mode & 1) !== 0 && _s(s, n.child, null, v),
            s.child.memoizedState = hc(v),
            s.memoizedState = fc,
            p);
        if ((s.mode & 1) === 0)
            return _a(n, s, v, null);
        if (d.data === "$!") {
            if (l = d.nextSibling && d.nextSibling.dataset,
            l)
                var T = l.dgst;
            return l = T,
            p = Error(r(419)),
            l = lc(p, l, void 0),
            _a(n, s, v, l)
        }
        if (T = (v & n.childLanes) !== 0,
        _t || T) {
            if (l = it,
            l !== null) {
                switch (v & -v) {
                case 4:
                    d = 2;
                    break;
                case 16:
                    d = 8;
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
                    d = 32;
                    break;
                case 536870912:
                    d = 268435456;
                    break;
                default:
                    d = 0
                }
                d = (d & (l.suspendedLanes | v)) !== 0 ? 0 : d,
                d !== 0 && d !== p.retryLane && (p.retryLane = d,
                Nn(n, d),
                ln(l, n, d, -1))
            }
            return Ac(),
            l = lc(Error(r(421))),
            _a(n, s, v, l)
        }
        return d.data === "$?" ? (s.flags |= 128,
        s.child = n.child,
        s = FS.bind(null, n),
        d._reactRetry = s,
        null) : (n = p.treeContext,
        Ft = Xn(d.nextSibling),
        It = s,
        ze = !0,
        rn = null,
        n !== null && (zt[$t++] = Rn,
        zt[$t++] = An,
        zt[$t++] = jr,
        Rn = n.id,
        An = n.overflow,
        jr = s),
        s = pc(s, l.children),
        s.flags |= 4096,
        s)
    }
    function Sm(n, s, o) {
        n.lanes |= s;
        var l = n.alternate;
        l !== null && (l.lanes |= s),
        Hu(n.return, s, o)
    }
    function mc(n, s, o, l, d) {
        var p = n.memoizedState;
        p === null ? n.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: o,
            tailMode: d
        } : (p.isBackwards = s,
        p.rendering = null,
        p.renderingStartTime = 0,
        p.last = l,
        p.tail = o,
        p.tailMode = d)
    }
    function bm(n, s, o) {
        var l = s.pendingProps
          , d = l.revealOrder
          , p = l.tail;
        if (bt(n, s, l.children, o),
        l = $e.current,
        (l & 2) !== 0)
            l = l & 1 | 2,
            s.flags |= 128;
        else {
            if (n !== null && (n.flags & 128) !== 0)
                e: for (n = s.child; n !== null; ) {
                    if (n.tag === 13)
                        n.memoizedState !== null && Sm(n, o, s);
                    else if (n.tag === 19)
                        Sm(n, o, s);
                    else if (n.child !== null) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === s)
                        break e;
                    for (; n.sibling === null; ) {
                        if (n.return === null || n.return === s)
                            break e;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            l &= 1
        }
        if (Fe($e, l),
        (s.mode & 1) === 0)
            s.memoizedState = null;
        else
            switch (d) {
            case "forwards":
                for (o = s.child,
                d = null; o !== null; )
                    n = o.alternate,
                    n !== null && xa(n) === null && (d = o),
                    o = o.sibling;
                o = d,
                o === null ? (d = s.child,
                s.child = null) : (d = o.sibling,
                o.sibling = null),
                mc(s, !1, d, o, p);
                break;
            case "backwards":
                for (o = null,
                d = s.child,
                s.child = null; d !== null; ) {
                    if (n = d.alternate,
                    n !== null && xa(n) === null) {
                        s.child = d;
                        break
                    }
                    n = d.sibling,
                    d.sibling = o,
                    o = d,
                    d = n
                }
                mc(s, !0, o, null, p);
                break;
            case "together":
                mc(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
            }
        return s.child
    }
    function Pa(n, s) {
        (s.mode & 1) === 0 && n !== null && (n.alternate = null,
        s.alternate = null,
        s.flags |= 2)
    }
    function jn(n, s, o) {
        if (n !== null && (s.dependencies = n.dependencies),
        Fr |= s.lanes,
        (o & s.childLanes) === 0)
            return null;
        if (n !== null && s.child !== n.child)
            throw Error(r(153));
        if (s.child !== null) {
            for (n = s.child,
            o = lr(n, n.pendingProps),
            s.child = o,
            o.return = s; n.sibling !== null; )
                n = n.sibling,
                o = o.sibling = lr(n, n.pendingProps),
                o.return = s;
            o.sibling = null
        }
        return s.child
    }
    function CS(n, s, o) {
        switch (s.tag) {
        case 3:
            vm(s),
            Cs();
            break;
        case 5:
            Mp(s);
            break;
        case 1:
            Ct(s.type) && ca(s);
            break;
        case 4:
            Qu(s, s.stateNode.containerInfo);
            break;
        case 10:
            var l = s.type._context
              , d = s.memoizedProps.value;
            Fe(ga, l._currentValue),
            l._currentValue = d;
            break;
        case 13:
            if (l = s.memoizedState,
            l !== null)
                return l.dehydrated !== null ? (Fe($e, $e.current & 1),
                s.flags |= 128,
                null) : (o & s.child.childLanes) !== 0 ? xm(n, s, o) : (Fe($e, $e.current & 1),
                n = jn(n, s, o),
                n !== null ? n.sibling : null);
            Fe($e, $e.current & 1);
            break;
        case 19:
            if (l = (o & s.childLanes) !== 0,
            (n.flags & 128) !== 0) {
                if (l)
                    return bm(n, s, o);
                s.flags |= 128
            }
            if (d = s.memoizedState,
            d !== null && (d.rendering = null,
            d.tail = null,
            d.lastEffect = null),
            Fe($e, $e.current),
            l)
                break;
            return null;
        case 22:
        case 23:
            return s.lanes = 0,
            mm(n, s, o)
        }
        return jn(n, s, o)
    }
    var km, gc, Em, Tm;
    km = function(n, s) {
        for (var o = s.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
                n.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === s)
                break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === s)
                    return;
                o = o.return
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    ,
    gc = function() {}
    ,
    Em = function(n, s, o, l) {
        var d = n.memoizedProps;
        if (d !== l) {
            n = s.stateNode,
            Mr(gn.current);
            var p = null;
            switch (o) {
            case "input":
                d = qn(n, d),
                l = qn(n, l),
                p = [];
                break;
            case "select":
                d = U({}, d, {
                    value: void 0
                }),
                l = U({}, l, {
                    value: void 0
                }),
                p = [];
                break;
            case "textarea":
                d = Ql(n, d),
                l = Ql(n, l),
                p = [];
                break;
            default:
                typeof d.onClick != "function" && typeof l.onClick == "function" && (n.onclick = aa)
            }
            Yl(o, l);
            var v;
            o = null;
            for (I in d)
                if (!l.hasOwnProperty(I) && d.hasOwnProperty(I) && d[I] != null)
                    if (I === "style") {
                        var T = d[I];
                        for (v in T)
                            T.hasOwnProperty(v) && (o || (o = {}),
                            o[v] = "")
                    } else
                        I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (a.hasOwnProperty(I) ? p || (p = []) : (p = p || []).push(I, null));
            for (I in l) {
                var C = l[I];
                if (T = d != null ? d[I] : void 0,
                l.hasOwnProperty(I) && C !== T && (C != null || T != null))
                    if (I === "style")
                        if (T) {
                            for (v in T)
                                !T.hasOwnProperty(v) || C && C.hasOwnProperty(v) || (o || (o = {}),
                                o[v] = "");
                            for (v in C)
                                C.hasOwnProperty(v) && T[v] !== C[v] && (o || (o = {}),
                                o[v] = C[v])
                        } else
                            o || (p || (p = []),
                            p.push(I, o)),
                            o = C;
                    else
                        I === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0,
                        T = T ? T.__html : void 0,
                        C != null && T !== C && (p = p || []).push(I, C)) : I === "children" ? typeof C != "string" && typeof C != "number" || (p = p || []).push(I, "" + C) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (a.hasOwnProperty(I) ? (C != null && I === "onScroll" && Ve("scroll", n),
                        p || T === C || (p = [])) : (p = p || []).push(I, C))
            }
            o && (p = p || []).push("style", o);
            var I = p;
            (s.updateQueue = I) && (s.flags |= 4)
        }
    }
    ,
    Tm = function(n, s, o, l) {
        o !== l && (s.flags |= 4)
    }
    ;
    function zi(n, s) {
        if (!ze)
            switch (n.tailMode) {
            case "hidden":
                s = n.tail;
                for (var o = null; s !== null; )
                    s.alternate !== null && (o = s),
                    s = s.sibling;
                o === null ? n.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = n.tail;
                for (var l = null; o !== null; )
                    o.alternate !== null && (l = o),
                    o = o.sibling;
                l === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : l.sibling = null
            }
    }
    function gt(n) {
        var s = n.alternate !== null && n.alternate.child === n.child
          , o = 0
          , l = 0;
        if (s)
            for (var d = n.child; d !== null; )
                o |= d.lanes | d.childLanes,
                l |= d.subtreeFlags & 14680064,
                l |= d.flags & 14680064,
                d.return = n,
                d = d.sibling;
        else
            for (d = n.child; d !== null; )
                o |= d.lanes | d.childLanes,
                l |= d.subtreeFlags,
                l |= d.flags,
                d.return = n,
                d = d.sibling;
        return n.subtreeFlags |= l,
        n.childLanes = o,
        s
    }
    function _S(n, s, o) {
        var l = s.pendingProps;
        switch (Fu(s),
        s.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return gt(s),
            null;
        case 1:
            return Ct(s.type) && ua(),
            gt(s),
            null;
        case 3:
            return l = s.stateNode,
            As(),
            Be(Tt),
            Be(pt),
            Xu(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (n === null || n.child === null) && (pa(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024,
            rn !== null && (_c(rn),
            rn = null))),
            gc(n, s),
            gt(s),
            null;
        case 5:
            Gu(s);
            var d = Mr(Ii.current);
            if (o = s.type,
            n !== null && s.stateNode != null)
                Em(n, s, o, l, d),
                n.ref !== s.ref && (s.flags |= 512,
                s.flags |= 2097152);
            else {
                if (!l) {
                    if (s.stateNode === null)
                        throw Error(r(166));
                    return gt(s),
                    null
                }
                if (n = Mr(gn.current),
                pa(s)) {
                    l = s.stateNode,
                    o = s.type;
                    var p = s.memoizedProps;
                    switch (l[mn] = s,
                    l[Oi] = p,
                    n = (s.mode & 1) !== 0,
                    o) {
                    case "dialog":
                        Ve("cancel", l),
                        Ve("close", l);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Ve("load", l);
                        break;
                    case "video":
                    case "audio":
                        for (d = 0; d < Ri.length; d++)
                            Ve(Ri[d], l);
                        break;
                    case "source":
                        Ve("error", l);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Ve("error", l),
                        Ve("load", l);
                        break;
                    case "details":
                        Ve("toggle", l);
                        break;
                    case "input":
                        ih(l, p),
                        Ve("invalid", l);
                        break;
                    case "select":
                        l._wrapperState = {
                            wasMultiple: !!p.multiple
                        },
                        Ve("invalid", l);
                        break;
                    case "textarea":
                        lh(l, p),
                        Ve("invalid", l)
                    }
                    Yl(o, p),
                    d = null;
                    for (var v in p)
                        if (p.hasOwnProperty(v)) {
                            var T = p[v];
                            v === "children" ? typeof T == "string" ? l.textContent !== T && (p.suppressHydrationWarning !== !0 && oa(l.textContent, T, n),
                            d = ["children", T]) : typeof T == "number" && l.textContent !== "" + T && (p.suppressHydrationWarning !== !0 && oa(l.textContent, T, n),
                            d = ["children", "" + T]) : a.hasOwnProperty(v) && T != null && v === "onScroll" && Ve("scroll", l)
                        }
                    switch (o) {
                    case "input":
                        Cn(l),
                        ah(l, p, !0);
                        break;
                    case "textarea":
                        Cn(l),
                        ch(l);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof p.onClick == "function" && (l.onclick = aa)
                    }
                    l = d,
                    s.updateQueue = l,
                    l !== null && (s.flags |= 4)
                } else {
                    v = d.nodeType === 9 ? d : d.ownerDocument,
                    n === "http://www.w3.org/1999/xhtml" && (n = dh(o)),
                    n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = v.createElement("div"),
                    n.innerHTML = "<script><\/script>",
                    n = n.removeChild(n.firstChild)) : typeof l.is == "string" ? n = v.createElement(o, {
                        is: l.is
                    }) : (n = v.createElement(o),
                    o === "select" && (v = n,
                    l.multiple ? v.multiple = !0 : l.size && (v.size = l.size))) : n = v.createElementNS(n, o),
                    n[mn] = s,
                    n[Oi] = l,
                    km(n, s, !1, !1),
                    s.stateNode = n;
                    e: {
                        switch (v = Xl(o, l),
                        o) {
                        case "dialog":
                            Ve("cancel", n),
                            Ve("close", n),
                            d = l;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Ve("load", n),
                            d = l;
                            break;
                        case "video":
                        case "audio":
                            for (d = 0; d < Ri.length; d++)
                                Ve(Ri[d], n);
                            d = l;
                            break;
                        case "source":
                            Ve("error", n),
                            d = l;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Ve("error", n),
                            Ve("load", n),
                            d = l;
                            break;
                        case "details":
                            Ve("toggle", n),
                            d = l;
                            break;
                        case "input":
                            ih(n, l),
                            d = qn(n, l),
                            Ve("invalid", n);
                            break;
                        case "option":
                            d = l;
                            break;
                        case "select":
                            n._wrapperState = {
                                wasMultiple: !!l.multiple
                            },
                            d = U({}, l, {
                                value: void 0
                            }),
                            Ve("invalid", n);
                            break;
                        case "textarea":
                            lh(n, l),
                            d = Ql(n, l),
                            Ve("invalid", n);
                            break;
                        default:
                            d = l
                        }
                        Yl(o, d),
                        T = d;
                        for (p in T)
                            if (T.hasOwnProperty(p)) {
                                var C = T[p];
                                p === "style" ? ph(n, C) : p === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0,
                                C != null && fh(n, C)) : p === "children" ? typeof C == "string" ? (o !== "textarea" || C !== "") && ci(n, C) : typeof C == "number" && ci(n, "" + C) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? C != null && p === "onScroll" && Ve("scroll", n) : C != null && L(n, p, C, v))
                            }
                        switch (o) {
                        case "input":
                            Cn(n),
                            ah(n, l, !1);
                            break;
                        case "textarea":
                            Cn(n),
                            ch(n);
                            break;
                        case "option":
                            l.value != null && n.setAttribute("value", "" + _e(l.value));
                            break;
                        case "select":
                            n.multiple = !!l.multiple,
                            p = l.value,
                            p != null ? ds(n, !!l.multiple, p, !1) : l.defaultValue != null && ds(n, !!l.multiple, l.defaultValue, !0);
                            break;
                        default:
                            typeof d.onClick == "function" && (n.onclick = aa)
                        }
                        switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            l = !!l.autoFocus;
                            break e;
                        case "img":
                            l = !0;
                            break e;
                        default:
                            l = !1
                        }
                    }
                    l && (s.flags |= 4)
                }
                s.ref !== null && (s.flags |= 512,
                s.flags |= 2097152)
            }
            return gt(s),
            null;
        case 6:
            if (n && s.stateNode != null)
                Tm(n, s, n.memoizedProps, l);
            else {
                if (typeof l != "string" && s.stateNode === null)
                    throw Error(r(166));
                if (o = Mr(Ii.current),
                Mr(gn.current),
                pa(s)) {
                    if (l = s.stateNode,
                    o = s.memoizedProps,
                    l[mn] = s,
                    (p = l.nodeValue !== o) && (n = It,
                    n !== null))
                        switch (n.tag) {
                        case 3:
                            oa(l.nodeValue, o, (n.mode & 1) !== 0);
                            break;
                        case 5:
                            n.memoizedProps.suppressHydrationWarning !== !0 && oa(l.nodeValue, o, (n.mode & 1) !== 0)
                        }
                    p && (s.flags |= 4)
                } else
                    l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l),
                    l[mn] = s,
                    s.stateNode = l
            }
            return gt(s),
            null;
        case 13:
            if (Be($e),
            l = s.memoizedState,
            n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
                if (ze && Ft !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0)
                    Pp(),
                    Cs(),
                    s.flags |= 98560,
                    p = !1;
                else if (p = pa(s),
                l !== null && l.dehydrated !== null) {
                    if (n === null) {
                        if (!p)
                            throw Error(r(318));
                        if (p = s.memoizedState,
                        p = p !== null ? p.dehydrated : null,
                        !p)
                            throw Error(r(317));
                        p[mn] = s
                    } else
                        Cs(),
                        (s.flags & 128) === 0 && (s.memoizedState = null),
                        s.flags |= 4;
                    gt(s),
                    p = !1
                } else
                    rn !== null && (_c(rn),
                    rn = null),
                    p = !0;
                if (!p)
                    return s.flags & 65536 ? s : null
            }
            return (s.flags & 128) !== 0 ? (s.lanes = o,
            s) : (l = l !== null,
            l !== (n !== null && n.memoizedState !== null) && l && (s.child.flags |= 8192,
            (s.mode & 1) !== 0 && (n === null || ($e.current & 1) !== 0 ? nt === 0 && (nt = 3) : Ac())),
            s.updateQueue !== null && (s.flags |= 4),
            gt(s),
            null);
        case 4:
            return As(),
            gc(n, s),
            n === null && Ai(s.stateNode.containerInfo),
            gt(s),
            null;
        case 10:
            return qu(s.type._context),
            gt(s),
            null;
        case 17:
            return Ct(s.type) && ua(),
            gt(s),
            null;
        case 19:
            if (Be($e),
            p = s.memoizedState,
            p === null)
                return gt(s),
                null;
            if (l = (s.flags & 128) !== 0,
            v = p.rendering,
            v === null)
                if (l)
                    zi(p, !1);
                else {
                    if (nt !== 0 || n !== null && (n.flags & 128) !== 0)
                        for (n = s.child; n !== null; ) {
                            if (v = xa(n),
                            v !== null) {
                                for (s.flags |= 128,
                                zi(p, !1),
                                l = v.updateQueue,
                                l !== null && (s.updateQueue = l,
                                s.flags |= 4),
                                s.subtreeFlags = 0,
                                l = o,
                                o = s.child; o !== null; )
                                    p = o,
                                    n = l,
                                    p.flags &= 14680066,
                                    v = p.alternate,
                                    v === null ? (p.childLanes = 0,
                                    p.lanes = n,
                                    p.child = null,
                                    p.subtreeFlags = 0,
                                    p.memoizedProps = null,
                                    p.memoizedState = null,
                                    p.updateQueue = null,
                                    p.dependencies = null,
                                    p.stateNode = null) : (p.childLanes = v.childLanes,
                                    p.lanes = v.lanes,
                                    p.child = v.child,
                                    p.subtreeFlags = 0,
                                    p.deletions = null,
                                    p.memoizedProps = v.memoizedProps,
                                    p.memoizedState = v.memoizedState,
                                    p.updateQueue = v.updateQueue,
                                    p.type = v.type,
                                    n = v.dependencies,
                                    p.dependencies = n === null ? null : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext
                                    }),
                                    o = o.sibling;
                                return Fe($e, $e.current & 1 | 2),
                                s.child
                            }
                            n = n.sibling
                        }
                    p.tail !== null && Ge() > Ls && (s.flags |= 128,
                    l = !0,
                    zi(p, !1),
                    s.lanes = 4194304)
                }
            else {
                if (!l)
                    if (n = xa(v),
                    n !== null) {
                        if (s.flags |= 128,
                        l = !0,
                        o = n.updateQueue,
                        o !== null && (s.updateQueue = o,
                        s.flags |= 4),
                        zi(p, !0),
                        p.tail === null && p.tailMode === "hidden" && !v.alternate && !ze)
                            return gt(s),
                            null
                    } else
                        2 * Ge() - p.renderingStartTime > Ls && o !== 1073741824 && (s.flags |= 128,
                        l = !0,
                        zi(p, !1),
                        s.lanes = 4194304);
                p.isBackwards ? (v.sibling = s.child,
                s.child = v) : (o = p.last,
                o !== null ? o.sibling = v : s.child = v,
                p.last = v)
            }
            return p.tail !== null ? (s = p.tail,
            p.rendering = s,
            p.tail = s.sibling,
            p.renderingStartTime = Ge(),
            s.sibling = null,
            o = $e.current,
            Fe($e, l ? o & 1 | 2 : o & 1),
            s) : (gt(s),
            null);
        case 22:
        case 23:
            return Rc(),
            l = s.memoizedState !== null,
            n !== null && n.memoizedState !== null !== l && (s.flags |= 8192),
            l && (s.mode & 1) !== 0 ? (Vt & 1073741824) !== 0 && (gt(s),
            s.subtreeFlags & 6 && (s.flags |= 8192)) : gt(s),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(r(156, s.tag))
    }
    function PS(n, s) {
        switch (Fu(s),
        s.tag) {
        case 1:
            return Ct(s.type) && ua(),
            n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 3:
            return As(),
            Be(Tt),
            Be(pt),
            Xu(),
            n = s.flags,
            (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 5:
            return Gu(s),
            null;
        case 13:
            if (Be($e),
            n = s.memoizedState,
            n !== null && n.dehydrated !== null) {
                if (s.alternate === null)
                    throw Error(r(340));
                Cs()
            }
            return n = s.flags,
            n & 65536 ? (s.flags = n & -65537 | 128,
            s) : null;
        case 19:
            return Be($e),
            null;
        case 4:
            return As(),
            null;
        case 10:
            return qu(s.type._context),
            null;
        case 22:
        case 23:
            return Rc(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ra = !1
      , yt = !1
      , RS = typeof WeakSet == "function" ? WeakSet : Set
      , J = null;
    function Os(n, s) {
        var o = n.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null)
                } catch (l) {
                    We(n, s, l)
                }
            else
                o.current = null
    }
    function yc(n, s, o) {
        try {
            o()
        } catch (l) {
            We(n, s, l)
        }
    }
    var Cm = !1;
    function AS(n, s) {
        if (Ru = Go,
        n = sp(),
        Su(n)) {
            if ("selectionStart"in n)
                var o = {
                    start: n.selectionStart,
                    end: n.selectionEnd
                };
            else
                e: {
                    o = (o = n.ownerDocument) && o.defaultView || window;
                    var l = o.getSelection && o.getSelection();
                    if (l && l.rangeCount !== 0) {
                        o = l.anchorNode;
                        var d = l.anchorOffset
                          , p = l.focusNode;
                        l = l.focusOffset;
                        try {
                            o.nodeType,
                            p.nodeType
                        } catch {
                            o = null;
                            break e
                        }
                        var v = 0
                          , T = -1
                          , C = -1
                          , I = 0
                          , q = 0
                          , H = n
                          , $ = null;
                        t: for (; ; ) {
                            for (var Y; H !== o || d !== 0 && H.nodeType !== 3 || (T = v + d),
                            H !== p || l !== 0 && H.nodeType !== 3 || (C = v + l),
                            H.nodeType === 3 && (v += H.nodeValue.length),
                            (Y = H.firstChild) !== null; )
                                $ = H,
                                H = Y;
                            for (; ; ) {
                                if (H === n)
                                    break t;
                                if ($ === o && ++I === d && (T = v),
                                $ === p && ++q === l && (C = v),
                                (Y = H.nextSibling) !== null)
                                    break;
                                H = $,
                                $ = H.parentNode
                            }
                            H = Y
                        }
                        o = T === -1 || C === -1 ? null : {
                            start: T,
                            end: C
                        }
                    } else
                        o = null
                }
            o = o || {
                start: 0,
                end: 0
            }
        } else
            o = null;
        for (Au = {
            focusedElem: n,
            selectionRange: o
        },
        Go = !1,
        J = s; J !== null; )
            if (s = J,
            n = s.child,
            (s.subtreeFlags & 1028) !== 0 && n !== null)
                n.return = s,
                J = n;
            else
                for (; J !== null; ) {
                    s = J;
                    try {
                        var ee = s.alternate;
                        if ((s.flags & 1024) !== 0)
                            switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ee !== null) {
                                    var re = ee.memoizedProps
                                      , Ye = ee.memoizedState
                                      , N = s.stateNode
                                      , P = N.getSnapshotBeforeUpdate(s.elementType === s.type ? re : sn(s.type, re), Ye);
                                    N.__reactInternalSnapshotBeforeUpdate = P
                                }
                                break;
                            case 3:
                                var O = s.stateNode.containerInfo;
                                O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(r(163))
                            }
                    } catch (Q) {
                        We(s, s.return, Q)
                    }
                    if (n = s.sibling,
                    n !== null) {
                        n.return = s.return,
                        J = n;
                        break
                    }
                    J = s.return
                }
        return ee = Cm,
        Cm = !1,
        ee
    }
    function $i(n, s, o) {
        var l = s.updateQueue;
        if (l = l !== null ? l.lastEffect : null,
        l !== null) {
            var d = l = l.next;
            do {
                if ((d.tag & n) === n) {
                    var p = d.destroy;
                    d.destroy = void 0,
                    p !== void 0 && yc(s, o, p)
                }
                d = d.next
            } while (d !== l)
        }
    }
    function Aa(n, s) {
        if (s = s.updateQueue,
        s = s !== null ? s.lastEffect : null,
        s !== null) {
            var o = s = s.next;
            do {
                if ((o.tag & n) === n) {
                    var l = o.create;
                    o.destroy = l()
                }
                o = o.next
            } while (o !== s)
        }
    }
    function vc(n) {
        var s = n.ref;
        if (s !== null) {
            var o = n.stateNode;
            switch (n.tag) {
            case 5:
                n = o;
                break;
            default:
                n = o
            }
            typeof s == "function" ? s(n) : s.current = n
        }
    }
    function _m(n) {
        var s = n.alternate;
        s !== null && (n.alternate = null,
        _m(s)),
        n.child = null,
        n.deletions = null,
        n.sibling = null,
        n.tag === 5 && (s = n.stateNode,
        s !== null && (delete s[mn],
        delete s[Oi],
        delete s[Lu],
        delete s[fS],
        delete s[hS])),
        n.stateNode = null,
        n.return = null,
        n.dependencies = null,
        n.memoizedProps = null,
        n.memoizedState = null,
        n.pendingProps = null,
        n.stateNode = null,
        n.updateQueue = null
    }
    function Pm(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4
    }
    function Rm(n) {
        e: for (; ; ) {
            for (; n.sibling === null; ) {
                if (n.return === null || Pm(n.return))
                    return null;
                n = n.return
            }
            for (n.sibling.return = n.return,
            n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
                if (n.flags & 2 || n.child === null || n.tag === 4)
                    continue e;
                n.child.return = n,
                n = n.child
            }
            if (!(n.flags & 2))
                return n.stateNode
        }
    }
    function wc(n, s, o) {
        var l = n.tag;
        if (l === 5 || l === 6)
            n = n.stateNode,
            s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode,
            s.insertBefore(n, o)) : (s = o,
            s.appendChild(n)),
            o = o._reactRootContainer,
            o != null || s.onclick !== null || (s.onclick = aa));
        else if (l !== 4 && (n = n.child,
        n !== null))
            for (wc(n, s, o),
            n = n.sibling; n !== null; )
                wc(n, s, o),
                n = n.sibling
    }
    function xc(n, s, o) {
        var l = n.tag;
        if (l === 5 || l === 6)
            n = n.stateNode,
            s ? o.insertBefore(n, s) : o.appendChild(n);
        else if (l !== 4 && (n = n.child,
        n !== null))
            for (xc(n, s, o),
            n = n.sibling; n !== null; )
                xc(n, s, o),
                n = n.sibling
    }
    var lt = null
      , on = !1;
    function rr(n, s, o) {
        for (o = o.child; o !== null; )
            Am(n, s, o),
            o = o.sibling
    }
    function Am(n, s, o) {
        if (pn && typeof pn.onCommitFiberUnmount == "function")
            try {
                pn.onCommitFiberUnmount($o, o)
            } catch {}
        switch (o.tag) {
        case 5:
            yt || Os(o, s);
        case 6:
            var l = lt
              , d = on;
            lt = null,
            rr(n, s, o),
            lt = l,
            on = d,
            lt !== null && (on ? (n = lt,
            o = o.stateNode,
            n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : lt.removeChild(o.stateNode));
            break;
        case 18:
            lt !== null && (on ? (n = lt,
            o = o.stateNode,
            n.nodeType === 8 ? ju(n.parentNode, o) : n.nodeType === 1 && ju(n, o),
            Si(n)) : ju(lt, o.stateNode));
            break;
        case 4:
            l = lt,
            d = on,
            lt = o.stateNode.containerInfo,
            on = !0,
            rr(n, s, o),
            lt = l,
            on = d;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!yt && (l = o.updateQueue,
            l !== null && (l = l.lastEffect,
            l !== null))) {
                d = l = l.next;
                do {
                    var p = d
                      , v = p.destroy;
                    p = p.tag,
                    v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && yc(o, s, v),
                    d = d.next
                } while (d !== l)
            }
            rr(n, s, o);
            break;
        case 1:
            if (!yt && (Os(o, s),
            l = o.stateNode,
            typeof l.componentWillUnmount == "function"))
                try {
                    l.props = o.memoizedProps,
                    l.state = o.memoizedState,
                    l.componentWillUnmount()
                } catch (T) {
                    We(o, s, T)
                }
            rr(n, s, o);
            break;
        case 21:
            rr(n, s, o);
            break;
        case 22:
            o.mode & 1 ? (yt = (l = yt) || o.memoizedState !== null,
            rr(n, s, o),
            yt = l) : rr(n, s, o);
            break;
        default:
            rr(n, s, o)
        }
    }
    function Nm(n) {
        var s = n.updateQueue;
        if (s !== null) {
            n.updateQueue = null;
            var o = n.stateNode;
            o === null && (o = n.stateNode = new RS),
            s.forEach(function(l) {
                var d = VS.bind(null, n, l);
                o.has(l) || (o.add(l),
                l.then(d, d))
            })
        }
    }
    function an(n, s) {
        var o = s.deletions;
        if (o !== null)
            for (var l = 0; l < o.length; l++) {
                var d = o[l];
                try {
                    var p = n
                      , v = s
                      , T = v;
                    e: for (; T !== null; ) {
                        switch (T.tag) {
                        case 5:
                            lt = T.stateNode,
                            on = !1;
                            break e;
                        case 3:
                            lt = T.stateNode.containerInfo,
                            on = !0;
                            break e;
                        case 4:
                            lt = T.stateNode.containerInfo,
                            on = !0;
                            break e
                        }
                        T = T.return
                    }
                    if (lt === null)
                        throw Error(r(160));
                    Am(p, v, d),
                    lt = null,
                    on = !1;
                    var C = d.alternate;
                    C !== null && (C.return = null),
                    d.return = null
                } catch (I) {
                    We(d, s, I)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null; )
                Om(s, n),
                s = s.sibling
    }
    function Om(n, s) {
        var o = n.alternate
          , l = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (an(s, n),
            vn(n),
            l & 4) {
                try {
                    $i(3, n, n.return),
                    Aa(3, n)
                } catch (re) {
                    We(n, n.return, re)
                }
                try {
                    $i(5, n, n.return)
                } catch (re) {
                    We(n, n.return, re)
                }
            }
            break;
        case 1:
            an(s, n),
            vn(n),
            l & 512 && o !== null && Os(o, o.return);
            break;
        case 5:
            if (an(s, n),
            vn(n),
            l & 512 && o !== null && Os(o, o.return),
            n.flags & 32) {
                var d = n.stateNode;
                try {
                    ci(d, "")
                } catch (re) {
                    We(n, n.return, re)
                }
            }
            if (l & 4 && (d = n.stateNode,
            d != null)) {
                var p = n.memoizedProps
                  , v = o !== null ? o.memoizedProps : p
                  , T = n.type
                  , C = n.updateQueue;
                if (n.updateQueue = null,
                C !== null)
                    try {
                        T === "input" && p.type === "radio" && p.name != null && oh(d, p),
                        Xl(T, v);
                        var I = Xl(T, p);
                        for (v = 0; v < C.length; v += 2) {
                            var q = C[v]
                              , H = C[v + 1];
                            q === "style" ? ph(d, H) : q === "dangerouslySetInnerHTML" ? fh(d, H) : q === "children" ? ci(d, H) : L(d, q, H, I)
                        }
                        switch (T) {
                        case "input":
                            Wl(d, p);
                            break;
                        case "textarea":
                            uh(d, p);
                            break;
                        case "select":
                            var $ = d._wrapperState.wasMultiple;
                            d._wrapperState.wasMultiple = !!p.multiple;
                            var Y = p.value;
                            Y != null ? ds(d, !!p.multiple, Y, !1) : $ !== !!p.multiple && (p.defaultValue != null ? ds(d, !!p.multiple, p.defaultValue, !0) : ds(d, !!p.multiple, p.multiple ? [] : "", !1))
                        }
                        d[Oi] = p
                    } catch (re) {
                        We(n, n.return, re)
                    }
            }
            break;
        case 6:
            if (an(s, n),
            vn(n),
            l & 4) {
                if (n.stateNode === null)
                    throw Error(r(162));
                d = n.stateNode,
                p = n.memoizedProps;
                try {
                    d.nodeValue = p
                } catch (re) {
                    We(n, n.return, re)
                }
            }
            break;
        case 3:
            if (an(s, n),
            vn(n),
            l & 4 && o !== null && o.memoizedState.isDehydrated)
                try {
                    Si(s.containerInfo)
                } catch (re) {
                    We(n, n.return, re)
                }
            break;
        case 4:
            an(s, n),
            vn(n);
            break;
        case 13:
            an(s, n),
            vn(n),
            d = n.child,
            d.flags & 8192 && (p = d.memoizedState !== null,
            d.stateNode.isHidden = p,
            !p || d.alternate !== null && d.alternate.memoizedState !== null || (kc = Ge())),
            l & 4 && Nm(n);
            break;
        case 22:
            if (q = o !== null && o.memoizedState !== null,
            n.mode & 1 ? (yt = (I = yt) || q,
            an(s, n),
            yt = I) : an(s, n),
            vn(n),
            l & 8192) {
                if (I = n.memoizedState !== null,
                (n.stateNode.isHidden = I) && !q && (n.mode & 1) !== 0)
                    for (J = n,
                    q = n.child; q !== null; ) {
                        for (H = J = q; J !== null; ) {
                            switch ($ = J,
                            Y = $.child,
                            $.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                $i(4, $, $.return);
                                break;
                            case 1:
                                Os($, $.return);
                                var ee = $.stateNode;
                                if (typeof ee.componentWillUnmount == "function") {
                                    l = $,
                                    o = $.return;
                                    try {
                                        s = l,
                                        ee.props = s.memoizedProps,
                                        ee.state = s.memoizedState,
                                        ee.componentWillUnmount()
                                    } catch (re) {
                                        We(l, o, re)
                                    }
                                }
                                break;
                            case 5:
                                Os($, $.return);
                                break;
                            case 22:
                                if ($.memoizedState !== null) {
                                    Dm(H);
                                    continue
                                }
                            }
                            Y !== null ? (Y.return = $,
                            J = Y) : Dm(H)
                        }
                        q = q.sibling
                    }
                e: for (q = null,
                H = n; ; ) {
                    if (H.tag === 5) {
                        if (q === null) {
                            q = H;
                            try {
                                d = H.stateNode,
                                I ? (p = d.style,
                                typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (T = H.stateNode,
                                C = H.memoizedProps.style,
                                v = C != null && C.hasOwnProperty("display") ? C.display : null,
                                T.style.display = hh("display", v))
                            } catch (re) {
                                We(n, n.return, re)
                            }
                        }
                    } else if (H.tag === 6) {
                        if (q === null)
                            try {
                                H.stateNode.nodeValue = I ? "" : H.memoizedProps
                            } catch (re) {
                                We(n, n.return, re)
                            }
                    } else if ((H.tag !== 22 && H.tag !== 23 || H.memoizedState === null || H === n) && H.child !== null) {
                        H.child.return = H,
                        H = H.child;
                        continue
                    }
                    if (H === n)
                        break e;
                    for (; H.sibling === null; ) {
                        if (H.return === null || H.return === n)
                            break e;
                        q === H && (q = null),
                        H = H.return
                    }
                    q === H && (q = null),
                    H.sibling.return = H.return,
                    H = H.sibling
                }
            }
            break;
        case 19:
            an(s, n),
            vn(n),
            l & 4 && Nm(n);
            break;
        case 21:
            break;
        default:
            an(s, n),
            vn(n)
        }
    }
    function vn(n) {
        var s = n.flags;
        if (s & 2) {
            try {
                e: {
                    for (var o = n.return; o !== null; ) {
                        if (Pm(o)) {
                            var l = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(r(160))
                }
                switch (l.tag) {
                case 5:
                    var d = l.stateNode;
                    l.flags & 32 && (ci(d, ""),
                    l.flags &= -33);
                    var p = Rm(n);
                    xc(n, p, d);
                    break;
                case 3:
                case 4:
                    var v = l.stateNode.containerInfo
                      , T = Rm(n);
                    wc(n, T, v);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (C) {
                We(n, n.return, C)
            }
            n.flags &= -3
        }
        s & 4096 && (n.flags &= -4097)
    }
    function NS(n, s, o) {
        J = n,
        jm(n)
    }
    function jm(n, s, o) {
        for (var l = (n.mode & 1) !== 0; J !== null; ) {
            var d = J
              , p = d.child;
            if (d.tag === 22 && l) {
                var v = d.memoizedState !== null || Ra;
                if (!v) {
                    var T = d.alternate
                      , C = T !== null && T.memoizedState !== null || yt;
                    T = Ra;
                    var I = yt;
                    if (Ra = v,
                    (yt = C) && !I)
                        for (J = d; J !== null; )
                            v = J,
                            C = v.child,
                            v.tag === 22 && v.memoizedState !== null ? Mm(d) : C !== null ? (C.return = v,
                            J = C) : Mm(d);
                    for (; p !== null; )
                        J = p,
                        jm(p),
                        p = p.sibling;
                    J = d,
                    Ra = T,
                    yt = I
                }
                Lm(n)
            } else
                (d.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = d,
                J = p) : Lm(n)
        }
    }
    function Lm(n) {
        for (; J !== null; ) {
            var s = J;
            if ((s.flags & 8772) !== 0) {
                var o = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0)
                        switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            yt || Aa(5, s);
                            break;
                        case 1:
                            var l = s.stateNode;
                            if (s.flags & 4 && !yt)
                                if (o === null)
                                    l.componentDidMount();
                                else {
                                    var d = s.elementType === s.type ? o.memoizedProps : sn(s.type, o.memoizedProps);
                                    l.componentDidUpdate(d, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                }
                            var p = s.updateQueue;
                            p !== null && Dp(s, p, l);
                            break;
                        case 3:
                            var v = s.updateQueue;
                            if (v !== null) {
                                if (o = null,
                                s.child !== null)
                                    switch (s.child.tag) {
                                    case 5:
                                        o = s.child.stateNode;
                                        break;
                                    case 1:
                                        o = s.child.stateNode
                                    }
                                Dp(s, v, o)
                            }
                            break;
                        case 5:
                            var T = s.stateNode;
                            if (o === null && s.flags & 4) {
                                o = T;
                                var C = s.memoizedProps;
                                switch (s.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    C.autoFocus && o.focus();
                                    break;
                                case "img":
                                    C.src && (o.src = C.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var I = s.alternate;
                                if (I !== null) {
                                    var q = I.memoizedState;
                                    if (q !== null) {
                                        var H = q.dehydrated;
                                        H !== null && Si(H)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(r(163))
                        }
                    yt || s.flags & 512 && vc(s)
                } catch ($) {
                    We(s, s.return, $)
                }
            }
            if (s === n) {
                J = null;
                break
            }
            if (o = s.sibling,
            o !== null) {
                o.return = s.return,
                J = o;
                break
            }
            J = s.return
        }
    }
    function Dm(n) {
        for (; J !== null; ) {
            var s = J;
            if (s === n) {
                J = null;
                break
            }
            var o = s.sibling;
            if (o !== null) {
                o.return = s.return,
                J = o;
                break
            }
            J = s.return
        }
    }
    function Mm(n) {
        for (; J !== null; ) {
            var s = J;
            try {
                switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    var o = s.return;
                    try {
                        Aa(4, s)
                    } catch (C) {
                        We(s, o, C)
                    }
                    break;
                case 1:
                    var l = s.stateNode;
                    if (typeof l.componentDidMount == "function") {
                        var d = s.return;
                        try {
                            l.componentDidMount()
                        } catch (C) {
                            We(s, d, C)
                        }
                    }
                    var p = s.return;
                    try {
                        vc(s)
                    } catch (C) {
                        We(s, p, C)
                    }
                    break;
                case 5:
                    var v = s.return;
                    try {
                        vc(s)
                    } catch (C) {
                        We(s, v, C)
                    }
                }
            } catch (C) {
                We(s, s.return, C)
            }
            if (s === n) {
                J = null;
                break
            }
            var T = s.sibling;
            if (T !== null) {
                T.return = s.return,
                J = T;
                break
            }
            J = s.return
        }
    }
    var OS = Math.ceil
      , Na = j.ReactCurrentDispatcher
      , Sc = j.ReactCurrentOwner
      , Wt = j.ReactCurrentBatchConfig
      , Ce = 0
      , it = null
      , Ze = null
      , ut = 0
      , Vt = 0
      , js = Jn(0)
      , nt = 0
      , qi = null
      , Fr = 0
      , Oa = 0
      , bc = 0
      , Hi = null
      , Pt = null
      , kc = 0
      , Ls = 1 / 0
      , Ln = null
      , ja = !1
      , Ec = null
      , sr = null
      , La = !1
      , ir = null
      , Da = 0
      , Wi = 0
      , Tc = null
      , Ma = -1
      , Ia = 0;
    function kt() {
        return (Ce & 6) !== 0 ? Ge() : Ma !== -1 ? Ma : Ma = Ge()
    }
    function or(n) {
        return (n.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && ut !== 0 ? ut & -ut : mS.transition !== null ? (Ia === 0 && (Ia = Rh()),
        Ia) : (n = je,
        n !== 0 || (n = window.event,
        n = n === void 0 ? 16 : Fh(n.type)),
        n)
    }
    function ln(n, s, o, l) {
        if (50 < Wi)
            throw Wi = 0,
            Tc = null,
            Error(r(185));
        gi(n, o, l),
        ((Ce & 2) === 0 || n !== it) && (n === it && ((Ce & 2) === 0 && (Oa |= o),
        nt === 4 && ar(n, ut)),
        Rt(n, l),
        o === 1 && Ce === 0 && (s.mode & 1) === 0 && (Ls = Ge() + 500,
        da && er()))
    }
    function Rt(n, s) {
        var o = n.callbackNode;
        m1(n, s);
        var l = Wo(n, n === it ? ut : 0);
        if (l === 0)
            o !== null && Ch(o),
            n.callbackNode = null,
            n.callbackPriority = 0;
        else if (s = l & -l,
        n.callbackPriority !== s) {
            if (o != null && Ch(o),
            s === 1)
                n.tag === 0 ? pS(Fm.bind(null, n)) : kp(Fm.bind(null, n)),
                cS(function() {
                    (Ce & 6) === 0 && er()
                }),
                o = null;
            else {
                switch (Ah(l)) {
                case 1:
                    o = su;
                    break;
                case 4:
                    o = _h;
                    break;
                case 16:
                    o = zo;
                    break;
                case 536870912:
                    o = Ph;
                    break;
                default:
                    o = zo
                }
                o = Wm(o, Im.bind(null, n))
            }
            n.callbackPriority = s,
            n.callbackNode = o
        }
    }
    function Im(n, s) {
        if (Ma = -1,
        Ia = 0,
        (Ce & 6) !== 0)
            throw Error(r(327));
        var o = n.callbackNode;
        if (Ds() && n.callbackNode !== o)
            return null;
        var l = Wo(n, n === it ? ut : 0);
        if (l === 0)
            return null;
        if ((l & 30) !== 0 || (l & n.expiredLanes) !== 0 || s)
            s = Fa(n, l);
        else {
            s = l;
            var d = Ce;
            Ce |= 2;
            var p = Bm();
            (it !== n || ut !== s) && (Ln = null,
            Ls = Ge() + 500,
            Br(n, s));
            do
                try {
                    DS();
                    break
                } catch (T) {
                    Vm(n, T)
                }
            while (!0);
            $u(),
            Na.current = p,
            Ce = d,
            Ze !== null ? s = 0 : (it = null,
            ut = 0,
            s = nt)
        }
        if (s !== 0) {
            if (s === 2 && (d = iu(n),
            d !== 0 && (l = d,
            s = Cc(n, d))),
            s === 1)
                throw o = qi,
                Br(n, 0),
                ar(n, l),
                Rt(n, Ge()),
                o;
            if (s === 6)
                ar(n, l);
            else {
                if (d = n.current.alternate,
                (l & 30) === 0 && !jS(d) && (s = Fa(n, l),
                s === 2 && (p = iu(n),
                p !== 0 && (l = p,
                s = Cc(n, p))),
                s === 1))
                    throw o = qi,
                    Br(n, 0),
                    ar(n, l),
                    Rt(n, Ge()),
                    o;
                switch (n.finishedWork = d,
                n.finishedLanes = l,
                s) {
                case 0:
                case 1:
                    throw Error(r(345));
                case 2:
                    Ur(n, Pt, Ln);
                    break;
                case 3:
                    if (ar(n, l),
                    (l & 130023424) === l && (s = kc + 500 - Ge(),
                    10 < s)) {
                        if (Wo(n, 0) !== 0)
                            break;
                        if (d = n.suspendedLanes,
                        (d & l) !== l) {
                            kt(),
                            n.pingedLanes |= n.suspendedLanes & d;
                            break
                        }
                        n.timeoutHandle = Ou(Ur.bind(null, n, Pt, Ln), s);
                        break
                    }
                    Ur(n, Pt, Ln);
                    break;
                case 4:
                    if (ar(n, l),
                    (l & 4194240) === l)
                        break;
                    for (s = n.eventTimes,
                    d = -1; 0 < l; ) {
                        var v = 31 - tn(l);
                        p = 1 << v,
                        v = s[v],
                        v > d && (d = v),
                        l &= ~p
                    }
                    if (l = d,
                    l = Ge() - l,
                    l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * OS(l / 1960)) - l,
                    10 < l) {
                        n.timeoutHandle = Ou(Ur.bind(null, n, Pt, Ln), l);
                        break
                    }
                    Ur(n, Pt, Ln);
                    break;
                case 5:
                    Ur(n, Pt, Ln);
                    break;
                default:
                    throw Error(r(329))
                }
            }
        }
        return Rt(n, Ge()),
        n.callbackNode === o ? Im.bind(null, n) : null
    }
    function Cc(n, s) {
        var o = Hi;
        return n.current.memoizedState.isDehydrated && (Br(n, s).flags |= 256),
        n = Fa(n, s),
        n !== 2 && (s = Pt,
        Pt = o,
        s !== null && _c(s)),
        n
    }
    function _c(n) {
        Pt === null ? Pt = n : Pt.push.apply(Pt, n)
    }
    function jS(n) {
        for (var s = n; ; ) {
            if (s.flags & 16384) {
                var o = s.updateQueue;
                if (o !== null && (o = o.stores,
                o !== null))
                    for (var l = 0; l < o.length; l++) {
                        var d = o[l]
                          , p = d.getSnapshot;
                        d = d.value;
                        try {
                            if (!nn(p(), d))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = s.child,
            s.subtreeFlags & 16384 && o !== null)
                o.return = s,
                s = o;
            else {
                if (s === n)
                    break;
                for (; s.sibling === null; ) {
                    if (s.return === null || s.return === n)
                        return !0;
                    s = s.return
                }
                s.sibling.return = s.return,
                s = s.sibling
            }
        }
        return !0
    }
    function ar(n, s) {
        for (s &= ~bc,
        s &= ~Oa,
        n.suspendedLanes |= s,
        n.pingedLanes &= ~s,
        n = n.expirationTimes; 0 < s; ) {
            var o = 31 - tn(s)
              , l = 1 << o;
            n[o] = -1,
            s &= ~l
        }
    }
    function Fm(n) {
        if ((Ce & 6) !== 0)
            throw Error(r(327));
        Ds();
        var s = Wo(n, 0);
        if ((s & 1) === 0)
            return Rt(n, Ge()),
            null;
        var o = Fa(n, s);
        if (n.tag !== 0 && o === 2) {
            var l = iu(n);
            l !== 0 && (s = l,
            o = Cc(n, l))
        }
        if (o === 1)
            throw o = qi,
            Br(n, 0),
            ar(n, s),
            Rt(n, Ge()),
            o;
        if (o === 6)
            throw Error(r(345));
        return n.finishedWork = n.current.alternate,
        n.finishedLanes = s,
        Ur(n, Pt, Ln),
        Rt(n, Ge()),
        null
    }
    function Pc(n, s) {
        var o = Ce;
        Ce |= 1;
        try {
            return n(s)
        } finally {
            Ce = o,
            Ce === 0 && (Ls = Ge() + 500,
            da && er())
        }
    }
    function Vr(n) {
        ir !== null && ir.tag === 0 && (Ce & 6) === 0 && Ds();
        var s = Ce;
        Ce |= 1;
        var o = Wt.transition
          , l = je;
        try {
            if (Wt.transition = null,
            je = 1,
            n)
                return n()
        } finally {
            je = l,
            Wt.transition = o,
            Ce = s,
            (Ce & 6) === 0 && er()
        }
    }
    function Rc() {
        Vt = js.current,
        Be(js)
    }
    function Br(n, s) {
        n.finishedWork = null,
        n.finishedLanes = 0;
        var o = n.timeoutHandle;
        if (o !== -1 && (n.timeoutHandle = -1,
        uS(o)),
        Ze !== null)
            for (o = Ze.return; o !== null; ) {
                var l = o;
                switch (Fu(l),
                l.tag) {
                case 1:
                    l = l.type.childContextTypes,
                    l != null && ua();
                    break;
                case 3:
                    As(),
                    Be(Tt),
                    Be(pt),
                    Xu();
                    break;
                case 5:
                    Gu(l);
                    break;
                case 4:
                    As();
                    break;
                case 13:
                    Be($e);
                    break;
                case 19:
                    Be($e);
                    break;
                case 10:
                    qu(l.type._context);
                    break;
                case 22:
                case 23:
                    Rc()
                }
                o = o.return
            }
        if (it = n,
        Ze = n = lr(n.current, null),
        ut = Vt = s,
        nt = 0,
        qi = null,
        bc = Oa = Fr = 0,
        Pt = Hi = null,
        Dr !== null) {
            for (s = 0; s < Dr.length; s++)
                if (o = Dr[s],
                l = o.interleaved,
                l !== null) {
                    o.interleaved = null;
                    var d = l.next
                      , p = o.pending;
                    if (p !== null) {
                        var v = p.next;
                        p.next = d,
                        l.next = v
                    }
                    o.pending = l
                }
            Dr = null
        }
        return n
    }
    function Vm(n, s) {
        do {
            var o = Ze;
            try {
                if ($u(),
                Sa.current = Ta,
                ba) {
                    for (var l = qe.memoizedState; l !== null; ) {
                        var d = l.queue;
                        d !== null && (d.pending = null),
                        l = l.next
                    }
                    ba = !1
                }
                if (Ir = 0,
                st = tt = qe = null,
                Fi = !1,
                Vi = 0,
                Sc.current = null,
                o === null || o.return === null) {
                    nt = 1,
                    qi = s,
                    Ze = null;
                    break
                }
                e: {
                    var p = n
                      , v = o.return
                      , T = o
                      , C = s;
                    if (s = ut,
                    T.flags |= 32768,
                    C !== null && typeof C == "object" && typeof C.then == "function") {
                        var I = C
                          , q = T
                          , H = q.tag;
                        if ((q.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
                            var $ = q.alternate;
                            $ ? (q.updateQueue = $.updateQueue,
                            q.memoizedState = $.memoizedState,
                            q.lanes = $.lanes) : (q.updateQueue = null,
                            q.memoizedState = null)
                        }
                        var Y = cm(v);
                        if (Y !== null) {
                            Y.flags &= -257,
                            dm(Y, v, T, p, s),
                            Y.mode & 1 && um(p, I, s),
                            s = Y,
                            C = I;
                            var ee = s.updateQueue;
                            if (ee === null) {
                                var re = new Set;
                                re.add(C),
                                s.updateQueue = re
                            } else
                                ee.add(C);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                um(p, I, s),
                                Ac();
                                break e
                            }
                            C = Error(r(426))
                        }
                    } else if (ze && T.mode & 1) {
                        var Ye = cm(v);
                        if (Ye !== null) {
                            (Ye.flags & 65536) === 0 && (Ye.flags |= 256),
                            dm(Ye, v, T, p, s),
                            Uu(Ns(C, T));
                            break e
                        }
                    }
                    p = C = Ns(C, T),
                    nt !== 4 && (nt = 2),
                    Hi === null ? Hi = [p] : Hi.push(p),
                    p = v;
                    do {
                        switch (p.tag) {
                        case 3:
                            p.flags |= 65536,
                            s &= -s,
                            p.lanes |= s;
                            var N = am(p, C, s);
                            Lp(p, N);
                            break e;
                        case 1:
                            T = C;
                            var P = p.type
                              , O = p.stateNode;
                            if ((p.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (sr === null || !sr.has(O)))) {
                                p.flags |= 65536,
                                s &= -s,
                                p.lanes |= s;
                                var Q = lm(p, T, s);
                                Lp(p, Q);
                                break e
                            }
                        }
                        p = p.return
                    } while (p !== null)
                }
                zm(o)
            } catch (ie) {
                s = ie,
                Ze === o && o !== null && (Ze = o = o.return);
                continue
            }
            break
        } while (!0)
    }
    function Bm() {
        var n = Na.current;
        return Na.current = Ta,
        n === null ? Ta : n
    }
    function Ac() {
        (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
        it === null || (Fr & 268435455) === 0 && (Oa & 268435455) === 0 || ar(it, ut)
    }
    function Fa(n, s) {
        var o = Ce;
        Ce |= 2;
        var l = Bm();
        (it !== n || ut !== s) && (Ln = null,
        Br(n, s));
        do
            try {
                LS();
                break
            } catch (d) {
                Vm(n, d)
            }
        while (!0);
        if ($u(),
        Ce = o,
        Na.current = l,
        Ze !== null)
            throw Error(r(261));
        return it = null,
        ut = 0,
        nt
    }
    function LS() {
        for (; Ze !== null; )
            Um(Ze)
    }
    function DS() {
        for (; Ze !== null && !o1(); )
            Um(Ze)
    }
    function Um(n) {
        var s = Hm(n.alternate, n, Vt);
        n.memoizedProps = n.pendingProps,
        s === null ? zm(n) : Ze = s,
        Sc.current = null
    }
    function zm(n) {
        var s = n;
        do {
            var o = s.alternate;
            if (n = s.return,
            (s.flags & 32768) === 0) {
                if (o = _S(o, s, Vt),
                o !== null) {
                    Ze = o;
                    return
                }
            } else {
                if (o = PS(o, s),
                o !== null) {
                    o.flags &= 32767,
                    Ze = o;
                    return
                }
                if (n !== null)
                    n.flags |= 32768,
                    n.subtreeFlags = 0,
                    n.deletions = null;
                else {
                    nt = 6,
                    Ze = null;
                    return
                }
            }
            if (s = s.sibling,
            s !== null) {
                Ze = s;
                return
            }
            Ze = s = n
        } while (s !== null);
        nt === 0 && (nt = 5)
    }
    function Ur(n, s, o) {
        var l = je
          , d = Wt.transition;
        try {
            Wt.transition = null,
            je = 1,
            MS(n, s, o, l)
        } finally {
            Wt.transition = d,
            je = l
        }
        return null
    }
    function MS(n, s, o, l) {
        do
            Ds();
        while (ir !== null);
        if ((Ce & 6) !== 0)
            throw Error(r(327));
        o = n.finishedWork;
        var d = n.finishedLanes;
        if (o === null)
            return null;
        if (n.finishedWork = null,
        n.finishedLanes = 0,
        o === n.current)
            throw Error(r(177));
        n.callbackNode = null,
        n.callbackPriority = 0;
        var p = o.lanes | o.childLanes;
        if (g1(n, p),
        n === it && (Ze = it = null,
        ut = 0),
        (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || La || (La = !0,
        Wm(zo, function() {
            return Ds(),
            null
        })),
        p = (o.flags & 15990) !== 0,
        (o.subtreeFlags & 15990) !== 0 || p) {
            p = Wt.transition,
            Wt.transition = null;
            var v = je;
            je = 1;
            var T = Ce;
            Ce |= 4,
            Sc.current = null,
            AS(n, o),
            Om(o, n),
            nS(Au),
            Go = !!Ru,
            Au = Ru = null,
            n.current = o,
            NS(o),
            a1(),
            Ce = T,
            je = v,
            Wt.transition = p
        } else
            n.current = o;
        if (La && (La = !1,
        ir = n,
        Da = d),
        p = n.pendingLanes,
        p === 0 && (sr = null),
        c1(o.stateNode),
        Rt(n, Ge()),
        s !== null)
            for (l = n.onRecoverableError,
            o = 0; o < s.length; o++)
                d = s[o],
                l(d.value, {
                    componentStack: d.stack,
                    digest: d.digest
                });
        if (ja)
            throw ja = !1,
            n = Ec,
            Ec = null,
            n;
        return (Da & 1) !== 0 && n.tag !== 0 && Ds(),
        p = n.pendingLanes,
        (p & 1) !== 0 ? n === Tc ? Wi++ : (Wi = 0,
        Tc = n) : Wi = 0,
        er(),
        null
    }
    function Ds() {
        if (ir !== null) {
            var n = Ah(Da)
              , s = Wt.transition
              , o = je;
            try {
                if (Wt.transition = null,
                je = 16 > n ? 16 : n,
                ir === null)
                    var l = !1;
                else {
                    if (n = ir,
                    ir = null,
                    Da = 0,
                    (Ce & 6) !== 0)
                        throw Error(r(331));
                    var d = Ce;
                    for (Ce |= 4,
                    J = n.current; J !== null; ) {
                        var p = J
                          , v = p.child;
                        if ((J.flags & 16) !== 0) {
                            var T = p.deletions;
                            if (T !== null) {
                                for (var C = 0; C < T.length; C++) {
                                    var I = T[C];
                                    for (J = I; J !== null; ) {
                                        var q = J;
                                        switch (q.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            $i(8, q, p)
                                        }
                                        var H = q.child;
                                        if (H !== null)
                                            H.return = q,
                                            J = H;
                                        else
                                            for (; J !== null; ) {
                                                q = J;
                                                var $ = q.sibling
                                                  , Y = q.return;
                                                if (_m(q),
                                                q === I) {
                                                    J = null;
                                                    break
                                                }
                                                if ($ !== null) {
                                                    $.return = Y,
                                                    J = $;
                                                    break
                                                }
                                                J = Y
                                            }
                                    }
                                }
                                var ee = p.alternate;
                                if (ee !== null) {
                                    var re = ee.child;
                                    if (re !== null) {
                                        ee.child = null;
                                        do {
                                            var Ye = re.sibling;
                                            re.sibling = null,
                                            re = Ye
                                        } while (re !== null)
                                    }
                                }
                                J = p
                            }
                        }
                        if ((p.subtreeFlags & 2064) !== 0 && v !== null)
                            v.return = p,
                            J = v;
                        else
                            e: for (; J !== null; ) {
                                if (p = J,
                                (p.flags & 2048) !== 0)
                                    switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $i(9, p, p.return)
                                    }
                                var N = p.sibling;
                                if (N !== null) {
                                    N.return = p.return,
                                    J = N;
                                    break e
                                }
                                J = p.return
                            }
                    }
                    var P = n.current;
                    for (J = P; J !== null; ) {
                        v = J;
                        var O = v.child;
                        if ((v.subtreeFlags & 2064) !== 0 && O !== null)
                            O.return = v,
                            J = O;
                        else
                            e: for (v = P; J !== null; ) {
                                if (T = J,
                                (T.flags & 2048) !== 0)
                                    try {
                                        switch (T.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Aa(9, T)
                                        }
                                    } catch (ie) {
                                        We(T, T.return, ie)
                                    }
                                if (T === v) {
                                    J = null;
                                    break e
                                }
                                var Q = T.sibling;
                                if (Q !== null) {
                                    Q.return = T.return,
                                    J = Q;
                                    break e
                                }
                                J = T.return
                            }
                    }
                    if (Ce = d,
                    er(),
                    pn && typeof pn.onPostCommitFiberRoot == "function")
                        try {
                            pn.onPostCommitFiberRoot($o, n)
                        } catch {}
                    l = !0
                }
                return l
            } finally {
                je = o,
                Wt.transition = s
            }
        }
        return !1
    }
    function $m(n, s, o) {
        s = Ns(o, s),
        s = am(n, s, 1),
        n = nr(n, s, 1),
        s = kt(),
        n !== null && (gi(n, 1, s),
        Rt(n, s))
    }
    function We(n, s, o) {
        if (n.tag === 3)
            $m(n, n, o);
        else
            for (; s !== null; ) {
                if (s.tag === 3) {
                    $m(s, n, o);
                    break
                } else if (s.tag === 1) {
                    var l = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (sr === null || !sr.has(l))) {
                        n = Ns(o, n),
                        n = lm(s, n, 1),
                        s = nr(s, n, 1),
                        n = kt(),
                        s !== null && (gi(s, 1, n),
                        Rt(s, n));
                        break
                    }
                }
                s = s.return
            }
    }
    function IS(n, s, o) {
        var l = n.pingCache;
        l !== null && l.delete(s),
        s = kt(),
        n.pingedLanes |= n.suspendedLanes & o,
        it === n && (ut & o) === o && (nt === 4 || nt === 3 && (ut & 130023424) === ut && 500 > Ge() - kc ? Br(n, 0) : bc |= o),
        Rt(n, s)
    }
    function qm(n, s) {
        s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = Ho,
        Ho <<= 1,
        (Ho & 130023424) === 0 && (Ho = 4194304)));
        var o = kt();
        n = Nn(n, s),
        n !== null && (gi(n, s, o),
        Rt(n, o))
    }
    function FS(n) {
        var s = n.memoizedState
          , o = 0;
        s !== null && (o = s.retryLane),
        qm(n, o)
    }
    function VS(n, s) {
        var o = 0;
        switch (n.tag) {
        case 13:
            var l = n.stateNode
              , d = n.memoizedState;
            d !== null && (o = d.retryLane);
            break;
        case 19:
            l = n.stateNode;
            break;
        default:
            throw Error(r(314))
        }
        l !== null && l.delete(s),
        qm(n, o)
    }
    var Hm;
    Hm = function(n, s, o) {
        if (n !== null)
            if (n.memoizedProps !== s.pendingProps || Tt.current)
                _t = !0;
            else {
                if ((n.lanes & o) === 0 && (s.flags & 128) === 0)
                    return _t = !1,
                    CS(n, s, o);
                _t = (n.flags & 131072) !== 0
            }
        else
            _t = !1,
            ze && (s.flags & 1048576) !== 0 && Ep(s, ha, s.index);
        switch (s.lanes = 0,
        s.tag) {
        case 2:
            var l = s.type;
            Pa(n, s),
            n = s.pendingProps;
            var d = ks(s, pt.current);
            Rs(s, o),
            d = ec(null, s, l, n, d, o);
            var p = tc();
            return s.flags |= 1,
            typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (s.tag = 1,
            s.memoizedState = null,
            s.updateQueue = null,
            Ct(l) ? (p = !0,
            ca(s)) : p = !1,
            s.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null,
            Ku(s),
            d.updater = Ca,
            s.stateNode = d,
            d._reactInternals = s,
            ac(s, l, n, o),
            s = dc(null, s, l, !0, p, o)) : (s.tag = 0,
            ze && p && Iu(s),
            bt(null, s, d, o),
            s = s.child),
            s;
        case 16:
            l = s.elementType;
            e: {
                switch (Pa(n, s),
                n = s.pendingProps,
                d = l._init,
                l = d(l._payload),
                s.type = l,
                d = s.tag = US(l),
                n = sn(l, n),
                d) {
                case 0:
                    s = cc(null, s, l, n, o);
                    break e;
                case 1:
                    s = ym(null, s, l, n, o);
                    break e;
                case 11:
                    s = fm(null, s, l, n, o);
                    break e;
                case 14:
                    s = hm(null, s, l, sn(l.type, n), o);
                    break e
                }
                throw Error(r(306, l, ""))
            }
            return s;
        case 0:
            return l = s.type,
            d = s.pendingProps,
            d = s.elementType === l ? d : sn(l, d),
            cc(n, s, l, d, o);
        case 1:
            return l = s.type,
            d = s.pendingProps,
            d = s.elementType === l ? d : sn(l, d),
            ym(n, s, l, d, o);
        case 3:
            e: {
                if (vm(s),
                n === null)
                    throw Error(r(387));
                l = s.pendingProps,
                p = s.memoizedState,
                d = p.element,
                jp(n, s),
                wa(s, l, null, o);
                var v = s.memoizedState;
                if (l = v.element,
                p.isDehydrated)
                    if (p = {
                        element: l,
                        isDehydrated: !1,
                        cache: v.cache,
                        pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                        transitions: v.transitions
                    },
                    s.updateQueue.baseState = p,
                    s.memoizedState = p,
                    s.flags & 256) {
                        d = Ns(Error(r(423)), s),
                        s = wm(n, s, l, o, d);
                        break e
                    } else if (l !== d) {
                        d = Ns(Error(r(424)), s),
                        s = wm(n, s, l, o, d);
                        break e
                    } else
                        for (Ft = Xn(s.stateNode.containerInfo.firstChild),
                        It = s,
                        ze = !0,
                        rn = null,
                        o = Np(s, null, l, o),
                        s.child = o; o; )
                            o.flags = o.flags & -3 | 4096,
                            o = o.sibling;
                else {
                    if (Cs(),
                    l === d) {
                        s = jn(n, s, o);
                        break e
                    }
                    bt(n, s, l, o)
                }
                s = s.child
            }
            return s;
        case 5:
            return Mp(s),
            n === null && Bu(s),
            l = s.type,
            d = s.pendingProps,
            p = n !== null ? n.memoizedProps : null,
            v = d.children,
            Nu(l, d) ? v = null : p !== null && Nu(l, p) && (s.flags |= 32),
            gm(n, s),
            bt(n, s, v, o),
            s.child;
        case 6:
            return n === null && Bu(s),
            null;
        case 13:
            return xm(n, s, o);
        case 4:
            return Qu(s, s.stateNode.containerInfo),
            l = s.pendingProps,
            n === null ? s.child = _s(s, null, l, o) : bt(n, s, l, o),
            s.child;
        case 11:
            return l = s.type,
            d = s.pendingProps,
            d = s.elementType === l ? d : sn(l, d),
            fm(n, s, l, d, o);
        case 7:
            return bt(n, s, s.pendingProps, o),
            s.child;
        case 8:
            return bt(n, s, s.pendingProps.children, o),
            s.child;
        case 12:
            return bt(n, s, s.pendingProps.children, o),
            s.child;
        case 10:
            e: {
                if (l = s.type._context,
                d = s.pendingProps,
                p = s.memoizedProps,
                v = d.value,
                Fe(ga, l._currentValue),
                l._currentValue = v,
                p !== null)
                    if (nn(p.value, v)) {
                        if (p.children === d.children && !Tt.current) {
                            s = jn(n, s, o);
                            break e
                        }
                    } else
                        for (p = s.child,
                        p !== null && (p.return = s); p !== null; ) {
                            var T = p.dependencies;
                            if (T !== null) {
                                v = p.child;
                                for (var C = T.firstContext; C !== null; ) {
                                    if (C.context === l) {
                                        if (p.tag === 1) {
                                            C = On(-1, o & -o),
                                            C.tag = 2;
                                            var I = p.updateQueue;
                                            if (I !== null) {
                                                I = I.shared;
                                                var q = I.pending;
                                                q === null ? C.next = C : (C.next = q.next,
                                                q.next = C),
                                                I.pending = C
                                            }
                                        }
                                        p.lanes |= o,
                                        C = p.alternate,
                                        C !== null && (C.lanes |= o),
                                        Hu(p.return, o, s),
                                        T.lanes |= o;
                                        break
                                    }
                                    C = C.next
                                }
                            } else if (p.tag === 10)
                                v = p.type === s.type ? null : p.child;
                            else if (p.tag === 18) {
                                if (v = p.return,
                                v === null)
                                    throw Error(r(341));
                                v.lanes |= o,
                                T = v.alternate,
                                T !== null && (T.lanes |= o),
                                Hu(v, o, s),
                                v = p.sibling
                            } else
                                v = p.child;
                            if (v !== null)
                                v.return = p;
                            else
                                for (v = p; v !== null; ) {
                                    if (v === s) {
                                        v = null;
                                        break
                                    }
                                    if (p = v.sibling,
                                    p !== null) {
                                        p.return = v.return,
                                        v = p;
                                        break
                                    }
                                    v = v.return
                                }
                            p = v
                        }
                bt(n, s, d.children, o),
                s = s.child
            }
            return s;
        case 9:
            return d = s.type,
            l = s.pendingProps.children,
            Rs(s, o),
            d = qt(d),
            l = l(d),
            s.flags |= 1,
            bt(n, s, l, o),
            s.child;
        case 14:
            return l = s.type,
            d = sn(l, s.pendingProps),
            d = sn(l.type, d),
            hm(n, s, l, d, o);
        case 15:
            return pm(n, s, s.type, s.pendingProps, o);
        case 17:
            return l = s.type,
            d = s.pendingProps,
            d = s.elementType === l ? d : sn(l, d),
            Pa(n, s),
            s.tag = 1,
            Ct(l) ? (n = !0,
            ca(s)) : n = !1,
            Rs(s, o),
            im(s, l, d),
            ac(s, l, d, o),
            dc(null, s, l, !0, n, o);
        case 19:
            return bm(n, s, o);
        case 22:
            return mm(n, s, o)
        }
        throw Error(r(156, s.tag))
    }
    ;
    function Wm(n, s) {
        return Th(n, s)
    }
    function BS(n, s, o, l) {
        this.tag = n,
        this.key = o,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = s,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Kt(n, s, o, l) {
        return new BS(n,s,o,l)
    }
    function Nc(n) {
        return n = n.prototype,
        !(!n || !n.isReactComponent)
    }
    function US(n) {
        if (typeof n == "function")
            return Nc(n) ? 1 : 0;
        if (n != null) {
            if (n = n.$$typeof,
            n === Le)
                return 11;
            if (n === Ie)
                return 14
        }
        return 2
    }
    function lr(n, s) {
        var o = n.alternate;
        return o === null ? (o = Kt(n.tag, s, n.key, n.mode),
        o.elementType = n.elementType,
        o.type = n.type,
        o.stateNode = n.stateNode,
        o.alternate = n,
        n.alternate = o) : (o.pendingProps = s,
        o.type = n.type,
        o.flags = 0,
        o.subtreeFlags = 0,
        o.deletions = null),
        o.flags = n.flags & 14680064,
        o.childLanes = n.childLanes,
        o.lanes = n.lanes,
        o.child = n.child,
        o.memoizedProps = n.memoizedProps,
        o.memoizedState = n.memoizedState,
        o.updateQueue = n.updateQueue,
        s = n.dependencies,
        o.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        },
        o.sibling = n.sibling,
        o.index = n.index,
        o.ref = n.ref,
        o
    }
    function Va(n, s, o, l, d, p) {
        var v = 2;
        if (l = n,
        typeof n == "function")
            Nc(n) && (v = 1);
        else if (typeof n == "string")
            v = 5;
        else
            e: switch (n) {
            case G:
                return zr(o.children, d, p, s);
            case M:
                v = 8,
                d |= 8;
                break;
            case Z:
                return n = Kt(12, o, s, d | 2),
                n.elementType = Z,
                n.lanes = p,
                n;
            case De:
                return n = Kt(13, o, s, d),
                n.elementType = De,
                n.lanes = p,
                n;
            case Ae:
                return n = Kt(19, o, s, d),
                n.elementType = Ae,
                n.lanes = p,
                n;
            case de:
                return Ba(o, d, p, s);
            default:
                if (typeof n == "object" && n !== null)
                    switch (n.$$typeof) {
                    case fe:
                        v = 10;
                        break e;
                    case Re:
                        v = 9;
                        break e;
                    case Le:
                        v = 11;
                        break e;
                    case Ie:
                        v = 14;
                        break e;
                    case we:
                        v = 16,
                        l = null;
                        break e
                    }
                throw Error(r(130, n == null ? n : typeof n, ""))
            }
        return s = Kt(v, o, s, d),
        s.elementType = n,
        s.type = l,
        s.lanes = p,
        s
    }
    function zr(n, s, o, l) {
        return n = Kt(7, n, l, s),
        n.lanes = o,
        n
    }
    function Ba(n, s, o, l) {
        return n = Kt(22, n, l, s),
        n.elementType = de,
        n.lanes = o,
        n.stateNode = {
            isHidden: !1
        },
        n
    }
    function Oc(n, s, o) {
        return n = Kt(6, n, null, s),
        n.lanes = o,
        n
    }
    function jc(n, s, o) {
        return s = Kt(4, n.children !== null ? n.children : [], n.key, s),
        s.lanes = o,
        s.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation
        },
        s
    }
    function zS(n, s, o, l, d) {
        this.tag = s,
        this.containerInfo = n,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = ou(0),
        this.expirationTimes = ou(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = ou(0),
        this.identifierPrefix = l,
        this.onRecoverableError = d,
        this.mutableSourceEagerHydrationData = null
    }
    function Lc(n, s, o, l, d, p, v, T, C) {
        return n = new zS(n,s,o,T,C),
        s === 1 ? (s = 1,
        p === !0 && (s |= 8)) : s = 0,
        p = Kt(3, null, null, s),
        n.current = p,
        p.stateNode = n,
        p.memoizedState = {
            element: l,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Ku(p),
        n
    }
    function $S(n, s, o) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: K,
            key: l == null ? null : "" + l,
            children: n,
            containerInfo: s,
            implementation: o
        }
    }
    function Km(n) {
        if (!n)
            return Zn;
        n = n._reactInternals;
        e: {
            if (Ar(n) !== n || n.tag !== 1)
                throw Error(r(170));
            var s = n;
            do {
                switch (s.tag) {
                case 3:
                    s = s.stateNode.context;
                    break e;
                case 1:
                    if (Ct(s.type)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                s = s.return
            } while (s !== null);
            throw Error(r(171))
        }
        if (n.tag === 1) {
            var o = n.type;
            if (Ct(o))
                return Sp(n, o, s)
        }
        return s
    }
    function Qm(n, s, o, l, d, p, v, T, C) {
        return n = Lc(o, l, !0, n, d, p, v, T, C),
        n.context = Km(null),
        o = n.current,
        l = kt(),
        d = or(o),
        p = On(l, d),
        p.callback = s ?? null,
        nr(o, p, d),
        n.current.lanes = d,
        gi(n, d, l),
        Rt(n, l),
        n
    }
    function Ua(n, s, o, l) {
        var d = s.current
          , p = kt()
          , v = or(d);
        return o = Km(o),
        s.context === null ? s.context = o : s.pendingContext = o,
        s = On(p, v),
        s.payload = {
            element: n
        },
        l = l === void 0 ? null : l,
        l !== null && (s.callback = l),
        n = nr(d, s, v),
        n !== null && (ln(n, d, v, p),
        va(n, d, v)),
        v
    }
    function za(n) {
        if (n = n.current,
        !n.child)
            return null;
        switch (n.child.tag) {
        case 5:
            return n.child.stateNode;
        default:
            return n.child.stateNode
        }
    }
    function Gm(n, s) {
        if (n = n.memoizedState,
        n !== null && n.dehydrated !== null) {
            var o = n.retryLane;
            n.retryLane = o !== 0 && o < s ? o : s
        }
    }
    function Dc(n, s) {
        Gm(n, s),
        (n = n.alternate) && Gm(n, s)
    }
    function qS() {
        return null
    }
    var Ym = typeof reportError == "function" ? reportError : function(n) {
        console.error(n)
    }
    ;
    function Mc(n) {
        this._internalRoot = n
    }
    $a.prototype.render = Mc.prototype.render = function(n) {
        var s = this._internalRoot;
        if (s === null)
            throw Error(r(409));
        Ua(n, s, null, null)
    }
    ,
    $a.prototype.unmount = Mc.prototype.unmount = function() {
        var n = this._internalRoot;
        if (n !== null) {
            this._internalRoot = null;
            var s = n.containerInfo;
            Vr(function() {
                Ua(null, n, null, null)
            }),
            s[_n] = null
        }
    }
    ;
    function $a(n) {
        this._internalRoot = n
    }
    $a.prototype.unstable_scheduleHydration = function(n) {
        if (n) {
            var s = jh();
            n = {
                blockedOn: null,
                target: n,
                priority: s
            };
            for (var o = 0; o < Qn.length && s !== 0 && s < Qn[o].priority; o++)
                ;
            Qn.splice(o, 0, n),
            o === 0 && Mh(n)
        }
    }
    ;
    function Ic(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
    }
    function qa(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    }
    function Xm() {}
    function HS(n, s, o, l, d) {
        if (d) {
            if (typeof l == "function") {
                var p = l;
                l = function() {
                    var I = za(v);
                    p.call(I)
                }
            }
            var v = Qm(s, l, n, 0, null, !1, !1, "", Xm);
            return n._reactRootContainer = v,
            n[_n] = v.current,
            Ai(n.nodeType === 8 ? n.parentNode : n),
            Vr(),
            v
        }
        for (; d = n.lastChild; )
            n.removeChild(d);
        if (typeof l == "function") {
            var T = l;
            l = function() {
                var I = za(C);
                T.call(I)
            }
        }
        var C = Lc(n, 0, !1, null, null, !1, !1, "", Xm);
        return n._reactRootContainer = C,
        n[_n] = C.current,
        Ai(n.nodeType === 8 ? n.parentNode : n),
        Vr(function() {
            Ua(s, C, o, l)
        }),
        C
    }
    function Ha(n, s, o, l, d) {
        var p = o._reactRootContainer;
        if (p) {
            var v = p;
            if (typeof d == "function") {
                var T = d;
                d = function() {
                    var C = za(v);
                    T.call(C)
                }
            }
            Ua(s, v, n, d)
        } else
            v = HS(o, s, n, d, l);
        return za(v)
    }
    Nh = function(n) {
        switch (n.tag) {
        case 3:
            var s = n.stateNode;
            if (s.current.memoizedState.isDehydrated) {
                var o = mi(s.pendingLanes);
                o !== 0 && (au(s, o | 1),
                Rt(s, Ge()),
                (Ce & 6) === 0 && (Ls = Ge() + 500,
                er()))
            }
            break;
        case 13:
            Vr(function() {
                var l = Nn(n, 1);
                if (l !== null) {
                    var d = kt();
                    ln(l, n, 1, d)
                }
            }),
            Dc(n, 1)
        }
    }
    ,
    lu = function(n) {
        if (n.tag === 13) {
            var s = Nn(n, 134217728);
            if (s !== null) {
                var o = kt();
                ln(s, n, 134217728, o)
            }
            Dc(n, 134217728)
        }
    }
    ,
    Oh = function(n) {
        if (n.tag === 13) {
            var s = or(n)
              , o = Nn(n, s);
            if (o !== null) {
                var l = kt();
                ln(o, n, s, l)
            }
            Dc(n, s)
        }
    }
    ,
    jh = function() {
        return je
    }
    ,
    Lh = function(n, s) {
        var o = je;
        try {
            return je = n,
            s()
        } finally {
            je = o
        }
    }
    ,
    eu = function(n, s, o) {
        switch (s) {
        case "input":
            if (Wl(n, o),
            s = o.name,
            o.type === "radio" && s != null) {
                for (o = n; o.parentNode; )
                    o = o.parentNode;
                for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'),
                s = 0; s < o.length; s++) {
                    var l = o[s];
                    if (l !== n && l.form === n.form) {
                        var d = la(l);
                        if (!d)
                            throw Error(r(90));
                        Rr(l),
                        Wl(l, d)
                    }
                }
            }
            break;
        case "textarea":
            uh(n, o);
            break;
        case "select":
            s = o.value,
            s != null && ds(n, !!o.multiple, s, !1)
        }
    }
    ,
    vh = Pc,
    wh = Vr;
    var WS = {
        usingClientEntryPoint: !1,
        Events: [ji, Ss, la, gh, yh, Pc]
    }
      , Ki = {
        findFiberByHostInstance: Nr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , KS = {
        bundleType: Ki.bundleType,
        version: Ki.version,
        rendererPackageName: Ki.rendererPackageName,
        rendererConfig: Ki.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: j.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(n) {
            return n = kh(n),
            n === null ? null : n.stateNode
        },
        findFiberByHostInstance: Ki.findFiberByHostInstance || qS,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Wa.isDisabled && Wa.supportsFiber)
            try {
                $o = Wa.inject(KS),
                pn = Wa
            } catch {}
    }
    return At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WS,
    At.createPortal = function(n, s) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Ic(s))
            throw Error(r(200));
        return $S(n, s, null, o)
    }
    ,
    At.createRoot = function(n, s) {
        if (!Ic(n))
            throw Error(r(299));
        var o = !1
          , l = ""
          , d = Ym;
        return s != null && (s.unstable_strictMode === !0 && (o = !0),
        s.identifierPrefix !== void 0 && (l = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (d = s.onRecoverableError)),
        s = Lc(n, 1, !1, null, null, o, !1, l, d),
        n[_n] = s.current,
        Ai(n.nodeType === 8 ? n.parentNode : n),
        new Mc(s)
    }
    ,
    At.findDOMNode = function(n) {
        if (n == null)
            return null;
        if (n.nodeType === 1)
            return n;
        var s = n._reactInternals;
        if (s === void 0)
            throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","),
            Error(r(268, n)));
        return n = kh(s),
        n = n === null ? null : n.stateNode,
        n
    }
    ,
    At.flushSync = function(n) {
        return Vr(n)
    }
    ,
    At.hydrate = function(n, s, o) {
        if (!qa(s))
            throw Error(r(200));
        return Ha(null, n, s, !0, o)
    }
    ,
    At.hydrateRoot = function(n, s, o) {
        if (!Ic(n))
            throw Error(r(405));
        var l = o != null && o.hydratedSources || null
          , d = !1
          , p = ""
          , v = Ym;
        if (o != null && (o.unstable_strictMode === !0 && (d = !0),
        o.identifierPrefix !== void 0 && (p = o.identifierPrefix),
        o.onRecoverableError !== void 0 && (v = o.onRecoverableError)),
        s = Qm(s, null, n, 1, o ?? null, d, !1, p, v),
        n[_n] = s.current,
        Ai(n),
        l)
            for (n = 0; n < l.length; n++)
                o = l[n],
                d = o._getVersion,
                d = d(o._source),
                s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, d] : s.mutableSourceEagerHydrationData.push(o, d);
        return new $a(s)
    }
    ,
    At.render = function(n, s, o) {
        if (!qa(s))
            throw Error(r(200));
        return Ha(null, n, s, !1, o)
    }
    ,
    At.unmountComponentAtNode = function(n) {
        if (!qa(n))
            throw Error(r(40));
        return n._reactRootContainer ? (Vr(function() {
            Ha(null, null, n, !1, function() {
                n._reactRootContainer = null,
                n[_n] = null
            })
        }),
        !0) : !1
    }
    ,
    At.unstable_batchedUpdates = Pc,
    At.unstable_renderSubtreeIntoContainer = function(n, s, o, l) {
        if (!qa(o))
            throw Error(r(200));
        if (n == null || n._reactInternals === void 0)
            throw Error(r(38));
        return Ha(n, s, o, !1, l)
    }
    ,
    At.version = "18.3.1-next-f1338f8080-20240426",
    At
}
var og;
function Hv() {
    if (og)
        return Uc.exports;
    og = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (e) {
                console.error(e)
            }
    }
    return t(),
    Uc.exports = rb(),
    Uc.exports
}
var ag;
function sb() {
    if (ag)
        return Qa;
    ag = 1;
    var t = Hv();
    return Qa.createRoot = t.createRoot,
    Qa.hydrateRoot = t.hydrateRoot,
    Qa
}
var ib = sb();
const ob = qv(ib)
  , ab = 20
  , lb = 1e6
  , Vn = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let qc = 0;
function ub() {
    return qc = (qc + 1) % Number.MAX_VALUE,
    qc.toString()
}
const Hc = new Map
  , lg = t => {
    if (Hc.has(t))
        return;
    const e = setTimeout( () => {
        Hc.delete(t),
        lo({
            type: Vn.REMOVE_TOAST,
            toastId: t
        })
    }
    , lb);
    Hc.set(t, e)
}
  , cb = (t, e) => {
    switch (e.type) {
    case Vn.ADD_TOAST:
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, ab)
        };
    case Vn.UPDATE_TOAST:
        return {
            ...t,
            toasts: t.toasts.map(r => r.id === e.toast.id ? {
                ...r,
                ...e.toast
            } : r)
        };
    case Vn.DISMISS_TOAST:
        {
            const {toastId: r} = e;
            return r ? lg(r) : t.toasts.forEach(i => {
                lg(i.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(i => i.id === r || r === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case Vn.REMOVE_TOAST:
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(r => r.id !== e.toastId)
        }
    }
}
  , il = [];
let ol = {
    toasts: []
};
function lo(t) {
    ol = cb(ol, t),
    il.forEach(e => {
        e(ol)
    }
    )
}
function db({...t}) {
    const e = ub()
      , r = a => lo({
        type: Vn.UPDATE_TOAST,
        toast: {
            ...a,
            id: e
        }
    })
      , i = () => lo({
        type: Vn.DISMISS_TOAST,
        toastId: e
    });
    return lo({
        type: Vn.ADD_TOAST,
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }),
    {
        id: e,
        dismiss: i,
        update: r
    }
}
function fb() {
    const [t,e] = D.useState(ol);
    return D.useEffect( () => (il.push(e),
    () => {
        const r = il.indexOf(e);
        r > -1 && il.splice(r, 1)
    }
    ), [t]),
    {
        ...t,
        toast: db,
        dismiss: r => lo({
            type: Vn.DISMISS_TOAST,
            toastId: r
        })
    }
}
function Wv(t) {
    var e, r, i = "";
    if (typeof t == "string" || typeof t == "number")
        i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var a = t.length;
            for (e = 0; e < a; e++)
                t[e] && (r = Wv(t[e])) && (i && (i += " "),
                i += r)
        } else
            for (r in t)
                t[r] && (i && (i += " "),
                i += r);
    return i
}
function Kv() {
    for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)
        (t = arguments[r]) && (e = Wv(t)) && (i && (i += " "),
        i += e);
    return i
}
const ug = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , cg = Kv
  , hb = (t, e) => r => {
    var i;
    if ((e == null ? void 0 : e.variants) == null)
        return cg(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: a, defaultVariants: u} = e
      , c = Object.keys(a).map(m => {
        const g = r == null ? void 0 : r[m]
          , y = u == null ? void 0 : u[m];
        if (g === null)
            return null;
        const w = ug(g) || ug(y);
        return a[m][w]
    }
    )
      , f = r && Object.entries(r).reduce( (m, g) => {
        let[y,w] = g;
        return w === void 0 || (m[y] = w),
        m
    }
    , {})
      , h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (m, g) => {
        let {class: y, className: w, ...E} = g;
        return Object.entries(E).every(b => {
            let[k,x] = b;
            return Array.isArray(x) ? x.includes({
                ...u,
                ...f
            }[k]) : {
                ...u,
                ...f
            }[k] === x
        }
        ) ? [...m, y, w] : m
    }
    , []);
    return cg(t, c, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pb = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Qv = (...t) => t.filter( (e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gb = D.forwardRef( ({color: t="currentColor", size: e=24, strokeWidth: r=2, absoluteStrokeWidth: i, className: a="", children: u, iconNode: c, ...f}, h) => D.createElement("svg", {
    ref: h,
    ...mb,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(r) * 24 / Number(e) : r,
    className: Qv("lucide", a),
    ...f
}, [...c.map( ([m,g]) => D.createElement(m, g)), ...Array.isArray(u) ? u : [u]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = (t, e) => {
    const r = D.forwardRef( ({className: i, ...a}, u) => D.createElement(gb, {
        ref: u,
        iconNode: e,
        className: Qv(`lucide-${pb(t)}`, i),
        ...a
    }));
    return r.displayName = `${t}`,
    r
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yb = [["path", {
    d: "M12 5v14",
    key: "s699le"
}], ["path", {
    d: "m19 12-7 7-7-7",
    key: "1idqje"
}]]
  , vb = en("ArrowDown", yb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wb = [["path", {
    d: "M7 7h10v10",
    key: "1tivn9"
}], ["path", {
    d: "M7 17 17 7",
    key: "1vkiza"
}]]
  , xb = en("ArrowUpRight", wb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sb = [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]
  , bb = en("Award", Sb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]
  , Eb = en("Briefcase", kb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tb = [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]
  , Cb = en("Github", Tb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _b = [["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
}], ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
}], ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
}]]
  , Pb = en("GraduationCap", _b);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rb = [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]
  , Ab = en("Linkedin", Rb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]
  , Ob = en("Mail", Nb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jb = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , Gv = en("MapPin", jb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lb = [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]
  , Db = en("Menu", Lb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mb = [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]
  , Ib = en("Phone", Mb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fb = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , Yv = en("X", Fb)
  , Vb = (t, e) => {
    const r = new Array(t.length + e.length);
    for (let i = 0; i < t.length; i++)
        r[i] = t[i];
    for (let i = 0; i < e.length; i++)
        r[t.length + i] = e[i];
    return r
}
  , Bb = (t, e) => ({
    classGroupId: t,
    validator: e
})
  , Xv = (t=new Map, e=null, r) => ({
    nextPart: t,
    validators: e,
    classGroupId: r
})
  , vl = "-"
  , dg = []
  , Ub = "arbitrary.."
  , zb = t => {
    const e = qb(t)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: i} = t;
    return {
        getClassGroupId: c => {
            if (c.startsWith("[") && c.endsWith("]"))
                return $b(c);
            const f = c.split(vl)
              , h = f[0] === "" && f.length > 1 ? 1 : 0;
            return Jv(f, h, e)
        }
        ,
        getConflictingClassGroupIds: (c, f) => {
            if (f) {
                const h = i[c]
                  , m = r[c];
                return h ? m ? Vb(m, h) : h : m || dg
            }
            return r[c] || dg
        }
    }
}
  , Jv = (t, e, r) => {
    if (t.length - e === 0)
        return r.classGroupId;
    const a = t[e]
      , u = r.nextPart.get(a);
    if (u) {
        const m = Jv(t, e + 1, u);
        if (m)
            return m
    }
    const c = r.validators;
    if (c === null)
        return;
    const f = e === 0 ? t.join(vl) : t.slice(e).join(vl)
      , h = c.length;
    for (let m = 0; m < h; m++) {
        const g = c[m];
        if (g.validator(f))
            return g.classGroupId
    }
}
  , $b = t => t.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const e = t.slice(1, -1)
      , r = e.indexOf(":")
      , i = e.slice(0, r);
    return i ? Ub + i : void 0
}
)()
  , qb = t => {
    const {theme: e, classGroups: r} = t;
    return Hb(r, e)
}
  , Hb = (t, e) => {
    const r = Xv();
    for (const i in t) {
        const a = t[i];
        af(a, r, i, e)
    }
    return r
}
  , af = (t, e, r, i) => {
    const a = t.length;
    for (let u = 0; u < a; u++) {
        const c = t[u];
        Wb(c, e, r, i)
    }
}
  , Wb = (t, e, r, i) => {
    if (typeof t == "string") {
        Kb(t, e, r);
        return
    }
    if (typeof t == "function") {
        Qb(t, e, r, i);
        return
    }
    Gb(t, e, r, i)
}
  , Kb = (t, e, r) => {
    const i = t === "" ? e : Zv(e, t);
    i.classGroupId = r
}
  , Qb = (t, e, r, i) => {
    if (Yb(t)) {
        af(t(i), e, r, i);
        return
    }
    e.validators === null && (e.validators = []),
    e.validators.push(Bb(r, t))
}
  , Gb = (t, e, r, i) => {
    const a = Object.entries(t)
      , u = a.length;
    for (let c = 0; c < u; c++) {
        const [f,h] = a[c];
        af(h, Zv(e, f), r, i)
    }
}
  , Zv = (t, e) => {
    let r = t;
    const i = e.split(vl)
      , a = i.length;
    for (let u = 0; u < a; u++) {
        const c = i[u];
        let f = r.nextPart.get(c);
        f || (f = Xv(),
        r.nextPart.set(c, f)),
        r = f
    }
    return r
}
  , Yb = t => "isThemeGetter"in t && t.isThemeGetter === !0
  , Xb = t => {
    if (t < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , r = Object.create(null)
      , i = Object.create(null);
    const a = (u, c) => {
        r[u] = c,
        e++,
        e > t && (e = 0,
        i = r,
        r = Object.create(null))
    }
    ;
    return {
        get(u) {
            let c = r[u];
            if (c !== void 0)
                return c;
            if ((c = i[u]) !== void 0)
                return a(u, c),
                c
        },
        set(u, c) {
            u in r ? r[u] = c : a(u, c)
        }
    }
}
  , md = "!"
  , fg = ":"
  , Jb = []
  , hg = (t, e, r, i, a) => ({
    modifiers: t,
    hasImportantModifier: e,
    baseClassName: r,
    maybePostfixModifierPosition: i,
    isExternal: a
})
  , Zb = t => {
    const {prefix: e, experimentalParseClassName: r} = t;
    let i = a => {
        const u = [];
        let c = 0, f = 0, h = 0, m;
        const g = a.length;
        for (let k = 0; k < g; k++) {
            const x = a[k];
            if (c === 0 && f === 0) {
                if (x === fg) {
                    u.push(a.slice(h, k)),
                    h = k + 1;
                    continue
                }
                if (x === "/") {
                    m = k;
                    continue
                }
            }
            x === "[" ? c++ : x === "]" ? c-- : x === "(" ? f++ : x === ")" && f--
        }
        const y = u.length === 0 ? a : a.slice(h);
        let w = y
          , E = !1;
        y.endsWith(md) ? (w = y.slice(0, -1),
        E = !0) : y.startsWith(md) && (w = y.slice(1),
        E = !0);
        const b = m && m > h ? m - h : void 0;
        return hg(u, E, w, b)
    }
    ;
    if (e) {
        const a = e + fg
          , u = i;
        i = c => c.startsWith(a) ? u(c.slice(a.length)) : hg(Jb, !1, c, void 0, !0)
    }
    if (r) {
        const a = i;
        i = u => r({
            className: u,
            parseClassName: a
        })
    }
    return i
}
  , ek = t => {
    const e = new Map;
    return t.orderSensitiveModifiers.forEach( (r, i) => {
        e.set(r, 1e6 + i)
    }
    ),
    r => {
        const i = [];
        let a = [];
        for (let u = 0; u < r.length; u++) {
            const c = r[u]
              , f = c[0] === "["
              , h = e.has(c);
            f || h ? (a.length > 0 && (a.sort(),
            i.push(...a),
            a = []),
            i.push(c)) : a.push(c)
        }
        return a.length > 0 && (a.sort(),
        i.push(...a)),
        i
    }
}
  , tk = t => ({
    cache: Xb(t.cacheSize),
    parseClassName: Zb(t),
    sortModifiers: ek(t),
    ...zb(t)
})
  , nk = /\s+/
  , rk = (t, e) => {
    const {parseClassName: r, getClassGroupId: i, getConflictingClassGroupIds: a, sortModifiers: u} = e
      , c = []
      , f = t.trim().split(nk);
    let h = "";
    for (let m = f.length - 1; m >= 0; m -= 1) {
        const g = f[m]
          , {isExternal: y, modifiers: w, hasImportantModifier: E, baseClassName: b, maybePostfixModifierPosition: k} = r(g);
        if (y) {
            h = g + (h.length > 0 ? " " + h : h);
            continue
        }
        let x = !!k
          , R = i(x ? b.substring(0, k) : b);
        if (!R) {
            if (!x) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            if (R = i(b),
            !R) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            x = !1
        }
        const V = w.length === 0 ? "" : w.length === 1 ? w[0] : u(w).join(":")
          , L = E ? V + md : V
          , j = L + R;
        if (c.indexOf(j) > -1)
            continue;
        c.push(j);
        const B = a(R, x);
        for (let K = 0; K < B.length; ++K) {
            const G = B[K];
            c.push(L + G)
        }
        h = g + (h.length > 0 ? " " + h : h)
    }
    return h
}
  , sk = (...t) => {
    let e = 0, r, i, a = "";
    for (; e < t.length; )
        (r = t[e++]) && (i = e0(r)) && (a && (a += " "),
        a += i);
    return a
}
  , e0 = t => {
    if (typeof t == "string")
        return t;
    let e, r = "";
    for (let i = 0; i < t.length; i++)
        t[i] && (e = e0(t[i])) && (r && (r += " "),
        r += e);
    return r
}
  , ik = (t, ...e) => {
    let r, i, a, u;
    const c = h => {
        const m = e.reduce( (g, y) => y(g), t());
        return r = tk(m),
        i = r.cache.get,
        a = r.cache.set,
        u = f,
        f(h)
    }
      , f = h => {
        const m = i(h);
        if (m)
            return m;
        const g = rk(h, r);
        return a(h, g),
        g
    }
    ;
    return u = c,
    (...h) => u(sk(...h))
}
  , ok = []
  , rt = t => {
    const e = r => r[t] || ok;
    return e.isThemeGetter = !0,
    e
}
  , t0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , n0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , ak = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , lk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , uk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , ck = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , dk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , fk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , cr = t => ak.test(t)
  , xe = t => !!t && !Number.isNaN(Number(t))
  , dr = t => !!t && Number.isInteger(Number(t))
  , Wc = t => t.endsWith("%") && xe(t.slice(0, -1))
  , Dn = t => lk.test(t)
  , r0 = () => !0
  , hk = t => uk.test(t) && !ck.test(t)
  , lf = () => !1
  , pk = t => dk.test(t)
  , mk = t => fk.test(t)
  , gk = t => !te(t) && !ne(t)
  , yk = t => _r(t, o0, lf)
  , te = t => t0.test(t)
  , $r = t => _r(t, a0, hk)
  , pg = t => _r(t, Tk, xe)
  , vk = t => _r(t, u0, r0)
  , wk = t => _r(t, l0, lf)
  , mg = t => _r(t, s0, lf)
  , xk = t => _r(t, i0, mk)
  , Ga = t => _r(t, c0, pk)
  , ne = t => n0.test(t)
  , Gi = t => us(t, a0)
  , Sk = t => us(t, l0)
  , gg = t => us(t, s0)
  , bk = t => us(t, o0)
  , kk = t => us(t, i0)
  , Ya = t => us(t, c0, !0)
  , Ek = t => us(t, u0, !0)
  , _r = (t, e, r) => {
    const i = t0.exec(t);
    return i ? i[1] ? e(i[1]) : r(i[2]) : !1
}
  , us = (t, e, r=!1) => {
    const i = n0.exec(t);
    return i ? i[1] ? e(i[1]) : r : !1
}
  , s0 = t => t === "position" || t === "percentage"
  , i0 = t => t === "image" || t === "url"
  , o0 = t => t === "length" || t === "size" || t === "bg-size"
  , a0 = t => t === "length"
  , Tk = t => t === "number"
  , l0 = t => t === "family-name"
  , u0 = t => t === "number" || t === "weight"
  , c0 = t => t === "shadow"
  , Ck = () => {
    const t = rt("color")
      , e = rt("font")
      , r = rt("text")
      , i = rt("font-weight")
      , a = rt("tracking")
      , u = rt("leading")
      , c = rt("breakpoint")
      , f = rt("container")
      , h = rt("spacing")
      , m = rt("radius")
      , g = rt("shadow")
      , y = rt("inset-shadow")
      , w = rt("text-shadow")
      , E = rt("drop-shadow")
      , b = rt("blur")
      , k = rt("perspective")
      , x = rt("aspect")
      , R = rt("ease")
      , V = rt("animate")
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , j = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , B = () => [...j(), ne, te]
      , K = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , G = () => ["auto", "contain", "none"]
      , M = () => [ne, te, h]
      , Z = () => [cr, "full", "auto", ...M()]
      , fe = () => [dr, "none", "subgrid", ne, te]
      , Re = () => ["auto", {
        span: ["full", dr, ne, te]
    }, dr, ne, te]
      , Le = () => [dr, "auto", ne, te]
      , De = () => ["auto", "min", "max", "fr", ne, te]
      , Ae = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , Ie = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , we = () => ["auto", ...M()]
      , de = () => [cr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...M()]
      , W = () => [cr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...M()]
      , se = () => [cr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...M()]
      , U = () => [t, ne, te]
      , A = () => [...j(), gg, mg, {
        position: [ne, te]
    }]
      , z = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , ge = () => ["auto", "cover", "contain", bk, yk, {
        size: [ne, te]
    }]
      , ye = () => [Wc, Gi, $r]
      , le = () => ["", "none", "full", m, ne, te]
      , he = () => ["", xe, Gi, $r]
      , Ne = () => ["solid", "dashed", "dotted", "double"]
      , _e = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , ve = () => [xe, Wc, gg, mg]
      , ht = () => ["", "none", b, ne, te]
      , Cn = () => ["none", xe, ne, te]
      , Rr = () => ["none", xe, ne, te]
      , $n = () => [xe, ne, te]
      , qn = () => [cr, "full", ...M()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Dn],
            breakpoint: [Dn],
            color: [r0],
            container: [Dn],
            "drop-shadow": [Dn],
            ease: ["in", "out", "in-out"],
            font: [gk],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Dn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Dn],
            shadow: [Dn],
            spacing: ["px", xe],
            text: [Dn],
            "text-shadow": [Dn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", cr, te, ne, x]
            }],
            container: ["container"],
            columns: [{
                columns: [xe, te, ne, f]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: B()
            }],
            overflow: [{
                overflow: K()
            }],
            "overflow-x": [{
                "overflow-x": K()
            }],
            "overflow-y": [{
                "overflow-y": K()
            }],
            overscroll: [{
                overscroll: G()
            }],
            "overscroll-x": [{
                "overscroll-x": G()
            }],
            "overscroll-y": [{
                "overscroll-y": G()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: Z()
            }],
            "inset-x": [{
                "inset-x": Z()
            }],
            "inset-y": [{
                "inset-y": Z()
            }],
            start: [{
                "inset-s": Z(),
                start: Z()
            }],
            end: [{
                "inset-e": Z(),
                end: Z()
            }],
            "inset-bs": [{
                "inset-bs": Z()
            }],
            "inset-be": [{
                "inset-be": Z()
            }],
            top: [{
                top: Z()
            }],
            right: [{
                right: Z()
            }],
            bottom: [{
                bottom: Z()
            }],
            left: [{
                left: Z()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [dr, "auto", ne, te]
            }],
            basis: [{
                basis: [cr, "full", "auto", f, ...M()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [xe, cr, "auto", "initial", "none", te]
            }],
            grow: [{
                grow: ["", xe, ne, te]
            }],
            shrink: [{
                shrink: ["", xe, ne, te]
            }],
            order: [{
                order: [dr, "first", "last", "none", ne, te]
            }],
            "grid-cols": [{
                "grid-cols": fe()
            }],
            "col-start-end": [{
                col: Re()
            }],
            "col-start": [{
                "col-start": Le()
            }],
            "col-end": [{
                "col-end": Le()
            }],
            "grid-rows": [{
                "grid-rows": fe()
            }],
            "row-start-end": [{
                row: Re()
            }],
            "row-start": [{
                "row-start": Le()
            }],
            "row-end": [{
                "row-end": Le()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": De()
            }],
            "auto-rows": [{
                "auto-rows": De()
            }],
            gap: [{
                gap: M()
            }],
            "gap-x": [{
                "gap-x": M()
            }],
            "gap-y": [{
                "gap-y": M()
            }],
            "justify-content": [{
                justify: [...Ae(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...Ie(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...Ie()]
            }],
            "align-content": [{
                content: ["normal", ...Ae()]
            }],
            "align-items": [{
                items: [...Ie(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...Ie(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Ae()
            }],
            "place-items": [{
                "place-items": [...Ie(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...Ie()]
            }],
            p: [{
                p: M()
            }],
            px: [{
                px: M()
            }],
            py: [{
                py: M()
            }],
            ps: [{
                ps: M()
            }],
            pe: [{
                pe: M()
            }],
            pbs: [{
                pbs: M()
            }],
            pbe: [{
                pbe: M()
            }],
            pt: [{
                pt: M()
            }],
            pr: [{
                pr: M()
            }],
            pb: [{
                pb: M()
            }],
            pl: [{
                pl: M()
            }],
            m: [{
                m: we()
            }],
            mx: [{
                mx: we()
            }],
            my: [{
                my: we()
            }],
            ms: [{
                ms: we()
            }],
            me: [{
                me: we()
            }],
            mbs: [{
                mbs: we()
            }],
            mbe: [{
                mbe: we()
            }],
            mt: [{
                mt: we()
            }],
            mr: [{
                mr: we()
            }],
            mb: [{
                mb: we()
            }],
            ml: [{
                ml: we()
            }],
            "space-x": [{
                "space-x": M()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": M()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: de()
            }],
            "inline-size": [{
                inline: ["auto", ...W()]
            }],
            "min-inline-size": [{
                "min-inline": ["auto", ...W()]
            }],
            "max-inline-size": [{
                "max-inline": ["none", ...W()]
            }],
            "block-size": [{
                block: ["auto", ...se()]
            }],
            "min-block-size": [{
                "min-block": ["auto", ...se()]
            }],
            "max-block-size": [{
                "max-block": ["none", ...se()]
            }],
            w: [{
                w: [f, "screen", ...de()]
            }],
            "min-w": [{
                "min-w": [f, "screen", "none", ...de()]
            }],
            "max-w": [{
                "max-w": [f, "screen", "none", "prose", {
                    screen: [c]
                }, ...de()]
            }],
            h: [{
                h: ["screen", "lh", ...de()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...de()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...de()]
            }],
            "font-size": [{
                text: ["base", r, Gi, $r]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [i, Ek, vk]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Wc, te]
            }],
            "font-family": [{
                font: [Sk, wk, e]
            }],
            "font-features": [{
                "font-features": [te]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [a, ne, te]
            }],
            "line-clamp": [{
                "line-clamp": [xe, "none", ne, pg]
            }],
            leading: [{
                leading: [u, ...M()]
            }],
            "list-image": [{
                "list-image": ["none", ne, te]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", ne, te]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: U()
            }],
            "text-color": [{
                text: U()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...Ne(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [xe, "from-font", "auto", ne, $r]
            }],
            "text-decoration-color": [{
                decoration: U()
            }],
            "underline-offset": [{
                "underline-offset": [xe, "auto", ne, te]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: M()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne, te]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", ne, te]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: A()
            }],
            "bg-repeat": [{
                bg: z()
            }],
            "bg-size": [{
                bg: ge()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, dr, ne, te],
                    radial: ["", ne, te],
                    conic: [dr, ne, te]
                }, kk, xk]
            }],
            "bg-color": [{
                bg: U()
            }],
            "gradient-from-pos": [{
                from: ye()
            }],
            "gradient-via-pos": [{
                via: ye()
            }],
            "gradient-to-pos": [{
                to: ye()
            }],
            "gradient-from": [{
                from: U()
            }],
            "gradient-via": [{
                via: U()
            }],
            "gradient-to": [{
                to: U()
            }],
            rounded: [{
                rounded: le()
            }],
            "rounded-s": [{
                "rounded-s": le()
            }],
            "rounded-e": [{
                "rounded-e": le()
            }],
            "rounded-t": [{
                "rounded-t": le()
            }],
            "rounded-r": [{
                "rounded-r": le()
            }],
            "rounded-b": [{
                "rounded-b": le()
            }],
            "rounded-l": [{
                "rounded-l": le()
            }],
            "rounded-ss": [{
                "rounded-ss": le()
            }],
            "rounded-se": [{
                "rounded-se": le()
            }],
            "rounded-ee": [{
                "rounded-ee": le()
            }],
            "rounded-es": [{
                "rounded-es": le()
            }],
            "rounded-tl": [{
                "rounded-tl": le()
            }],
            "rounded-tr": [{
                "rounded-tr": le()
            }],
            "rounded-br": [{
                "rounded-br": le()
            }],
            "rounded-bl": [{
                "rounded-bl": le()
            }],
            "border-w": [{
                border: he()
            }],
            "border-w-x": [{
                "border-x": he()
            }],
            "border-w-y": [{
                "border-y": he()
            }],
            "border-w-s": [{
                "border-s": he()
            }],
            "border-w-e": [{
                "border-e": he()
            }],
            "border-w-bs": [{
                "border-bs": he()
            }],
            "border-w-be": [{
                "border-be": he()
            }],
            "border-w-t": [{
                "border-t": he()
            }],
            "border-w-r": [{
                "border-r": he()
            }],
            "border-w-b": [{
                "border-b": he()
            }],
            "border-w-l": [{
                "border-l": he()
            }],
            "divide-x": [{
                "divide-x": he()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": he()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...Ne(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...Ne(), "hidden", "none"]
            }],
            "border-color": [{
                border: U()
            }],
            "border-color-x": [{
                "border-x": U()
            }],
            "border-color-y": [{
                "border-y": U()
            }],
            "border-color-s": [{
                "border-s": U()
            }],
            "border-color-e": [{
                "border-e": U()
            }],
            "border-color-bs": [{
                "border-bs": U()
            }],
            "border-color-be": [{
                "border-be": U()
            }],
            "border-color-t": [{
                "border-t": U()
            }],
            "border-color-r": [{
                "border-r": U()
            }],
            "border-color-b": [{
                "border-b": U()
            }],
            "border-color-l": [{
                "border-l": U()
            }],
            "divide-color": [{
                divide: U()
            }],
            "outline-style": [{
                outline: [...Ne(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [xe, ne, te]
            }],
            "outline-w": [{
                outline: ["", xe, Gi, $r]
            }],
            "outline-color": [{
                outline: U()
            }],
            shadow: [{
                shadow: ["", "none", g, Ya, Ga]
            }],
            "shadow-color": [{
                shadow: U()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", y, Ya, Ga]
            }],
            "inset-shadow-color": [{
                "inset-shadow": U()
            }],
            "ring-w": [{
                ring: he()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: U()
            }],
            "ring-offset-w": [{
                "ring-offset": [xe, $r]
            }],
            "ring-offset-color": [{
                "ring-offset": U()
            }],
            "inset-ring-w": [{
                "inset-ring": he()
            }],
            "inset-ring-color": [{
                "inset-ring": U()
            }],
            "text-shadow": [{
                "text-shadow": ["none", w, Ya, Ga]
            }],
            "text-shadow-color": [{
                "text-shadow": U()
            }],
            opacity: [{
                opacity: [xe, ne, te]
            }],
            "mix-blend": [{
                "mix-blend": [..._e(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": _e()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [xe]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": ve()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": ve()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": U()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": U()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": ve()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": ve()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": U()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": U()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": ve()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": ve()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": U()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": U()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": ve()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": ve()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": U()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": U()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": ve()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": ve()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": U()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": U()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": ve()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": ve()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": U()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": U()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": ve()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": ve()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": U()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": U()
            }],
            "mask-image-radial": [{
                "mask-radial": [ne, te]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": ve()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": ve()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": U()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": U()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": j()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [xe]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": ve()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": ve()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": U()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": U()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: A()
            }],
            "mask-repeat": [{
                mask: z()
            }],
            "mask-size": [{
                mask: ge()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", ne, te]
            }],
            filter: [{
                filter: ["", "none", ne, te]
            }],
            blur: [{
                blur: ht()
            }],
            brightness: [{
                brightness: [xe, ne, te]
            }],
            contrast: [{
                contrast: [xe, ne, te]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", E, Ya, Ga]
            }],
            "drop-shadow-color": [{
                "drop-shadow": U()
            }],
            grayscale: [{
                grayscale: ["", xe, ne, te]
            }],
            "hue-rotate": [{
                "hue-rotate": [xe, ne, te]
            }],
            invert: [{
                invert: ["", xe, ne, te]
            }],
            saturate: [{
                saturate: [xe, ne, te]
            }],
            sepia: [{
                sepia: ["", xe, ne, te]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", ne, te]
            }],
            "backdrop-blur": [{
                "backdrop-blur": ht()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [xe, ne, te]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [xe, ne, te]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", xe, ne, te]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [xe, ne, te]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", xe, ne, te]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [xe, ne, te]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [xe, ne, te]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", xe, ne, te]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": M()
            }],
            "border-spacing-x": [{
                "border-spacing-x": M()
            }],
            "border-spacing-y": [{
                "border-spacing-y": M()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ne, te]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [xe, "initial", ne, te]
            }],
            ease: [{
                ease: ["linear", "initial", R, ne, te]
            }],
            delay: [{
                delay: [xe, ne, te]
            }],
            animate: [{
                animate: ["none", V, ne, te]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [k, ne, te]
            }],
            "perspective-origin": [{
                "perspective-origin": B()
            }],
            rotate: [{
                rotate: Cn()
            }],
            "rotate-x": [{
                "rotate-x": Cn()
            }],
            "rotate-y": [{
                "rotate-y": Cn()
            }],
            "rotate-z": [{
                "rotate-z": Cn()
            }],
            scale: [{
                scale: Rr()
            }],
            "scale-x": [{
                "scale-x": Rr()
            }],
            "scale-y": [{
                "scale-y": Rr()
            }],
            "scale-z": [{
                "scale-z": Rr()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: $n()
            }],
            "skew-x": [{
                "skew-x": $n()
            }],
            "skew-y": [{
                "skew-y": $n()
            }],
            transform: [{
                transform: [ne, te, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: B()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: qn()
            }],
            "translate-x": [{
                "translate-x": qn()
            }],
            "translate-y": [{
                "translate-y": qn()
            }],
            "translate-z": [{
                "translate-z": qn()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: U()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: U()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne, te]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": M()
            }],
            "scroll-mx": [{
                "scroll-mx": M()
            }],
            "scroll-my": [{
                "scroll-my": M()
            }],
            "scroll-ms": [{
                "scroll-ms": M()
            }],
            "scroll-me": [{
                "scroll-me": M()
            }],
            "scroll-mbs": [{
                "scroll-mbs": M()
            }],
            "scroll-mbe": [{
                "scroll-mbe": M()
            }],
            "scroll-mt": [{
                "scroll-mt": M()
            }],
            "scroll-mr": [{
                "scroll-mr": M()
            }],
            "scroll-mb": [{
                "scroll-mb": M()
            }],
            "scroll-ml": [{
                "scroll-ml": M()
            }],
            "scroll-p": [{
                "scroll-p": M()
            }],
            "scroll-px": [{
                "scroll-px": M()
            }],
            "scroll-py": [{
                "scroll-py": M()
            }],
            "scroll-ps": [{
                "scroll-ps": M()
            }],
            "scroll-pe": [{
                "scroll-pe": M()
            }],
            "scroll-pbs": [{
                "scroll-pbs": M()
            }],
            "scroll-pbe": [{
                "scroll-pbe": M()
            }],
            "scroll-pt": [{
                "scroll-pt": M()
            }],
            "scroll-pr": [{
                "scroll-pr": M()
            }],
            "scroll-pb": [{
                "scroll-pb": M()
            }],
            "scroll-pl": [{
                "scroll-pl": M()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", ne, te]
            }],
            fill: [{
                fill: ["none", ...U()]
            }],
            "stroke-w": [{
                stroke: [xe, Gi, $r, pg]
            }],
            stroke: [{
                stroke: ["none", ...U()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , _k = ik(Ck);
function _o(...t) {
    return _k(Kv(t))
}
const d0 = D.forwardRef( ({...t}, e) => S.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
d0.displayName = "ToastProvider";
const f0 = D.forwardRef( ({...t}, e) => S.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
f0.displayName = "ToastViewport";
const Pk = hb("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , h0 = D.forwardRef( ({className: t, variant: e, ...r}, i) => S.jsx("div", {
    ref: i,
    className: _o(Pk({
        variant: e
    }), t),
    ...r
}));
h0.displayName = "Toast";
const Rk = D.forwardRef( ({className: t, ...e}, r) => S.jsx("div", {
    ref: r,
    className: _o("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
Rk.displayName = "ToastAction";
const p0 = D.forwardRef( ({className: t, ...e}, r) => S.jsx("button", {
    ref: r,
    className: _o("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: S.jsx(Yv, {
        className: "h-4 w-4"
    })
}));
p0.displayName = "ToastClose";
const m0 = D.forwardRef( ({className: t, ...e}, r) => S.jsx("div", {
    ref: r,
    className: _o("text-sm font-semibold", t),
    ...e
}));
m0.displayName = "ToastTitle";
const g0 = D.forwardRef( ({className: t, ...e}, r) => S.jsx("div", {
    ref: r,
    className: _o("text-sm opacity-90", t),
    ...e
}));
g0.displayName = "ToastDescription";
function Ak() {
    const {toasts: t} = fb();
    return S.jsxs(d0, {
        children: [t.map(function({id: e, title: r, description: i, action: a, ...u}) {
            return S.jsxs(h0, {
                ...u,
                children: [S.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && S.jsx(m0, {
                        children: r
                    }), i && S.jsx(g0, {
                        children: i
                    })]
                }), a, S.jsx(p0, {})]
            }, e)
        }), S.jsx(f0, {})]
    })
}
var Po = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        () => {
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, Nk = {
    setTimeout: (t, e) => setTimeout(t, e),
    clearTimeout: t => clearTimeout(t),
    setInterval: (t, e) => setInterval(t, e),
    clearInterval: t => clearInterval(t)
}, pr, sf, Lv, Ok = (Lv = class {
    constructor() {
        ue(this, pr, Nk);
        ue(this, sf, !1)
    }
    setTimeoutProvider(t) {
        X(this, pr, t)
    }
    setTimeout(t, e) {
        return _(this, pr).setTimeout(t, e)
    }
    clearTimeout(t) {
        _(this, pr).clearTimeout(t)
    }
    setInterval(t, e) {
        return _(this, pr).setInterval(t, e)
    }
    clearInterval(t) {
        _(this, pr).clearInterval(t)
    }
}
,
pr = new WeakMap,
sf = new WeakMap,
Lv), Kr = new Ok;
function jk(t) {
    setTimeout(t, 0)
}
var as = typeof window > "u" || "Deno"in globalThis;
function Ot() {}
function Lk(t, e) {
    return typeof t == "function" ? t(e) : t
}
function gd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function y0(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function kr(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Jt(t, e) {
    return typeof t == "function" ? t(e) : t
}
function yg(t, e) {
    const {type: r="all", exact: i, fetchStatus: a, predicate: u, queryKey: c, stale: f} = t;
    if (c) {
        if (i) {
            if (e.queryHash !== uf(c, e.options))
                return !1
        } else if (!go(e.queryKey, c))
            return !1
    }
    if (r !== "all") {
        const h = e.isActive();
        if (r === "active" && !h || r === "inactive" && h)
            return !1
    }
    return !(typeof f == "boolean" && e.isStale() !== f || a && a !== e.state.fetchStatus || u && !u(e))
}
function vg(t, e) {
    const {exact: r, status: i, predicate: a, mutationKey: u} = t;
    if (u) {
        if (!e.options.mutationKey)
            return !1;
        if (r) {
            if (mo(e.options.mutationKey) !== mo(u))
                return !1
        } else if (!go(e.options.mutationKey, u))
            return !1
    }
    return !(i && e.state.status !== i || a && !a(e))
}
function uf(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || mo)(t)
}
function mo(t) {
    return JSON.stringify(t, (e, r) => vd(r) ? Object.keys(r).sort().reduce( (i, a) => (i[a] = r[a],
    i), {}) : r)
}
function go(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => go(t[r], e[r])) : !1
}
var Dk = Object.prototype.hasOwnProperty;
function v0(t, e, r=0) {
    if (t === e)
        return t;
    if (r > 500)
        return e;
    const i = wg(t) && wg(e);
    if (!i && !(vd(t) && vd(e)))
        return e;
    const u = (i ? t : Object.keys(t)).length
      , c = i ? e : Object.keys(e)
      , f = c.length
      , h = i ? new Array(f) : {};
    let m = 0;
    for (let g = 0; g < f; g++) {
        const y = i ? g : c[g]
          , w = t[y]
          , E = e[y];
        if (w === E) {
            h[y] = w,
            (i ? g < u : Dk.call(t, y)) && m++;
            continue
        }
        if (w === null || E === null || typeof w != "object" || typeof E != "object") {
            h[y] = E;
            continue
        }
        const b = v0(w, E, r + 1);
        h[y] = b,
        b === w && m++
    }
    return u === f && m === u ? t : h
}
function yd(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const r in t)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function wg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function vd(t) {
    if (!xg(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const r = e.prototype;
    return !(!xg(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function xg(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function Mk(t) {
    return new Promise(e => {
        Kr.setTimeout(e, t)
    }
    )
}
function wd(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? v0(t, e) : e
}
function Ik(t, e, r=0) {
    const i = [...t, e];
    return r && i.length > r ? i.slice(1) : i
}
function Fk(t, e, r=0) {
    const i = [e, ...t];
    return r && i.length > r ? i.slice(0, -1) : i
}
var cf = Symbol();
function w0(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === cf ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
function x0(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
function Vk(t, e, r) {
    let i = !1, a;
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: () => (a ?? (a = e()),
        i || (i = !0,
        a.aborted ? r() : a.addEventListener("abort", r, {
            once: !0
        })),
        a)
    }),
    t
}
var Yr, mr, $s, Dv, Bk = (Dv = class extends Po {
    constructor() {
        super();
        ue(this, Yr);
        ue(this, mr);
        ue(this, $s);
        X(this, $s, e => {
            if (!as && window.addEventListener) {
                const r = () => e();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        _(this, mr) || this.setEventListener(_(this, $s))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = _(this, mr)) == null || e.call(this),
        X(this, mr, void 0))
    }
    setEventListener(e) {
        var r;
        X(this, $s, e),
        (r = _(this, mr)) == null || r.call(this),
        X(this, mr, e(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(e) {
        _(this, Yr) !== e && (X(this, Yr, e),
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(r => {
            r(e)
        }
        )
    }
    isFocused() {
        var e;
        return typeof _(this, Yr) == "boolean" ? _(this, Yr) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
    }
}
,
Yr = new WeakMap,
mr = new WeakMap,
$s = new WeakMap,
Dv), df = new Bk;
function xd() {
    let t, e;
    const r = new Promise( (a, u) => {
        t = a,
        e = u
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function i(a) {
        Object.assign(r, a),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }),
        t(a)
    }
    ,
    r.reject = a => {
        i({
            status: "rejected",
            reason: a
        }),
        e(a)
    }
    ,
    r
}
var Uk = jk;
function zk() {
    let t = []
      , e = 0
      , r = f => {
        f()
    }
      , i = f => {
        f()
    }
      , a = Uk;
    const u = f => {
        e ? t.push(f) : a( () => {
            r(f)
        }
        )
    }
      , c = () => {
        const f = t;
        t = [],
        f.length && a( () => {
            i( () => {
                f.forEach(h => {
                    r(h)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: f => {
            let h;
            e++;
            try {
                h = f()
            } finally {
                e--,
                e || c()
            }
            return h
        }
        ,
        batchCalls: f => (...h) => {
            u( () => {
                f(...h)
            }
            )
        }
        ,
        schedule: u,
        setNotifyFunction: f => {
            r = f
        }
        ,
        setBatchNotifyFunction: f => {
            i = f
        }
        ,
        setScheduler: f => {
            a = f
        }
    }
}
var ft = zk(), qs, gr, Hs, Mv, $k = (Mv = class extends Po {
    constructor() {
        super();
        ue(this, qs, !0);
        ue(this, gr);
        ue(this, Hs);
        X(this, Hs, e => {
            if (!as && window.addEventListener) {
                const r = () => e(!0)
                  , i = () => e(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        _(this, gr) || this.setEventListener(_(this, Hs))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = _(this, gr)) == null || e.call(this),
        X(this, gr, void 0))
    }
    setEventListener(e) {
        var r;
        X(this, Hs, e),
        (r = _(this, gr)) == null || r.call(this),
        X(this, gr, e(this.setOnline.bind(this)))
    }
    setOnline(e) {
        _(this, qs) !== e && (X(this, qs, e),
        this.listeners.forEach(i => {
            i(e)
        }
        ))
    }
    isOnline() {
        return _(this, qs)
    }
}
,
qs = new WeakMap,
gr = new WeakMap,
Hs = new WeakMap,
Mv), wl = new $k;
function qk(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function S0(t) {
    return (t ?? "online") === "online" ? wl.isOnline() : !0
}
var Sd = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
;
function b0(t) {
    let e = !1, r = 0, i;
    const a = xd()
      , u = () => a.status !== "pending"
      , c = k => {
        var x;
        if (!u()) {
            const R = new Sd(k);
            w(R),
            (x = t.onCancel) == null || x.call(t, R)
        }
    }
      , f = () => {
        e = !0
    }
      , h = () => {
        e = !1
    }
      , m = () => df.isFocused() && (t.networkMode === "always" || wl.isOnline()) && t.canRun()
      , g = () => S0(t.networkMode) && t.canRun()
      , y = k => {
        u() || (i == null || i(),
        a.resolve(k))
    }
      , w = k => {
        u() || (i == null || i(),
        a.reject(k))
    }
      , E = () => new Promise(k => {
        var x;
        i = R => {
            (u() || m()) && k(R)
        }
        ,
        (x = t.onPause) == null || x.call(t)
    }
    ).then( () => {
        var k;
        i = void 0,
        u() || (k = t.onContinue) == null || k.call(t)
    }
    )
      , b = () => {
        if (u())
            return;
        let k;
        const x = r === 0 ? t.initialPromise : void 0;
        try {
            k = x ?? t.fn()
        } catch (R) {
            k = Promise.reject(R)
        }
        Promise.resolve(k).then(y).catch(R => {
            var K;
            if (u())
                return;
            const V = t.retry ?? (as ? 0 : 3)
              , L = t.retryDelay ?? qk
              , j = typeof L == "function" ? L(r, R) : L
              , B = V === !0 || typeof V == "number" && r < V || typeof V == "function" && V(r, R);
            if (e || !B) {
                w(R);
                return
            }
            r++,
            (K = t.onFail) == null || K.call(t, r, R),
            Mk(j).then( () => m() ? void 0 : E()).then( () => {
                e ? w(R) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: a,
        status: () => a.status,
        cancel: c,
        continue: () => (i == null || i(),
        a),
        cancelRetry: f,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? b() : E().then(b),
        a)
    }
}
var Xr, Iv, k0 = (Iv = class {
    constructor() {
        ue(this, Xr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        gd(this.gcTime) && X(this, Xr, Kr.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (as ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        _(this, Xr) && (Kr.clearTimeout(_(this, Xr)),
        X(this, Xr, void 0))
    }
}
,
Xr = new WeakMap,
Iv), Jr, Ws, Xt, Zr, at, bo, es, cn, Mn, Fv, Hk = (Fv = class extends k0 {
    constructor(e) {
        super();
        ue(this, cn);
        ue(this, Jr);
        ue(this, Ws);
        ue(this, Xt);
        ue(this, Zr);
        ue(this, at);
        ue(this, bo);
        ue(this, es);
        X(this, es, !1),
        X(this, bo, e.defaultOptions),
        this.setOptions(e.options),
        this.observers = [],
        X(this, Zr, e.client),
        X(this, Xt, _(this, Zr).getQueryCache()),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        X(this, Jr, bg(this.options)),
        this.state = e.state ?? _(this, Jr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var e;
        return (e = _(this, at)) == null ? void 0 : e.promise
    }
    setOptions(e) {
        if (this.options = {
            ..._(this, bo),
            ...e
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const r = bg(this.options);
            r.data !== void 0 && (this.setState(Sg(r.data, r.dataUpdatedAt)),
            X(this, Jr, r))
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && _(this, Xt).remove(this)
    }
    setData(e, r) {
        const i = wd(this.state.data, e, this.options);
        return ke(this, cn, Mn).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        i
    }
    setState(e, r) {
        ke(this, cn, Mn).call(this, {
            type: "setState",
            state: e,
            setStateOptions: r
        })
    }
    cancel(e) {
        var i, a;
        const r = (i = _(this, at)) == null ? void 0 : i.promise;
        return (a = _(this, at)) == null || a.cancel(e),
        r ? r.then(Ot).catch(Ot) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(_(this, Jr))
    }
    isActive() {
        return this.observers.some(e => Jt(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === cf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => kr(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !y0(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var r;
        const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = _(this, at)) == null || r.continue()
    }
    onOnline() {
        var r;
        const e = this.observers.find(i => i.shouldFetchOnReconnect());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (r = _(this, at)) == null || r.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        _(this, Xt).notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e),
        this.observers.length || (_(this, at) && (_(this, es) ? _(this, at).cancel({
            revert: !0
        }) : _(this, at).cancelRetry()),
        this.scheduleGc()),
        _(this, Xt).notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || ke(this, cn, Mn).call(this, {
            type: "invalidate"
        })
    }
    async fetch(e, r) {
        var h, m, g, y, w, E, b, k, x, R, V, L;
        if (this.state.fetchStatus !== "idle" && ((h = _(this, at)) == null ? void 0 : h.status()) !== "rejected") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (_(this, at))
                return _(this, at).continueRetry(),
                _(this, at).promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const j = this.observers.find(B => B.options.queryFn);
            j && this.setOptions(j.options)
        }
        const i = new AbortController
          , a = j => {
            Object.defineProperty(j, "signal", {
                enumerable: !0,
                get: () => (X(this, es, !0),
                i.signal)
            })
        }
          , u = () => {
            const j = w0(this.options, r)
              , K = ( () => {
                const G = {
                    client: _(this, Zr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return a(G),
                G
            }
            )();
            return X(this, es, !1),
            this.options.persister ? this.options.persister(j, K, this) : j(K)
        }
          , f = ( () => {
            const j = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: _(this, Zr),
                state: this.state,
                fetchFn: u
            };
            return a(j),
            j
        }
        )();
        (m = this.options.behavior) == null || m.onFetch(f, this),
        X(this, Ws, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = f.fetchOptions) == null ? void 0 : g.meta)) && ke(this, cn, Mn).call(this, {
            type: "fetch",
            meta: (y = f.fetchOptions) == null ? void 0 : y.meta
        }),
        X(this, at, b0({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: f.fetchFn,
            onCancel: j => {
                j instanceof Sd && j.revert && this.setState({
                    ..._(this, Ws),
                    fetchStatus: "idle"
                }),
                i.abort()
            }
            ,
            onFail: (j, B) => {
                ke(this, cn, Mn).call(this, {
                    type: "failed",
                    failureCount: j,
                    error: B
                })
            }
            ,
            onPause: () => {
                ke(this, cn, Mn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                ke(this, cn, Mn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: f.options.retry,
            retryDelay: f.options.retryDelay,
            networkMode: f.options.networkMode,
            canRun: () => !0
        }));
        try {
            const j = await _(this, at).start();
            if (j === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(j),
            (E = (w = _(this, Xt).config).onSuccess) == null || E.call(w, j, this),
            (k = (b = _(this, Xt).config).onSettled) == null || k.call(b, j, this.state.error, this),
            j
        } catch (j) {
            if (j instanceof Sd) {
                if (j.silent)
                    return _(this, at).promise;
                if (j.revert) {
                    if (this.state.data === void 0)
                        throw j;
                    return this.state.data
                }
            }
            throw ke(this, cn, Mn).call(this, {
                type: "error",
                error: j
            }),
            (R = (x = _(this, Xt).config).onError) == null || R.call(x, j, this),
            (L = (V = _(this, Xt).config).onSettled) == null || L.call(V, this.state.data, j, this),
            j
        } finally {
            this.scheduleGc()
        }
    }
}
,
Jr = new WeakMap,
Ws = new WeakMap,
Xt = new WeakMap,
Zr = new WeakMap,
at = new WeakMap,
bo = new WeakMap,
es = new WeakMap,
cn = new WeakSet,
Mn = function(e) {
    const r = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...E0(i.data, this.options),
                fetchMeta: e.meta ?? null
            };
        case "success":
            const a = {
                ...i,
                ...Sg(e.data, e.dataUpdatedAt),
                dataUpdateCount: i.dataUpdateCount + 1,
                ...!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return X(this, Ws, e.manual ? a : void 0),
            a;
        case "error":
            const u = e.error;
            return {
                ...i,
                error: u,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: u,
                fetchStatus: "idle",
                status: "error",
                isInvalidated: !0
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...e.state
            }
        }
    }
    ;
    this.state = r(this.state),
    ft.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        _(this, Xt).notify({
            query: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
Fv);
function E0(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: S0(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Sg(t, e) {
    return {
        data: t,
        dataUpdatedAt: e ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function bg(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , r = e !== void 0
      , i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Nt, Ee, ko, Et, ts, Ks, In, yr, Eo, Qs, Gs, ns, rs, vr, Ys, Oe, eo, bd, kd, Ed, Td, Cd, _d, Pd, T0, Vv, Wk = (Vv = class extends Po {
    constructor(e, r) {
        super();
        ue(this, Oe);
        ue(this, Nt);
        ue(this, Ee);
        ue(this, ko);
        ue(this, Et);
        ue(this, ts);
        ue(this, Ks);
        ue(this, In);
        ue(this, yr);
        ue(this, Eo);
        ue(this, Qs);
        ue(this, Gs);
        ue(this, ns);
        ue(this, rs);
        ue(this, vr);
        ue(this, Ys, new Set);
        this.options = r,
        X(this, Nt, e),
        X(this, yr, null),
        X(this, In, xd()),
        this.bindMethods(),
        this.setOptions(r)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (_(this, Ee).addObserver(this),
        kg(_(this, Ee), this.options) ? ke(this, Oe, eo).call(this) : this.updateResult(),
        ke(this, Oe, Td).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Rd(_(this, Ee), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Rd(_(this, Ee), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        ke(this, Oe, Cd).call(this),
        ke(this, Oe, _d).call(this),
        _(this, Ee).removeObserver(this)
    }
    setOptions(e) {
        const r = this.options
          , i = _(this, Ee);
        if (this.options = _(this, Nt).defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Jt(this.options.enabled, _(this, Ee)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        ke(this, Oe, Pd).call(this),
        _(this, Ee).setOptions(this.options),
        r._defaulted && !yd(this.options, r) && _(this, Nt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: _(this, Ee),
            observer: this
        });
        const a = this.hasListeners();
        a && Eg(_(this, Ee), i, this.options, r) && ke(this, Oe, eo).call(this),
        this.updateResult(),
        a && (_(this, Ee) !== i || Jt(this.options.enabled, _(this, Ee)) !== Jt(r.enabled, _(this, Ee)) || kr(this.options.staleTime, _(this, Ee)) !== kr(r.staleTime, _(this, Ee))) && ke(this, Oe, bd).call(this);
        const u = ke(this, Oe, kd).call(this);
        a && (_(this, Ee) !== i || Jt(this.options.enabled, _(this, Ee)) !== Jt(r.enabled, _(this, Ee)) || u !== _(this, vr)) && ke(this, Oe, Ed).call(this, u)
    }
    getOptimisticResult(e) {
        const r = _(this, Nt).getQueryCache().build(_(this, Nt), e)
          , i = this.createResult(r, e);
        return Qk(this, i) && (X(this, Et, i),
        X(this, Ks, this.options),
        X(this, ts, _(this, Ee).state)),
        i
    }
    getCurrentResult() {
        return _(this, Et)
    }
    trackResult(e, r) {
        return new Proxy(e,{
            get: (i, a) => (this.trackProp(a),
            r == null || r(a),
            a === "promise" && (this.trackProp("data"),
            !this.options.experimental_prefetchInRender && _(this, In).status === "pending" && _(this, In).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),
            Reflect.get(i, a))
        })
    }
    trackProp(e) {
        _(this, Ys).add(e)
    }
    getCurrentQuery() {
        return _(this, Ee)
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        const r = _(this, Nt).defaultQueryOptions(e)
          , i = _(this, Nt).getQueryCache().build(_(this, Nt), r);
        return i.fetch().then( () => this.createResult(i, r))
    }
    fetch(e) {
        return ke(this, Oe, eo).call(this, {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        _(this, Et)))
    }
    createResult(e, r) {
        var Z;
        const i = _(this, Ee)
          , a = this.options
          , u = _(this, Et)
          , c = _(this, ts)
          , f = _(this, Ks)
          , m = e !== i ? e.state : _(this, ko)
          , {state: g} = e;
        let y = {
            ...g
        }, w = !1, E;
        if (r._optimisticResults) {
            const fe = this.hasListeners()
              , Re = !fe && kg(e, r)
              , Le = fe && Eg(e, i, r, a);
            (Re || Le) && (y = {
                ...y,
                ...E0(g.data, e.options)
            }),
            r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {error: b, errorUpdatedAt: k, status: x} = y;
        E = y.data;
        let R = !1;
        if (r.placeholderData !== void 0 && E === void 0 && x === "pending") {
            let fe;
            u != null && u.isPlaceholderData && r.placeholderData === (f == null ? void 0 : f.placeholderData) ? (fe = u.data,
            R = !0) : fe = typeof r.placeholderData == "function" ? r.placeholderData((Z = _(this, Gs)) == null ? void 0 : Z.state.data, _(this, Gs)) : r.placeholderData,
            fe !== void 0 && (x = "success",
            E = wd(u == null ? void 0 : u.data, fe, r),
            w = !0)
        }
        if (r.select && E !== void 0 && !R)
            if (u && E === (c == null ? void 0 : c.data) && r.select === _(this, Eo))
                E = _(this, Qs);
            else
                try {
                    X(this, Eo, r.select),
                    E = r.select(E),
                    E = wd(u == null ? void 0 : u.data, E, r),
                    X(this, Qs, E),
                    X(this, yr, null)
                } catch (fe) {
                    X(this, yr, fe)
                }
        _(this, yr) && (b = _(this, yr),
        E = _(this, Qs),
        k = Date.now(),
        x = "error");
        const V = y.fetchStatus === "fetching"
          , L = x === "pending"
          , j = x === "error"
          , B = L && V
          , K = E !== void 0
          , M = {
            status: x,
            fetchStatus: y.fetchStatus,
            isPending: L,
            isSuccess: x === "success",
            isError: j,
            isInitialLoading: B,
            isLoading: B,
            data: E,
            dataUpdatedAt: y.dataUpdatedAt,
            error: b,
            errorUpdatedAt: k,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount: y.dataUpdateCount > m.dataUpdateCount || y.errorUpdateCount > m.errorUpdateCount,
            isFetching: V,
            isRefetching: V && !L,
            isLoadingError: j && !K,
            isPaused: y.fetchStatus === "paused",
            isPlaceholderData: w,
            isRefetchError: j && K,
            isStale: ff(e, r),
            refetch: this.refetch,
            promise: _(this, In),
            isEnabled: Jt(r.enabled, e) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const fe = M.data !== void 0
              , Re = M.status === "error" && !fe
              , Le = Ie => {
                Re ? Ie.reject(M.error) : fe && Ie.resolve(M.data)
            }
              , De = () => {
                const Ie = X(this, In, M.promise = xd());
                Le(Ie)
            }
              , Ae = _(this, In);
            switch (Ae.status) {
            case "pending":
                e.queryHash === i.queryHash && Le(Ae);
                break;
            case "fulfilled":
                (Re || M.data !== Ae.value) && De();
                break;
            case "rejected":
                (!Re || M.error !== Ae.reason) && De();
                break
            }
        }
        return M
    }
    updateResult() {
        const e = _(this, Et)
          , r = this.createResult(_(this, Ee), this.options);
        if (X(this, ts, _(this, Ee).state),
        X(this, Ks, this.options),
        _(this, ts).data !== void 0 && X(this, Gs, _(this, Ee)),
        yd(r, e))
            return;
        X(this, Et, r);
        const i = () => {
            if (!e)
                return !0;
            const {notifyOnChangeProps: a} = this.options
              , u = typeof a == "function" ? a() : a;
            if (u === "all" || !u && !_(this, Ys).size)
                return !0;
            const c = new Set(u ?? _(this, Ys));
            return this.options.throwOnError && c.add("error"),
            Object.keys(_(this, Et)).some(f => {
                const h = f;
                return _(this, Et)[h] !== e[h] && c.has(h)
            }
            )
        }
        ;
        ke(this, Oe, T0).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && ke(this, Oe, Td).call(this)
    }
}
,
Nt = new WeakMap,
Ee = new WeakMap,
ko = new WeakMap,
Et = new WeakMap,
ts = new WeakMap,
Ks = new WeakMap,
In = new WeakMap,
yr = new WeakMap,
Eo = new WeakMap,
Qs = new WeakMap,
Gs = new WeakMap,
ns = new WeakMap,
rs = new WeakMap,
vr = new WeakMap,
Ys = new WeakMap,
Oe = new WeakSet,
eo = function(e) {
    ke(this, Oe, Pd).call(this);
    let r = _(this, Ee).fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(Ot)),
    r
}
,
bd = function() {
    ke(this, Oe, Cd).call(this);
    const e = kr(this.options.staleTime, _(this, Ee));
    if (as || _(this, Et).isStale || !gd(e))
        return;
    const i = y0(_(this, Et).dataUpdatedAt, e) + 1;
    X(this, ns, Kr.setTimeout( () => {
        _(this, Et).isStale || this.updateResult()
    }
    , i))
}
,
kd = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(_(this, Ee)) : this.options.refetchInterval) ?? !1
}
,
Ed = function(e) {
    ke(this, Oe, _d).call(this),
    X(this, vr, e),
    !(as || Jt(this.options.enabled, _(this, Ee)) === !1 || !gd(_(this, vr)) || _(this, vr) === 0) && X(this, rs, Kr.setInterval( () => {
        (this.options.refetchIntervalInBackground || df.isFocused()) && ke(this, Oe, eo).call(this)
    }
    , _(this, vr)))
}
,
Td = function() {
    ke(this, Oe, bd).call(this),
    ke(this, Oe, Ed).call(this, ke(this, Oe, kd).call(this))
}
,
Cd = function() {
    _(this, ns) && (Kr.clearTimeout(_(this, ns)),
    X(this, ns, void 0))
}
,
_d = function() {
    _(this, rs) && (Kr.clearInterval(_(this, rs)),
    X(this, rs, void 0))
}
,
Pd = function() {
    const e = _(this, Nt).getQueryCache().build(_(this, Nt), this.options);
    if (e === _(this, Ee))
        return;
    const r = _(this, Ee);
    X(this, Ee, e),
    X(this, ko, e.state),
    this.hasListeners() && (r == null || r.removeObserver(this),
    e.addObserver(this))
}
,
T0 = function(e) {
    ft.batch( () => {
        e.listeners && this.listeners.forEach(r => {
            r(_(this, Et))
        }
        ),
        _(this, Nt).getQueryCache().notify({
            query: _(this, Ee),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
Vv);
function Kk(t, e) {
    return Jt(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}
function kg(t, e) {
    return Kk(t, e) || t.state.data !== void 0 && Rd(t, e, e.refetchOnMount)
}
function Rd(t, e, r) {
    if (Jt(e.enabled, t) !== !1 && kr(e.staleTime, t) !== "static") {
        const i = typeof r == "function" ? r(t) : r;
        return i === "always" || i !== !1 && ff(t, e)
    }
    return !1
}
function Eg(t, e, r, i) {
    return (t !== e || Jt(i.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && ff(t, r)
}
function ff(t, e) {
    return Jt(e.enabled, t) !== !1 && t.isStaleByTime(kr(e.staleTime, t))
}
function Qk(t, e) {
    return !yd(t.getCurrentResult(), e)
}
function Tg(t) {
    return {
        onFetch: (e, r) => {
            var g, y, w, E, b;
            const i = e.options
              , a = (w = (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : w.direction
              , u = ((E = e.state.data) == null ? void 0 : E.pages) || []
              , c = ((b = e.state.data) == null ? void 0 : b.pageParams) || [];
            let f = {
                pages: [],
                pageParams: []
            }
              , h = 0;
            const m = async () => {
                let k = !1;
                const x = L => {
                    Vk(L, () => e.signal, () => k = !0)
                }
                  , R = w0(e.options, e.fetchOptions)
                  , V = async (L, j, B) => {
                    if (k)
                        return Promise.reject();
                    if (j == null && L.pages.length)
                        return Promise.resolve(L);
                    const G = ( () => {
                        const Re = {
                            client: e.client,
                            queryKey: e.queryKey,
                            pageParam: j,
                            direction: B ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        return x(Re),
                        Re
                    }
                    )()
                      , M = await R(G)
                      , {maxPages: Z} = e.options
                      , fe = B ? Fk : Ik;
                    return {
                        pages: fe(L.pages, M, Z),
                        pageParams: fe(L.pageParams, j, Z)
                    }
                }
                ;
                if (a && u.length) {
                    const L = a === "backward"
                      , j = L ? Gk : Cg
                      , B = {
                        pages: u,
                        pageParams: c
                    }
                      , K = j(i, B);
                    f = await V(B, K, L)
                } else {
                    const L = t ?? u.length;
                    do {
                        const j = h === 0 ? c[0] ?? i.initialPageParam : Cg(i, f);
                        if (h > 0 && j == null)
                            break;
                        f = await V(f, j),
                        h++
                    } while (h < L)
                }
                return f
            }
            ;
            e.options.persister ? e.fetchFn = () => {
                var k, x;
                return (x = (k = e.options).persister) == null ? void 0 : x.call(k, m, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            }
            : e.fetchFn = m
        }
    }
}
function Cg(t, {pages: e, pageParams: r}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0
}
function Gk(t, {pages: e, pageParams: r}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, r[0], r) : void 0
}
var To, wn, vt, ss, xn, fr, Bv, Yk = (Bv = class extends k0 {
    constructor(e) {
        super();
        ue(this, xn);
        ue(this, To);
        ue(this, wn);
        ue(this, vt);
        ue(this, ss);
        X(this, To, e.client),
        this.mutationId = e.mutationId,
        X(this, vt, e.mutationCache),
        X(this, wn, []),
        this.state = e.state || Xk(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        _(this, wn).includes(e) || (_(this, wn).push(e),
        this.clearGcTimeout(),
        _(this, vt).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        X(this, wn, _(this, wn).filter(r => r !== e)),
        this.scheduleGc(),
        _(this, vt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        _(this, wn).length || (this.state.status === "pending" ? this.scheduleGc() : _(this, vt).remove(this))
    }
    continue() {
        var e;
        return ((e = _(this, ss)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var c, f, h, m, g, y, w, E, b, k, x, R, V, L, j, B, K, G;
        const r = () => {
            ke(this, xn, fr).call(this, {
                type: "continue"
            })
        }
          , i = {
            client: _(this, To),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        X(this, ss, b0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, Z) => {
                ke(this, xn, fr).call(this, {
                    type: "failed",
                    failureCount: M,
                    error: Z
                })
            }
            ,
            onPause: () => {
                ke(this, xn, fr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => _(this, vt).canRun(this)
        }));
        const a = this.state.status === "pending"
          , u = !_(this, ss).canStart();
        try {
            if (a)
                r();
            else {
                ke(this, xn, fr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: u
                }),
                _(this, vt).config.onMutate && await _(this, vt).config.onMutate(e, this, i);
                const Z = await ((f = (c = this.options).onMutate) == null ? void 0 : f.call(c, e, i));
                Z !== this.state.context && ke(this, xn, fr).call(this, {
                    type: "pending",
                    context: Z,
                    variables: e,
                    isPaused: u
                })
            }
            const M = await _(this, ss).start();
            return await ((m = (h = _(this, vt).config).onSuccess) == null ? void 0 : m.call(h, M, e, this.state.context, this, i)),
            await ((y = (g = this.options).onSuccess) == null ? void 0 : y.call(g, M, e, this.state.context, i)),
            await ((E = (w = _(this, vt).config).onSettled) == null ? void 0 : E.call(w, M, null, this.state.variables, this.state.context, this, i)),
            await ((k = (b = this.options).onSettled) == null ? void 0 : k.call(b, M, null, e, this.state.context, i)),
            ke(this, xn, fr).call(this, {
                type: "success",
                data: M
            }),
            M
        } catch (M) {
            try {
                await ((R = (x = _(this, vt).config).onError) == null ? void 0 : R.call(x, M, e, this.state.context, this, i))
            } catch (Z) {
                Promise.reject(Z)
            }
            try {
                await ((L = (V = this.options).onError) == null ? void 0 : L.call(V, M, e, this.state.context, i))
            } catch (Z) {
                Promise.reject(Z)
            }
            try {
                await ((B = (j = _(this, vt).config).onSettled) == null ? void 0 : B.call(j, void 0, M, this.state.variables, this.state.context, this, i))
            } catch (Z) {
                Promise.reject(Z)
            }
            try {
                await ((G = (K = this.options).onSettled) == null ? void 0 : G.call(K, void 0, M, e, this.state.context, i))
            } catch (Z) {
                Promise.reject(Z)
            }
            throw ke(this, xn, fr).call(this, {
                type: "error",
                error: M
            }),
            M
        } finally {
            _(this, vt).runNext(this)
        }
    }
}
,
To = new WeakMap,
wn = new WeakMap,
vt = new WeakMap,
ss = new WeakMap,
xn = new WeakSet,
fr = function(e) {
    const r = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                failureCount: e.failureCount,
                failureReason: e.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: e.error,
                failureCount: i.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    ft.batch( () => {
        _(this, wn).forEach(i => {
            i.onMutationUpdate(e)
        }
        ),
        _(this, vt).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
Bv);
function Xk() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Fn, dn, Co, Uv, Jk = (Uv = class extends Po {
    constructor(e={}) {
        super();
        ue(this, Fn);
        ue(this, dn);
        ue(this, Co);
        this.config = e,
        X(this, Fn, new Set),
        X(this, dn, new Map),
        X(this, Co, 0)
    }
    build(e, r, i) {
        const a = new Yk({
            client: e,
            mutationCache: this,
            mutationId: ++Ka(this, Co)._,
            options: e.defaultMutationOptions(r),
            state: i
        });
        return this.add(a),
        a
    }
    add(e) {
        _(this, Fn).add(e);
        const r = Xa(e);
        if (typeof r == "string") {
            const i = _(this, dn).get(r);
            i ? i.push(e) : _(this, dn).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (_(this, Fn).delete(e)) {
            const r = Xa(e);
            if (typeof r == "string") {
                const i = _(this, dn).get(r);
                if (i)
                    if (i.length > 1) {
                        const a = i.indexOf(e);
                        a !== -1 && i.splice(a, 1)
                    } else
                        i[0] === e && _(this, dn).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = Xa(e);
        if (typeof r == "string") {
            const i = _(this, dn).get(r)
              , a = i == null ? void 0 : i.find(u => u.state.status === "pending");
            return !a || a === e
        } else
            return !0
    }
    runNext(e) {
        var i;
        const r = Xa(e);
        if (typeof r == "string") {
            const a = (i = _(this, dn).get(r)) == null ? void 0 : i.find(u => u !== e && u.state.isPaused);
            return (a == null ? void 0 : a.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        ft.batch( () => {
            _(this, Fn).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            _(this, Fn).clear(),
            _(this, dn).clear()
        }
        )
    }
    getAll() {
        return Array.from(_(this, Fn))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => vg(r, i))
    }
    findAll(e={}) {
        return this.getAll().filter(r => vg(e, r))
    }
    notify(e) {
        ft.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return ft.batch( () => Promise.all(e.map(r => r.continue().catch(Ot))))
    }
}
,
Fn = new WeakMap,
dn = new WeakMap,
Co = new WeakMap,
Uv);
function Xa(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var Sn, zv, Zk = (zv = class extends Po {
    constructor(e={}) {
        super();
        ue(this, Sn);
        this.config = e,
        X(this, Sn, new Map)
    }
    build(e, r, i) {
        const a = r.queryKey
          , u = r.queryHash ?? uf(a, r);
        let c = this.get(u);
        return c || (c = new Hk({
            client: e,
            queryKey: a,
            queryHash: u,
            options: e.defaultQueryOptions(r),
            state: i,
            defaultOptions: e.getQueryDefaults(a)
        }),
        this.add(c)),
        c
    }
    add(e) {
        _(this, Sn).has(e.queryHash) || (_(this, Sn).set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const r = _(this, Sn).get(e.queryHash);
        r && (e.destroy(),
        r === e && _(this, Sn).delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        ft.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return _(this, Sn).get(e)
    }
    getAll() {
        return [..._(this, Sn).values()]
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => yg(r, i))
    }
    findAll(e={}) {
        const r = this.getAll();
        return Object.keys(e).length > 0 ? r.filter(i => yg(e, i)) : r
    }
    notify(e) {
        ft.batch( () => {
            this.listeners.forEach(r => {
                r(e)
            }
            )
        }
        )
    }
    onFocus() {
        ft.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ft.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
,
Sn = new WeakMap,
zv), Ke, wr, xr, Xs, Js, Sr, Zs, ei, $v, eE = ($v = class {
    constructor(t={}) {
        ue(this, Ke);
        ue(this, wr);
        ue(this, xr);
        ue(this, Xs);
        ue(this, Js);
        ue(this, Sr);
        ue(this, Zs);
        ue(this, ei);
        X(this, Ke, t.queryCache || new Zk),
        X(this, wr, t.mutationCache || new Jk),
        X(this, xr, t.defaultOptions || {}),
        X(this, Xs, new Map),
        X(this, Js, new Map),
        X(this, Sr, 0)
    }
    mount() {
        Ka(this, Sr)._++,
        _(this, Sr) === 1 && (X(this, Zs, df.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            _(this, Ke).onFocus())
        }
        )),
        X(this, ei, wl.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            _(this, Ke).onOnline())
        }
        )))
    }
    unmount() {
        var t, e;
        Ka(this, Sr)._--,
        _(this, Sr) === 0 && ((t = _(this, Zs)) == null || t.call(this),
        X(this, Zs, void 0),
        (e = _(this, ei)) == null || e.call(this),
        X(this, ei, void 0))
    }
    isFetching(t) {
        return _(this, Ke).findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return _(this, wr).findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = _(this, Ke).get(e.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t)
          , r = _(this, Ke).build(this, e)
          , i = r.state.data;
        return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(kr(e.staleTime, r)) && this.prefetchQuery(e),
        Promise.resolve(i))
    }
    getQueriesData(t) {
        return _(this, Ke).findAll(t).map( ({queryKey: e, state: r}) => {
            const i = r.data;
            return [e, i]
        }
        )
    }
    setQueryData(t, e, r) {
        const i = this.defaultQueryOptions({
            queryKey: t
        })
          , a = _(this, Ke).get(i.queryHash)
          , u = a == null ? void 0 : a.state.data
          , c = Lk(e, u);
        if (c !== void 0)
            return _(this, Ke).build(this, i).setData(c, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(t, e, r) {
        return ft.batch( () => _(this, Ke).findAll(t).map( ({queryKey: i}) => [i, this.setQueryData(i, e, r)]))
    }
    getQueryState(t) {
        var r;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (r = _(this, Ke).get(e.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(t) {
        const e = _(this, Ke);
        ft.batch( () => {
            e.findAll(t).forEach(r => {
                e.remove(r)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const r = _(this, Ke);
        return ft.batch( () => (r.findAll(t).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...t
        }, e)))
    }
    cancelQueries(t, e={}) {
        const r = {
            revert: !0,
            ...e
        }
          , i = ft.batch( () => _(this, Ke).findAll(t).map(a => a.cancel(r)));
        return Promise.all(i).then(Ot).catch(Ot)
    }
    invalidateQueries(t, e={}) {
        return ft.batch( () => (_(this, Ke).findAll(t).forEach(r => {
            r.invalidate()
        }
        ),
        (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
        }, e)))
    }
    refetchQueries(t, e={}) {
        const r = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }
          , i = ft.batch( () => _(this, Ke).findAll(t).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
            let u = a.fetch(void 0, r);
            return r.throwOnError || (u = u.catch(Ot)),
            a.state.fetchStatus === "paused" ? Promise.resolve() : u
        }
        ));
        return Promise.all(i).then(Ot)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const r = _(this, Ke).build(this, e);
        return r.isStaleByTime(kr(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(Ot).catch(Ot)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = Tg(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Ot).catch(Ot)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = Tg(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return wl.isOnline() ? _(this, wr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return _(this, Ke)
    }
    getMutationCache() {
        return _(this, wr)
    }
    getDefaultOptions() {
        return _(this, xr)
    }
    setDefaultOptions(t) {
        X(this, xr, t)
    }
    setQueryDefaults(t, e) {
        _(this, Xs).set(mo(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [..._(this, Xs).values()]
          , r = {};
        return e.forEach(i => {
            go(t, i.queryKey) && Object.assign(r, i.defaultOptions)
        }
        ),
        r
    }
    setMutationDefaults(t, e) {
        _(this, Js).set(mo(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [..._(this, Js).values()]
          , r = {};
        return e.forEach(i => {
            go(t, i.mutationKey) && Object.assign(r, i.defaultOptions)
        }
        ),
        r
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ..._(this, xr).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = uf(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === cf && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ..._(this, xr).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        _(this, Ke).clear(),
        _(this, wr).clear()
    }
}
,
Ke = new WeakMap,
wr = new WeakMap,
xr = new WeakMap,
Xs = new WeakMap,
Js = new WeakMap,
Sr = new WeakMap,
Zs = new WeakMap,
ei = new WeakMap,
$v), C0 = D.createContext(void 0), tE = t => {
    const e = D.useContext(C0);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
, nE = ({client: t, children: e}) => (D.useEffect( () => (t.mount(),
() => {
    t.unmount()
}
), [t]),
S.jsx(C0.Provider, {
    value: t,
    children: e
})), _0 = D.createContext(!1), rE = () => D.useContext(_0);
_0.Provider;
function sE() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        }
        ,
        reset: () => {
            t = !0
        }
        ,
        isReset: () => t
    }
}
var iE = D.createContext(sE())
  , oE = () => D.useContext(iE)
  , aE = (t, e, r) => {
    const i = r != null && r.state.error && typeof t.throwOnError == "function" ? x0(t.throwOnError, [r.state.error, r]) : t.throwOnError;
    (t.suspense || t.experimental_prefetchInRender || i) && (e.isReset() || (t.retryOnMount = !1))
}
  , lE = t => {
    D.useEffect( () => {
        t.clearReset()
    }
    , [t])
}
  , uE = ({result: t, errorResetBoundary: e, throwOnError: r, query: i, suspense: a}) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === void 0 || x0(r, [t.error, i]))
  , cE = t => {
    if (t.suspense) {
        const r = a => a === "static" ? a : Math.max(a ?? 1e3, 1e3)
          , i = t.staleTime;
        t.staleTime = typeof i == "function" ? (...a) => r(i(...a)) : r(i),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
    }
}
  , dE = (t, e) => t.isLoading && t.isFetching && !e
  , fE = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending
  , _g = (t, e, r) => e.fetchOptimistic(t).catch( () => {
    r.clearReset()
}
);
function hE(t, e, r) {
    var w, E, b, k;
    const i = rE()
      , a = oE()
      , u = tE()
      , c = u.defaultQueryOptions(t);
    (E = (w = u.getDefaultOptions().queries) == null ? void 0 : w._experimental_beforeQuery) == null || E.call(w, c);
    const f = u.getQueryCache().get(c.queryHash);
    c._optimisticResults = i ? "isRestoring" : "optimistic",
    cE(c),
    aE(c, a, f),
    lE(a);
    const h = !u.getQueryCache().get(c.queryHash)
      , [m] = D.useState( () => new e(u,c))
      , g = m.getOptimisticResult(c)
      , y = !i && t.subscribed !== !1;
    if (D.useSyncExternalStore(D.useCallback(x => {
        const R = y ? m.subscribe(ft.batchCalls(x)) : Ot;
        return m.updateResult(),
        R
    }
    , [m, y]), () => m.getCurrentResult(), () => m.getCurrentResult()),
    D.useEffect( () => {
        m.setOptions(c)
    }
    , [c, m]),
    fE(c, g))
        throw _g(c, m, a);
    if (uE({
        result: g,
        errorResetBoundary: a,
        throwOnError: c.throwOnError,
        query: f,
        suspense: c.suspense
    }))
        throw g.error;
    if ((k = (b = u.getDefaultOptions().queries) == null ? void 0 : b._experimental_afterQuery) == null || k.call(b, c, g),
    c.experimental_prefetchInRender && !as && dE(g, i)) {
        const x = h ? _g(c, m, a) : f == null ? void 0 : f.promise;
        x == null || x.catch(Ot).finally( () => {
            m.updateResult()
        }
        )
    }
    return c.notifyOnChangeProps ? g : m.trackResult(g)
}
function pE(t, e) {
    return hE(t, Wk)
}
const mE = new eE({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
})
  , hf = D.createContext({});
function pf(t) {
    const e = D.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const Al = D.createContext(null)
  , mf = D.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
});
class gE extends D.Component {
    getSnapshotBeforeUpdate(e) {
        const r = this.props.childRef.current;
        if (r && e.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = r.offsetHeight || 0,
            i.width = r.offsetWidth || 0,
            i.top = r.offsetTop,
            i.left = r.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function yE({children: t, isPresent: e}) {
    const r = D.useId()
      , i = D.useRef(null)
      , a = D.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: u} = D.useContext(mf);
    return D.useInsertionEffect( () => {
        const {width: c, height: f, top: h, left: m} = a.current;
        if (e || !i.current || !c || !f)
            return;
        i.current.dataset.motionPopId = r;
        const g = document.createElement("style");
        return u && (g.nonce = u),
        document.head.appendChild(g),
        g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `),
        () => {
            document.head.removeChild(g)
        }
    }
    , [e]),
    S.jsx(gE, {
        isPresent: e,
        childRef: i,
        sizeRef: a,
        children: D.cloneElement(t, {
            ref: i
        })
    })
}
const vE = ({children: t, initial: e, isPresent: r, onExitComplete: i, custom: a, presenceAffectsLayout: u, mode: c}) => {
    const f = pf(wE)
      , h = D.useId()
      , m = D.useCallback(y => {
        f.set(y, !0);
        for (const w of f.values())
            if (!w)
                return;
        i && i()
    }
    , [f, i])
      , g = D.useMemo( () => ({
        id: h,
        initial: e,
        isPresent: r,
        custom: a,
        onExitComplete: m,
        register: y => (f.set(y, !1),
        () => f.delete(y))
    }), u ? [Math.random(), m] : [r, m]);
    return D.useMemo( () => {
        f.forEach( (y, w) => f.set(w, !1))
    }
    , [r]),
    D.useEffect( () => {
        !r && !f.size && i && i()
    }
    , [r]),
    c === "popLayout" && (t = S.jsx(yE, {
        isPresent: r,
        children: t
    })),
    S.jsx(Al.Provider, {
        value: g,
        children: t
    })
}
;
function wE() {
    return new Map
}
function P0(t=!0) {
    const e = D.useContext(Al);
    if (e === null)
        return [!0, null];
    const {isPresent: r, onExitComplete: i, register: a} = e
      , u = D.useId();
    D.useEffect( () => {
        t && a(u)
    }
    , [t]);
    const c = D.useCallback( () => t && i && i(u), [u, i, t]);
    return !r && i ? [!1, c] : [!0]
}
const Ja = t => t.key || "";
function Pg(t) {
    const e = [];
    return D.Children.forEach(t, r => {
        D.isValidElement(r) && e.push(r)
    }
    ),
    e
}
const gf = typeof window < "u"
  , R0 = gf ? D.useLayoutEffect : D.useEffect
  , xE = ({children: t, custom: e, initial: r=!0, onExitComplete: i, presenceAffectsLayout: a=!0, mode: u="sync", propagate: c=!1}) => {
    const [f,h] = P0(c)
      , m = D.useMemo( () => Pg(t), [t])
      , g = c && !f ? [] : m.map(Ja)
      , y = D.useRef(!0)
      , w = D.useRef(m)
      , E = pf( () => new Map)
      , [b,k] = D.useState(m)
      , [x,R] = D.useState(m);
    R0( () => {
        y.current = !1,
        w.current = m;
        for (let j = 0; j < x.length; j++) {
            const B = Ja(x[j]);
            g.includes(B) ? E.delete(B) : E.get(B) !== !0 && E.set(B, !1)
        }
    }
    , [x, g.length, g.join("-")]);
    const V = [];
    if (m !== b) {
        let j = [...m];
        for (let B = 0; B < x.length; B++) {
            const K = x[B]
              , G = Ja(K);
            g.includes(G) || (j.splice(B, 0, K),
            V.push(K))
        }
        u === "wait" && V.length && (j = V),
        R(Pg(j)),
        k(m);
        return
    }
    const {forceRender: L} = D.useContext(hf);
    return S.jsx(S.Fragment, {
        children: x.map(j => {
            const B = Ja(j)
              , K = c && !f ? !1 : m === x || g.includes(B)
              , G = () => {
                if (E.has(B))
                    E.set(B, !0);
                else
                    return;
                let M = !0;
                E.forEach(Z => {
                    Z || (M = !1)
                }
                ),
                M && (L == null || L(),
                R(w.current),
                c && (h == null || h()),
                i && i())
            }
            ;
            return S.jsx(vE, {
                isPresent: K,
                initial: !y.current || r ? void 0 : !1,
                custom: K ? void 0 : e,
                presenceAffectsLayout: a,
                mode: u,
                onExitComplete: K ? void 0 : G,
                children: j
            }, B)
        }
        )
    })
}
  , Bt = t => t;
let A0 = Bt;
function yf(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const ti = (t, e, r) => {
    const i = e - t;
    return i === 0 ? 1 : (r - t) / i
}
  , Bn = t => t * 1e3
  , Un = t => t / 1e3
  , SE = {
    useManualTiming: !1
};
function bE(t) {
    let e = new Set
      , r = new Set
      , i = !1
      , a = !1;
    const u = new WeakSet;
    let c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function f(m) {
        u.has(m) && (h.schedule(m),
        t()),
        m(c)
    }
    const h = {
        schedule: (m, g=!1, y=!1) => {
            const E = y && i ? e : r;
            return g && u.add(m),
            E.has(m) || E.add(m),
            m
        }
        ,
        cancel: m => {
            r.delete(m),
            u.delete(m)
        }
        ,
        process: m => {
            if (c = m,
            i) {
                a = !0;
                return
            }
            i = !0,
            [e,r] = [r, e],
            e.forEach(f),
            e.clear(),
            i = !1,
            a && (a = !1,
            h.process(m))
        }
    };
    return h
}
const Za = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , kE = 40;
function N0(t, e) {
    let r = !1
      , i = !0;
    const a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , u = () => r = !0
      , c = Za.reduce( (R, V) => (R[V] = bE(u),
    R), {})
      , {read: f, resolveKeyframes: h, update: m, preRender: g, render: y, postRender: w} = c
      , E = () => {
        const R = performance.now();
        r = !1,
        a.delta = i ? 1e3 / 60 : Math.max(Math.min(R - a.timestamp, kE), 1),
        a.timestamp = R,
        a.isProcessing = !0,
        f.process(a),
        h.process(a),
        m.process(a),
        g.process(a),
        y.process(a),
        w.process(a),
        a.isProcessing = !1,
        r && e && (i = !1,
        t(E))
    }
      , b = () => {
        r = !0,
        i = !0,
        a.isProcessing || t(E)
    }
    ;
    return {
        schedule: Za.reduce( (R, V) => {
            const L = c[V];
            return R[V] = (j, B=!1, K=!1) => (r || b(),
            L.schedule(j, B, K)),
            R
        }
        , {}),
        cancel: R => {
            for (let V = 0; V < Za.length; V++)
                c[Za[V]].cancel(R)
        }
        ,
        state: a,
        steps: c
    }
}
const {schedule: Ue, cancel: Tr, state: dt, steps: Kc} = N0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Bt, !0)
  , O0 = D.createContext({
    strict: !1
})
  , Rg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , ni = {};
for (const t in Rg)
    ni[t] = {
        isEnabled: e => Rg[t].some(r => !!e[r])
    };
function EE(t) {
    for (const e in t)
        ni[e] = {
            ...ni[e],
            ...t[e]
        }
}
const TE = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function xl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || TE.has(t)
}
let j0 = t => !xl(t);
function CE(t) {
    t && (j0 = e => e.startsWith("on") ? !xl(e) : t(e))
}
try {
    CE(require("@emotion/is-prop-valid").default)
} catch {}
function _E(t, e, r) {
    const i = {};
    for (const a in t)
        a === "values" && typeof t.values == "object" || (j0(a) || r === !0 && xl(a) || !e && !xl(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i
}
function PE(t) {
    if (typeof Proxy > "u")
        return t;
    const e = new Map
      , r = (...i) => t(...i);
    return new Proxy(r,{
        get: (i, a) => a === "create" ? t : (e.has(a) || e.set(a, t(a)),
        e.get(a))
    })
}
const Nl = D.createContext({});
function yo(t) {
    return typeof t == "string" || Array.isArray(t)
}
function Ol(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const vf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , wf = ["initial", ...vf];
function jl(t) {
    return Ol(t.animate) || wf.some(e => yo(t[e]))
}
function L0(t) {
    return !!(jl(t) || t.variants)
}
function RE(t, e) {
    if (jl(t)) {
        const {initial: r, animate: i} = t;
        return {
            initial: r === !1 || yo(r) ? r : void 0,
            animate: yo(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function AE(t) {
    const {initial: e, animate: r} = RE(t, D.useContext(Nl));
    return D.useMemo( () => ({
        initial: e,
        animate: r
    }), [Ag(e), Ag(r)])
}
function Ag(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const NE = Symbol.for("motionComponentSymbol");
function Is(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function OE(t, e, r) {
    return D.useCallback(i => {
        i && t.onMount && t.onMount(i),
        e && (i ? e.mount(i) : e.unmount()),
        r && (typeof r == "function" ? r(i) : Is(r) && (r.current = i))
    }
    , [e])
}
const xf = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , jE = "framerAppearId"
  , D0 = "data-" + xf(jE)
  , {schedule: Sf} = N0(queueMicrotask, !1)
  , M0 = D.createContext({});
function LE(t, e, r, i, a) {
    var u, c;
    const {visualElement: f} = D.useContext(Nl)
      , h = D.useContext(O0)
      , m = D.useContext(Al)
      , g = D.useContext(mf).reducedMotion
      , y = D.useRef(null);
    i = i || h.renderer,
    !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: f,
        props: r,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const w = y.current
      , E = D.useContext(M0);
    w && !w.projection && a && (w.type === "html" || w.type === "svg") && DE(y.current, r, a, E);
    const b = D.useRef(!1);
    D.useInsertionEffect( () => {
        w && b.current && w.update(r, m)
    }
    );
    const k = r[D0]
      , x = D.useRef(!!k && !(!((u = window.MotionHandoffIsComplete) === null || u === void 0) && u.call(window, k)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, k)));
    return R0( () => {
        w && (b.current = !0,
        window.MotionIsMounted = !0,
        w.updateFeatures(),
        Sf.render(w.render),
        x.current && w.animationState && w.animationState.animateChanges())
    }
    ),
    D.useEffect( () => {
        w && (!x.current && w.animationState && w.animationState.animateChanges(),
        x.current && (queueMicrotask( () => {
            var R;
            (R = window.MotionHandoffMarkAsComplete) === null || R === void 0 || R.call(window, k)
        }
        ),
        x.current = !1))
    }
    ),
    w
}
function DE(t, e, r, i) {
    const {layoutId: a, layout: u, drag: c, dragConstraints: f, layoutScroll: h, layoutRoot: m} = e;
    t.projection = new r(t.latestValues,e["data-framer-portal-id"] ? void 0 : I0(t.parent)),
    t.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || f && Is(f),
        visualElement: t,
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
    })
}
function I0(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : I0(t.parent)
}
function ME({preloadedFeatures: t, createVisualElement: e, useRender: r, useVisualState: i, Component: a}) {
    var u, c;
    t && EE(t);
    function f(m, g) {
        let y;
        const w = {
            ...D.useContext(mf),
            ...m,
            layoutId: IE(m)
        }
          , {isStatic: E} = w
          , b = AE(m)
          , k = i(m, E);
        if (!E && gf) {
            FE();
            const x = VE(w);
            y = x.MeasureLayout,
            b.visualElement = LE(a, k, w, e, x.ProjectionNode)
        }
        return S.jsxs(Nl.Provider, {
            value: b,
            children: [y && b.visualElement ? S.jsx(y, {
                visualElement: b.visualElement,
                ...w
            }) : null, r(a, m, OE(k, b.visualElement, g), k, E, b.visualElement)]
        })
    }
    f.displayName = `motion.${typeof a == "string" ? a : `create(${(c = (u = a.displayName) !== null && u !== void 0 ? u : a.name) !== null && c !== void 0 ? c : ""})`}`;
    const h = D.forwardRef(f);
    return h[NE] = a,
    h
}
function IE({layoutId: t}) {
    const e = D.useContext(hf).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function FE(t, e) {
    D.useContext(O0).strict
}
function VE(t) {
    const {drag: e, layout: r} = ni;
    if (!e && !r)
        return {};
    const i = {
        ...e,
        ...r
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const BE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function bf(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(BE.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function Ng(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach( (r, i) => {
        e[0][i] = r.get(),
        e[1][i] = r.getVelocity()
    }
    ),
    e
}
function kf(t, e, r, i) {
    if (typeof e == "function") {
        const [a,u] = Ng(i);
        e = e(r !== void 0 ? r : t.custom, a, u)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [a,u] = Ng(i);
        e = e(r !== void 0 ? r : t.custom, a, u)
    }
    return e
}
const Ad = t => Array.isArray(t)
  , UE = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , zE = t => Ad(t) ? t[t.length - 1] || 0 : t
  , St = t => !!(t && t.getVelocity);
function al(t) {
    const e = St(t) ? t.get() : t;
    return UE(e) ? e.toValue() : e
}
function $E({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: r}, i, a, u) {
    const c = {
        latestValues: qE(i, a, u, t),
        renderState: e()
    };
    return r && (c.onMount = f => r({
        props: i,
        current: f,
        ...c
    }),
    c.onUpdate = f => r(f)),
    c
}
const F0 = t => (e, r) => {
    const i = D.useContext(Nl)
      , a = D.useContext(Al)
      , u = () => $E(t, e, i, a);
    return r ? u() : pf(u)
}
;
function qE(t, e, r, i) {
    const a = {}
      , u = i(t, {});
    for (const w in u)
        a[w] = al(u[w]);
    let {initial: c, animate: f} = t;
    const h = jl(t)
      , m = L0(t);
    e && m && !h && t.inherit !== !1 && (c === void 0 && (c = e.initial),
    f === void 0 && (f = e.animate));
    let g = r ? r.initial === !1 : !1;
    g = g || c === !1;
    const y = g ? f : c;
    if (y && typeof y != "boolean" && !Ol(y)) {
        const w = Array.isArray(y) ? y : [y];
        for (let E = 0; E < w.length; E++) {
            const b = kf(t, w[E]);
            if (b) {
                const {transitionEnd: k, transition: x, ...R} = b;
                for (const V in R) {
                    let L = R[V];
                    if (Array.isArray(L)) {
                        const j = g ? L.length - 1 : 0;
                        L = L[j]
                    }
                    L !== null && (a[V] = L)
                }
                for (const V in k)
                    a[V] = k[V]
            }
        }
    }
    return a
}
const ii = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , cs = new Set(ii)
  , V0 = t => e => typeof e == "string" && e.startsWith(t)
  , B0 = V0("--")
  , HE = V0("var(--")
  , Ef = t => HE(t) ? WE.test(t.split("/*")[0].trim()) : !1
  , WE = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , U0 = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , zn = (t, e, r) => r > e ? e : r < t ? t : r
  , oi = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , vo = {
    ...oi,
    transform: t => zn(0, 1, t)
}
  , el = {
    ...oi,
    default: 1
}
  , Ro = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , hr = Ro("deg")
  , bn = Ro("%")
  , ce = Ro("px")
  , KE = Ro("vh")
  , QE = Ro("vw")
  , Og = {
    ...bn,
    parse: t => bn.parse(t) / 100,
    transform: t => bn.transform(t * 100)
}
  , GE = {
    borderWidth: ce,
    borderTopWidth: ce,
    borderRightWidth: ce,
    borderBottomWidth: ce,
    borderLeftWidth: ce,
    borderRadius: ce,
    radius: ce,
    borderTopLeftRadius: ce,
    borderTopRightRadius: ce,
    borderBottomRightRadius: ce,
    borderBottomLeftRadius: ce,
    width: ce,
    maxWidth: ce,
    height: ce,
    maxHeight: ce,
    top: ce,
    right: ce,
    bottom: ce,
    left: ce,
    padding: ce,
    paddingTop: ce,
    paddingRight: ce,
    paddingBottom: ce,
    paddingLeft: ce,
    margin: ce,
    marginTop: ce,
    marginRight: ce,
    marginBottom: ce,
    marginLeft: ce,
    backgroundPositionX: ce,
    backgroundPositionY: ce
}
  , YE = {
    rotate: hr,
    rotateX: hr,
    rotateY: hr,
    rotateZ: hr,
    scale: el,
    scaleX: el,
    scaleY: el,
    scaleZ: el,
    skew: hr,
    skewX: hr,
    skewY: hr,
    distance: ce,
    translateX: ce,
    translateY: ce,
    translateZ: ce,
    x: ce,
    y: ce,
    z: ce,
    perspective: ce,
    transformPerspective: ce,
    opacity: vo,
    originX: Og,
    originY: Og,
    originZ: ce
}
  , jg = {
    ...oi,
    transform: Math.round
}
  , Tf = {
    ...GE,
    ...YE,
    zIndex: jg,
    size: ce,
    fillOpacity: vo,
    strokeOpacity: vo,
    numOctaves: jg
}
  , XE = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , JE = ii.length;
function ZE(t, e, r) {
    let i = ""
      , a = !0;
    for (let u = 0; u < JE; u++) {
        const c = ii[u]
          , f = t[c];
        if (f === void 0)
            continue;
        let h = !0;
        if (typeof f == "number" ? h = f === (c.startsWith("scale") ? 1 : 0) : h = parseFloat(f) === 0,
        !h || r) {
            const m = U0(f, Tf[c]);
            if (!h) {
                a = !1;
                const g = XE[c] || c;
                i += `${g}(${m}) `
            }
            r && (e[c] = m)
        }
    }
    return i = i.trim(),
    r ? i = r(e, a ? "" : i) : a && (i = "none"),
    i
}
function Cf(t, e, r) {
    const {style: i, vars: a, transformOrigin: u} = t;
    let c = !1
      , f = !1;
    for (const h in e) {
        const m = e[h];
        if (cs.has(h)) {
            c = !0;
            continue
        } else if (B0(h)) {
            a[h] = m;
            continue
        } else {
            const g = U0(m, Tf[h]);
            h.startsWith("origin") ? (f = !0,
            u[h] = g) : i[h] = g
        }
    }
    if (e.transform || (c || r ? i.transform = ZE(e, t.transform, r) : i.transform && (i.transform = "none")),
    f) {
        const {originX: h="50%", originY: m="50%", originZ: g=0} = u;
        i.transformOrigin = `${h} ${m} ${g}`
    }
}
const eT = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , tT = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function nT(t, e, r=1, i=0, a=!0) {
    t.pathLength = 1;
    const u = a ? eT : tT;
    t[u.offset] = ce.transform(-i);
    const c = ce.transform(e)
      , f = ce.transform(r);
    t[u.array] = `${c} ${f}`
}
function Lg(t, e, r) {
    return typeof t == "string" ? t : ce.transform(e + r * t)
}
function rT(t, e, r) {
    const i = Lg(e, t.x, t.width)
      , a = Lg(r, t.y, t.height);
    return `${i} ${a}`
}
function _f(t, {attrX: e, attrY: r, attrScale: i, originX: a, originY: u, pathLength: c, pathSpacing: f=1, pathOffset: h=0, ...m}, g, y) {
    if (Cf(t, m, y),
    g) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: w, style: E, dimensions: b} = t;
    w.transform && (b && (E.transform = w.transform),
    delete w.transform),
    b && (a !== void 0 || u !== void 0 || E.transform) && (E.transformOrigin = rT(b, a !== void 0 ? a : .5, u !== void 0 ? u : .5)),
    e !== void 0 && (w.x = e),
    r !== void 0 && (w.y = r),
    i !== void 0 && (w.scale = i),
    c !== void 0 && nT(w, c, f, h, !1)
}
const Pf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , z0 = () => ({
    ...Pf(),
    attrs: {}
})
  , Rf = t => typeof t == "string" && t.toLowerCase() === "svg";
function $0(t, {style: e, vars: r}, i, a) {
    Object.assign(t.style, e, a && a.getProjectionStyles(i));
    for (const u in r)
        t.style.setProperty(u, r[u])
}
const q0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function H0(t, e, r, i) {
    $0(t, e, void 0, i);
    for (const a in e.attrs)
        t.setAttribute(q0.has(a) ? a : xf(a), e.attrs[a])
}
const Sl = {};
function sT(t) {
    Object.assign(Sl, t)
}
function W0(t, {layout: e, layoutId: r}) {
    return cs.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!Sl[t] || t === "opacity")
}
function Af(t, e, r) {
    var i;
    const {style: a} = t
      , u = {};
    for (const c in a)
        (St(a[c]) || e.style && St(e.style[c]) || W0(c, t) || ((i = r == null ? void 0 : r.getValue(c)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (u[c] = a[c]);
    return u
}
function K0(t, e, r) {
    const i = Af(t, e, r);
    for (const a in t)
        if (St(t[a]) || St(e[a])) {
            const u = ii.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[u] = t[a]
        }
    return i
}
function iT(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Dg = ["x", "y", "width", "height", "cx", "cy", "r"]
  , oT = {
    useVisualState: F0({
        scrapeMotionValuesFromProps: K0,
        createRenderState: z0,
        onUpdate: ({props: t, prevProps: e, current: r, renderState: i, latestValues: a}) => {
            if (!r)
                return;
            let u = !!t.drag;
            if (!u) {
                for (const f in a)
                    if (cs.has(f)) {
                        u = !0;
                        break
                    }
            }
            if (!u)
                return;
            let c = !e;
            if (e)
                for (let f = 0; f < Dg.length; f++) {
                    const h = Dg[f];
                    t[h] !== e[h] && (c = !0)
                }
            c && Ue.read( () => {
                iT(r, i),
                Ue.render( () => {
                    _f(i, a, Rf(r.tagName), t.transformTemplate),
                    H0(r, i)
                }
                )
            }
            )
        }
    })
}
  , aT = {
    useVisualState: F0({
        scrapeMotionValuesFromProps: Af,
        createRenderState: Pf
    })
};
function Q0(t, e, r) {
    for (const i in e)
        !St(e[i]) && !W0(i, r) && (t[i] = e[i])
}
function lT({transformTemplate: t}, e) {
    return D.useMemo( () => {
        const r = Pf();
        return Cf(r, e, t),
        Object.assign({}, r.vars, r.style)
    }
    , [e])
}
function uT(t, e) {
    const r = t.style || {}
      , i = {};
    return Q0(i, r, t),
    Object.assign(i, lT(t, e)),
    i
}
function cT(t, e) {
    const r = {}
      , i = uT(t, e);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
function dT(t, e, r, i) {
    const a = D.useMemo( () => {
        const u = z0();
        return _f(u, e, Rf(i), t.transformTemplate),
        {
            ...u.attrs,
            style: {
                ...u.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const u = {};
        Q0(u, t.style, t),
        a.style = {
            ...u,
            ...a.style
        }
    }
    return a
}
function fT(t=!1) {
    return (r, i, a, {latestValues: u}, c) => {
        const h = (bf(r) ? dT : cT)(i, u, c, r)
          , m = _E(i, typeof r == "string", t)
          , g = r !== D.Fragment ? {
            ...m,
            ...h,
            ref: a
        } : {}
          , {children: y} = i
          , w = D.useMemo( () => St(y) ? y.get() : y, [y]);
        return D.createElement(r, {
            ...g,
            children: w
        })
    }
}
function hT(t, e) {
    return function(i, {forwardMotionProps: a}={
        forwardMotionProps: !1
    }) {
        const c = {
            ...bf(i) ? oT : aT,
            preloadedFeatures: t,
            useRender: fT(a),
            createVisualElement: e,
            Component: i
        };
        return ME(c)
    }
}
function G0(t, e) {
    if (!Array.isArray(e))
        return !1;
    const r = e.length;
    if (r !== t.length)
        return !1;
    for (let i = 0; i < r; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function Ll(t, e, r) {
    const i = t.getProps();
    return kf(i, e, r !== void 0 ? r : i.custom, t)
}
const pT = yf( () => window.ScrollTimeline !== void 0);
class mT {
    constructor(e) {
        this.stop = () => this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished"in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, r) {
        for (let i = 0; i < this.animations.length; i++)
            this.animations[i][e] = r
    }
    attachTimeline(e, r) {
        const i = this.animations.map(a => {
            if (pT() && a.attachTimeline)
                return a.attachTimeline(e);
            if (typeof r == "function")
                return r(a)
        }
        );
        return () => {
            i.forEach( (a, u) => {
                a && a(),
                this.animations[u].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let r = 0; r < this.animations.length; r++)
            e = Math.max(e, this.animations[r].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(r => r[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class gT extends mT {
    then(e, r) {
        return Promise.all(this.animations).then(e).catch(r)
    }
}
function Nf(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const Nd = 2e4;
function Y0(t) {
    let e = 0;
    const r = 50;
    let i = t.next(e);
    for (; !i.done && e < Nd; )
        e += r,
        i = t.next(e);
    return e >= Nd ? 1 / 0 : e
}
function Of(t) {
    return typeof t == "function"
}
function Mg(t, e) {
    t.timeline = e,
    t.onfinish = null
}
const jf = t => Array.isArray(t) && typeof t[0] == "number"
  , yT = {
    linearEasing: void 0
};
function vT(t, e) {
    const r = yf(t);
    return () => {
        var i;
        return (i = yT[e]) !== null && i !== void 0 ? i : r()
    }
}
const bl = vT( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , X0 = (t, e, r=10) => {
    let i = "";
    const a = Math.max(Math.round(e / r), 2);
    for (let u = 0; u < a; u++)
        i += t(ti(0, a - 1, u)) + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
;
function J0(t) {
    return !!(typeof t == "function" && bl() || !t || typeof t == "string" && (t in Od || bl()) || jf(t) || Array.isArray(t) && t.every(J0))
}
const to = ([t,e,r,i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`
  , Od = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: to([0, .65, .55, 1]),
    circOut: to([.55, 0, 1, .45]),
    backIn: to([.31, .01, .66, -.59]),
    backOut: to([.33, 1.53, .69, .99])
};
function Z0(t, e) {
    if (t)
        return typeof t == "function" && bl() ? X0(t, e) : jf(t) ? to(t) : Array.isArray(t) ? t.map(r => Z0(r, e) || Od.easeOut) : Od[t]
}
const un = {
    x: !1,
    y: !1
};
function ew() {
    return un.x || un.y
}
function tw(t, e, r) {
    var i;
    if (t instanceof Element)
        return [t];
    if (typeof t == "string") {
        let a = document;
        const u = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
        return u ? Array.from(u) : []
    }
    return Array.from(t)
}
function nw(t, e) {
    const r = tw(t)
      , i = new AbortController
      , a = {
        passive: !0,
        ...e,
        signal: i.signal
    };
    return [r, a, () => i.abort()]
}
function Ig(t) {
    return e => {
        e.pointerType === "touch" || ew() || t(e)
    }
}
function wT(t, e, r={}) {
    const [i,a,u] = nw(t, r)
      , c = Ig(f => {
        const {target: h} = f
          , m = e(f);
        if (typeof m != "function" || !h)
            return;
        const g = Ig(y => {
            m(y),
            h.removeEventListener("pointerleave", g)
        }
        );
        h.addEventListener("pointerleave", g, a)
    }
    );
    return i.forEach(f => {
        f.addEventListener("pointerenter", c, a)
    }
    ),
    u
}
const rw = (t, e) => e ? t === e ? !0 : rw(t, e.parentElement) : !1
  , Lf = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , xT = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function ST(t) {
    return xT.has(t.tagName) || t.tabIndex !== -1
}
const no = new WeakSet;
function Fg(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}
function Qc(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const bT = (t, e) => {
    const r = t.currentTarget;
    if (!r)
        return;
    const i = Fg( () => {
        if (no.has(r))
            return;
        Qc(r, "down");
        const a = Fg( () => {
            Qc(r, "up")
        }
        )
          , u = () => Qc(r, "cancel");
        r.addEventListener("keyup", a, e),
        r.addEventListener("blur", u, e)
    }
    );
    r.addEventListener("keydown", i, e),
    r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
}
;
function Vg(t) {
    return Lf(t) && !ew()
}
function kT(t, e, r={}) {
    const [i,a,u] = nw(t, r)
      , c = f => {
        const h = f.currentTarget;
        if (!Vg(f) || no.has(h))
            return;
        no.add(h);
        const m = e(f)
          , g = (E, b) => {
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", w),
            !(!Vg(E) || !no.has(h)) && (no.delete(h),
            typeof m == "function" && m(E, {
                success: b
            }))
        }
          , y = E => {
            g(E, r.useGlobalTarget || rw(h, E.target))
        }
          , w = E => {
            g(E, !1)
        }
        ;
        window.addEventListener("pointerup", y, a),
        window.addEventListener("pointercancel", w, a)
    }
    ;
    return i.forEach(f => {
        !ST(f) && f.getAttribute("tabindex") === null && (f.tabIndex = 0),
        (r.useGlobalTarget ? window : f).addEventListener("pointerdown", c, a),
        f.addEventListener("focus", m => bT(m, a), a)
    }
    ),
    u
}
function ET(t) {
    return t === "x" || t === "y" ? un[t] ? null : (un[t] = !0,
    () => {
        un[t] = !1
    }
    ) : un.x || un.y ? null : (un.x = un.y = !0,
    () => {
        un.x = un.y = !1
    }
    )
}
const sw = new Set(["width", "height", "top", "left", "right", "bottom", ...ii]);
let ll;
function TT() {
    ll = void 0
}
const kn = {
    now: () => (ll === void 0 && kn.set(dt.isProcessing || SE.useManualTiming ? dt.timestamp : performance.now()),
    ll),
    set: t => {
        ll = t,
        queueMicrotask(TT)
    }
};
function Df(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function Mf(t, e) {
    const r = t.indexOf(e);
    r > -1 && t.splice(r, 1)
}
class If {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Df(this.subscriptions, e),
        () => Mf(this.subscriptions, e)
    }
    notify(e, r, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1)
                this.subscriptions[0](e, r, i);
            else
                for (let u = 0; u < a; u++) {
                    const c = this.subscriptions[u];
                    c && c(e, r, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function iw(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Bg = 30
  , CT = t => !isNaN(parseFloat(t));
class _T {
    constructor(e, r={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (i, a=!0) => {
            const u = kn.now();
            this.updatedAt !== u && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = r.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = kn.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = CT(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, r) {
        this.events[e] || (this.events[e] = new If);
        const i = this.events[e].add(r);
        return e === "change" ? () => {
            i(),
            Ue.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, r) {
        this.passiveEffect = e,
        this.stopPassiveEffect = r
    }
    set(e, r=!0) {
        !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, r, i) {
        this.set(r),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, r=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        r && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = kn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Bg)
            return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, Bg);
        return iw(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(e) {
        return this.stop(),
        new Promise(r => {
            this.hasAnimated = !0,
            this.animation = e(r),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function wo(t, e) {
    return new _T(t,e)
}
function PT(t, e, r) {
    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, wo(r))
}
function RT(t, e) {
    const r = Ll(t, e);
    let {transitionEnd: i={}, transition: a={}, ...u} = r || {};
    u = {
        ...u,
        ...i
    };
    for (const c in u) {
        const f = zE(u[c]);
        PT(t, c, f)
    }
}
function AT(t) {
    return !!(St(t) && t.add)
}
function jd(t, e) {
    const r = t.getValue("willChange");
    if (AT(r))
        return r.add(e)
}
function ow(t) {
    return t.props[D0]
}
const aw = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t
  , NT = 1e-7
  , OT = 12;
function jT(t, e, r, i, a) {
    let u, c, f = 0;
    do
        c = e + (r - e) / 2,
        u = aw(c, i, a) - t,
        u > 0 ? r = c : e = c;
    while (Math.abs(u) > NT && ++f < OT);
    return c
}
function Ao(t, e, r, i) {
    if (t === e && r === i)
        return Bt;
    const a = u => jT(u, 0, 1, t, r);
    return u => u === 0 || u === 1 ? u : aw(a(u), e, i)
}
const lw = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , uw = t => e => 1 - t(1 - e)
  , cw = Ao(.33, 1.53, .69, .99)
  , Ff = uw(cw)
  , dw = lw(Ff)
  , fw = t => (t *= 2) < 1 ? .5 * Ff(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , Vf = t => 1 - Math.sin(Math.acos(t))
  , hw = uw(Vf)
  , pw = lw(Vf)
  , mw = t => /^0[^.\s]+$/u.test(t);
function LT(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || mw(t) : !0
}
const uo = t => Math.round(t * 1e5) / 1e5
  , Bf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function DT(t) {
    return t == null
}
const MT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Uf = (t, e) => r => !!(typeof r == "string" && MT.test(r) && r.startsWith(t) || e && !DT(r) && Object.prototype.hasOwnProperty.call(r, e))
  , gw = (t, e, r) => i => {
    if (typeof i != "string")
        return i;
    const [a,u,c,f] = i.match(Bf);
    return {
        [t]: parseFloat(a),
        [e]: parseFloat(u),
        [r]: parseFloat(c),
        alpha: f !== void 0 ? parseFloat(f) : 1
    }
}
  , IT = t => zn(0, 255, t)
  , Gc = {
    ...oi,
    transform: t => Math.round(IT(t))
}
  , Qr = {
    test: Uf("rgb", "red"),
    parse: gw("red", "green", "blue"),
    transform: ({red: t, green: e, blue: r, alpha: i=1}) => "rgba(" + Gc.transform(t) + ", " + Gc.transform(e) + ", " + Gc.transform(r) + ", " + uo(vo.transform(i)) + ")"
};
function FT(t) {
    let e = ""
      , r = ""
      , i = ""
      , a = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    r = t.substring(3, 5),
    i = t.substring(5, 7),
    a = t.substring(7, 9)) : (e = t.substring(1, 2),
    r = t.substring(2, 3),
    i = t.substring(3, 4),
    a = t.substring(4, 5),
    e += e,
    r += r,
    i += i,
    a += a),
    {
        red: parseInt(e, 16),
        green: parseInt(r, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const Ld = {
    test: Uf("#"),
    parse: FT,
    transform: Qr.transform
}
  , Fs = {
    test: Uf("hsl", "hue"),
    parse: gw("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: r, alpha: i=1}) => "hsla(" + Math.round(t) + ", " + bn.transform(uo(e)) + ", " + bn.transform(uo(r)) + ", " + uo(vo.transform(i)) + ")"
}
  , wt = {
    test: t => Qr.test(t) || Ld.test(t) || Fs.test(t),
    parse: t => Qr.test(t) ? Qr.parse(t) : Fs.test(t) ? Fs.parse(t) : Ld.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Qr.transform(t) : Fs.transform(t)
}
  , VT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function BT(t) {
    var e, r;
    return isNaN(t) && typeof t == "string" && (((e = t.match(Bf)) === null || e === void 0 ? void 0 : e.length) || 0) + (((r = t.match(VT)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const yw = "number"
  , vw = "color"
  , UT = "var"
  , zT = "var("
  , Ug = "${}"
  , $T = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function xo(t) {
    const e = t.toString()
      , r = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , a = [];
    let u = 0;
    const f = e.replace($T, h => (wt.test(h) ? (i.color.push(u),
    a.push(vw),
    r.push(wt.parse(h))) : h.startsWith(zT) ? (i.var.push(u),
    a.push(UT),
    r.push(h)) : (i.number.push(u),
    a.push(yw),
    r.push(parseFloat(h))),
    ++u,
    Ug)).split(Ug);
    return {
        values: r,
        split: f,
        indexes: i,
        types: a
    }
}
function ww(t) {
    return xo(t).values
}
function xw(t) {
    const {split: e, types: r} = xo(t)
      , i = e.length;
    return a => {
        let u = "";
        for (let c = 0; c < i; c++)
            if (u += e[c],
            a[c] !== void 0) {
                const f = r[c];
                f === yw ? u += uo(a[c]) : f === vw ? u += wt.transform(a[c]) : u += a[c]
            }
        return u
    }
}
const qT = t => typeof t == "number" ? 0 : t;
function HT(t) {
    const e = ww(t);
    return xw(t)(e.map(qT))
}
const Cr = {
    test: BT,
    parse: ww,
    createTransformer: xw,
    getAnimatableNone: HT
}
  , WT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function KT(t) {
    const [e,r] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [i] = r.match(Bf) || [];
    if (!i)
        return t;
    const a = r.replace(i, "");
    let u = WT.has(e) ? 1 : 0;
    return i !== r && (u *= 100),
    e + "(" + u + a + ")"
}
const QT = /\b([a-z-]*)\(.*?\)/gu
  , Dd = {
    ...Cr,
    getAnimatableNone: t => {
        const e = t.match(QT);
        return e ? e.map(KT).join(" ") : t
    }
}
  , GT = {
    ...Tf,
    color: wt,
    backgroundColor: wt,
    outlineColor: wt,
    fill: wt,
    stroke: wt,
    borderColor: wt,
    borderTopColor: wt,
    borderRightColor: wt,
    borderBottomColor: wt,
    borderLeftColor: wt,
    filter: Dd,
    WebkitFilter: Dd
}
  , zf = t => GT[t];
function Sw(t, e) {
    let r = zf(t);
    return r !== Dd && (r = Cr),
    r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}
const YT = new Set(["auto", "none", "0"]);
function XT(t, e, r) {
    let i = 0, a;
    for (; i < t.length && !a; ) {
        const u = t[i];
        typeof u == "string" && !YT.has(u) && xo(u).values.length && (a = t[i]),
        i++
    }
    if (a && r)
        for (const u of e)
            t[u] = Sw(r, a)
}
const zg = t => t === oi || t === ce
  , $g = (t, e) => parseFloat(t.split(", ")[e])
  , qg = (t, e) => (r, {transform: i}) => {
    if (i === "none" || !i)
        return 0;
    const a = i.match(/^matrix3d\((.+)\)$/u);
    if (a)
        return $g(a[1], e);
    {
        const u = i.match(/^matrix\((.+)\)$/u);
        return u ? $g(u[1], t) : 0
    }
}
  , JT = new Set(["x", "y", "z"])
  , ZT = ii.filter(t => !JT.has(t));
function eC(t) {
    const e = [];
    return ZT.forEach(r => {
        const i = t.getValue(r);
        i !== void 0 && (e.push([r, i.get()]),
        i.set(r.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const ri = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: r="0"}) => t.max - t.min - parseFloat(e) - parseFloat(r),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: r="0"}) => t.max - t.min - parseFloat(e) - parseFloat(r),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: qg(4, 13),
    y: qg(5, 14)
};
ri.translateX = ri.x;
ri.translateY = ri.y;
const is = new Set;
let Md = !1
  , Id = !1;
function bw() {
    if (Id) {
        const t = Array.from(is).filter(i => i.needsMeasurement)
          , e = new Set(t.map(i => i.element))
          , r = new Map;
        e.forEach(i => {
            const a = eC(i);
            a.length && (r.set(i, a),
            i.render())
        }
        ),
        t.forEach(i => i.measureInitialState()),
        e.forEach(i => {
            i.render();
            const a = r.get(i);
            a && a.forEach( ([u,c]) => {
                var f;
                (f = i.getValue(u)) === null || f === void 0 || f.set(c)
            }
            )
        }
        ),
        t.forEach(i => i.measureEndState()),
        t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    Id = !1,
    Md = !1,
    is.forEach(t => t.complete()),
    is.clear()
}
function kw() {
    is.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (Id = !0)
    }
    )
}
function tC() {
    kw(),
    bw()
}
class $f {
    constructor(e, r, i, a, u, c=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = r,
        this.name = i,
        this.motionValue = a,
        this.element = u,
        this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (is.add(this),
        Md || (Md = !0,
        Ue.read(kw),
        Ue.resolveKeyframes(bw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: r, element: i, motionValue: a} = this;
        for (let u = 0; u < e.length; u++)
            if (e[u] === null)
                if (u === 0) {
                    const c = a == null ? void 0 : a.get()
                      , f = e[e.length - 1];
                    if (c !== void 0)
                        e[0] = c;
                    else if (i && r) {
                        const h = i.readValue(r, f);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = f),
                    a && c === void 0 && a.set(e[0])
                } else
                    e[u] = e[u - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        is.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        is.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Ew = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , nC = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function rC(t) {
    const e = nC.exec(t);
    if (!e)
        return [, ];
    const [,r,i,a] = e;
    return [`--${r ?? i}`, a]
}
function Tw(t, e, r=1) {
    const [i,a] = rC(t);
    if (!i)
        return;
    const u = window.getComputedStyle(e).getPropertyValue(i);
    if (u) {
        const c = u.trim();
        return Ew(c) ? parseFloat(c) : c
    }
    return Ef(a) ? Tw(a, e, r + 1) : a
}
const Cw = t => e => e.test(t)
  , sC = {
    test: t => t === "auto",
    parse: t => t
}
  , _w = [oi, ce, bn, hr, QE, KE, sC]
  , Hg = t => _w.find(Cw(t));
class Pw extends $f {
    constructor(e, r, i, a, u) {
        super(e, r, i, a, u, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: r, name: i} = this;
        if (!r || !r.current)
            return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let m = e[h];
            if (typeof m == "string" && (m = m.trim(),
            Ef(m))) {
                const g = Tw(m, r.current);
                g !== void 0 && (e[h] = g),
                h === e.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !sw.has(i) || e.length !== 2)
            return;
        const [a,u] = e
          , c = Hg(a)
          , f = Hg(u);
        if (c !== f)
            if (zg(c) && zg(f))
                for (let h = 0; h < e.length; h++) {
                    const m = e[h];
                    typeof m == "string" && (e[h] = parseFloat(m))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: r} = this
          , i = [];
        for (let a = 0; a < e.length; a++)
            LT(e[a]) && i.push(a);
        i.length && XT(e, i, r)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: r, name: i} = this;
        if (!e || !e.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = ri[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
        r[0] = this.measuredOrigin;
        const a = r[r.length - 1];
        a !== void 0 && e.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var e;
        const {element: r, name: i, unresolvedKeyframes: a} = this;
        if (!r || !r.current)
            return;
        const u = r.getValue(i);
        u && u.jump(this.measuredOrigin, !1);
        const c = a.length - 1
          , f = a[c];
        a[c] = ri[i](r.measureViewportBox(), window.getComputedStyle(r.current)),
        f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([h,m]) => {
            r.getValue(h).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Wg = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Cr.test(t) || t === "0") && !t.startsWith("url("));
function iC(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e)
            return !0
}
function oC(t, e, r, i) {
    const a = t[0];
    if (a === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const u = t[t.length - 1]
      , c = Wg(a, e)
      , f = Wg(u, e);
    return !c || !f ? !1 : iC(t) || (r === "spring" || Of(r)) && i
}
const aC = t => t !== null;
function Dl(t, {repeat: e, repeatType: r="loop"}, i) {
    const a = t.filter(aC)
      , u = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !u || i === void 0 ? a[u] : i
}
const lC = 40;
class Rw {
    constructor({autoplay: e=!0, delay: r=0, type: i="keyframes", repeat: a=0, repeatDelay: u=0, repeatType: c="loop", ...f}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = kn.now(),
        this.options = {
            autoplay: e,
            delay: r,
            type: i,
            repeat: a,
            repeatDelay: u,
            repeatType: c,
            ...f
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > lC ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && tC(),
        this._resolved
    }
    onKeyframesResolved(e, r) {
        this.resolvedAt = kn.now(),
        this.hasAttemptedResolve = !0;
        const {name: i, type: a, velocity: u, delay: c, onComplete: f, onUpdate: h, isGenerator: m} = this.options;
        if (!m && !oC(e, i, a, u))
            if (c)
                this.options.duration = 0;
            else {
                h && h(Dl(e, this.options, r)),
                f && f(),
                this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(e, r);
        g !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: r,
            ...g
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, r) {
        return this.currentFinishedPromise.then(e, r)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        }
        )
    }
}
const He = (t, e, r) => t + (e - t) * r;
function Yc(t, e, r) {
    return r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}
function uC({hue: t, saturation: e, lightness: r, alpha: i}) {
    t /= 360,
    e /= 100,
    r /= 100;
    let a = 0
      , u = 0
      , c = 0;
    if (!e)
        a = u = c = r;
    else {
        const f = r < .5 ? r * (1 + e) : r + e - r * e
          , h = 2 * r - f;
        a = Yc(h, f, t + 1 / 3),
        u = Yc(h, f, t),
        c = Yc(h, f, t - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(u * 255),
        blue: Math.round(c * 255),
        alpha: i
    }
}
function kl(t, e) {
    return r => r > 0 ? e : t
}
const Xc = (t, e, r) => {
    const i = t * t
      , a = r * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a)
}
  , cC = [Ld, Qr, Fs]
  , dC = t => cC.find(e => e.test(t));
function Kg(t) {
    const e = dC(t);
    if (!e)
        return !1;
    let r = e.parse(t);
    return e === Fs && (r = uC(r)),
    r
}
const Qg = (t, e) => {
    const r = Kg(t)
      , i = Kg(e);
    if (!r || !i)
        return kl(t, e);
    const a = {
        ...r
    };
    return u => (a.red = Xc(r.red, i.red, u),
    a.green = Xc(r.green, i.green, u),
    a.blue = Xc(r.blue, i.blue, u),
    a.alpha = He(r.alpha, i.alpha, u),
    Qr.transform(a))
}
  , fC = (t, e) => r => e(t(r))
  , No = (...t) => t.reduce(fC)
  , Fd = new Set(["none", "hidden"]);
function hC(t, e) {
    return Fd.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}
function pC(t, e) {
    return r => He(t, e, r)
}
function qf(t) {
    return typeof t == "number" ? pC : typeof t == "string" ? Ef(t) ? kl : wt.test(t) ? Qg : yC : Array.isArray(t) ? Aw : typeof t == "object" ? wt.test(t) ? Qg : mC : kl
}
function Aw(t, e) {
    const r = [...t]
      , i = r.length
      , a = t.map( (u, c) => qf(u)(u, e[c]));
    return u => {
        for (let c = 0; c < i; c++)
            r[c] = a[c](u);
        return r
    }
}
function mC(t, e) {
    const r = {
        ...t,
        ...e
    }
      , i = {};
    for (const a in r)
        t[a] !== void 0 && e[a] !== void 0 && (i[a] = qf(t[a])(t[a], e[a]));
    return a => {
        for (const u in i)
            r[u] = i[u](a);
        return r
    }
}
function gC(t, e) {
    var r;
    const i = []
      , a = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let u = 0; u < e.values.length; u++) {
        const c = e.types[u]
          , f = t.indexes[c][a[c]]
          , h = (r = t.values[f]) !== null && r !== void 0 ? r : 0;
        i[u] = h,
        a[c]++
    }
    return i
}
const yC = (t, e) => {
    const r = Cr.createTransformer(e)
      , i = xo(t)
      , a = xo(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? Fd.has(t) && !a.values.length || Fd.has(e) && !i.values.length ? hC(t, e) : No(Aw(gC(i, a), a.values), r) : kl(t, e)
}
;
function Nw(t, e, r) {
    return typeof t == "number" && typeof e == "number" && typeof r == "number" ? He(t, e, r) : qf(t)(t, e)
}
const vC = 5;
function Ow(t, e, r) {
    const i = Math.max(e - vC, 0);
    return iw(r - t(i), e - i)
}
const Qe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Jc = .001;
function wC({duration: t=Qe.duration, bounce: e=Qe.bounce, velocity: r=Qe.velocity, mass: i=Qe.mass}) {
    let a, u, c = 1 - e;
    c = zn(Qe.minDamping, Qe.maxDamping, c),
    t = zn(Qe.minDuration, Qe.maxDuration, Un(t)),
    c < 1 ? (a = m => {
        const g = m * c
          , y = g * t
          , w = g - r
          , E = Vd(m, c)
          , b = Math.exp(-y);
        return Jc - w / E * b
    }
    ,
    u = m => {
        const y = m * c * t
          , w = y * r + r
          , E = Math.pow(c, 2) * Math.pow(m, 2) * t
          , b = Math.exp(-y)
          , k = Vd(Math.pow(m, 2), c);
        return (-a(m) + Jc > 0 ? -1 : 1) * ((w - E) * b) / k
    }
    ) : (a = m => {
        const g = Math.exp(-m * t)
          , y = (m - r) * t + 1;
        return -Jc + g * y
    }
    ,
    u = m => {
        const g = Math.exp(-m * t)
          , y = (r - m) * (t * t);
        return g * y
    }
    );
    const f = 5 / t
      , h = SC(a, u, f);
    if (t = Bn(t),
    isNaN(h))
        return {
            stiffness: Qe.stiffness,
            damping: Qe.damping,
            duration: t
        };
    {
        const m = Math.pow(h, 2) * i;
        return {
            stiffness: m,
            damping: c * 2 * Math.sqrt(i * m),
            duration: t
        }
    }
}
const xC = 12;
function SC(t, e, r) {
    let i = r;
    for (let a = 1; a < xC; a++)
        i = i - t(i) / e(i);
    return i
}
function Vd(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const bC = ["duration", "bounce"]
  , kC = ["stiffness", "damping", "mass"];
function Gg(t, e) {
    return e.some(r => t[r] !== void 0)
}
function EC(t) {
    let e = {
        velocity: Qe.velocity,
        stiffness: Qe.stiffness,
        damping: Qe.damping,
        mass: Qe.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Gg(t, kC) && Gg(t, bC))
        if (t.visualDuration) {
            const r = t.visualDuration
              , i = 2 * Math.PI / (r * 1.2)
              , a = i * i
              , u = 2 * zn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
            e = {
                ...e,
                mass: Qe.mass,
                stiffness: a,
                damping: u
            }
        } else {
            const r = wC(t);
            e = {
                ...e,
                ...r,
                mass: Qe.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function jw(t=Qe.visualDuration, e=Qe.bounce) {
    const r = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: i, restDelta: a} = r;
    const u = r.keyframes[0]
      , c = r.keyframes[r.keyframes.length - 1]
      , f = {
        done: !1,
        value: u
    }
      , {stiffness: h, damping: m, mass: g, duration: y, velocity: w, isResolvedFromDuration: E} = EC({
        ...r,
        velocity: -Un(r.velocity || 0)
    })
      , b = w || 0
      , k = m / (2 * Math.sqrt(h * g))
      , x = c - u
      , R = Un(Math.sqrt(h / g))
      , V = Math.abs(x) < 5;
    i || (i = V ? Qe.restSpeed.granular : Qe.restSpeed.default),
    a || (a = V ? Qe.restDelta.granular : Qe.restDelta.default);
    let L;
    if (k < 1) {
        const B = Vd(R, k);
        L = K => {
            const G = Math.exp(-k * R * K);
            return c - G * ((b + k * R * x) / B * Math.sin(B * K) + x * Math.cos(B * K))
        }
    } else if (k === 1)
        L = B => c - Math.exp(-R * B) * (x + (b + R * x) * B);
    else {
        const B = R * Math.sqrt(k * k - 1);
        L = K => {
            const G = Math.exp(-k * R * K)
              , M = Math.min(B * K, 300);
            return c - G * ((b + k * R * x) * Math.sinh(M) + B * x * Math.cosh(M)) / B
        }
    }
    const j = {
        calculatedDuration: E && y || null,
        next: B => {
            const K = L(B);
            if (E)
                f.done = B >= y;
            else {
                let G = 0;
                k < 1 && (G = B === 0 ? Bn(b) : Ow(L, B, K));
                const M = Math.abs(G) <= i
                  , Z = Math.abs(c - K) <= a;
                f.done = M && Z
            }
            return f.value = f.done ? c : K,
            f
        }
        ,
        toString: () => {
            const B = Math.min(Y0(j), Nd)
              , K = X0(G => j.next(B * G).value, B, 30);
            return B + "ms " + K
        }
    };
    return j
}
function Yg({keyframes: t, velocity: e=0, power: r=.8, timeConstant: i=325, bounceDamping: a=10, bounceStiffness: u=500, modifyTarget: c, min: f, max: h, restDelta: m=.5, restSpeed: g}) {
    const y = t[0]
      , w = {
        done: !1,
        value: y
    }
      , E = M => f !== void 0 && M < f || h !== void 0 && M > h
      , b = M => f === void 0 ? h : h === void 0 || Math.abs(f - M) < Math.abs(h - M) ? f : h;
    let k = r * e;
    const x = y + k
      , R = c === void 0 ? x : c(x);
    R !== x && (k = R - y);
    const V = M => -k * Math.exp(-M / i)
      , L = M => R + V(M)
      , j = M => {
        const Z = V(M)
          , fe = L(M);
        w.done = Math.abs(Z) <= m,
        w.value = w.done ? R : fe
    }
    ;
    let B, K;
    const G = M => {
        E(w.value) && (B = M,
        K = jw({
            keyframes: [w.value, b(w.value)],
            velocity: Ow(L, M, w.value),
            damping: a,
            stiffness: u,
            restDelta: m,
            restSpeed: g
        }))
    }
    ;
    return G(0),
    {
        calculatedDuration: null,
        next: M => {
            let Z = !1;
            return !K && B === void 0 && (Z = !0,
            j(M),
            G(M)),
            B !== void 0 && M >= B ? K.next(M - B) : (!Z && j(M),
            w)
        }
    }
}
const TC = Ao(.42, 0, 1, 1)
  , CC = Ao(0, 0, .58, 1)
  , Lw = Ao(.42, 0, .58, 1)
  , _C = t => Array.isArray(t) && typeof t[0] != "number"
  , PC = {
    linear: Bt,
    easeIn: TC,
    easeInOut: Lw,
    easeOut: CC,
    circIn: Vf,
    circInOut: pw,
    circOut: hw,
    backIn: Ff,
    backInOut: dw,
    backOut: cw,
    anticipate: fw
}
  , Xg = t => {
    if (jf(t)) {
        A0(t.length === 4);
        const [e,r,i,a] = t;
        return Ao(e, r, i, a)
    } else if (typeof t == "string")
        return PC[t];
    return t
}
;
function RC(t, e, r) {
    const i = []
      , a = r || Nw
      , u = t.length - 1;
    for (let c = 0; c < u; c++) {
        let f = a(t[c], t[c + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[c] || Bt : e;
            f = No(h, f)
        }
        i.push(f)
    }
    return i
}
function AC(t, e, {clamp: r=!0, ease: i, mixer: a}={}) {
    const u = t.length;
    if (A0(u === e.length),
    u === 1)
        return () => e[0];
    if (u === 2 && e[0] === e[1])
        return () => e[1];
    const c = t[0] === t[1];
    t[0] > t[u - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const f = RC(e, i, a)
      , h = f.length
      , m = g => {
        if (c && g < t[0])
            return e[0];
        let y = 0;
        if (h > 1)
            for (; y < t.length - 2 && !(g < t[y + 1]); y++)
                ;
        const w = ti(t[y], t[y + 1], g);
        return f[y](w)
    }
    ;
    return r ? g => m(zn(t[0], t[u - 1], g)) : m
}
function NC(t, e) {
    const r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const a = ti(0, e, i);
        t.push(He(r, 1, a))
    }
}
function OC(t) {
    const e = [0];
    return NC(e, t.length - 1),
    e
}
function jC(t, e) {
    return t.map(r => r * e)
}
function LC(t, e) {
    return t.map( () => e || Lw).splice(0, t.length - 1)
}
function El({duration: t=300, keyframes: e, times: r, ease: i="easeInOut"}) {
    const a = _C(i) ? i.map(Xg) : Xg(i)
      , u = {
        done: !1,
        value: e[0]
    }
      , c = jC(r && r.length === e.length ? r : OC(e), t)
      , f = AC(c, e, {
        ease: Array.isArray(a) ? a : LC(e, a)
    });
    return {
        calculatedDuration: t,
        next: h => (u.value = f(h),
        u.done = h >= t,
        u)
    }
}
const DC = t => {
    const e = ({timestamp: r}) => t(r);
    return {
        start: () => Ue.update(e, !0),
        stop: () => Tr(e),
        now: () => dt.isProcessing ? dt.timestamp : kn.now()
    }
}
  , MC = {
    decay: Yg,
    inertia: Yg,
    tween: El,
    keyframes: El,
    spring: jw
}
  , IC = t => t / 100;
class Hf extends Rw {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: h} = this.options;
            h && h()
        }
        ;
        const {name: r, motionValue: i, element: a, keyframes: u} = this.options
          , c = (a == null ? void 0 : a.KeyframeResolver) || $f
          , f = (h, m) => this.onKeyframesResolved(h, m);
        this.resolver = new c(u,f,r,i,a),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {type: r="keyframes", repeat: i=0, repeatDelay: a=0, repeatType: u, velocity: c=0} = this.options
          , f = Of(r) ? r : MC[r] || El;
        let h, m;
        f !== El && typeof e[0] != "number" && (h = No(IC, Nw(e[0], e[1])),
        e = [0, 100]);
        const g = f({
            ...this.options,
            keyframes: e
        });
        u === "mirror" && (m = f({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -c
        })),
        g.calculatedDuration === null && (g.calculatedDuration = Y0(g));
        const {calculatedDuration: y} = g
          , w = y + a
          , E = w * (i + 1) - a;
        return {
            generator: g,
            mirroredGenerator: m,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: w,
            totalDuration: E
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, r=!1) {
        const {resolved: i} = this;
        if (!i) {
            const {keyframes: M} = this.options;
            return {
                done: !0,
                value: M[M.length - 1]
            }
        }
        const {finalKeyframe: a, generator: u, mirroredGenerator: c, mapPercentToKeyframes: f, keyframes: h, calculatedDuration: m, totalDuration: g, resolvedDuration: y} = i;
        if (this.startTime === null)
            return u.next(0);
        const {delay: w, repeat: E, repeatType: b, repeatDelay: k, onUpdate: x} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - g / this.speed, this.startTime)),
        r ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const R = this.currentTime - w * (this.speed >= 0 ? 1 : -1)
          , V = this.speed >= 0 ? R < 0 : R > g;
        this.currentTime = Math.max(R, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let L = this.currentTime
          , j = u;
        if (E) {
            const M = Math.min(this.currentTime, g) / y;
            let Z = Math.floor(M)
              , fe = M % 1;
            !fe && M >= 1 && (fe = 1),
            fe === 1 && Z--,
            Z = Math.min(Z, E + 1),
            !!(Z % 2) && (b === "reverse" ? (fe = 1 - fe,
            k && (fe -= k / y)) : b === "mirror" && (j = c)),
            L = zn(0, 1, fe) * y
        }
        const B = V ? {
            done: !1,
            value: h[0]
        } : j.next(L);
        f && (B.value = f(B.value));
        let {done: K} = B;
        !V && m !== null && (K = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const G = this.holdTime === null && (this.state === "finished" || this.state === "running" && K);
        return G && a !== void 0 && (B.value = Dl(h, this.options, a)),
        x && x(B.value),
        G && this.finish(),
        B
    }
    get duration() {
        const {resolved: e} = this;
        return e ? Un(e.calculatedDuration) : 0
    }
    get time() {
        return Un(this.currentTime)
    }
    set time(e) {
        e = Bn(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const r = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        r && (this.time = Un(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: e=DC, onPlay: r, startTime: i} = this.options;
        this.driver || (this.driver = e(u => this.tick(u))),
        r && r();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const FC = new Set(["opacity", "clipPath", "filter", "transform"]);
function VC(t, e, r, {delay: i=0, duration: a=300, repeat: u=0, repeatType: c="loop", ease: f="easeInOut", times: h}={}) {
    const m = {
        [e]: r
    };
    h && (m.offset = h);
    const g = Z0(f, a);
    return Array.isArray(g) && (m.easing = g),
    t.animate(m, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: u + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    })
}
const BC = yf( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Tl = 10
  , UC = 2e4;
function zC(t) {
    return Of(t.type) || t.type === "spring" || !J0(t.ease)
}
function $C(t, e) {
    const r = new Hf({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const a = [];
    let u = 0;
    for (; !i.done && u < UC; )
        i = r.sample(u),
        a.push(i.value),
        u += Tl;
    return {
        times: void 0,
        keyframes: a,
        duration: u - Tl,
        ease: "linear"
    }
}
const Dw = {
    anticipate: fw,
    backInOut: dw,
    circInOut: pw
};
function qC(t) {
    return t in Dw
}
class Jg extends Rw {
    constructor(e) {
        super(e);
        const {name: r, motionValue: i, element: a, keyframes: u} = this.options;
        this.resolver = new Pw(u, (c, f) => this.onKeyframesResolved(c, f),r,i,a),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, r) {
        let {duration: i=300, times: a, ease: u, type: c, motionValue: f, name: h, startTime: m} = this.options;
        if (!f.owner || !f.owner.current)
            return !1;
        if (typeof u == "string" && bl() && qC(u) && (u = Dw[u]),
        zC(this.options)) {
            const {onComplete: y, onUpdate: w, motionValue: E, element: b, ...k} = this.options
              , x = $C(e, k);
            e = x.keyframes,
            e.length === 1 && (e[1] = e[0]),
            i = x.duration,
            a = x.times,
            u = x.ease,
            c = "keyframes"
        }
        const g = VC(f.owner.current, h, e, {
            ...this.options,
            duration: i,
            times: a,
            ease: u
        });
        return g.startTime = m ?? this.calcStartTime(),
        this.pendingTimeline ? (Mg(g, this.pendingTimeline),
        this.pendingTimeline = void 0) : g.onfinish = () => {
            const {onComplete: y} = this.options;
            f.set(Dl(e, this.options, r)),
            y && y(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: g,
            duration: i,
            times: a,
            type: c,
            ease: u,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: r} = e;
        return Un(r)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: r} = e;
        return Un(r.currentTime || 0)
    }
    set time(e) {
        const {resolved: r} = this;
        if (!r)
            return;
        const {animation: i} = r;
        i.currentTime = Bn(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: r} = e;
        return r.playbackRate
    }
    set speed(e) {
        const {resolved: r} = this;
        if (!r)
            return;
        const {animation: i} = r;
        i.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: r} = e;
        return r.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: r} = e;
        return r.startTime
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            const {resolved: r} = this;
            if (!r)
                return Bt;
            const {animation: i} = r;
            Mg(i, e)
        }
        return Bt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r} = e;
        r.playState === "finished" && this.updateFinishedPromise(),
        r.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r} = e;
        r.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: r, keyframes: i, duration: a, type: u, ease: c, times: f} = e;
        if (r.playState === "idle" || r.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: m, onUpdate: g, onComplete: y, element: w, ...E} = this.options
              , b = new Hf({
                ...E,
                keyframes: i,
                duration: a,
                type: u,
                ease: c,
                times: f,
                isGenerator: !0
            })
              , k = Bn(this.time);
            m.setWithVelocity(b.sample(k - Tl).value, b.sample(k).value, Tl)
        }
        const {onStop: h} = this.options;
        h && h(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: r, name: i, repeatDelay: a, repeatType: u, damping: c, type: f} = e;
        if (!r || !r.owner || !(r.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: h, transformTemplate: m} = r.owner.getProps();
        return BC() && i && FC.has(i) && !h && !m && !a && u !== "mirror" && c !== 0 && f !== "inertia"
    }
}
const HC = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , WC = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , KC = {
    type: "keyframes",
    duration: .8
}
  , QC = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , GC = (t, {keyframes: e}) => e.length > 2 ? KC : cs.has(t) ? t.startsWith("scale") ? WC(e[1]) : HC : QC;
function YC({when: t, delay: e, delayChildren: r, staggerChildren: i, staggerDirection: a, repeat: u, repeatType: c, repeatDelay: f, from: h, elapsed: m, ...g}) {
    return !!Object.keys(g).length
}
const Wf = (t, e, r, i={}, a, u) => c => {
    const f = Nf(i, t) || {}
      , h = f.delay || i.delay || 0;
    let {elapsed: m=0} = i;
    m = m - Bn(h);
    let g = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...f,
        delay: -m,
        onUpdate: w => {
            e.set(w),
            f.onUpdate && f.onUpdate(w)
        }
        ,
        onComplete: () => {
            c(),
            f.onComplete && f.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: u ? void 0 : a
    };
    YC(f) || (g = {
        ...g,
        ...GC(t, g)
    }),
    g.duration && (g.duration = Bn(g.duration)),
    g.repeatDelay && (g.repeatDelay = Bn(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0,
    g.delay === 0 && (y = !0)),
    y && !u && e.get() !== void 0) {
        const w = Dl(g.keyframes, f);
        if (w !== void 0)
            return Ue.update( () => {
                g.onUpdate(w),
                g.onComplete()
            }
            ),
            new gT([])
    }
    return !u && Jg.supports(g) ? new Jg(g) : new Hf(g)
}
;
function XC({protectedKeys: t, needsAnimating: e}, r) {
    const i = t.hasOwnProperty(r) && e[r] !== !0;
    return e[r] = !1,
    i
}
function Mw(t, e, {delay: r=0, transitionOverride: i, type: a}={}) {
    var u;
    let {transition: c=t.getDefaultTransition(), transitionEnd: f, ...h} = e;
    i && (c = i);
    const m = []
      , g = a && t.animationState && t.animationState.getState()[a];
    for (const y in h) {
        const w = t.getValue(y, (u = t.latestValues[y]) !== null && u !== void 0 ? u : null)
          , E = h[y];
        if (E === void 0 || g && XC(g, y))
            continue;
        const b = {
            delay: r,
            ...Nf(c || {}, y)
        };
        let k = !1;
        if (window.MotionHandoffAnimation) {
            const R = ow(t);
            if (R) {
                const V = window.MotionHandoffAnimation(R, y, Ue);
                V !== null && (b.startTime = V,
                k = !0)
            }
        }
        jd(t, y),
        w.start(Wf(y, w, E, t.shouldReduceMotion && sw.has(y) ? {
            type: !1
        } : b, t, k));
        const x = w.animation;
        x && m.push(x)
    }
    return f && Promise.all(m).then( () => {
        Ue.update( () => {
            f && RT(t, f)
        }
        )
    }
    ),
    m
}
function Bd(t, e, r={}) {
    var i;
    const a = Ll(t, e, r.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {transition: u=t.getDefaultTransition() || {}} = a || {};
    r.transitionOverride && (u = r.transitionOverride);
    const c = a ? () => Promise.all(Mw(t, a, r)) : () => Promise.resolve()
      , f = t.variantChildren && t.variantChildren.size ? (m=0) => {
        const {delayChildren: g=0, staggerChildren: y, staggerDirection: w} = u;
        return JC(t, e, g + m, y, w, r)
    }
    : () => Promise.resolve()
      , {when: h} = u;
    if (h) {
        const [m,g] = h === "beforeChildren" ? [c, f] : [f, c];
        return m().then( () => g())
    } else
        return Promise.all([c(), f(r.delay)])
}
function JC(t, e, r=0, i=0, a=1, u) {
    const c = []
      , f = (t.variantChildren.size - 1) * i
      , h = a === 1 ? (m=0) => m * i : (m=0) => f - m * i;
    return Array.from(t.variantChildren).sort(ZC).forEach( (m, g) => {
        m.notify("AnimationStart", e),
        c.push(Bd(m, e, {
            ...u,
            delay: r + h(g)
        }).then( () => m.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(c)
}
function ZC(t, e) {
    return t.sortNodePosition(e)
}
function e_(t, e, r={}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const a = e.map(u => Bd(t, u, r));
        i = Promise.all(a)
    } else if (typeof e == "string")
        i = Bd(t, e, r);
    else {
        const a = typeof e == "function" ? Ll(t, e, r.custom) : e;
        i = Promise.all(Mw(t, a, r))
    }
    return i.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
const t_ = wf.length;
function Iw(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const r = t.parent ? Iw(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial),
        r
    }
    const e = {};
    for (let r = 0; r < t_; r++) {
        const i = wf[r]
          , a = t.props[i];
        (yo(a) || a === !1) && (e[i] = a)
    }
    return e
}
const n_ = [...vf].reverse()
  , r_ = vf.length;
function s_(t) {
    return e => Promise.all(e.map( ({animation: r, options: i}) => e_(t, r, i)))
}
function i_(t) {
    let e = s_(t)
      , r = Zg()
      , i = !0;
    const a = h => (m, g) => {
        var y;
        const w = Ll(t, g, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (w) {
            const {transition: E, transitionEnd: b, ...k} = w;
            m = {
                ...m,
                ...k,
                ...b
            }
        }
        return m
    }
    ;
    function u(h) {
        e = h(t)
    }
    function c(h) {
        const {props: m} = t
          , g = Iw(t.parent) || {}
          , y = []
          , w = new Set;
        let E = {}
          , b = 1 / 0;
        for (let x = 0; x < r_; x++) {
            const R = n_[x]
              , V = r[R]
              , L = m[R] !== void 0 ? m[R] : g[R]
              , j = yo(L)
              , B = R === h ? V.isActive : null;
            B === !1 && (b = x);
            let K = L === g[R] && L !== m[R] && j;
            if (K && i && t.manuallyAnimateOnMount && (K = !1),
            V.protectedKeys = {
                ...E
            },
            !V.isActive && B === null || !L && !V.prevProp || Ol(L) || typeof L == "boolean")
                continue;
            const G = o_(V.prevProp, L);
            let M = G || R === h && V.isActive && !K && j || x > b && j
              , Z = !1;
            const fe = Array.isArray(L) ? L : [L];
            let Re = fe.reduce(a(R), {});
            B === !1 && (Re = {});
            const {prevResolvedValues: Le={}} = V
              , De = {
                ...Le,
                ...Re
            }
              , Ae = de => {
                M = !0,
                w.has(de) && (Z = !0,
                w.delete(de)),
                V.needsAnimating[de] = !0;
                const W = t.getValue(de);
                W && (W.liveStyle = !1)
            }
            ;
            for (const de in De) {
                const W = Re[de]
                  , se = Le[de];
                if (E.hasOwnProperty(de))
                    continue;
                let U = !1;
                Ad(W) && Ad(se) ? U = !G0(W, se) : U = W !== se,
                U ? W != null ? Ae(de) : w.add(de) : W !== void 0 && w.has(de) ? Ae(de) : V.protectedKeys[de] = !0
            }
            V.prevProp = L,
            V.prevResolvedValues = Re,
            V.isActive && (E = {
                ...E,
                ...Re
            }),
            i && t.blockInitialAnimation && (M = !1),
            M && (!(K && G) || Z) && y.push(...fe.map(de => ({
                animation: de,
                options: {
                    type: R
                }
            })))
        }
        if (w.size) {
            const x = {};
            w.forEach(R => {
                const V = t.getBaseTarget(R)
                  , L = t.getValue(R);
                L && (L.liveStyle = !0),
                x[R] = V ?? null
            }
            ),
            y.push({
                animation: x
            })
        }
        let k = !!y.length;
        return i && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (k = !1),
        i = !1,
        k ? e(y) : Promise.resolve()
    }
    function f(h, m) {
        var g;
        if (r[h].isActive === m)
            return Promise.resolve();
        (g = t.variantChildren) === null || g === void 0 || g.forEach(w => {
            var E;
            return (E = w.animationState) === null || E === void 0 ? void 0 : E.setActive(h, m)
        }
        ),
        r[h].isActive = m;
        const y = c(h);
        for (const w in r)
            r[w].protectedKeys = {};
        return y
    }
    return {
        animateChanges: c,
        setActive: f,
        setAnimateFunction: u,
        getState: () => r,
        reset: () => {
            r = Zg(),
            i = !0
        }
    }
}
function o_(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !G0(e, t) : !1
}
function qr(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Zg() {
    return {
        animate: qr(!0),
        whileInView: qr(),
        whileHover: qr(),
        whileTap: qr(),
        whileDrag: qr(),
        whileFocus: qr(),
        exit: qr()
    }
}
class Pr {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
class a_ extends Pr {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = i_(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        Ol(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: r} = this.node.prevProps || {};
        e !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let l_ = 0;
class u_ extends Pr {
    constructor() {
        super(...arguments),
        this.id = l_++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const a = this.node.animationState.setActive("exit", !e);
        r && !e && a.then( () => r(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const c_ = {
    animation: {
        Feature: a_
    },
    exit: {
        Feature: u_
    }
};
function So(t, e, r, i={
    passive: !0
}) {
    return t.addEventListener(e, r, i),
    () => t.removeEventListener(e, r)
}
function Oo(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const d_ = t => e => Lf(e) && t(e, Oo(e));
function co(t, e, r, i) {
    return So(t, e, d_(r), i)
}
const ey = (t, e) => Math.abs(t - e);
function f_(t, e) {
    const r = ey(t.x, e.x)
      , i = ey(t.y, e.y);
    return Math.sqrt(r ** 2 + i ** 2)
}
class Fw {
    constructor(e, r, {transformPagePoint: i, contextWindow: a, dragSnapToOrigin: u=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = ed(this.lastMoveEventInfo, this.history)
              , w = this.startEvent !== null
              , E = f_(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!w && !E)
                return;
            const {point: b} = y
              , {timestamp: k} = dt;
            this.history.push({
                ...b,
                timestamp: k
            });
            const {onStart: x, onMove: R} = this.handlers;
            w || (x && x(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            R && R(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, w) => {
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = Zc(w, this.transformPagePoint),
            Ue.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, w) => {
            this.end();
            const {onEnd: E, onSessionEnd: b, resumeAnimation: k} = this.handlers;
            if (this.dragSnapToOrigin && k && k(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const x = ed(y.type === "pointercancel" ? this.lastMoveEventInfo : Zc(w, this.transformPagePoint), this.history);
            this.startEvent && E && E(y, x),
            b && b(y, x)
        }
        ,
        !Lf(e))
            return;
        this.dragSnapToOrigin = u,
        this.handlers = r,
        this.transformPagePoint = i,
        this.contextWindow = a || window;
        const c = Oo(e)
          , f = Zc(c, this.transformPagePoint)
          , {point: h} = f
          , {timestamp: m} = dt;
        this.history = [{
            ...h,
            timestamp: m
        }];
        const {onSessionStart: g} = r;
        g && g(e, ed(f, this.history)),
        this.removeListeners = No(co(this.contextWindow, "pointermove", this.handlePointerMove), co(this.contextWindow, "pointerup", this.handlePointerUp), co(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Tr(this.updatePoint)
    }
}
function Zc(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function ty(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function ed({point: t}, e) {
    return {
        point: t,
        delta: ty(t, Vw(e)),
        offset: ty(t, h_(e)),
        velocity: p_(e, .1)
    }
}
function h_(t) {
    return t[0]
}
function Vw(t) {
    return t[t.length - 1]
}
function p_(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let r = t.length - 1
      , i = null;
    const a = Vw(t);
    for (; r >= 0 && (i = t[r],
    !(a.timestamp - i.timestamp > Bn(e))); )
        r--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const u = Un(a.timestamp - i.timestamp);
    if (u === 0)
        return {
            x: 0,
            y: 0
        };
    const c = {
        x: (a.x - i.x) / u,
        y: (a.y - i.y) / u
    };
    return c.x === 1 / 0 && (c.x = 0),
    c.y === 1 / 0 && (c.y = 0),
    c
}
const Bw = 1e-4
  , m_ = 1 - Bw
  , g_ = 1 + Bw
  , Uw = .01
  , y_ = 0 - Uw
  , v_ = 0 + Uw;
function Ut(t) {
    return t.max - t.min
}
function w_(t, e, r) {
    return Math.abs(t - e) <= r
}
function ny(t, e, r, i=.5) {
    t.origin = i,
    t.originPoint = He(e.min, e.max, t.origin),
    t.scale = Ut(r) / Ut(e),
    t.translate = He(r.min, r.max, t.origin) - t.originPoint,
    (t.scale >= m_ && t.scale <= g_ || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= y_ && t.translate <= v_ || isNaN(t.translate)) && (t.translate = 0)
}
function fo(t, e, r, i) {
    ny(t.x, e.x, r.x, i ? i.originX : void 0),
    ny(t.y, e.y, r.y, i ? i.originY : void 0)
}
function ry(t, e, r) {
    t.min = r.min + e.min,
    t.max = t.min + Ut(e)
}
function x_(t, e, r) {
    ry(t.x, e.x, r.x),
    ry(t.y, e.y, r.y)
}
function sy(t, e, r) {
    t.min = e.min - r.min,
    t.max = t.min + Ut(e)
}
function ho(t, e, r) {
    sy(t.x, e.x, r.x),
    sy(t.y, e.y, r.y)
}
function S_(t, {min: e, max: r}, i) {
    return e !== void 0 && t < e ? t = i ? He(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? He(r, t, i.max) : Math.min(t, r)),
    t
}
function iy(t, e, r) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}
function b_(t, {top: e, left: r, bottom: i, right: a}) {
    return {
        x: iy(t.x, r, a),
        y: iy(t.y, e, i)
    }
}
function oy(t, e) {
    let r = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([r,i] = [i, r]),
    {
        min: r,
        max: i
    }
}
function k_(t, e) {
    return {
        x: oy(t.x, e.x),
        y: oy(t.y, e.y)
    }
}
function E_(t, e) {
    let r = .5;
    const i = Ut(t)
      , a = Ut(e);
    return a > i ? r = ti(e.min, e.max - i, t.min) : i > a && (r = ti(t.min, t.max - a, e.min)),
    zn(0, 1, r)
}
function T_(t, e) {
    const r = {};
    return e.min !== void 0 && (r.min = e.min - t.min),
    e.max !== void 0 && (r.max = e.max - t.min),
    r
}
const Ud = .35;
function C_(t=Ud) {
    return t === !1 ? t = 0 : t === !0 && (t = Ud),
    {
        x: ay(t, "left", "right"),
        y: ay(t, "top", "bottom")
    }
}
function ay(t, e, r) {
    return {
        min: ly(t, e),
        max: ly(t, r)
    }
}
function ly(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const uy = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Vs = () => ({
    x: uy(),
    y: uy()
})
  , cy = () => ({
    min: 0,
    max: 0
})
  , Xe = () => ({
    x: cy(),
    y: cy()
});
function Yt(t) {
    return [t("x"), t("y")]
}
function zw({top: t, left: e, right: r, bottom: i}) {
    return {
        x: {
            min: e,
            max: r
        },
        y: {
            min: t,
            max: i
        }
    }
}
function __({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function P_(t, e) {
    if (!e)
        return t;
    const r = e({
        x: t.left,
        y: t.top
    })
      , i = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: r.y,
        left: r.x,
        bottom: i.y,
        right: i.x
    }
}
function td(t) {
    return t === void 0 || t === 1
}
function zd({scale: t, scaleX: e, scaleY: r}) {
    return !td(t) || !td(e) || !td(r)
}
function Hr(t) {
    return zd(t) || $w(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function $w(t) {
    return dy(t.x) || dy(t.y)
}
function dy(t) {
    return t && t !== "0%"
}
function Cl(t, e, r) {
    const i = t - r
      , a = e * i;
    return r + a
}
function fy(t, e, r, i, a) {
    return a !== void 0 && (t = Cl(t, a, i)),
    Cl(t, r, i) + e
}
function $d(t, e=0, r=1, i, a) {
    t.min = fy(t.min, e, r, i, a),
    t.max = fy(t.max, e, r, i, a)
}
function qw(t, {x: e, y: r}) {
    $d(t.x, e.translate, e.scale, e.originPoint),
    $d(t.y, r.translate, r.scale, r.originPoint)
}
const hy = .999999999999
  , py = 1.0000000000001;
function R_(t, e, r, i=!1) {
    const a = r.length;
    if (!a)
        return;
    e.x = e.y = 1;
    let u, c;
    for (let f = 0; f < a; f++) {
        u = r[f],
        c = u.projectionDelta;
        const {visualElement: h} = u.options;
        h && h.props.style && h.props.style.display === "contents" || (i && u.options.layoutScroll && u.scroll && u !== u.root && Us(t, {
            x: -u.scroll.offset.x,
            y: -u.scroll.offset.y
        }),
        c && (e.x *= c.x.scale,
        e.y *= c.y.scale,
        qw(t, c)),
        i && Hr(u.latestValues) && Us(t, u.latestValues))
    }
    e.x < py && e.x > hy && (e.x = 1),
    e.y < py && e.y > hy && (e.y = 1)
}
function Bs(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function my(t, e, r, i, a=.5) {
    const u = He(t.min, t.max, a);
    $d(t, e, r, u, i)
}
function Us(t, e) {
    my(t.x, e.x, e.scaleX, e.scale, e.originX),
    my(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function Hw(t, e) {
    return zw(P_(t.getBoundingClientRect(), e))
}
function A_(t, e, r) {
    const i = Hw(t, r)
      , {scroll: a} = e;
    return a && (Bs(i.x, a.offset.x),
    Bs(i.y, a.offset.y)),
    i
}
const Ww = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , N_ = new WeakMap;
class O_ {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Xe(),
        this.visualElement = e
    }
    start(e, {snapToCursor: r=!1}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const a = g => {
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            r && this.snapToCursor(Oo(g).point)
        }
          , u = (g, y) => {
            const {drag: w, dragPropagation: E, onDragStart: b} = this.getProps();
            if (w && !E && (this.openDragLock && this.openDragLock(),
            this.openDragLock = ET(w),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Yt(x => {
                let R = this.getAxisMotionValue(x).get() || 0;
                if (bn.test(R)) {
                    const {projection: V} = this.visualElement;
                    if (V && V.layout) {
                        const L = V.layout.layoutBox[x];
                        L && (R = Ut(L) * (parseFloat(R) / 100))
                    }
                }
                this.originPoint[x] = R
            }
            ),
            b && Ue.postRender( () => b(g, y)),
            jd(this.visualElement, "transform");
            const {animationState: k} = this.visualElement;
            k && k.setActive("whileDrag", !0)
        }
          , c = (g, y) => {
            const {dragPropagation: w, dragDirectionLock: E, onDirectionLock: b, onDrag: k} = this.getProps();
            if (!w && !this.openDragLock)
                return;
            const {offset: x} = y;
            if (E && this.currentDirection === null) {
                this.currentDirection = j_(x),
                this.currentDirection !== null && b && b(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, x),
            this.updateAxis("y", y.point, x),
            this.visualElement.render(),
            k && k(g, y)
        }
          , f = (g, y) => this.stop(g, y)
          , h = () => Yt(g => {
            var y;
            return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: m} = this.getProps();
        this.panSession = new Fw(e,{
            onSessionStart: a,
            onStart: u,
            onMove: c,
            onSessionEnd: f,
            resumeAnimation: h
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: Ww(this.visualElement)
        })
    }
    stop(e, r) {
        const i = this.isDragging;
        if (this.cancel(),
        !i)
            return;
        const {velocity: a} = r;
        this.startAnimation(a);
        const {onDragEnd: u} = this.getProps();
        u && Ue.postRender( () => u(e, r))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: r} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        r && r.setActive("whileDrag", !1)
    }
    updateAxis(e, r, i) {
        const {drag: a} = this.getProps();
        if (!i || !tl(e, a, this.currentDirection))
            return;
        const u = this.getAxisMotionValue(e);
        let c = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (c = S_(c, this.constraints[e], this.elastic[e])),
        u.set(c)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: r, dragElastic: i} = this.getProps()
          , a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , u = this.constraints;
        r && Is(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = b_(a.layoutBox, r) : this.constraints = !1,
        this.elastic = C_(i),
        u !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && Yt(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = T_(a.layoutBox[c], this.constraints[c]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: r} = this.getProps();
        if (!e || !Is(e))
            return !1;
        const i = e.current
          , {projection: a} = this.visualElement;
        if (!a || !a.layout)
            return !1;
        const u = A_(i, a.root, this.visualElement.getTransformPagePoint());
        let c = k_(a.layout.layoutBox, u);
        if (r) {
            const f = r(__(c));
            this.hasMutatedConstraints = !!f,
            f && (c = zw(f))
        }
        return c
    }
    startAnimation(e) {
        const {drag: r, dragMomentum: i, dragElastic: a, dragTransition: u, dragSnapToOrigin: c, onDragTransitionEnd: f} = this.getProps()
          , h = this.constraints || {}
          , m = Yt(g => {
            if (!tl(g, r, this.currentDirection))
                return;
            let y = h && h[g] || {};
            c && (y = {
                min: 0,
                max: 0
            });
            const w = a ? 200 : 1e6
              , E = a ? 40 : 1e7
              , b = {
                type: "inertia",
                velocity: i ? e[g] : 0,
                bounceStiffness: w,
                bounceDamping: E,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...u,
                ...y
            };
            return this.startAxisValueAnimation(g, b)
        }
        );
        return Promise.all(m).then(f)
    }
    startAxisValueAnimation(e, r) {
        const i = this.getAxisMotionValue(e);
        return jd(this.visualElement, e),
        i.start(Wf(e, i, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        Yt(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Yt(e => {
            var r;
            return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.pause()
        }
        )
    }
    getAnimationState(e) {
        var r;
        return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.state
    }
    getAxisMotionValue(e) {
        const r = `_drag${e.toUpperCase()}`
          , i = this.visualElement.getProps()
          , a = i[r];
        return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Yt(r => {
            const {drag: i} = this.getProps();
            if (!tl(r, i, this.currentDirection))
                return;
            const {projection: a} = this.visualElement
              , u = this.getAxisMotionValue(r);
            if (a && a.layout) {
                const {min: c, max: f} = a.layout.layoutBox[r];
                u.set(e[r] - He(c, f, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: r} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!Is(r) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        Yt(c => {
            const f = this.getAxisMotionValue(c);
            if (f && this.constraints !== !1) {
                const h = f.get();
                a[c] = E_({
                    min: h,
                    max: h
                }, this.constraints[c])
            }
        }
        );
        const {transformTemplate: u} = this.visualElement.getProps();
        this.visualElement.current.style.transform = u ? u({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.resolveConstraints(),
        Yt(c => {
            if (!tl(c, e, null))
                return;
            const f = this.getAxisMotionValue(c)
              , {min: h, max: m} = this.constraints[c];
            f.set(He(h, m, a[c]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        N_.set(this.visualElement, this);
        const e = this.visualElement.current
          , r = co(e, "pointerdown", h => {
            const {drag: m, dragListener: g=!0} = this.getProps();
            m && g && this.start(h)
        }
        )
          , i = () => {
            const {dragConstraints: h} = this.getProps();
            Is(h) && h.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: a} = this.visualElement
          , u = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(),
        a.updateLayout()),
        Ue.read(i);
        const c = So(window, "resize", () => this.scalePositionWithinConstraints())
          , f = a.addEventListener("didUpdate", ( ({delta: h, hasLayoutChanged: m}) => {
            this.isDragging && m && (Yt(g => {
                const y = this.getAxisMotionValue(g);
                y && (this.originPoint[g] += h[g].translate,
                y.set(y.get() + h[g].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            c(),
            r(),
            u(),
            f && f()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: r=!1, dragDirectionLock: i=!1, dragPropagation: a=!1, dragConstraints: u=!1, dragElastic: c=Ud, dragMomentum: f=!0} = e;
        return {
            ...e,
            drag: r,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: u,
            dragElastic: c,
            dragMomentum: f
        }
    }
}
function tl(t, e, r) {
    return (e === !0 || e === t) && (r === null || r === t)
}
function j_(t, e=10) {
    let r = null;
    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"),
    r
}
class L_ extends Pr {
    constructor(e) {
        super(e),
        this.removeGroupControls = Bt,
        this.removeListeners = Bt,
        this.controls = new O_(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Bt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const gy = t => (e, r) => {
    t && Ue.postRender( () => t(e, r))
}
;
class D_ extends Pr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Bt
    }
    onPointerDown(e) {
        this.session = new Fw(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Ww(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: r, onPan: i, onPanEnd: a} = this.node.getProps();
        return {
            onSessionStart: gy(e),
            onStart: gy(r),
            onMove: i,
            onEnd: (u, c) => {
                delete this.session,
                a && Ue.postRender( () => a(u, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = co(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const ul = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function yy(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Yi = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (ce.test(t))
                t = parseFloat(t);
            else
                return t;
        const r = yy(t, e.target.x)
          , i = yy(t, e.target.y);
        return `${r}% ${i}%`
    }
}
  , M_ = {
    correct: (t, {treeScale: e, projectionDelta: r}) => {
        const i = t
          , a = Cr.parse(t);
        if (a.length > 5)
            return i;
        const u = Cr.createTransformer(t)
          , c = typeof a[0] != "number" ? 1 : 0
          , f = r.x.scale * e.x
          , h = r.y.scale * e.y;
        a[0 + c] /= f,
        a[1 + c] /= h;
        const m = He(f, h, .5);
        return typeof a[2 + c] == "number" && (a[2 + c] /= m),
        typeof a[3 + c] == "number" && (a[3 + c] /= m),
        u(a)
    }
};
class I_ extends D.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: r, switchLayoutGroup: i, layoutId: a} = this.props
          , {projection: u} = e;
        sT(F_),
        u && (r.group && r.group.add(u),
        i && i.register && a && i.register(u),
        u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        u.setOptions({
            ...u.options,
            onExitComplete: () => this.safeToRemove()
        })),
        ul.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: r, visualElement: i, drag: a, isPresent: u} = this.props
          , c = i.projection;
        return c && (c.isPresent = u,
        a || e.layoutDependency !== r || r === void 0 ? c.willUpdate() : this.safeToRemove(),
        e.isPresent !== u && (u ? c.promote() : c.relegate() || Ue.postRender( () => {
            const f = c.getStack();
            (!f || !f.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        Sf.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: r, switchLayoutGroup: i} = this.props
          , {projection: a} = e;
        a && (a.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(a),
        i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function Kw(t) {
    const [e,r] = P0()
      , i = D.useContext(hf);
    return S.jsx(I_, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: D.useContext(M0),
        isPresent: e,
        safeToRemove: r
    })
}
const F_ = {
    borderRadius: {
        ...Yi,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Yi,
    borderTopRightRadius: Yi,
    borderBottomLeftRadius: Yi,
    borderBottomRightRadius: Yi,
    boxShadow: M_
};
function V_(t, e, r) {
    const i = St(t) ? t : wo(t);
    return i.start(Wf("", i, e, r)),
    i.animation
}
function B_(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const U_ = (t, e) => t.depth - e.depth;
class z_ {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        Df(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        Mf(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(U_),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function $_(t, e) {
    const r = kn.now()
      , i = ({timestamp: a}) => {
        const u = a - r;
        u >= e && (Tr(i),
        t(u - e))
    }
    ;
    return Ue.read(i, !0),
    () => Tr(i)
}
const Qw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , q_ = Qw.length
  , vy = t => typeof t == "string" ? parseFloat(t) : t
  , wy = t => typeof t == "number" || ce.test(t);
function H_(t, e, r, i, a, u) {
    a ? (t.opacity = He(0, r.opacity !== void 0 ? r.opacity : 1, W_(i)),
    t.opacityExit = He(e.opacity !== void 0 ? e.opacity : 1, 0, K_(i))) : u && (t.opacity = He(e.opacity !== void 0 ? e.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, i));
    for (let c = 0; c < q_; c++) {
        const f = `border${Qw[c]}Radius`;
        let h = xy(e, f)
          , m = xy(r, f);
        if (h === void 0 && m === void 0)
            continue;
        h || (h = 0),
        m || (m = 0),
        h === 0 || m === 0 || wy(h) === wy(m) ? (t[f] = Math.max(He(vy(h), vy(m), i), 0),
        (bn.test(m) || bn.test(h)) && (t[f] += "%")) : t[f] = m
    }
    (e.rotate || r.rotate) && (t.rotate = He(e.rotate || 0, r.rotate || 0, i))
}
function xy(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const W_ = Gw(0, .5, hw)
  , K_ = Gw(.5, .95, Bt);
function Gw(t, e, r) {
    return i => i < t ? 0 : i > e ? 1 : r(ti(t, e, i))
}
function Sy(t, e) {
    t.min = e.min,
    t.max = e.max
}
function Qt(t, e) {
    Sy(t.x, e.x),
    Sy(t.y, e.y)
}
function by(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function ky(t, e, r, i, a) {
    return t -= e,
    t = Cl(t, 1 / r, i),
    a !== void 0 && (t = Cl(t, 1 / a, i)),
    t
}
function Q_(t, e=0, r=1, i=.5, a, u=t, c=t) {
    if (bn.test(e) && (e = parseFloat(e),
    e = He(c.min, c.max, e / 100) - c.min),
    typeof e != "number")
        return;
    let f = He(u.min, u.max, i);
    t === u && (f -= e),
    t.min = ky(t.min, e, r, f, a),
    t.max = ky(t.max, e, r, f, a)
}
function Ey(t, e, [r,i,a], u, c) {
    Q_(t, e[r], e[i], e[a], e.scale, u, c)
}
const G_ = ["x", "scaleX", "originX"]
  , Y_ = ["y", "scaleY", "originY"];
function Ty(t, e, r, i) {
    Ey(t.x, e, G_, r ? r.x : void 0, i ? i.x : void 0),
    Ey(t.y, e, Y_, r ? r.y : void 0, i ? i.y : void 0)
}
function Cy(t) {
    return t.translate === 0 && t.scale === 1
}
function Yw(t) {
    return Cy(t.x) && Cy(t.y)
}
function _y(t, e) {
    return t.min === e.min && t.max === e.max
}
function X_(t, e) {
    return _y(t.x, e.x) && _y(t.y, e.y)
}
function Py(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function Xw(t, e) {
    return Py(t.x, e.x) && Py(t.y, e.y)
}
function Ry(t) {
    return Ut(t.x) / Ut(t.y)
}
function Ay(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class J_ {
    constructor() {
        this.members = []
    }
    add(e) {
        Df(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (Mf(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(e) {
        const r = this.members.findIndex(a => e === a);
        if (r === 0)
            return !1;
        let i;
        for (let a = r; a >= 0; a--) {
            const u = this.members[a];
            if (u.isPresent !== !1) {
                i = u;
                break
            }
        }
        return i ? (this.promote(i),
        !0) : !1
    }
    promote(e, r) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i,
        this.lead = e,
        e.show(),
        i)) {
            i.instance && i.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = i,
            r && (e.resumeFrom.preserveOpacity = !0),
            i.snapshot && (e.snapshot = i.snapshot,
            e.snapshot.latestValues = i.animationValues || i.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: a} = e.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: r, resumingFrom: i} = e;
            r.onExitComplete && r.onExitComplete(),
            i && i.options.onExitComplete && i.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Z_(t, e, r) {
    let i = "";
    const a = t.x.translate / e.x
      , u = t.y.translate / e.y
      , c = (r == null ? void 0 : r.z) || 0;
    if ((a || u || c) && (i = `translate3d(${a}px, ${u}px, ${c}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    r) {
        const {transformPerspective: m, rotate: g, rotateX: y, rotateY: w, skewX: E, skewY: b} = r;
        m && (i = `perspective(${m}px) ${i}`),
        g && (i += `rotate(${g}deg) `),
        y && (i += `rotateX(${y}deg) `),
        w && (i += `rotateY(${w}deg) `),
        E && (i += `skewX(${E}deg) `),
        b && (i += `skewY(${b}deg) `)
    }
    const f = t.x.scale * e.x
      , h = t.y.scale * e.y;
    return (f !== 1 || h !== 1) && (i += `scale(${f}, ${h})`),
    i || "none"
}
const Wr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , ro = typeof window < "u" && window.MotionDebug !== void 0
  , nd = ["", "X", "Y", "Z"]
  , eP = {
    visibility: "hidden"
}
  , Ny = 1e3;
let tP = 0;
function rd(t, e, r, i) {
    const {latestValues: a} = e;
    a[t] && (r[t] = a[t],
    e.setStaticValue(t, 0),
    i && (i[t] = 0))
}
function Jw(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const r = ow(e);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {layout: a, layoutId: u} = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Ue, !(a || u))
    }
    const {parent: i} = t;
    i && !i.hasCheckedOptimisedAppear && Jw(i)
}
function Zw({attachResizeListener: t, defaultParent: e, measureScroll: r, checkIsScrollRoot: i, resetTransform: a}) {
    return class {
        constructor(c={}, f=e == null ? void 0 : e()) {
            this.id = tP++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                ro && (Wr.totalNodes = Wr.resolvedTargetDeltas = Wr.recalculatedProjection = 0),
                this.nodes.forEach(sP),
                this.nodes.forEach(uP),
                this.nodes.forEach(cP),
                this.nodes.forEach(iP),
                ro && window.MotionDebug.record(Wr)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = c,
            this.root = f ? f.root || f : this,
            this.path = f ? [...f.path, f] : [],
            this.parent = f,
            this.depth = f ? f.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new z_)
        }
        addEventListener(c, f) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new If),
            this.eventHandlers.get(c).add(f)
        }
        notifyListeners(c, ...f) {
            const h = this.eventHandlers.get(c);
            h && h.notify(...f)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c, f=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = B_(c),
            this.instance = c;
            const {layoutId: h, layout: m, visualElement: g} = this.options;
            if (g && !g.current && g.mount(c),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            f && (m || h) && (this.isLayoutDirty = !0),
            t) {
                let y;
                const w = () => this.root.updateBlockedByResize = !1;
                t(c, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = $_(w, 250),
                    ul.hasAnimatedSinceResize && (ul.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(jy))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && g && (h || m) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: w, hasRelativeTargetChanged: E, layout: b}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const k = this.options.transition || g.getDefaultTransition() || mP
                  , {onLayoutAnimationStart: x, onLayoutAnimationComplete: R} = g.getProps()
                  , V = !this.targetLayout || !Xw(this.targetLayout, b) || E
                  , L = !w && E;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || L || w && (V || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, L);
                    const j = {
                        ...Nf(k, "layout"),
                        onPlay: x,
                        onComplete: R
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (j.delay = 0,
                    j.type = !1),
                    this.startAnimation(j)
                } else
                    w || jy(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = b
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Tr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(dP),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: c} = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Jw(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: f, layout: h} = this.options;
            if (f === void 0 && !h)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Oy);
                return
            }
            this.isUpdating || this.nodes.forEach(aP),
            this.isUpdating = !1,
            this.nodes.forEach(lP),
            this.nodes.forEach(nP),
            this.nodes.forEach(rP),
            this.clearAllSnapshots();
            const f = kn.now();
            dt.delta = zn(0, 1e3 / 60, f - dt.timestamp),
            dt.timestamp = f,
            dt.isProcessing = !0,
            Kc.update.process(dt),
            Kc.preRender.process(dt),
            Kc.render.process(dt),
            dt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Sf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(oP),
            this.sharedNodes.forEach(fP)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ue.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ue.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Xe(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: f} = this.options;
            f && f.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c="measure") {
            let f = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (f = !1),
            f) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: h,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!a)
                return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , f = this.projectionDelta && !Yw(this.projectionDelta)
              , h = this.getTransformTemplate()
              , m = h ? h(this.latestValues, "") : void 0
              , g = m !== this.prevTransformTemplateValue;
            c && (f || Hr(this.latestValues) || g) && (a(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(c=!0) {
            const f = this.measurePageBox();
            let h = this.removeElementScroll(f);
            return c && (h = this.removeTransform(h)),
            gP(h),
            {
                animationId: this.root.animationId,
                measuredBox: f,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {visualElement: f} = this.options;
            if (!f)
                return Xe();
            const h = f.measureViewportBox();
            if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(yP))) {
                const {scroll: g} = this.root;
                g && (Bs(h.x, g.offset.x),
                Bs(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(c) {
            var f;
            const h = Xe();
            if (Qt(h, c),
            !((f = this.scroll) === null || f === void 0) && f.wasRoot)
                return h;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m]
                  , {scroll: y, options: w} = g;
                g !== this.root && y && w.layoutScroll && (y.wasRoot && Qt(h, c),
                Bs(h.x, y.offset.x),
                Bs(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(c, f=!1) {
            const h = Xe();
            Qt(h, c);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !f && g.options.layoutScroll && g.scroll && g !== g.root && Us(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }),
                Hr(g.latestValues) && Us(h, g.latestValues)
            }
            return Hr(this.latestValues) && Us(h, this.latestValues),
            h
        }
        removeTransform(c) {
            const f = Xe();
            Qt(f, c);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !Hr(m.latestValues))
                    continue;
                zd(m.latestValues) && m.updateSnapshot();
                const g = Xe()
                  , y = m.measurePageBox();
                Qt(g, y),
                Ty(f, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return Hr(this.latestValues) && Ty(f, this.latestValues),
            f
        }
        setTargetDelta(c) {
            this.targetDelta = c,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== dt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c=!1) {
            var f;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(c || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: w} = this.options;
            if (!(!this.layout || !(y || w))) {
                if (this.resolvedRelativeTargetAt = dt.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const E = this.getClosestProjectingParent();
                    E && E.layout && this.animationProgress !== 1 ? (this.relativeParent = E,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Xe(),
                    this.relativeTargetOrigin = Xe(),
                    ho(this.relativeTargetOrigin, this.layout.layoutBox, E.layout.layoutBox),
                    Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Xe(),
                    this.targetWithTransforms = Xe()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    x_(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Qt(this.target, this.layout.layoutBox),
                    qw(this.target, this.targetDelta)) : Qt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const E = this.getClosestProjectingParent();
                        E && !!E.resumingFrom == !!this.resumingFrom && !E.options.layoutScroll && E.target && this.animationProgress !== 1 ? (this.relativeParent = E,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Xe(),
                        this.relativeTargetOrigin = Xe(),
                        ho(this.relativeTargetOrigin, this.target, E.target),
                        Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    ro && Wr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || zd(this.parent.latestValues) || $w(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var c;
            const f = this.getLead()
              , h = !!this.resumingFrom || this !== f;
            let m = !0;
            if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (m = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === dt.timestamp && (m = !1),
            m)
                return;
            const {layout: g, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || y))
                return;
            Qt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x
              , E = this.treeScale.y;
            R_(this.layoutCorrected, this.treeScale, this.path, h),
            f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox,
            f.targetWithTransforms = Xe());
            const {target: b} = f;
            if (!b) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (by(this.prevProjectionDelta.x, this.projectionDelta.x),
            by(this.prevProjectionDelta.y, this.projectionDelta.y)),
            fo(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
            (this.treeScale.x !== w || this.treeScale.y !== E || !Ay(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ay(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", b)),
            ro && Wr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c=!0) {
            var f;
            if ((f = this.options.visualElement) === null || f === void 0 || f.scheduleRender(),
            c) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Vs(),
            this.projectionDelta = Vs(),
            this.projectionDeltaWithTransform = Vs()
        }
        setAnimationOrigin(c, f=!1) {
            const h = this.snapshot
              , m = h ? h.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , y = Vs();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !f;
            const w = Xe()
              , E = h ? h.source : void 0
              , b = this.layout ? this.layout.source : void 0
              , k = E !== b
              , x = this.getStack()
              , R = !x || x.members.length <= 1
              , V = !!(k && !R && this.options.crossfade === !0 && !this.path.some(pP));
            this.animationProgress = 0;
            let L;
            this.mixTargetDelta = j => {
                const B = j / 1e3;
                Ly(y.x, c.x, B),
                Ly(y.y, c.y, B),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ho(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                hP(this.relativeTarget, this.relativeTargetOrigin, w, B),
                L && X_(this.relativeTarget, L) && (this.isProjectionDirty = !1),
                L || (L = Xe()),
                Qt(L, this.relativeTarget)),
                k && (this.animationValues = g,
                H_(g, m, this.latestValues, B, V, R)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = B
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Tr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ue.update( () => {
                ul.hasAnimatedSinceResize = !0,
                this.currentAnimation = V_(0, Ny, {
                    ...c,
                    onUpdate: f => {
                        this.mixTargetDelta(f),
                        c.onUpdate && c.onUpdate(f)
                    }
                    ,
                    onComplete: () => {
                        c.onComplete && c.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ny),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {targetWithTransforms: f, target: h, layout: m, latestValues: g} = c;
            if (!(!f || !h || !m)) {
                if (this !== c && this.layout && m && ex(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Xe();
                    const y = Ut(this.layout.layoutBox.x);
                    h.x.min = c.target.x.min,
                    h.x.max = h.x.min + y;
                    const w = Ut(this.layout.layoutBox.y);
                    h.y.min = c.target.y.min,
                    h.y.max = h.y.min + w
                }
                Qt(f, h),
                Us(f, g),
                fo(this.projectionDeltaWithTransform, this.layoutCorrected, f, g)
            }
        }
        registerSharedNode(c, f) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new J_),
            this.sharedNodes.get(c).add(f);
            const m = f.options.initialPromotionConfig;
            f.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(f) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var c;
            const {layoutId: f} = this.options;
            return f ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
        }
        getPrevLead() {
            var c;
            const {layoutId: f} = this.options;
            return f ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
        }
        getStack() {
            const {layoutId: c} = this.options;
            if (c)
                return this.root.sharedNodes.get(c)
        }
        promote({needsReset: c, transition: f, preserveFollowOpacity: h}={}) {
            const m = this.getStack();
            m && m.promote(this, h),
            c && (this.projectionDelta = void 0,
            this.needsReset = !0),
            f && this.setOptions({
                transition: f
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: c} = this.options;
            if (!c)
                return;
            let f = !1;
            const {latestValues: h} = c;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (f = !0),
            !f)
                return;
            const m = {};
            h.z && rd("z", c, m, this.animationValues);
            for (let g = 0; g < nd.length; g++)
                rd(`rotate${nd[g]}`, c, m, this.animationValues),
                rd(`skew${nd[g]}`, c, m, this.animationValues);
            c.render();
            for (const g in m)
                c.setStaticValue(g, m[g]),
                this.animationValues && (this.animationValues[g] = m[g]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            var f, h;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return eP;
            const m = {
                visibility: ""
            }
              , g = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                m.opacity = "",
                m.pointerEvents = al(c == null ? void 0 : c.pointerEvents) || "",
                m.transform = g ? g(this.latestValues, "") : "none",
                m;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const k = {};
                return this.options.layoutId && (k.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                k.pointerEvents = al(c == null ? void 0 : c.pointerEvents) || ""),
                this.hasProjected && !Hr(this.latestValues) && (k.transform = g ? g({}, "") : "none",
                this.hasProjected = !1),
                k
            }
            const w = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            m.transform = Z_(this.projectionDeltaWithTransform, this.treeScale, w),
            g && (m.transform = g(w, m.transform));
            const {x: E, y: b} = this.projectionDelta;
            m.transformOrigin = `${E.origin * 100}% ${b.origin * 100}% 0`,
            y.animationValues ? m.opacity = y === this ? (h = (f = w.opacity) !== null && f !== void 0 ? f : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = y === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const k in Sl) {
                if (w[k] === void 0)
                    continue;
                const {correct: x, applyTo: R} = Sl[k]
                  , V = m.transform === "none" ? w[k] : x(w[k], y);
                if (R) {
                    const L = R.length;
                    for (let j = 0; j < L; j++)
                        m[R[j]] = V
                } else
                    m[k] = V
            }
            return this.options.layoutId && (m.pointerEvents = y === this ? al(c == null ? void 0 : c.pointerEvents) || "" : "none"),
            m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var f;
                return (f = c.currentAnimation) === null || f === void 0 ? void 0 : f.stop()
            }
            ),
            this.root.nodes.forEach(Oy),
            this.root.sharedNodes.clear()
        }
    }
}
function nP(t) {
    t.updateLayout()
}
function rP(t) {
    var e;
    const r = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
        const {layoutBox: i, measuredBox: a} = t.layout
          , {animationType: u} = t.options
          , c = r.source !== t.layout.source;
        u === "size" ? Yt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y]
              , E = Ut(w);
            w.min = i[y].min,
            w.max = w.min + E
        }
        ) : ex(u, r.layoutBox, i) && Yt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y]
              , E = Ut(i[y]);
            w.max = w.min + E,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[y].max = t.relativeTarget[y].min + E)
        }
        );
        const f = Vs();
        fo(f, i, r.layoutBox);
        const h = Vs();
        c ? fo(h, t.applyTransform(a, !0), r.measuredBox) : fo(h, i, r.layoutBox);
        const m = !Yw(f);
        let g = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: w, layout: E} = y;
                if (w && E) {
                    const b = Xe();
                    ho(b, r.layoutBox, w.layoutBox);
                    const k = Xe();
                    ho(k, i, E.layoutBox),
                    Xw(b, k) || (g = !0),
                    y.options.layoutRoot && (t.relativeTarget = k,
                    t.relativeTargetOrigin = b,
                    t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: r,
            delta: h,
            layoutDelta: f,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: g
        })
    } else if (t.isLead()) {
        const {onExitComplete: i} = t.options;
        i && i()
    }
    t.options.transition = void 0
}
function sP(t) {
    ro && Wr.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function iP(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function oP(t) {
    t.clearSnapshot()
}
function Oy(t) {
    t.clearMeasurements()
}
function aP(t) {
    t.isLayoutDirty = !1
}
function lP(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function jy(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function uP(t) {
    t.resolveTargetDelta()
}
function cP(t) {
    t.calcProjection()
}
function dP(t) {
    t.resetSkewAndRotation()
}
function fP(t) {
    t.removeLeadSnapshot()
}
function Ly(t, e, r) {
    t.translate = He(e.translate, 0, r),
    t.scale = He(e.scale, 1, r),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function Dy(t, e, r, i) {
    t.min = He(e.min, r.min, i),
    t.max = He(e.max, r.max, i)
}
function hP(t, e, r, i) {
    Dy(t.x, e.x, r.x, i),
    Dy(t.y, e.y, r.y, i)
}
function pP(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const mP = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , My = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , Iy = My("applewebkit/") && !My("chrome/") ? Math.round : Bt;
function Fy(t) {
    t.min = Iy(t.min),
    t.max = Iy(t.max)
}
function gP(t) {
    Fy(t.x),
    Fy(t.y)
}
function ex(t, e, r) {
    return t === "position" || t === "preserve-aspect" && !w_(Ry(e), Ry(r), .2)
}
function yP(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const vP = Zw({
    attachResizeListener: (t, e) => So(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , sd = {
    current: void 0
}
  , tx = Zw({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!sd.current) {
            const t = new vP({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            sd.current = t
        }
        return sd.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , wP = {
    pan: {
        Feature: D_
    },
    drag: {
        Feature: L_,
        ProjectionNode: tx,
        MeasureLayout: Kw
    }
};
function Vy(t, e, r) {
    const {props: i} = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
    const a = "onHover" + r
      , u = i[a];
    u && Ue.postRender( () => u(e, Oo(e)))
}
class xP extends Pr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = wT(e, r => (Vy(this.node, r, "Start"),
        i => Vy(this.node, i, "End"))))
    }
    unmount() {}
}
class SP extends Pr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = No(So(this.node.current, "focus", () => this.onFocus()), So(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function By(t, e, r) {
    const {props: i} = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
    const a = "onTap" + (r === "End" ? "" : r)
      , u = i[a];
    u && Ue.postRender( () => u(e, Oo(e)))
}
class bP extends Pr {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = kT(e, r => (By(this.node, r, "Start"),
        (i, {success: a}) => By(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const qd = new WeakMap
  , id = new WeakMap
  , kP = t => {
    const e = qd.get(t.target);
    e && e(t)
}
  , EP = t => {
    t.forEach(kP)
}
;
function TP({root: t, ...e}) {
    const r = t || document;
    id.has(r) || id.set(r, {});
    const i = id.get(r)
      , a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(EP,{
        root: t,
        ...e
    })),
    i[a]
}
function CP(t, e, r) {
    const i = TP(e);
    return qd.set(t, r),
    i.observe(t),
    () => {
        qd.delete(t),
        i.unobserve(t)
    }
}
const _P = {
    some: 0,
    all: 1
};
class PP extends Pr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: r, margin: i, amount: a="some", once: u} = e
          , c = {
            root: r ? r.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : _P[a]
        }
          , f = h => {
            const {isIntersecting: m} = h;
            if (this.isInView === m || (this.isInView = m,
            u && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: g, onViewportLeave: y} = this.node.getProps()
              , w = m ? g : y;
            w && w(h)
        }
        ;
        return CP(this.node.current, c, f)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: r} = this.node;
        ["amount", "margin", "root"].some(RP(e, r)) && this.startObserver()
    }
    unmount() {}
}
function RP({viewport: t={}}, {viewport: e={}}={}) {
    return r => t[r] !== e[r]
}
const AP = {
    inView: {
        Feature: PP
    },
    tap: {
        Feature: bP
    },
    focus: {
        Feature: SP
    },
    hover: {
        Feature: xP
    }
}
  , NP = {
    layout: {
        ProjectionNode: tx,
        MeasureLayout: Kw
    }
}
  , Hd = {
    current: null
}
  , nx = {
    current: !1
};
function OP() {
    if (nx.current = !0,
    !!gf)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => Hd.current = t.matches;
            t.addListener(e),
            e()
        } else
            Hd.current = !1
}
const jP = [..._w, wt, Cr]
  , LP = t => jP.find(Cw(t))
  , Uy = new WeakMap;
function DP(t, e, r) {
    for (const i in e) {
        const a = e[i]
          , u = r[i];
        if (St(a))
            t.addValue(i, a);
        else if (St(u))
            t.addValue(i, wo(a, {
                owner: t
            }));
        else if (u !== a)
            if (t.hasValue(i)) {
                const c = t.getValue(i);
                c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
            } else {
                const c = t.getStaticValue(i);
                t.addValue(i, wo(c !== void 0 ? c : a, {
                    owner: t
                }))
            }
    }
    for (const i in r)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const zy = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class MP {
    scrapeMotionValuesFromProps(e, r, i) {
        return {}
    }
    constructor({parent: e, props: r, presenceContext: i, reducedMotionConfig: a, blockInitialAnimation: u, visualState: c}, f={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = $f,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const E = kn.now();
            this.renderScheduledAt < E && (this.renderScheduledAt = E,
            Ue.render(this.render, !1, !0))
        }
        ;
        const {latestValues: h, renderState: m, onUpdate: g} = c;
        this.onUpdate = g,
        this.latestValues = h,
        this.baseTarget = {
            ...h
        },
        this.initialValues = r.initial ? {
            ...h
        } : {},
        this.renderState = m,
        this.parent = e,
        this.props = r,
        this.presenceContext = i,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = a,
        this.options = f,
        this.blockInitialAnimation = !!u,
        this.isControllingVariants = jl(r),
        this.isVariantNode = L0(r),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: y, ...w} = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const E in w) {
            const b = w[E];
            h[E] !== void 0 && St(b) && b.set(h[E], !1)
        }
    }
    mount(e) {
        this.current = e,
        Uy.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (r, i) => this.bindToMotionValue(i, r)),
        nx.current || OP(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Hd.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Uy.delete(this.current),
        this.projection && this.projection.unmount(),
        Tr(this.notifyUpdate),
        Tr(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const r = this.features[e];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, r) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = cs.has(e)
          , a = r.on("change", f => {
            this.latestValues[e] = f,
            this.props.onUpdate && Ue.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , u = r.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, e, r)),
        this.valueSubscriptions.set(e, () => {
            a(),
            u(),
            c && c(),
            r.owner && r.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in ni) {
            const r = ni[e];
            if (!r)
                continue;
            const {isEnabled: i, Feature: a} = r;
            if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)),
            this.features[e]) {
                const u = this.features[e];
                u.isMounted ? u.update() : (u.mount(),
                u.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xe()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, r) {
        this.latestValues[e] = r
    }
    update(e, r) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = r;
        for (let i = 0; i < zy.length; i++) {
            const a = zy[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](),
            delete this.propEventSubscriptions[a]);
            const u = "on" + a
              , c = e[u];
            c && (this.propEventSubscriptions[a] = this.on(a, c))
        }
        this.prevMotionValues = DP(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const r = this.getClosestVariantNode();
        if (r)
            return r.variantChildren && r.variantChildren.add(e),
            () => r.variantChildren.delete(e)
    }
    addValue(e, r) {
        const i = this.values.get(e);
        r !== i && (i && this.removeValue(e),
        this.bindToMotionValue(e, r),
        this.values.set(e, r),
        this.latestValues[e] = r.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const r = this.valueSubscriptions.get(e);
        r && (r(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, r) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && r !== void 0 && (i = wo(r === null ? void 0 : r, {
            owner: this
        }),
        this.addValue(e, i)),
        i
    }
    readValue(e, r) {
        var i;
        let a = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return a != null && (typeof a == "string" && (Ew(a) || mw(a)) ? a = parseFloat(a) : !LP(a) && Cr.test(r) && (a = Sw(e, r)),
        this.setBaseTarget(e, St(a) ? a.get() : a)),
        St(a) ? a.get() : a
    }
    setBaseTarget(e, r) {
        this.baseTarget[e] = r
    }
    getBaseTarget(e) {
        var r;
        const {initial: i} = this.props;
        let a;
        if (typeof i == "string" || typeof i == "object") {
            const c = kf(this.props, i, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
            c && (a = c[e])
        }
        if (i && a !== void 0)
            return a;
        const u = this.getBaseTargetFromProps(this.props, e);
        return u !== void 0 && !St(u) ? u : this.initialValues[e] !== void 0 && a === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, r) {
        return this.events[e] || (this.events[e] = new If),
        this.events[e].add(r)
    }
    notify(e, ...r) {
        this.events[e] && this.events[e].notify(...r)
    }
}
class rx extends MP {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Pw
    }
    sortInstanceNodePosition(e, r) {
        return e.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, r) {
        return e.style ? e.style[r] : void 0
    }
    removeValueFromRenderState(e, {vars: r, style: i}) {
        delete r[e],
        delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        St(e) && (this.childSubscription = e.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }
        ))
    }
}
function IP(t) {
    return window.getComputedStyle(t)
}
class FP extends rx {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = $0
    }
    readValueFromInstance(e, r) {
        if (cs.has(r)) {
            const i = zf(r);
            return i && i.default || 0
        } else {
            const i = IP(e)
              , a = (B0(r) ? i.getPropertyValue(r) : i[r]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: r}) {
        return Hw(e, r)
    }
    build(e, r, i) {
        Cf(e, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return Af(e, r, i)
    }
}
class VP extends rx {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Xe
    }
    getBaseTargetFromProps(e, r) {
        return e[r]
    }
    readValueFromInstance(e, r) {
        if (cs.has(r)) {
            const i = zf(r);
            return i && i.default || 0
        }
        return r = q0.has(r) ? r : xf(r),
        e.getAttribute(r)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return K0(e, r, i)
    }
    build(e, r, i) {
        _f(e, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, r, i, a) {
        H0(e, r, i, a)
    }
    mount(e) {
        this.isSVGTag = Rf(e.tagName),
        super.mount(e)
    }
}
const BP = (t, e) => bf(t) ? new VP(e) : new FP(e,{
    allowProjection: t !== D.Fragment
})
  , UP = hT({
    ...c_,
    ...AP,
    ...wP,
    ...NP
}, BP)
  , be = PE(UP)
  , zP = {
    some: 0,
    all: 1
};
function $P(t, e, {root: r, margin: i, amount: a="some"}={}) {
    const u = tw(t)
      , c = new WeakMap
      , f = m => {
        m.forEach(g => {
            const y = c.get(g.target);
            if (g.isIntersecting !== !!y)
                if (g.isIntersecting) {
                    const w = e(g);
                    typeof w == "function" ? c.set(g.target, w) : h.unobserve(g.target)
                } else
                    typeof y == "function" && (y(g),
                    c.delete(g.target))
        }
        )
    }
      , h = new IntersectionObserver(f,{
        root: r,
        rootMargin: i,
        threshold: typeof a == "number" ? a : zP[a]
    });
    return u.forEach(m => h.observe(m)),
    () => h.disconnect()
}
function jo(t, {root: e, margin: r, amount: i, once: a=!1}={}) {
    const [u,c] = D.useState(!1);
    return D.useEffect( () => {
        if (!t.current || a && u)
            return;
        const f = () => (c(!0),
        a ? void 0 : () => c(!1))
          , h = {
            root: e && e.current || void 0,
            margin: r,
            amount: i
        };
        return $P(t.current, f, h)
    }
    , [e, t, r, a, i]),
    u
}
const $y = [{
    label: "About",
    href: "#about"
}, {
    label: "Experience",
    href: "#experience"
}, {
    label: "Skills",
    href: "#skills"
}, {
    label: "Portfolio",
    href: "#portfolio"
}, {
    label: "Contact",
    href: "#contact"
}];
function qP() {
    const [t,e] = D.useState(!1)
      , [r,i] = D.useState(!1);
    D.useEffect( () => {
        const u = () => e(window.scrollY > 60);
        return window.addEventListener("scroll", u),
        () => window.removeEventListener("scroll", u)
    }
    , []);
    const a = u => {
        var c;
        i(!1),
        (c = document.querySelector(u)) == null || c.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return S.jsxs("div", {
        className: "fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 px-4 pointer-events-none",
        children: [S.jsxs(be.nav, {
            initial: {
                y: -60,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            transition: {
                duration: .7,
                ease: [.22, 1, .36, 1]
            },
            className: `pointer-events-auto w-full max-w-3xl rounded-2xl transition-all duration-500 ${t ? "glass-strong shadow-2xl shadow-black/30" : "bg-white/5 border border-white/10"}`,
            style: {
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)"
            },
            children: [S.jsx("div", {
                className: "absolute top-0 left-8 right-8 h-px rounded-full opacity-60",
                style: {
                    background: "linear-gradient(to right, transparent, hsl(217 91% 65% / 0.6), hsl(280 70% 65% / 0.4), transparent)"
                }
            }), S.jsxs("div", {
                className: "px-6 py-3.5 flex items-center justify-between",
                children: [S.jsx("button", {
                    onClick: () => a("#hero"),
                    className: "text-sm font-semibold tracking-tight shimmer-text",
                    children: "Your Name"
                }), S.jsx("div", {
                    className: "hidden md:flex items-center gap-6",
                    children: $y.map(u => S.jsxs("button", {
                        onClick: () => a(u.href),
                        className: "relative text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide group py-1",
                        children: [u.label, S.jsx("span", {
                            className: "absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 rounded-full"
                        })]
                    }, u.href))
                }), S.jsx("button", {
                    className: "md:hidden text-muted-foreground hover:text-foreground transition-colors p-1",
                    onClick: () => i(!r),
                    children: r ? S.jsx(Yv, {
                        size: 17
                    }) : S.jsx(Db, {
                        size: 17
                    })
                })]
            })]
        }), S.jsx(xE, {
            children: r && S.jsx(be.div, {
                initial: {
                    opacity: 0,
                    y: -8,
                    scale: .97
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: -8,
                    scale: .97
                },
                transition: {
                    duration: .22,
                    ease: "easeOut"
                },
                className: "pointer-events-auto mt-2 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl shadow-black/30",
                style: {
                    background: "rgba(15, 20, 35, 0.92)",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    border: "1px solid rgba(255,255,255,0.08)"
                },
                children: S.jsx("div", {
                    className: "px-6 py-5 flex flex-col gap-1",
                    children: $y.map( (u, c) => S.jsx(be.button, {
                        initial: {
                            opacity: 0,
                            x: -10
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: c * .05
                        },
                        onClick: () => a(u.href),
                        className: "text-sm text-muted-foreground hover:text-foreground transition-colors text-left px-3 py-2.5 rounded-xl hover:bg-white/5",
                        children: u.label
                    }, u.href))
                })
            })
        })]
    })
}
const HP = Array.from({
    length: 16
}, (t, e) => ({
    id: e,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 4 + Math.random() * 5,
    delay: Math.random() * 4,
    color: e % 2 === 0 ? "hsl(217 91% 65% / 0.5)" : "hsl(280 70% 65% / 0.4)"
}));
function WP() {
    return S.jsxs("section", {
        id: "hero",
        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-background",
        children: [S.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,_hsl(217_91%_65%_/_0.1)_0%,_transparent_100%)]"
        }), S.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,_hsl(280_70%_65%_/_0.08)_0%,_transparent_100%)]"
        }), S.jsx(be.div, {
            animate: {
                scale: [1, 1.15, 1],
                opacity: [.25, .4, .25]
            },
            transition: {
                duration: 9,
                repeat: 1 / 0,
                ease: "easeInOut"
            },
            className: "absolute top-[15%] right-[8%] w-80 h-80 rounded-full blur-[90px] pointer-events-none",
            style: {
                background: "hsl(217 91% 65% / 0.15)"
            }
        }), S.jsx(be.div, {
            animate: {
                scale: [1.1, 1, 1.1],
                opacity: [.15, .28, .15]
            },
            transition: {
                duration: 11,
                repeat: 1 / 0,
                ease: "easeInOut"
            },
            className: "absolute bottom-[15%] left-[5%] w-96 h-96 rounded-full blur-[110px] pointer-events-none",
            style: {
                background: "hsl(280 70% 65% / 0.1)"
            }
        }), S.jsx("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: HP.map(t => S.jsx(be.div, {
                className: "absolute rounded-full",
                style: {
                    width: t.size,
                    height: t.size,
                    left: `${t.x}%`,
                    top: `${t.y}%`,
                    background: t.color
                },
                animate: {
                    y: [0, -24, 0],
                    opacity: [.15, .7, .15]
                },
                transition: {
                    duration: t.duration,
                    repeat: 1 / 0,
                    delay: t.delay,
                    ease: "easeInOut"
                }
            }, t.id))
        }), S.jsx("div", {
            className: "relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24",
            children: S.jsxs("div", {
                className: "flex flex-col lg:flex-row items-center gap-14 lg:gap-20",
                children: [S.jsx(be.div, {
                    initial: {
                        opacity: 0,
                        scale: .85
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .9,
                        ease: [.22, 1, .36, 1]
                    },
                    className: "flex-shrink-0",
                    children: S.jsxs("div", {
                        className: "relative",
                        children: [S.jsx(be.div, {
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 18,
                                repeat: 1 / 0,
                                ease: "linear"
                            },
                            className: "absolute -inset-2.5 rounded-[28px] opacity-30 pointer-events-none",
                            style: {
                                background: "conic-gradient(from 0deg, hsl(217 91% 65%), hsl(280 70% 65%), transparent, hsl(217 91% 65%))",
                                filter: "blur(6px)"
                            }
                        }), S.jsxs("div", {
                            className: "relative w-48 h-48 md:w-60 md:h-60 rounded-3xl overflow-hidden",
                            style: {
                                boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 48px rgba(0,0,0,0.4)"
                            },
                            children: [S.jsx("img", {
                                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                                alt: "Profile",
                                className: "w-full h-full object-cover"
                            }), S.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"
                            })]
                        }), S.jsxs(be.div, {
                            animate: {
                                y: [0, -5, 0]
                            },
                            transition: {
                                duration: 3.5,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            },
                            className: "absolute -bottom-3.5 -right-3.5 glass-strong rounded-xl px-3 py-1.5 flex items-center gap-1.5",
                            children: [S.jsx("div", {
                                className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                            }), S.jsx("span", {
                                className: "text-xs text-foreground/80 font-medium",
                                children: "Available"
                            })]
                        })]
                    })
                }), S.jsxs("div", {
                    className: "text-center lg:text-left max-w-xl",
                    children: [S.jsxs(be.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .2
                        },
                        className: "inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full",
                        style: {
                            background: "hsl(217 91% 65% / 0.1)",
                            border: "1px solid hsl(217 91% 65% / 0.2)"
                        },
                        children: [S.jsx("div", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary"
                        }), S.jsx("span", {
                            className: "text-xs tracking-[0.18em] uppercase text-primary font-medium",
                            children: "Portfolio"
                        })]
                    }), S.jsxs(be.h1, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .7,
                            delay: .32
                        },
                        className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight",
                        children: [S.jsx("span", {
                            className: "shimmer-text",
                            children: "Your Name"
                        }), S.jsx("br", {}), S.jsx("span", {
                            className: "text-foreground/20 font-light text-2xl md:text-3xl tracking-[0.2em] mt-2 block",
                            children: "YOUR TITLE"
                        })]
                    }), S.jsx(be.p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .46
                        },
                        className: "mt-5 text-base md:text-lg text-muted-foreground leading-relaxed",
                        children: "A brief, compelling tagline about what you do and the unique value you bring to your work."
                    }), S.jsxs(be.div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .58
                        },
                        className: "mt-3 flex items-center gap-1.5 justify-center lg:justify-start",
                        children: [S.jsx(Gv, {
                            size: 13,
                            className: "text-accent/70"
                        }), S.jsx("span", {
                            className: "text-sm text-muted-foreground/70",
                            children: "Your City, Country"
                        })]
                    }), S.jsxs(be.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .72
                        },
                        className: "mt-8 flex flex-wrap gap-3 justify-center lg:justify-start",
                        children: [S.jsx("button", {
                            onClick: () => {
                                var t;
                                return (t = document.querySelector("#contact")) == null ? void 0 : t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }
                            ,
                            className: "px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-100",
                            style: {
                                background: "hsl(217 91% 65%)",
                                color: "hsl(222 47% 5%)",
                                boxShadow: "0 0 24px hsl(217 91% 65% / 0.35)"
                            },
                            children: "Get in Touch"
                        }), S.jsx("button", {
                            onClick: () => {
                                var t;
                                return (t = document.querySelector("#experience")) == null ? void 0 : t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }
                            ,
                            className: "px-7 py-3 glass rounded-xl text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105 active:scale-100",
                            children: "View Experience"
                        })]
                    })]
                })]
            })
        }), S.jsxs(be.div, {
            animate: {
                y: [0, 7, 0],
                opacity: [.3, .6, .3]
            },
            transition: {
                duration: 2.2,
                repeat: 1 / 0,
                ease: "easeInOut"
            },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5",
            children: [S.jsx("span", {
                className: "text-[10px] tracking-widest uppercase text-muted-foreground/40",
                children: "Scroll"
            }), S.jsx(vb, {
                size: 14,
                className: "text-muted-foreground/40"
            })]
        })]
    })
}
const KP = [{
    icon: Eb,
    label: "Years Experience",
    value: "8+",
    color: "hsl(217 91% 65%)"
}, {
    icon: Pb,
    label: "Education",
    value: "M.Sc.",
    color: "hsl(280 70% 65%)"
}, {
    icon: bb,
    label: "Certifications",
    value: "12",
    color: "hsl(173 58% 50%)"
}];
function QP() {
    const t = D.useRef(null)
      , e = jo(t, {
        once: !0,
        margin: "-100px"
    });
    return S.jsxs("section", {
        id: "about",
        className: "relative py-24 md:py-32 overflow-hidden",
        ref: t,
        children: [S.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(280_70%_65%_/_0.05)_0%,_transparent_70%)]"
        }), S.jsxs("div", {
            className: "relative max-w-6xl mx-auto px-6",
            children: [S.jsxs(be.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: e ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .7
                },
                children: [S.jsxs("div", {
                    className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4",
                    children: [S.jsx("div", {
                        className: "w-1.5 h-1.5 rounded-full bg-accent"
                    }), S.jsx("p", {
                        className: "text-xs tracking-[0.2em] uppercase text-accent font-medium",
                        children: "About Me"
                    })]
                }), S.jsxs("h2", {
                    className: "text-3xl md:text-4xl font-bold text-foreground tracking-tight",
                    children: ["A brief ", S.jsx("span", {
                        className: "shimmer-text",
                        children: "introduction"
                    })]
                })]
            }), S.jsxs("div", {
                className: "mt-12 grid lg:grid-cols-2 gap-16 items-center",
                children: [S.jsx(be.div, {
                    initial: {
                        opacity: 0,
                        x: -40
                    },
                    animate: e ? {
                        opacity: 1,
                        x: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    children: S.jsxs("div", {
                        className: "relative",
                        children: [S.jsxs("div", {
                            className: "aspect-[4/5] rounded-3xl overflow-hidden glass glow-purple",
                            children: [S.jsx("img", {
                                src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop",
                                alt: "Working",
                                className: "w-full h-full object-cover opacity-90"
                            }), S.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                            })]
                        }), S.jsxs(be.div, {
                            animate: {
                                y: [0, -8, 0]
                            },
                            transition: {
                                duration: 4,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            },
                            className: "absolute -right-6 bottom-16 glass-strong rounded-2xl p-4 hidden md:block",
                            children: [S.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Current Role"
                            }), S.jsx("p", {
                                className: "text-sm font-semibold text-foreground mt-0.5",
                                children: "Senior Designer"
                            }), S.jsx("div", {
                                className: "mt-2 flex gap-1",
                                children: [1, 2, 3, 4, 5].map(r => S.jsx("div", {
                                    className: "w-1 h-1 rounded-full bg-primary"
                                }, r))
                            })]
                        })]
                    })
                }), S.jsxs(be.div, {
                    initial: {
                        opacity: 0,
                        x: 40
                    },
                    animate: e ? {
                        opacity: 1,
                        x: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .3
                    },
                    children: [S.jsx("p", {
                        className: "text-muted-foreground leading-relaxed text-base md:text-lg",
                        children: "Write a few paragraphs about yourself here. Describe your background, your passion, and what drives you in your career. This is your chance to make a personal connection with whoever visits your portfolio."
                    }), S.jsx("p", {
                        className: "mt-4 text-muted-foreground leading-relaxed text-base md:text-lg",
                        children: "Add more details about your professional philosophy, what kind of projects excite you, or any unique perspective you bring to your work."
                    }), S.jsx("div", {
                        className: "mt-10 grid grid-cols-3 gap-4",
                        children: KP.map( (r, i) => S.jsxs(be.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: e ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: .5,
                                delay: .5 + i * .12
                            },
                            className: "glass rounded-2xl p-4 text-center group hover:glow-blue transition-all duration-500",
                            children: [S.jsx(r.icon, {
                                size: 18,
                                className: "mx-auto mb-2",
                                style: {
                                    color: r.color
                                }
                            }), S.jsx("p", {
                                className: "text-2xl font-bold text-foreground",
                                children: r.value
                            }), S.jsx("p", {
                                className: "text-xs text-muted-foreground mt-1 leading-tight",
                                children: r.label
                            })]
                        }, r.label))
                    })]
                })]
            })]
        })]
    })
}
const GP = [{
    title: "Senior Position Title",
    company: "Company Name",
    period: "2022 — Present",
    description: "Describe your key responsibilities and achievements in this role. Highlight metrics and impact where possible.",
    tags: ["Leadership", "Strategy", "Innovation"],
    accent: "hsl(217 91% 65%)"
}, {
    title: "Mid-Level Position Title",
    company: "Previous Company",
    period: "2019 — 2022",
    description: "Outline what you accomplished here. Mention projects, team size, and technologies or methodologies you used.",
    tags: ["Project Management", "Collaboration", "Growth"],
    accent: "hsl(280 70% 65%)"
}, {
    title: "Junior Position Title",
    company: "First Company",
    period: "2016 — 2019",
    description: "Describe how you started your career and the foundational skills you developed during this time.",
    tags: ["Learning", "Development", "Teamwork"],
    accent: "hsl(173 58% 50%)"
}];
function YP() {
    const t = D.useRef(null)
      , e = jo(t, {
        once: !0,
        margin: "-100px"
    });
    return S.jsxs("section", {
        id: "experience",
        className: "relative py-24 md:py-32 overflow-hidden",
        ref: t,
        children: [S.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(217_91%_65%_/_0.06)_0%,_transparent_60%)]"
        }), S.jsxs("div", {
            className: "relative max-w-6xl mx-auto px-6",
            children: [S.jsxs(be.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: e ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .7
                },
                children: [S.jsxs("div", {
                    className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4",
                    children: [S.jsx("div", {
                        className: "w-1.5 h-1.5 rounded-full bg-primary"
                    }), S.jsx("p", {
                        className: "text-xs tracking-[0.2em] uppercase text-primary font-medium",
                        children: "Career Path"
                    })]
                }), S.jsxs("h2", {
                    className: "text-3xl md:text-4xl font-bold text-foreground tracking-tight",
                    children: ["Professional ", S.jsx("span", {
                        className: "shimmer-text",
                        children: "experience"
                    })]
                })]
            }), S.jsxs("div", {
                className: "mt-16 relative",
                children: [S.jsx("div", {
                    className: "absolute left-4 md:left-10 top-0 bottom-0 w-px",
                    style: {
                        background: "linear-gradient(to bottom, transparent, hsl(217 91% 65% / 0.3), hsl(280 70% 65% / 0.3), transparent)"
                    }
                }), S.jsx("div", {
                    className: "space-y-8",
                    children: GP.map( (r, i) => S.jsxs(be.div, {
                        initial: {
                            opacity: 0,
                            x: -40
                        },
                        animate: e ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: .7,
                            delay: .2 + i * .18
                        },
                        className: "relative pl-12 md:pl-24",
                        children: [S.jsxs("div", {
                            className: "absolute left-4 md:left-10 top-6",
                            children: [S.jsx(be.div, {
                                animate: {
                                    scale: [1, 1.5, 1],
                                    opacity: [.4, .8, .4]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    delay: i * .5
                                },
                                className: "absolute inset-0 rounded-full -translate-x-1/2 -translate-y-1/2",
                                style: {
                                    background: r.accent,
                                    width: 20,
                                    height: 20,
                                    filter: "blur(4px)"
                                }
                            }), S.jsx("div", {
                                className: "w-3 h-3 rounded-full border-2 border-background -translate-x-1/2",
                                style: {
                                    background: r.accent
                                }
                            })]
                        }), S.jsxs("div", {
                            className: "glass rounded-2xl p-6 md:p-8 group hover:glow-blue transition-all duration-500 cursor-default",
                            children: [S.jsx("div", {
                                className: "absolute top-0 left-6 right-6 h-px rounded-full opacity-50",
                                style: {
                                    background: `linear-gradient(to right, transparent, ${r.accent}, transparent)`
                                }
                            }), S.jsxs("div", {
                                className: "flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4",
                                children: [S.jsxs("div", {
                                    children: [S.jsx("h3", {
                                        className: "text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300",
                                        children: r.title
                                    }), S.jsx("p", {
                                        className: "text-sm mt-1 font-medium",
                                        style: {
                                            color: r.accent
                                        },
                                        children: r.company
                                    })]
                                }), S.jsx("span", {
                                    className: "text-xs tracking-wider text-muted-foreground glass px-3 py-1.5 rounded-full w-fit",
                                    children: r.period
                                })]
                            }), S.jsx("p", {
                                className: "text-muted-foreground leading-relaxed text-sm md:text-base",
                                children: r.description
                            }), S.jsx("div", {
                                className: "mt-5 flex flex-wrap gap-2",
                                children: r.tags.map(a => S.jsx("span", {
                                    className: "text-xs px-3 py-1 rounded-full glass",
                                    style: {
                                        color: r.accent,
                                        borderColor: `${r.accent}30`
                                    },
                                    children: a
                                }, a))
                            })]
                        })]
                    }, i))
                })]
            })]
        })]
    })
}
const XP = [{
    title: "Technical Skills",
    color: "hsl(217 91% 65%)",
    skills: [{
        name: "Skill One",
        level: 95
    }, {
        name: "Skill Two",
        level: 88
    }, {
        name: "Skill Three",
        level: 82
    }, {
        name: "Skill Four",
        level: 75
    }]
}, {
    title: "Soft Skills",
    color: "hsl(280 70% 65%)",
    skills: [{
        name: "Leadership",
        level: 90
    }, {
        name: "Communication",
        level: 92
    }, {
        name: "Problem Solving",
        level: 88
    }, {
        name: "Teamwork",
        level: 95
    }]
}]
  , JP = ["Tool 1", "Tool 2", "Tool 3", "Tool 4", "Tool 5", "Tool 6", "Tool 7", "Tool 8"];
function ZP() {
    const t = D.useRef(null)
      , e = jo(t, {
        once: !0,
        margin: "-100px"
    });
    return S.jsxs("section", {
        id: "skills",
        className: "relative py-24 md:py-32 overflow-hidden",
        ref: t,
        children: [S.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(280_70%_65%_/_0.07)_0%,_transparent_60%)]"
        }), S.jsxs("div", {
            className: "relative max-w-6xl mx-auto px-6",
            children: [S.jsxs(be.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: e ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .7
                },
                children: [S.jsxs("div", {
                    className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4",
                    children: [S.jsx("div", {
                        className: "w-1.5 h-1.5 rounded-full bg-accent"
                    }), S.jsx("p", {
                        className: "text-xs tracking-[0.2em] uppercase text-accent font-medium",
                        children: "Expertise"
                    })]
                }), S.jsxs("h2", {
                    className: "text-3xl md:text-4xl font-bold text-foreground tracking-tight",
                    children: ["Skills & ", S.jsx("span", {
                        className: "shimmer-text",
                        children: "proficiencies"
                    })]
                })]
            }), S.jsx("div", {
                className: "mt-16 grid md:grid-cols-2 gap-8",
                children: XP.map( (r, i) => S.jsxs(be.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: e ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .6,
                        delay: .2 + i * .15
                    },
                    className: "glass rounded-2xl p-6 md:p-8",
                    children: [S.jsx("h3", {
                        className: "text-base font-semibold mb-6",
                        style: {
                            color: r.color
                        },
                        children: r.title
                    }), S.jsx("div", {
                        className: "space-y-5",
                        children: r.skills.map( (a, u) => S.jsxs("div", {
                            children: [S.jsxs("div", {
                                className: "flex justify-between mb-2",
                                children: [S.jsx("span", {
                                    className: "text-sm text-foreground",
                                    children: a.name
                                }), S.jsxs("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: [a.level, "%"]
                                })]
                            }), S.jsx("div", {
                                className: "h-1.5 rounded-full overflow-hidden",
                                style: {
                                    background: "hsl(222 35% 14%)"
                                },
                                children: S.jsx(be.div, {
                                    initial: {
                                        width: 0
                                    },
                                    animate: e ? {
                                        width: `${a.level}%`
                                    } : {},
                                    transition: {
                                        duration: 1.2,
                                        delay: .4 + i * .2 + u * .1,
                                        ease: "easeOut"
                                    },
                                    className: "h-full rounded-full relative overflow-hidden",
                                    style: {
                                        background: `linear-gradient(90deg, ${r.color}80, ${r.color})`
                                    },
                                    children: S.jsx(be.div, {
                                        animate: {
                                            x: ["-100%", "200%"]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: 1 / 0,
                                            delay: 1.5 + u * .2
                                        },
                                        className: "absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                                    })
                                })
                            })]
                        }, a.name))
                    })]
                }, r.title))
            }), S.jsxs(be.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: e ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .6,
                    delay: .6
                },
                className: "mt-10",
                children: [S.jsx("h3", {
                    className: "text-base font-semibold text-foreground mb-5",
                    children: "Tools & Technologies"
                }), S.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: JP.map( (r, i) => S.jsx(be.span, {
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        animate: e ? {
                            opacity: 1,
                            scale: 1
                        } : {},
                        transition: {
                            duration: .4,
                            delay: .7 + i * .06
                        },
                        whileHover: {
                            scale: 1.05,
                            y: -2
                        },
                        className: "px-5 py-2.5 glass text-foreground rounded-xl text-sm cursor-default transition-all duration-300 hover:glow-blue",
                        children: r
                    }, r))
                })]
            })]
        })]
    })
}
const eR = [{
    title: "Project One",
    category: "Category",
    description: "A brief description of this project and what you achieved.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    accent: "hsl(217 91% 65%)"
}, {
    title: "Project Two",
    category: "Category",
    description: "A brief description of this project and what you achieved.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    accent: "hsl(280 70% 65%)"
}, {
    title: "Project Three",
    category: "Category",
    description: "A brief description of this project and what you achieved.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    accent: "hsl(173 58% 50%)"
}];
function tR() {
    const t = D.useRef(null)
      , e = jo(t, {
        once: !0,
        margin: "-100px"
    });
    return S.jsxs("section", {
        id: "portfolio",
        className: "relative py-24 md:py-32 overflow-hidden",
        ref: t,
        children: [S.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217_91%_65%_/_0.05)_0%,_transparent_60%)]"
        }), S.jsxs("div", {
            className: "relative max-w-6xl mx-auto px-6",
            children: [S.jsxs(be.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: e ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .7
                },
                children: [S.jsxs("div", {
                    className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4",
                    children: [S.jsx("div", {
                        className: "w-1.5 h-1.5 rounded-full bg-primary"
                    }), S.jsx("p", {
                        className: "text-xs tracking-[0.2em] uppercase text-primary font-medium",
                        children: "Featured Work"
                    })]
                }), S.jsxs("h2", {
                    className: "text-3xl md:text-4xl font-bold text-foreground tracking-tight",
                    children: ["Selected ", S.jsx("span", {
                        className: "shimmer-text",
                        children: "projects"
                    })]
                })]
            }), S.jsx("div", {
                className: "mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: eR.map( (r, i) => S.jsx(be.div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    animate: e ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .6,
                        delay: .2 + i * .15
                    },
                    whileHover: {
                        y: -6
                    },
                    className: "group cursor-pointer",
                    children: S.jsxs("div", {
                        className: "glass rounded-2xl overflow-hidden transition-all duration-500 group-hover:glow-blue",
                        children: [S.jsxs("div", {
                            className: "relative aspect-[3/2] overflow-hidden",
                            children: [S.jsx("img", {
                                src: r.image,
                                alt: r.title,
                                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                            }), S.jsx("div", {
                                className: "absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-500 flex items-center justify-center",
                                children: S.jsx(be.div, {
                                    initial: !1,
                                    className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    children: S.jsx("div", {
                                        className: "glass-strong w-12 h-12 rounded-full flex items-center justify-center",
                                        children: S.jsx(xb, {
                                            size: 18,
                                            className: "text-foreground"
                                        })
                                    })
                                })
                            }), S.jsx("div", {
                                className: "absolute top-0 left-0 right-0 h-0.5",
                                style: {
                                    background: `linear-gradient(to right, transparent, ${r.accent}, transparent)`
                                }
                            })]
                        }), S.jsxs("div", {
                            className: "p-5",
                            children: [S.jsx("span", {
                                className: "text-xs tracking-wider uppercase font-medium",
                                style: {
                                    color: r.accent
                                },
                                children: r.category
                            }), S.jsx("h3", {
                                className: "text-base font-semibold text-foreground mt-1 group-hover:text-primary transition-colors",
                                children: r.title
                            }), S.jsx("p", {
                                className: "text-sm text-muted-foreground mt-2 leading-relaxed",
                                children: r.description
                            })]
                        })]
                    })
                }, i))
            })]
        })]
    })
}
const nR = [{
    icon: Ob,
    label: "your.email@example.com",
    href: "mailto:your.email@example.com",
    color: "hsl(217 91% 65%)"
}, {
    icon: Ib,
    label: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "hsl(280 70% 65%)"
}, {
    icon: Gv,
    label: "Your City, Country",
    href: "#",
    color: "hsl(173 58% 50%)"
}]
  , rR = [{
    icon: Ab,
    label: "LinkedIn",
    href: "#"
}, {
    icon: Cb,
    label: "GitHub",
    href: "#"
}];
function sR() {
    const t = D.useRef(null)
      , e = jo(t, {
        once: !0,
        margin: "-100px"
    });
    return S.jsxs("section", {
        id: "contact",
        className: "relative py-24 md:py-32 overflow-hidden",
        ref: t,
        children: [S.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(217_91%_65%_/_0.08)_0%,_transparent_60%)]"
        }), S.jsx("div", {
            className: "relative max-w-6xl mx-auto px-6",
            children: S.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-16 items-center",
                children: [S.jsxs(be.div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    animate: e ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .7
                    },
                    children: [S.jsxs("div", {
                        className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4",
                        children: [S.jsx("div", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary"
                        }), S.jsx("p", {
                            className: "text-xs tracking-[0.2em] uppercase text-primary font-medium",
                            children: "Get in Touch"
                        })]
                    }), S.jsxs("h2", {
                        className: "text-3xl md:text-4xl font-bold text-foreground tracking-tight",
                        children: ["Let's ", S.jsx("span", {
                            className: "shimmer-text",
                            children: "connect"
                        })]
                    }), S.jsx("p", {
                        className: "mt-6 text-muted-foreground leading-relaxed max-w-md",
                        children: "I'm always open to discussing new opportunities, creative ideas, or potential collaborations. Feel free to reach out."
                    }), S.jsx("div", {
                        className: "mt-10 space-y-4",
                        children: nR.map( (r, i) => S.jsxs(be.a, {
                            href: r.href,
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: e ? {
                                opacity: 1,
                                x: 0
                            } : {},
                            transition: {
                                duration: .5,
                                delay: .3 + i * .1
                            },
                            whileHover: {
                                x: 4
                            },
                            className: "flex items-center gap-4 group",
                            children: [S.jsx("div", {
                                className: "w-11 h-11 rounded-xl glass flex items-center justify-center transition-all duration-300",
                                style: {
                                    "--hover-color": r.color
                                },
                                children: S.jsx(r.icon, {
                                    size: 17,
                                    style: {
                                        color: r.color
                                    }
                                })
                            }), S.jsx("span", {
                                className: "text-muted-foreground group-hover:text-foreground transition-colors",
                                children: r.label
                            })]
                        }, r.label))
                    }), S.jsx("div", {
                        className: "mt-10 flex gap-3",
                        children: rR.map( (r, i) => S.jsx(be.a, {
                            href: r.href,
                            initial: {
                                opacity: 0,
                                scale: .8
                            },
                            animate: e ? {
                                opacity: 1,
                                scale: 1
                            } : {},
                            transition: {
                                duration: .4,
                                delay: .6 + i * .1
                            },
                            whileHover: {
                                scale: 1.1,
                                y: -2
                            },
                            className: "w-11 h-11 rounded-xl glass flex items-center justify-center hover:glow-blue transition-all duration-300",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: S.jsx(r.icon, {
                                size: 17,
                                className: "text-muted-foreground"
                            })
                        }, r.label))
                    })]
                }), S.jsx(be.div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    animate: e ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .7,
                        delay: .3
                    },
                    className: "hidden lg:block",
                    children: S.jsxs("div", {
                        className: "relative",
                        children: [S.jsx("div", {
                            className: "absolute inset-0 rounded-3xl blur-2xl opacity-30",
                            style: {
                                background: "hsl(217 91% 65% / 0.3)"
                            }
                        }), S.jsxs("div", {
                            className: "relative aspect-square rounded-3xl overflow-hidden glass glow-blue",
                            children: [S.jsx("img", {
                                src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop",
                                alt: "Contact",
                                className: "w-full h-full object-cover opacity-80"
                            }), S.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
                            }), S.jsxs("div", {
                                className: "absolute bottom-0 left-0 right-0 glass-strong p-5",
                                children: [S.jsx("p", {
                                    className: "text-sm font-medium text-foreground",
                                    children: "Open to opportunities"
                                }), S.jsx("p", {
                                    className: "text-xs text-muted-foreground mt-0.5",
                                    children: "Let's build something great together"
                                })]
                            })]
                        })]
                    })
                })]
            })
        })]
    })
}
function iR() {
    return S.jsxs("footer", {
        className: "relative py-8 overflow-hidden",
        children: [S.jsx("div", {
            className: "absolute top-0 left-0 right-0 h-px",
            style: {
                background: "linear-gradient(to right, transparent, hsl(217 91% 65% / 0.3), hsl(280 70% 65% / 0.3), transparent)"
            }
        }), S.jsxs("div", {
            className: "max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4",
            children: [S.jsxs("p", {
                className: "text-sm text-muted-foreground",
                children: ["© ", new Date().getFullYear(), " ", S.jsx("span", {
                    className: "shimmer-text font-medium",
                    children: "Your Name"
                }), ". All rights reserved."]
            }), S.jsx("p", {
                className: "text-xs text-muted-foreground/40 tracking-widest uppercase",
                children: "Crafted with care"
            })]
        })]
    })
}
function oR() {
    return S.jsxs("div", {
        className: "min-h-screen bg-background antialiased",
        children: [S.jsx(qP, {}), S.jsx(WP, {}), S.jsx(QP, {}), S.jsx(YP, {}), S.jsx(ZP, {}), S.jsx(tR, {}), S.jsx(sR, {}), S.jsx(iR, {})]
    })
}
const aR = {
    Home: oR
}
  , lR = {
    mainPage: "Home",
    Pages: aR
};
Hv();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _l() {
    return _l = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    _l.apply(this, arguments)
}
var br;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(br || (br = {}));
const qy = "popstate";
function uR(t) {
    t === void 0 && (t = {});
    function e(i, a) {
        let {pathname: u, search: c, hash: f} = i.location;
        return Wd("", {
            pathname: u,
            search: c,
            hash: f
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }
    function r(i, a) {
        return typeof a == "string" ? a : ix(a)
    }
    return dR(e, r, null, t)
}
function Dt(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function sx(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function cR() {
    return Math.random().toString(36).substr(2, 8)
}
function Hy(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function Wd(t, e, r, i) {
    return r === void 0 && (r = null),
    _l({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? Ml(e) : e, {
        state: r,
        key: e && e.key || i || cR()
    })
}
function ix(t) {
    let {pathname: e="/", search: r="", hash: i=""} = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
}
function Ml(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r),
        t = t.substr(0, r));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i),
        t = t.substr(0, i)),
        t && (e.pathname = t)
    }
    return e
}
function dR(t, e, r, i) {
    i === void 0 && (i = {});
    let {window: a=document.defaultView, v5Compat: u=!1} = i
      , c = a.history
      , f = br.Pop
      , h = null
      , m = g();
    m == null && (m = 0,
    c.replaceState(_l({}, c.state, {
        idx: m
    }), ""));
    function g() {
        return (c.state || {
            idx: null
        }).idx
    }
    function y() {
        f = br.Pop;
        let x = g()
          , R = x == null ? null : x - m;
        m = x,
        h && h({
            action: f,
            location: k.location,
            delta: R
        })
    }
    function w(x, R) {
        f = br.Push;
        let V = Wd(k.location, x, R);
        m = g() + 1;
        let L = Hy(V, m)
          , j = k.createHref(V);
        try {
            c.pushState(L, "", j)
        } catch (B) {
            if (B instanceof DOMException && B.name === "DataCloneError")
                throw B;
            a.location.assign(j)
        }
        u && h && h({
            action: f,
            location: k.location,
            delta: 1
        })
    }
    function E(x, R) {
        f = br.Replace;
        let V = Wd(k.location, x, R);
        m = g();
        let L = Hy(V, m)
          , j = k.createHref(V);
        c.replaceState(L, "", j),
        u && h && h({
            action: f,
            location: k.location,
            delta: 0
        })
    }
    function b(x) {
        let R = a.location.origin !== "null" ? a.location.origin : a.location.href
          , V = typeof x == "string" ? x : ix(x);
        return V = V.replace(/ $/, "%20"),
        Dt(R, "No window.location.(origin|href) available to create URL for href: " + V),
        new URL(V,R)
    }
    let k = {
        get action() {
            return f
        },
        get location() {
            return t(a, c)
        },
        listen(x) {
            if (h)
                throw new Error("A history only accepts one active listener");
            return a.addEventListener(qy, y),
            h = x,
            () => {
                a.removeEventListener(qy, y),
                h = null
            }
        },
        createHref(x) {
            return e(a, x)
        },
        createURL: b,
        encodeLocation(x) {
            let R = b(x);
            return {
                pathname: R.pathname,
                search: R.search,
                hash: R.hash
            }
        },
        push: w,
        replace: E,
        go(x) {
            return c.go(x)
        }
    };
    return k
}
var Wy;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(Wy || (Wy = {}));
function fR(t, e, r) {
    return r === void 0 && (r = "/"),
    hR(t, e, r)
}
function hR(t, e, r, i) {
    let a = typeof e == "string" ? Ml(e) : e
      , u = lx(a.pathname || "/", r);
    if (u == null)
        return null;
    let c = ox(t);
    pR(c);
    let f = null;
    for (let h = 0; f == null && h < c.length; ++h) {
        let m = CR(u);
        f = kR(c[h], m)
    }
    return f
}
function ox(t, e, r, i) {
    e === void 0 && (e = []),
    r === void 0 && (r = []),
    i === void 0 && (i = "");
    let a = (u, c, f) => {
        let h = {
            relativePath: f === void 0 ? u.path || "" : f,
            caseSensitive: u.caseSensitive === !0,
            childrenIndex: c,
            route: u
        };
        h.relativePath.startsWith("/") && (Dt(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        h.relativePath = h.relativePath.slice(i.length));
        let m = zs([i, h.relativePath])
          , g = r.concat(h);
        u.children && u.children.length > 0 && (Dt(u.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')),
        ox(u.children, e, g, m)),
        !(u.path == null && !u.index) && e.push({
            path: m,
            score: SR(m, u.index),
            routesMeta: g
        })
    }
    ;
    return t.forEach( (u, c) => {
        var f;
        if (u.path === "" || !((f = u.path) != null && f.includes("?")))
            a(u, c);
        else
            for (let h of ax(u.path))
                a(u, c, h)
    }
    ),
    e
}
function ax(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[r,...i] = e
      , a = r.endsWith("?")
      , u = r.replace(/\?$/, "");
    if (i.length === 0)
        return a ? [u, ""] : [u];
    let c = ax(i.join("/"))
      , f = [];
    return f.push(...c.map(h => h === "" ? u : [u, h].join("/"))),
    a && f.push(...c),
    f.map(h => t.startsWith("/") && h === "" ? "/" : h)
}
function pR(t) {
    t.sort( (e, r) => e.score !== r.score ? r.score - e.score : bR(e.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex)))
}
const mR = /^:[\w-]+$/
  , gR = 3
  , yR = 2
  , vR = 1
  , wR = 10
  , xR = -2
  , Ky = t => t === "*";
function SR(t, e) {
    let r = t.split("/")
      , i = r.length;
    return r.some(Ky) && (i += xR),
    e && (i += yR),
    r.filter(a => !Ky(a)).reduce( (a, u) => a + (mR.test(u) ? gR : u === "" ? vR : wR), i)
}
function bR(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function kR(t, e, r) {
    let {routesMeta: i} = t
      , a = {}
      , u = "/"
      , c = [];
    for (let f = 0; f < i.length; ++f) {
        let h = i[f]
          , m = f === i.length - 1
          , g = u === "/" ? e : e.slice(u.length) || "/"
          , y = ER({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: m
        }, g)
          , w = h.route;
        if (!y)
            return null;
        Object.assign(a, y.params),
        c.push({
            params: a,
            pathname: zs([u, y.pathname]),
            pathnameBase: _R(zs([u, y.pathnameBase])),
            route: w
        }),
        y.pathnameBase !== "/" && (u = zs([u, y.pathnameBase]))
    }
    return c
}
function ER(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[r,i] = TR(t.path, t.caseSensitive, t.end)
      , a = e.match(r);
    if (!a)
        return null;
    let u = a[0]
      , c = u.replace(/(.)\/+$/, "$1")
      , f = a.slice(1);
    return {
        params: i.reduce( (m, g, y) => {
            let {paramName: w, isOptional: E} = g;
            if (w === "*") {
                let k = f[y] || "";
                c = u.slice(0, u.length - k.length).replace(/(.)\/+$/, "$1")
            }
            const b = f[y];
            return E && !b ? m[w] = void 0 : m[w] = (b || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: u,
        pathnameBase: c,
        pattern: t
    }
}
function TR(t, e, r) {
    e === void 0 && (e = !1),
    r === void 0 && (r = !0),
    sx(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = []
      , a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, f, h) => (i.push({
        paramName: f,
        isOptional: h != null
    }),
    h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a,e ? void 0 : "i"), i]
}
function CR(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return sx(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function lx(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length
      , i = t.charAt(r);
    return i && i !== "/" ? null : t.slice(r) || "/"
}
const zs = t => t.join("/").replace(/\/\/+/g, "/")
  , _R = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");
function PR(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const ux = ["post", "put", "patch", "delete"];
new Set(ux);
const RR = ["get", ...ux];
new Set(RR);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Pl() {
    return Pl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    Pl.apply(this, arguments)
}
const AR = D.createContext(null)
  , NR = D.createContext(null)
  , cx = D.createContext(null)
  , Il = D.createContext(null)
  , Fl = D.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , dx = D.createContext(null);
function Kf() {
    return D.useContext(Il) != null
}
function fx() {
    return Kf() || Dt(!1),
    D.useContext(Il).location
}
function OR(t, e) {
    return jR(t, e)
}
function jR(t, e, r, i) {
    Kf() || Dt(!1);
    let {navigator: a} = D.useContext(cx)
      , {matches: u} = D.useContext(Fl)
      , c = u[u.length - 1]
      , f = c ? c.params : {};
    c && c.pathname;
    let h = c ? c.pathnameBase : "/";
    c && c.route;
    let m = fx(), g;
    if (e) {
        var y;
        let x = typeof e == "string" ? Ml(e) : e;
        h === "/" || (y = x.pathname) != null && y.startsWith(h) || Dt(!1),
        g = x
    } else
        g = m;
    let w = g.pathname || "/"
      , E = w;
    if (h !== "/") {
        let x = h.replace(/^\//, "").split("/");
        E = "/" + w.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let b = fR(t, {
        pathname: E
    })
      , k = FR(b && b.map(x => Object.assign({}, x, {
        params: Object.assign({}, f, x.params),
        pathname: zs([h, a.encodeLocation ? a.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? h : zs([h, a.encodeLocation ? a.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), u, r, i);
    return e && k ? D.createElement(Il.Provider, {
        value: {
            location: Pl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, g),
            navigationType: br.Pop
        }
    }, k) : k
}
function LR() {
    let t = zR()
      , e = PR(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , r = t instanceof Error ? t.stack : null
      , a = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return D.createElement(D.Fragment, null, D.createElement("h2", null, "Unexpected Application Error!"), D.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? D.createElement("pre", {
        style: a
    }, r) : null, null)
}
const DR = D.createElement(LR, null);
class MR extends D.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? D.createElement(Fl.Provider, {
            value: this.props.routeContext
        }, D.createElement(dx.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function IR(t) {
    let {routeContext: e, match: r, children: i} = t
      , a = D.useContext(AR);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    D.createElement(Fl.Provider, {
        value: e
    }, i)
}
function FR(t, e, r, i) {
    var a;
    if (e === void 0 && (e = []),
    r === void 0 && (r = null),
    i === void 0 && (i = null),
    t == null) {
        var u;
        if (!r)
            return null;
        if (r.errors)
            t = r.matches;
        else if ((u = i) != null && u.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0)
            t = r.matches;
        else
            return null
    }
    let c = t
      , f = (a = r) == null ? void 0 : a.errors;
    if (f != null) {
        let g = c.findIndex(y => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0);
        g >= 0 || Dt(!1),
        c = c.slice(0, Math.min(c.length, g + 1))
    }
    let h = !1
      , m = -1;
    if (r && i && i.v7_partialHydration)
        for (let g = 0; g < c.length; g++) {
            let y = c[g];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g),
            y.route.id) {
                let {loaderData: w, errors: E} = r
                  , b = y.route.loader && w[y.route.id] === void 0 && (!E || E[y.route.id] === void 0);
                if (y.route.lazy || b) {
                    h = !0,
                    m >= 0 ? c = c.slice(0, m + 1) : c = [c[0]];
                    break
                }
            }
        }
    return c.reduceRight( (g, y, w) => {
        let E, b = !1, k = null, x = null;
        r && (E = f && y.route.id ? f[y.route.id] : void 0,
        k = y.route.errorElement || DR,
        h && (m < 0 && w === 0 ? ($R("route-fallback"),
        b = !0,
        x = null) : m === w && (b = !0,
        x = y.route.hydrateFallbackElement || null)));
        let R = e.concat(c.slice(0, w + 1))
          , V = () => {
            let L;
            return E ? L = k : b ? L = x : y.route.Component ? L = D.createElement(y.route.Component, null) : y.route.element ? L = y.route.element : L = g,
            D.createElement(IR, {
                match: y,
                routeContext: {
                    outlet: g,
                    matches: R,
                    isDataRoute: r != null
                },
                children: L
            })
        }
        ;
        return r && (y.route.ErrorBoundary || y.route.errorElement || w === 0) ? D.createElement(MR, {
            location: r.location,
            revalidation: r.revalidation,
            component: k,
            error: E,
            children: V(),
            routeContext: {
                outlet: null,
                matches: R,
                isDataRoute: !0
            }
        }) : V()
    }
    , null)
}
var hx = (function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}
)(hx || {});
function VR(t) {
    let e = D.useContext(NR);
    return e || Dt(!1),
    e
}
function BR(t) {
    let e = D.useContext(Fl);
    return e || Dt(!1),
    e
}
function UR(t) {
    let e = BR()
      , r = e.matches[e.matches.length - 1];
    return r.route.id || Dt(!1),
    r.route.id
}
function zR() {
    var t;
    let e = D.useContext(dx)
      , r = VR(hx.UseRouteError)
      , i = UR();
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[i]
}
const Qy = {};
function $R(t, e, r) {
    Qy[t] || (Qy[t] = !0)
}
function qR(t, e) {
    t == null || t.v7_startTransition,
    t == null || t.v7_relativeSplatPath
}
function cl(t) {
    Dt(!1)
}
function HR(t) {
    let {basename: e="/", children: r=null, location: i, navigationType: a=br.Pop, navigator: u, static: c=!1, future: f} = t;
    Kf() && Dt(!1);
    let h = e.replace(/^\/*/, "/")
      , m = D.useMemo( () => ({
        basename: h,
        navigator: u,
        static: c,
        future: Pl({
            v7_relativeSplatPath: !1
        }, f)
    }), [h, f, u, c]);
    typeof i == "string" && (i = Ml(i));
    let {pathname: g="/", search: y="", hash: w="", state: E=null, key: b="default"} = i
      , k = D.useMemo( () => {
        let x = lx(g, h);
        return x == null ? null : {
            location: {
                pathname: x,
                search: y,
                hash: w,
                state: E,
                key: b
            },
            navigationType: a
        }
    }
    , [h, g, y, w, E, b, a]);
    return k == null ? null : D.createElement(cx.Provider, {
        value: m
    }, D.createElement(Il.Provider, {
        children: r,
        value: k
    }))
}
function WR(t) {
    let {children: e, location: r} = t;
    return OR(Kd(e), r)
}
new Promise( () => {}
);
function Kd(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return D.Children.forEach(t, (i, a) => {
        if (!D.isValidElement(i))
            return;
        let u = [...e, a];
        if (i.type === D.Fragment) {
            r.push.apply(r, Kd(i.props.children, u));
            return
        }
        i.type !== cl && Dt(!1),
        !i.props.index || !i.props.children || Dt(!1);
        let c = {
            id: i.props.id || u.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (c.children = Kd(i.props.children, u)),
        r.push(c)
    }
    ),
    r
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const KR = "6";
try {
    window.__reactRouterVersion = KR
} catch {}
const QR = "startTransition"
  , Gy = eb[QR];
function GR(t) {
    let {basename: e, children: r, future: i, window: a} = t
      , u = D.useRef();
    u.current == null && (u.current = uR({
        window: a,
        v5Compat: !0
    }));
    let c = u.current
      , [f,h] = D.useState({
        action: c.action,
        location: c.location
    })
      , {v7_startTransition: m} = i || {}
      , g = D.useCallback(y => {
        m && Gy ? Gy( () => h(y)) : h(y)
    }
    , [h, m]);
    return D.useLayoutEffect( () => c.listen(g), [c, g]),
    D.useEffect( () => qR(i), [i]),
    D.createElement(HR, {
        basename: e,
        children: r,
        location: f.location,
        navigationType: f.action,
        navigator: c,
        future: i
    })
}
var Yy;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(Yy || (Yy = {}));
var Xy;
(function(t) {
    t.UseFetcher = "useFetcher",
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(Xy || (Xy = {}));
function px(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {toString: YR} = Object.prototype
  , {getPrototypeOf: Qf} = Object
  , {iterator: Vl, toStringTag: mx} = Symbol
  , Bl = (t => e => {
    const r = YR.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , hn = t => (t = t.toLowerCase(),
e => Bl(e) === t)
  , Ul = t => e => typeof e === t
  , {isArray: ai} = Array
  , si = Ul("undefined");
function Lo(t) {
    return t !== null && !si(t) && t.constructor !== null && !si(t.constructor) && jt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const gx = hn("ArrayBuffer");
function XR(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && gx(t.buffer),
    e
}
const JR = Ul("string")
  , jt = Ul("function")
  , yx = Ul("number")
  , Do = t => t !== null && typeof t == "object"
  , ZR = t => t === !0 || t === !1
  , dl = t => {
    if (Bl(t) !== "object")
        return !1;
    const e = Qf(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(mx in t) && !(Vl in t)
}
  , eA = t => {
    if (!Do(t) || Lo(t))
        return !1;
    try {
        return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
    } catch {
        return !1
    }
}
  , tA = hn("Date")
  , nA = hn("File")
  , rA = hn("Blob")
  , sA = hn("FileList")
  , iA = t => Do(t) && jt(t.pipe)
  , oA = t => {
    let e;
    return t && (typeof FormData == "function" && t instanceof FormData || jt(t.append) && ((e = Bl(t)) === "formdata" || e === "object" && jt(t.toString) && t.toString() === "[object FormData]"))
}
  , aA = hn("URLSearchParams")
  , [lA,uA,cA,dA] = ["ReadableStream", "Request", "Response", "Headers"].map(hn)
  , fA = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mo(t, e, {allOwnKeys: r=!1}={}) {
    if (t === null || typeof t > "u")
        return;
    let i, a;
    if (typeof t != "object" && (t = [t]),
    ai(t))
        for (i = 0,
        a = t.length; i < a; i++)
            e.call(null, t[i], i, t);
    else {
        if (Lo(t))
            return;
        const u = r ? Object.getOwnPropertyNames(t) : Object.keys(t)
          , c = u.length;
        let f;
        for (i = 0; i < c; i++)
            f = u[i],
            e.call(null, t[f], f, t)
    }
}
function vx(t, e) {
    if (Lo(t))
        return null;
    e = e.toLowerCase();
    const r = Object.keys(t);
    let i = r.length, a;
    for (; i-- > 0; )
        if (a = r[i],
        e === a.toLowerCase())
            return a;
    return null
}
const Gr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , wx = t => !si(t) && t !== Gr;
function Qd() {
    const {caseless: t, skipUndefined: e} = wx(this) && this || {}
      , r = {}
      , i = (a, u) => {
        if (u === "__proto__" || u === "constructor" || u === "prototype")
            return;
        const c = t && vx(r, u) || u;
        dl(r[c]) && dl(a) ? r[c] = Qd(r[c], a) : dl(a) ? r[c] = Qd({}, a) : ai(a) ? r[c] = a.slice() : (!e || !si(a)) && (r[c] = a)
    }
    ;
    for (let a = 0, u = arguments.length; a < u; a++)
        arguments[a] && Mo(arguments[a], i);
    return r
}
const hA = (t, e, r, {allOwnKeys: i}={}) => (Mo(e, (a, u) => {
    r && jt(a) ? Object.defineProperty(t, u, {
        value: px(a, r),
        writable: !0,
        enumerable: !0,
        configurable: !0
    }) : Object.defineProperty(t, u, {
        value: a,
        writable: !0,
        enumerable: !0,
        configurable: !0
    })
}
, {
    allOwnKeys: i
}),
t)
  , pA = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)),
t)
  , mA = (t, e, r, i) => {
    t.prototype = Object.create(e.prototype, i),
    Object.defineProperty(t.prototype, "constructor", {
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t, "super", {
        value: e.prototype
    }),
    r && Object.assign(t.prototype, r)
}
  , gA = (t, e, r, i) => {
    let a, u, c;
    const f = {};
    if (e = e || {},
    t == null)
        return e;
    do {
        for (a = Object.getOwnPropertyNames(t),
        u = a.length; u-- > 0; )
            c = a[u],
            (!i || i(c, t, e)) && !f[c] && (e[c] = t[c],
            f[c] = !0);
        t = r !== !1 && Qf(t)
    } while (t && (!r || r(t, e)) && t !== Object.prototype);
    return e
}
  , yA = (t, e, r) => {
    t = String(t),
    (r === void 0 || r > t.length) && (r = t.length),
    r -= e.length;
    const i = t.indexOf(e, r);
    return i !== -1 && i === r
}
  , vA = t => {
    if (!t)
        return null;
    if (ai(t))
        return t;
    let e = t.length;
    if (!yx(e))
        return null;
    const r = new Array(e);
    for (; e-- > 0; )
        r[e] = t[e];
    return r
}
  , wA = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && Qf(Uint8Array))
  , xA = (t, e) => {
    const i = (t && t[Vl]).call(t);
    let a;
    for (; (a = i.next()) && !a.done; ) {
        const u = a.value;
        e.call(t, u[0], u[1])
    }
}
  , SA = (t, e) => {
    let r;
    const i = [];
    for (; (r = t.exec(e)) !== null; )
        i.push(r);
    return i
}
  , bA = hn("HTMLFormElement")
  , kA = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, i, a) {
    return i.toUpperCase() + a
})
  , Jy = ( ({hasOwnProperty: t}) => (e, r) => t.call(e, r))(Object.prototype)
  , EA = hn("RegExp")
  , xx = (t, e) => {
    const r = Object.getOwnPropertyDescriptors(t)
      , i = {};
    Mo(r, (a, u) => {
        let c;
        (c = e(a, u, t)) !== !1 && (i[u] = c || a)
    }
    ),
    Object.defineProperties(t, i)
}
  , TA = t => {
    xx(t, (e, r) => {
        if (jt(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
            return !1;
        const i = t[r];
        if (jt(i)) {
            if (e.enumerable = !1,
            "writable"in e) {
                e.writable = !1;
                return
            }
            e.set || (e.set = () => {
                throw Error("Can not rewrite read-only method '" + r + "'")
            }
            )
        }
    }
    )
}
  , CA = (t, e) => {
    const r = {}
      , i = a => {
        a.forEach(u => {
            r[u] = !0
        }
        )
    }
    ;
    return ai(t) ? i(t) : i(String(t).split(e)),
    r
}
  , _A = () => {}
  , PA = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function RA(t) {
    return !!(t && jt(t.append) && t[mx] === "FormData" && t[Vl])
}
const AA = t => {
    const e = new Array(10)
      , r = (i, a) => {
        if (Do(i)) {
            if (e.indexOf(i) >= 0)
                return;
            if (Lo(i))
                return i;
            if (!("toJSON"in i)) {
                e[a] = i;
                const u = ai(i) ? [] : {};
                return Mo(i, (c, f) => {
                    const h = r(c, a + 1);
                    !si(h) && (u[f] = h)
                }
                ),
                e[a] = void 0,
                u
            }
        }
        return i
    }
    ;
    return r(t, 0)
}
  , NA = hn("AsyncFunction")
  , OA = t => t && (Do(t) || jt(t)) && jt(t.then) && jt(t.catch)
  , Sx = ( (t, e) => t ? setImmediate : e ? ( (r, i) => (Gr.addEventListener("message", ({source: a, data: u}) => {
    a === Gr && u === r && i.length && i.shift()()
}
, !1),
a => {
    i.push(a),
    Gr.postMessage(r, "*")
}
))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", jt(Gr.postMessage))
  , jA = typeof queueMicrotask < "u" ? queueMicrotask.bind(Gr) : typeof process < "u" && process.nextTick || Sx
  , LA = t => t != null && jt(t[Vl])
  , F = {
    isArray: ai,
    isArrayBuffer: gx,
    isBuffer: Lo,
    isFormData: oA,
    isArrayBufferView: XR,
    isString: JR,
    isNumber: yx,
    isBoolean: ZR,
    isObject: Do,
    isPlainObject: dl,
    isEmptyObject: eA,
    isReadableStream: lA,
    isRequest: uA,
    isResponse: cA,
    isHeaders: dA,
    isUndefined: si,
    isDate: tA,
    isFile: nA,
    isBlob: rA,
    isRegExp: EA,
    isFunction: jt,
    isStream: iA,
    isURLSearchParams: aA,
    isTypedArray: wA,
    isFileList: sA,
    forEach: Mo,
    merge: Qd,
    extend: hA,
    trim: fA,
    stripBOM: pA,
    inherits: mA,
    toFlatObject: gA,
    kindOf: Bl,
    kindOfTest: hn,
    endsWith: yA,
    toArray: vA,
    forEachEntry: xA,
    matchAll: SA,
    isHTMLForm: bA,
    hasOwnProperty: Jy,
    hasOwnProp: Jy,
    reduceDescriptors: xx,
    freezeMethods: TA,
    toObjectSet: CA,
    toCamelCase: kA,
    noop: _A,
    toFiniteNumber: PA,
    findKey: vx,
    global: Gr,
    isContextDefined: wx,
    isSpecCompliantForm: RA,
    toJSONObject: AA,
    isAsyncFn: NA,
    isThenable: OA,
    setImmediate: Sx,
    asap: jA,
    isIterable: LA
};
let pe = class bx extends Error {
    static from(e, r, i, a, u, c) {
        const f = new bx(e.message,r || e.code,i,a,u);
        return f.cause = e,
        f.name = e.name,
        c && Object.assign(f, c),
        f
    }
    constructor(e, r, i, a, u) {
        super(e),
        this.name = "AxiosError",
        this.isAxiosError = !0,
        r && (this.code = r),
        i && (this.config = i),
        a && (this.request = a),
        u && (this.response = u,
        this.status = u.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: F.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
}
;
pe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
pe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
pe.ECONNABORTED = "ECONNABORTED";
pe.ETIMEDOUT = "ETIMEDOUT";
pe.ERR_NETWORK = "ERR_NETWORK";
pe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
pe.ERR_DEPRECATED = "ERR_DEPRECATED";
pe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
pe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
pe.ERR_CANCELED = "ERR_CANCELED";
pe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
pe.ERR_INVALID_URL = "ERR_INVALID_URL";
const DA = null;
function Gd(t) {
    return F.isPlainObject(t) || F.isArray(t)
}
function kx(t) {
    return F.endsWith(t, "[]") ? t.slice(0, -2) : t
}
function Zy(t, e, r) {
    return t ? t.concat(e).map(function(a, u) {
        return a = kx(a),
        !r && u ? "[" + a + "]" : a
    }).join(r ? "." : "") : e
}
function MA(t) {
    return F.isArray(t) && !t.some(Gd)
}
const IA = F.toFlatObject(F, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});
function zl(t, e, r) {
    if (!F.isObject(t))
        throw new TypeError("target must be an object");
    e = e || new FormData,
    r = F.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(k, x) {
        return !F.isUndefined(x[k])
    });
    const i = r.metaTokens
      , a = r.visitor || g
      , u = r.dots
      , c = r.indexes
      , h = (r.Blob || typeof Blob < "u" && Blob) && F.isSpecCompliantForm(e);
    if (!F.isFunction(a))
        throw new TypeError("visitor must be a function");
    function m(b) {
        if (b === null)
            return "";
        if (F.isDate(b))
            return b.toISOString();
        if (F.isBoolean(b))
            return b.toString();
        if (!h && F.isBlob(b))
            throw new pe("Blob is not supported. Use a Buffer instead.");
        return F.isArrayBuffer(b) || F.isTypedArray(b) ? h && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b
    }
    function g(b, k, x) {
        let R = b;
        if (b && !x && typeof b == "object") {
            if (F.endsWith(k, "{}"))
                k = i ? k : k.slice(0, -2),
                b = JSON.stringify(b);
            else if (F.isArray(b) && MA(b) || (F.isFileList(b) || F.endsWith(k, "[]")) && (R = F.toArray(b)))
                return k = kx(k),
                R.forEach(function(L, j) {
                    !(F.isUndefined(L) || L === null) && e.append(c === !0 ? Zy([k], j, u) : c === null ? k : k + "[]", m(L))
                }),
                !1
        }
        return Gd(b) ? !0 : (e.append(Zy(x, k, u), m(b)),
        !1)
    }
    const y = []
      , w = Object.assign(IA, {
        defaultVisitor: g,
        convertValue: m,
        isVisitable: Gd
    });
    function E(b, k) {
        if (!F.isUndefined(b)) {
            if (y.indexOf(b) !== -1)
                throw Error("Circular reference detected in " + k.join("."));
            y.push(b),
            F.forEach(b, function(R, V) {
                (!(F.isUndefined(R) || R === null) && a.call(e, R, F.isString(V) ? V.trim() : V, k, w)) === !0 && E(R, k ? k.concat(V) : [V])
            }),
            y.pop()
        }
    }
    if (!F.isObject(t))
        throw new TypeError("data must be an object");
    return E(t),
    e
}
function ev(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(i) {
        return e[i]
    })
}
function Gf(t, e) {
    this._pairs = [],
    t && zl(t, this, e)
}
const Ex = Gf.prototype;
Ex.append = function(e, r) {
    this._pairs.push([e, r])
}
;
Ex.toString = function(e) {
    const r = e ? function(i) {
        return e.call(this, i, ev)
    }
    : ev;
    return this._pairs.map(function(a) {
        return r(a[0]) + "=" + r(a[1])
    }, "").join("&")
}
;
function FA(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function Tx(t, e, r) {
    if (!e)
        return t;
    const i = r && r.encode || FA
      , a = F.isFunction(r) ? {
        serialize: r
    } : r
      , u = a && a.serialize;
    let c;
    if (u ? c = u(e, a) : c = F.isURLSearchParams(e) ? e.toString() : new Gf(e,a).toString(i),
    c) {
        const f = t.indexOf("#");
        f !== -1 && (t = t.slice(0, f)),
        t += (t.indexOf("?") === -1 ? "?" : "&") + c
    }
    return t
}
class tv {
    constructor() {
        this.handlers = []
    }
    use(e, r, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: r,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        F.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const Yf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0
}
  , VA = typeof URLSearchParams < "u" ? URLSearchParams : Gf
  , BA = typeof FormData < "u" ? FormData : null
  , UA = typeof Blob < "u" ? Blob : null
  , zA = {
    isBrowser: !0,
    classes: {
        URLSearchParams: VA,
        FormData: BA,
        Blob: UA
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Xf = typeof window < "u" && typeof document < "u"
  , Yd = typeof navigator == "object" && navigator || void 0
  , $A = Xf && (!Yd || ["ReactNative", "NativeScript", "NS"].indexOf(Yd.product) < 0)
  , qA = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , HA = Xf && window.location.href || "http://localhost"
  , WA = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Xf,
    hasStandardBrowserEnv: $A,
    hasStandardBrowserWebWorkerEnv: qA,
    navigator: Yd,
    origin: HA
}, Symbol.toStringTag, {
    value: "Module"
}))
  , xt = {
    ...WA,
    ...zA
};
function KA(t, e) {
    return zl(t, new xt.classes.URLSearchParams, {
        visitor: function(r, i, a, u) {
            return xt.isNode && F.isBuffer(r) ? (this.append(i, r.toString("base64")),
            !1) : u.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}
function QA(t) {
    return F.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}
function GA(t) {
    const e = {}
      , r = Object.keys(t);
    let i;
    const a = r.length;
    let u;
    for (i = 0; i < a; i++)
        u = r[i],
        e[u] = t[u];
    return e
}
function Cx(t) {
    function e(r, i, a, u) {
        let c = r[u++];
        if (c === "__proto__")
            return !0;
        const f = Number.isFinite(+c)
          , h = u >= r.length;
        return c = !c && F.isArray(a) ? a.length : c,
        h ? (F.hasOwnProp(a, c) ? a[c] = [a[c], i] : a[c] = i,
        !f) : ((!a[c] || !F.isObject(a[c])) && (a[c] = []),
        e(r, i, a[c], u) && F.isArray(a[c]) && (a[c] = GA(a[c])),
        !f)
    }
    if (F.isFormData(t) && F.isFunction(t.entries)) {
        const r = {};
        return F.forEachEntry(t, (i, a) => {
            e(QA(i), a, r, 0)
        }
        ),
        r
    }
    return null
}
function YA(t, e, r) {
    if (F.isString(t))
        try {
            return (e || JSON.parse)(t),
            F.trim(t)
        } catch (i) {
            if (i.name !== "SyntaxError")
                throw i
        }
    return (r || JSON.stringify)(t)
}
const Io = {
    transitional: Yf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, r) {
        const i = r.getContentType() || ""
          , a = i.indexOf("application/json") > -1
          , u = F.isObject(e);
        if (u && F.isHTMLForm(e) && (e = new FormData(e)),
        F.isFormData(e))
            return a ? JSON.stringify(Cx(e)) : e;
        if (F.isArrayBuffer(e) || F.isBuffer(e) || F.isStream(e) || F.isFile(e) || F.isBlob(e) || F.isReadableStream(e))
            return e;
        if (F.isArrayBufferView(e))
            return e.buffer;
        if (F.isURLSearchParams(e))
            return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let f;
        if (u) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1)
                return KA(e, this.formSerializer).toString();
            if ((f = F.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return zl(f ? {
                    "files[]": e
                } : e, h && new h, this.formSerializer)
            }
        }
        return u || a ? (r.setContentType("application/json", !1),
        YA(e)) : e
    }
    ],
    transformResponse: [function(e) {
        const r = this.transitional || Io.transitional
          , i = r && r.forcedJSONParsing
          , a = this.responseType === "json";
        if (F.isResponse(e) || F.isReadableStream(e))
            return e;
        if (e && F.isString(e) && (i && !this.responseType || a)) {
            const c = !(r && r.silentJSONParsing) && a;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (f) {
                if (c)
                    throw f.name === "SyntaxError" ? pe.from(f, pe.ERR_BAD_RESPONSE, this, null, this.response) : f
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: xt.classes.FormData,
        Blob: xt.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    Io.headers[t] = {}
}
);
const XA = F.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , JA = t => {
    const e = {};
    let r, i, a;
    return t && t.split(`
`).forEach(function(c) {
        a = c.indexOf(":"),
        r = c.substring(0, a).trim().toLowerCase(),
        i = c.substring(a + 1).trim(),
        !(!r || e[r] && XA[r]) && (r === "set-cookie" ? e[r] ? e[r].push(i) : e[r] = [i] : e[r] = e[r] ? e[r] + ", " + i : i)
    }),
    e
}
  , nv = Symbol("internals");
function Xi(t) {
    return t && String(t).trim().toLowerCase()
}
function fl(t) {
    return t === !1 || t == null ? t : F.isArray(t) ? t.map(fl) : String(t)
}
function ZA(t) {
    const e = Object.create(null)
      , r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = r.exec(t); )
        e[i[1]] = i[2];
    return e
}
const e2 = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function od(t, e, r, i, a) {
    if (F.isFunction(i))
        return i.call(this, e, r);
    if (a && (e = r),
    !!F.isString(e)) {
        if (F.isString(i))
            return e.indexOf(i) !== -1;
        if (F.isRegExp(i))
            return i.test(e)
    }
}
function t2(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, i) => r.toUpperCase() + i)
}
function n2(t, e) {
    const r = F.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + r, {
            value: function(a, u, c) {
                return this[i].call(this, e, a, u, c)
            },
            configurable: !0
        })
    }
    )
}
let Lt = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, r, i) {
        const a = this;
        function u(f, h, m) {
            const g = Xi(h);
            if (!g)
                throw new Error("header name must be a non-empty string");
            const y = F.findKey(a, g);
            (!y || a[y] === void 0 || m === !0 || m === void 0 && a[y] !== !1) && (a[y || h] = fl(f))
        }
        const c = (f, h) => F.forEach(f, (m, g) => u(m, g, h));
        if (F.isPlainObject(e) || e instanceof this.constructor)
            c(e, r);
        else if (F.isString(e) && (e = e.trim()) && !e2(e))
            c(JA(e), r);
        else if (F.isObject(e) && F.isIterable(e)) {
            let f = {}, h, m;
            for (const g of e) {
                if (!F.isArray(g))
                    throw TypeError("Object iterator must return a key-value pair");
                f[m = g[0]] = (h = f[m]) ? F.isArray(h) ? [...h, g[1]] : [h, g[1]] : g[1]
            }
            c(f, r)
        } else
            e != null && u(r, e, i);
        return this
    }
    get(e, r) {
        if (e = Xi(e),
        e) {
            const i = F.findKey(this, e);
            if (i) {
                const a = this[i];
                if (!r)
                    return a;
                if (r === !0)
                    return ZA(a);
                if (F.isFunction(r))
                    return r.call(this, a, i);
                if (F.isRegExp(r))
                    return r.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, r) {
        if (e = Xi(e),
        e) {
            const i = F.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!r || od(this, this[i], i, r)))
        }
        return !1
    }
    delete(e, r) {
        const i = this;
        let a = !1;
        function u(c) {
            if (c = Xi(c),
            c) {
                const f = F.findKey(i, c);
                f && (!r || od(i, i[f], f, r)) && (delete i[f],
                a = !0)
            }
        }
        return F.isArray(e) ? e.forEach(u) : u(e),
        a
    }
    clear(e) {
        const r = Object.keys(this);
        let i = r.length
          , a = !1;
        for (; i--; ) {
            const u = r[i];
            (!e || od(this, this[u], u, e, !0)) && (delete this[u],
            a = !0)
        }
        return a
    }
    normalize(e) {
        const r = this
          , i = {};
        return F.forEach(this, (a, u) => {
            const c = F.findKey(i, u);
            if (c) {
                r[c] = fl(a),
                delete r[u];
                return
            }
            const f = e ? t2(u) : String(u).trim();
            f !== u && delete r[u],
            r[f] = fl(a),
            i[f] = !0
        }
        ),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const r = Object.create(null);
        return F.forEach(this, (i, a) => {
            i != null && i !== !1 && (r[a] = e && F.isArray(i) ? i.join(", ") : i)
        }
        ),
        r
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([e,r]) => e + ": " + r).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...r) {
        const i = new this(e);
        return r.forEach(a => i.set(a)),
        i
    }
    static accessor(e) {
        const i = (this[nv] = this[nv] = {
            accessors: {}
        }).accessors
          , a = this.prototype;
        function u(c) {
            const f = Xi(c);
            i[f] || (n2(a, c),
            i[f] = !0)
        }
        return F.isArray(e) ? e.forEach(u) : u(e),
        this
    }
}
;
Lt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
F.reduceDescriptors(Lt.prototype, ({value: t}, e) => {
    let r = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[r] = i
        }
    }
}
);
F.freezeMethods(Lt);
function ad(t, e) {
    const r = this || Io
      , i = e || r
      , a = Lt.from(i.headers);
    let u = i.data;
    return F.forEach(t, function(f) {
        u = f.call(r, u, a.normalize(), e ? e.status : void 0)
    }),
    a.normalize(),
    u
}
function _x(t) {
    return !!(t && t.__CANCEL__)
}
let Fo = class extends pe {
    constructor(e, r, i) {
        super(e ?? "canceled", pe.ERR_CANCELED, r, i),
        this.name = "CanceledError",
        this.__CANCEL__ = !0
    }
}
;
function Px(t, e, r) {
    const i = r.config.validateStatus;
    !r.status || !i || i(r.status) ? t(r) : e(new pe("Request failed with status code " + r.status,[pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],r.config,r.request,r))
}
function r2(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}
function s2(t, e) {
    t = t || 10;
    const r = new Array(t)
      , i = new Array(t);
    let a = 0, u = 0, c;
    return e = e !== void 0 ? e : 1e3,
    function(h) {
        const m = Date.now()
          , g = i[u];
        c || (c = m),
        r[a] = h,
        i[a] = m;
        let y = u
          , w = 0;
        for (; y !== a; )
            w += r[y++],
            y = y % t;
        if (a = (a + 1) % t,
        a === u && (u = (u + 1) % t),
        m - c < e)
            return;
        const E = g && m - g;
        return E ? Math.round(w * 1e3 / E) : void 0
    }
}
function i2(t, e) {
    let r = 0, i = 1e3 / e, a, u;
    const c = (m, g=Date.now()) => {
        r = g,
        a = null,
        u && (clearTimeout(u),
        u = null),
        t(...m)
    }
    ;
    return [ (...m) => {
        const g = Date.now()
          , y = g - r;
        y >= i ? c(m, g) : (a = m,
        u || (u = setTimeout( () => {
            u = null,
            c(a)
        }
        , i - y)))
    }
    , () => a && c(a)]
}
const Rl = (t, e, r=3) => {
    let i = 0;
    const a = s2(50, 250);
    return i2(u => {
        const c = u.loaded
          , f = u.lengthComputable ? u.total : void 0
          , h = c - i
          , m = a(h)
          , g = c <= f;
        i = c;
        const y = {
            loaded: c,
            total: f,
            progress: f ? c / f : void 0,
            bytes: h,
            rate: m || void 0,
            estimated: m && f && g ? (f - c) / m : void 0,
            event: u,
            lengthComputable: f != null,
            [e ? "download" : "upload"]: !0
        };
        t(y)
    }
    , r)
}
  , rv = (t, e) => {
    const r = t != null;
    return [i => e[0]({
        lengthComputable: r,
        total: t,
        loaded: i
    }), e[1]]
}
  , sv = t => (...e) => F.asap( () => t(...e))
  , o2 = xt.hasStandardBrowserEnv ? ( (t, e) => r => (r = new URL(r,xt.origin),
t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(xt.origin), xt.navigator && /(msie|trident)/i.test(xt.navigator.userAgent)) : () => !0
  , a2 = xt.hasStandardBrowserEnv ? {
    write(t, e, r, i, a, u, c) {
        if (typeof document > "u")
            return;
        const f = [`${t}=${encodeURIComponent(e)}`];
        F.isNumber(r) && f.push(`expires=${new Date(r).toUTCString()}`),
        F.isString(i) && f.push(`path=${i}`),
        F.isString(a) && f.push(`domain=${a}`),
        u === !0 && f.push("secure"),
        F.isString(c) && f.push(`SameSite=${c}`),
        document.cookie = f.join("; ")
    },
    read(t) {
        if (typeof document > "u")
            return null;
        const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
        return e ? decodeURIComponent(e[1]) : null
    },
    remove(t) {
        this.write(t, "", Date.now() - 864e5, "/")
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function l2(t) {
    return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}
function u2(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}
function Rx(t, e, r) {
    let i = !l2(e);
    return t && (i || r == !1) ? u2(t, e) : e
}
const iv = t => t instanceof Lt ? {
    ...t
} : t;
function ls(t, e) {
    e = e || {};
    const r = {};
    function i(m, g, y, w) {
        return F.isPlainObject(m) && F.isPlainObject(g) ? F.merge.call({
            caseless: w
        }, m, g) : F.isPlainObject(g) ? F.merge({}, g) : F.isArray(g) ? g.slice() : g
    }
    function a(m, g, y, w) {
        if (F.isUndefined(g)) {
            if (!F.isUndefined(m))
                return i(void 0, m, y, w)
        } else
            return i(m, g, y, w)
    }
    function u(m, g) {
        if (!F.isUndefined(g))
            return i(void 0, g)
    }
    function c(m, g) {
        if (F.isUndefined(g)) {
            if (!F.isUndefined(m))
                return i(void 0, m)
        } else
            return i(void 0, g)
    }
    function f(m, g, y) {
        if (y in e)
            return i(m, g);
        if (y in t)
            return i(void 0, m)
    }
    const h = {
        url: u,
        method: u,
        data: u,
        baseURL: c,
        transformRequest: c,
        transformResponse: c,
        paramsSerializer: c,
        timeout: c,
        timeoutMessage: c,
        withCredentials: c,
        withXSRFToken: c,
        adapter: c,
        responseType: c,
        xsrfCookieName: c,
        xsrfHeaderName: c,
        onUploadProgress: c,
        onDownloadProgress: c,
        decompress: c,
        maxContentLength: c,
        maxBodyLength: c,
        beforeRedirect: c,
        transport: c,
        httpAgent: c,
        httpsAgent: c,
        cancelToken: c,
        socketPath: c,
        responseEncoding: c,
        validateStatus: f,
        headers: (m, g, y) => a(iv(m), iv(g), y, !0)
    };
    return F.forEach(Object.keys({
        ...t,
        ...e
    }), function(g) {
        if (g === "__proto__" || g === "constructor" || g === "prototype")
            return;
        const y = F.hasOwnProp(h, g) ? h[g] : a
          , w = y(t[g], e[g], g);
        F.isUndefined(w) && y !== f || (r[g] = w)
    }),
    r
}
const Ax = t => {
    const e = ls({}, t);
    let {data: r, withXSRFToken: i, xsrfHeaderName: a, xsrfCookieName: u, headers: c, auth: f} = e;
    if (e.headers = c = Lt.from(c),
    e.url = Tx(Rx(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer),
    f && c.set("Authorization", "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))),
    F.isFormData(r)) {
        if (xt.hasStandardBrowserEnv || xt.hasStandardBrowserWebWorkerEnv)
            c.setContentType(void 0);
        else if (F.isFunction(r.getHeaders)) {
            const h = r.getHeaders()
              , m = ["content-type", "content-length"];
            Object.entries(h).forEach( ([g,y]) => {
                m.includes(g.toLowerCase()) && c.set(g, y)
            }
            )
        }
    }
    if (xt.hasStandardBrowserEnv && (i && F.isFunction(i) && (i = i(e)),
    i || i !== !1 && o2(e.url))) {
        const h = a && u && a2.read(u);
        h && c.set(a, h)
    }
    return e
}
  , c2 = typeof XMLHttpRequest < "u"
  , d2 = c2 && function(t) {
    return new Promise(function(r, i) {
        const a = Ax(t);
        let u = a.data;
        const c = Lt.from(a.headers).normalize();
        let {responseType: f, onUploadProgress: h, onDownloadProgress: m} = a, g, y, w, E, b;
        function k() {
            E && E(),
            b && b(),
            a.cancelToken && a.cancelToken.unsubscribe(g),
            a.signal && a.signal.removeEventListener("abort", g)
        }
        let x = new XMLHttpRequest;
        x.open(a.method.toUpperCase(), a.url, !0),
        x.timeout = a.timeout;
        function R() {
            if (!x)
                return;
            const L = Lt.from("getAllResponseHeaders"in x && x.getAllResponseHeaders())
              , B = {
                data: !f || f === "text" || f === "json" ? x.responseText : x.response,
                status: x.status,
                statusText: x.statusText,
                headers: L,
                config: t,
                request: x
            };
            Px(function(G) {
                r(G),
                k()
            }, function(G) {
                i(G),
                k()
            }, B),
            x = null
        }
        "onloadend"in x ? x.onloadend = R : x.onreadystatechange = function() {
            !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(R)
        }
        ,
        x.onabort = function() {
            x && (i(new pe("Request aborted",pe.ECONNABORTED,t,x)),
            x = null)
        }
        ,
        x.onerror = function(j) {
            const B = j && j.message ? j.message : "Network Error"
              , K = new pe(B,pe.ERR_NETWORK,t,x);
            K.event = j || null,
            i(K),
            x = null
        }
        ,
        x.ontimeout = function() {
            let j = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
            const B = a.transitional || Yf;
            a.timeoutErrorMessage && (j = a.timeoutErrorMessage),
            i(new pe(j,B.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,t,x)),
            x = null
        }
        ,
        u === void 0 && c.setContentType(null),
        "setRequestHeader"in x && F.forEach(c.toJSON(), function(j, B) {
            x.setRequestHeader(B, j)
        }),
        F.isUndefined(a.withCredentials) || (x.withCredentials = !!a.withCredentials),
        f && f !== "json" && (x.responseType = a.responseType),
        m && ([w,b] = Rl(m, !0),
        x.addEventListener("progress", w)),
        h && x.upload && ([y,E] = Rl(h),
        x.upload.addEventListener("progress", y),
        x.upload.addEventListener("loadend", E)),
        (a.cancelToken || a.signal) && (g = L => {
            x && (i(!L || L.type ? new Fo(null,t,x) : L),
            x.abort(),
            x = null)
        }
        ,
        a.cancelToken && a.cancelToken.subscribe(g),
        a.signal && (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
        const V = r2(a.url);
        if (V && xt.protocols.indexOf(V) === -1) {
            i(new pe("Unsupported protocol " + V + ":",pe.ERR_BAD_REQUEST,t));
            return
        }
        x.send(u || null)
    }
    )
}
  , f2 = (t, e) => {
    const {length: r} = t = t ? t.filter(Boolean) : [];
    if (e || r) {
        let i = new AbortController, a;
        const u = function(m) {
            if (!a) {
                a = !0,
                f();
                const g = m instanceof Error ? m : this.reason;
                i.abort(g instanceof pe ? g : new Fo(g instanceof Error ? g.message : g))
            }
        };
        let c = e && setTimeout( () => {
            c = null,
            u(new pe(`timeout of ${e}ms exceeded`,pe.ETIMEDOUT))
        }
        , e);
        const f = () => {
            t && (c && clearTimeout(c),
            c = null,
            t.forEach(m => {
                m.unsubscribe ? m.unsubscribe(u) : m.removeEventListener("abort", u)
            }
            ),
            t = null)
        }
        ;
        t.forEach(m => m.addEventListener("abort", u));
        const {signal: h} = i;
        return h.unsubscribe = () => F.asap(f),
        h
    }
}
  , h2 = function*(t, e) {
    let r = t.byteLength;
    if (r < e) {
        yield t;
        return
    }
    let i = 0, a;
    for (; i < r; )
        a = i + e,
        yield t.slice(i, a),
        i = a
}
  , p2 = async function*(t, e) {
    for await(const r of m2(t))
        yield*h2(r, e)
}
  , m2 = async function*(t) {
    if (t[Symbol.asyncIterator]) {
        yield*t;
        return
    }
    const e = t.getReader();
    try {
        for (; ; ) {
            const {done: r, value: i} = await e.read();
            if (r)
                break;
            yield i
        }
    } finally {
        await e.cancel()
    }
}
  , ov = (t, e, r, i) => {
    const a = p2(t, e);
    let u = 0, c, f = h => {
        c || (c = !0,
        i && i(h))
    }
    ;
    return new ReadableStream({
        async pull(h) {
            try {
                const {done: m, value: g} = await a.next();
                if (m) {
                    f(),
                    h.close();
                    return
                }
                let y = g.byteLength;
                if (r) {
                    let w = u += y;
                    r(w)
                }
                h.enqueue(new Uint8Array(g))
            } catch (m) {
                throw f(m),
                m
            }
        },
        cancel(h) {
            return f(h),
            a.return()
        }
    },{
        highWaterMark: 2
    })
}
  , av = 64 * 1024
  , {isFunction: nl} = F
  , g2 = ( ({Request: t, Response: e}) => ({
    Request: t,
    Response: e
}))(F.global)
  , {ReadableStream: lv, TextEncoder: uv} = F.global
  , cv = (t, ...e) => {
    try {
        return !!t(...e)
    } catch {
        return !1
    }
}
  , y2 = t => {
    t = F.merge.call({
        skipUndefined: !0
    }, g2, t);
    const {fetch: e, Request: r, Response: i} = t
      , a = e ? nl(e) : typeof fetch == "function"
      , u = nl(r)
      , c = nl(i);
    if (!a)
        return !1;
    const f = a && nl(lv)
      , h = a && (typeof uv == "function" ? (b => k => b.encode(k))(new uv) : async b => new Uint8Array(await new r(b).arrayBuffer()))
      , m = u && f && cv( () => {
        let b = !1;
        const k = new r(xt.origin,{
            body: new lv,
            method: "POST",
            get duplex() {
                return b = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return b && !k
    }
    )
      , g = c && f && cv( () => F.isReadableStream(new i("").body))
      , y = {
        stream: g && (b => b.body)
    };
    a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(b => {
        !y[b] && (y[b] = (k, x) => {
            let R = k && k[b];
            if (R)
                return R.call(k);
            throw new pe(`Response type '${b}' is not supported`,pe.ERR_NOT_SUPPORT,x)
        }
        )
    }
    );
    const w = async b => {
        if (b == null)
            return 0;
        if (F.isBlob(b))
            return b.size;
        if (F.isSpecCompliantForm(b))
            return (await new r(xt.origin,{
                method: "POST",
                body: b
            }).arrayBuffer()).byteLength;
        if (F.isArrayBufferView(b) || F.isArrayBuffer(b))
            return b.byteLength;
        if (F.isURLSearchParams(b) && (b = b + ""),
        F.isString(b))
            return (await h(b)).byteLength
    }
      , E = async (b, k) => {
        const x = F.toFiniteNumber(b.getContentLength());
        return x ?? w(k)
    }
    ;
    return async b => {
        let {url: k, method: x, data: R, signal: V, cancelToken: L, timeout: j, onDownloadProgress: B, onUploadProgress: K, responseType: G, headers: M, withCredentials: Z="same-origin", fetchOptions: fe} = Ax(b)
          , Re = e || fetch;
        G = G ? (G + "").toLowerCase() : "text";
        let Le = f2([V, L && L.toAbortSignal()], j)
          , De = null;
        const Ae = Le && Le.unsubscribe && ( () => {
            Le.unsubscribe()
        }
        );
        let Ie;
        try {
            if (K && m && x !== "get" && x !== "head" && (Ie = await E(M, R)) !== 0) {
                let A = new r(k,{
                    method: "POST",
                    body: R,
                    duplex: "half"
                }), z;
                if (F.isFormData(R) && (z = A.headers.get("content-type")) && M.setContentType(z),
                A.body) {
                    const [ge,ye] = rv(Ie, Rl(sv(K)));
                    R = ov(A.body, av, ge, ye)
                }
            }
            F.isString(Z) || (Z = Z ? "include" : "omit");
            const we = u && "credentials"in r.prototype
              , de = {
                ...fe,
                signal: Le,
                method: x.toUpperCase(),
                headers: M.normalize().toJSON(),
                body: R,
                duplex: "half",
                credentials: we ? Z : void 0
            };
            De = u && new r(k,de);
            let W = await (u ? Re(De, fe) : Re(k, de));
            const se = g && (G === "stream" || G === "response");
            if (g && (B || se && Ae)) {
                const A = {};
                ["status", "statusText", "headers"].forEach(le => {
                    A[le] = W[le]
                }
                );
                const z = F.toFiniteNumber(W.headers.get("content-length"))
                  , [ge,ye] = B && rv(z, Rl(sv(B), !0)) || [];
                W = new i(ov(W.body, av, ge, () => {
                    ye && ye(),
                    Ae && Ae()
                }
                ),A)
            }
            G = G || "text";
            let U = await y[F.findKey(y, G) || "text"](W, b);
            return !se && Ae && Ae(),
            await new Promise( (A, z) => {
                Px(A, z, {
                    data: U,
                    headers: Lt.from(W.headers),
                    status: W.status,
                    statusText: W.statusText,
                    config: b,
                    request: De
                })
            }
            )
        } catch (we) {
            throw Ae && Ae(),
            we && we.name === "TypeError" && /Load failed|fetch/i.test(we.message) ? Object.assign(new pe("Network Error",pe.ERR_NETWORK,b,De,we && we.response), {
                cause: we.cause || we
            }) : pe.from(we, we && we.code, b, De, we && we.response)
        }
    }
}
  , v2 = new Map
  , Nx = t => {
    let e = t && t.env || {};
    const {fetch: r, Request: i, Response: a} = e
      , u = [i, a, r];
    let c = u.length, f = c, h, m, g = v2;
    for (; f--; )
        h = u[f],
        m = g.get(h),
        m === void 0 && g.set(h, m = f ? new Map : y2(e)),
        g = m;
    return m
}
;
Nx();
const Jf = {
    http: DA,
    xhr: d2,
    fetch: {
        get: Nx
    }
};
F.forEach(Jf, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
}
);
const dv = t => `- ${t}`
  , w2 = t => F.isFunction(t) || t === null || t === !1;
function x2(t, e) {
    t = F.isArray(t) ? t : [t];
    const {length: r} = t;
    let i, a;
    const u = {};
    for (let c = 0; c < r; c++) {
        i = t[c];
        let f;
        if (a = i,
        !w2(i) && (a = Jf[(f = String(i)).toLowerCase()],
        a === void 0))
            throw new pe(`Unknown adapter '${f}'`);
        if (a && (F.isFunction(a) || (a = a.get(e))))
            break;
        u[f || "#" + c] = a
    }
    if (!a) {
        const c = Object.entries(u).map( ([h,m]) => `adapter ${h} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build"));
        let f = r ? c.length > 1 ? `since :
` + c.map(dv).join(`
`) : " " + dv(c[0]) : "as no adapter specified";
        throw new pe("There is no suitable adapter to dispatch the request " + f,"ERR_NOT_SUPPORT")
    }
    return a
}
const Ox = {
    getAdapter: x2,
    adapters: Jf
};
function ld(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
        throw new Fo(null,t)
}
function fv(t) {
    return ld(t),
    t.headers = Lt.from(t.headers),
    t.data = ad.call(t, t.transformRequest),
    ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ox.getAdapter(t.adapter || Io.adapter, t)(t).then(function(i) {
        return ld(t),
        i.data = ad.call(t, t.transformResponse, i),
        i.headers = Lt.from(i.headers),
        i
    }, function(i) {
        return _x(i) || (ld(t),
        i && i.response && (i.response.data = ad.call(t, t.transformResponse, i.response),
        i.response.headers = Lt.from(i.response.headers))),
        Promise.reject(i)
    })
}
const jx = "1.13.5"
  , $l = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (t, e) => {
    $l[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
}
);
const hv = {};
$l.transitional = function(e, r, i) {
    function a(u, c) {
        return "[Axios v" + jx + "] Transitional option '" + u + "'" + c + (i ? ". " + i : "")
    }
    return (u, c, f) => {
        if (e === !1)
            throw new pe(a(c, " has been removed" + (r ? " in " + r : "")),pe.ERR_DEPRECATED);
        return r && !hv[c] && (hv[c] = !0,
        console.warn(a(c, " has been deprecated since v" + r + " and will be removed in the near future"))),
        e ? e(u, c, f) : !0
    }
}
;
$l.spelling = function(e) {
    return (r, i) => (console.warn(`${i} is likely a misspelling of ${e}`),
    !0)
}
;
function S2(t, e, r) {
    if (typeof t != "object")
        throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let a = i.length;
    for (; a-- > 0; ) {
        const u = i[a]
          , c = e[u];
        if (c) {
            const f = t[u]
              , h = f === void 0 || c(f, u, t);
            if (h !== !0)
                throw new pe("option " + u + " must be " + h,pe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0)
            throw new pe("Unknown option " + u,pe.ERR_BAD_OPTION)
    }
}
const hl = {
    assertOptions: S2,
    validators: $l
}
  , Gt = hl.validators;
let os = class {
    constructor(e) {
        this.defaults = e || {},
        this.interceptors = {
            request: new tv,
            response: new tv
        }
    }
    async request(e, r) {
        try {
            return await this._request(e, r)
        } catch (i) {
            if (i instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const u = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? u && !String(i.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + u) : i.stack = u
                } catch {}
            }
            throw i
        }
    }
    _request(e, r) {
        typeof e == "string" ? (r = r || {},
        r.url = e) : r = e || {},
        r = ls(this.defaults, r);
        const {transitional: i, paramsSerializer: a, headers: u} = r;
        i !== void 0 && hl.assertOptions(i, {
            silentJSONParsing: Gt.transitional(Gt.boolean),
            forcedJSONParsing: Gt.transitional(Gt.boolean),
            clarifyTimeoutError: Gt.transitional(Gt.boolean),
            legacyInterceptorReqResOrdering: Gt.transitional(Gt.boolean)
        }, !1),
        a != null && (F.isFunction(a) ? r.paramsSerializer = {
            serialize: a
        } : hl.assertOptions(a, {
            encode: Gt.function,
            serialize: Gt.function
        }, !0)),
        r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0),
        hl.assertOptions(r, {
            baseUrl: Gt.spelling("baseURL"),
            withXsrfToken: Gt.spelling("withXSRFToken")
        }, !0),
        r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let c = u && F.merge(u.common, u[r.method]);
        u && F.forEach(["delete", "get", "head", "post", "put", "patch", "common"], b => {
            delete u[b]
        }
        ),
        r.headers = Lt.concat(c, u);
        const f = [];
        let h = !0;
        this.interceptors.request.forEach(function(k) {
            if (typeof k.runWhen == "function" && k.runWhen(r) === !1)
                return;
            h = h && k.synchronous;
            const x = r.transitional || Yf;
            x && x.legacyInterceptorReqResOrdering ? f.unshift(k.fulfilled, k.rejected) : f.push(k.fulfilled, k.rejected)
        });
        const m = [];
        this.interceptors.response.forEach(function(k) {
            m.push(k.fulfilled, k.rejected)
        });
        let g, y = 0, w;
        if (!h) {
            const b = [fv.bind(this), void 0];
            for (b.unshift(...f),
            b.push(...m),
            w = b.length,
            g = Promise.resolve(r); y < w; )
                g = g.then(b[y++], b[y++]);
            return g
        }
        w = f.length;
        let E = r;
        for (; y < w; ) {
            const b = f[y++]
              , k = f[y++];
            try {
                E = b(E)
            } catch (x) {
                k.call(this, x);
                break
            }
        }
        try {
            g = fv.call(this, E)
        } catch (b) {
            return Promise.reject(b)
        }
        for (y = 0,
        w = m.length; y < w; )
            g = g.then(m[y++], m[y++]);
        return g
    }
    getUri(e) {
        e = ls(this.defaults, e);
        const r = Rx(e.baseURL, e.url, e.allowAbsoluteUrls);
        return Tx(r, e.params, e.paramsSerializer)
    }
}
;
F.forEach(["delete", "get", "head", "options"], function(e) {
    os.prototype[e] = function(r, i) {
        return this.request(ls(i || {}, {
            method: e,
            url: r,
            data: (i || {}).data
        }))
    }
});
F.forEach(["post", "put", "patch"], function(e) {
    function r(i) {
        return function(u, c, f) {
            return this.request(ls(f || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: u,
                data: c
            }))
        }
    }
    os.prototype[e] = r(),
    os.prototype[e + "Form"] = r(!0)
});
let b2 = class Lx {
    constructor(e) {
        if (typeof e != "function")
            throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(u) {
            r = u
        }
        );
        const i = this;
        this.promise.then(a => {
            if (!i._listeners)
                return;
            let u = i._listeners.length;
            for (; u-- > 0; )
                i._listeners[u](a);
            i._listeners = null
        }
        ),
        this.promise.then = a => {
            let u;
            const c = new Promise(f => {
                i.subscribe(f),
                u = f
            }
            ).then(a);
            return c.cancel = function() {
                i.unsubscribe(u)
            }
            ,
            c
        }
        ,
        e(function(u, c, f) {
            i.reason || (i.reason = new Fo(u,c,f),
            r(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const r = this._listeners.indexOf(e);
        r !== -1 && this._listeners.splice(r, 1)
    }
    toAbortSignal() {
        const e = new AbortController
          , r = i => {
            e.abort(i)
        }
        ;
        return this.subscribe(r),
        e.signal.unsubscribe = () => this.unsubscribe(r),
        e.signal
    }
    static source() {
        let e;
        return {
            token: new Lx(function(a) {
                e = a
            }
            ),
            cancel: e
        }
    }
}
;
function k2(t) {
    return function(r) {
        return t.apply(null, r)
    }
}
function E2(t) {
    return F.isObject(t) && t.isAxiosError === !0
}
const Xd = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(Xd).forEach( ([t,e]) => {
    Xd[e] = t
}
);
function Dx(t) {
    const e = new os(t)
      , r = px(os.prototype.request, e);
    return F.extend(r, os.prototype, e, {
        allOwnKeys: !0
    }),
    F.extend(r, e, null, {
        allOwnKeys: !0
    }),
    r.create = function(a) {
        return Dx(ls(t, a))
    }
    ,
    r
}
const Je = Dx(Io);
Je.Axios = os;
Je.CanceledError = Fo;
Je.CancelToken = b2;
Je.isCancel = _x;
Je.VERSION = jx;
Je.toFormData = zl;
Je.AxiosError = pe;
Je.Cancel = Je.CanceledError;
Je.all = function(e) {
    return Promise.all(e)
}
;
Je.spread = k2;
Je.isAxiosError = E2;
Je.mergeConfig = ls;
Je.AxiosHeaders = Lt;
Je.formToJSON = t => Cx(F.isHTMLForm(t) ? new FormData(t) : t);
Je.getAdapter = Ox.getAdapter;
Je.HttpStatusCode = Xd;
Je.default = Je;
const {Axios: gO, AxiosError: yO, CanceledError: vO, isCancel: wO, CancelToken: xO, VERSION: SO, all: bO, Cancel: kO, isAxiosError: EO, spread: TO, toFormData: CO, AxiosHeaders: _O, HttpStatusCode: PO, formToJSON: RO, getAdapter: AO, mergeConfig: NO} = Je
  , T2 = typeof window > "u"
  , pv = !T2 && window.self !== window.top
  , ud = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  , ct = [];
for (let t = 0; t < 256; ++t)
    ct.push((t + 256).toString(16).slice(1));
function C2(t, e=0) {
    return (ct[t[e + 0]] + ct[t[e + 1]] + ct[t[e + 2]] + ct[t[e + 3]] + "-" + ct[t[e + 4]] + ct[t[e + 5]] + "-" + ct[t[e + 6]] + ct[t[e + 7]] + "-" + ct[t[e + 8]] + ct[t[e + 9]] + "-" + ct[t[e + 10]] + ct[t[e + 11]] + ct[t[e + 12]] + ct[t[e + 13]] + ct[t[e + 14]] + ct[t[e + 15]]).toLowerCase()
}
let cd;
const _2 = new Uint8Array(16);
function P2() {
    if (!cd) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        cd = crypto.getRandomValues.bind(crypto)
    }
    return cd(_2)
}
const R2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , mv = {
    randomUUID: R2
};
function A2(t, e, r) {
    var a;
    t = t || {};
    const i = t.random ?? ((a = t.rng) == null ? void 0 : a.call(t)) ?? P2();
    if (i.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    C2(i)
}
function N2(t, e, r) {
    return mv.randomUUID && !t ? mv.randomUUID() : A2(t)
}
class O2 extends Error {
    constructor(e, r, i, a, u) {
        super(e),
        this.name = "Base44Error",
        this.status = r,
        this.code = i,
        this.data = a,
        this.originalError = u
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}
function so({baseURL: t, headers: e={}, token: r, interceptResponses: i=!0, onError: a}) {
    const u = Je.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return r && (u.defaults.headers.common.Authorization = `Bearer ${r}`),
    u.interceptors.request.use(c => {
        typeof window < "u" && c.headers.set("X-Origin-URL", window.location.href);
        const f = N2();
        if (c.requestId = f,
        pv)
            try {
                window.parent.postMessage({
                    type: "api-request-start",
                    requestId: f,
                    data: {
                        url: t + c.url,
                        method: c.method,
                        body: c.data instanceof FormData ? "[FormData object]" : c.data
                    }
                }, "*")
            } catch {}
        return c
    }
    ),
    i && u.interceptors.response.use(c => {
        var f;
        const h = (f = c.config) === null || f === void 0 ? void 0 : f.requestId;
        try {
            pv && h && window.parent.postMessage({
                type: "api-request-end",
                requestId: h,
                data: {
                    statusCode: c.status,
                    response: c.data
                }
            }, "*")
        } catch {}
        return c.data
    }
    , c => {
        var f, h, m, g, y, w, E, b;
        const k = ((h = (f = c.response) === null || f === void 0 ? void 0 : f.data) === null || h === void 0 ? void 0 : h.message) || ((g = (m = c.response) === null || m === void 0 ? void 0 : m.data) === null || g === void 0 ? void 0 : g.detail) || c.message
          , x = new O2(k,(y = c.response) === null || y === void 0 ? void 0 : y.status,(E = (w = c.response) === null || w === void 0 ? void 0 : w.data) === null || E === void 0 ? void 0 : E.code,(b = c.response) === null || b === void 0 ? void 0 : b.data,c);
        return a == null || a(x),
        Promise.reject(x)
    }
    ),
    u
}
function gv(t) {
    const {axios: e, appId: r, getSocket: i} = t;
    return new Proxy({},{
        get(a, u) {
            if (!(typeof u != "string" || u === "then" || u.startsWith("_")))
                return L2(e, r, u, i)
        }
    })
}
function j2(t) {
    var e;
    try {
        const r = JSON.parse(t);
        return {
            type: r.type,
            data: r.data,
            id: r.id || ((e = r.data) === null || e === void 0 ? void 0 : e.id),
            timestamp: r.timestamp || new Date().toISOString()
        }
    } catch (r) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", r),
        null
    }
}
function L2(t, e, r, i) {
    const a = `/apps/${e}/entities/${r}`;
    return {
        async list(u, c, f, h) {
            const m = {};
            return u && (m.sort = u),
            c && (m.limit = c),
            f && (m.skip = f),
            h && (m.fields = Array.isArray(h) ? h.join(",") : h),
            t.get(a, {
                params: m
            })
        },
        async filter(u, c, f, h, m) {
            const g = {
                q: JSON.stringify(u)
            };
            return c && (g.sort = c),
            f && (g.limit = f),
            h && (g.skip = h),
            m && (g.fields = Array.isArray(m) ? m.join(",") : m),
            t.get(a, {
                params: g
            })
        },
        async get(u) {
            return t.get(`${a}/${u}`)
        },
        async create(u) {
            return t.post(a, u)
        },
        async update(u, c) {
            return t.put(`${a}/${u}`, c)
        },
        async delete(u) {
            return t.delete(`${a}/${u}`)
        },
        async deleteMany(u) {
            return t.delete(a, {
                data: u
            })
        },
        async bulkCreate(u) {
            return t.post(`${a}/bulk`, u)
        },
        async importEntities(u) {
            const c = new FormData;
            return c.append("file", u, u.name),
            t.post(`${a}/import`, c, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(u) {
            const c = `entities:${e}:${r}`;
            return i().subscribeToRoom(c, {
                update_model: m => {
                    const g = j2(m.data);
                    if (g)
                        try {
                            u(g)
                        } catch (y) {
                            console.error("[Base44 SDK] Subscription callback error:", y)
                        }
                }
            })
        }
    }
}
function D2(t, e) {
    return {
        async call(r, i, a) {
            if (!(r != null && r.trim()))
                throw new Error("Integration slug is required and cannot be empty");
            if (!(i != null && i.trim()))
                throw new Error("Operation ID is required and cannot be empty");
            const {pathParams: u, queryParams: c, ...f} = a ?? {}
              , h = {
                ...f,
                ...u && {
                    path_params: u
                },
                ...c && {
                    query_params: c
                }
            };
            return await t.post(`/apps/${e}/integrations/custom/${r}/${i}`, h)
        }
    }
}
function yv(t, e) {
    const r = D2(t, e);
    return new Proxy({},{
        get(i, a) {
            if (!(typeof a != "string" || a === "then" || a.startsWith("_")))
                return a === "custom" ? r : new Proxy({},{
                    get(u, c) {
                        if (!(typeof c != "string" || c === "then" || c.startsWith("_")))
                            return async f => {
                                if (typeof f == "string")
                                    throw new Error(`Integration ${c} must receive an object with named parameters, received: ${f}`);
                                let h, m;
                                return f instanceof FormData || f && Object.values(f).some(g => g instanceof File) ? (h = new FormData,
                                Object.keys(f).forEach(g => {
                                    f[g]instanceof File ? h.append(g, f[g], f[g].name) : typeof f[g] == "object" && f[g] !== null ? h.append(g, JSON.stringify(f[g])) : h.append(g, f[g])
                                }
                                ),
                                m = "multipart/form-data") : (h = f,
                                m = "application/json"),
                                a === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${c}`, h || f, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                }) : t.post(`/apps/${e}/integration-endpoints/installable/${a}/integration-endpoints/${c}`, h || f, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                })
                            }
                    }
                })
        }
    })
}
function M2(t, e, r, i) {
    return {
        async me() {
            return t.get(`/apps/${r}/entities/User/me`)
        },
        async updateMe(a) {
            return t.put(`/apps/${r}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            if (typeof window > "u")
                throw new Error("Login method can only be used in a browser environment");
            const u = a ? new URL(a,window.location.origin).toString() : window.location.href
              , c = `${i.appBaseUrl}/login?from_url=${encodeURIComponent(u)}`;
            window.location.href = c
        },
        loginWithProvider(a, u="/") {
            const c = new URL(u,window.location.origin).toString()
              , f = `app_id=${r}&from_url=${encodeURIComponent(c)}`;
            let h;
            a === "sso" ? h = `/apps/${r}/auth/sso/login` : h = `/apps/auth${a === "google" ? "" : `/${a}`}/login`;
            const m = `${i.appBaseUrl}/api${h}?${f}`;
            window.location.href = m
        },
        logout(a) {
            if (delete t.defaults.headers.common.Authorization,
            typeof window < "u") {
                if (window.localStorage)
                    try {
                        window.localStorage.removeItem("base44_access_token"),
                        window.localStorage.removeItem("token")
                    } catch (f) {
                        console.error("Failed to remove token from localStorage:", f)
                    }
                const u = a || window.location.href
                  , c = `${i.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(u)}`;
                window.location.href = c
            }
        },
        setToken(a, u=!0) {
            if (a && (t.defaults.headers.common.Authorization = `Bearer ${a}`,
            e.defaults.headers.common.Authorization = `Bearer ${a}`,
            u && typeof window < "u" && window.localStorage))
                try {
                    window.localStorage.setItem("base44_access_token", a),
                    window.localStorage.setItem("token", a)
                } catch (c) {
                    console.error("Failed to save token to localStorage:", c)
                }
        },
        async loginViaEmailPassword(a, u, c) {
            var f;
            try {
                const h = await t.post(`/apps/${r}/auth/login`, {
                    email: a,
                    password: u,
                    ...c && {
                        turnstile_token: c
                    }
                })
                  , {access_token: m, user: g} = h;
                return m && this.setToken(m),
                {
                    access_token: m,
                    user: g
                }
            } catch (h) {
                throw ((f = h.response) === null || f === void 0 ? void 0 : f.status) === 401 && await this.logout(),
                h
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(),
                !0
            } catch {
                return !1
            }
        },
        inviteUser(a, u) {
            return t.post(`/apps/${r}/users/invite-user`, {
                user_email: a,
                role: u
            })
        },
        register(a) {
            return t.post(`/apps/${r}/auth/register`, a)
        },
        verifyOtp({email: a, otpCode: u}) {
            return t.post(`/apps/${r}/auth/verify-otp`, {
                email: a,
                otp_code: u
            })
        },
        resendOtp(a) {
            return t.post(`/apps/${r}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return t.post(`/apps/${r}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({resetToken: a, newPassword: u}) {
            return t.post(`/apps/${r}/auth/reset-password`, {
                reset_token: a,
                new_password: u
            })
        },
        changePassword({userId: a, currentPassword: u, newPassword: c}) {
            return t.post(`/apps/${r}/auth/change-password`, {
                user_id: a,
                current_password: u,
                new_password: c
            })
        }
    }
}
function I2(t, e, r) {
    return {
        async getAccessToken(i) {
            const a = `/apps/${e}/auth/sso/accesstoken/${i}`
              , u = {};
            return r && (u["on-behalf-of"] = `Bearer ${r}`),
            t.get(a, {
                headers: u
            })
        }
    }
}
function F2(t, e) {
    return {
        async getAccessToken(r) {
            if (!r || typeof r != "string")
                throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${r}`)).access_token
        },
        async getConnection(r) {
            var i;
            if (!r || typeof r != "string")
                throw new Error("Integration type is required and must be a string");
            const u = await t.get(`/apps/${e}/external-auth/tokens/${r}`);
            return {
                accessToken: u.access_token,
                connectionConfig: (i = u.connection_config) !== null && i !== void 0 ? i : null
            }
        }
    }
}
function Zf(t={}) {
    const {storageKey: e="base44_access_token", paramName: r="access_token", saveToStorage: i=!0, removeFromUrl: a=!0} = t;
    let u = null;
    if (typeof window < "u" && window.location)
        try {
            const c = new URLSearchParams(window.location.search);
            if (u = c.get(r),
            u) {
                if (i && V2(u, {
                    storageKey: e
                }),
                a) {
                    c.delete(r);
                    const f = `${window.location.pathname}${c.toString() ? `?${c.toString()}` : ""}${window.location.hash}`;
                    window.history.replaceState({}, document.title, f)
                }
                return u
            }
        } catch (c) {
            console.error("Error retrieving token from URL:", c)
        }
    if (typeof window < "u" && window.localStorage)
        try {
            return u = window.localStorage.getItem(e),
            u
        } catch (c) {
            console.error("Error retrieving token from local storage:", c)
        }
    return null
}
function V2(t, e) {
    const {storageKey: r="base44_access_token"} = e;
    if (typeof window > "u" || !window.localStorage || !t)
        return !1;
    try {
        return window.localStorage.setItem(r, t),
        window.localStorage.setItem("token", t),
        !0
    } catch (i) {
        return console.error("Error saving token to local storage:", i),
        !1
    }
}
function vv(t, e) {
    return {
        async invoke(r, i) {
            if (typeof i == "string")
                throw new Error(`Function ${r} must receive an object with named parameters, received: ${i}`);
            let a, u;
            return i instanceof FormData || i && Object.values(i).some(c => c instanceof File) ? (a = new FormData,
            Object.keys(i).forEach(c => {
                i[c]instanceof File ? a.append(c, i[c], i[c].name) : typeof i[c] == "object" && i[c] !== null ? a.append(c, JSON.stringify(i[c])) : a.append(c, i[c])
            }
            ),
            u = "multipart/form-data") : (a = i,
            u = "application/json"),
            t.post(`/apps/${e}/functions/${r}`, a || i, {
                headers: {
                    "Content-Type": u
                }
            })
        }
    }
}
function wv({axios: t, getSocket: e, appId: r, serverUrl: i, token: a}) {
    const u = `/apps/${r}/agents`
      , c = {}
      , f = () => t.get(`${u}/conversations`)
      , h = b => t.get(`${u}/conversations/${b}`);
    return {
        getConversations: f,
        getConversation: h,
        listConversations: b => t.get(`${u}/conversations`, {
            params: b
        }),
        createConversation: b => t.post(`${u}/conversations`, b),
        addMessage: async (b, k) => t.post(`${u}/conversations/v2/${b.id}/messages`, k),
        subscribeToConversation: (b, k) => {
            const x = `/agent-conversations/${b}`
              , R = e()
              , V = h(b).then(L => (c[b] = L,
            L));
            return R.subscribeToRoom(x, {
                connect: () => {}
                ,
                update_model: async ({data: L}) => {
                    const j = JSON.parse(L);
                    if (j._message) {
                        await V;
                        const B = j._message
                          , K = c[b];
                        if (K) {
                            const G = K.messages || []
                              , M = G.findIndex(fe => fe.id === B.id)
                              , Z = M !== -1 ? G.map( (fe, Re) => Re === M ? B : fe) : [...G, B];
                            c[b] = {
                                ...K,
                                messages: Z
                            },
                            k == null || k(c[b])
                        }
                    }
                }
            })
        }
        ,
        getWhatsAppConnectURL: b => {
            const k = `${i}/api/apps/${r}/agents/${encodeURIComponent(b)}/whatsapp`
              , x = a ?? Zf();
            return x ? `${k}?token=${x}` : k
        }
    }
}
function xv(t, e) {
    const r = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            await t.post(`${r}/log-user-in-app/${i}`)
        },
        async fetchLogs(i={}) {
            return await t.get(r, {
                params: i
            })
        },
        async getStats(i={}) {
            return await t.get(`${r}/stats`, {
                params: i
            })
        }
    }
}
function B2(t, e) {
    return {
        async inviteUser(r, i) {
            if (i !== "user" && i !== "admin")
                throw new Error(`Invalid role: "${i}". Role must be either "user" or "admin".`);
            return await t.post(`/apps/${e}/runtime/users/invite-user`, {
                user_email: r,
                role: i
            })
        }
    }
}
const Tn = Object.create(null);
Tn.open = "0";
Tn.close = "1";
Tn.ping = "2";
Tn.pong = "3";
Tn.message = "4";
Tn.upgrade = "5";
Tn.noop = "6";
const pl = Object.create(null);
Object.keys(Tn).forEach(t => {
    pl[Tn[t]] = t
}
);
const Jd = {
    type: "error",
    data: "parser error"
}
  , Mx = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , Ix = typeof ArrayBuffer == "function"
  , Fx = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
  , eh = ({type: t, data: e}, r, i) => Mx && e instanceof Blob ? r ? i(e) : Sv(e, i) : Ix && (e instanceof ArrayBuffer || Fx(e)) ? r ? i(e) : Sv(new Blob([e]), i) : i(Tn[t] + (e || ""))
  , Sv = (t, e) => {
    const r = new FileReader;
    return r.onload = function() {
        const i = r.result.split(",")[1];
        e("b" + (i || ""))
    }
    ,
    r.readAsDataURL(t)
}
;
function bv(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
}
let dd;
function U2(t, e) {
    if (Mx && t.data instanceof Blob)
        return t.data.arrayBuffer().then(bv).then(e);
    if (Ix && (t.data instanceof ArrayBuffer || Fx(t.data)))
        return e(bv(t.data));
    eh(t, !1, r => {
        dd || (dd = new TextEncoder),
        e(dd.encode(r))
    }
    )
}
const kv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , io = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < kv.length; t++)
    io[kv.charCodeAt(t)] = t;
const z2 = t => {
    let e = t.length * .75, r = t.length, i, a = 0, u, c, f, h;
    t[t.length - 1] === "=" && (e--,
    t[t.length - 2] === "=" && e--);
    const m = new ArrayBuffer(e)
      , g = new Uint8Array(m);
    for (i = 0; i < r; i += 4)
        u = io[t.charCodeAt(i)],
        c = io[t.charCodeAt(i + 1)],
        f = io[t.charCodeAt(i + 2)],
        h = io[t.charCodeAt(i + 3)],
        g[a++] = u << 2 | c >> 4,
        g[a++] = (c & 15) << 4 | f >> 2,
        g[a++] = (f & 3) << 6 | h & 63;
    return m
}
  , $2 = typeof ArrayBuffer == "function"
  , th = (t, e) => {
    if (typeof t != "string")
        return {
            type: "message",
            data: Vx(t, e)
        };
    const r = t.charAt(0);
    return r === "b" ? {
        type: "message",
        data: q2(t.substring(1), e)
    } : pl[r] ? t.length > 1 ? {
        type: pl[r],
        data: t.substring(1)
    } : {
        type: pl[r]
    } : Jd
}
  , q2 = (t, e) => {
    if ($2) {
        const r = z2(t);
        return Vx(r, e)
    } else
        return {
            base64: !0,
            data: t
        }
}
  , Vx = (t, e) => {
    switch (e) {
    case "blob":
        return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
        return t instanceof ArrayBuffer ? t : t.buffer
    }
}
  , Bx = ""
  , H2 = (t, e) => {
    const r = t.length
      , i = new Array(r);
    let a = 0;
    t.forEach( (u, c) => {
        eh(u, !1, f => {
            i[c] = f,
            ++a === r && e(i.join(Bx))
        }
        )
    }
    )
}
  , W2 = (t, e) => {
    const r = t.split(Bx)
      , i = [];
    for (let a = 0; a < r.length; a++) {
        const u = th(r[a], e);
        if (i.push(u),
        u.type === "error")
            break
    }
    return i
}
;
function K2() {
    return new TransformStream({
        transform(t, e) {
            U2(t, r => {
                const i = r.length;
                let a;
                if (i < 126)
                    a = new Uint8Array(1),
                    new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                    a = new Uint8Array(3);
                    const u = new DataView(a.buffer);
                    u.setUint8(0, 126),
                    u.setUint16(1, i)
                } else {
                    a = new Uint8Array(9);
                    const u = new DataView(a.buffer);
                    u.setUint8(0, 127),
                    u.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (a[0] |= 128),
                e.enqueue(a),
                e.enqueue(r)
            }
            )
        }
    })
}
let fd;
function rl(t) {
    return t.reduce( (e, r) => e + r.length, 0)
}
function sl(t, e) {
    if (t[0].length === e)
        return t.shift();
    const r = new Uint8Array(e);
    let i = 0;
    for (let a = 0; a < e; a++)
        r[a] = t[0][i++],
        i === t[0].length && (t.shift(),
        i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)),
    r
}
function Q2(t, e) {
    fd || (fd = new TextDecoder);
    const r = [];
    let i = 0
      , a = -1
      , u = !1;
    return new TransformStream({
        transform(c, f) {
            for (r.push(c); ; ) {
                if (i === 0) {
                    if (rl(r) < 1)
                        break;
                    const h = sl(r, 1);
                    u = (h[0] & 128) === 128,
                    a = h[0] & 127,
                    a < 126 ? i = 3 : a === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (rl(r) < 2)
                        break;
                    const h = sl(r, 2);
                    a = new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),
                    i = 3
                } else if (i === 2) {
                    if (rl(r) < 8)
                        break;
                    const h = sl(r, 8)
                      , m = new DataView(h.buffer,h.byteOffset,h.length)
                      , g = m.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        f.enqueue(Jd);
                        break
                    }
                    a = g * Math.pow(2, 32) + m.getUint32(4),
                    i = 3
                } else {
                    if (rl(r) < a)
                        break;
                    const h = sl(r, a);
                    f.enqueue(th(u ? h : fd.decode(h), e)),
                    i = 0
                }
                if (a === 0 || a > t) {
                    f.enqueue(Jd);
                    break
                }
            }
        }
    })
}
const Ux = 4;
function et(t) {
    if (t)
        return G2(t)
}
function G2(t) {
    for (var e in et.prototype)
        t[e] = et.prototype[e];
    return t
}
et.prototype.on = et.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
    this
}
;
et.prototype.once = function(t, e) {
    function r() {
        this.off(t, r),
        e.apply(this, arguments)
    }
    return r.fn = e,
    this.on(t, r),
    this
}
;
et.prototype.off = et.prototype.removeListener = et.prototype.removeAllListeners = et.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var r = this._callbacks["$" + t];
    if (!r)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + t],
        this;
    for (var i, a = 0; a < r.length; a++)
        if (i = r[a],
        i === e || i.fn === e) {
            r.splice(a, 1);
            break
        }
    return r.length === 0 && delete this._callbacks["$" + t],
    this
}
;
et.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], i = 1; i < arguments.length; i++)
        e[i - 1] = arguments[i];
    if (r) {
        r = r.slice(0);
        for (var i = 0, a = r.length; i < a; ++i)
            r[i].apply(this, e)
    }
    return this
}
;
et.prototype.emitReserved = et.prototype.emit;
et.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + t] || []
}
;
et.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
}
;
const ql = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, r) => r(e, 0)
  , Zt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , Y2 = "arraybuffer";
function zx(t, ...e) {
    return e.reduce( (r, i) => (t.hasOwnProperty(i) && (r[i] = t[i]),
    r), {})
}
const X2 = Zt.setTimeout
  , J2 = Zt.clearTimeout;
function Hl(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = X2.bind(Zt),
    t.clearTimeoutFn = J2.bind(Zt)) : (t.setTimeoutFn = Zt.setTimeout.bind(Zt),
    t.clearTimeoutFn = Zt.clearTimeout.bind(Zt))
}
const Z2 = 1.33;
function eN(t) {
    return typeof t == "string" ? tN(t) : Math.ceil((t.byteLength || t.size) * Z2)
}
function tN(t) {
    let e = 0
      , r = 0;
    for (let i = 0, a = t.length; i < a; i++)
        e = t.charCodeAt(i),
        e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (i++,
        r += 4);
    return r
}
function $x() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function nN(t) {
    let e = "";
    for (let r in t)
        t.hasOwnProperty(r) && (e.length && (e += "&"),
        e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    return e
}
function rN(t) {
    let e = {}
      , r = t.split("&");
    for (let i = 0, a = r.length; i < a; i++) {
        let u = r[i].split("=");
        e[decodeURIComponent(u[0])] = decodeURIComponent(u[1])
    }
    return e
}
class sN extends Error {
    constructor(e, r, i) {
        super(e),
        this.description = r,
        this.context = i,
        this.type = "TransportError"
    }
}
class nh extends et {
    constructor(e) {
        super(),
        this.writable = !1,
        Hl(this, e),
        this.opts = e,
        this.query = e.query,
        this.socket = e.socket,
        this.supportsBinary = !e.forceBase64
    }
    onError(e, r, i) {
        return super.emitReserved("error", new sN(e,r,i)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(e) {
        const r = th(e, this.socket.binaryType);
        this.onPacket(r)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed",
        super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, r={}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const r = nN(e);
        return r.length ? "?" + r : ""
    }
}
class iN extends nh {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const r = () => {
            this.readyState = "paused",
            e()
        }
        ;
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++,
            this.once("pollComplete", function() {
                --i || r()
            })),
            this.writable || (i++,
            this.once("drain", function() {
                --i || r()
            }))
        } else
            r()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(e) {
        const r = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(),
            i.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(i)
        }
        ;
        W2(e, this.socket.binaryType).forEach(r),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1,
        H2(e, r => {
            this.doWrite(r, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const e = this.opts.secure ? "https" : "http"
          , r = this.query || {};
        return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = $x()),
        !this.supportsBinary && !r.sid && (r.b64 = 1),
        this.createUri(e, r)
    }
}
let qx = !1;
try {
    qx = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const oN = qx;
function aN() {}
class lN extends iN {
    constructor(e) {
        if (super(e),
        typeof location < "u") {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"),
            this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, r) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", r),
        i.on("error", (a, u) => {
            this.onError("xhr post error", a, u)
        }
        )
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)),
        e.on("error", (r, i) => {
            this.onError("xhr poll error", r, i)
        }
        ),
        this.pollXhr = e
    }
}
class En extends et {
    constructor(e, r, i) {
        super(),
        this.createRequest = e,
        Hl(this, i),
        this._opts = i,
        this._method = i.method || "GET",
        this._uri = r,
        this._data = i.data !== void 0 ? i.data : null,
        this._create()
    }
    _create() {
        var e;
        const r = zx(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(r);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(a) && i.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}
            (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i),
            "withCredentials"in i && (i.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
            i.onreadystatechange = () => {
                var a;
                i.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(i.getResponseHeader("set-cookie"))),
                i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }
                , 0))
            }
            ,
            i.send(this._data)
        } catch (a) {
            this.setTimeoutFn( () => {
                this._onError(a)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = En.requestsCount++,
        En.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = aN,
            e)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete En.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
En.requestsCount = 0;
En.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", Ev);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide"in Zt ? "pagehide" : "unload";
        addEventListener(t, Ev, !1)
    }
}
function Ev() {
    for (let t in En.requests)
        En.requests.hasOwnProperty(t) && En.requests[t].abort()
}
const uN = (function() {
    const t = Hx({
        xdomain: !1
    });
    return t && t.responseType !== null
}
)();
class cN extends lN {
    constructor(e) {
        super(e);
        const r = e && e.forceBase64;
        this.supportsBinary = uN && !r
    }
    request(e={}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts),
        new En(Hx,this.uri(),e)
    }
}
function Hx(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || oN))
            return new XMLHttpRequest
    } catch {}
    if (!e)
        try {
            return new Zt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const Wx = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class dN extends nh {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri()
          , r = this.opts.protocols
          , i = Wx ? {} : zx(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, r, i)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }),
        this.ws.onmessage = e => this.onData(e.data),
        this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , a = r === e.length - 1;
            eh(i, this.supportsBinary, u => {
                try {
                    this.doWrite(i, u)
                } catch {}
                a && ql( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws"
          , r = this.query || {};
        return this.opts.timestampRequests && (r[this.opts.timestampParam] = $x()),
        this.supportsBinary || (r.b64 = 1),
        this.createUri(e, r)
    }
}
const hd = Zt.WebSocket || Zt.MozWebSocket;
class fN extends dN {
    createSocket(e, r, i) {
        return Wx ? new hd(e,r,i) : r ? new hd(e,r) : new hd(e)
    }
    doWrite(e, r) {
        this.ws.send(r)
    }
}
class hN extends nh {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(e => {
            this.onError("webtransport error", e)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(e => {
                const r = Q2(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , i = e.readable.pipeThrough(r).getReader()
                  , a = K2();
                a.readable.pipeTo(e.writable),
                this._writer = a.writable.getWriter();
                const u = () => {
                    i.read().then( ({done: f, value: h}) => {
                        f || (this.onPacket(h),
                        u())
                    }
                    ).catch(f => {}
                    )
                }
                ;
                u();
                const c = {
                    type: "open"
                };
                this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(c).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r]
              , a = r === e.length - 1;
            this._writer.write(i).then( () => {
                a && ql( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const pN = {
    websocket: fN,
    webtransport: hN,
    polling: cN
}
  , mN = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , gN = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function Zd(t) {
    if (t.length > 8e3)
        throw "URI too long";
    const e = t
      , r = t.indexOf("[")
      , i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    let a = mN.exec(t || "")
      , u = {}
      , c = 14;
    for (; c--; )
        u[gN[c]] = a[c] || "";
    return r != -1 && i != -1 && (u.source = e,
    u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":"),
    u.authority = u.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    u.ipv6uri = !0),
    u.pathNames = yN(u, u.path),
    u.queryKey = vN(u, u.query),
    u
}
function yN(t, e) {
    const r = /\/{2,9}/g
      , i = e.replace(r, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1),
    e.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
}
function vN(t, e) {
    const r = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, a, u) {
        a && (r[a] = u)
    }),
    r
}
const ef = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , ml = [];
ef && addEventListener("offline", () => {
    ml.forEach(t => t())
}
, !1);
class Er extends et {
    constructor(e, r) {
        if (super(),
        this.binaryType = Y2,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        e && typeof e == "object" && (r = e,
        e = null),
        e) {
            const i = Zd(e);
            r.hostname = i.host,
            r.secure = i.protocol === "https" || i.protocol === "wss",
            r.port = i.port,
            i.query && (r.query = i.query)
        } else
            r.host && (r.hostname = Zd(r.host).host);
        Hl(this, r),
        this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:",
        r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
        this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        r.transports.forEach(i => {
            const a = i.prototype.name;
            this.transports.push(a),
            this._transportsByName[a] = i
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, r),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = rN(this.opts.query)),
        ef && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        ml.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(e) {
        const r = Object.assign({}, this.opts.query);
        r.EIO = Ux,
        r.transport = e,
        this.id && (r.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const e = this.opts.rememberUpgrade && Er.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const r = this.createTransport(e);
        r.open(),
        this.setTransport(r)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = e,
        e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
    }
    onOpen() {
        this.readyState = "open",
        Er.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", e),
            this.emitReserved("heartbeat"),
            e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const r = new Error("server error");
                r.code = e.data,
                this._onError(r);
                break;
            case "message":
                this.emitReserved("data", e.data),
                this.emitReserved("message", e.data);
                break
            }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e),
        this.id = e.sid,
        this.transport.query.sid = e.sid,
        this._pingInterval = e.pingInterval,
        this._pingTimeout = e.pingTimeout,
        this._maxPayload = e.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , e),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e),
            this._prevBufferLen = e.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let r = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const a = this.writeBuffer[i].data;
            if (a && (r += eN(a)),
            i > 0 && r > this._maxPayload)
                return this.writeBuffer.slice(0, i);
            r += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0,
        ql( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        e
    }
    write(e, r, i) {
        return this._sendPacket("message", e, r, i),
        this
    }
    send(e, r, i) {
        return this._sendPacket("message", e, r, i),
        this
    }
    _sendPacket(e, r, i, a) {
        if (typeof r == "function" && (a = r,
        r = void 0),
        typeof i == "function" && (a = i,
        i = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        i = i || {},
        i.compress = i.compress !== !1;
        const u = {
            type: e,
            data: r,
            options: i
        };
        this.emitReserved("packetCreate", u),
        this.writeBuffer.push(u),
        a && this.once("flush", a),
        this.flush()
    }
    close() {
        const e = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , r = () => {
            this.off("upgrade", r),
            this.off("upgradeError", r),
            e()
        }
          , i = () => {
            this.once("upgrade", r),
            this.once("upgradeError", r)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }
        ) : this.upgrading ? i() : e()),
        this
    }
    _onError(e) {
        if (Er.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", e),
        this._onClose("transport error", e)
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            ef && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const i = ml.indexOf(this._offlineEventListener);
                i !== -1 && ml.splice(i, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", e, r),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
Er.protocol = Ux;
class wN extends Er {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++)
                this._probe(this._upgrades[e])
    }
    _probe(e) {
        let r = this.createTransport(e)
          , i = !1;
        Er.priorWebsocketSuccess = !1;
        const a = () => {
            i || (r.send([{
                type: "ping",
                data: "probe"
            }]),
            r.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", r),
                        !r)
                            return;
                        Er.priorWebsocketSuccess = r.name === "websocket",
                        this.transport.pause( () => {
                            i || this.readyState !== "closed" && (g(),
                            this.setTransport(r),
                            r.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", r),
                            r = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const w = new Error("probe error");
                        w.transport = r.name,
                        this.emitReserved("upgradeError", w)
                    }
            }
            ))
        }
        ;
        function u() {
            i || (i = !0,
            g(),
            r.close(),
            r = null)
        }
        const c = y => {
            const w = new Error("probe error: " + y);
            w.transport = r.name,
            u(),
            this.emitReserved("upgradeError", w)
        }
        ;
        function f() {
            c("transport closed")
        }
        function h() {
            c("socket closed")
        }
        function m(y) {
            r && y.name !== r.name && u()
        }
        const g = () => {
            r.removeListener("open", a),
            r.removeListener("error", c),
            r.removeListener("close", f),
            this.off("close", h),
            this.off("upgrading", m)
        }
        ;
        r.once("open", a),
        r.once("error", c),
        r.once("close", f),
        this.once("close", h),
        this.once("upgrading", m),
        this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn( () => {
            i || r.open()
        }
        , 200) : r.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades),
        super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const r = [];
        for (let i = 0; i < e.length; i++)
            ~this.transports.indexOf(e[i]) && r.push(e[i]);
        return r
    }
}
let xN = class extends wN {
    constructor(e, r={}) {
        const i = typeof e == "object" ? e : r;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(a => pN[a]).filter(a => !!a)),
        super(e, i)
    }
}
;
function SN(t, e="", r) {
    let i = t;
    r = r || typeof location < "u" && location,
    t == null && (t = r.protocol + "//" + r.host),
    typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t),
    /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t),
    i = Zd(t)),
    i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    i.path = i.path || "/";
    const u = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + u + ":" + i.port + e,
    i.href = i.protocol + "://" + u + (r && r.port === i.port ? "" : ":" + i.port),
    i
}
const bN = typeof ArrayBuffer == "function"
  , kN = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
  , Kx = Object.prototype.toString
  , EN = typeof Blob == "function" || typeof Blob < "u" && Kx.call(Blob) === "[object BlobConstructor]"
  , TN = typeof File == "function" || typeof File < "u" && Kx.call(File) === "[object FileConstructor]";
function rh(t) {
    return bN && (t instanceof ArrayBuffer || kN(t)) || EN && t instanceof Blob || TN && t instanceof File
}
function gl(t, e) {
    if (!t || typeof t != "object")
        return !1;
    if (Array.isArray(t)) {
        for (let r = 0, i = t.length; r < i; r++)
            if (gl(t[r]))
                return !0;
        return !1
    }
    if (rh(t))
        return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
        return gl(t.toJSON(), !0);
    for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && gl(t[r]))
            return !0;
    return !1
}
function CN(t) {
    const e = []
      , r = t.data
      , i = t;
    return i.data = tf(r, e),
    i.attachments = e.length,
    {
        packet: i,
        buffers: e
    }
}
function tf(t, e) {
    if (!t)
        return t;
    if (rh(t)) {
        const r = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t),
        r
    } else if (Array.isArray(t)) {
        const r = new Array(t.length);
        for (let i = 0; i < t.length; i++)
            r[i] = tf(t[i], e);
        return r
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const r = {};
        for (const i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (r[i] = tf(t[i], e));
        return r
    }
    return t
}
function _N(t, e) {
    return t.data = nf(t.data, e),
    delete t.attachments,
    t
}
function nf(t, e) {
    if (!t)
        return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
            return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let r = 0; r < t.length; r++)
            t[r] = nf(t[r], e);
    else if (typeof t == "object")
        for (const r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (t[r] = nf(t[r], e));
    return t
}
const PN = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var Te;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT",
    t[t.DISCONNECT = 1] = "DISCONNECT",
    t[t.EVENT = 2] = "EVENT",
    t[t.ACK = 3] = "ACK",
    t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    t[t.BINARY_EVENT = 5] = "BINARY_EVENT",
    t[t.BINARY_ACK = 6] = "BINARY_ACK"
}
)(Te || (Te = {}));
class RN {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === Te.EVENT || e.type === Te.ACK) && gl(e) ? this.encodeAsBinary({
            type: e.type === Te.EVENT ? Te.BINARY_EVENT : Te.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let r = "" + e.type;
        return (e.type === Te.BINARY_EVENT || e.type === Te.BINARY_ACK) && (r += e.attachments + "-"),
        e.nsp && e.nsp !== "/" && (r += e.nsp + ","),
        e.id != null && (r += e.id),
        e.data != null && (r += JSON.stringify(e.data, this.replacer)),
        r
    }
    encodeAsBinary(e) {
        const r = CN(e)
          , i = this.encodeAsString(r.packet)
          , a = r.buffers;
        return a.unshift(i),
        a
    }
}
class sh extends et {
    constructor(e) {
        super(),
        this.reviver = e
    }
    add(e) {
        let r;
        if (typeof e == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(e);
            const i = r.type === Te.BINARY_EVENT;
            i || r.type === Te.BINARY_ACK ? (r.type = i ? Te.EVENT : Te.ACK,
            this.reconstructor = new AN(r),
            r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r)
        } else if (rh(e) || e.base64)
            if (this.reconstructor)
                r = this.reconstructor.takeBinaryData(e),
                r && (this.reconstructor = null,
                super.emitReserved("decoded", r));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let r = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (Te[i.type] === void 0)
            throw new Error("unknown packet type " + i.type);
        if (i.type === Te.BINARY_EVENT || i.type === Te.BINARY_ACK) {
            const u = r + 1;
            for (; e.charAt(++r) !== "-" && r != e.length; )
                ;
            const c = e.substring(u, r);
            if (c != Number(c) || e.charAt(r) !== "-")
                throw new Error("Illegal attachments");
            i.attachments = Number(c)
        }
        if (e.charAt(r + 1) === "/") {
            const u = r + 1;
            for (; ++r && !(e.charAt(r) === "," || r === e.length); )
                ;
            i.nsp = e.substring(u, r)
        } else
            i.nsp = "/";
        const a = e.charAt(r + 1);
        if (a !== "" && Number(a) == a) {
            const u = r + 1;
            for (; ++r; ) {
                const c = e.charAt(r);
                if (c == null || Number(c) != c) {
                    --r;
                    break
                }
                if (r === e.length)
                    break
            }
            i.id = Number(e.substring(u, r + 1))
        }
        if (e.charAt(++r)) {
            const u = this.tryParse(e.substr(r));
            if (sh.isPayloadValid(i.type, u))
                i.data = u;
            else
                throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, r) {
        switch (e) {
        case Te.CONNECT:
            return Tv(r);
        case Te.DISCONNECT:
            return r === void 0;
        case Te.CONNECT_ERROR:
            return typeof r == "string" || Tv(r);
        case Te.EVENT:
        case Te.BINARY_EVENT:
            return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && PN.indexOf(r[0]) === -1);
        case Te.ACK:
        case Te.BINARY_ACK:
            return Array.isArray(r)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class AN {
    constructor(e) {
        this.packet = e,
        this.buffers = [],
        this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments) {
            const r = _N(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            r
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
function Tv(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
const NN = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: sh,
    Encoder: RN,
    get PacketType() {
        return Te
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
function fn(t, e, r) {
    return t.on(e, r),
    function() {
        t.off(e, r)
    }
}
const ON = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class Qx extends et {
    constructor(e, r, i) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = e,
        this.nsp = r,
        i && i.auth && (this.auth = i.auth),
        this._opts = Object.assign({}, i),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const e = this.io;
        this.subs = [fn(e, "open", this.onopen.bind(this)), fn(e, "packet", this.onpacket.bind(this)), fn(e, "error", this.onerror.bind(this)), fn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"),
        this.emit.apply(this, e),
        this
    }
    emit(e, ...r) {
        var i, a, u;
        if (ON.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
        if (r.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(r),
            this;
        const c = {
            type: Te.EVENT,
            data: r
        };
        if (c.options = {},
        c.options.compress = this.flags.compress !== !1,
        typeof r[r.length - 1] == "function") {
            const g = this.ids++
              , y = r.pop();
            this._registerAckCallback(g, y),
            c.id = g
        }
        const f = (a = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || a === void 0 ? void 0 : a.writable
          , h = this.connected && !(!((u = this.io.engine) === null || u === void 0) && u._hasPingExpired());
        return this.flags.volatile && !f || (h ? (this.notifyOutgoingListeners(c),
        this.packet(c)) : this.sendBuffer.push(c)),
        this.flags = {},
        this
    }
    _registerAckCallback(e, r) {
        var i;
        const a = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[e] = r;
            return
        }
        const u = this.io.setTimeoutFn( () => {
            delete this.acks[e];
            for (let f = 0; f < this.sendBuffer.length; f++)
                this.sendBuffer[f].id === e && this.sendBuffer.splice(f, 1);
            r.call(this, new Error("operation has timed out"))
        }
        , a)
          , c = (...f) => {
            this.io.clearTimeoutFn(u),
            r.apply(this, f)
        }
        ;
        c.withError = !0,
        this.acks[e] = c
    }
    emitWithAck(e, ...r) {
        return new Promise( (i, a) => {
            const u = (c, f) => c ? a(c) : i(f);
            u.withError = !0,
            r.push(u),
            this.emit(e, ...r)
        }
        )
    }
    _addToQueue(e) {
        let r;
        typeof e[e.length - 1] == "function" && (r = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push( (a, ...u) => (this._queue[0],
        a !== null ? i.tryCount > this._opts.retries && (this._queue.shift(),
        r && r(a)) : (this._queue.shift(),
        r && r(null, ...u)),
        i.pending = !1,
        this._drainQueue())),
        this._queue.push(i),
        this._drainQueue()
    }
    _drainQueue(e=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const r = this._queue[0];
        r.pending && !e || (r.pending = !0,
        r.tryCount++,
        this.flags = r.flags,
        this.emit.apply(this, r.args))
    }
    packet(e) {
        e.nsp = this.nsp,
        this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: Te.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, r) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", e, r),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e],
                i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(e) {
        if (e.nsp === this.nsp)
            switch (e.type) {
            case Te.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Te.EVENT:
            case Te.BINARY_EVENT:
                this.onevent(e);
                break;
            case Te.ACK:
            case Te.BINARY_ACK:
                this.onack(e);
                break;
            case Te.DISCONNECT:
                this.ondisconnect();
                break;
            case Te.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data,
                this.emitReserved("connect_error", i);
                break
            }
    }
    onevent(e) {
        const r = e.data || [];
        e.id != null && r.push(this.ack(e.id)),
        this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const r = this._anyListeners.slice();
            for (const i of r)
                i.apply(this, e)
        }
        super.emit.apply(this, e),
        this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const r = this;
        let i = !1;
        return function(...a) {
            i || (i = !0,
            r.packet({
                type: Te.ACK,
                id: e,
                data: a
            }))
        }
    }
    onack(e) {
        const r = this.acks[e.id];
        typeof r == "function" && (delete this.acks[e.id],
        r.withError && e.data.unshift(null),
        r.apply(this, e.data))
    }
    onconnect(e, r) {
        this.id = e,
        this.recovered = r && this._pid === r,
        this._pid = r,
        this.connected = !0,
        this.emitBuffered(),
        this._drainQueue(!0),
        this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e),
            this.packet(e)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: Te.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(e) {
        return this.flags.timeout = e,
        this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(e),
        this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(e),
        this
    }
    offAny(e) {
        if (!this._anyListeners)
            return this;
        if (e) {
            const r = this._anyListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i])
                    return r.splice(i, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(e),
        this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(e),
        this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners)
            return this;
        if (e) {
            const r = this._anyOutgoingListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i])
                    return r.splice(i, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const r = this._anyOutgoingListeners.slice();
            for (const i of r)
                i.apply(this, e.data)
        }
    }
}
function li(t) {
    t = t || {},
    this.ms = t.min || 100,
    this.max = t.max || 1e4,
    this.factor = t.factor || 2,
    this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
    this.attempts = 0
}
li.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random()
          , r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r
    }
    return Math.min(t, this.max) | 0
}
;
li.prototype.reset = function() {
    this.attempts = 0
}
;
li.prototype.setMin = function(t) {
    this.ms = t
}
;
li.prototype.setMax = function(t) {
    this.max = t
}
;
li.prototype.setJitter = function(t) {
    this.jitter = t
}
;
class rf extends et {
    constructor(e, r) {
        var i;
        super(),
        this.nsps = {},
        this.subs = [],
        e && typeof e == "object" && (r = e,
        e = void 0),
        r = r || {},
        r.path = r.path || "/socket.io",
        this.opts = r,
        Hl(this, r),
        this.reconnection(r.reconnection !== !1),
        this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(r.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
        this.randomizationFactor((i = r.randomizationFactor) !== null && i !== void 0 ? i : .5),
        this.backoff = new li({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(r.timeout == null ? 2e4 : r.timeout),
        this._readyState = "closed",
        this.uri = e;
        const a = r.parser || NN;
        this.encoder = new a.Encoder,
        this.decoder = new a.Decoder,
        this._autoConnect = r.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e,
        e || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e,
        this)
    }
    reconnectionDelay(e) {
        var r;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e,
        (r = this.backoff) === null || r === void 0 || r.setMin(e),
        this)
    }
    randomizationFactor(e) {
        var r;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e,
        (r = this.backoff) === null || r === void 0 || r.setJitter(e),
        this)
    }
    reconnectionDelayMax(e) {
        var r;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e,
        (r = this.backoff) === null || r === void 0 || r.setMax(e),
        this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new xN(this.uri,this.opts);
        const r = this.engine
          , i = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const a = fn(r, "open", function() {
            i.onopen(),
            e && e()
        })
          , u = f => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", f),
            e ? e(f) : this.maybeReconnectOnOpen()
        }
          , c = fn(r, "error", u);
        if (this._timeout !== !1) {
            const f = this._timeout
              , h = this.setTimeoutFn( () => {
                a(),
                u(new Error("timeout")),
                r.close()
            }
            , f);
            this.opts.autoUnref && h.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(h)
            }
            )
        }
        return this.subs.push(a),
        this.subs.push(c),
        this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const e = this.engine;
        this.subs.push(fn(e, "ping", this.onping.bind(this)), fn(e, "data", this.ondata.bind(this)), fn(e, "error", this.onerror.bind(this)), fn(e, "close", this.onclose.bind(this)), fn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (r) {
            this.onclose("parse error", r)
        }
    }
    ondecoded(e) {
        ql( () => {
            this.emitReserved("packet", e)
        }
        , this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, r) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new Qx(this,e,r),
        this.nsps[e] = i),
        i
    }
    _destroy(e) {
        const r = Object.keys(this.nsps);
        for (const i of r)
            if (this.nsps[i].active)
                return;
        this._close()
    }
    _packet(e) {
        const r = this.encoder.encode(e);
        for (let i = 0; i < r.length; i++)
            this.engine.write(r[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, r) {
        var i;
        this.cleanup(),
        (i = this.engine) === null || i === void 0 || i.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", e, r),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const r = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn( () => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                !e.skipReconnect && e.open(a => {
                    a ? (e._reconnecting = !1,
                    e.reconnect(),
                    this.emitReserved("reconnect_error", a)) : e.onreconnect()
                }
                ))
            }
            , r);
            this.opts.autoUnref && i.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(i)
            }
            )
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", e)
    }
}
const Ji = {};
function yl(t, e) {
    typeof t == "object" && (e = t,
    t = void 0),
    e = e || {};
    const r = SN(t, e.path || "/socket.io")
      , i = r.source
      , a = r.id
      , u = r.path
      , c = Ji[a] && u in Ji[a].nsps
      , f = e.forceNew || e["force new connection"] || e.multiplex === !1 || c;
    let h;
    return f ? h = new rf(i,e) : (Ji[a] || (Ji[a] = new rf(i,e)),
    h = Ji[a]),
    r.query && !e.query && (e.query = r.queryKey),
    h.socket(r.path, e)
}
Object.assign(yl, {
    Manager: rf,
    Socket: Qx,
    io: yl,
    connect: yl
});
function Cv(t, e) {
    var r;
    const i = yl(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: {
            app_id: t.appId,
            token: (r = t.token) !== null && r !== void 0 ? r : Zf()
        }
    });
    return i.on("connect", async () => {
        var a;
        return console.log("connect", i.id),
        (a = e.connect) === null || a === void 0 ? void 0 : a.call(e)
    }
    ),
    i.on("update_model", async a => {
        var u;
        return (u = e.update_model) === null || u === void 0 ? void 0 : u.call(e, a)
    }
    ),
    i.on("error", async a => {
        var u;
        return (u = e.error) === null || u === void 0 ? void 0 : u.call(e, a)
    }
    ),
    i.on("connect_error", async a => {
        var u;
        return console.error("connect_error", a),
        (u = e.error) === null || u === void 0 ? void 0 : u.call(e, a)
    }
    ),
    i
}
function jN({config: t}) {
    let e = {
        ...t
    };
    const r = {}
      , i = {
        connect: async () => {
            const E = [];
            Object.keys(r).forEach(b => {
                h(b);
                const k = y(b);
                k == null || k.forEach( ({connect: x}) => {
                    const R = async () => x == null ? void 0 : x();
                    E.push(R())
                }
                )
            }
            ),
            await Promise.all(E)
        }
        ,
        update_model: async E => {
            const k = y(E.room).map(x => {
                var R;
                return (R = x.update_model) === null || R === void 0 ? void 0 : R.call(x, E)
            }
            );
            await Promise.all(k)
        }
        ,
        error: async E => {
            console.error("error", E);
            const b = Object.values(r).flat().map(k => {
                var x;
                return (x = k.error) === null || x === void 0 ? void 0 : x.call(k, E)
            }
            );
            await Promise.all(b)
        }
    };
    let a = Cv(t, i);
    function u() {
        c()
    }
    function c() {
        a && a.disconnect()
    }
    function f(E) {
        u(),
        e = {
            ...e,
            ...E
        },
        a = Cv(e, i)
    }
    function h(E) {
        a.emit("join", E)
    }
    function m(E) {
        a.emit("leave", E)
    }
    async function g(E, b) {
        var k;
        const x = JSON.stringify(b);
        return (k = i.update_model) === null || k === void 0 ? void 0 : k.call(i, {
            room: E,
            data: x
        })
    }
    function y(E) {
        return r[E]
    }
    return {
        socket: a,
        subscribeToRoom: (E, b) => (r[E] || (h(E),
        r[E] = []),
        r[E].push(b),
        () => {
            var k, x;
            r[E] = (x = (k = r[E]) === null || k === void 0 ? void 0 : k.filter(R => R !== b)) !== null && x !== void 0 ? x : [],
            r[E].length === 0 && m(E)
        }
        ),
        updateConfig: f,
        updateModel: g,
        disconnect: c
    }
}
const Zi = typeof window < "u" ? window : {
    base44SharedInstances: {}
};
function LN(t, e) {
    return Zi.base44SharedInstances || (Zi.base44SharedInstances = {}),
    Zi.base44SharedInstances[t] || (Zi.base44SharedInstances[t] = {
        instance: e()
    }),
    Zi.base44SharedInstances[t].instance
}
const DN = "__user_heartbeat_event__"
  , MN = "__initialization_event__"
  , IN = "__session_duration_event__"
  , _v = "analytics-enable"
  , Pv = "base44_analytics_session_id"
  , FN = {
    enabled: !0,
    maxQueueSize: 1e3,
    throttleTime: 1e3,
    batchSize: 30,
    heartBeatInterval: 60 * 1e3
}
  , VN = "analytics"
  , Me = LN(VN, () => ({
    requestsQueue: [],
    isProcessing: !1,
    isHeartBeatProcessing: !1,
    wasInitializationTracked: !1,
    sessionContext: null,
    sessionStartTime: null,
    config: {
        ...FN,
        ...KN()
    }
}))
  , BN = ({axiosClient: t, serverUrl: e, appId: r, userAuthModule: i}) => {
    var a;
    const {maxQueueSize: u, throttleTime: c, batchSize: f} = Me.config;
    if (!(!((a = Me.config) === null || a === void 0) && a.enabled))
        return {
            track: () => {}
            ,
            cleanup: () => {}
        };
    let h;
    const m = `${e}/api/apps/${r}/analytics/track/batch`
      , g = async L => {
        await t.request({
            method: "POST",
            url: `/apps/${r}/analytics/track/batch`,
            data: {
                events: L
            }
        })
    }
      , y = L => {
        try {
            const j = JSON.stringify({
                events: L
            })
              , B = new Blob([j],{
                type: "application/json"
            });
            return typeof navigator > "u" || j.length > 6e4 || !navigator.sendBeacon(m, B)
        } catch {
            return !1
        }
    }
      , w = async (L, j={}) => {
        if (L.length === 0)
            return;
        const B = await WN(i)
          , K = L.map(HN(B));
        try {
            (!j.isBeacon || !y(K)) && await g(K)
        } catch {}
    }
      , E = () => {
        Av(w, {
            throttleTime: c,
            batchSize: f
        })
    }
      , b = L => {
        if (Me.requestsQueue.length >= u)
            return;
        const j = qN();
        Me.requestsQueue.push({
            ...L,
            ...j
        }),
        E()
    }
      , k = () => {
        Av(w, {
            throttleTime: c,
            batchSize: f
        }),
        h = Nv(b),
        zN()
    }
      , x = () => {
        Rv(),
        h == null || h(),
        $N(b);
        const L = Me.requestsQueue.splice(0);
        w(L, {
            isBeacon: !0
        })
    }
      , R = () => {
        typeof window > "u" || (document.visibilityState === "hidden" ? x() : document.visibilityState === "visible" && k())
    }
      , V = () => {
        Rv(),
        h == null || h(),
        typeof window < "u" && window.removeEventListener("visibilitychange", R)
    }
    ;
    return E(),
    h = Nv(b),
    UN(b),
    typeof window < "u" && window.addEventListener("visibilitychange", R),
    {
        track: b,
        cleanup: V
    }
}
;
function Rv() {
    Me.isProcessing = !1
}
async function Av(t, e) {
    if (Me.isProcessing)
        return;
    Me.isProcessing = !0;
    const {throttleTime: r=1e3, batchSize: i=30} = e ?? {};
    for (; Me.isProcessing && Me.requestsQueue.length > 0; ) {
        const a = Me.requestsQueue.splice(0, i);
        a.length && await t(a),
        await new Promise(u => setTimeout(u, r))
    }
    Me.isProcessing = !1
}
function Nv(t) {
    var e;
    if (Me.isHeartBeatProcessing || ((e = Me.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10)
        return () => {}
        ;
    Me.isHeartBeatProcessing = !0;
    const r = setInterval( () => {
        t({
            eventName: DN
        })
    }
    , Me.config.heartBeatInterval);
    return () => {
        clearInterval(r),
        Me.isHeartBeatProcessing = !1
    }
}
function UN(t) {
    typeof window > "u" || Me.wasInitializationTracked || (Me.wasInitializationTracked = !0,
    t({
        eventName: MN,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}
function zN() {
    typeof window > "u" || Me.sessionStartTime !== null || (Me.sessionStartTime = new Date().toISOString())
}
function $N(t) {
    if (typeof window > "u" || Me.sessionStartTime === null)
        return;
    const e = new Date().getTime() - new Date(Me.sessionStartTime).getTime();
    Me.sessionStartTime = null,
    t({
        eventName: IN,
        properties: {
            sessionDuration: e
        }
    })
}
function qN() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}
function HN(t) {
    return e => ({
        event_name: e.eventName,
        properties: e.properties,
        timestamp: e.timestamp,
        page_url: e.pageUrl,
        ...t
    })
}
let pd = null;
async function WN(t) {
    if (!Me.sessionContext) {
        if (!pd) {
            const e = QN();
            pd = t.me().then(r => ({
                user_id: r.id,
                session_id: e
            })).catch( () => ({
                user_id: null,
                session_id: e
            }))
        }
        Me.sessionContext = await pd
    }
    return Me.sessionContext
}
function KN() {
    if (typeof window > "u")
        return;
    const e = new URLSearchParams(window.location.search).get(_v);
    if (e == null || !e.length)
        return;
    const r = new URLSearchParams(window.location.search);
    r.delete(_v);
    const i = window.location.pathname + (r.toString() ? "?" + r.toString() : "");
    return window.history.replaceState({}, "", i),
    {
        enabled: e === "true"
    }
}
function QN() {
    if (typeof window > "u")
        return ud();
    try {
        const t = localStorage.getItem(Pv);
        if (!t) {
            const e = ud();
            return localStorage.setItem(Pv, e),
            e
        }
        return t
    } catch {
        return ud()
    }
}
function GN(t) {
    const {serverUrl: e="https://base44.app", appId: r, token: i, serviceToken: a, requiresAuth: u=!1, appBaseUrl: c, options: f, functionsVersion: h, headers: m} = t
      , g = typeof c == "string" ? c : ""
      , y = {
        serverUrl: e,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: r,
        token: i
    };
    let w = null;
    const E = () => (w || (w = jN({
        config: y
    })),
    w)
      , b = {
        ...m,
        "X-App-Id": String(r)
    }
      , k = h ? {
        ...b,
        "Base44-Functions-Version": h
    } : b
      , x = so({
        baseURL: `${e}/api`,
        headers: b,
        token: i,
        onError: f == null ? void 0 : f.onError
    })
      , R = so({
        baseURL: `${e}/api`,
        headers: k,
        token: i,
        interceptResponses: !1,
        onError: f == null ? void 0 : f.onError
    })
      , V = so({
        baseURL: `${e}/api`,
        headers: b,
        token: a,
        onError: f == null ? void 0 : f.onError
    })
      , L = so({
        baseURL: `${e}/api`,
        headers: k,
        token: a,
        interceptResponses: !1
    })
      , j = M2(x, R, r, {
        appBaseUrl: g
    })
      , B = {
        entities: gv({
            axios: x,
            appId: r,
            getSocket: E
        }),
        integrations: yv(x, r),
        auth: j,
        functions: vv(R, r),
        agents: wv({
            axios: x,
            getSocket: E,
            appId: r,
            serverUrl: e,
            token: i
        }),
        appLogs: xv(x, r),
        users: B2(x, r),
        analytics: BN({
            axiosClient: x,
            serverUrl: e,
            appId: r,
            userAuthModule: j
        }),
        cleanup: () => {
            B.analytics.cleanup(),
            w && w.disconnect()
        }
    }
      , K = {
        entities: gv({
            axios: V,
            appId: r,
            getSocket: E
        }),
        integrations: yv(V, r),
        sso: I2(V, r, i),
        connectors: F2(V, r),
        functions: vv(L, r),
        agents: wv({
            axios: V,
            getSocket: E,
            appId: r,
            serverUrl: e,
            token: i
        }),
        appLogs: xv(V, r),
        cleanup: () => {
            w && w.disconnect()
        }
    };
    if (typeof window < "u") {
        const M = i || Zf();
        M && B.auth.setToken(M)
    }
    return u && typeof window < "u" && setTimeout(async () => {
        try {
            await B.auth.isAuthenticated() || B.auth.redirectToLogin(window.location.href)
        } catch (M) {
            console.error("Authentication check failed:", M),
            B.auth.redirectToLogin(window.location.href)
        }
    }
    , 0),
    {
        ...B,
        setToken(M) {
            B.auth.setToken(M),
            w && w.updateConfig({
                token: M
            }),
            y.token = M
        },
        getConfig() {
            return {
                serverUrl: e,
                appId: r,
                requiresAuth: u
            }
        },
        get asServiceRole() {
            if (!a)
                throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return K
        }
    }
}
const Gx = typeof window > "u"
  , YN = Gx ? {
    localStorage: new Map
} : window
  , po = YN.localStorage
  , XN = t => t.replace(/([A-Z])/g, "_$1").toLowerCase()
  , Ms = (t, {defaultValue: e=void 0, removeFromUrl: r=!1}={}) => {
    if (Gx)
        return e;
    const i = `base44_${XN(t)}`
      , a = new URLSearchParams(window.location.search)
      , u = a.get(t);
    if (r) {
        a.delete(t);
        const f = `${window.location.pathname}${a.toString() ? `?${a.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, f)
    }
    if (u)
        return po.setItem(i, u),
        u;
    if (e)
        return po.setItem(i, e),
        e;
    const c = po.getItem(i);
    return c || null
}
  , JN = () => (Ms("clear_access_token") === "true" && (po.removeItem("base44_access_token"),
po.removeItem("token")),
{
    appId: Ms("app_id", {
        defaultValue: "69acd9190825add2b8696949"
    }),
    token: Ms("access_token", {
        removeFromUrl: !0
    }),
    fromUrl: Ms("from_url", {
        defaultValue: window.location.href
    }),
    functionsVersion: Ms("functions_version", {
        defaultValue: "prod"
    }),
    appBaseUrl: Ms("app_base_url", {
        defaultValue: void 0
    })
})
  , oo = {
    ...JN()
}
  , {appId: ZN, token: eO, functionsVersion: tO, appBaseUrl: nO} = oo
  , ao = GN({
    appId: ZN,
    token: eO,
    functionsVersion: tO,
    serverUrl: "",
    requiresAuth: !1,
    appBaseUrl: nO
});
function rO({}) {
    var a;
    const e = fx().pathname.substring(1)
      , {data: r, isFetched: i} = pE({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                return {
                    user: await ao.auth.me(),
                    isAuthenticated: !0
                }
            } catch {
                return {
                    user: null,
                    isAuthenticated: !1
                }
            }
        }
    });
    return S.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: S.jsx("div", {
            className: "max-w-md w-full",
            children: S.jsxs("div", {
                className: "text-center space-y-6",
                children: [S.jsxs("div", {
                    className: "space-y-2",
                    children: [S.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), S.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), S.jsxs("div", {
                    className: "space-y-3",
                    children: [S.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), S.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", S.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && r.isAuthenticated && ((a = r.user) == null ? void 0 : a.role) === "admin" && S.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: S.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [S.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: S.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), S.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [S.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), S.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), S.jsx("div", {
                    className: "pt-6",
                    children: S.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [S.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: S.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const Yx = D.createContext()
  , sO = ({children: t}) => {
    const [e,r] = D.useState(null)
      , [i,a] = D.useState(!1)
      , [u,c] = D.useState(!0)
      , [f,h] = D.useState(!0)
      , [m,g] = D.useState(null)
      , [y,w] = D.useState(null);
    D.useEffect( () => {
        E()
    }
    , []);
    const E = async () => {
        var R, V;
        try {
            h(!0),
            g(null);
            const L = so({
                baseURL: "/api/apps/public",
                headers: {
                    "X-App-Id": oo.appId
                },
                token: oo.token,
                interceptResponses: !0
            });
            try {
                const j = await L.get(`/prod/public-settings/by-id/${oo.appId}`);
                w(j),
                oo.token ? await b() : (c(!1),
                a(!1)),
                h(!1)
            } catch (j) {
                if (console.error("App state check failed:", j),
                j.status === 403 && ((V = (R = j.data) == null ? void 0 : R.extra_data) != null && V.reason)) {
                    const B = j.data.extra_data.reason;
                    g(B === "auth_required" ? {
                        type: "auth_required",
                        message: "Authentication required"
                    } : B === "user_not_registered" ? {
                        type: "user_not_registered",
                        message: "User not registered for this app"
                    } : {
                        type: B,
                        message: j.message
                    })
                } else
                    g({
                        type: "unknown",
                        message: j.message || "Failed to load app"
                    });
                h(!1),
                c(!1)
            }
        } catch (L) {
            console.error("Unexpected error:", L),
            g({
                type: "unknown",
                message: L.message || "An unexpected error occurred"
            }),
            h(!1),
            c(!1)
        }
    }
      , b = async () => {
        try {
            c(!0);
            const R = await ao.auth.me();
            r(R),
            a(!0),
            c(!1)
        } catch (R) {
            console.error("User auth check failed:", R),
            c(!1),
            a(!1),
            (R.status === 401 || R.status === 403) && g({
                type: "auth_required",
                message: "Authentication required"
            })
        }
    }
      , k = (R=!0) => {
        r(null),
        a(!1),
        R ? ao.auth.logout(window.location.href) : ao.auth.logout()
    }
      , x = () => {
        ao.auth.redirectToLogin(window.location.href)
    }
    ;
    return S.jsx(Yx.Provider, {
        value: {
            user: e,
            isAuthenticated: i,
            isLoadingAuth: u,
            isLoadingPublicSettings: f,
            authError: m,
            appPublicSettings: y,
            logout: k,
            navigateToLogin: x,
            checkAppState: E
        },
        children: t
    })
}
  , iO = () => {
    const t = D.useContext(Yx);
    if (!t)
        throw new Error("useAuth must be used within an AuthProvider");
    return t
}
  , oO = () => S.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
    children: S.jsx("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: S.jsxs("div", {
            className: "text-center",
            children: [S.jsx("div", {
                className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                children: S.jsx("svg", {
                    className: "w-8 h-8 text-orange-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: S.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), S.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Access Restricted"
            }), S.jsx("p", {
                className: "text-slate-600 mb-8",
                children: "You are not registered to use this application. Please contact the app administrator to request access."
            }), S.jsxs("div", {
                className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                children: [S.jsx("p", {
                    children: "If you believe this is an error, you can:"
                }), S.jsxs("ul", {
                    className: "list-disc list-inside mt-2 space-y-1",
                    children: [S.jsx("li", {
                        children: "Verify you are logged in with the correct account"
                    }), S.jsx("li", {
                        children: "Contact the app administrator for access"
                    }), S.jsx("li", {
                        children: "Try logging out and back in again"
                    })]
                })]
            })]
        })
    })
})
  , {Pages: Xx, Layout: Ov, mainPage: aO} = lR
  , Jx = aO
  , lO = Xx[Jx]
  , jv = ({children: t, currentPageName: e}) => Ov ? S.jsx(Ov, {
    currentPageName: e,
    children: t
}) : S.jsx(S.Fragment, {
    children: t
})
  , uO = () => {
    const {isLoadingAuth: t, isLoadingPublicSettings: e, authError: r, navigateToLogin: i} = iO();
    if (e || t)
        return S.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: S.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
    if (r) {
        if (r.type === "user_not_registered")
            return S.jsx(oO, {});
        if (r.type === "auth_required")
            return i(),
            null
    }
    return S.jsxs(WR, {
        children: [S.jsx(cl, {
            path: "/",
            element: S.jsx(jv, {
                currentPageName: Jx,
                children: S.jsx(lO, {})
            })
        }), Object.entries(Xx).map( ([a,u]) => S.jsx(cl, {
            path: `/${a}`,
            element: S.jsx(jv, {
                currentPageName: a,
                children: S.jsx(u, {})
            })
        }, a)), S.jsx(cl, {
            path: "*",
            element: S.jsx(rO, {})
        })]
    })
}
;
function cO() {
    return S.jsx(sO, {
        children: S.jsxs(nE, {
            client: mE,
            children: [S.jsx(GR, {
                children: S.jsx(uO, {})
            }), S.jsx(Ak, {})]
        })
    })
}
ob.createRoot(document.getElementById("root")).render(S.jsx(cO, {}));
