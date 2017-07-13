'use strict';
'use strict';
alert('Welcome!');
alert('lets play a guessing game.');
var tries = 0;
var correctAnswer = 51;



var guitar = prompt('Do you think I own a guitar?').toLowerCase()
if(guitar === 'yes'||guitar === 'y'){
  alert('correct! I do!');
  console.log('The user picked ' + guitar);
}else if (guitar === 'no'||guitar === 'n'||guitar === ' '){
  alert('bummer, i actually do!');
  console.log('The user picked ' + guitar);
};

var bugs = prompt('do you think I like to kill bugs?').toLowerCase()
if(bugs === 'yes'||bugs === 'y'||bugs === 'probably'){
  alert('sorry! im basically buddhist and cherish all life! except wasps, i avoid those');
  console.log('The user chose ' + bugs);
}else if (bugs === 'no'||bugs === 'n'||bugs === ' '){
  alert('correct! I cherish every life...except wasps, I avoid those.');
  console.log('The user chose ' + bugs);
};

var lion = prompt('Do you think I can jump higher then a house?').toLowerCase()
if(lion === 'yes'||lion === 'y'){
  alert('yup! That is because houses do not jump!');
  console.log('The user answered with ' + lion);
}else if (lion === 'no'||lion === 'n') {
  alert('well actually that is a trick question. I can jump higher because houses cannot jump');
  console.log('The user answered with ' + lion);
};

var shin = prompt('True or False. I know how to fix all systems on a helicopter').toLowerCase()
if(shin === 'true'||shin === 't'){
  alert('True! I spent five years fixing the CH53E Super Stallion Helicopter.')
  console.log('The user said ' + shin);
}else if(shin === 'false'||shin === 'f'){
  alert('sorry, I actually spent five years working with the CH53E Super Stallion in the Marines.')
  console.log('The user said ' + shin)
};

var name = prompt('Do you think I enjoy running?').toLowerCase()
if(name === 'yes'||name === 'y'){
  alert('correct! as weird as it is, I enjoy it');
  console.log('The user gave ' + name);
}else if(name === 'no'||name === 'n'){
  alert('ah sorry. i happen to be the exception because I do!')
  console.log('The user gave ' + name);
};


while(tries < 4){
  var userGuess = prompt('pick a number between 1 and 100');
  if (userGuess < correctAnswer){
    alert('too low');
    tries++;
    console.log('low');
  }else if(userGuess > correctAnswer){
    alert('too high');
    tries++;
    console.log('baked');
  }else if(userGuess == correctAnswer){
    alert('nice!');
    tries++;
    console.log('works fine');
    break;
  }if(tries === 4){
    alert('sorry! maybe next time!');
    console.log('i need blood in my alcohol stream');
  }
}

var states = ['california', 'florida', 'north carlina'];
var numGuess = 6;

while(numGuess > 0){
  var userGuess = prompt("what state have I lived in?").toLowerCase();
  for(var i = 0; i < states.length; i++){
    if(userGuess === states[1]){
      alert('good');
      numGuess--;
      break;
    }
  }
  if(numGuess > 0) {
    numGuess--;
    alert('keep trying. ' + numGuess + ' tries left.');
  }
  if (numGuess === 0){
    alert('sorry, out of guess');
  }
}
