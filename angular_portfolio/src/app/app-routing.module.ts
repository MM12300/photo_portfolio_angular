import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {AboutComponent} from "./pages/about/about.component";
import {GalleriesComponent} from "./pages/galleries/galleries.component";

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
