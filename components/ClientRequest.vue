<template>
  <code>{{ data }}</code>
</template>

<script>
export default {
  fetchOnServer: false,

  async fetch() {
    const { data } = await this.$axios.get('/posts/1')

    this.data = data
  },

  data() {
    return {
      data: [],
    }
  },
}
</script>
