import type { WithResourceNameModel } from '@lib/shared/resource/decorators/withResourceName/withResourceName.models';

export interface SeedParamsModel {
  names?: Array<string>;
}

export interface SeedDataModel<TType> extends WithResourceNameModel {
  data: Array<TType | (() => Promise<TType>)>;
}
