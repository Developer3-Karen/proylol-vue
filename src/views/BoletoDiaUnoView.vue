<template>
 <div id="app" ref="document" >
    <h1 style="color: #321bdd;">Descarga tu boleto</h1>
    <!-- eslint-disable-next-line max-len -->
    <center><button @click="exportToPDF" class="btn-descarga">boton</button></center>
    <div id="element-to-convert">
      <div class="boletodiatres">
        <img class="logoWorlds2022" alt="Worlds 2022 logo" src="../assets/2LOGO2.png">
        <br />
        <center>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <img src="../assets/Capa 1.png" alt="" style="height: 431px; width: auto;">
        <!-- eslint-disable-next-line max-len -->
        <p style="color: #F2F2F2; font-size: 20px; margin-top: 10px; font-family: 'Manuka-Bold';">TOKEM1029288</p>
        <!-- eslint-disable-next-line max-len -->
        <p style="color: #F2F2F2; font-size: 20px; margin-top: 10px; font-family: 'Manuka-Bold'">Fecha</p>
          <!-- eslint-disable-next-line max-len -->
          <p style="font-family: 'Manuka-Bold'; margin-top:10px;width: 540px; height: 40px; background-color: #321BDD; border-radius: 20px; color: #F2F2F2; text-align: center; padding-top: 8px; font-size: 20px;">1 DE OCTUBRE DEL 2022</p>
          <!-- eslint-disable-next-line max-len -->
          <p style="font-family: 'Manuka-Bold'; color: #F2F2F2; font-size: 20px;">Hora</p>
          <!-- eslint-disable-next-line max-len -->
          <p style="font-family: 'Manuka-Bold'; width: 540px; margin-top:10px; height: 40px; background-color: #321BDD; border-radius: 20px; color: #F2F2F2; text-align: center; padding-top: 8px; font-size: 20px;">12:00 a 22:00 hrs</p>
          <!-- eslint-disable-next-line max-len -->
          <p style="font-family: 'Manuka-Bold'; color: #F2F2F2; font-size: 20px; margin-top: 10px; margin-bottom: 10px;">
            Lugar: Centro Cultural Estación Indianilla <br>
            Dirección: Claudio Bernard 111, Doctores, Cuauhtémoc,<br> 06720 Ciudad de México, CDMX
          </p>
        <br>
        <img class="pWorlds2022" alt="Worlds 2022" src="../assets/worlDs_cdmx_2022.png">
        <br><br>
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
      html2pdf(document.getElementById('element-to-convert'), {
        margin: 0,
        filename: 'boleto.pdf',
      });
    },
  },
};
</script>
