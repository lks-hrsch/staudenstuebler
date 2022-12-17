<template>
    <header class="sticky top-0 z-10 w-full bg-green-800">
        <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 text-white">
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <!-- logo -->
                <div class="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-start">
                    <a href="/" class="flex items-center">
                        <img src="~/assets/images/logo.png" class="h-10 mr-1 sm:h-20 sm:mr-3" alt="Staudenstuebler Logo" />
                        <div class="rows-2 text-xs font-semibold whitespace-nowrap sm:text-lg lg:text-xl xl:text-2xl">
                            <div class="self-center">
                                Spezialbetrieb für winterharte Zierpflanzen
                            </div>
                            <div class="self-center">
                                SIEGFRIED STÜBLER
                            </div>
                        </div>
                    </a>
                    <button
                        class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block xl:hidden outline-none focus:outline-none"
                        type="button" v-on:click="toggleNavbar()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>

                    </button>
                </div>

                <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="xl:flex xl:flex-grow items-center">
                    <div class="flex flex-col xl:flex-row list-none ml-auto">
                        <div class="rounded py-1 px-2 hover:bg-green-500" v-on:click="disableNavbar()">
                            <NuxtLink to="/">Startseite</NuxtLink>
                        </div>
                        <div class="rounded py-1 px-2 hover:bg-green-500" v-on:click="disableNavbar()">
                            <NuxtLink to="/about">Über uns</NuxtLink>
                        </div>
                        <div class="rounded py-1 px-2 hover:bg-green-500" v-on:click="disableNavbar()">
                            <NuxtLink to="/#">Pflanzenlisten</NuxtLink>
                        </div>
                        <div class="rounded py-1 px-2 hover:bg-green-500" v-on:click="disableNavbar()">
                            <NuxtLink to="/#">Schaugarten</NuxtLink>
                        </div>
                        <div class="rounded py-1 px-2 hover:bg-green-500" v-on:click="disableNavbar()">
                            <NuxtLink to="/#">Service</NuxtLink>
                        </div>
                        <div class="rounded py-1 px-2 hover:bg-green-500" v-on:click="disableNavbar()">
                            <NuxtLink to="/agb">AGB</NuxtLink>
                        </div>
                        <div class="rounded py-1 px-2 hover:bg-green-500" v-on:click="disableNavbar()">
                            <NuxtLink to="/#">Impressum</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "green-navbar",
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleNavbar: function () {
            this.showMenu = !this.showMenu;
        },
        disableNavbar: function () {
            this.showMenu = false;
        }
    }
}
</script>
  