import type { CallableModel } from '@lib/shared/core/core.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import type {
  WithTestModel,
  WithTestParamsModel,
} from '@lib/shared/test/utils/withTest/withTest.models';

export const withTest = <TType extends unknown>({
  displayName,
  target,
}: WithTestParamsModel<CallableModel<TType>>): WithTestModel => {
  const _displayName = displayName || variableName(target) || uid('display-name');
  return { displayName: _displayName };
};
