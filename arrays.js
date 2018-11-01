var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, and `skittles`]
var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candyString) {
  [candyString, ...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
chocolateBars.unshift(candyString)
return chocolateBars
}

function addElementToEndOfArray(chocolateBars, candyString) {
  [chocolateBars, ...candyString
  chocolateBars = [chocolateBars, ...candyString]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString)
  return chocolateBars
}

function accessElementInArray(chocolateBars,index) {
console.log(chocolateBars[3])
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
chocolateBars.shift(1)
chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(1)
  chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars.slice(0, chocolateBars.length(-1))
  chocolateBars
}
