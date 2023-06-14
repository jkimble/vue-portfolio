<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = [
  { id: '1', title: 'Former D1 Athlete', content: "Ran track for Mount St. Mary's University (Sprints)" },
  { id: '2', title: 'Seven-time All-Conference (NEC)', content: 'Two-time Conference Champion!' },
  { id: '3', title: 'Former ACM board member', content: 'Association of Computing Machinery' },
  { id: '4', title: 'Favorite college class:', content: 'Theory of Computation' },
  { id: '5', title: 'My favorite pastime', content: 'Building computers (4 so far)' },
]
</script>

<template>
    <Carousel wrap-around="true" autoplay=5000>
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.content }}</p>
        </div>
      </Slide>
  
      <template #addons>
        <Pagination />
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