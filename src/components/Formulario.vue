<script setup lang="ts">

import {ref}  from 'vue';
import type {Ref}  from 'vue';
const nombre = ref('Hello Friends');
const color = ref('rgb(21, 193, 79)');
const Tletra:Ref<number> = ref(50);
const Fuente = ref('Arial');
const animation:Ref<boolean>= ref(false);
const classAnimation = ref('');
const error = ref('#d03');
console.log(animation);
console.log(animation.value);

const actualizarRef = () => {
  console.log(animation.value);
  classAnimation.value = animation.value==true ?'textoAnimado':'';
};
const validate = ()=>{
  const input = 40
  if(nombre.value.length > input){
    alert('No se permiten mas de '+input+' caracteres');
    nombre.value = nombre.value.substring(0,input);
  }
}
</script>

<template>
 <div class="PersonalizedName">
  <div>

    <h1>Personaliza tu nombre de no más de 40 caracteres:</h1>
    <form >
      
      <input type="text" v-model="nombre"  @input="validate"/>
      <input placeholder="selecciona tu color" type="color" v-model="color">
      <input type="range" v-model="Tletra" >
      <label for="">
        
        
        <input type="checkbox" v-model="animation" @change="actualizarRef"> Animar texto
      </label>
      <select v-model="Fuente">
        <option value="Arial">Selecciona tu fuente</option>
        <option value="cursive">Cursiva</option>
        
        <option value="Arial, sans-serif">Arial</option>
        <option value="Helvetica, sans-serif">Helvetica</option>
        <option value="Georgia, serif">Georgia</option>
        <option value="Times New Roman, serif">Times New Roman</option>
        <option value="Courier New, monospace">Courier New</option>
        <option value="Verdana, sans-serif">Verdana</option>
        <option value="Trebuchet MS, sans-serif">Trebuchet MS</option>
        <option value="Impact, sans-serif">Impact</option>
      </select>
    </form>
    
  </div>
    <div class="caja">
      <h1 :class="classAnimation" :style="{color:color,fontSize:Tletra+'px',fontFamily:Fuente}">{{nombre}}</h1>
      
    </div>
 </div>

</template>
