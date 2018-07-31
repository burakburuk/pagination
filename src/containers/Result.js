import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ResultTable from '../components/ResultTable';

class Result extends Component {
    render() {
        const {resultTableState} = this.props;
        return (
            <ResultTable {...resultTableState}/>
        )
    }
}

Result.contextTypes = {
    t: PropTypes.func
};

const mapStateToProps = (state) => ({
    resultTableState: state.resultTable
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result);