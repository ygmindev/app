import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface PaymentMethodFormPropsModel extends WithTestIdModel, WithSubmitPropsModel {}

export interface PaymentMethodFormRefModel {
  submit: CallablePromiseModel;
}
