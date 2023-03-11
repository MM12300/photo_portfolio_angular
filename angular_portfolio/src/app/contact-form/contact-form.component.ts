import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit{

    contactForm:FormGroup;

    constructor(public formBuilder:FormBuilder) {

    }

    ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            name: ['', [Validators.required, ]],
            email: ['', [Validators.required, Validators.email]],
            content:['', [Validators.required]]
        });
    }

    submitForm() {
        console.log(this.contactForm.value);
    }

}
