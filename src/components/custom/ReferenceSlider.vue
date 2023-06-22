<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

defineProps({
    ref_head: {
    type: String,
    required: true
  }
})


const slides = [
  { id: '1', r_name: 'Chris Haag', r_title: "Director of Development", r_company: "The Karcher Group", r_email: "chaag@tkg.com" },
  { id: '2', r_name: 'Dr. Julian Woods, DDS', r_title: "General Dentist", r_company: "Landover Dental Associates", r_email: "jawoods9041@gmail.com" },
  { id: '3', r_name: 'Darla Brown', r_title: "VP of Digital Services", r_company: "The Karcher Group", r_email: "dbrown@tkg.com" },
]
</script>

<template>
    <h2 class="ref_head">
        {{ ref_head }}
    </h2>
    <Carousel wrapAround="false" autoplay=0 snap-align="start" :breakpoints="breakpoints">
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item">
          <h3>{{ slide.r_name }}</h3>
          <p><strong>{{ slide.r_title }}</strong> &vert; <i>{{ slide.r_company }}</i></p>
          <p class="email">{{ slide.r_email }}</p>
        </div>
      </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
</template>

<style scoped>
  section.carousel {
    background: var(--color-background-mute);
    box-shadow: 0 3px 6px #0d0d1d42;
    padding: 2rem 0;
  }
</style>