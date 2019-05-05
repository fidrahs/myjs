/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
   
}

Person.prototype.calculateAge = function(){
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Simth';
var john = new Person('John', 1990, 'teacher'); //new crea un objeto nuevo y vacio
*/

/**
 * first class functions 
 */
/*
 var years = [1990, 1965, 1937, 2005, 1998];

 function arrayCalc(arr, fn) {
     var arrRes = [];

     for (var i = 0; i < arr.length; i++) {
         arrRes.push(fn(arr[i]));   
     }
     return arrRes;
 }*/
/*
(function (){
    var score = Math.random() * 10;
    console.log(score);
})();

(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score);
})(5);
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
        
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;

var jane = Object.create(personProto, {
    name: {value: 'jane'},
    yearOfBirth: {value: 1969}

})


function retirament(retiramentAge) {
    var a = ' years left';
    return function calcRetirament(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retiramentAge - age) + a);
    }
}

var a = 23
var b = a;
a = 46;
console.log(a,b); //a = 46 y b = 23

var obj1 = {
    name: 'Jhon',
    age: 26
}

var obj2 = obj1;
obj1.age = 28;

console.log(obj1.age); // age = 28
console.log(obj2.age); // age = 28



var retiramentUS = retirament(66);
console.log(retiramentUS(1990));


function interviewQuestion(job) {
    
    return function name(name) {
        
    }
}

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function caculateAge(el) {
    return 2019 - el;
}
function isFullAge(el) {
    return el >= 18;
}
var ages = arrayCalc(years, caculateAge);

var fullAges = arrayCalc(ages,isFinite);


function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
            
        }
    }else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        } 
        
    } else {
        return function (name) {
            console.log('Hello ' + name + ' what do you do?');
            
        }
    }
}

var treacherQuestion = interviewQuestion('teacher');

treacherQuestion('hardif');
interviewQuestion('teacher')('Mark');
*/

/*
function retirament(retiramentAge) {
    var a = ' years left';
    return function calcRetirament(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retiramentAge - age) + a);
    }
}

var retiramentUS = retirament(66);
console.log(retiramentUS(1990));


function interviewQuestion(job) {
    return function test(name) {
        if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
        }else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
        } else {
                console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var designerQuestion = interviewQuestion('designer');
console.log(designerQuestion('hardif'));*/
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily,['friendly', 'afternoon']);


var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function caculateAge(age, el) {
    return age - el;
}
function isFullAge(limit, el) {
    return el >= limit;
}
var ages = arrayCalc(years, caculateAge.bind(this,2019));

var japanFullAge = arrayCalc(ages,isFullAge.bind(this,20));

console.log(ages);
console.log(japanFullAge);
*/

/**
 * CODING CHALLENGE
 */
/*
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    // Prototype Functions
    Question.prototype.displayQuestion = function(){
            console.log(this.question);

            for (var i = 0; i < this.answers.length; i++) {
                console.log(i  + ': ' + this.answers[i]);
            }
    }

    Question.prototype.checkAnswer = function (answer, callback) {
        
        var sc;

        if (this.correct == answer) {
            console.log('Your answer was correct');
            sc = callback(true);
        }else{
            console.log('Your answer was incorrect');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------------------');
    }

    // Question Objects
    var q1 = new Question('question 1' , ['yes','no'], 0);
    
    var q2 = new Question('question 2' , ['yes','no'], 1);
    
    var q3 = new Question('question 3' , ['yes','no'], 0);
    
    // Questions array

    var questions = [q1,q2,q3];
    
    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            } 
            return sc;
        }
    }

    var keepScore = score();

    function randomQuestion() {
        
        var question = Math.floor(Math.random() * questions.length);

        questions[question].displayQuestion();

        var promptAnswer = prompt('Please select the correct answer (Just time the number) or write exit');
        

        if (promptAnswer !== 'exit') {
            
            questions[question].checkAnswer(parseInt(promptAnswer), keepScore);
            randomQuestion();
        }
    }
    


    randomQuestion();

})();

*/
var random = ['estudio'][1,2,3];

function queHago() {
    test = 15;
    var y;
    console.log(test);

    
}

queHago();

var i= 26;

for (var i = 0; i < 5; i++) {
    console.log(i)  // 0, 1, 2, 3, 4
}

console.log(i); //26


