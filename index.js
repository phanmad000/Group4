// javascript

//dataset
//Source: GLEAM within FAO reports
const chickenGraph = [
  {
    //nitrous oxide
    manureN2O: 22.2,
    plantResidueN2O: 8.9,
    //kg of egg or meat per kg of feed
    feedCO2: 25.5,
    //LUC = land use change
    LUCsoybeanCO2: 18.1,
    //methane
    manure_CH4: 4.3,
    manure_N2O: 7,
    //direct energy from on-farm heating, ventilation but not feed
    directEnergyCO2: 6.3,
    postfarmCO2: 6.4,
    other: 1.3
  }
]

const pigGraph = [
  {
    manureN2O: 7.9,
    plantResidueN2O: 9.1,
    feedCH4: 3.5,
    feedCO2: 27.1,
    LUCsoybean: 12.7,
    entericCH4: 3.1,
    manure_CH4: 19.2,
    manure_N2O: 8.2,
    indirectEnergyCO2: .6,
    //direct energy from on-farm heating, ventilation but not feed
    directEnergyCO2: 2.9,
    postfarmCO2: 5.7,
  }
]

const cowGraph = [
  {
    manureN2O: 17.55,
    plantResidueN2O: 7.4,
    feedCO2: 10.45,
    LUCsoybeanCO2: .7,
    LUCpastureCO2: 7.4,
    entericCH4: 44.55,
    manure_CH4: 2.6,
    manure_N2O: 4.5,
    directIndirectEnergyCO2: 1.55,
    postfarmCO2: 3.3,
  }
]

// margin and radius
var margin = {top: 20, right: 20, bottom: 20, left: 20},
      width= 100 - margin.right - (.5*margin.left),
      height = 100 - margin.top - margin.bottom
      radius = width/2

// arc generator
var arc = d3.arc()
  .outerRadius(radius - 10)
  .innerRadius(0);



