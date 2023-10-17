const numbers = [5, 2, 9, 1, 5, 6];

// Custom comparison function to sort in descending order
function compareDescending(a, b) {
  return b - a;
}

numbers.sort(compareDescending);
console.log(numbers);