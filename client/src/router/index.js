import { createRouter, createWebHistory } from "vue-router"
import TopicView from "../views/TopicView.vue"
import LearnView from "../views/LearnView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/topic",
      name: "topic",
      component: TopicView,
    },
    {
      path: "/learn",
      name: "learn",
      component: LearnView,
    },
  ],
})

export default router
