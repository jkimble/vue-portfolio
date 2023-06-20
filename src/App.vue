<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SocialSidebar from './components/custom/SocialSidebar.vue';

</script>

<template>
  <header>
    <div class="header_wrap">
      <h2 class="textlogo">Justin <span>Kimble</span></h2>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/experience">Experience</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <div class="side__social">
    <SocialSidebar soc_link="https://github.com/jkimble">
      <template #soc_icon>
        <i class="fa-brands fa-github"></i>
      </template>
    </SocialSidebar>

    <SocialSidebar soc_link="https://www.linkedin.com/in/justin-kimble-890429180/">
      <template #soc_icon>
        <i class="fa-brands fa-linkedin"></i>
      </template>
    </SocialSidebar>

    <SocialSidebar soc_link="mailto:jkimble.dev@gmail.com">
      <template #soc_icon>
        <i class="fa-regular fa-envelope"></i>
      </template>
    </SocialSidebar>
  </div>
<Transition>
  <RouterView />
</Transition>
  <footer class="container-fluid footer">
    <div class="row footer-row">
      <div class="col-xs-12 center-xs copy">
        Justin Kimble {{ new Date().getFullYear() }}
      </div>
      <div class="col-xs-12 center-xs social-footer">
        <div class="social-footer-wrap">
          <SocialSidebar soc_link="https://github.com/jkimble">
            <template #soc_icon>
              <i class="fa-brands fa-github"></i>
            </template>
          </SocialSidebar>

          <SocialSidebar soc_link="https://www.linkedin.com/in/justin-kimble-890429180/">
            <template #soc_icon>
              <i class="fa-brands fa-linkedin"></i>
            </template>
          </SocialSidebar>

          <SocialSidebar soc_link="mailto:jkimble.dev@gmail.com">
            <template #soc_icon>
              <i class="fa-regular fa-envelope"></i>
            </template>
          </SocialSidebar>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transition: 0.5s;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 1.5rem 2rem;
  background:var(--color-background);
  box-shadow: 0 3px 6px #0d0d1d42;
  z-index: 10;
}

footer {
  padding: 2rem 2rem 1rem;
}
.social-footer-wrap {
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  border-radius: 7px;
  box-shadow: 0 3px 6px #0d0d1d42;
  padding: 10px;
  border: 1px solid var(--color-border);
  background: var(--color-background-soft);
  max-width: 175px;
  margin: 1rem auto 0;
}

.side__social {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateY(-90%) translateX(-50%);
  display: flex;
  flex-flow: row nowrap;
  border-radius: 7px;
  box-shadow: 0 3px 6px #0d0d1d42;
  padding: 10px;
  border: 1px solid var(--color-border);
  background: var(--color-background-soft);
}

.side__social ,
.social-footer-wrap a {
    padding: 0 10px;
  }

.side__social a i,
.social-footer-wrap a i {
  transition: 0.4s;
  color: var(--theme-icon-color);
}

.side__social a:hover,
.side__social a:focus,
.social-footer-wrap a:hover,
.social-footer-wrap a:focus {
  background: transparent;
}

.side__social a:hover i,
.side__social a:focus i,
.social-footer-wrap a:hover i,
.social-footer-wrap a:focus i {
  color: var(--portfolio-blue);
}

.textlogo {
  color: var(--color-heading);
  font-size: 30px;
  letter-spacing: 4.06px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1.5rem;
}

.textlogo span {
  background: var(--portfolio-blue);
  padding: 5px;
  color: var(--portfolio-white);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a {
  color: var(--color-heading);
}

nav a:hover,
nav a:focus {
  color: var(--portfolio-white);
}

nav a.router-link-exact-active {
  color: var(--portfolio-white);
  background-color: var(--portfolio-blue);
}

nav a.router-link-exact-active:hover {

}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-weight: bold;
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1090px) {
  .side__social {
    top: 45%;
    transform: translateY(-45%);
    left: 2rem;
    flex-flow: column;
  }

  .side__social a {
    padding: 0;
  }
}

@media (min-width: 1025px) {
  header {
    display: flex;
    flex-flow: row;
    flex: 1 1 100%;
    max-width: 100%;
    width: 100%;
  }

  header .header_wrap {
    max-width: 1025px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
  }

  .textlogo {
    text-align: left;
    margin: 0;
  }

  .social-footer {
    display: none;
  }
}

@media (max-width: 1025px) {
  .side__social {
    display: none;
  }
}

@media (max-width: 768px) {
  nav a {
    padding: 0 .5rem;
  }
}
</style>
