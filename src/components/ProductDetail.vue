<template>
    <div class="product-detail" v-if="product">
      <div class="product-image">
        <img :src="product.image" alt="product image" />
      </div>
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price }} USD</p>
        <p class="description">{{ product.description }}</p>
      </div>
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
      try {
        const response = await axios.get('/assets/products.json');
        const products = response.data;
        this.product = products.find(p => p.id === Number(this.$route.params.id));
      } catch (error) {
        console.error("Error loading product data:", error);
      }
    }
  };
  </script>
  
  
  
  <style scoped>
  .product-detail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  
  .product-image {
    margin-right: 30px;
  }
  
  .product-image img {
    width: 400px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .product-info {
    max-width: 400px;
  }
  
  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }
  
  .price {
    font-size: 24px;
    color: #e67e22;
    margin-bottom: 15px;
  }
  
  .description {
    font-size: 18px;
    color: #555;
    line-height: 1.6;
  }
  </style>
  
  
  