import * as actionTypes from '../constants';
import * as utils from './reducerUtilities';
import * as mutate from "./mutators";
import initialState from './initialState';

export default function filterBoxReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ON_FILTER_MIN_BEDS_FIELDS_CHANGE:
            return utils.pipe([
                mutate.updateMinBeds(action.field.minBeds),
                mutate.updateMinBedsError(action.field.minBedsError)
            ], state);
        case actionTypes.ON_FILTER_MIN_PRICE_FIELDS_CHANGE:
            return utils.pipe([
                mutate.updateMinPrice(action.field.minPrice),
                mutate.updateMinPriceError(action.field.minPriceError)
            ], state);
        case actionTypes.FILTER_FORM_FIELDS_ERROR:
            return utils.pipe([
                mutate.updateMinBedsError(action.errors.minBedsError),
                mutate.updateLocationError(action.errors.locationError),
                mutate.updateMinPriceError(action.errors.minPriceError),
                mutate.updateMessageBoxOpen(true)
            ], state);
        case actionTypes.LIST_PROPERTIES_REQUEST_COMPLETE:
        case actionTypes.HANDLE_LIST_PROPERTIES_REQUEST:
            return state.set('disabled', action.disabled);
        case actionTypes.ON_MESSAGE_BOX_STATUS_CHANGE:
            return state.set('messageBoxOpen', action.isOpen);
        case actionTypes.ON_LOCATION_FILTER_CHANGE:
            return state.set('location', action.location);
        case actionTypes.GEO_AUTO_COMPLETE_REQUEST_DONE:
            return state.set('suggestions', action.suggestions);
        case actionTypes.ON_LOCATION_FILTER_SET:
            return state.set('selectedLocation', action.selectedLocation);
        default :
            return state;
    }
}
