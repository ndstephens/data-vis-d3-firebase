import * as d3 from 'd3'

//? DATA
const data = [
  { width: 200, height: 100, fill: 'purple' },
  { width: 100, height: 60, fill: 'pink' },
  { width: 50, height: 30, fill: 'red' },
]

const svg = d3.select('svg')

//* Select all <rect> elements hard-coded in the DOM
//* Join the data to that selection of rect(s)
const rects = svg.selectAll('rect').data(data)

//* Add attributes (using info from 'data') to rect elements already in DOM
rects
  .attr('width', (d, i, n) => d.width)
  .attr('height', d => d.height)
  .style('fill', d => d.fill)

//* Create additional rect elements for remaining data not currently associated with an element in the DOM (append the 'enter' selection to the DOM)
rects
  .enter()
  .append('rect')
  .attr('width', (d, i, n) => d.width)
  .attr('height', d => d.height)
  .style('fill', d => d.fill)
