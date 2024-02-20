<template>
    <div class="m-4 flex flex-col gap-4 justify-center">
        <router-link to="/about" rel="noopener">
            <Button icon="pi pi-arrow-left" size="small" severity="contrast" class="w-full " />
        </router-link>
        <UserProfileCard :user="user" :showEdit="false" :showDownloadVcf="true" @createVCard="createCardHandler"/>
        <UserJobDescriptionCard :user="user" />
    </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import Button from 'primevue/button';

import UserService from '@/services/UserService';
import type UserInterface from '@/types/interfaces/User.interface';

import UserProfileCard from '@/components/UserProfileCard.vue';
import UserJobDescriptionCard from '@/components/UserJobDescription.vue';

const userService = new UserService()

const user: Ref<UserInterface> = ref({});

onBeforeMount(async () => {
    const route = useRoute()
    user.value = await userService.fetchUserById(route.params.id);
})

const createCardHandler = async (email:string) =>{
    console.log(email)
    const result = await userService.createVCard(email);
    console.log(result)
}


</script>

<style scoped></style>