var edceechen = {
  chunk: function (array, size) {
    // 将数组按size一组分成若干组
    let list = []
    let newarray = []
    let l = array.length
    let k = 0
    for (let i = 0; i < l; i++) {
      list.push(array[i])
      k++
      if (k == size) {
        newarray.push(list)
        list = []
        k = 0
      }
    } if (list.length !== 0) {
      newarray.push(list)
    }
    return newarray
  },

  compact: function (array) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        newarray.push(array[i])
      }
    } return newarray
  },
  drop: function (array, n = 1) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
      if (n == null) {
        array.splice(0, 1)
        newarray = array
      } else {
        array.splice(0, n)
        newarray = array
      } return newarray
    }
  },

  dropRight: function (array, n = 1) {
    let drarray = []
    let lrarray = []
    drarray = array.reverse()
    if (n == null) {
      drarray.splice(0, 1)
      lrarray = drarray
    } else {
      drarray.splice(0, n)
      lrarray = drarray
    } return lrarray.reverse()
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    } return array
  },

  flatten: function (array) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {

      if (Array.isArray(array[i])) {
        newarray.push(...array[i])
      } else {
        newarray.push(array[i])
      }
    } return newarray
  },

  flattenDeep: function (array) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        item = this.flattenDeep(item)
        newarray.push(...item)
      } else {
        newarray.push(item)
      }
    } return newarray
  },

  flattenDepth: function (array, depth = 1) {
    for (i = 0; i < depth; i++) {
      array = this.flatten(array)
    } return array
  },

  // fromPairs: function (pairs) {
  //   let nary = {}
  //   for (let i = 0; i < pairs.length; i++) {
  //     if (pairs(i) !== []) {
  //       nary.
  //     }
  //   }
  // }
  isArguments: function (value) {
    var r = Object.prototype.toString.call(value)
    if (r == '[object String]') {
      return ture
    } else {
      return false
    }
  },
  isArray: function (value) {
    var r = value instanceof Array
    return r
  },
  isBoolean: function (value) {
    if (value == null) {
      return false
    } return value == Boolean || value == Object
  },
  isEmpty: function (value) {
    for (let key in value) {
      return false
    }
    return true
  },
  isEqual: function (value, other) {

  },
  fromPairs: function (pairs) {
    var lry = {}
    for (var i = 0; i < pairs.length; i++) {
      lry[pairs[i][1]] = pairs[i][1]
    } return lry
  },
  // intersectionBy: function (arrays, comparator) {

  // },
  // intersection: function (arrays, comparator) {

  // },
  head: function (array) {
    return array[0]

  },
  indexOf: function (array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] = value) {
        return i
      }
    }
  },
  initial: function (array) {
    var alast = []
    for (var i = 0; i < length - 1; i++) {
      alast.push(array[i])
    }
    return alast
  },
  Intersection: function (arrays) {

  }

}
