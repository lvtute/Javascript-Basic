# Javascript-Basic
This is my workspace for learning basic javascript.


## Important notes
```javascript
    23 == '23';
    // true

    23 === '23';
    // false
```

```javascript
    var test1 = null;
    console.log(test1);
    // null
    console.log(typeof test1);
    // object
    if(test1 ){ console.log("true");} else {console.log("false");}
    //false

    var test2;
    console.log(test2);
    // undefined
    console.log(typeof test2);
    // undefined
    if(test2){ console.log("true");} else {console.log("false");}
    //false
```

```javascript
    var array = ['John','Smith',1990, 'teacher', false];
    // (5) ["John", "Smith", 1990, "teacher", false]

    array.push('blue');
    // (6) ["John", "Smith", 1990, "teacher", false, "blue"]

    array.unshift('girl');
    // (7) ["girl", "John", "Smith", 1990, "teacher", false, "blue"]

    array.pop();
    //  ["girl", "John", "Smith", 1990, "teacher", false]

    array.shift();
    // ["John", "Smith", 1990, "teacher", false]
```

```javascript

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
```