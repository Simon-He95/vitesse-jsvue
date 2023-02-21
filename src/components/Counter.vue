// @unocss-include
<script>
export default {
  name: 'Counter',

  inheritAttrs: false,

  data() {
    return {
      count: 0,
    }
  },

  methods: {
    setCount() {
      this.count++
    },
  },
}
</script>

<template>
  <div text-3xl w-full @click="setCount">
    count {{ count }}
  </div>
</template>

<style scoped>
body{
  background-color: red;
}
</style>
