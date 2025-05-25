<!-- src/views/Announcements/Create.vue -->
<template>
  <div class="announcement-create">
    <h1>Create An Announcement</h1>
    
    <div class="creation-form">
      <h2>Create an Announcement</h2>
      
      <div class="form-section">
        <label class="form-label">Announcement Title</label>
        <input
          type="text"
          v-model="announcement.title"
          placeholder="Type announcement title here"
          class="form-input"
        >
      </div>
      
      <div class="form-section">
        <label class="form-label">Announcement Body</label>
        <textarea
          v-model="announcement.body"
          placeholder="Type announcement body Here"
          class="form-textarea"
          rows="5"
        ></textarea>
      </div>
      
      <button @click="sendAnnouncement" class="submit-button">
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

.announcement-create h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #212121;
}

.creation-form {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.creation-form h2 {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #212121;
}

.form-section {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #212121;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #45a049;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .announcement-create {
    padding: 1rem;
  }
  
  .creation-form {
    padding: 1.5rem;
  }
}
</style>