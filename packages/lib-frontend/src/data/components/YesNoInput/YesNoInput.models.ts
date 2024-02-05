import { type IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export type YesNoInputPropsModel = InputPropsModel<boolean> & {
  falseIcon?: IconPropsModel['icon'];
  falseLabel?: TranslatableTextModel;
  trueIcon?: IconPropsModel['icon'];
  trueLabel?: TranslatableTextModel;
};

export type YesNoInputRefModel = InputRefModel<boolean>;
