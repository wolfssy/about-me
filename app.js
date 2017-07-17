// 'use strict';
//
// alert('Welcome!');
// alert('lets play a guessing game.');
// var tries = 0;
// var correctAnswer = 51;
//
// var correctCounter = [];
//
// var userName = prompt('enter name!');
//
//
// function questionsOneThroughFive(){
//
//   var guitar = prompt('Do you think I own a guitar?').toLowerCase()
//   if(guitar === 'yes'||guitar === 'y'){
//     alert('correct! I do!');
//     correctCounter.push('guitar');
//     console.log('The user picked ' + guitar);
//   }else if (guitar === 'no'||guitar === 'n'||guitar === ' '){
//     alert('bummer, i actually do!');
//     console.log('The user picked ' + guitar);
//   };
//
//   var bugs = prompt('do you think I like to kill bugs?').toLowerCase()
//   if(bugs === 'yes'||bugs === 'y'||bugs === 'probably'){
//     alert('sorry! im basically buddhist and cherish all life! except wasps, i avoid those');
//     console.log('The user chose ' + bugs);
//     correctCounter.push('bugKill');
//   }else if (bugs === 'no'||bugs === 'n'||bugs === ' '){
//     alert('correct! I cherish every life...except wasps, I avoid those.');
//     console.log('The user chose ' + bugs);
//   };
//
//   var lion = prompt('Do you think I can jump higher then a house?').toLowerCase()
//   if(lion === 'yes'||lion === 'y'){
//     alert('yup! That is because houses do not jump!');
//     correctCounter.push('lionKill');
//     console.log('The user answered with ' + lion);
//   }else if (lion === 'no'||lion === 'n') {
//     alert('well actually that is a trick question. I can jump higher because houses cannot jump');
//     console.log('The user answered with ' + lion);
//   };
//
//   var shin = prompt('True or False. I know how to fix all systems on a helicopter').toLowerCase()
//   if(shin === 'true'||shin === 't'){
//     alert('True! I spent five years fixing the CH53E Super Stallion Helicopter.');
//     correctCounter.push('shins');
//     console.log('The user said ' + shin);
//   }else if(shin === 'false'||shin === 'f'){
//     alert('sorry, I actually spent five years working with the CH53E Super Stallion in the Marines.')
//     console.log('The user said ' + shin)
//   };
//
//   var run = prompt('Do you think I enjoy running?').toLowerCase()
//   if(run === 'yes'||run === 'y'){
//     alert('correct! as weird as it is, I enjoy it');
//     correctCounter.push('running');
//     console.log('The user gave ' + run);
//   }else if(run === 'no'||run === 'n'){
//     alert('ah sorry. i happen to be the exception because I do!')
//     console.log('The user gave ' + run);
//   };
//
// }
//
// questionsOneThroughFive(); //funtion for questions 1-5
//
// function questionSix(){
//
//   while(tries < 4){
//     var userGuess = prompt('pick a number between 1 and 100');
//     if (userGuess < correctAnswer){
//       alert('too low');
//       correctCounter.push('nums');
//       tries++;
//       console.log('low');
//     }else if(userGuess > correctAnswer){
//       alert('too high');
//       tries++;
//       console.log('baked');
//     }else if(userGuess == correctAnswer){
//       alert('nice!');
//       tries++;
//       console.log('works fine');
//       break;
//     }if(tries === 4){
//       alert('sorry! maybe next time!');
//       console.log('i need blood in my alcohol stream');
//     }
//   }
//
// }
//
// questionSix();
//
//
// function questionSeven(){
//
// var states = ['california', 'florida', 'north carolina'];
// var numGuess = 6;
//
// while(numGuess > 0){
//   numGuess--;
//   var userGuess = prompt('what state have I lived in?').toLowerCase()
//   for(var i = 0; i < states.length; i++)  {
//
//     if(userGuess === states[0] || userGuess === states[1] || userGuess === states[2])
//     {
//       alert('good');
//       console.log('user is correct regarding state');
//       correctCounter.push('stateeeees');
//       numGuess = numGuess - 6;
//       break;
//     }
//   }
//     if(numGuess > 0)
//     {
//       alert('keep trying. ' + numGuess + ' tries left.');
//       console.log('user got it wrong');
//     }
//
//     if (numGuess === 0)
//     {
//       alert('sorry, out of guesses');
//     }
//   }
// }
//  questionSeven();
//
//     alert(userName + ' you got ' + correctCounter.length + '/7 right');
