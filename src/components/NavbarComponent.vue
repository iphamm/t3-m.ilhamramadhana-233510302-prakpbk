<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title class="flex items-center"> <q-avatar size="32px" class="q-mr-sm"> <img src="/public/logo.png" alt="Logo touchONE">
        </q-avatar>

        <router-link to="/" style="text-decoration: none; color: inherit;">
          touchONE
        </router-link>
      </q-toolbar-title>
      <q-space />
      <q-btn flat round dense icon="shopping_cart" class="q-mr-xs">
        <q-tooltip>Keranjang Belanja</q-tooltip>
      </q-btn>
      <q-btn flat round dense icon="menu">
        <q-tooltip>Menu</q-tooltip>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>