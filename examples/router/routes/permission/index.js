import ui from "./route.ui";
import tc from "./route.tc";
import tool from "./route.tool";
import info from "./route.info";
export default {
  data: [...info.data, ...ui.data, ...tc.data, ...tool.data]
};
