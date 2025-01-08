import { Component } from "@angular/core";
import {DataImportService} from "../../services/data-import.service";
import {Gallery} from "../../interfaces/gallery";

@Component({
  selector: "app-galleries",
  templateUrl: "./galleries.component.html",
  styleUrls: ["./galleries.component.scss"]
})
export class GalleriesComponent {
    public galleries: Gallery[];

    constructor(
        private _photoService: DataImportService,
    ) {
        this._photoService.getGalleries().subscribe((res: Gallery[]) => {
            this.galleries = res;
        });
    }
}
