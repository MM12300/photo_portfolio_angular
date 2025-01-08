import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./components/home/home.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {HeaderComponent} from "./layout/header/header.component";
import {CardHomeComponent} from "./components/cards/card-home/card-home.component";
import { HttpClientModule} from "@angular/common/http";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {CardPhotoComponent} from "./components/cards/card-photo/card-photo.component";
import { IgFeedComponent } from "./components/ig-feed/ig-feed.component";
import { AboutComponent } from "./components/about/about.component";
import { CardIgComponent } from "./components/cards/card-ig/card-ig.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularMaterialModule} from "./angularMaterial.module";
import {MatRippleModule} from "@angular/material/core";
import {HashLocationStrategy, LocationStrategy, NgOptimizedImage} from '@angular/common';
import {CardGalleryComponent} from "./components/cards/card-gallery/card-gallery.component";
import {GalleriesComponent} from "./components/galleries/galleries.component";
import {ReturnButtonComponent} from "./return-button/return-button.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CardHomeComponent,
        CardGalleryComponent,
        GalleryComponent,
        GalleriesComponent,
        CardPhotoComponent,
        IgFeedComponent,
        AboutComponent,
        CardIgComponent,
        ContactFormComponent,
        ReturnButtonComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        MatRippleModule,
        NgOptimizedImage,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
