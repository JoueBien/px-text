var path = require('path');
var sassTrue = require('sass-true');
var assert = require('assert');
var sassFile = path.join(__dirname, 'text.spec.scss');
const pxDefault = require('./index.js')
const { px } = require('./index.js')
// console.log(lib)
// const { px } = lib
// SASS Tests
describe('Running SASS Test', function () {
  sassTrue.runSass({file: sassFile}, {describe, it});
});

// Node Tests
describe('Running JS Test', function () {
  describe('The function for px conversion to rem', () => {

    it(' px(16); Outputs 1rem', () => {
      assert.equal(px(16), '1rem')
    })

    it(' px(18); Outputs 1.125rem', () => {
      assert.equal(px(18), '1.125rem')
    })

    it(' px(32); Outputs 2rem', () => {
      assert.equal(px(32), '2rem')
    })
    
  })

  describe('The function for px conversion to rem when using the default export', () => {

    it(' px(16); Outputs 1rem', () => {
      assert.equal(pxDefault(16), '1rem')
    })

    it(' px(18); Outputs 1.125rem', () => {
      assert.equal(pxDefault(18), '1.125rem')
    })

    it(' px(32); Outputs 2rem', () => {
      assert.equal(pxDefault(32), '2rem')
    })
    
  })
})
