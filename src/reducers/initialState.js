const initialState = {
    filterBox: {
        location: "",
        minPrice: 0,
        minBeds: 0,
        disabled: false,
    },
    resultTable: {
        data: [],
        page: 0,
        rowsPerPage: 5
    }
};

export default initialState;
