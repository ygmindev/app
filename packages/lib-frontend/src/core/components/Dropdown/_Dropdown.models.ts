import type { WithOpenPropsModel } from '@lib/frontend/core/core.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { ReactNode } from 'react';

export interface _DropdownPropsModel
  extends WithStyleParamsModel,
    WithOpenPropsModel,
    WithChildrenPropsModel {
  anchor: ReactNode;
  isFullWidth?: boolean;
  isLeft?: boolean;
  isRight?: boolean;
  isTop?: boolean;
  maxWidth?: number;
}
