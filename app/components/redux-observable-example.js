import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ReduxObservableExample extends Component {

  renderUniversity(university, index) {
    return (
      <div key={index}>{university.name} - <a>{university.web_page}</a> ({university.country})</div>
    );
  }

  render() {
    const { universities, searchUniversities, moveMouse } = this.props;
    return (
      <div onMouseMove={() => moveMouse()}>
      <input
        type="text"
        onChange={e => searchUniversities(e.target.value)}
        />
      {universities && universities.map(this.renderUniversity)}
      </div>
    );
  }
}

ReduxObservableExample.propTypes = {
  universities: PropTypes.array.isRequired,
  searchUniversities: PropTypes.func.isRequired,
  moveMouse: PropTypes.func.isRequired,
};

export default ReduxObservableExample;
