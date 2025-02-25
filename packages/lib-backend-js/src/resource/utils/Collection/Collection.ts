import { _Collection } from '@lib/backend/resource/utils/Collection/_Collection';
import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export class Collection<TType extends EntityResourceModel, TRoot extends EntityResourceModel>
  extends _Collection<TType, TRoot>
  implements CollectionModel<TType>
{
  // @ts-expect-error override
  filter(cb: unknown, thisArg?: unknown): Array<TType> {
    // @ts-expect-error override
    return super.filter(cb, thisArg);
  }

  // @ts-expect-error override
  find(cb: unknown, thisArg?: unknown): TType {
    // @ts-expect-error override
    return super.find(cb, thisArg);
  }

  // @ts-expect-error override
  map<TResult>(
    cb: (value: TType, index: number, array: Array<TType>) => TResult,
    thisArg?: unknown,
  ): Array<TResult> {
    // @ts-expect-error override
    return super.map(cb, thisArg);
  }

  // @ts-expect-error override
  slice(start?: number, end?: number): Array<TType> {
    return super.slice(start, end);
  }
}
