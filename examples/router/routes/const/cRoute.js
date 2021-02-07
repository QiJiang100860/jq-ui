// 常量路由
export default {
    decp: "常量路由",
    data: [
        {
            path: "/home",
            name: "Home",
            component: () => import("@/views/Home")
        }
    ]
}