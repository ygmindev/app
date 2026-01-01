import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { type IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type SubmittablePropsModel } from '@lib/frontend/data/data.models';
import { type THEME_COLOR } from '@lib/frontend/style/style.constants';

export type SubmittableButtonsPropsModel<TType> = ElementStatePropsModel &
  Pick<ButtonPropsModel, 'size'> &
  Pick<SubmittablePropsModel<TType>, 'onCancel'> & {
    cancelIcon?: IconPropsModel['icon'];
    cancelLabel?: AsyncTextModel;
    elementStateCancel?: ElementStatePropsModel['elementState'];
    elementStateSubmit?: ElementStatePropsModel['elementState'];
    submitColor?: THEME_COLOR;
    submitIcon?: IconPropsModel['icon'];
    submitLabel?: AsyncTextModel;
    submitTooltip?: AsyncTextModel;
    onSubmit(): Promise<void>;
  };
