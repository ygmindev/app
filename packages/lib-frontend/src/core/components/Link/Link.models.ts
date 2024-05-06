import { type _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type LinkPropsModel = _LinkPropsModel &
  Omit<TextPropsModel, 'children'> &
  ChildrenPropsModel;
