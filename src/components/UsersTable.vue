<template>
    <Toolbar class="mb-4">
        <template #start>
            <h2 class="text-2xl font-bold text-blue-500 text-start me-10">Usuarios inscritos</h2>            
        </template>
        <template #end>
            <Button label="Nuevo Usuario" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" />
        </template>
    </Toolbar>
    <DataTable size="small" v-model:filters="filters" :value="props.users" tableStyle="min-width: 50rem" paginator
        :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" showGridlines stripedRows filterDisplay="row" :loading="loading"
        :globalFilterFields="['name', 'country.name', 'representative.name', 'status']" class="text-xs" editMode="row"
        dataKey="_id">
        <template #header>
            <div class="flex justify-content-end text-xs">
                <IconField iconPosition="left">
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                </IconField>
            </div>
        </template>
        <template #empty> No se encontraron usuarios. </template>
        <template #loading> Cargando datos de usuarios. Por favor espere. </template>
        <Column field="name" header="Name" sortable style="min-width: 15rem">
            <template #body="{ data }">
                {{ data.name }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter text-xs"
                    placeholder="Buscar por Nombre" />
            </template>
        </Column>
        <Column field="lastname" header="Lastname" sortable style="min-width: 15rem">
            <template #body="{ data }">
                {{ data.lastname }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter text-xs"
                    placeholder="Buscar por Apellido" />
            </template>
        </Column>
        <Column field="email" header="Email" style="min-width: 15rem">
            <template #body="{ data }">
                {{ data.email }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter text-xs"
                    placeholder="Buscar por Email" />
            </template>
        </Column>
        <Column field="company" header="Company" sortable style="min-width: 15rem">
            <template #body="{ data }">
                {{ data.company }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter text-xs"
                    placeholder="Buscar por Empresa" />
            </template>
        </Column>
        <Column field="jobTitle" header="Job Title" style="min-width: 15rem">
            <template #body="{ data }">
                {{ data.jobTitle }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter text-xs"
                    placeholder="Buscar por Cargo" />
            </template>
        </Column>
        <Column field="phone" header="Phone" style="min-width: 15rem">
            <template #body="{ data }">
                {{ data.phone }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter text-xs"
                    placeholder="Buscar por Telefono" />
            </template>
        </Column>
        <Column field="roles" header="Role" sortable style="min-width: 15rem">
            <template #body="{ data }">
                {{ data.roles }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter text-xs"
                    placeholder="Buscar por Rol" />
            </template>

        </Column>
        <Column field="_id" header="Acciones">
            <template #body="{ data }">
                <div class="flex">
                    <Button icon="pi pi-trash" text size="small" rounded severity="danger" @click="deleteUser(data._id)"
                        aria-label="Delete" />
                    <Button icon="pi pi-pencil" text size="small" rounded severity="info" @click="editUser(data._id)"/>
                    <!-- TODO: agregar boton para ver usuario, solo desde admin -->
                    <Button icon="pi pi-external-link" text size="small" rounded severity="help" @click="goToUser(data._id)"/>
                </div>
            </template>
        </Column>
    </DataTable>

    <!-- New User Dialog Start -->
    <Dialog v-model:visible="newUserDialog" header="Crear nuevo Usuario" :modal="true" class="p-fluid">
        <template #header>

        </template>
        <FormKit type="form" id="createNewUser" @submit="registerUserHandler" submit-label="Crear Usuario">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <FormKit type="text" name="name" id="name" label="Nombre" placeholder="John Doe" validation="required"
                    outer-class="!mb-2 !max-w-full" />
                <FormKit type="text" name="lastname" id="lastname" label="Apellido" placeholder="Doe" validation="required"
                    outer-class="!mb-2 !max-w-full" />
                <FormKit type="text" name="role" id="role" label="Role" placeholder="client/admin/mod" validation="required"
                    outer-class="!mb-2 !max-w-full" />
                <FormKit type="email" name="email" id="email" validation="required|email" label="Email"
                    placeholder="john.doe@email.com" outer-class="!mb-2 !max-w-full" />
                <FormKit type="tel" name="phone" id="phone" validation="required" label="Telefono"
                    placeholder="+56991234567" outer-class="!mb-2 !max-w-full" />
                <FormKit type="date" name="birth" id="birth" label="Fecha de Nacimiento" validation="required"
                    suffixIcon-class="!color-white" outer-class="!mb-2 !max-w-full" />
                <FormKit type="text" name="company" id="company" label="Empresa" placeholder="Nombre de la empresa"
                    validation="required" outer-class="!mb-2 !max-w-full" />
                <FormKit type="text" name="jobTitle" id="jobTitle" label="Puesto de trabajo"
                    placeholder="Título del trabajo" validation="required" outer-class="!mb-2 !max-w-full" />
                <FormKit type="text" name="address" id="address" label="Dirección" placeholder="Dirección"
                    validation="required" outer-class="!mb-2 !max-w-full" />
                <FormKit type="text" name="jobDescription" id="jobDescription" label="Descripción del trabajo"
                    placeholder="Descripción del trabajo" validation="required" outer-class="!mb-4 !max-w-full" />
                <FormKit type="file" name="personalImage" id="personalImage" label="Imagen Personal"
                    accept=".jpg, .jpeg, .png" />
                <FormKit type="file" name="companyLogo" id="companyLogo" label="Logo Empresa" accept=".jpg, .jpeg, .png" />
            </div>
        </FormKit>
        <template #footer>
            <!-- <FormKit type="button" label="Crear Usuario" @click="submitForm" /> -->
            <Button label="Cancelar" icon="pi pi-times" severity="danger" text @click="hideDialog" />
        </template>
    </Dialog>

    <!-- Edit user Dialog start -->
    <Dialog v-model:visible="editUserDialog" header="Editar Usuario" :modal="true" class="p-fluid">
        <template #header>

        </template>
        <FormKit type="form" id="createNewUser" @submit="editUserHandler" submit-label="Editar Usuario" >
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <FormKit type="text" name="name" id="name" label="Nombre" placeholder="John Doe" validation="required"
                    outer-class="!mb-2 !max-w-full" :value="userToEdit.name" />
                <FormKit type="text" name="lastname" id="lastname" label="Apellido" placeholder="Doe" validation="required"
                    outer-class="!mb-2 !max-w-full" :value="userToEdit.lastname"/>
                <FormKit type="text" name="role" id="role" label="Role" placeholder="client/admin/mod" validation="required"
                    outer-class="!mb-2 !max-w-full" :value="userToEdit.roles" />
                <FormKit type="email" name="email" id="email" validation="required|email" label="Email"
                    placeholder="john.doe@email.com" outer-class="!mb-2 !max-w-full" :value="userToEdit.email"/>
                <FormKit type="tel" name="phone" id="phone" validation="required" label="Telefono"
                    placeholder="+56991234567" outer-class="!mb-2 !max-w-full" :value="userToEdit.phone" />
                <FormKit type="date" name="birth" id="birth" label="Fecha de Nacimiento" validation="required"
                    suffixIcon-class="!color-white" outer-class="!mb-2 !max-w-full" :value="userToEdit.birth" />
                <FormKit type="text" name="company" id="company" label="Empresa" placeholder="Nombre de la empresa"
                    validation="required" outer-class="!mb-2 !max-w-full" :value="userToEdit.company" />
                <FormKit type="text" name="jobTitle" id="jobTitle" label="Puesto de trabajo"
                    placeholder="Título del trabajo" validation="required" outer-class="!mb-2 !max-w-full" :value="userToEdit.jobTitle" />
                <FormKit type="text" name="address" id="address" label="Dirección" placeholder="Dirección"
                    validation="required" outer-class="!mb-2 !max-w-full" :value="userToEdit.address" />
                <FormKit type="text" name="jobDescription" id="jobDescription" label="Descripción del trabajo"
                    placeholder="Descripción del trabajo" validation="required" outer-class="!mb-4 !max-w-full" :value="userToEdit.jobDescription" />
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

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import { FilterMatchMode } from 'primevue/api'
import UserService from '@/services/UserService'

import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Column from 'primevue/column';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
import type UserInterface from '@/types/interfaces/User.interface';
import router from '@/router';

const emit = defineEmits(['deleteUser', 'createUser', 'editUser'])
const props = defineProps(['users'])

const userService = new UserService()
const userToEdit:Ref<UserInterface> = ref({});

const newUserDialog: Ref<boolean> = ref(false);
const editUserDialog:Ref<boolean> = ref(false);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    roles: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    lastname: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    company: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    phone: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    jobTitle: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
});

const loading: Ref<boolean> = ref(false);

const deleteUser = async (id: string) => {
    emit('deleteUser', id)
}

const editUser = async(id:string)=>{
    userToEdit.value = await userService.fetchUserById(id);
    editUserDialog.value = true;
}

const openNew = () => {
    newUserDialog.value = true;
}

const hideDialog = () => {
    newUserDialog.value = false;
    editUserDialog.value = false;
}

const registerUserHandler = async (fields: any) => {
    const body = new FormData();
    body.append('name', fields.name);
    console.log(fields.name)
    console.log(body)
    body.append('lastname', fields.lastname);
    body.append('roles', fields.role);
    body.append('email', fields.email);
    body.append('phone', fields.phone);
    body.append('birth', fields.birth);
    body.append('company', fields.company);
    body.append('jobTitle', fields.jobTitle);
    body.append('address', fields.address);
    body.append('jobDescription', fields.jobDescription);
    // Images
    fields.personalImage.forEach((fileItem:any)=>{
        body.append('personalImage', fileItem.file)
    })
    fields.companyLogo.forEach((fileItem:any)=>{
        body.append('logoImage', fileItem.file)
    })

    await userService.createUser(body);
    emit('createUser')
    hideDialog()
}

const editUserHandler = (fields:any)=>{
    const id = userToEdit.value._id;

    const editUser:UserInterface = {
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
    hideDialog();
}

const goToUser = (id:string) =>{
    router.push({path: `/user/${id}`})
}


</script>

<style >
td {
    height: 20px;
}

.formkit-label {
    color: #334155;
}

.formkit-inner {
    border: none;
    background-color: transparent;
}

.formkit-input {
    color: #4b5e79;
}
</style>