import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Highchart from "highcharts/highcharts";
// import HighchartsVue from "highcharts-vue";
// import stockInit from "highcharts/modules/stock";

// stockInit(Highchart);
// Vue.use(HighchartsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
