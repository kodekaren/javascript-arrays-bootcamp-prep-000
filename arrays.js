var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, and `skittles`];
var candyString = "foo"

function addElementToBeginningOfArray(chocolateBars, candyString) {
  ["foo", ...chocolateBars]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString) {
chocolateBars.unshift("foo")
return chocolateBars
}

function addElementToEndOfArray(chocolateBars, candyString) {
  [chocolateBars, ..."foo"]
  chocolateBars = [chocolateBars, ..."foo"]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.unshift("foo")
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
