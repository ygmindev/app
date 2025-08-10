import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import {
  type DataLoaderModel,
  type DataLoaderParamsModel,
} from '@service/job/data/utils/DataLoader/DataLoader.models';

export type MultiSourceDataLoaderParamsModel<TType extends SourcedEntityResourceModel> =
  DataLoaderParamsModel<TType> & {
    loaders: Array<DataLoaderModel<TType>>;
  };

export type MultiSourceDataLoaderModel<TType extends SourcedEntityResourceModel> =
  DataLoaderModel<TType>;
