// 手写call

Function.prototype.myCall = function (context = window, ...arg) {
  if (this === Function.prototype) {
    return undefined;
  }

  context = context || window;
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...arg)
  delete context[fn]
  return result;
}

// 手写apply

Function.prototype.myApply = function (context = window, ...args) {
  if (this === Function.prototype) return undefined;

  context = context || window
  const fn = Symbol()
  context[fn] = this
  let result
  if (Array.isArray(args)) result = context[fn](args)
  else result = context[fn]()
  delete context[fn]
  return result
}

// 手写bind

Function.prototype.myBind = function (context, arg) {

}