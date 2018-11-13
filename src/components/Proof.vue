<template>
  <div class="proofs-index">
    <h1>Proofs go here</h1>
    <ul>
      <li>
        <button v-for="proof in proofs">
          {{ proof.name }}
        </button>
      </li>
    </ul>
</template>

<script>
  proofs: () => {
    return this.$data.proofs
  }
</script>

<style lang="less">

</style>
