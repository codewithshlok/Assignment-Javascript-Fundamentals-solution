// Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// Create a function that searches for specific character classes in a given string and returns the matches. Test
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

function findCharacterClass(str, characterClass) {
    
    const patterns = {
        digits: /\d/g,
        uppercaseLetters: /[A-Z]/g,
        lowercaseLetters: /[a-z]/g,
        specialCharacters: /[^a-zA-Z0-9]/g 
    };


    const pattern = patterns[characterClass];
    return str.match(pattern);
}


const inputString = "Hello123!";

console.log("Digits:", findCharacterClass(inputString, "digits"));
console.log("Uppercase Letters:", findCharacterClass(inputString, "uppercaseLetters"));
console.log("Lowercase Letters:", findCharacterClass(inputString, "lowercaseLetters"));
console.log("Special Characters:", findCharacterClass(inputString, "specialCharacters"));
