/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function e(t) {
            return null != t && t === t.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
    function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");
        if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t);
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                w.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || g(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (n = a[t]),
                            a !== (r = e[t]) &&
                                (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && w.isPlainObject(n) ? n : {}), (a[t] = w.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        w.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e) {
                m(e);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (C(e)) {
                    for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(T, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    s = [];
                if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return a.apply([], s);
            },
            guid: 1,
            support: h,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    var E = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            re = function () {
                p();
            },
            ie = me(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((A = H.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: A.length
                    ? function (e, t) {
                          q.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)) {
                if (11 !== T && (f = J.exec(e)))
                    if ((o = f[1])) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) (m = t), (v = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? (c = c.replace(te, ne)) : t.setAttribute("id", (c = b)), (s = (h = a(e)).length);
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)), r;
                        } catch (e) {
                        } finally {
                            c === b && t.removeAttribute("id");
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i);
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            }
            return t;
        }
        function se(e) {
            return (e[b] = !0), e;
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function de(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function he(e) {
            return se(function (t) {
                return (
                    (t = +t),
                    se(function (n, r) {
                        var i,
                            o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        (n = oe.support = {}),
            (o = oe.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (p = oe.setDocument = function (e) {
                var t,
                    i,
                    a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement
                    ? ((d = a),
                      (h = d.documentElement),
                      (g = !o(d)),
                      w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                      (n.attributes = ue(function (e) {
                          return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (n.getElementsByTagName = ue(function (e) {
                          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
                      (n.getById = ue(function (e) {
                          return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                      })),
                      n.getById
                          ? ((r.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }),
                            (r.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && g) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : [];
                                }
                            }))
                          : ((r.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            }),
                            (r.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && g) {
                                    var n,
                                        r,
                                        i,
                                        o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        (i = t.getElementsByName(e)), (r = 0);
                                        while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    }
                                    return [];
                                }
                            })),
                      (r.find.TAG = n.getElementsByTagName
                          ? function (e, t) {
                                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                            }
                          : function (e, t) {
                                var n,
                                    r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                    return r;
                                }
                                return o;
                            }),
                      (r.find.CLASS =
                          n.getElementsByClassName &&
                          function (e, t) {
                              if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
                          }),
                      (v = []),
                      (y = []),
                      (n.qsa = Q.test(d.querySelectorAll)) &&
                          (ue(function (e) {
                              (h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                                  e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                                  e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                                  e.querySelectorAll(":checked").length || y.push(":checked"),
                                  e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
                          }),
                          ue(function (e) {
                              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var t = d.createElement("input");
                              t.setAttribute("type", "hidden"),
                                  e.appendChild(t).setAttribute("name", "D"),
                                  e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                                  2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                  (h.appendChild(e).disabled = !0),
                                  2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                  e.querySelectorAll("*,:x"),
                                  y.push(",.*:");
                          })),
                      (n.matchesSelector = Q.test((m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                          ue(function (e) {
                              (n.disconnectedMatch = m.call(e, "*")), m.call(e, "[s!='']:x"), v.push("!=", W);
                          }),
                      (y = y.length && new RegExp(y.join("|"))),
                      (v = v.length && new RegExp(v.join("|"))),
                      (t = Q.test(h.compareDocumentPosition)),
                      (x =
                          t || Q.test(h.contains)
                              ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                }
                              : function (e, t) {
                                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                    return !1;
                                }),
                      (D = t
                          ? function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    r ||
                                    (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                        ? e === d || (e.ownerDocument === w && x(w, e))
                                            ? -1
                                            : t === d || (t.ownerDocument === w && x(w, t))
                                            ? 1
                                            : c
                                            ? O(c, e) - O(c, t)
                                            : 0
                                        : 4 & r
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var n,
                                    r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                                if (i === o) return ce(e, t);
                                n = e;
                                while ((n = n.parentNode)) a.unshift(n);
                                n = t;
                                while ((n = n.parentNode)) s.unshift(n);
                                while (a[r] === s[r]) r++;
                                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                            }),
                      d)
                    : d;
            }),
            (oe.matches = function (e, t) {
                return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function (e, t) {
                if (((e.ownerDocument || e) !== d && p(e), (t = t.replace(z, "='$1']")), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))))
                    try {
                        var r = m.call(e, t);
                        if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                    } catch (e) {}
                return oe(t, d, null, [e]).length > 0;
            }),
            (oe.contains = function (e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t);
            }),
            (oe.attr = function (e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }),
            (oe.escape = function (e) {
                return (e + "").replace(te, ne);
            }),
            (oe.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (oe.uniqueSort = function (e) {
                var t,
                    r = [],
                    i = 0,
                    o = 0;
                if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(D), f)) {
                    while ((t = e[o++])) t === e[o] && (i = r.push(o));
                    while (i--) e.splice(r[i], 1);
                }
                return (c = null), e;
            }),
            (i = oe.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                } else while ((t = e[r++])) n += i(t);
                return n;
            }),
            ((r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(Z, ee)), (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return V.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return e.nodeName && e.nodeName.toLowerCase() === t;
                              };
                    },
                    CLASS: function (e) {
                        var t = E[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                E(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var i = oe.attr(r, e);
                            return null == i
                                ? "!=" === t
                                : !t ||
                                      ((i += ""),
                                      "=" === t
                                          ? i === n
                                          : "!=" === t
                                          ? i !== n
                                          : "^=" === t
                                          ? n && 0 === i.indexOf(n)
                                          : "*=" === t
                                          ? n && i.indexOf(n) > -1
                                          : "$=" === t
                                          ? n && i.slice(-n.length) === n
                                          : "~=" === t
                                          ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                                          : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (t, n, u) {
                                  var l,
                                      c,
                                      f,
                                      p,
                                      d,
                                      h,
                                      g = o !== a ? "nextSibling" : "previousSibling",
                                      y = t.parentNode,
                                      v = s && t.nodeName.toLowerCase(),
                                      m = !u && !s,
                                      x = !1;
                                  if (y) {
                                      if (o) {
                                          while (g) {
                                              p = t;
                                              while ((p = p[g])) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                              h = g = "only" === e && !h && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                                          (x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2]), (p = d && y.childNodes[d]);
                                          while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                              if (1 === p.nodeType && ++x && p === t) {
                                                  c[e] = [T, d, x];
                                                  break;
                                              }
                                      } else if ((m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x))
                                          while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                              if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (e, t) {
                        var n,
                            i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[b]
                            ? i(t)
                            : i.length > 1
                            ? ((n = [e, e, "", t]),
                              r.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? se(function (e, n) {
                                        var r,
                                            o = i(e, t),
                                            a = o.length;
                                        while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                                    })
                                  : function (e) {
                                        return i(e, 0, n);
                                    })
                            : i;
                    },
                },
                pseudos: {
                    not: se(function (e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[b]
                            ? se(function (e, t, n, i) {
                                  var o,
                                      a = r(e, null, i, []),
                                      s = e.length;
                                  while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                              })
                            : function (e, i, o) {
                                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                              };
                    }),
                    has: se(function (e) {
                        return function (t) {
                            return oe(e, t).length > 0;
                        };
                    }),
                    contains: se(function (e) {
                        return (
                            (e = e.replace(Z, ee)),
                            function (t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: se(function (e) {
                        return (
                            U.test(e || "") || oe.error("unsupported lang: " + e),
                            (e = e.replace(Z, ee).toLowerCase()),
                            function (t) {
                                var n;
                                do {
                                    if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === h;
                    },
                    focus: function (e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                        return Y.test(e.nodeName);
                    },
                    input: function (e) {
                        return G.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: he(function () {
                        return [0];
                    }),
                    last: he(function (e, t) {
                        return [t - 1];
                    }),
                    eq: he(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: he(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: he(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                        return e;
                    }),
                    gt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = r.pseudos.eq);
        for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
        function ye() {}
        (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = oe.tokenize = function (e, t) {
                var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                (s = e), (u = []), (l = r.preFilter);
                while (s) {
                    (n && !(i = F.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))), (n = !1), (i = _.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(B, " ") }), (s = s.slice(n.length)));
                    for (a in r.filter) !(i = V[a].exec(s)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
            });
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first
                ? function (t, n, i) {
                      while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
                      return !1;
                  }
                : function (t, n, u) {
                      var l,
                          c,
                          f,
                          p = [T, s];
                      if (u) {
                          while ((t = t[r])) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                      } else
                          while ((t = t[r]))
                              if (1 === t.nodeType || a)
                                  if (((f = t[b] || (t[b] = {})), (c = f[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                  else {
                                      if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                                      if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                                  }
                      return !1;
                  };
        }
        function xe(e) {
            return e.length > 1
                ? function (t, n, r) {
                      var i = e.length;
                      while (i--) if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Te(e, t, n, r, i, o) {
            return (
                r && !r[b] && (r = Te(r)),
                i && !i[b] && (i = Te(i, o)),
                se(function (o, a, s, u) {
                    var l,
                        c,
                        f,
                        p = [],
                        d = [],
                        h = a.length,
                        g = o || be(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!o && t) ? g : we(g, p, e, s, u),
                        v = n ? (i || (o ? e : h || r) ? [] : a) : y;
                    if ((n && n(y, v, s, u), r)) {
                        (l = we(v, d)), r(l, [], s, u), (c = l.length);
                        while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                (l = []), (c = v.length);
                                while (c--) (f = v[c]) && l.push((y[c] = f));
                                i(null, (v = []), l, u);
                            }
                            c = v.length;
                            while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
                })
            );
        }
        function Ce(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    a = r.relative[e[0].type],
                    s = a || r.relative[" "],
                    u = a ? 1 : 0,
                    c = me(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    f = me(
                        function (e) {
                            return O(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    p = [
                        function (e, n, r) {
                            var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return (t = null), i;
                        },
                    ];
                u < o;
                u++
            )
                if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce((e = e.slice(i))), i < o && ve(e));
                    }
                    p.push(n);
                }
            return xe(p);
        }
        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f,
                        h,
                        y,
                        v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || (i && r.find.TAG("*", c)),
                        E = (T += null == w ? 1 : Math.random() || 0.1),
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
                            while ((y = e[h++]))
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                }
                            c && (T = E);
                        }
                        n && ((f = !y && f) && v--, o && x.push(f));
                    }
                    if (((v += m), n && m !== v)) {
                        h = 0;
                        while ((y = t[h++])) y(x, b, a, s);
                        if (o) {
                            if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b);
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                    }
                    return c && ((T = E), (l = w)), x;
                };
            return n ? se(o) : o;
        }
        return (
            (s = oe.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    t || (t = a(e)), (n = t.length);
                    while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                    (o = S(e, Ee(i, r))).selector = e;
                }
                return o;
            }),
            (u = oe.select = function (e, t, n, i) {
                var o,
                    u,
                    l,
                    c,
                    f,
                    p = "function" == typeof e && e,
                    d = !i && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                    if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                    }
                    o = V.needsContext.test(e) ? 0 : u.length;
                    while (o--) {
                        if (((l = u[o]), r.relative[(c = l.type)])) break;
                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), (K.test(u[0].type) && ge(t.parentNode)) || t))) {
                            if ((u.splice(o, 1), !(e = i.length && ve(u)))) return L.apply(n, i), n;
                            break;
                        }
                    }
                }
                return (p || s(e, d))(i, t, !g, n, !t || (K.test(e) && ge(t.parentNode)) || t), n;
            }),
            (n.sortStable = b.split("").sort(D).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ue(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                le("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                ue(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                le("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                le(P, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            oe
        );
    })(e);
    (w.find = E), (w.expr = E.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = E.uniqueSort), (w.text = E.getText), (w.isXMLDoc = E.isXML), (w.contains = E.contains), (w.escapeSelector = E.escape);
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t)
            ? w.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? w.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? w.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
              })
            : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? w.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function (e) {
                return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
            },
        });
    var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
    }).prototype = w.fn),
        (q = w(r));
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    w.each(
        {
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
                return k(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
                return k(e, "parentNode", n);
            },
            next: function (e) {
                return P(e, "nextSibling");
            },
            prev: function (e) {
                return P(e, "previousSibling");
            },
            nextAll: function (e) {
                return k(e, "nextSibling");
            },
            prevAll: function (e) {
                return k(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
                return k(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
                return k(e, "previousSibling", n);
            },
            siblings: function (e) {
                return S((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
                return S(e.firstChild);
            },
            contents: function (e) {
                return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
            },
        },
        function (e, t) {
            w.fn[e] = function (n, r) {
                var i = w.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
            };
        }
    );
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return (
            w.each(e.match(M) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
                }
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
                add: function () {
                    return (
                        o &&
                            (n && !t && ((s = o.length - 1), a.push(n)),
                            (function t(n) {
                                w.each(n, function (n, r) {
                                    g(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                                });
                            })(arguments),
                            n && !t && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            var n;
                            while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || u()), this;
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return l;
    };
    function I(e) {
        return e;
    }
    function W(e) {
        throw e;
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g((i = e.promise)) ? i.call(e).done(t).fail(n) : e && g((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r;
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                        return i.then(null, e);
                    },
                    pipe: function () {
                        var e = arguments;
                        return w
                            .Deferred(function (t) {
                                w.each(n, function (n, r) {
                                    var i = g(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                    });
                                }),
                                    (e = null);
                            })
                            .promise();
                    },
                    then: function (t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            (l = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                g(l)
                                                    ? i
                                                        ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                                                        : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith)))
                                                    : (r !== I && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                                        }
                                    },
                                    c = i
                                        ? l
                                        : function () {
                                              try {
                                                  l();
                                              } catch (e) {
                                                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                                              }
                                          };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                            };
                        }
                        return w
                            .Deferred(function (e) {
                                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                            })
                            .promise();
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i;
                    },
                },
                o = {};
            return (
                w.each(n, function (e, t) {
                    var a = t[2],
                        s = t[5];
                    (i[t[1]] = a.add),
                        s &&
                            a.add(
                                function () {
                                    r = s;
                                },
                                n[3 - e][2].disable,
                                n[3 - e][3].disable,
                                n[0][2].lock,
                                n[0][3].lock
                            ),
                        a.add(t[3].fire),
                        (o[t[0]] = function () {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                        }),
                        (o[t[0] + "With"] = a.fireWith);
                }),
                i.promise(o),
                t && t.call(o, o),
                o
            );
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        (r[e] = this), (i[e] = arguments.length > 1 ? o.call(arguments) : n), --t || a.resolveWith(r, i);
                    };
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise();
        },
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var F = w.Deferred();
    (w.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0), (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
            },
        }),
        (w.ready.then = F.then);
    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
    }
    "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll) ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a);
            } else if (
                void 0 !== r &&
                ((i = !0),
                g(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(w(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        X = /^-ms-/,
        U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase();
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
        this.expando = w.expando + Q.uid++;
    }
    (Q.uid = 1),
        (Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Y(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[G(t)] = n;
                else for (r in t) i[G(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e));
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = te(n);
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return J.access(e, t, n);
        },
        _removeData: function (e, t) {
            J.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        n = a.length;
                        while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = G(r.slice(5))), ne(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          K.set(this, e);
                      })
                    : z(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t) {
                                  if (void 0 !== (n = K.get(o, e))) return n;
                                  if (void 0 !== (n = ne(o, e))) return n;
                              } else
                                  this.each(function () {
                                      K.set(this, e, t);
                                  });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = J.get(e, t)), n && (!r || Array.isArray(n) ? (r = J.access(e, t, w.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = w._queueHooks(e, t),
                    a = function () {
                        w.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    J.get(e, n) ||
                    J.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            J.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = w.queue(this, e, t);
                              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = w.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display"));
        },
        se = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        };
    function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return w.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), w.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var le = {};
    function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || ((t = n.body.appendChild(n.createElement(r))), (i = w.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (le[r] = i), i);
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
                ((n = r.style.display),
                t ? ("none" === n && ((i[o] = J.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0);
        },
        hide: function () {
            return fe(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
    function ye(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))), (s = (de.exec(o) || ["", ""])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]), (c = u[0]);
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (((l = w.contains(o.ownerDocument, o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    !(function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (s in t) De(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = ke;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, i, r, n);
            })
        );
    }
    (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);
            if (y) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && w.find.matchesSelector(be, i),
                    n.guid || (n.guid = w.guid++),
                    (u = y.events) || (u = y.events = {}),
                    (a = y.handle) ||
                        (a = y.handle = function (t) {
                            return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                        }),
                    (l = (t = (t || "").match(M) || [""]).length);
                while (l--)
                    (d = g = (s = Ce.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = w.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = w.event.special[d] || {}),
                            (c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (w.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (((s = Ce.exec(t[l]) || []), (d = g = s[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        (f = w.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) || w.removeEvent(e, d, y.handle), delete u[d]);
                    } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (((t.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, t))) {
                (s = w.event.handlers.call(this, t, l)), (n = 0);
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    (t.currentTarget = o.elem), (r = 0);
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
                            ((t.handleObj = a), (t.data = a.data), void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
                },
                _default: function (e) {
                    return N(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ee : ke),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Te.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            w.event.addProp
        ),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (i && (i === r || w.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (e, t, n, r) {
                return De(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return De(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = ke),
                    this.each(function () {
                        w.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
    }
    function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))) {
                delete a.handle, (a.events = {});
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
            }
            K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
            return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
            });
        if (p && ((i = xe(t, e[0].ownerDocument, !1, e, r)), (o = i.firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) (l = i), f !== d && ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
                    (l = s[f]), he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
        }
        return e;
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if ((t = n[J.expando])) {
                        if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return Ie(this, e, !0);
            },
            remove: function (e) {
                return Ie(this, e);
            },
            text: function (e) {
                return z(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Re(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Re(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return z(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return Re(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            w.fn[e] = function (e) {
                for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), w(i[a])[t](n), s.apply(r, n.get());
                return this.pushStack(r);
            };
        });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Be = new RegExp(oe.join("|"), "i");
    !(function () {
        function t() {
            if (c) {
                (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                (i = "1%" !== t.top),
                    (u = 12 === n(t.marginLeft)),
                    (c.style.right = "60%"),
                    (s = 36 === n(t.right)),
                    (o = 36 === n(t.width)),
                    (c.style.position = "absolute"),
                    (a = 36 === c.offsetWidth || "absolute"),
                    be.removeChild(l),
                    (c = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");
        c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
            w.extend(h, {
                boxSizingReliable: function () {
                    return t(), o;
                },
                pixelBoxStyles: function () {
                    return t(), s;
                },
                pixelPosition: function () {
                    return t(), i;
                },
                reliableMarginLeft: function () {
                    return t(), u;
                },
                scrollboxSize: function () {
                    return t(), a;
                },
            }));
    })();
    function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || $e(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
                !h.pixelBoxStyles() && We.test(a) && Be.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e;
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
                r
                    ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
                    : ((u += w.css(e, "padding" + oe[a], !0, i)), "padding" !== n ? (u += w.css(e, "border" + oe[a] + "Width", !0, i)) : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5))), u;
    }
    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return (
            (a = a && (h.boxSizingReliable() || i === e.style[t])),
            ("auto" === i || (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) && ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
            (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        );
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if ((u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = "number")),
                    null != n &&
                        n === n &&
                        ("number" === o && (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);
            return (
                Xe.test(t) || (t = Je(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Fe(e, t, r)),
                "normal" === i && t in Ve && (i = Ve[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return !ze.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? et(e, t, r)
                            : se(e, Ue, function () {
                                  return et(e, t, r);
                              });
                },
                set: function (e, n, r) {
                    var i,
                        o = $e(e),
                        a = "border-box" === w.css(e, "boxSizing", !1, o),
                        s = r && Ze(e, t, r, a, o);
                    return (
                        a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - 0.5)),
                        s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                        Ke(e, n, s)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Fe(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            se(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                "margin" !== e && (w.cssHooks[e + t].set = Ke);
        }),
        w.fn.extend({
            css: function (e, t) {
                return z(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }
    (w.Tween = tt),
        (tt.prototype = {
            constructor: tt,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = tt.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                    this
                );
            },
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = tt.prototype.init),
        (w.fx.step = {});
    var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }
    function st() {
        return (
            e.setTimeout(function () {
                nt = void 0;
            }),
            (nt = Date.now())
        );
    }
    function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue ||
            (null == (a = w._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                    a.unqueued || s();
                })),
            a.unqueued++,
            p.always(function () {
                p.always(function () {
                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                });
            }));
        for (r in t)
            if (((i = t[r]), it.test(i))) {
                if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0;
                }
                d[r] = (y && y[r]) || w.style(e, r);
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = y && y.display) && (l = J.get(e, "display")),
                "none" === (c = w.css(e, "display")) && (l ? (c = l) : (fe([e], !0), (l = e.style.display || l), (c = w.css(e, "display")), fe([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === w.css(e, "float") &&
                    (u ||
                        (p.done(function () {
                            h.display = l;
                        }),
                        null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                    (h.display = "inline-block"))),
                n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                        (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                    })),
                (u = !1);
            for (r in d)
                u ||
                    (y ? "hidden" in y && (g = y.hidden) : (y = J.access(e, "fxshow", { display: l })),
                    o && (y.hidden = !g),
                    g && fe([e], !0),
                    p.done(function () {
                        g || fe([e]), J.remove(e, "fxshow");
                        for (r in d) w.style(e, r, d[r]);
                    })),
                    (u = lt(g ? y[r] : 0, r, p)),
                    r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (((r = G(n)), (i = t[r]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = w.cssHooks[r]) && "expand" in a)) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                },
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) if ((r = pt.prefilters[o].call(l, e, c, l.opts))) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return (
            w.map(c, lt, l),
            g(l.opts.start) && l.opts.start.call(e, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (w.Animation = w.extend(pt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
        },
        prefilters: [ct],
        prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
            return (
                w.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
                }),
                r
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = w.timers,
                            a = J.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                        for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (!t && n) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = J.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = w.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
            };
        }),
        w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (nt = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            rt || ((rt = !0), at());
        }),
        (w.fx.stop = function () {
            rt = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
            return (
                (t = w.fx ? w.fx.speeds[t] || t : t),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(i);
                    };
                })
            );
        }),
        (function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            (e.type = "checkbox"), (h.checkOn = "" !== e.value), (h.optSelected = t.selected), ((e = r.createElement("input")).value = "t"), (e.type = "radio"), (h.radioValue = "t" === e.value);
        })();
    var dt,
        ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? w.prop(e, t, n)
                        : ((1 === o && w.isXMLDoc(e)) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void w.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = w.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(M);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (dt = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || w.find.attr;
            ht[t] = function (e, t, r) {
                var i,
                    o,
                    a = t.toLowerCase();
                return r || ((o = ht[a]), (ht[a] = i), (i = null != n(e, t, r) ? a : null), (ht[a] = o)), i;
            };
        });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        h.optSelected ||
            (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        });
    function vt(e) {
        return (e.match(M) || []).join(" ");
    }
    function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }
    w.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).addClass(e.call(this, t, mt(this)));
                });
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).removeClass(e.call(this, t, mt(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : g(e)
                ? this.each(function (n) {
                      w(this).toggleClass(e.call(this, n, mt(this), t), t);
                  })
                : this.each(function () {
                      var t, i, o, a;
                      if (r) {
                          (i = 0), (o = w(this)), (a = xt(e));
                          while ((t = a[i++])) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                  });
        },
        hasClass: function (e) {
            var t,
                n,
                r = 0;
            t = " " + e + " ";
            while ((n = this[r++])) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        },
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return (
                        (r = g(e)),
                        this.each(function (n) {
                            var i;
                            1 === this.nodeType &&
                                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                                    ? (i = "")
                                    : "number" == typeof i
                                    ? (i += "")
                                    : Array.isArray(i) &&
                                      (i = w.map(i, function (e) {
                                          return null == e ? "" : e + "";
                                      })),
                                ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                        })
                    );
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : vt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (((t = w(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = w.makeArray(t),
                            a = i.length;
                        while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = w.inArray(w(e).val(), t) > -1);
                },
            }),
                h.checkOn ||
                    (w.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (h.focusin = "onfocusin" in e);
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = h = u = i = i || r),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !wt.test(m + w.event.triggered) &&
                    (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
                    (c = m.indexOf(":") < 0 && "on" + m),
                    (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
                    (t.isTrigger = o ? 2 : 3),
                    (t.namespace = x.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = i),
                    (n = null == n ? [t] : w.makeArray(n, [t])),
                    (d = w.event.special[m] || {}),
                    o || !d.trigger || !1 !== d.trigger.apply(i, n)))
            ) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (u = s);
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    (h = s),
                        (t.type = a > 1 ? l : d.bindType || m),
                        (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                        (p = c && s[c]) && p.apply && Y(s) && ((t.result = p.apply(s, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = m),
                    o ||
                        t.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                        !Y(i) ||
                        (c &&
                            g(i[m]) &&
                            !y(i) &&
                            ((u = i[c]) && (i[c] = null),
                            (w.event.triggered = m),
                            t.isPropagationStopped() && h.addEventListener(m, Tt),
                            i[m](),
                            t.isPropagationStopped() && h.removeEventListener(m, Tt),
                            (w.event.triggered = void 0),
                            u && (i[c] = u))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
        h.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t);
                        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t) - 1;
                        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
                    },
                };
            });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function (t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            });
        else if (n || "object" !== x(t)) r(e, t);
        else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
    }
    (w.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
                    })
                    .map(function (e, t) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? w.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Dt, "\r\n") };
                    })
                    .get();
            },
        });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n)) while ((r = o[i++])) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;
        function a(s) {
            var u;
            return (
                (i[s] = !0),
                w.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
            );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
    }
    function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
    }
    function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break;
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (e) {
                                return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                            }
                }
        return { state: "success", data: t };
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
                            }
                            t = s[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null;
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (b[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else for (t in e) x[t] = [x[t], e[t]];
                        return this;
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this;
                    },
                };
            if (
                (v.promise(E),
                (h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//")),
                (h.type = n.method || n.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
                null == h.crossDomain)
            ) {
                l = r.createElement("a");
                try {
                    (l.href = h.url), (l.href = l.href), (h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if ((h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c)) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Mt.test(h.type)),
                (o = h.url.replace(Lt, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+"))
                    : ((d = h.url.slice(o.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((o = o.replace(Ht, "$1")), (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
                      (h.url = o + d)),
                h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
                ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (((C = "abort"), m.add(h.complete), E.done(h.success), E.fail(h.error), (i = _t(Wt, h, n, E)))) {
                if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c)) return E;
                h.async &&
                    h.timeout > 0 &&
                    (u = e.setTimeout(function () {
                        E.abort("timeout");
                    }, h.timeout));
                try {
                    (c = !1), i.send(b, k);
                } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;
                c ||
                    ((c = !0),
                    u && e.clearTimeout(u),
                    (i = void 0),
                    (a = s || ""),
                    (E.readyState = t > 0 ? 4 : 0),
                    (l = (t >= 200 && t < 300) || 304 === t),
                    r && (b = Xt(h, E, r)),
                    (b = Ut(h, b, E, l)),
                    l
                        ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                          204 === t || "HEAD" === h.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = b.state), (p = b.data), (l = !(d = b.error))))
                        : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                    (E.status = t),
                    (E.statusText = (n || C) + ""),
                    l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                    E.statusCode(x),
                    (x = void 0),
                    f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                    m.fireWith(g, [E, C]),
                    f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
            }
            return E;
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json");
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script");
        },
    }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, r, i) {
                return g(n) && ((i = i || r), (r = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
            };
        }),
        (w._evalUrl = function (e) {
            return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (g(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return g(e)
                    ? this.each(function (t) {
                          w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = w(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();
    (h.cors = !!Gt && "withCredentials" in Gt),
        (h.ajax = Gt = !!Gt),
        w.ajaxTransport(function (t) {
            var n, r;
            if (h.cors || (Gt && !t.crossDomain))
                return {
                    send: function (i, o) {
                        var a,
                            s = t.xhr();
                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                    "abort" === e
                                        ? s.abort()
                                        : "error" === e
                                        ? "number" != typeof s.status
                                            ? o(0, "error")
                                            : o(s.status, s.statusText)
                                        : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = n()),
                            (r = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = r)
                                : (s.onreadystatechange = function () {
                                      4 === s.readyState &&
                                          e.setTimeout(function () {
                                              n && r();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        (t = w("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            r.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                a,
                s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    s ? (t[s] = t[s].replace(Qt, "$1" + i)) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return a || w.error(i + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[i]),
                    (e[i] = function () {
                        a = arguments;
                    }),
                    r.always(function () {
                        void 0 === o ? w(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)), a && g(o) && o(a[0]), (a = o = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = (function () {
            var e = r.implementation.createHTMLDocument("").body;
            return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
        })()),
        (w.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var i, o, a;
            return (
                t || (h.createHTMLDocument ? (((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href), t.head.appendChild(i)) : (t = r)),
                (o = A.exec(e)),
                (a = !n && []),
                o ? [t.createElement(o[1])] : ((o = xe([e], t, a)), a && a.length && w(a).remove(), w.merge([], o.childNodes))
            );
        }),
        (w.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                    w
                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = w.css(e, "position"),
                    f = w(e),
                    p = {};
                "static" === c && (e.style.position = "relative"),
                    (s = f.offset()),
                    (o = w.css(e, "top")),
                    (u = w.css(e, "left")),
                    (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? ((a = (r = f.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    g(t) && (t = t.call(e, n, w.extend({}, s))),
                    null != t.top && (p.top = t.top - s.top + a),
                    null != t.left && (p.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, p) : f.css(p);
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              w.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = this[0];
                if (r) return r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                        while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (i.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                    return e || be;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (r) {
                return z(
                    this,
                    function (e, r, i) {
                        var o;
                        if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
                if (n) return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                w.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(
                        this,
                        function (t, n, i) {
                            var o;
                            return y(t)
                                ? 0 === r.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                : void 0 === i
                                ? w.css(t, n, s)
                                : w.style(t, n, i, s);
                        },
                        t,
                        a ? i : void 0,
                        a
                    );
                };
            });
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            w.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (w.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                return (
                    (r = o.call(arguments, 2)),
                    (i = function () {
                        return e.apply(t || this, r.concat(o.call(arguments)));
                    }),
                    (i.guid = e.guid = e.guid || w.guid++),
                    i
                );
        }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = N),
        (w.isFunction = g),
        (w.isWindow = y),
        (w.camelCase = G),
        (w.type = x),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var Jt = e.jQuery,
        Kt = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
        }),
        t || (e.jQuery = e.$ = w),
        w
    );
});

/**

 * Owl Carousel v2.3.4

 * Copyright 2013-2018 David Deutsch

 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE

 */

!(function (a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
            (this.options = a.extend({}, e.Defaults, c)),
            (this.$element = a(b)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
            (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
            a.each(
                ["onResize", "onThrottledResize"],
                a.proxy(function (b, c) {
                    this._handlers[c] = a.proxy(this[c], this);
                }, this)
            ),
            a.each(
                e.Plugins,
                a.proxy(function (a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                }, this)
            ),
            a.each(
                e.Workers,
                a.proxy(function (b, c) {
                    this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    (e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    }),
        (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (e.Type = { Event: "event", State: "state" }),
        (e.Plugins = {}),
        (e.Workers = [
            {
                filter: ["width", "settings"],
                run: function () {
                    this._width = this.$element.width();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current = this._items && this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    this.$stage.children(".cloned").remove();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this.settings.margin || "",
                        c = !this.settings.autoWidth,
                        d = this.settings.rtl,
                        e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
                    !c && this.$stage.children().css(e), (a.css = e);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                        c = null,
                        d = this._items.length,
                        e = !this.settings.autoWidth,
                        f = [];
                    for (a.items = { merge: !1, width: b }; d--; )
                        (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
                    this._widths = f;
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var b = [],
                        c = this._items,
                        d = this.settings,
                        e = Math.max(2 * d.items, 4),
                        f = 2 * Math.ceil(c.length / 2),
                        g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                        h = "",
                        i = "";
                    for (g /= 2; g > 0; ) b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i), (g -= 1);
                    (this._clones = b), a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                        (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
                    this._coordinates = f;
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var a = this.settings.stagePadding,
                        b = this._coordinates,
                        c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
                    this.$stage.css(c);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this._coordinates.length,
                        c = !this.settings.autoWidth,
                        d = this.$stage.children();
                    if (c && a.items.merge) for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                    else c && ((a.css.width = a.items.width), d.css(a.css));
                },
            },
            {
                filter: ["items"],
                run: function () {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style");
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
                },
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var a,
                        b,
                        c,
                        d,
                        e = this.settings.rtl ? 1 : -1,
                        f = 2 * this.settings.stagePadding,
                        g = this.coordinates(this.current()) + f,
                        h = g + this.width() * e,
                        i = [];
                    for (c = 0, d = this._coordinates.length; c < d; c++)
                        (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                    this.$stage.children(".active").removeClass("active"),
                        this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                        this.$stage.children(".center").removeClass("center"),
                        this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                },
            },
        ]),
        (e.prototype.initializeStage = function () {
            (this.$stage = this.$element.find("." + this.settings.stageClass)),
                this.$stage.length ||
                    (this.$element.addClass(this.options.loadingClass),
                    (this.$stage = a("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
                    this.$element.append(this.$stage.parent()));
        }),
        (e.prototype.initializeItems = function () {
            var b = this.$element.find(".owl-item");
            if (b.length)
                return (
                    (this._items = b.get().map(function (b) {
                        return a(b);
                    })),
                    (this._mergers = this._items.map(function () {
                        return 1;
                    })),
                    void this.refresh()
                );
            this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        }),
        (e.prototype.initialize = function () {
            if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                var a, b, c;
                (a = this.$element.find("img")), (b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d), (c = this.$element.children(b).width()), a.length && c <= 0 && this.preloadAutoWidthImages(a);
            }
            this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
        }),
        (e.prototype.isVisible = function () {
            return !this.settings.checkVisibility || this.$element.is(":visible");
        }),
        (e.prototype.setup = function () {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c
                ? (a.each(c, function (a) {
                      a <= b && a > d && (d = Number(a));
                  }),
                  (e = a.extend({}, this.options, c[d])),
                  "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                  delete e.responsive,
                  e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d)))
                : (e = a.extend({}, this.options)),
                this.trigger("change", { property: { name: "settings", value: e } }),
                (this._breakpoint = d),
                (this.settings = e),
                this.invalidate("settings"),
                this.trigger("changed", { property: { name: "settings", value: this.settings } });
        }),
        (e.prototype.optionsLogic = function () {
            this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", { content: b });
            return (
                c.data ||
                    (c.data = a("<" + this.settings.itemElement + "/>")
                        .addClass(this.options.itemClass)
                        .append(b)),
                this.trigger("prepared", { content: c.data }),
                c.data
            );
        }),
        (e.prototype.update = function () {
            for (
                var b = 0,
                    c = this._pipe.length,
                    d = a.proxy(function (a) {
                        return this[a];
                    }, this._invalidated),
                    e = {};
                b < c;

            )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (e.prototype.width = function (a) {
            switch ((a = a || e.Width.Default)) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin;
            }
        }),
        (e.prototype.refresh = function () {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
        }),
        (e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
        }),
        (e.prototype.onResize = function () {
            return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.isVisible() &&
                (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
            );
        }),
        (e.prototype.registerEventHandlers = function () {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
                !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                    (this.$element.addClass(this.options.dragClass),
                    this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                    this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                        return !1;
                    })),
                this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
        }),
        (e.prototype.onDragStart = function (b) {
            var d = null;
            3 !== b.which &&
                (a.support.transform
                    ? ((d = this.$stage
                          .css("transform")
                          .replace(/.*\(|\)| /g, "")
                          .split(",")),
                      (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
                    : ((d = this.$stage.position()), (d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top })),
                this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = a(b.target)),
                (this._drag.stage.start = d),
                (this._drag.stage.current = d),
                (this._drag.pointer = this.pointer(b)),
                a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                a(c).one(
                    "mousemove.owl.core touchmove.owl.core",
                    a.proxy(function (b) {
                        var d = this.difference(this._drag.pointer, this.pointer(b));
                        a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                    }, this)
                ));
        }),
        (e.prototype.onDragMove = function (a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") &&
                (a.preventDefault(),
                this.settings.loop
                    ? ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b))
                    : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                      (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                      (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                      (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                (this._drag.stage.current = f),
                this.animate(f.x));
        }),
        (e.prototype.onDragEnd = function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
                    (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                    this.invalidate("position"),
                    this.update(),
                    (this._drag.direction = f),
                    (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                        this._drag.target.one("click.owl.core", function () {
                            return !1;
                        })),
                this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
        }),
        (e.prototype.closest = function (b, c) {
            var e = -1,
                f = 30,
                g = this.width(),
                h = this.coordinates();
            return (
                this.settings.freeDrag ||
                    a.each(
                        h,
                        a.proxy(function (a, i) {
                            return (
                                "left" === c && b > i - f && b < i + f
                                    ? (e = a)
                                    : "right" === c && b > i - g - f && b < i - g + f
                                    ? (e = a + 1)
                                    : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a),
                                -1 === e
                            );
                        }, this)
                    ),
                this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? (e = b = this.minimum()) : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
                e
            );
        }),
        (e.prototype.animate = function (b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
                c && (this.enter("animating"), this.trigger("translate")),
                a.support.transform3d && a.support.transition
                    ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                    : c
                    ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))
                    : this.$stage.css({ left: b + "px" });
        }),
        (e.prototype.is = function (a) {
            return this._states.current[a] && this._states.current[a] > 0;
        }),
        (e.prototype.current = function (a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (((a = this.normalize(a)), this._current !== a)) {
                var b = this.trigger("change", { property: { name: "position", value: a } });
                b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
            }
            return this._current;
        }),
        (e.prototype.invalidate = function (b) {
            return (
                "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
                a.map(this._invalidated, function (a, b) {
                    return b;
                })
            );
        }),
        (e.prototype.reset = function (a) {
            (a = this.normalize(a)) !== d && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
        }),
        (e.prototype.normalize = function (a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || c < 1 ? (a = d) : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a;
        }),
        (e.prototype.relative = function (a) {
            return (a -= this._clones.length / 2), this.normalize(a, !0);
        }),
        (e.prototype.maximum = function (a) {
            var b,
                c,
                d,
                e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                if ((b = this._items.length)) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); );
                f = b + 1;
            } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0);
        }),
        (e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2;
        }),
        (e.prototype.items = function (a) {
            return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
        }),
        (e.prototype.mergers = function (a) {
            return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
        }),
        (e.prototype.clones = function (b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function (a) {
                    return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
                };
            return b === d
                ? a.map(this._clones, function (a, b) {
                      return f(b);
                  })
                : a.map(this._clones, function (a, c) {
                      return a === b ? f(c) : null;
                  });
        }),
        (e.prototype.speed = function (a) {
            return a !== d && (this._speed = a), this._speed;
        }),
        (e.prototype.coordinates = function (b) {
            var c,
                e = 1,
                f = b - 1;
            return b === d
                ? a.map(
                      this._coordinates,
                      a.proxy(function (a, b) {
                          return this.coordinates(b);
                      }, this)
                  )
                : (this.settings.center ? (this.settings.rtl && ((e = -1), (f = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e)) : (c = this._coordinates[f] || 0), (c = Math.ceil(c)));
        }),
        (e.prototype.duration = function (a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
        }),
        (e.prototype.to = function (a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (e < 0),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop
                ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h) !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
                : this.settings.rewind
                ? ((i += 1), (a = ((a % i) + i) % i))
                : (a = Math.max(h, Math.min(i, a))),
                this.speed(this.duration(c, a, b)),
                this.current(a),
                this.isVisible() && this.update();
        }),
        (e.prototype.next = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) + 1, a);
        }),
        (e.prototype.prev = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) - 1, a);
        }),
        (e.prototype.onTransitionEnd = function (a) {
            if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated");
        }),
        (e.prototype.viewport = function () {
            var d;
            return (
                this.options.responsiveBaseElement !== b
                    ? (d = a(this.options.responsiveBaseElement).width())
                    : b.innerWidth
                    ? (d = b.innerWidth)
                    : c.documentElement && c.documentElement.clientWidth
                    ? (d = c.documentElement.clientWidth)
                    : console.warn("Can not detect viewport width."),
                d
            );
        }),
        (e.prototype.replace = function (b) {
            this.$stage.empty(),
                (this._items = []),
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                b
                    .filter(function () {
                        return 1 === this.nodeType;
                    })
                    .each(
                        a.proxy(function (a, b) {
                            (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                        }, this)
                    ),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items");
        }),
        (e.prototype.add = function (b, c) {
            var e = this.relative(this._current);
            (c = c === d ? this._items.length : this.normalize(c, !0)),
                (b = b instanceof jQuery ? b : a(b)),
                this.trigger("add", { content: b, position: c }),
                (b = this.prepare(b)),
                0 === this._items.length || c === this._items.length
                    ? (0 === this._items.length && this.$stage.append(b),
                      0 !== this._items.length && this._items[c - 1].after(b),
                      this._items.push(b),
                      this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                    : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", { content: b, position: c });
        }),
        (e.prototype.remove = function (a) {
            (a = this.normalize(a, !0)) !== d &&
                (this.trigger("remove", { content: this._items[a], position: a }),
                this._items[a].remove(),
                this._items.splice(a, 1),
                this._mergers.splice(a, 1),
                this.invalidate("items"),
                this.trigger("removed", { content: null, position: a }));
        }),
        (e.prototype.preloadAutoWidthImages = function (b) {
            b.each(
                a.proxy(function (b, c) {
                    this.enter("pre-loading"),
                        (c = a(c)),
                        a(new Image())
                            .one(
                                "load",
                                a.proxy(function (a) {
                                    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                }, this)
                            )
                            .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
                }, this)
            );
        }),
        (e.prototype.destroy = function () {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.remove(),
                this.$element
                    .removeClass(this.options.refreshClass)
                    .removeClass(this.options.loadingClass)
                    .removeClass(this.options.loadedClass)
                    .removeClass(this.options.rtlClass)
                    .removeClass(this.options.dragClass)
                    .removeClass(this.options.grabClass)
                    .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                    .removeData("owl.carousel");
        }),
        (e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c;
            }
        }),
        (e.prototype.on = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
        }),
        (e.prototype.off = function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
        }),
        (e.prototype.trigger = function (b, c, d, f, g) {
            var h = { item: { count: this._items.length, index: this.current() } },
                i = a.camelCase(
                    a
                        .grep(["on", b, d], function (a) {
                            return a;
                        })
                        .join("-")
                        .toLowerCase()
                ),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
            return (
                this._supress[b] ||
                    (a.each(this._plugins, function (a, b) {
                        b.onTrigger && b.onTrigger(j);
                    }),
                    this.register({ type: e.Type.Event, name: b }),
                    this.$element.trigger(j),
                    this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                j
            );
        }),
        (e.prototype.enter = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
                }, this)
            );
        }),
        (e.prototype.leave = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b]--;
                }, this)
            );
        }),
        (e.prototype.register = function (b) {
            if (b.type === e.Type.Event) {
                if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                    var c = a.event.special[b.name]._default;
                    (a.event.special[b.name]._default = function (a) {
                        return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf("owl")) ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                    }),
                        (a.event.special[b.name].owl = !0);
                }
            } else
                b.type === e.Type.State &&
                    (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
                    (this._states.tags[b.name] = a.grep(
                        this._states.tags[b.name],
                        a.proxy(function (c, d) {
                            return a.inArray(c, this._states.tags[b.name]) === d;
                        }, this)
                    )));
        }),
        (e.prototype.suppress = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    this._supress[b] = !0;
                }, this)
            );
        }),
        (e.prototype.release = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    delete this._supress[b];
                }, this)
            );
        }),
        (e.prototype.pointer = function (a) {
            var c = { x: null, y: null };
            return (
                (a = a.originalEvent || a || b.event),
                (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
                a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
                c
            );
        }),
        (e.prototype.isNumeric = function (a) {
            return !isNaN(parseFloat(a));
        }),
        (e.prototype.difference = function (a, b) {
            return { x: a.x - b.x, y: a.y - b.y };
        }),
        (a.fn.owlCarousel = function (b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var d = a(this),
                    f = d.data("owl.carousel");
                f ||
                    ((f = new e(this, "object" == typeof b && b)),
                    d.data("owl.carousel", f),
                    a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                        f.register({ type: e.Type.Event, name: c }),
                            f.$element.on(
                                c + ".owl.carousel.core",
                                a.proxy(function (a) {
                                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                                }, f)
                            );
                    })),
                    "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
            });
        }),
        (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (e.prototype.watch = function () {
                this._interval || ((this._visible = this._core.isVisible()), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (e.prototype.refresh = function () {
                this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (e.prototype.destroy = function () {
                var a, c;
                b.clearInterval(this._interval);
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type)) {
                            var c = this._core.settings,
                                e = (c.center && Math.ceil(c.items / 2)) || c.items,
                                f = (c.center && -1 * e) || 0,
                                g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                                h = this._core.clones().length,
                                i = a.proxy(function (a, b) {
                                    this.load(b);
                                }, this);
                            for (c.lazyLoadEager > 0 && ((e += c.lazyLoadEager), c.loop && ((g -= c.lazyLoadEager), e++)); f++ < e; ) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (e.prototype.load = function (c) {
                var d = this._core.$stage.children().eq(c),
                    e = d && d.find(".owl-lazy");
                !e ||
                    a.inArray(d.get(0), this._loaded) > -1 ||
                    (e.each(
                        a.proxy(function (c, d) {
                            var e,
                                f = a(d),
                                g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src") || f.attr("data-srcset");
                            this._core.trigger("load", { element: f, url: g }, "lazy"),
                                f.is("img")
                                    ? f
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", g)
                                    : f.is("source")
                                    ? f
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                              }, this)
                                          )
                                          .attr("srcset", g)
                                    : ((e = new Image()),
                                      (e.onload = a.proxy(function () {
                                          f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                      }, this)),
                                      (e.src = g));
                        }, this)
                    ),
                    this._loaded.push(d.get(0)));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (c) {
            (this._core = c),
                (this._previousHeight = null),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
            var d = this;
            a(b).on("load", function () {
                d._core.settings.autoHeight && d.update();
            }),
                a(b).resize(function () {
                    d._core.settings.autoHeight &&
                        (null != d._intervalId && clearTimeout(d._intervalId),
                        (d._intervalId = setTimeout(function () {
                            d.update();
                        }, 250)));
                });
        };
        (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (e.prototype.update = function () {
                var b = this._core._current,
                    c = b + this._core.settings.items,
                    d = this._core.settings.lazyLoad,
                    e = this._core.$stage.children().toArray().slice(b, c),
                    f = [],
                    g = 0;
                a.each(e, function (b, c) {
                    f.push(a(c).height());
                }),
                    (g = Math.max.apply(null, f)),
                    g <= 1 && d && this._previousHeight && (g = this._previousHeight),
                    (this._previousHeight = g),
                    this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" === a.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find(".owl-video");
                            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    a.proxy(function (a) {
                        this.play(a);
                    }, this)
                );
        };
        (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (e.prototype.fetch = function (a, b) {
                var c = (function () {
                        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
                    })(),
                    d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                    e = a.attr("data-width") || this._core.settings.videoWidth,
                    f = a.attr("data-height") || this._core.settings.videoHeight,
                    g = a.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (
                    ((d = g.match(
                        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                    )),
                    d[3].indexOf("youtu") > -1)
                )
                    c = "youtube";
                else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
                else {
                    if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    c = "vzaar";
                }
                (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
            }),
            (e.prototype.thumbnail = function (b, c) {
                var d,
                    e,
                    f,
                    g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
                    h = b.find("img"),
                    i = "src",
                    j = "",
                    k = this._core.settings,
                    l = function (c) {
                        (e = '<div class="owl-video-play-icon"></div>'),
                            (d = k.lazyLoad ? a("<div/>", { class: "owl-video-tn " + j, srcType: c }) : a("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")" })),
                            b.after(d),
                            b.after(e);
                    };
                if ((b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })), this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")), h.length)) return l(h.attr(i)), h.remove(), !1;
                "youtube" === c.type
                    ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                    : "vimeo" === c.type
                    ? a.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a[0].thumbnail_large), l(f);
                          },
                      })
                    : "vzaar" === c.type &&
                      a.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a.framegrab_url), l(f);
                          },
                      });
            }),
            (e.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (e.prototype.play = function (b) {
                var c,
                    d = a(b.target),
                    e = d.closest("." + this._core.settings.itemClass),
                    f = this._videos[e.attr("data-video")],
                    g = f.width || "100%",
                    h = f.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (e = this._core.items(this._core.relative(e.index()))),
                    this._core.reset(e.index()),
                    (c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')),
                    c.attr("height", h),
                    c.attr("width", g),
                    "youtube" === f.type
                        ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id)
                        : "vimeo" === f.type
                        ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
                        : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
                    a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
                    (this._playing = e.addClass("owl-video-playing")));
            }),
            (e.prototype.isInFullScreen = function () {
                var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                return b && a(b).parent().hasClass("owl-video-frame");
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Video = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = d),
                (this.next = d),
                (this.handlers = {
                    "change.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                        a.namespace && (this.swapping = "translated" == a.type);
                    }, this),
                    "translate.owl.carousel": a.proxy(function (a) {
                        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (e.Defaults = {
            animateOut: !1,

            animateIn: !1,
        }),
            (e.prototype.swap = function () {
                if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                    this.core.speed(0);
                    var b,
                        c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (g &&
                            ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            d
                                .one(a.support.animation.end, c)
                                .css({ left: b + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(g)),
                        f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
                }
            }),
            (e.prototype.clear = function (b) {
                a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "settings" === a.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": a.proxy(function (a, b, c) {
                        a.namespace && this.play(b, c);
                    }, this),
                    "stop.owl.autoplay": a.proxy(function (a) {
                        a.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = a.extend({}, e.Defaults, this._core.options));
        };
        (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (e.prototype._next = function (d) {
                (this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                    this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
            }),
            (e.prototype.read = function () {
                return new Date().getTime() - this._time;
            }),
            (e.prototype.play = function (c, d) {
                var e;
                this._core.is("rotating") || this._core.enter("rotating"),
                    (c = c || this._core.settings.autoplayTimeout),
                    (e = Math.min(this._time % (this._timeout || c), c)),
                    this._paused ? ((this._time = this.read()), (this._paused = !1)) : b.clearTimeout(this._call),
                    (this._time += (this.read() % c) - e),
                    (this._timeout = c),
                    (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
            }),
            (e.prototype.stop = function () {
                this._core.is("rotating") && ((this._time = 0), (this._paused = !0), b.clearTimeout(this._call), this._core.leave("rotating"));
            }),
            (e.prototype.pause = function () {
                this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), b.clearTimeout(this._call));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this.stop();
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (b) {
            (this._core = b),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": a.proxy(function (b) {
                        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (e.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (e.prototype.initialize = function () {
                var b,
                    c = this._core.settings;
                (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                    (this._controls.$previous = a("<" + c.navElement + ">")
                        .addClass(c.navClass[0])
                        .html(c.navText[0])
                        .prependTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.prev(c.navSpeed);
                            }, this)
                        )),
                    (this._controls.$next = a("<" + c.navElement + ">")
                        .addClass(c.navClass[1])
                        .html(c.navText[1])
                        .appendTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.next(c.navSpeed);
                            }, this)
                        )),
                    c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                    (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled")),
                    this._controls.$absolute.on(
                        "click",
                        "button",
                        a.proxy(function (b) {
                            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                            b.preventDefault(), this.to(d, c.dotsSpeed);
                        }, this)
                    );
                for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
            }),
            (e.prototype.destroy = function () {
                var a, b, c, d, e;
                e = this._core.settings;
                for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
                for (d in this.overides) this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (e.prototype.update = function () {
                var a,
                    b,
                    c,
                    d = this._core.clones().length / 2,
                    e = d + this._core.items().length,
                    f = this._core.maximum(!0),
                    g = this._core.settings,
                    h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
                    for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                        if (b >= h || 0 === b) {
                            if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f)) break;
                            (b = 0), ++c;
                        }
                        b += this._core.mergers(this._core.relative(a));
                    }
            }),
            (e.prototype.draw = function () {
                var b,
                    c = this._core.settings,
                    d = this._core.items().length <= c.items,
                    e = this._core.relative(this._core.current()),
                    f = c.loop || c.rewind;
                this._controls.$relative.toggleClass("disabled", !c.nav || d),
                    c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                    c.dots &&
                        ((b = this._pages.length - this._controls.$absolute.children().length),
                        c.dotsData && 0 !== b
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : b > 0
                            ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
                            : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (e.prototype.onTrigger = function (b) {
                var c = this._core.settings;
                b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
            }),
            (e.prototype.current = function () {
                var b = this._core.relative(this._core.current());
                return a
                    .grep(
                        this._pages,
                        a.proxy(function (a, c) {
                            return a.start <= b && a.end >= b;
                        }, this)
                    )
                    .pop();
            }),
            (e.prototype.getPosition = function (b) {
                var c,
                    d,
                    e = this._core.settings;
                return (
                    "page" == e.slideBy
                        ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
                        : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
                    c
                );
            }),
            (e.prototype.next = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
            }),
            (e.prototype.prev = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
            }),
            (e.prototype.to = function (b, c, d) {
                var e;
                !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (c) {
            (this._core = c),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (c) {
                        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!c) return;
                            this._hashes[c] = b.content;
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function (c) {
                        if (c.namespace && "position" === c.property.name) {
                            var d = this._core.items(this._core.relative(this._core.current())),
                                e = a
                                    .map(this._hashes, function (a, b) {
                                        return a === d ? b : null;
                                    })
                                    .join();
                            if (!e || b.location.hash.slice(1) === e) return;
                            b.location.hash = e;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                a(b).on(
                    "hashchange.owl.navigation",
                    a.proxy(function (a) {
                        var c = b.location.hash.substring(1),
                            e = this._core.$stage.children(),
                            f = this._hashes[c] && e.index(this._hashes[c]);
                        f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
                    }, this)
                );
        };
        (e.Defaults = { URLhashListener: !1 }),
            (e.prototype.destroy = function () {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return (
                a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                    if (g[b] !== d) return (e = !c || b), !1;
                }),
                e
            );
        }
        function f(a) {
            return e(a, !0);
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            j = {
                csstransforms: function () {
                    return !!e("transform");
                },
                csstransforms3d: function () {
                    return !!e("perspective");
                },
                csstransitions: function () {
                    return !!e("transition");
                },
                cssanimations: function () {
                    return !!e("animation");
                },
            };
        j.csstransitions() && ((a.support.transition = new String(f("transition"))), (a.support.transition.end = i.transition.end[a.support.transition])),
            j.cssanimations() && ((a.support.animation = new String(f("animation"))), (a.support.animation.end = i.animation.end[a.support.animation])),
            j.csstransforms() && ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
    })(window.Zepto || window.jQuery, window, document);

/*! Selectric ϟ v1.13.0 (2017-08-22) - git.io/tjl9sQ - Copyright (c) 2017 Leonardo Santos - MIT License */

!(function (e) {
    "function" == typeof define && define.amd
        ? define(["jquery"], e)
        : "object" == typeof module && module.exports
        ? (module.exports = function (t, s) {
              return void 0 === s && (s = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(s), s;
          })
        : e(jQuery);
})(function (e) {
    "use strict";
    var t = e(document),
        s = e(window),
        l = ["a", "e", "i", "o", "u", "n", "c", "y"],
        i = [/[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g],
        n = function (t, s) {
            var l = this;
            (l.element = t),
                (l.$element = e(t)),
                (l.state = { multiple: !!l.$element.attr("multiple"), enabled: !1, opened: !1, currValue: -1, selectedIdx: -1, highlightedIdx: -1 }),
                (l.eventTriggers = { open: l.open, close: l.close, destroy: l.destroy, refresh: l.refresh, init: l.init }),
                l.init(s);
        };
    (n.prototype = {
        utils: {
            isMobile: function () {
                return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
            },
            escapeRegExp: function (e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            },
            replaceDiacritics: function (e) {
                for (var t = i.length; t--; ) e = e.toLowerCase().replace(i[t], l[t]);
                return e;
            },
            format: function (e) {
                var t = arguments;
                return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, function (e, s, l) {
                    return l && t[1] ? t[1][l] : t[s];
                });
            },
            nextEnabledItem: function (e, t) {
                for (; e[(t = (t + 1) % e.length)].disabled; );
                return t;
            },
            previousEnabledItem: function (e, t) {
                for (; e[(t = (t > 0 ? t : e.length) - 1)].disabled; );
                return t;
            },
            toDash: function (e) {
                return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
            },
            triggerCallback: function (t, s) {
                var l = s.element,
                    i = s.options["on" + t],
                    n = [l].concat([].slice.call(arguments).slice(1));
                e.isFunction(i) && i.apply(l, n), e(l).trigger("selectric-" + this.toDash(t), n);
            },
            arrayToClassname: function (t) {
                var s = e.grep(t, function (e) {
                    return !!e;
                });
                return e.trim(s.join(" "));
            },
        },
        init: function (t) {
            var s = this;
            if (((s.options = e.extend(!0, {}, e.fn.selectric.defaults, s.options, t)), s.utils.triggerCallback("BeforeInit", s), s.destroy(!0), s.options.disableOnMobile && s.utils.isMobile())) return void (s.disableOnMobile = !0);
            s.classes = s.getClassNames();
            var l = e("<input/>", { class: s.classes.input, readonly: s.utils.isMobile() }),
                i = e("<div/>", { class: s.classes.items, tabindex: -1 }),
                n = e("<div/>", { class: s.classes.scroll }),
                a = e("<div/>", { class: s.classes.prefix, html: s.options.arrowButtonMarkup }),
                o = e("<span/>", { class: "label" }),
                r = s.$element.wrap("<div/>").parent().append(a.prepend(o), i, l),
                u = e("<div/>", { class: s.classes.hideselect });
            (s.elements = { input: l, items: i, itemsScroll: n, wrapper: a, label: o, outerWrapper: r }),
                s.options.nativeOnMobile &&
                    s.utils.isMobile() &&
                    ((s.elements.input = void 0),
                    u.addClass(s.classes.prefix + "-is-native"),
                    s.$element.on("change", function () {
                        s.refresh();
                    })),
                s.$element.on(s.eventTriggers).wrap(u),
                (s.originalTabindex = s.$element.prop("tabindex")),
                s.$element.prop("tabindex", -1),
                s.populate(),
                s.activate(),
                s.utils.triggerCallback("Init", s);
        },
        activate: function () {
            var e = this,
                t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
                s = e.$element.width();
            t.removeClass(e.classes.tempshow),
                e.utils.triggerCallback("BeforeActivate", e),
                e.elements.outerWrapper.prop("class", e.utils.arrayToClassname([e.classes.wrapper, e.$element.prop("class").replace(/\S+/g, e.classes.prefix + "-$&"), e.options.responsive ? e.classes.responsive : ""])),
                e.options.inheritOriginalWidth && s > 0 && e.elements.outerWrapper.width(s),
                e.unbindEvents(),
                e.$element.prop("disabled")
                    ? (e.elements.outerWrapper.addClass(e.classes.disabled), e.elements.input && e.elements.input.prop("disabled", !0))
                    : ((e.state.enabled = !0), e.elements.outerWrapper.removeClass(e.classes.disabled), (e.$li = e.elements.items.removeAttr("style").find("li")), e.bindEvents()),
                e.utils.triggerCallback("Activate", e);
        },
        getClassNames: function () {
            var t = this,
                s = t.options.customClass,
                l = {};
            return (
                e.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(" "), function (e, i) {
                    var n = s.prefix + i;
                    l[i.toLowerCase()] = s.camelCase ? n : t.utils.toDash(n);
                }),
                (l.prefix = s.prefix),
                l
            );
        },
        setLabel: function () {
            var t = this,
                s = t.options.labelBuilder;
            if (t.state.multiple) {
                var l = e.isArray(t.state.currValue) ? t.state.currValue : [t.state.currValue];
                l = 0 === l.length ? [0] : l;
                var i = e.map(l, function (s) {
                    return e.grep(t.lookupItems, function (e) {
                        return e.index === s;
                    })[0];
                });
                (i = e.grep(i, function (t) {
                    return i.length > 1 || 0 === i.length ? "" !== e.trim(t.value) : t;
                })),
                    (i = e.map(i, function (l) {
                        return e.isFunction(s) ? s(l) : t.utils.format(s, l);
                    })),
                    t.options.multiple.maxLabelEntries &&
                        (i.length >= t.options.multiple.maxLabelEntries + 1
                            ? ((i = i.slice(0, t.options.multiple.maxLabelEntries)), i.push(e.isFunction(s) ? s({ text: "..." }) : t.utils.format(s, { text: "..." })))
                            : i.slice(i.length - 1)),
                    t.elements.label.html(i.join(t.options.multiple.separator));
            } else {
                var n = t.lookupItems[t.state.currValue];
                t.elements.label.html(e.isFunction(s) ? s(n) : t.utils.format(s, n));
            }
        },
        populate: function () {
            var t = this,
                s = t.$element.children(),
                l = t.$element.find("option"),
                i = l.filter(":selected"),
                n = l.index(i),
                a = 0,
                o = t.state.multiple ? [] : 0;
            i.length > 1 &&
                t.state.multiple &&
                ((n = []),
                i.each(function () {
                    n.push(e(this).index());
                })),
                (t.state.currValue = ~n ? n : o),
                (t.state.selectedIdx = t.state.currValue),
                (t.state.highlightedIdx = t.state.currValue),
                (t.items = []),
                (t.lookupItems = []),
                s.length &&
                    (s.each(function (s) {
                        var l = e(this);
                        if (l.is("optgroup")) {
                            var i = { element: l, label: l.prop("label"), groupDisabled: l.prop("disabled"), items: [] };
                            l.children().each(function (s) {
                                var l = e(this);
                                (i.items[s] = t.getItemData(a, l, i.groupDisabled || l.prop("disabled"))), (t.lookupItems[a] = i.items[s]), a++;
                            }),
                                (t.items[s] = i);
                        } else (t.items[s] = t.getItemData(a, l, l.prop("disabled"))), (t.lookupItems[a] = t.items[s]), a++;
                    }),
                    t.setLabel(),
                    t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))));
        },
        getItemData: function (t, s, l) {
            var i = this;
            return { index: t, element: s, value: s.val(), className: s.prop("class"), text: s.html(), slug: e.trim(i.utils.replaceDiacritics(s.html())), alt: s.attr("data-alt"), selected: s.prop("selected"), disabled: l };
        },
        getItemsMarkup: function (t) {
            var s = this,
                l = "<ul>";
            return (
                e.isFunction(s.options.listBuilder) && s.options.listBuilder && (t = s.options.listBuilder(t)),
                e.each(t, function (t, i) {
                    void 0 !== i.label
                        ? ((l += s.utils.format(
                              '<ul class="{1}"><li class="{2}">{3}</li>',
                              s.utils.arrayToClassname([s.classes.group, i.groupDisabled ? "disabled" : "", i.element.prop("class")]),
                              s.classes.grouplabel,
                              i.element.prop("label")
                          )),
                          e.each(i.items, function (e, t) {
                              l += s.getItemMarkup(t.index, t);
                          }),
                          (l += "</ul>"))
                        : (l += s.getItemMarkup(i.index, i));
                }),
                l + "</ul>"
            );
        },
        getItemMarkup: function (t, s) {
            var l = this,
                i = l.options.optionsItemBuilder,
                n = { value: s.value, text: s.text, slug: s.slug, index: s.index };
            return l.utils.format(
                '<li data-index="{1}" class="{2}">{3}</li>',
                t,
                l.utils.arrayToClassname([s.className, t === l.items.length - 1 ? "last" : "", s.disabled ? "disabled" : "", s.selected ? "selected" : ""]),
                e.isFunction(i) ? l.utils.format(i(s, this.$element, t), s) : l.utils.format(i, n)
            );
        },
        unbindEvents: function () {
            var e = this;
            e.elements.wrapper.add(e.$element).add(e.elements.outerWrapper).add(e.elements.input).off(".sl");
        },
        bindEvents: function () {
            var t = this;
            t.elements.outerWrapper.on("mouseenter.sl mouseleave.sl", function (s) {
                e(this).toggleClass(t.classes.hover, "mouseenter" === s.type),
                    t.options.openOnHover && (clearTimeout(t.closeTimer), "mouseleave" === s.type ? (t.closeTimer = setTimeout(e.proxy(t.close, t), t.options.hoverIntentTimeout)) : t.open());
            }),
                t.elements.wrapper.on("click.sl", function (e) {
                    t.state.opened ? t.close() : t.open(e);
                }),
                (t.options.nativeOnMobile && t.utils.isMobile()) ||
                    (t.$element.on("focus.sl", function () {
                        t.elements.input.focus();
                    }),
                    t.elements.input
                        .prop({ tabindex: t.originalTabindex, disabled: !1 })
                        .on("keydown.sl", e.proxy(t.handleKeys, t))
                        .on("focusin.sl", function (e) {
                            t.elements.outerWrapper.addClass(t.classes.focus),
                                t.elements.input.one("blur", function () {
                                    t.elements.input.blur();
                                }),
                                t.options.openOnFocus && !t.state.opened && t.open(e);
                        })
                        .on("focusout.sl", function () {
                            t.elements.outerWrapper.removeClass(t.classes.focus);
                        })
                        .on("input propertychange", function () {
                            var s = t.elements.input.val(),
                                l = new RegExp("^" + t.utils.escapeRegExp(s), "i");
                            clearTimeout(t.resetStr),
                                (t.resetStr = setTimeout(function () {
                                    t.elements.input.val("");
                                }, t.options.keySearchTimeout)),
                                s.length &&
                                    e.each(t.items, function (e, s) {
                                        if (!s.disabled) {
                                            if (l.test(s.text) || l.test(s.slug)) return void t.highlight(e);
                                            if (s.alt) for (var i = s.alt.split("|"), n = 0; n < i.length && i[n]; n++) if (l.test(i[n].trim())) return void t.highlight(e);
                                        }
                                    });
                        })),
                t.$li.on({
                    mousedown: function (e) {
                        e.preventDefault(), e.stopPropagation();
                    },
                    click: function () {
                        return t.select(e(this).data("index")), !1;
                    },
                });
        },
        handleKeys: function (t) {
            var s = this,
                l = t.which,
                i = s.options.keys,
                n = e.inArray(l, i.previous) > -1,
                a = e.inArray(l, i.next) > -1,
                o = e.inArray(l, i.select) > -1,
                r = e.inArray(l, i.open) > -1,
                u = s.state.highlightedIdx,
                p = (n && 0 === u) || (a && u + 1 === s.items.length),
                c = 0;
            if (((13 !== l && 32 !== l) || t.preventDefault(), n || a)) {
                if (!s.options.allowWrap && p) return;
                n && (c = s.utils.previousEnabledItem(s.lookupItems, u)), a && (c = s.utils.nextEnabledItem(s.lookupItems, u)), s.highlight(c);
            }
            if (o && s.state.opened) return s.select(u), void ((s.state.multiple && s.options.multiple.keepMenuOpen) || s.close());
            r && !s.state.opened && s.open();
        },
        refresh: function () {
            var e = this;
            e.populate(), e.activate(), e.utils.triggerCallback("Refresh", e);
        },
        setOptionsDimensions: function () {
            var e = this,
                t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
                s = e.options.maxHeight,
                l = e.elements.items.outerWidth(),
                i = e.elements.wrapper.outerWidth() - (l - e.elements.items.width());
            !e.options.expandToItemText || i > l
                ? (e.finalWidth = i)
                : (e.elements.items.css("overflow", "scroll"), e.elements.outerWrapper.width(9e4), (e.finalWidth = e.elements.items.width()), e.elements.items.css("overflow", ""), e.elements.outerWrapper.width("")),
                e.elements.items.width(e.finalWidth).height() > s && e.elements.items.height(s),
                t.removeClass(e.classes.tempshow);
        },
        isInViewport: function () {
            var e = this;
            if (!0 === e.options.forceRenderAbove) e.elements.outerWrapper.addClass(e.classes.above);
            else if (!0 === e.options.forceRenderBelow) e.elements.outerWrapper.addClass(e.classes.below);
            else {
                var t = s.scrollTop(),
                    l = s.height(),
                    i = e.elements.outerWrapper.offset().top,
                    n = e.elements.outerWrapper.outerHeight(),
                    a = i + n + e.itemsHeight <= t + l,
                    o = i - e.itemsHeight > t,
                    r = !a && o,
                    u = !r;
                e.elements.outerWrapper.toggleClass(e.classes.above, r), e.elements.outerWrapper.toggleClass(e.classes.below, u);
            }
        },
        detectItemVisibility: function (t) {
            var s = this,
                l = s.$li.filter("[data-index]");
            s.state.multiple && ((t = e.isArray(t) && 0 === t.length ? 0 : t), (t = e.isArray(t) ? Math.min.apply(Math, t) : t));
            var i = l.eq(t).outerHeight(),
                n = l[t].offsetTop,
                a = s.elements.itemsScroll.scrollTop(),
                o = n + 2 * i;
            s.elements.itemsScroll.scrollTop(o > a + s.itemsHeight ? o - s.itemsHeight : n - i < a ? n - i : a);
        },
        open: function (s) {
            var l = this;
            if (l.options.nativeOnMobile && l.utils.isMobile()) return !1;
            l.utils.triggerCallback("BeforeOpen", l),
                s && (s.preventDefault(), l.options.stopPropagation && s.stopPropagation()),
                l.state.enabled &&
                    (l.setOptionsDimensions(),
                    e("." + l.classes.hideselect, "." + l.classes.open)
                        .children()
                        .selectric("close"),
                    (l.state.opened = !0),
                    (l.itemsHeight = l.elements.items.outerHeight()),
                    (l.itemsInnerHeight = l.elements.items.height()),
                    l.elements.outerWrapper.addClass(l.classes.open),
                    l.elements.input.val(""),
                    s && "focusin" !== s.type && l.elements.input.focus(),
                    setTimeout(function () {
                        t.on("click.sl", e.proxy(l.close, l)).on("scroll.sl", e.proxy(l.isInViewport, l));
                    }, 1),
                    l.isInViewport(),
                    l.options.preventWindowScroll &&
                        t.on("mousewheel.sl DOMMouseScroll.sl", "." + l.classes.scroll, function (t) {
                            var s = t.originalEvent,
                                i = e(this).scrollTop(),
                                n = 0;
                            "detail" in s && (n = -1 * s.detail),
                                "wheelDelta" in s && (n = s.wheelDelta),
                                "wheelDeltaY" in s && (n = s.wheelDeltaY),
                                "deltaY" in s && (n = -1 * s.deltaY),
                                ((i === this.scrollHeight - l.itemsInnerHeight && n < 0) || (0 === i && n > 0)) && t.preventDefault();
                        }),
                    l.detectItemVisibility(l.state.selectedIdx),
                    l.highlight(l.state.multiple ? -1 : l.state.selectedIdx),
                    l.utils.triggerCallback("Open", l));
        },
        close: function () {
            var e = this;
            e.utils.triggerCallback("BeforeClose", e), t.off(".sl"), e.elements.outerWrapper.removeClass(e.classes.open), (e.state.opened = !1), e.utils.triggerCallback("Close", e);
        },
        change: function () {
            var t = this;
            t.utils.triggerCallback("BeforeChange", t),
                t.state.multiple
                    ? (e.each(t.lookupItems, function (e) {
                          (t.lookupItems[e].selected = !1), t.$element.find("option").prop("selected", !1);
                      }),
                      e.each(t.state.selectedIdx, function (e, s) {
                          (t.lookupItems[s].selected = !0), t.$element.find("option").eq(s).prop("selected", !0);
                      }),
                      (t.state.currValue = t.state.selectedIdx),
                      t.setLabel(),
                      t.utils.triggerCallback("Change", t))
                    : t.state.currValue !== t.state.selectedIdx &&
                      (t.$element.prop("selectedIndex", (t.state.currValue = t.state.selectedIdx)).data("value", t.lookupItems[t.state.selectedIdx].text), t.setLabel(), t.utils.triggerCallback("Change", t));
        },
        highlight: function (e) {
            var t = this,
                s = t.$li.filter("[data-index]").removeClass("highlighted");
            t.utils.triggerCallback("BeforeHighlight", t),
                void 0 === e || -1 === e || t.lookupItems[e].disabled || (s.eq((t.state.highlightedIdx = e)).addClass("highlighted"), t.detectItemVisibility(e), t.utils.triggerCallback("Highlight", t));
        },
        select: function (t) {
            var s = this,
                l = s.$li.filter("[data-index]");
            if ((s.utils.triggerCallback("BeforeSelect", s, t), void 0 !== t && -1 !== t && !s.lookupItems[t].disabled)) {
                if (s.state.multiple) {
                    s.state.selectedIdx = e.isArray(s.state.selectedIdx) ? s.state.selectedIdx : [s.state.selectedIdx];
                    var i = e.inArray(t, s.state.selectedIdx);
                    -1 !== i ? s.state.selectedIdx.splice(i, 1) : s.state.selectedIdx.push(t),
                        l
                            .removeClass("selected")
                            .filter(function (t) {
                                return -1 !== e.inArray(t, s.state.selectedIdx);
                            })
                            .addClass("selected");
                } else
                    l.removeClass("selected")
                        .eq((s.state.selectedIdx = t))
                        .addClass("selected");
                (s.state.multiple && s.options.multiple.keepMenuOpen) || s.close(), s.change(), s.utils.triggerCallback("Select", s, t);
            }
        },
        destroy: function (e) {
            var t = this;
            t.state &&
                t.state.enabled &&
                (t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(),
                e || t.$element.removeData("selectric").removeData("value"),
                t.$element.prop("tabindex", t.originalTabindex).off(".sl").off(t.eventTriggers).unwrap().unwrap(),
                (t.state.enabled = !1));
        },
    }),
        (e.fn.selectric = function (t) {
            return this.each(function () {
                var s = e.data(this, "selectric");
                s && !s.disableOnMobile ? ("string" == typeof t && s[t] ? s[t]() : s.init(t)) : e.data(this, "selectric", new n(this, t));
            });
        }),
        (e.fn.selectric.defaults = {
            onChange: function (t) {
                e(t).change();
            },
            maxHeight: 300,
            keySearchTimeout: 500,
            arrowButtonMarkup: '<b class="button">&#x25be;</b>',
            disableOnMobile: !1,
            nativeOnMobile: !0,
            openOnFocus: !0,
            openOnHover: !1,
            hoverIntentTimeout: 500,
            expandToItemText: !1,
            responsive: !1,
            preventWindowScroll: !0,
            inheritOriginalWidth: !1,
            allowWrap: !0,
            forceRenderAbove: !1,
            forceRenderBelow: !1,
            stopPropagation: !0,
            optionsItemBuilder: "{text}",
            labelBuilder: "{text}",
            listBuilder: !1,
            keys: { previous: [37, 38], next: [39, 40], select: [9, 13, 27], open: [13, 32, 37, 38, 39, 40], close: [9, 27] },
            customClass: { prefix: "selectric", camelCase: !1 },
            multiple: { separator: ", ", keepMenuOpen: !0, maxLabelEntries: !1 },
        });
});

!(function (r) {
    "use strict";
    "function" == typeof define && define.amd ? define("parollerjs", ["jquery"], r) : "object" == typeof module && "object" == typeof module.exports ? (module.exports = r(require("jquery"))) : r(jQuery);
})(function (m) {
    "use strict";
    var g = !1,
        w = function () {
            g = !1;
        },
        v = function (r, t) {
            return r.css({ "background-position": "center " + -t + "px" });
        },
        x = function (r, t) {
            return r.css({ "background-position": -t + "px center" });
        },
        b = function (r, t, o) {
            return (
                "none" !== o || (o = ""),
                r.css({ "-webkit-transform": "translateY(" + t + "px)" + o, "-moz-transform": "translateY(" + t + "px)" + o, transform: "translateY(" + t + "px)" + o, transition: "transform linear", "will-change": "transform" })
            );
        },
        k = function (r, t, o) {
            return (
                "none" !== o || (o = ""),
                r.css({ "-webkit-transform": "translateX(" + t + "px)" + o, "-moz-transform": "translateX(" + t + "px)" + o, transform: "translateX(" + t + "px)" + o, transition: "transform linear", "will-change": "transform" })
            );
        },
        y = function (r, t, o) {
            var n = r.data("paroller-factor"),
                a = n || o.factor;
            if (t < 576) {
                var e = r.data("paroller-factor-xs"),
                    i = e || o.factorXs;
                return i || a;
            }
            if (t <= 768) {
                var c = r.data("paroller-factor-sm"),
                    f = c || o.factorSm;
                return f || a;
            }
            if (t <= 1024) {
                var u = r.data("paroller-factor-md"),
                    s = u || o.factorMd;
                return s || a;
            }
            if (t <= 1200) {
                var l = r.data("paroller-factor-lg"),
                    d = l || o.factorLg;
                return d || a;
            }
            if (t <= 1920) {
                var p = r.data("paroller-factor-xl"),
                    h = p || o.factorXl;
                return h || a;
            }
            return a;
        },
        z = function (r, t) {
            return Math.round(r * t);
        },
        M = function (r, t, o, n) {
            return Math.round((r - o / 2 + n) * t);
        },
        X = function (r) {
            return r.css({ "background-position": "unset" });
        },
        j = function (r) {
            return r.css({ transform: "unset", transition: "unset" });
        };
    m.fn.paroller = function (d) {
        var p = m(window).height(),
            h = m(document).height();
        d = m.extend({ factor: 0, factorXs: 0, factorSm: 0, factorMd: 0, factorLg: 0, factorXl: 0, type: "background", direction: "vertical" }, d);
        return this.each(function () {
            var t = m(this),
                o = m(window).width(),
                n = t.offset().top,
                a = t.outerHeight(),
                r = t.data("paroller-type"),
                e = t.data("paroller-direction"),
                i = t.css("transform"),
                c = r || d.type,
                f = e || d.direction,
                u = y(t, o, d),
                s = z(n, u),
                l = M(n, u, p, a);
            "background" === c ? ("vertical" === f ? v(t, s) : "horizontal" === f && x(t, s)) : "foreground" === c && ("vertical" === f ? b(t, l, i) : "horizontal" === f && k(t, l, i)),
                m(window).on("resize", function () {
                    var r = m(this).scrollTop();
                    (o = m(window).width()),
                        (n = t.offset().top),
                        (a = t.outerHeight()),
                        (u = y(t, o, d)),
                        (s = Math.round(n * u)),
                        (l = Math.round((n - p / 2 + a) * u)),
                        g || (window.requestAnimationFrame(w), (g = !0)),
                        "background" === c ? (X(t), "vertical" === f ? v(t, s) : "horizontal" === f && x(t, s)) : "foreground" === c && r <= h && (j(t), "vertical" === f ? b(t, l) : "horizontal" === f && k(t, l));
                }),
                m(window).on("scroll", function () {
                    var r = m(this).scrollTop();
                    (h = m(document).height()),
                        (s = Math.round((n - r) * u)),
                        (l = Math.round((n - p / 2 + a - r) * u)),
                        g || (window.requestAnimationFrame(w), (g = !0)),
                        "background" === c ? ("vertical" === f ? v(t, s) : "horizontal" === f && x(t, s)) : "foreground" === c && r <= h && ("vertical" === f ? b(t, l, i) : "horizontal" === f && k(t, l, i));
                });
        });
    };
});

/*!

 * Masonry PACKAGED v4.2.2

 * Cascading grid layout library

 * https://masonry.desandro.com

 * MIT License

 * by David DeSandro

 */

!(function (t, e) {
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
              return e(t, i);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("jquery")))
        : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
    "use strict";
    function i(i, r, a) {
        function h(t, e, n) {
            var o,
                r = "$()." + i + '("' + e + '")';
            return (
                t.each(function (t, h) {
                    var u = a.data(h, i);
                    if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                    var d = u[e];
                    if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                    var l = d.apply(u, n);
                    o = void 0 === o ? l : o;
                }),
                void 0 !== o ? o : t
            );
        }
        function u(t, e) {
            t.each(function (t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
            });
        }
        (a = a || e || t.jQuery),
            a &&
                (r.prototype.option ||
                    (r.prototype.option = function (t) {
                        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                    }),
                (a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = o.call(arguments, 1);
                        return h(this, t, e);
                    }
                    return u(this, t), this;
                }),
                n(a));
    }
    function n(t) {
        !t || (t && t.bridget) || (t.bridget = i);
    }
    var o = Array.prototype.slice,
        r = t.console,
        s =
            "undefined" == typeof r
                ? function () {}
                : function (t) {
                      r.error(t);
                  };
    return n(e || t.jQuery), i;
}),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        n = (i[t] = i[t] || []);
                    return -1 == n.indexOf(e) && n.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {}),
                        n = (i[t] = i[t] || {});
                    return (n[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                        var r = i[o],
                            s = n && n[r];
                        s && (this.off(t, r), delete n[r]), r.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t),
                i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e;
        }
        function e() {}
        function i() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; u > e; e++) {
                var i = h[e];
                t[i] = 0;
            }
            return t;
        }
        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
        }
        function o() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                (s = 200 == Math.round(t(o.width))), (r.isBoxSizeOuter = s), i.removeChild(e);
            }
        }
        function r(e) {
            if ((o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType)) {
                var r = n(e);
                if ("none" == r.display) return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0; u > l; l++) {
                    var c = h[l],
                        f = r[c],
                        m = parseFloat(f);
                    a[c] = isNaN(m) ? 0 : m;
                }
                var p = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    y = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    _ = a.borderLeftWidth + a.borderRightWidth,
                    z = a.borderTopWidth + a.borderBottomWidth,
                    E = d && s,
                    b = t(r.width);
                b !== !1 && (a.width = b + (E ? 0 : p + _));
                var x = t(r.height);
                return x !== !1 && (a.height = x + (E ? 0 : g + z)), (a.innerWidth = a.width - (p + _)), (a.innerHeight = a.height - (g + z)), (a.outerWidth = a.width + y), (a.outerHeight = a.height + v), a;
            }
        }
        var s,
            a =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            u = h.length,
            d = !1;
        return r;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            });
        var n = Array.prototype.slice;
        (i.makeArray = function (t) {
            if (Array.isArray(t)) return t;
            if (null === t || void 0 === t) return [];
            var e = "object" == typeof t && "number" == typeof t.length;
            return e ? n.call(t) : [t];
        }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, n) {
                t = i.makeArray(t);
                var o = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!n) return void o.push(t);
                            e(t, n) && o.push(t);
                            for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r]);
                        }
                    }),
                    o
                );
            }),
            (i.debounceMethod = function (t, e, i) {
                i = i || 100;
                var n = t.prototype[e],
                    o = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[o];
                    clearTimeout(t);
                    var e = arguments,
                        r = this;
                    this[o] = setTimeout(function () {
                        n.apply(r, e), delete r[o];
                    }, i);
                };
            }),
            (i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var o = t.console;
        return (
            (i.htmlInit = function (e, n) {
                i.docReady(function () {
                    var r = i.toDashed(n),
                        s = "data-" + r,
                        a = document.querySelectorAll("[" + s + "]"),
                        h = document.querySelectorAll(".js-" + r),
                        u = i.makeArray(a).concat(i.makeArray(h)),
                        d = s + "-options",
                        l = t.jQuery;
                    u.forEach(function (t) {
                        var i,
                            r = t.getAttribute(s) || t.getAttribute(d);
                        try {
                            i = r && JSON.parse(r);
                        } catch (a) {
                            return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + a));
                        }
                        var h = new e(t, i);
                        l && l.data(t, n, h);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function n(t, e) {
            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
        }
        function o(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var r = document.documentElement.style,
            s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
            h = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s],
            u = { transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" },
            d = (n.prototype = Object.create(t.prototype));
        (d.constructor = n),
            (d._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (d.getSize = function () {
                this.size = e(this.element);
            }),
            (d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var n = u[i] || i;
                    e[n] = t[i];
                }
            }),
            (d.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    n = t[e ? "left" : "right"],
                    o = t[i ? "top" : "bottom"],
                    r = parseFloat(n),
                    s = parseFloat(o),
                    a = this.layout.size;
                -1 != n.indexOf("%") && (r = (r / 100) * a.width),
                    -1 != o.indexOf("%") && (s = (s / 100) * a.height),
                    (r = isNaN(r) ? 0 : r),
                    (s = isNaN(s) ? 0 : s),
                    (r -= e ? a.paddingLeft : a.paddingRight),
                    (s -= i ? a.paddingTop : a.paddingBottom),
                    (this.position.x = r),
                    (this.position.y = s);
            }),
            (d.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    n = this.layout._getOption("originTop"),
                    o = i ? "paddingLeft" : "paddingRight",
                    r = i ? "left" : "right",
                    s = i ? "right" : "left",
                    a = this.position.x + t[o];
                (e[r] = this.getXValue(a)), (e[s] = "");
                var h = n ? "paddingTop" : "paddingBottom",
                    u = n ? "top" : "bottom",
                    d = n ? "bottom" : "top",
                    l = this.position.y + t[h];
                (e[u] = this.getYValue(l)), (e[d] = ""), this.css(e), this.emitEvent("layout", [this]);
            }),
            (d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
            }),
            (d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
            }),
            (d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = t == this.position.x && e == this.position.y;
                if ((this.setPosition(t, e), o && !this.isTransitioning)) return void this.layoutPosition();
                var r = t - i,
                    s = e - n,
                    a = {};
                (a.transform = this.getTranslate(r, s)), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }),
            (d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"),
                    n = this.layout._getOption("originTop");
                return (t = i ? t : -t), (e = n ? e : -e), "translate3d(" + t + "px, " + e + "px, 0)";
            }),
            (d.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (d.moveTo = d._transitionTo),
            (d.setPosition = function (t, e) {
                (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
            }),
            (d._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
            }),
            (d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null;
                }
                this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
            });
        var l = "opacity," + o(a);
        (d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(h, this, !1);
            }
        }),
            (d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (d.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var c = { "-webkit-transform": "transform" };
        (d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = c[t.propertyName] || t.propertyName;
                if ((delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[n]), n in e.onEnd)) {
                    var o = e.onEnd[n];
                    o.call(this), delete e.onEnd[n];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (d.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), (this.isTransitioning = !1);
            }),
            (d._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var f = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (d.removeTransitionStyles = function () {
                this.css(f);
            }),
            (d.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (d.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (d.remove = function () {
                return s && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (d.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("visibleStyle");
                (e[i] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (d.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                (e[i] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (d.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (d.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            n
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
                  return e(t, i, n, o, r);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
    })(window, function (t, e, i, n, o) {
        "use strict";
        function r(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            (this.element = i), u && (this.$element = u(this.element)), (this.options = n.extend({}, this.constructor.defaults)), this.option(e);
            var o = ++l;
            (this.element.outlayerGUID = o), (c[o] = this), this._create();
            var r = this._getOption("initLayout");
            r && this.layout();
        }
        function s(t) {
            function e() {
                t.apply(this, arguments);
            }
            return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
        }
        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = m[n] || 1;
            return i * o;
        }
        var h = t.console,
            u = t.jQuery,
            d = function () {},
            l = 0,
            c = {};
        (r.namespace = "outlayer"),
            (r.Item = o),
            (r.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var f = r.prototype;
        n.extend(f, e.prototype),
            (f.option = function (t) {
                n.extend(this.options, t);
            }),
            (f._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }),
            (r.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (f._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }),
            (f.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (f._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                    var r = e[o],
                        s = new i(r, this);
                    n.push(s);
                }
                return n;
            }),
            (f._filterFindItemElements = function (t) {
                return n.filterFindElements(t, this.options.itemSelector);
            }),
            (f.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (f.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (f._init = f.layout),
            (f._resetLayout = function () {
                this.getSize();
            }),
            (f.getSize = function () {
                this.size = i(this.element);
            }),
            (f._getMeasurement = function (t, e) {
                var n,
                    o = this.options[t];
                o ? ("string" == typeof o ? (n = this.element.querySelector(o)) : o instanceof HTMLElement && (n = o), (this[t] = n ? i(n)[e] : o)) : (this[t] = 0);
            }),
            (f.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
            }),
            (f._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (f._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var n = this._getItemLayoutPosition(t);
                        (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (f._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (f._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (f.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : ((this.stagger = a(t)), this.stagger);
            }),
            (f._positionItem = function (t, e, i, n, o) {
                n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
            }),
            (f._postLayout = function () {
                this.resizeContainer();
            }),
            (f.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
                }
            }),
            (f._getContainerSize = d),
            (f._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (f._emitCompleteOnItems = function (t, e) {
                function i() {
                    o.dispatchEvent(t + "Complete", null, [e]);
                }
                function n() {
                    s++, s == r && i();
                }
                var o = this,
                    r = e.length;
                if (!e || !r) return void i();
                var s = 0;
                e.forEach(function (e) {
                    e.once(t, n);
                });
            }),
            (f.dispatchEvent = function (t, e, i) {
                var n = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, n), u))
                    if (((this.$element = this.$element || u(this.element)), e)) {
                        var o = u.Event(e);
                        (o.type = t), this.$element.trigger(o, i);
                    } else this.$element.trigger(t, i);
            }),
            (f.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (f.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (f.stamp = function (t) {
                (t = this._find(t)), t && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (f.unstamp = function (t) {
                (t = this._find(t)),
                    t &&
                        t.forEach(function (t) {
                            n.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
            }),
            (f._find = function (t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), (t = n.makeArray(t))) : void 0;
            }),
            (f._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (f._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (f._manageStamp = d),
            (f._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    n = this._boundingRect,
                    o = i(t),
                    r = { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom };
                return r;
            }),
            (f.handleEvent = n.handleEvent),
            (f.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (f.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (f.onresize = function () {
                this.resize();
            }),
            n.debounceMethod(r, "onresize", 100),
            (f.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (f.needsResizeLayout = function () {
                var t = i(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }),
            (f.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (f.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (f.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                }
            }),
            (f.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (f.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (f.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (f.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (f.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (f.getItems = function (t) {
                t = n.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getItem(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (f.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), n.removeFrom(this.items, t);
                        }, this);
            }),
            (f.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace);
            }),
            (r.data = function (t) {
                t = n.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && c[e];
            }),
            (r.create = function (t, e) {
                var i = s(r);
                return (
                    (i.defaults = n.extend({}, r.defaults)),
                    n.extend(i.defaults, e),
                    (i.compatOptions = n.extend({}, r.compatOptions)),
                    (i.namespace = t),
                    (i.data = r.data),
                    (i.Item = s(o)),
                    n.htmlInit(i, t),
                    u && u.bridget && u.bridget(t, i),
                    i
                );
            });
        var m = { ms: 1, s: 1e3 };
        return (r.Item = o), r;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var n = i.prototype;
        return (
            (n._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (n.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
                }
                var n = (this.columnWidth += this.gutter),
                    o = this.containerWidth + this.gutter,
                    r = o / n,
                    s = n - (o % n),
                    a = s && 1 > s ? "round" : "floor";
                (r = Math[a](r)), (this.cols = Math.max(r, 1));
            }),
            (n.getContainerWidth = function () {
                var t = this._getOption("fitWidth"),
                    i = t ? this.element.parentNode : this.element,
                    n = e(i);
                this.containerWidth = n && n.innerWidth;
            }),
            (n._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = e && 1 > e ? "round" : "ceil",
                    n = Math[i](t.size.outerWidth / this.columnWidth);
                n = Math.min(n, this.cols);
                for (
                    var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = { x: this.columnWidth * r.col, y: r.y }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col;
                    h > u;
                    u++
                )
                    this.colYs[u] = a;
                return s;
            }),
            (n._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);
                return { col: e.indexOf(i), y: i };
            }),
            (n._getTopColGroup = function (t) {
                if (2 > t) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
                return e;
            }),
            (n._getColGroupY = function (t, e) {
                if (2 > e) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }),
            (n._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols,
                    n = t > 1 && i + t > this.cols;
                i = n ? 0 : i;
                var o = e.size.outerWidth && e.size.outerHeight;
                return (this.horizontalColIndex = o ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
            }),
            (n._manageStamp = function (t) {
                var i = e(t),
                    n = this._getElementOffset(t),
                    o = this._getOption("originLeft"),
                    r = o ? n.left : n.right,
                    s = r + i.outerWidth,
                    a = Math.floor(r / this.columnWidth);
                a = Math.max(0, a);
                var h = Math.floor(s / this.columnWidth);
                (h -= s % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
                for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
            }),
            (n._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
            }),
            (n._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (n.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            i
        );
    });

/*!

 * imagesLoaded PACKAGED v4.1.4

 * JavaScript is all like "You images are done yet or what?"

 * MIT License

 */

!(function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? (module.exports = t()) : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return (
        (t.on = function (e, t) {
            if (e && t) {
                var i = (this._events = this._events || {}),
                    n = (i[e] = i[e] || []);
                return n.indexOf(t) == -1 && n.push(t), this;
            }
        }),
        (t.once = function (e, t) {
            if (e && t) {
                this.on(e, t);
                var i = (this._onceEvents = this._onceEvents || {}),
                    n = (i[e] = i[e] || {});
                return (n[t] = !0), this;
            }
        }),
        (t.off = function (e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = i.indexOf(t);
                return n != -1 && i.splice(n, 1), this;
            }
        }),
        (t.emitEvent = function (e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                (i = i.slice(0)), (t = t || []);
                for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                    var r = i[o],
                        s = n && n[r];
                    s && (this.off(e, r), delete n[r]), r.apply(this, t);
                }
                return this;
            }
        }),
        (t.allOff = function () {
            delete this._events, delete this._onceEvents;
        }),
        e
    );
}),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["ev-emitter/ev-emitter"], function (i) {
                  return t(e, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = t(e, require("ev-emitter")))
            : (e.imagesLoaded = t(e, e.EvEmitter));
    })("undefined" != typeof window ? window : this, function (e, t) {
        function i(e, t) {
            for (var i in t) e[i] = t[i];
            return e;
        }
        function n(e) {
            if (Array.isArray(e)) return e;
            var t = "object" == typeof e && "number" == typeof e.length;
            return t ? d.call(e) : [e];
        }
        function o(e, t, r) {
            if (!(this instanceof o)) return new o(e, t, r);
            var s = e;
            return (
                "string" == typeof e && (s = document.querySelectorAll(e)),
                s
                    ? ((this.elements = n(s)),
                      (this.options = i({}, this.options)),
                      "function" == typeof t ? (r = t) : i(this.options, t),
                      r && this.on("always", r),
                      this.getImages(),
                      h && (this.jqDeferred = new h.Deferred()),
                      void setTimeout(this.check.bind(this)))
                    : void a.error("Bad element for imagesLoaded " + (s || e))
            );
        }
        function r(e) {
            this.img = e;
        }
        function s(e, t) {
            (this.url = e), (this.element = t), (this.img = new Image());
        }
        var h = e.jQuery,
            a = e.console,
            d = Array.prototype.slice;
        (o.prototype = Object.create(t.prototype)),
            (o.prototype.options = {}),
            (o.prototype.getImages = function () {
                (this.images = []), this.elements.forEach(this.addElementImages, this);
            }),
            (o.prototype.addElementImages = function (e) {
                "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
                var t = e.nodeType;
                if (t && u[t]) {
                    for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var o = i[n];
                        this.addImage(o);
                    }
                    if ("string" == typeof this.options.background) {
                        var r = e.querySelectorAll(this.options.background);
                        for (n = 0; n < r.length; n++) {
                            var s = r[n];
                            this.addElementBackgroundImages(s);
                        }
                    }
                }
            });
        var u = { 1: !0, 9: !0, 11: !0 };
        return (
            (o.prototype.addElementBackgroundImages = function (e) {
                var t = getComputedStyle(e);
                if (t)
                    for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n; ) {
                        var o = n && n[2];
                        o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
                    }
            }),
            (o.prototype.addImage = function (e) {
                var t = new r(e);
                this.images.push(t);
            }),
            (o.prototype.addBackground = function (e, t) {
                var i = new s(e, t);
                this.images.push(i);
            }),
            (o.prototype.check = function () {
                function e(e, i, n) {
                    setTimeout(function () {
                        t.progress(e, i, n);
                    });
                }
                var t = this;
                return (
                    (this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length
                        ? void this.images.forEach(function (t) {
                              t.once("progress", e), t.check();
                          })
                        : void this.complete()
                );
            }),
            (o.prototype.progress = function (e, t, i) {
                this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                    this.emitEvent("progress", [this, e, t]),
                    this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && a && a.log("progress: " + i, e, t);
            }),
            (o.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                if (((this.isComplete = !0), this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                    var t = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[t](this);
                }
            }),
            (r.prototype = Object.create(t.prototype)),
            (r.prototype.check = function () {
                var e = this.getIsImageComplete();
                return e
                    ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                      this.proxyImage.addEventListener("load", this),
                      this.proxyImage.addEventListener("error", this),
                      this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      void (this.proxyImage.src = this.img.src));
            }),
            (r.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth;
            }),
            (r.prototype.confirm = function (e, t) {
                (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
            }),
            (r.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (r.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (r.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (r.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (s.prototype = Object.create(r.prototype)),
            (s.prototype.check = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url);
                var e = this.getIsImageComplete();
                e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
            }),
            (s.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (s.prototype.confirm = function (e, t) {
                (this.isLoaded = e), this.emitEvent("progress", [this, this.element, t]);
            }),
            (o.makeJQueryPlugin = function (t) {
                (t = t || e.jQuery),
                    t &&
                        ((h = t),
                        (h.fn.imagesLoaded = function (e, t) {
                            var i = new o(this, e, t);
                            return i.jqDeferred.promise(h(this));
                        }));
            }),
            o.makeJQueryPlugin(),
            o
        );
    });

// ==================================================

// fancyBox v3.5.2

//

// Licensed GPLv3 for open source use

// or fancyBox Commercial License for commercial use

//

// http://fancyapps.com/fancybox/

// Copyright 2018 fancyApps

//

// ==================================================

!(function (t, e, n, o) {
    "use strict";
    function a(t, e) {
        var o,
            a,
            i,
            s = [],
            r = 0;
        (t && t.isDefaultPrevented()) ||
            (t.preventDefault(),
            (e = e || {}),
            t && t.data && (e = h(t.data.options, e)),
            (o = e.$target || n(t.currentTarget).trigger("blur")),
            (i = n.fancybox.getInstance()),
            (i && i.$trigger && i.$trigger.is(o)) ||
                (e.selector ? (s = n(e.selector)) : ((a = o.attr("data-fancybox") || ""), a ? ((s = t.data ? t.data.items : []), (s = s.length ? s.filter('[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]'))) : (s = [o])),
                (r = n(s).index(o)),
                r < 0 && (r = 0),
                (i = n.fancybox.open(s, e, r)),
                (i.$trigger = o)));
    }
    if (((t.console = t.console || { info: function (t) {} }), n)) {
        if (n.fn.fancybox) return void console.info("fancyBox already initialized");
        var i = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: { preload: !1 },
                ajax: { settings: { data: { fancybox: !0 } } },
                iframe: { tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>', preload: !0, css: {}, attr: { scrolling: "auto" } },
                video: {
                    tpl:
                        '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0,
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl:
                    '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download:
                        '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom:
                        '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close:
                        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft:
                        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight:
                        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn:
                        '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: { autoStart: !1 },
                touch: { vertical: !0, momentum: !0 },
                hash: null,
                media: {},
                slideShow: { autoStart: !1, speed: 3e3 },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom";
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls";
                    },
                    clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close";
                    },
                    dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom";
                    },
                    dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom";
                    },
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom",
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "Zurück",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Maßstab",
                    },
                },
            },
            s = n(t),
            r = n(e),
            c = 0,
            l = function (t) {
                return t && t.hasOwnProperty && t instanceof n;
            },
            d = (function () {
                return (
                    t.requestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.oRequestAnimationFrame ||
                    function (e) {
                        return t.setTimeout(e, 1e3 / 60);
                    }
                );
            })(),
            u = (function () {
                return (
                    t.cancelAnimationFrame ||
                    t.webkitCancelAnimationFrame ||
                    t.mozCancelAnimationFrame ||
                    t.oCancelAnimationFrame ||
                    function (e) {
                        t.clearTimeout(e);
                    }
                );
            })(),
            f = (function () {
                var t,
                    n = e.createElement("fakeelement"),
                    a = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                for (t in a) if (n.style[t] !== o) return a[t];
                return "transitionend";
            })(),
            p = function (t) {
                return t && t.length && t[0].offsetHeight;
            },
            h = function (t, e) {
                var o = n.extend(!0, {}, t, e);
                return (
                    n.each(e, function (t, e) {
                        n.isArray(e) && (o[t] = e);
                    }),
                    o
                );
            },
            g = function (t) {
                var o, a;
                return (
                    !(!t || t.ownerDocument !== e) &&
                    (n(".fancybox-container").css("pointer-events", "none"),
                    (o = { x: t.getBoundingClientRect().left + t.offsetWidth / 2, y: t.getBoundingClientRect().top + t.offsetHeight / 2 }),
                    (a = e.elementFromPoint(o.x, o.y) === t),
                    n(".fancybox-container").css("pointer-events", ""),
                    a)
                );
            },
            b = function (t, e, o) {
                var a = this;
                (a.opts = h({ index: o }, n.fancybox.defaults)),
                    n.isPlainObject(e) && (a.opts = h(a.opts, e)),
                    n.fancybox.isMobile && (a.opts = h(a.opts, a.opts.mobile)),
                    (a.id = a.opts.id || ++c),
                    (a.currIndex = parseInt(a.opts.index, 10) || 0),
                    (a.prevIndex = null),
                    (a.prevPos = null),
                    (a.currPos = 0),
                    (a.firstRun = !0),
                    (a.group = []),
                    (a.slides = {}),
                    a.addContent(t),
                    a.group.length && a.init();
            };
        n.extend(b.prototype, {
            init: function () {
                var o,
                    a,
                    i = this,
                    s = i.group[i.currIndex],
                    r = s.opts;
                r.closeExisting && n.fancybox.close(!0),
                    n("body").addClass("fancybox-active"),
                    !n.fancybox.getInstance() &&
                        r.hideScrollbar !== !1 &&
                        !n.fancybox.isMobile &&
                        e.body.scrollHeight > t.innerHeight &&
                        (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"),
                        n("body").addClass("compensate-for-scrollbar")),
                    (a = ""),
                    n.each(r.buttons, function (t, e) {
                        a += r.btnTpl[e] || "";
                    }),
                    (o = n(i.translate(i, r.baseTpl.replace("{{buttons}}", a).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight)))
                        .attr("id", "fancybox-container-" + i.id)
                        .addClass(r.baseClass)
                        .data("FancyBox", i)
                        .appendTo(r.parentEl)),
                    (i.$refs = { container: o }),
                    ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                        i.$refs[t] = o.find(".fancybox-" + t);
                    }),
                    i.trigger("onInit"),
                    i.activate(),
                    i.jumpTo(i.currIndex);
            },
            translate: function (t, e) {
                var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    var a = n[e];
                    return a === o ? t : a;
                });
            },
            addContent: function (t) {
                var e,
                    a = this,
                    i = n.makeArray(t);
                n.each(i, function (t, e) {
                    var i,
                        s,
                        r,
                        c,
                        l,
                        d = {},
                        u = {};
                    n.isPlainObject(e)
                        ? ((d = e), (u = e.opts || e))
                        : "object" === n.type(e) && n(e).length
                        ? ((i = n(e)), (u = i.data() || {}), (u = n.extend(!0, {}, u, u.options)), (u.$orig = i), (d.src = a.opts.src || u.src || i.attr("href")), d.type || d.src || ((d.type = "inline"), (d.src = e)))
                        : (d = { type: "html", src: e + "" }),
                        (d.opts = n.extend(!0, {}, a.opts, u)),
                        n.isArray(u.buttons) && (d.opts.buttons = u.buttons),
                        n.fancybox.isMobile && d.opts.mobile && (d.opts = h(d.opts, d.opts.mobile)),
                        (s = d.type || d.opts.type),
                        (c = d.src || ""),
                        !s &&
                            c &&
                            ((r = c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                                ? ((s = "video"), d.opts.video.format || (d.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1])))
                                : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                                ? (s = "image")
                                : c.match(/\.(pdf)((\?|#).*)?$/i)
                                ? ((s = "iframe"), (d = n.extend(!0, d, { contentType: "pdf", opts: { iframe: { preload: !1 } } })))
                                : "#" === c.charAt(0) && (s = "inline")),
                        s ? (d.type = s) : a.trigger("objectNeedsType", d),
                        d.contentType || (d.contentType = n.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type),
                        (d.index = a.group.length),
                        "auto" == d.opts.smallBtn && (d.opts.smallBtn = n.inArray(d.type, ["html", "inline", "ajax"]) > -1),
                        "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn),
                        (d.$thumb = d.opts.$thumb || null),
                        d.opts.$trigger && d.index === a.opts.index && ((d.$thumb = d.opts.$trigger.find("img:first")), d.$thumb.length && (d.opts.$orig = d.opts.$trigger)),
                        (d.$thumb && d.$thumb.length) || !d.opts.$orig || (d.$thumb = d.opts.$orig.find("img:first")),
                        d.$thumb && !d.$thumb.length && (d.$thumb = null),
                        (d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null)),
                        "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [a, d])),
                        "function" === n.type(a.opts.caption) && (d.opts.caption = a.opts.caption.apply(e, [a, d])),
                        d.opts.caption instanceof n || (d.opts.caption = d.opts.caption === o ? "" : d.opts.caption + ""),
                        "ajax" === d.type && ((l = c.split(/\s+/, 2)), l.length > 1 && ((d.src = l.shift()), (d.opts.filter = l.shift()))),
                        d.opts.modal &&
                            (d.opts = n.extend(!0, d.opts, {
                                trapFocus: !0,
                                infobar: 0,
                                toolbar: 0,
                                smallBtn: 0,
                                keyboard: 0,
                                slideShow: 0,
                                fullScreen: 0,
                                thumbs: 0,
                                touch: 0,
                                clickContent: !1,
                                clickSlide: !1,
                                clickOutside: !1,
                                dblclickContent: !1,
                                dblclickSlide: !1,
                                dblclickOutside: !1,
                            })),
                        a.group.push(d);
                }),
                    Object.keys(a.slides).length && (a.updateControls(), (e = a.Thumbs), e && e.isActive && (e.create(), e.focus()));
            },
            addEvents: function () {
                var e = this;
                e.removeEvents(),
                    e.$refs.container
                        .on("click.fb-close", "[data-fancybox-close]", function (t) {
                            t.stopPropagation(), t.preventDefault(), e.close(t);
                        })
                        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                            t.stopPropagation(), t.preventDefault(), e.previous();
                        })
                        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                            t.stopPropagation(), t.preventDefault(), e.next();
                        })
                        .on("click.fb", "[data-fancybox-zoom]", function (t) {
                            e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                        }),
                    s.on("orientationchange.fb resize.fb", function (t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type
                            ? (e.requestId && u(e.requestId),
                              (e.requestId = d(function () {
                                  e.update(t);
                              })))
                            : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(),
                              setTimeout(
                                  function () {
                                      e.$refs.stage.show(), e.update(t);
                                  },
                                  n.fancybox.isMobile ? 600 : 250
                              ));
                    }),
                    r.on("keydown.fb", function (t) {
                        var o = n.fancybox ? n.fancybox.getInstance() : null,
                            a = o.current,
                            i = t.keyCode || t.which;
                        if (9 == i) return void (a.opts.trapFocus && e.focus(t));
                        if (!(!a.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input") || n(t.target).is("textarea")))
                            return 8 === i || 27 === i
                                ? (t.preventDefault(), void e.close(t))
                                : 37 === i || 38 === i
                                ? (t.preventDefault(), void e.previous())
                                : 39 === i || 40 === i
                                ? (t.preventDefault(), void e.next())
                                : void e.trigger("afterKeydown", t, i);
                    }),
                    e.group[e.currIndex].opts.idleTime &&
                        ((e.idleSecondsCounter = 0),
                        r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                            (e.idleSecondsCounter = 0), e.isIdle && e.showControls(), (e.isIdle = !1);
                        }),
                        (e.idleInterval = t.setInterval(function () {
                            e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls());
                        }, 1e3)));
            },
            removeEvents: function () {
                var e = this;
                s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), (e.idleInterval = null));
            },
            previous: function (t) {
                return this.jumpTo(this.currPos - 1, t);
            },
            next: function (t) {
                return this.jumpTo(this.currPos + 1, t);
            },
            jumpTo: function (t, e) {
                var a,
                    i,
                    s,
                    r,
                    c,
                    l,
                    d,
                    u,
                    f,
                    h = this,
                    g = h.group.length;
                if (!(h.isDragging || h.isClosing || (h.isAnimating && h.firstRun))) {
                    if (((t = parseInt(t, 10)), (s = h.current ? h.current.opts.loop : h.opts.loop), !s && (t < 0 || t >= g))) return !1;
                    if (
                        ((a = h.firstRun = !Object.keys(h.slides).length),
                        (c = h.current),
                        (h.prevIndex = h.currIndex),
                        (h.prevPos = h.currPos),
                        (r = h.createSlide(t)),
                        g > 1 && ((s || r.index < g - 1) && h.createSlide(t + 1), (s || r.index > 0) && h.createSlide(t - 1)),
                        (h.current = r),
                        (h.currIndex = r.index),
                        (h.currPos = r.pos),
                        h.trigger("beforeShow", a),
                        h.updateControls(),
                        (r.forcedDuration = o),
                        n.isNumeric(e) ? (r.forcedDuration = e) : (e = r.opts[a ? "animationDuration" : "transitionDuration"]),
                        (e = parseInt(e, 10)),
                        (i = h.isMoved(r)),
                        r.$slide.addClass("fancybox-slide--current"),
                        a)
                    )
                        return r.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"), h.$refs.container.addClass("fancybox-is-open").trigger("focus"), h.loadSlide(r), void h.preload("image");
                    (l = n.fancybox.getTranslate(c.$slide)),
                        (d = n.fancybox.getTranslate(h.$refs.stage)),
                        n.each(h.slides, function (t, e) {
                            n.fancybox.stop(e.$slide, !0);
                        }),
                        c.pos !== r.pos && (c.isComplete = !1),
                        c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                        i
                            ? ((f = l.left - (c.pos * l.width + c.pos * c.opts.gutter)),
                              n.each(h.slides, function (t, o) {
                                  o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                  });
                                  var a = o.pos * l.width + o.pos * o.opts.gutter;
                                  n.fancybox.setTranslate(o.$slide, { top: 0, left: a - d.left + f }),
                                      o.pos !== r.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > r.pos ? "next" : "previous")),
                                      p(o.$slide),
                                      n.fancybox.animate(o.$slide, { top: 0, left: (o.pos - r.pos) * l.width + (o.pos - r.pos) * o.opts.gutter }, e, function () {
                                          o.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === h.currPos && h.complete();
                                      });
                              }))
                            : e &&
                              r.opts.transitionEffect &&
                              ((u = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect),
                              c.$slide.addClass("fancybox-slide--" + (c.pos > r.pos ? "next" : "previous")),
                              n.fancybox.animate(
                                  c.$slide,
                                  u,
                                  e,
                                  function () {
                                      c.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous");
                                  },
                                  !1
                              )),
                        r.isLoaded ? h.revealContent(r) : h.loadSlide(r),
                        h.preload("image");
                }
            },
            createSlide: function (t) {
                var e,
                    o,
                    a = this;
                return (
                    (o = t % a.group.length),
                    (o = o < 0 ? a.group.length + o : o),
                    !a.slides[t] && a.group[o] && ((e = n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage)), (a.slides[t] = n.extend(!0, {}, a.group[o], { pos: t, $slide: e, isLoaded: !1 })), a.updateSlide(a.slides[t])),
                    a.slides[t]
                );
            },
            scaleToActual: function (t, e, a) {
                var i,
                    s,
                    r,
                    c,
                    l,
                    d = this,
                    u = d.current,
                    f = u.$content,
                    p = n.fancybox.getTranslate(u.$slide).width,
                    h = n.fancybox.getTranslate(u.$slide).height,
                    g = u.width,
                    b = u.height;
                d.isAnimating ||
                    d.isMoved() ||
                    !f ||
                    "image" != u.type ||
                    !u.isLoaded ||
                    u.hasError ||
                    ((d.isAnimating = !0),
                    n.fancybox.stop(f),
                    (t = t === o ? 0.5 * p : t),
                    (e = e === o ? 0.5 * h : e),
                    (i = n.fancybox.getTranslate(f)),
                    (i.top -= n.fancybox.getTranslate(u.$slide).top),
                    (i.left -= n.fancybox.getTranslate(u.$slide).left),
                    (c = g / i.width),
                    (l = b / i.height),
                    (s = 0.5 * p - 0.5 * g),
                    (r = 0.5 * h - 0.5 * b),
                    g > p && ((s = i.left * c - (t * c - t)), s > 0 && (s = 0), s < p - g && (s = p - g)),
                    b > h && ((r = i.top * l - (e * l - e)), r > 0 && (r = 0), r < h - b && (r = h - b)),
                    d.updateCursor(g, b),
                    n.fancybox.animate(f, { top: r, left: s, scaleX: c, scaleY: l }, a || 330, function () {
                        d.isAnimating = !1;
                    }),
                    d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop());
            },
            scaleToFit: function (t) {
                var e,
                    o = this,
                    a = o.current,
                    i = a.$content;
                o.isAnimating ||
                    o.isMoved() ||
                    !i ||
                    "image" != a.type ||
                    !a.isLoaded ||
                    a.hasError ||
                    ((o.isAnimating = !0),
                    n.fancybox.stop(i),
                    (e = o.getFitPos(a)),
                    o.updateCursor(e.width, e.height),
                    n.fancybox.animate(i, { top: e.top, left: e.left, scaleX: e.width / i.width(), scaleY: e.height / i.height() }, t || 330, function () {
                        o.isAnimating = !1;
                    }));
            },
            getFitPos: function (t) {
                var e,
                    o,
                    a,
                    i,
                    s = this,
                    r = t.$content,
                    c = t.$slide,
                    l = t.width || t.opts.width,
                    d = t.height || t.opts.height,
                    u = {};
                return (
                    !!(t.isLoaded && r && r.length) &&
                    ((e = n.fancybox.getTranslate(s.$refs.stage).width),
                    (o = n.fancybox.getTranslate(s.$refs.stage).height),
                    (e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight"))),
                    (o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom"))),
                    (l && d) || ((l = e), (d = o)),
                    (a = Math.min(1, e / l, o / d)),
                    (l = a * l),
                    (d = a * d),
                    l > e - 0.5 && (l = e),
                    d > o - 0.5 && (d = o),
                    "image" === t.type
                        ? ((u.top = Math.floor(0.5 * (o - d)) + parseFloat(c.css("paddingTop"))), (u.left = Math.floor(0.5 * (e - l)) + parseFloat(c.css("paddingLeft"))))
                        : "video" === t.contentType && ((i = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9), d > l / i ? (d = l / i) : l > d * i && (l = d * i)),
                    (u.width = l),
                    (u.height = d),
                    u)
                );
            },
            update: function (t) {
                var e = this;
                n.each(e.slides, function (n, o) {
                    e.updateSlide(o, t);
                });
            },
            updateSlide: function (t, e) {
                var o = this,
                    a = t && t.$content,
                    i = t.width || t.opts.width,
                    s = t.height || t.opts.height,
                    r = t.$slide;
                o.adjustCaption(t),
                    a && (i || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(a), n.fancybox.setTranslate(a, o.getFitPos(t)), t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
                    o.adjustLayout(t),
                    r.length &&
                        (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)),
                    o.trigger("onUpdate", t, e);
            },
            centerSlide: function (t) {
                var e = this,
                    a = e.current,
                    i = a.$slide;
                !e.isClosing &&
                    a &&
                    (i.siblings().css({ transform: "", opacity: "" }),
                    i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                    n.fancybox.animate(
                        i,
                        { top: 0, left: 0, opacity: 1 },
                        t === o ? 0 : t,
                        function () {
                            i.css({ transform: "", opacity: "" }), a.isComplete || e.complete();
                        },
                        !1
                    ));
            },
            isMoved: function (t) {
                var e,
                    o,
                    a = t || this.current;
                return !!a && ((o = n.fancybox.getTranslate(this.$refs.stage)), (e = n.fancybox.getTranslate(a.$slide)), !a.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5));
            },
            updateCursor: function (t, e) {
                var o,
                    a,
                    i = this,
                    s = i.current,
                    r = i.$refs.container;
                s &&
                    !i.isClosing &&
                    i.Guestures &&
                    (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                    (o = i.canPan(t, e)),
                    (a = !!o || i.isZoomable()),
                    r.toggleClass("fancybox-is-zoomable", a),
                    n("[data-fancybox-zoom]").prop("disabled", !a),
                    o
                        ? r.addClass("fancybox-can-pan")
                        : a && ("zoom" === s.opts.clickContent || (n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)))
                        ? r.addClass("fancybox-can-zoomIn")
                        : s.opts.touch && (s.opts.touch.vertical || i.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
            },
            isZoomable: function () {
                var t,
                    e = this,
                    n = e.current;
                if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                    if (!n.isLoaded) return !0;
                    if (((t = e.getFitPos(n)), t && (n.width > t.width || n.height > t.height))) return !0;
                }
                return !1;
            },
            isScaledDown: function (t, e) {
                var a = this,
                    i = !1,
                    s = a.current,
                    r = s.$content;
                return t !== o && e !== o ? (i = t < s.width && e < s.height) : r && ((i = n.fancybox.getTranslate(r)), (i = i.width < s.width && i.height < s.height)), i;
            },
            canPan: function (t, e) {
                var a = this,
                    i = a.current,
                    s = null,
                    r = !1;
                return (
                    "image" === i.type &&
                        (i.isComplete || (t && e)) &&
                        !i.hasError &&
                        ((r = a.getFitPos(i)),
                        t !== o && e !== o ? (s = { width: t, height: e }) : i.isComplete && (s = n.fancybox.getTranslate(i.$content)),
                        s && r && (r = Math.abs(s.width - r.width) > 1.5 || Math.abs(s.height - r.height) > 1.5)),
                    r
                );
            },
            loadSlide: function (t) {
                var e,
                    o,
                    a,
                    i = this;
                if (!t.isLoading && !t.isLoaded) {
                    if (((t.isLoading = !0), i.trigger("beforeLoad", t) === !1)) return (t.isLoading = !1), !1;
                    switch (((e = t.type), (o = t.$slide), o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e)) {
                        case "image":
                            i.setImage(t);
                            break;
                        case "iframe":
                            i.setIframe(t);
                            break;
                        case "html":
                            i.setContent(t, t.src || t.content);
                            break;
                        case "video":
                            i.setContent(
                                t,
                                t.opts.video.tpl
                                    .replace(/\{\{src\}\}/gi, t.src)
                                    .replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "")
                                    .replace("{{poster}}", t.thumb || "")
                            );
                            break;
                        case "inline":
                            n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t);
                            break;
                        case "ajax":
                            i.showLoading(t),
                                (a = n.ajax(
                                    n.extend({}, t.opts.ajax.settings, {
                                        url: t.src,
                                        success: function (e, n) {
                                            "success" === n && i.setContent(t, e);
                                        },
                                        error: function (e, n) {
                                            e && "abort" !== n && i.setError(t);
                                        },
                                    })
                                )),
                                o.one("onReset", function () {
                                    a.abort();
                                });
                            break;
                        default:
                            i.setError(t);
                    }
                    return !0;
                }
            },
            setImage: function (t) {
                var o,
                    a = this;
                setTimeout(function () {
                    var e = t.$image;
                    a.isClosing || !t.isLoading || (e && e.length && e[0].complete) || t.hasError || a.showLoading(t);
                }, 50),
                    a.checkSrcset(t),
                    (t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image"))),
                    t.opts.preload !== !1 &&
                        t.opts.width &&
                        t.opts.height &&
                        t.thumb &&
                        ((t.width = t.opts.width),
                        (t.height = t.opts.height),
                        (o = e.createElement("img")),
                        (o.onerror = function () {
                            n(this).remove(), (t.$ghost = null);
                        }),
                        (o.onload = function () {
                            a.afterLoad(t);
                        }),
                        (t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb))),
                    a.setBigImage(t);
            },
            checkSrcset: function (e) {
                var n,
                    o,
                    a,
                    i,
                    s = e.opts.srcset || e.opts.image.srcset;
                if (s) {
                    (a = t.devicePixelRatio || 1),
                        (i = t.innerWidth * a),
                        (o = s.split(",").map(function (t) {
                            var e = {};
                            return (
                                t
                                    .trim()
                                    .split(/\s+/)
                                    .forEach(function (t, n) {
                                        var o = parseInt(t.substring(0, t.length - 1), 10);
                                        return 0 === n ? (e.url = t) : void (o && ((e.value = o), (e.postfix = t[t.length - 1])));
                                    }),
                                e
                            );
                        })),
                        o.sort(function (t, e) {
                            return t.value - e.value;
                        });
                    for (var r = 0; r < o.length; r++) {
                        var c = o[r];
                        if (("w" === c.postfix && c.value >= i) || ("x" === c.postfix && c.value >= a)) {
                            n = c;
                            break;
                        }
                    }
                    !n && o.length && (n = o[o.length - 1]), n && ((e.src = n.url), e.width && e.height && "w" == n.postfix && ((e.height = (e.width / e.height) * n.value), (e.width = n.value)), (e.opts.srcset = s));
                }
            },
            setBigImage: function (t) {
                var o = this,
                    a = e.createElement("img"),
                    i = n(a);
                (t.$image = i
                    .one("error", function () {
                        o.setError(t);
                    })
                    .one("load", function () {
                        var e;
                        t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)),
                            o.isClosing ||
                                (t.opts.srcset &&
                                    ((e = t.opts.sizes),
                                    (e && "auto" !== e) || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round((t.width / t.height) * 100)) + "vw"),
                                    i.attr("sizes", e).attr("srcset", t.opts.srcset)),
                                t.$ghost &&
                                    setTimeout(function () {
                                        t.$ghost && !o.isClosing && t.$ghost.hide();
                                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                                o.hideLoading(t));
                    })
                    .addClass("fancybox-image")
                    .attr("src", t.src)
                    .appendTo(t.$content)),
                    (a.complete || "complete" == a.readyState) && i.naturalWidth && i.naturalHeight ? i.trigger("load") : a.error && i.trigger("error");
            },
            resolveImageSlideSize: function (t, e, n) {
                var o = parseInt(t.opts.width, 10),
                    a = parseInt(t.opts.height, 10);
                (t.width = e), (t.height = n), o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))), a > 0 && ((t.width = Math.floor((a * e) / n)), (t.height = a));
            },
            setIframe: function (t) {
                var e,
                    a = this,
                    i = t.opts.iframe,
                    s = t.$slide;
                n.fancybox.isMobile && (i.css.overflow = "scroll"),
                    (t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>')
                        .css(i.css)
                        .appendTo(s)),
                    s.addClass("fancybox-slide--" + t.contentType),
                    (t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                        .attr(i.attr)
                        .appendTo(t.$content)),
                    i.preload
                        ? (a.showLoading(t),
                          e.on("load.fb error.fb", function (e) {
                              (this.isReady = 1), t.$slide.trigger("refresh"), a.afterLoad(t);
                          }),
                          s.on("refresh.fb", function () {
                              var n,
                                  a,
                                  r = t.$content,
                                  c = i.css.width,
                                  l = i.css.height;
                              if (1 === e[0].isReady) {
                                  try {
                                      (n = e.contents()), (a = n.find("body"));
                                  } catch (t) {}
                                  a &&
                                      a.length &&
                                      a.children().length &&
                                      (s.css("overflow", "visible"),
                                      r.css({ width: "100%", "max-width": "100%", height: "9999px" }),
                                      c === o && (c = Math.ceil(Math.max(a[0].clientWidth, a.outerWidth(!0)))),
                                      r.css("width", c ? c : "").css("max-width", ""),
                                      l === o && (l = Math.ceil(Math.max(a[0].clientHeight, a.outerHeight(!0)))),
                                      r.css("height", l ? l : ""),
                                      s.css("overflow", "auto")),
                                      r.removeClass("fancybox-is-hidden");
                              }
                          }))
                        : a.afterLoad(t),
                    e.attr("src", t.src),
                    s.one("onReset", function () {
                        try {
                            n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                        } catch (t) {}
                        n(this).off("refresh.fb").empty(), (t.isLoaded = !1), (t.isRevealed = !1);
                    });
            },
            setContent: function (t, e) {
                var o = this;
                o.isClosing ||
                    (o.hideLoading(t),
                    t.$content && n.fancybox.stop(t.$content),
                    t.$slide.empty(),
                    l(e) && e.parent().length
                        ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                          (t.$placeholder = n("<div>").hide().insertAfter(e)),
                          e.css("display", "inline-block"))
                        : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                    t.$slide.one("onReset", function () {
                        n(this).find("video,audio").trigger("pause"),
                            t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), (t.$placeholder = null)),
                            t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                            t.hasError || (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
                    }),
                    n(e).appendTo(t.$slide),
                    n(e).is("video,audio") &&
                        (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), (t.contentType = "video"), (t.opts.width = t.opts.width || n(e).attr("width")), (t.opts.height = t.opts.height || n(e).attr("height"))),
                    (t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first()),
                    t.$content.siblings().hide(),
                    t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                    t.$content.addClass("fancybox-content"),
                    t.$slide.addClass("fancybox-slide--" + t.contentType),
                    o.afterLoad(t));
            },
            setError: function (t) {
                (t.hasError = !0),
                    t.$slide
                        .trigger("onReset")
                        .removeClass("fancybox-slide--" + t.contentType)
                        .addClass("fancybox-slide--error"),
                    (t.contentType = "html"),
                    this.setContent(t, this.translate(t, t.opts.errorTpl)),
                    t.pos === this.currPos && (this.isAnimating = !1);
            },
            showLoading: function (t) {
                var e = this;
                (t = t || e.current), t && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
            },
            hideLoading: function (t) {
                var e = this;
                (t = t || e.current), t && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
            },
            afterLoad: function (t) {
                var e = this;
                e.isClosing ||
                    ((t.isLoading = !1),
                    (t.isLoaded = !0),
                    e.trigger("afterLoad", t),
                    e.hideLoading(t),
                    !t.opts.smallBtn || (t.$smallBtn && t.$smallBtn.length) || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                    t.opts.protect &&
                        t.$content &&
                        !t.hasError &&
                        (t.$content.on("contextmenu.fb", function (t) {
                            return 2 == t.button && t.preventDefault(), !0;
                        }),
                        "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                    e.adjustCaption(t),
                    e.adjustLayout(t),
                    t.pos === e.currPos && e.updateCursor(),
                    e.revealContent(t));
            },
            adjustCaption: function (t) {
                var e = this,
                    n = t || e.current,
                    o = n.opts.caption,
                    a = e.$refs.caption,
                    i = !1;
                n.opts.preventCaptionOverlap &&
                    o &&
                    o.length &&
                    (n.pos !== e.currPos ? ((a = a.clone().empty().appendTo(a.parent())), a.html(o), (i = a.outerHeight(!0)), a.empty().remove()) : e.$caption && (i = e.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", i || ""));
            },
            adjustLayout: function (t) {
                var e,
                    n,
                    o,
                    a,
                    i = this,
                    s = t || i.current;
                s.isLoaded &&
                    s.opts.disableLayoutFix !== !0 &&
                    (s.$content.css("margin-bottom", ""),
                    s.$content.outerHeight() > s.$slide.height() + 0.5 &&
                        ((o = s.$slide[0].style["padding-bottom"]),
                        (a = s.$slide.css("padding-bottom")),
                        parseFloat(a) > 0 && ((e = s.$slide[0].scrollHeight), s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = a), s.$slide.css("padding-bottom", o))),
                    s.$content.css("margin-bottom", n));
            },
            revealContent: function (t) {
                var e,
                    a,
                    i,
                    s,
                    r = this,
                    c = t.$slide,
                    l = !1,
                    d = !1,
                    u = r.isMoved(t),
                    f = t.isRevealed;
                return (
                    (t.isRevealed = !0),
                    (e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"]),
                    (i = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"]),
                    (i = parseInt(t.forcedDuration === o ? i : t.forcedDuration, 10)),
                    (!u && t.pos === r.currPos && i) || (e = !1),
                    "zoom" === e && (t.pos === r.currPos && i && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? (l = r.getFitPos(t)) : (e = "fade")),
                    "zoom" === e
                        ? ((r.isAnimating = !0),
                          (l.scaleX = l.width / d.width),
                          (l.scaleY = l.height / d.height),
                          (s = t.opts.zoomOpacity),
                          "auto" == s && (s = Math.abs(t.width / t.height - d.width / d.height) > 0.1),
                          s && ((d.opacity = 0.1), (l.opacity = 1)),
                          n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d),
                          p(t.$content),
                          void n.fancybox.animate(t.$content, l, i, function () {
                              (r.isAnimating = !1), r.complete();
                          }))
                        : (r.updateSlide(t),
                          e
                              ? (n.fancybox.stop(c),
                                (a = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e),
                                c.addClass(a).removeClass("fancybox-slide--current"),
                                t.$content.removeClass("fancybox-is-hidden"),
                                p(c),
                                "image" !== t.type && t.$content.hide().show(0),
                                void n.fancybox.animate(
                                    c,
                                    "fancybox-slide--current",
                                    i,
                                    function () {
                                        c.removeClass(a).css({ transform: "", opacity: "" }), t.pos === r.currPos && r.complete();
                                    },
                                    !0
                                ))
                              : (t.$content.removeClass("fancybox-is-hidden"), f || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === r.currPos && r.complete())))
                );
            },
            getThumbPos: function (t) {
                var e,
                    o,
                    a,
                    i,
                    s,
                    r = !1,
                    c = t.$thumb;
                return (
                    !(!c || !g(c[0])) &&
                    ((e = n.fancybox.getTranslate(c)),
                    (o = parseFloat(c.css("border-top-width") || 0)),
                    (a = parseFloat(c.css("border-right-width") || 0)),
                    (i = parseFloat(c.css("border-bottom-width") || 0)),
                    (s = parseFloat(c.css("border-left-width") || 0)),
                    (r = { top: e.top + o, left: e.left + s, width: e.width - a - s, height: e.height - o - i, scaleX: 1, scaleY: 1 }),
                    e.width > 0 && e.height > 0 && r)
                );
            },
            complete: function () {
                var t,
                    e = this,
                    o = e.current,
                    a = {};
                !e.isMoved() &&
                    o.isLoaded &&
                    (o.isComplete ||
                        ((o.isComplete = !0),
                        o.$slide.siblings().trigger("onReset"),
                        e.preload("inline"),
                        p(o.$slide),
                        o.$slide.addClass("fancybox-slide--complete"),
                        n.each(e.slides, function (t, o) {
                            o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? (a[o.pos] = o) : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
                        }),
                        (e.slides = a)),
                    (e.isAnimating = !1),
                    e.updateCursor(),
                    e.trigger("afterShow"),
                    o.opts.video.autoStart &&
                        o.$slide
                            .find("video,audio")
                            .filter(":visible:first")
                            .trigger("play")
                            .one("ended", function () {
                                this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
                            }),
                    o.opts.autoFocus && "html" === o.contentType && ((t = o.$content.find("input[autofocus]:enabled:visible:first")), t.length ? t.trigger("focus") : e.focus(null, !0)),
                    o.$slide.scrollTop(0).scrollLeft(0));
            },
            preload: function (t) {
                var e,
                    n,
                    o = this;
                o.group.length < 2 || ((n = o.slides[o.currPos + 1]), (e = o.slides[o.currPos - 1]), e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n));
            },
            focus: function (t, o) {
                var a,
                    i,
                    s = this,
                    r = [
                        "a[href]",
                        "area[href]",
                        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                        "select:not([disabled]):not([aria-hidden])",
                        "textarea:not([disabled]):not([aria-hidden])",
                        "button:not([disabled]):not([aria-hidden])",
                        "iframe",
                        "object",
                        "embed",
                        "[contenteditable]",
                        '[tabindex]:not([tabindex^="-"])',
                    ].join(",");
                s.isClosing ||
                    ((a = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible")),
                    (a = a.filter(r).filter(function () {
                        return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
                    })),
                    a.length
                        ? ((i = a.index(e.activeElement)),
                          t && t.shiftKey ? (i < 0 || 0 == i) && (t.preventDefault(), a.eq(a.length - 1).trigger("focus")) : (i < 0 || i == a.length - 1) && (t && t.preventDefault(), a.eq(0).trigger("focus")))
                        : s.$refs.container.trigger("focus"));
            },
            activate: function () {
                var t = this;
                n(".fancybox-container").each(function () {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
                }),
                    (t.isVisible = !0),
                    (t.current || t.isIdle) && (t.update(), t.updateControls()),
                    t.trigger("onActivate"),
                    t.addEvents();
            },
            close: function (t, e) {
                var o,
                    a,
                    i,
                    s,
                    r,
                    c,
                    l,
                    u = this,
                    f = u.current,
                    h = function () {
                        u.cleanUp(t);
                    };
                return (
                    !u.isClosing &&
                    ((u.isClosing = !0),
                    u.trigger("beforeClose", t) === !1
                        ? ((u.isClosing = !1),
                          d(function () {
                              u.update();
                          }),
                          !1)
                        : (u.removeEvents(),
                          (i = f.$content),
                          (o = f.opts.animationEffect),
                          (a = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
                          f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                          t !== !0 ? n.fancybox.stop(f.$slide) : (o = !1),
                          f.$slide.siblings().trigger("onReset").remove(),
                          a &&
                              u.$refs.container
                                  .removeClass("fancybox-is-open")
                                  .addClass("fancybox-is-closing")
                                  .css("transition-duration", a + "ms"),
                          u.hideLoading(f),
                          u.hideControls(!0),
                          u.updateCursor(),
                          "zoom" !== o || (i && a && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f))) || (o = "fade"),
                          "zoom" === o
                              ? (n.fancybox.stop(i),
                                (s = n.fancybox.getTranslate(i)),
                                (c = { top: s.top, left: s.left, scaleX: s.width / l.width, scaleY: s.height / l.height, width: l.width, height: l.height }),
                                (r = f.opts.zoomOpacity),
                                "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                                r && (l.opacity = 0),
                                n.fancybox.setTranslate(i, c),
                                p(i),
                                n.fancybox.animate(i, l, a, h),
                                !0)
                              : (o && a ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, a, h) : t === !0 ? setTimeout(h, a) : h(), !0)))
                );
            },
            cleanUp: function (e) {
                var o,
                    a,
                    i,
                    s = this,
                    r = s.current.opts.$orig;
                s.current.$slide.trigger("onReset"),
                    s.$refs.container.empty().remove(),
                    s.trigger("afterClose", e),
                    s.current.opts.backFocus && ((r && r.length && r.is(":visible")) || (r = s.$trigger), r && r.length && ((a = t.scrollX), (i = t.scrollY), r.trigger("focus"), n("html, body").scrollTop(i).scrollLeft(a))),
                    (s.current = null),
                    (o = n.fancybox.getInstance()),
                    o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
            },
            trigger: function (t, e) {
                var o,
                    a = Array.prototype.slice.call(arguments, 1),
                    i = this,
                    s = e && e.opts ? e : i.current;
                return (
                    s ? a.unshift(s) : (s = i), a.unshift(i), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, a)), o === !1 ? o : void ("afterClose" !== t && i.$refs ? i.$refs.container.trigger(t + ".fb", a) : r.trigger(t + ".fb", a))
                );
            },
            updateControls: function () {
                var t = this,
                    o = t.current,
                    a = o.index,
                    i = t.$refs.container,
                    s = t.$refs.caption,
                    r = o.opts.caption;
                o.$slide.trigger("refresh"),
                    (t.$caption = r && r.length ? s.html(r) : null),
                    t.hasHiddenControls || t.isIdle || t.showControls(),
                    i.find("[data-fancybox-count]").html(t.group.length),
                    i.find("[data-fancybox-index]").html(a + 1),
                    i.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && a <= 0),
                    i.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && a >= t.group.length - 1),
                    "image" === o.type
                        ? i
                              .find("[data-fancybox-zoom]")
                              .show()
                              .end()
                              .find("[data-fancybox-download]")
                              .attr("href", o.opts.image.src || o.src)
                              .show()
                        : o.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                    n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
            },
            hideControls: function (t) {
                var e = this,
                    n = ["infobar", "toolbar", "nav"];
                (!t && e.current.opts.preventCaptionOverlap) || n.push("caption"),
                    this.$refs.container.removeClass(
                        n
                            .map(function (t) {
                                return "fancybox-show-" + t;
                            })
                            .join(" ")
                    ),
                    (this.hasHiddenControls = !0);
            },
            showControls: function () {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;
                (t.hasHiddenControls = !1),
                    (t.idleSecondsCounter = 0),
                    n
                        .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
                        .toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1))
                        .toggleClass("fancybox-show-caption", !!t.$caption)
                        .toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1))
                        .toggleClass("fancybox-is-modal", !!e.modal);
            },
            toggleControls: function () {
                this.hasHiddenControls ? this.showControls() : this.hideControls();
            },
        }),
            (n.fancybox = {
                version: "3.5.2",
                defaults: i,
                getInstance: function (t) {
                    var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        o = Array.prototype.slice.call(arguments, 1);
                    return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
                },
                open: function (t, e, n) {
                    return new b(t, e, n);
                },
                close: function (t) {
                    var e = this.getInstance();
                    e && (e.close(), t === !0 && this.close(t));
                },
                destroy: function () {
                    this.close(!0), r.add("body").off("click.fb-start", "**");
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: (function () {
                    var n = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
                })(),
                getTranslate: function (t) {
                    var e;
                    return !(!t || !t.length) && ((e = t[0].getBoundingClientRect()), { top: e.top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity")) });
                },
                setTranslate: function (t, e) {
                    var n = "",
                        a = {};
                    if (t && e)
                        return (
                            (e.left === o && e.top === o) ||
                                ((n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px"), (n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")")),
                            e.scaleX !== o && e.scaleY !== o ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")") : e.scaleX !== o && (n += " scaleX(" + e.scaleX + ")"),
                            n.length && (a.transform = n),
                            e.opacity !== o && (a.opacity = e.opacity),
                            e.width !== o && (a.width = e.width),
                            e.height !== o && (a.height = e.height),
                            t.css(a)
                        );
                },
                animate: function (t, e, a, i, s) {
                    var r,
                        c = this;
                    n.isFunction(a) && ((i = a), (a = null)),
                        c.stop(t),
                        (r = c.getTranslate(t)),
                        t.on(f, function (l) {
                            (!l || !l.originalEvent || (t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName)) &&
                                (c.stop(t),
                                n.isNumeric(a) && t.css("transition-duration", ""),
                                n.isPlainObject(e)
                                    ? e.scaleX !== o && e.scaleY !== o && c.setTranslate(t, { top: e.top, left: e.left, width: r.width * e.scaleX, height: r.height * e.scaleY, scaleX: 1, scaleY: 1 })
                                    : s !== !0 && t.removeClass(e),
                                n.isFunction(i) && i(l));
                        }),
                        n.isNumeric(a) && t.css("transition-duration", a + "ms"),
                        n.isPlainObject(e)
                            ? (e.scaleX !== o && e.scaleY !== o && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e))
                            : t.addClass(e),
                        t.data(
                            "timer",
                            setTimeout(function () {
                                t.trigger(f);
                            }, a + 33)
                        );
                },
                stop: function (t, e) {
                    t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
                },
            }),
            (n.fn.fancybox = function (t) {
                var e;
                return (t = t || {}), (e = t.selector || !1), e ? n("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, a) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, a), this;
            }),
            r.on("click.fb-start", "[data-fancybox]", a),
            r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
                    .eq(n(this).attr("data-fancybox-index") || 0)
                    .trigger("click.fb-start", { $trigger: n(this) });
            }),
            (function () {
                var t = ".fancybox-button",
                    e = "fancybox-focus",
                    o = null;
                r.on("mousedown mouseup focus blur", t, function (a) {
                    switch (a.type) {
                        case "mousedown":
                            o = n(this);
                            break;
                        case "mouseup":
                            o = null;
                            break;
                        case "focusin":
                            n(t).removeClass(e), n(this).is(o) || n(this).is("[disabled]") || n(this).addClass(e);
                            break;
                        case "focusout":
                            n(t).removeClass(e);
                    }
                });
            })();
    }
})(window, document, jQuery),
    (function (t) {
        "use strict";
        var e = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                    paramPlace: 8,
                    type: "iframe",
                    url: "//www.youtube-nocookie.com/embed/$4",
                    thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
                },
                vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" },
                instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function (t) {
                        return (
                            "//maps.google." +
                            t[2] +
                            "/?ll=" +
                            (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") +
                            "&output=" +
                            (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        );
                    },
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function (t) {
                        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                    },
                },
            },
            n = function (e, n, o) {
                if (e)
                    return (
                        (o = o || ""),
                        "object" === t.type(o) && (o = t.param(o, !0)),
                        t.each(n, function (t, n) {
                            e = e.replace("$" + t, n || "");
                        }),
                        o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
                        e
                    );
            };
        t(document).on("objectNeedsType.fb", function (o, a, i) {
            var s,
                r,
                c,
                l,
                d,
                u,
                f,
                p = i.src || "",
                h = !1;
            (s = t.extend(!0, {}, e, i.opts.media)),
                t.each(s, function (e, o) {
                    if ((c = p.match(o.matcher))) {
                        if (((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])) {
                            (d = c[o.paramPlace]), "?" == d[0] && (d = d.substring(1)), (d = d.split("&"));
                            for (var a = 0; a < d.length; ++a) {
                                var s = d[a].split("=", 2);
                                2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
                            }
                        }
                        return (
                            (l = t.extend(!0, {}, o.params, i.opts[e], u)),
                            (p = "function" === t.type(o.url) ? o.url.call(this, c, l, i) : n(o.url, c, l)),
                            (r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, i) : n(o.thumb, c)),
                            "youtube" === e
                                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                                      return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
                                  }))
                                : "vimeo" === e && (p = p.replace("&%23", "#")),
                            !1
                        );
                    }
                }),
                h
                    ? (i.opts.thumb || (i.opts.$thumb && i.opts.$thumb.length) || (i.opts.thumb = r),
                      "iframe" === h && (i.opts = t.extend(!0, i.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })),
                      t.extend(i, { type: h, src: p, origSrc: i.src, contentSource: f, contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video" }))
                    : p && (i.type = i.opts.defaultType);
        });
        var o = {
            youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 },
            vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 },
            load: function (t) {
                var e,
                    n = this;
                return this[t].loaded
                    ? void setTimeout(function () {
                          n.done(t);
                      })
                    : void (
                          this[t].loading ||
                          ((this[t].loading = !0),
                          (e = document.createElement("script")),
                          (e.type = "text/javascript"),
                          (e.src = this[t].src),
                          "youtube" === t
                              ? (window.onYouTubeIframeAPIReady = function () {
                                    (n[t].loaded = !0), n.done(t);
                                })
                              : (e.onload = function () {
                                    (n[t].loaded = !0), n.done(t);
                                }),
                          document.body.appendChild(e))
                      );
            },
            done: function (e) {
                var n, o, a;
                "youtube" === e && delete window.onYouTubeIframeAPIReady,
                    (n = t.fancybox.getInstance()),
                    n &&
                        ((o = n.current.$content.find("iframe")),
                        "youtube" === e && void 0 !== YT && YT
                            ? (a = new YT.Player(o.attr("id"), {
                                  events: {
                                      onStateChange: function (t) {
                                          0 == t.data && n.next();
                                      },
                                  },
                              }))
                            : "vimeo" === e &&
                              void 0 !== Vimeo &&
                              Vimeo &&
                              ((a = new Vimeo.Player(o)),
                              a.on("ended", function () {
                                  n.next();
                              })));
            },
        };
        t(document).on({
            "afterShow.fb": function (t, e, n) {
                e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource);
            },
        });
    })(jQuery),
    (function (t, e, n) {
        "use strict";
        var o = (function () {
                return (
                    t.requestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.oRequestAnimationFrame ||
                    function (e) {
                        return t.setTimeout(e, 1e3 / 60);
                    }
                );
            })(),
            a = (function () {
                return (
                    t.cancelAnimationFrame ||
                    t.webkitCancelAnimationFrame ||
                    t.mozCancelAnimationFrame ||
                    t.oCancelAnimationFrame ||
                    function (e) {
                        t.clearTimeout(e);
                    }
                );
            })(),
            i = function (e) {
                var n = [];
                (e = e.originalEvent || e || t.e), (e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]);
                for (var o in e) e[o].pageX ? n.push({ x: e[o].pageX, y: e[o].pageY }) : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
                return n;
            },
            s = function (t, e, n) {
                return e && t ? ("x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))) : 0;
            },
            r = function (t) {
                if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                for (var e = 0, o = t[0].attributes, a = o.length; e < a; e++) if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
                return !1;
            },
            c = function (e) {
                var n = t.getComputedStyle(e)["overflow-y"],
                    o = t.getComputedStyle(e)["overflow-x"],
                    a = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                    i = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
                return a || i;
            },
            l = function (t) {
                for (var e = !1; ; ) {
                    if ((e = c(t.get(0)))) break;
                    if (((t = t.parent()), !t.length || t.hasClass("fancybox-stage") || t.is("body"))) break;
                }
                return e;
            },
            d = function (t) {
                var e = this;
                (e.instance = t), (e.$bg = t.$refs.bg), (e.$stage = t.$refs.stage), (e.$container = t.$refs.container), e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
            };
        (d.prototype.destroy = function () {
            var t = this;
            t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (a(t.requestId), (t.requestId = null)), t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
        }),
            (d.prototype.ontouchstart = function (o) {
                var a = this,
                    c = n(o.target),
                    d = a.instance,
                    u = d.current,
                    f = u.$slide,
                    p = u.$content,
                    h = "touchstart" == o.type;
                if (
                    (h && a.$container.off("mousedown.fb.touch"),
                    (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
                ) {
                    if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
                    (a.realPoints = a.startPoints = i(o)),
                        a.startPoints.length &&
                            (u.touch && o.stopPropagation(),
                            (a.startEvent = o),
                            (a.canTap = !0),
                            (a.$target = c),
                            (a.$content = p),
                            (a.opts = u.opts.touch),
                            (a.isPanning = !1),
                            (a.isSwiping = !1),
                            (a.isZooming = !1),
                            (a.isScrolling = !1),
                            (a.canPan = d.canPan()),
                            (a.startTime = new Date().getTime()),
                            (a.distanceX = a.distanceY = a.distance = 0),
                            (a.canvasWidth = Math.round(f[0].clientWidth)),
                            (a.canvasHeight = Math.round(f[0].clientHeight)),
                            (a.contentLastPos = null),
                            (a.contentStartPos = n.fancybox.getTranslate(a.$content) || { top: 0, left: 0 }),
                            (a.sliderStartPos = n.fancybox.getTranslate(f)),
                            (a.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
                            (a.sliderStartPos.top -= a.stagePos.top),
                            (a.sliderStartPos.left -= a.stagePos.left),
                            (a.contentStartPos.top -= a.stagePos.top),
                            (a.contentStartPos.left -= a.stagePos.left),
                            n(e)
                                .off(".fb.touch")
                                .on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(a, "ontouchend"))
                                .on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(a, "ontouchmove")),
                            n.fancybox.isMobile && e.addEventListener("scroll", a.onscroll, !0),
                            (((a.opts || a.canPan) && (c.is(a.$stage) || a.$stage.find(c).length)) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.hasClass("fancybox-caption"))) &&
                                ((a.isScrollable = l(c) || l(c.parent())),
                                (n.fancybox.isMobile && a.isScrollable) || o.preventDefault(),
                                (1 === a.startPoints.length || u.hasError) && (a.canPan ? (n.fancybox.stop(a.$content), (a.isPanning = !0)) : (a.isSwiping = !0), a.$container.addClass("fancybox-is-grabbing")),
                                2 === a.startPoints.length &&
                                    "image" === u.type &&
                                    (u.isLoaded || u.$ghost) &&
                                    ((a.canTap = !1),
                                    (a.isSwiping = !1),
                                    (a.isPanning = !1),
                                    (a.isZooming = !0),
                                    n.fancybox.stop(a.$content),
                                    (a.centerPointStartX = 0.5 * (a.startPoints[0].x + a.startPoints[1].x) - n(t).scrollLeft()),
                                    (a.centerPointStartY = 0.5 * (a.startPoints[0].y + a.startPoints[1].y) - n(t).scrollTop()),
                                    (a.percentageOfImageAtPinchPointX = (a.centerPointStartX - a.contentStartPos.left) / a.contentStartPos.width),
                                    (a.percentageOfImageAtPinchPointY = (a.centerPointStartY - a.contentStartPos.top) / a.contentStartPos.height),
                                    (a.startDistanceBetweenFingers = s(a.startPoints[0], a.startPoints[1])))));
                }
            }),
            (d.prototype.onscroll = function (t) {
                var n = this;
                (n.isScrolling = !0), e.removeEventListener("scroll", n.onscroll, !0);
            }),
            (d.prototype.ontouchmove = function (t) {
                var e = this;
                return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons
                    ? void e.ontouchend(t)
                    : e.isScrolling
                    ? void (e.canTap = !1)
                    : ((e.newPoints = i(t)),
                      void (
                          (e.opts || e.canPan) &&
                          e.newPoints.length &&
                          e.newPoints.length &&
                          ((e.isSwiping && e.isSwiping === !0) || t.preventDefault(),
                          (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
                          (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
                          (e.distance = s(e.newPoints[0], e.startPoints[0])),
                          e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))
                      ));
            }),
            (d.prototype.onSwipe = function (e) {
                var i,
                    s = this,
                    r = s.instance,
                    c = s.isSwiping,
                    l = s.sliderStartPos.left || 0;
                if (c !== !0)
                    "x" == c &&
                        (s.distanceX > 0 && (s.instance.group.length < 2 || (0 === s.instance.current.index && !s.instance.current.opts.loop))
                            ? (l += Math.pow(s.distanceX, 0.8))
                            : s.distanceX < 0 && (s.instance.group.length < 2 || (s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop))
                            ? (l -= Math.pow(-s.distanceX, 0.8))
                            : (l += s.distanceX)),
                        (s.sliderLastPos = { top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY, left: l }),
                        s.requestId && (a(s.requestId), (s.requestId = null)),
                        (s.requestId = o(function () {
                            s.sliderLastPos &&
                                (n.each(s.instance.slides, function (t, e) {
                                    var o = e.pos - s.instance.currPos;
                                    n.fancybox.setTranslate(e.$slide, { top: s.sliderLastPos.top, left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter });
                                }),
                                s.$container.addClass("fancybox-is-sliding"));
                        }));
                else if (Math.abs(s.distance) > 10) {
                    if (
                        ((s.canTap = !1),
                        r.group.length < 2 && s.opts.vertical
                            ? (s.isSwiping = "y")
                            : r.isDragging || s.opts.vertical === !1 || ("auto" === s.opts.vertical && n(t).width() > 800)
                            ? (s.isSwiping = "x")
                            : ((i = Math.abs((180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI)), (s.isSwiping = i > 45 && i < 135 ? "y" : "x")),
                        "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
                    )
                        return void (s.isScrolling = !0);
                    (r.isDragging = s.isSwiping),
                        (s.startPoints = s.newPoints),
                        n.each(r.slides, function (t, e) {
                            var o, a;
                            n.fancybox.stop(e.$slide),
                                (o = n.fancybox.getTranslate(e.$slide)),
                                (a = n.fancybox.getTranslate(r.$refs.stage)),
                                e.$slide
                                    .css({ transform: "", opacity: "", "transition-duration": "" })
                                    .removeClass("fancybox-animated")
                                    .removeClass(function (t, e) {
                                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                    }),
                                e.pos === r.current.pos && ((s.sliderStartPos.top = o.top - a.top), (s.sliderStartPos.left = o.left - a.left)),
                                n.fancybox.setTranslate(e.$slide, { top: o.top - a.top, left: o.left - a.left });
                        }),
                        r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
                }
            }),
            (d.prototype.onPan = function () {
                var t = this;
                return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)
                    ? void (t.startPoints = t.newPoints)
                    : ((t.canTap = !1),
                      (t.contentLastPos = t.limitMovement()),
                      t.requestId && a(t.requestId),
                      void (t.requestId = o(function () {
                          n.fancybox.setTranslate(t.$content, t.contentLastPos);
                      })));
            }),
            (d.prototype.limitMovement = function () {
                var t,
                    e,
                    n,
                    o,
                    a,
                    i,
                    s = this,
                    r = s.canvasWidth,
                    c = s.canvasHeight,
                    l = s.distanceX,
                    d = s.distanceY,
                    u = s.contentStartPos,
                    f = u.left,
                    p = u.top,
                    h = u.width,
                    g = u.height;
                return (
                    (a = h > r ? f + l : f),
                    (i = p + d),
                    (t = Math.max(0, 0.5 * r - 0.5 * h)),
                    (e = Math.max(0, 0.5 * c - 0.5 * g)),
                    (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
                    (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
                    l > 0 && a > t && (a = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
                    l < 0 && a < n && (a = n + 1 - Math.pow(n - f - l, 0.8) || 0),
                    d > 0 && i > e && (i = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
                    d < 0 && i < o && (i = o + 1 - Math.pow(o - p - d, 0.8) || 0),
                    { top: i, left: a }
                );
            }),
            (d.prototype.limitPosition = function (t, e, n, o) {
                var a = this,
                    i = a.canvasWidth,
                    s = a.canvasHeight;
                return n > i ? ((t = t > 0 ? 0 : t), (t = t < i - n ? i - n : t)) : (t = Math.max(0, i / 2 - n / 2)), o > s ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e)) : (e = Math.max(0, s / 2 - o / 2)), { top: e, left: t };
            }),
            (d.prototype.onZoom = function () {
                var e = this,
                    i = e.contentStartPos,
                    r = i.width,
                    c = i.height,
                    l = i.left,
                    d = i.top,
                    u = s(e.newPoints[0], e.newPoints[1]),
                    f = u / e.startDistanceBetweenFingers,
                    p = Math.floor(r * f),
                    h = Math.floor(c * f),
                    g = (r - p) * e.percentageOfImageAtPinchPointX,
                    b = (c - h) * e.percentageOfImageAtPinchPointY,
                    m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
                    v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
                    y = m - e.centerPointStartX,
                    x = v - e.centerPointStartY,
                    w = l + (g + y),
                    $ = d + (b + x),
                    S = { top: $, left: w, scaleX: f, scaleY: f };
                (e.canTap = !1),
                    (e.newWidth = p),
                    (e.newHeight = h),
                    (e.contentLastPos = S),
                    e.requestId && a(e.requestId),
                    (e.requestId = o(function () {
                        n.fancybox.setTranslate(e.$content, e.contentLastPos);
                    }));
            }),
            (d.prototype.ontouchend = function (t) {
                var o = this,
                    s = o.isSwiping,
                    r = o.isPanning,
                    c = o.isZooming,
                    l = o.isScrolling;
                return (
                    (o.endPoints = i(t)),
                    (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
                    o.$container.removeClass("fancybox-is-grabbing"),
                    n(e).off(".fb.touch"),
                    e.removeEventListener("scroll", o.onscroll, !0),
                    o.requestId && (a(o.requestId), (o.requestId = null)),
                    (o.isSwiping = !1),
                    (o.isPanning = !1),
                    (o.isZooming = !1),
                    (o.isScrolling = !1),
                    (o.instance.isDragging = !1),
                    o.canTap ? o.onTap(t) : ((o.speed = 100), (o.velocityX = (o.distanceX / o.dMs) * 0.5), (o.velocityY = (o.distanceY / o.dMs) * 0.5), void (r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)))
                );
            }),
            (d.prototype.endSwiping = function (t, e) {
                var o = this,
                    a = !1,
                    i = o.instance.group.length,
                    s = Math.abs(o.distanceX),
                    r = "x" == t && i > 1 && ((o.dMs > 130 && s > 10) || s > 50),
                    c = 300;
                (o.sliderLastPos = null),
                    "y" == t && !e && Math.abs(o.distanceY) > 50
                        ? (n.fancybox.animate(o.instance.current.$slide, { top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY, opacity: 0 }, 200), (a = o.instance.close(!0, 250)))
                        : r && o.distanceX > 0
                        ? (a = o.instance.previous(c))
                        : r && o.distanceX < 0 && (a = o.instance.next(c)),
                    a !== !1 || ("x" != t && "y" != t) || o.instance.centerSlide(200),
                    o.$container.removeClass("fancybox-is-sliding");
            }),
            (d.prototype.endPanning = function () {
                var t,
                    e,
                    o,
                    a = this;
                a.contentLastPos &&
                    (a.opts.momentum === !1 || a.dMs > 350 ? ((t = a.contentLastPos.left), (e = a.contentLastPos.top)) : ((t = a.contentLastPos.left + 500 * a.velocityX), (e = a.contentLastPos.top + 500 * a.velocityY)),
                    (o = a.limitPosition(t, e, a.contentStartPos.width, a.contentStartPos.height)),
                    (o.width = a.contentStartPos.width),
                    (o.height = a.contentStartPos.height),
                    n.fancybox.animate(a.$content, o, 330));
            }),
            (d.prototype.endZooming = function () {
                var t,
                    e,
                    o,
                    a,
                    i = this,
                    s = i.instance.current,
                    r = i.newWidth,
                    c = i.newHeight;
                i.contentLastPos &&
                    ((t = i.contentLastPos.left),
                    (e = i.contentLastPos.top),
                    (a = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
                    n.fancybox.setTranslate(i.$content, a),
                    r < i.canvasWidth && c < i.canvasHeight
                        ? i.instance.scaleToFit(150)
                        : r > s.width || c > s.height
                        ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150)
                        : ((o = i.limitPosition(t, e, r, c)), n.fancybox.animate(i.$content, o, 150)));
            }),
            (d.prototype.onTap = function (e) {
                var o,
                    a = this,
                    s = n(e.target),
                    r = a.instance,
                    c = r.current,
                    l = (e && i(e)) || a.startPoints,
                    d = l[0] ? l[0].x - n(t).scrollLeft() - a.stagePos.left : 0,
                    u = l[0] ? l[0].y - n(t).scrollTop() - a.stagePos.top : 0,
                    f = function (t) {
                        var o = c.opts[t];
                        if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
                            switch (o) {
                                case "close":
                                    r.close(a.startEvent);
                                    break;
                                case "toggleControls":
                                    r.toggleControls();
                                    break;
                                case "next":
                                    r.next();
                                    break;
                                case "nextOrClose":
                                    r.group.length > 1 ? r.next() : r.close(a.startEvent);
                                    break;
                                case "zoom":
                                    "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(a.startEvent));
                            }
                    };
                if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
                    if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
                    else if (s.is(".fancybox-slide")) o = "Slide";
                    else {
                        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
                        o = "Content";
                    }
                    if (a.tapped) {
                        if ((clearTimeout(a.tapped), (a.tapped = null), Math.abs(d - a.tapX) > 50 || Math.abs(u - a.tapY) > 50)) return this;
                        f("dblclick" + o);
                    } else
                        (a.tapX = d),
                            (a.tapY = u),
                            c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o]
                                ? (a.tapped = setTimeout(function () {
                                      (a.tapped = null), r.isAnimating || f("click" + o);
                                  }, 500))
                                : f("click" + o);
                    return this;
                }
            }),
            n(e)
                .on("onActivate.fb", function (t, e) {
                    e && !e.Guestures && (e.Guestures = new d(e));
                })
                .on("beforeClose.fb", function (t, e) {
                    e && e.Guestures && e.Guestures.destroy();
                });
    })(window, document, jQuery),
    (function (t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        var n = function (t) {
            (this.instance = t), this.init();
        };
        e.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this,
                    n = t.instance,
                    o = n.group[n.currIndex].opts.slideShow;
                (t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    t.toggle();
                })),
                    n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
            },
            set: function (t) {
                var n = this,
                    o = n.instance,
                    a = o.current;
                a && (t === !0 || a.opts.loop || o.currIndex < o.group.length - 1)
                    ? n.isActive &&
                      "video" !== a.contentType &&
                      (n.$progress && e.fancybox.animate(n.$progress.show(), { scaleX: 1 }, a.opts.slideShow.speed),
                      (n.timer = setTimeout(function () {
                          o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0);
                      }, a.opts.slideShow.speed)))
                    : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
            },
            clear: function () {
                var t = this;
                clearTimeout(t.timer), (t.timer = null), t.$progress && t.$progress.removeAttr("style").hide();
            },
            start: function () {
                var t = this,
                    e = t.instance.current;
                e &&
                    (t.$button
                        .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP)
                        .removeClass("fancybox-button--play")
                        .addClass("fancybox-button--pause"),
                    (t.isActive = !0),
                    e.isComplete && t.set(!0),
                    t.instance.trigger("onSlideShowChange", !0));
            },
            stop: function () {
                var t = this,
                    e = t.instance.current;
                t.clear(),
                    t.$button
                        .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START)
                        .removeClass("fancybox-button--pause")
                        .addClass("fancybox-button--play"),
                    (t.isActive = !1),
                    t.instance.trigger("onSlideShowChange", !1),
                    t.$progress && t.$progress.removeAttr("style").hide();
            },
            toggle: function () {
                var t = this;
                t.isActive ? t.stop() : t.start();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    e && !e.SlideShow && (e.SlideShow = new n(e));
                },
                "beforeShow.fb": function (t, e, n, o) {
                    var a = e && e.SlideShow;
                    o ? a && n.opts.slideShow.autoStart && a.start() : a && a.isActive && a.clear();
                },
                "afterShow.fb": function (t, e, n) {
                    var o = e && e.SlideShow;
                    o && o.isActive && o.set();
                },
                "afterKeydown.fb": function (n, o, a, i, s) {
                    var r = o && o.SlideShow;
                    !r || !a.opts.slideShow || (80 !== s && 32 !== s) || e(t.activeElement).is("button,a,input") || (i.preventDefault(), r.toggle());
                },
                "beforeClose.fb onDeactivate.fb": function (t, e) {
                    var n = e && e.SlideShow;
                    n && n.stop();
                },
            }),
            e(t).on("visibilitychange", function () {
                var n = e.fancybox.getInstance(),
                    o = n && n.SlideShow;
                o && o.isActive && (t.hidden ? o.clear() : o.set());
            });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        var n = (function () {
            for (
                var e = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                    ],
                    n = {},
                    o = 0;
                o < e.length;
                o++
            ) {
                var a = e[o];
                if (a && a[1] in t) {
                    for (var i = 0; i < a.length; i++) n[e[0][i]] = a[i];
                    return n;
                }
            }
            return !1;
        })();
        if (n) {
            var o = {
                request: function (e) {
                    (e = e || t.documentElement), e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
                },
                exit: function () {
                    t[n.exitFullscreen]();
                },
                toggle: function (e) {
                    (e = e || t.documentElement), this.isFullscreen() ? this.exit() : this.request(e);
                },
                isFullscreen: function () {
                    return Boolean(t[n.fullscreenElement]);
                },
                enabled: function () {
                    return Boolean(t[n.fullscreenEnabled]);
                },
            };
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    fullScreen:
                        '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
                },
                fullScreen: { autoStart: !1 },
            }),
                e(t).on(n.fullscreenchange, function () {
                    var t = o.isFullscreen(),
                        n = e.fancybox.getInstance();
                    n &&
                        (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), (n.isAnimating = !1), n.update(!0, !0, 0)),
                        n.trigger("onFullscreenChange", t),
                        n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
                        n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
                });
        }
        e(t).on({
            "onInit.fb": function (t, e) {
                var a;
                return n
                    ? void (e && e.group[e.currIndex].opts.fullScreen
                          ? ((a = e.$refs.container),
                            a.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                                t.stopPropagation(), t.preventDefault(), o.toggle();
                            }),
                            e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(),
                            (e.FullScreen = o))
                          : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide())
                    : void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
            },
            "afterKeydown.fb": function (t, e, n, o, a) {
                e && e.FullScreen && 70 === a && (o.preventDefault(), e.FullScreen.toggle());
            },
            "beforeClose.fb": function (t, e) {
                e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
            },
        });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        var n = "fancybox-thumbs",
            o = n + "-active";
        e.fancybox.defaults = e.extend(
            !0,
            {
                btnTpl: {
                    thumbs:
                        '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
                },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
            },
            e.fancybox.defaults
        );
        var a = function (t) {
            this.init(t);
        };
        e.extend(a.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this,
                    n = t.group,
                    o = 0;
                (e.instance = t), (e.opts = n[t.currIndex].opts.thumbs), (t.Thumbs = e), (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
                for (var a = 0, i = n.length; a < i && (n[a].thumb && o++, !(o > 1)); a++);
                o > 1 && e.opts
                    ? (e.$button.removeAttr("style").on("click", function () {
                          e.toggle();
                      }),
                      (e.isActive = !0))
                    : e.$button.hide();
            },
            create: function () {
                var t,
                    o = this,
                    a = o.instance,
                    i = o.opts.parentEl,
                    s = [];
                o.$grid ||
                    ((o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(a.$refs.container.find(i).addBack().filter(i))),
                    o.$grid.on("click", "a", function () {
                        a.jumpTo(e(this).attr("data-index"));
                    })),
                    o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
                    e.each(a.group, function (e, n) {
                        (t = n.thumb),
                            t || "image" !== n.type || (t = n.src),
                            s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
                    }),
                    (o.$list[0].innerHTML = s.join("")),
                    "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + a.group.length * o.$list.children().eq(0).outerWidth(!0));
            },
            focus: function (t) {
                var e,
                    n,
                    a = this,
                    i = a.$list,
                    s = a.$grid;
                a.instance.current &&
                    ((e = i
                        .children()
                        .removeClass(o)
                        .filter('[data-index="' + a.instance.current.index + '"]')
                        .addClass(o)),
                    (n = e.position()),
                    "y" === a.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight())
                        ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
                        : "x" === a.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && i.parent().stop().animate({ scrollLeft: n.left }, t));
            },
            update: function () {
                var t = this;
                t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                    t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
                    t.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    var n;
                    e && !e.Thumbs && ((n = new a(e)), n.isActive && n.opts.autoStart === !0 && n.show());
                },
                "beforeShow.fb": function (t, e, n, o) {
                    var a = e && e.Thumbs;
                    a && a.isVisible && a.focus(o ? 0 : 250);
                },
                "afterKeydown.fb": function (t, e, n, o, a) {
                    var i = e && e.Thumbs;
                    i && i.isActive && 71 === a && (o.preventDefault(), i.toggle());
                },
                "beforeClose.fb": function (t, e) {
                    var n = e && e.Thumbs;
                    n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide();
                },
            });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        function n(t) {
            var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };
            return String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return e[t];
            });
        }
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                share:
                    '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
            },
            share: {
                url: function (t, e) {
                    return (!t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src)) || window.location;
                },
                tpl:
                    '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
            },
        }),
            e(t).on("click", "[data-fancybox-share]", function () {
                var t,
                    o,
                    a = e.fancybox.getInstance(),
                    i = a.current || null;
                i &&
                    ("function" === e.type(i.opts.share.url) && (t = i.opts.share.url.apply(i, [a, i])),
                    (o = i.opts.share.tpl
                        .replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "")
                        .replace(/\{\{url\}\}/g, encodeURIComponent(t))
                        .replace(/\{\{url_raw\}\}/g, n(t))
                        .replace(/\{\{descr\}\}/g, a.$caption ? encodeURIComponent(a.$caption.text()) : "")),
                    e.fancybox.open({
                        src: a.translate(a, o),
                        type: "html",
                        opts: {
                            touch: !1,
                            animationEffect: !1,
                            afterLoad: function (t, e) {
                                a.$refs.container.one("beforeClose.fb", function () {
                                    t.close(null, 0);
                                }),
                                    e.$content.find(".fancybox-share__button").click(function () {
                                        return window.open(this.href, "Share", "width=550, height=450"), !1;
                                    });
                            },
                            mobile: { autoFocus: !1 },
                        },
                    }));
            });
    })(document, jQuery),
    (function (t, e, n) {
        "use strict";
        function o() {
            var e = t.location.hash.substr(1),
                n = e.split("-"),
                o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
                a = n.join("-");
            return { hash: e, index: o < 1 ? 1 : o, gallery: a };
        }
        function a(t) {
            "" !== t.gallery &&
                n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
                    .eq(t.index - 1)
                    .focus()
                    .trigger("click.fb-start");
        }
        function i(t) {
            var e, n;
            return !!t && ((e = t.current ? t.current.opts : t.opts), (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")), "" !== n && n);
        }
        n.escapeSelector ||
            (n.escapeSelector = function (t) {
                var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                    n = function (t, e) {
                        return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                    };
                return (t + "").replace(e, n);
            }),
            n(function () {
                n.fancybox.defaults.hash !== !1 &&
                    (n(e).on({
                        "onInit.fb": function (t, e) {
                            var n, a;
                            e.group[e.currIndex].opts.hash !== !1 && ((n = o()), (a = i(e)), a && n.gallery && a == n.gallery && (e.currIndex = n.index - 1));
                        },
                        "beforeShow.fb": function (n, o, a, s) {
                            var r;
                            a &&
                                a.opts.hash !== !1 &&
                                ((r = i(o)),
                                r &&
                                    ((o.currentHash = r + (o.group.length > 1 ? "-" + (a.index + 1) : "")),
                                    t.location.hash !== "#" + o.currentHash &&
                                        (s && !o.origHash && (o.origHash = t.location.hash),
                                        o.hashTimer && clearTimeout(o.hashTimer),
                                        (o.hashTimer = setTimeout(function () {
                                            "replaceState" in t.history
                                                ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0))
                                                : (t.location.hash = o.currentHash),
                                                (o.hashTimer = null);
                                        }, 300)))));
                        },
                        "beforeClose.fb": function (n, o, a) {
                            a.opts.hash !== !1 &&
                                (clearTimeout(o.hashTimer),
                                o.currentHash && o.hasCreatedHistory
                                    ? t.history.back()
                                    : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : (t.location.hash = o.origHash)),
                                (o.currentHash = null));
                        },
                    }),
                    n(t).on("hashchange.fb", function () {
                        var t = o(),
                            e = null;
                        n.each(n(".fancybox-container").get().reverse(), function (t, o) {
                            var a = n(o).data("FancyBox");
                            if (a && a.currentHash) return (e = a), !1;
                        }),
                            e ? e.currentHash === t.gallery + "-" + t.index || (1 === t.index && e.currentHash == t.gallery) || ((e.currentHash = null), e.close()) : "" !== t.gallery && a(t);
                    }),
                    setTimeout(function () {
                        n.fancybox.getInstance() || a(o());
                    }, 50));
            });
    })(window, document, jQuery),
    (function (t, e) {
        "use strict";
        var n = new Date().getTime();
        e(t).on({
            "onInit.fb": function (t, e, o) {
                e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                    var o = e.current,
                        a = new Date().getTime();
                    e.group.length < 2 ||
                        o.opts.wheel === !1 ||
                        ("auto" === o.opts.wheel && "image" !== o.type) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        o.$slide.hasClass("fancybox-animated") || ((t = t.originalEvent || t), a - n < 250 || ((n = a), e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
                });
            },
        });
    })(document, jQuery);

!(function (e, t) {
    if ("function" == typeof define && define.amd) define(["exports"], t);
    else if ("undefined" != typeof exports) t(exports);
    else {
        var o = {};
        t(o), (e.bodyScrollLock = o);
    }
})(this, function (exports) {
    "use strict";
    function r(e) {
        if (Array.isArray(e)) {
            for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
            return o;
        }
        return Array.from(e);
    }
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var l = !1;
    if ("undefined" != typeof window) {
        var e = {
            get passive() {
                l = !0;
            },
        };
        window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
    }
    var d = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
        c = [],
        u = !1,
        a = -1,
        s = void 0,
        v = void 0,
        f = function (t) {
            return c.some(function (e) {
                return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t));
            });
        },
        m = function (e) {
            var t = e || window.event;
            return !!f(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1);
        },
        o = function () {
            setTimeout(function () {
                void 0 !== v && ((document.body.style.paddingRight = v), (v = void 0)), void 0 !== s && ((document.body.style.overflow = s), (s = void 0));
            });
        };
    (exports.disableBodyScroll = function (i, e) {
        if (d) {
            if (!i) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
            if (
                i &&
                !c.some(function (e) {
                    return e.targetElement === i;
                })
            ) {
                var t = { targetElement: i, options: e || {} };
                (c = [].concat(r(c), [t])),
                    (i.ontouchstart = function (e) {
                        1 === e.targetTouches.length && (a = e.targetTouches[0].clientY);
                    }),
                    (i.ontouchmove = function (e) {
                        var t, o, n, r;
                        1 === e.targetTouches.length &&
                            ((o = i), (r = (t = e).targetTouches[0].clientY - a), !f(t.target) && (o && 0 === o.scrollTop && 0 < r ? m(t) : (n = o) && n.scrollHeight - n.scrollTop <= n.clientHeight && r < 0 ? m(t) : t.stopPropagation()));
                    }),
                    u || (document.addEventListener("touchmove", m, l ? { passive: !1 } : void 0), (u = !0));
            }
        } else {
            (n = e),
                setTimeout(function () {
                    if (void 0 === v) {
                        var e = !!n && !0 === n.reserveScrollBarGap,
                            t = window.innerWidth - document.documentElement.clientWidth;
                        e && 0 < t && ((v = document.body.style.paddingRight), (document.body.style.paddingRight = t + "px"));
                    }
                    void 0 === s && ((s = document.body.style.overflow), (document.body.style.overflow = "hidden"));
                });
            var o = { targetElement: i, options: e || {} };
            c = [].concat(r(c), [o]);
        }
        var n;
    }),
        (exports.clearAllBodyScrollLocks = function () {
            d
                ? (c.forEach(function (e) {
                      (e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null);
                  }),
                  u && (document.removeEventListener("touchmove", m, l ? { passive: !1 } : void 0), (u = !1)),
                  (c = []),
                  (a = -1))
                : (o(), (c = []));
        }),
        (exports.enableBodyScroll = function (t) {
            if (d) {
                if (!t) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                (t.ontouchstart = null),
                    (t.ontouchmove = null),
                    (c = c.filter(function (e) {
                        return e.targetElement !== t;
                    })),
                    u && 0 === c.length && (document.removeEventListener("touchmove", m, l ? { passive: !1 } : void 0), (u = !1));
            } else
                1 === c.length && c[0].targetElement === t
                    ? (o(), (c = []))
                    : (c = c.filter(function (e) {
                          return e.targetElement !== t;
                      }));
        });
});

/*

 0BSD

*/

(function (F, y) {
    "function" === typeof define && define.amd ? define(y) : "object" === typeof exports ? (module.exports = y()) : (F.pickmeup = y());
})(this, function () {
    function F(a, c, b) {
        b = b || [];
        if (a instanceof Element) c.apply(c, [a].concat(b));
        else {
            var d;
            var e = a.length;
            for (d = 0; d < e; ++d) c.apply(c, [a[d]].concat(b));
        }
    }
    function y(a) {
        F(a, function (a) {
            a.parentElement.removeChild(a);
        });
    }
    function J(a, c) {
        do a = a.parentElement;
        while (a && !B(a, c));
        return a;
    }
    function B(a, c) {
        return (a.matches || a.webkitMatchesSelector || a.msMatchesSelector).call(
            a,

            c
        );
    }
    function k(a, c) {
        return a && a.classList.contains(c);
    }
    function l(a, c) {
        a.classList.add(c);
    }
    function q(a, c, b, d) {
        if (-1 !== b.indexOf(" ")) {
            b = b.split(" ");
            var e = b.length,
                h;
            for (h = 0; h < e; ++h) q(a, c, b[h], d);
        } else a.__pickmeup.events.push([c, b, d]), c.addEventListener(b, d);
    }
    function z(a, c, b, d) {
        var e;
        if (b && -1 !== b.indexOf(" ")) {
            var h = b.split(" ");
            var l = h.length;
            for (e = 0; e < l; ++e) z(a, c, h[e], d);
        } else
            for (h = a.__pickmeup.events, l = h.length, e = 0; e < l; ++e)
                (c && c !== h[e][0]) ||
                    (b && b !== h[e][1]) ||
                    (d && d !== h[e][2]) ||
                    h[e][0].removeEventListener(
                        h[e][1],

                        h[e][2]
                    );
    }
    function M(a) {
        a = a.getBoundingClientRect();
        return { top: a.top + window.pageYOffset - document.documentElement.clientTop, left: a.left + window.pageXOffset - document.documentElement.clientLeft };
    }
    function C(a, c, b) {
        var d = document.createEvent("Event");
        b && (d.detail = b);
        d.initEvent("pickmeup-" + c, !1, !0);
        return a.dispatchEvent(d);
    }
    function K(a) {
        a = new Date(a);
        for (var c = 28, b = a.getMonth(); a.getMonth() === b; ) ++c, a.setDate(c);
        return c - 1;
    }
    function A(a, c) {
        a.setDate(a.getDate() + c);
    }
    function p(a, c) {
        var b = a.getDate();
        a.setDate(1);

        a.setMonth(a.getMonth() + c);
        a.setDate(Math.min(b, K(a)));
    }
    function u(a, c) {
        var b = a.getDate();
        a.setDate(1);
        a.setFullYear(a.getFullYear() + c);
        a.setDate(Math.min(b, K(a)));
    }
    function N(a) {
        var c = a.__pickmeup.element,
            b = a.__pickmeup.options,
            d = Math.floor(b.calendars / 2),
            e = b.date,
            h = b.current,
            m = b.min ? new Date(b.min) : null,
            v = b.max ? new Date(b.max) : null;
        m && (m.setDate(1), p(m, 1), A(m, -1));
        v && (v.setDate(1), p(v, 1), A(v, -1));
        y(Array.prototype.slice.call(c.querySelectorAll(".pmu-instance > :not(nav)")));
        for (var w = 0; w < b.calendars; w++) {
            var f = new Date(h);
            x(f);
            var n = Array.prototype.slice.call(c.querySelectorAll(".pmu-instance"))[w];
            if (k(c, "pmu-view-years")) {
                u(f, 12 * (w - d));
                var G = f.getFullYear() - 6 + " - " + (f.getFullYear() + 5);
            } else
                k(c, "pmu-view-months")
                    ? (u(f, w - d), (G = f.getFullYear()))
                    : k(c, "pmu-view-days") && (p(f, w - d), (G = "function" === typeof b.title_format ? b.title_format(f, b.locales[b.locale]) : D(f, b.title_format, b.locales[b.locale])));
            if (!r && v) {
                var r = new Date(f);
                b.select_day ? p(r, b.calendars - 1) : b.select_month ? u(r, b.calendars - 1) : u(r, 12 * (b.calendars - 1));

                if (r > v) {
                    --w;
                    p(h, -1);
                    r = void 0;
                    continue;
                }
            }
            r = new Date(f);
            if (!g) {
                var g = new Date(f);
                g.setDate(1);
                p(g, 1);
                A(g, -1);
                if (m && m > g) {
                    --w;
                    p(h, 1);
                    g = void 0;
                    continue;
                }
            }
            n.querySelector(".pmu-month").innerHTML = G;
            var q = function (a) {
                    return (
                        ("range" === b.mode && a >= new Date(e[0]).getFullYear() && a <= new Date(e[1]).getFullYear()) ||
                        ("multiple" === b.mode &&
                            -1 !==
                                e
                                    .reduce(function (a, b) {
                                        a.push(new Date(b).getFullYear());
                                        return a;
                                    }, [])
                                    .indexOf(a)) ||
                        new Date(e).getFullYear() === a
                    );
                },
                t = function (a, c) {
                    var d = new Date(e[0]).getFullYear(),
                        f = new Date(e[1]).getFullYear(),
                        h = new Date(e[0]).getMonth(),
                        g = new Date(e[1]).getMonth();
                    return (
                        ("range" === b.mode && ((a > d && a < f) || (a > d && a === f && c <= g) || (a === d && a < f && c >= h) || (a === d && a === f && c >= h && c <= g))) ||
                        ("multiple" === b.mode &&
                            -1 !==
                                e
                                    .reduce(function (a, b) {
                                        b = new Date(b);
                                        a.push(b.getFullYear() + "-" + b.getMonth());
                                        return a;
                                    }, [])
                                    .indexOf(a + "-" + c)) ||
                        (new Date(e).getFullYear() === a && new Date(e).getMonth() === c)
                    );
                };
            (function () {
                var a = [],
                    c = f.getFullYear() - 6,
                    d = new Date(b.min).getFullYear(),
                    e = new Date(b.max).getFullYear(),
                    h;
                for (h = 0; 12 > h; ++h) {
                    var g = c + h;
                    var m = document.createElement("div");
                    m.textContent = g;
                    m.__pickmeup_year = g;
                    (b.min && g < d) || (b.max && g > e) ? l(m, "pmu-disabled") : q(g) && l(m, "pmu-selected");
                    a.push(m);
                }
                n.appendChild(b.instance_content_template(a, "pmu-years"));
            })();
            (function () {
                var a = [],
                    c = f.getFullYear(),
                    d = new Date(b.min).getFullYear(),
                    e = new Date(b.min).getMonth(),
                    g = new Date(b.max).getFullYear(),
                    h = new Date(b.max).getMonth(),
                    m;
                for (m = 0; 12 > m; ++m) {
                    var k = document.createElement("div");
                    k.textContent = b.locales[b.locale].monthsShort[m];
                    k.__pickmeup_month = m;

                    k.__pickmeup_year = c;
                    (b.min && (c < d || (m < e && c === d))) || (b.max && (c > g || (m > h && c >= g))) ? l(k, "pmu-disabled") : t(c, m) && l(k, "pmu-selected");
                    a.push(k);
                }
                n.appendChild(b.instance_content_template(a, "pmu-months"));
            })();
            (function () {
                var a = [],
                    c = f.getMonth(),
                    d = x(new Date()).valueOf(),
                    e;
                (function () {
                    f.setDate(1);
                    var a = (f.getDay() - b.first_day) % 7;
                    A(f, -(a + (0 > a ? 7 : 0)));
                })();
                for (e = 0; 42 > e; ++e) {
                    var g = document.createElement("div");
                    g.textContent = f.getDate();
                    g.__pickmeup_day = f.getDate();
                    g.__pickmeup_month = f.getMonth();
                    g.__pickmeup_year = f.getFullYear();

                    c !== f.getMonth() && l(g, "pmu-not-in-month");
                    0 === f.getDay() ? l(g, "pmu-sunday") : 6 === f.getDay() && l(g, "pmu-saturday");
                    var h = b.render(new Date(f)) || {};
                    var m = x(new Date(f)).valueOf();
                    var k = (b.min && b.min > f) || (b.max && b.max < f);
                    var v =
                        b.date.valueOf() === m ||
                        (b.date instanceof Array &&
                            b.date.reduce(function (a, b) {
                                return a || m === b.valueOf();
                            }, !1)) ||
                        ("range" === b.mode && m >= b.date[0] && m <= b.date[1]);
                    h.disabled || (!("disabled" in h) && k) ? l(g, "pmu-disabled") : (h.selected || (!("selected" in h) && v)) && l(g, "pmu-selected");
                    m === d && l(g, "pmu-today");

                    h.class_name && h.class_name.split(" ").forEach(l.bind(g, g));
                    a.push(g);
                    A(f, 1);
                }
                n.appendChild(b.instance_content_template(a, "pmu-days"));
            })();
        }
        g.setDate(1);
        r.setDate(1);
        p(r, 1);
        A(r, -1);
        d = c.querySelector(".pmu-prev");
        c = c.querySelector(".pmu-next");
        d && (d.style.visibility = b.min && b.min >= g ? "hidden" : "visible");
        c && (c.style.visibility = b.max && b.max <= r ? "hidden" : "visible");
        C(a, "fill");
    }
    function t(a, c) {
        var b = c.format,
            d = c.separator,
            e = c.locales[c.locale];
        if (a instanceof Date || a instanceof Number) return x(new Date(a));

        if (!a) return x(new Date());
        if (a instanceof Array) {
            a = a.slice();
            for (b = 0; b < a.length; ++b) a[b] = t(a[b], c);
            return a;
        }
        d = a.split(d);
        if (1 < d.length)
            return (
                d.forEach(function (a, b, d) {
                    d[b] = t(a.trim(), c);
                }),
                d
            );
        d = [].concat(e.daysShort, e.daysMin, e.days, e.monthsShort, e.months);
        d = d.map(function (a) {
            return "(" + a + ")";
        });
        d = new RegExp("[^0-9a-zA-Z" + d.join("") + "]+");
        a = a.split(d);
        d = b.split(d);
        var h = new Date();
        for (b = 0; b < a.length; b++)
            switch (d[b]) {
                case "b":
                    var m = e.monthsShort.indexOf(a[b]);
                    break;
                case "B":
                    m = e.months.indexOf(a[b]);
                    break;

                case "d":
                case "e":
                    var l = parseInt(a[b], 10);
                    break;
                case "m":
                    m = parseInt(a[b], 10) - 1;
                    break;
                case "Y":
                case "y":
                    var k = parseInt(a[b], 10);
                    k += 100 < k ? 0 : 29 > k ? 2e3 : 1900;
                    break;
                case "H":
                case "I":
                case "k":
                case "l":
                    var f = parseInt(a[b], 10);
                    break;
                case "P":
                case "p":
                    /pm/i.test(a[b]) && 12 > f ? (f += 12) : /am/i.test(a[b]) && 12 <= f && (f -= 12);
                    break;
                case "M":
                    var n = parseInt(a[b], 10);
            }
        e = new Date(void 0 === k ? h.getFullYear() : k, void 0 === m ? h.getMonth() : m, void 0 === l ? h.getDate() : l, void 0 === f ? h.getHours() : f, void 0 === n ? h.getMinutes() : n, 0);
        isNaN(1 * e) && (e = new Date());
        return x(e);
    }
    function x(a) {
        a.setHours(0, 0, 0, 0);
        return a;
    }
    function D(a, c, b) {
        var d = a.getMonth(),
            e = a.getDate(),
            h = a.getFullYear(),
            m = a.getDay(),
            k = a.getHours(),
            l = 12 <= k,
            f = l ? k - 12 : k;
        var n = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0);
        var p = new Date(a.getFullYear(), 0, 0, 0, 0, 0);
        n = Math.floor((n - p) / 864e5);
        0 === f && (f = 12);
        p = a.getMinutes();
        var r = a.getSeconds();
        c = c.split("");
        for (var g, q = 0; q < c.length; q++) {
            g = c[q];
            switch (g) {
                case "a":
                    g = b.daysShort[m];
                    break;
                case "A":
                    g = b.days[m];
                    break;
                case "b":
                    g = b.monthsShort[d];

                    break;
                case "B":
                    g = b.months[d];
                    break;
                case "C":
                    g = 1 + Math.floor(h / 100);
                    break;
                case "d":
                    g = 10 > e ? "0" + e : e;
                    break;
                case "e":
                    g = e;
                    break;
                case "H":
                    g = 10 > k ? "0" + k : k;
                    break;
                case "I":
                    g = 10 > f ? "0" + f : f;
                    break;
                case "j":
                    g = 100 > n ? (10 > n ? "00" + n : "0" + n) : n;
                    break;
                case "k":
                    g = k;
                    break;
                case "l":
                    g = f;
                    break;
                case "m":
                    g = 9 > d ? "0" + (1 + d) : 1 + d;
                    break;
                case "M":
                    g = 10 > p ? "0" + p : p;
                    break;
                case "p":
                case "P":
                    g = l ? "PM" : "AM";
                    break;
                case "s":
                    g = Math.floor(a.getTime() / 1e3);
                    break;
                case "S":
                    g = 10 > r ? "0" + r : r;
                    break;
                case "u":
                    g = m + 1;
                    break;
                case "w":
                    g = m;
                    break;
                case "y":
                    g = ("" + h).substr(
                        2,

                        2
                    );
                    break;
                case "Y":
                    g = h;
            }
            c[q] = g;
        }
        return c.join("");
    }
    function O(a, c) {
        var b = a.__pickmeup.options,
            d;
        x(c);
        a: switch (b.mode) {
            case "multiple":
                var e = c.valueOf();
                for (d = 0; d < b.date.length; ++d)
                    if (b.date[d].valueOf() === e) {
                        b.date.splice(d, 1);
                        break a;
                    }
                b.date.push(c);
                break;
            case "range":
                b.lastSel || (b.date[0] = c);
                c <= b.date[0] ? ((b.date[1] = b.date[0]), (b.date[0] = c)) : (b.date[1] = c);
                b.lastSel = !b.lastSel;
                break;
            default:
                b.date = c.valueOf();
        }
        c = H(b);
        B(a, "input") && (a.value = "single" === b.mode ? c.formatted_date : c.formatted_date.join(b.separator));

        C(a, "change", c);
        b.flat || !b.hide_on_select || ("range" === b.mode && b.lastSel) || b.bound.hide();
    }
    function P(a, c) {
        var b = c.target;
        k(b, "pmu-button") || (b = J(b, ".pmu-button"));
        if (!k(b, "pmu-button") || k(b, "pmu-disabled")) return !1;
        c.preventDefault();
        c.stopPropagation();
        a = a.__pickmeup.options;
        var d = J(b, ".pmu-instance");
        c = d.parentElement;
        d = Array.prototype.slice.call(c.querySelectorAll(".pmu-instance")).indexOf(d);
        B(b.parentElement, "nav")
            ? k(b, "pmu-month")
                ? (p(a.current, d - Math.floor(a.calendars / 2)),
                  k(c, "pmu-view-years")
                      ? ((a.current = "single" !== a.mode ? new Date(a.date[a.date.length - 1]) : new Date(a.date)),
                        a.select_day ? (c.classList.remove("pmu-view-years"), l(c, "pmu-view-days")) : a.select_month && (c.classList.remove("pmu-view-years"), l(c, "pmu-view-months")))
                      : k(c, "pmu-view-months")
                      ? a.select_year
                          ? (c.classList.remove("pmu-view-months"), l(c, "pmu-view-years"))
                          : a.select_day && (c.classList.remove("pmu-view-months"), l(c, "pmu-view-days"))
                      : k(c, "pmu-view-days") && (a.select_month ? (c.classList.remove("pmu-view-days"), l(c, "pmu-view-months")) : a.select_year && (c.classList.remove("pmu-view-days"), l(c, "pmu-view-years"))))
                : k(b, "pmu-prev")
                ? a.bound.prev(!1)
                : a.bound.next(!1)
            : k(c, "pmu-view-years")
            ? (a.current.setFullYear(b.__pickmeup_year),
              a.select_month ? (c.classList.remove("pmu-view-years"), l(c, "pmu-view-months")) : a.select_day ? (c.classList.remove("pmu-view-years"), l(c, "pmu-view-days")) : a.bound.update_date(a.current))
            : k(c, "pmu-view-months")
            ? (a.current.setMonth(b.__pickmeup_month),
              a.current.setFullYear(b.__pickmeup_year),
              a.select_day ? (c.classList.remove("pmu-view-months"), l(c, "pmu-view-days")) : a.bound.update_date(a.current),
              p(a.current, Math.floor(a.calendars / 2) - d))
            : ((c = new Date(a.current)), c.setYear(b.__pickmeup_year), c.setMonth(b.__pickmeup_month), c.setDate(b.__pickmeup_day), a.bound.update_date(c));
        a.bound.fill();
        return !0;
    }
    function H(a) {
        if ("single" === a.mode) {
            var c = new Date(a.date);
            return { formatted_date: D(c, a.format, a.locales[a.locale]), date: c };
        }
        c = { formatted_date: [], date: [] };
        a.date.forEach(function (b) {
            b = new Date(b);
            c.formatted_date.push(D(b, a.format, a.locales[a.locale]));

            c.date.push(b);
        });
        return c;
    }
    function I(a, c) {
        var b = a.__pickmeup.element;
        if (c || k(b, "pmu-hidden")) {
            var d = a.__pickmeup.options,
                e = M(a),
                h = window.pageXOffset,
                m = window.pageYOffset,
                l = document.documentElement.clientWidth,
                p = document.documentElement.clientHeight,
                f = e.top,
                n = e.left;
            d.bound.fill();
            B(a, "input") &&
                ((c = a.value) && d.bound.set_date(c),
                q(a, a, "keydown", function (a) {
                    9 === a.which && d.bound.hide();
                }),
                (d.lastSel = !1));
            if (C(a, "show") && !d.flat) {
                b.classList.remove("pmu-hidden");
                if (d.position instanceof Function) (e = d.position.call(a)), (n = e.left), (f = e.top);
                else {
                    switch (d.position) {
                        case "top":
                            f -= b.offsetHeight;
                            break;
                        case "left":
                            n -= b.offsetWidth;
                            break;
                        case "right":
                            n += a.offsetWidth;
                            break;
                        case "bottom":
                            f += a.offsetHeight;
                    }
                    f + b.offsetHeight > m + p && (f = e.top - b.offsetHeight);
                    f < m && (f = e.top + a.offsetHeight);
                    n + b.offsetWidth > h + l && (n = e.left - b.offsetWidth);
                    n < h && (n = e.left + a.offsetWidth);
                    n += "px";
                    f += "px";
                }
                b.style.left = n;
                b.style.top = f;
                setTimeout(function () {
                    q(a, document.documentElement, "click", d.bound.hide);
                    q(a, window, "resize", d.bound.forced_show);
                });
            }
        }
    }
    function Q(
        a,

        c
    ) {
        var b = a.__pickmeup.element,
            d = a.__pickmeup.options;
        (c && c.target && (c.target === a || b.compareDocumentPosition(c.target) & 16)) ||
            !C(a, "hide") ||
            (l(b, "pmu-hidden"), z(a, document.documentElement, "click", d.bound.hide), z(a, window, "resize", d.bound.forced_show), (d.lastSel = !1));
    }
    function R(a) {
        var c = a.__pickmeup.options;
        z(a, document.documentElement, "click", c.bound.hide);
        z(a, window, "resize", c.bound.forced_show);
        c.bound.forced_show();
    }
    function S(a) {
        a = a.__pickmeup.options;
        "single" !== a.mode && ((a.date = []), (a.lastSel = !1), a.bound.fill());
    }

    function T(a, c) {
        "undefined" == typeof c && (c = !0);
        var b = a.__pickmeup.element;
        a = a.__pickmeup.options;
        k(b, "pmu-view-years") ? u(a.current, -12) : k(b, "pmu-view-months") ? u(a.current, -1) : k(b, "pmu-view-days") && p(a.current, -1);
        c && a.bound.fill();
    }
    function U(a, c) {
        "undefined" == typeof c && (c = !0);
        var b = a.__pickmeup.element;
        a = a.__pickmeup.options;
        k(b, "pmu-view-years") ? u(a.current, 12) : k(b, "pmu-view-months") ? u(a.current, 1) : k(b, "pmu-view-days") && p(a.current, 1);
        c && a.bound.fill();
    }
    function V(a, c) {
        var b = a.__pickmeup.options;
        a = H(b);
        return "string" === typeof c
            ? ((a = a.date),
              a instanceof Date
                  ? D(a, c, b.locales[b.locale])
                  : a.map(function (a) {
                        return D(a, c, b.locales[b.locale]);
                    }))
            : a[c ? "formatted_date" : "date"];
    }
    function W(a, c, b) {
        var d = a.__pickmeup.options;
        if (!(c instanceof Array) || 0 < c.length)
            if (((d.date = t(c, d)), "single" !== d.mode))
                for (
                    d.date instanceof Array ? ((d.date[0] = d.date[0] || t(new Date(), d)), "range" === d.mode && (d.date[1] = d.date[1] || t(d.date[0], d))) : ((d.date = [d.date]), "range" === d.mode && d.date.push(t(d.date[0], d))),
                        c = 0;
                    c < d.date.length;
                    ++c
                )
                    d.date[c] = L(d.date[c], d.min, d.max);
            else d.date instanceof Array && (d.date = d.date[0]), (d.date = L(d.date, d.min, d.max));
        else d.date = [];
        if (!d.select_day)
            if (d.date instanceof Array) for (c = 0; c < d.date.length; ++c) d.date[c].setDate(1);
            else d.date.setDate(1);
        if ("multiple" === d.mode) for (c = 0; c < d.date.length; ++c) d.date.indexOf(d.date[c]) !== c && (d.date.splice(c, 1), --c);
        b ? (d.current = t(b, d)) : ((b = "single" === d.mode ? d.date : d.date[d.date.length - 1]), (d.current = b ? new Date(b) : new Date()));
        d.current.setDate(1);
        d.bound.fill();
        B(a, "input") && !1 !== d.default_date && ((b = H(d)), (c = a.value), (d = "single" === d.mode ? b.formatted_date : b.formatted_date.join(d.separator)), c || C(a, "change", b), c !== d && (a.value = d));
    }
    function X(a) {
        var c = a.__pickmeup.element;
        z(a);
        y(c);
        delete a.__pickmeup;
    }
    function L(a, c, b) {
        return c && c > a ? new Date(c) : b && b < a ? new Date(b) : a;
    }
    function E(a, c) {
        "string" == typeof a && (a = document.querySelector(a));
        if (!a) return null;
        if (!a.__pickmeup) {
            var b,
                d = {};
            c = c || {};
            for (b in E.defaults) d[b] = b in c ? c[b] : E.defaults[b];
            for (b in d) (c = a.getAttribute("data-pmu-" + b)), null !== c && (d[b] = c);
            "days" !== d.view || d.select_day || (d.view = "months");
            "months" !== d.view || d.select_month || (d.view = "years");
            "years" !== d.view || d.select_year || (d.view = "days");
            "days" !== d.view || d.select_day || (d.view = "months");
            d.calendars = Math.max(1, parseInt(d.calendars, 10) || 1);
            d.mode = /single|multiple|range/.test(d.mode) ? d.mode : "single";
            d.min && ((d.min = t(d.min, d)), d.select_day || d.min.setDate(1));
            d.max && ((d.max = t(d.max, d)), d.select_day || d.max.setDate(1));
            c = document.createElement("div");
            a.__pickmeup = {
                options: d,
                events: [],

                element: c,
            };
            c.__pickmeup_target = a;
            l(c, "pickmeup");
            d.class_name && l(c, d.class_name);
            d.bound = {
                fill: N.bind(a, a),
                update_date: O.bind(a, a),
                click: P.bind(a, a),
                show: I.bind(a, a),
                forced_show: I.bind(a, a, !0),
                hide: Q.bind(a, a),
                update: R.bind(a, a),
                clear: S.bind(a, a),
                prev: T.bind(a, a),
                next: U.bind(a, a),
                get_date: V.bind(a, a),
                set_date: W.bind(a, a),
                destroy: X.bind(a, a),
            };
            l(c, "pmu-view-" + d.view);
            var e = d.instance_template(d),
                h = "";
            for (b = 0; b < d.calendars; ++b) h += e;
            c.innerHTML = h;
            q(a, c, "click", d.bound.click);
            q(a, c, "onselectstart" in Element.prototype ? "selectstart" : "mousedown", function (a) {
                a.preventDefault();
            });
            d.flat ? (l(c, "pmu-flat"), a.appendChild(c)) : (l(c, "pmu-hidden"), document.body.appendChild(c), q(a, a, "click", I.bind(a, a, !1)), q(a, a, "input", d.bound.update), q(a, a, "change", d.bound.update));
            d.bound.set_date(d.date, d.current);
        }
        d = a.__pickmeup.options;
        return { hide: d.bound.hide, show: d.bound.show, clear: d.bound.clear, update: d.bound.update, prev: d.bound.prev, next: d.bound.next, get_date: d.bound.get_date, set_date: d.bound.set_date, destroy: d.bound.destroy };
    }
    E.defaults = {
        current: null,
        date: new Date(),
        default_date: new Date(),
        flat: !1,
        first_day: 1,
        prev: "&#9664;",
        next: "&#9654;",
        mode: "single",
        select_year: !0,
        select_month: !0,
        select_day: !0,
        view: "days",
        calendars: 1,
        format: "d-m-Y",
        title_format: "B, Y",
        position: "bottom",
        class_name: "",
        separator: " - ",
        hide_on_select: !1,
        min: null,
        max: null,
        render: function () {},
        locale: "en",
        locales: {
            en: {
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                daysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                daysMin: "Su Mo Tu We Th Fr Sa".split(" "),

                months: "January February March April May June July August September October November December".split(" "),
                monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            },
        },
        instance_template: function (a) {
            var c = a.locales[a.locale].daysMin.slice();
            a.first_day && c.push(c.shift());
            return (
                '<div class="pmu-instance"><nav><div class="pmu-prev pmu-button">' +
                a.prev +
                '</div><div class="pmu-month pmu-button"></div><div class="pmu-next pmu-button">' +
                a.next +
                '</div></nav><nav class="pmu-day-of-week"><div>' +
                c.join("</div><div>") +
                "</div></nav></div>"
            );
        },
        instance_content_template: function (a, c) {
            var b = document.createElement("div");
            l(b, c);
            for (c = 0; c < a.length; ++c) l(a[c], "pmu-button"), b.appendChild(a[c]);
            return b;
        },
    };
    return E;
});

pickmeup.defaults.locales["ru"] = {
    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],

    daysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],

    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],

    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],

    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
};

pickmeup.defaults.locales["az"] = {
    days: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],

    daysShort: ["B", "B.e", "Ç.a", "Ç", "C.a", "C", "Ş"],

    daysMin: ["B", "B.e", "Ç.a", "Ç", "C.a", "C", "Ş"],

    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],

    monthsShort: ["Yan", "Fev", "Mar", "Apr", "May", "İyun", "İyul", "Avq", "Sen", "Okt", "Noy", "Dek"],
};