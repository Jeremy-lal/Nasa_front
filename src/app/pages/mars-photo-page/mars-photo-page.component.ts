import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../shared/services/photo.service';

@Component({
  selector: 'app-mars-photo-page',
  templateUrl: './mars-photo-page.component.html',
  styleUrls: ['./mars-photo-page.component.scss']
})
export class MarsPhotoPageComponent implements OnInit {

  allphotos;
  FirstsPictures;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
      this.photoService.getPicture().subscribe( (datas) => {
        this.allphotos = datas;
        this.FirstsPictures = this.allphotos.photos.slice(140, 170);
        console.log(this.FirstsPictures);
      });
  }

}
