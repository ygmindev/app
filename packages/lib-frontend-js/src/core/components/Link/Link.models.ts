import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { type ReactElement } from 'react';

export type LinkPropsModel = Omit<_LinkPropsModel, 'children'> &
  Omit<TextPropsModel, 'children'> & {
    children?: ReactElement | Array<ReactElement> | AsyncTextModel;
  };
