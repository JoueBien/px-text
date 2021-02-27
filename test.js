var path = require('path');
var sassTrue = require('sass-true');
var assert = require('assert');
var sassFile = path.join(__dirname, 'text.spec.scss');
const { px } = require('./index.js')

// SASS Tests
describe('Running SASS Test', function () {
  sassTrue.runSass({file: sassFile}, describe, it);
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
})
