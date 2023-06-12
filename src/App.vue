<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data(){
    return {
      hoge: 'にゃんにゃか',
      isShow: false,
      arr: [ 1000, 3, 5, 'I am a cat.', 'You are a cat.'],
      car :{
        name: "kuruma",
        color: "akai",
        speed: "hayai",
      },
      count: 0,
    }
  },
  methods: {
    // 関数ここ
    increment() {
      this.count++
    }
  },
  computed: {
    juusanbai() {
      return this.count * 13
    }
  }
}
</script>

<template>
  <header>
    
    <div class="wrapper">
     <h1>count: {{count}}匹のねこ！！！</h1>
     裏にはcountの13倍、{{ juusanbai }}匹のハムスターが!!

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <div v-if="isShow">
          {{hoge}} {{hoge}} {{hoge}} 
        </div>
      </nav>
     <p>
      配列に文字をいれるテスト「{{ arr[4] }}」<br>
      おぶじぇくと{{ car.name }}なまえ<br>
     </p>
    </div>
  </header>

  <RouterView />
    <button @click="isShow = !isShow">ねこをふやす</button> 
    <button @click="increment">+1</button>
    
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
