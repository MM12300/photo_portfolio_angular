import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Photo} from "../interfaces/photo";
import {Observable} from "rxjs";
import {GalleryTitle} from "../interfaces/gallery";
import {Section} from "../interfaces/section";

@Injectable({
    providedIn: "root"
})
export class DataImportService {

    constructor(private http: HttpClient) {
    }

    /**
     * Get photo data (.json)
     * @param category name of the file
     */
    public getPhotos(category: string): Observable<Photo[]> {
        return this.http.get<Photo[]>(`assets/data/photos/${category}.json`).pipe();
    }

    /**
     * Get gallery title data (.json)
     */
    public getGalleryTitle(): Observable<GalleryTitle[]> {
        return this.http.get<GalleryTitle[]>(`assets/data/photos/gallery-titles.json`).pipe();
    }

    /**
     * Get gallery title data (.json)
     */
    public getSections(): Observable<Section[]> {
        return this.http.get<Section[]>(`assets/data/home.json`).pipe();
    }
}
