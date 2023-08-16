import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {CardHomeComponent} from "./card-home/card-home.component";
import { HttpClientModule} from "@angular/common/http";
import {GalleryComponent} from "./gallery/gallery.component";
import {CardPhotoComponent} from "./card-photo/card-photo.component";
import { IgFeedComponent } from "./ig-feed/ig-feed.component";
import { AboutComponent } from "./about/about.component";
import { CardIgComponent } from "./card-ig/card-ig.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularMaterialModule} from "./angularMaterial.module";
import {MatRippleModule} from "@angular/material/core";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        CardHomeComponent,
        GalleryComponent,
        CardPhotoComponent,
        IgFeedComponent,
        AboutComponent,
        CardIgComponent,
        ContactFormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        MatRippleModule,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
