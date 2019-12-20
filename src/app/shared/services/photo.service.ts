import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // tslint:disable-next-line: max-line-length
  static URLphoto = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=SkWDeXnO7APX1zMU84pV4W9xo72dflvSGvlf2kkV';

  constructor(private http: HttpClient) { }

  getPicture() {
    return this.http.get(PhotoService.URLphoto);
  }

}
