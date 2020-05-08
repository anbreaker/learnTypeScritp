"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funcion para mostrar Fotografia
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`[title: ${picture.title},
                date: ${picture.date},
                orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'Test title',
    date: '2020-05',
    orientation: PhotoOrientation.Landscape,
};
// Formas de utilizar
showPicture(myPic);
showPicture({
    title: 'Test title',
    date: '2020-05',
    orientation: PhotoOrientation.Portrait,
});
console.log(showPicture);
function showPicture2(picture) {
    console.log(`[title: ${picture.title},
                date: ${picture.date},
                orientation: ${picture.orientation}]`);
}
console.log(showPicture2(myPic));
function generatePicture(config) {
    const pic = { title: 'default', date: '2020-05', orientation: 'algo' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    if (config.orientation) {
        pic.orientation = config.orientation;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('picture', picture);
picture = generatePicture({
    title: 'Travel Pic',
    date: '2020-05-08',
    orientation: PhotoOrientation.Panorama,
});
console.log('picture', picture);
let user;
user = {
    id: 10,
    username: 'anbreaker',
    isPro: true,
};
console.log('user', user);
user.username = 'Jessica';
console.log('user', user);
