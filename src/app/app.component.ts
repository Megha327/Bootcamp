import { Component, ViewChild } from '@angular/core';
import { NgForm, MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootcamp';
  @ViewChild('f') signupForm:NgForm;
  DefaultSelected="noida";
  answer = '';
  genders=["Male","Female","Others"];
  user = {
    email: '',
    password: '',
    gender: '',
    city: '',
    file:''
  };
  submitted = false;

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    // console.log(this.signupForm);
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.user.gender = this.signupForm.value.userData.gender;
    this.user.city = this.signupForm.value.userData.city;
    this.user.file = this.signupForm.value.userData.file;  
    this.signupForm.reset();  
  }

  onSugessted(){
    const sugesstedmail = "example@gmail.com";
    // this.signupForm.setValue({
    //   userData:{
    //     email: sugesstedmail,
    //     password:1234,
    //     gender:'Male',
    //     city:'Noida',
    //     file:'',
    //     feedback:''
    //   }
    // });
    this.signupForm.form.patchValue({
      userData:{
        email: sugesstedmail
      }
    });
  }

}

