<template>
  <WalkingMan />
  <PeopleProgressing :score="80" />
</template>

<script>
import WalkingMan from "./components/WalkingMan";
import PeopleProgressing from "./components/PeopleProgressing";

export default {
  name: "App",
  components: {
    WalkingMan,
    PeopleProgressing
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
