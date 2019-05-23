/* eslint-disable import/prefer-default-export */
import * as d3 from 'd3'

export const widthTween = endingVal => {
  // Define interpolation
  // d3.interpolate returns a function which we're calling 'i'
  const i = d3.interpolate(0, endingVal())

  // Return a function which takes in a time ticker 't' (between 0 and 1)
  return function(t) {
    // Return the value from passing the ticker into the interpolation
    return i(t)
  }
}
