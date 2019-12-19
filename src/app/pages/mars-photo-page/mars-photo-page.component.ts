import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../shared/services/photo.service';

@Component({
  selector: 'app-mars-photo-page',
  templateUrl: './mars-photo-page.component.html',
  styleUrls: ['./mars-photo-page.component.scss']
})
export class MarsPhotoPageComponent implements OnInit {

  allphotos;
  hundredFirstPicture;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
      // this.photoService.getPicture().subscribe( (datas) => {
      //   this.allphotos = datas;
      //   this.hundredFirstPicture = this.allphotos.photos.slice(0, 20);
      //   console.log(this.allphotos);
      //   console.log(this.hundredFirstPicture);
      // });
  }

}
