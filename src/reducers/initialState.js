const initialState = {
    filterBox: {
        location: "",
        locationError: false,
        minPrice: "",
        minPriceError: false,
        minBeds: "",
        minBedsError: false,
        disabled: false,
    },
    resultTable: {
        isDisabled: false,
        data: [],
        page: 0,
        rowsPerPage: 20,
        areaName: "",
        resultCount: 0,
    }
};

export default initialState;
