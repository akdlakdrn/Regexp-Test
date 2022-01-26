let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
//=> 전체 줄을 체크하기 때문에 null 값이 뜸
console.log(str.match(/d$/g))

//=> 멀티라인을 만들기 때문에 찾을 수 있다.
console.log(str.match(/d$/gm))

console.log(str.match(/^t/g))

console.log(str.match(/^t/gmi))

console.log(str.match(/./g))

console.log(str.match(/h..p/g))

// => 띄어 쓰기 주의
console.log(str.match(/fox|dog/g))

console.log(str.match(/https?/g))

console.log(str.match(/d{2}/g))

//2개이상 3개 이하
console.log(str.match(/\w{2,3}/g))
console.log(str.match(/\w{2,3}\b/g))
console.log(str.match(/\b\w{2,3}\b/g))


console.log(str.match(/[fox]/g))
console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/[가-힣]{1,}/g))

console.log(str.match(/\w/g))
//=> 바운더리;
console.log(str.match(/\bf\w{1,}\b/g))

// 숫자 덩어리
console.log(str.match(/\d{1,}/g))


// 모든 공백 및 줄바꿈
console.log(str.match(/\s/g))

const h = `        the      hello      world        !`
console.log(h.match(/\s/g))
console.log(h.replace(/\s/g, ''))

//| (?=)       | 앞쪽 일치(Lookahead)
//| (?<=)      | 뒤쪽 일치(Lookbehind)
console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/.{1,}(?<=@)/g))
console.log(str.match(/(?<=@).{1,}/g))
