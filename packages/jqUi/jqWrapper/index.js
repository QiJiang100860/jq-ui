import jqWrapper from "./src/index.vue";
export default Vue => {
  Vue.component(jqWrapper.name, jqWrapper);
};
