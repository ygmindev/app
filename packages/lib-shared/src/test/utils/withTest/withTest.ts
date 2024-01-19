import isString from 'lodash/isString';

import { uid } from '@lib/shared/core/utils/uid/uid';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import {
  type WithTestModel,
  type WithTestParamsModel,
} from '@lib/shared/test/utils/withTest/withTest.models';

export const withTest = (params: WithTestParamsModel): WithTestModel => {
  const displayName = isString(params) ? params : params ? variableName(params) : uid('test');
  return { displayName };
};
