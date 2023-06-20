import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from "vue-router"

import MainComponent from "./pages/index.vue"
import AbountComponent from "./pages/about.vue"
import ShiritoriCoomponent from "./pages/shiritori.vue"
import ButtontonComponent from "./pages/buttonton.vue"
import DevelopCoomponent from "./pages/Develop.vue"


const Home = { template: '<div>Home</div>'}
const About = { template: '<div>About</div>'}
const Shiritori = { template: '<div>Shiritori</div>'}
const Buttonton = { template: '<div>Buttonton</div>'}
const Develop = { template: '<div>Develop</div>'}


const routes = [
    { path: '/', component: MainComponent },
    { path: '/about', component: AbountComponent },
    { path: '/shiritori', component: ShiritoriCoomponent},
    { path: '/buttonton', component: ButtontonComponent },
    { path: '/develop', component: DevelopCoomponent},
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
  createApp(App).use(router).mount("#app")