import {Component} from "@angular/core";
import {Photo} from "../../interfaces/photo";
import {DataImportService} from "../../services/data-import.service";
import {Section} from "../../interfaces/section";
import {UtilitiesService} from "../../services/utilities.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
    public homePhotos: Section[];

    constructor(
        private _photoService: DataImportService,
    ) {
        this._photoService.getSections().subscribe((res: Section[]) => {
            this.homePhotos = res;
        });
    }
}
