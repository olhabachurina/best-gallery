import { Injectable } from '@angular/core';
import { Picture } from '../models/picture.model';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private pictures: Picture[] = [
    
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
