
<template>
  <div class="hello">
    <h1 class = "revolve">Next</h1>
    <h2 >Revolution in Sales</h2>
    <ul>
      <li>
        <a
          href="https://#"
          target="_blank"
        >
          Inventory
        </a>
      </li>
      <li>
        <a
          href="https://#"
          target="_blank"
        >
          Order Tracking
        </a>
      </li>
      <li>
        <a
          href="https://#"
          target="_blank"
        >
          Debt Management
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      msg: 'Welcome to Vertsark'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #FFFFFF;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #4385F5;
}

.revolve {
    color: #FFFFFF;
;
}
</style>
