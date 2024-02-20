<template>
    <div class="min-h-[50vh] p-6 bg-slate-100 flex flex-col justify-center border border-slate-200 overflow-hidden shadow-xl rounded-xl">
        <h3 class="mt-10 text-3xl rounded-xl ">About me</h3>
        <p>{{ props.user.jobDescription }}</p>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['user'])
</script>

<style scoped></style>