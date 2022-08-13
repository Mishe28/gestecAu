import { CourseModel } from "./course.model";
import { SchoolYearModel } from "./schoolYear.model";
import { SubjectModel } from "./subject.model";
import { TeacherModel } from "./teacher.model";

export interface TeacherDistributionModel {
    id?: number;
    name?: string;
    schoolYear?: SchoolYearModel;
    subject?: SubjectModel;
    course?: CourseModel;
    teacher?: TeacherModel;
}