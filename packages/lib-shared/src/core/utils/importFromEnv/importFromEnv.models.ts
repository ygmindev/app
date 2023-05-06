export type ImportFromEnvParamsModel = [name: string, extensions?: Array<string>];

export type ImportFromEnvModel<TType> = Promise<TType>;
