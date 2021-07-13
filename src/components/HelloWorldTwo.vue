<template>
  <div class="hello">
    <h1>{{ msg }} {{title}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const title = ref('Vue3 Typescript')

    return {
      title
    }
  },
})
</script>


<style lang="scss" scoped>
.hello {
  h1 {
    color: red;
  }
}
</style>
