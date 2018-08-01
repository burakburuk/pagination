const getRandomNumberBetween = (start, end) => Math.floor(Math.random() * end) + start;
const getAgentNames = () => ["Dexters", "YOPA", "Foxtons"][getRandomNumberBetween(0, 2)];
const getPropertyType = () => ["Flat", "Detached", "Terraced"][getRandomNumberBetween(0, 2)];
const getNumOfBedrooms = () => getRandomNumberBetween(1, 6);
const getPrice = () => getRandomNumberBetween(100000, 350000);
const getLocation = () => ["Cambridge", "Oxford", "London", "Eidenburg"];

export function createDummyPropertyData(params, size) {
    let propertyData = [];
    for (let i = 0; i < size; i++) {
        const obj = {
            listingId: (i + 1),
            price: getPrice(),
            bedrooms: getNumOfBedrooms(),
            propertyType: getPropertyType(),
            agentName: getAgentNames()
        };
        propertyData.push(obj);
    }
    return filterResult(propertyData, params);
}

function filterResult(propertyData, params) {
    return propertyData.filter(item => {
        if (params["min_price"] !== "") {
            if (parseInt(params["min_price"]) > item.price) {
                return false;
            }
        }
        if (params["minimum_beds"] !== "") {
            if (parseInt(params["minimum_beds"]) > item.bedrooms) {
                return false;
            }
        }
        return true;
    });
}

export function createDummyLocationData(filter) {
    return getLocation().filter(filter);
}
