<template>
  <div class="control">
    <header class="fon-regiuno">
      <img class="img-world-logo" src="../assets/logo 01.png" alt="" />
      <img class="img-world-cdmx" src="../assets/worlDs_cdmx_2022.png" alt="" />
    </header>
    <section class="section-fondo--registro" style="padding-top: 120px">
      <!-- eslint-disable-next-line max-len -->
      <b-form-group
        id="fieldset-1"
        style="
          color: #f2f2f2;
          text-align: left;
          margin-bottom: 20px;
          font-size: 20px;
          font-family: 'PPFraktionSans-Bold';
        "
        label="Ingresa tus datos de acceso"
        label-for="input-1"
        valid-feedback="Thank you!"
      >
        <!-- eslint-disable-next-line max-len -->
        <b-form-input id="input-3" v-model="codigo" placeholder="CONTRASEÑA STAFF" required>
        </b-form-input>
      </b-form-group>
      <!-- <b-form-input
        id="input-3"
        v-model="codigo"
        placeholder="CONTRASEÑA STAFF"
        required>
      </b-form-input> -->
      <!-- <b-button id="buttonRegistrate" variant="primary" v-b-modal.modal-1
        >REGÍSTRATE</b-button> -->
      <b-button id="buttonRegistrate" @click="submit" variant="primary" v-b-modal.modal-3
        >REGÍSTRATE</b-button
      >
      <b-modal id="modal-3" title="¡Bienvenido!" style="color:white">
        <p>{{ leyenda }}</p>
        <b-form-input v-if="usuarioValido"></b-form-input>
      </b-modal>
    </section>
  </div>
</template>

<style>
body {
  background-image: url('https://tes.opl.worldscdmx2022.com/fondo.png');
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
/* .logoWorlds2022 {
  /* top right bottom left/
  padding: 0px 0px 40px 0px;
} */
.pWorlds2022 {
  padding: 0px 0px 40px 0px;
}
.pcoming {
  padding: 0px 0px 50px 0px;
  color: rgb(242, 242, 242);
  font-size: 40px;
}
.decora {
  padding-top: 120px;
  width: 1260px;
  height: auto;
}
.img-world-logo {
  float: left;
}
.img-world-cdmx {
  float: right;
}
main {
  background-image: url('https://tes.opl.worldscdmx2022.com/Rect%a0ngulo%203%20copia%20-%20copia.png');
  padding: 20px;
  margin: 20px;
}
.form {
  background-image: url('https://tes.opl.worldscdmx2022.com/fondo%2001.png');
}
.btn-registrate {
  border-radius: 5px;
}

/* /Responsivo para Moviles/ */
@media (max-width: 400px) {
  .home {
    max-width: 90%;
    height: auto;
  }
}
/* /Responsivo para Tablets/ */

@media (min-width: 400px) and (max-width: 1024px) {
  img {
    max-width: 90%;
    height: auto;
  }
}
@media (min-width: 1025px) and (max-width: 1980px) {
  img {
    max-width: 90%;
    height: auto;
  }
}

/* /Responsivo para Full Hd/ */
@media (min-width: 1981px) {
  img {
    max-width: 100%;
    height: auto;
  }
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(133, 226, 100, 0.427);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'ConstruView',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      isModalVisible: false,
      codigo: '',
      modal1: false,
      leyenda: '',
      usuarioValido: false,
    };
  },
  mounted() {
    console.log(this.$route.query);
    console.log(this.$route.query.codigo_acceso);
  },
  methods: {
    submit() {
      console.log(this.codigo);
      switch (this.codigo) {
        case 'WCD01':
          this.leyenda = 'Ingresa tus datos de acceso';
          this.usuarioValido = true;
          break;
        case 'WCD02':
          this.leyenda = 'Ingresa tus datos de acceso';
          this.usuarioValido = true;
          break;
        case 'WCD03':
          this.leyenda = 'Ingresa tus datos de acceso';
          this.usuarioValido = true;
          break;
        case 'WCD04':
          this.leyenda = 'Ingresa tus datos de acceso';
          this.usuarioValido = true;
          break;
        case 'WCD05':
          this.leyenda = 'Ingresa tus datos de acceso';
          this.usuarioValido = true;
          break;
        case 'WCD06':
          this.leyenda = 'Ingresa tus datos de acceso';
          this.usuarioValido = true;
          break;
        case 'WCD07':
          this.leyenda = 'Ingresa tus datos de acceso';
          this.usuarioValido = true;
          break;
        case 'WCD08':
          this.leyenda = 'Ingresa tus datos de acceso';
          this.usuarioValido = true;
          break;
        case 'WCD09':
          this.leyenda = 'Ingresa tus datos de acceso';
          this.usuarioValido = true;
          break;
        case 'WCD10':
          this.leyenda = 'Ingresa tus datos de acceso';
          this.usuarioValido = true;
          break;
        default:
          console.log('No puede pasar');
          this.leyenda = 'Codigo invalido';
          this.usuarioValido = false;
          break;
      }
    },
  },
};
</script>
