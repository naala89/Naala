import {createRouter, createWebHistory} from 'vue-router'
const { paths } = require('@/router/paths.js')

const routes = {
    routes: paths,
    history: createWebHistory(),
    mode: history,
}

const router = createRouter(routes)

export default router
