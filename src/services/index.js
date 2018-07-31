const API_ROOT = 'https://api.zoopla.co.uk/api/v1/';
const API_KEY = 'r5rvh7etdx2wvzrrxdy5jnyk';

function createParams(params = []) {
    let result = params.reduce((accumulator, currentValue) => {
        return accumulator + currentValue + "&"
    }, "?");

    return result;
}

// Fetches an API response and returns a promise
function callApi(endpoint, params) {
    let fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    const parameters = createParams(params);
    return fetch(fullUrl + parameters + `api_key=${API_KEY}`, {
        mode: 'no-cors'
    })
        .then(response =>
            response.json().then(json => ({json, response}))
        ).then(({json, response}) => {
            if (!response.ok) {
                return Promise.reject(json)
            }

            return json;
        })
        .then(
            response => ({response}),
            error => ({error: error.message || 'Something bad happened'})
        )
}

// api services
export const requestProperties = (params) => callApi('property_listings', params);
export const requestGeoAutoComplete = () => callApi('geo_autocomplete');