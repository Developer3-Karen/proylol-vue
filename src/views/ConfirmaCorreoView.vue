<template>
  <div class="confirmacorreo">
        <header>
      <img class="img-world-logo" src="../assets/logo 01.png" alt="">
      <img class="img-world-cdmx" src="../assets/worlDs_cdmx_2022.png" alt="">
    </header>
    <section style="padding-top: 80px;">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <!-- eslint-disable-next-line max-len -->
            <h1 style="color: #F2F2F2; font-family: 'PPFraktionSans-Bold'; padding-bottom: 50px;">CONFIRMACIÓN DE CORREO</h1>
            <!-- eslint-disable-next-line max-len -->
            <p style="color: #F2F2F2; font-family: 'PPFraktionSans-Bold'; font-size: 20px;">Te enviaremos un correo electrónico</p>
            <!-- eslint-disable-next-line max-len -->
            <p style="color: #F2F2F2; font-family: 'PPFraktionSans-Bold'; font-size: 20px;">para confirmar tu e-mail</p>
            <center>
            <!-- eslint-disable-next-line max-len -->
            <p style="color: #F2F2F2; font-family: 'PPFraktionSans-Bold'; font-size: 20px;">Escribe a continuación tu código:</p>
            <!-- eslint-disable-next-line max-len -->
            <b-form-input style="width: 430px; border-radius: 50px; text-align:center; font-family: 'PPFraktionSans-Bold';" id="input-small" size="sm" placeholder="Escribe tu código de confirmación"></b-form-input>
            </center>
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
