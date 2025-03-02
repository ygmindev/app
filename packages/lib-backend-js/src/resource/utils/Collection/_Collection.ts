import {
  type _CollectionModel,
  type _CollectionParamsModel,
} from '@lib/backend/resource/utils/Collection/_Collection.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { Collection } from '@mikro-orm/core';

export class _Collection<TType extends EntityResourceModel, TRoot extends EntityResourceModel>
  extends Collection<TType, TRoot>
  implements _CollectionModel<TType>
{
  constructor(root: _CollectionParamsModel<TRoot>) {
    super(root);
  }

  filter(
    cb: (item: TType, index: number, values: Array<TType>) => boolean,
    _?: unknown,
  ): Array<TType> {
    return super.filter((x, y) => cb(x, y, []));
  }

  find(
    cb: (item: TType, index: number, values: Array<TType>) => boolean,
    _?: unknown,
  ): TType | undefined {
    return super.find((x, y) => cb(x, y, []));
  }

  map<TResult>(
    cb: (value: TType, index: number, array: Array<TType>) => TResult,
    _?: unknown,
  ): Array<TResult> {
    return super.map((x, y) => cb(x, y, []));
  }

  slice(start?: number, end?: number): Array<TType> {
    return super.slice(start, end);
  }
}
