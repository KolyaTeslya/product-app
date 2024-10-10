<template>
  <div class="filter-container">
    <button @click="filter('cheap')" class="filter-btn">Дешеві</button>
    <button @click="filter('medium')" class="filter-btn">Середні</button>
    <button @click="filter('expensive')" class="filter-btn">Дорогі</button>
    <button @click="showAll" class="filter-btn show-all-btn">Показати всі</button>
  </div>
</template>

<script>
export default {
  methods: {
    filter(category) {
      this.$emit('filterProducts', category);
    },
    showAll() {
      this.$emit('filterProducts', 'all');
    }
  }
};
</script>

<style scoped>
.filter-container {
  margin-bottom: 20px;
  text-align: center;
}

.filter-btn {
  padding: 10px 20px;
  margin: 5px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-btn:hover {
  background-color: #2c8c6b;
}

.show-all-btn {
  background-color: #ffa726;
}

.show-all-btn:hover {
  background-color: #e68a00;
}
</style>
