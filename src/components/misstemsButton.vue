<script>
export default{
    data(){
        return {
            misstemsStr:"みす",
            buttonStrings:["てむず", "みすきー", "しす"]
        }
    },
    methods: {
        addStr(){
            this.misstemsStr += 'てむず'
            console.log(this.misstemsStr)
        }
    }
}
</script>
<template>
    <v-container>
        {{ misstemsStr }}
        <v-spacer></v-spacer>
        <v-btn @click="addStr">てむず</v-btn>
        
        <!-- 作りかけ

        <div v-for="item in buttonStrings">
            <v-btn @click="misstemsStr(item)">{{ item }}</v-btn>
        </div>
    
        -->
    </v-container>
</template>