import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { type SourcedEntityResourceModel } from 'packages/service-job-js/src/core/core.models';
import {
  type DataLoaderModel,
  type DataLoaderParamsModel,
} from 'packages/service-job-js/src/core/utils/DataLoader/DataLoader.models';

export class DataLoader<TType extends SourcedEntityResourceModel>
  implements DataLoaderModel<TType>
{
  params!: DataLoaderParamsModel<TType>;

  constructor(params: DataLoaderParamsModel<TType>) {
    this.params = params;
  }

  async fetch(): Promise<Array<Partial<TType>>> {
    throw new Error('Method not implemented.');
  }

  async fetchPostProcess(): Promise<Array<Partial<TType>>> {
    return (await this.fetch()).map((v) => ({ ...v, source: v.source ?? this.params?.source }));
  }

  async upload(): Promise<Array<Partial<TType>>> {
    if (this.params.ResourceImplementation) {
      const data = await this.fetchPostProcess();
      await Container.get(this.params.ResourceImplementation)?.createMany?.({ form: data });
      return data;
    }
    throw new NotFoundError('resource implementaiton');
  }

  get source(): string | undefined {
    return this.params.source;
  }
}
