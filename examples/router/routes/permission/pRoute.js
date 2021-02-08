// 权限菜单路由
import Frame from "@/Frame"
export default {
    decp: "UI组件菜单路由",
    data: [
        {
            path: "/frame",
            name: "Frame",
            component: Frame,
            meta:{
                title:"UI组件",
            },
            children: [
                {
                    path: "cmp",
                    name: "Cmp",
                    component: () => import("@/views/Cmp"),
                    meta:{
                        title:"组件调试模板",
                    }
                },
                {
                    path: "jqwrapper",
                    name: "Jqwrapper",
                    component: () => import("@/views/Jqwrapper"),
                    meta:{
                        title:"卡片",
                    }
                },
                {
                    path: "jqlayout",
                    name: "Jqlayout",
                    component: () => import("@/views/Jqlayout"),
                    meta:{
                        title:"布局器",
                    }
                }
            ]
        },
    ]
}