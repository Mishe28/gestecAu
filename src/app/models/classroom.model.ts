import { LocationModel } from "./location.model";
import { StatusModel } from "./status.model";
export interface ClassroomModel {
    id?: number;
    name?: string;
    capacity?: string;
    location?: LocationModel;
    state?: StatusModel;
}