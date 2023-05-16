import { ImportDynamicModel } from "@lib/shared/core/utils/importDynamic/importDynamic.models";

export type ImportFromEnvParamsModel = [name: string, extensions?: Array<string>];

export type ImportFromEnvModel<TType> = ImportDynamicModel<TType>;
