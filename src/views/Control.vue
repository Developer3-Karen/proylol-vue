<template>
  <div class="control">
    <header class="fon-regiuno">
      <img class="img-world-logo" src="../assets/logo 01.png" alt="" />
      <img class="img-world-cdmx" src="../assets/worlDs_cdmx_2022.png" alt="" />
    </header>
    <section class="section-fondo--registro" style="padding-top: 120px">
      <center>
        <!-- eslint-disable-next-line max-len -->
        <b-form-group
          id="fieldset-1"
          style="
            color: #f2f2f2;
            text-align: left;
            margin-bottom: 25px;
            font-size: 20px;
            font-family: 'PPFraktionSans-Bold';
            text-align: center;
          "
          label="Ingresa tus datos de acceso"
          label-for="input-1"
          valid-feedback="Thank you!"
        >
          <center>
            <!-- eslint-disable-next-line max-len -->
            <b-form-input
              id="input-3"
              v-model="codigo_acceso"
              placeholder="CONTRASEÑA STAFF"
              required
              style="
                height: 30px;
                width: 500px;
                margin-top: 20px;
                text-align: center;
                border-radius: 50px;
                text-align: center;
                font-family: 'PPFraktionSans-Bold';
                font-size: 20px;
              "
            >
            </b-form-input>
          </center>
        </b-form-group>
        <!-- <b-form-input
        id="input-3"
        v-model="codigo"
        placeholder="CONTRASEÑA STAFF"
        required>
      </b-form-input> -->
        <!-- <b-button id="buttonRegistrate" variant="primary" v-b-modal.modal-1
        >REGÍSTRATE</b-button> -->
        <b-button
          id="buttonRegistrate"
          style="
            background-color: #321bdd;
            border-radius: 30px;
            height: 50px;
            width: 230px;
            border: none;
            font-size: 20px;
            margin-top: 15px;
            font-family: 'PPFraktionSans-Bold';
          "
          @click="submit"
          variant="primary"
          v-b-modal.modal-3
          >ENTRAR</b-button
        >
      </center>
      <!-- Inicia modal 1 -->
      <!-- eslint-disable-next-line max-len -->
      <b-modal
        :ok-disabled="true"
        ref="my-modal"
        hide-footer
        id="modal-3"
        title="¡Bienvenido!"
        header-class="my-class"
        style="text-align: center;"
      >
        <template>
          <center>
            <p class="texto" style="font-family: 'PPFraktionSans-Bold'">{{ leyenda }}</p>
            <p class="texto" style="font-family: 'PPFraktionSans-Bold'">{{ leyenda2 }}</p>
            <p class="texto" style="font-family: 'PPFraktionSans-Bold'">{{ leyenda3 }}</p>
            <p class="texto" style="font-family: 'PPFraktionSans-Bold'">{{ leyenda4 }}</p>

            <p
              v-if="usuarioValido"
              style="
                border-radius: 50px;
                text-align: center;
                font-family: 'PPFraktionSans-Bold';
                font-size: 20px;
              "
            ></p>
            <b-button
              id="buttonRegistrate"
              style="
                background-color: #321bdd;
                border-radius: 30px;
                height: 50px;
                width: 230px;
                border: none;
                font-size: 20px;
                margin-top: 20px;
                font-family: 'PPFraktionSans-Bold';
              "
              @click="cancelarBoleto"
              variant="primary"
              v-b-modal.modal-3
              >DAR ACCESO</b-button
            >
            <br />
          </center>
        </template>
      </b-modal>
      <!-- Termina modal 1 -->
    </section>
  </div>
</template>
<style scoped>
:deep() .my-class {
  background: #f2f2f2;
  color: #181818;
  text-align: center;
  font-size: 60px;
  border: none;
}
:deep() #modal-3___BV_modal_header_ > button.close{
  border: none;
}
:deep() #modal-3___BV_modal_title_{
  font-size: 30px;
  align-items: center;
  margin-left: 140px;
}
:deep() .my-second-class > .modal-dialog > .modal-content > .modal-header {
  background: #f2f2f2;
  color: #181818;
  text-align: center;
}
.close{
  font-size: 60px;
  border:none;
}
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
import axios from 'axios';

export default {
  name: 'ConstruView',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      leyenda3: '',
      leyenda2: '',
      isModalVisible: false,
      codigo_acceso: '',
      modal1: false,
      leyenda: '',
      usuarioValido: false,
      codigo2: '',
      leyenda4: '',
    };
  },
  mounted() {
    console.log(this.$route.query);
    console.log(this.$route.query.codigo);
    this.codigo2 = this.$route.query.codigo;
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal() {
      this.$refs['my-modal'].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn');
    },
    submit() {
      const article = {
        codigo_acceso: this.codigo2,
      };
      /* eslint-disable */
      axios
        .post('https://testworld2.herokuapp.com/generarBoleto', article, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((response) => {
          if (response.data.code === 500) {
            alert(response.data.mensaje);
          } else {
            console.log(response.data.data[0].fecha.substring(0, 10));
            switch (this.codigo_acceso) {
            case 'WCD01':
              this.usuarioValido = true;
              this.leyenda = 'Nombre:  ' + response.data.data[0].nombre;
              this.leyenda2 = 'Codigo:  ' + response.data.data[0].clave;
              this.leyenda3 = 'Fecha:  ' + response.data.data[0].fecha.substring(0, 10);
              if(response.data.data[0].activo == 1) {
                this.leyenda4 = 'Acceso válido';
              } else {
                this.leyenda4 = 'Acceso inválido';
              }
              break;
            case 'WCD02':
              this.usuarioValido = true;
              this.leyenda = 'Nombre:  ' + response.data.data[0].nombre;
              this.leyenda2 = 'Codigo:  ' + response.data.data[0].clave;
              this.leyenda3 = 'Fecha:  ' + response.data.data[0].fecha.substring(0, 10);
              this.leyenda4 = 'Activo: ' + response.data.data[0].activo;
              break;
            case 'WCD03':
              this.usuarioValido = true;
              this.leyenda = 'Nombre:  ' + response.data.data[0].nombre;
              this.leyenda2 = 'Codigo:  ' + response.data.data[0].clave;
              this.leyenda3 = 'Fecha:  ' + response.data.data[0].fecha.substring(0, 10);
              if(response.data.data[0].activo == 1) {
                this.leyenda4 = 'Acceso válido';
              } else {
                this.leyenda4 = 'Acceso inválido';
              }
              break;
            case 'WCD04':
              this.usuarioValido = true;
              this.leyenda = 'Nombre:  ' + response.data.data[0].nombre;
              this.leyenda2 = 'Codigo:  ' + response.data.data[0].clave;
              this.leyenda3 = 'Fecha:  ' + response.data.data[0].fecha.substring(0, 10);
              if(response.data.data[0].activo == 1) {
                this.leyenda4 = 'Acceso válido';
              } else {
                this.leyenda4 = 'Acceso inválido';
              }
              
              break;
            case 'WCD05':
              this.usuarioValido = true;
              this.leyenda = 'Nombre:  ' + response.data.data[0].nombre;
              this.leyenda2 = 'Codigo:  ' + response.data.data[0].clave;
              this.leyenda3 = 'Fecha:  ' + response.data.data[0].fecha.substring(0, 10);
              if(response.data.data[0].activo == 1) {
                this.leyenda4 = 'Acceso válido';
              } else {
                this.leyenda4 = 'Acceso inválido';
              }
              break;
            case 'WCD06':
              this.usuarioValido = true;
              this.leyenda = 'Nombre:  ' + response.data.data[0].nombre;
              this.leyenda2 = 'Codigo:  ' + response.data.data[0].clave;
              this.leyenda3 = 'Fecha:  ' + response.data.data[0].fecha.substring(0, 10);
              if(response.data.data[0].activo == 1) {
                this.leyenda4 = 'Acceso válido';
              } else {
                this.leyenda4 = 'Acceso inválido';
              }
              break;
            case 'WCD07':
              this.usuarioValido = true;
              this.leyenda = 'Nombre:  ' + response.data.data[0].nombre;
              this.leyenda2 = 'Codigo:  ' + response.data.data[0].clave;
              this.leyenda3 = 'Fecha:  ' + response.data.data[0].fecha.substring(0, 10);
              if(response.data.data[0].activo == 1) {
                this.leyenda4 = 'Acceso válido';
              } else {
                this.leyenda4 = 'Acceso inválido';
              }
              break;
            case 'WCD08':
              this.usuarioValido = true;
              this.leyenda = 'Nombre:  ' + response.data.data[0].nombre;
              this.leyenda2 = 'Codigo:  ' + response.data.data[0].clave;
              this.leyenda3 = 'Fecha:  ' + response.data.data[0].fecha.substring(0, 10);
              if(response.data.data[0].activo == 1) {
                this.leyenda4 = 'Acceso válido';
              } else {
                this.leyenda4 = 'Acceso inválido';
              }
              break;
            case 'WCD09':
              this.usuarioValido = true;
              this.leyenda = 'Nombre:  ' + response.data.data[0].nombre;
              this.leyenda2 = 'Codigo:  ' + response.data.data[0].clave;
              this.leyenda3 = 'Fecha:  ' + response.data.data[0].fecha.substring(0, 10);
              if(response.data.data[0].activo == 1) {
                this.leyenda4 = 'Acceso válido';
              } else {
                this.leyenda4 = 'Acceso inválido';
              }
              break;
            case 'WCD10':
              this.usuarioValido = true;
              this.leyenda = 'Nombre:  ' + response.data.data[0].nombre;
              this.leyenda2 = 'Codigo:  ' + response.data.data[0].clave;
              this.leyenda3 = 'Fecha:  ' + response.data.data[0].fecha.substring(0, 10);
              if(response.data.data[0].activo == 1) {
                this.leyenda4 = 'Acceso válido';
              } else {
                this.leyenda4 = 'Acceso inválido';
              }
              break;
            default:
              console.log('No puede pasar');
              this.leyenda = 'ACCESO INVALIDO';
              this.usuarioValido = false;
              break;
          }
          }
        })
        .catch((error) => {
          console.log('error' + error.data.mensaje);
          alert('No existe el cupon');
        });
    },
    cancelarBoleto() {
      const article = {
        codigo_acceso: this.codigo2,
      };
      /* eslint-disable */
      axios
        .post('https://testworld2.herokuapp.com/deshabilitarCupon', article, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((response) => {
          if (response.data.code === 500) {
            alert(response.data.mensaje);
          } else {
            alert('Se cancelo el boleto correctamente');
          }
        })
        .catch((error) => {
          console.log('error' + error.data.mensaje);
          alert('No existe el cupon');
        });
    }
  },
};
</script>
