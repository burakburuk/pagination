const API_ROOT = 'https://api.zoopla.co.uk/api/v1/';
const API_KEY = 'r5rvh7etdx2wvzrrxdy5jnyk';

const propertyData = [
    {listingId: 1, price: 150000, bedrooms: 1, propertyType: "Flat", agentName: "Dexters"},
    {listingId: 2, price: 250000, bedrooms: 6, propertyType: "Detached", agentName: "YOPA"},
    {listingId: 3, price: 50000, bedrooms: 3, propertyType: "Terraced", agentName: "Foxtons"},
];

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
//export const requestProperties = (params) => callApi('property_listings', params);
export const requestProperties = (params) => {
    return new Promise((resolve, reject) => {
        resolve({response: propertyData});
    });
};
export const requestGeoAutoComplete = () => callApi('geo_autocomplete');