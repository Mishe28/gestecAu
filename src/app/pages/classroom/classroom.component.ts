import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassroomModel } from 'src/app/models/classroom.model';
import { LocationModel } from 'src/app/models/location.model';
import { StatusModel } from 'src/app/models/status.model';
import { ClassroomHttpService } from 'src/app/services/classroom-http.service';
import { LocationHttpService } from 'src/app/services/location-http.service';
import { StatusHttpService } from 'src/app/services/status-http.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
})
export class ClassroomComponent implements OnInit {
  myForm: FormGroup;
  classrooms: ClassroomModel[] = [];
  locations: LocationModel[] = [];
  status: StatusModel[] = [];
  constructor(private classroomHttpService: ClassroomHttpService,
    private formBuilder: FormBuilder,
    private statusHttpService: StatusHttpService,
    private locationHttpService: LocationHttpService) { this.myForm = this.newForm(); }

  display: boolean = false;
  tituloModal: string = 'Nuevo Aulas';
  searchText: any;
  newForm(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      capacity: [null, [Validators.required]],
      location: [null, [Validators.required]],
      state: [null, [Validators.required]],
      stateAx: [false,],
    })
  }
  // filtrar(event: Event) {
  //   const filtro = (event.target as HTMLInputElement).value;
  //   this.classrooms.filter = filtro.trim().toLowerCase();
  // }
  showModal() {
    this.tituloModal = 'Nueva Aula'
    this.display = true;
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
  ocultarModal() {
    this.display = false;
    this.myForm.reset();
  }
  ngOnInit(): void {
    this.findAll();
    this.loadLocations();
    this.loadStatus();

  }
  prueba(value: any) {
    const estado = value.checked === true ? 'Activo' : 'Inactivo'
    const Actual = this.status.find(e => e.name === estado)
    const clon = this.myForm.getRawValue()
    this.myForm.setValue({ ...clon, state: Actual?.id })
  }

  loadStatus() {
    this.statusHttpService.findAll().subscribe(
      response => {
        this.status = response.data;
      }
    )
  }

  loadLocations() {
    this.locationHttpService.findAll().subscribe(
      response => {
        this.locations = response.data;
      }
    )
  }

  update(id: number, data: any) {
    this.classroomHttpService.update(id, data).subscribe(
      response => {
        this.findAll();
      }
    )
  }
  findAll() {
    this.classroomHttpService.findAll().subscribe((response) => {
      this.classrooms = response.data;
    });
  }

  findOne(id: number) {
    this.classroomHttpService.findOne(id).subscribe(response => {
      this.myForm.patchValue(response.data);
    }
    )
    this.showModal()
    this.tituloModal = 'Editar Aula'
  }
  create(data: any) {
    this.classroomHttpService.create(data).subscribe((response) => {
      this.findAll()
    });
  }
  delete(id: number) {
    this.classroomHttpService.delete(id).subscribe((response) => {
      this.findAll();
    });
  }

  get idField() {
    return this.myForm.controls['id'];
  }
  get nameField() {
    return this.myForm.controls['name'];
  }
  get capacityField() {
    return this.myForm.controls['capacity'];
  }
  get locationField() {
    return this.myForm.controls['location'];
  }
  get statusField() {
    return this.myForm.controls['state'];
  }
}
