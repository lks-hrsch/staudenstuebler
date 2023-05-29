<template>
  <Page>
    <template #title>
      <div class="border-l-4 p-2">
        <div class="text-2xl">
          <div>Spezialbetrieb</div>
          <div>für winterharte Zierpfalnzen</div>
        </div>
        <div class="text-4xl">Siegfried Stübler</div>
      </div>
      <div>
        Gartenbaumschule, Gartengestaltung, Stauden- und Gehölzproduktion
      </div>
      <div>
        <Button label="Unser Service" :href="plantOfYearLink" />
      </div>
    </template>

    <template #content>
      <BreadCrumps />

      <Card>
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col w-1/2">
            <TitleLevel0Left title="Staude des Jahres 2023" />
            <TitleLevel1 title="Monarda - Indianernessel" />

            <div class="text-lg">
              Wer Pflanzen mit Persönlichkeit liebt, der kommt an der Staude des
              Jahres 2023 nicht vorbei! Schon der deutsche Name „Indianernessel“
              deutet an, was die botanische Gattung Monarda unverwechselbar
              macht: Die kugelartigen Blütenköpfchen schmücken sich von Juni bis
              September mit intensiv leuchtenden Lippenblüten, die an eine
              formvollendete Punk-Frisur erinnern – oder auch an bunten
              Federschmuck.
            </div>

            <Button label="Mehr Erfahren" :href="plantOfYearLink" />
          </div>

          <ShapedImage>
            <a :href="plantOfYearLink">
              <img
                class="w-full h-full"
                src="~/assets/images/staude_des_jahres.jpeg"
                alt="Staude des Jahres"
              />
            </a>
          </ShapedImage>
        </div>
      </Card>

      <Card>
        <TitleLevel0Left title="Events" />
        <div class="grid grid-cols-3 gap-2">
          <div
            class="block col-span-3 rounded px-4 py-4 mt-1 mb-1 bg-important-red text-white text-lg"
          >
            Zum Tag der Parks und Gärten am 14. Mai feiern wir mit unseren
            Kunden und Gästen unser 40 jähriges Betriebsjubiläum mit einigen
            Überraschungen.
          </div>
          <EventCard
            v-for="event in events"
            :key="event.eventTitle"
            :event="event"
          />
          <ButtonOutlined :href="'#'">
            <div>Weitere</div>
            <div>Informationen</div>
          </ButtonOutlined>
        </div>
      </Card>

      <Card>
        <div class="flex flex-row justify-between items-center">
          <!-- https://stackoverflow.com/questions/32875695/flip-mirror-an-image-horizontally-vertically-with-css -->
          <div style="transform: scale(-1, 1)">
            <ShapedImage>
              <a :href="plantOfYearLink">
                <img
                  class="w-full h-full"
                  style="transform: scale(-1, 1)"
                  src="~/assets/images/schaugarten-03.jpg"
                  alt="Staude des Jahres"
                />
              </a>
            </ShapedImage>
          </div>

          <div class="flex flex-col items-end w-1/2">
            <TitleLevel0Right title="Unser Pflanzengarten" />

            <div class="text-lg text-right">
              Der Garten besteht seit 1973, vorerst als normaler Hausgarten.
              Seit 1976 als Liebhabergarten und ab 1983 als Pflanzengarten der
              Gartenbaumschule. Seit dieser Zeit ist er auch öffentlich
              begehbar. Im Pflanzengarten sind momentan 3500 Arten und Sorten
              von winterharten ausdauernden Zierpflanzen untergebracht.
            </div>

            <Button label="Mehr Erfahren" :href="plantOfYearLink" />
          </div>
        </div>
      </Card>

      <ContactCard />
    </template>
  </Page>
</template>

<script></script>

<script setup>
const plantOfYearLink =
  'https://www.staude-des-jahres.de/content/monarda.php?subnav=monarda';
const events = [
  {
    eventDate: [new Date(2023, 4, 15), new Date(2023, 4, 16)],
    eventTitle: 'Raritäten Wochenende',
    eventTopic: 'Verkauf von Neuzüchtungen und Raritäten',
    eventStartTime: 9,
    eventEndTime: 17,
    eventIsIntern: true,
  },
  {
    eventDate: [new Date(2023, 4, 29), new Date(2023, 4, 30)],
    eventTitle: 'Bluehendes Sachsen',
    eventTopic: 'Beginn der Balkon und Sommerblumen Saison',
    eventStartTime: 9,
    eventEndTime: 17,
    eventIsIntern: true,
  },
  {
    eventDate: [new Date(2023, 5, 14)],
    eventTitle: 'Tags der Parks und Gärten',
    eventLink: 'https://heidebogen.eu/gartenkultur',
    eventStartTime: 10,
    eventEndTime: 17,
    eventGuideMotto:
      'Was kann ich tun, wenn es im Garten immer trockener wird?',
    eventGuideTimes: [11, 13, 15],
    eventIsIntern: true,
  },
  {
    eventDate: [new Date(2023, 5, 20), new Date(2023, 5, 21)],
    eventTitle: 'Pillnitzer Gartenwochenende',
    eventLink:
      'https://www.schlosspillnitz.de/de/veranstaltungen-ausstellungen/detailseite/event/pillnitzer-gartenwochenende-1/15697/',
    eventIsIntern: false,
  },
  {
    eventDate: [new Date(2023, 8, 16), new Date(2023, 8, 17)],
    eventTitle: 'Herbstfest',
    eventTopic:
      'Verkauf von Neuheiten und Neueinführungen aus eigener Produktion',
    eventStartTime: 9,
    eventEndTime: 17,
    eventGuideTimes: [11],
    eventIsIntern: true,
  },
];
</script>
