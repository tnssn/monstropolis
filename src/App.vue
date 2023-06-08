<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default {

  data(){
        return {
            hoge: 'ねこはいます',
            isShow: false,
            arr: [ 1000, 3, 5, 7, ],
            car :{
              name: "kuruma",
              color: "akai",
              speed: "hayai"
            },
            count:0
        }
    },

   components: {
     HelloWorld,
   }
} 
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div v-for="item in car">
        <HelloWorld :msg="item" />
      </div>
     <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <div v-if="isShow">
          {{hoge}} {{hoge}} {{hoge}} 
        </div>
        <div v-for="item in arr" :key="item">
         {{item}}
        </div>
        <div v-for="(item, index) in arr" :key="item">
   {{index}}番目に案内 -  番号札{{item}}の落ち着いた方
</div>
      <div v-for="(item, key) in car">
        {{key}} - {{ item }}


      </div>  
      {{ arr[0] }}匹の筋肉<br>
      おぶじぇくと{{ car.name }}なまえ

      </nav>
    </div>
  </header>

  <RouterView />
  <button @click="isShow = !isShow">toggle</button> 

  
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
