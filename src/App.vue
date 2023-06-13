<script>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<template>
  <TheHeader />
  <RouterView />
</template>