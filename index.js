// haRegex should match to the word Hazzah only when it has four or more letter z's

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);
console.log(result)