import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type CategoryInputPropsModel } from '@lib/frontend/core/components/CategoryInput/CategoryInput.models';
import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type PartialModel, type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type ItemStepFormPropsModel<TType, TStep extends PartialModel<TType>> = WithIdModel<
  StringKeyModel<TType>
> &
  Pick<CategoryInputPropsModel, 'emptyLabel' | 'options'> &
  FormStepPropsModel<TType, TStep> & { message?: AsyncTextModel };
