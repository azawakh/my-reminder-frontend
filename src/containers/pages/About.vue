<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{count}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'about',
  computed: {
    ...mapGetters('count', ['count'])
  }
}
</script>
