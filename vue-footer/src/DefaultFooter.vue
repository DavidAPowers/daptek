<template>
  <div>
    <form id="login" @submit.prevent="handleSubmit" class="row">
      <div class="columns medium-3">
        <input type="text" name="email" v-model="emailInput" placeholder="Email"  />
      </div>

      <div class="columns medium-3">
        <input type="text" name="password" v-model="passwordInput" placeholder="password"  />
      </div>

      <div class="columns medium-6">
        <button type="submit" class="button small secondary">Login</button>    
      </div>      
    </form>
    <p>(c) 2018 David A. Powers</p>        
  </div>              
</template>

<script>
export default {
  methods: {
    handleSubmit(event) {
      this.$emit('login', {email: event.target[0].value, password: event.target[1].value});
    }
  }
}
</script>
