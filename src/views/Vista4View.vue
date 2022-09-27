<template>
    <div class="sectBlanco">
       <header class="backoffice">
           <img class="img-world-logo" src="https://tes.opl.worldscdmx2022.com/logo%2001.png" alt="" >
           <img class="img-world-cdmx" src="https://tes.opl.worldscdmx2022.com/worlDs_cdmx_2022.png"  alt="">
       </header>
           <div style="margin-top:60px;">
           <!-- eslint-disable-next-line max-len -->
           <h1 style="font-family: 'Manuka-Bold'; font-size: 60px; color: #321bdd; margin-top: 60px; margin-bottom: 60px;">BOLETO USADO</h1>
           <!-- eslint-disable-next-line max-len -->
           <h4 style="font-family: 'PPFraktionMono-Bold'; color: black;">EL BOLETO QUE TRATA DE INGRESAR NO EXISTE.<br /> FAVOR DE VERIFICAR.</h4>
           <!-- eslint-disable-next-line max-len -->
           </div>
           <b-col >
               <!-- eslint-disable-next-line max-len -->
               <b-button type="submit" v-on:click="submit" style="font-family: 'PPFraktionSans-Bold'; background-color: #321BDD; border-radius: 15px; height: 50px; width: 250px; border: none; font-size: 20px; margin-top: 20px;">CONTINUAR ESCANEO</b-button>
           </b-col>
           <b-col >
               <!-- eslint-disable-next-line max-len -->
               <b-button type="submit" v-on:click="submit" style="font-family: 'PPFraktionSans-Bold'; background-color: #321BDD; border-radius: 15px; height: 50px; width: 250px; border: none; font-size: 20px; margin-top: 20px;">INGRESO MANUAL</b-button>
           </b-col>
           <b-col >
               <!-- eslint-disable-next-line max-len -->
               <b-button type="submit" v-on:click="submit" style="font-family: 'PPFraktionSans-Bold'; background-color: #321BDD; border-radius: 15px; height: 50px; width: 250px; border: none; font-size: 20px; margin-top: 20px;">INICIO</b-button>
           </b-col>
           <div class="sectBlanco footer">
               <!-- eslint-disable-next-line max-len -->
                <img class="decora" alt="Worlds 2022" src="../assets/Objeto inteligente vectorial_N.png"/>
           </div>
       </div>
</template>
