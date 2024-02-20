<script setup lang="ts">

import NavBar from '@/components/navBar/NavBar.vue';
import FooterComp from '@/components/footer/FooterComp.vue';
</script>

<template>
    <main class=" grid grid-rows-[auto,1fr,auto] h-screen">
        <NavBar/>
        <div class="grid grid-cols-1 gap-4 p-4 h-full w-full [background:radial-gradient(125%_25%_at_50%_50%,#F5F5F5_100%,#FFFFFF_150%)] box-border">
            <slot name="main"/>
        </div>
        <div>
            <FooterComp/>
        </div>
    </main>
</template>

<style scoped>

</style>

