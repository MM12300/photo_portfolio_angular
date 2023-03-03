import {Component} from '@angular/core';
import {Photo} from "../interfaces/photo";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public homePhotos: Photo[];

  constructor(private http: HttpClient) {
    this.http.get<Photo[]>('assets/data/photos/photo_home.json').subscribe((res: Photo[]) => {
      this.homePhotos = res;
    });
  }
}
