<script setup>
import { ref } from 'vue';
defineProps({
    accordion_head: {
        type: String,
        required: true
    }
})

const is_active = ref(false)

</script>

<template>
    <h2 v-if="this.$slots.option_heading" class="section_head">
        <slot name="option_heading"></slot>
    </h2>
    <div class="row accord-row" :class="{ active: is_active }" @click="$click => is_active = !is_active" onclick role="presentation" :aria-expanded="{ active: is_active }">
        <h3 class="accord-head col-xs-12">{{ accordion_head }}</h3>
        <div class="accord-content col-xs-12 col-sm-10">
            <div class="text-contain">
                <slot name="accordion_content"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .accord-row {
        cursor: pointer;
        padding: 1rem 0;
        margin: 0;
        border: 1px solid var(--color-border);
        border-radius: 7px;
        background: var(--color-background-mute);
        margin: 15px 0;
    }

    .accord-row.active,
    .accord-row:hover,
    .accord-row:focus {
        background: var(--color-background-soft);
        border: 1px solid var(--color-border-hover);
    }

    .section_head {
        margin: 2rem 0 1rem;
    }

    .accord-row .accord-head {
        margin: 0;
    }
    .accord-row .accord-content {
        display: none;
        padding-top: 15px;        
    }

    .accord-head::after {
        content: '';
        height: 2px;
        background: var(--color-border);
        display: block;
        position: absolute;
        width: 5rem;
        left: 0;
        top: 10px;
        position: relative;
        transition: 0.4s;
    }
    .accord-row.active .accord-head {
    }

    .accord-row.active .accord-head::after {
        width: 80%;
    }

    .accord-row.active .accord-content {
        display: block;
    }

    @media (max-width: 1025px) {
        .accord-row .accord-head {
            font-size: 16px;
        }
    }
</style>
