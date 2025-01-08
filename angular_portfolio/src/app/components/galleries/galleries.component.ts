import { Component } from '@angular/core';
import {Photo} from "../../interfaces/photo";
import {DataImportService} from "../../services/data-import.service";
import {Gallery} from "../../interfaces/gallery";
import {UtilitiesService} from "../../services/utilities.service";

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent {
    public galleries: Gallery[];

    constructor(
        private _photoService: DataImportService,
        protected _utilitiesService: UtilitiesService,
    ) {
        this._photoService.getGalleries().subscribe((res: Gallery[]) => {
            this.galleries = res;
        });
    }
}
