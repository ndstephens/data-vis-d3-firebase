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

//? This 'pie' function analyzes the 'cost' property in our data and for each piece of data returns an array of objects each containing the original data object, the index, the startAngle, and the endAngle
const pie = d3
  .pie()
  .sort(null)
  .value(d => d.cost)

const angles = pie([
  { name: 'rent', cost: 500 },
  { name: 'bills', cost: 300 },
  { name: 'gaming', cost: 200 },
])

const arcPath = d3
  .arc()
  .outerRadius(dims.radius)
  .innerRadius(dims.radius / 2)

console.log(arcPath(angles[0]))
