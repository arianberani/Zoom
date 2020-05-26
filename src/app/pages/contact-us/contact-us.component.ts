import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get f() {
    return this.registerForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}




