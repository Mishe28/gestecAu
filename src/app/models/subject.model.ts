import { CareerModel } from "./career.model";
import { TeacherModel } from "./teacher.model";

export interface SubjectModel {
    id?: number;
    code?: string;
    name?: string;
    theoriticalHours?: string;
    labortoryHours?: string;
    teacher?: TeacherModel;
    career?: CareerModel;
}