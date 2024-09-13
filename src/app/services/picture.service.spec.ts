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
      imageUrl: 'assets/images/starry-night.jpg',
      thumbnailUrl: 'assets/images/starry-night-thumb.jpg'
    },
    {
      id: 2,
      title: 'The Persistence of Memory',
      author: 'Salvador Dalí',
      year: 1931,
      dimensions: '24 cm × 33 cm',
      location: 'Museum of Modern Art, New York',
      descriptionUrl: 'https://en.wikipedia.org/wiki/The_Persistence_of_Memory',
      imageUrl: 'assets/images/persistence-of-memory.jpg',
      thumbnailUrl: 'assets/images/persistence-of-memory-thumb.jpg'
    }
  ];

  constructor() {}

  // Возвращает все картины
  getPictures(): Picture[] {
    return this.pictures;
  }

  // Возвращает картину по ID
  getPictureById(id: number): Picture | undefined {
    return this.pictures.find(picture => picture.id === id);
  }
}
