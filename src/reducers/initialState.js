const initialState = {
    filterBox: {
        suggestions: [],
        location: "",
        selectedLocation: {
            label: "",
            value: ""
        },
        locationError: false,
        minPrice: "",
        minPriceError: false,
        minBeds: "",
        minBedsError: false,
        disabled: false
    },
    resultTable: {
        isDisabled: false,
        data: [],
        page: 0,
        rowsPerPage: 20,
        areaName: "",
        resultCount: 0,
        rowsPerPageOptions: [10, 20, 50]
    }
};

export default initialState;
