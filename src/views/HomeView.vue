<script setup>
import HomeWelcome from '../components/custom/HomeWelcome.vue';
import SocialTextLinks from '../components/custom/SocialTextLinks.vue'
</script>

<template>
  <main class="container-fluid homepage">
    <HomeWelcome heading="Thank you for visiting my portfolio!" ctaintro="Use the navigation to view more about me, or use the links below to find
            me on other platforms." />
    <SocialTextLinks>
      <template #icon>
        <i class="fa-brands fa-github"></i>
      </template>
      <template #heading>
        <a href="https://github.com/jkimble" target="_blank">GitHub</a>
      </template>

      <p>My public projects and site themes can be found here.</p>
    </SocialTextLinks>

    <SocialTextLinks>
      <template #icon>
        <i class="fa-brands fa-linkedin"></i>
      </template>
      <template #heading>
        <a href="https://www.linkedin.com/in/justin-kimble-890429180/" target="_blank">LinkedIn</a>
      </template>

      <p>My LinkedIn profile featuring my work and education history, along with a couple of listed skills.</p>
    </SocialTextLinks>
  </main>
</template>
