import Exam from "./components/Exam";
import ExamD from "./components/ExamD";
import Question from "./data";
import 'react-responsive-modal/styles.css';
import "./App.css"
import { Modal } from 'react-responsive-modal';
import { useCallback, useEffect, useState } from "react";
function App() {
  const [timeLeft, setTimeLeft] = useState(10); // Initial time left (5 seconds)
  const [modalopen, setModalopen] = useState(false);

  // Function to decrement the timer by 1 second
  const decrementTimer = () => {
    setTimeLeft(prevTime => prevTime - 1);
  };

  // Effect to start the timer and handle the countdown
  useEffect(() => {
    // Exit if timeLeft is already 0 or negative
    if (timeLeft <= 0) {
      handleSubmite(); // Call handleSubmit if timeLeft reaches 0
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
      setTotalMarksReceived(marks)
      setModalopen(true);
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
    setTotalMarksReceived(marks);
    setModalopen(true)
  }, [selectedOptions]);
  const currentQuestion = Question[currentQuestionIndex];
  return (
    <div className="main">
      <Modal
        open={modalopen}
        center
        classNames={{
          modal: 'customModal',
        }}
      >
        <h1 style={{ textAlign: "center", padding: "20px", color: "#032539", fontSize: "30px" }}>
          All India Test Series
        </h1>
        <h1 style={{ textAlign: "center", color: "#FA991C", fontSize: "26px", marginBottom: "20px" }}>
          Your Score
        </h1>
        <h1 style={{ textAlign: "center", color: "#1C768F", fontSize: "40px", marginBottom: "20px" }}>
          {totalMarksReceived}/{Question.length}
        </h1 >
        <h1 style={{ textAlign: "center", color: "#1C768F", fontSize: "25px", marginBottom: "20px" }}>
          Total Time for Solving: 8mins
        </h1>
        <div style={{ color: "#35D24E", fontSize: "25px", marginBottom: "10px" }}>
          Correctly Solved
        </div>
        <div className="progress-bar">
          <hr className="progress" style={{ width: `${(totalMarksReceived / totalQuestions) * 100}%`, backgroundColor: "#35D24E" }} />
        </div>
        <div style={{ color: "red", fontSize: "25px", marginBottom: "10px" }}>
          Solved Wrong
        </div>
        <div className="progress-bar">
          <hr className="progress" style={{ width: `${100 - (totalMarksReceived / totalQuestions) * 100}%`, backgroundColor: "red" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <button style={{ padding: "10px 50px", backgroundColor: "#032539", color: "white", borderRadius: "10px", cursor: "pointer" }}>Submit</button>
        </div>
      </Modal>
      <div className="main-container">
        <h1>
          Exam Questions
        </h1>
        <div className="exam-container">
          <ExamD timeLeft={timeLeft} />
          <div className="progress-bar">
            <hr className="progress" style={{ width: `${progressPercentage}%`, backgroundColor: "#35d24e" }} />
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