import { range } from 'lodash';

import { uid } from '#lib-shared/core/utils/uid/uid';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import {
  type GetEntityResourceFixtureModel,
  type GetEntityResourceFixtureParamsModel,
} from '#lib-shared/test/utils/getEntityResourceFixture/getEntityResourceFixture.models';

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
  const fixtures = range(count ?? 1).map(
    (i) =>
      ({
        ...data(i),
        _id: uid(),
        beforeCreate: (): void => {
          return;
        },
        created: new Date(2000, 1, 1),
      }) as TType,
  );
  return (count && count > 1 ? fixtures : fixtures[0]) as GetEntityResourceFixtureModel<
    TType,
    TCount
  >;
};
