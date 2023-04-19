import {createRouter, createWebHistory} from 'vue-router'
const { paths } = require('@/router/paths.js')

const routes = {
    routes: paths,
    history: createWebHistory(),
}

const router = createRouter(routes)

export default router
