<template>
  <div id="barChart" class="barChart">
    <barChart :dataset="dataset" />
  </div>
</template>

<script>
// import * as d3 from 'd3'
import barChart from '@/lib/chart/lib/bar.vue'

export default {
  // name:"Chart",
  components: {
    barChart
  },
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

