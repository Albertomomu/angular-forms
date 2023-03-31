import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  employeeForm!: FormGroup

  constructor(private formBuilder: FormBuilder){
    this.buildForm();
  }

  buildForm(){
    this.employeeForm = this.formBuilder.group({
      name: ["", Validators.required],
      lastName: "",
      gender: "", // SIEMPRE VACIO
      observations: ""
  })
  }

  onSaveEmployee(){
    if(!this.employeeForm.valid){
      console.warn("Formulario invalido")
      return
    }else{

    }
  }

}
