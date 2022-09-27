<template>
    <div id="app" ref="document" >
       <!-- eslint-disable-next-line max-len -->
       <div id="12341412">
         <div class="lolregistrouno">
            <header  class="fon-regiuno">
                <img class="img-world-logo" src="../assets/logo 01.png" alt="" />
                <img class="img-world-cdmx" src="../assets/worlDs_cdmx_2022.png" alt="" />
            </header>
          <center>
           <section class="section-fondo--registro">
            <b-container class="bv-example-row">
              <b-row>
                <b-col>
                  <b-button
                  style="
                    background-color: #321bdd;
                    border-radius: 30px;
                    height: 50px;
                    width: 230px;
                    border: none;
                    font-size: 20px;
                    margin-top: 80px;
                    font-family: 'PPFraktionSans-Bold';
                  "
                  type="submit" v-on:click="submit"
                >
                  ESCANEA TU BOLETO</b-button
              >
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <!-- eslint-disable-next-line max-len -->
                  <p style="font-family: 'Manuka-Bold'; color: #F2F2F2; font-size: 25px; margin-top: 10px;">
                    ¿Tienes dificultades para escanear el boleto?
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <!-- eslint-disable-next-line max-len -->
                  <p style="font-family: 'Manuka-Bold'; color: #F2F2F2; font-size: 25px; margin-top: 0px;">
                    Ingresa manualmente el código
                  </p>
                </b-col>
              </b-row>
              <b-row>
              <b-col>
                  <!-- eslint-disable-next-line max-len -->
          <b-form-input
                id="input-1"
                style="
                  border-radius: 50px;
                  text-align: left;
                  font-family: 'PPFraktionSans-Bold';
                  font-size: 20px;
                  text-align: center;
                  width: 300px;
                "
                placeholder="Ingresa el código"
            ></b-form-input></b-col>
              </b-row>
            </b-container>
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
              ESCANEA TU BOLETO</b-button
            >
        <br>
           </section>
           </center>
           <div class="footer">
             <img class="decora" alt="Worlds 2022" src="../assets/ELEMENTO DE DECORACION (1).png">
           </div>
         </div>
       </div>
     </div>
   </template>
<script>
import html2pdf from 'html2pdf.js';

export default {
  name: 'app',
  methods: {
    exportToPDF() {
      html2pdf(document.getElementById('element-to-123412421convert'), {
        margin: 0,
        filename: 'boleto.pdf',
      });
    },
  },
};
</script>
