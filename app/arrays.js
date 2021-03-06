exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce((num, acc) => {
      acc += num;
      return acc;
    }, 0)
  },

  remove: function(arr, item) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        answer.push(arr[i])
      }
    }
    return answer;
  },

  removeWithoutCopy: function(arr, item) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        answer.push(arr[i])
      }
    }
    arr = answer;
    return arr;
  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
