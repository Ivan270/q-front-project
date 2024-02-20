<script setup lang="ts">
import { ref, type Ref, onBeforeMount } from 'vue'
import { useToast } from 'primevue/usetoast'
import { storeToRefs } from 'pinia';
import Toast from 'primevue/toast';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

import useAuth from '@/stores/auth';

import type UserInterface from '@/types/interfaces/User.interface';
import UserService from '@/services/UserService';
import MainLayout from '@/layouts/MainLayout.vue';
import UsersTable from '@/components/UsersTable.vue';
import UserProfileCard from '@/components/UserProfileCard.vue';
import UserJobDescriptionCard from '@/components/UserJobDescription.vue';

const toast = useToast()

let { user } = storeToRefs(useAuth())
const users: Ref<Array<UserInterface>> = ref([]);
const isAdmin: Ref<boolean> = ref(false)
const editUserDialog: Ref<boolean> = ref(false);
const userToEdit: Ref<UserInterface> = ref({});
const userService = new UserService();
const loading: Ref<Boolean> = ref(false);

const getUsers = async () => {
    await userService.fetchAll()
    users.value = await userService.getUsers()
}

const authStore = useAuth();

onBeforeMount(async () => {
    if (user.value.roles) {
        await getUsers()
        isAdmin.value = user.value.roles.includes('admin')
    }

})

const deleteUserHandler = async (id: string) => {
    console.log(`Se eliminara ${id}`)
    if (confirm('¿Seguro que quieres borrar al usuario?') === true) {
        const result = await userService.deleteUser(id)
        if (result) {
            toast.add({ severity: 'success', summary: 'Exito', detail: 'Usuario eliminado con éxito', life: 3000 });
            await getUsers()
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar al usuario', life: 3000 });
        }
    } else {
        toast.add({ severity: 'warn', summary: 'Atencion', detail: 'No se eliminó el usuario', life: 3000 });
    }
}

const createUserHandler = async () => {
    // Permite actualizar usuarios luego de la creación de uno nuevo.
    // Muestra lista actualizada en la tabla
    await getUsers()
    toast.add({ severity: 'success', summary: 'Exito', detail: 'Usuario creado con éxito', life: 3000 })
};

const editUserHandler = async (id: string, user: {}) => {
    const result = await userService.updateUser(id, { ...user })
    if (result) {
        await getUsers()
        await authStore.user;
        toast.add({ severity: 'success', summary: 'Exito', detail: 'Usuario editado con éxito', life: 3000 })
    } else {
        toast.add({ severity: 'warn', summary: 'Error', detail: 'No se pudo editar al usuario', life: 3000 })
    }
}

const editMainUser = async () => {
    loading.value = true;
    userToEdit.value = await userService.fetchUserById(user.value._id);
    editUserDialog.value = true;
    loading.value = false;
}

const hideDialog = () => {
    editUserDialog.value = false;
}

const editMainUserHandler = async (fields: any) => {
    const id: string = userToEdit.value._id;
    const editUser: UserInterface = {
        name: fields.name,
        lastname: fields.lastname,
        roles: fields.role,
        email: fields.email,
        phone: fields.phone,
        birth: fields.birth,
        company: fields.company,
        jobTitle: fields.jobTitle,
        address: fields.address,
        jobDescription: fields.jobDescription
        // TODO: agregar campos de imagenes para editar
    }
    await editUserHandler(id, editUser);
    const editedUser = await userService.fetchUserById(id);
    await authStore.setUser(editedUser);
    // user.value = authStore.user;
    hideDialog();
    // BUG: no se actualiza usuario en tabla, usuario en store esta bien

}

const createVCard = async () => {
    try {
        const fileName = `${authStore.user.name} ${authStore.user.lastname}`
        const emailTo = authStore.user.email;
        if (!emailTo) {
            throw new Error("Error al obtener correo electrónico del usuario autenticado");
        }

        const result = await userService.createVCard(emailTo);
        if (!result) {
            throw new Error('Error al obtener resultado del VCard');
        }

        // Generate a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = `data:text/vcard;charset=utf-8,${encodeURIComponent(result)}`;
        downloadLink.download = `${fileName}.vcf`;

        // Simulate a click on the link to initiate the download
        downloadLink.click();
    } catch (error) {
        console.error('Error creating VCard:', error);
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error al crear el VCard',
            life: 3000 // Duration of the message in milliseconds
        });
    }
};


</script>

<template>
    <MainLayout>
        <template #main>
            <!-- Toast para feedback al usuario -->
            <Toast />
            <!-- =========  Datos del Usuario logeado ========= -->
            <div class="grid grid-cols-6 gap-8 items-center">
                <!-- Profile pic -->
                <div class="col-span-6 lg:col-span-3 grid place-content-stretch rounded-lg overflow-hidden">
                    <!-- Card con datos principales -->
                    <UserProfileCard :user="user" :loadingStatus="loading" :showEdit="true" @editUser="editMainUser"
                        :show-download-vcf="true" />

                </div>
                <div class="col-span-6 lg:col-span-3 grid place-content-stretch rounded-lg overflow-hidden">
                    <!-- Card con descripción del trabajo -->
                    <UserJobDescriptionCard :user="user" />
                </div>

                <!-- Tabla de usuarios: solo se muestra si usuario logeado es Admin -->
                <div class="col-span-6" v-if="isAdmin">
                    <Divider class="mt-8 mb-12" />

                    <UsersTable :users="users.value" @deleteUser="deleteUserHandler" @createUser="createUserHandler"
                        @editUser="editUserHandler" />
                </div>
            </div>
            <Dialog v-model:visible="editUserDialog" header="Editar Usuario" :modal="true" class="p-fluid">
                <template #header>

                </template>
                <FormKit type="form" id="createNewUser" @submit="editMainUserHandler" submit-label="Editar Usuario">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <FormKit type="text" name="name" id="name" label="Nombre" placeholder="John Doe"
                            validation="required" outer-class="!mb-2 !max-w-full" :value="userToEdit.name" />
                        <FormKit type="text" name="lastname" id="lastname" label="Apellido" placeholder="Doe"
                            validation="required" outer-class="!mb-2 !max-w-full" :value="userToEdit.lastname" />
                        <FormKit type="text" name="role" id="role" label="Role" placeholder="client/admin/mod"
                            validation="required" outer-class="!mb-2 !max-w-full" :value="userToEdit.roles" />
                        <FormKit type="email" name="email" id="email" validation="required|email" label="Email"
                            placeholder="john.doe@email.com" outer-class="!mb-2 !max-w-full" :value="userToEdit.email" />
                        <FormKit type="tel" name="phone" id="phone" validation="required" label="Telefono"
                            placeholder="+56991234567" outer-class="!mb-2 !max-w-full" :value="userToEdit.phone" />
                        <FormKit type="date" name="birth" id="birth" label="Fecha de Nacimiento" validation="required"
                            suffixIcon-class="!color-white" outer-class="!mb-2 !max-w-full" :value="userToEdit.birth" />
                        <FormKit type="text" name="company" id="company" label="Empresa" placeholder="Nombre de la empresa"
                            validation="required" outer-class="!mb-2 !max-w-full" :value="userToEdit.company" />
                        <FormKit type="text" name="jobTitle" id="jobTitle" label="Puesto de trabajo"
                            placeholder="Título del trabajo" validation="required" outer-class="!mb-2 !max-w-full"
                            :value="userToEdit.jobTitle" />
                        <FormKit type="text" name="address" id="address" label="Dirección" placeholder="Dirección"
                            validation="required" outer-class="!mb-2 !max-w-full" :value="userToEdit.address" />
                        <FormKit type="text" name="jobDescription" id="jobDescription" label="Descripción del trabajo"
                            placeholder="Descripción del trabajo" validation="required" outer-class="!mb-4 !max-w-full"
                            :value="userToEdit.jobDescription" />
                        <!-- <FormKit type="file" name="personalImage" id="personalImage" label="Imagen Personal"
                        accept=".jpg, .jpeg, .png" />
                    <FormKit type="file" name="companyLogo" id="companyLogo" label="Logo Empresa" accept=".jpg, .jpeg, .png" /> -->
                    </div>
                </FormKit>
                <template #footer>
                    <!-- <FormKit type="button" label="Crear Usuario" @click="submitForm" /> -->
                    <Button label="Cancelar" icon="pi pi-times" severity="danger" text @click="hideDialog" />
                </template>
            </Dialog>
        </template>
    </MainLayout>
</template>

<style >
.p-fieldset {
    height: auto;
    vertical-align: middle;
}

img {
    background-image: url();
}
</style>