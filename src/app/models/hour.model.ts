import { StatusModel } from "./status.model";
export interface HourModel {
    id?: number;
    hour?: string;
    shedulePosition?: string;
    status?: StatusModel;
}