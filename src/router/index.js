import { createRouter, createWebHistory } from "vue-router";
import home from '../App.vue';
import aboutMe from '../views/aboutMe.vue';
import mesCreations from '../views/myCreation.vue';
import Contact from '../views/contact.vue';

const routes = [
    {
    name: 'home',
    path:'/',
    component: home,
    },
    {
        name: 'About me',
        path:'/aboutMe',
        component: aboutMe,
    },
    {
        name: 'Mes creations',
        path:'/mesCreations',
        component: mesCreations,
    },
    {
        name: 'Contact',
        path:'/contact',
        component: Contact,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;