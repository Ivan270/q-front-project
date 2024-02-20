<script setup lang="ts">
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Avatar from "primevue/avatar";
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import useAuth from '@/stores/auth';

const authStore = useAuth();
const route = useRouter();

const isLoggedIn = computed(() => {
    return authStore.token !== '';
});

// const isAdmin = computed(()=>{
//     return authStore.user.roles?.includes('admin')
// })

const hasProfilePic = computed(()=>{
    return authStore.user.personalImage !== undefined;
})

const logout = () => {
    route.push({ name: 'home' });
    authStore.logout();
};

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        onClick: () => {
            route.push('/');
        }
    },
    {
        label: 'About',
        icon: 'pi pi-star',
        onClick: () => {
            route.push('/about');
        }
    },
    {
        label: 'Services',
        icon: 'pi pi-search',
        onClick: () => {
            route.push('/services');
        }
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: 3,
        onClick: () => {
            route.push('/contact');
        }
    }
]);
</script>

<template>
    <div class="card">
        <Menubar :model="items"
            class="gap-2 flex justify-between p-3 text-base rounded-none">
            <template #start>
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                    <Avatar image="assets/img/images.jpg" class="mr-2" size="large" shape="circle" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">V-card</span>
                </div>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex align-items-center text-slate-400 gap-2" v-bind="props.action" @click="item.onClick">
                    <span :class="item.icon" />
                    <span class="ml-2 text-sm ">{{ item.label }}</span>
                    
                    <span v-if="item.shortcut"
                        class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut
                        }}</span>
                    <i v-if="hasSubmenu"
                        :class="['pi pi-angle-down text-primary', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div v-if="!isLoggedIn" class="flex align-items-center gap-2">
                    <Button label="Login" severity="blue-900" @click="route.push('/login')" size="small" class="text-xs" />
                    <!-- <Button label="Registrarse" severity="help" @click="route.push('/signup')" outlined size="small" /> -->
                </div>
                <div v-else class="flex items-center gap-2">
                    <p class="hidden md:block">{{ authStore.user.name }} {{ authStore.user.lastname }}</p>
                    <!-- Muestra avatar generico en caso que usuario no tenga imagen de perfil -->
                    <Avatar :image="authStore.user.personalImage" v-if="hasProfilePic" shape="circle"/>
                    <Avatar icon="pi pi-user" class="mr-2" size="normal" style="background-color: #ece9fc; color: #2a1261" shape="circle" v-else />
                    <Button @click="logout" icon="pi pi-sign-out" severity="secondary" size="small" class="h-8 w-8" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<style>
.p-menubar-end {
    margin-left: 0;
}
</style>