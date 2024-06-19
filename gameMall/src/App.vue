<template>
  <div class="game-ad">
    <!-- 左侧导航栏 -->
      <!-- 左侧导航栏 -->
      <nav class="sidebar">
          <h3>菜单</h3>
          <router-link to="/home" class="sidebar-link">首页</router-link>
          <router-link to="/page1" class="sidebar-link">页面1</router-link>
          <router-link to="/page2" class="sidebar-link">页面2</router-link>
          <router-link to="/page3" class="sidebar-link">页面3</router-link>
          <router-link to="/page4" class="sidebar-link">页面4</router-link>
        </nav>
    

    <!-- 右侧内容区域使用 <router-view> 来显示当前路由的组件 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          title: '赛尔达传说（The Legend of Zelda Ⅰ）',
          image: '/images/shop_banner3.jpg',
          description: '一款经典的冒险游戏...'
        },
        {
          title: '饼豆人（Candy Crush）',
          image: '/images/shop_banner2.jpg',
          description: '一款休闲益智游戏...'
        },
        {
          title: '超级牛里奥兄弟（Super Mario Bros.）',
          image: '/images/shop_banner1.jpg',
          description: '任天堂经典游戏系列之一...'
        }
      ],
      currentPromotion: {
        title: '赛尔达传说（The Legend of Zelda Ⅰ）',
        image: '/images/shop_banner3.jpg',
        originalPrice: '$58.8',
        currentPrice: '$30.0'
      },
      currentIndex: 0
    };
  },
  methods: {
    changePromotion() {
      this.currentIndex = (this.currentIndex + 1) % this.games.length;
      this.currentPromotion = this.games[this.currentIndex];
    }
  }
};
</script>

<style scoped>
/* 在这里添加CSS样式 */

/* 更新CSS样式以实现左右布局 */
.game-ad {
  display: flex; /* 使用Flexbox布局整个页面 */
}

.layout {
  width: 100%;
  flex-direction: row; /* 设置Flexbox为行布局 */
}

.sidebar {
  flex: 1; /* 导航栏占据较小的空间 */
  background-color: #333; /* 导航栏背景颜色 */
  color: white;
  padding: 20px;
  height: 100vh; /* 导航栏高度占满视口高度 */
  position: fixed; /* 导航栏固定在页面左侧 */
  overflow-y: auto; /* 允许垂直滚动 */
}

.sidebar-link {
  color: white;
  text-decoration: none;
  display: block;
  margin: 10px 0;
  padding: 5px 0;
}

.sidebar-link:hover {
  text-decoration: underline;
}

.content {
  flex: 3; /* 内容区域占据较大的空间 */
  padding: 20px;
  margin-left: 200px; /* 为左侧导航栏留出空间 */
  background-image: url("/images/pic_background_Products.png");
  background-size: cover;
  background-position: center;
}

.header, .footer {
  background-color: #0973c4;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.header h1 {
  font-size: 45px;
}

.content {
  padding: 20px;
  background-image: url("/images/pic_background_Products.png");
  background-size: cover;
  background-position: center;
}

.separator {
  width: 100%;
  border-bottom: 1px solid #f9ef2d;
  margin: 10px 0;
}

.advertisement {
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 20px;
  border-bottom: 2px solid #ffffff;
  font-weight: bold;
}

.game-items {
  display: flex;
  justify-content: space-between;
}

.game-item {
  display: inline-block;
  margin: 10px;
  width: 30%;
  text-align: left;
}

.game-image {
  width: 100%;
  height: 200px; /* 根据需要调整高度 */
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
}

.game-title {
  color: #0973c4;
  font-size: 18px;
  font-weight: bold;
}

.game-description {
  color: #555;
  font-weight: bold;
}

.promotion {
  margin-top: 20px;
  text-align: center;
}

.promotion-image {
  width: 50%;
  height: auto;
  margin-bottom: 20px;
}

.promotion-title, .current-price, .promotion-price {
  color: #555;
  font-weight: bold;
}

.promotion-button {
  background-color: #0973c4;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.footer p {
  padding: 10px;
}
</style>