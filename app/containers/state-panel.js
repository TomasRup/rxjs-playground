import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RepositoryFinder from '../components/repository-finder';
import { actions } from '../state';


class StatePanel extends Component {
    render() {
        const { repositories, repositoryActions } = this.props;
        return (
            <div>
                <RepositoryFinder
                    repositories={repositories}
                    searchRepositories={repositoryActions.searchRepositories}
                    />
            </div>
        );
    }
};

StatePanel.propTypes = {
    repositoryActions: PropTypes.object.isRequired,
    repositories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    repositories: state.repositories
});

const mapDispatchToProps = dispatch => ({
    repositoryActions: bindActionCreators(actions.repository, dispatch)
}); 

export default connect(mapStateToProps, mapDispatchToProps)(StatePanel);