<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  methods: {
  
  },
  computed: {
    text() {
    
    return '#' + this.title;
    },
    
  },
};
</script>

<style scoped>
.badge {
  font-size: 0.8rem;
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.3rem 1rem;
  display: inline-block;
  margin-right: 0.2rem;
}

.household {
  background-color: #3d008d;
  color: white;
}

.electrician {
  background-color: #71008d;
  color: white;
}

.sterilization {
  background-color: #8d006e;
  color: white;
}
</style>