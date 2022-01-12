var edceechen = {
  chunk: function (array, size) {
    var l = array.length
    var list = []
    var newarray = []
    var k = 0
    for (var i = 0; i < l; i++) {
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
  }
}
