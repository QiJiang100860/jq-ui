(function(e) {
  function t(t) {
    for (
      var n, l, u = t[0], s = t[1], i = t[2], c = 0, v = [];
      c < u.length;
      c++
    )
      (l = u[c]),
        Object.prototype.hasOwnProperty.call(o, l) && o[l] && v.push(o[l][0]),
        (o[l] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    p && p(t);
    while (v.length) v.shift()();
    return a.push.apply(a, i || []), r();
  }
  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, l = 1; l < r.length; l++) {
        var s = r[l];
        0 !== o[s] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = u((u.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = { index: 0 },
    a = [];
  function l(e) {
    return (
      u.p +
      "js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "cc4e470d" }[e] +
      ".js"
    );
  }
  function u(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, u), (r.l = !0), r.exports;
  }
  (u.e = function(e) {
    var t = [],
      r = o[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var n = new Promise(function(t, n) {
          r = o[e] = [t, n];
        });
        t.push((r[2] = n));
        var a,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          u.nc && s.setAttribute("nonce", u.nc),
          (s.src = l(e));
        var i = new Error();
        a = function(t) {
          (s.onerror = s.onload = null), clearTimeout(c);
          var r = o[e];
          if (0 !== r) {
            if (r) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (i.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + a + ")"),
                (i.name = "ChunkLoadError"),
                (i.type = n),
                (i.request = a),
                r[1](i);
            }
            o[e] = void 0;
          }
        };
        var c = setTimeout(function() {
          a({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = a), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (u.m = e),
    (u.c = n),
    (u.d = function(e, t, r) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (u.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function(e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (u.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          u.d(
            r,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (u.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = "/"),
    (u.oe = function(e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    i = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var p = i;
  a.push([0, "chunk-vendors"]), r();
})({
  0: function(e, t, r) {
    e.exports = r("c31f");
  },
  "54b3": function(e, t, r) {
    e.exports = r.p + "img/logo.82b9c7a5.png";
  },
  8610: function(e, t, r) {},
  c31f: function(e, t, r) {
    "use strict";
    r.r(t);
    r("e623"), r("e379"), r("5dc8"), r("37e1");
    var n = r("2b0e"),
      o = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { attrs: { id: "app" } },
          [
            r(
              "div",
              { attrs: { id: "nav" } },
              [
                r("router-link", { attrs: { to: "/" } }, [e._v("Home")]),
                e._v(" | "),
                r("router-link", { attrs: { to: "/about" } }, [e._v("About")])
              ],
              1
            ),
            r("router-view")
          ],
          1
        );
      },
      a = [],
      l = r("2877"),
      u = {},
      s = Object(l["a"])(u, o, a, !1, null, null, null),
      i = s.exports,
      c = (r("d3b7"), r("8c4f")),
      p = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "home" },
          [
            n("img", { attrs: { alt: "Vue logo", src: r("54b3") } }),
            n("HelloWorld", { attrs: { msg: "Welcome to Your Vue.js App" } })
          ],
          1
        );
      },
      v = [],
      f = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { staticClass: "hello" }, [
          r("h1", [e._v(e._s(e.msg))]),
          e._m(0),
          r("h3", [e._v("Installed CLI Plugins")]),
          e._m(1),
          r("h3", [e._v("Essential Links")]),
          e._m(2),
          r("h3", [e._v("Ecosystem")]),
          e._m(3)
        ]);
      },
      h = [
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("p", [
            e._v(
              " For a guide and recipes on how to configure / customize this project,"
            ),
            r("br"),
            e._v(" check out the "),
            r(
              "a",
              {
                attrs: {
                  href: "https://cli.vuejs.org",
                  target: "_blank",
                  rel: "noopener"
                }
              },
              [e._v("vue-cli documentation")]
            ),
            e._v(". ")
          ]);
        },
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("ul", [
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href:
                      "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("babel")]
              )
            ]),
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href:
                      "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("eslint")]
              )
            ]),
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href:
                      "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("unit-mocha")]
              )
            ])
          ]);
        },
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("ul", [
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href: "https://vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("Core Docs")]
              )
            ]),
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href: "https://forum.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("Forum")]
              )
            ]),
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href: "https://chat.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("Community Chat")]
              )
            ]),
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href: "https://twitter.com/vuejs",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("Twitter")]
              )
            ]),
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href: "https://news.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("News")]
              )
            ])
          ]);
        },
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("ul", [
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href: "https://router.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("vue-router")]
              )
            ]),
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href: "https://vuex.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("vuex")]
              )
            ]),
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href: "https://github.com/vuejs/vue-devtools#vue-devtools",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("vue-devtools")]
              )
            ]),
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href: "https://vue-loader.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("vue-loader")]
              )
            ]),
            r("li", [
              r(
                "a",
                {
                  attrs: {
                    href: "https://github.com/vuejs/awesome-vue",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("awesome-vue")]
              )
            ])
          ]);
        }
      ],
      d = { name: "HelloWorld", props: { msg: String } },
      m = d,
      b = (r("cb1b"), Object(l["a"])(m, f, h, !1, null, "3e3d634d", null)),
      _ = b.exports,
      g = { name: "Home", components: { HelloWorld: _ } },
      j = g,
      k = Object(l["a"])(j, p, v, !1, null, null, null),
      y = k.exports;
    n["a"].use(c["a"]);
    var w = [
        { path: "/", name: "Home", component: y },
        {
          path: "/about",
          name: "About",
          component: function() {
            return r.e("about").then(r.bind(null, "c2a7"));
          }
        }
      ],
      O = new c["a"]({ routes: w }),
      x = O,
      C = r("2f62");
    n["a"].use(C["a"]);
    var E = new C["a"].Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {}
      }),
      P =
        (r("b0c0"),
        function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "data-wrapper" }, [
            r("div", { staticClass: "header", style: e.header }, [
              r("label", { staticClass: "label" }, [e._v(e._s(e.label))]),
              e.more
                ? r("div", { staticClass: "more", on: { click: e.emitMore } }, [
                    r("span", [e._v(e._s(e.more))]),
                    r("i", { staticClass: "el-icon-arrow-right" })
                  ])
                : e._e()
            ]),
            r("div", { staticClass: "content" }, [e._t("default")], 2)
          ]);
        }),
      S = [],
      $ =
        (r("99af"),
        {
          name: "jqWrapper",
          props: {
            theme: { default: "#08A1A4", type: String },
            label: { default: "标题", type: String },
            more: { default: "", type: String }
          },
          data: function() {
            return { header: {} };
          },
          created: function() {
            var e = this.theme;
            this.header = {
              background: "linear-gradient(269deg, "
                .concat(e, "cc 0%, ")
                .concat(e, " 100%)")
            };
          },
          methods: {
            emitMore: function() {
              this.$emit("emitMore");
            }
          }
        }),
      M = $,
      A = (r("dfd3"), Object(l["a"])(M, P, S, !1, null, "4712a29f", null)),
      H = A.exports,
      T = function(e) {
        e.component(H.name, H);
      };
    n["a"].use(T),
      (n["a"].config.productionTip = !1),
      new n["a"]({
        router: x,
        store: E,
        render: function(e) {
          return e(i);
        }
      }).$mount("#app");
  },
  cb1b: function(e, t, r) {
    "use strict";
    r("dffc");
  },
  dfd3: function(e, t, r) {
    "use strict";
    r("8610");
  },
  dffc: function(e, t, r) {}
});
//# sourceMappingURL=index.87aa0858.js.map
