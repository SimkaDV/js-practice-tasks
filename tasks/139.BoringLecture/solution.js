const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", line =>{
  const word = line;
  sortOutput(combination(word))

  rl.close()
})


function combination(word){
  const wordCombitation= {}
  
  for(let i = 0; i < word.length; i++ ){
    wordCombitation[word[i]] = (wordCombitation[word[i]] || 0) + (i+1)*(word.length-i);
  } 
  return wordCombitation
}

function sortOutput(obj){
  const sort = Object.keys(obj).sort()
  for (let key of sort){
    console.log(`${key}: ${obj[key]}`)
  }
}

