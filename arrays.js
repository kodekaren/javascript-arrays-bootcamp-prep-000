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
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString) {
  chocolateBars.unshift("foo")
  return chocolateBars
}

function accessElementInArray(chocolateBars,index) {
console.log(chocolateBars[3])
}

function removeElementFromEndOfArray(chocolateBars, candyString) {
  chocolatebars.shift()
  chocolatebars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars,candyString) {
chocolateBars.slice(3)
chocolatebars
}
