<template>
  <div id="app">
    <img src="./assets/background.png">
   <div class="display">
      <img src="./assets/vetsark-logo.png">
   </div>
   <div class="form">
      <h1>Welcome to <span>Vetsark</span></h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum ipsam repellendus nesciunt ducimus porro commodi tenetur sint dicta molestias?
      </p>
      <form>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" placeholder="Email">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Password">
        <button>Login</button>
        <a href="#">Forgotten password?</a>
      </form>
   </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

#app .display{
/* background: url('./assets/background.png') center center cover; */
}

#app .form {
  margin: 2rem;
}
</style>
