import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type OrderFormModel } from '@lib/shared/commerce/resources/Order/Order.models';

export type ProductFormPropsModel = FormStepPropsModel<OrderFormModel, ProductFormStepModel>;

export type ProductFormStepModel = Pick<OrderFormModel, 'products'>;
