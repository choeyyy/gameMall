import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Page1 from '../views/page1.vue';
import Page2 from '../views/page2.vue';
import Welcome from '../views/welcome.vue';
const routes = [
  {
    path: '/', // 根路由指向欢迎页面
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;