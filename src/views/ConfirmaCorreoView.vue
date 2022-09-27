<template>
  <div class="confirmacorreo">
    <header>
      <img class="img-world-logo" src="https://tes.opl.worldscdmx2022.com/logo%2001.png" alt="" />
      <img
        class="img-world-cdmx"
        src="https://tes.opl.worldscdmx2022.com/worlDs_cdmx_2022.png"
        alt=""
      />
    </header>
    <section style="padding-top: 80px">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <!-- eslint-disable-next-line max-len -->
            <h1
              style="
                color: #f2f2f2;
                font-family: 'Manuka-Bold';
                padding-bottom: 30px;
                font-size: 60px;
              "
            >
              CONFIRMA TU CÓDIGO DE REGISTRO.
            </h1>
            <!-- eslint-disable-next-line max-len -->
            <p
              style="
                color: #f2f2f2;
                font-family: 'PPFraktionSans-Bold';
                font-size: 20px;
                margin-bottom: 2px;
                margin-left: 12px;
                padding-top: 20px;
              "
            >
              Estás a punto de descargar tus boletos, coloca nuevamente
            </p>
            <!-- eslint-disable-next-line max-len -->
            <p
              style="
                color: #f2f2f2;
                font-family: 'PPFraktionSans-Bold';
                font-size: 20px;
                margin-bottom: 2px;
              "
            >
              tu código de registro y da clic en el botón verificar.
            </p>
            <center>
              <!-- eslint-disable-next-line max-len -->
              <p
                style="
                  color: #f2f2f2;
                  font-family: 'PPFraktionSans-Bold';
                  font-size: 20px;
                  padding-top: 20px;
                "
              >
                Escribe a continuación tu código:
              </p>
            </center>
          </b-col>
        </b-row>
        <b-row>
          <center>
            <b-col cols="12" md="6" lg="4">
              <!-- eslint-disable-next-line max-len -->
              <b-form-input
                v-model="codigo_acceso"
                style="
                  border-radius: 50px;
                  text-align: center;
                  font-family: 'PPFraktionSans-Bold';
                  font-size: 20px;
                "
                placeholder="Escribe tu código de confirmación"
              ></b-form-input>
            </b-col>
          </center>
        </b-row>
        <b-row>
          <b-col>
            <!-- eslint-disable-next-line max-len -->
            <b-button
              type="submit"
              v-on:click="submit"
              style="
                background-color: #321bdd;
                border-radius: 30px;
                height: 50px;
                width: 250px;
                border: none;
                font-size: 20px;
                margin-top: 20px;
              "
              >Verificar</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div id="app" ref="document" style="display: none">
      <h1 style="color: #321bdd">Descarga tu boleto</h1>
      <!-- eslint-disable-next-line max-len -->
      <center><button @click="exportToPDF" class="btn-descarga">boton</button></center>
      <div id="element-to-convert">
        <div class="boletodiatres">
          <div style="text-align: center">
            <img class="logoWorlds2022" alt="Worlds 2022 logo" src="../assets/2LOGO2.png" />
          </div>
          <br />
          <center>
            <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
            <img :src="getImgUrl()" alt="" style="height: 331px; width: auto; margin-bottom: 6px" />
            <!-- eslint-disable-next-line max-len -->
            <b-form-input
              style="
                text-align: center;
                font-family: 'PPFraktionSans-Bold';
                font-size: 20px;
                color: #f2f2f2;
                background-color: transparent;
                border: none;
              "
              v-model="codigo_acceso"
            ></b-form-input>
            <!-- eslint-disable-next-line max-len -->
            <p
              style="
                color: #f2f2f2;
                font-size: 30px;
                margin-top: 5px;
                font-family: 'PPFraktionSans-Bold';
              "
            >
              FECHA
            </p>
            <!-- eslint-disable-next-line max-len -->
            <b-form-input
              style="
                border-radius: 50px;
                text-align: center;
                font-family: 'PPFraktionSans-Bold';
                font-size: 20px;
                background-color: #321bdd;
                color: #f2f2f2;
                height: 40px;
                width: 500px;
              "
              v-model="pdf.fecha"
            ></b-form-input>
            <!-- eslint-disable-next-line max-len -->
            <p
              style="
                color: #f2f2f2;
                font-size: 30px;
                margin-top: 5px;
                font-family: 'PPFraktionSans-Bold';
              "
            >
              HORA
            </p>
            <!-- eslint-disable-next-line max-len -->
            <b-form-input
              style="
                border-radius: 50px;
                text-align: center;
                font-family: 'PPFraktionSans-Bold';
                font-size: 20px;
                background-color: #321bdd;
                color: #f2f2f2;
                height: 40px;
                width: 500px;
              "
              v-model="pdf.hora_final"
            ></b-form-input>
            <!-- eslint-disable-next-line max-len -->
            <p
              style="
                font-family: 'Manuka-Bold';
                color: #f2f2f2;
                font-size: 20px;
                margin-top: 10px;
                margin-bottom: 10px;
              "
            >
              Lugar: Centro Cultural Estación Indianilla <br />
              Dirección: Claudio Bernard 111, Doctores, Cuauhtémoc,<br />
              06720 Ciudad de México, CDMX
            </p>
            <br />
            <img
              class="pWorlds2022"
              alt="Worlds 2022"
              src="https://tes.opl.worldscdmx2022.com/worlDs_cdmx_2022.png"
            />
            <br /><br />
          </center>
          <div class="footer">
            <img
              class="decora"
              alt="Worlds 2022"
              src="https://tes.opl.worldscdmx2022.com/ELEMENTO%20DE%20DECORACION%20(1).png"
            />
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
        hora_final: '',
        qr: '',
      },
    };
  },
  methods: {
    getImgUrl() {
      console.log('Entre a la imagen');
      console.log(this.pdf.qr);
      return this.pdf.qr;
    },
    submit() {
      const article = {
        codigo_acceso: this.codigo_acceso,
      };
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
            const postar = { codigo_acceso: this.codigo_acceso };
            axios
              .post('https://worlds2022.herokuapp.com/generarBoleto', postar, {
                headers: {
                  'content-type': 'application/json',
                },
              })
              .then((response) => {
                if (response.data.code === 500) {
                  alert(response.data.mensaje);
                } else {
                  console.log(response);
                  this.pdf.codigo = response.data.data[0].codigo_acceso;
                  this.pdf.fecha = response.data.data[0].fecha;
                  this.pdf.hora = response.data.data[0].hora_inicio;
                  this.pdf.hora = response.data.data[0].hora_fin;
                  this.pdf.qr = response.data.base64;
                  this.pdf.fecha = this.pdf.fecha.substring(0, 10);
                  /* eslint-disable */
                  this.pdf.hora_final = response.data.data[0].hora_inicio.substring(0, 5) + " a " + response.data.data[0].hora_fin.substring(0, 5);
                  html2pdf(document.getElementById('element-to-convert'), {
                    margin: 0,
                    filename: 'boleto.pdf',
                  });
                  alert('Se ha generado correctamente el usuario');
                }
              })
              .catch((error) => {
                /* eslint-disable */
                console.log('error' + error.data.mensaje);
                alert('No existe el cupon');
              });
          }
        })
        .catch((error) => {
          console.log('error' + error.data.mensaje);
          alert('No existe el cupon');
        });
    },
    exportToPDF() {},
  },
};
</script>
<style>
@font-face {
  font-family: 'PPFraktionSans-Bold';
  src: url('../assets/fonts/Fraktion/PPFraktionSans-Bold.otf') format('woff');
}
.btn-descarg {
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
