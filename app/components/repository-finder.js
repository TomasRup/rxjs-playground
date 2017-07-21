import React, { Component } from 'react';
import PropTypes from 'prop-types';


class RepositoryFinder extends Component {

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

RepositoryFinder.propTypes = {
    repositories: PropTypes.array.isRequired,
    searchRepositories: PropTypes.func.isRequired
};

export default RepositoryFinder;
