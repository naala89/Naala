import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
const { paths } = require('@/router/paths.js')

const routes = {
    routes: paths,
    history: createWebHashHistory()
}

const router = createRouter(routes)

export default router
