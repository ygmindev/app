import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { ReactElement } from 'react';

export interface LinkPropsModel
  extends Omit<_LinkPropsModel, 'children'>,
    Omit<TextPropsModel, 'children'>,
    WithChildrenPropsModel<TranslatableTextModel | ReactElement> {}

export interface LinkModel extends Pick<IconPropsModel, 'icon'> {
  label: string;
  pathname: string;
}
