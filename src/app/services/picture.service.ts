import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Picture } from '../models/picture.model';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private jsonUrl = 'assets/paintings.json';

  constructor(private http: HttpClient) { }

  // Получение данных о картинах из JSON-файла на сервере
  getPictures(): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.jsonUrl);
  }
  
  // Получение данных о картине по ID
  getPictureById(id: number): Observable<Picture | null> {
    return this.getPictures().pipe(
      map(pictures => pictures.find(picture => picture.id === id) || null)
    );
  }
}