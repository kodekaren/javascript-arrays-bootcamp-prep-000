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
  return chocolateBars = [chocolateBars, ...candyString]
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.unshift(candyString)
  return chocolateBars
}

function accessElementInArray(chocolateBars,index) {
console.log(chocolateBars[index])
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
return chocolateBars.slice(0, chocolateBars.length -1)

}
