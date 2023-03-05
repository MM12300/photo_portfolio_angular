import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {CardHomeComponent} from './card-home/card-home.component';
import { HttpClientModule} from "@angular/common/http";
import {GalleryComponent} from './gallery/gallery.component';
import {CardPhotoComponent} from './card-photo/card-photo.component';
import { IgFeedComponent } from './ig-feed/ig-feed.component';
import { AboutComponent } from './about/about.component';

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
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
