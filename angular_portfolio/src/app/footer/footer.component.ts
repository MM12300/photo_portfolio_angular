import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {

    @Output() themeEvent = new EventEmitter<void>();

    /**
     * Top to Bottomn arrow
     */
    public bottomToTop(): void {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    public toggleThemeEvent():void{
        this.themeEvent.emit();
    }

}
