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
  display: flex;
  flex-direction: initial;
}
.img-world-cdmx{
  display: flex;
  flex-direction: right;
}
main{
    background-image: url("../assets/Rectángulo 3 copia.png");
    padding: 20px;
    margin: 20px;
}
.form{
    background-image: url("../assets/fondo 01.png");
}
b-button{
  color: #321BDD;
  border-radius: 20px;
}
.btn-confirmar{
  color: #321BDD;
  border-radius: 20px;
}
.footer{
  position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
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
