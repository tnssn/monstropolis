<script>
import myButton from '../components/myButton.vue';

export default{
    components: {
        myButton
    }
}
</script>
<template>
    <div class="main_grid">
        <div class="header">
            <h1>つなし！とっておきのつなしの情報！</h1>
        </div>
        <div class="main">
            内容を置く場所<br>
            <myButton txt="ぼたんの名前が変えられる" /><br>
            <myButton txt="つまり2個目はこう" /><br>
            <myButton txt="3つ目だってつくれる" /><br>
            <h2>竹内</h2>
            <div>
                <p>14歳の美少年（公称）。形而上げんきなハムスター。</p>
                <p>芸術学部情報デザインコース卒。</p>
                <p>最近はwebフロントエンドに興味を持ってVueを勉強したりなどしている。</p>
            </div>

            Fedibird：<a href="https://fedibird.com/web/accounts/110585621066628924/about">@tnssn@fedibird.com</a><br>

            
        </div>
        <div class="footer">
            サイトの下
        </div>
    </div>
</template>
<style scoped>
.main_grid{
    max-width: 800px;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 4em 1fr 2em;
    color: #512c0e;
    background-color: whitesmoke;
}
.header {
    border-bottom:1rem solid #5383a5;
}


</style>