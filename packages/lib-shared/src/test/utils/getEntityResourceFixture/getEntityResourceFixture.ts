import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { generateResourceId } from '@lib/shared/resource/utils/generateResourceId/generateResourceId';
import {
  type GetEntityResourceFixtureModel,
  type GetEntityResourceFixtureParamsModel,
} from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture.models';
import range from 'lodash/range';

export const getEntityResourceFixture = <
  TType extends EntityResourceModel,
  TCount extends undefined | number = undefined,
>({
  count,
  data,
}: GetEntityResourceFixtureParamsModel<TType, TCount>): GetEntityResourceFixtureModel<
  TType,
  TCount
> => {
  const fixtures = range(count ?? 1).map((i) => {
    const _id = generateResourceId();
    const dataF = data({ _id, index: i });
    return { ...dataF, _id, created: new Date(2000, 1, 1) } as TType;
  });
  return (count && count > 1 ? fixtures : fixtures[0]) as GetEntityResourceFixtureModel<
    TType,
    TCount
  >;
};
