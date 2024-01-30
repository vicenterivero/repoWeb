<script setup lang="ts">

import {ref}  from 'vue';
import type {Ref}  from 'vue';


</script>
<template>
    <div class="login-container">
  <h2>Iniciar Sesión</h2>
  <form class="login-form">
    <div class="form-group">
      <label for="username">Usuario:</label>
      <input type="text" id="username" name="username" required>
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <div class="form-group">
      <input type="submit" value="Iniciar Sesión">
    </div>
  </form>
</div>
</template>