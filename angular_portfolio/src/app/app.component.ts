import {Component, Inject, Renderer2} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    public title = "angular_portfolio";

    public theme:string;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2)
    {
        if(localStorage.getItem("theme") === "dark-theme"){
            this.theme = "dark-theme";
            this.setTheme(this.theme);
        }
    }

    /**
     * Change theme on theme slide toggle (event)
     */
    public changeTheme():void{
        if(localStorage.getItem("theme") === "light-theme" || localStorage.getItem("theme") === null ){
            this.theme = "dark-theme";
            this.setTheme(this.theme);
        } else if(localStorage.getItem("theme") === "dark-theme"){
            this.theme = "light-theme";
            this.setTheme(this.theme);
        }
    }

    /**
     * Set theme to dark theme or light theme
     * @param theme
     */
    public setTheme(theme:string):void{
        if(theme === "light-theme"){
            localStorage.setItem("theme", "light-theme");
            this.renderer.addClass(this.document.body, "light-theme");
            this.renderer.removeClass(this.document.body, "dark-theme");
        }else if(theme === "dark-theme"){
            localStorage.setItem("theme", "dark-theme");
            this.renderer.removeClass(this.document.body, "light-theme");
            this.renderer.addClass(this.document.body, "dark-theme");
        }
    }
}
