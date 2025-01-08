import {Component, ElementRef, Input, ViewChild} from "@angular/core";
import {Section} from "../../../interfaces/section";

@Component({
    selector: "app-card-home",
    templateUrl: "./card-home.component.html",
    styleUrls: ["./card-home.component.scss"]
})

export class CardHomeComponent {
    @Input() public cardData: Section;
    @ViewChild("xxxx") public xxxx: ElementRef;
    public loaded:boolean = false;

    public test(){
        console.log("loaded");
        this.loaded = true;
        this.xxxx.nativeElement.style = "display:none";
    }
}
