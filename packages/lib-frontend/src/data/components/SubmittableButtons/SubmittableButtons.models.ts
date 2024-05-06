import { type AsyncTextModel, type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type SubmittablePropsModel } from '@lib/frontend/data/data.models';

export type SubmittableButtonsPropsModel<TType> = ElementStatePropsModel &
  Pick<SubmittablePropsModel<TType>, 'onCancel'> & {
    cancelLabel?: AsyncTextModel;
    onSubmit(): Promise<void>;
    submitLabel?: AsyncTextModel;
  };
