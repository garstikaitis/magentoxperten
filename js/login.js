// https://stackoverflow.com/questions/1181575/determine-whether-an-array-contains-a-value
var contains = function(needle) {
  // Per spec, the way to identify NaN is that it is not equal to itself
  var findNaN = needle !== needle;
  var indexOf;

  if(!findNaN && typeof Array.prototype.indexOf === 'function') {
      indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(needle) {
      var i = -1, index = -1;
        for(i = 0; i < this.length; i++) {
          var item = this[i];
          if((findNaN && item !== item) || item === needle) {
            index = i;
            break;
          }
        }
        return index;
      };
    }
  return indexOf.call(this, needle) > -1;
};



$(document).ready(function() {
  const validUsernames = ['admin'];
  const validPasswords = ['admin'];
  const usernameVal = $('.username-input').val();
  const passwordVal = $('.password-input').val();
  $('.login-button').on('click', function(e) {
    const usernameVal = $('.username-input').val();
    const passwordVal = $('.password-input').val();
    if(contains.call(validUsernames, usernameVal) && contains.call(validPasswords, passwordVal)) {
      console.log('yes')
    } else {
      console.log('no')
    }
  });
  console.log(validUsernames)
  $('#signup-button').on('click', function() {
    const usernameVal = $('.username-input').val();
    const passwordVal = $('.password-input').val();
    validUsernames.push(usernameVal);
    console.log(validUsernames)
    validPasswords.push(passwordVal);
    console.log(validPasswords)
  });
  console.log(validUsernames)
});
