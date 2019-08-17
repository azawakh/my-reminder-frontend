<template>
<div v-if="books && books.length > 0">
  <div class="title">All book lists</div>

  <div v-for="book in books" :key="book.id">
    {{ book.title }}<br /><br /><small style="text-decoration:underline;" @click="deleteBook(book.id)">Delete</small>
    <hr />
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'home',
  created() {
    this.$store.dispatch('book/create');
  },
  computed: {
    ...mapGetters('book', ['books'])
  },
  methods: {
    deleteBook(id) {
      console.log(id);
    }
  }
}
</script>
