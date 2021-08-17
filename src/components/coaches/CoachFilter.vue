<template>
  <base-card>
    <h2>搜尋家教</h2>
    <span class="filter-option">
      <input type="checkbox" id="juniorhigh" checked @change="setFilter" />
      <label for="juniorhigh">國中</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="seniorhigh" checked @change="setFilter" />
      <label for="seniorhigh">高中</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="english" checked @change="setFilter" />
      <label for="english">英文</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="physics" checked @change="setFilter" />
      <label for="physics">物理</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="chemistry" checked @change="setFilter" />
      <label for="chemistry">化學</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        juniorhigh: true,
        seniorhigh: true,
        english: true,
        physics: true,
        chemistry: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>