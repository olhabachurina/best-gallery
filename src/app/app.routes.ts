import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PictureDetailsComponent } from './components/picture-details/picture-details.component';

export const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'picture/:id', component: PictureDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Переадресация для неизвестных путей
];