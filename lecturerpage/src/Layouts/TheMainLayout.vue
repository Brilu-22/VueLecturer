<!-- src/layouts/TheMainLayout.vue -->
<template>
  <div class="app-layout">
    <!-- Sidebar/Navbar -->
    <aside class="sidebar">
      <Navbar />
    </aside>

    <!-- Main content -->
    <main class="main-content">
      <ThePageHeader />
      <div class="content-container">
        <slot /> <!-- This is where AnnouncementCreate will appear -->
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import ThePageHeader from '@/Layouts/ThePageHeader.vue'
</script>

<style scoped>
.app-layout {
  display: grid;
  grid-template-columns: 312px 1fr;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.sidebar {
  position: fixed;
  width: 312px;
  height: calc(100vh - 40px);
  left: 30px;
  top: 20px;
  background-color: #D0DFCC;
  border-radius: 21px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.main-content {
  grid-column: 2;
  padding: 20px;
  margin-left: 342px; /* sidebar width + left position */
}

.content-container {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
  .app-layout {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    position: static;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .main-content {
    margin-left: 0;
    grid-column: 1;
  }
}
</style>