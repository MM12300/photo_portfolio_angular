import { Component } from '@angular/core';
import {Photo} from "../interfaces/photo";
import {DataImportService} from "../services/data-import.service";

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent {
    public galleryPhotos: Photo[];

    constructor(private _photoService: DataImportService) {
        this._photoService.getPhotos("gallery").subscribe((res: Photo[]) => {
            this.galleryPhotos = res;
        });
    }
}
