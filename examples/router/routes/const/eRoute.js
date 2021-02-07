// 错误页面路由
export default {
    decp: "错误页面路由",
    data: [
        {
            path: "/404",
            name: "Page404",
            component: () => import("@/views/Error/404")
        }
    ]
}