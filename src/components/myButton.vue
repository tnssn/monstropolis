<script>
export default{
    props: {
        txt:{
            type: String,
            default: 'myButton',
        }
    }
}
</script>
<template>
    <v-btn>
        {{ txt }}
    </v-btn>
</template>