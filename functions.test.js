const functions = require('./functions') 

test('Add 2+2 to equal 4', () =>{
    expect(functions.add(2,2)).toBe(4)
})

test('Add 2+2 to NOT equal 5', () =>{
    expect(functions.add(2,2)).not.toBe(5)
})

// Check for TRUTHY and FALSY values

// toBeNull matches only null 

// toBeUndefined matches only undefined 

// toBeDefined is the oppoiste of toBeUndefined

// toBeTruthy matches anything that an if statement treats as true 

// toBeFalsy matches anything that an if statement treats as false

test('should return null', () =>{
    expect(functions.isNull()).toBeNull()
})

test('should be falsy', () =>{
    expect(functions.checkValue(0)).toBeFalsy()
})