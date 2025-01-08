import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {Section} from "../../../interfaces/section";

@Component({
    selector: "app-card-home",
    templateUrl: "./card-home.component.html",
    styleUrls: ["./card-home.component.scss"]
})

export class CardHomeComponent {
    @Input() cardData: Section;
    @ViewChild('xxxx') xxxx: ElementRef;
    public loaded:boolean = false;

    test(){
        console.log("loaded");
        this.loaded = true;
        this.xxxx.nativeElement.style = "display:none";
    }
}
