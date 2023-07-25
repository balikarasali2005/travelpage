const str ='medam';

const length = str.length;

let reversedstring=' ';
for(let i=length-1; i>=0; i--){
//  console.log(str[i])
reversedstring = reversedstring+str[i];
// debugger;
}
// console.log(reversedstring)
if(reversedstring === str){
    console.log(str,'it is palindrome')
}else{
    console.log(str,'is is not palindrome')
}


// Functtion ->specific set of solution to a problem
        //  function declaration
    function reversedstring(num1,num2){
        // console.log('reverse a string here')
              // console.log(num1, num2)
    }
        // function call
        reversedstring(10,20);

 //Array function
 const sumOfTwoNumber = (num1, num2) =>{
    console.log(num1 + num2)
 }

//  higher order array method -map
const numbers = [1,2,3,4,5,6,7,8,9,10];
 numbers.map(function (num, i){
    console.log('a',a);
 })
    numbers.map((num,i) => {
        console.log(num);
    })
 