<template>
<div>
  <ul>
    <li>
      <form-text name="email" placeholder="email" v-model="email" />
    </li>
    <li>
      <form-text name="password" placeholder="password" v-model="password" />
    </li>
  </ul>
  <Button v-on:click.native="login">送信</Button>
</div>
</template>

<script>
import FormText from '@/components/atoms/FormText.vue';
import Button from '@/components/atoms/Button.vue';

export default {
  name: 'Login',
  components: { FormText, Button },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    token() {
      return this.$store.state.auth.token
    },
  },
  methods: {
    login() {
      this.$store.dispatch("auth/create",
        {
          'user': {
            email: this.email,
            password: this.password
          }
        });
    }
  },
  watch: {
    token(newToken) {
      console.log(newToken);
      this.$router.push('/')
    }
  }
};
</script>
