<template>
    <div class="bg-background bg-fixed">
        <AppHeader />
        <div class="container mx-auto">
            <div class="container bg-white bg-opacity-70 px-5 py-5 rounded">
                <slot />
            </div>
        </div>
        <AppFooter />
    </div>
</template>
  