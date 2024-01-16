import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    //Ruta Base
    {
        path: '/',  // Inicio de la ruta
        redirect: 'inicio'
    },
    {
        path: '/',
        component: {
            render(c){
                return c('router-view');
            }
        },
        children : [
            {
                path: '/tiendajuguetes', //Posterior a la ruta base
                name : 'tiendajuguetes',
                component: ()=> import('../components/tiendajuguetes.vue')
            },
            {
                path: '/tiendadomesticos', //Posterior a la ruta base
                name : 'tiendadomesticos',
                component: ()=> import('../components/tiendadomesticos.vue')
            },
            {
                path: '/tiendahogar', //Posterior a la ruta base
                name : 'tiendahogar',
                component: ()=> import('../components/tiendahogar.vue')
            },
            {
                path: '/electronicos', //Posterior a la ruta base
                name : 'electronicos',
                component: ()=> import('../components/subcomponents/electronicos.vue')
            },
            {
                path: '/cocinas', //Posterior a la ruta base
                name : 'cocinas',
                component: ()=> import('../components/subcomponents/cocinas.vue')
            },

        ]
    },
]

const router = new VueRouter({routes, });
export default router;