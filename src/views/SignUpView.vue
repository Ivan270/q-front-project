<script setup lang="ts">
import RegistrationForm from '@/components/RegistrationForm.vue';
import MainLayout from '@/layouts/MainLayout.vue';

</script>

<template>
    <MainLayout>
        <template #main>
            <div class="flex justify-center items-center w-full">
                <div class="p-8 rounded-lg shadow-lg border border-gray-100 w-full lg:w-auto">
                    <RegistrationForm title="Regístrate aquí" />
                </div>
            </div>
        </template>
    </MainLayout>
</template>

<style scoped>
    
</style>