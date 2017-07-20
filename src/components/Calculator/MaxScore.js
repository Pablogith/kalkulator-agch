import React from 'react'
import PropTypes from 'prop-types'
import FormulasInfo from './FormulasInfo'

const MaxScore = ({ maxPrimaryScore, maxLingualScore }) => {
  let maxScore
  maxScore = maxPrimaryScore + maxLingualScore
  return (
    <div>
      <h3>
        <small> Twój wynik wynosi&nbsp;</small> <b> {maxScore} </b> <small>&nbsp;pkt.</small>
      </h3>
      <br />
      <FormulasInfo />
    </div>
  )
}
MaxScore.propTypes = {
  maxPrimaryScore: PropTypes.number.isRequired,
  maxLingualScore: PropTypes.number.isRequired
}

export default MaxScore