<script>
export default{
    mounted(){
        console.log("表示のタイミングでよむやつ"),
        this.next()
    },
    data(){
        return{
            formShiritori:"ぱぱげーの", //フォーム
            shiritori: ["りんご", "ごりら", "らっぱ"], 
            last_shiri:"", //shiritoriの最後を引っ張り出す
            nextHead:"", //つぎのもじ
            alertShow:false,
            alertMessage:"【しりとり注意！】",
            gameOverShow: false,
        }
    },
    methods: {
        addShiritori() {
                if (this.formShiritori.length > 1) {             
                    if (this.formShiritori.slice(0, 1) == this.nextHead){       
                        this.shiritori.push(this.formShiritori),
                        this.alertShow = false,
                        this.next()
                    } else {
                        console.log(this.formShiritori.slice(0, 1)),
                        console.log(this.nextHead),
                        console.log("尻がとれてない"),
                        this.alertMessage = "【しりとりをしてください】"
                        this.alertShow = true
                    }
                } else {
                    this.alertMessage = "【2文字以上の単語を入力してください】",
                    this.alertShow = true
                }
            },
        delShiritori() {
            this.shiritori.pop(),
            this.next()
        },
        next() {
            this.last_shiri = this.shiritori.slice(-1)[0],
            this.nextHead = this.last_shiri.slice(-1),
            this.formShiritori = this.nextHead
            // しりが長音か
            if(this.nextHead == "ー"){
                console.log("尻長音の判定")
                this.nextHead = this.last_shiri.slice(-2,-1),
            this.formShiritori = this.nextHead
            } else if(this.nextHead !== "ん") {
                this.gameOverShow = false
            } else {
            this.gameOverShow = true
            }
        },
        topHantei(){
            if (this.formShiritori.slice(0, 1) == this.nextHead){
                console.log(this.formShiritori.slice(0, 1)),
                console.log(this.nextHead),
                console.log("尻がとれた"),
                this.alertShow = false
            } else {
                console.log(this.formShiritori.slice(0, 1)),
                console.log(this.nextHead),
                console.log("尻がとれてない"),
                this.alertMessage = "【しりとりをしてください】"
                this.alertShow = true
            }
        }
    },
}
</script>
<template>
<div>
    <h1>しりとりびゅー</h1>
    <p>最強のしりとり盤面を作ろう！</p>
    <p>現在：{{ shiritori.length }}</p>
    <div id="shiritoList">
        <ul>
            <li v-for="shiritori in shiritori">{{ shiritori }}</li>
        </ul>
    </div>
    <div v-if="gameOverShow">【「ん」で終わったらおしまい！】</div>
    <div v-if="alertShow">{{ alertMessage }}</div>
    <p>次の文字「{{ nextHead }}」</p>
    <input v-model="formShiritori">
    <button @click="addShiritori">しりとり</button>
    <button @click="delShiritori">一個戻る</button>

</div>
</template>

<style scoped>
h1 {
    margin: 10px 0;/* マージン難しいけど設定する */
    padding: 0 5px;/* 内側余白 */
    background: transparent;/*背景透明に*/
    border-left: solid 10px #96a4c8; /* border表示、太さ、色 */
    }
#shiritoList {
    margin: 2em 0;
}

</style>