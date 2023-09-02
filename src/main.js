import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from "vue-router"

import MainComponent from "./pages/index.vue"
import AbountComponent from "./pages/about.vue"
import ShiritoriCoomponent from "./pages/shiritori.vue"
import ButtontonComponent from "./pages/buttonton.vue"
import DevelopCoomponent from "./pages/Develop.vue"
import DogComponent from "./pages/dog.vue"
import GachaComponent from "./pages/gacha.vue"
import TnssnCompornent from "./pages/tnssn.vue"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const Home = { template: '<div>Home</div>'}
const About = { template: '<div>About</div>'}
const Shiritori = { template: '<div>Shiritori</div>'}
const Buttonton = { template: '<div>Buttonton</div>'}
const Develop = { template: '<div>Develop</div>'}
const Dog = { template: '<div>Dog</div>'}
const Gacha = { template: '<div>Gacha</div>'}
const Tnssn = { template: '<div>Tns</div>'}


const routes = [
    { path: '/', component: MainComponent },
    { path: '/about', component: AbountComponent },
    { path: '/shiritori', component: ShiritoriCoomponent},
    { path: '/buttonton', component: ButtontonComponent },
    { path: '/develop', component: DevelopCoomponent},
    { path: '/dog', component: DogComponent},
    { path: '/gacha', component: GachaComponent},
    { path: '/tnssn', component: TnssnCompornent},
  ]
  
// Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
  createApp(App).use(router).use(vuetify).mount("#app")