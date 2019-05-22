import * as d3 from 'd3'

const svg = d3.select('svg')
svg.style('border', '1px solid black')

d3.json('./menu-data.json').then(data => {
  // Create a LINEAR scale function for the y-direction (height)
  const yScale = d3
    .scaleLinear()
    .domain([0, 1000])
    .range([0, 500])

  // Create a BAND scale function for the x-direction (num of bars)
  const xScale = d3
    .scaleBand()
    .domain(data.map(item => item.name))
    .range([0, 600])
    .paddingInner(0.2)
    .paddingOuter(0.2)

  // join data to rects
  const rects = svg.selectAll('rect').data(data)

  // add properties to any 'rect' elements already in DOM
  rects
    .attr('width', xScale.bandwidth)
    .attr('height', d => yScale(d.orders))
    .attr('x', d => xScale(d.name))
    .style('fill', 'orange')

  // append the enter selection to the DOM
  rects
    .enter()
    .append('rect')
    .attr('width', xScale.bandwidth)
    .attr('height', d => yScale(d.orders))
    .attr('x', d => xScale(d.name))
    .style('fill', 'orange')
})
