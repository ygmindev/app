import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { ReactNode } from 'react';

export interface ContentPropsModel
  extends WithIconPropsModel,
    WrapperPropsModel,
    WithChildrenPropsModel,
    WithTestIdModel {
  isFullSize?: boolean;
  rightElement?: ReactNode;
  title?: string;
}
