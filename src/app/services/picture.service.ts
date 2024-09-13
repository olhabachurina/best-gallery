import { Injectable } from '@angular/core';
import { Picture } from '../models/picture.model';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private pictures: Picture[] = [
    {
      id: 1,
      title: 'Starry Night',
      author: 'Vincent van Gogh',
      year: 1889,
      dimensions: '73.7 cm × 92.1 cm',
      location: 'Museum of Modern Art, New York',
      descriptionUrl: 'https://en.wikipedia.org/wiki/The_Starry_Night',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/525px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
      thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/525px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
    },
    {
      id: 2,
      title: 'The Persistence of Memory',
      author: 'Salvador Dalí',
      year: 1931,
      dimensions: '24 cm × 33 cm',
      location: 'Museum of Modern Art, New York',
      descriptionUrl: 'https://en.wikipedia.org/wiki/The_Persistence_of_Memory',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
      thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg'
    },
    {
      id: 3,
      title: 'Mona Lisa',
      author: 'Leonardo da Vinci',
      year: 1503,
      dimensions: '77 cm × 53 cm',
      location: 'Louvre Museum, Paris',
      descriptionUrl: 'https://en.wikipedia.org/wiki/Mona_Lisa',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg',
      thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg'
    },
    {
      id: 4,
      title: 'Girl with a Pearl Earring',
      author: 'Johannes Vermeer',
      year: 1665,
      dimensions: '44.5 cm × 39 cm',
      location: 'Mauritshuis, The Hague',
      descriptionUrl: 'https://en.wikipedia.org/wiki/The_Persistence_of_Memory',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg',
      thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg'
    },
    {
      id: 5,
      title: 'The Scream',
      author: 'Edvard Munch',
      year: 1893,
      dimensions: '91 cm × 73.5 cm',
      location: 'National Gallery, Oslo',
      descriptionUrl: 'https://en.wikipedia.org/wiki/The_Scream',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg',
      thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg'
    },
    {
      id: 6,
      title: 'The Birth of Venus',
      author: 'Sandro Botticelli',
      year: 1486,
      dimensions: '172.5 cm × 278.9 cm',
      location: 'Uffizi Gallery, Florence',
      descriptionUrl: 'https://en.wikipedia.org/wiki/The_Birth_of_Venus',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/400px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
      thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/400px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg'
    },
    {
      id: 7,
      title: 'The Night Watch',
      author: 'Rembrandt',
      year: 1642,
      dimensions: '363 cm × 437 cm',
      location: 'Rijksmuseum, Amsterdam',
      descriptionUrl: 'https://en.wikipedia.org/wiki/The_Night_Watch',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/380px-The_Night_Watch_-_HD.jpg',
      thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/380px-The_Night_Watch_-_HD.jpg'
    },

  ];

  constructor() {}

  // Метод для получения картины по её ID
  getPictureById(id: number): Picture | undefined {
    return this.pictures.find(picture => picture.id === id);
  }

  // Метод для получения всех картин
  getPictures(): Picture[] {
    return this.pictures;
  }
}
