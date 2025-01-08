import {Component, ElementRef, Renderer2, ViewChild} from "@angular/core";
import {DataImportService} from "../../services/data-import.service";
import {Section} from "../../interfaces/section";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    @ViewChild("details") public details: ElementRef;

    public categories: string[];
    public sections: Section[];

    constructor(
        private _photoService: DataImportService,
        private renderer: Renderer2
    ) {
        this._photoService.getSections().subscribe((res: Section[]) => {
            this.categories = res.map(section => section.category);
            this.sections = res;
        });

        this.renderer.listen("window", "click", () => {
            this.closeDetails();
        });
    }

    public closeDetails(): void {
        this.details.nativeElement.removeAttribute("open");
    }
}
