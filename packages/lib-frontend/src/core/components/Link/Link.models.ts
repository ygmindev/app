import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';

export interface LinkPropsModel
  extends _LinkPropsModel,
    Omit<TextPropsModel, 'children'>,
    WithChildrenPropsModel {}
