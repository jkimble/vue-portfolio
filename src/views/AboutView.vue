<script setup>
import AboutContent from '../components/custom/AboutContent.vue';
import PageHero from '../components/custom/PageHero.vue';
</script>

<template>
  <main class="about innerpage">
    <PageHero hero_heading="About Me" hero_content="Check below to see more about my skills and technologies used." color="fff"></PageHero>
    <div class="content-wrap">
      <AboutContent about_head="A bit about me!" skill_list_head="See my professional skills listed below:">
      <template #about_content>
        <p>Hello world</p>
      </template>
    </AboutContent>
    </div>
  </main>
</template>
