import type { WithResourceNameModel } from '@lib/shared/resource/decorators/withResourceName/withResourceName.models';

export interface SeedParamsModel {
  names?: Array<string>;
}

export interface SeedDataModel<TForm> extends WithResourceNameModel {
  data: Array<TForm>;
}
