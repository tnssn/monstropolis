<script>
import ListItem from '@/components/ListItem.vue'
export default{
    components: {
        ListItem // この定義忘れるとこんそるで黄色に怒られる
    },
    data(){
        return{
            key:[ 1, 5, 10, 12, 34],
            count: 1,
            tmpMessage: "sample",
            message: "",
            messages : [ "test", "testtest"],
            arr: [ 1000, 3, 5, 'I am a cat.', 'You are a cat.'],
            car :{
                name: "kuruma",
                color: "akai",
                speed: "hayai",
            },
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
        
        <p>vuetifyであそんでみよう</p>
        <v-btn>
        Button
        </v-btn>
        <br><br>
        <v-card
         title="ハノイの塔"
         text="ハノイの塔（ハノイのとう、Tower of Hanoi）は、パズルの一種。 バラモンの塔または ルーカスタワー(Lucas' Tower)とも呼ばれる。 "
         >
        <v-card-actions>
            <v-btn variant="outlined">まだつくってない</v-btn>
        </v-card-actions>
        </v-card>

        <p>新しいタイトル<v-chip variant="outlined">新作</v-chip></p>



        <div>
        <ul>
        <ListItem :msg="item" v-for="(item, key) in car" :key="key"></ListItem>
        </ul>
        </div>
        <p>msg="item"だと文字列</p>
        <p>:msg="  このなかはJavaScript "</p>

    </div>
</template>