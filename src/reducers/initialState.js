import {List} from 'immutable';

const initialState = {
    filterBox: {
        suggestions: List(),
        location: "",
        selectedLocation: {
            label: "",
            value: ""
        },
        messageBoxOpen: false,
        locationError: false,
        minPrice: "",
        minPriceError: false,
        minBeds: "",
        minBedsError: false,
        disabled: false
    },
    resultTable: {
        isDisabled: false,
        data: List(),
        page: 0,
        rowsPerPage: 20,
        areaName: "",
        resultCount: 0,
        rowsPerPageOptions: List([10, 20, 50])
    }
};

export default initialState;
