document.title='javascript class';

let ofjff = 'abc'

console.log('ofjff')
console.log(ofjff)
console.log('1')
// 8 type of data
// 1.string='ofjff ofjff' "ofjff @#$"
// 2.number 1,2,3,-2,-5,0.1,0.22
// 3.bolean true/false
// 4.bigInt not used


// 5.object:->object->array->date(.maximum used in js)
        // key:value
let studentInfo = {
name:'balika',
age:17,
isActive:true
}
console.log(studentInfo["name"])
console.log(typeof studentInfo.age);

const arr=['vrit tech',true,17,studentInfo]
console.log(arr[0])
console.log(arr[arr.length-1].age)
console.log(arr[length])
      // console.log(arr.length)

const currDate = new Date();
console.log(currDate.getFullYear())



// operators
    //  Arthmetic operator + - * % /
    console.log(1 * 2)
    //   remainder
    console.log(5%4)
    console.log(5/4)
    // assignmen operator= /
    let sum = 0;
    sum = 10;
    console.log(sum)
    // comparison operator == === != !== > < 
    console.log("'text'===1",'text'===1)
    console.log("'1'===1 type and value",'1'===1 )
    console.log("'1'==1 value",'1'==1)
    console.log(10 > 20)
    console
    .log(10 < 20)

// ternary opreator or what opreator
console.log(10 > 20 ? 'true':'f')
console.log(studentInfo.age >= 18 ? 'she is eligible to drink':'she is not eligibble to sdrink')
console.log('10' + '20')
console.log('z' < 'b false')
console.log('a' > 'b true')


// logical operator && // !/
console.log('true && false', true && false) /false
console.log('true || false' , true || false) /true
console.log('!true',!true)
let isPrimary = false;
if(isPrimary){
    console.log('not a prime number')
}
let array =[10,20,30,40]
// homework prime number and odd number


// 6.null
// 7.undefined
// 8.symbol


// declaration
   // var let cost
var a = 10;
console.log(typeof (a));
let b='text ok'
console.log(typeof b);
const c=true;
console.log(typeof c);

// ES6 ES5
// JAVACRIPT VS TYPECRIPT VS ECMASCRIPT:specification ES5 ES6 ES7 ES10 etc...

// camel case
addTwoNumbers
prime_numbers
prime-number
// pascal case