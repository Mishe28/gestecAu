import { CareerModel } from "./career.model";
import { StatusModel } from "./status.model";
import { TeacherDistributionModel } from "./teacherDistribution.model";

export interface RequestModel {
    id?: number;
    date?: string;
    totalHoursRequested?: string;
    startDate?: string;
    endDate?: string;
    career?: CareerModel;
    teacherDistribution?: TeacherDistributionModel;
    state?: StatusModel;
}