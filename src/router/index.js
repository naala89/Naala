import { createRouter } from 'vue-router';
import { createWebHashHistory } from 'vue-router';

const routes = {
    routes: [{
        path: '/',
        name: 'home',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/HomeMain'),
            Footer: () => import('@/components/FooterRegion')
        }
    }, {
        path: '/about',
        name: 'about',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/AboutMain'),
            RightSidebar: () => import('@/components/ContentHighlight'),
            Footer: () => import('@/components/FooterRegion')
        }
    }, {
        path: '/services',
        name: 'services',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/ServicesMain'),
            RightSidebar: () => import('@/components/ContentHighlight'),
            Footer: () => import('@/components/FooterRegion')
        }
    }, {
        path: '/portfolio',
        name: 'portfolio',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/PortfolioMain'),
            Footer: () => import('@/components/FooterRegion')
        }
    }, {
        path: '/blog',
        name: 'blog',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/BlogMain'),
            Footer: () => import('@/components/FooterRegion')
        }
    }, {
        path: '/contact',
        name: 'contact',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/pages/ContactMain'),
            Footer: () => import('@/components/FooterRegion')
        }
    }, {
        path: '/blog/lcnc-definition',
        name: 'LCNCDefinition',
        components: {
            Header: () => import('@/components/MenuHeader'),
            default: () => import('@/posts/LCNCDefinition'),
            RightSidebar: () => import('@/components/ContentHighlight'),
            Footer: () => import('@/components/FooterRegion')
        }
    }],
    history: createWebHashHistory()
}

const router = createRouter(routes)

export default router
