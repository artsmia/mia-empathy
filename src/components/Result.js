import React from "react";
import PropTypes from "prop-types";

function Result(props) {
  return (
    <div className="result">
      You scored{" "}
      <strong>
        {props.quizResult}/{props.total}
      </strong>
      !<button onClick={props.restartQuiz}>Retake quiz</button>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Result;
