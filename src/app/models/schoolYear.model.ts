import { StatusModel } from "./status.model";
export interface SchoolYearModel {
    id?: number;
    name?: string;
    startDate?: string;
    endDate?: string;
    status?: StatusModel;
}