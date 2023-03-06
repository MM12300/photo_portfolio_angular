import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "gallery/:category", component: GalleryComponent},
    {path: "about", component: AboutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
