var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, and `skittles`]
var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return chocolateBars=[candyString, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
chocolateBars.unshift(candyString)
return chocolateBars
}

function addElementToEndOfArray(chocolateBars, candyString) {
  return [...chocolateBars,candyString]
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  return chocolateBars.push(candyString)
}

function accessElementInArray(chocolateBars,index) {
return (chocolateBars[index])
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
return chocolateBars.shift(1)
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
return chocolateBars.pop()
}

function removeElementFromEndOfArray(chocolateBars) {
return chocolateBars.slice(0, chocolateBars.length -1)
}
