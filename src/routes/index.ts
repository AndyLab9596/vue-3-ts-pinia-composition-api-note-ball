import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const ViewNotes = () => import('../views/ViewNotes.vue');
const ViewStats = () => import('../views/ViewStats.vue');
const ViewEditNote = () => import('../views/ViewEditNote.vue');


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'notes',
        component: ViewNotes
    },
    {
        path: '/stats',
        name: 'stats',
        component: ViewStats
    },
    {
        path: '/editNote/:id',
        name: 'edit-note',
        component: ViewEditNote
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router