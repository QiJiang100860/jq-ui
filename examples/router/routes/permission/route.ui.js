// 权限菜单路由
import Frame from "@/Frame";
export default {
  decp: "UI组件菜单路由",
  data: [
    {
      path: "/frame",
      name: "Frame",
      component: Frame,
      meta: {
        title: "UI组件"
      },
      children: [
        {
          path: "cmp",
          name: "Cmp",
          component: () => import("@/views/ui/Cmp"),
          meta: {
            title: "组件调试模板"
          }
        },
        {
          path: "jqwrapper",
          name: "Jqwrapper",
          component: () => import("@/views/ui/Jqwrapper"),
          meta: {
            title: "卡片"
          }
        },
        {
          path: "jqlayout",
          name: "Jqlayout",
          component: () => import("@/views/ui/Jqlayout"),
          meta: {
            title: "布局器"
          }
        },
        {
          path: "jqIcon",
          name: "JqIcon",
          component: () => import("@/views/ui/JqIcon"),
          meta: {
            title: "图标"
          }
        }
      ]
    }
  ]
};
