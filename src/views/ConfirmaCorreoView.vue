<template>
  <div class="confirmacorreo">
        <header>
      <img class="img-world-logo" src="../assets/logo 01.png" alt="">
      <img class="img-world-cdmx" src="../assets/worlDs_cdmx_2022.png" alt="">
    </header>
    <section style="padding-top: 80px; " >
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <!-- eslint-disable-next-line max-len -->
            <h1 style="color: #F2F2F2; font-family: 'Manuka-Bold'; padding-bottom: 30px; font-size: 60px; " >CONFIRMA TU CÓDIGO DE REGISTRO.</h1>
            <!-- eslint-disable-next-line max-len -->
            <p style="color: #F2F2F2; font-family: 'PPFraktionSans-Bold'; font-size: 20px; margin-bottom: 2px; margin-left: 12px; padding-top:20px;">Estás a punto de descargar tus boletos, coloca nuevamente</p>
            <!-- eslint-disable-next-line max-len -->
            <p style="color: #F2F2F2; font-family: 'PPFraktionSans-Bold'; font-size: 20px; margin-bottom: 2px;">tu código de registro y da clic en el botón verificar.</p>
            <center>
            <!-- eslint-disable-next-line max-len -->
            <p style="color: #F2F2F2; font-family: 'PPFraktionSans-Bold'; font-size: 20px; padding-top:20px;">Escribe a continuación tu código:</p>
            </center>
          </b-col>
        </b-row>
          <b-row>
            <center>
          <b-col cols="12" md="6" lg="4">
          <!-- eslint-disable-next-line max-len -->
            <b-form-input  v-model="codigo_acceso" style="border-radius: 50px; text-align:center; font-family: 'PPFraktionSans-Bold'; font-size: 20px;" placeholder="Escribe tu código de confirmación"></b-form-input>
          </b-col>
           </center>
        </b-row>
        <b-row >
          <b-col >
          <!-- eslint-disable-next-line max-len -->
            <b-button type="submit" v-on:click="submit" style="background-color: #321BDD; border-radius: 30px; height: 50px; width: 250px; border: none; font-size: 20px; margin-top: 20px;">Verificar</b-button>
            <center><button @click="exportToPDF" class="btn-descarga" hidden>boton</button></center>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div id="element-to-convert" style="display:none;" >
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
    <div class="footer">
      <img class="decora" alt="Worlds 2022" src="../assets/ELEMENTO DE DECORACION (1).png">
    </div>
    <div id="app" ref="document" style="display:none" >
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
          <p style="color: #F2F2F2; font-size: 20px; margin-top: 10px; font-family: 'Manuka-Bold';"></p>
          <b-form-input
                id="input-1"
                style="
                  border-radius: 50px;
                  text-align: left;
                  font-size: 20px;
                  font-family: 'PPFraktionSans-Bold';
                "
                v-model="pdf.fecha"
                :state="state"
                trim
              ></b-form-input>
          <!-- eslint-disable-next-line max-len -->
          <p style="color: #F2F2F2; font-size: 20px; margin-top: 10px; font-family: 'Manuka-Bold'">Fecha</p>
            <!-- eslint-disable-next-line max-len -->
            <p style="font-family: 'Manuka-Bold'; margin-top:10px;width: 540px; height: 40px; background-color: #321BDD; border-radius: 20px; color: #F2F2F2; text-align: center; padding-top: 8px; font-size: 20px;">1 DE OCTUBRE DEL 2022</p>
            <!-- eslint-disable-next-line max-len -->
            <p style="font-family: 'Manuka-Bold'; color: #F2F2F2; font-size: 20px;">Hora</p>
            <b-form-input
                id="input-1"
                style="
                  border-radius: 50px;
                  text-align: left;
                  font-size: 20px;
                  font-family: 'PPFraktionSans-Bold';
                "
                v-model="pdf.hora"
                :state="state"
                trim
              ></b-form-input>
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
  </div>
</template>
<script>

import axios from 'axios';
import html2pdf from 'html2pdf.js';

export default {
  name: 'ConfirmaCorreoView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      codigo_acceso: '',
      pdf: {
        codigo: '',
        fecha: '',
        hora: '',
        hora_fin: '',
      },
    };
  },
  methods: {
    exportToPDF() {
      html2pdf(document.getElementById('element-to-convert'), {
        margin: 0,
        filename: 'boleto.pdf',
      });
    },
    submit() {
      const article = {
        codigo_acceso: this.codigo_acceso,
      };
      console.log('Form');
      console.log(this.form);
      /* eslint-disable */
      axios
        .post('https://worlds2022.herokuapp.com/confirmarCodigo', article, {
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
    exportToPDF() {
      const postar = {'codigo_acceso': this.codigo_acceso}
        axios.post('https://worlds2022.herokuapp.com/generarBoleto',postar, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((response) => {
          if (response.data.code === 500) {
            alert(response.data.mensaje);
          } else {
            console.log(response)
            this.pdf.codigo = response.data.data[0].codigo_acceso;
            this.pdf.fecha = response.data.data[0].fecha;
            this.pdf.hora = response.data.data[0].hora_inicio;
            html2pdf(document.getElementById('element-to-convert'), {
              margin: 0,
              filename: 'boleto.pdf',
            });
            alert('Se ha generado correctamente el usuario');  
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
<style>
  @font-face {
  font-family: 'PPFraktionSans-Bold';
  src: url('../assets/fonts/Fraktion/PPFraktionSans-Bold.otf') format('woff');
}
  .btn-descarg{
    background-color: #321bdd;
    border-radius: 30px;
    height: 50px;
    width: 230px;
   border: none;
   color: #f2f2f2;
   margin-bottom: 15px;
   font-size: 20px;
   margin-top: 20px;
   font-family: 'PPFraktionSans-Bold';
  }
</style>