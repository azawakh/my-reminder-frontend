<template>
  <div class="count">
    <h1>This is an count page</h1>
    {{count}}
    <button @click="increment">++</button>
    <button @click="decrement">--</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('count', ['count'])
  },
  methods: {
    increment() {
      this.$store.dispatch("count/increment");
    },
    decrement() {
      this.$store.commit("count/decrement");
    }
  }
};
</script>
