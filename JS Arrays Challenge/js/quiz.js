// 1. Create a multidimensional array to hold quiz questions and answers

const quiz = [
  ["What programming language gives interactivity to web pages?", "javascript"],
  ["What programming language provides the content of web pages?", "html"],
  ["What programming language styles web pages?", "css"] 
];

// 2. Store the number of questions answered correctly

let correctAnswer = 0;
const correctArray = [];
const incorrectArray = [];

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for ( let i = 0 ; i < quiz.length ; i++ ) {
  let answer = prompt(quiz[i][0]).toLowerCase();
  if ( answer === quiz[i][1] ) {
    correctAnswer++;
    correctArray.push( quiz[i][0] );
  } else {
    incorrectArray.push( quiz[i][0] );
  }
};

// 4. Display the number of correct answers to the user

document.querySelector("main").innerHTML = `
<h1>You've answered ${correctAnswer} question(s) correctly.</h1>
<h2>You got these questions right:</h2>
<ol>
<li>${ correctArray.join("</li><li>") }</li>
</ol>
<h2>You got these questions wrong:</h2>
<ol>
<li>${ incorrectArray.join("</li><li>") }</li>
</ol>
`;
