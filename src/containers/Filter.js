import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilterBox from '../components/FilterBox';
import {requestListProperties, onFilterFormFieldsChange, filterFieldsError} from '../actions';

class Filter extends Component {
    onSubmit = (e) => {
        const {filterBoxState} = this.props;
        const errorObj = {
            //"locationError": (filterBoxState.location === ""),
            "minPriceError": (filterBoxState.minPrice === ""),
            "minBedsError": (filterBoxState.minBeds === "")
        };
        for (let key in errorObj) {
            if (errorObj[key]) {
                return this.props.filterFieldsError(errorObj);
            }
        }
        //filterBoxState.location
        const requestParams = {
            'area': 'Oxford',
            'min_price': filterBoxState.minPrice,
            'minimum_beds': filterBoxState.minBeds,
            'order': 'ascending',
            'page_number': 1,
            'page_size': 10
        };
        this.props.requestListProperties(requestParams);
    };

    handleFieldChange = (field) => {
        field[field.property + "Error"] = (field.value === "");
        field[field.property] = field.value;
        this.props.onFilterFormFieldsChange(field);
    };

    render() {
        const {filterBoxState} = this.props;
        return (
            <FilterBox {...filterBoxState} onSubmit={this.onSubmit} handleFieldChange={this.handleFieldChange}/>
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
    requestListProperties: (filter) => dispatch(requestListProperties(filter)),
    onFilterFormFieldsChange: (field) => dispatch(onFilterFormFieldsChange(field)),
    filterFieldsError: (errors) => dispatch(filterFieldsError(errors)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);