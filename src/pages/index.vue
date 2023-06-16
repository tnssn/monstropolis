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
            count: 1,
            key:[ 1, 5, 10, 12, 34],
            tmpMessage: "sample",
            message: "",
            messages : [ "test", "testtest"]
            }
        },

        methods: {
            //つくれる！関数
        increment() {
            this.count++
        },
        decrement() {
            //this.count--
            //名前詐欺をやってみる。
            //関数の呼び出しは単体では動かん。()をつける。
            this.increment()
            //なんかむずいな
        },
        //メソッドで任意の数を増やせるようにしてみる
        add(num){
        this.count = this.count + num
        },
        sample(hoge){
            console.log(hoge)
        },
        addMessage() {
            this.messages.push(this.tmpMessage)   
        },
        delMessage() {
            this.messages.pop()
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

    <div>
        {{message}} 

    </div>
        <ul>
            <li v-for="messages in messages">{{messages}}ですわ。</li>
        </ul>
        <input v-model="tmpMessage" />
        <button @click="addMessage">addMessage</button>
        <button @click="delMessage">でる！！</button>

<hr>

        <h2>ねこちゃんを増やす</h2>
        <div>{{ count }}</div>
        <div>繰り返しながらボタンを作ってみよう</div>
        <button v-for="key in key" @click="add(key)">{{key}}増やすボタン？</button>
        <br><br>
<hr>
        <h2>いべんとあれこれ</h2>
        <div>
            こんそるにログ出せって言ってる！こんそるみるべし！<br>
        <p>@click="sample" は @click="sample($event)"という意味。</p>
        <p>$eventはVueにおける予約語です。</p>
        <button @click="sample">@click="sample"</button><br>
        
        <button @click="sample()">@click="sample()"</button><br>
        <p>引数がひとつもないと、 undefiendなる</p>
        <button @click="sample(1)">@click="sample(1)"</button><br>
        <p>これは1が出るはず</p>
        
<hr>

        <div>だがこれはどうかな？</div>
        <p>add(num)を使ってみる</p>
        <button @click="add(1)">めそっどのたすいち</button>

        <p>普通のボタン</p>
        <button @click="increment">たす1</button>
        <button @click="decrement">まいなす</button>
        <button @click="count = count +2">たすにをしてみる</button>

        <br><br><br>
    </div>


    <hr>
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