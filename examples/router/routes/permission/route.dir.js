// 权限菜单路由
import Frame from "@/Frame";
export default {
  decp: "指令路由",
  data: [
    {
      path: "/frame",
      name: "Frame",
      component: Frame,
      meta: {
        title: "指令"
      },
      children: [
        {
          path: "dirmove",
          name: "Cmp",
          component: () => import("@/views/dir/jqMove"),
          meta: {
            title: "移动"
          }
        },
        {
          path: "dirviewimg",
          name: "Jqwrapper",
          component: () => import("@/views/dir/jqViewimg"),
          meta: {
            title: "图片预览"
          }
        },
        {
          path: "dircopy",
          name: "Jqcopy",
          component: () => import("@/views/dir/jqCopy"),
          meta: {
            title: "一键复制"
          }
        }
      ]
    }
  ]
};
