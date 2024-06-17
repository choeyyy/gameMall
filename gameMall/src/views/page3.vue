<template>
    <div class="page3">
        <div class="header">
            <h1>黄同学页面</h1>
        </div>
        <div class="content">
            <h2>黄同学</h2>
            <p>今天天气很好</p>
            <div class="card">
                <p>今天天气很好，吃饭了吗？</p>
            </div>
            <div class="card">
                <p>今天天气很好，吃饭了吗？</p>
            </div>
            <div class="card">
                <p>今天天气很好，吃饭了吗？</p>
            </div>
            <button @click="handleButtonClick">点击</button>
        </div>
        <div class="footer">
            <p>版权所有 © 2024 GameMall</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Page3',
        methods: {
            handleButtonClick() {
                alert('我还没吃饭，但是我喝了豆乳米麻薯！只是还想吃火锅。你吃了吗？');
                // 这里可以添加按钮点击后的逻辑
            }
        }
    };
</script>

<style scoped>
.page3 {
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
    font-size: 2em;
}

.content {
    flex: 1;
    width: 80%;
    padding: 40px 0;
    text-align: center;
}

.content h2 {
    margin-top: 0;
    font-size: 1.5em;
    color: #333;
}

.content p {
    font-size: 1em;
    color: #555;
}

.content button {
    padding: 10px 20px;
    font-size: 1em;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

.footer {
    background-color: #333;
    color: #ffffff;
    text-align: center;
    padding: 10px;
    width: 100%;
}

@media (max-width: 768px) {
    .header h1, .content h2 {
        font-size: 1.5em;
    }

    .content p {
        font-size: 0.9em;
    }
}
</style>
