// const str = `
let str = `
010-1234-5678
test@gmail.com
https://google.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

const regexp = /fox/gi
// console.log(regexp.test(str)) // true
console.log(str.replace(regexp, 'AAA'))
console.log(str)
