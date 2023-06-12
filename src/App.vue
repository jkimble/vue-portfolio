<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeSidebar from './components/HomeSidebar.Vue';

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/images/namelogo-wh-trimc.png" width="450" height="100" />

    <div class="wrapper">
      <HomeSidebar msg="Welcome to my hub!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/">Education</RouterLink>
        <RouterLink to="/">Clients</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  height: auto;
  max-width: 100%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-flow: column;
    flex: 1 0 50%;
    justify-content: center;
    place-items: start;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 0 2rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
