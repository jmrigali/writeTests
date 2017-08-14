function countVowels (str) {
  let arr = str.split('');
  var result = arr.filter(ele => {
    ele = ele.toLowerCase()
    return ele.match(/[aeiou]+/g)
  })
  return result.length
}




module.exports = {
  countVowels
}
