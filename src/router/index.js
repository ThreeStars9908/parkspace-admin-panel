import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import Dashboard from '../view/Dashboard.vue';
import UserManagement from '../view/UserManagement.vue';
import Report from '../view/Report.vue';
import BookingManagement from '../view/BookingManagement.vue';
import Support from '../view/Support.vue';
import Requisition from '../view/Requisition.vue';
import Review from '../view/Review.vue';
import SubscriptionCashback from '../view/SubscriptionCashback.vue';
import Documentation from '../view/Documentation.vue';
import Configuration from '../view/Configuration.vue';
import Account from '../view/Account.vue';
import Login from '../view/Login.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
            next('/login');
        },
    },
    {
        path: '/dashboard/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/user/',
        name: 'user',
        component: UserManagement,
    },
    {
        path: '/report/',
        name: 'report',
        component: Report,
    },
    {
        path: '/booking/',
        name: 'booking',
        component: BookingManagement,
    },
    {
        path: '/support/',
        name: 'support',
        component: Support,
    },
    {
        path: '/requisition/',
        name: 'requisition',
        component: Requisition,
    },
    {
        path: '/review/',
        name: 'review',
        component: Review,
    },
    {
        path: '/subscription/',
        name: 'subscription',
        component: SubscriptionCashback,
    },
    {
        path: '/documentation/',
        name: 'documentation',
        component: Documentation,
    },
    {
        path: '/configuration/',
        name: 'configuration',
        component: Configuration,
    },
    {
        path: '/account/',
        name: 'account',
        component: Account,
    },
    {
        path: '/login/',
        name: 'login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `ParkSpace | ${to.name.charAt(0).toUpperCase() + to.name.slice(1)}`;
    next();
});

export default router;
