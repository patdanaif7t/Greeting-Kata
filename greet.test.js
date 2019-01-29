const greet = require('./greet');

test('Write a method greet(name)',() => {
    expect(greet("Bob"));
})

test('when name is "Bob", the method should return a string "Hello, Bob.".',() => {
    expect(greet("Bob")).toBe("Hello, Bob.");
})

test('when name is "First", the method should return a string "Hello, Bob.".',() => {
    expect(greet("First")).toBe("Hello, First.");
})

test('when name is null, then the method should return the string "Hello, my friend."',() => {
    expect(greet(null)).toBe("Hello, my friend.");
})

test('when name is "JERRY" then the method should return the string "HELLO JERRY!"',() => {
    expect(greet("JERRY")).toBe("HELLO JERRY!");
})

test('when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."',() => {
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
})

test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."',() => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
})

test('when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"',() => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
})

test('when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne.".',() => {
    expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
})