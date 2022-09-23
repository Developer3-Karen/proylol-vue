<template>
  <div id="app">
    <nav>
      <router-link to="/">Construccion</router-link>
      <router-link to="/inicioregistro">Inicio</router-link>
      <router-link to="/registro">Registro</router-link>
      <router-link to="/confirmacorreo">Confirma correo</router-link>
      <router-link to="/confirmacorreoexito">Confirma correo Éxito</router-link>
      <router-link to="/boletodiauno">Boleto 29 sep</router-link>
      <router-link to="/boletodiados">Boleto 30 sep</router-link>
      <router-link to="/boletodiatres">Boleto 1 oct</router-link>
      <router-link to="/boletodiacuatro">Boleto 2 oct</router-link>
      <router-link to="/boletodiacinco">Boleto 3 oct</router-link>
      <router-link to="/boletodiaseis">Boleto 4 oct</router-link>
      <router-link to="/consumoapi">API</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
