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
    return <ReduxObservableExample
      repositories={repositories}
      searchRepositories={repositoryActions.searchRepositories}
      />
  }

  render() {
    const { repositories, repositoryActions } = this.props;
    return (
      <div>
        {/* {this.renderCreatingObservables(1)} */}
        {/* {this.renderObservablePowerFeatures(1)} */}
        {this.renderReduxObservableExample()}
      </div>
    );
  }
};

Demo.propTypes = {
  repositoryActions: PropTypes.object.isRequired,
  repositories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  repositories: state.repositories
});

const mapDispatchToProps = dispatch => ({
  repositoryActions: bindActionCreators(actions.repository, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
