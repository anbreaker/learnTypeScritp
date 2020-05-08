export {};
// Funcion para mostrar Fotografia

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

function showPicture(picture: {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}) {
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

// Usando interfaces

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture2(picture: Picture) {
  console.log(`[title: ${picture.title},
                date: ${picture.date},
                orientation: ${picture.orientation}]`);
}

console.log(showPicture2(myPic));

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = {title: 'default', date: '2020-05', orientation: 'algo'};
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
picture = generatePicture({title: 'Travel Pic'});
console.log('picture', picture);
picture = generatePicture({
  title: 'Travel Pic',
  date: '2020-05-08',
  orientation: PhotoOrientation.Panorama,
});
console.log('picture', picture);

// Interface: Usuario
interface User {
  readonly id: number; //--> para no poder cambiar el valor
  username: string;
  isPro: boolean;
}

let user: User;
user = {
  id: 10,
  username: 'anbreaker',
  isPro: true,
};

console.log('user', user);
user.username = 'Jessica';
console.log('user', user);
