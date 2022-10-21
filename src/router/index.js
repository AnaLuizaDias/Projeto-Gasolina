import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import IntegrantesView from "@/views/IntegrantesView.vue";
import ExperimentoView from "@/views/ExperimentoView.vue";
import TabelaView from "@/views/TabelaView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tabela",
      name: "tabela",
      component: TabelaView,
    },
    {
      path: "/experimento",
      name: "experimento",
      component: ExperimentoView,
    },
    {
      path: "/integrantes",
      name: "integrantes",
      component: IntegrantesView,
    },
  ],
});

export default router;
