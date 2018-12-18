<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <v-btn fab depressed large dark color="purple">
      <v-icon large>email</v-icon>
    </v-btn>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>