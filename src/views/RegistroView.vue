<template>
  <div class="registro">
    <header>
      <img class="img-world-logo" src="../assets/logo 01.png" alt="">
      <img class="img-world-cdmx" src="../assets/worlDs_cdmx_2022.png" alt="">
    </header>
    <section style="padding-top: 80px;">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="12" md="6" lg="4">
            <img src="../assets/LOGO_preview_rev_1.png" alt="">
          </b-col>
          <b-col cols="12" md="6" lg="4">
            <!-- eslint-disable-next-line max-len -->
            <b-form-group id="fieldset-1" style="color: #F2F2F2; text-align: left; margin-bottom: 20px; font-size: 20px; font-family: 'PPFraktionSans-Bold';"
              description="Let us know your name."
              label="NOMBRE"
              label-for="input-1"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
            <!-- eslint-disable-next-line max-len -->
              <b-form-input id="input-1" style="width: 430px; border-radius: 50px; text-align: left; font-size: 20px; font-family: 'PPFraktionSans-Bold';" v-model="name" :state="state" trim></b-form-input>
            </b-form-group>
            <!-- eslint-disable-next-line max-len -->
            <b-form-group id="fieldset-1" style="color: #F2F2F2; text-align: left; margin-bottom: 20px; font-size: 20px; font-family: 'PPFraktionSans-Bold';"
              description="Let us know your name."
              label="CORREO"
              label-for="input-1"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
            <!-- eslint-disable-next-line max-len -->
              <b-form-input id="input-1" style="width: 430px; border-radius: 50px; text-align:left; font-family: 'PPFraktionSans-Bold';" v-model="name" :state="state" trim type="email" required></b-form-input>
            </b-form-group>
            <!-- eslint-disable-next-line max-len -->
            <b-form-group id="fieldset-1" style="color: #F2F2F2; text-align: left; margin-bottom: 20px; font-size: 20px; font-family: 'PPFraktionSans-Bold';"
              description="Let us know your name."
              label="CÓDIGO DE VERIFICACIÓN"
              label-for="input-1"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
                    <!-- eslint-disable-next-line max-len -->
                    <b-form-input id="input-1" style="width: 430px; border-radius: 50px; text-align:left; font-family: 'PPFraktionSans-Bold';" v-model="name" :state="state" trim></b-form-input>
            </b-form-group>
            <!-- eslint-disable-next-line max-len -->
            <b-button style="background-color: #321BDD; border-radius: 30px; height: 50px; width: 230px; border: none; font-size: 20px; margin-top: 20px; font-family: 'PPFraktionSans';">REGÍSTRATE</b-button>
          </b-col>
        </b-row>
      </b-container>
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
