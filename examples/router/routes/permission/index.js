import pRoute from "./pRoute"
import tRoute from "./tRoute"
import tRtool from "./tRtool"
export default {
    data: [
        ...pRoute.data,
        ...tRoute.data,
        ...tRtool.data
    ]
}