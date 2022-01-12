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
    let DRarray = []
    let Lrarray = []
    DRarray = array.reverse()
    if (n == null) {
      DRarray.splice(0, 1)
      Lrarray = DRarray
    } else {
      DRarray.splice(0, n)
      Lrarray = DRarray
    } return Lrarray.reverse()
  },

  fill: function (array, value, start = 0, end = array.length) {

  }
}
