import { type DataBoundaryRefModel } from '@lib/frontend/data/components/DataBoundary/DataBoundary.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type SavedPaymentMethodInputPropsModel = ValuePropsModel<PartialModel<PaymentMethodModel>>;

export type SavedPaymentMethodInputRefModel = DataBoundaryRefModel<
  OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel, UserModel>
>;
