<template>
  <div class="confirmacorreo">
    <main>
      <img class="img-world-logo" src="../assets/logo 01.png" alt="">
      <img class="img-world-cdmx" src="../assets/worlDs_cdmx_2022.png" alt="">
    </main>
    <section>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <h1 style="color: #F2F2F2;">CONFIRMACIÓN DE CORREO</h1>
                    <p style="color: #F2F2F2;">Te enviaremos un correo electrónico</p>
                    <p style="color: #F2F2F2;">para confirmar tu e-mail</p>
                    <!-- eslint-disable-next-line max-len -->
        <b-form-input style="width: 430px; border-radius: 50px; text-align:center;" id="input-small" size="sm" placeholder="Escribe tu código de confirmación"></b-form-input>
        <p style="color: #F2F2F2;">Escribe a continuación tu código</p>
        <b-button class="btn-confirmar" variant="light" >CONFIRMAR CORREO</b-button>
                </b-col>
                <b-col>
                </b-col>
                <b-col>
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
