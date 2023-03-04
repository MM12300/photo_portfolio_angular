import {Component} from '@angular/core';
import {Photo} from "../interfaces/photo";
import {PhotosService} from "../services/photos.service";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public categories: string[];

    constructor(private _photoService: PhotosService) {
        this._photoService.getPhotos("home").subscribe((res: Photo[]) => {
            this.categories = res.map(photo => photo.category);
        })
    }
}
