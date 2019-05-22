import * as d3 from 'd3'

const canvas = d3.select('.canvas')

const svg = canvas
  .append('svg')
  .attr('width', 600)
  .attr('height', 600)

//* Create a GROUP ('g' is the <g> element)
const group = svg.append('g').attr('transform', 'translate(50, 100)')

//* Append SHAPES to the group element
group
  .append('rect')
  .attr('x', 20)
  .attr('y', 20)
  .attr('width', 200)
  .attr('height', 100)
  .style('fill', 'blue')

group
  .append('circle')
  .attr('r', 50)
  .attr('cx', 300)
  .attr('cy', 70)
  .style('fill', 'pink')

group
  .append('line')
  .attr('x1', 370)
  .attr('y1', 20)
  .attr('x2', 400)
  .attr('y2', 120)
  .style('stroke', 'grey')
  .style('stroke-width', 3)

//* Append TEXT
svg
  .append('text')
  .attr('x', 20)
  .attr('y', 200)
  .text('Hello World')
  .style('fill', 'grey')
  .style('font-size', '3rem')
