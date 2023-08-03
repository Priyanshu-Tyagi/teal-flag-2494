const fs = require('fs');

// Define the path to your JSON file and the keys you want to search for and delete
const jsonFilePath = './data.js';
const keysToDelete = ["colorCount","colorDefaultId","colorSpriteUrl", "colorsById", "colorIds", "enticements", "inventoryWarning", "isBeauty", "isNordstromMade", "isOutfit", "isFeatured", "isUmap", "extraNameCopy", "priceCurrencyCode", "priceCountryCode", "clearance", "price", "productPageUrl", "productModuleId", "storeAvailability" ];

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Search for and delete the specified keys in the JSON data
        if (Array.isArray(jsonData)) {
            jsonData.forEach(obj => {
                keysToDelete.forEach(key => {
                    // "hasOwnProperty" returns boolean value if it's present in the object than it will return  true else false
                    if (obj.hasOwnProperty(key)) {
                        delete obj[key];
                    }
                });
            });
        }

        // Write the updated JSON data back to the file
        fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8', err => {
            if (err) {
                console.error('Error writing JSON file:', err);
                return;
            }

            // console.log(`The specified keys were successfully deleted from the JSON data.`);
        });
    } catch (err) {
        console.error('Error parsing JSON data:', err);
    }
});