<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps({
  msg: String
})

const slides = ref(Array(3))

</script>

<template>
  <h1>{{ msg }}</h1>

  <Swiper>
    <template v-for="(_, index) in slides">
      <SwiperSlide>{{ index + 1 }}</SwiperSlide>
    </template>
  </Swiper>

</template>

<style scoped>
.swiper-slide {
  border: 1px solid purple;
  color: #42b983;
  margin: 2px;
}
</style>
