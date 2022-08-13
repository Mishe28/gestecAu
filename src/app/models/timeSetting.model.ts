import { CareerModel } from "./career.model";
import { SchoolDayModel } from "./schoolDay.model";

export interface TimeSettingModel {
    id?: number;
    weeklyHours?: string;
    HoursUsed?: string;
    HoursAbailable?: string;
    career?: CareerModel;
    schoolDay?: SchoolDayModel;
}