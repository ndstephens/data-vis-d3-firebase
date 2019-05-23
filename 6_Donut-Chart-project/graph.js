import * as d3 from 'd3'

const dims = { height: 300, width: 300, radius: 150 }
const center = { x: dims.width / 2 + 5, y: dims.height / 2 + 5 }

const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', dims.width + 150)
  .attr('height', dims.height + 150)

const graph = svg
  .append('g')
  .attr('transform', `translate(${center.x}, ${center.y})`)

const pie = d3
  .pie()
  .sort(null)
  .value(d => d.cost)

const angles = pie([
  { name: 'rent', cost: 500 },
  { name: 'bills', cost: 300 },
  { name: 'gaming', cost: 200 },
])

console.log(angles)
