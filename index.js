// Code your solutions in this file
// writeCards function takes an array of names and a string message, 
// and returns an array of personalized thank you messages.
function writeCards(names, event) {
    return names.map(name => {
      return `Thank you, ${name}, for the wonderful ${event} gift!`;
    });
  }
  
  // countDown function counts down from a given number to zero, 
  // logging each number to the console.
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Export the functions to be used in tests.
  module.exports = {
    writeCards,
    countDown
  };
  