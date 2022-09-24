import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Registro from '../views/RegistroView.vue';
import ConfirmarCorreo from '../views/ConfirmaCorreoView.vue';
import BoletoDiaUno from '../views/BoletoDiaUnoView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro,
    },
    {
      path: '/confirmaCorreo',
      name: 'confirmaCorreo',
      component: ConfirmarCorreo,
    },
    {
      path: '/boleto',
      name: 'boleto',
      component: BoletoDiaUno,
    },
  ],
});
