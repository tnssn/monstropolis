<script>
import buttonCom from '@/components/butonCom.vue';
export default{
    components: {
        buttonCom
    },
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
        <br>
        <hr>
        <br>
        <h2>個別に押せるボタンを実装してみる</h2>
        <buttonCom v-for="n in 22"></buttonCom>
    </div>


</template>