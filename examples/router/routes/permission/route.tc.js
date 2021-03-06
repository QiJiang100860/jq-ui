// 权限菜单路由
import Frame from "@/Frame";
export default {
  decp: "工具类组件",
  data: [
    {
      path: "/frame",
      name: "Frame",
      component: Frame,
      meta: {
        title: "工具组件"
      },
      children: [
        {
          path: "jqmap",
          name: "Jqmap",
          component: () => import("@/views/tc/Jqmap"),
          meta: {
            title: "地图加载器"
          }
        },
        {
          path: "jqecharts",
          name: "Jqecharts",
          component: () => import("@/views/tc/Jqecharts"),
          meta: {
            title: "echarts加载器"
          }
        },
        {
          path: "jqImgload",
          name: "JqImgload",
          component: () => import("@/views/tc/JqImgload"),
          meta: {
            title: "图片上传"
          }
        }
      ]
    }
  ]
};
