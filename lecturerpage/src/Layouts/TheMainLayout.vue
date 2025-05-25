<template>
  <div class="app-container">
    <Navbar /> <!-- This will now show the simple sidebar -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-left: 250px; /* Match sidebar width */
}
</style>