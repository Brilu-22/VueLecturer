<!-- src/views/Announcements/Overview.vue -->
<template>
  <div class="announcements-overview">
    <h1>Announcements Overview</h1>
    
    <div class="actions">
      <router-link to="/announcements/create" class="create-btn">
        Create New Announcement
      </router-link>
    </div>
    
    <div class="announcements-list">
      <div class="section">
        <h2>Recent Announcements</h2>
        
        <div class="announcement-card" v-for="announcement in recentAnnouncements" :key="announcement.id">
          <h3>{{ announcement.title }}</h3>
          <p>{{ announcement.body }}</p>
          <div class="meta">
            <span class="date">{{ formatDate(announcement.date) }}</span>
          </div>
        </div>
      </div>
      
      <div class="section">
        <h2>Past Announcements</h2>
        
        <div class="announcement-card" v-for="announcement in pastAnnouncements" :key="announcement.id">
          <h3>{{ announcement.title }}</h3>
          <p>{{ announcement.body }}</p>
          <div class="meta">
            <span class="date">{{ formatDate(announcement.date) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Sample data - in a real app, this would come from an API
const announcements = ref([
  {
    id: 1,
    title: 'Important Course Update',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    date: new Date('2023-05-15')
  },
  {
    id: 2,
    title: 'Upcoming Exam Schedule',
    body: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
    date: new Date('2023-04-20')
  },
  {
    id: 3,
    title: 'New Learning Materials Available',
    body: 'Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    date: new Date('2023-03-10')
  }
])

const recentAnnouncements = computed(() => {
  const cutoffDate = new Date()
  cutoffDate.setMonth(cutoffDate.getMonth() - 1)
  return announcements.value.filter(a => new Date(a.date) >= cutoffDate)
})

const pastAnnouncements = computed(() => {
  const cutoffDate = new Date()
  cutoffDate.setMonth(cutoffDate.getMonth() - 1)
  return announcements.value.filter(a => new Date(a.date) < cutoffDate)
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.announcements-overview {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 30px;
}

.actions {
  margin-bottom: 30px;
}

.create-btn {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
}

.create-btn:hover {
  background-color: #45a049;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  font-size: 18px;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
}

.announcement-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 15px;
}

.announcement-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
}

.announcement-card p {
  margin-top: 0;
  margin-bottom: 15px;
  color: #555;
}

.meta {
  font-size: 14px;
  color: #777;
}

.date {
  display: inline-block;
  margin-right: 15px;
}
</style>