<template>
  <div class="hello">
    <h1>{{ msg }} {{title}}</h1>
    <h1>{{ rio.firstName }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { IPerson } from 'Types/index';

export default defineComponent({
  props: {
    msg: String,
  },
  setup() {
    const title = ref('Vue3 Typescript');
    const rio: IPerson = reactive({
      firstName: 'Hung',
      lastName: 'Phung',
      age: 4,
    });

    return {
      title,
      rio,
    };
  },
});
</script>

<style lang="scss" scoped>
.hello {
  h1 {
    color: red;
  }
}
</style>
