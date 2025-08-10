import { mapParallel } from '@lib/shared/core/utils/mapParallel/mapParallel';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { DataLoader } from '@service/job/data/utils/DataLoader/DataLoader';
import {
  type MultiSourceDataLoaderModel,
  type MultiSourceDataLoaderParamsModel,
} from '@service/job/data/utils/MultiSourceDataLoader/MultiSourceDataLoader.models';

export class MultiSourceDataLoader<TType extends SourcedEntityResourceModel>
  extends DataLoader<TType>
  implements MultiSourceDataLoaderModel<TType>
{
  params!: MultiSourceDataLoaderParamsModel<TType>;

  constructor(params: MultiSourceDataLoaderParamsModel<TType>) {
    super(params);
  }

  async fetch(): Promise<Array<Partial<TType>>> {
    return (
      await mapParallel(
        this.params.loaders.map((v) => async () => {
          try {
            return await v.fetchPostProcess();
          } catch (e) {
            logger.error(`skipping ${v.source} with error: ${e as Error}`);
            return [];
          }
        }),
      )
    ).flat();
  }
}
