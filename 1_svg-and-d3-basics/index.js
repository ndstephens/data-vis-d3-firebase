import * as d3 from 'd3'

const canvas = d3.select('.canvas')

const svg = canvas.append('svg')

// append shapes to SVG container
svg.append('rect')
svg.append('circle')
svg.append('line')
