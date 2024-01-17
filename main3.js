let str = `
010-1234-5678
test@gmail.com
https://google.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = /the/g
const regexp = /the/gi
console.log(str.match(regexp))

console.log(str.match(/the/gi))

console.log(str.match(/./gi))

console.log(str.match(/\./gi))

console.log(str.match(/\.$/gi))

console.log(str.match(/\.$/gim))
