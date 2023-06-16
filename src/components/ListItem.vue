<template>
   <li>{{ msg }}  - <button>btn</button></li>
</template>


<script> 
export default {
    //  props（プロパティｓ）
  props: {
     msg: {
      type: String,
      default: "Hi"
    }
  }
}


</script>