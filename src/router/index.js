import { createRouter } from 'vue-router';
import { createWebHashHistory } from 'vue-router';

const routes = {
    routes: [{
        path: '/',
        name: 'home',
        components: {
            default: () => import('@/pages/HomePage'),
            Menu: () => import('@/components/MenuRegion'),
            Footer: () => import('@/components/FooterRegion')
        }
    }, {
        path: '/about',
        name: 'about',
        components: {
            Menu: () => import('@/components/MenuRegion'),
            default: () => import('@/pages/AboutPage')
        }
    }, {
        path: '/blog',
        name: 'blog',
        components: {
            Menu: () => import('@/components/MenuRegion'),
            default: () => import('@/pages/BlogPage')
        }
    }, {
        path: '/contact',
        name: 'contact',
        components: {
            Menu: () => import('@/components/MenuRegion'),
            default: () => import('@/pages/ContactPage')
        }
    }, {
        path: '/portfolio',
        name: 'portfolio',
        components: {
            Menu: () => import('@/components/MenuRegion'),
            default: () => import('@/pages/PortfolioPage')
        }
    }, {
        path: '/services',
        name: 'services',
        components: {
            Menu: () => import('@/components/MenuRegion'),
            default: () => import('@/pages/ServicesPage')
        }
    }],
    history: createWebHashHistory()
}

const router = createRouter(routes)

export default router
