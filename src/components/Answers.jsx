import { useRef } from 'react';
const Answers = ({ answers, selectedAnswer, answerState, onSelect, correctAnswer }) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id='answers'>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        const isCorrect = answer === correctAnswer;
        let cssClass = '';

        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if (answerState === 'correct' || answerState === 'wrong') {
          if (isSelected) {
            cssClass = answerState;
          } else if (isCorrect) {
            cssClass = 'correct';
          }
        }

        return (
          <li key={answer} className='answer'>
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
