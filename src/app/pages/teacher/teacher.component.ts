import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusModel } from 'src/app/models/status.model';
import { TeacherModel } from 'src/app/models/teacher.model';
import { StatusHttpService } from 'src/app/services/status-http.service';
import { TeacherHttpService } from 'src/app/services/teacher-http.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  teachers: TeacherModel[] = [];
  status: StatusModel[] = [];
  myForm: FormGroup;

  constructor(private teacherHttpService: TeacherHttpService,
    private statusHttpService: StatusHttpService,
    private formBuilder: FormBuilder) { this.myForm = this.newForm(); }
  display: boolean = false;
  tituloModal: string = 'Nuevo Docente';
  ngOnInit(): void {
    this.findAll();
    this.loadStatus();
  }

  newForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      idCard: [null, [Validators.required]],
      name: [null, [Validators.required]],
      state: [null, [Validators.required]],
      telephone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      stateAx: [false,],
    })
  }
  onSubmit() {
    const data = this.myForm.getRawValue()
    delete data.id
    delete data.stateAx
    if (this.myForm.valid) {
      if (this.idField.value) {
        this.update(this.idField.value, data);
      } else {
        delete data.id
        this.create(data);
      }
      this.myForm.reset();
    } else {
      alert('El formulario no es valido');
    }
  }

  prueba(value: any) {
    const estado = value.checked === true ? 'Activo' : 'Inactivo'
    const Actual = this.status.find(e => e.name === estado)
    const clon = this.myForm.getRawValue()
    this.myForm.setValue({ ...clon, state: Actual?.id })
  }

  update(id: number, data: any) {
    this.teacherHttpService.update(id, data).subscribe(
      response => {
        this.findAll();
      }
    )
  }
  loadStatus() {
    this.statusHttpService.findAll().subscribe(
      response => {
        this.status = response.data;
      }
    )
  }

  findAll() {
    this.teacherHttpService.findAll().subscribe(response => {
      this.teachers = response.data;
    });
  }


  findOne(id: number) {
    this.teacherHttpService.findOne(id).subscribe(response => {
      this.myForm.patchValue(response.data);
    });
    this.tituloModal = 'Editar Docente'
  }

  create(data: any) {
    this.teacherHttpService.create(data).subscribe(response => {
      this.findAll()
    });
  }

  delete(id: number) {
    this.teacherHttpService.delete(id).subscribe(
      response => {
        this.findAll();
      }
    )
  }

  get idField() {
    return this.myForm.controls['id'];
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
  get statusField() {
    return this.myForm.controls['state'];
  }
}
