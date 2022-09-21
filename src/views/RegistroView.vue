<template>
  <div class="registro">
    <main>
      <img class="img-world-logo" src="../assets/logo 01.png" alt="">
      <img class="img-world-cdmx" src="../assets/worlDs_cdmx_2022.png" alt="">
    </main>
    <section>
      <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="12" md="6" lg="4">
            <img src="../assets/LOGO_preview_rev_1.png" alt="">
            <b-img src="../assets/LOGO_preview_rev_1.png" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col cols="12" md="6" lg="4">
            <b-form-group
              id="fieldset-1"
              description="Let us know your name."
              label="NOMBRE"
              label-for="input-1"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
            </b-form-group>
            <b-form-group
              id="fieldset-1"
              description="Let us know your name."
              label="CORREO"
              label-for="input-1"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
            </b-form-group>
            <b-form-group
              id="fieldset-1"
              description="Let us know your name."
              label="CÓDIGO DE VERIFICACIÓN"
              label-for="input-1"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">REGÍSTRATE</b-button>
          </b-col>
          <!-- <b-col cols="12" md="6" lg="4">
          </b-col> -->
        </b-row>
        <b-row>
        </b-row>
      </b-container>
      <!-- <form class="form">
        <b-row>
          <b-col md="6">
            <b-form-input v-model="text" placeholder="NOMBRE"></b-form-input>
            <b-form-input v-model="text" placeholder="CORREO"></b-form-input>
            <b-form-input v-model="text" placeholder="CÓDIGO DE VERFICACIÓN"></b-form-input>
          </b-col>
        </b-row>
      </form> -->
      <div class="mt-2">Value: {{ text }}</div>
    </section>
    <div class="footer">
      <img class="decora" alt="Worlds 2022" src="../assets/ELEMENTO DE DECORACION (1).png">
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  components: {
    // HelloWorld
  },
};
</script>
