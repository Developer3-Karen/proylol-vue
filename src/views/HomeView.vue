<template>
  <div class="home">
    <img class="logoWorlds2022" alt="Worlds 2022 logo" src="../assets/2LOGO2.png">
    <br>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <img class="pWorlds2022" alt="Worlds 2022" src="../assets/worlDs_cdmx_2022.png">
    <p class="pcoming">COMING SOON</p>
    <div class="footer">
      <img class="decora" alt="Worlds 2022" src="../assets/ELEMENTO DE DECORACION (1).png">
    </div>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
@font-face{
    font-family: "PPFraktionMono-Bold";
    src: url("../assets/fonts/Fraktion/PPFraktionMono-Bold.otf")format("woff");
}
@font-face{
    font-family: "PPFraktionSans-Bold";
    src: url("../assets/fonts/Fraktion/PPFraktionSans-Bold.otf")format("woff");
}

body{
  font-weight: bold;
  font-family: "PPFraktionSans-Bold";
  background-image: url(../assets/fondo.png);
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
section{
  background-image: url("../assets/fondo 01.png");
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}
.logoWorlds2022{
  /** top right bottom left*/
  padding: 0px 0px 40px 0px;
}
.pWorlds2022{
  padding: 0px 0px 20px 0px;

}
.pcoming{
  padding: 0px 0px 50px 0px;
  color: rgb(242, 242, 242);
  font-size: 40px;
}
.decora{
  width: 1260px;
  height: auto;
}
.img-world-logo{
  margin-top: 30px;
  text-align : left;
  margin-right: 550px;
  height: 69px;
  width: 292px;
}
.img-world-cdmx{
  text-align : right;
  margin-top: 40px;
  height: 50px;
  width: 313px;
}
header{
    background-image: url("../assets/Rectángulo 3 copia.png");
    /* margin-bottom: 20px; */
    margin: 0;
    padding-right: 0em;
    height: 130px;
    width: 100%;
}
.form{
    background-image: url("../assets/fondo 01.png");
}
b-button{
  color: #321BDD;
  border-radius: 30px;
}
.btn-confirmar{
  color: #321BDD;
  border-radius: 80px;
}
.footer{
  position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
}
.boletodiauno{
  background-image: url("../assets/landing_0000s_0004_FINALS.png");
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.boletodiados{
  background-image: url("../assets/landing_0000s_0004_FINALS.png");
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.boletodiatres{
  background-image: url("../assets/landing_0000s_0004_FINALS.png");
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.boletodiacuatro{
  background-image: url("../assets/landing_0000s_0004_FINALS.png");
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.boletodiacinco{
  background-image: url("../assets/landing_0000s_0004_FINALS.png");
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.boletodiaseis{
  background-image: url("../assets/landing_0000s_0004_FINALS.png");
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

/*Responsivo para Moviles*/
  @media (max-width: 400px) {
    img {
        max-width: 100%;
        height: auto;
      }
  }
/*Responsivo para Tablets*/
  @media (min-width: 400px) and (max-width: 1024px) {
      img {
        max-width: 100%;
        height: auto;
      }
  }
/*Responsivo para Escritorio*/
  @media (min-width: 1025px) and (max-width: 1980px){
      img {
        max-width: 100%;
        height: auto;
      }
  }
/*Responsivo para Full Hd*/
  @media (min-width: 1981px) {
    img {
        max-width: 100%;
        height: auto;
    }
  }
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
};
</script>
