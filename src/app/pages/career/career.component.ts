import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CareerModel } from 'src/app/models/career.model';
import { StatusModel } from 'src/app/models/status.model';
import { CareerHttpService } from 'src/app/services/career-http.service';
import { StatusHttpService } from 'src/app/services/status-http.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  careers: CareerModel[] = [];
  status: StatusModel[] = [];
  myForm: FormGroup;


  constructor(private careerHttpService: CareerHttpService,
    private statusHttpService: StatusHttpService,
    private formBuilder: FormBuilder) { this.myForm = this.newForm(); }
  display: boolean = false;
  tituloModal: string = 'Nueva Carrera';
  ngOnInit(): void {
    this.findAll();
    this.loadStatus();
  }

  newForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      durationTime: [null, [Validators.required]],
      // images: [null, [Validators.required]],
      state: [null, [Validators.required]],
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
    this.careerHttpService.update(id, data).subscribe(
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
    this.careerHttpService.findAll().subscribe(response => {
      this.careers = response.data
    });
  }

  findOne(id: number) {
    this.careerHttpService.findOne(id).subscribe(response => {
      this.myForm.patchValue(response.data);
    });
    this.tituloModal = 'Editar Carrera'
  }
  create(data: any) {
    this.careerHttpService.create(data).subscribe(response => {
      this.findAll()
    });
  }

  //  update(payload:any){
  //    this.careerHttpService.update(1,null).subscribe(response=> {
  //      console.log(response);
  //    })
  //  }


  delete(id: number) {
    this.careerHttpService.delete(id).subscribe(response => {
      this.findAll();
    })
  }

  get idField() {
    return this.myForm.controls['id'];
  }

  get nameField() {
    return this.myForm.controls['name'];
  }

  get durationTimeField() {
    return this.myForm.controls['durationTime'];
  }

  get imagesField() {
    return this.myForm.controls['images'];
  }

  get statusField() {
    return this.myForm.controls['state'];
  }

}
