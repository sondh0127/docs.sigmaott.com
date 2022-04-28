<script lang="ts" setup>
import VTSwitch from './VTSwitch.vue'
import VTIconSun from './icons/VTIconSun.vue'
import VTIconMoon from './icons/VTIconMoon.vue'
import { useDark, useToggle, syncRef } from '@vueuse/core';

const isDark = useDark({
  attribute: 'data-theme',
})

const isDarkClass = useDark()
syncRef(isDark, isDarkClass, { direction: 'both'} )
const toggleDark = useToggle(isDark)
</script>

<template>
  <VTSwitch
    class="vt-switch-appearance"
    aria-label="toggle dark mode"
    @click="toggleDark"
  >
    <VTIconSun class="vt-switch-appearance-sun" />
    <VTIconMoon class="vt-switch-appearance-moon" />
  </VTSwitch>
</template>
