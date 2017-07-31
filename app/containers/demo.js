import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreatingObservables from '../components/creating-observables';
import ObservablePowerFeatures from '../components/observable-power-features';
import ReduxObservableExample from '../components/redux-observable-example';
import { actions } from '../state';


class Demo extends Component {

  renderCreatingObservables(caseId) {
    return <CreatingObservables case={caseId}/>;
  }

  renderObservablePowerFeatures(caseId) {
    return <ObservablePowerFeatures case={caseId}/>;
  }

  renderReduxObservableExample() {
    const { universities, universityActions, uiActions } = this.props;
    return <ReduxObservableExample
      universities={universities}
      searchUniversities={universityActions.searchUniversities}
      moveMouse={uiActions.moveMouse}
      />
  }

  render() {
    return (
      <div>
        {this.renderCreatingObservables(1)}
        {/* {this.renderObservablePowerFeatures(1)} */}
        {/* {this.renderReduxObservableExample()} */}
      </div>
    );
  }
};

Demo.propTypes = {
  universityActions: PropTypes.object.isRequired,
  universities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  universities: state.universities
});

const mapDispatchToProps = dispatch => ({
  universityActions: bindActionCreators(actions.university, dispatch),
  uiActions: bindActionCreators(actions.ui, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
