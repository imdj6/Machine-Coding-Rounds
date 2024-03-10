import React from 'react'

function Exam({ currentQuestion, selectedOption, handleOptionSelect, handleNextButtonClick, currentQuestionIndex, length, handlePrevButtonClick, handleSubmitButtonClick }) {
    return (
        <div className='question-main-container'>
            <div className='question-container'>
                <div className='question-name'>QN:{currentQuestionIndex + 1}</div>
                <div className='question'>{currentQuestion?.question}</div>
            </div>
            <div className='option-container'>
                {
                    currentQuestion?.options?.map((option, key) => (
                        <div onClick={() => handleOptionSelect(key + 1)} className={`options ${selectedOption[currentQuestionIndex].optionIndex === key + 1 && "selected"}`} key={key}> a) {option.option}</div>
                    ))
                }
            </div>
            <div className='question-sub-btn'>
                <button className={`${currentQuestionIndex + 1 === 1 ? "btn-disabled" : "btn"}`} onClick={handlePrevButtonClick}>Prev</button>
                {
                    currentQuestionIndex < length - 1 &&
                    <button onClick={handleNextButtonClick} className='btn'>Next</button>
                }
                {
                    currentQuestionIndex === length - 1 &&
                    <button onClick={handleSubmitButtonClick} className='btn'>Submit</button>
                }
            </div>
        </div>
    )
}

export default Exam