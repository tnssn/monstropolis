<script>
export default{
    data(){
        return{
            key:[1]
        }
    },
    methods: {
        add(){
        this.key.push(this.tmpMessage) 
        },
    },
}
</script>

<template>
    <div>
        <h1>ぼたんたん</h1>
        <h2>これは一個ずつ増えるボタン</h2>
        <v-btn v-for="key in key" @click="add">ボタン？</v-btn>
        <br>
        <hr>
        <br>
    </div>


</template>