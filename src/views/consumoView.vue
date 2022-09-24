<template>
    <div class="form">
        <b-form-group id="input-group-1" label="Usuario:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.usuario"
          placeholder="Enter name"
          required
        ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="cupon:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.cupon"
          placeholder="cupon"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="email:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.email"
          placeholder="email"
          required
        ></b-form-input>
        </b-form-group>

        <b-button type="submit" v-on:click="submit" variant="primary">REGÍSTRATE</b-button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        usuario: '',
        cupon: '',
        email: '',
      },
    };
  },
  mounted() {
    console.log('hola desde mounted');
    this.getTodos();
  },
  methods: {
    submit() {
      const article = {
        usuario: this.form.usuario,
        cupon: this.form.cupon,
        email: this.form.email,
      };
      /* eslint-disable */
      axios.post('https://worlds2022.herokuapp.com/usuario', article
      , {
        headers: {
            'content-type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        });
    },

  },
};
</script>
