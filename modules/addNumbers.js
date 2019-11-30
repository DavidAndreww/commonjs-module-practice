const add = require('../modules/add')

const addOne = (num) => {
  return add(num, 1)
}
const addTen = (num) => {
  return add(num,10);
}
const addFive = (num) => {
  return add(num, 5);
}
module.exports = { addOne, addTen, addFive }