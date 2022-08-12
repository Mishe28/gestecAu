import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherModel } from 'src/app/models/teacher.model';
import { TeacherHttpService } from 'src/app/services/teacher-http.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  teachers: TeacherModel[] = [];
  myForm: FormGroup;

  constructor(private teacherHttpService: TeacherHttpService,
    private formBuilder: FormBuilder) { this.myForm = this.newForm(); }
  display: boolean = false;
  newForm(): FormGroup {
    return this.formBuilder.group({
      name: [null,],
      state: [1,],
      telephone: [null,],
      email: [null,],
      idCard: [null,],
    })
  }
  showDialog() {
    this.display = true;
  }
  guardar() {
    if (this.myForm.valid) {
      if (this.idCardField.value) {
        this.create();

      } else {
        this.create();
      }
      this.myForm.reset();
    } else {
      alert('El formulario no es valido');
    }
  }
  ocultarDialog() {
    this.display = false;
  }

  ngOnInit(): void {
    this.findAll();

  }

  findAll() {
    this.teacherHttpService.findAll().subscribe(response => {
      this.teachers = response.data;
    });
  }

  findOne() {
    this.teacherHttpService.findOne(1).subscribe(response => {
      console.log(response);
    });
  }
  create() {
    this.teacherHttpService.create(this.myForm.value).subscribe(response => {
      this.findAll()
    });
  }

  update() {
    this.teacherHttpService.update(1, null).subscribe(response => {
      console.log(response);
    });
  }
  delete() {
    this.teacherHttpService.delete(1).subscribe(response => {
      console.log(response);
    });
  }

  get idCardField() {
    return this.myForm.controls['idCard'];
  }
  get nameField() {
    return this.myForm.controls['name'];
  }
  get telephoneField() {
    return this.myForm.controls['telephone'];
  }
  get emailField() {
    return this.myForm.controls['email'];
  }
}
