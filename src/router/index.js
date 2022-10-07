import { createRouter, createWebHistory } from "vue-router";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Barang from "../views/Barang.vue";
import Supplier from "../views/Supplier.vue";
import Tambahbarang from "../views/Tambahbarang.vue";
import Tambahsupplier from "../views/Tambahsupplier.vue";
import Updatebarang from "../views/Updatebarang.vue";
import Updatesupplier from "../views/Updatesupplier.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/barang",
    name: "barang",
    component: Barang,
  },
  {
    path: "/supplier",
    name: "supplier",
    component: Supplier,
  },
  {
    path: "/tambahbarang",
    name: "tambahbarang",
    component: Tambahbarang,
  },
  {
    path: "/updatebarang",
    name: "updatebarang",
    component: Updatebarang,
  },
  {
    path: "/tambahsupplier",
    name: "tambahsupplier",
    component: Tambahsupplier,
  },
  {
    path: "/updatesupplier",
    name: "updatesupplier",
    component: Updatesupplier,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.url.BASE_URL),
  routes,
});

export default router;
