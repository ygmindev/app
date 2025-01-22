import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type FontStylerParamsModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import { type ReactElement } from 'react';

export type TitlePropsModel = ElementStatePropsModel &
  WithIconPropsModel &
  Pick<TextPropsModel, 'color' | 'colorRole'> &
  Pick<FontStylerParamsModel, 'fontStyle'> & {
    description?: AsyncTextModel | ReactElement;
    image?: string;
    leftElement?: ReactElement | null;
    rightElement?: ReactElement | null;
    title?: AsyncTextModel | ReactElement;
  };
