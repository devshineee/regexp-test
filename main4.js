let str = `
010-1234-5678
test@gmail.com
https://google.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/d$/g)
)

console.log(
  str.match(/^t/g)
)

console.log(
  str.match(/./g)
)

console.log(
  // str.match(/http/g)
  str.match(/h..p/g)
)

console.log(
  str.match(/fox|dog/)
)

console.log(
  str.match(/https?/g)
)

console.log(
  str.match(/d{2}/)
)

console.log(
  str.match(/d{2,}/)
)

console.log(
  str.match(/\b\w{2,3}\b/g)
)
