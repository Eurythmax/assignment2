export function es5(cb) {
  setTimeout(function() {
    cb(null, 10)
  }, 1)
}

export function es6(cb) {
  return new Promise((resolve, reject) => {
    let val = 10
    resolve(null, val)
  })
}
