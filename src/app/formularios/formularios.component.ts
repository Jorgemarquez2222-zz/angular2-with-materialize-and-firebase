import { Component, OnInit,EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})

export class FormulariosComponent implements OnInit {

  registerForm: FormGroup;
  formValues: any;

  constructor(private fb: FormBuilder){};
  
  ngOnInit(){
  
    this.registerForm = this.fb.group({
  
      user: this.fb.group({
  
        firstname: ['Jorge'],
        lastname: ['', Validators.required],
  
    }),
      address: this.fb.group({

        street:[],
        zip: [],
        city:[]
      })
    });

  }

    submitForm(){
      console.log('click submit');
      this.formValues = this.registerForm.value;
    }
}
