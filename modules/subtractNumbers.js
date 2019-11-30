const subtract = require('../modules/subtract')

const subtractOne = (num) => {
  return subtract(num, 1)
}
const subtractFive = (num) => {
  return subtract(num, 5)
}
const subtractTen = (num) => {
  return subtract(num, 10)
}
module.exports = { subtractOne, subtractFive, subtractTen }