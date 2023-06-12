<script setup>
import HomeWelcome from '../components/custom/HomeWelcome.vue';
import SocialTextLinks from '../components/custom/SocialTextLinks.vue'
</script>

<template>
  <main class="container-fluid homepage">
    <HomeWelcome heading="Thank you for visiting my portfolio!" ctaintro="Use the navigation to view more about me, or use the links below to find
      me on other platforms." />

    <SocialTextLinks social_link="https://github.com/jkimble">
      <template #icon>
        <i class="fa-brands fa-github"></i>
      </template>
      <template #heading>
        <h3>GitHub</h3>
      </template>

      <p>My public projects and site themes can be found here.</p>
    </SocialTextLinks>

    <SocialTextLinks social_link="https://www.linkedin.com/in/justin-kimble-890429180/">
      <template #icon>
        <i class="fa-brands fa-linkedin"></i>
      </template>
      <template #heading>
        <h3>LinkedIn</h3>
      </template>

      <p>My LinkedIn profile featuring my work and education history, along with a couple of listed skills.</p>
    </SocialTextLinks>
  </main>
</template>
