import * as d3 from 'd3'
// import planetData from './public/planet-data.json'

// console.log(planetData)

const svg = d3.select('#planets')

d3.json('./planet-data.json').then(data => {
  const planets = svg.selectAll('circle').data(data)

  // add attrs to any circles that might exist in the DOM
  planets
    .attr('cy', 200)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .style('fill', d => d.fill)

  // append the enter selection to 'svg #planets' in the DOM
  planets
    .enter()
    .append('circle')
    .attr('cy', 200)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .style('fill', d => d.fill)
})
