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
    render() {
        const {classes, filterState} = this.props;
        return (
            <div className={classes.container}>
                <FilterBox/>
                <ResultTable {...filterState}/>
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
    filterState: state.filter
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Filter));