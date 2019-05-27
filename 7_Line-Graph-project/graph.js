/* eslint-disable no-case-declarations */
import * as d3 from 'd3'
import db from './firebase'

//? UPDATE FUNCTION
const update = data => {
  console.log(data)
}

// Declare a data array
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
