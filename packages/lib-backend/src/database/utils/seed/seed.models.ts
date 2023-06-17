import type { WithResourceNameModel } from '#lib-shared/resource/decorators/withResourceName/withResourceName.models';

export type SeedParamsModel = {
  names?: Array<string>;
};

export type SeedDataModel<TType> = {
  data: Array<TType | (() => Promise<TType>)>;
} & WithResourceNameModel;
