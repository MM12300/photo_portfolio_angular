import {Component, Input} from "@angular/core";
import {Photo} from "../interfaces/photo";

@Component({
    selector: "app-card-photo",
    templateUrl: "./card-photo.component.html",
    styleUrls: ["./card-photo.component.scss"]
})
export class CardPhotoComponent {
    @Input() photo: Photo;
}
