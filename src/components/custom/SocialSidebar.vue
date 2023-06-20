<script setup>
defineProps({
    soc_link: {
    type: String,
    required: true
  }
})
</script>

<template>  
    <a v-bind:href="soc_link" target="_blank" class="iconwrap">
        <slot name="soc_icon"></slot>
    </a>
</template>

<style scoped>
    a {
        text-decoration: none;
    }
</style>