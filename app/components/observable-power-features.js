import React, { Component } from 'react';
import { Observable } from 'rxjs';
import PropTypes from 'prop-types';


/*
  Covered:
    - Three important maps: mergeMap (flatMap) / concatMap / switchMap
    - window
    - throttle
 */
class ObservablePowerFeatures extends Component {

  constructor(props) {
    super(props);
    this.state = {
      someText: null
    }
  }

  componentDidMount() {
    this[`initCase${this.props.case}`]();
  }

  getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  returnAfterRandomTime(something) {
    const responseTime = this.getRandom(50, 1100);
    return Observable.of(something).delay(responseTime);
  }

  /*
    1) mergeMap (flatMap): http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMap
    2) concatMap: http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-concatMap
    3) switchMap: http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-switchMap
  */
  initCase1() {
    const textEnter$ = Observable.fromEvent(document.querySelector('#super-input'), 'keyup');
    textEnter$
      .mergeMap(event => {
        const text = event.target.value;
        console.log(`Initiated: ${text}`);
        return this.returnAfterRandomTime(text);
      })
      .subscribe(result => {
        console.log(`Received ${result}`);
        this.setState({ someText: result });
      });
  }

  /*
    1) .window(event) -> switch, like: split -> join
    2) .windowCount(2)
  */
  initCase2() {
    const timer$ = Observable.interval(2000)
    const textEnter$ = Observable.fromEvent(document.querySelector('#super-input'), 'keyup');

    textEnter$
      .window(timer$) // -> observable of windows
      .map(textEnterings$ => textEnterings$.toArray()) // window -> observable[t<observable>]
      .switch() // emits items from recent (flat)
      .map(events => events.map(e => e.code))
      .subscribe(console.log);
  }

  initCase3() {
    const getUserByQuery = query => this.returnAfterRandomTime({ name: query });
    const textEnter$ = Observable.fromEvent(document.querySelector('#super-input'), 'keyup');

    textEnter$
      .throttleTime(1500)
      .concatMap(textEntering => getUserByQuery(textEntering.target.value))
      .subscribe(console.log);
  }

  render() {
    return (
      <div>
        <input id="super-input" type="text"/>
        <br/>
        {this.state.someText}
      </div>
    );
  }
};

ObservablePowerFeatures.propTypes = {
  case: PropTypes.number.isRequired,
};

export default ObservablePowerFeatures;
