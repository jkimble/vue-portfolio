<script setup>
defineProps({
  hero_heading: {
    type: String,
    required: true
  },
  hero_content: {
    type: String,
    required: false
  }
})
</script>

<template>
    <div class="container-fluid hero">
        <div class="col-xs-12 center-xs">
            <h1>{{ hero_heading }}</h1>
            <p>{{ hero_content }}</p>
        </div>
    </div>
</template>

<style scoped>
    .hero {
        background: var(--color-background-soft);
        padding: 3rem 2rem;
    }
    .hero h1 {
        font-size: 65px;
        line-height: 78px;
        font-weight: bold;
    }

    @media (max-width: 767px) {
      .hero h1 {
        font-size: 45px;
        line-height: 60px;
      }
    }
</style>