<template>
  <div class="confirmacorreo">
        <header>
      <img class="img-world-logo" src="../assets/logo 01.png" alt="">
      <img class="img-world-cdmx" src="../assets/worlDs_cdmx_2022.png" alt="">
    </header>
    <section style="padding-top: 80px; ">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <!-- eslint-disable-next-line max-len -->
            <h1 style="color: #F2F2F2; font-family: 'Manuka-Bold'; padding-bottom: 30px; font-size: 60px;">CONFIRMACIÓN DE CORREO</h1>
            <!-- eslint-disable-next-line max-len -->
            <p style="color: #F2F2F2; font-family: 'PPFraktionSans-Bold'; font-size: 20px; margin-bottom: 2px; margin-left: 12px;">Te enviaremos un correo electrónico</p>
            <!-- eslint-disable-next-line max-len -->
            <p style="color: #F2F2F2; font-family: 'PPFraktionSans-Bold'; font-size: 20px; margin-bottom: 2px;">para confirmar tu e-mail</p>
            <center>
            <!-- eslint-disable-next-line max-len -->
            <p style="color: #F2F2F2; font-family: 'PPFraktionSans-Bold'; font-size: 20px;">Escribe a continuación tu código:</p>
            </center>
          </b-col>
        </b-row>
          <b-row>
            <center>
          <b-col cols="12" md="6" lg="4">
          <!-- eslint-disable-next-line max-len -->
            <b-form-input style="border-radius: 50px; text-align:center; font-family: 'PPFraktionSans-Bold'; font-size: 20px;" placeholder="Escribe tu código de confirmación"></b-form-input>
          </b-col>
           </center>
        </b-row>
        <b-row >
          <b-col >
          <!-- eslint-disable-next-line max-len -->
            <b-button style="background-color: #321BDD; border-radius: 30px; height: 50px; width: 250px; border: none; font-size: 20px; margin-top: 20px;">CONFIRMAR CORREO</b-button>
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
  name: 'ConfirmaCorreoView',
  components: {
    // HelloWorld
  },
};
</script>
