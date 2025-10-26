import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type SubmittablePropsModel } from '@lib/frontend/data/data.models';

export type SubmittableButtonsPropsModel<TType> = ElementStatePropsModel &
  Pick<ButtonPropsModel, 'size'> &
  Pick<SubmittablePropsModel<TType>, 'onCancel'> & {
    cancelLabel?: AsyncTextModel;
    elementStateCancel?: ElementStatePropsModel['elementState'];
    elementStateSubmit?: ElementStatePropsModel['elementState'];
    submitLabel?: AsyncTextModel;
    submitTooltip?: AsyncTextModel;
    onSubmit(): Promise<void>;
  };
