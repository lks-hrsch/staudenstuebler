<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="emit('toggleDialog')">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle>
                      <TitleLevel0Left :title="props.event.eventTitle" />
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        {{ props.event.eventTopic }}
                      </p>
                    </div>

                    <div>
                      <div
                        v-if="
                          getDateStringAtIndex(0) !== getDateStringAtIndex(-1)
                        "
                      >
                        {{ getDateStringAtIndex(0) }} -
                        {{ getDateStringAtIndex(-1) }}
                      </div>
                      <div v-else>
                        {{ getDateStringAtIndex(0) }}
                      </div>
                    </div>

                    <div v-if="event.eventIsIntern" class="mt-2">
                      <p class="text-sm text-gray-500">
                        von {{ event.eventStartTime }}:00 Uhr bis
                        {{ event.eventEndTime }}:00 Uhr
                      </p>
                    </div>

                    <div v-if="event.eventGuideTimes" class="mt-2">
                      Es git es Führungen durch unserem Schaugarten um:
                      <ul class="list-disc list-inside">
                        <li v-for="time in event.eventGuideTimes" :key="time">
                          {{ time }} Uhr
                        </li>
                      </ul>
                      <div v-if="event.eventGuideMotto">
                        Die Führungen werden unter dem Motto: "{{
                          event.eventGuideMotto
                        }}" durchgeführt.
                      </div>
                    </div>

                    <div v-if="event.eventIsIntern" class="mt-2">
                      <p>
                        Für das Leibliche Wohl ist an diesen Tagen durch unseres
                        Hauseigenes Catering mit selbstgebackenem Kuchen und
                        frisch gegrillter Bratwurst gesorgt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString?retiredLocale=de
</script>

<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

const props = defineProps(['open', 'event']);
const emit = defineEmits(['toggleDialog']);

const getDateStringAtIndex = (index) => {
  const date = props.event.eventDate.at(index);
  const string = date.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return string;
};
</script>
