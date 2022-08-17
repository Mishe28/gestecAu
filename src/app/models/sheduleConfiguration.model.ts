import { ClassroomModel } from "./classroom.model";
import { ColorModel } from "./color.model";
import { DayModel } from "./day.model";
import { HourModel } from "./hour.model";
import { RequestModel } from "./request.model";
import { StatusModel } from "./status.model";

export interface ScheduleConfigurationModel {
    id?: number;
    date?: string;
    color?: ColorModel;
    day?: DayModel;
    hour?: HourModel;
    classroom?: ClassroomModel;
    status?: StatusModel;
    request?: RequestModel;
}