import { uid } from '@lib/shared/core/utils/uid/uid';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import type {
  WithTestModel,
  WithTestParamsModel,
} from '@lib/shared/test/utils/withTest/withTest.models';
import isString from 'lodash/isString';

export const withTest = (params: WithTestParamsModel): WithTestModel => {
  const _displayName = isString(params) ? params : params ? variableName(params) : uid('test');
  return { displayName: _displayName };
};
