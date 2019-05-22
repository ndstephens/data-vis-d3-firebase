import * as d3 from 'd3'

const svg = d3.select('svg')

d3.json('./menu-data.json').then(data => {
  // Create a scale function for the y-direction (height)
  const yScale = d3
    .scaleLinear()
    .domain([0, 1000])
    .range([0, 500])

  // join data to rects
  const rects = svg.selectAll('rect').data(data)

  // add properties to any 'rect' elements already in DOM
  rects
    .attr('width', 50)
    .attr('height', d => yScale(d.orders))
    .attr('x', (d, i) => i * 70)
    .style('fill', 'orange')

  // append the enter selection to the DOM
  rects
    .enter()
    .append('rect')
    .attr('width', 50)
    .attr('height', d => yScale(d.orders))
    .attr('x', (d, i) => i * 70)
    .style('fill', 'orange')
})
