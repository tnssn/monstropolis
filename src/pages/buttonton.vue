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
        <button v-for="key in key" @click="add">ボタン？</button>
        <br>
        <hr>
        <br>
    </div>


</template>