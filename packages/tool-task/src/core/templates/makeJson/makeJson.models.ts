import { CallablePromiseModel } from "@lib/shared/core/core.models";

export interface MakeJsonParamsModel {
    value: CallablePromiseModel<object>;
    filename: string;
}
