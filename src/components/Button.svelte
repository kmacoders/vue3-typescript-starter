<script>
  import { count } from '../stores';

  const onCount = () => {
    $count = $count + 1;
  };
</script>

<button on:click={onCount}>Count</button>

<style lang="scss" scoped>
  button {
    outline: none;
    border: none;
    padding: 10px;
    background: rgb(236, 114, 32);
    color: #fff;
    cursor: pointer;
  }
</style>
