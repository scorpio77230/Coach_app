<template>
  <button v-if="!link" :to="to" :class="mode"><slot></slot></button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      require: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      require: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  margin-right: 0.5rem;
  display: inline-block;
  cursor: pointer;
  font: inherit;
  color: white;
  background-color: rgba(80, 116, 137, 1);
  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 15px;
  transition: all 0.25s;
  white-space: nowrap;
}
a:hover,
a:active,
button:hover,
button:active {
  background-color: rgba(5, 40, 60, 1);
}
.highlight {
  background-color: #F7909C;
  color: white;
  border: none;
}
.highlight:hover,
.highlight:active {
  background-color: rgba(204, 59, 76);
}
.outline {
  background-color: transparent;
  border: 1px solid rgba(76, 92, 108, 0.8);
  color: rgb(76, 92, 108);
}
.outline:hover,
.outline:active {
  background-color: rgba(76, 92, 108);
  color: white;
}
.flat {
  background-color: transparent;
  border-color: transparent;
  color: white;
}
.flat:hover,
.flat:active {
  background-color: #F7909C;
}



</style>