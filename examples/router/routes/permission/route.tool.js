// 权限菜单路由
import Frame from "@/Frame";
export default {
  decp: "工具脚本",
  data: [
    {
      path: "/frame",
      name: "Frame",
      component: Frame,
      meta: {
        title: "工具类jqUtil"
      },
      children: [
        {
          path: "jqJsonp",
          name: "JqJsonp",
          component: () => import("@/views/tool/JqJsonp"),
          meta: {
            title: "jsonp"
          }
        },
        {
          path: "jqTimer",
          name: "JqTimer",
          component: () => import("@/views/tool/JqTimer"),
          meta: {
            title: "timer"
          }
        }
      ]
    }
  ]
};
