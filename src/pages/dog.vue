<script>
export default{
    data() {
        return {
        inu: {}
        }
    },
    methods: {
        async dog() {
            const res = await fetch("https://dog.ceo/api/breeds/image/random", (res) => res.data())
            this.inu = await res.json()
    }
}
}
</script>
<template>
    <button @click="dog">いぬ</button>
    いぬ？？？？
    <img :src="inu.message" />
    {{ inu.message }}

</template>