<script setup>
defineProps({
  social_link: {
    type: String,
    required: true
  }
})
</script>

<template>
    <a v-bind:href="social_link" class="soc_link_row" target="_blank">
        <div class="social-wrap">
            <span class="iconwrap">
                <slot name="icon"></slot>
            </span>
            <div class="social-content">
                <h3>
                    <slot name="heading"></slot>
                </h3>
                <slot name="content"></slot>
            </div>
        </div>
    </a>
  </template>

<style>
.social-wrap {
    padding: 15px;
    border: 1px solid var(--theme-accent-2);
    border-radius: 7px;
    margin: 0 0 20px;
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.4s;
}

.social-wrap:hover,
.social-wrap:focus {
    background: var(--portfolio-accent-2-highlight);
}

.social-wrap .social-content {
    flex: 0 1 75%;
}

.social-wrap .social-content h3 {
    color: var(--color-heading);
    transition: 0.4s;
    font-weight: 600;
}


.social-wrap .social-content p {
    color: var(--color-heading);
    transition: 0.4s;
}

.soc_link_row {
    text-decoration: none;
}
</style>