import { type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type SubmittablePropsModel } from '@lib/frontend/data/data.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';

export type SubmittableButtonsPropsModel<TType> = ElementStatePropsModel &
  Pick<SubmittablePropsModel<TType>, 'onCancel'> & {
    cancelLabel?: AsyncTextModel;
    onSubmit(): Promise<void>;
    submitLabel?: AsyncTextModel;
  };
