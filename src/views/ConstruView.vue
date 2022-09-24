<template>
  <div class="home">
    <!-- eslint-disable-next-line max-len -->
    <img class="logoWorlds2022" alt="Worlds 2022 logo" style="margin-top:100px;" src="../assets/2LOGO2.png">
    <br>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <img class="pWorlds2022" alt="Worlds 2022" src="../assets/worlDs_cdmx_2022.png">
    <center>
            <!-- eslint-disable-next-line max-len -->
      <b-button type="submit" v-on:click="submit" style="background-color: #321BDD; border-radius: 30px; height: 50px; width: 230px; border: none; font-size: 20px; font-family: 'PPFraktionSans-Bold';" >REGÍSTRATE</b-button>
    </center>

    <div class="footer">
      <img class="decora" alt="Worlds 2022" src="../assets/ELEMENTO DE DECORACION (1).png">
    </div>
  </div>
</template>

<style>
body{
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
  name: 'ConstruView',
  components: {
    // HelloWorld,
  },
  mounted() {
    console.log('hola desde mounted 2');
    console.log(this.$route.path);
  },
  methods: {
    submit() {
      this.$router.push({ path: '/registro' });
    },
  },
};
</script>
