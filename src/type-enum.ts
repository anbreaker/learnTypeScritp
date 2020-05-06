// Orientacion para Fotografias
// Enumeracion en JS
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
  Landscape, // 0
  Portrait, // 1
  Square, // 2
  Panorama, // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
  Landscape = 10, // 10
  Portrait, // 11
  Square, // 12
  Panorama, // 13
}

console.log('portrait', PictureOrientation.Portrait);

enum Country {
  Espana = 'esp',
  Bolivia = 'bol',
  EEUU = 'usa',
  Colombia = 'col',
}

const country: Country = Country.Espana;
console.log('country', country);
