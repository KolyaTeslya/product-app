import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage 
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetailView.vue'),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
