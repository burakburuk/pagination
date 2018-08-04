import * as actionTypes from "../constants";

export const updateMinPrice = minPrice => s => s.set('minPrice', minPrice);
export const updateMinPriceError = minPriceError => s => s.set('minPriceError', minPriceError);

export const updateMinBeds = minBeds => s => s.set('minBeds', minBeds);
export const updateMinBedsError = minBedsError => s => s.set('minBedsError', minBedsError);

export const updateAreaName = areaName => s => s.set('areaName', areaName);
export const updateResultCount = resultCount => s => s.set('resultCount', resultCount);
export const updateData = data => s => s.set('data', data);
export const updateIsDisabled = isDisabled => s => s.set('isDisabled', isDisabled);

export const updateRowsPerPage = rowsPerPage => s => s.set('rowsPerPage', rowsPerPage);
export const updatePage = page => s => s.set('page', page);

//export const updateMinBeds = loan => s => s.setIn(['loans', loan.id], Immutable.fromJS(loan));

//export const updateMinBeds = minBeds => s => s.set('minBeds', minBeds);

export const updateItems = (state, items) => {
    debugger;
    return state.withMutations(state => {
        items.forEach(item => {
            state.set(item.get('id'), item);
        });
    });
};


// s.set('location', action.field.location || state.get('location'));
// s.set('locationError', action.field.locationError || state.get('locationError'));
// s.set('minPrice', action.field.minPrice || state.get('minPrice'));
// s.set('minPriceError', action.field.minPriceError || state.get('minPriceError'));
// s.set('minBeds', action.field.minBeds || state.get('minBeds'));
// s.set('minBedsError', action.field.minBedsError || state.get('minBedsError'));
// s.set('disabled', action.field.disabled || state.get('disabled'));
// s.set('suggestions', action.field.suggestions || state.get('suggestions'));
// s.set('selectedLocation', action.field.selectedLocation || state.get('selectedLocation'));
