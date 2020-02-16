var john = {
    firstname: 'John',
    lastname: 'Smith',
    birthyear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age=  2020- this.birthyear;
    }
};


 john.calcAge();
 console.log(john);
 /**{firstname: "John", lastname: "Smith", birthyear: 1990, family: Array(4), job: "teacher", …}
firstname: "John"
lastname: "Smith"
birthyear: 1990
family: (4) ["Jane", "Mark", "Bob", "Emily"]
job: "teacher"
isMarried: false
calcAge: ƒ ()
age: 30
__proto__: Object */