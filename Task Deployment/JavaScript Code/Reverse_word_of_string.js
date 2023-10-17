function reverseWords(sentence) {
    // Split the sentence into words using space as the delimiter
    const words = sentence.split(' ');
    
    // Iterate through the words and reverse each one
    const reversedWords = words.map(word => {
      // Use the split-reverse-join technique to reverse a word
      return word.split('').reverse().join('');
    });
    
    // Join the reversed words back into a sentence using space as a separator
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }
  
  const inputSentence = "This is a sunny day";
  // Call the function to reverse the words
  const reversedSentence = reverseWords(inputSentence);
  // Output the reversed sentence
  console.log(reversedSentence);
  