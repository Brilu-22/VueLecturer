<template>
  <!-- Main navigation bar container -->
  <div class="navbar bg-[#D0DFCC] shadow-sm">
    <!-- Logo section at the top of the sidebar -->
    <div class="logo-section flex items-center justify-center p-4">
      <!-- Company logo image -->
      <img
        src=""
        alt="Cloud & Code Academy Logo"
        class="w-[260px] h-auto max-h-[56px] object-contain"
      />
    </div>

    <!-- Navigation menu links section -->
    <div class="nav-links py-4">
      <!-- Loop through each navigation item -->
      <div v-for="item in navItems" :key="item.label">
        <!-- Main nav item -->
        <RouterLink :to="item.route" active-class="active-nav-item" @click="handleNavClick(item)">
          <div
            class="nav-item pl-6 pr-3 py-3 flex items-center transition-colors mx-4 hover:bg-white/50 hover:text-gray-700"
          >
            <component :is="item.icon" class="h-5 mr-3" />
            <span class="font-medium">{{ item.label }}</span>
          </div>
        </RouterLink>

        <!-- Nested Course Navigation -->
        <div
          v-if="item.label === 'Courses' && showCourseNav && !isCollapsed"
          class="course-nav ml-8"
        >
          <!-- Course Selection Level -->
          <div v-if="!selectedCourse" class="space-y-1">
            <div
              v-for="course in courses"
              :key="course.id"
              @click.stop="selectCourse(course)"
              class="course-nav-item"
            >
              {{ course.name }}
            </div>
          </div>

          <!-- Course Pages Level -->
          <div v-else class="space-y-1">
            <div class="course-nav-item font-semibold" @click.stop="selectedCourse = null">
              ← {{ selectedCourse.name }}
            </div>
            <RouterLink
              v-for="page in coursePages"
              :key="page.routeName"
              :to="{
                name: page.routeName,
                params: { courseId: selectedCourse.id },
              }"
              class="course-nav-item"
              active-class="active-course-item"
            >
              {{ page.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import Vue Router functionality
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'
// Import Lucide icons for the navigation
import { Gauge, BookOpen, Users, Calendar, User, Settings } from 'lucide-vue-next'

const router = useRouter()

// Array containing all navigation items with their labels, icons and routes
const navItems = [
  { label: 'Dashboard', icon: Gauge, route: '/' },
  { label: 'Courses', icon: BookOpen, route: '/courses' },
  { label: 'Groups', icon: Users, route: '/groups' },
  { label: 'Timetable', icon: Calendar, route: '/timetable' },
  { label: 'User Account', icon: User, route: '/account' },
  { label: 'Settings', icon: Settings, route: '/settings' },
]

// State management
const isCollapsed = ref(false)
const showCourseNav = ref(false)
const selectedCourse = ref(null)

// Course data
const courses = ref([
  { id: 'cs-101', name: 'CS 101' },
  { id: 'ai-210', name: 'AI 210' },
  { id: 'oop-101', name: 'OOP 101' },
  { id: 'csp-210', name: 'CSP 210' },
])

// Course pages with route names matching your router
const coursePages = ref([
  { name: 'Home', routeName: 'CourseHome' },
  { name: 'Announcements', routeName: 'CourseAnnouncements' },
  { name: 'Modules', routeName: 'CourseModules' },
  { name: 'Assignments', routeName: 'CourseAssignments' },
  { name: 'Grades', routeName: 'CourseGrades' },
])

const handleNavClick = (item) => {
  if (item.label === 'Courses') {
    showCourseNav.value = !showCourseNav.value
    selectedCourse.value = null
  } else {
    showCourseNav.value = false
  }
}

const selectCourse = (course) => {
  selectedCourse.value = course
  // Navigate to the course's home page
  router.push({
    name: 'CourseHome',
    params: { courseId: course.id },
  })
}
</script>

<style scoped>
/* Main sidebar styling */
/* In your Navbar.vue */
.navbar {
  background-color: #D0DFCC;
  border-radius: 21px;
  padding: 16px 0;
  height: 100%;
}

.nav-item {
  /* Your existing nav item styles */
  color: #212121;
  padding: 12px 24px;
  margin: 8px 0;
}

.active-nav-item {
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
