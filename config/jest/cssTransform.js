module.exports = {
  process() {
    return 'module.export = {};'
  },
  getCacheKey() {
    return 'cssTransform'
  }
}
