
// Scroll to the top of the page
export const handleLink = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


//Function to generate n random numbers between 1 to given number
export function generateRandomNumbers(n, length) {
  const min = 1;
  const max = length-2;
  const randomNumbers = [];

  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * max) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}


export function shuffleArray(arr) {
    const shuffledArray = [...arr]; // Creating a copy of the original array
    // Shuffle the elements in shuffledArray 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
