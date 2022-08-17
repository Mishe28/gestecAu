import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CareerModel } from 'src/app/models/career.model';
import { CourseModel } from 'src/app/models/course.model';
import { LevelModel } from 'src/app/models/level.model';
import { RequestModel } from 'src/app/models/request.model';
import { SchoolYearModel } from 'src/app/models/schoolYear.model';
import { ScheduleConfigurationModel } from 'src/app/models/sheduleConfiguration.model';
import { StatusModel } from 'src/app/models/status.model';
import { SubjectModel } from 'src/app/models/subject.model';
import { TeacherDistributionModel } from 'src/app/models/teacherDistribution.model';
import { CareerHttpService } from 'src/app/services/career-http.service';
import { CourseHttpService } from 'src/app/services/course-http.service';
import { LevelHttpService } from 'src/app/services/level-http.service';
import { RequestHttpService } from 'src/app/services/request-http.service';
import { ScheduleHttpService } from 'src/app/services/schedule-http.service';
import { SchoolYearHttpService } from 'src/app/services/school-year-http.service';
import { StatusHttpService } from 'src/app/services/status-http.service';
import { SubjectHttpService } from 'src/app/services/subject-http.service';
import { TeacherDistributiveHttpService } from 'src/app/services/teacher-distributive-http.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  scheduleConfiguration: ScheduleConfigurationModel[] = [];
  request: RequestModel[] = [];
  teacherDistributive: TeacherDistributionModel[] = [];
  careers: CareerModel[] = [];
  status: StatusModel[] = [];
  subjects: SubjectModel[] = [];
  courses: CourseModel[] = [];
  levels: LevelModel[] = [];
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
    private levelHttpService : LevelHttpService,
    private scheduleConfigurationService : ScheduleHttpService,
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
      this.loadRequest();
    }

  newForm(): FormGroup {
    return this.formBuilder.group({
      id:[null],
      request: [null, Validators.required],
      classroom: [null, Validators.required],
      day: [null,Validators.required],
      hour: [null,Validators.required],
      color: [null,Validators.required],
      status:[3]
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

  loadRequest() {
    this.requestHttpService.findAll().subscribe(
      Response => {
        this.request = Response.data;
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
    this.scheduleConfigurationService.findAll().subscribe(response => {
      this.scheduleConfiguration = response.data;
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
