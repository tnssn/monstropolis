<template>
    <nav>
    <router-link to="/">home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/shiritori">しりとり</router-link>
    <router-link to="/buttonton">ぼたん</router-link>
    <router-link to="/develop">Develop</router-link>
    <router-link to="/dog">いぬ</router-link>
    <router-link to="/gacha">ガチャ</router-link>
    <router-Link to="/tnssn">つなし</router-Link>
    </nav>
    
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  color: #96a4c8;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #cccccc;
}

nav a:first-of-type {
  border: 0;
}
</style>