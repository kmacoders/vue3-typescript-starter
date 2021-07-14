<template>
  <AboutMe msg="Hello" />
  <div>
    From {{ school.name }}
  </div>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from 'Components/HelloWorld.vue';
import AboutMe from 'Components/AboutMe.vue';
import { ISchool } from 'Types/schools';

@Options({
  components: {
    HelloWorld,
    AboutMe,
  },
})
export default class App extends Vue {
  school: ISchool = {
    name: 'Academy of Cryptography Techniques',
    location: 'Ha Noi, Viet Nam',
  };
}
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
