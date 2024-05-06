import { _Text } from '@lib/frontend/core/components/Text/_Text';
import { type _TextPropsModel } from '@lib/frontend/core/components/Text/_Text.models';
import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const textParams: ComposeComponentParamsModel<
  TextPropsModel,
  _TextPropsModel,
  TextStyleModel
> = {
  Component: _Text,

  stylers: [textStyler],
};

export const Text = composeComponent<TextPropsModel, _TextPropsModel, TextStyleModel>(textParams);

process.env.APP_IS_DEBUG && (Text.displayName = variableName({ Text }));
