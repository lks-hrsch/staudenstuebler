<template>
  <Page>
    <template #title>
      <div class="text-2xl">Über uns</div>
    </template>

    <template #content>
      <BreadCrumps :bread-crumps="breadCrumps" />

      <Card>
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col w-1/2">
            <TitleLevel0Left title="Ein Familienbetrieb aus Tradition" />
            <div class="text-lg">
              Wir sind ein Familienbetrieb und produzieren seit 1983 winterharte
              Zierpflanzen. Unser Mutterpflanzenbestand umfasst momentan zirka
              3500 Arten und Sorten. 2000 Arten und Sorten davon produzieren wir
              jedes Jahr für den Verkauf. Der Schwerpunkt liegt bei den Stauden.
              Unser Sortiment wird abgerundet durch weitere Arten und Sorten aus
              Betrieben mit gleichen klimatischen Bedingungen. Unsere Pflanzen
              werden noch in richtiger Gartenerde angezogen (keine Torfmull
              Kultur) und nicht überdüngt. Wir sind Mitglied der internationalen
              Staudenunion (I.S.U.) und im Bund deutscher Staudengärtner (BDS).
              Wir sind anerkannter Staudenproduzent und führen seit 1992 das
              Qualitätszeichen des deutschen Staudenverbandes. Damit unterwerfen
              wir uns strengen Kriterien, die von unabhängigen Fachleuten
              regelmäßig überprüft werden. Geprüft werden Sortenechtheit,
              Verkaufsstärke, Gesundheitszustand sowie umweltschonende
              Produktion. Wir tragen als Betrieb das Kompetenzzeichen. Damit
              verpflichten wir uns ein großes Sortiment anzubieten und jederzeit
              über Herkunft, Winterhärte, Langlebigkeit und weitere
              Eigenschaften der angebotenen Pflanzen Auskunft geben zu können.
              Wir verpflichten uns Stauden und Gehölze nur aus Freiland
              Anzuchten anzubieten die nicht überdüngt sind und die nötigen
              Überwinterungsorgane besitzen.
            </div>
          </div>
          <ShapedImage>
            <a :href="plant_of_year_link">
              <img
                class="w-full h-full"
                src="~/assets/images/team.jpg"
                alt="Unser Team"
              />
            </a>
          </ShapedImage>
        </div>
      </Card>

      <HorizontalImageGallery :images="images" />

      <ContactCard />
    </template>
  </Page>
</template>

<script setup lang="ts">
import { BreadCrump } from '~~/components/BreadCrumps.vue';
import { ImageProps } from '~~/components/Image.vue';

const breadCrumps: BreadCrump[] = [
  {
    href: '/about',
    text: 'Über uns',
  },
];

const images: ImageProps[] = [
  {
    src: '/images/ausstellflaeche-01.jpg',
    alt: 'Bild von unserer Ausstellfläche',
  },
  {
    src: '/images/ausstellflaeche-02.jpg',
    alt: 'Bild von unserer Ausstellfläche',
  },
  { src: '/images/verkauf-01.jpeg', alt: 'Bild von unserem Verkauf' },
  { src: '/images/verkauf-02.jpeg', alt: 'Bild von unserem Verkauf' },
  { src: '/images/verkauf-03.jpeg', alt: 'Bild von unserem Verkauf' },
  { src: '/images/verkauf-04.jpeg', alt: 'Bild von unserem Verkauf' },
];
</script>

<style>
img {
  height: 360px;
  width: 360px;
  max-height: none;
  max-width: none;
  object-fit: cover;
}
</style>
