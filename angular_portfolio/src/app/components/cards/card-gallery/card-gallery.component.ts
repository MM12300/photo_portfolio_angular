import {Component, Input} from "@angular/core";
import {Photo} from "../../../interfaces/photo";
import {Gallery} from "../../../interfaces/gallery";

@Component({
    selector: "app-card-gallery",
    templateUrl: "./card-gallery.component.html",
    styleUrls: ["./card-gallery.component.scss"]
})

export class CardGalleryComponent {
    @Input() cardData: Gallery;
}
