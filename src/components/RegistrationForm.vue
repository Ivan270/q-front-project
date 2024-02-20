<template>
  <h1 class="text-3xl font-bold text-blue-500 text-center pb-10">{{ props.title }}</h1>
  <FormKit type="form" #default="{ disabled }" :actions="false">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormKit type="text" name="name" id="name" label="Nombre" placeholder="John Doe" validation="required"
        outer-class="!mb-2 !max-w-full" />
      <FormKit type="text" name="lastname" id="lastname" label="Apellido" placeholder="Doe" validation="required"
        outer-class="!mb-2 !max-w-full" />
      <FormKit type="text" name="role" id="role" label="Role" placeholder="client/admin/mod" validation="required"
        outer-class="!mb-2 !max-w-full" />
      <FormKit type="email" name="email" id="email" validation="required|email" label="Email"
        placeholder="john.doe@email.com" outer-class="!mb-2 !max-w-full" />
      <FormKit type="tel" name="phone" id="phone" validation="required" label="Telefono" placeholder="+56991234567"
        outer-class="!mb-2 !max-w-full" />
      <FormKit type="date" name="birth" id="birth" label="Fecha de Nacimiento" validation="required"
        suffixIcon-class="!color-white" outer-class="!mb-2 !max-w-full" />
      <FormKit type="text" name="company" id="company" label="Empresa" placeholder="Nombre de la empresa"
        validation="required" outer-class="!mb-2 !max-w-full" />
      <FormKit type="text" name="jobTitle" id="jobTitle" label="Puesto de trabajo" placeholder="Título del trabajo"
        validation="required" outer-class="!mb-2 !max-w-full" />
      <FormKit type="text" name="address" id="address" label="Dirección" placeholder="Dirección" validation="required"
        outer-class="!mb-2 !max-w-full" />
      <FormKit type="text" name="jobDescription" id="jobDescription" label="Descripción del trabajo"
        placeholder="Descripción del trabajo" validation="required" outer-class="!mb-4 !max-w-full" />
      <FormKit type="file" name="profilePicture" id="profilePicture" label="Imagen Personal" accept=".jpg, .jpeg, .png" />
      <FormKit type="file" name="companyLogo" id="companyLogo" label="Logo Empresa" accept=".jpg, .jpeg, .png" />
    </div>
    <div class="!mb-2">
      <p class="v-text-black">¿Ya tienes cuenta? <router-link class="text-blue-400" to="/login">Inicia
          sesión</router-link></p>
    </div>
    <div class="flex justify-between gap-2">
      <Button type="submit" label="Registrar" :disabled="(disabled as boolean)" severity="blue-900"
        @click="signupHandler" />
      <Button label="Volver" severity="secondary" @click="router.push('/')" :disabled="(disabled as boolean)" outlined />
    </div>
  </FormKit>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import router from '@/router';
import UserService from '@/services/UserService';
// import useAuth from '@/stores/auth';
import type UserInterface from '@/types/interfaces/User.interface';
import Button from 'primevue/button';

// const store = useAuth();
const userService = new UserService();

const props = defineProps(['title']);

// const handleIconClick = (node: any) => {
//   node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye';
//   node.props.type = node.props.type === 'password' ? 'text' : 'password';
// };

const signupHandler = async (fields: any) => {
  if (
    !fields.name ||
    !fields.lastname ||
    !fields.role ||
    !fields.email ||
    !fields.phone ||
    !fields.birth ||
    !fields.company ||
    !fields.jobTitle ||
    !fields.address ||
    !fields.jobDescription
  ) {
    console.log('Form fields are empty');
    return;
  }

  // let result: UserInterface = await userService.createUser(
  //   fields.name,
  //   fields.lastname,
  //   fields.role,
  //   fields.email,
  //   fields.phone,
  //   fields.birth,
  //   fields.company,
  //   fields.jobTitle,
  //   fields.address,
  //   fields.jobDescription,
  //   fields.personalImage,
  //   fields.companyLogo
  // );
  // const user = {
  //   name: fields.name,
  //   lastname: fields.lastname,
  //   role: fields.role,
  //   email: fields.email,
  //   phone: fields.phone,
  //   birth: fields.birth,
  //   company: fields.company,
  //   job: fields.jobTitle,
  //   address: fields.address,
  //   description: fields.jobDescription,
  //   profilePic: fields.personalImage,
  //   companyLogo: fields.companyLogo
  // }

  // TODO pushear al home o dashboard
 /*  const login = await store.login(result._id as string, fields.password)
  if (!login) {
    alert('Algo salió mal con la creación del usuario')
  } else {
    router.push('/about')
  } */
}
</script>

<style>
.formkit-label {
  color: #334155;
}

.formkit-inner {
  border: none;
}

.formkit-input {
  color: #4b5e79;
}
</style>