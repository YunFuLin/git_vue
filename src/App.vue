<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
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
