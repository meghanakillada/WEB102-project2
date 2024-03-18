import './App.css';
import { useState } from 'react';
import infoPair from './components/infoPair'

const App = () => {

  const [currentCard, setCurrentCard] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState('');
  const [prevCard, setPrevCard] = useState(0);

  const changeAnswer = () => {
    (answer) ? setAnswer(false) : setAnswer(true);
    setCheckAnswer('');
  }

  const showNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * infoPair.length);
    setPrevCard(currentCard);
    setCurrentCard(randomIndex);
    setAnswer(false);
    setCheckAnswer('');
    guess.value = "";
  }

  const showPrevQuestion = () => {
    setCurrentCard(prevCard);
    setAnswer(false);
    setCheckAnswer('');
    guess.value = "";
  }

  const onCheckAnswer = (event) => {
    event.preventDefault();
    if (guess.value.toLowerCase() != infoPair[currentCard].answer.toLowerCase()){
      setCheckAnswer('wrong');
    }
    else {
      setCheckAnswer("correct");
    }
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
      <div class="container">
        <form>
          <label for="guess">Guess the answer here: </label>
          <input type="text" id="guess" name="guess"></input>
          <button type="submit" class="formbutton" onClick={onCheckAnswer}>Submit</button>
        </form>
      </div>
      <h4>{checkAnswer}</h4>
      <br></br>
      <button onClick={showPrevQuestion}>Prev</button>
      <button onClick={showNextQuestion}>Next</button>
    </div>
  )
}

export default App;