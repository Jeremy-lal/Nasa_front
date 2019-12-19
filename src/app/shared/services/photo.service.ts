import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  static URLphoto = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';

  constructor(private http: HttpClient) { }

  getPicture() {
    return this.http.get(PhotoService.URLphoto);
  }

}
