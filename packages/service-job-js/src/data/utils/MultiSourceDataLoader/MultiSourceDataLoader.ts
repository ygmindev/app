import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';
import { mapParallel } from '@lib/shared/core/utils/mapParallel/mapParallel';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
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

  async fetch(): Promise<PartialArrayModel<TType>> {
    return (
      await mapParallel(
        this.params.loaders.map(async (v) => {
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
