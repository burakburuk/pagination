const API_ROOT = 'https://api.zoopla.co.uk/api/v1/';
const API_KEY = '898x2tnpnkpx8gawk987p39a';

// Fetches an API response and returns a promise
function callApi(endpoint) {
    let fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    return fetch(fullUrl + `?api_key=${API_KEY}`)
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
export const requestProperties = () => callApi('property_listings');
export const requestGeoAutocomplete = () => callApi('geo_autocomplete');