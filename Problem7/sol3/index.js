// Please don't change the pre-written code
// Import the necessary modules here

const Readline =  require('readline');

const Solution = () => {
  // Write your code here
    const Interface = Readline.createInterface({
     input: process.stdin,
     output: process.stdout,
 });

     Interface.question("Enter the First Number: ", (num1) =>{
       Interface.question("Enter the Second Number: ", (num2)=>{
         if(Number(num1) > Number(num2)){
           console.log("The maximum of two Number is: " + Number(num1));
         }else{
           console.log("The maximum of two Number is: " + Number(num2));
         }
       })
    
   })
};
Solution();
module.exports = Solution;
