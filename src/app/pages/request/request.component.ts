import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CareerModel } from 'src/app/models/career.model';
import { CourseModel } from 'src/app/models/course.model';
import { RequestModel } from 'src/app/models/request.model';
import { SchoolYearModel } from 'src/app/models/schoolYear.model';
import { StatusModel } from 'src/app/models/status.model';
import { SubjectModel } from 'src/app/models/subject.model';
import { TeacherDistributionModel } from 'src/app/models/teacherDistribution.model';
import { CareerHttpService } from 'src/app/services/career-http.service';
import { CourseHttpService } from 'src/app/services/course-http.service';
import { RequestHttpService } from 'src/app/services/request-http.service';
import { SchoolYearHttpService } from 'src/app/services/school-year-http.service';
import { StatusHttpService } from 'src/app/services/status-http.service';
import { SubjectHttpService } from 'src/app/services/subject-http.service';
import { TeacherDistributiveHttpService } from 'src/app/services/teacher-distributive-http.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  page=1;
  pageSize = 10;
  titleModule = 'Solicitudes';
  request: RequestModel[] = [];
  teacherDistributive: TeacherDistributionModel[] = [];
  careers: CareerModel[] = [];
  status: StatusModel[] = [];
  subjects: SubjectModel[] = [];
  courses: CourseModel[] = [];
  schoolYear: SchoolYearModel[] = [];
  myForm: FormGroup;
  fechaActual = new Date();
  state = 4;
  
  constructor(
    private requestHttpService: RequestHttpService, 
    private teacherDistributiveHttpService: TeacherDistributiveHttpService,
    private careerHttpService : CareerHttpService,
    private statusHttpService : StatusHttpService,
    private subjectHttpService : SubjectHttpService,
    private courseHttpService : CourseHttpService,
    private schoolYearHttpService : SchoolYearHttpService,
    private formBuilder: FormBuilder) { 
      this.myForm = this.newForm(); 
    }

    ngOnInit(): void {
      this.findAll();
      this.loadCareers();
      this.loadTeacherDistributive();
      this.loadStatus();
      this.loadSubjects();
      this.loadCourses();
      this.loadSchoolYear();
    }

  newForm(): FormGroup {
    return this.formBuilder.group({
      date:[null],
      id: [null],
      totalHoursRequested: [null, [Validators.required]],
      startDate: [null,[Validators.required]],
      endDate: [null,[Validators.required]],
      career: [null,[Validators.required]],
      teacherDistribution: [null,[Validators.required]],
      state:[null],
    })
  }

  loadTeacherDistributive() {
    this.teacherDistributiveHttpService.findAll().subscribe(
      Response => {
        this.teacherDistributive = Response.data;
      }
    )

  }

  loadCareers() {
    this.careerHttpService.findAll().subscribe(
      Response => {
        this.careers = Response.data;
      }
    )
  }

  loadSchoolYear() {
    this.schoolYearHttpService.findAll().subscribe(
      Response => {
        this.schoolYear = Response.data;
      }
    )
  }

  loadStatus() {
    this.statusHttpService.findAll().subscribe(
      Response => {
        this.status = Response.data;
      }
    )
  }

  loadCourses() {
    this.courseHttpService.findAll().subscribe(
      Response => {
        this.courses = Response.data;
      }
    )
  }

  loadSubjects() {
    this.subjectHttpService.findAll().subscribe(
      Response => {
        this.subjects = Response.data;
      }
    )
  }

  guardar() {
    const data=this.myForm.getRawValue();
    delete data.id;
    if (this.myForm.valid) {
      if (this.idField.value) {
        this.update(this.idField.value, data);
      } else {
        this.create(data);
      }
      this.myForm.reset();
    } else {
      alert('El formulario no es valido');
      console.log(data);
    }
  }

  findAll() {
    this.requestHttpService.findAll().subscribe(response => {
      this.request = response.data;
      console.log(response.data);
    });
  }

  findOne(id: number) {
    this.requestHttpService.findOne(id).subscribe(response => {
      this.myForm.patchValue(response.data);
      this.request = response.data;
    });
  }
  create(data:any) {
    this.requestHttpService.create(data).subscribe(response => {
      this.findAll();
    });
  }

  update(id:number, data:any) {
    this.requestHttpService.update(id, data).subscribe(response => {
      this.findAll();
    });
  }

  delete(id: number) {
    this.requestHttpService.delete(id).subscribe(response => {
      this.findAll();
    });
  }

  stateAct(){
    this.fechaActual = new Date();
  }

  get idField() {
    return this.myForm.controls['id'];
  }
  get careerField() {
    return this.myForm.controls['career'];
  }
  get teacherDistributiveField() {
    return this.myForm.controls['teacherDistribution'];
  }
  get startDateField() {
    return this.myForm.controls['startDate'];
  }
  get endDateField() {
    return this.myForm.controls['endDate'];
  }
  get hourField() {
    return this.myForm.controls['totalHoursRequested'];
  }

  get dateField() {
    return this.myForm.controls['date'];
  }

  get stateField() {
    return this.myForm.controls['state'];
  }


  


}
