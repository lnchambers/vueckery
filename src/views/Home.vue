<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Proofs msg="Proof that Rails server is connected">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Proofs from '@/components/Proofs.vue';

export default {
  name: 'home',
  components: {
    HelloWorld, Proofs,
  },
};
</script>
