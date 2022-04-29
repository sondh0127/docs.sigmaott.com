<script setup lang="ts">
defineProps<{
    apiDescriptionUrl: string
}>()
</script>
<template>
    <elements-api :apiDescriptionUrl="apiDescriptionUrl" router="hash"
        layout="sidebar" />
</template>
