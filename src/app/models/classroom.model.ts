import { StatusModel } from "./status.model";
export interface ClassroomModel {
    id?: number;
    name?: string;
    capacity?: string;
    location?: string;
    status?: StatusModel;
}