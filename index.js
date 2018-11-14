//dataset
const sample = [
  {
    animal: 'Chicken',
    depositedGas: '22.2'
  },
  

// margin and radius
var margin = {top: 20, right: 20, bottom: 20, left: 20},
      width= 100 - margin.right - (.5*margin.left), 
      height = 100 - margin.top - margin.bottom
      radius = width/2

// arc generator
var arc = d3.arc()
  .outerRadius(radius - 10)
  .innerRadius(0);



