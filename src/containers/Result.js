import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ResultTable from '../components/ResultTable';
import {handleChangeRowsPerPage, handleChangePage} from '../actions';

class Result extends Component {
    handleChangePage = (event, page) => {
        this.props.handleChangePage(page);
    };

    handleChangeRowsPerPage = event => {
        this.props.handleChangeRowsPerPage(event);
    };

    render() {
        const {resultTableState} = this.props;
        return (
            <ResultTable {...resultTableState} handleChangePage={this.handleChangePage}
                         handleChangeRowsPerPage={this.handleChangeRowsPerPage}/>
        )
    }
}

Result.contextTypes = {
    t: PropTypes.func
};

const mapStateToProps = (state) => ({
    resultTableState: state.resultTable
});

const mapDispatchToProps = (dispatch) => ({
    handleChangeRowsPerPage: (event) => dispatch(handleChangeRowsPerPage(event)),
    handleChangePage: (event) => dispatch(handleChangePage(event)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result);