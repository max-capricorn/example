const curry = (fn, arr = []) => (...args) =>
  ((arg) => (fn.length === arg.length ? fn(...arg) : curry(fn, arg)))([...arr, ...args])



const curryTest = curry((a, b, c, d) => a + b + c + d)

console.log(curryTest(1, 2, 3)(4))
