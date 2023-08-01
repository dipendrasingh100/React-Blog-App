
export function shuffleArray(arr) {
    const shuffledArray = [...arr]; // Create a copy of the original array
    // Shuffle the elements in shuffledArray 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  