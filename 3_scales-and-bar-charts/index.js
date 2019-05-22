import * as d3 from 'd3'

//? CREATE THE MAIN SVG CONTAINER ELEMENT
const svgWidth = 600
const svgHeight = 600

const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .style('border', '1px solid black')

//? DEFINE MARGINS AND DIMENSIONS
const margin = { top: 20, right: 20, bottom: 100, left: 100 }
const graphWidth = svgWidth - margin.left - margin.right
const graphHeight = svgHeight - margin.top - margin.bottom

//? CREATE THE 'GRAPH' GROUP
const graph = svg
  .append('g')
  .attr('width', graphWidth)
  .attr('height', graphHeight)
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

//? FETCH DATA FILE, RETURN PROMISE, PROCESS DATA
d3.json('./menu-data.json').then(data => {
  // Get the max value of all 'order' properties in the data array
  const ordersMax = d3.max(data, d => d.orders)

  //* Create a LINEAR scale function for the y-direction (height)
  const yScale = d3
    .scaleLinear()
    .domain([0, ordersMax]) // use the 'ordersMax' value
    .range([0, graphHeight])

  //* Create a BAND scale function for the x-direction (num of bars)
  const xScale = d3
    .scaleBand()
    .domain(data.map(item => item.name)) // provides quantity and a prop name
    .range([0, graphWidth])
    .paddingInner(0.2)
  // .paddingOuter(0.2)

  // join the 'data' to 'rects'
  const rects = graph.selectAll('rect').data(data)

  // add properties to any 'rect' elements already in DOM
  rects
    .attr('width', xScale.bandwidth)
    .attr('height', d => yScale(d.orders))
    .attr('x', d => xScale(d.name))
    .style('fill', 'orange')

  // append the 'enter' selection to the DOM with 'rect' elements
  rects
    .enter()
    .append('rect')
    .attr('width', xScale.bandwidth)
    .attr('height', d => yScale(d.orders))
    .attr('x', d => xScale(d.name))
    .style('fill', 'orange')
})
