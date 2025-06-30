import {
  type _CollectionModel,
  type _CollectionParamsModel,
} from '@lib/backend/core/utils/Collection/_Collection.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type EntityResourcePartialModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { Collection } from '@mikro-orm/core';

export class _Collection<TType extends EntityResourceModel, TRoot extends EntityResourceModel>
  extends Collection<EntityResourcePartialModel<TType>, TRoot>
  implements _CollectionModel<TType>
{
  constructor(root: _CollectionParamsModel<TRoot>) {
    super(root);
  }

  push(...items: Array<EntityResourcePartialModel<TType>>): number {
    super.add(items);
    return super.length + 1;
  }

  filter(
    cb: (
      item: EntityResourcePartialModel<TType>,
      index: number,
      values: Array<EntityResourcePartialModel<TType>>,
    ) => boolean,
    _?: unknown,
  ): Array<EntityResourcePartialModel<TType>> {
    return super.filter((x, y) => cb(x, y, []));
  }

  find(
    cb: (
      item: EntityResourcePartialModel<TType>,
      index: number,
      values: Array<EntityResourcePartialModel<TType>>,
    ) => boolean,
    _?: unknown,
  ): EntityResourcePartialModel<TType> | undefined {
    return super.find((x, y) => cb(x, y, []));
  }

  map<TResult>(
    cb: (
      value: EntityResourcePartialModel<TType>,
      index: number,
      array: Array<EntityResourcePartialModel<TType>>,
    ) => TResult,
    _?: unknown,
  ): Array<TResult> {
    return super.map((x, y) => cb(x, y, []));
  }

  delete(params: EntityResourcePartialModel<TType>): void {
    super.remove(params);
  }

  slice(start?: number, end?: number): Array<EntityResourcePartialModel<TType>> {
    return super.slice(start, end);
  }
}
