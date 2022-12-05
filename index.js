function px(pixels) {
  return `${pixels/16}rem`
}
// Make sure we support legacy and non legacy import/exports
module.exports = px
module.exports.px = px
