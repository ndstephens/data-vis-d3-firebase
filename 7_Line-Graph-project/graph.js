/* eslint-disable no-case-declarations */
import * as d3 from 'd3'
import db from './firebase'

//* CREATE UI SVG, MARGIN, and GRAPH SETTINGS
const svgDims = { width: 560, height: 400 }
const margin = { top: 40, right: 20, bottom: 50, left: 100 }
const graphDims = {
  width: svgDims.width - margin.left - margin.right,
  height: svgDims.height - margin.top - margin.bottom,
}

//* CREATE OUR SVG and GRAPH / CHART GROUP
const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', svgDims.width)
  .attr('height', svgDims.height)

const graph = svg
  .append('g')
  .attr('width', graphDims.width)
  .attr('height', graphDims.height)
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

//? UPDATE FUNCTION
const update = data => {
  console.log(data)
}

//? Declare a data array
let data = []

//? WATCH DATABASE FOR CHANGES IN REAL-TIME
db.collection('activities').onSnapshot(res => {
  res.docChanges().forEach(change => {
    // console.log(change)
    const doc = { ...change.doc.data(), id: change.doc.id }

    switch (change.type) {
      case 'added':
        data.push(doc)
        break
      case 'modified':
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

  // Call update function
  update(data)
})
