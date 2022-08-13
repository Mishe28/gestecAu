import { StatusModel } from "./status.model";

export interface TeacherModel {
    id?: number;
    idCard?: string;
    name?: string;
    email?: string;
    telephone?: string;
    state?: StatusModel;
}