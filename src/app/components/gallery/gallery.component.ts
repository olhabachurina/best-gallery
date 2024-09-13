import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureService } from '../../services/picture.service';
import { Picture } from '../../models/picture.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',  // Ссылка на внешний HTML-шаблон
})
export class GalleryComponent {
  pictures: Picture[] = [];

  constructor(private pictureService: PictureService, private router: Router) {
    this.loadPictures();
  }

  loadPictures(): void {
    this.pictures = this.pictureService.getPictures();
  }

  onSelectPicture(picture: Picture): void {
    this.router.navigate(['/picture', picture.id]);
  }
}