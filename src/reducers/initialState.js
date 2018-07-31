const initialState = {
    filterBox: {
        location: "",
        minPrice: "",
        minBeds: "",
        disabled: false,
    },
    resultTable: {
        data: [],
        page: 0,
        rowsPerPage: 5
    }
};

export default initialState;
