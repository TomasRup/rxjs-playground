import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ReduxObservableExample extends Component {

  render() {
    const { repositories, searchRepositories } = this.props;
    return (
      <div>
      <input type="text" onChange={e => searchRepositories(e.target.value)}/>
      {repositories.map((repository, idx) =>
        <div key={idx}>{repository}</div>
      )}
      </div>
    );
  }
}

ReduxObservableExample.propTypes = {
  repositories: PropTypes.array.isRequired,
  searchRepositories: PropTypes.func.isRequired,
};

export default ReduxObservableExample;
