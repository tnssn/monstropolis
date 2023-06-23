<template>
    <!-- <div>ぼたん</div> -->
    <v-btn @click="fuga = !fuga" :disabled="fuga">ぼたん</v-btn>
</template>

<script>
export default {
    data(){
        return{
        fuga:false
        }
    },
}
</script>