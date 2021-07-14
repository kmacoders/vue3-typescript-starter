<template>
  <div class="hello">
    <h1>{{ msg }} {{title}}</h1>
    <div>Creator: {{ rio.firstName }}</div>
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
      firstName: 'Huwng',
      lastName: 'Phung',
      age: 22,
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
    color: #0091ea;
  }
}
</style>
