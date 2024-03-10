import Exam from "./components/Exam";
import ExamD from "./components/ExamD";
import Question from "./data";
import "./App.css"
import { useCallback, useEffect, useState } from "react";
function App() {
  const [timeLeft, setTimeLeft] = useState(10); // Initial time left (5 seconds)

  // Function to decrement the timer by 1 second
  const decrementTimer = () => {
    setTimeLeft(prevTime => prevTime - 1);
  };

  // Effect to start the timer and handle the countdown
  useEffect(() => {
    // Exit if timeLeft is already 0 or negative
    if (timeLeft <= 0) {
      // handleSubmite(); // Call handleSubmit if timeLeft reaches 0
      return;
    }

    // Set up an interval to decrement the timer every second
    const timerInterval = setInterval(decrementTimer, 1000);

    // Clear the interval when the component unmounts or timeLeft reaches 0
    return () => clearInterval(timerInterval);
  }, [timeLeft]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(Question.length).fill({ optionIndex: null }));
  const handlePrevButtonClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (currentQuestionIndex < Question.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };
  const totalQuestions = Question.length;
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const [totalMarksReceived, setTotalMarksReceived] = useState(null);
  const handleOptionSelect = useCallback((optionIndex) => {
    setSelectedOptions(prevSelectedOptions => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[currentQuestionIndex] = { optionIndex };
      return newSelectedOptions;
    });
  }, [currentQuestionIndex]);

  const handleSubmit = useCallback(() => {
    const confirmSubmission = window.confirm("Are you sure you want to submit the test?");
    if (confirmSubmission) {
      let marks = 0;
      selectedOptions.forEach((selectedOption, index) => {
        const correctOptionIndex = Question[index].correct_option;
        if (selectedOption.optionIndex === correctOptionIndex) {
          marks++;
        }
      });
      console.log('Total Marks Received:', marks);
    }
  }, [selectedOptions]);
  const handleSubmite = useCallback(() => {
    let marks = 0;
    selectedOptions.forEach((selectedOption, index) => {
      const correctOptionIndex = Question[index].correct_option;
      if (selectedOption.optionIndex === correctOptionIndex) {
        marks++;
      }
    });
    console.log('Total Marks Received:', marks);
    prompt("your marks is", marks)
  }, [selectedOptions]);
  const currentQuestion = Question[currentQuestionIndex];
  return (
    <div className="main">
      <div className="main-container">
        <h1>
          Exam Questions
        </h1>
        <div className="exam-container">
          <ExamD timeLeft={timeLeft} />
          <div className="progress-bar">
            <hr className="progress" style={{ width: `${progressPercentage}%` }} />
          </div>
          <Exam currentQuestion={currentQuestion} selectedOption={selectedOptions} handleOptionSelect={handleOptionSelect} handleNextButtonClick={handleNextButtonClick} currentQuestionIndex={currentQuestionIndex} handlePrevButtonClick={handlePrevButtonClick} length={Question.length} handleSubmitButtonClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;

// {
//   Question.map((item, key) => (
//     <div key={key} style={{ color: "black", backgroundColor: "red" }}>{item.question}</div>
//   ))
// }