<script setup>
defineProps({
  heading: {
    type: String,
    required: true
  },
  ctaintro: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="home__content">
        <h2>{{ heading }}</h2>
        <div class="text-contain">
            <p>
                I am a web/web app developer specializing in developing custom websites
                and themes with a broad range of CMS knowledge.
            </p>
            <p class="cta_intro">{{ ctaintro }}</p>
        </div>
    </div>
</template>

<style scoped>
.home__content {
    margin-bottom: 2rem;
}
.home__content h2 {
    font-size: 30px;
    line-height: 45px;
    font-weight: 600;
    color: var(--theme-icon-color);
}

.home__content .text-contain p:last-child {
  margin-top: 1.5rem;
  color: var(--theme-icon-color);
  font-size: 20px;
}
</style>