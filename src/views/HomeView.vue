
<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import CardsImageComp from '@/components/base/CardsImageComp.vue'

interface Image {
  src: string;
  alt: string;
}
const images: Image[] = [
  {
    src: "/assets/img/dynamic.png",
    alt: "imagen e-sport1"
  },
  {
    src: "/assets/img/manage.png",
    alt: "imagen e-sport2"
  },
  {
    src: "/assets/img/pricing.png",
    alt: "imagen e-sport2"
  },
  {
    src: "/assets/img/banner.jpg",
    alt: "imagen banner"
  },

]
</script>

<template>
  <MainLayout>
    <template #main>
      <div class="container">
        <div class="banner">
          <CardsImageComp class="image1" :src="images[3].src" :alt="images[3].alt" />
        </div>
        <CardsImageComp class="image2" :src="images[0].src" :alt="images[0].alt" :width="250" :heigth="250" v-for="image,index in images" :key="index" />
        <CardsImageComp class="image3" :src="images[1].src" :alt="images[1].alt" :width="250" :heigth="250" />
        <CardsImageComp class="image4" :src="images[2].src" :alt="images[2].alt" :width="250" :heigth="250" />
      </div>
    </template>
  </MainLayout>
</template>

<style scoped>
.container {
  min-height: 100vh;
  min-width: 100%;
  display: grid;
  grid-template:
    [row1-start]"header header header" 350px[row1-end] [row2-start]"card1 card2 card3" 300px[row2-end];
  grid-template-areas:
    "header header header"
    "card1 card2 card3";
}

.container .banner {
  grid-area: header;
  place-self: center;
}

.container .image2 {
  grid-area: card1;
  place-self: center;
}

.container .image3 {
  grid-area: card2;
  place-self: center;
}

.container .image4 {
  grid-area: card3;
  place-self: center;
}
</style>
@/types/User.interface@/types/Game.interface