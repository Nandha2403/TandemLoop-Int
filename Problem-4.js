function countMultiples(numbers, multiples) {
    let counts = {};
    
    // Initialize counts object with multiples as keys and initial count of 0
    multiples.forEach((multiple) => {
      counts[multiple] = 0;
    });
    
    // Count the multiples in the numbers array
    numbers.forEach((number) => {
      multiples.forEach((multiple) => {
        if (number % multiple === 0) {
          counts[multiple]++;
        }
      });
    });
    
    return counts;
  }
  
  const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  const multiples = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const counts = countMultiples(numbers, multiples);
  console.log("Output:", counts);
  