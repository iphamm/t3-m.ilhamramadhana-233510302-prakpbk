<template>
  <q-footer elevated class="bg-primary text-white q-pa-md">
      <q-toolbar-title class="text-center text-caption q-mt-sm">
        &copy; {{ currentYear }} touchONE - M. Ilham Ramadhana.
      </q-toolbar-title>
  </q-footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>

</style>