// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', function(line){
//     console.log(line);
// })

var _ = require('lodash');

var numCases = 0;
var thisCase = 0;

process.stdin.pipe(require('split')())
  .on('data', processLine)
  .on('end', checkFinished);

function count(num) {
  if (num == 0) return 'INSOMNIA';
  var newNum = num;
  var digitsSeenSoFar = _.uniq(newNum.split('').sort());

  while (digitsSeenSoFar.length < 10) {
    newNum = Number(newNum) + Number(num) + '';
    digitsSeenSoFar = _.uniq(newNum.split('').concat(digitsSeenSoFar).sort());
    debugger;
  }
  return newNum;  
}

function processLine(line) {
  if (numCases == 0) {
    numCases = Number(line);
  } else if (line) {
    thisCase++;
    console.log('Case #' + thisCase + ': ' + count(line));
  }
}

function checkFinished() {
  console.log('last case was ', thisCase);
  console.log('total cases ', numCases);
  if (thisCase == numCases) {
    console.log('congrats, right number of cases processed');
  } else {
    console.log('ERROR:- wrong number of cases processed');
  }
}