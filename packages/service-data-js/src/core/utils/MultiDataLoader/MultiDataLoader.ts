import { mapParallel } from '@lib/shared/core/utils/mapParallel/mapParallel';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type SourcedEntityResourceModel } from '@service/data/core/core.models';
import { DataLoader } from '@service/data/core/utils/DataLoader/DataLoader';
import {
  type MultiDataLoaderModel,
  type MultiDataLoaderParamsModel,
} from '@service/data/core/utils/MultiDataLoader/MultiDataLoader.models';

export class MultiDataLoader<TType extends SourcedEntityResourceModel>
  extends DataLoader<TType>
  implements MultiDataLoaderModel<TType>
{
  params!: MultiDataLoaderParamsModel<TType>;

  constructor(params: MultiDataLoaderParamsModel<TType>) {
    super(params);
  }

  async fetch(): Promise<Array<Partial<TType>>> {
    return (
      await mapParallel(
        this.params.loaders.map((v) => async () => {
          try {
            return await v.fetch();
          } catch (e) {
            logger.error(`skipping ${v.source} with error: ${e as Error}`);
            return [];
          }
        }),
      )
    ).flat();
  }
}
