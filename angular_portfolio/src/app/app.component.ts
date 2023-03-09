import {Component, Inject, Renderer2} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "angular_portfolio";

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2) {
    }
    public changeTheme():void{
        //TODO : REPLACE BY CHECK OF LOCAL STORAGE
        // FOR THAT ADD LIGHT THEME TO LOCAL STORAGE ON APP LOADING
        if(document.body.classList.contains("light-theme")){
            this.renderer.removeClass(this.document.body, "light-theme");
            this.renderer.addClass(this.document.body, "dark-theme");
        }else{
            this.renderer.addClass(this.document.body, "light-theme");
            this.renderer.removeClass(this.document.body, "dark-theme");
        }

    }
}
