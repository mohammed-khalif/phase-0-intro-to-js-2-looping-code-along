// Code your solutions in this file
const writeCards = (names, event) => {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  };
  
  const countDown = (num) => {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  };
  
  module.exports = { writeCards, countDown };
  