import * as d3 from 'd3'
import db from './firebase'

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

//? Arc generator, use data after it's been processed by the 'pie' function. Returns an SVG path string
const arcPath = d3
  .arc()
  .outerRadius(dims.radius)
  .innerRadius(dims.radius / 2)

//? Create an Ordinal Scale
const color = d3.scaleOrdinal(d3.schemeSet3)

//

//* ========  UPDATE FUNCTION  ============
const update = data => {
  // Update color scale domain
  color.domain(data.map(item => item.name))

  // Join enhanced (pie) data to path elements
  const paths = graph.selectAll('path').data(pie(data))

  paths
    .enter()
    .append('path')
    .attr('class', 'arc')
    .attr('d', arcPath)
    .attr('stroke', '#fff')
    .attr('stroke-width', 3)
    .attr('fill', d => color(d.data.name))
}

//? DATA ARRAY
let data = []

//? Connect to Firestore DB
db.collection('expenses').onSnapshot(res => {
  res.docChanges().forEach(change => {
    const doc = { ...change.doc.data(), id: change.doc.id }

    switch (change.type) {
      case 'added':
        data.push(doc)
        break
      case 'modified':
        // eslint-disable-next-line no-case-declarations
        const index = data.findIndex(item => item.id === doc.id)
        if (index > -1) data[index] = doc
        break
      case 'removed':
        data = data.filter(item => item.id !== doc.id)
        break
      default:
        break
    }
  })

  update(data)
})
