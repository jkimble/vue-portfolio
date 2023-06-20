<script setup>
import { ref } from 'vue'
import AboutSlider from './AboutSlider.vue';
defineProps({
    about_head: {
    type: String,
    required: true
  },
  skill_list_head: {
    type: String,
    required: true
  },
  funfact_head: {
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
        {skill: 'Object-Oriented'},
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
            <div class="col-sm-12 col-xs-12 heading-col">
                <h2>{{ about_head }}</h2>
                <div class="content-contain">
                    <slot name="about_content"></slot>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 spec-col">
                <h3>{{ skill_list_head }}</h3>
                <ul class="skills-list">
                    <li v-for="skill in skills">
                        {{ skill.skill }}
                    </li>
                </ul>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 fact-slider">
                <h3>{{ funfact_head }}</h3>
                <AboutSlider></AboutSlider>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .about-content-wrap .row {
        max-width: 1025px;
        margin: 0 auto;
    }

    .heading-col {
        margin: 2rem 0;
    }

    .spec-col .skills-list {
        margin: 0;
        padding: 0;
        list-style-position: inside;
        list-style-type: none;
        display: flex;
        flex-flow: row wrap;
    }

    .spec-col .skills-list li {
        flex: 0 0 30%;
        text-align: center;
        padding: .5rem 0;
        margin: 10px 05px;
        background: var(--color-border);
        vertical-align: center;
    }

    .fact-slider {
        display: flex;
        flex-flow: column;
    }

    @media (max-width: 768px) {
        .spec-col .skills-list {
            justify-content: center;
            margin-bottom: 1.5rem;
        }
        .spec-col .skills-list li {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-width: 500px) { 
        .spec-col .skills-list li {
            flex: 0 0 28%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>