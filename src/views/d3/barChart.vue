<template>
  <div id="barChart" class="barChart">
    <fanchart :dataset="dataset" :width="900" :height="600"/>
  </div>
</template>

<script>
// import * as d3 from 'd3'
// import barChart from '@/lib/chart/lib/barChart.vue'
import Vue from 'vue'
import fanchart from 'fanchart'
Vue.use(fanchart)
export default {
  name:"chart",
  data() {
    return {
      dataset: [10, 20, 30, 23, 13, 40, 27, 35, 20]
    }
  },
  mounted() {
    this.into()
  },
  methods: {
    into() {}
  }
}
</script>

<style lang="scss" scoped>
.barChart {
  width: 900px;
  height: 600px;
}
</style>

