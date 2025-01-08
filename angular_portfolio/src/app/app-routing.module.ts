import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {AboutComponent} from "./components/about/about.component";
import {GalleriesComponent} from "./components/galleries/galleries.component";

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "gallery/:category", component: GalleryComponent},
    {path: "about", component: AboutComponent},
    {path: "galleries", component: GalleriesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
