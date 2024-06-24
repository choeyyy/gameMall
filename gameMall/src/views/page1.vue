<template>
  <div class="page1">
    <div class="header">
      <h1>页面 1</h1>
    </div>
    <div class="content">
      <h2>（测试评论）</h2>
      <p>评论区不是无人区！请友善发言哇！</p>
      <p>评论区不是无人区！请友善发言哇！</p>
      <!-- 评论区域 -->
      <div class="comments">
        <h3>用户评论</h3>
        <div class="comment" v-for="(comment, index) in comments" :key="index">
          <p class="comment-user">{{ comment.user }}</p>
          <p class="comment-text">{{ comment.text }}</p>
        </div>
        <div class="new-comment">
          <!-- 添加了一个输入框用于用户输入自己的名字，如果没有输入则默认为“路人” -->
          <input v-model="userName" placeholder="输入你的用户名（选填）" />
          <textarea v-model="newCommentText" placeholder="写下你的评论..."></textarea>
          <button @click="addComment">提交评论</button>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>版权所有 © 2024 GameMall</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page1',
  data() {
    return {
      comments: [
        { user: '用户A', text: '这是一个很棒的游戏！' },
        { user: '用户B', text: '游戏画面很精美。' }
      ],
      newCommentText: '',
      userName: '' // 用户输入的名字
    };
  },
  methods: {
    addComment() {
      if (this.newCommentText.trim() === '') {
        alert('评论内容不能为空！');
        return;
      }
      const user = this.userName.trim() || '路人'; // 如果userName为空，则默认用户名为“路人”
      this.comments.push({
        user,
        text: this.newCommentText
      });
      this.newCommentText = ''; // 清空评论输入框
      this.userName = ''; // 清空用户名输入框
    }
  }
};
</script>

<style scoped>
/* 页面整体样式 */
.page1 {
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
/* 评论区域样式 */
.comments {
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comment {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.comment-user {
  font-weight: bold;
}

.comment-text {
  margin-top: 5px;
}

.new-comment {
  margin-top: 10px;
}

.new-comment textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

.new-comment button {
  margin-left: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #0973c4;
  color: white;
  cursor: pointer;
}

.new-comment button:hover {
  background-color: #0c58a6;
}
</style>