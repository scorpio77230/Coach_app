<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: 'cwTeXHei';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/ea/cwtexhei/v3/cwTeXHei-zhonly.eot);
  src: url(https://fonts.gstatic.com/ea/cwtexhei/v3/cwTeXHei-zhonly.eot?#iefix)
      format('embedded-opentype'),
    url(https://fonts.gstatic.com/ea/cwtexhei/v3/cwTeXHei-zhonly.woff2)
      format('woff2'),
    url(https://fonts.gstatic.com/ea/cwtexhei/v3/cwTeXHei-zhonly.woff)
      format('woff'),
    url(https://fonts.gstatic.com/ea/cwtexhei/v3/cwTeXHei-zhonly.ttf)
      format('truetype');
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'cwTeXHei', sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 1;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-in;
}
.route-leave-active {
  transition: all 0.3s ease-out;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>