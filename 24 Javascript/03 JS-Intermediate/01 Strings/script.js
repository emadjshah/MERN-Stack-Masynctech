//---------
//==SINGLE, DOUBLE AND CONSTRUCTOR===
//----------

//Single quotes
const singleQuoteString = "This is a string using single quotes";
//  console.log(singleQuoteString);

//double quotes
const doubleQuoteString = "This is a string using double quotes";
//  console.log(doubleQuoteString);


//Using the string constructor
const stringConstructor = new String(
  "This is a string using the string constructor quotes"
);
//  console.log(stringConstructor);

//--------- 
//==TEMPLATE LITERALS===
//----------

//Basic usage
const greeting = `Hello, world`;
//  console.log(greeting);


//String interploation
const username = "Emma";
const welcomeMessage = `Hello, ${username}! welcome to our website`;
//  console.log(welcomeMessage);


//Multiline-string
const poem = `
Roses are red,
violets are blue,
Sugar is sweet,
And so are you?
`;
//  console.log(poem);


//Expression evaluation
const price = 10;
const tax = 0.05;
const total = `The price: ${price * (1 + tax)}`;
//  console.log(total);


//Escaping backtics
const stringWithBacktick = `He's a backtick \``;
//  console.log(stringWithBacktick);

//---------
//==ESCAPING CHARACTERS IN STRINGS===
//----------

//Using backslahes before escaping
const quote = 'He said, "Hello, world"'
//  console.log(quote);

//NewLines and Tabs

const multiline = "Line 1\nLine 2\tTabbed"
//  console.log(multiline);

//Escaping backslashes
const filePath = "c:\\Program files\\App"
//  console.log(filePath);

//Using the Template literals
const anotherQuote = `He said, "That's awesome"`
//  console.log(anotherQuote);

//Unicode characters
const heart = "I \u2764 Javascript"
//  console.log(heart);

// Escape Sequence for a Dollar Sign and Curly Braces in Template Literals
const metaString = `The syntax for variable is \${variableName}` 
//  console.log(metaString);


//---------
//==STRING CONCATENATION===
//----------
//using the + operator
const firstname = 'Ben';
const lastname = 'Emma';
const fullname = firstname + " " + lastname;
//  console.log(fullname);

//using the .concat() method
const str1 = 'Hello';
const str2 = 'World'

const combinedStr = str1.concat(" ",str2)
//  console.log(combinedStr);

//Template literal
const fruit = 'apple';
const color = 'red';
const sentence = `The ${fruit} is  ${color}`
//  console.log(sentence);

//---------
//==toLOWER AND toUPPER CASE===
//----------

//toUpperCase()
const localCaseStr = "Hello, world";
// const result = localCaseStr.toLocaleUpperCase()

//toLowerCase()
const upperCaseStr = "HELLO, WORLD";
// const result = localCaseStr.toLocaleLowerCase()

//Mixing both methods
const mixStr = "HeLLo, WoRLD"

// const result = mixStr.toLocaleLowerCase();

// const result = mixStr.toUpperCase();

//case-insensitive comparison
const string1 = 'Javascript';
const string2 = 'javascript';

if(string1.toLowerCase() === string2.toLowerCase()){
  //console.log('The strings are equal, ignoring the case');
}

//Note on non-english characters
const accentedStr = 'áéíóú"';

// const result = accentedStr.toLocaleUpperCase()


//---------
//==STRING LENGTH===
//----------

//Find the length of a string
const myStr = 'Hello, world'
const strLength = myStr.length

//Check for empty string
const emptyStr = "";

// const result = emptyStr.length

//string validation
const username1 = 'Emma';
if(username1.length >= 6){
 // console.log('Valid username');
}else{
 // console.log('Invalid user, Must be at least 6 characters');
}

//---------
//==STRING SLICE===
//----------

//Basic use
const greeting1 = 'Hello, world';
const extractedWord = greeting1.slice(7, 90)

//omitting the end index
const text = 'Hello, world'
// const result = text.slice(7, 9)

//using negative indices
const phrase = 'Hello, world';
const endingText = phrase.slice(-6);


//slicing between negative indices
const sentence2 = 'Hello, world';
const result3 = sentence.slice(-6,-1)

//---------
//==STRING SPLIT===
//----------

//Simple split by space
const mySentence = 'Hello, world';
const words = mySentence.split(',')

//Limit number od split
const fruits = "apple,banana,pear";
const limitedFruits = fruits.split(',',1)

//Split by multiple characters
const complextText = "apple:banana;pear"
const mixedFruits = complextText.split(/[:;]/)

//split into characters
const word = 'Emmanuel';
const letters = word.split("")

//---------
//==STRING INDEXOF===
//----------

//Basic usage
const sentences = 'Hello,world';
const index = sentences.indexOf('hello');

//---------
//==STRING TRIM===
//----------

//Trimming user input
const userInput = '   emma@gmail.com   ';
const emailTrimmed = userInput.trim()

//Removing Line Breaks
const stringsWithBreaks = '\n\t Hello, World';
const cleanString = stringsWithBreaks.trim()

//---------
//==STRING REPLACEMENT===
//----------

//Basic usage
const originalText = 'This is an old text.';
const updatedText = originalText.replace('Old','new');

//Replace all occurrences
const repetitiveText = 'old text with old words';
const replaceAll = repetitiveText.replace(/old/g, 'new')



//---------
//==String.lastIndexOf() ===
//----------
//Basic usage
const myText = 'apple orange, apple, banana';
const lastIndx = myText.lastIndexOf('apple')
//Specifying the from index
// const result = myText.lastIndexOf('apple',12)


//---------
//== String.includes() ===
//----------

//Basic usage
const myText2 = 'I have an apple';
// const result = myText2.includes('Apple')

//Checking for a character
// const result = myText2.includes('I');

//Specifying specific position
const result = myText2.includes('apple',8);


//---------
//==Converting to String Using `String()===
//----------

//Converting a number to a string;
const num = 42;
const strNum= String(num)

//Converting a boolean to a string;
const boolVal = true
const strBool = String(boolVal)
// console.log(typeof strBool);

//Converting an array to a string;

const arr = [1,2,3];
// console.log(typeof String(arr));

//Converting a object to a string;

const obj = {name:'Emma', age:25}
// console.log(typeof String(obj));

//Converting  null and undefined to a string;

const str1Null = String(null)
// console.log(typeof str1Null);


//---------
//== Converting to String Using `.toString() ===
//----------

//Convert number to string

const num1 = 25
const strNum1 = num1.toString()
//console.log( typeof strNum1);

//Convert boolean to string

const boolVal2 = false;
// console.log(typeof boolVal2.toString());

//---------
//==Converting from String To Numbers===
//----------

// Example 1: Converting Pixel Value to Number with parseInt()

const pixelvalueAsString = '42px';
// const convertedVal = parseInt(pixelvalueAsString)
// console.log( convertedVal+10);

// Example 2: Converting Dimension String to Number with parseFloat()

const dimensionStr = "42.5px"
//  const convertedVal = parseFloat(dimensionStr)

 // Example 3: Converting Age Input to Number using Number()

 const ageInput = "42";
//  const convertedVal = Number(ageInput)

//  console.log( convertedVal + 10);

 // Example 4: Quick Conversion using Unary + Operator

 const scoreStr = '100';
//  const convertedVal = +scoreStr

//  console.log( convertedVal + 200);


//-------

//  Converting from String To Booleans

//-------

// Example 1: Using Boolean() for Form Validation

const usernameInput = 'Thomas';
// const convertedVal = Boolean(usernameInput)

// console.log(convertedVal);

// Example 2: Using Boolean() with Empty String

const emptyField = "";

//  const convertedVal = Boolean(emptyField)
//  console.log(convertedVal);

 // Example 3: Using Double Negation !! for Quick Conversion

 const emailInput = "emma@gmail.com";
 //const convertedVal = !!emailInput

 // console.log(convertedVal);