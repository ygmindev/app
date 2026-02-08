import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';

export type YesNoInputPropsModel = InputPropsModel<boolean> & {
  falseIcon?: IconPropsModel['icon'];
  falseLabel?: AsyncTextModel;
  trueIcon?: IconPropsModel['icon'];
  trueLabel?: AsyncTextModel;
};

export type YesNoInputRefModel = InputRefModel<boolean>;
