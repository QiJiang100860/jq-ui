// 权限菜单路由
import Frame from "@/Frame"
export default {
    decp: "工具类组件",
    data: [
        {
            path: "/frame",
            name: "Frame",
            component: Frame,
            meta:{
                title:"工具组件",
            },
            children: [
                {
                    path: "jqmap",
                    name: "Jqmap",
                    component: () => import("@/views/Jqmap"),
                    meta:{
                        title:"地图加载器",
                    }
                },
                {
                    path: "jqecharts",
                    name: "Jqecharts",
                    component: () => import("@/views/Jqecharts"),
                    meta:{
                        title:"echarts加载器",
                    }
                }
            ]
        },
    ]
}