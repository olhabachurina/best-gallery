import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PictureService } from '../../services/picture.service';
import { Picture } from '../../models/picture.model';

@Component({
  selector: 'app-picture-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-details.component.html',  // Ссылка на внешний HTML-шаблон
  styleUrls: ['./picture-details.component.css']    // Ссылка на внешний файл стилей
})
export class PictureDetailsComponent {
  picture: Picture | undefined;

  constructor(private route: ActivatedRoute, private pictureService: PictureService) {
    this.loadPicture();
  }

  loadPicture(): void {
    const id = +this.route.snapshot.params['id'];
    this.picture = this.pictureService.getPictureById(id);
  }
}