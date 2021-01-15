// export const isPromise = o => isObject(o) && typeof o.then === 'function' && typeof o.catch === 'function'
// export const isObject = o => typeof o === 'object' && o != null
// export const isArray = arr => Array.isArray(arr)
const isSomething = type => (o) => Object.prototype.toString.call(o) === `[object ${type}]`
const isNum = isSomething('Number')
const isBool = isSomething('Boolean')
let flag = 3
let tt = true
console.log(isNum(flag))
console.log(isBool(tt));