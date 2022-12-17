<template>
    <div class="block rounded px-4 py-4 border-2 mt-1 mb-1">
        <div class="flex flex-row">
            <div class="flex-none w-2 rounded mr-2" :class="{'bg-green-300' : event.eventIsIntern, 'bg-red-300' : !event.eventIsIntern}" />
            <div class="flex flex-col grow cursor-pointer" v-on:click="openModal = !openModal">
                <div>
                    {{ event.eventTitle }}
                </div>
                <div>
                    <div v-if="getDateStringAtIndex(0) !== getDateStringAtIndex(-1)">
                        {{ getDateStringAtIndex(0) }} - {{ getDateStringAtIndex(-1) }}
                    </div>
                    <div v-else>
                        {{ getDateStringAtIndex(0) }}
                    </div>
                </div>
            </div>
            <div class="flex-none content-center" v-if="event.eventLink">
                <ArrowTopRightOnSquareIcon class="cursor-pointer w-6 h-6" v-on:click="redirectExternalEventPage()" />
            </div>
            <EventModal v-bind:open="openModal" v-bind:event="event" />
        </div>
    </div>
</template>

<script>
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString?retiredLocale=de
const eventOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default {
    props: ['event'],
    data() {
        return {
            openModal: false,
        }
    },
    methods: {
        getDateStringAtIndex(index) {
            let date = this.event.eventDate.at(index);
            let string = date.toLocaleDateString('de-DE', eventOptions);
            return string;
        },
        redirectExternalEventPage() {
            // https://codingbeautydev.com/blog/vue-open-link-in-new-tab/
            window.open(this.event.eventLink, '_blank', 'nereferrer');
        },
    }
}
</script>

<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
</script>