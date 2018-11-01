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

