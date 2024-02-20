<template>
    <div class="min-h-[70vh] w-full bg-no-repeat bg-cover lg:bg-contain lg:bg-center bg-slate-600 flex flex-col justify-end border border-slate-200 shadow-xl over text-slate-100 rounded-xl"
        :style="{ backgroundImage: 'url(' + props.user.personalImage + ')' }">
        <div class="min-h-48 bg-gradient-to-b from-black/5 via-black/80 to-black p-4 flex flex-col justify-end">

            <h3 class="text-3xl font-light rounded-xl mb-4">{{ props.user.name }} {{ props.user.lastname }}
            </h3>
            <p class="text-sm mb-3">{{ props.user.jobTitle }}</p>
            <p class="text-sm font-bold mb-4">{{ props.user.company }}</p>
            <div class="flex justify-between">
                <Avatar :image="props.user.logoImage" shape="circle" size="large" />
                <Button v-if="props.showEdit" icon="pi pi-pencil" outlined size="small" rounded severity="success"
                    :loading="props.loadingStatus" @click="editMainUser" />
                <!-- boton descarga vcf -->
                <Button v-if="props.showDownloadVcf" icon="pi pi-download" label="Vcf" severity="info" outlined size="small"
                    @click="createVCard" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import UserService from '@/services/UserService';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast'

const toast = useToast();

const userService = new UserService();

const props = defineProps(['user', 'loadingStatus', 'showEdit', 'showDownloadVcf']);
const emit = defineEmits(['editUser', 'createVCard']);

const editMainUser = async () => {
    emit('editUser');
}

// const createCardHandler = async () => {
//     console.log(props.user.email)
//     emit('createVCard', props.user.email);

//     try {
//         const fileName = `${props.user.name} ${props.user.lastname}`
//         const emailTo = props.user.email;
//         if (!emailTo) {
//             throw new Error("Error al obtener correo electrónico del usuario autenticado");
//         }

//         const result = await userService.createVCard(emailTo);
//         if (!result) {
//             console.log(result)
//             throw new Error('Error al obtener resultado del VCard');
//         }
//         // Generate a download link
//         const downloadLink = document.createElement('a');
//         downloadLink.href = `data:text/vcard;charset=utf-8,${encodeURIComponent(result)}`;
//         downloadLink.download = `${fileName}.vcf`;

//         // Simulate a click on the link to initiate the download
//         downloadLink.click();
//     } catch (error) {
//         console.error('Error creating VCard:', error);
//         toast.add({
//             severity: 'error',
//             summary: 'Error',
//             detail: 'Error al crear el VCard',
//             life: 3000 // Duration of the message in milliseconds
//         });
//     }
// }

const createVCard = async () => {
    try {
        const fileName = `${props.user.name} ${props.user.lastname}`
        const emailTo = props.user.email;
        console.log('Emailto', emailTo)
        if (!emailTo) {
            throw new Error("Error al obtener correo electrónico del usuario autenticado");
        }

        const result = await userService.createVCard(emailTo);
        console.log('Result', result)
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

<style scoped></style>