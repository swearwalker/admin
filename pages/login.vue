<template>
  <main id="main">
    <login-form />
  </main>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import LoginForm from '~/components/login-form'

@Component({
  auth: false,
  components: {
    LoginForm,
  },
})
export default class LoginPage extends Vue {}
</script>

<style lang="scss"></style>
