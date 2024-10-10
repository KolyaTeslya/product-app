<template>
  <div v-if="product">
    <img :src="product.image" alt="product image" class="product-image" />
    <h1>{{ product.name }}</h1>
    <p>{{ product.price }} USD</p>
    <p>{{ product.description }}</p>
    
    <button @click="goBack" class="back-button">Назад до товарів</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: null
    };
  },
  async created() {
    const response = await axios.get('/assets/products.json');
    const products = response.data;
    this.product = products.find(p => p.id === Number(this.$route.params.id));
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.product-image {
  width: 400px;
  height: auto;
  margin-bottom: 20px;
}

.back-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4c4d4c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.back-button:hover {
  background-color: #a0a7a4;
}
</style>
