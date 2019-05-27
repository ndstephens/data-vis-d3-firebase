import * as d3 from 'd3'

const data = [
  { name: 'news', parent: '' },

  { name: 'tech', parent: 'news' },
  { name: 'sport', parent: 'news' },
  { name: 'music', parent: 'news' },

  { name: 'ai', parent: 'tech', amount: 7 },
  { name: 'coding', parent: 'tech', amount: 5 },
  { name: 'tablets', parent: 'tech', amount: 4 },
  { name: 'laptops', parent: 'tech', amount: 6 },
  { name: 'd3', parent: 'tech', amount: 3 },
  { name: 'gaming', parent: 'tech', amount: 3 },

  { name: 'football', parent: 'sport', amount: 6 },
  { name: 'hockey', parent: 'sport', amount: 3 },
  { name: 'baseball', parent: 'sport', amount: 5 },
  { name: 'tennis', parent: 'sport', amount: 6 },
  { name: 'f1', parent: 'sport', amount: 1 },

  { name: 'house', parent: 'music', amount: 3 },
  { name: 'rock', parent: 'music', amount: 2 },
  { name: 'punk', parent: 'music', amount: 5 },
  { name: 'jazz', parent: 'music', amount: 2 },
  { name: 'pop', parent: 'music', amount: 3 },
  { name: 'classical', parent: 'music', amount: 5 },
]

//? CREATE ROOT SVG
const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', 1060)
  .attr('height', 800)

//? CREATE A GRAPH GROUP
const graph = svg.append('g').attr('transform', 'translate(50, 50)')

//? STRATIFY FUNCTION
const stratify = d3
  .stratify()
  .id(d => d.name)
  .parentId(d => d.parent)

//? STRATIFY THE DATA ('sum' provides the 'value' prop)
const rootNode = stratify(data).sum(d => d.amount)
// console.log(rootNode)

//? BUBBLE PACK GENERATOR (gives each Node an x,y center and a radius)
const pack = d3
  .pack()
  .size([960, 700])
  .padding(5)
// console.log(pack(rootNode))

//? PUT ALL THE UPDATED DATA BACK INTO AN ARRAY
const bubbleData = pack(rootNode).descendants()
// console.log(pack(rootNode).descendants())

//

//* JOIN DATA AND ADD GROUP FOR EACH NODE
const nodes = graph
  .selectAll('g')
  .data(bubbleData)
  .enter()
  .append('g')
  .attr('transform', d => `translate(${d.x}, ${d.y})`)

nodes
  .append('circle')
  .attr('r', d => d.r)
  .attr('stroke', 'white')
  .attr('stroke-width', 2)
  .attr('fill', 'purple')
  .style('opacity', 0.3)

nodes
  .filter(node => !node.children)
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '0.3em')
  .attr('fill', 'white')
  .style('font-size', d => `${Math.max(9, d.value * 5.2)}px`)
  .text(d => d.data.name)
