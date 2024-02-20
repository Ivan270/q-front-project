<script setup lang="ts">
import { ref, type Ref } from 'vue'
import useAuth from '@/stores/auth';
import { useRouter } from 'vue-router';
import Button from 'primevue/button';

const authStore = useAuth()
const router = useRouter()

const submitted: Ref<boolean> = ref(false);
const userName: Ref<string> = ref('');
const password: Ref<string> = ref('');
    

const submitHandler = async (fields: any) => {
   /*  if (!fields.email || fields.password) {
        console.log('pass and email fields where empty')
        return
    }; */
    const success = await authStore.login(fields.email, fields.password)
    if (success) {
        router.push({ name: 'about' })
        submitted.value = true;
    } else {
        alert('algo salió mal en el inicio de sesión')
    }

}

// {
//     "email": "test01@mail.com",
//     "password": "Test6789"
// }

</script>

<template>
    <FormKit type="form" id="login-example" :form-class="submitted ? 'hide' : 'show'" submit-label="Login"
        @submit="submitHandler" :actions="false" #default="{ disabled }">
        <h1 class="text-3xl font-bold text-blue-500 text-center pb-10">Inicia Sesión</h1>
        <FormKit type="email" name="email" label="Email" placeholder="jane@mail.com" validation="required|email"
            v-model="userName" outer-class="!max-w-full" />

        <FormKit type="password" name="password" label="Contraseña" validation="required|length:6" :validation-messages="{
            matches: 'Please include at least one symbol',
        }" placeholder="Tu Contraseña" v-model="password" outer-class="!max-w-full !my-4" />

        <!-- <div class="!mb-2">
            <p>¿No tienes cuenta? <router-link class="text-blue-400" to="/signup">Regístrate aquí</router-link></p>
        </div> -->

        <div class="flex justify-between gap-2">
            <Button label="Login" severity="blue-900" type="submit" :disabled="(disabled as boolean)" class="text-sm" size="small"/>
            <Button label="Volver" severity="secondary" @click="router.push('/')" :disabled="(disabled as boolean)"
                outlined class="text-sm" size="small"/>
        </div>
    </FormKit>
    <div v-if="submitted">
        <h2 class="text-xl text-green-500">Submission successful!</h2>
    </div>
</template>

<style scoped></style>