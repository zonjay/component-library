import { createApp } from "vue";
import App from "./App.vue";
// import laoyanUi from '../packages';
import laoyanUi from '../lib/index.umd.min.js';
import '../lib/index.css'

createApp(App).use(laoyanUi).mount("#app");
