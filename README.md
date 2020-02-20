# Javascript-Basic
This is my workspace for learning basic javascript by following the instruction from an Udemy course.


## Important notes
```javascript
    23 == '23';
    // true

    23 === '23';
    // false
```
---
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
---
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
___
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
___
_**Summary about object prototype**_
- Every Javascript object has a **prototype property**, which makes inheritance possible in Javascript;
- The prototype property of an object is where we put methods and properties that we  want **other objects to inherit**; 
- The Constructor's prototype property is **NOT** the prototype of the Constructor itself, it's the prototype of **ALL** instances that are created through it;
- When a certain method (or property) is called, the search starts in the object itself, and if it can not be found, the search moves on to the object's prototype. This continues until the method is found: **prototype chain**. 
___
_**Some facts about functions**_
- A function is an instance of object type;
- A function behaves like any other objects;
- We can store function in a variable;
- We can pass a function as an argument to another function;
- We can return a function from a function.
---
_**Closures summary**_
- An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

---


___
---
___
### 1. DOM pig game
**Game rules:**
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

**Game UI**

![image](https://user-images.githubusercontent.com/16172615/74597441-31d96700-5092-11ea-8f6b-17f278d9bc72.png)
**Techniques used:**
- Select HTML element and put in some text content:
`document.querySelector('#current-' + activePlayer).textContent = dice;`

### 2. Advanced javascript with examples
**Lectures:**
- Function constructor;
- Object.create;
- Passing function as argument;
- Function returns function;
- IIFE;
- Closures
- Bind, call and apply