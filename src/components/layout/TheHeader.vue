<template>
  <header>
    <nav>
      <h1><router-link to="/">找家教</router-link></h1>
    </nav>
    <ul>
      <li><router-link to="/coaches">服務列表</router-link></li>
      <li v-if="isLoggedIn">
        <router-link to="/requests">委託版</router-link>
      </li>
      <li v-else><router-link to="/auth">登入</router-link></li>
      <li v-if="isLoggedIn"><base-button @click="logout" mode="flat">登出</base-button></li>
    </ul>
  </header>
</template>


<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background: rgb(15, 37, 64);
  background: linear-gradient(
    186deg,
    rgba(15, 37, 64, 1) 0%,
    rgba(35, 76, 101, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
header a {
  text-decoration: none;
  color: #d8ad78;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 1px solid transparent;
  white-space: nowrap;
  border-radius: 15px;
}
a:active,
a:hover,
a.router-link-active {
  color: white;
  border: 1px solid white;
}
h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>