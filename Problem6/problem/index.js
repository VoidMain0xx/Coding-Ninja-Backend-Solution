// Please do not change the prewritten code
import axios from 'axios';
const Solution = async () => {
  // Write your code here
  const response = await axios.get(
		`https://famous-quotes4.p.rapidapi.com/random`
	);
};
Solution();
module.exports = Solution;
