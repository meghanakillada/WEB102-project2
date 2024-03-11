import './App.css';
import { useState } from 'react';
import infoPair from './components/infoPair'

const App = () => {

  const [currentCard, setCurrentCard] = useState(0);
  const [answer, setAnswer] = useState(false);

  const changeAnswer = () => {
    (answer) ? setAnswer(false) : setAnswer(true);
  }

  const showNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * infoPair.length);
    setCurrentCard(randomIndex);
    setAnswer(false);
  }

  return (
    <div className="App">
      <h1>Dinosaur Trivia</h1>
      <h3>Test your knowledge on dinosaurs and quiz yourself!</h3>
      <h4>Number of cards:{infoPair.length}</h4>
      <div class="container">
        <div class="card" onClick={changeAnswer}>
            <h3>{(answer) ? infoPair[currentCard].answer : infoPair[currentCard].question}</h3>
        </div>
      </div>
      <br></br>
      <button onClick={showNextQuestion}>Next</button>
    </div>
  )
}

export default App;