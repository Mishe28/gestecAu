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
  request: RequestModel[] = [];
  teacherDistributive: TeacherDistributionModel[] = [];
  careers: CareerModel[] = [];
  status: StatusModel[] = [];
  subjects: SubjectModel[] = [];
  courses: CourseModel[] = [];
  schoolYear: SchoolYearModel[] = [];
  myForm: FormGroup;
  
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
      date: [null, Validators.required],
      totalHoursRequested: [null, Validators.required, Validators.min(0)],
      startDate: [null,Validators.required],
      endDate: [null,Validators.required],
      career: [null,Validators.required],
      teacherDistribution: [null,Validators.required],
      status:[4],
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
    if (this.myForm.valid) {
      if (this.idField.value) {
        this.update();
      } else {
        this.create();
      }
      this.myForm.reset();
    } else {
      alert('El formulario no es valido');
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
  create() {
    this.requestHttpService.create(this.myForm.value).subscribe(response => {
      this.findAll()
    });
  }

  update() {
    this.requestHttpService.update(this.idField.value, this.myForm.value).subscribe(response => {
      this.findAll();
    });
  }

  delete(id: number) {
    this.requestHttpService.delete(id).subscribe(response => {
      this.findAll();
    });
  }

  get idField() {
    return this.myForm.controls['id'];
  }
  get careerField() {
    return this.myForm.controls['career'];
  }
  get teacherDistributiveField() {
    return this.myForm.controls['teacherDistributive'];
  }
  get startDateField() {
    return this.myForm.controls['startDate'];
  }
  get endDateField() {
    return this.myForm.controls['endDate'];
  }
  get hourField() {
    return this.myForm.controls['hour'];
  }

}
