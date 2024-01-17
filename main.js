const str = `
010-1234-5678
test@gmail.com
https://google.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// 생성자 방식
// const regexp = new RegExp('the', 'gi')

// 리터럴 방식
const regexp = /the/gi

console.log(str.match(regexp))
