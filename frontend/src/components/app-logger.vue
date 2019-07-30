<template>
  <div class="app-logger">
    <p v-for="(item, index) in value" class="app-logger__message">{{ item }}</p>
  </div>
</template>

<script>
export default {
  name: 'app-logger',
  props: {
    value: {
      type: Array,
      default: ()=> []
    }
  }
}
</script>

<style scoped>
.app-logger {
}
</style>
