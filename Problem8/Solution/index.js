// Please don't change the pre-written code
// Import the necessary modules here

const Solution = () => {
  // Write your code here
  //1. import Filesystem module 
  const fs = require('fs')

  //2.writing an additional note dynamically

  try {
    fs.appendFileSync('notes.txt',  '\nThe world has enough coders');
} catch (err) {
    console.log("file cannot be created");
}

try{
  fs.appendFileSync('notes.txt', ' BE A CODING NINJA!')
}catch(err){
  console.log("file cannot be created");
}

// 2.conenting with terminal
const buffer = fs.readFileSync('notes.txt', {encoding:'utf8'}) ;
console.log(buffer)

};
Solution();
module.exports = Solution;
