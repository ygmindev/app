import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
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
    return { ...dataF, _id, created: dataF.created ?? new DateTime(), isFixture: true } as TType;
  });
  return (count && count > 1 ? fixtures : fixtures[0]) as GetEntityResourceFixtureModel<
    TType,
    TCount
  >;
};
