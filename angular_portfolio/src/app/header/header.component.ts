import {Component, ElementRef, Renderer2, ViewChild} from "@angular/core";
import {Photo} from "../interfaces/photo";
import {PhotosService} from "../services/photos.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {GalleryTitle} from "../interfaces/galleryTitle";
import {Location} from "@angular/common";


@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    @ViewChild("details") details: ElementRef;

    public categories: string[];
    public galleryTitles: GalleryTitle[];
    public galleryTitle: string;
    public category: string;

    constructor(private _photoService: PhotosService,
                private renderer: Renderer2,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
        this._photoService.getPhotos("home").subscribe((res: Photo[]) => {
            this.categories = res.map(photo => photo.category);
        });

        this.renderer.listen('window', 'click', () => {
            this.closeDetails();
        });

        this.router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    const url = this.location.path();
                    this.category = this.trimAfterLastSlashAndGetLastPart(url);
                    this._photoService.getGalleryTitle().subscribe(titles => {
                        this.galleryTitles = titles
                        if (this.galleryTitles.filter(title => title.url === this.category)[0] !== undefined) {
                            this.galleryTitle = this.galleryTitles.filter(title => title.url === this.category)[0].title;
                        }
                    });
                }
            }
        );
    }

    public closeDetails(): void {
        this.details.nativeElement.removeAttribute("open");
    }

    public trimAfterLastSlashAndGetLastPart(url) {
        const lastSlashIndex = url.lastIndexOf("/");
        if (lastSlashIndex == -1) {
            return "";
        } else {
            return url.slice(lastSlashIndex + 1);
        }
    }
}
