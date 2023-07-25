<script>
export default{
    data() {
        return{
            result: 0
        }
    }, 
    methods: {
        gacha(){
            this.result = Math.random()
            console.log(this.result)
        }
    }
}
</script>

<template>
    <div>がちゃをおくばしょ</div>
    <v-btn @click="gacha">ガチャを引く！</v-btn>
</template>