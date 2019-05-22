import * as d3 from 'd3'

//? DATA
const data = [
  { width: 200, height: 100, fill: 'purple' },
  { width: 100, height: 60, fill: 'pink' },
  { width: 50, height: 30, fill: 'red' },
]

const svg = d3.select('svg')

const rect = svg
  .selectAll('rect')
  .data(data)
  .attr('width', (d, i, n) => d.width)
  .attr('height', d => d.height)
  .style('fill', d => d.fill)

console.log(rect)
