<template>
  <div style="position: relative">
    <div id="svgContainer"></div>
  </div>
</template>

<script>
import lottie from "lottie-web";
import Anim from "@/assets/test.json";

export default {
  name: "waking-man",
  mounted() {
    const anlottie = lottie.loadAnimation({
      // the dom element that will contain the animation
      container: document.getElementById("svgContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Anim, // the path to the animation json
    });

    anlottie.play();
  },
};
</script>

<style>
#svgContainer {
  width: 400px;
  height: 400px;
}
</style>
