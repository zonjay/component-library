<template>
  <div class="container">
    <div
      v-for="(people, n) in active"
      :key="n"
      :class="{ 'display-none': !people.show }"
    >
      <div class="triangle-container" v-if="n + 1 === level">
        <div class="triangle-up"></div>
      </div>
      <img src="/assets/icn_people_active.svg" alt="" :key="n" />
    </div>
    <div>
      <img
        src="/assets/icn_people _default.svg"
        alt=""
        v-for="(people, n) in defaults"
        :key="n"
        :class="{ 'display-none': people.show }"
      />
    </div>
  </div>
</template>

<script>
import PeopleDefault from "../assets/icn_people _default.svg";
import PeopleActive from "../assets/icn_people_active.svg";

export default {
  name: "PeopleProgressing",
  props: {
    score: {
      type: [String, Number],
      default: 73,
    },
  },
  data() {
    return {
      timer: "",
      PeopleDefault,
      PeopleActive,
      currentPeople: 0,
      isOpacity: false,
      defaults: [],
      active: [],
    };
  },
  computed: {
    level() {
      return Math.floor(this.score / 10);
    },
    defaultPeople() {
      let defaults = [];
      for (let i = 0; i < 10; i++) {
        defaults.push({
          PeopleDefault,
          show: false,
        });
      }
      return defaults;
    },
    activePeople() {
      let active = [];
      for (let i = 0; i < 10; i++) {
        active.push({
          PeopleActive,
          show: false,
        });
      }
      return active;
    },
  },
  methods: {
    updateActivePeople() {
      for (let i = 0; i < this.level; i++) {
        this.timer = setTimeout(() => {
          this.active[i]["show"] = true;
          this.defaults[i]["show"] = ! this.defaults[i]["show"];
        }, 100 * i);
      }
    },
  },
  created() {
    this.active = this.activePeople;
    this.defaults = this.defaultPeople;
  },
  mounted() {
    this.updateActivePeople();
    if (process.env.NODE_ENV === 'development') {
      console.log('Hi!You are in dev env')
    }
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.triangle-container {
  display: flex;
  justify-content: flex-end;
  position: absolute;
}

.triangle-up {
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #239ee1;
  position: relative;
  top: -15px;
  transform: translateX(5px);
}

.opacity {
  opacity: 0;
}

.display-none {
  display: none;
}
</style>
