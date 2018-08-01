const getRandomNumberBetween = (start, end) => Math.floor(Math.random() * end) + start;
const getAgentNames = () => ["Dexters", "YOPA", "Foxtons"][getRandomNumberBetween(0, 2)];
const getPropertyType = () => ["Flat", "Detached", "Terraced"][getRandomNumberBetween(0, 2)];
const getNumOfBedrooms = () => getRandomNumberBetween(1, 6);
const getPrice = () => getRandomNumberBetween(100000, 350000);

export default function createDummyPropertyData(size) {
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
    return propertyData;
}
