import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <TransitionGroup
      className="container result jumbotron"
      component="div"
      transitionName="fade"
      transitionentertimeout={800}
      transitionleavetimeout={500}
      transitionappear
	  transitionappeartimeout={500}
    >
      <div>
        You are most like <strong>{props.quizResult}</strong>!
      </div>
    </TransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;