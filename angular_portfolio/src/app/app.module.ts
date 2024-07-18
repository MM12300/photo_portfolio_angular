import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./pages/home/home.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {HeaderComponent} from "./layout/header/header.component";
import {CardHomeComponent} from "./cards/card-home/card-home.component";
import { HttpClientModule} from "@angular/common/http";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {CardPhotoComponent} from "./cards/card-photo/card-photo.component";
import { IgFeedComponent } from "./ig-feed/ig-feed.component";
import { AboutComponent } from "./pages/about/about.component";
import { CardIgComponent } from "./cards/card-ig/card-ig.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularMaterialModule} from "./angularMaterial.module";
import {MatRippleModule} from "@angular/material/core";
import {HashLocationStrategy, LocationStrategy, NgOptimizedImage} from '@angular/common';
import {CardGalleryComponent} from "./cards/card-gallery/card-gallery.component";
import {GalleriesComponent} from "./pages/galleries/galleries.component";
import {ReturnButtonComponent} from "./return-button/return-button.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
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
