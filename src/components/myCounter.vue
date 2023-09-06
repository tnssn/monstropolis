<script>
export default{
    data(){
        return{
            mycount:0
        }
    },
    methods: {
        myCountUp() {
            this.mycount++
        }
    }
}
</script>

<template>
    <v-container>
        カウント数:{{ mycount }}
        <v-spacer></v-spacer>
        <v-btn @click="myCountUp">ボタン</v-btn>
    </v-container>
</template>