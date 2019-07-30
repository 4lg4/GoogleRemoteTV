<template>
  <div class="remote">
    <app-menu></app-menu>
    <div class="router-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/app-menu.vue'

export default {
  name: 'remote',
  components: { AppMenu }
}
</script>

<style>
.router-view {
  margin-top: 20px;
}
</style>
