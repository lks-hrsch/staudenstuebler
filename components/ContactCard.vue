<template>
  <Card>
    <TitleLevel0Left title="Anfahrt" />
    <div id="map" class="w-full">
      <!-- https://google-map-generator.com -->
      <iframe
        class="px-1 py-1 w-full h-full"
        src="https://maps.google.com/maps?q=Am%20Heidehof%2037,%2001468%20Moritzburg&t=k&z=15&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      >
      </iframe>
    </div>

    <div class="flex flex-row items-start justify-between">
      <div class="flex flex-col">
        <TitleLevel1 title="Kontakt" />
        <div>Am Heidehof 37</div>
        <div>01468 Moritzburg / OT Steinbach</div>
        <div>Deutschland</div>
      </div>
      <div class="flex flex-col">
        <TitleLevel1 title="Anschrift" />
        <div class="flex flex-row">
          <div class="w-20">
            <PhoneIcon class="w-6 h-6" />
          </div>
          <div>035243-32541</div>
        </div>
        <div class="flex flex-row">
          <div class="w-20">
            <EnvelopeIcon class="w-6 h-6" />
          </div>
          <div>wi-zi-stuebler@t-online.de</div>
        </div>
      </div>
      <ButtonOutlined class="self-center" :href="'#'">
        <div>Zum</div>
        <div>Kontaktformular</div>
      </ButtonOutlined>
    </div>
  </Card>
</template>

<script setup>
import {
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/vue/24/outline/esm/index.js';
</script>

<style>
#map {
  height: 20rem;
}
</style>
