<template>

  <div id="app">
    <Header></Header>
    <router-view />


  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
export default {
  components:{
    Header,
  }
}
</script>
<style>
.arabic {
   font-family: QuranFont;
}
</style>