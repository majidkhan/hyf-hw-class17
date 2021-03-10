
// Age-ify (A future age calculator)
//  https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week1/homework.md#age-ify-a-future-age-calculator
    
console.log('\n' + 'Age-ify');

let yearOfBirth = 1983;
let yearFuture = 2050;
let age = yearFuture - yearOfBirth;

let display = 'You will be ' + age + ' years old ' + 'in ' + yearFuture;

console.log(display);

// Goodboy-Oldboy (A dog age calculator)
//  https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week1/homework.md#goodboy-oldboy-a-dog-age-calculator

console.log('\n' + 'Goodboy-Oldboy');

let dogYearOfBirth = 1957; dogYearFuture = 2027; dogYear = dogYearFuture - dogYearOfBirth; 
let shouldShowResultInDogYears = true; let dogAgeDisplay;

if (shouldShowResultInDogYears) {
    dogAgeDisplay = 'Your dog will be ' + dogYear + ' dog years old in ' + dogYearFuture;    
} else {
    dogAgeDisplay = 'Your dog will be ' + (dogYear - 60) + ' human years old in ' + dogYearFuture;    
}

console.log(dogAgeDisplay);

// Housey pricey (A house price estimator)
//  https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week1/homework.md#housey-pricey-a-house-price-estimator

console.log('\n' + 'Housey pricey');

// Peter
let volumeInMeters = 8 * 10 * 10;
let gardenSizeInM2 = 100;

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let peterPaid = 2500000;
let costDiff = housePrice - peterPaid;

console.log( 'Peter paid ' + Number(peterPaid).toLocaleString() + ' and the actual price should be ' + Number(housePrice).toLocaleString() );

if (costDiff == 0) {
    console.log('Peter has paid the exact amount');
} else if( costDiff < 0 ) {
    console.log('Peter has paid too much');
} else  {
    console.log('Peter has paid too less' );
}

// Julia
volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;

housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let juliaPaid = 1000000;
costDiff = housePrice - juliaPaid;

console.log( 'Julia paid ' + juliaPaid + ' and the actual price should be ' + housePrice );

if (costDiff == 0) {
    console.log( 'Julia has paid the exact amount' );
} else if( costDiff < 0 ) {
    console.log( 'Julia has paid too much' );
} else  {
    console.log( 'Julia has paid too less' );
}

// Ez Namey (Startup name generator) Optional
//  https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript1/week1/homework.md#ez-namey-startup-name-generator-optional

console.log('\n' + 'Ez Namey');


let firstWords = ['The', 'Apple', 'Green', 'Round', 'Robust', 'Elegant', 'Sea', 'Eye', 'Trade', 'Nordic'];
let secondWords = ['Tech', 'Alliance', 'Air', 'Corporate', 'IT', 'Associates', 'Data', 'Crypto', 'Giant', 'Square'];

// random number generator (between 0 - 9)
const randomNumber = Math.floor(Math.random() * 10) + 0;

// concatenate first and second word
let startupName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];

// count length of StartupName
let countCharStartupName = startupName.length;

// display message
console.log('The startup: "' + startupName + '" contains ' + countCharStartupName + ' characters"');