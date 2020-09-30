
exports.min = function min (array) { 
  if (!array ||!array.length) 
  return 0
  let minElement = Math.min.apply(Math,array)
  return minElement
}

exports.max = function max (array) {
  if (!array ||!array.length) 
  return 0
  let maxElement = Math.max.apply(Math,array)
  return maxElement
}

exports.avg = function avg (array) {
  let result = 0;
  if (!array || !array.length) 
  return 0
  for (let i = 0; i < array.length; i++) {
    result += array[i]
  }
  let avgValue = result / array.length
  return avgValue
}
