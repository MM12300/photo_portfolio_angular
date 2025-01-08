import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"]
})
export class ContactFormComponent implements OnInit{

    public contactForm:FormGroup;

    constructor(public formBuilder:FormBuilder) {

    }

    public ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            name: ["", [Validators.required, ]],
            email: ["", [Validators.required, Validators.email]],
            content:["", [Validators.required]]
        });
    }

    public submitForm() {
        console.log(this.contactForm.value);
    }

}
