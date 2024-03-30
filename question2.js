// Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.

function matchRegex(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
}


console.log(matchRegex("hello", "hello world")); // true
console.log(matchRegex("world", "hello world")); // true
console.log(matchRegex("\\d+", "123"));         // true (Matches one or more digits)
console.log(matchRegex("\\d+", "abc"));         // false (No digits)
console.log(matchRegex("^[a-zA-Z]+$", "Hello")); // true (Only letters)
console.log(matchRegex("^[a-zA-Z]+$", "Hello123")); // false (Contains digits)
