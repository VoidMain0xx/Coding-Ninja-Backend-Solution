// // Import required module

// const Readline =  require('readline');

// const Solution = () => {
//   // Write your code here
//   const Interface = Readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

//     Interface.question("Enter the First Number: ", (num1) =>{
//       Interface.question("Enter the Second Number: ", (num2)=>{
//         if(Number(num1) > Number(num2)){
//           console.log("The maximum of two Number is: " + Number(num1));
//         }else{
//           console.log("The maximum of two Number is: " + Number(num2));
//         }
//       })
    
//   })
// };

// Solution();


// module.exports = Solution;

//Import required module
const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Solution = () => {
  // Write your code here
  interface.question("Enter first number", (num1) => {
    interface.question("Enter second number", (num2) => {
      // num1, num2
      // const sum = Number(num1) + Number(num2);
      // console.log(sum);
      Number(num1) > Number(num2)
        ? console.log(`The maximum number of the two is : ${num1}`)
        : console.log(`The maximum number of the two is : ${num2}`);
    });
  });
};

Solution();
module.exports = Solution;
