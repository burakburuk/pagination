import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import FilterBox from '../components/FilterBox';
import ResultTable from '../components/ResultTable';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing.unit * 3,
    },
});

class Filter extends Component {
    onSubmit = (e) => {
        alert("Clicked!");
    };

    render() {
        const {classes, filterBoxState, resultTableState} = this.props;
        return (
            <div className={classes.container}>
                <FilterBox {...filterBoxState} onSubmit={this.onSubmit}/>
                <ResultTable {...resultTableState}/>
            </div>
        );
    }
}

Filter.propTypes = {
    classes: PropTypes.object.isRequired,
};

Filter.contextTypes = {
    t: PropTypes.func
};

const mapStateToProps = (state) => ({
    filterBoxState: state.filterBox,
    resultTableState: state.resultTable
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Filter));