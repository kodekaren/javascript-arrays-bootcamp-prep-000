var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]
var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candyString) {
  return chocolateBars=[candyString, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
chocolateBars.unshift(candyString)
return chocolateBars
}

function addElementToEndOfArray(chocolateBars, candyString) {
  return [... chocolateBars,candyString]
}
