import { type ItemFieldPropsModel } from '#lib-frontend/core/components/ItemField/ItemField.models';
import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type PartialModel, type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type ItemStepFormPropsModel<TType, TStep extends PartialModel<TType>> = WithIdModel<
  StringKeyModel<TType>
> &
  Pick<ItemFieldPropsModel, 'options'> &
  FormStepPropsModel<TType, TStep> & { message?: TranslatableTextModel };
