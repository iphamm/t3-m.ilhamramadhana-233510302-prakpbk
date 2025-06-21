<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    height="500px"
    class="rounded-borders shadow-4"
    style="width: 100%; max-width: 1500px;"
  >
    <q-carousel-slide :name="1" :img-src="carousel1">
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Diskon Besar!</div>
        <div class="text-subtitle1">Temukan penawaran terbaik kami</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" :img-src="carousel2">
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Produk Terbaru</div>
        <div class="text-subtitle1">Jangan lewatkan koleksi baru kami</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="3" :img-src="carousel3">
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">Gratis Ongkir!</div>
        <div class="text-subtitle1">Untuk pembelian di atas Rp 500.000</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue';
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'

const slide = ref(1);
const autoplay = ref(true); 
</script>

<style lang="scss" scoped>
.custom-caption {
  text-align: center;
  padding: 10px;
  color: white;
  background-color: rgba(0, 0, 0, .5);
}
</style>