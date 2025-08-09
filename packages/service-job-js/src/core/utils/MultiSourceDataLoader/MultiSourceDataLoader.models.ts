import { type SourcedEntityResourceModel } from 'packages/service-job-js/src/core/core.models';
import {
  type DataLoaderModel,
  type DataLoaderParamsModel,
} from 'packages/service-job-js/src/core/utils/DataLoader/DataLoader.models';

export type MultiSourceDataLoaderParamsModel<TType extends SourcedEntityResourceModel> =
  DataLoaderParamsModel<TType> & {
    loaders: Array<DataLoaderModel<TType>>;
  };

export type MultiSourceDataLoaderModel<TType extends SourcedEntityResourceModel> =
  DataLoaderModel<TType>;
