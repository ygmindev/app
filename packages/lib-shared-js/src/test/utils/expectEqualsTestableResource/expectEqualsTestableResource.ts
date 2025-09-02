import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';
import { type InferModel, type StringKeyModel } from '@lib/shared/core/core.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { expectEquals } from '@lib/shared/test/utils/expectEquals/expectEquals';
import {
  type ExpectEqualsTestableResourceModel,
  type ExpectEqualsTestableResourceParamsModel,
} from '@lib/shared/test/utils/expectEqualsTestableResource/expectEqualsTestableResource.models';
import zip from 'lodash/zip';

export const expectEqualsTestableResource = <TType extends TestableResourceModel>(
  ...[x, y, options]: ExpectEqualsTestableResourceParamsModel<TType>
): ExpectEqualsTestableResourceModel => {
  const exclude = [
    ...(options?.exclude ?? []),
    '_id',
    'created',
    'date',
    'id',
    'relatedOneToMany',
    'relatedManyToMany',
  ] as Array<StringKeyModel<InferModel<TType>>>;
  if (isArray(x) && isArray(y)) {
    const xF = sort(x, ['_id']);
    const yF = sort(y, ['_id']);
    zip(xF, yF).forEach((v) => {
      expectEquals(v[0] as TType, v[1] as TType, { ...options, exclude });
    });
  } else {
    expectEquals(x as TType, y as TType, { ...options, exclude });
  }
};
