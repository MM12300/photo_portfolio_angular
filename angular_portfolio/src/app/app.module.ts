import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {CardHomeComponent} from './card-home/card-home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GalleryComponent} from './gallery/gallery.component';
import {CardPhotoComponent} from './card-photo/card-photo.component';
import {LoadingInterceptor} from "./loading.interceptor";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        CardHomeComponent,
        GalleryComponent,
        CardPhotoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
