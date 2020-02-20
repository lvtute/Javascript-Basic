// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge  
}

// the calculateAge method is not really attached to each object.
Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';
var john = new Person('John', 1990, 'teacher');



var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/


/*
// Object.create
var personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: { value: 'jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    }
);
*/


/*
// Lecture: Passing function as argument

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i=0; i< arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020-el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){

    if(el >= 18 && el <= 81){
        return Math.round( 206.9 - (0.67*el));
    } else {
        return -1;
    }

    
}


var ages = arrayCalc(years,calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);

console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/
/*
// Lecture: Function returns function

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', Can you please explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, '+name+'?');
        }
    } else {
        return function(name){
            console.log('So, What line of work are you in,'+name+'?');
        }
    } 
    
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');

interviewQuestion('vance refrigeration')('Bob');
*/


// Lecture: IIFE
// function game(){
//     var score = Math.random()*10;
//     console.log(score >=5 );
// }
// game();
// console.log(score);

// (function(){
//     var score = Math.random()*10;
//     console.log(score >=5 );
// })();
// console.log(score);


// Lecture: Closures
// function retirement(retirementAge){
//     var a = ' years left until retirement.';
//     return function(yearOfBirth){
//         var age= 2020 - yearOfBirth;
//         console.log((retirementAge-age)+a);
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1990);

// retirement(66)(1990);

// Lecture: Bind, call and apply
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

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');