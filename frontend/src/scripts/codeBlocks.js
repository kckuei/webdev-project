const codeBlocks = {
    1: `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Rick Roll</a>
<a href="./relative_reference.html">I'm a relative reference!</a>
<a href="../imgs/construction_cat.webp">I point to a cat photo!</a>
`,
    2: `<nav>
    <a href="./home.html">Home</a>
    <a href="./fantasy.html">Fantasy</a>
    <a href="./scifi.html">Science Fiction</a>
    <a href="./nature.html">Nature</a>
</nav>`,
    3: `ls -l --block-size=M
for i in *; do convert $i -resize 800x $i-800x.jpg; done;
for i in *-800x.jpg; do convert $i -quality 50% $i-50p.jpg; done;
ls -l --block-size=KB`,
    4: `<label for="firstlast">First and Last Name</label>;
<input type="text" id="firstlast" />;`,
    5: `<!-- Email -->;
<input type="email" name="email" size="30" maxlength="100"
placeholder="name@host.com" pattern="[^ @]+@[^ @]+.[a-z]+"/>

<!-- Checkbox -->
<input type="checkbox" name="subscribe" checked />

<!-- Radiobox -->
<input type="radio" name="visit id="yes" value="yes">
<label for="yes">Yes</label>
<input type="radio" name="visit id="no" value="no">
<label for="no">No</label>
<input type="radio" name="visit id="maybe" value="maybe">
<label for="maybe">Maybe</label>`,
    6: `<select name="referrer" id="how">
    <option value="Instagram">Instagram</option>
    <option value="Friend">Friend</option>
    <option value="Advertisement">Advertisement</option>
    <option value="Discord">Discord</option>
    <option value="Other" selected>Other</option>
</select>`,
    7: `let myInt = 3;
let myFloat = 33.3;
const myConstNum = 420;
let myBool = true;
const myString = 'Hola';
let myArray = ['hello', 'there', 3.0, ['another', 'array'], myFloat, myInt];
let myObj = {name: 'Mario', favoriteFood: 'mushroom', reason: 'makes him feel big.'};`,
    8: `let myObj = {
    property1: 1337,
    property2: 'c0d3'
};`,
    9: `let arrayOfNumbers = [1, 2, 3, 4, 5, 6];
let arrayOfObjects = [1, 2, 'three', {number: 'four'}, [5]];`,
    10: `let arrayOfObjects = [1, 2, 'three', {number: 'four'}, [5]];
arrayOfObjects.length;      // attribute for size, returns 5
arrayOfObjects.push(6);     // becomes [ 1, 2, 'three', {number: 'four' }, [ 5 ], 6 ]
arrayOfObject.includes(2);  // returns true
arrayOfObjects.pop();       // becomes [ 1, 2, 'three', {number: 'four' }, [ 5 ]]

let arr = [1, 2, 3, 4, 5];
arr.map(x=>x**2);             // returns the squares [ 1, 4, 9, 16, 25 ]
arr.filter(x=>x%2==0)         // returns the evens [ 2, 4 ]
arr.reduce((acc,x)=>acc+x, 0) // returns the sum 15`,
    11: `let myAvatar = {
    myName: 'Mr. Stud Muffin',
    howMuchIWishIHadInMyBankAccount: 100000000000000000000000,
    howMuchIsActuallyInMyBankAccount: 1000,
    inteligente: false,
    simpatico: true,
    favoriteBands: ['Stars', 'Arcade Fire', 'Metric', 'Broken Social Scene'],
}
let stringified = JSON.stringify(myAvatar)
console.log(stringified)`,
    12: `{"myName":"Mr. Stud Muffin",
"howMuchIWishIHadInMyBankAccount":1e+23,
"howMuchIsActuallyInMyBankAccount":1000,"
smart":false,
"simpatico":true,
"favoriteBands":["Stars","Arcade Fire","Metric","Broken Social Scene"]}`,
    13: `// If-Statement block example
if (i % 15 == 0) {
    console.log("FizzBuzz");
} else if (i % 3 == 0) {
    console.log("Fizz");
} else if (i % 5 == 0) {
    console.log("Buzz");
} else console.log(i);

// Switch-statement block example
const expr = 'Durian';
switch (expr) {
case 'Durian':
    console.log('Yuck! Bleck!');
    break;
case 'Mangoes':
    console.log('Yummy!')
    break;
case 'Papayas':
    console.log('Yum Yum Yum!');
    break;
default:
    console.log('Meh.');
}`,
    14: `num % 2 == 0 ? console.log(true): console.log(false)`,
    15: `// while loop
count = 0
while (true) {
    if (count ==10) break
count += 1
}

// do-while loop
do {
    statement or statements to execute
} while(expr)


// for loop
for(initialization statement; loop condition; repeating statement){
    Statement or statements to execute
}

// for-of loops
const symbols = ['MSFT', 'ORCL', 'TDC', 'SPLK', 'SNOW'];
for (let aSymbol of symbols) {
    console.log(aSymbol);
}
const snow = symbols[4];
for (const char of snow){
    console.log(char);
}

//for key-in loop
const orcl = {company: 'Oracle', symbol: 'ORCL', price: 67.08 };
for (const key in orcl){
    console.log(key + ': ' + orcl[key]);
}`,
    16: `class Stock {
    constructor(company, symbol, price) {
    this.company = company;
    this.symbol = symbol;
    this.price = price;

    totalPrice(count) {
        return this.price * count;
    }
}

let s1 = new Stock('Splunk', 'SPLK', 137.55);
console.log(s1.totalPrice(10));`,
    17: `class Stock {
    // A static field
    static DISCOUNT_PCT = 2.5;

    // A static method
    static discountedPrice(price) {
        return price * (100 - Stock.DISCOUNT_PCT) / 100;
    }

    constructor(company, symbol, price) {
        this.company = company;
        this.symbol = symbol;
        this.price = price;
    }
    totalPrice(count) {
        return this.price * count;
    }
}

let s1 = new Stock('Splunk', 'SPLK', 137.55);

// Static fields and methods are accessed by prefacing them with the name of the class
console.log(Stock.DISCOUNT_PCT);
console.log(Stock.discountedPrice(s1.price));`,
    18: `class FinancialInstrument {
    constructor(company, symbol, price) {
    this.company = company;
    this.symbol = symbol;
    this.price = price;
    }

    totalPrice(count) {
        return this.price * count;
    }
}

class Stock extends FinancialInstrument {

    static DISCOUNT_PCT = 2.5;

    constructor(company, symbol, price, exchange) {
        // A subclass invokes the constructor of its superclass
        super(company, symbol, price);
        // "this" can only be referenced after call to super
        this.exchange = exchange;
    }

    // A subclass can override a method from the superclass
    totalPrice(count) {
        return this.price * (100 - Stock.DISCOUNT_PCT) / 100 * count;
    }   
}`
}

export default codeBlocks;