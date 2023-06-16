<script setup>
defineProps({
  heading: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="home__content">
        <h1>{{ heading }}</h1>
        <div class="text-contain">
            <p>
                Full Stack Web Developer with proven results for clients.
            </p>
        </div>
        <div class="button_wrap">
          <RouterLink to="about" class="textlink_alt">Learn more about me</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.home__content {
    margin-bottom: 2rem;
    text-align: center;
}
.home__content h1 {
    font-size: 120px;
    line-height: 110px;
    font-weight: 600;
    color: var(--text-color);
}

.home__content .text-contain p {
  font-size: 24px;
  line-height: 35px;
  color: var(--theme-icon-color);
}

.home__content .button_wrap .textlink_alt {
  margin-top: 2rem;
}

@media (max-width: 767px) {
  .home__content h1 {
    font-size: 45px;
    line-height: 60px;
  }

  .home__content .text-contain p {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>