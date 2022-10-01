import type { WithIconModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { ReactNode } from 'react';

export interface ContentPropsModel
  extends WithIconModel,
    WrapperPropsModel,
    WithChildrenPropsModel,
    WithTestIdModel {
  header?: ReactNode;
  isFullSize?: boolean;
  title?: string;
}
