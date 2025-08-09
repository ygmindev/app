import { mapParallel } from '@lib/shared/core/utils/mapParallel/mapParallel';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type SourcedEntityResourceModel } from 'packages/service-job-js/src/core/core.models';
import { DataLoader } from 'packages/service-job-js/src/core/utils/DataLoader/DataLoader';
import {
  type MultiSourceDataLoaderModel,
  type MultiSourceDataLoaderParamsModel,
} from 'packages/service-job-js/src/core/utils/MultiSourceDataLoader/MultiSourceDataLoader.models';

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
