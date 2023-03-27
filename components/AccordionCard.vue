<!-- https://codesandbox.io/s/accordion-vue-js-1czqh?from-embed=&file=/src/components/AppAccordion.vue:711-754 -->

<template>
    <Card>
        <div class="flex flex-col">
            <div class="flex flex-row justify-between" v-on:click="toggleAccordion()">
                <TitleLevel0 v-bind:title="title"/>
                <ChevronUpIcon v-if="isOpen" class="self-center w-6 h-6" />
                <ChevronDownIcon v-else class="self-center w-6 h-6" />
            </div>

            <div v-show="isOpen">
                <slot />
            </div>
        </div>
    </Card>
</template>

<script>
export default {
    props: ['title'],

    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
    },
}
</script>

<script setup>
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline/esm/index.js';
</script>