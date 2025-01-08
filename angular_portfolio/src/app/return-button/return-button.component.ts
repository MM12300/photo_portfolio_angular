import {Component, Input} from "@angular/core";
import {UtilitiesService} from "../services/utilities.service";

@Component({
  selector: "app-return-button",
  templateUrl: "./return-button.component.html",
  styleUrls: ["./return-button.component.scss"]
})

export class ReturnButtonComponent {
    @Input() public text:string;

    constructor(
        protected _utilitiesService: UtilitiesService,
    ) {
    }

    /**
     * Method to go back to previous route in Angular route history
     */
    public goBack() : void {
        this._utilitiesService.goBack();
    }
}
