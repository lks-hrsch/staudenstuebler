<template>
  <Card>
    <div class="flex flex-col lg:flex-row justify-between">
      <div class="basis-1/2">
        <div>
          So können Sie uns erreichen:
        </div>
        <div class="flex flex-col">
          <div class="flex flex-row">
            <div class="basis-1/6">
              Mo.-Fr. :
            </div>
            <div>
              9 Uhr - 18 Uhr
            </div>
          </div>
          <div class="flex flex-row">
            <div class="basis-1/6">
              Sa. :
            </div>
            <div>
              9 Uhr - 12 Uhr (im April und Mai bis 14 Uhr)
            </div>
          </div>
          <div>
            (Mitte November bis Februar nur nach Absprache)
          </div>
        </div>
        <div class="flex flex-row">
          <div class="basis-1/6">
            <PhoneIcon class="w-6 h-6" />
          </div>
          <div>
            035243-32541
          </div>
        </div>
        <div class="flex flex-row">
          <div class="basis-1/6">
            <EnvelopeIcon class="w-6 h-6" />
          </div>
          <div>
            wi-zi-stuebler@t-online.de
          </div>
        </div>
      </div>

      <div class="basis-1/2" id="map">
        <!-- https://google-map-generator.com -->
        <iframe class="px-1 py-1 w-full h-full"
          src="https://maps.google.com/maps?q=Am%20Heidehof%2037,%2001468%20Moritzburg&t=k&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
      </div>
    </div>
  </Card>
  <Card>
    <div>Staude des Jahres</div>
    <img src="~/assets/images/staude_des_jahres.png" alt="Staude des Jahres" />
  </Card>
  <Card>
    <div>Events in unserem Betrieb (Grün dargestellt) oder wo wir vertreten sind (Rot dargestellt)</div>
    <EventCalendar class="hidden lg:block" v-bind:events=events />
    <div class="flex flex-col lg:hidden">
      <EventCard v-for="event in events" v-bind:event="event" />
    </div>
    <div>Bei den Events in unserem Betrieb ist immer für das Leibliche Wohl gesorgt</div>
    <div>Bitte beachten Sie zu diesen Terminen die aktuell gültigen Bestimmungen der Corona - Schutzverordnung</div>
  </Card>
</template>

<style>
#map {
  height: 20rem;
}
</style>

<script>
export default {
  data() {
    return {
      events: []
    }
  },
  mounted() {
    this.events = [{
      eventDate: [new Date(2022, 3, 9), new Date(2022, 3, 10),],
      eventTitle: "Raritäten Wochenende",
      eventTopic: "Verkauf von Neuzüchtungen und Raritäten",
      eventStartTime: 9,
      eventEndTime: 17,
      eventIsIntern: true,
    },
    {
      eventDate: [new Date(2022, 3, 23), new Date(2022, 3, 24)],
      eventTitle: "Verkaufsoffenes Wochenende",
      eventTopic: "Beginn der Balkon und Sommerblumen Saison",
      eventStartTime: 9,
      eventEndTime: 17,
      eventIsIntern: true,
    },
    {
      eventDate: [new Date(2022, 4, 22)],
      eventTitle: "Tags der Parks und Gärten",
      eventLink: "https://heidebogen.eu/gartenkultur",
      eventStartTime: 10,
      eventEndTime: 17,
      eventGuideMotto: "Was kann ich tun, wenn es im Garten immer trockener wird?",
      eventGuideTimes: [11, 13, 15],
      eventIsIntern: true,
    },
    {
      eventDate: [new Date(2022, 4, 28), new Date(2022, 4, 29)],
      eventTitle: "Pillnitzer Gartenwochenende",
      eventLink: "https://www.schlosspillnitz.de/de/veranstaltungen-ausstellungen/detailseite/event/pillnitzer-gartenwochenende-1/15697/",
      eventIsIntern: false,
    },
    {
      eventDate: [new Date(2022, 8, 17), new Date(2022, 8, 18)],
      eventTitle: "Herbstfest",
      eventTopic: "Verkauf von Neuheiten und Neueinführungen aus eigener Produktion",
      eventStartTime: 9,
      eventEndTime: 17,
      eventGuideTimes: [11],
      eventIsIntern: true,
    }
    ]
  }
}

</script>

<script setup>
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
</script>