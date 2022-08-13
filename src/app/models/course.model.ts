import { CareerModel } from "./career.model";
import { LevelModel } from "./level.model";
import { ParallelModel } from "./parallel.model";
import { SchoolDayModel } from "./schoolDay.model";
import { TeacherModel } from "./teacher.model";

export interface CourseModel {
    id?: number;
    name?: string;
    level?: LevelModel;
    schoolDay?: SchoolDayModel;
    parallel?: ParallelModel;
    career?: CareerModel;
    tutor?: TeacherModel;
    code?: string;
    images?: string;
}