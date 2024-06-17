    <template>
        <div class="home">
        <div class="header">
            <h1>欢迎来到欢迎来到gameMall！</h1>
        </div>
        <div class="content">
            <p>立即开始浏览吧！</p>
            
        </div>
        <div class="footer">
            <p>版权所有 © 2024 GameMall</p>
        </div>
        </div>
    </template>
    
    <script>
    export default {
        name: 'HomePage'
    };
    </script>
    
    <style scoped>
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
        background-color: #f9f9f9;
    }
    
    .header {
        background-color: #0973c4;
        color: #ffffff;
        padding: 20px;
        text-align: center;
    }
    
    .header h1 {
        margin: 0;
        font-size: 2.5em;
    }
    
    .content {
        flex: 1;
        width: 80%;
        padding: 40px 0;
        text-align: center;
    }
    
    .content p {
        font-size: 1.2em;
        color: #333;
    }
    
    .footer {
        background-color: #333;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .header h1 {
        font-size: 2em;
        }
    
        .content p {
        font-size: 1em;
        }
    }
    </style>