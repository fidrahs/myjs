/**************************
* Variables and data types
*/

/*var firstName = 'Jhon';
console.log(firstName);

var lastName = 'Smith';

var age = 28;

var fullage = true;

var job;

job = 'Teacher';

var _year = 3;
*/

/**************************
* Variable mutation and type coercion
*/

/*
var firstName = 'Jhon';
var age = 28;

//Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';

job = 'driver'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');

console.log(firstName + ' ' + lastName);
*/

/**************************
* Basic Operators   
*/
/*
// Math operators

var now, yearJhon, yearMark, ageJhon,ageMark;
now = 2018;
ageJhon = 28;
ageMark = 33;
yearJhon = now - ageJhon;
yearMark = now - ageMark;

console.log(yearJhon);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operator
var jhonOlder = ageJhon < ageMark;
console.log(jhonOlder);

// typeof operator

var type = typeof jhonOlder;
console.log(type);
*/

/**************************
* Operator precedence Operators   
*/

/*var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);

*/

// coding challenge 
/*
var johnHeight, markHeight, johnMass, markMass, johnBMI, markBMI, isHigher;
johnHeight = 1.80;
markHeight = 1.90;
johnMass = 80;
markMass = 90;

johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);

isHigher = johnBMI > markBMI;

console.log("Is Mar's BMI higher than John's? " + isHigher + ' ' + johnBMI + ' ' + markBMI);

*/
/*
var firstName = 'Jhon';
var age = 28;

age >= 18 ? console.log('mayor') : console.log('menor');

switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
/*
var johnG1, johnG2, johnG3, mikeG1, mikeG2, mikeG3, maryG1, maryG2, maryG3;

johnG1 = 89;
johnG2 = 120;
johnG3 = 103;

mikeG1 = 116;
mikeG2 = 94;
mikeG3 = 123;

maryG1 = 97;
maryG2 = 134;
maryG3 = 105;

var averageJohnT = (89 + 120 + 103) / 3;
var averageMikeT = (116 + 94 + 123) / 3;
var averageMaryT = (maryG1 + maryG2 + maryG3) / 3;
console.log(averageJohnT, averageMikeT);

if (averageJohnT > averageMikeT) {
    console.log('John\'s team Win. ' + 'average team john: ' + averageJohnT + ' average team Mike: ' + averageMikeT);
}else if (averageMikeT > averageJohnT) {
    console.log('Mike\'s team Win. ' + 'average team john: ' + averageJohnT + ' average team Mike: ' + averageMikeT); 
}else{
        console.log('It\'s a draw ' + 'average team john: ' + averageJohnT + ' average team Mike: ' + averageMikeT);
}
*/
caculateAge(); // will work because of hoisting
console.log(ageJohn); // Undefined 

function caculateAge(birthyear){
   
    console.log(2018 - birthyear);

}

if (5 > 4) {
    // el if como tal es un statement pero adentro hay una expresion
}
var ageJohn = 28;

console.log(ageJohn);

function yearsUntilRetirament(year , firstName) {
    var age = caculateAge(year)
    var retirament = 65 - age;
    
}


/***************************
* Function Statements and Expressions
*/

// Function Declaration
// function name(params) {}

//Function expression
/*var whatDoYouDo = function (job,firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' Teaches kids how to code';
            
        case 'driver':
            return firstName + ' drives';
            
        case 'designer':
        return firstName + ' designs';
                
        default:
        return firstName + ' does something else';
            
    }
}

console.log(whatDoYouDo('teacher', 'John'));

*/
/*
var names = ['hardif', 'andres' , 'luis'];
console.log(names.length);
*/
/*
var tipCalculator = function(bills){
    
    if (bills < 50) {
        return bills * 0.2;
    } else if(bills >= 50 && bills <=200){
        return bills * 0.15;
    } else{
        return bills * 0.1;
    }

};

var bills = [124,48,268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var finalPaid = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(finalPaid);
*/

/********************
* Objects and properties
*/
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john);

// New Object syntax
var jane = new Object();

*/

/********************
* Objects and properties
*/
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        return 2018 - this.birthYear;
    }
}

console.log(john.calcAge());
*/

/***********************************
* CODDING CHALLENGE 4
*/
/*
var john = {
    fullName: 'John Smith',
    mass: 90,
    height: 1.85,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


var mark = {
    fullName: 'Mark Miller',
    mass: 100,
    height: 1.95,
    calcBMI: function() {
        this.bmi 
        return this.bmi = this.mass / (this.height * this.height);;
    }
}
john.calcBMI();
mark.calcBMI();
if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has higher BMI ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(john.fullName + ' has higher BMI ' + mark.bmi);
}else{
    console.log('they are equal')

}

*/

/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalPaid = [];
        var porcentage;
        for (var i = 0; i < this.bills.length; i++) {
            
            if (this.bills[i] < 50) {
                porcentage = 0.2;
                
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                porcentage = 0.15;
                
            } else {
                porcentage = 0.10;
                
            }
            this.tips[i] = this.bills[i] * porcentage;
            this.finalPaid[i] = this.bills[i] + this.tips[i];
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalPaid = [];
        var porcentage;
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            if (bill < 100) {
                porcentage = 0.2;
                
            } else if (bill >= 100 && bill <= 300) {
                porcentage = 0.10;
                
            } else {
                porcentage = 0.25;
                
            }
            this.tips[i] = bill * porcentage;
            this.finalPaid[i] = bill + this.tips[i];
        }
    }
}


function calcAverageTips(tips){

    var tipsSum = 0;
    for (var i = 0; i < tips.length; i++) {
        tipsSum += tips[i];        
    }
    return tipsSum / tips.length;;
}
mark.calcTips();
john.calcTips();
console.log(john, mark);


john.average = calcAverageTips(john.tips);
mark.average = calcAverageTips(mark.tips);

if (john.calcTips() > mark.calcTips()) {
    console.log(john.fullName + ' paid more than ' + mark.fullName);
    
} else {
    console.log(mark.fullName + ' paid more than ' + john.fullName);
}
*/
















