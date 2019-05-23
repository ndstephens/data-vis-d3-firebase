/* eslint-disable */
//* UPDATE PATTERN EXAMPLE - TEMPLATE
//* NOT ACTUALLY USING THIS CODE

const update = data => {
  //? 1. Update scales (domains) if they rely on our data
  yScale.domain([0, d3.max(data, d => d.orders)])

  //? 2. Join updated data to elements
  const rects = graph.selectAll('rect').data(data)

  //? 3. Remove unwanted (if any) shapes currently in the DOM using the 'exit' selection
  rects.exit().remove()

  //? 4. Update current shapes in the DOM
  rects.attr(...etc)

  //? 5. Append the 'enter' selection to the DOM
  rects
    .enter()
    .append('rect')
    .attr(...etc)
}
