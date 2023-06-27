<script>
export default{
    data() {
        return {
        inu: {}
        }
    },
    methods: {
        async dog() {
            this.inu = await (await fetch("https://dog.ceo/api/breeds/image/random ")).json();
    }
}
}
</script>
<template>
    <v-btn @click="dog">いぬ</v-btn><br>
    <img :src="inu.message" />
    <p>画像URL:{{ inu.message }}</p>

</template>