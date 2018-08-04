import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilterBox from '../components/FilterBox';
import {
    requestListPropertiesStart, onFilterMinPriceFieldChange,
    onFilterMinBedsFieldChange, filterFieldsError, onLocationChange,
    requestGeoAutoComplete, onSelectionComplete
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

    onFilterMinPriceFieldChange = (field) => {
        field[field.property + "Error"] = (field.value === "");
        field[field.property] = field.value;
        this.props.onFilterMinPriceFieldChange(field);
    };

    onFilterMinBedsFieldChange = (field) => {
        field[field.property + "Error"] = (field.value === "");
        field[field.property] = field.value;
        this.props.onFilterMinBedsFieldChange(field);
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
            <FilterBox {...(filterBoxState.toJS())} onSubmit={this.onSubmit}
                       onFilterMinPriceFieldChange={this.onFilterMinPriceFieldChange}
                       onFilterMinBedsFieldChange={this.onFilterMinBedsFieldChange}
                       onLocationChange={this.onLocationChange} onSelectionComplete={this.onSelectionComplete}/>
        );
    }
}

const mapStateToProps = (state) => ({
    filterBoxState: state.get('filterBox')
});

const mapDispatchToProps = (dispatch) => ({
    requestListPropertiesStart: (filter) => dispatch(requestListPropertiesStart(filter)),
    onFilterMinPriceFieldChange: (field) => dispatch(onFilterMinPriceFieldChange(field)),
    onFilterMinBedsFieldChange: (field) => dispatch(onFilterMinBedsFieldChange(field)),
    filterFieldsError: (errors) => dispatch(filterFieldsError(errors)),
    onLocationChange: (event) => dispatch(onLocationChange(event)),
    requestGeoAutoComplete: (event) => dispatch(requestGeoAutoComplete(event)),
    onSelectionComplete: (selection) => dispatch(onSelectionComplete(selection)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
