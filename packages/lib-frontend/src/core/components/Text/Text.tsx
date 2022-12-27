import { _Text } from '@lib/frontend/core/components/Text/_Text';
import type { _TextPropsModel } from '@lib/frontend/core/components/Text/_Text.models';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';

export const textParams: ComposeComponentParamsModel<TextPropsModel, _TextPropsModel> = {
  getComponent: () => _Text,

  stylers: [textStyler],
};

export const Text = composeComponent<TextPropsModel, _TextPropsModel>(textParams);
