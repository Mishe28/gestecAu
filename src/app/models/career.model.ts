import { StatusModel } from "./status.model";

export interface CareerModel {
    id?: number;
    name?: string;
    durationTime?: string;
    image?: string;
    createdAt?: string
    state?: StatusModel;
}