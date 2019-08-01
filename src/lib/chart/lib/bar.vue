<template>
  <!-- <div style="width:100%;height:100%;"> -->
  <svg id="bar" width="900" height="600" />
  <!-- </div> -->
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'BarChart',
  props: {
    dataset: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.into()
  },
  methods: {
    into() {
      const marge = { top: 30, bottom: 30, left: 30, right: 30 }
      const svg = d3.select('#bar') // 得到SVG画布
      const width = svg.attr('width') // 得到画布的宽
      const height = svg.attr('height') // 得到画布的长
      const g = svg
        .append('g')
        .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')

      const dataset = this.dataset

      const xScale = d3
        .scaleBand()
        .domain(d3.range(dataset.length))
        .rangeRound([0, width - marge.left - marge.right])
      const xAxis = d3.axisBottom(xScale)

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([height - marge.top - marge.bottom, 0])
      const yAxis = d3.axisLeft(yScale)

      g.append('g')
        .attr(
          'transform',
          'translate(' + 0 + ',' + (height - marge.top - marge.bottom) + ')'
        )
        .call(xAxis)
      g.append('g')
        .attr('transform', 'translate(0,0)')
        .call(yAxis)

      // 绘制矩形和文字
      const gs = g
        .selectAll('.rect')
        .data(dataset)
        .enter()
        .append('g')

      // 绘制矩形
      const rectPadding = 20 // 矩形之间的间隙
      gs.append('rect')
        .attr('x', function(d, i) {
          return xScale(i) + rectPadding / 2
        })
        .attr('y', function(d) {
          const min = yScale.domain()[0]
          return yScale(min)
        })
        .attr('width', function() {
          return xScale.step() - rectPadding
        })
        .attr('height', function(d) {
          return 0
        })
        .attr('fill', 'blue')
        .transition()
        .duration(2000)
        .delay(function(d, i) {
          return i * 400
        })
        // .ease(d3.easeElasticInOut)
        .attr('y', function(d) {
          return yScale(d)
        })
        .attr('height', function(d) {
          return height - marge.top - marge.bottom - yScale(d)
        })

      // 绘制文字
      gs.append('text')
        .attr('x', function(d, i) {
          return xScale(i) + rectPadding / 2
        })
        .attr('y', function(d) {
          const min = yScale.domain()[0]
          return yScale(min)
        })
        .attr('dx', function() {
          (xScale.step() - rectPadding) / 2
        })
        .attr('dy', 20)
        .text(function(d) {
          return d
        })
        .transition()
        .duration(2000)
        .delay(function(d, i) {
          return i * 400
        })
        // .ease(d3.easeElasticInOut)
        .attr('y', function(d) {
          return yScale(d)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

