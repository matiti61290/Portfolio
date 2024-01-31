import { createRouter, createWebHistory } from "vue-router";
import home from '../components/home.vue';
import errorPage from '../views/errorPage.vue'

const routes = [
    {
    name: 'home',
    path:'/',
    component: home
    },
    {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: errorPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.push({name: 'NotFound'});

export default router;