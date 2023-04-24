<template>
    <div id="lottie-animate"></div>
</template>
<script>
import lottie from "lottie-web";

const jsonList = ['/doc/curling.json', '/doc/ice-ball.json', '/doc/skim-2.json', '/doc/skiming.json', '/doc/swim.json'];

const jsonPath = jsonList[Math.floor(Math.random()*5)];

export default {
    mounted() {
        lottie.loadAnimation({
            container: document.getElementById("lottie-animate"),
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: jsonPath,
        });
    }
}
</script>
<style>
#lottie-animate {
    height: 200px;
}
</style>