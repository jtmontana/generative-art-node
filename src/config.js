const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'border', number: 2 },
    { name: 'logo_face', number: 3 },
    { name: 'logo_eyes', number: 4 },
    { name: 'logo_nose', number: 4 },
    { name: 'logo_mouth', number: 4 },
    { name: 'logo_hair', number: 5 },
    { name: 'logo_accessory', number: 6 },
    { name: 'logo_accessory', number: 6 },
];
  
const format = {
    width: 230,
    height: 230
};

// Suffix rarity keys to end of filenames like this someimage_sr.png to give that file the rarity attribute. 
const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
    { key: "_omg", val: "GODLIKE" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };