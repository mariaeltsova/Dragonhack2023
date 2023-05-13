import { createRouter, createWebHistory } from "vue-router"
import TopicView from "../views/TopicView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/topic",
      name: "topic",
      component: TopicView,
    },
  ],
})

export default router
