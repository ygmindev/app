import { Container } from '@lib/shared/core/utils/Container/Container';
import { type SourcedEntityResourceModel } from '@service/data/core/core.models';
import {
  type DataLoaderModel,
  type DataLoaderParamsModel,
} from '@service/data/core/utils/DataLoader/DataLoader.models';

export class DataLoader<TType extends SourcedEntityResourceModel, TRoot = undefined>
  implements DataLoaderModel<TType>
{
  params!: DataLoaderParamsModel<TType, TRoot>;

  constructor(params: DataLoaderParamsModel<TType, TRoot>) {
    this.params = params;
  }

  async load(): Promise<Array<Partial<TType>>> {
    throw new Error('Method not implemented.');
  }

  async upload(): Promise<Array<TType>> {
    let data = await this.load();
    data = data.map((v) => ({ ...v, source: this.params?.source }));
    await Container.get(this.params.ResourceImplementation)?.createMany?.({ form: data });
    return data;
  }
}
