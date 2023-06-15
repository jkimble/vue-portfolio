<script setup>
import AboutContent from '../components/custom/AboutContent.vue';
import PageHero from '../components/custom/PageHero.vue';
</script>

<template>
  <main class="about innerpage">
    <PageHero hero_heading="About Me" hero_content="Check below to see more about my skills and technologies used." color="fff"></PageHero>
    <div class="content-wrap">
      <AboutContent about_head="Who am I?" skill_list_head="See my professional skills listed below:" funfact_head="Quick facts about me:">
      <template #about_content>
        <p>
          I am a Web Developer specializing in frontend development 
          with professional experience in full stack development.
          I specialize in creating beautiful, responsive, and user-friendly
          websites that are efficient and accessible.
        </p>
        <div class="text-contain mot">
          <h4>What motivates me?</h4>
          <p>
            I am always striving to learn and improve my skills, and I am
            constantly seeking out new challenges to push myself further.
            I take pride in my attention to detail, my ability to problem-solve,
            and my commitment to delivering high-quality work.
          </p>
        </div>
        <div class="text-contain cta">
          <h4>What can I do?</h4>
          <p>
            I have worked on a variety of projects, from small personal websites
            to large-scale e-commerce platforms, and I have experience collaborating
            with designers, developers, and clients to bring their visions to life. 
          </p>
          <RouterLink to="experience" class="textlink_alt">See my experience</RouterLink>
        </div>
      </template>
    </AboutContent>
    </div>
  </main>
</template>

<style scoped>
  .content-wrap .text-contain:first-of-type {
    margin: 1.5rem 0;
  }

  .textlink_alt {
    margin: 1rem 0;
  }
</style>