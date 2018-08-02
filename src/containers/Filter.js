import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilterBox from '../components/FilterBox';
import {
    requestListPropertiesStart, onFilterFormFieldsChange,
    filterFieldsError, onLocationChange, requestGeoAutoComplete,
    onSelectionComplete
} from '../actions';

class Filter extends Component {
    onSubmit = (e) => {
        const {filterBoxState} = this.props;
        const errorObj = {
            "locationError": (filterBoxState.location === ""),
            "minPriceError": (filterBoxState.minPrice === ""),
            "minBedsError": (filterBoxState.minBeds === "")
        };
        for (let key in errorObj) {
            if (errorObj[key]) {
                return this.props.filterFieldsError(errorObj);
            }
        }
        const requestParams = {
            'area': filterBoxState.location,
            'min_price': filterBoxState.minPrice,
            'minimum_beds': filterBoxState.minBeds
        };
        this.props.requestListPropertiesStart(requestParams);
    };

    handleFieldChange = (field) => {
        field[field.property + "Error"] = (field.value === "");
        field[field.property] = field.value;
        this.props.onFilterFormFieldsChange(field);
    };

    onLocationChange = (event) => {
        this.props.requestGeoAutoComplete(event);
    };

    onSelectionComplete = (selection) => {
        this.props.onSelectionComplete(selection);
    };

    render() {
        const {filterBoxState} = this.props;
        return (
            <FilterBox {...filterBoxState} onSubmit={this.onSubmit} handleFieldChange={this.handleFieldChange}
                       onLocationChange={this.onLocationChange} onSelectionComplete={this.onSelectionComplete}/>
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
    requestListPropertiesStart: (filter) => dispatch(requestListPropertiesStart(filter)),
    onFilterFormFieldsChange: (field) => dispatch(onFilterFormFieldsChange(field)),
    filterFieldsError: (errors) => dispatch(filterFieldsError(errors)),
    onLocationChange: (event) => dispatch(onLocationChange(event)),
    requestGeoAutoComplete: (event) => dispatch(requestGeoAutoComplete(event)),
    onSelectionComplete: (selection) => dispatch(onSelectionComplete(selection)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);