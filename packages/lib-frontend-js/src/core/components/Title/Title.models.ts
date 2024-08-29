import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type AsyncTextModel, type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';
import { type FontStylerParamsModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import { type ReactElement } from 'react';

export type TitlePropsModel = ElementStatePropsModel &
  WithIconPropsModel &
  ThemeColorPropsModel &
  Pick<FontStylerParamsModel, 'fontStyle'> & {
    description?: AsyncTextModel;
    image?: string;
    leftElement?: ReactElement | null;
    rightElement?: ReactElement | null;
    title?: AsyncTextModel | ReactElement;
  };
