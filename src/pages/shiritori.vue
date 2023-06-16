<script>
export default{
    mounted(){
        console.log("表示のタイミングでよむやつ！"),
        this.next()
    },
    data(){
        return{
            formShiritori:"ぱぱげーの", //フォーム
            shiritori: ["りんご", "ごりら", "らっぱ"], 
            last_shiri:"", //shiritoriの最後を引っ張り出す
            nextHead:"", //つぎのもじ
        }
    },
    methods: {
        addShiritori() {
            if (this.formShiritori.length > 1) {
            this.shiritori.push(this.formShiritori),
            this.next()
        } else {
            console.log("1文字以下禁止！")
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
        },
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