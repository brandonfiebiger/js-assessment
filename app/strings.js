exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(string, amount) {
    const splitString = string.split('');
    const answer = [];
    for (let i = 0; i < splitString.length; i++) {
      if (splitString[i] === splitString[i - 1]) {
        console.log(splitString[i])
      } else {
        for (let j = 0; j < amount; j++) {
          if (splitString[i + j] === splitString[i]) {
            answer.push(splitString[i])
          }
        }
      }
    }
    return answer.join('')
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
