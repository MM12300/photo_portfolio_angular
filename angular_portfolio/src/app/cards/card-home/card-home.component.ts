import {Component, Input} from "@angular/core";
import {Photo} from "../../interfaces/photo";
import {Section} from "../../interfaces/section";

@Component({
    selector: "app-card-home",
    templateUrl: "./card-home.component.html",
    styleUrls: ["./card-home.component.scss"]
})

export class CardHomeComponent {
    @Input() cardData: Section;
}
