import ee, { forwardRef as Me, createElement as qr } from "react";
import jr, { css as Jr } from "styled-components";
const Ie = `*,*:before,*:after{box-sizing:border-box}*{margin:0}html,body{height:100%}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}
`, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie
}, Symbol.toStringTag, { value: "Module" }));
var Sr = {}, ze = {
  get exports() {
    return Sr;
  },
  set exports(e) {
    Sr = e;
  }
}, or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function Ge() {
  if (Hr)
    return or;
  Hr = 1;
  var e = ee, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, f, v) {
    var b, m = {}, k = null, _ = null;
    v !== void 0 && (k = "" + v), f.key !== void 0 && (k = "" + f.key), f.ref !== void 0 && (_ = f.ref);
    for (b in f)
      n.call(f, b) && !u.hasOwnProperty(b) && (m[b] = f[b]);
    if (l && l.defaultProps)
      for (b in f = l.defaultProps, f)
        m[b] === void 0 && (m[b] = f[b]);
    return { $$typeof: t, type: l, key: k, ref: _, props: m, _owner: c.current };
  }
  return or.Fragment = a, or.jsx = s, or.jsxs = s, or;
}
var nr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function $e() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ee, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), A = Symbol.iterator, S = "@@iterator";
    function M(r) {
      if (r === null || typeof r != "object")
        return null;
      var o = A && r[A] || r[S];
      return typeof o == "function" ? o : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(r) {
      {
        for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
          i[d - 1] = arguments[d];
        sr("error", r, i);
      }
    }
    function sr(r, o, i) {
      {
        var d = T.ReactDebugCurrentFrame, h = d.getStackAddendum();
        h !== "" && (o += "%s", i = i.concat([h]));
        var y = i.map(function(g) {
          return String(g);
        });
        y.unshift("Warning: " + o), Function.prototype.apply.call(console[r], console, y);
      }
    }
    var K = !1, lr = !1, cr = !1, ur = !1, dr = !1, q;
    q = Symbol.for("react.module.reference");
    function Z(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === n || r === u || dr || r === c || r === v || r === b || ur || r === _ || K || lr || cr || typeof r == "object" && r !== null && (r.$$typeof === k || r.$$typeof === m || r.$$typeof === s || r.$$typeof === l || r.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === q || r.getModuleId !== void 0));
    }
    function fr(r, o, i) {
      var d = r.displayName;
      if (d)
        return d;
      var h = o.displayName || o.name || "";
      return h !== "" ? i + "(" + h + ")" : i;
    }
    function Q(r) {
      return r.displayName || "Context";
    }
    function O(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case v:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case l:
            var o = r;
            return Q(o) + ".Consumer";
          case s:
            var i = r;
            return Q(i._context) + ".Provider";
          case f:
            return fr(r, r.render, "ForwardRef");
          case m:
            var d = r.displayName || null;
            return d !== null ? d : O(r.type) || "Memo";
          case k: {
            var h = r, y = h._payload, g = h._init;
            try {
              return O(g(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, $ = 0, rr, J, L, er, N, Y, P;
    function Or() {
    }
    Or.__reactDisabledLog = !0;
    function le() {
      {
        if ($ === 0) {
          rr = console.log, J = console.info, L = console.warn, er = console.error, N = console.group, Y = console.groupCollapsed, P = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Or,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        $++;
      }
    }
    function ce() {
      {
        if ($--, $ === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, r, {
              value: rr
            }),
            info: G({}, r, {
              value: J
            }),
            warn: G({}, r, {
              value: L
            }),
            error: G({}, r, {
              value: er
            }),
            group: G({}, r, {
              value: N
            }),
            groupCollapsed: G({}, r, {
              value: Y
            }),
            groupEnd: G({}, r, {
              value: P
            })
          });
        }
        $ < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yr = T.ReactCurrentDispatcher, xr;
    function pr(r, o, i) {
      {
        if (xr === void 0)
          try {
            throw Error();
          } catch (h) {
            var d = h.stack.trim().match(/\n( *(at )?)/);
            xr = d && d[1] || "";
          }
        return `
` + xr + r;
      }
    }
    var wr = !1, br;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      br = new ue();
    }
    function Mr(r, o) {
      if (!r || wr)
        return "";
      {
        var i = br.get(r);
        if (i !== void 0)
          return i;
      }
      var d;
      wr = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = yr.current, yr.current = null, le();
      try {
        if (o) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (F) {
              d = F;
            }
            Reflect.construct(r, [], g);
          } else {
            try {
              g.call();
            } catch (F) {
              d = F;
            }
            r.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            d = F;
          }
          r();
        }
      } catch (F) {
        if (F && d && typeof F.stack == "string") {
          for (var p = F.stack.split(`
`), j = d.stack.split(`
`), R = p.length - 1, E = j.length - 1; R >= 1 && E >= 0 && p[R] !== j[E]; )
            E--;
          for (; R >= 1 && E >= 0; R--, E--)
            if (p[R] !== j[E]) {
              if (R !== 1 || E !== 1)
                do
                  if (R--, E--, E < 0 || p[R] !== j[E]) {
                    var I = `
` + p[R].replace(" at new ", " at ");
                    return r.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", r.displayName)), typeof r == "function" && br.set(r, I), I;
                  }
                while (R >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        wr = !1, yr.current = y, ce(), Error.prepareStackTrace = h;
      }
      var X = r ? r.displayName || r.name : "", Br = X ? pr(X) : "";
      return typeof r == "function" && br.set(r, Br), Br;
    }
    function de(r, o, i) {
      return Mr(r, !1);
    }
    function fe(r) {
      var o = r.prototype;
      return !!(o && o.isReactComponent);
    }
    function gr(r, o, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Mr(r, fe(r));
      if (typeof r == "string")
        return pr(r);
      switch (r) {
        case v:
          return pr("Suspense");
        case b:
          return pr("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case f:
            return de(r.render);
          case m:
            return gr(r.type, o, i);
          case k: {
            var d = r, h = d._payload, y = d._init;
            try {
              return gr(y(h), o, i);
            } catch {
            }
          }
        }
      return "";
    }
    var vr = Object.prototype.hasOwnProperty, Ir = {}, zr = T.ReactDebugCurrentFrame;
    function mr(r) {
      if (r) {
        var o = r._owner, i = gr(r.type, r._source, o ? o.type : null);
        zr.setExtraStackFrame(i);
      } else
        zr.setExtraStackFrame(null);
    }
    function pe(r, o, i, d, h) {
      {
        var y = Function.call.bind(vr);
        for (var g in r)
          if (y(r, g)) {
            var p = void 0;
            try {
              if (typeof r[g] != "function") {
                var j = Error((d || "React class") + ": " + i + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              p = r[g](o, g, d, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              p = R;
            }
            p && !(p instanceof Error) && (mr(h), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", i, g, typeof p), mr(null)), p instanceof Error && !(p.message in Ir) && (Ir[p.message] = !0, mr(h), x("Failed %s type: %s", i, p.message), mr(null));
          }
      }
    }
    var be = Array.isArray;
    function kr(r) {
      return be(r);
    }
    function ge(r) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, i = o && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function ve(r) {
      try {
        return Gr(r), !1;
      } catch {
        return !0;
      }
    }
    function Gr(r) {
      return "" + r;
    }
    function $r(r) {
      if (ve(r))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ge(r)), Gr(r);
    }
    var tr = T.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fr, Wr, Rr;
    Rr = {};
    function he(r) {
      if (vr.call(r, "ref")) {
        var o = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function ye(r) {
      if (vr.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function xe(r, o) {
      if (typeof r.ref == "string" && tr.current && o && tr.current.stateNode !== o) {
        var i = O(tr.current.type);
        Rr[i] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(tr.current.type), r.ref), Rr[i] = !0);
      }
    }
    function we(r, o) {
      {
        var i = function() {
          Fr || (Fr = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function ke(r, o) {
      {
        var i = function() {
          Wr || (Wr = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Re = function(r, o, i, d, h, y, g) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: o,
        ref: i,
        props: g,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function Ce(r, o, i, d, h) {
      {
        var y, g = {}, p = null, j = null;
        i !== void 0 && ($r(i), p = "" + i), ye(o) && ($r(o.key), p = "" + o.key), he(o) && (j = o.ref, xe(o, h));
        for (y in o)
          vr.call(o, y) && !me.hasOwnProperty(y) && (g[y] = o[y]);
        if (r && r.defaultProps) {
          var R = r.defaultProps;
          for (y in R)
            g[y] === void 0 && (g[y] = R[y]);
        }
        if (p || j) {
          var E = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          p && we(g, E), j && ke(g, E);
        }
        return Re(r, p, j, h, d, tr.current, g);
      }
    }
    var Cr = T.ReactCurrentOwner, Lr = T.ReactDebugCurrentFrame;
    function H(r) {
      if (r) {
        var o = r._owner, i = gr(r.type, r._source, o ? o.type : null);
        Lr.setExtraStackFrame(i);
      } else
        Lr.setExtraStackFrame(null);
    }
    var Er;
    Er = !1;
    function _r(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Nr() {
      {
        if (Cr.current) {
          var r = O(Cr.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Ee(r) {
      {
        if (r !== void 0) {
          var o = r.fileName.replace(/^.*[\\\/]/, ""), i = r.lineNumber;
          return `

Check your code at ` + o + ":" + i + ".";
        }
        return "";
      }
    }
    var Dr = {};
    function _e(r) {
      {
        var o = Nr();
        if (!o) {
          var i = typeof r == "string" ? r : r.displayName || r.name;
          i && (o = `

Check the top-level render call using <` + i + ">.");
        }
        return o;
      }
    }
    function Vr(r, o) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = _e(o);
        if (Dr[i])
          return;
        Dr[i] = !0;
        var d = "";
        r && r._owner && r._owner !== Cr.current && (d = " It was passed a child from " + O(r._owner.type) + "."), H(r), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, d), H(null);
      }
    }
    function Yr(r, o) {
      {
        if (typeof r != "object")
          return;
        if (kr(r))
          for (var i = 0; i < r.length; i++) {
            var d = r[i];
            _r(d) && Vr(d, o);
          }
        else if (_r(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var h = M(r);
          if (typeof h == "function" && h !== r.entries)
            for (var y = h.call(r), g; !(g = y.next()).done; )
              _r(g.value) && Vr(g.value, o);
        }
      }
    }
    function Se(r) {
      {
        var o = r.type;
        if (o == null || typeof o == "string")
          return;
        var i;
        if (typeof o == "function")
          i = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === m))
          i = o.propTypes;
        else
          return;
        if (i) {
          var d = O(o);
          pe(i, r.props, "prop", d, r);
        } else if (o.PropTypes !== void 0 && !Er) {
          Er = !0;
          var h = O(o);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Te(r) {
      {
        for (var o = Object.keys(r.props), i = 0; i < o.length; i++) {
          var d = o[i];
          if (d !== "children" && d !== "key") {
            H(r), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), H(null);
            break;
          }
        }
        r.ref !== null && (H(r), x("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    function Ur(r, o, i, d, h, y) {
      {
        var g = Z(r);
        if (!g) {
          var p = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = Ee(h);
          j ? p += j : p += Nr();
          var R;
          r === null ? R = "null" : kr(r) ? R = "array" : r !== void 0 && r.$$typeof === t ? (R = "<" + (O(r.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : R = typeof r, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, p);
        }
        var E = Ce(r, o, i, h, y);
        if (E == null)
          return E;
        if (g) {
          var I = o.children;
          if (I !== void 0)
            if (d)
              if (kr(I)) {
                for (var X = 0; X < I.length; X++)
                  Yr(I[X], r);
                Object.freeze && Object.freeze(I);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yr(I, r);
        }
        return r === n ? Te(E) : Se(E), E;
      }
    }
    function Pe(r, o, i) {
      return Ur(r, o, i, !0);
    }
    function je(r, o, i) {
      return Ur(r, o, i, !1);
    }
    var Ae = je, Oe = Pe;
    nr.Fragment = n, nr.jsx = Ae, nr.jsxs = Oe;
  }()), nr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ge() : e.exports = $e();
})(ze);
const Tr = Sr.jsx;
function te(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (a = te(e[t])) && (n && (n += " "), n += a);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Fe() {
  for (var e, t, a = 0, n = ""; a < arguments.length; )
    (e = arguments[a++]) && (t = te(e)) && (n && (n += " "), n += t);
  return n;
}
function We() {
  for (var e = 0, t, a, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (a = oe(t)) && (n && (n += " "), n += a);
  return n;
}
function oe(e) {
  if (typeof e == "string")
    return e;
  for (var t, a = "", n = 0; n < e.length; n++)
    e[n] && (t = oe(e[n])) && (a && (a += " "), a += t);
  return a;
}
var Ar = "-";
function Le(e) {
  var t = De(e), a = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, c = n === void 0 ? {} : n;
  function u(l) {
    var f = l.split(Ar);
    return f[0] === "" && f.length !== 1 && f.shift(), ne(f, t) || Ne(l);
  }
  function s(l, f) {
    var v = a[l] || [];
    return f && c[l] ? [].concat(v, c[l]) : v;
  }
  return {
    getClassGroupId: u,
    getConflictingClassGroupIds: s
  };
}
function ne(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var a = e[0], n = t.nextPart.get(a), c = n ? ne(e.slice(1), n) : void 0;
  if (c)
    return c;
  if (t.validators.length !== 0) {
    var u = e.join(Ar);
    return (s = t.validators.find(function(l) {
      var f = l.validator;
      return f(u);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Kr = /^\[(.+)\]$/;
function Ne(e) {
  if (Kr.test(e)) {
    var t = Kr.exec(e)[1], a = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}
function De(e) {
  var t = e.theme, a = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, c = Ye(Object.entries(e.classGroups), a);
  return c.forEach(function(u) {
    var s = u[0], l = u[1];
    Pr(l, n, s, t);
  }), n;
}
function Pr(e, t, a, n) {
  e.forEach(function(c) {
    if (typeof c == "string") {
      var u = c === "" ? t : Zr(t, c);
      u.classGroupId = a;
      return;
    }
    if (typeof c == "function") {
      if (Ve(c)) {
        Pr(c(n), t, a, n);
        return;
      }
      t.validators.push({
        validator: c,
        classGroupId: a
      });
      return;
    }
    Object.entries(c).forEach(function(s) {
      var l = s[0], f = s[1];
      Pr(f, Zr(t, l), a, n);
    });
  });
}
function Zr(e, t) {
  var a = e;
  return t.split(Ar).forEach(function(n) {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}
function Ve(e) {
  return e.isThemeGetter;
}
function Ye(e, t) {
  return t ? e.map(function(a) {
    var n = a[0], c = a[1], u = c.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(l) {
        var f = l[0], v = l[1];
        return [t + f, v];
      })) : s;
    });
    return [n, u];
  }) : e;
}
function Ue(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function c(u, s) {
    a.set(u, s), t++, t > e && (t = 0, n = a, a = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var l = a.get(s);
      if (l !== void 0)
        return l;
      if ((l = n.get(s)) !== void 0)
        return c(s, l), l;
    },
    set: function(s, l) {
      a.has(s) ? a.set(s, l) : c(s, l);
    }
  };
}
var ae = "!";
function Be(e) {
  var t = e.separator || ":", a = t.length === 1, n = t[0], c = t.length;
  return function(s) {
    for (var l = [], f = 0, v = 0, b, m = 0; m < s.length; m++) {
      var k = s[m];
      if (f === 0) {
        if (k === n && (a || s.slice(m, m + c) === t)) {
          l.push(s.slice(v, m)), v = m + c;
          continue;
        }
        if (k === "/") {
          b = m;
          continue;
        }
      }
      k === "[" ? f++ : k === "]" && f--;
    }
    var _ = l.length === 0 ? s : s.substring(v), A = _.startsWith(ae), S = A ? _.substring(1) : _, M = b && b > v ? b - v : void 0;
    return {
      modifiers: l,
      hasImportantModifier: A,
      baseClassName: S,
      maybePostfixModifierPosition: M
    };
  };
}
function qe(e) {
  if (e.length <= 1)
    return e;
  var t = [], a = [];
  return e.forEach(function(n) {
    var c = n[0] === "[";
    c ? (t.push.apply(t, a.sort().concat([n])), a = []) : a.push(n);
  }), t.push.apply(t, a.sort()), t;
}
function Je(e) {
  return {
    cache: Ue(e.cacheSize),
    splitModifiers: Be(e),
    ...Le(e)
  };
}
var He = /\s+/;
function Xe(e, t) {
  var a = t.splitModifiers, n = t.getClassGroupId, c = t.getConflictingClassGroupIds, u = /* @__PURE__ */ new Set();
  return e.trim().split(He).map(function(s) {
    var l = a(s), f = l.modifiers, v = l.hasImportantModifier, b = l.baseClassName, m = l.maybePostfixModifierPosition, k = n(m ? b.substring(0, m) : b), _ = !!m;
    if (!k) {
      if (!m)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (k = n(b), !k)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      _ = !1;
    }
    var A = qe(f).join(":"), S = v ? A + ae : A;
    return {
      isTailwindClass: !0,
      modifierId: S,
      classGroupId: k,
      originalClassName: s,
      hasPostfixModifier: _
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var l = s.modifierId, f = s.classGroupId, v = s.hasPostfixModifier, b = l + f;
    return u.has(b) ? !1 : (u.add(b), c(f, v).forEach(function(m) {
      return u.add(l + m);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function Ke() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  var n, c, u, s = l;
  function l(v) {
    var b = t[0], m = t.slice(1), k = m.reduce(function(_, A) {
      return A(_);
    }, b());
    return n = Je(k), c = n.cache.get, u = n.cache.set, s = f, f(v);
  }
  function f(v) {
    var b = c(v);
    if (b)
      return b;
    var m = Xe(v, n);
    return u(v, m), m;
  }
  return function() {
    return s(We.apply(null, arguments));
  };
}
function w(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ie = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ze = /^\d+\/\d+$/, Qe = /* @__PURE__ */ new Set(["px", "full", "screen"]), rt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, et = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/, tt = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function z(e) {
  return U(e) || Qe.has(e) || Ze.test(e) || V(e);
}
function V(e) {
  return B(e, "length", lt);
}
function ot(e) {
  return B(e, "size", se);
}
function nt(e) {
  return B(e, "position", se);
}
function at(e) {
  return B(e, "url", ct);
}
function hr(e) {
  return B(e, "number", U);
}
function U(e) {
  return !Number.isNaN(Number(e));
}
function it(e) {
  return e.endsWith("%") && U(e.slice(0, -1));
}
function ar(e) {
  return Qr(e) || B(e, "number", Qr);
}
function C(e) {
  return ie.test(e);
}
function ir() {
  return !0;
}
function D(e) {
  return rt.test(e);
}
function st(e) {
  return B(e, "", ut);
}
function B(e, t, a) {
  var n = ie.exec(e);
  return n ? n[1] ? n[1] === t : a(n[2]) : !1;
}
function lt(e) {
  return et.test(e);
}
function se() {
  return !1;
}
function ct(e) {
  return e.startsWith("url(");
}
function Qr(e) {
  return Number.isInteger(Number(e));
}
function ut(e) {
  return tt.test(e);
}
function dt() {
  var e = w("colors"), t = w("spacing"), a = w("blur"), n = w("brightness"), c = w("borderColor"), u = w("borderRadius"), s = w("borderSpacing"), l = w("borderWidth"), f = w("contrast"), v = w("grayscale"), b = w("hueRotate"), m = w("invert"), k = w("gap"), _ = w("gradientColorStops"), A = w("gradientColorStopPositions"), S = w("inset"), M = w("margin"), T = w("opacity"), x = w("padding"), sr = w("saturate"), K = w("scale"), lr = w("sepia"), cr = w("skew"), ur = w("space"), dr = w("translate"), q = function() {
    return ["auto", "contain", "none"];
  }, Z = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, fr = function() {
    return ["auto", t];
  }, Q = function() {
    return ["", z];
  }, O = function() {
    return ["auto", U, C];
  }, G = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, $ = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, rr = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, L = function() {
    return ["", "0", C];
  }, er = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N = function() {
    return [U, hr];
  }, Y = function() {
    return [U, C];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ir],
      spacing: [z],
      blur: ["none", "", D, V],
      brightness: N(),
      borderColor: [e],
      borderRadius: ["none", "", "full", D, V],
      borderSpacing: [t],
      borderWidth: Q(),
      contrast: N(),
      grayscale: L(),
      hueRotate: Y(),
      invert: L(),
      gap: [t],
      gradientColorStops: [e],
      gradientColorStopPositions: [it, V],
      inset: fr(),
      margin: fr(),
      opacity: N(),
      padding: [t],
      saturate: N(),
      scale: N(),
      sepia: L(),
      skew: Y(),
      space: [t],
      translate: [t]
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", C]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [D]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": er()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": er()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(G(), [C])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": q()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ar]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [t]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", C]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ar]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ir]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: [ar]
        }, C]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ir]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ar]
        }, C]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", C]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", C]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [k]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [k]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [k]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(J())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(J(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(J(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [M]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [M]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [M]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [M]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [M]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [M]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [M]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [M]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [M]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ur]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [ur]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", z]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [D]
        }, D, V]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", z]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", D, V]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", hr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ir]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", U, hr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", z]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", C]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", C]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [T]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [T]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat($(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", z]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", z]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: [t]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", C]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [T]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(G(), [nt])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ot]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, at]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [A]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [A]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [_]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [_]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [u]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [u]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [u]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [u]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [u]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [u]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [u]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [u]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [u]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [u]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [u]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [u]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [u]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [u]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [u]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [T]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat($(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [T]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: $()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat($())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [z]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Q()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [T]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [z]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", D, st]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ir]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [T]
      }],
      /**
       * Mix Beldn Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": rr()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": rr()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [a]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", D, C]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [v]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [sr]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [lr]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [a]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [v]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [T]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [sr]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [lr]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", C]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Y()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Y()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", C]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [K]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [K]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [K]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ar, C]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [dr]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [dr]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [cr]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [cr]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", C]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", C]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": [t]
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": [t]
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": [t]
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": [t]
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": [t]
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": [t]
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": [t]
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": [t]
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": [t]
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": [t]
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": [t]
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": [t]
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": [t]
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": [t]
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": [t]
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": [t]
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": [t]
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": [t]
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", C]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [z, hr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var ft = /* @__PURE__ */ Ke(dt);
function At(...e) {
  return ft(Fe(e));
}
function pt(e, t, a) {
  const n = t[e];
  return n ? (n.style += a || "", Jr`
			${n.style}
		`) : Jr``;
}
function Ot({
  children: e,
  variant: t = "primary",
  disabled: a,
  roundness: n = 5,
  className: c,
  id: u,
  onClick: s
}) {
  const l = pt(t, {
    primary: {
      style: `
				background-color: rgb(15 23 42);
				color: white;

				&:hover {
					background-color: rgb(51 65 85);
					color: rgb(241 245 249);
				}
			`
    },
    ghost: {
      style: `
				background-color: transparent;
				border: 1px solid rgb(226 232 240);
				color: rgb(15 23 42);

				&:hover {
					background-color: rgb(241 245 249);
				}
			`
    },
    danger: {
      style: `
				background-color: rgb(255 77 79);
				color: white;

				&:hover {
					background-color: rgb(255 120 117);
				}

				&:focus {
					outline: 2px solid rgb(255 77 79);
					outline-offset: 2px;
					box-shadow: 0 0 0 2px transparent;
				}
			`
    }
  });
  return /* @__PURE__ */ Tr(
    bt,
    {
      onClick: s,
      id: u,
      roundness: n,
      className: c,
      variant: l,
      disabled: a,
      children: e
    }
  );
}
const bt = jr.button`
	padding: 0 2rem;
	border: none;
	border-radius: ${(e) => e.roundness === "pill" ? 9999 : e.roundness}px;
	font-size: 0.875rem;
	font-weight: 500;
	min-height: 2.75rem;
	transition: background-color 0.2s ease;

	&:focus {
		outline: 2px solid rgb(148 163 184);
		outline-offset: 2px;
		box-shadow: 0 0 0 2px transparent;
	}

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		cursor: not-allowed;
		background-color: rgb(0 0 0 / 0.04);
		color: rgb(0 0 0 / 0.25);
		border: 1px solid #d9d9d9;

		&:hover {
			background-color: rgb(0 0 0 / 0.04);
		}
	}

	${(e) => e.variant};
`, re = {
  xs: 440,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  max: 1440
};
function Mt({ children: e }) {
  return /* @__PURE__ */ Tr(gt, { children: /* @__PURE__ */ Tr(vt, { children: e }) });
}
const gt = jr.header`
	position: sticky;
	top: 0;

	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-right: 1.5rem;
	padding-left: 1.5rem;

	@media (min-width: ${re.max}px) {
		max-width: ${re.max}px;
	}
`, vt = jr.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 4rem;

	border-bottom: 1px solid rgb(226 232 240);
`;
var mt = {
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
const ht = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), W = (e, t) => {
  const a = Me(
    ({ color: n = "currentColor", size: c = 24, strokeWidth: u = 2, children: s, ...l }, f) => qr(
      "svg",
      {
        ref: f,
        ...mt,
        width: c,
        height: c,
        stroke: n,
        strokeWidth: u,
        className: `lucide lucide-${ht(e)}`,
        ...l
      },
      [
        ...t.map(([v, b]) => qr(v, b)),
        ...(Array.isArray(s) ? s : [s]) || []
      ]
    )
  );
  return a.displayName = `${e}`, a;
}, yt = W("ArrowLeft", [
  ["line", { x1: "19", x2: "5", y1: "12", y2: "12", key: "9fu2vq" }],
  ["polyline", { points: "12 19 5 12 12 5", key: "1ksm0z" }]
]), xt = W("ArrowRight", [
  ["line", { x1: "5", x2: "19", y1: "12", y2: "12", key: "13b5wn" }],
  ["polyline", { points: "12 5 19 12 12 19", key: "sfr3i6" }]
]), wt = W("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), kt = W("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]), Rt = W("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]), Ct = W("MoreHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]), Et = W("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]), _t = W("Slash", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "4.93", x2: "19.07", y1: "4.93", y2: "19.07", key: "1thnyu" }]
]), St = W("X", [
  ["line", { x1: "18", x2: "6", y1: "6", y2: "18", key: "15jfxm" }],
  ["line", { x1: "6", x2: "18", y1: "6", y2: "18", key: "d1lma3" }]
]), It = {
  github: Rt,
  arrowLeft: yt,
  arrowRight: xt,
  slash: _t,
  check: wt,
  moreVertical: Et,
  moreHorizontal: Ct,
  code: kt,
  cross: St
};
export {
  Ot as Button,
  It as Icons,
  Mt as Navbar,
  re as breakpoints,
  At as cn,
  jt as cssReset,
  pt as variants
};
//# sourceMappingURL=vallium.es.js.map
