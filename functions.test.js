const functions = require("./functions");

test("Add 2+2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

test("Add 2+2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// Check for TRUTHY and FALSY values

// toBeNull matches only null

// toBeUndefined matches only undefined

// toBeDefined is the oppoiste of toBeUndefined

// toBeTruthy matches anything that an if statement treats as true

// toBeFalsy matches anything that an if statement treats as false

// Falsy or Truthy 
test("should return null", () => {
    expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
    expect(functions.checkValue(0)).toBeFalsy(); // check if 0, False, undefined as falsy values
});

test("should be opposite of falsy", () => {
    expect(functions.checkValue("hi")).not.toBeFalsy(); // checks for truthy value -- NOT FALSE
});

test("should be truthy", () => {
    expect(functions.checkValue(2)).toBeTruthy(); // checks for truthy value -- IS TRUE
});

// Check object

test("user should be Armand Lluka", () => {
    expect(functions.createUser()).toEqual({ // toEqual for reference types (Arrays & Objects)
        firstName: "Armand",
        lastName: "Lluka"
    }); 
});

// Less than or greater

test("should be under 3241", () => {
    const value1 = 2000;
    const value2 = 1000;
    expect(value1 + value2).toBeLessThan(3241); // toBeLessThanOrEqual for a matching value also works
});

// Regex

test("There is no I in team", () => {
    expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in username", () => {
    usernames = ["Armand", "John", "Robert", "Karen", "Admin"];
    expect(usernames).toContain("Admin");
});


// Testing Async Data
// Promises
test("user fetched name should be Leanne Graham", () => {
    expect.assertions(1); // Verfies number of assertions are called, used for async code, to ensure assertions in promise/callback get called
    return functions
        .fetchUser() // Async code has to be returned in test to ensure the requiste data is there to be worked on
        .then(data => {
            expect(data.name).toEqual("Leanne Graham");
        });
});

// Async - Await

test("user fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
});
