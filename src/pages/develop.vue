<script>
export default{
    data(){
        return{
            key:[ 1, 5, 10, 12, 34],
            count: 1,
            tmpMessage: "sample",
            message: "",
            messages : [ "test", "testtest"]
        }
        
    },
    methods: {
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
    }
}
</script>
<template>
    <div>
        <h1>Develop……つまり砂場にゃ！</h1>

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



    </div>
</template>