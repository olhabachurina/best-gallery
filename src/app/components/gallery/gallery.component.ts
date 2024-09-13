import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PictureService } from '../../services/picture.service';
import { Picture } from '../../models/picture.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  pictures: Picture[] = [];

  constructor(private pictureService: PictureService, private router: Router) {
    this.loadPictures();
  }

  loadPictures(): void {
    this.pictureService.getPictures().subscribe((pictures) => {
      this.pictures = pictures;
    });
  }

  onSelectPicture(picture: Picture): void {
    this.router.navigate(['/picture', picture.id]);
  }
}