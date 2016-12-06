export function es5() {
  let o = {
    list: [1, 2, 3, 4, 5],
    result: 0,
    sum: function() {
      let that = this
      this.list.forEach(function(val) {
        that.result += val
      })
    }
  }

  o.sum()

  return o
}

export function es6() {
  let o = {
    list: [1, 2, 3, 4, 5],
    result: 0,
    sum () {
      let that = this
      this.list.forEach(val => {
        that.result += val
      })
    }
  }
  o.sum()
  return o
}
