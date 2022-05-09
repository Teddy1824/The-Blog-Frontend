import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import(/* webpackChunkName: "signup" */ "../views/SignUp"),
  },
  {
    path: "/gamingblogs",
    name: "gamingblogs",
    component: () =>
      import(/* webpackChunkName: "gamingblogs" */ "../views/GamingBlogs.vue"),
  },
  {
    path: "/lifestyleblogs",
    name: "lifestyleblogs",
    component: () =>
      import(
        /* webpackChunkName: "lifestyleblogs" */ "../views/LifestyleBlogs.vue"
      ),
  },
  {
    path: "/musicblogs",
    name: "musicblogs",
    component: () =>
      import(/* webpackChunkName: "musicblogs" */ "../views/MusicBlogs.vue"),
  },
  {
    path: "/techblogs",
    name: "techblogs",
    component: () =>
      import(/* webpackChunkName: "techblogs" */ "../views/TechBlogs.vue"),
  },
  {
    path: "/post/:id",
    name: "postdetails",
    component: () =>
      import(/* webpackChunkName: "postdetails" */ "../views/PostDetails.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
