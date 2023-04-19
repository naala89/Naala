import {createRouter, createWebHistory} from 'vue-router'
const { paths } = require('@/router/paths.js')

const router = createRouter({
    routes: paths,
    history: createWebHistory(),
})

export default router
