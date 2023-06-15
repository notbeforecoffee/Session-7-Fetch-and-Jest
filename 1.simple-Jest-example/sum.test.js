//import our function(s)

import {sum, truthyTest }from './sum'



describe('example tests', () => {

  it('should add 1 + 2 to equal 3', () => {
    //test
      const result = sum(1, 2);
    //assertion 'toBe' is the matcher
    expect(result).toBe(3)

  });

})



it('object assignment', () => {
const obj = {}
// this will fail because in javascript, while console.log('' === '') will evaluate to true, console.log({}==={}) does not
// because an object is a reference, while a primitive data type is not

// expect(obj).toBe({})

// we should instead use .toEqual({})
expect(obj).toEqual({})
})



  describe ('truthy or falsy', () => {
    it('tests truthyness', ()=> {
      const testResult = truthyTest(null)
      expect(testResult).toBeFalsy()

      //not a good idea to have more than one expect, since you will not know which one failed; the whole test will fail
      //But, we CAN technically add as many as we'd like...
      expect(testResult).not.toBeTruthy()
      expect(testResult).not.toBeNull()
    })
  })

