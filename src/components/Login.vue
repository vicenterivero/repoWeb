<script setup lang="ts">

import {ref}  from 'vue';
import type {Ref}  from 'vue';
const username:Ref<string>= ref('');
const password:Ref<string>= ref('');

</script>
<template>
<div class="login-container">
  <form class="login-form">
    <div class="form-group">
      <label for="username">Usuario:</label>
      <input type="text" id="username" name="username" v-model="username" required>
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" v-model="password" required>
    </div>
    <div class="form-group">
      <input type="submit" value="Iniciar Sesión">
    </div>
  </form>
</div>
</template>