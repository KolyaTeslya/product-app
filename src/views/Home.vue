<template>
  <div>
    <ProductFilter @filterProducts="filterProducts" />
    <div class="product-list">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product" 
        @click="viewProductDetail(product.id)" 
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductCard from '@/components/ProductCard.vue';
import ProductFilter from '@/components/ProductFilter.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      products: [],
      filteredProducts: []
    };
  },
  components: {
    ProductCard,
    ProductFilter
  },
  methods: {
    async fetchProducts() {
      const response = await axios.get('/assets/products.json');
      this.products = response.data;
      this.filteredProducts = this.products;
    },
    filterProducts(category) {
      if (category === 'all') {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(product => product.category === category);
      }
    },
    viewProductDetail(productId) {
      this.$router.push(`/product/${productId}`);
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}
</style>
