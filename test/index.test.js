'use strict'

const expect = require('chai').expect
const realType = require('../')

describe('realType', function() {
  it('should output object', function() {
    const obj = { name: 'Heleth' }
    expect(realType(obj)).to.be.equal('object')
  })

  it('should output array', function() {
    const obj = ['Heleth']
    expect(realType(obj)).to.be.equal('array')
  })

  it('should output string', function() {
    const obj = 'Heleth'
    expect(realType(obj)).to.be.equal('string')
  })

  it('should output number', function() {
    const obj = 1993
    expect(realType(obj)).to.be.equal('number')
  })

  it('should output date', function() {
    const obj = new Date('2011-01-12')
    expect(realType(obj)).to.be.equal('date')
  })

  it('should output error', function() {
    const obj = new Error('2017-04-09')
    expect(realType(obj)).to.be.equal('error')
  })

  it('should output regexp', function() {
    const obj = /Heleth/
    expect(realType(obj)).to.be.equal('regexp')
  })

  it('should output function', function() {
    const obj = () => 'Heleth'
    expect(realType(obj)).to.be.equal('function')
  })
})