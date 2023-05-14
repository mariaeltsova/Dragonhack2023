import { createRouter, createWebHistory } from "vue-router"
import TopicView from "../views/TopicView.vue"
import LearnView from "../views/LearnView.vue"
import PuzzleView from "../views/PuzzleView.vue"

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
    {
      path: "/puzzle",
      name: "puzzle",
      component: PuzzleView,
    },
  ],
})

export default router
