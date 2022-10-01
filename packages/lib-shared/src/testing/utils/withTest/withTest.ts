import type { CallableModel } from '@lib/shared/core/core.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import type {
  WithTestModel,
  WithTestParamsModel,
} from '@lib/shared/testing/utils/withTest/withTest.models';

export const withTest = <TType>({
  displayName,
  target,
}: WithTestParamsModel<CallableModel<never, TType>>): WithTestModel => {
  const _displayName = displayName || variableName(target) || uid('display-name');
  return { displayName: _displayName };
};
