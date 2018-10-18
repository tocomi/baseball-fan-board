<template lang="pug">
  div#app
    headerComponent
    router-view
    footerComponent
</template>

<script>
import HeaderComponent from './components/common/Header';
import FooterComponent from './components/common/Footer';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style scoped>
</style>
