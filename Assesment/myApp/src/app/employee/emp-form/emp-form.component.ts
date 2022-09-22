import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { emp } from '../emp';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent implements OnInit {

  // @ViewChild ('formdata') userform?: NgForm;
  form : FormGroup;
  formdata: emp [] = []

  constructor(private formB: FormBuilder) {
    this.form = this.formB.group({
      name: ['', [Validators.required, Validators.minLength(3)], Validators.pattern('^[a-zA-Z]+$')],
      gender: ['', Validators.required, Validators.pattern('^[a-zA-Z]$')],
      dob: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]$')]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);
    // const name = this.form.value.name;
    // const gender = this.form.value.gender;
    // const dob = this.form.value.dob;
    // const salary = this.form.value.salary;
    // this.formdata.push(name,gender,dob,salary);
    this.formdata.push(this.form.value);
    // console.log(this.formdata);
    this.onReset();
  }

  onReset() {
    // console.log('reset');
    this.form.reset();
  }
}
