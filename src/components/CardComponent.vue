<template>
  <q-card class="my-card column" style="width: 480px;">
    <q-img :src="imageSrc" :ratio="16/9">
      <template v-slot:error>
        <div class="absolute-full flex flex-center bg-negative text-white">
          Cannot load image
        </div>
      </template>
    </q-img>

    <q-card-section>
      <div class="text-h6 q-mb-xs">{{ productName }}</div>
      <div class="text-subtitle1 text-primary q-mb-sm">
        {{ price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}
      </div>
    </q-card-section>

    <q-card-actions align="right" class="q-pt-none">
      <q-btn flat round color="red" icon="favorite">
        <q-tooltip>Tambah ke Favorit</q-tooltip>
      </q-btn>
      <q-btn flat color="primary" label="Beli Sekarang">
        <q-tooltip>Tambahkan ke Keranjang</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { defineProps } from 'vue';

// Definisikan props yang akan diterima komponen ini
const props = defineProps({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageSrc: {
    type: String,
    default: '' 
  }
});
</script>

<style lang="scss" scoped>
.my-card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
}
</style>