import { createRouter } from 'vue-router';
import { createWebHashHistory } from 'vue-router';

const routes = {
    routes: [{
        path: '/',
        name: 'Home',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/HomeMain'),
            Footer: () => import('@/components/FooterRegion'),
        }
    }, {
        path: '/about',
        name: 'About',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/AboutMain'),
            Footer: () => import('@/components/FooterRegion'),
        }
    }, {
        path: '/services',
        name: 'Services',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/ServicesMain'),
            Footer: () => import('@/components/FooterRegion'),
        }
    }, {
        path: '/portfolio',
        name: 'Portfolio',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/PortfolioMain'),
            Footer: () => import('@/components/FooterRegion'),
        }
    }, {
    //     path: '/blog',
    //     name: 'Blog',
    //     components: {
    //         Header: () => import('@/components/MenuHeader'),
    //         default: () => import('@/pages/BlogMain'),
    //         Footer: () => import('@/components/FooterRegion'),
    //     }
    // }, {
        path: '/contact',
        name: 'Contact',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/ContactMain'),
            Footer: () => import('@/components/FooterRegion'),
        }
    }, {
        path: '/blog/lcnc-definition',
        name: 'LCNCDefinition',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/posts/LCNCDefinition'),
            Footer: () => import('@/components/FooterRegion'),
        },
    }, {
        path: '/:catchAll(.*)*',
        name: "Not Found",
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/PageNotFound'),
            Footer: () => import('@/components/FooterRegion'),
        },
    }],
    history: createWebHashHistory()
}

const router = createRouter(routes)

export default router
