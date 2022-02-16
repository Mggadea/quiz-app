import React from 'react';
import Question from '../atoms/Question'
import OptionsContainer from '../molecules/OptionsContainer'

const Questions = ({questions, currentQuestion}) => {
    return (
        <>
        <Question question={questions[currentQuestion].questionText} />
        <OptionsContainer options={questions[currentQuestion].answerOptions} />
      </>
    )
}

export default Questions

