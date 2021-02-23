<template>
  <div>
    <pre>
      <code id="code" class="language-html">
        <template></template>
        <div>
          <ul class="aaaaa">
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
      </code>
    </pre>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/vs.css";
export default {
  mounted() {
    this.testCode();
  },
  methods: {
    testCode() {
      hljs.initHighlightingOnLoad();
      let el = document.getElementById("code");
      let stext = el.innerHTML;
      let elStr = this.html2Escape(stext);
      el.innerHTML = elStr;
      hljs.highlightBlock(el);
    },
    html2Escape(sHtml) {
      return sHtml.replace(/[<>&"]/g, function(c) {
        return { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c];
      });
    }
  }
};
</script>
