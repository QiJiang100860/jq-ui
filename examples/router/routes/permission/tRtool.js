// 权限菜单路由
import Frame from "@/Frame"
export default {
    decp: "工具脚本测试",
    data: [
        {
            path: "/frame",
            name: "Frame",
            component: Frame,
            meta:{
                title:"工具脚本",
            },
            children: [
                {
                    path: "jqJsonp",
                    name: "JqJsonp",
                    component: () => import("@/views/JqJsonp"),
                    meta:{
                        title:"jsonp",
                    }
                }
            ]
        },
    ]
}