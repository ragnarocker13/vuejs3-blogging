import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import BlogsView from '../views/BlogsView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import CreatePost from '../views/CreatePostView.vue'
import TagView from '../views/TagView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  },
  {
    path: '/create',
    name: 'create',
    component: CreatePost
  },
  {
    path: '/tags/:tag',
    name: 'tags',
    component: TagView
  },  
  {
    path: '/blogs/:id',
    name: 'blogPost',
    component: BlogPostView,
    props: true // toggle this to enable passing props
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
