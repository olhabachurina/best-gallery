import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PictureService } from '../../services/picture.service';
import { Picture } from '../../models/picture.model'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-picture-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent {
  picture: Picture | null = null;  // Убедитесь, что тип включает null

  constructor(
    private route: ActivatedRoute,
    private pictureService: PictureService
  ) {
    this.loadPicture();
  }

  loadPicture(): void {
    const id = +this.route.snapshot.params['id'];
    this.pictureService.getPictureById(id).subscribe((data: Picture | null) => {
      this.picture = data;
    });
  }
}