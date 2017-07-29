import React, { Component } from 'react';
import { Observable } from 'rxjs';
import PropTypes from 'prop-types';


/*
  Covered:
    - timer
    - fromEvent
    - fromPromise
    - from
 */
class CreatingObservables extends Component {

  componentDidMount() {
    this[`initCase${this.props.case}`]();
  }

  initCase1() {
    Observable
      .timer(0, 1000) // initialDelay, period
      .map(x => x + 1)
      .subscribe(console.log);
  }

  initCase2() {
    Observable
      .fromEvent(window, 'click')
      .map(event => event.clientX)
      .subscribe(console.log);
  }

  initCase3() {
    const coolPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('resolved'), 2000);
    });

    Observable
      .fromPromise(coolPromise)
      .map(result => result + '!')
      .subscribe(console.log);
  }

  initCase4() {
    Observable
      .of(1, 2, 3, 4, 5)
      .map(x => x * 10)
      .flatMap(x => [1, x])
      .subscribe(console.log);
  }

  render() {
    return <div/>;
  }
};

CreatingObservables.propTypes = {
  case: PropTypes.number.isRequired,
};

export default CreatingObservables;
