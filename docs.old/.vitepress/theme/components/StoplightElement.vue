<script setup lang="ts">
defineProps<{
    apiDescriptionUrl: string
}>()
</script>
<template>
    <elements-api logo="/img/logo.png" :apiDescriptionUrl="apiDescriptionUrl" router="hash"
        layout="sidebar" />
</template>
