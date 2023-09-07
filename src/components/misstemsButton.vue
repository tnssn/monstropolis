<script>
export default{
    data(){
        return {
            misstemsStr:"みす",
            buttonStrings:["てむず　", "みすきー", "しす", "いず　"]
        }
    },
    methods: {
        addString(msg) {
            console.log('追加文字列：' + msg)
            this.misstemsStr += msg
            console.log(this.misstemsStr)
        }
    }
}
</script>
<template>
    <v-container>
        {{ misstemsStr }}
        <v-spacer></v-spacer>
        <div v-for="item in buttonStrings">
            <v-btn @click="addString(item)">{{ item }}</v-btn>
        </div>
    </v-container>
</template>