// Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
// from a given string


function extractUsingGroups(pattern, str) {
    
    const regex = new RegExp(pattern);

    
    const match = regex.exec(str);

    if (match) {
        
        const extractedParts = match.slice(1); 
        return extractedParts;
    } else {
        return null;
    }
}


const dateString = "Today is 2024-03-30";


const pattern = /(\d{4})-(\d{2})-(\d{2})/;
const extractedDate = extractUsingGroups(pattern, dateString);

if (extractedDate) {
    const [year, month, day] = extractedDate;
    console.log("Year:", year);
    console.log("Month:", month);
    console.log("Day:", day);
} else {
    console.log("No date found in the input string.");
}
