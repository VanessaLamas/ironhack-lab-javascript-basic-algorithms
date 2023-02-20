// Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1 = "Vanessa";
console.log("The driver's name is", hacker1);
let hacker2 = "Luis";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
hacker1 = "john";
hacker2 = "Guillermo";
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops 1
function addSpace(namingSpace) {
    let result = '';
    for (let i = 0; i < hacker1.length; i++) {
        result += hacker1.toUpperCase()[i] + ' ';
    }
    return result.trimEnd();
}
console.log(addSpace(hacker1));

// Iteration 3: Loops 2
let hacker1Reverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    hacker1Reverse += hacker1[i];
}
console.log(hacker1Reverse);

// Iteration 3: Loops 3
function Printlexiographically(phrase, arr) {
    arr.sort();
    for (let i = 0; i < phrase; i++) {
        console.log(arr[i]);
    }
}
let arr = ["The driver's name goes first.", "Yo, the navigator goes first definitely.", "What?! You both have the same name?"];
let phrase = arr.length;
Printlexiographically(phrase, arr);



