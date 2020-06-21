import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from "../views/Skills";
import Contact from "../views/Contact";
import Achivements from "../views/Achivements";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/achivements',
            name: 'Achivements',
            component: Achivements
        },
        {
            path: '/skills',
            name: 'Skills',
            component: Skills
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
})

export default router
