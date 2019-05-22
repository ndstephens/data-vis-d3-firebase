import * as d3 from 'd3'

//? DATA
const data = [{ width: 200, height: 100, fill: 'purple' }]

const svg = d3.select('svg')

const rect = svg
  .select('rect')
  .data(data)
  .attr('width', d => d.width)
  .attr('height', d => d.height)
  .style('fill', d => d.fill)

console.log({ rect })
