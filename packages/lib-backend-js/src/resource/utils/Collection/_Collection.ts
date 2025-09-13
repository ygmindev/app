import {
  type _CollectionModel,
  type _CollectionParamsModel,
} from '@lib/backend/core/utils/Collection/_Collection.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';
import { Collection } from '@mikro-orm/core';

export class _Collection<TType extends EntityResourceModel, TRoot extends EntityResourceModel>
  extends Collection<Partial<TType>, TRoot>
  implements _CollectionModel<TType>
{
  constructor(root: _CollectionParamsModel<TRoot>) {
    super(root);
  }

  delete(params: Partial<TType>): void {
    super.remove(params);
  }

  filter(
    cb: (item: Partial<TType>, index: number, values: PartialArrayModel<TType>) => boolean,
    _?: unknown,
  ): PartialArrayModel<TType> {
    return super.filter((x, y) => cb(x, y, []));
  }

  find(
    cb: (item: Partial<TType>, index: number, values: PartialArrayModel<TType>) => boolean,
    _?: unknown,
  ): Partial<TType> | undefined {
    return super.find((x, y) => cb(x, y, []));
  }

  map<TResult>(
    cb: (value: Partial<TType>, index: number, array: PartialArrayModel<TType>) => TResult,
    _?: unknown,
  ): Array<TResult> {
    return super.map((x, y) => cb(x, y, []));
  }

  push(...items: PartialArrayModel<TType>): number {
    super.add(items);
    return super.length + 1;
  }

  slice(start?: number, end?: number): PartialArrayModel<TType> {
    return super.slice(start, end);
  }
}
