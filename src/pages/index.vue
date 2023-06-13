<script>
    export default {
        data() {
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
            //つくれる！関数
            increment() {
            this.count++
            }
        },
        computed: {
            //dataが書き変わったら反応する。戻値が動的に計算し直す
            juusanbai() {
            return this.count * 13
            }
        }
    }
</script>
<template>
    <div>
    <h1>Home</h1>
    <h2>count: {{count}}匹のねこ！！！</h2>
    <p>
        裏にはcountの13倍、{{ juusanbai }}匹のハムスターが!!
    </p>

    
    <div v-if="isShow">
        <p>通常の変数呼び出し<br>
        {{hoge}} {{hoge}} {{hoge}} </p>
    </div>

     <p>
        配列に文字をいれるテスト「{{ arr[4] }}」<br>
        おぶじぇくと{{ car.name }}なまえ<br>
     </p>
     <button @click="isShow = !isShow">ねこをふやす</button> 
     <button @click="increment">+1</button>
    </div>
</template>