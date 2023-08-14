import {Component, ElementRef, Renderer2, ViewChild} from "@angular/core";
import {Photo} from "../interfaces/photo";
import {PhotosService} from "../services/photos.service";


@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent{
    @ViewChild("details") details : ElementRef;

    public categories: string[];

    constructor(private _photoService: PhotosService,
                private renderer: Renderer2) {
        this._photoService.getPhotos("home").subscribe((res: Photo[]) => {
            this.categories = res.map(photo => photo.category);
        });

        this.renderer.listen('window', 'click',()=>{
            this.closeDetails();
        });
    }


    public closeDetails(): void{
        this.details.nativeElement.removeAttribute("open");
    }
}
