import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import {
  type DataLoaderModel,
  type DataLoaderParamsModel,
} from '@service/job/data/utils/DataLoader/DataLoader.models';

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

  get name(): string {
    return this.params.name ?? this.constructor.name;
  }

  get source(): string | undefined {
    return this.params.source;
  }
}
