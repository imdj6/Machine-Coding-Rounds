import React from 'react'

function ExamD({ timeLeft }) {
    return (
        <div className='exam-detail-container'>
            <h1>
                All India Test Series
            </h1>
            <div className='exam-time'>
                {timeLeft}
            </div>
        </div>
    )
}

export default ExamD