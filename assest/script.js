const btn = document.getElementById(".quizbtn button");

const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");




 
quizbtn.onclick = ()=>{
  
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(15); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
}



  // add variable that will contain all the questions 



  //  add event listener that will register when user clicks on start button




  // when button is clicked, start time function, and prompt the user with a question that they have to answer




  // confirm if answer is  valid || or not, 


  //  if answer is valid, present them another question


  // if answered incorectly, subtract time from timer

  // kee track of score 


  //whe time is up gave is over, or when all questions are answered  game is over 