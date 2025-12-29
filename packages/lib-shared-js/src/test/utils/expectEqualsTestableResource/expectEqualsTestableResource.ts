import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';
import { type InferModel, type StringKeyModel } from '@lib/shared/core/core.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { expectEquals } from '@lib/shared/test/utils/expectEquals/expectEquals';
import {
  type ExpectEqualsTestableResourceModel,
  type ExpectEqualsTestableResourceParamsModel,
} from '@lib/shared/test/utils/expectEqualsTestableResource/expectEqualsTestableResource.models';
import zip from 'lodash/zip';

export const expectEqualsTestableResource = <TType extends TestableResourceModel>(
  ...[x, y, options]: ExpectEqualsTestableResourceParamsModel<TType>
): ExpectEqualsTestableResourceModel => {
  let [xF, yF] = [JSON.parse(stringify(x)), JSON.parse(stringify(y))];
  const exclude = [
    ...(options?.exclude ?? []),
    '_id',
    'created',
    'date',
    'id',
    'rootManyToOne',
    'rootManyToMany',
  ] as Array<StringKeyModel<InferModel<TType>>>;
  if (isArray(xF) && isArray(yF)) {
    xF = sort(xF as Array<TType>, ['_id']);
    yF = sort(yF as Array<TType>, ['_id']);
    zip(xF, yF).forEach((v) => {
      expectEquals(cleanObject(v[0]) as TType, cleanObject(v[1]) as TType, { ...options, exclude });
    });
  } else {
    expectEquals(cleanObject(xF) as TType, cleanObject(yF) as TType, { ...options, exclude });
  }
};
