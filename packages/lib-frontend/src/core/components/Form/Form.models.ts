import type { _FormPropsModel } from '@lib/frontend/core/components/Form/_Form.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface FormPropsModel extends _FormPropsModel, WithStyleParamsModel, WithTestIdModel {
  isDisabled?: boolean;
  isFullWidth?: boolean;
  onReset?: CallableModel;
}
