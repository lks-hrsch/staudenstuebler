<template>
    <footer class="w-full bg-green-800">
        <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 text-white">
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <!-- logo -->
                <p class="text-white">
                    Copyright Staudenstübler
                </p>

                <div class="flex flex-col xl:flex-row list-none ml-auto">
                    <div class="rounded py-1 px-2 hover:bg-green-500">
                        <NuxtLink to="/agb">AGB</NuxtLink>
                    </div>
                    <div class="rounded py-1 px-2 hover:bg-green-500">
                        <NuxtLink to="/imprint">Impressum</NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </footer>
</template>
  