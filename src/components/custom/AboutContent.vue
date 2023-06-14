<script setup>
import { ref } from 'vue'
defineProps({
    about_head: {
    type: String,
    required: true
  },
  skill_list_head: {
    type: String,
    required: true
  }
})
const skills = ref([
        {skill: 'HTML'},
        {skill: 'CSS'},
        {skill: 'LESS'},
        {skill: 'Bootstrap'},
        {skill: 'Responsive Design'},
        {skill: 'Accessible Design'},
        {skill: 'Object-Oriented Approach'},
        {skill: 'Javascript'},
        {skill: 'JSON'},
        {skill: 'Vue.js'},
        {skill: 'jQuery'},
        {skill: 'PHP'},
        {skill: 'REST APIs'},
        {skill: 'SQL/MS SQL'},
        {skill: 'Git'}
    ])
</script>

<template>
    <div class="container-fluid about-content-wrap">
        <div class="row">
            <div class="col-sm-12 col-xs-12 center-xs text-col">
                <h2>{{ about_head }}</h2>
                <div class="content-contain">
                    <slot name="about_content"></slot>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12 spec-col">
                <h3>{{ skill_list_head }}</h3>
                <ul class="skills-list">
                    <li v-for="skill in skills">
                        {{ skill.skill }}
                    </li>
                </ul>
            </div>
            <div class="col-sm-6 col-xs-12 spec-grid">

            </div>
        </div>
    </div>
</template>

<style scoped>
    .about-content-wrap .row {
        max-width: 1024px;
        margin: 0 auto;
    }
</style>