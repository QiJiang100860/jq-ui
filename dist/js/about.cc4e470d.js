(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["about"],
  {
    c2a7: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "div",
            { staticClass: "about" },
            [
              a("h1", [e._v("This is an about page")]),
              a("jq-wrapper", { attrs: { label: "test", theme: "#ff0000" } }, [
                a("div", [e._v("jq-wrapper 很好用")])
              ]),
              a(
                "jq-wrapper",
                {
                  attrs: { label: "test", more: "more" },
                  on: { emitMore: e.emitMore }
                },
                [a("div", [e._v("jq-wrapper 很好用")])]
              )
            ],
            1
          );
        },
        o = [],
        s = {
          methods: {
            emitMore: function() {
              alert("更多");
            }
          }
        },
        n = s,
        i = a("2877"),
        l = Object(i["a"])(n, r, o, !1, null, null, null);
      t["default"] = l.exports;
    }
  }
]);
//# sourceMappingURL=about.cc4e470d.js.map