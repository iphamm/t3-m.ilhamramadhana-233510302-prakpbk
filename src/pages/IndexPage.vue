<template>
  <q-page class="flex flex-center column q-pa-md">
    <CarouselComponent class="q-mb-lg" />

    <div class="row q-gutter-md justify-center" style="max-width: 1200px; width: 100%;">
      <CardComponent
        v-for="product in products"
        :key="product.id"
        :product-name="product.name"
        :price="product.price"
        :image-src="product.image"
      />
    </div>
  </q-page>
</template>

<script setup>
import CarouselComponent from '../components/CarouselComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import tshirt from '../assets/t-shirt.jpg'
import jeans from '../assets/jeans.jpg'
import hoodie from '../assets/hoodie.jpg'
import sneakers from '../assets/sneakers.jpg'
import topi from '../assets/topi.jpg'
import jam from '../assets/jamtangan.jpg'
import { ref } from 'vue';

// Data dummy untuk produk
const products = ref([
  { id: 1, name: 'T-Shirt Kasual', price: 150000, image: tshirt },
  { id: 2, name: 'Celana Jeans Slim Fit', price: 280000, image: jeans },
  { id: 3, name: 'Hoodie Tebal', price: 220000, image: hoodie },
  { id: 4, name: 'Sepatu Sneakers Pria', price: 450000, image: sneakers },
  { id: 5, name: 'Topi Baseball', price: 75000, image: topi },
  { id: 6, name: 'Jam Tangan Kulit', price: 300000, image: jam },
]);
</script>