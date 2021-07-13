<template>
  <h1>Huwng Dep Trai</h1>
  <HelloWorldTwo msg="Hello" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from 'Components/HelloWorld.vue';
import HelloWorldTwo from 'Components/HelloWorldTwo.vue'

@Options({
  components: {
    HelloWorld,
    HelloWorldTwo
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
