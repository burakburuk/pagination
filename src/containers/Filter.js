import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilterBox from '../components/FilterBox';
import {requestListProperties} from '../actions';

class Filter extends Component {
    onSubmit = (e) => {
        const filter = ["area=Oxford"];
        this.props.requestListProperties(filter);
    };

    render() {
        const {filterBoxState} = this.props;
        return (
            <FilterBox {...filterBoxState} onSubmit={this.onSubmit}/>
        );
    }
}

Filter.contextTypes = {
    t: PropTypes.func
};

const mapStateToProps = (state) => ({
    filterBoxState: state.filterBox
});

const mapDispatchToProps = (dispatch) => ({
    requestListProperties: (filter) => dispatch(requestListProperties(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);