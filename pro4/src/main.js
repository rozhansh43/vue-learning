import { createApp } from "vue";
import App from "./App.vue";
import message from "./message.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

Vue.component("app-message",message);

new Vue ({
    el:"#app",
    render : h =>(App)
})