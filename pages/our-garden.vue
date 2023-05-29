<template>
  <Page>
    <template #title>
      <div class="text-2xl">Unser Planzengarten</div>
    </template>

    <template #content>
      <BreadCrumps :bread-crumps="breadCrumps" />

      <Card>
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col w-1/2">
            <TitleLevel0Left title="Allgemeines" />
            <div class="text-lg">
              Der Garten besteht seit 1973, vorerst als normaler Hausgarten.
              Seit 1976 als Liebhabergarten und ab 1983 als Pflanzengarten der
              Gartenbaumschule. Seit dieser Zeit ist er auch öffentlich
              begehbar. Im Pflanzengarten sind momentan 3500 Arten und Sorten
              von winterharten ausdauernden Zierpflanzen untergebracht.
            </div>
          </div>
          <ShapedImage>
            <img
              class="w-full h-full"
              src="~/assets/images/schaugarten-01.jpg"
            />
          </ShapedImage>
        </div>
        <div class="flex flex-row justify-between items-center">
          <div style="transform: scale(-1, 1)">
            <ShapedImage>
              <img
                class="w-full h-full"
                style="transform: scale(-1, 1)"
                src="~/assets/images/schaugarten-02.jpg"
              />
            </ShapedImage>
          </div>
          <div class="flex flex-col w-1/2">
            <div class="text-lg text-right">
              Das Spektrum reicht von der 2 cm hohen Zwergprimelbis zum
              Riesenmammutbaum, der in seiner Heimat bis zu 100 Meter hoch wird.
              Momentan erschließt den 2500 qm großen Pflanzengarten ein 500 m
              langer Rundweg. Er führt durch die wichtigsten Gartenteile, wie
              zum Beispiel Stein- garten, Alpinum, Wassergarten, Staudenrabatte,
              Heidegarten und Schattengärten.
            </div>
          </div>
        </div>
      </Card>

      <HorizontalImageGalleryWithPreview :images="images" />

      <Card>
        <div class="flex flex-col">
          <TitleLevel0Left title="Unser Garten der sieben Jahreszeiten" />
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/srHoi-hn3Y0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Card>
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
  {
    href: '/our-garden',
    text: 'Unser Pflanzengarten',
  },
];

const images: ImageProps[] = [
  { src: '/images/schaugarten-01.jpg', alt: '' },
  { src: '/images/schaugarten-02.jpg', alt: '' },
  { src: '/images/schaugarten-03.jpg', alt: '' },
  { src: '/images/schaugarten-04.jpg', alt: '' },
  { src: '/images/schaugarten-05.jpg', alt: '' },
  { src: '/images/schaugarten-06.jpg', alt: '' },
  { src: '/images/schaugarten-07.jpg', alt: '' },
  { src: '/images/schaugarten-08.jpg', alt: '' },
  { src: '/images/schaugarten-09.jpg', alt: '' },
  { src: '/images/schaugarten-10.jpg', alt: '' },
  { src: '/images/schaugarten-11.jpg', alt: '' },
  { src: '/images/schaugarten-12.jpg', alt: '' },
  { src: '/images/schaugarten-13.jpg', alt: '' },
];
</script>
