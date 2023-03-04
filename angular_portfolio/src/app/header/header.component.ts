import {Component, ElementRef, ViewChild} from '@angular/core';
import {Photo} from "../interfaces/photo";
import {PhotosService} from "../services/photos.service";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @ViewChild('details') details : ElementRef;

    public categories: string[];

    constructor(private _photoService: PhotosService) {
        this._photoService.getPhotos("home").subscribe((res: Photo[]) => {
            this.categories = res.map(photo => photo.category);
        })
    }

    public closeDetails(): void{
        this.details.nativeElement.removeAttribute("open");
    }
}
