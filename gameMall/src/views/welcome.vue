    <template>
        <div class="welcome-page">
        <h1>欢迎来到gameMall！</h1>
        <img src="/public/icon_welcome.png" alt="欢迎图片" class="welcome-image">
        <!-- <p>请选择您感兴趣的页面进行浏览。</p> -->
        <!-- 提供链接到其他页面的导航 -->
        <!-- <router-link to="/page1">前往页面1</router-link>
        <router-link to="/page2">前往页面2</router-link> -->
        </div>

    </template>
    
    <script>
    export default {
        name: 'Welcome'
    };
    </script>
    
    <style scoped>
    .welcome-page {
        /* 欢迎页面的样式 */
        text-align: center;
        padding: 50px;
        background-color: #f9f9f9;
    }
    </style>