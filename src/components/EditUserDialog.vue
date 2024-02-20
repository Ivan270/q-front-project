<template>
    <Dialog v-model:visible="visible" header="Editar Usuario" :modal="true" class="p-fluid">
        <template #header>

        </template>
        <FormKit type="form" id="createNewUser" @submit="editUserHandler" submit-label="Editar Usuario">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <FormKit type="text" name="name" id="name" label="Nombre" placeholder="John Doe" validation="required"
                    outer-class="!mb-2 !max-w-full" :value="userToEdit.name" />
                <FormKit type="text" name="lastname" id="lastname" label="Apellido" placeholder="Doe" validation="required"
                    outer-class="!mb-2 !max-w-full" :value="userToEdit.lastname" />
                <FormKit type="text" name="role" id="role" label="Role" placeholder="client/admin/mod" validation="required"
                    outer-class="!mb-2 !max-w-full" :value="userToEdit.roles" />
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
            <Button label="Cancelar" icon="pi pi-times" severity="danger" text @click="hideDialogHandler" />
        </template>
    </Dialog>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

import type UserInterface from '@/types/interfaces/User.interface';

const props = defineProps(['editUserDialog', 'userToEdit'])
const emit = defineEmits(['editUser','closeDialog'])

const visible = ref(props.editUserDialog);
const userToEdit = props.userToEdit;

const hideDialogHandler = () => {
    emit('closeDialog')
}

const editUserHandler = (fields: any) => {
    const id = userToEdit.value._id;
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
    emit('editUser', id, editUser);
    hideDialogHandler();
}
</script>

<style scoped></style>