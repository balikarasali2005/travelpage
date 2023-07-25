// / const numbers = [1, 2, 2, 2, 2, 3, 2, 1, 2, 3, 3, 3];

// const findMaxCount = (arr) => {
//    let frequency = {};
//    let maxCount = 0;
//    let maxFrequentElement;

//    numbers.forEach((num) => {
//       if (frequency[num]) {
//          frequency[num]++;
//       } else {
//          frequency[num] = 1;
//       }



  
// //   get element by id
//   console.log(document.getElementById("cont"));
// //   get element by class name
// console.log(document.getElementsByClassName("container"))
// // get element by tag name
// console.log(document.getElementsByTagName("div"))
// // querySelector or querySelectorAll
// console.log(document.querySelector("p"))


// const container = document.querySelector(".container");
// container.style.backgroundColor = "red";
// container.style.width='200px';
// container.style.height='300px';




// const string = 'medamtest';
// console.log(string.split("").reverse().join(""))
// // string.reverse()



const submitBTN = document.querySelector("#submit-btn");

submitBTN.addEventListener("click", async (event) => {
   event.preventDefault();
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   if (email === '') {
      document.querySelector('span').innerHTML = 'Please ente a email'
   }
   const reponse = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
         username: email,
         password
      })
   })

   const data = await reponse.json();

   console.log(data)

})