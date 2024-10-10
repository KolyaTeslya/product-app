<template>
    <div class="product-card" @click="$emit('click')">
      <img :src="product.image" alt="product image" class="product-image" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }} USD</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    width: 220px;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 15px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-10px);
  }
  
  .product-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  h3 {
    font-size: 18px;
    margin: 10px 0;
  }
  
  p {
    font-size: 16px;
    color: #555;
  }
  </style>
  