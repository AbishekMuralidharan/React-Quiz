
import React, {useState} from 'react';
import './App.css';

function App() {
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [CurrentQuestion, SetCurrentQuestion] =useState(0);
  const questions = [    {
    text: "React is a JavaScript library for building ___.",
    options: [
      {id:0, text:"Database", isCorrect:false},
      {id:1, text:"Connectivity", isCorrect:false},
      {id:2, text:"User interface", isCorrect:true},
      {id:3, text:"Design Platform", isCorrect:false},
    ],
  },{
    text: "User interface developed with React is made of small and isolated pieces of code called ___.",
    options: [
      {id:0, text:"Hook", isCorrect:false},
      {id:1, text:"Component", isCorrect:true},
      {id:2, text:"Function", isCorrect:false},
      {id:3, text:"Snippet", isCorrect:false},
    ],
  },{
    text: "What are the two main types of components in React.js?",
    options: [
      {id:0, text:"Class based and functional", isCorrect:true},
      {id:1, text:"Functional and stateful", isCorrect:false},
      {id:2, text:"UI and container", isCorrect:false},
      {id:3, text:"Presentational and container", isCorrect:false},
    ],
  },{
    text: "A React component takes in parameters called ___?",
    options: [
      {id:0, text:"Attributes", isCorrect:false},
      {id:1, text:"Event", isCorrect:false},
      {id:2, text:"Props", isCorrect:true},
      {id:3, text:"Children", isCorrect:false},
    ],
  },{
    text: "To write HTML in react we make use of ___?",
    options: [
      {id:0, text:"React.createElement()", isCorrect:false},
      {id:1, text:"HTTP", isCorrect:false},
      {id:2, text:"XML", isCorrect:false},
      {id:3, text:"JSX", isCorrect:true},
    ],
  },{
    text: "JSX Stands for ___?",
    options: [
      {id:0, text:"JavaScript Extension", isCorrect:false},
      {id:1, text:"JavaScript Extreme", isCorrect:false},
      {id:2, text:"JavaScript XML", isCorrect:true},
      {id:3, text:"JavaScript XScript", isCorrect:false},
    ],
  },{
    text: "React DOM uses ___ case property naming convention?",
    options: [
      {id:0, text:"Camel", isCorrect:true},
      {id:1, text:"Pasel", isCorrect:false},
      {id:2, text:"Snake", isCorrect:false},
      {id:3, text:"Kebab", isCorrect:false},
    ],
  },{
    text: "___ are the smallest building blocks of React apps.",
    options: [
      {id:0, text:"Components", isCorrect:false},
      {id:1, text:"Tags", isCorrect:false},
      {id:2, text:"Elements", isCorrect:true},
      {id:3, text:"JSX", isCorrect:false},
    ],
  },{
    text: "Which component lifecycle method runs after the component output has been rendered to the DOM?",
    options: [
      {id:0, text:"componentMounted()", isCorrect:false},
      {id:1, text:"componentWillUnmount()", isCorrect:false},
      {id:2, text:"componentDidMount()", isCorrect:true},
      {id:3, text:"componentDidRender()", isCorrect:false},
    ],
  },{
    text: "Applications built with just React usually have a single ___?",
    options: [
      {id:0, text:"React DOM Node ", isCorrect:true},
      {id:1, text:"Parent Node", isCorrect:false},
      {id:2, text:"Component", isCorrect:false},
      {id:3, text:"Constructor", isCorrect:false},
    ],
  }] 
  const optionClicked =(isCorrect) => {
    if(isCorrect) {
      setScore(score + 1);
    }
    if(CurrentQuestion + 1 < questions.length){
      SetCurrentQuestion(CurrentQuestion + 1);
    }else {
      setFinalResult(true);
    }
    }
  
    const restartGame = () => {
      setScore(0);
      SetCurrentQuestion(0);
      setFinalResult(false);
    }
    const reset = () => {
      setScore(0);
      SetCurrentQuestion(0);
      setFinalResult(false);
    }
    const nextButton = () => {
      SetCurrentQuestion(CurrentQuestion+1)
      if(CurrentQuestion >= 10){
        setFinalResult(true)
      }
    }
    const previousButton = () => {
      SetCurrentQuestion(CurrentQuestion-1)
      if(CurrentQuestion > 1){
        return(
          {score}
        )
      }
    }

  return (
    <div className="App">
      <h1> React Quiz</h1>  
      
        { showFinalResult ? (
        <div className='final-result'>
          <h1>Final Result</h1>
          <h2> {score} Out of {questions.length} Correct - ({(score/questions.length) * 100}%) </h2>
          <button onClick={() => restartGame()}>Restart</button>
        </div>
       ):(<div className='question-card'>
        <h1>Questions {CurrentQuestion + 1} Out of {questions.length}</h1>
        <h2 className='question-text'>{questions[CurrentQuestion].text}</h2>
        <ul>
          {questions[CurrentQuestion].options.map((option) => {
            return (
              <li onClick={()=>optionClicked(option.isCorrect)}>{option.text}</li>
            );
          })}
        </ul>
        <button className='button-reset' onClick={() => reset()}>Reset</button>
        <button className='button-previous' onClick={() => previousButton()}> Previous</button>
        <button className='button-next' onClick={() => nextButton()}> Next </button>
        </div>)}
</div>
  );
}

export default App;
