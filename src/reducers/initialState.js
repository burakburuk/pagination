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
        data: [],
        page: 0,
        rowsPerPage: 5
    }
};

export default initialState;
