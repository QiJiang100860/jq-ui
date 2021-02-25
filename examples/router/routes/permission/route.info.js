// 权限菜单路由
import Frame from "@/Frame";
export default {
  decp: "项目介绍",
  data: [
    {
      path: "/frame",
      name: "Frame",
      component: Frame,
      meta: {
        title: "项目介绍"
      },
      children: [
        {
          path: "jqInfo",
          name: "JqInfo",
          component: () => import("@/views/info/JqInfo"),
          meta: {
            title: "快速上手"
          }
        },
        {
          path: "jqLog",
          name: "JqLog",
          component: () => import("@/views/info/JqLog"),
          meta: {
            title: "更新日志"
          }
        }
      ]
    }
  ]
};
