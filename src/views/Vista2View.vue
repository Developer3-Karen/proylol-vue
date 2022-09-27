<template>
        <div class="sectBlanco" style="margin-bottom: 40px;">
            <header class="backoffice">
                <img class="img-world-logo" src="https://tes.opl.worldscdmx2022.com/logo%2001.png" alt="" >
                <img class="img-world-cdmx" src="https://tes.opl.worldscdmx2022.com/worlDs_cdmx_2022.png"  alt="">
            </header>
                <div style="margin-top:60px;">
                <!-- eslint-disable-next-line max-len -->
                <h1 style="font-family: 'Manuka-Bold'; font-size:60px; color: white; margin-top: 60px; margin-bottom: 60px;">USUARIO VÁLIDO</h1>
                <!-- eslint-disable-next-line max-len -->
                <h4 style="font-family: 'PPFraktionSans-Bold'; color:white;">NOMBRE: <p>LUIS ENRIQUE AGUIRRE</p></h4>
                <!-- eslint-disable-next-line max-len -->
                <h4 style="font-family: 'PPFraktionSans-Bold'; color:white;">EMAIL: <p>E.AGUIRRE.35@GMAIL.COM</p></h4>
                </div>
                <b-col >
                    <!-- eslint-disable-next-line max-len -->
                    <b-button type="submit" v-on:click="submit" style="font-family: 'PPFraktionSans-Bold'; background-color: #321BDD; border-radius:30px; height: 50px; width: 250px; border: none; font-size: 20px; margin-top: 20px">CONTINUAR ESCANEO</b-button>
                </b-col>
                <b-col>
                    <!-- eslint-disable-next-line max-len -->
                    <b-button type="submit" v-on:click="goToHome()" style="font-family: 'PPFraktionSans-Bold'; background-color: #321BDD; border-radius: 30px; height: 50px; width: 250px; border: none; font-size: 20px; margin-top: 20px;">INICIO</b-button>
                </b-col>
                <div class=" footer" style="margin-top: 30px;">
                    <!-- eslint-disable-next-line max-len -->
                    <img class="decora" alt="Worlds 2022" src="../assets/ELEMENTO DE DECORACION (1).png"/>
                </div>
        </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    goToHome() {
      this.$router.push('/VistaLogin');
    },
  },
};
</script>
