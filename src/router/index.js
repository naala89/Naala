import { createRouter } from 'vue-router';
import { createWebHashHistory } from 'vue-router';

const routeDef = {
    routes: [{
        path: '/hello-world',
        components: {
            default: () => import('@/pages/HelloWorld')
        }
    }, {
        path: '/',
        components: {
            default: () => import('@/pages/Home')
        }
    }],
    history: createWebHashHistory()
}

const router = createRouter(routeDef)

export default router
