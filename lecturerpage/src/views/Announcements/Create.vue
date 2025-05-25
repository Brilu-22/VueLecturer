<!-- src/views/Announcements/Create.vue -->
<template>
  <div class="announcement-create">
    <h1>Create An Announcement</h1>
    
    <div class="form-container">
      <h2>Create an Announcement</h2>
      
      <div class="form-group">
        <label>Announcement Title</label>
        <input 
          type="text" 
          v-model="announcement.title"
          placeholder="Type announcement title here"
          class="form-input"
        >
      </div>
      
      <div class="form-group">
        <label>Announcement Body</label>
        <textarea 
          v-model="announcement.body"
          placeholder="Type announcement body here"
          class="form-textarea"
          rows="6"
        ></textarea>
      </div>
      
      <button @click="sendAnnouncement" class="submit-btn">
        SEND ANNOUNCEMENT
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const announcement = ref({
  title: '',
  body: ''
})

const sendAnnouncement = () => {
  // In a real app, you would send this to your backend
  console.log('Announcement sent:', announcement.value)
  router.push('/announcements')
}
</script>

<style scoped>
.announcement-create {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 30px;
}

h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.form-container {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #45a049;
}
</style>