/************************************ TASK 4 ************************************/
const africa = ["Masr", "Egypt", "Sudan", "Somal", "Libya", "Egypt", "Algeria", "Morocco", "Egypt"];
const asia = ["Egypt", "China", "India", "Pakistan", "Japan", "Turkey", "South Korea"];

const africanCountries = new Set(africa);
const asianCountries = new Set(asia);
africanCountries.add("Egypt");
console.log(...africanCountries);
for (const country of africanCountries) {
    console.log(country);
}

console.log(
    `Number of repeated items in african list of countries is: ${africa.length - africanCountries.size}`
);

Set.prototype.difference = function (rhset) {
    let diffSet = new Set();
    for (element of this) {
        if (!rhset.has(element)) {
            diffSet.add(element);
        }
    }
    return diffSet;
};

Set.prototype.union = function (rhset) {
    let unionSet = new Set([...this, ...rhset]);
    return unionSet;
};

diffCountries = africanCountries.difference(asianCountries);
unionSet = africanCountries.union(asianCountries);
console.log(diffCountries);
console.log(unionSet);
