module.exports = function realType(obj) {
  const class2type = {}
  'Boolean Number String Function Array Date RegExp Object Error'.split(' ').map((e, i) => {
    class2type[`[object ${e}]`] = e.toLowerCase()
  })
  if ( obj == null ) {
    return String(obj)
  }
  return typeof obj === 'object' || typeof obj === 'function' ?
    class2type[class2type.toString.call(obj)] || 'object' :
    typeof obj
}
