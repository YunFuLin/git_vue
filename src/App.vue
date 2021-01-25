<template>
  <div id="app">
    <router-view/>
    <footer-nav v-if="$route.meta.showTab"></footer-nav>
  </div>
</template>

<script>
import footerNav from '@/components/footerNav'

export default {
  name: 'App',
  components: {
     footerNav
  }
}
</script>

<style>

</style>
