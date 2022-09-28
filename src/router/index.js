import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Registro from '../views/RegistroView.vue';
import ConfirmarCorreo from '../views/ConfirmaCorreoView.vue';
import BoletoDiaUno from '../views/BoletoDiaUnoView.vue';
import Control from '../views/Control.vue';
import Vista2 from '../views/Vista2View.vue';
import Vista3 from '../views/Vista3View.vue';
import Vista4 from '../views/Vista4View.vue';
import VistaLogin from '../views/VistaLoginView.vue';
import LolEscaneoRegistroUno from '../views/LolEscaneoRegistroView.vue';
import ConfirmaCorreoExito from '../views/ConfirmaCorreoExitoView.vue';

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
    {
      path: '/control',
      name: 'control',
      component: Control,
    },
    {
      path: '/vista2',
      name: 'vista2',
      component: Vista2,
    },
    {
      path: '/vista3',
      name: 'vista3',
      component: Vista3,
    },
    {
      path: '/vista4',
      name: 'vista4',
      component: Vista4,
    },
    {
      path: '/VistaLogin',
      name: 'VistaLogin',
      component: VistaLogin,
    },
    {
      path: '/lolregistrouno',
      name: 'lolregistrouno',
      component: LolEscaneoRegistroUno,
    },
    {
      path: '/confirmaexito',
      name: 'lolregistrouno',
      component: ConfirmaCorreoExito,
    },
  ],
});
