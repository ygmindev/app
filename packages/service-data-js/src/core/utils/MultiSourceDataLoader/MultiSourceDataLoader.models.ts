import { type SourcedEntityResourceModel } from '@service/data/core/core.models';
import {
  type DataLoaderModel,
  type DataLoaderParamsModel,
} from '@service/data/core/utils/DataLoader/DataLoader.models';

export type MultiSourceDataLoaderParamsModel<TType extends SourcedEntityResourceModel> =
  DataLoaderParamsModel<TType> & {
    loaders: Array<DataLoaderModel<TType>>;
  };

export type MultiSourceDataLoaderModel<TType extends SourcedEntityResourceModel> =
  DataLoaderModel<TType>;
