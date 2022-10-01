import type { WithIconModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { ReactElement } from 'react';

export interface LinkPropsModel
  extends Omit<_LinkPropsModel, 'children'>,
    Omit<TextPropsModel, 'children'>,
    WithChildrenPropsModel<TranslationTextModel | ReactElement> {}

export interface LinkModel extends WithIconModel {
  label: string;
  pathname: string;
}
