import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders=["Male","Female","Others"];
  signupform:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signupform = new FormGroup({
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'paswrd': new FormControl(null, Validators.required),
      'gen': new FormControl('Female'),
      'cit': new FormControl('Noida', Validators.required),
      'fil': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.signupform);
  }

}
