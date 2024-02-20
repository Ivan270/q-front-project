<script setup lang="ts">
    
import {} from 'vue'
import LoginComp from '@/components/Authentication/LoginComp.vue'
import MainLayout from '@/layouts/MainLayout.vue';
    // props
    // Reactive Values

    // Computed Properties

    // Watchers

    // Lifecycle hooks

</script>

<template>
    <MainLayout>
        <template #main>
            <div class="flex justify-center items-center w-full">
                <div class="p-8 rounded-lg shadow-lg border border-gray-100 w-full lg:w-auto">
                    <LoginComp/>
                </div>
            </div>
        </template>
    </MainLayout>
</template>

<style scoped>
    
</style>