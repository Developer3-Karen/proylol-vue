<template>
    <div class="registro">
      <header>
        <img class="img-world-logo" src="../assets/logo 01.png" alt="" />
        <img class="img-world-cdmx" src="../assets/worlDs_cdmx_2022.png" alt="" />
      </header>
      <center>
      <section style="padding-top: 80px;">
        <b-container class="bv-example-row">
          <b-row>
            <b-col></b-col>
            <b-col cols="12"  lg="4">
                 <!-- eslint-disable-next-line max-len -->
                 <h1 style="font-family: 'Manuka-Bold'; font-size:40px; color: #ffffff; margin-top: 60px; margin-bottom: 60px;">Ingresa tus datos de acceso</h1>
              <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
                <!-- eslint-disable-next-line max-len -->
                <b-form-input
                  id="input-1"
                  style="
                    border-radius: 50px;
                    text-align: left;
                    font-size: 20px;
                    font-family: 'PPFraktionSans-Bold';
                    margin-bottom: 20px;
                  "
                  :state="validateStateNombre(form.nombre)"
                  v-model="form.nombre"
                  trim
                  placeholder="USUARIO"
                ></b-form-input>
                <!-- eslint-disable-next-line max-len -->
                <b-form-input
                  id="input-1"
                  style="
                    border-radius: 50px;
                    text-align: left;
                    font-family: 'PPFraktionSans-Bold';
                    font-size: 20px;
                    margin-bottom: 20px;
                  "
                  v-model="form.email"
                  :state="validateState(form.email)"
                  type="email"
                  required
                  placeholder="CONTRASEÑA"
                ></b-form-input>
              <!-- eslint-disable-next-line max-len -->
              <b-button
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
                type="submit" v-on:click="submit"
              >
               INGRESAR</b-button
              >
              <!-- </b-form> -->
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-container>
      </section>
    </center>
      <div class="footer">
        <img class="decora" alt="Worlds 2022" src="../assets/ELEMENTO DE DECORACION (1).png" />
      </div>
    </div>
  </template>
<script>
import axios from 'axios';

export default {
  name: 'AboutView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      form: {
        nombre: '',
        codigo_acceso: '',
        email: '',
      },
      state: '',
    };
  },
  mounted() {
    console.log('hola desde mounted');
  },
  methods: {
    // eslint-disable-next-line
      validateState(name) {
      // eslint-disable-next-line
        const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const c = reg.test(name);
      // eslint-disable-next-line
        if(c) {
        return true;
        // eslint-disable-next-line
        } else {
        return false;
      }
    },
    // eslint-disable-next-line
       validateStateNombre(name) {
      // eslint-disable-next-line
        const reg = /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/;
      const c = reg.test(name);
      // eslint-disable-next-line
        if(c) {
        return true;
        // eslint-disable-next-line
        } else {
        return false;
      }
    },
    getUpdatedValue() {
      console.log(this.form.email);
    },
    submit() {
      const validateEmail = this.validateState(this.form.email);
      const validateNombre = this.validateStateNombre(this.form.nombre);
      if (!validateEmail) {
        alert('Revisa por favor el campo de email');
      }
      if (!validateNombre) {
        alert('Revisa por favor el campo de nombre');
      }
      const article = {
        nombre: this.form.nombre,
        codigo_acceso: this.form.codigo_acceso,
        email: this.form.email,
      };
      console.log('Form');
      console.log(this.form);
      /* eslint-disable */
        axios
          .post('https://worlds2022.herokuapp.com/usuario', article, {
            headers: {
              'content-type': 'application/json',
            },
          })
          .then((response) => {
            if (response.data.code === 500) {
              alert(response.data.mensaje);
            } else {
              alert('Se ha generado correctamente el usuario');
              this.$router.push('/confirmaCorreo')
            }
          })
          .catch((error) => {
            console.log('error' + error.data.mensaje);
            alert('No existe el cupon');
          });
      },
    },
  };
  </script>
  