<script>
export default{
    mounted(){
        console.log("表示のタイミングでよむやつ"),
        this.next()
    },
    data(){
        return{
            formShiritori:"ぱぱげーの", //フォーム
            shiritori: ["りんご", "ごりら", "らっぱ"], //しりとりスト
            last_shiri:"", //shiritoriの最後を引っ張り出す
            nextHead:"", //つぎのもじ
            alertShow:false, //エラー表示
            alertMessage:"【しりとり注意！】", // 必要に応じてエラー表示をする場所
            gameOverShow: false, //ゲームオーバーの判定、しりとりボタンの活性
        }
    },
    methods: {
        addShiritori() {
                if (this.formShiritori.length > 1) { //2文字以上     
                    if (this.formShiritori.slice(0, 1) == this.nextHead){ //頭文字判定      
                        this.shiritori.push(this.formShiritori),
                        this.alertShow = false,
                        this.next()
                    } else {
                        //尻をとってない
                        this.alertMessage = "【しりとりをしてください】"
                        this.alertShow = true
                    }
                } else {
                    //1文字以下
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
                this.nextHead = this.last_shiri.slice(-2,-1), //長音の場合後ろから2文字目を取得
                this.formShiritori = this.nextHead
            } else if(this.nextHead !== "ん") { //最後の文字が「ん」ではない
                this.gameOverShow = false
            } else {
            this.gameOverShow = true
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
    <button @click="addShiritori" :disabled="gameOverShow">しりとり</button>
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