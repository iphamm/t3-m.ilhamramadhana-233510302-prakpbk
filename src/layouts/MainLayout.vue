<template>
  <q-layout view="lHh Lpr lFf">
    <NavbarComponent />

    <q-page-container>
      <router-view />
    </q-page-container>

    <FooterComponent />
  </q-layout>
</template>

<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>