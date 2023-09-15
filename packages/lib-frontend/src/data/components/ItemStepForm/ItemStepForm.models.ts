import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type PartialModel, type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type ItemStepFormPropsModel<TType, TStep extends PartialModel<TType>> = WithIdModel<
  StringKeyModel<TType>
> &
  FormStepPropsModel<TType, TStep> & {
    message?: TranslatableTextModel;
    options: Array<TranslatableOptionModel>;
  };
