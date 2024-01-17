let str = `
010-1234-5678
test@gmail.com
https://google.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과 백두산이 마르고 닳도록
`

// []
console.log(
  str.match(/[fox]/g)
)

console.log(
  str.match(/[0-9]{1,}/g)
)

console.log(
  str.match(/[가-힣]{1,}]/g)
)

// \
console.log(
  str.match(/\w/g)
)

console.log(
  str.match(/\b/g)
)

console.log(
  str.match(/\bf\w{1,}\b/g)
)

console.log(
  str.match(/\d/g)
)

console.log(
  str.match(/\d{1,}/g)
)

console.log(
  str.match(/\s/g)
)

// 예시
const h = `  the hello  world  !  
`

console.log(
  h.replace(/\s/g, '')
)

// ()
console.log(
  str.match(/(?=)/g)
)

console.log(
  str.match(/.{1,}(?=@)/g)
)

console.log(
  str.match(/.{1,}(?<=@)/g)
)
