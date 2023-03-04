import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PhotosService} from "../services/photos.service";
import {Photo} from "../interfaces/photo";
import {ActivatedRoute, ParamMap} from "@angular/router";


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {
    public category: string;
    public photosFromCategories: Photo[];
    public photosLandscapeFormat: Photo[];
    public photosPortraitFormat: Photo[];
    public photoFetched: boolean;

    constructor(
        private _photoService: PhotosService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.category = params.get('category');
            console.log(this.category);

            this._photoService.getPhotos(this.category).subscribe(photos => {
                this.photosFromCategories = photos;
                console.log(this.photosFromCategories);
                this.photosPortraitFormat = this.photosFromCategories.filter(photo => photo.format === "portrait");
                this.photosLandscapeFormat = this.photosFromCategories.filter(photo => photo.format === "landscape");
                console.log(this.photosPortraitFormat);
                console.log(this.photosLandscapeFormat);
                this.photoFetched = true;
                this.photosLandscapeFormat.forEach(photo => {
                    console.log(photo.src);
                })
            })
        });
    }
}
