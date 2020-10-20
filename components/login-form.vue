<template>
  <form class="form" @submit.prevent="login">
    <vs-input v-model="form.username" placeholder="User name">
      <template #icon>
        <i class="bx bx-user"></i>
      </template>
    </vs-input>

    <vs-input
      v-model="form.password"
      type="password"
      icon-after
      placeholder="Password"
    >
      <template #icon>
        <i class="bx bx-lock-open-alt"></i>
      </template>
    </vs-input>
    <vs-button>Login</vs-button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { LoginFormDto } from '~/types/auth'

@Component({
  auth: false,
})
export default class LoginForm extends Vue {
  form: LoginFormDto = {
    username: '',
    password: '',
  }

  async login() {
    try {
      await this.$auth.login({ data: this.form })
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="scss"></style>
