import { type SourcedEntityResourceModel } from '@service/data/core/core.models';
import {
  type ApiDataLoaderModel,
  type ApiDataLoaderParamsModel,
} from '@service/data/core/utils/ApiDataLoader/ApiDataLoader.models';
import { DataLoader } from '@service/data/core/utils/DataLoader/DataLoader';

export class ApiDataLoader<TResponse, TType extends SourcedEntityResourceModel, TRoot = undefined>
  extends DataLoader<TType, TRoot>
  implements ApiDataLoaderModel<TType>
{
  params!: ApiDataLoaderParamsModel<TResponse, TType, TRoot>;

  constructor(params: ApiDataLoaderParamsModel<TResponse, TType, TRoot>) {
    super(params);
  }

  async load(): Promise<Array<TType>> {
    throw new Error('Method not implemented.');
  }
}
