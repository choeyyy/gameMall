<template>
  <div class="page2">
    <div class="header">
      <h1>页面 2</h1>
    </div>
    <div class="content">
      <h2>页面 2 内容标题</h2>
      <p>页面2的内容页面2的内容页面2的内容页面2的内容页面2的内容页面2的内容</p>
    </div>
    <div class="footer">
      <p>版权所有 © 2024 GameMall</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page2'
};
</script>

<style scoped>
.page2 {
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