<script setup lang="ts">

import {ref}  from 'vue';
import type {Ref}  from 'vue';
const nombre = ref('');
const apellido = ref('');
const color = ref('rgb(21, 193, 79)');
const Tletra:Ref<number> = ref(50);
const genero = ref('');
const age = ref(0);
const NumberPhone = ref(0);
const animation:Ref<boolean>= ref(false);
const classAnimation = ref('');
const error = ref<{ [key: string]: string }>({});
console.log(animation);
console.log(animation.value);

const validateDiff = ()=>{

  const msj = "No se permite que el nombre o apellido sean iguales o vacios";
  if(nombre.value == apellido.value || nombre.value.length == 0 || apellido.value.length == 0){
    error.value[msj] = msj;
  }else{
    delete error.value[msj];
  }
}
const validatePhone = () =>{
  const msj = 'El numero no puede ser mayor a 10 digitos o menor a 5 digitos';

  if(NumberPhone.value.toString().length > 10 || NumberPhone.value.toString().length <5){
    error.value[msj] = msj;
  }else{
    delete error.value[msj];
  }
}
const validateGenero=()=>{
  const msj = 'El genero no puede estar vacio';

if(genero.value.length == 0 || genero.value == ''){
  error.value[msj] = msj;
}else{
  delete error.value[msj];
}
}
const validateAge = () =>{
  const msj ='La edad no puede ser mayor a 60';
  if(age.value > 60){
    error.value[msj] = msj;
  }else{
    delete error.value[msj];
  }
}
validateDiff();
validateAge();
validateGenero();
validateGenero();  
validatePhone();  

</script>

<template>
 <div class="PersonalizedName">
  <div>

    <h1>Registrate en nuestra plataforma</h1>
    <form >
      
      <div>

        <label for="">Nombre:</label>
        <input type="text" placeholder="Nombre" v-model="nombre"  @input="validateDiff"/>
      </div>
      <div>
        <label for="">Apellido:</label>
        <input type="text" placeholder="Apellido" v-model="apellido"  @input="validateDiff"/>
      </div>
      <div>

        <label for="">Genero:</label>
        <select v-model="genero" @change="validateGenero">
          <option value="">--Selecciona tu genero</option>
          <option value="Mujer">Mujer</option>
          <option value="Hombre">Hombre</option>
          
        </select>
      </div>
      <div>
        <label for="">Número de telefono</label>
        <input type="number" v-model="NumberPhone" @input="validatePhone">
      </div>
      <div>
        <label for="">Edad</label>
        <input type="number" v-model="age"  @input="validateAge">
      </div>
      <button  :disabled="Object.keys(error).length != 0">Registrarse</button>
      
      
    </form>
    
  </div>
    <div class="caja">
      <li style="color: red;" v-for="([clave, valor], index) in Object.entries(error)" :key="index">
        {{ valor }}
      </li>
      <h1>
        {{ Object.keys(error).length == 0?'Todo en orden':'' }}
      </h1>
      
    </div>
 </div>

</template>
