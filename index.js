const questions =[
  {
    question:"Javascript is an _______ language",
    answers:[
      {text:"Object-Orieted",correct:true},
      {text:"Object-based",correct:false},
      {text:"Procedural",correct:false},
      {text:"None of the above",correct:false},
    ]
  },
  {
    question:"Which of the following keywords is used to define a variable in Javascript?",
    answers:[
      {text:"var",correct:false},
      {text:"let",correct:false},
      {text:"Both A and B",correct:true},
      {text:"None of the above",correct:false},
    ]
  },
  {
    question:"Which of the following methods is used to access HTML elements using Javascript?",
    answers:[
      {text:"getElementById()",correct:false},
      {text:"getElementByClassName()",correct:false},
      {text:"Both A and B",correct:true},
      {text:"None of the above",correct:false},
    ]
  },
  { 
    question:"Upon encountering empty statements, what does the Javascript Interpreter do? ",
    answers:[
      {text:"Thows an error",correct:false},
      {text:"Ignors the statement",correct:true},
      {text:"Gives a warning",correct:false},
      {text:"None of the above",correct:false},
    ]
  },
  { 
    question:"Arrays in JavaScript are defined by which of the following statements? ",
    answers:[
      {text:"It is an ordered list of values",correct:true},
      {text:"It is an ordered list of values",correct:false},
      {text:"It is an ordered list of string",correct:false},
      {text:"It is an ordered list of functions",correct:false},
    ]
  },
  { 
    question:"Which of the following is not javascript data types? ",
    answers:[
      {text:"Null type",correct:false},
      {text:"Undefined type",correct:false},
      {text:"Number type",correct:false},
      {text:"All of the mentioned",correct:true},
    ]
  },

  { 
    question:"Where is Client-side JavaScript code is embedded within HTML documents? ",
    answers:[
      {text:" A URL that uses the special javascript:code",correct:false},
      {text:"A URL that uses the special javascript:protocol",correct:true},
      {text:"A URL that uses the special javascript:encoding",correct:false},
      {text:" A URL that uses the special javascript:stack",correct:false},
    ]
  },

  { 
    question:"Which of the following object is the main entry point to all client-side JavaScript features and APIs? ",
    answers:[
      {text:"Position",correct:false},
      {text:"Window",correct:true},
      {text:"Standard",correct:false},
      {text:"Location",correct:false},
    ]
  },

  { 
    question: "Which of the following can be used to call a JavaScript Code Snippet?",
    answers:[
      {text:" Function/Method",correct:true},
      {text:"Preprocessor",correct:false},
      {text:"Triggering Event",correct:false},
      {text:" RMI",correct:false},
    ]
  },
  { 
    question:"Which of the following scoping type does JavaScript use? ",
    answers:[
      {text:"Sequential",correct:false},
      {text:"Segmental",correct:false},
      {text:"Lexical",correct:true},
      {text:"Literal",correct:false},
    ]
  },
  { 
    question:" What is the basic difference between JavaScript and Java? ",
    answers:[
      {text:"Functions are considered as fields",correct:false},
      {text:"Functions are values, and there is no hard distinction between methods and fields",correct:true},
      {text:"Variables are specific",correct:false},
      {text:"There is no difference",correct:false},
    ]
  },
  { 
    question:"Why JavaScript Engine is needed? ",
    answers:[
      {text:"Both Compiling & Interpreting the JavaScript",correct:false},
      {text:"Parsing the javascript",correct:false},
      {text:"Interpreting the JavaScript",correct:true},
      {text:"Compiling the JavaScript",correct:false},
    ]
  },
  { 
    question:"Which of the following is not a framework? ",
    answers:[
      {text:"JavaScript.NET",correct:false},
      {text:"JavaScript",correct:true},
      {text:" Cocoa JS",correct:false},
      {text:" jQuery",correct:false},
    ]
  },
  { 
    question:"Which of the following is the property that is triggered in response to JS errors?",
    answers:[
      {text:"onclick",correct:false},
      {text:"onerror",correct:true},
      {text:"onmessage",correct:false},
      {text:"onexception",correct:false},
    ]
  },
  { 
    question:"Which of the following is not an error in JavaScript? ",
    answers:[
      {text:"Missing of Bracket",correct:false},
      {text:"Division by zero",correct:true},
      {text:"Syntax error",correct:false},
      {text:"Missing of semicolons",correct:false},
    ]
  },




];

const questionElement = document.getElementById("question");
const answerbtns = document.getElementById("ans-btn");
const nextbtn = document.getElementById("next-btn"); 

let currentQuestionindex = 0;
let score= 0;

function startQuiz (){
  currentQuestionindex=0;
  score=0; 
  nextbtn.innerHTML="Next"; 
  showQuestion();
}

function showQuestion(){
    resetState();
  let currentQuestion = questions[currentQuestionindex];
  let questionNO = currentQuestionindex + 1;
  questionElement.innerHTML = questionNO + ". "+currentQuestion.question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML =  answer.text ;
    button.classList.add("btn");
    answerbtns.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState(){
  nextbtn.style.display ="none";
  while(answerbtns.firstChild){
    answerbtns.removeChild(answerbtns.firstChild);
  }

}

function  selectAnswer (e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerbtns.children).forEach(button=>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbtn.style.display = "block";
}
function showScore(){
  resetState();
  questionElement.innerHTML =` You scored ${score} out of ${questions.length} !`;
  nextbtn.innerHTML ="Play Again";
  nextbtn.style.display = "block";
}


function handleNextButton(){
  currentQuestionindex++;
  if(currentQuestionindex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}



nextbtn.addEventListener("click", ()=>{
  if(currentQuestionindex<questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})


startQuiz ();