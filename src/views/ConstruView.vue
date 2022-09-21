<template>
  <div class="home">
    <img class="logoWorlds2022" alt="Worlds 2022 logo" src="../assets/2LOGO2.png">
    <br>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <img class="pWorlds2022" alt="Worlds 2022" src="../assets/worlDs_cdmx_2022.png">
    <center>
      <b-button class="btn-registrate" type="submit" variant="primary">REGÍSTRATE</b-button>
    </center>
    <div class="footer">
      <img class="decora" alt="Worlds 2022" src="../assets/ELEMENTO DE DECORACION (1).png">
    </div>
  </div>
</template>

<style>
body{
  font-family: ;
  background-image: url(../assets/fondo.png);
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.logoWorlds2022{
  /** top right bottom left*/
  padding: 0px 0px 40px 0px;
}
.pWorlds2022{
  padding: 0px 0px 40px 0px;

}
.pcoming{
  padding: 0px 0px 50px 0px;
  color: rgb(242, 242, 242);
  font-size: 40px;
}
/* .decora{
  padding-top: 120px;
  width: 1260px;
  height: auto;
} */
/* .img-world-logo{
  float: left;
} */
/* .img-world-cdmx{
  float: right;
} */
main{
    background-image: url("../assets/Rectángulo 3 copia.png");
    padding: 20px;
    margin: 20px;
}
.form{
    background-image: url("../assets/fondo 01.png");
}
.btn-registrate{
  border-radius: 5px;
}

/*Responsivo para Moviles*/
@media (max-width: 400px) {
    .home {
      max-width: 90%;
      height: auto;
    }
}
/*Responsivo para Tablets*/

@media (min-width: 400px) and (max-width: 1024px) {
    img {
      max-width: 90%;
      height: auto;
    }
}
/*Responsivo para Escritorio*/
@media (min-width: 1025px) and (max-width: 1980px){
    img {
      max-width: 90%;
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
