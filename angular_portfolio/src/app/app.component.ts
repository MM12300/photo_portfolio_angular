import {Component} from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "angular_portfolio";

    public changeTheme():void{
        console.log("change theme");
    }
}
