<script>
export default{
    data(){
        return{
            buttonkey:[1],
            isShow: false,
        }
    },
    methods: {
        add(){
        this.buttonkey.push(this.tmpMessage) 
        }
    },
}
</script>

<template>
    <div>
        <h1>ぼたんたん</h1>
        <h2>これは一個ずつ増えるボタン</h2>
        <v-btn v-for="buttonkey in buttonkey" @click="add">ボタン？</v-btn>
        <br>
        <hr>
        <br>
        <div v-if="isShow">ぼたんをおすと！でる！どのボタンでも出る</div>
        <v-btn v-for="n in 22"  @click="isShow = !isShow">ボタン？</v-btn>
    </div>


</template>