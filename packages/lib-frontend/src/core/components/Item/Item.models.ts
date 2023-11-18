import { type ReactElement } from 'react';

import { type WithIconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type TextPropsModel } from '#lib-frontend/core/components/Text/Text.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export type ItemPropsModel = ChildrenPropsModel<ReactElement | TranslatableTextModel> &
  WithIconPropsModel &
  Pick<TextPropsModel, 'color' | 'type'> & {
    image?: string;
    label?: ReactElement | TranslatableTextModel;
    rightElement?: ReactElement;
  };
