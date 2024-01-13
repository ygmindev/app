import { type ElementStatePropsModel } from '@lib-frontend/core/core.models';
import { type SubmittablePropsModel } from '@lib-frontend/data/data.models';
import { type TranslatableTextModel } from '@lib-frontend/locale/locale.models';

export type SubmittableButtonsPropsModel<TType> = ElementStatePropsModel &
  Pick<SubmittablePropsModel<TType>, 'onCancel'> & {
    cancelLabel?: TranslatableTextModel;
    onSubmit(): Promise<void>;
    submitLabel?: TranslatableTextModel;
  };
