<template>
  <Card>
    <div>
      Gartenbaumschule, Stauden und Gehölzproduktion, Gartengeschtaltung, Pflanzengarten
    </div>
  </Card>
  <Card>
    <div class="flex flex-col lg:flex-row justify-between">
      <div class="basis-1/2 self-center">
        <div>
          So können Sie uns erreichen:
        </div>
        <div class="flex flex-col">
          <div class="flex flex-row">
            <div class="w-20">
              Mo.-Fr.:
            </div>
            <div>
              9 Uhr - 18 Uhr
            </div>
          </div>
          <div class="flex flex-row">
            <div class="w-20">
              Sa.:
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
          <div class="w-20">
            <PhoneIcon class="w-6 h-6" />
          </div>
          <div>
            035243-32541
          </div>
        </div>
        <div class="flex flex-row">
          <div class="w-20">
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
    <div class="flex flex-col">
      <TitleLevel0 class="self-center" title="Wir sind auf Facebook"/>
      <div class="self-center">Dort können Sie aktuelle neuigkeiten und Angebore aus unserem Betrieb finden.</div>
    </div>
  </Card>

  <Card>
    <div class="flex flex-col">
      <TitleLevel0 class="self-center" title="Staude des Jahres 2023"/>
      <div class="self-center">
        <a v-bind:href="plant_of_year_link">
          <img src="~/assets/images/staude_des_jahres.jpeg" alt="Staude des Jahres" />
        </a>
      </div>
      <div class="w-full lg:w-1/2 self-center">
        Wer Pflanzen mit Persönlichkeit liebt, der kommt an der Staude des Jahres 2023 nicht vorbei! Schon der deutsche
        Name „Indianernessel“ deutet an, was die botanische Gattung Monarda unverwechselbar macht: Die kugelartigen
        Blütenköpfchen schmücken sich von Juni bis September mit intensiv leuchtenden Lippenblüten, die an eine
        formvollendete Punk-Frisur erinnern – oder auch an bunten Federschmuck.
        <a class="self-center text-green-800" v-bind:href="plant_of_year_link">Mehr Informationen können Sie hier
          finden</a>
      </div>
    </div>
  </Card>

  <Card>
    <div class="flex flex-col">
      <TitleLevel0 class="self-center" title="Events in unserem Betrieb oder wo wir vertreten sind"/>
      <div class="self-center">
        Grün dargestellt werden Events die direkt in unserem Betrieb stattfinden und Rot externe Events wie beispielsweise Märkte.
      </div>
      <div class="flex flex-col">
        <EventCard v-for="event in events" v-bind:event="event" />
      </div>
      <div class="lg:self-center">Bei den Events in unserem Betrieb ist immer für das Leibliche Wohl gesorgt</div>
      <div class="lg:self-center">Bitte beachten Sie zu diesen Terminen die aktuell gültigen Bestimmungen der Corona - Schutzverordnung</div>
    </div>
  </Card>
</template>

<style>
#map {
  height: 20rem;
}
</style>

<script>
const plant_of_year_link = "https://www.staude-des-jahres.de/content/monarda.php?subnav=monarda";
const events = [{
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
];
</script>

<script setup>
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline/esm/index.js';
</script>