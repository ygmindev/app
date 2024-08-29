import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type OrderFormModel } from '@lib/shared/commerce/resources/Order/Order.models';

export type ProductItemFormPropsModel = FormStepPropsModel<
  OrderFormModel,
  ProductItemFormStepModel
>;

export type ProductItemFormStepModel = Pick<OrderFormModel, 'items'>;
