import {Component} from '@angular/core';
import {Photo} from "../interfaces/photo";
import {HttpClient} from "@angular/common/http";
import {PhotosService} from "../services/photos.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public homePhotos: Photo[];

    constructor(private _photoService: PhotosService) {
        this._photoService.getPhotos("home").subscribe((res: Photo[]) => {
            this.homePhotos = res;
        })
    }
}
